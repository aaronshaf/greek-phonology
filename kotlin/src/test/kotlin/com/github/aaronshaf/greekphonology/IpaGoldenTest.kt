package com.github.aaronshaf.greekphonology

import org.junit.AfterClass
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.BeforeClass
import org.junit.Test
import java.io.File
import java.util.zip.GZIPInputStream

/** The ipa() snapshot in moonbit/tests/ipa_golden.tsv.gz, against this wasm build. */
class IpaGoldenTest {
    @Test
    fun snapshotMatchesIpa() {
        val file = repoFile("moonbit/tests/ipa_golden.tsv.gz")
        var n = 0
        GZIPInputStream(file.inputStream()).bufferedReader().useLines { lines ->
            for (line in lines) {
                if (line.isEmpty() || line.startsWith("form\t")) continue
                val p = line.split('\t')
                assertEquals(5, p.size)
                assertEquals(p[0], p[1], gp.ipa(p[0], "modern"))
                assertEquals(p[0], p[2], gp.ipa(p[0], "koine"))
                assertEquals(p[0], p[3], gp.ipa(p[0], "attic"))
                assertEquals(p[0], p[4], gp.ipa(p[0], "erasmian"))
                n += 1
            }
        }
        assertTrue(n > 8000)
    }

    companion object {
        private lateinit var gp: GreekPhonology

        @BeforeClass
        @JvmStatic
        fun open() {
            gp = GreekPhonology.open()
        }

        @AfterClass
        @JvmStatic
        fun close() {
            gp.close()
        }
    }
}

internal fun repoFile(relative: String): File {
    var dir = File(System.getProperty("user.dir") ?: error("user.dir is unset"))
    while (true) {
        val candidate = File(dir, relative)
        if (candidate.isFile && File(dir, "moonbit/moon.mod").isFile) return candidate
        dir = dir.parentFile ?: error("repo root not found from ${System.getProperty("user.dir")}")
    }
}
