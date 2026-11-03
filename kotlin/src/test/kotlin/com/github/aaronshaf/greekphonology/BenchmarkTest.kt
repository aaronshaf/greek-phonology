package com.github.aaronshaf.greekphonology

import org.junit.Test
import java.io.File

/**
 * Cold start is parse + instantiate + the first ipa() call.
 * Per-call times are the mean after a short warmup.
 */
class BenchmarkTest {
    @Test
    fun coldStartAndCalls() {
        val wasm = GreekPhonology.bundledWasm()
        val t0 = System.nanoTime()
        val greek = GreekPhonology.open(wasm)
        val t1 = System.nanoTime()
        val first = greek.ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine")
        val t2 = System.nanoTime()
        check(first.startsWith("ɛ n"))

        val warmup = listOf("ἄρτος", "λόγος", "θεός", "ἐν ἀρχῇ ἦν ὁ λόγος")
        repeat(30) { greek.ipa(warmup[it % warmup.size], "koine") }

        val ipa = time(200) { greek.ipa(warmup[it % warmup.size], "koine") }
        val respell = time(100) { greek.respell("ἄρτος", "koine") }
        val g2p = time(100) { greek.g2p("θεός", "attic") }
        val distance = time(100) { greek.phoneDistance("ð", "d", "koine", "gracious") }
        val tolerance = time(100) { greek.tolerance("tʰ", "attic", position = "onset") }
        val toleranceWord = time(50) { greek.toleranceWord("θεός", "attic", "x e o s") }
        val syllabify = time(100) { greek.syllabify("ἄνθρωπος") }
        val word = time(100) { greek.word("λόγος") }
        val lex0 = System.nanoTime()
        greek.loadLexicon()
        val lexiconMs = (System.nanoTime() - lex0) / 1e6

        val engineMs = (t1 - t0) / 1e6
        val firstMs = (t2 - t1) / 1e6
        val readyMs = (t2 - t0) / 1e6
        val report = buildString {
            appendLine("engine_ms=$engineMs")
            appendLine("first_ipa_ms=$firstMs")
            appendLine("cold_start_ms=$readyMs")
            appendLine("ipa_mean_ms=${ipa.mean} ipa_best_ms=${ipa.best}")
            appendLine("respell_mean_ms=${respell.mean}")
            appendLine("g2p_mean_ms=${g2p.mean}")
            appendLine("phone_distance_mean_ms=${distance.mean}")
            appendLine("tolerance_mean_ms=${tolerance.mean}")
            appendLine("tolerance_word_mean_ms=${toleranceWord.mean}")
            appendLine("syllabify_mean_ms=${syllabify.mean}")
            appendLine("word_mean_ms=${word.mean}")
            appendLine("lexicon_load_ms=$lexiconMs")
            val slow = readyMs > 1000.0 || ipa.mean > 5.0 || respell.mean > 5.0 || tolerance.mean > 5.0
            appendLine("over_threshold=$slow")
        }
        println(report)
        val out = File("build/benchmark.txt")
        out.parentFile?.mkdirs()
        out.writeText(report)
        greek.close()
    }

    private class Stats(val mean: Double, val best: Double)

    private fun time(n: Int, block: (Int) -> Unit): Stats {
        var sum = 0L
        var best = Long.MAX_VALUE
        repeat(n) {
            val a = System.nanoTime()
            block(it)
            val d = System.nanoTime() - a
            sum += d
            if (d < best) best = d
        }
        return Stats(sum / n / 1e6, best / 1e6)
    }
}
