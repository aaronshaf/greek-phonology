package com.github.aaronshaf.greekphonology

/**
 * Ancient Greek phonology, running the MoonBit wasm build on Chicory.
 *
 * One instance owns the wasm machine. Calls are serialized. Load the lexicon
 * once if you need [lookup] or accent restoration inside G2P.
 *
 * ```
 * val greek = GreekPhonology.open()
 * greek.ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine")
 * greek.respell("ἄρτος", "koine")
 * greek.tolerance("tʰ", "attic", position = "onset")
 * greek.toleranceWord("θεός", "attic", "x e o s")
 * ```
 */
class GreekPhonology private constructor(
    private val engine: WasmEngine,
) : AutoCloseable {
    private val lock = Any()
    private var lexiconLoaded = false

    /** Greek text to space-separated IPA. Words are separated by `|`. */
    fun ipa(text: String, scheme: String): String = guard {
        engine.run(CMD_IPA, text, scheme)
    }

    /**
     * Phones plus one unit per grapheme. [flags] is a comma list.
     * `alts` and `ctx` are opt-in and do not change [ipa].
     */
    fun g2p(text: String, scheme: String, flags: String = ""): G2pResult = guard {
        val arg1 = if (flags.isEmpty()) scheme else "$scheme\u0001$flags"
        g2pResult(parseObject(engine.run(CMD_G2P, text, arg1)))
    }

    /** Syllables of one word, each syllable a list of letters. */
    fun syllabify(word: String): List<List<String>> = guard {
        parseElement(callRaw("syllabify", word)).stringMatrix()
    }

    /** Syllables, accent, whether the accent obeys the law of limitation, and the recessive accent. */
    fun word(word: String): WordInfo = guard {
        wordInfo(parseObject(engine.run(CMD_WORD, word)))
    }

    /**
     * English-friendly spelling. Hyphenated syllables, every accented syllable in capitals.
     * An unknown scheme returns `""`.
     */
    fun respell(text: String, scheme: String): String = guard {
        jsonString(callRaw("respell", text, scheme))
    }

    /**
     * Graded distance between one target phone and one heard phone.
     * [goal] is `strict`, `gracious` (the default when empty), or `lenient`.
     */
    fun phoneDistance(
        target: String,
        heard: String,
        scheme: String = "",
        goal: String = "",
    ): PhoneDistance = guard {
        phoneDistance(parseObject(callRaw("phone_distance", target, listOf(heard, scheme, goal).joinToString("\u0001"))))
    }

    /**
     * Align a recognizer posterior to target phones. [spec] is the JSON object
     * described by `align_phones`: log-posteriors, vocab, lane, and optional params.
     * Pass the matrix as `lp` numbers or `lpB64` (little-endian float32).
     */
    fun alignPhonesJson(spec: String): AlignResult = guard {
        alignResult(callRaw("align_phones", spec))
    }

    /**
     * Opt-in weight for a miss of [phone]. [position] is `onset`, `nucleus`, or `coda`.
     * [stress] is `stressed` or `unstressed`. Empty skips that slice.
     * Koine and Erasmian use the Attic rows. There is no Koine test set.
     */
    fun tolerance(
        phone: String,
        scheme: String = "",
        position: String = "",
        stress: String = "",
    ): Tolerance = guard {
        toleranceOf(parseObject(callRaw("tolerance", phone, "$scheme\u0001$position,$stress")))
    }

    /**
     * Per-letter weights for [text], and a penalty when [heard] is set.
     * [heard] is space-separated IPA in target-phone order. Empty only colours
     * (penalty is -1). `ipa()` does not call this.
     */
    fun toleranceWord(
        text: String,
        scheme: String = "",
        heard: String = "",
    ): ToleranceWord = guard {
        toleranceWordOf(parseObject(callRaw("tolerance_word", text, "$scheme\u0001$heard")))
    }

    /**
     * Load the NT + LXX word list. The bundled blob is used when [bytes] is omitted.
     * Safe to call again; the previous list is replaced.
     */
    fun loadLexicon(bytes: ByteArray = bundledLexicon()) {
        synchronized(lock) {
            engine.runBytes(CMD_LEXICON, bytes)
            lexiconLoaded = true
        }
    }

    /** Look a form up. Returns null when the lexicon is not loaded or the word is absent. */
    fun lookup(word: String): LookupResult? = guard {
        lookupOf(engine.run(CMD_LOOKUP, word))
    }

    /**
     * Call any library function by name. [arg2] may contain U+0001 when the
     * function takes more than two strings. The result is the raw JSON.
     */
    fun call(name: String, arg: String = "", arg2: String = ""): String = guard {
        callRaw(name, arg, arg2)
    }

    fun lexiconLoaded(): Boolean = synchronized(lock) { lexiconLoaded }

    override fun close() = Unit

    private fun callRaw(name: String, arg: String, arg2: String = ""): String {
        val tail = if (arg2.isEmpty()) arg else "$arg\u0001$arg2"
        return engine.run(CMD_CALL, name, tail)
    }

    private inline fun <T> guard(block: () -> T): T {
        try {
            return synchronized(lock) { block() }
        } catch (e: GreekPhonologyException) {
            throw e
        } catch (e: RuntimeException) {
            throw GreekPhonologyException(e.message ?: "greek-phonology call failed", e)
        }
    }

    companion object {
        private const val CMD_IPA = 1
        private const val CMD_WORD = 2
        private const val CMD_LEXICON = 3
        private const val CMD_LOOKUP = 4
        private const val CMD_CALL = 5
        private const val CMD_G2P = 6

        /** Open the bundled release wasm. */
        fun open(wasm: ByteArray = bundledWasm()): GreekPhonology = GreekPhonology(WasmEngine(wasm))

        fun bundledWasm(): ByteArray = resource("greek-phonology.wasm")

        fun bundledLexicon(): ByteArray = resource("greek-phonology-lexicon.bin")

        private fun resource(name: String): ByteArray {
            val stream = GreekPhonology::class.java.classLoader?.getResourceAsStream(name)
                ?: GreekPhonology::class.java.getResourceAsStream("/$name")
                ?: throw GreekPhonologyException("missing resource $name")
            return stream.use { it.readBytes() }
        }
    }
}
