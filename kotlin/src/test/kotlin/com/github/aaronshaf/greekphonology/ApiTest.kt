package com.github.aaronshaf.greekphonology

import org.junit.AfterClass
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.BeforeClass
import org.junit.Test
import kotlin.math.abs
import kotlin.math.ln

class ApiTest {
    @Test
    fun ipaHandExamples() {
        assertEquals("i o s", gp.ipa("υἱός", "modern"))
        assertEquals("y o s", gp.ipa("υἱός", "koine"))
        assertEquals("h y i o s", gp.ipa("υἱός", "attic"))
        assertEquals("h w i o s", gp.ipa("υἱός", "erasmian"))
        assertEquals("tʰ e o s", gp.ipa("θεός", "attic"))
        assertEquals("uː r a n o s", gp.ipa("οὐρανός", "attic"))
        assertEquals("k o z m o s", gp.ipa("κόσμος", "modern"))
        assertEquals("tʰ a l a sː a", gp.ipa("θάλασσα", "attic"))
        assertEquals("ɛ n | a r kʰ e | e n | o | l o ɣ o s", gp.ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine"))
    }

    @Test
    fun respellSamples() {
        val rows = listOf(
            "ἄρτος" to "AR-tos",
            "λόγος" to "LO-ghos",
            "θεός" to "the-OS",
            "ἀγάπη" to "a-GHA-pay",
            "ἄνθρωπος" to "AN-thro-pos",
            "οὐρανός" to "oo-ra-NOS",
            "κύριος" to "KUE-ree-os",
            "υἱός" to "ue-OS",
            "αὐτός" to "af-TOS",
            "εὖ" to "EV",
            "Χριστός" to "khree-STOS",
            "πνεῦμα" to "PNEV-ma",
            "καρδία" to "kar-THEE-a",
            "θάλασσα" to "THA-las-sa",
            "ἄγγελος" to "ANG-ye-los",
            "Μωϋσῆς" to "mo-ue-SAYS",
            "εἰρήνη" to "ee-RAY-nay",
            "πατήρ" to "pa-TAYR",
            "οὐρανοῦ" to "oo-ra-NOO",
            "μαθητής" to "ma-thay-TAYS",
        )
        for ((word, expected) in rows) {
            assertEquals(word, expected, gp.respell(word, "koine"))
        }
        val verse = "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος."
        assertEquals(
            "en ar-KHAY AYN o LO-ghos, KE o LO-ghos AYN PROS TON the-ON, KE the-OS AYN o LO-ghos.",
            gp.respell(verse, "koine"),
        )
        assertEquals("en ar-KHAY AYN o LO-ghos", gp.respell("Ἐν ἀρχῇ ἦν ὁ λόγος", "koine"))
        assertEquals("AN-thro-POS tees", gp.respell("ἄνθρωπός τις", "koine"))
        assertEquals("AR-tos, LO-ghos· the-OS; a-GHA-pay.", gp.respell("ἄρτος, λόγος· θεός; ἀγάπη.", "koine"))
        assertEquals("", gp.respell("ἄρτος", "nope"))
        assertEquals("hello", gp.respell("hello", "koine"))
    }

    @Test
    fun g2pSyllablesAndWord() {
        val g = gp.g2p("αι", "modern")
        assertEquals(1, g.v)
        assertEquals("modern", g.scheme)
        assertEquals("0.5.0", g.lib)
        assertEquals(listOf("e"), g.words.single().phones)
        assertEquals("αι", g.words.single().units.single().t)
        val syl = gp.syllabify("ἄνθρωπος")
        assertEquals(listOf(listOf("α", "ν"), listOf("θ", "ρ", "ω"), listOf("π", "ο", "ς")), syl)
        val info = gp.word("λόγος")
        assertEquals(2, info.syllables.size)
        assertEquals(2, info.accent?.position)
        assertEquals("acute", info.accent?.kind)
        assertEquals(true, info.accentOk)
    }

    @Test
    fun phoneDistanceTiers() {
        for (row in TIER_TABLE) {
            assertEquals(
                "${row.scheme} ${row.target} ${row.heard}",
                row.tier,
                gp.phoneDistance(row.target, row.heard, row.scheme, "gracious").tier,
            )
        }
        val strict = gp.phoneDistance("ð", "d", "", "strict")
        val lenient = gp.phoneDistance("ð", "d", "", "lenient")
        assertEquals("not-a-match", strict.tier)
        assertEquals("tolerated", lenient.tier)
        assertEquals(strict.d, lenient.d, 1e-9)
        assertTrue(abs(gp.phoneDistance("ð", "z", "koine").d - 0.2) < 0.001)
        val same = gp.phoneDistance("β", "v", "koine", "strict")
        assertEquals("accurate", same.tier)
        assertEquals(0.0, same.d, 0.0)
    }

    @Test
    fun toleranceSamples() {
        val onset = gp.tolerance("tʰ", "attic", position = "onset")
        assertEquals(0.004, onset.weight, 1e-9)
        assertEquals("lenient", onset.band)
        assertEquals("position", onset.rung)
        assertEquals(23, onset.n)
        assertEquals(listOf("∅", "t"), onset.accept)
        assertEquals("attic", onset.set)
        assertEquals(
            ONSET_JSON,
            gp.call("tolerance", "tʰ", "attic\u0001onset,"),
        )
        val modern = gp.tolerance("s", "modern", position = "onset")
        assertEquals(0.893, modern.weight, 1e-9)
        assertEquals("strict", modern.band)
        assertEquals("fleurs", modern.set)
        assertEquals(MODERN_JSON, gp.call("tolerance", "s", "modern\u0001onset,"))

        val word = gp.toleranceWord("θεός", "attic", "x e o s")
        assertEquals(0.004, word.words.single().penalty, 1e-9)
        assertEquals(4, word.words.single().scored)
        assertEquals("lenient", word.words.single().units[0].band)
        assertEquals("mixed", word.words.single().units[1].band)
        assertEquals("strict", word.words.single().units[3].band)
        assertEquals(WORD_JSON, gp.call("tolerance_word", "θεός", "attic\u0001x e o s"))

        assertEquals(0.0, gp.toleranceWord("φῶς", "attic", "pʰ o s").words.single().penalty, 0.0)
        assertEquals(0.0, gp.toleranceWord("θεός", "attic", "t e o s").words.single().penalty, 0.0)
        val colour = gp.toleranceWord("θεός", "attic")
        assertEquals(-1.0, colour.words.single().penalty, 0.0)
        assertEquals(
            "θ/lenient tʰ:onset:unstressed ε/mixed e:nucleus:unstressed ό/mixed o:nucleus:stressed ς/strict s:coda:stressed ",
            spots(colour),
        )
        assertEquals(
            "λ/strict l:onset:stressed ό/mixed o:nucleus:stressed γ/strict g:onset:unstressed ο/mixed o:nucleus:unstressed ς/strict s:coda:unstressed ",
            spots(gp.toleranceWord("λόγος", "attic")),
        )
    }

    @Test
    fun alignAndLexicon() {
        val lp0 = ln(0.2)
        val lp1 = ln(0.8)
        val spec = """{"vocab":["","a"],"spf":0.02,"T":1,"V":2,"lp":[$lp0,$lp1],"lane":{"tgt":["a"],"phones":["a"],"start":[0],"wlen":[1]}}"""
        val take = gp.alignPhonesJson(spec) as AlignResult.Take
        assertTrue(take.take.words.single().score >= 80.0)
        assertTrue(take.take.overall >= 80.0)
        assertTrue(take.take.overallLevel.isNotEmpty())

        assertNull(gp.lookup("λόγος"))
        gp.loadLexicon()
        val hit = gp.lookup("λογος")
        assertEquals("λόγος", hit?.form)
        assertEquals(true, hit?.nt)
        assertEquals(true, hit?.lxx)
    }

    private fun spots(word: ToleranceWord): String = buildString {
        for (w in word.words) {
            for (u in w.units) {
                append(u.t).append('/').append(u.band).append(' ')
                for (p in u.phones) {
                    append(p.phone).append(':').append(p.position).append(':').append(p.stress).append(' ')
                }
            }
        }
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

        private data class Tier(val scheme: String, val target: String, val heard: String, val tier: String)

        private val TIER_TABLE = listOf(
            row("koine", "ð", "ð", "accurate"),
            row("koine", "ð", "d", "tolerated"),
            row("koine", "ð", "z", "tolerated"),
            row("koine", "ð", "θ", "tolerated"),
            row("koine", "ð", "v", "not-a-match"),
            row("koine", "ð", "k", "not-a-match"),
            row("koine", "β", "v", "accurate"),
            row("koine", "β", "b", "tolerated"),
            row("koine", "β", "f", "not-a-match"),
            row("koine", "ɛ", "e", "tolerated"),
            row("koine", "o", "ɔ", "accurate"),
            row("koine", "y", "u", "tolerated"),
            row("koine", "y", "i", "tolerated"),
            row("koine", "kʰ", "k", "tolerated"),
            row("koine", "ɣ", "g", "tolerated"),
            row("modern", "ð", "d", "tolerated"),
            row("modern", "ð", "z", "tolerated"),
            row("modern", "θ", "s", "tolerated"),
            row("modern", "θ", "f", "not-a-match"),
            row("modern", "v", "f", "tolerated"),
            row("modern", "v", "b", "not-a-match"),
            row("modern", "o", "ɔ", "accurate"),
            row("modern", "o", "u", "not-a-match"),
            row("modern", "e", "i", "not-a-match"),
            row("modern", "ɣ", "x", "tolerated"),
            row("modern", "s", "z", "tolerated"),
            row("attic", "ɔː", "ɔ", "accurate"),
            row("attic", "ɔː", "o", "tolerated"),
            row("attic", "uː", "u", "accurate"),
            row("attic", "y", "u", "tolerated"),
            row("attic", "tʰ", "t", "tolerated"),
            row("attic", "e", "a", "not-a-match"),
            row("attic", "a", "p", "not-a-match"),
            row("erasmian", "ɪ", "i", "tolerated"),
            row("erasmian", "ɪ", "e", "tolerated"),
            row("erasmian", "ʊ", "u", "tolerated"),
            row("erasmian", "ʊ", "o", "tolerated"),
            row("erasmian", "o", "u", "not-a-match"),
            row("erasmian", "θ", "t", "tolerated"),
            row("erasmian", "x", "k", "tolerated"),
            row("erasmian", "x", "ç", "tolerated"),
            row("erasmian", "j", "i", "tolerated"),
            row("erasmian", "w", "u", "tolerated"),
            row("erasmian", "n", "m", "not-a-match"),
            row("erasmian", "l", "r", "not-a-match"),
        )

        private fun row(scheme: String, target: String, heard: String, tier: String) =
            Tier(scheme, target, heard, tier)

        private const val ONSET_JSON =
            "{\"weight\":0.004,\"accept\":[\"∅\",\"t\"],\"rung\":\"position\",\"band\":\"lenient\",\"n\":23,\"set\":\"attic\",\"model\":\"ft-AC-20mb-lo\",\"sha256\":\"bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd\",\"data\":\"reliability-v1\"}"

        private const val MODERN_JSON =
            "{\"weight\":0.893,\"accept\":[],\"rung\":\"position\",\"band\":\"strict\",\"n\":1096,\"set\":\"fleurs\",\"model\":\"ft-AC-20mb-lo\",\"sha256\":\"bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd\",\"data\":\"reliability-v1\"}"

        private const val WORD_JSON =
            "{\"v\":1,\"lib\":\"0.5.0\",\"data\":\"reliability-v1\",\"version\":1,\"generated\":\"2026-11-02T15:36:41-07:00\",\"model\":\"ft-AC-20mb-lo\",\"sha256\":\"bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd\",\"scheme\":\"attic\",\"koine\":\"no held-out set; Attic rows are used where the phone matches\",\"words\":[{\"text\":\"θεός\",\"phones\":4,\"scored\":4,\"penalty\":0.004,\"units\":[{\"t\":\"θ\",\"k\":\"c\",\"from\":0,\"to\":1,\"weight\":0.004,\"band\":\"lenient\",\"phones\":[{\"phone\":\"tʰ\",\"position\":\"onset\",\"stress\":\"unstressed\",\"weight\":0.004,\"accept\":[\"∅\",\"t\"],\"rung\":\"position\",\"band\":\"lenient\",\"miss\":0.004}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]},{\"t\":\"ε\",\"k\":\"v\",\"from\":1,\"to\":2,\"weight\":0.377,\"band\":\"mixed\",\"phones\":[{\"phone\":\"e\",\"position\":\"nucleus\",\"stress\":\"unstressed\",\"weight\":0.377,\"accept\":[\"∅\",\"ɛ\"],\"rung\":\"stress\",\"band\":\"mixed\",\"miss\":0.000}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]},{\"t\":\"ό\",\"k\":\"v\",\"from\":2,\"to\":3,\"weight\":0.436,\"band\":\"mixed\",\"phones\":[{\"phone\":\"o\",\"position\":\"nucleus\",\"stress\":\"stressed\",\"weight\":0.436,\"accept\":[\"∅\",\"u\"],\"rung\":\"stress\",\"band\":\"mixed\",\"miss\":0.000}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]},{\"t\":\"ς\",\"k\":\"c\",\"from\":3,\"to\":4,\"weight\":0.628,\"band\":\"strict\",\"phones\":[{\"phone\":\"s\",\"position\":\"coda\",\"stress\":\"stressed\",\"weight\":0.628,\"accept\":[],\"rung\":\"position+stress\",\"band\":\"strict\",\"miss\":0.000}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]}]}]}"
    }
}
