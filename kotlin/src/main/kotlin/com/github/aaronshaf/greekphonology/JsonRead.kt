package com.github.aaronshaf.greekphonology

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.contentOrNull
import kotlinx.serialization.json.double
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.intOrNull
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

internal val GP_JSON = Json { ignoreUnknownKeys = true }

internal fun parseElement(s: String): JsonElement = GP_JSON.parseToJsonElement(s)

internal fun parseObject(s: String): JsonObject = parseElement(s).jsonObject

internal fun JsonObject.str(key: String): String = this[key]!!.jsonPrimitive.content

internal fun JsonObject.dbl(key: String): Double = this[key]!!.asDouble()

internal fun JsonObject.int(key: String): Int = this[key]!!.asInt()

internal fun JsonObject.bool(key: String): Boolean = this[key]!!.jsonPrimitive.boolean

internal fun JsonObject.arr(key: String): JsonArray = this[key]!!.jsonArray

internal fun JsonObject.obj(key: String): JsonObject = this[key]!!.jsonObject

internal fun JsonElement.asDouble(): Double {
    val p = jsonPrimitive
    return p.doubleOrNull ?: p.content.toDouble()
}

internal fun JsonElement.asInt(): Int {
    val p = jsonPrimitive
    return p.intOrNull ?: p.double.toInt()
}

internal fun JsonElement?.opt(): JsonElement? = if (this == null || this is JsonNull) null else this

internal fun JsonArray.strings(): List<String> = map { it.jsonPrimitive.content }

internal fun JsonElement.stringMatrix(): List<List<String>> =
    jsonArray.map { row -> row.jsonArray.strings() }

internal fun accentOf(el: JsonElement?): AccentMark? {
    val arr = el.opt()?.jsonArray ?: return null
    return AccentMark(arr[0].asInt(), arr[1].jsonPrimitive.content)
}

internal fun boolOrNull(el: JsonElement?): Boolean? {
    val v = el.opt() ?: return null
    return v.jsonPrimitive.booleanOrNull
}

internal fun phoneLabel(o: JsonObject) = PhoneLabel(o.str("say"), o.str("ex"), o.str("kind"))

internal fun phoneDistance(o: JsonObject) = PhoneDistance(
    d = o.dbl("d"),
    sim = o.dbl("sim"),
    tier = o.str("tier"),
    note = o.str("note"),
    advice = o.str("advice"),
    said = phoneLabel(o.obj("said")),
    target = phoneLabel(o.obj("target")),
)

internal fun g2pResult(o: JsonObject) = G2pResult(
    v = o.int("v"),
    scheme = o.str("scheme"),
    lib = o.str("lib"),
    words = o.arr("words").map { w ->
        val word = w.jsonObject
        G2pWord(
            text = word.str("text"),
            form = word.str("form"),
            formUsed = word.str("form_used"),
            phones = word.arr("phones").strings(),
            units = word.arr("units").map { unitOf(it.jsonObject) },
        )
    },
)

private fun unitOf(u: JsonObject) = G2pUnit(
    t = u.str("t"),
    k = u.str("k"),
    ph = u.arr("ph").strings(),
    from = u.int("from"),
    to = u.int("to"),
    restored = u.bool("restored"),
    asp = u["asp"].opt() != null,
    ctx = u["ctx"].opt()?.jsonPrimitive?.contentOrNull,
    alts = u["alts"].opt()?.jsonArray?.map { alt ->
        val a = alt.jsonObject
        G2pAlt(
            heard = a.arr("heard").strings(),
            tier = a.str("tier"),
            d = a.dbl("d"),
            note = a.str("note"),
            src = a.str("src"),
        )
    },
)

internal fun wordInfo(o: JsonObject) = WordInfo(
    syllables = o["syllables"]!!.stringMatrix(),
    accent = accentOf(o["accent"]),
    accentOk = boolOrNull(o["accent_ok"]),
    recessive = accentOf(o["recessive"]),
)

internal fun lookupOf(s: String): LookupResult? {
    if (s == "null") return null
    val o = parseObject(s)
    return LookupResult(
        form = o.str("form"),
        match = o.str("match"),
        nt = o.bool("nt"),
        lxx = o.bool("lxx"),
        freqBand = o.int("freq_band"),
    )
}

internal fun toleranceOf(o: JsonObject) = Tolerance(
    weight = o.dbl("weight"),
    accept = o.arr("accept").strings(),
    rung = o.str("rung"),
    band = o.str("band"),
    n = o.int("n"),
    set = o.str("set"),
    model = o.str("model"),
    sha256 = o.str("sha256"),
    data = o.str("data"),
)

internal fun toleranceWordOf(o: JsonObject) = ToleranceWord(
    v = o.int("v"),
    lib = o.str("lib"),
    data = o.str("data"),
    version = o.int("version"),
    generated = o.str("generated"),
    model = o.str("model"),
    sha256 = o.str("sha256"),
    scheme = o.str("scheme"),
    koine = o.str("koine"),
    words = o.arr("words").map { wordOf(it.jsonObject) },
)

