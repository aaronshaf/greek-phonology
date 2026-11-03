package com.github.aaronshaf.greekphonology

/** English label for one phone (`say` is the respelling piece). */
data class PhoneLabel(
    val say: String,
    val ex: String,
    val kind: String,
)

/** Graded distance. [tier] is `accurate`, `tolerated`, or `not-a-match`. */
data class PhoneDistance(
    val d: Double,
    val sim: Double,
    val tier: String,
    val note: String,
    val advice: String,
    val said: PhoneLabel,
    val target: PhoneLabel,
)

/** Accent position counted from the end (1 = ultima) and the kind. */
data class AccentMark(
    val position: Int,
    val kind: String,
)

/** Syllables, the written accent, the law of limitation, and the recessive accent. */
data class WordInfo(
    val syllables: List<List<String>>,
    val accent: AccentMark?,
    val accentOk: Boolean?,
    val recessive: AccentMark?,
)

data class G2pAlt(
    val heard: List<String>,
    val tier: String,
    val d: Double,
    val note: String,
    val src: String,
)

/** One grapheme. Concatenating [t] across a word gives the typed word back. */
data class G2pUnit(
    val t: String,
    val k: String,
    val ph: List<String>,
    val from: Int,
    val to: Int,
    val restored: Boolean,
    val asp: Boolean = false,
    val ctx: String? = null,
    val alts: List<G2pAlt>? = null,
)

data class G2pWord(
    val text: String,
    val form: String,
    val formUsed: String,
    val phones: List<String>,
    val units: List<G2pUnit>,
)

data class G2pResult(
    val v: Int,
    val scheme: String,
    val lib: String,
    val words: List<G2pWord>,
)

/** A hit in the NT/LXX word list. [match] is `exact`, `fold`, or `bare`. */
data class LookupResult(
    val form: String,
    val match: String,
    val nt: Boolean,
    val lxx: Boolean,
    val freqBand: Int,
)

/**
 * How much a miss of one phone should count for the on-device recognizer.
 * [weight] is 0..=1. 1 trusts a miss fully. [accept] lists hearings that are not a miss.
 * `∅` means the model deleted the phone.
 */
data class Tolerance(
    val weight: Double,
    val accept: List<String>,
    val rung: String,
    val band: String,
    val n: Int,
    val set: String,
    val model: String,
    val sha256: String,
    val data: String,
)

data class TolPhone(
    val phone: String,
    val position: String,
    val stress: String,
    val weight: Double,
    val accept: List<String>,
    val rung: String,
    val band: String,
    /** 0 when the hearing matches or is accepted. -1 when no hearing was passed. */
    val miss: Double,
)

data class TolUnit(
    val t: String,
    val k: String,
    val from: Int,
    val to: Int,
    val weight: Double,
    val band: String,
    val phones: List<TolPhone>,
    val group: String,
    val groupWeight: Double,
    val groupAccept: List<String>,
)

data class TolWord(
    val text: String,
    val phones: Int,
    val scored: Int,
    /** Sum of miss weights, or -1 when nothing was scored. */
    val penalty: Double,
    val units: List<TolUnit>,
)

/** Per-letter tolerance for one reading, plus a penalty when a hearing was passed. */
data class ToleranceWord(
    val v: Int,
    val lib: String,
    val data: String,
    val version: Int,
    val generated: String,
    val model: String,
    val sha256: String,
    val scheme: String,
    val koine: String,
    val words: List<TolWord>,
)

data class AlignPhoneHit(
    val target: String,
    val score: Double?,
    val optional: Boolean = false,
    val heard: String? = null,
    val h: Int? = null,
    val t0: Double? = null,
    val t1: Double? = null,
    val shared: Boolean = false,
)

data class AlignWord(
    val i: Int,
    val score: Double,
    val credit: Double,
    val level: String,
    val attempts: Int,
    val evidence: Boolean,
    val ph: List<AlignPhoneHit>?,
    val lo: Int,
    val hi: Int,
    val t0: Double?,
    val t1: Double?,
)

data class AlignToken(
    val id: Int,
    val p: String,
    val t0: Double,
    val t1: Double,
    val pk: Double,
    val fr: List<Int>,
)

data class AlignPair(
    val h: Int,
    val j: Int,
    val att: Int,
    val shared: Boolean,
)

data class AlignPath(
    val pairs: List<AlignPair>,
    val k: Int,
    val cost: Double,
    val atts: Int,
    val heardN: Int,
)

data class AttemptCredit(
    val w: Int,
    val att: Int,
    val credited: Int,
    val score: Double,
)

data class AlignTake(
    val words: List<AlignWord>,
    val overall: Double,
    val overallCredit: Double,
    val overallLevel: String,
    val cursorWord: Int,
    val lastPhone: Int,
    val attempts: Int,
    val tokens: List<AlignToken>,
    val cost: Double,
    val align: AlignPath,
    val attemptCredit: List<AttemptCredit>,
)

/** Stitched log-posterior matrix, returned when the spec has windows and no lane. */
data class AlignMatrix(
    val lp: List<Double>,
    val frames: Int,
    val width: Int,
    val secondsPerFrame: Double,
)

sealed class AlignResult {
    data class Take(val take: AlignTake) : AlignResult()
    data class Lanes(val tokens: List<AlignToken>, val takes: List<AlignTake>) : AlignResult()
    data class Matrix(val matrix: AlignMatrix) : AlignResult()
}

class GreekPhonologyException(message: String, cause: Throwable? = null) : RuntimeException(message, cause)
