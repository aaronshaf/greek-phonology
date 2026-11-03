package com.github.aaronshaf.greekphonology

import com.dylibso.chicory.runtime.ExportFunction
import com.dylibso.chicory.runtime.Instance
import com.dylibso.chicory.wasm.Parser
import java.io.ByteArrayInputStream

/**
 * Host for the MoonBit byte ABI: `in_clear`, `in_push`, `run`, `out_get`.
 * One wasm instance, so callers serialize access.
 */
internal class WasmEngine(wasm: ByteArray) {
    private val instance: Instance
    private val inClear: ExportFunction
    private val inPush: ExportFunction
    private val inPrepare: ExportFunction
    private val inStage: ExportFunction
    private val inFill: ExportFunction
    private val runFn: ExportFunction
    private val outGet: ExportFunction

    init {
        val module = Parser.builder().withValidation(false).build().parse {
            ByteArrayInputStream(wasm)
        }
        instance = Instance.builder(module)
            .withMachineFactory { ScalarSimdMachine(it) }
            .build()
        inClear = instance.export("in_clear")
        inPush = instance.export("in_push")
        inPrepare = instance.export("in_prepare")
        inStage = instance.export("in_stage")
        inFill = instance.export("in_fill")
        runFn = instance.export("run")
        outGet = instance.export("out_get")
    }

    /** Two UTF-8 arguments separated by a 0 byte. [a1] may be empty. */
    fun run(cmd: Int, a0: String, a1: String = ""): String {
        inClear.apply()
        push(a0.toByteArray(Charsets.UTF_8))
        inPush.apply(0)
        push(a1.toByteArray(Charsets.UTF_8))
        return take(cmd)
    }

    /**
     * Raw bytes, no separator. Used for the lexicon blob (command 3).
     * The blob is written into a fresh memory region and copied inside wasm,
     * instead of one host call per byte.
     */
    fun runBytes(cmd: Int, bytes: ByteArray): String {
        val pages = (bytes.size + 65535) / 65536
        inPrepare.apply(bytes.size.toLong())
        val addr = inStage.apply(pages.toLong())[0].toInt()
        if (addr < 0) throw GreekPhonologyException("wasm memory.grow failed")
        instance.memory().write(addr, bytes)
        inFill.apply(addr.toLong(), bytes.size.toLong())
        return take(cmd)
    }

    private fun take(cmd: Int): String {
        val n = runFn.apply(cmd.toLong())[0].toInt()
        if (n < 0) throw GreekPhonologyException("wasm command $cmd returned $n")
        val out = ByteArray(n)
        for (i in 0 until n) {
            out[i] = outGet.apply(i.toLong())[0].toByte()
        }
        return out.toString(Charsets.UTF_8)
    }

    private fun push(bytes: ByteArray) {
        for (b in bytes) {
            inPush.apply((b.toInt() and 0xFF).toLong())
        }
    }
}