private fun wordOf(w: JsonObject) = TolWord(
    text = w.str("text"),
    phones = w.int("phones"),
    scored = w.int("scored"),
    penalty = w.dbl("penalty"),
    units = w.arr("units").map { unit ->
        val u = unit.jsonObject
        TolUnit(
            t = u.str("t"),
            k = u.str("k"),
            from = u.int("from"),
            to = u.int("to"),
            weight = u.dbl("weight"),
            band = u.str("band"),
            phones = u.arr("phones").map { phoneOf(it.jsonObject) },
            group = u.str("group"),
            groupWeight = u.dbl("group_weight"),
            groupAccept = u.arr("group_accept").strings(),
        )
    },
)

private fun phoneOf(p: JsonObject) = TolPhone(
    phone = p.str("phone"),
    position = p.str("position"),
    stress = p.str("stress"),
    weight = p.dbl("weight"),
    accept = p.arr("accept").strings(),
    rung = p.str("rung"),
    band = p.str("band"),
    miss = p.dbl("miss"),
)

internal fun alignResult(s: String): AlignResult {
    val o = parseObject(s)
    return when {
        o["takes"] != null -> AlignResult.Lanes(
            tokens = o.arr("tokens").map { tokenOf(it.jsonObject) },
            takes = o.arr("takes").map { takeOf(it.jsonObject) },
        )
        o["lp"] != null && o["words"] == null -> AlignResult.Matrix(
            AlignMatrix(
                lp = o.arr("lp").map { it.asDouble() },
                frames = o.int("T"),
                width = o.int("V"),
                secondsPerFrame = o.dbl("spf"),
            ),
        )
        else -> AlignResult.Take(takeOf(o))
    }
}

private fun takeOf(o: JsonObject) = AlignTake(
    words = o.arr("words").map { alignWord(it.jsonObject) },
    overall = o.dbl("overall"),
    overallCredit = o.dbl("overallCredit"),
    overallLevel = o.str("overallLevel"),
    cursorWord = o.int("cursorWord"),
    lastPhone = o.int("lastPhone"),
    attempts = o.int("attempts"),
    tokens = o.arr("tokens").map { tokenOf(it.jsonObject) },
    cost = o.dbl("cost"),
    align = alignPath(o.obj("align")),
    attemptCredit = o.arr("attemptCredit").map { credit ->
        val c = credit.jsonObject
        AttemptCredit(c.int("w"), c.int("att"), c.int("credited"), c.dbl("score"))
    },
)

private fun alignWord(w: JsonObject): AlignWord {
    val ph = w["ph"].opt()
    return AlignWord(
        i = w.int("i"),
        score = w.dbl("score"),
        credit = w.dbl("credit"),
        level = w.str("level"),
        attempts = w.int("attempts"),
        evidence = w.bool("evidence"),
        ph = ph?.jsonArray?.map { hitOf(it.jsonObject) },
        lo = w.int("lo"),
        hi = w.int("hi"),
        t0 = w["t0"].opt()?.asDouble(),
        t1 = w["t1"].opt()?.asDouble(),
    )
}

private fun hitOf(p: JsonObject): AlignPhoneHit {
    val score = p["score"].opt()
    return AlignPhoneHit(
        target = p.str("target"),
        score = score?.asDouble(),
        optional = p["optional"].opt()?.jsonPrimitive?.booleanOrNull ?: false,
        heard = p["heard"].opt()?.jsonPrimitive?.contentOrNull,
        h = p["h"].opt()?.asInt(),
        t0 = p["t0"].opt()?.asDouble(),
        t1 = p["t1"].opt()?.asDouble(),
        shared = p["shared"].opt()?.jsonPrimitive?.booleanOrNull ?: false,
    )
}

private fun tokenOf(t: JsonObject) = AlignToken(
    id = t.int("id"),
    p = t.str("p"),
    t0 = t.dbl("t0"),
    t1 = t.dbl("t1"),
    pk = t.dbl("pk"),
    fr = t.arr("fr").map { it.asInt() },
)

private fun alignPath(o: JsonObject) = AlignPath(
    pairs = o.arr("pairs").map { pair ->
        val p = pair.jsonObject
        AlignPair(
            h = p.int("h"),
            j = p.int("j"),
            att = p.int("att"),
            shared = p["shared"].opt()?.jsonPrimitive?.booleanOrNull ?: false,
        )
    },
    k = o.int("k"),
    cost = o.dbl("cost"),
    atts = o.int("atts"),
    heardN = o.int("heardN"),
)

internal fun jsonString(s: String): String {
    val el = parseElement(s)
    val prim = el as? JsonPrimitive ?: throw GreekPhonologyException("expected a JSON string")
    return prim.content
}
