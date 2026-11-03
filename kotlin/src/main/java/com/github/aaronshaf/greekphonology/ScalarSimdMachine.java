package com.github.aaronshaf.greekphonology;

import com.dylibso.chicory.runtime.BitOps;
import com.dylibso.chicory.runtime.Instance;
import com.dylibso.chicory.runtime.InterpreterMachine;
import com.dylibso.chicory.runtime.MStack;
import com.dylibso.chicory.runtime.StackFrame;
import com.dylibso.chicory.wasm.types.Instruction;
import com.dylibso.chicory.wasm.types.OpCode;
import java.util.Deque;

/**
 * Scalar stand-in for the few SIMD opcodes in the MoonBit wasm build.
 * Chicory's SIMD artifact needs Java 25 and the incubator vector API.
 * No per-instruction allocation: string scans in the lexicon call these a lot.
 */
final class ScalarSimdMachine extends InterpreterMachine {
    ScalarSimdMachine(Instance instance) {
        super(instance);
    }

    @Override
    protected void evalDefault(
            MStack stack,
            Instance instance,
            Deque<StackFrame> callStack,
            Instruction instruction,
            Operands operands) {
        switch (instruction.opcode()) {
            case V128_LOAD:
                v128Load(stack, instance, operands);
                break;
            case V128_STORE:
                v128Store(stack, instance, operands);
                break;
            case V128_AND:
                bitwise(stack, true);
                break;
            case V128_OR:
                bitwise(stack, false);
                break;
            case V128_ANY_TRUE:
                anyTrue(stack);
                break;
            case I16x8_SPLAT:
                splatI16(stack);
                break;
            case I32x4_SPLAT:
                splatI32(stack);
                break;
            case I16x8_EQ:
                cmpI16(stack, true);
                break;
            case I16x8_LE_U:
                cmpI16(stack, false);
                break;
            case I16x8_ADD:
                arithI16(stack, true);
                break;
            case I16x8_SUB:
                arithI16(stack, false);
                break;
            case I16x8_BITMASK:
                bitmaskI16(stack);
                break;
            case I8x16_EQ:
                eqI8(stack);
                break;
            case I8x16_ALL_TRUE:
                allTrueI8(stack);
                break;
            default:
                super.evalDefault(stack, instance, callStack, instruction, operands);
        }
    }

    private static void v128Load(MStack stack, Instance instance, Operands operands) {
        int ptr = readMemPtr(stack, operands);
        var mem = instance.memory((int) operands.get(2));
        long atPtr = mem.readLong(ptr);
        long atNext = mem.readLong(ptr + 8);
        stack.push(atPtr);
        stack.push(atNext);
    }

    private static void v128Store(MStack stack, Instance instance, Operands operands) {
        long top = stack.pop();
        long under = stack.pop();
        long offset = operands.get(1);
        long address = stack.pop();
        int ptr = address >= 0 ? (int) (offset + address) : (int) address;
        var mem = instance.memory((int) operands.get(2));
        mem.writeLong(ptr, under);
        mem.writeLong(ptr + 8, top);
    }

    private static void bitwise(MStack stack, boolean and) {
        long rhsHigh = stack.pop();
        long rhsLow = stack.pop();
        long lhsHigh = stack.pop();
        long lhsLow = stack.pop();
        if (and) {
            stack.push(lhsLow & rhsLow);
            stack.push(lhsHigh & rhsHigh);
        } else {
            stack.push(lhsLow | rhsLow);
            stack.push(lhsHigh | rhsHigh);
        }
    }

    private static void anyTrue(MStack stack) {
        long high = stack.pop();
        long low = stack.pop();
        stack.push(low != 0L || high != 0L ? BitOps.TRUE : BitOps.FALSE);
    }

    private static void splatI16(MStack stack) {
        long lane = stack.pop() & 0xFFFFL;
        long packed = lane | (lane << 16) | (lane << 32) | (lane << 48);
        stack.push(packed);
        stack.push(packed);
    }

    private static void splatI32(MStack stack) {
        long lane = stack.pop() & 0xFFFFFFFFL;
        long packed = lane | (lane << 32);
        stack.push(packed);
        stack.push(packed);
    }

    /** eq when [eq] is true, otherwise unsigned &lt;=. Top of stack is the right-hand vector. */
    private static void cmpI16(MStack stack, boolean eq) {
        long rhsHigh = stack.pop();
        long rhsLow = stack.pop();
        long lhsHigh = stack.pop();
        long lhsLow = stack.pop();
        stack.push(cmpI16Half(lhsLow, rhsLow, eq));
        stack.push(cmpI16Half(lhsHigh, rhsHigh, eq));
    }

    private static long cmpI16Half(long lhs, long rhs, boolean eq) {
        long out = 0L;
        for (int i = 0; i < 4; i++) {
            int a = (int) ((lhs >>> (i * 16)) & 0xFFFF);
            int b = (int) ((rhs >>> (i * 16)) & 0xFFFF);
            int lane = eq ? (a == b ? 0xFFFF : 0) : (a <= b ? 0xFFFF : 0);
            out |= ((long) lane) << (i * 16);
        }
        return out;
    }

    private static void arithI16(MStack stack, boolean add) {
        long rhsHigh = stack.pop();
        long rhsLow = stack.pop();
        long lhsHigh = stack.pop();
        long lhsLow = stack.pop();
        stack.push(arithI16Half(lhsLow, rhsLow, add));
        stack.push(arithI16Half(lhsHigh, rhsHigh, add));
    }

    private static long arithI16Half(long lhs, long rhs, boolean add) {
        long out = 0L;
        for (int i = 0; i < 4; i++) {
            int a = (int) ((lhs >>> (i * 16)) & 0xFFFF);
            int b = (int) ((rhs >>> (i * 16)) & 0xFFFF);
            int lane = (add ? a + b : a - b) & 0xFFFF;
            out |= ((long) lane) << (i * 16);
        }
        return out;
    }

    private static void bitmaskI16(MStack stack) {
        long high = stack.pop();
        long low = stack.pop();
        long bits = 0L;
        for (int i = 0; i < 4; i++) {
            if (((low >>> (i * 16)) & 0x8000L) != 0L) bits |= 1L << i;
            if (((high >>> (i * 16)) & 0x8000L) != 0L) bits |= 1L << (i + 4);
        }
        stack.push(bits);
    }

    private static void eqI8(MStack stack) {
        long rhsHigh = stack.pop();
        long rhsLow = stack.pop();
        long lhsHigh = stack.pop();
        long lhsLow = stack.pop();
        stack.push(eqI8Half(lhsLow, rhsLow));
        stack.push(eqI8Half(lhsHigh, rhsHigh));
    }

    private static long eqI8Half(long lhs, long rhs) {
        long out = 0L;
        for (int i = 0; i < 8; i++) {
            int a = (int) ((lhs >>> (i * 8)) & 0xFF);
            int b = (int) ((rhs >>> (i * 8)) & 0xFF);
            if (a == b) out |= 0xFFL << (i * 8);
        }
        return out;
    }

    private static void allTrueI8(MStack stack) {
        long high = stack.pop();
        long low = stack.pop();
        boolean ok = true;
        for (int i = 0; i < 8 && ok; i++) {
            if (((low >>> (i * 8)) & 0xFFL) == 0L) ok = false;
            if (((high >>> (i * 8)) & 0xFFL) == 0L) ok = false;
        }
        stack.push(ok ? BitOps.TRUE : BitOps.FALSE);
    }
}
