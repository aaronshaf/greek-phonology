function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP39aaronshaf17greek_2dphonology3lib5Phone(param0, param1, param2, param3) {
  this.p = param0;
  this.tag = param1;
  this.w = param2;
  this.u = param3;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB3MapGiRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiUsRPB5ArrayGiEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB5ArrayGUsdEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGiRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiUsRPB5ArrayGiEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGUsdEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsdE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGUsdEEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGUsdEEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsiEE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP39aaronshaf17greek_2dphonology3lib3Tok(param0, param1, param2) {
  this.pre = param0;
  this.core = param1;
  this.post = param2;
}
function _M0TP39aaronshaf17greek_2dphonology3lib5GUnit(param0, param1) {
  this.u = param0;
  this.marks = param1;
}
function _M0TP39aaronshaf17greek_2dphonology3lib8LexEntry(param0, param1) {
  this.form = param0;
  this.flags = param1;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGUsdEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsdEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function $i64_trunc_f64(a) {
  if (Number.isNaN(a)) return 0n;
  if (a >= 9223372036854775807) return 9223372036854775807n;
  if (a <= -9223372036854775808) return 9223372036854775808n;
  return BigInt.asUintN(64, BigInt(Math.trunc(a)));
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TP39aaronshaf17greek_2dphonology3lib9Detection(param0, param1, param2, param3, param4, param5, param6) {
  this.mode = param0;
  this.probs = param1;
  this.loglik = param2;
  this.evidence_tags = param3;
  this.evidence_hits = param4;
  this.evidence_total = param5;
  this.phones = param6;
}
function _M0TP39aaronshaf17greek_2dphonology3lib3GCl(param0, param1, param2, param3, param4) {
  this.b = param0;
  this.rough = param1;
  this.dia = param2;
  this.long = param3;
  this.isub = param4;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUiRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiUsRPB5ArrayGiEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB4Iter4nextN6constrS44GsE = 0;
const _M0MPB4Iter4nextN6constrS45GsE = 0;
const _M0MPB4Iter4nextN6constrS60GcE = 0;
const _M0MPB4Iter4nextN6constrS61GcE = 0;
const _M0MPB4Iter3newN6constrS78GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS84GcE = 0;
const _M0FP39aaronshaf17greek_2dphonology3lib15enclitic__plain = ["μου", "μοι", "με", "σου", "σοι", "σε", "πως", "που", "πη", "ποι", "ποθεν", "ποτε", "γε", "τε", "τοι", "περ", "θην", "νυν", "τις", "τι", "τινος", "τινι", "τινα", "τινες", "τινων", "τισι", "τισιν", "τινας", "εἰμι", "ἐστι", "ἐστιν", "ἐσμεν", "ἐστε", "εἰσι", "εἰσιν", "φημι", "φησι", "φησιν", "φαμεν", "φατε", "φασι", "φασιν"];
const _M0FP39aaronshaf17greek_2dphonology3lib16proclitic__plain = ["ὁ", "ἡ", "οἱ", "αἱ", "ἐν", "εἰς", "ἐκ", "ἐξ", "εἰ", "ὡς", "οὐ", "οὐκ", "οὐχ"];
const _M0FP39aaronshaf17greek_2dphonology3lib14esti__triggers = ["οὐκ", "οὐ", "μη", "εἰ", "ὡς", "και", "ἀλλ’", "ἀλλ'", "τουτ’", "τουτ'", "ὁτι"];
const _M0FP39aaronshaf17greek_2dphonology3lib11eimi__forms = ["εἰμι", "ἐστι", "ἐστιν", "ἐσμεν", "ἐστε", "εἰσι", "εἰσιν", "φημι", "φησι", "φησιν", "φαμεν", "φατε", "φασι", "φασιν"];
const _M0FP39aaronshaf17greek_2dphonology3lib12su__triggers = ["ἐν", "εἰς", "ἐκ", "ἐξ", "προς", "περι", "ὑπερ", "παρα", "ἀπο", "δια", "δι’", "μετα", "μεθ’", "μετ’", "ἐπι", "ἐπ’", "ἐφ’", "κατα", "κατ’", "συν", "ὑπο", "ἀντι", "και", "ἠ"];
const _M0FP39aaronshaf17greek_2dphonology3lib12lex__entries = [];
const _M0FP39aaronshaf17greek_2dphonology3lib10lex__alpha = "́̈̓̔͂ͅΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψωϛ";
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1529 = { _0: "α(α|ε|η)", _1: "α" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1530 = { _0: "αο", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1531 = { _0: "αω", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1532 = { _0: "εα", _1: "η" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1533 = { _0: "εε", _1: "[ει]" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1534 = { _0: "εη", _1: "η" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1535 = { _0: "εο", _1: "[ου]" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1536 = { _0: "εω", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1537 = { _0: "η(α|ε|η)", _1: "η" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1538 = { _0: "ηι", _1: "ῃ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1539 = { _0: "η(ο|ω)", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1540 = { _0: "οα", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1541 = { _0: "οε", _1: "[ου]" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1542 = { _0: "οη", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1543 = { _0: "οο", _1: "[ου]" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1544 = { _0: "οω", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1545 = { _0: "ω(α|ε|η)", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1546 = { _0: "ωι", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1547 = { _0: "ωο", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1548 = { _0: "ωω", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1549 = { _0: "αᾳαι", _1: "ᾳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1550 = { _0: "αει", _1: "ᾳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1551 = { _0: "α[ει]", _1: "α" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1552 = { _0: "αῃ", _1: "ᾳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1553 = { _0: "αοι", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1554 = { _0: "α[ου]", _1: "ω" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1555 = { _0: "αῳ", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1556 = { _0: "εᾳαι", _1: "ῃ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1557 = { _0: "εει", _1: "[ει]" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1558 = { _0: "ε[ει]", _1: "[ει]" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1559 = { _0: "εῃ", _1: "ῃ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1560 = { _0: "εοι", _1: "οι" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1561 = { _0: "ε[ου]", _1: "ου" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1562 = { _0: "εῳ", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1563 = { _0: "ηᾳαι", _1: "ῃ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1564 = { _0: "ηει", _1: "ῃ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1565 = { _0: "η[ει]", _1: "η" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1566 = { _0: "ηῃ", _1: "ῃ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1567 = { _0: "ηοι", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1568 = { _0: "η[ου]", _1: "" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1569 = { _0: "ηῳ", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1570 = { _0: "οᾳαι", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1571 = { _0: "οει", _1: "οι" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1572 = { _0: "ο[ει]", _1: "ου" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1573 = { _0: "οῃ", _1: "οι" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1574 = { _0: "οοι", _1: "οι" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1575 = { _0: "ο[ου]", _1: "ου" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1576 = { _0: "οῳ", _1: "ῳ" };
const _M0FP39aaronshaf17greek_2dphonology3lib15contract__rules = [_M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1529, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1530, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1531, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1532, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1533, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1534, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1535, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1536, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1537, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1538, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1539, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1540, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1541, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1542, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1543, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1544, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1545, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1546, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1547, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1548, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1549, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1550, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1551, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1552, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1553, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1554, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1555, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1556, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1557, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1558, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1559, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1560, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1561, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1562, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1563, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1564, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1565, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1566, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1567, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1568, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1569, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1570, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1571, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1572, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1573, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1574, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1575, _M0FP39aaronshaf17greek_2dphonology3lib15contract__rulesN5tupleS1576];
const _M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes = ["ω", "εις", "ει", "ομεν", "ετε", "ουσι"];
const _M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings = ["ομαι", "ῃ", "εται", "όμεθα", "εσθε", "ονται"];
const _M0FP39aaronshaf17greek_2dphonology3lib18imperfect__endings = ["ον", "ες", "ε", "ομεν", "ετε", "ον"];
const _M0FP39aaronshaf17greek_2dphonology3lib20subjunctive__endings = ["ω", "ῃς", "ῃ", "ωμεν", "ητε", "ωσι"];
const _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab = ["a", "b", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "x", "y", "z", "ð", "ɣ", "θ"];
const _M0FP39aaronshaf17greek_2dphonology3lib9nl__cache = [];
const _M0FP39aaronshaf17greek_2dphonology3lib7schemes = ["modern", "byzantine", "koine", "attic", "erasmian"];
const _M0FP39aaronshaf17greek_2dphonology3lib10non__alpha = [885, 888, 889, 894, 896, 897, 898, 899, 900, 901, 903, 907, 909, 930, 1014, 7958, 7959, 7966, 7967, 8006, 8007, 8014, 8015, 8024, 8026, 8028, 8030, 8062, 8063, 8117, 8125, 8127, 8128, 8129, 8133, 8141, 8142, 8143, 8148, 8149, 8156, 8157, 8158, 8159, 8173, 8174, 8175, 8176, 8177, 8181, 8189, 8190, 8191, 215, 247];
const _M0FP39aaronshaf17greek_2dphonology3lib12phone__names = ["", "a", "e", "i", "o", "u", "y", "ɛ", "ɛː", "ɔː", "eː", "oː", "ɪ", "ʊ", "ɔ", "w", "j", "h", "f", "v", "β", "b", "d", "g", "m", "n", "ŋ", "ʝ", "ɣ", "ç", "x", "z", "ð", "θ", "k", "s", "p", "l", "r", "t", "d͡z", "tʰ", "pʰ", "kʰ", "uː", "aː", "iː", "yː"];
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3429 = 8122;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3430 = 902;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3431 = 8121;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3432 = 8120;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3433 = 7944;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3434 = 7946;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3435 = 8074;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3436 = 7948;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3437 = 8076;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3438 = 7950;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3439 = 8078;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3440 = 8072;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3441 = 7945;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3442 = 7947;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3443 = 8075;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3444 = 7949;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3445 = 8077;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3446 = 7951;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3447 = 8079;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3448 = 8073;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3449 = 8124;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3450 = 8136;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3451 = 904;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3452 = 7960;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3453 = 7962;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3454 = 7964;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3455 = 7961;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3456 = 7963;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3457 = 7965;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3458 = 8138;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3459 = 905;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3460 = 7976;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3461 = 7978;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3462 = 8090;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3463 = 7980;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3464 = 8092;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3465 = 7982;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3466 = 8094;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3467 = 8088;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3468 = 7977;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3469 = 7979;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3470 = 8091;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3471 = 7981;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3472 = 8093;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3473 = 7983;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3474 = 8095;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3475 = 8089;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3476 = 8140;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3477 = 8154;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3478 = 906;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3479 = 8153;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3480 = 8152;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3481 = 938;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3482 = 7992;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3483 = 7994;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3484 = 7996;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3485 = 7998;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3486 = 7993;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3487 = 7995;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3488 = 7997;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3489 = 7999;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3490 = 8184;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3491 = 908;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3492 = 8008;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3493 = 8010;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3494 = 8012;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3495 = 8009;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3496 = 8011;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3497 = 8013;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3498 = 8172;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3499 = 8170;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3500 = 910;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3501 = 8169;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3502 = 8168;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3503 = 939;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3504 = 8025;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3505 = 8027;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3506 = 8029;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3507 = 8031;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3508 = 8186;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3509 = 911;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3510 = 8040;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3511 = 8042;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3512 = 8106;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3513 = 8044;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3514 = 8108;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3515 = 8046;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3516 = 8110;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3517 = 8104;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3518 = 8041;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3519 = 8043;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3520 = 8107;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3521 = 8045;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3522 = 8109;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3523 = 8047;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3524 = 8111;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3525 = 8105;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3526 = 8188;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3527 = 8048;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3528 = 8114;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3529 = 940;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3530 = 8116;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3531 = 8113;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3532 = 8112;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3533 = 7936;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3534 = 7938;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3535 = 8066;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3536 = 7940;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3537 = 8068;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3538 = 7942;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3539 = 8070;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3540 = 8064;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3541 = 7937;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3542 = 7939;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3543 = 8067;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3544 = 7941;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3545 = 8069;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3546 = 7943;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3547 = 8071;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3548 = 8065;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3549 = 8118;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3550 = 8119;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3551 = 8115;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3552 = 8050;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3553 = 941;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3554 = 7952;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3555 = 7954;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3556 = 7956;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3557 = 7953;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3558 = 7955;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3559 = 7957;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3560 = 8052;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3561 = 8130;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3562 = 942;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3563 = 8132;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3564 = 7968;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3565 = 7970;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3566 = 8082;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3567 = 7972;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3568 = 8084;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3569 = 7974;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3570 = 8086;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3571 = 8080;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3572 = 7969;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3573 = 7971;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3574 = 8083;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3575 = 7973;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3576 = 8085;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3577 = 7975;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3578 = 8087;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3579 = 8081;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3580 = 8134;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3581 = 8135;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3582 = 8131;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3583 = 8054;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3584 = 943;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3585 = 8145;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3586 = 8144;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3587 = 970;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3588 = 8146;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3589 = 912;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3590 = 8151;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3591 = 7984;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3592 = 7986;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3593 = 7988;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3594 = 7990;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3595 = 7985;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3596 = 7987;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3597 = 7989;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3598 = 7991;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3599 = 8150;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3600 = 8056;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3601 = 972;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3602 = 8000;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3603 = 8002;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3604 = 8004;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3605 = 8001;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3606 = 8003;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3607 = 8005;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3608 = 8164;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3609 = 8165;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3610 = 8058;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3611 = 973;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3612 = 8161;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3613 = 8160;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3614 = 971;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3615 = 8162;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3616 = 944;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3617 = 8167;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3618 = 8016;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3619 = 8018;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3620 = 8020;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3621 = 8022;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3622 = 8017;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3623 = 8019;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3624 = 8021;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3625 = 8023;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3626 = 8166;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3627 = 8060;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3628 = 8178;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3629 = 974;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3630 = 8180;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3631 = 8032;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3632 = 8034;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3633 = 8098;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3634 = 8036;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3635 = 8100;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3636 = 8038;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3637 = 8102;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3638 = 8096;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3639 = 8033;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3640 = 8035;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3641 = 8099;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3642 = 8037;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3643 = 8101;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3644 = 8039;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3645 = 8103;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3646 = 8097;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3647 = 8182;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3648 = 8183;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3649 = 8179;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3650 = 979;
const _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3651 = 980;
const _M0FP39aaronshaf17greek_2dphonology3api5inbuf = [];
const _M0FP39aaronshaf17greek_2dphonology3api6outbuf = [];
const _M0FP39aaronshaf17greek_2dphonology3lib7softmaxN1sS4460 = 1073741824n;
const _M0FPB4seed = _M0FPB12random__seed();
const _bind = [];
const _M0FP39aaronshaf17greek_2dphonology3lib10ct__phones = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2653 = { _0: "a a", _1: 1984 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2654 = { _0: "a b", _1: 6906 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2655 = { _0: "a d", _1: 5172 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2656 = { _0: "a e", _1: 3705 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2657 = { _0: "a g", _1: 8278 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2658 = { _0: "a i", _1: 115686 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2659 = { _0: "a k", _1: 13336 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2660 = { _0: "a l", _1: 17889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2661 = { _0: "a m", _1: 9714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2662 = { _0: "a n", _1: 49627 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2663 = { _0: "a o", _1: 2319 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2664 = { _0: "a p", _1: 19596 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2665 = { _0: "a r", _1: 23800 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2666 = { _0: "a s", _1: 42793 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2667 = { _0: "a t", _1: 33793 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2668 = { _0: "a u", _1: 44310 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2669 = { _0: "a y", _1: 33 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2670 = { _0: "a z", _1: 1675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2671 = { _0: "b a", _1: 10476 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2672 = { _0: "b d", _1: 737 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2673 = { _0: "b e", _1: 5366 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2674 = { _0: "b i", _1: 1341 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2675 = { _0: "b k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2676 = { _0: "b l", _1: 1171 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2677 = { _0: "b n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2678 = { _0: "b o", _1: 3670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2679 = { _0: "b r", _1: 1363 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2680 = { _0: "b s", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2681 = { _0: "b u", _1: 1554 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2682 = { _0: "b y", _1: 885 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2683 = { _0: "d a", _1: 8157 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2684 = { _0: "d b", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2685 = { _0: "d e", _1: 22558 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2686 = { _0: "d g", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2687 = { _0: "d i", _1: 13205 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2688 = { _0: "d k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2689 = { _0: "d l", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2690 = { _0: "d m", _1: 18 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2691 = { _0: "d n", _1: 21 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2692 = { _0: "d o", _1: 13304 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2693 = { _0: "d r", _1: 3300 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2694 = { _0: "d s", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2695 = { _0: "d t", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2696 = { _0: "d u", _1: 3550 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2697 = { _0: "d y", _1: 3443 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2698 = { _0: "e a", _1: 8021 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2699 = { _0: "e b", _1: 3908 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2700 = { _0: "e d", _1: 6370 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2701 = { _0: "e e", _1: 1243 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2702 = { _0: "e g", _1: 12969 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2703 = { _0: "e i", _1: 14830 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2704 = { _0: "e k", _1: 32065 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2705 = { _0: "e l", _1: 25966 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2706 = { _0: "e m", _1: 20821 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2707 = { _0: "e n", _1: 93412 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2708 = { _0: "e o", _1: 11744 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2709 = { _0: "e p", _1: 32483 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2710 = { _0: "e r", _1: 32451 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2711 = { _0: "e s", _1: 85691 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2712 = { _0: "e t", _1: 34247 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2713 = { _0: "e u", _1: 18296 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2714 = { _0: "e z", _1: 972 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2715 = { _0: "g a", _1: 9693 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2716 = { _0: "g d", _1: 130 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2717 = { _0: "g e", _1: 16628 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2718 = { _0: "g i", _1: 3830 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2719 = { _0: "g l", _1: 444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2720 = { _0: "g m", _1: 1124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2721 = { _0: "g n", _1: 1670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2722 = { _0: "g o", _1: 8947 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2723 = { _0: "g r", _1: 1430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2724 = { _0: "g u", _1: 1263 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2725 = { _0: "g y", _1: 2982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2726 = { _0: "h a", _1: 6874 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2727 = { _0: "h e", _1: 23251 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2728 = { _0: "h i", _1: 3517 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2729 = { _0: "h o", _1: 35474 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2730 = { _0: "h r", _1: 1714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2731 = { _0: "h u", _1: 3069 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2732 = { _0: "h y", _1: 16607 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2733 = { _0: "i a", _1: 22866 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2734 = { _0: "i b", _1: 1734 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2735 = { _0: "i d", _1: 7929 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2736 = { _0: "i e", _1: 12777 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2737 = { _0: "i g", _1: 1785 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2738 = { _0: "i i", _1: 95 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2739 = { _0: "i k", _1: 11658 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2740 = { _0: "i l", _1: 7361 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2741 = { _0: "i m", _1: 4914 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2742 = { _0: "i n", _1: 21641 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2743 = { _0: "i o", _1: 27743 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2744 = { _0: "i p", _1: 2765 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2745 = { _0: "i r", _1: 2017 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2746 = { _0: "i s", _1: 34206 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2747 = { _0: "i t", _1: 5377 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2748 = { _0: "i u", _1: 8902 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2749 = { _0: "i y", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2750 = { _0: "i z", _1: 1531 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2751 = { _0: "k a", _1: 100084 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2752 = { _0: "k b", _1: 179 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2753 = { _0: "k d", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2754 = { _0: "k e", _1: 18955 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2755 = { _0: "k g", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2756 = { _0: "k i", _1: 5379 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2757 = { _0: "k k", _1: 186 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2758 = { _0: "k l", _1: 4114 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2759 = { _0: "k m", _1: 361 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2760 = { _0: "k n", _1: 911 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2761 = { _0: "k o", _1: 16224 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2762 = { _0: "k p", _1: 377 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2763 = { _0: "k r", _1: 7507 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2764 = { _0: "k s", _1: 14459 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2765 = { _0: "k t", _1: 4060 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2766 = { _0: "k u", _1: 4673 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2767 = { _0: "k y", _1: 12618 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2768 = { _0: "k z", _1: 110 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2769 = { _0: "l a", _1: 15835 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2770 = { _0: "l b", _1: 40 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2771 = { _0: "l d", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2772 = { _0: "l e", _1: 33523 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2773 = { _0: "l g", _1: 107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2774 = { _0: "l i", _1: 7493 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2775 = { _0: "l k", _1: 554 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2776 = { _0: "l m", _1: 1148 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2777 = { _0: "l n", _1: 10 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2778 = { _0: "l o", _1: 15176 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2779 = { _0: "l p", _1: 2123 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2780 = { _0: "l r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2781 = { _0: "l s", _1: 68 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2782 = { _0: "l t", _1: 3693 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2783 = { _0: "l u", _1: 2719 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2784 = { _0: "l y", _1: 2880 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2785 = { _0: "l z", _1: 8 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2786 = { _0: "m a", _1: 21986 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2787 = { _0: "m b", _1: 1129 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2788 = { _0: "m d", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2789 = { _0: "m e", _1: 36023 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2790 = { _0: "m i", _1: 7027 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2791 = { _0: "m k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2792 = { _0: "m l", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2793 = { _0: "m n", _1: 1458 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2794 = { _0: "m o", _1: 16881 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2795 = { _0: "m p", _1: 2806 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2796 = { _0: "m r", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2797 = { _0: "m s", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2798 = { _0: "m t", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2799 = { _0: "m u", _1: 7919 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2800 = { _0: "m y", _1: 421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2801 = { _0: "m z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2802 = { _0: "n a", _1: 19025 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2803 = { _0: "n d", _1: 2572 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2804 = { _0: "n e", _1: 25378 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2805 = { _0: "n g", _1: 2346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2806 = { _0: "n i", _1: 5049 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2807 = { _0: "n k", _1: 1715 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2808 = { _0: "n m", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2809 = { _0: "n o", _1: 21753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2810 = { _0: "n p", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2811 = { _0: "n r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2812 = { _0: "n s", _1: 20 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2813 = { _0: "n t", _1: 25334 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2814 = { _0: "n u", _1: 3467 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2815 = { _0: "n y", _1: 1914 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2816 = { _0: "n z", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2817 = { _0: "o a", _1: 1234 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2818 = { _0: "o b", _1: 2593 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2819 = { _0: "o d", _1: 4789 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2820 = { _0: "o e", _1: 1929 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2821 = { _0: "o g", _1: 4182 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2822 = { _0: "o i", _1: 64281 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2823 = { _0: "o k", _1: 7026 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2824 = { _0: "o l", _1: 10018 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2825 = { _0: "o m", _1: 15651 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2826 = { _0: "o n", _1: 102982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2827 = { _0: "o o", _1: 343 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2828 = { _0: "o p", _1: 11739 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2829 = { _0: "o r", _1: 11081 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2830 = { _0: "o s", _1: 65118 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2831 = { _0: "o t", _1: 16628 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2832 = { _0: "o u", _1: 84 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2833 = { _0: "o y", _1: 923 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2834 = { _0: "o z", _1: 253 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2835 = { _0: "p a", _1: 27714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2836 = { _0: "p e", _1: 25870 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2837 = { _0: "p i", _1: 14774 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2838 = { _0: "p l", _1: 3997 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2839 = { _0: "p n", _1: 1287 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2840 = { _0: "p o", _1: 34505 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2841 = { _0: "p p", _1: 46 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2842 = { _0: "p r", _1: 15509 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2843 = { _0: "p s", _1: 7454 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2844 = { _0: "p t", _1: 5188 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2845 = { _0: "p u", _1: 2502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2846 = { _0: "p y", _1: 3943 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2847 = { _0: "p z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2848 = { _0: "r a", _1: 27284 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2849 = { _0: "r b", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2850 = { _0: "r d", _1: 1520 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2851 = { _0: "r e", _1: 17123 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2852 = { _0: "r g", _1: 2849 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2853 = { _0: "r i", _1: 26768 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2854 = { _0: "r k", _1: 3547 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2855 = { _0: "r l", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2856 = { _0: "r m", _1: 1115 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2857 = { _0: "r n", _1: 653 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2858 = { _0: "r o", _1: 31460 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2859 = { _0: "r p", _1: 893 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2860 = { _0: "r s", _1: 753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2861 = { _0: "r t", _1: 3895 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2862 = { _0: "r u", _1: 3765 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2863 = { _0: "r y", _1: 2622 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2864 = { _0: "r z", _1: 14 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2865 = { _0: "s a", _1: 30017 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2866 = { _0: "s b", _1: 493 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2867 = { _0: "s d", _1: 213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2868 = { _0: "s e", _1: 35756 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2869 = { _0: "s g", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2870 = { _0: "s i", _1: 20610 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2871 = { _0: "s k", _1: 7029 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2872 = { _0: "s l", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2873 = { _0: "s m", _1: 2915 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2874 = { _0: "s n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2875 = { _0: "s o", _1: 17371 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2876 = { _0: "s p", _1: 3430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2877 = { _0: "s r", _1: 3072 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2878 = { _0: "s t", _1: 25995 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2879 = { _0: "s u", _1: 10592 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2880 = { _0: "s y", _1: 9593 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2881 = { _0: "t a", _1: 55364 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2882 = { _0: "t b", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2883 = { _0: "t d", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2884 = { _0: "t e", _1: 91458 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2885 = { _0: "t g", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2886 = { _0: "t i", _1: 22577 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2887 = { _0: "t k", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2888 = { _0: "t l", _1: 463 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2889 = { _0: "t m", _1: 573 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2890 = { _0: "t n", _1: 1444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2891 = { _0: "t o", _1: 90205 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2892 = { _0: "t p", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2893 = { _0: "t r", _1: 11889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2894 = { _0: "t s", _1: 70 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2895 = { _0: "t t", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2896 = { _0: "t u", _1: 37853 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2897 = { _0: "t y", _1: 5491 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2898 = { _0: "t z", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2899 = { _0: "u a", _1: 496 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2900 = { _0: "u b", _1: 251 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2901 = { _0: "u d", _1: 3521 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2902 = { _0: "u e", _1: 1943 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2903 = { _0: "u g", _1: 280 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2904 = { _0: "u i", _1: 1669 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2905 = { _0: "u k", _1: 6825 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2906 = { _0: "u l", _1: 3428 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2907 = { _0: "u m", _1: 2735 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2908 = { _0: "u n", _1: 3777 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2909 = { _0: "u o", _1: 1533 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2910 = { _0: "u p", _1: 639 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2911 = { _0: "u r", _1: 3080 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2912 = { _0: "u s", _1: 27920 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2913 = { _0: "u t", _1: 47306 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2914 = { _0: "u u", _1: 243 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2915 = { _0: "u z", _1: 36 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2916 = { _0: "y a", _1: 196 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2917 = { _0: "y b", _1: 259 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2918 = { _0: "y d", _1: 874 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2919 = { _0: "y e", _1: 419 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2920 = { _0: "y g", _1: 1596 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2921 = { _0: "y i", _1: 5805 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2922 = { _0: "y k", _1: 2911 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2923 = { _0: "y l", _1: 3593 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2924 = { _0: "y m", _1: 7938 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2925 = { _0: "y n", _1: 11032 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2926 = { _0: "y o", _1: 1247 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2927 = { _0: "y p", _1: 6908 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2928 = { _0: "y r", _1: 13415 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2929 = { _0: "y s", _1: 5126 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2930 = { _0: "y t", _1: 1326 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2931 = { _0: "y u", _1: 43 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2932 = { _0: "y z", _1: 61 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2933 = { _0: "z d", _1: 6913 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N7_2abindS2934 = [_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2653, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2654, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2655, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2656, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2657, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2658, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2659, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2660, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2661, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2662, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2663, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2664, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2665, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2666, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2667, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2668, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2669, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2670, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2671, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2672, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2673, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2674, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2675, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2676, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2677, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2678, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2679, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2680, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2681, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2682, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2683, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2684, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2685, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2686, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2687, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2688, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2689, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2690, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2691, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2692, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2693, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2694, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2695, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2696, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2697, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2698, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2699, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2700, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2701, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2702, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2703, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2704, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2705, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2706, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2707, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2708, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2709, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2710, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2711, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2712, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2713, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2714, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2715, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2716, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2717, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2718, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2719, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2720, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2721, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2722, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2723, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2724, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2725, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2726, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2727, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2728, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2729, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2730, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2731, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2732, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2733, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2734, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2735, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2736, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2737, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2738, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2739, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2740, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2741, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2742, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2743, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2744, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2745, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2746, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2747, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2748, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2749, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2750, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2751, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2752, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2753, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2754, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2755, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2756, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2757, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2758, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2759, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2760, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2761, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2762, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2763, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2764, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2765, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2766, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2767, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2768, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2769, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2770, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2771, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2772, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2773, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2774, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2775, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2776, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2777, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2778, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2779, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2780, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2781, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2782, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2783, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2784, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2785, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2786, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2787, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2788, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2789, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2790, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2791, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2792, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2793, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2794, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2795, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2796, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2797, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2798, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2799, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2800, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2801, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2802, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2803, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2804, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2805, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2806, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2807, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2808, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2809, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2810, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2811, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2812, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2813, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2814, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2815, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2816, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2817, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2818, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2819, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2820, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2821, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2822, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2823, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2824, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2825, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2826, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2827, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2828, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2829, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2830, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2831, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2832, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2833, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2834, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2835, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2836, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2837, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2838, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2839, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2840, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2841, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2842, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2843, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2844, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2845, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2846, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2847, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2848, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2849, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2850, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2851, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2852, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2853, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2854, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2855, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2856, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2857, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2858, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2859, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2860, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2861, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2862, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2863, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2864, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2865, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2866, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2867, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2868, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2869, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2870, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2871, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2872, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2873, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2874, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2875, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2876, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2877, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2878, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2879, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2880, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2881, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2882, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2883, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2884, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2885, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2886, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2887, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2888, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2889, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2890, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2891, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2892, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2893, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2894, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2895, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2896, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2897, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2898, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2899, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2900, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2901, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2902, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2903, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2904, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2905, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2906, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2907, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2908, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2909, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2910, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2911, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2912, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2913, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2914, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2915, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2916, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2917, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2918, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2919, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2920, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2921, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2922, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2923, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2924, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2925, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2926, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2927, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2928, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2929, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2930, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2931, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2932, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N5tupleS2933];
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3N7_2abindS2934, 0, 281), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2352 = { _0: "a a", _1: 1982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2353 = { _0: "a e", _1: 3673 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2354 = { _0: "a f", _1: 40265 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2355 = { _0: "a i", _1: 238 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2356 = { _0: "a k", _1: 13338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2357 = { _0: "a l", _1: 17889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2358 = { _0: "a m", _1: 9714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2359 = { _0: "a n", _1: 49627 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2360 = { _0: "a o", _1: 2206 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2361 = { _0: "a p", _1: 19596 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2362 = { _0: "a r", _1: 23800 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2363 = { _0: "a s", _1: 42877 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2364 = { _0: "a t", _1: 33798 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2365 = { _0: "a u", _1: 1092 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2366 = { _0: "a v", _1: 9859 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2367 = { _0: "a y", _1: 146 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2368 = { _0: "a z", _1: 1675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2369 = { _0: "a ð", _1: 5342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2370 = { _0: "a ɣ", _1: 8278 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2371 = { _0: "e a", _1: 5930 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2372 = { _0: "e e", _1: 1210 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2373 = { _0: "e f", _1: 8502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2374 = { _0: "e i", _1: 277 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2375 = { _0: "e k", _1: 32033 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2376 = { _0: "e l", _1: 23727 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2377 = { _0: "e m", _1: 20976 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2378 = { _0: "e n", _1: 88771 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2379 = { _0: "e o", _1: 14552 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2380 = { _0: "e p", _1: 26860 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2381 = { _0: "e r", _1: 30563 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2382 = { _0: "e s", _1: 72132 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2383 = { _0: "e t", _1: 33010 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2384 = { _0: "e u", _1: 2592 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2385 = { _0: "e v", _1: 11557 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2386 = { _0: "e y", _1: 620 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2387 = { _0: "e z", _1: 947 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2388 = { _0: "e ð", _1: 6428 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2389 = { _0: "e ɣ", _1: 13864 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2390 = { _0: "f k", _1: 1163 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2391 = { _0: "f p", _1: 553 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2392 = { _0: "f s", _1: 5615 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2393 = { _0: "f t", _1: 41436 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2394 = { _0: "i a", _1: 23223 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2395 = { _0: "i e", _1: 9286 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2396 = { _0: "i i", _1: 611 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2397 = { _0: "i k", _1: 6360 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2398 = { _0: "i l", _1: 9382 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2399 = { _0: "i m", _1: 3846 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2400 = { _0: "i n", _1: 25653 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2401 = { _0: "i o", _1: 17834 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2402 = { _0: "i p", _1: 8028 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2403 = { _0: "i r", _1: 3883 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2404 = { _0: "i s", _1: 36848 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2405 = { _0: "i t", _1: 6133 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2406 = { _0: "i u", _1: 7193 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2407 = { _0: "i v", _1: 1696 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2408 = { _0: "i y", _1: 1150 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2409 = { _0: "i z", _1: 1413 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2410 = { _0: "i ð", _1: 7106 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2411 = { _0: "i ɣ", _1: 795 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2412 = { _0: "k a", _1: 25752 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2413 = { _0: "k e", _1: 87020 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2414 = { _0: "k i", _1: 11646 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2415 = { _0: "k k", _1: 994 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2416 = { _0: "k l", _1: 4114 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2417 = { _0: "k m", _1: 361 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2418 = { _0: "k n", _1: 911 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2419 = { _0: "k o", _1: 14973 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2420 = { _0: "k p", _1: 377 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2421 = { _0: "k r", _1: 7507 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2422 = { _0: "k s", _1: 14459 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2423 = { _0: "k t", _1: 4060 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2424 = { _0: "k u", _1: 4673 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2425 = { _0: "k v", _1: 179 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2426 = { _0: "k y", _1: 13869 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2427 = { _0: "k z", _1: 110 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2428 = { _0: "k ð", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2429 = { _0: "k ɣ", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2430 = { _0: "l a", _1: 14487 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2431 = { _0: "l e", _1: 30235 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2432 = { _0: "l i", _1: 12129 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2433 = { _0: "l k", _1: 554 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2434 = { _0: "l l", _1: 5212 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2435 = { _0: "l m", _1: 1148 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2436 = { _0: "l n", _1: 10 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2437 = { _0: "l o", _1: 13363 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2438 = { _0: "l p", _1: 2123 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2439 = { _0: "l r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2440 = { _0: "l s", _1: 68 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2441 = { _0: "l t", _1: 3693 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2442 = { _0: "l u", _1: 2719 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2443 = { _0: "l v", _1: 40 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2444 = { _0: "l y", _1: 4693 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2445 = { _0: "l z", _1: 8 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2446 = { _0: "l ð", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2447 = { _0: "l ɣ", _1: 107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2448 = { _0: "m a", _1: 19991 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2449 = { _0: "m e", _1: 36157 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2450 = { _0: "m i", _1: 8888 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2451 = { _0: "m k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2452 = { _0: "m l", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2453 = { _0: "m m", _1: 1421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2454 = { _0: "m n", _1: 1458 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2455 = { _0: "m o", _1: 14031 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2456 = { _0: "m p", _1: 2806 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2457 = { _0: "m r", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2458 = { _0: "m s", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2459 = { _0: "m t", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2460 = { _0: "m u", _1: 7919 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2461 = { _0: "m v", _1: 1129 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2462 = { _0: "m y", _1: 3271 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2463 = { _0: "m z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2464 = { _0: "m ð", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2465 = { _0: "n a", _1: 15338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2466 = { _0: "n e", _1: 27007 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2467 = { _0: "n i", _1: 7107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2468 = { _0: "n k", _1: 1715 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2469 = { _0: "n m", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2470 = { _0: "n n", _1: 1063 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2471 = { _0: "n o", _1: 19009 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2472 = { _0: "n p", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2473 = { _0: "n r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2474 = { _0: "n s", _1: 20 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2475 = { _0: "n t", _1: 25334 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2476 = { _0: "n u", _1: 3467 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2477 = { _0: "n y", _1: 4658 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2478 = { _0: "n z", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2479 = { _0: "n ð", _1: 2572 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2480 = { _0: "n ɣ", _1: 2346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2481 = { _0: "o a", _1: 1230 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2482 = { _0: "o e", _1: 1914 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2483 = { _0: "o i", _1: 418 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2484 = { _0: "o k", _1: 7576 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2485 = { _0: "o l", _1: 10018 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2486 = { _0: "o m", _1: 15654 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2487 = { _0: "o n", _1: 102982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2488 = { _0: "o o", _1: 468 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2489 = { _0: "o p", _1: 11739 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2490 = { _0: "o r", _1: 11083 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2491 = { _0: "o s", _1: 65222 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2492 = { _0: "o t", _1: 16628 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2493 = { _0: "o u", _1: 114 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2494 = { _0: "o v", _1: 2593 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2495 = { _0: "o y", _1: 947 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2496 = { _0: "o z", _1: 378 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2497 = { _0: "o ð", _1: 4961 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2498 = { _0: "o ɣ", _1: 4209 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2499 = { _0: "p a", _1: 25604 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2500 = { _0: "p e", _1: 26176 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2501 = { _0: "p i", _1: 16578 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2502 = { _0: "p l", _1: 3997 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2503 = { _0: "p n", _1: 1287 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2504 = { _0: "p o", _1: 28557 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2505 = { _0: "p p", _1: 513 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2506 = { _0: "p r", _1: 15509 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2507 = { _0: "p s", _1: 7454 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2508 = { _0: "p t", _1: 5188 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2509 = { _0: "p u", _1: 2502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2510 = { _0: "p y", _1: 9891 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2511 = { _0: "p z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2512 = { _0: "r a", _1: 25638 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2513 = { _0: "r e", _1: 16303 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2514 = { _0: "r i", _1: 29234 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2515 = { _0: "r k", _1: 3547 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2516 = { _0: "r l", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2517 = { _0: "r m", _1: 1115 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2518 = { _0: "r n", _1: 653 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2519 = { _0: "r o", _1: 30378 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2520 = { _0: "r p", _1: 893 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2521 = { _0: "r r", _1: 1226 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2522 = { _0: "r s", _1: 753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2523 = { _0: "r t", _1: 3895 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2524 = { _0: "r u", _1: 3765 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2525 = { _0: "r v", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2526 = { _0: "r y", _1: 3704 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2527 = { _0: "r z", _1: 14 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2528 = { _0: "r ð", _1: 1520 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2529 = { _0: "r ɣ", _1: 2849 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2530 = { _0: "s a", _1: 25871 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2531 = { _0: "s e", _1: 34428 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2532 = { _0: "s i", _1: 26084 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2533 = { _0: "s k", _1: 7029 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2534 = { _0: "s l", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2535 = { _0: "s m", _1: 2915 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2536 = { _0: "s n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2537 = { _0: "s o", _1: 15349 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2538 = { _0: "s p", _1: 3430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2539 = { _0: "s r", _1: 3072 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2540 = { _0: "s s", _1: 3237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2541 = { _0: "s t", _1: 25995 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2542 = { _0: "s u", _1: 10592 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2543 = { _0: "s v", _1: 493 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2544 = { _0: "s y", _1: 11615 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2545 = { _0: "s ð", _1: 213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2546 = { _0: "s ɣ", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2547 = { _0: "t a", _1: 41279 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2548 = { _0: "t e", _1: 100122 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2549 = { _0: "t i", _1: 27998 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2550 = { _0: "t k", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2551 = { _0: "t l", _1: 463 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2552 = { _0: "t m", _1: 573 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2553 = { _0: "t n", _1: 1444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2554 = { _0: "t o", _1: 80990 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2555 = { _0: "t p", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2556 = { _0: "t r", _1: 11889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2557 = { _0: "t s", _1: 70 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2558 = { _0: "t t", _1: 338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2559 = { _0: "t u", _1: 37853 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2560 = { _0: "t v", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2561 = { _0: "t y", _1: 14706 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2562 = { _0: "t z", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2563 = { _0: "t ð", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2564 = { _0: "t ɣ", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2565 = { _0: "u a", _1: 62 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2566 = { _0: "u e", _1: 531 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2567 = { _0: "u i", _1: 196 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2568 = { _0: "u k", _1: 5662 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2569 = { _0: "u l", _1: 1971 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2570 = { _0: "u m", _1: 1322 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2571 = { _0: "u n", _1: 3585 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2572 = { _0: "u o", _1: 151 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2573 = { _0: "u p", _1: 86 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2574 = { _0: "u r", _1: 1586 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2575 = { _0: "u s", _1: 22305 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2576 = { _0: "u t", _1: 5870 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2577 = { _0: "u u", _1: 31 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2578 = { _0: "u v", _1: 250 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2579 = { _0: "u z", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2580 = { _0: "u ð", _1: 3068 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2581 = { _0: "u ɣ", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2582 = { _0: "v a", _1: 10048 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2583 = { _0: "v e", _1: 6736 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2584 = { _0: "v i", _1: 3718 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2585 = { _0: "v k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2586 = { _0: "v l", _1: 2628 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2587 = { _0: "v m", _1: 1413 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2588 = { _0: "v n", _1: 203 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2589 = { _0: "v o", _1: 5008 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2590 = { _0: "v r", _1: 2857 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2591 = { _0: "v s", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2592 = { _0: "v u", _1: 1766 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2593 = { _0: "v v", _1: 297 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2594 = { _0: "v y", _1: 929 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2595 = { _0: "v z", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2596 = { _0: "v ð", _1: 1190 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2597 = { _0: "v ɣ", _1: 273 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2598 = { _0: "y a", _1: 675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2599 = { _0: "y e", _1: 3941 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2600 = { _0: "y i", _1: 540 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2601 = { _0: "y k", _1: 7689 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2602 = { _0: "y l", _1: 3811 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2603 = { _0: "y m", _1: 8848 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2604 = { _0: "y n", _1: 11661 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2605 = { _0: "y o", _1: 4467 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2606 = { _0: "y p", _1: 7268 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2607 = { _0: "y r", _1: 13435 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2608 = { _0: "y s", _1: 15855 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2609 = { _0: "y t", _1: 1802 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2610 = { _0: "y u", _1: 1298 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2611 = { _0: "y v", _1: 274 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2612 = { _0: "y y", _1: 1965 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2613 = { _0: "y z", _1: 79 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2614 = { _0: "y ð", _1: 1297 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2615 = { _0: "y ɣ", _1: 1664 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2616 = { _0: "z a", _1: 851 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2617 = { _0: "z e", _1: 2387 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2618 = { _0: "z i", _1: 582 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2619 = { _0: "z k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2620 = { _0: "z l", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2621 = { _0: "z m", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2622 = { _0: "z o", _1: 2489 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2623 = { _0: "z r", _1: 60 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2624 = { _0: "z u", _1: 229 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2625 = { _0: "z y", _1: 232 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2626 = { _0: "ð a", _1: 6287 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2627 = { _0: "ð e", _1: 19425 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2628 = { _0: "ð i", _1: 14388 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2629 = { _0: "ð l", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2630 = { _0: "ð m", _1: 15 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2631 = { _0: "ð n", _1: 21 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2632 = { _0: "ð o", _1: 10522 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2633 = { _0: "ð r", _1: 3240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2634 = { _0: "ð s", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2635 = { _0: "ð t", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2636 = { _0: "ð u", _1: 3321 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2637 = { _0: "ð v", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2638 = { _0: "ð y", _1: 3504 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2639 = { _0: "ð ð", _1: 117 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2640 = { _0: "ð ɣ", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2641 = { _0: "ɣ a", _1: 9501 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2642 = { _0: "ɣ e", _1: 14112 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2643 = { _0: "ɣ i", _1: 6538 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2644 = { _0: "ɣ l", _1: 444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2645 = { _0: "ɣ m", _1: 1124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2646 = { _0: "ɣ n", _1: 1670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2647 = { _0: "ɣ o", _1: 8502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2648 = { _0: "ɣ r", _1: 1430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2649 = { _0: "ɣ u", _1: 1263 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2650 = { _0: "ɣ y", _1: 3427 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2651 = { _0: "ɣ ð", _1: 130 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N7_2abindS2652 = [_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2352, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2353, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2354, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2355, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2356, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2357, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2358, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2359, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2360, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2361, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2362, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2363, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2364, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2365, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2366, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2367, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2368, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2369, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2370, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2371, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2372, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2373, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2374, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2375, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2376, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2377, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2378, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2379, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2380, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2381, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2382, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2383, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2384, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2385, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2386, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2387, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2388, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2389, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2390, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2391, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2392, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2393, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2394, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2395, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2396, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2397, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2398, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2399, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2400, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2401, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2402, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2403, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2404, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2405, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2406, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2407, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2408, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2409, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2410, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2411, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2412, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2413, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2414, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2415, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2416, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2417, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2418, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2419, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2420, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2421, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2422, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2423, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2424, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2425, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2426, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2427, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2428, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2429, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2430, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2431, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2432, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2433, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2434, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2435, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2436, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2437, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2438, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2439, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2440, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2441, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2442, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2443, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2444, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2445, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2446, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2447, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2448, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2449, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2450, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2451, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2452, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2453, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2454, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2455, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2456, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2457, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2458, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2459, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2460, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2461, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2462, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2463, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2464, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2465, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2466, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2467, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2468, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2469, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2470, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2471, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2472, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2473, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2474, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2475, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2476, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2477, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2478, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2479, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2480, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2481, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2482, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2483, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2484, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2485, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2486, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2487, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2488, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2489, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2490, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2491, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2492, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2493, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2494, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2495, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2496, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2497, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2498, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2499, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2500, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2501, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2502, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2503, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2504, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2505, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2506, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2507, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2508, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2509, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2510, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2511, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2512, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2513, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2514, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2515, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2516, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2517, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2518, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2519, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2520, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2521, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2522, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2523, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2524, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2525, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2526, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2527, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2528, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2529, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2530, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2531, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2532, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2533, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2534, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2535, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2536, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2537, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2538, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2539, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2540, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2541, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2542, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2543, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2544, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2545, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2546, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2547, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2548, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2549, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2550, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2551, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2552, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2553, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2554, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2555, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2556, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2557, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2558, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2559, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2560, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2561, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2562, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2563, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2564, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2565, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2566, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2567, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2568, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2569, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2570, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2571, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2572, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2573, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2574, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2575, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2576, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2577, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2578, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2579, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2580, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2581, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2582, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2583, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2584, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2585, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2586, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2587, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2588, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2589, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2590, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2591, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2592, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2593, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2594, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2595, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2596, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2597, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2598, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2599, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2600, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2601, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2602, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2603, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2604, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2605, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2606, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2607, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2608, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2609, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2610, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2611, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2612, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2613, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2614, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2615, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2616, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2617, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2618, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2619, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2620, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2621, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2622, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2623, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2624, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2625, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2626, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2627, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2628, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2629, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2630, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2631, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2632, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2633, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2634, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2635, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2636, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2637, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2638, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2639, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2640, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2641, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2642, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2643, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2644, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2645, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2646, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2647, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2648, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2649, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2650, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N5tupleS2651];
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2N7_2abindS2652, 0, 300), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1951 = { _0: "a a", _1: 1982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1952 = { _0: "a e", _1: 338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1953 = { _0: "a f", _1: 43734 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1954 = { _0: "a i", _1: 3573 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1955 = { _0: "a k", _1: 10848 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1956 = { _0: "a l", _1: 17889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1957 = { _0: "a m", _1: 9714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1958 = { _0: "a n", _1: 49627 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1959 = { _0: "a o", _1: 2206 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1960 = { _0: "a p", _1: 16261 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1961 = { _0: "a r", _1: 23800 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1962 = { _0: "a s", _1: 42877 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1963 = { _0: "a t", _1: 27497 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1964 = { _0: "a u", _1: 1092 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1965 = { _0: "a v", _1: 9725 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1966 = { _0: "a x", _1: 2490 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1967 = { _0: "a y", _1: 146 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1968 = { _0: "a z", _1: 1675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1969 = { _0: "a ð", _1: 5342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1970 = { _0: "a ɣ", _1: 8278 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1971 = { _0: "a θ", _1: 6301 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1972 = { _0: "b a", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1973 = { _0: "b e", _1: 346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1974 = { _0: "b i", _1: 69 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1975 = { _0: "b l", _1: 118 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1976 = { _0: "b n", _1: 18 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1977 = { _0: "b o", _1: 132 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1978 = { _0: "b r", _1: 261 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1979 = { _0: "b t", _1: 158 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1980 = { _0: "b u", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1981 = { _0: "b y", _1: 24 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1982 = { _0: "d a", _1: 5555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1983 = { _0: "d e", _1: 7787 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1984 = { _0: "d i", _1: 3107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1985 = { _0: "d l", _1: 16 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1986 = { _0: "d o", _1: 4739 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1987 = { _0: "d r", _1: 277 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1988 = { _0: "d u", _1: 16 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1989 = { _0: "d y", _1: 43 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1990 = { _0: "e a", _1: 5921 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1991 = { _0: "e e", _1: 588 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1992 = { _0: "e f", _1: 12225 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1993 = { _0: "e i", _1: 824 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1994 = { _0: "e k", _1: 24120 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1995 = { _0: "e l", _1: 14973 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1996 = { _0: "e m", _1: 7409 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1997 = { _0: "e n", _1: 63555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1998 = { _0: "e o", _1: 14506 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1999 = { _0: "e p", _1: 22128 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2000 = { _0: "e r", _1: 23040 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2001 = { _0: "e s", _1: 29752 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2002 = { _0: "e t", _1: 17734 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2003 = { _0: "e u", _1: 2589 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2004 = { _0: "e v", _1: 11166 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2005 = { _0: "e x", _1: 3319 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2006 = { _0: "e y", _1: 620 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2007 = { _0: "e z", _1: 936 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2008 = { _0: "e ð", _1: 5302 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2009 = { _0: "e ɣ", _1: 11469 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2010 = { _0: "e θ", _1: 5197 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2011 = { _0: "f a", _1: 3855 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2012 = { _0: "f e", _1: 2094 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2013 = { _0: "f f", _1: 504 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2014 = { _0: "f i", _1: 4117 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2015 = { _0: "f k", _1: 555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2016 = { _0: "f l", _1: 227 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2017 = { _0: "f n", _1: 49 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2018 = { _0: "f o", _1: 4609 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2019 = { _0: "f p", _1: 69 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2020 = { _0: "f r", _1: 1683 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2021 = { _0: "f s", _1: 5615 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2022 = { _0: "f t", _1: 39832 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2023 = { _0: "f u", _1: 459 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2024 = { _0: "f x", _1: 608 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2025 = { _0: "f y", _1: 3072 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2026 = { _0: "f z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2027 = { _0: "f θ", _1: 3421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2028 = { _0: "g a", _1: 565 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2029 = { _0: "g e", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2030 = { _0: "g i", _1: 101 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2031 = { _0: "g l", _1: 62 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2032 = { _0: "g o", _1: 64 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2033 = { _0: "g r", _1: 122 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2034 = { _0: "g t", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2035 = { _0: "g y", _1: 40 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2036 = { _0: "i a", _1: 23232 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2037 = { _0: "i e", _1: 7084 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2038 = { _0: "i f", _1: 1240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2039 = { _0: "i i", _1: 2888 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2040 = { _0: "i k", _1: 9411 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2041 = { _0: "i l", _1: 18136 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2042 = { _0: "i m", _1: 17413 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2043 = { _0: "i n", _1: 50869 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2044 = { _0: "i o", _1: 17880 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2045 = { _0: "i p", _1: 8042 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2046 = { _0: "i r", _1: 11406 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2047 = { _0: "i s", _1: 79228 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2048 = { _0: "i t", _1: 9644 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2049 = { _0: "i u", _1: 7196 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2050 = { _0: "i v", _1: 1842 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2051 = { _0: "i x", _1: 1543 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2052 = { _0: "i y", _1: 1150 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2053 = { _0: "i z", _1: 1424 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2054 = { _0: "i ð", _1: 8232 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2055 = { _0: "i ɣ", _1: 3190 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2056 = { _0: "i θ", _1: 6568 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2057 = { _0: "k a", _1: 22362 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2058 = { _0: "k e", _1: 78763 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2059 = { _0: "k f", _1: 84 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2060 = { _0: "k i", _1: 9134 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2061 = { _0: "k k", _1: 806 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2062 = { _0: "k l", _1: 3671 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2063 = { _0: "k m", _1: 65 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2064 = { _0: "k n", _1: 617 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2065 = { _0: "k o", _1: 10344 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2066 = { _0: "k p", _1: 293 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2067 = { _0: "k r", _1: 5083 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2068 = { _0: "k s", _1: 14456 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2069 = { _0: "k t", _1: 2656 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2070 = { _0: "k u", _1: 3911 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2071 = { _0: "k v", _1: 178 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2072 = { _0: "k x", _1: 186 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2073 = { _0: "k y", _1: 11908 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2074 = { _0: "k z", _1: 108 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2075 = { _0: "k ð", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2076 = { _0: "k ɣ", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2077 = { _0: "k θ", _1: 49 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2078 = { _0: "l a", _1: 14487 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2079 = { _0: "l e", _1: 18070 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2080 = { _0: "l f", _1: 1522 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2081 = { _0: "l i", _1: 24294 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2082 = { _0: "l k", _1: 469 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2083 = { _0: "l l", _1: 5212 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2084 = { _0: "l m", _1: 1148 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2085 = { _0: "l n", _1: 10 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2086 = { _0: "l o", _1: 13363 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2087 = { _0: "l p", _1: 601 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2088 = { _0: "l r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2089 = { _0: "l s", _1: 68 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2090 = { _0: "l t", _1: 165 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2091 = { _0: "l u", _1: 2719 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2092 = { _0: "l v", _1: 40 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2093 = { _0: "l x", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2094 = { _0: "l y", _1: 4693 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2095 = { _0: "l z", _1: 8 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2096 = { _0: "l ð", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2097 = { _0: "l ɣ", _1: 107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2098 = { _0: "l θ", _1: 3528 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2099 = { _0: "m a", _1: 19991 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2100 = { _0: "m b", _1: 1252 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2101 = { _0: "m e", _1: 26499 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2102 = { _0: "m f", _1: 839 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2103 = { _0: "m i", _1: 18546 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2104 = { _0: "m l", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2105 = { _0: "m m", _1: 1421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2106 = { _0: "m n", _1: 1458 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2107 = { _0: "m o", _1: 14031 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2108 = { _0: "m p", _1: 715 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2109 = { _0: "m r", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2110 = { _0: "m s", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2111 = { _0: "m u", _1: 7919 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2112 = { _0: "m v", _1: 1129 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2113 = { _0: "m x", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2114 = { _0: "m y", _1: 3271 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2115 = { _0: "m z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2116 = { _0: "m ð", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2117 = { _0: "m θ", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2118 = { _0: "n a", _1: 15338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2119 = { _0: "n d", _1: 21646 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2120 = { _0: "n e", _1: 15044 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2121 = { _0: "n f", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2122 = { _0: "n g", _1: 1270 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2123 = { _0: "n i", _1: 19070 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2124 = { _0: "n k", _1: 146 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2125 = { _0: "n m", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2126 = { _0: "n n", _1: 1063 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2127 = { _0: "n o", _1: 19009 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2128 = { _0: "n p", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2129 = { _0: "n r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2130 = { _0: "n s", _1: 20 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2131 = { _0: "n u", _1: 3467 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2132 = { _0: "n x", _1: 299 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2133 = { _0: "n y", _1: 4658 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2134 = { _0: "n z", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2135 = { _0: "n ð", _1: 2572 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2136 = { _0: "n ɣ", _1: 2346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2137 = { _0: "n θ", _1: 3688 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2138 = { _0: "o a", _1: 1230 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2139 = { _0: "o e", _1: 342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2140 = { _0: "o f", _1: 3502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2141 = { _0: "o i", _1: 1990 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2142 = { _0: "o k", _1: 6051 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2143 = { _0: "o l", _1: 10018 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2144 = { _0: "o m", _1: 15654 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2145 = { _0: "o n", _1: 102982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2146 = { _0: "o o", _1: 468 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2147 = { _0: "o p", _1: 8237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2148 = { _0: "o r", _1: 11083 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2149 = { _0: "o s", _1: 65222 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2150 = { _0: "o t", _1: 13226 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2151 = { _0: "o u", _1: 114 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2152 = { _0: "o v", _1: 2593 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2153 = { _0: "o x", _1: 1525 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2154 = { _0: "o y", _1: 947 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2155 = { _0: "o z", _1: 378 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2156 = { _0: "o ð", _1: 4961 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2157 = { _0: "o ɣ", _1: 4209 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2158 = { _0: "o θ", _1: 3402 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2159 = { _0: "p a", _1: 21625 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2160 = { _0: "p e", _1: 18733 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2161 = { _0: "p f", _1: 46 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2162 = { _0: "p i", _1: 17395 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2163 = { _0: "p l", _1: 3652 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2164 = { _0: "p n", _1: 1220 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2165 = { _0: "p o", _1: 23816 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2166 = { _0: "p p", _1: 447 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2167 = { _0: "p r", _1: 13565 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2168 = { _0: "p s", _1: 7454 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2169 = { _0: "p t", _1: 3213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2170 = { _0: "p u", _1: 2041 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2171 = { _0: "p y", _1: 6795 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2172 = { _0: "r a", _1: 25638 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2173 = { _0: "r e", _1: 11967 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2174 = { _0: "r f", _1: 203 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2175 = { _0: "r i", _1: 33570 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2176 = { _0: "r k", _1: 1002 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2177 = { _0: "r l", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2178 = { _0: "r m", _1: 1115 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2179 = { _0: "r n", _1: 653 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2180 = { _0: "r o", _1: 30378 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2181 = { _0: "r p", _1: 690 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2182 = { _0: "r r", _1: 1226 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2183 = { _0: "r s", _1: 753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2184 = { _0: "r t", _1: 3298 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2185 = { _0: "r u", _1: 3765 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2186 = { _0: "r v", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2187 = { _0: "r x", _1: 2545 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2188 = { _0: "r y", _1: 3704 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2189 = { _0: "r z", _1: 14 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2190 = { _0: "r ð", _1: 1520 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2191 = { _0: "r ɣ", _1: 2849 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2192 = { _0: "r θ", _1: 597 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2193 = { _0: "s a", _1: 25871 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2194 = { _0: "s e", _1: 25388 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2195 = { _0: "s f", _1: 1162 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2196 = { _0: "s i", _1: 35124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2197 = { _0: "s k", _1: 4455 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2198 = { _0: "s l", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2199 = { _0: "s m", _1: 2915 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2200 = { _0: "s n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2201 = { _0: "s o", _1: 15349 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2202 = { _0: "s p", _1: 2268 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2203 = { _0: "s r", _1: 3072 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2204 = { _0: "s s", _1: 3237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2205 = { _0: "s t", _1: 19555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2206 = { _0: "s u", _1: 10592 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2207 = { _0: "s v", _1: 493 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2208 = { _0: "s x", _1: 2574 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2209 = { _0: "s y", _1: 11615 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2210 = { _0: "s ð", _1: 213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2211 = { _0: "s ɣ", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2212 = { _0: "s θ", _1: 6440 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2213 = { _0: "t a", _1: 29472 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2214 = { _0: "t e", _1: 28500 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2215 = { _0: "t i", _1: 58110 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2216 = { _0: "t l", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2217 = { _0: "t m", _1: 89 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2218 = { _0: "t n", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2219 = { _0: "t o", _1: 71657 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2220 = { _0: "t r", _1: 7918 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2221 = { _0: "t t", _1: 270 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2222 = { _0: "t u", _1: 37240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2223 = { _0: "t y", _1: 10510 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2224 = { _0: "t θ", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2225 = { _0: "u a", _1: 62 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2226 = { _0: "u e", _1: 268 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2227 = { _0: "u f", _1: 51 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2228 = { _0: "u i", _1: 459 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2229 = { _0: "u k", _1: 4610 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2230 = { _0: "u l", _1: 1971 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2231 = { _0: "u m", _1: 1322 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2232 = { _0: "u n", _1: 3585 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2233 = { _0: "u o", _1: 151 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2234 = { _0: "u p", _1: 35 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2235 = { _0: "u r", _1: 1586 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2236 = { _0: "u s", _1: 22305 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2237 = { _0: "u t", _1: 5471 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2238 = { _0: "u u", _1: 31 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2239 = { _0: "u v", _1: 250 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2240 = { _0: "u x", _1: 1052 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2241 = { _0: "u z", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2242 = { _0: "u ð", _1: 3068 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2243 = { _0: "u ɣ", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2244 = { _0: "u θ", _1: 399 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2245 = { _0: "v a", _1: 10048 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2246 = { _0: "v e", _1: 3779 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2247 = { _0: "v i", _1: 6675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2248 = { _0: "v l", _1: 2628 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2249 = { _0: "v m", _1: 1413 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2250 = { _0: "v n", _1: 203 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2251 = { _0: "v o", _1: 5008 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2252 = { _0: "v r", _1: 2857 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2253 = { _0: "v s", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2254 = { _0: "v u", _1: 1766 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2255 = { _0: "v v", _1: 297 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2256 = { _0: "v x", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2257 = { _0: "v y", _1: 929 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2258 = { _0: "v z", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2259 = { _0: "v ð", _1: 1190 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2260 = { _0: "v ɣ", _1: 273 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2261 = { _0: "x a", _1: 2825 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2262 = { _0: "x e", _1: 2567 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2263 = { _0: "x i", _1: 7792 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2264 = { _0: "x l", _1: 381 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2265 = { _0: "x m", _1: 296 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2266 = { _0: "x n", _1: 294 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2267 = { _0: "x o", _1: 4565 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2268 = { _0: "x r", _1: 2302 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2269 = { _0: "x s", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2270 = { _0: "x u", _1: 762 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2271 = { _0: "x v", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2272 = { _0: "x x", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2273 = { _0: "x y", _1: 1921 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2274 = { _0: "x z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2275 = { _0: "x θ", _1: 1348 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2276 = { _0: "y a", _1: 675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2277 = { _0: "y e", _1: 436 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2278 = { _0: "y f", _1: 482 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2279 = { _0: "y i", _1: 4045 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2280 = { _0: "y k", _1: 5960 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2281 = { _0: "y l", _1: 3811 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2282 = { _0: "y m", _1: 8848 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2283 = { _0: "y n", _1: 11661 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2284 = { _0: "y o", _1: 4467 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2285 = { _0: "y p", _1: 6786 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2286 = { _0: "y r", _1: 13435 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2287 = { _0: "y s", _1: 15855 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2288 = { _0: "y t", _1: 1242 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2289 = { _0: "y u", _1: 1298 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2290 = { _0: "y v", _1: 274 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2291 = { _0: "y x", _1: 1729 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2292 = { _0: "y y", _1: 1965 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2293 = { _0: "y z", _1: 79 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2294 = { _0: "y ð", _1: 1297 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2295 = { _0: "y ɣ", _1: 1664 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2296 = { _0: "y θ", _1: 560 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2297 = { _0: "z a", _1: 851 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2298 = { _0: "z e", _1: 973 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2299 = { _0: "z i", _1: 1996 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2300 = { _0: "z k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2301 = { _0: "z l", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2302 = { _0: "z m", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2303 = { _0: "z o", _1: 2489 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2304 = { _0: "z r", _1: 60 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2305 = { _0: "z u", _1: 229 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2306 = { _0: "z y", _1: 232 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2307 = { _0: "ð a", _1: 6287 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2308 = { _0: "ð e", _1: 17486 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2309 = { _0: "ð i", _1: 16327 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2310 = { _0: "ð l", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2311 = { _0: "ð m", _1: 15 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2312 = { _0: "ð n", _1: 21 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2313 = { _0: "ð o", _1: 10522 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2314 = { _0: "ð r", _1: 3240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2315 = { _0: "ð s", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2316 = { _0: "ð t", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2317 = { _0: "ð u", _1: 3321 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2318 = { _0: "ð v", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2319 = { _0: "ð y", _1: 3504 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2320 = { _0: "ð ð", _1: 117 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2321 = { _0: "ð ɣ", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2322 = { _0: "ɣ a", _1: 9501 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2323 = { _0: "ɣ e", _1: 8208 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2324 = { _0: "ɣ i", _1: 12442 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2325 = { _0: "ɣ l", _1: 444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2326 = { _0: "ɣ m", _1: 1124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2327 = { _0: "ɣ n", _1: 1670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2328 = { _0: "ɣ o", _1: 8502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2329 = { _0: "ɣ r", _1: 1430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2330 = { _0: "ɣ u", _1: 1263 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2331 = { _0: "ɣ y", _1: 3427 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2332 = { _0: "ɣ ð", _1: 130 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2333 = { _0: "θ a", _1: 6252 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2334 = { _0: "θ e", _1: 14887 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2335 = { _0: "θ f", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2336 = { _0: "θ i", _1: 15729 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2337 = { _0: "θ l", _1: 440 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2338 = { _0: "θ m", _1: 484 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2339 = { _0: "θ n", _1: 1422 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2340 = { _0: "θ o", _1: 4594 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2341 = { _0: "θ r", _1: 3694 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2342 = { _0: "θ s", _1: 70 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2343 = { _0: "θ u", _1: 597 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2344 = { _0: "θ v", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2345 = { _0: "θ x", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2346 = { _0: "θ y", _1: 4153 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2347 = { _0: "θ z", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2348 = { _0: "θ ð", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2349 = { _0: "θ ɣ", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2350 = { _0: "θ θ", _1: 61 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N7_2abindS2351 = [_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1951, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1952, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1953, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1954, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1955, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1956, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1957, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1958, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1959, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1960, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1961, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1962, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1963, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1964, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1965, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1966, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1967, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1968, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1969, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1970, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1971, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1972, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1973, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1974, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1975, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1976, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1977, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1978, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1979, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1980, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1981, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1982, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1983, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1984, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1985, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1986, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1987, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1988, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1989, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1990, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1991, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1992, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1993, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1994, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1995, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1996, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1997, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1998, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS1999, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2000, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2001, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2002, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2003, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2004, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2005, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2006, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2007, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2008, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2009, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2010, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2011, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2012, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2013, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2014, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2015, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2016, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2017, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2018, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2019, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2020, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2021, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2022, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2023, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2024, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2025, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2026, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2027, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2028, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2029, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2030, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2031, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2032, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2033, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2034, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2035, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2036, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2037, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2038, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2039, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2040, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2041, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2042, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2043, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2044, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2045, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2046, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2047, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2048, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2049, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2050, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2051, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2052, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2053, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2054, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2055, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2056, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2057, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2058, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2059, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2060, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2061, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2062, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2063, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2064, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2065, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2066, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2067, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2068, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2069, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2070, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2071, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2072, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2073, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2074, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2075, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2076, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2077, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2078, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2079, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2080, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2081, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2082, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2083, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2084, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2085, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2086, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2087, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2088, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2089, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2090, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2091, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2092, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2093, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2094, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2095, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2096, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2097, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2098, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2099, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2100, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2101, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2102, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2103, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2104, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2105, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2106, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2107, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2108, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2109, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2110, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2111, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2112, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2113, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2114, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2115, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2116, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2117, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2118, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2119, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2120, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2121, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2122, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2123, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2124, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2125, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2126, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2127, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2128, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2129, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2130, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2131, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2132, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2133, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2134, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2135, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2136, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2137, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2138, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2139, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2140, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2141, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2142, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2143, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2144, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2145, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2146, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2147, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2148, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2149, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2150, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2151, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2152, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2153, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2154, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2155, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2156, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2157, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2158, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2159, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2160, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2161, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2162, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2163, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2164, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2165, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2166, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2167, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2168, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2169, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2170, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2171, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2172, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2173, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2174, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2175, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2176, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2177, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2178, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2179, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2180, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2181, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2182, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2183, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2184, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2185, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2186, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2187, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2188, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2189, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2190, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2191, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2192, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2193, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2194, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2195, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2196, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2197, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2198, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2199, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2200, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2201, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2202, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2203, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2204, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2205, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2206, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2207, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2208, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2209, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2210, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2211, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2212, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2213, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2214, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2215, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2216, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2217, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2218, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2219, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2220, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2221, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2222, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2223, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2224, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2225, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2226, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2227, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2228, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2229, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2230, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2231, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2232, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2233, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2234, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2235, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2236, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2237, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2238, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2239, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2240, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2241, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2242, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2243, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2244, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2245, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2246, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2247, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2248, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2249, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2250, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2251, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2252, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2253, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2254, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2255, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2256, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2257, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2258, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2259, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2260, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2261, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2262, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2263, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2264, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2265, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2266, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2267, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2268, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2269, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2270, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2271, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2272, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2273, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2274, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2275, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2276, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2277, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2278, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2279, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2280, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2281, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2282, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2283, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2284, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2285, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2286, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2287, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2288, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2289, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2290, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2291, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2292, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2293, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2294, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2295, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2296, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2297, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2298, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2299, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2300, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2301, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2302, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2303, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2304, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2305, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2306, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2307, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2308, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2309, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2310, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2311, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2312, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2313, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2314, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2315, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2316, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2317, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2318, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2319, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2320, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2321, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2322, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2323, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2324, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2325, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2326, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2327, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2328, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2329, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2330, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2331, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2332, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2333, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2334, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2335, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2336, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2337, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2338, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2339, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2340, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2341, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2342, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2343, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2344, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2345, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2346, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2347, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2348, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2349, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N5tupleS2350];
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1N7_2abindS2351, 0, 400), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2935 = { _0: "a a", _1: 1984 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2936 = { _0: "a b", _1: 6906 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2937 = { _0: "a d", _1: 5342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2938 = { _0: "a e", _1: 3705 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2939 = { _0: "a f", _1: 3335 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2940 = { _0: "a g", _1: 8278 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2941 = { _0: "a i", _1: 112181 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2942 = { _0: "a k", _1: 10848 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2943 = { _0: "a l", _1: 17889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2944 = { _0: "a m", _1: 9714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2945 = { _0: "a n", _1: 49627 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2946 = { _0: "a o", _1: 2319 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2947 = { _0: "a p", _1: 16261 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2948 = { _0: "a r", _1: 23800 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2949 = { _0: "a s", _1: 42877 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2950 = { _0: "a t", _1: 27497 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2951 = { _0: "a u", _1: 44343 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2952 = { _0: "a x", _1: 2490 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2953 = { _0: "a z", _1: 1675 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2954 = { _0: "a θ", _1: 6301 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2955 = { _0: "b a", _1: 10476 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2956 = { _0: "b b", _1: 296 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2957 = { _0: "b d", _1: 737 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2958 = { _0: "b e", _1: 5349 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2959 = { _0: "b i", _1: 1358 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2960 = { _0: "b l", _1: 1171 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2961 = { _0: "b n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2962 = { _0: "b o", _1: 3670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2963 = { _0: "b r", _1: 1363 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2964 = { _0: "b s", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2965 = { _0: "b u", _1: 2439 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2966 = { _0: "b x", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2967 = { _0: "d a", _1: 7245 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2968 = { _0: "d b", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2969 = { _0: "d d", _1: 117 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2970 = { _0: "d e", _1: 19134 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2971 = { _0: "d g", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2972 = { _0: "d i", _1: 13721 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2973 = { _0: "d l", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2974 = { _0: "d m", _1: 15 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2975 = { _0: "d n", _1: 21 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2976 = { _0: "d o", _1: 10802 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2977 = { _0: "d r", _1: 3240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2978 = { _0: "d s", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2979 = { _0: "d t", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2980 = { _0: "d u", _1: 6545 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2981 = { _0: "e a", _1: 4780 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2982 = { _0: "e b", _1: 3833 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2983 = { _0: "e d", _1: 3918 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2984 = { _0: "e e", _1: 1025 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2985 = { _0: "e f", _1: 3584 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2986 = { _0: "e g", _1: 10506 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2987 = { _0: "e i", _1: 211462 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2988 = { _0: "e k", _1: 23128 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2989 = { _0: "e l", _1: 14817 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2990 = { _0: "e m", _1: 6406 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2991 = { _0: "e n", _1: 62259 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2992 = { _0: "e o", _1: 10979 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2993 = { _0: "e p", _1: 22040 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2994 = { _0: "e r", _1: 21555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2995 = { _0: "e s", _1: 25822 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2996 = { _0: "e t", _1: 17411 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2997 = { _0: "e u", _1: 2039 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2998 = { _0: "e x", _1: 3106 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2999 = { _0: "e z", _1: 892 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3000 = { _0: "e θ", _1: 4868 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3001 = { _0: "f a", _1: 4339 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3002 = { _0: "f e", _1: 4089 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3003 = { _0: "f f", _1: 20 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3004 = { _0: "f i", _1: 1638 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3005 = { _0: "f l", _1: 227 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3006 = { _0: "f n", _1: 49 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3007 = { _0: "f o", _1: 5220 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3008 = { _0: "f r", _1: 1683 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3009 = { _0: "f u", _1: 2920 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3010 = { _0: "f z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3011 = { _0: "f θ", _1: 1817 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3012 = { _0: "g a", _1: 9693 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3013 = { _0: "g d", _1: 130 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3014 = { _0: "g e", _1: 16574 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3015 = { _0: "g i", _1: 3884 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3016 = { _0: "g l", _1: 444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3017 = { _0: "g m", _1: 1124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3018 = { _0: "g n", _1: 1670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3019 = { _0: "g o", _1: 8947 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3020 = { _0: "g r", _1: 1430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3021 = { _0: "g u", _1: 4245 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3022 = { _0: "h a", _1: 6874 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3023 = { _0: "h e", _1: 22460 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3024 = { _0: "h i", _1: 4308 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3025 = { _0: "h o", _1: 35474 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3026 = { _0: "h r", _1: 1714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3027 = { _0: "h u", _1: 19676 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3028 = { _0: "i a", _1: 26068 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3029 = { _0: "i b", _1: 1809 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3030 = { _0: "i d", _1: 10039 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3031 = { _0: "i e", _1: 12838 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3032 = { _0: "i f", _1: 1149 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3033 = { _0: "i g", _1: 4221 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3034 = { _0: "i i", _1: 250 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3035 = { _0: "i k", _1: 14989 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3036 = { _0: "i l", _1: 18510 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3037 = { _0: "i m", _1: 19326 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3038 = { _0: "i n", _1: 52794 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3039 = { _0: "i o", _1: 28359 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3040 = { _0: "i p", _1: 8475 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3041 = { _0: "i r", _1: 12911 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3042 = { _0: "i s", _1: 93887 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3043 = { _0: "i t", _1: 10269 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3044 = { _0: "i u", _1: 25132 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3045 = { _0: "i x", _1: 1948 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3046 = { _0: "i z", _1: 1486 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3047 = { _0: "i θ", _1: 7071 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3048 = { _0: "k a", _1: 96607 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3049 = { _0: "k b", _1: 178 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3050 = { _0: "k d", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3051 = { _0: "k e", _1: 11058 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3052 = { _0: "k f", _1: 84 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3053 = { _0: "k g", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3054 = { _0: "k i", _1: 3569 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3055 = { _0: "k k", _1: 806 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3056 = { _0: "k l", _1: 3733 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3057 = { _0: "k m", _1: 65 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3058 = { _0: "k n", _1: 617 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3059 = { _0: "k o", _1: 11402 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3060 = { _0: "k p", _1: 293 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3061 = { _0: "k r", _1: 5205 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3062 = { _0: "k s", _1: 14456 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3063 = { _0: "k t", _1: 2663 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3064 = { _0: "k u", _1: 14865 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3065 = { _0: "k x", _1: 186 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3066 = { _0: "k z", _1: 108 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3067 = { _0: "k θ", _1: 49 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3068 = { _0: "l a", _1: 15835 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3069 = { _0: "l b", _1: 40 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3070 = { _0: "l d", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3071 = { _0: "l e", _1: 29739 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3072 = { _0: "l f", _1: 1522 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3073 = { _0: "l g", _1: 107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3074 = { _0: "l i", _1: 11277 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3075 = { _0: "l k", _1: 469 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3076 = { _0: "l l", _1: 5212 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3077 = { _0: "l m", _1: 1148 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3078 = { _0: "l n", _1: 10 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3079 = { _0: "l o", _1: 15176 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3080 = { _0: "l p", _1: 601 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3081 = { _0: "l r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3082 = { _0: "l s", _1: 68 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3083 = { _0: "l t", _1: 165 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3084 = { _0: "l u", _1: 5599 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3085 = { _0: "l x", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3086 = { _0: "l z", _1: 8 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3087 = { _0: "l θ", _1: 3528 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3088 = { _0: "m a", _1: 21986 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3089 = { _0: "m b", _1: 1129 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3090 = { _0: "m d", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3091 = { _0: "m e", _1: 35949 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3092 = { _0: "m f", _1: 839 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3093 = { _0: "m i", _1: 7101 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3094 = { _0: "m l", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3095 = { _0: "m m", _1: 1421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3096 = { _0: "m n", _1: 1458 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3097 = { _0: "m o", _1: 16881 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3098 = { _0: "m p", _1: 1967 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3099 = { _0: "m r", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3100 = { _0: "m s", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3101 = { _0: "m u", _1: 8340 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3102 = { _0: "m x", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3103 = { _0: "m z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3104 = { _0: "m θ", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3105 = { _0: "n a", _1: 19025 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3106 = { _0: "n d", _1: 2572 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3107 = { _0: "n e", _1: 24010 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3108 = { _0: "n f", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3109 = { _0: "n g", _1: 2346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3110 = { _0: "n i", _1: 6417 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3111 = { _0: "n k", _1: 1416 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3112 = { _0: "n m", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3113 = { _0: "n n", _1: 1063 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3114 = { _0: "n o", _1: 21753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3115 = { _0: "n p", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3116 = { _0: "n r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3117 = { _0: "n s", _1: 20 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3118 = { _0: "n t", _1: 21646 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3119 = { _0: "n u", _1: 5381 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3120 = { _0: "n x", _1: 299 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3121 = { _0: "n z", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3122 = { _0: "n θ", _1: 3688 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3123 = { _0: "o a", _1: 406 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3124 = { _0: "o b", _1: 1799 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3125 = { _0: "o d", _1: 4005 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3126 = { _0: "o e", _1: 1321 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3127 = { _0: "o f", _1: 3227 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3128 = { _0: "o g", _1: 3690 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3129 = { _0: "o i", _1: 42188 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3130 = { _0: "o k", _1: 3819 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3131 = { _0: "o l", _1: 8987 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3132 = { _0: "o m", _1: 11583 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3133 = { _0: "o n", _1: 57454 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3134 = { _0: "o o", _1: 313 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3135 = { _0: "o p", _1: 3922 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3136 = { _0: "o r", _1: 7899 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3137 = { _0: "o s", _1: 46414 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3138 = { _0: "o t", _1: 10385 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3139 = { _0: "o u", _1: 119405 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3140 = { _0: "o x", _1: 1152 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3141 = { _0: "o z", _1: 225 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3142 = { _0: "o θ", _1: 1534 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3143 = { _0: "p a", _1: 23375 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3144 = { _0: "p e", _1: 21399 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3145 = { _0: "p f", _1: 46 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3146 = { _0: "p i", _1: 13518 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3147 = { _0: "p l", _1: 3770 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3148 = { _0: "p n", _1: 1238 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3149 = { _0: "p o", _1: 29285 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3150 = { _0: "p p", _1: 447 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3151 = { _0: "p r", _1: 13826 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3152 = { _0: "p s", _1: 7454 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3153 = { _0: "p t", _1: 3371 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3154 = { _0: "p u", _1: 3525 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3155 = { _0: "r a", _1: 27284 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3156 = { _0: "r b", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3157 = { _0: "r d", _1: 1520 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3158 = { _0: "r e", _1: 14025 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3159 = { _0: "r f", _1: 203 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3160 = { _0: "r g", _1: 2849 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3161 = { _0: "r i", _1: 29866 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3162 = { _0: "r k", _1: 1002 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3163 = { _0: "r l", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3164 = { _0: "r m", _1: 1115 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3165 = { _0: "r n", _1: 653 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3166 = { _0: "r o", _1: 31460 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3167 = { _0: "r p", _1: 690 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3168 = { _0: "r r", _1: 1226 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3169 = { _0: "r s", _1: 753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3170 = { _0: "r t", _1: 3298 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3171 = { _0: "r u", _1: 6387 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3172 = { _0: "r x", _1: 2545 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3173 = { _0: "r z", _1: 14 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3174 = { _0: "r θ", _1: 597 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3175 = { _0: "s a", _1: 30017 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3176 = { _0: "s b", _1: 493 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3177 = { _0: "s d", _1: 213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3178 = { _0: "s e", _1: 35051 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3179 = { _0: "s f", _1: 1162 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3180 = { _0: "s g", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3181 = { _0: "s i", _1: 21315 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3182 = { _0: "s k", _1: 4455 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3183 = { _0: "s l", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3184 = { _0: "s m", _1: 2915 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3185 = { _0: "s n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3186 = { _0: "s o", _1: 17371 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3187 = { _0: "s p", _1: 2268 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3188 = { _0: "s r", _1: 3072 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3189 = { _0: "s s", _1: 3237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3190 = { _0: "s t", _1: 19555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3191 = { _0: "s u", _1: 20185 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3192 = { _0: "s x", _1: 2574 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3193 = { _0: "s θ", _1: 6440 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3194 = { _0: "t a", _1: 47506 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3195 = { _0: "t e", _1: 62683 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3196 = { _0: "t i", _1: 22342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3197 = { _0: "t l", _1: 23 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3198 = { _0: "t m", _1: 89 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3199 = { _0: "t n", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3200 = { _0: "t o", _1: 85418 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3201 = { _0: "t r", _1: 8195 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3202 = { _0: "t t", _1: 270 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3203 = { _0: "t u", _1: 38787 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3204 = { _0: "t θ", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3205 = { _0: "u a", _1: 1559 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3206 = { _0: "u b", _1: 1304 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3207 = { _0: "u d", _1: 5351 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3208 = { _0: "u e", _1: 3013 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3209 = { _0: "u f", _1: 1277 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3210 = { _0: "u g", _1: 2395 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3211 = { _0: "u i", _1: 7748 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3212 = { _0: "u k", _1: 8771 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3213 = { _0: "u l", _1: 8052 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3214 = { _0: "u m", _1: 14744 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3215 = { _0: "u n", _1: 60337 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3216 = { _0: "u o", _1: 2959 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3217 = { _0: "u p", _1: 10860 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3218 = { _0: "u r", _1: 19679 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3219 = { _0: "u s", _1: 51854 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3220 = { _0: "u t", _1: 49084 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3221 = { _0: "u u", _1: 1237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3222 = { _0: "u x", _1: 3570 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3223 = { _0: "u z", _1: 250 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3224 = { _0: "u θ", _1: 4257 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3225 = { _0: "x a", _1: 3477 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3226 = { _0: "x b", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3227 = { _0: "x e", _1: 7363 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3228 = { _0: "x i", _1: 2344 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3229 = { _0: "x l", _1: 381 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3230 = { _0: "x m", _1: 296 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3231 = { _0: "x n", _1: 294 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3232 = { _0: "x o", _1: 4822 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3233 = { _0: "x r", _1: 2302 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3234 = { _0: "x s", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3235 = { _0: "x u", _1: 2426 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3236 = { _0: "x x", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3237 = { _0: "x z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3238 = { _0: "x θ", _1: 1348 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3239 = { _0: "z a", _1: 912 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3240 = { _0: "z e", _1: 2638 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3241 = { _0: "z i", _1: 270 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3242 = { _0: "z k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3243 = { _0: "z l", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3244 = { _0: "z m", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3245 = { _0: "z o", _1: 2502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3246 = { _0: "z r", _1: 60 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3247 = { _0: "z u", _1: 448 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3248 = { _0: "θ a", _1: 7858 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3249 = { _0: "θ b", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3250 = { _0: "θ d", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3251 = { _0: "θ e", _1: 27569 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3252 = { _0: "θ f", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3253 = { _0: "θ g", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3254 = { _0: "θ i", _1: 1441 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3255 = { _0: "θ l", _1: 440 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3256 = { _0: "θ m", _1: 484 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3257 = { _0: "θ n", _1: 1422 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3258 = { _0: "θ o", _1: 4787 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3259 = { _0: "θ r", _1: 3694 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3260 = { _0: "θ s", _1: 70 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3261 = { _0: "θ u", _1: 4557 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3262 = { _0: "θ x", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3263 = { _0: "θ z", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3264 = { _0: "θ θ", _1: 61 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N7_2abindS3265 = [_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2935, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2936, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2937, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2938, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2939, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2940, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2941, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2942, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2943, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2944, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2945, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2946, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2947, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2948, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2949, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2950, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2951, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2952, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2953, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2954, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2955, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2956, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2957, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2958, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2959, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2960, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2961, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2962, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2963, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2964, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2965, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2966, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2967, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2968, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2969, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2970, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2971, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2972, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2973, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2974, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2975, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2976, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2977, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2978, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2979, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2980, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2981, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2982, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2983, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2984, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2985, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2986, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2987, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2988, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2989, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2990, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2991, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2992, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2993, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2994, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2995, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2996, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2997, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2998, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS2999, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3000, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3001, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3002, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3003, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3004, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3005, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3006, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3007, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3008, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3009, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3010, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3011, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3012, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3013, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3014, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3015, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3016, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3017, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3018, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3019, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3020, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3021, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3022, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3023, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3024, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3025, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3026, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3027, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3028, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3029, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3030, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3031, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3032, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3033, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3034, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3035, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3036, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3037, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3038, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3039, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3040, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3041, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3042, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3043, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3044, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3045, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3046, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3047, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3048, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3049, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3050, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3051, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3052, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3053, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3054, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3055, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3056, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3057, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3058, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3059, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3060, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3061, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3062, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3063, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3064, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3065, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3066, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3067, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3068, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3069, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3070, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3071, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3072, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3073, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3074, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3075, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3076, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3077, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3078, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3079, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3080, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3081, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3082, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3083, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3084, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3085, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3086, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3087, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3088, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3089, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3090, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3091, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3092, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3093, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3094, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3095, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3096, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3097, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3098, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3099, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3100, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3101, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3102, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3103, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3104, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3105, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3106, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3107, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3108, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3109, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3110, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3111, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3112, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3113, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3114, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3115, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3116, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3117, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3118, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3119, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3120, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3121, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3122, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3123, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3124, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3125, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3126, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3127, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3128, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3129, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3130, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3131, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3132, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3133, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3134, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3135, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3136, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3137, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3138, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3139, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3140, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3141, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3142, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3143, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3144, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3145, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3146, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3147, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3148, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3149, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3150, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3151, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3152, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3153, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3154, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3155, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3156, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3157, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3158, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3159, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3160, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3161, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3162, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3163, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3164, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3165, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3166, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3167, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3168, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3169, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3170, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3171, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3172, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3173, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3174, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3175, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3176, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3177, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3178, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3179, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3180, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3181, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3182, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3183, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3184, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3185, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3186, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3187, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3188, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3189, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3190, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3191, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3192, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3193, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3194, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3195, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3196, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3197, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3198, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3199, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3200, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3201, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3202, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3203, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3204, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3205, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3206, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3207, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3208, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3209, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3210, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3211, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3212, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3213, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3214, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3215, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3216, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3217, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3218, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3219, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3220, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3221, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3222, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3223, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3224, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3225, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3226, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3227, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3228, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3229, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3230, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3231, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3232, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3233, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3234, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3235, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3236, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3237, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3238, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3239, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3240, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3241, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3242, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3243, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3244, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3245, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3246, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3247, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3248, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3249, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3250, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3251, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3252, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3253, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3254, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3255, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3256, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3257, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3258, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3259, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3260, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3261, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3262, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3263, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N5tupleS3264];
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4N7_2abindS3265, 0, 330), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3355 = { _0: "a", _1: 397372 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3356 = { _0: "b", _1: 26876 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3357 = { _0: "d", _1: 60888 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3358 = { _0: "e", _1: 454430 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3359 = { _0: "f", _1: 22004 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3360 = { _0: "g", _1: 48141 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3361 = { _0: "h", _1: 90506 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3362 = { _0: "i", _1: 351531 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3363 = { _0: "k", _1: 166291 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3364 = { _0: "l", _1: 90714 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3365 = { _0: "m", _1: 97105 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3366 = { _0: "n", _1: 109643 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3367 = { _0: "o", _1: 329728 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3368 = { _0: "p", _1: 121254 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3369 = { _0: "r", _1: 125574 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3370 = { _0: "s", _1: 170388 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3371 = { _0: "t", _1: 265342 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3372 = { _0: "u", _1: 258301 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3373 = { _0: "x", _1: 25061 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3374 = { _0: "z", _1: 6835 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3375 = { _0: "θ", _1: 52417 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N7_2abindS3376 = [_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3355, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3356, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3357, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3358, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3359, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3360, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3361, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3362, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3363, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3364, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3365, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3366, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3367, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3368, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3369, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3370, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3371, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3372, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3373, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3374, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N5tupleS3375];
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4N7_2abindS3376, 0, 21), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3315 = { _0: "a", _1: 285395 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3316 = { _0: "e", _1: 394551 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3317 = { _0: "f", _1: 48767 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3318 = { _0: "i", _1: 170440 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3319 = { _0: "k", _1: 191352 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3320 = { _0: "l", _1: 90714 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3321 = { _0: "m", _1: 97105 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3322 = { _0: "n", _1: 109643 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3323 = { _0: "o", _1: 258134 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3324 = { _0: "p", _1: 143258 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3325 = { _0: "r", _1: 125574 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3326 = { _0: "s", _1: 170388 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3327 = { _0: "t", _1: 317759 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3328 = { _0: "u", _1: 46715 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3329 = { _0: "v", _1: 37076 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3330 = { _0: "y", _1: 86569 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3331 = { _0: "z", _1: 6835 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3332 = { _0: "ð", _1: 60888 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3333 = { _0: "ɣ", _1: 48141 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N7_2abindS3334 = [_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3315, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3316, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3317, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3318, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3319, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3320, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3321, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3322, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3323, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3324, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3325, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3326, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3327, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3328, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3329, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3330, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3331, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3332, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N5tupleS3333];
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2N7_2abindS3334, 0, 19), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1596 = { _0: "a a", _1: 1982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1597 = { _0: "a e", _1: 338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1598 = { _0: "a f", _1: 43734 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1599 = { _0: "a i", _1: 3719 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1600 = { _0: "a k", _1: 10848 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1601 = { _0: "a l", _1: 17889 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1602 = { _0: "a m", _1: 9714 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1603 = { _0: "a n", _1: 49627 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1604 = { _0: "a o", _1: 2206 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1605 = { _0: "a p", _1: 16261 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1606 = { _0: "a r", _1: 23800 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1607 = { _0: "a s", _1: 42265 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1608 = { _0: "a t", _1: 27497 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1609 = { _0: "a u", _1: 1092 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1610 = { _0: "a v", _1: 9725 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1611 = { _0: "a x", _1: 2490 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1612 = { _0: "a z", _1: 2287 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1613 = { _0: "a ð", _1: 5342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1614 = { _0: "a ɣ", _1: 8278 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1615 = { _0: "a θ", _1: 6301 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1616 = { _0: "b a", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1617 = { _0: "b e", _1: 346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1618 = { _0: "b i", _1: 93 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1619 = { _0: "b l", _1: 118 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1620 = { _0: "b n", _1: 18 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1621 = { _0: "b o", _1: 132 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1622 = { _0: "b r", _1: 261 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1623 = { _0: "b t", _1: 158 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1624 = { _0: "b u", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1625 = { _0: "d a", _1: 5555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1626 = { _0: "d e", _1: 7787 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1627 = { _0: "d i", _1: 3150 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1628 = { _0: "d l", _1: 16 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1629 = { _0: "d o", _1: 4739 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1630 = { _0: "d r", _1: 277 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1631 = { _0: "d u", _1: 16 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1632 = { _0: "e a", _1: 5921 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1633 = { _0: "e e", _1: 588 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1634 = { _0: "e f", _1: 12225 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1635 = { _0: "e i", _1: 1444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1636 = { _0: "e k", _1: 24120 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1637 = { _0: "e l", _1: 14973 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1638 = { _0: "e m", _1: 7409 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1639 = { _0: "e n", _1: 63555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1640 = { _0: "e o", _1: 14506 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1641 = { _0: "e p", _1: 22128 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1642 = { _0: "e r", _1: 23040 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1643 = { _0: "e s", _1: 28944 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1644 = { _0: "e t", _1: 17734 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1645 = { _0: "e u", _1: 2589 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1646 = { _0: "e v", _1: 11166 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1647 = { _0: "e x", _1: 3319 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1648 = { _0: "e z", _1: 1744 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1649 = { _0: "e ð", _1: 5302 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1650 = { _0: "e ɣ", _1: 11469 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1651 = { _0: "e θ", _1: 5197 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1652 = { _0: "f a", _1: 3855 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1653 = { _0: "f e", _1: 2094 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1654 = { _0: "f f", _1: 504 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1655 = { _0: "f i", _1: 7189 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1656 = { _0: "f k", _1: 555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1657 = { _0: "f l", _1: 227 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1658 = { _0: "f n", _1: 49 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1659 = { _0: "f o", _1: 4609 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1660 = { _0: "f p", _1: 69 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1661 = { _0: "f r", _1: 1683 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1662 = { _0: "f s", _1: 5588 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1663 = { _0: "f t", _1: 39832 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1664 = { _0: "f u", _1: 459 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1665 = { _0: "f x", _1: 608 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1666 = { _0: "f z", _1: 29 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1667 = { _0: "f θ", _1: 3421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1668 = { _0: "g a", _1: 565 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1669 = { _0: "g e", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1670 = { _0: "g i", _1: 141 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1671 = { _0: "g l", _1: 62 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1672 = { _0: "g o", _1: 64 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1673 = { _0: "g r", _1: 122 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1674 = { _0: "g t", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1675 = { _0: "i a", _1: 23907 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1676 = { _0: "i e", _1: 7520 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1677 = { _0: "i f", _1: 1722 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1678 = { _0: "i i", _1: 10048 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1679 = { _0: "i k", _1: 15371 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1680 = { _0: "i l", _1: 21947 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1681 = { _0: "i m", _1: 26261 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1682 = { _0: "i n", _1: 62530 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1683 = { _0: "i o", _1: 22347 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1684 = { _0: "i p", _1: 14828 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1685 = { _0: "i r", _1: 24841 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1686 = { _0: "i s", _1: 90554 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1687 = { _0: "i t", _1: 10886 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1688 = { _0: "i u", _1: 8494 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1689 = { _0: "i v", _1: 2116 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1690 = { _0: "i x", _1: 3272 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1691 = { _0: "i z", _1: 6032 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1692 = { _0: "i ð", _1: 9529 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1693 = { _0: "i ɣ", _1: 4854 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1694 = { _0: "i θ", _1: 7128 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1695 = { _0: "k a", _1: 22362 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1696 = { _0: "k e", _1: 78763 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1697 = { _0: "k f", _1: 84 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1698 = { _0: "k i", _1: 21042 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1699 = { _0: "k k", _1: 806 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1700 = { _0: "k l", _1: 3671 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1701 = { _0: "k m", _1: 65 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1702 = { _0: "k n", _1: 617 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1703 = { _0: "k o", _1: 10344 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1704 = { _0: "k p", _1: 293 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1705 = { _0: "k r", _1: 5083 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1706 = { _0: "k s", _1: 14456 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1707 = { _0: "k t", _1: 2656 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1708 = { _0: "k u", _1: 3911 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1709 = { _0: "k v", _1: 178 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1710 = { _0: "k x", _1: 186 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1711 = { _0: "k z", _1: 108 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1712 = { _0: "k ð", _1: 309 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1713 = { _0: "k ɣ", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1714 = { _0: "k θ", _1: 49 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1715 = { _0: "l a", _1: 14487 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1716 = { _0: "l e", _1: 18070 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1717 = { _0: "l f", _1: 1522 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1718 = { _0: "l i", _1: 28987 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1719 = { _0: "l k", _1: 469 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1720 = { _0: "l l", _1: 5212 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1721 = { _0: "l m", _1: 1148 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1722 = { _0: "l n", _1: 10 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1723 = { _0: "l o", _1: 13363 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1724 = { _0: "l p", _1: 601 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1725 = { _0: "l r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1726 = { _0: "l s", _1: 68 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1727 = { _0: "l t", _1: 165 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1728 = { _0: "l u", _1: 2719 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1729 = { _0: "l v", _1: 40 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1730 = { _0: "l x", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1731 = { _0: "l z", _1: 8 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1732 = { _0: "l ð", _1: 124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1733 = { _0: "l ɣ", _1: 107 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1734 = { _0: "l θ", _1: 3528 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1735 = { _0: "m a", _1: 19991 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1736 = { _0: "m b", _1: 1252 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1737 = { _0: "m e", _1: 26499 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1738 = { _0: "m f", _1: 839 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1739 = { _0: "m i", _1: 21817 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1740 = { _0: "m l", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1741 = { _0: "m m", _1: 1421 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1742 = { _0: "m n", _1: 1458 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1743 = { _0: "m o", _1: 14031 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1744 = { _0: "m p", _1: 715 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1745 = { _0: "m r", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1746 = { _0: "m s", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1747 = { _0: "m u", _1: 7919 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1748 = { _0: "m v", _1: 1129 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1749 = { _0: "m x", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1750 = { _0: "m z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1751 = { _0: "m ð", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1752 = { _0: "m θ", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1753 = { _0: "n a", _1: 15338 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1754 = { _0: "n d", _1: 21646 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1755 = { _0: "n e", _1: 15044 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1756 = { _0: "n f", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1757 = { _0: "n g", _1: 1270 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1758 = { _0: "n i", _1: 23728 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1759 = { _0: "n k", _1: 146 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1760 = { _0: "n m", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1761 = { _0: "n n", _1: 1063 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1762 = { _0: "n o", _1: 19009 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1763 = { _0: "n p", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1764 = { _0: "n r", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1765 = { _0: "n s", _1: 20 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1766 = { _0: "n u", _1: 3467 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1767 = { _0: "n x", _1: 299 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1768 = { _0: "n z", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1769 = { _0: "n ð", _1: 2572 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1770 = { _0: "n ɣ", _1: 2346 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1771 = { _0: "n θ", _1: 3688 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1772 = { _0: "o a", _1: 1230 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1773 = { _0: "o e", _1: 342 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1774 = { _0: "o f", _1: 3502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1775 = { _0: "o i", _1: 2937 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1776 = { _0: "o k", _1: 6051 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1777 = { _0: "o l", _1: 10018 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1778 = { _0: "o m", _1: 15654 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1779 = { _0: "o n", _1: 102982 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1780 = { _0: "o o", _1: 468 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1781 = { _0: "o p", _1: 8237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1782 = { _0: "o r", _1: 11083 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1783 = { _0: "o s", _1: 64528 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1784 = { _0: "o t", _1: 13226 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1785 = { _0: "o u", _1: 114 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1786 = { _0: "o v", _1: 2593 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1787 = { _0: "o x", _1: 1525 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1788 = { _0: "o z", _1: 1072 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1789 = { _0: "o ð", _1: 4961 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1790 = { _0: "o ɣ", _1: 4209 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1791 = { _0: "o θ", _1: 3402 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1792 = { _0: "p a", _1: 21625 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1793 = { _0: "p e", _1: 18733 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1794 = { _0: "p f", _1: 46 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1795 = { _0: "p i", _1: 24190 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1796 = { _0: "p l", _1: 3652 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1797 = { _0: "p n", _1: 1220 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1798 = { _0: "p o", _1: 23816 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1799 = { _0: "p p", _1: 447 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1800 = { _0: "p r", _1: 13565 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1801 = { _0: "p s", _1: 7454 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1802 = { _0: "p t", _1: 3213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1803 = { _0: "p u", _1: 2041 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1804 = { _0: "r a", _1: 25638 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1805 = { _0: "r e", _1: 11967 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1806 = { _0: "r f", _1: 203 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1807 = { _0: "r i", _1: 37274 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1808 = { _0: "r k", _1: 1002 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1809 = { _0: "r l", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1810 = { _0: "r m", _1: 1115 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1811 = { _0: "r n", _1: 653 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1812 = { _0: "r o", _1: 30378 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1813 = { _0: "r p", _1: 690 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1814 = { _0: "r r", _1: 1226 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1815 = { _0: "r s", _1: 753 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1816 = { _0: "r t", _1: 3298 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1817 = { _0: "r u", _1: 3765 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1818 = { _0: "r v", _1: 85 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1819 = { _0: "r x", _1: 2545 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1820 = { _0: "r z", _1: 14 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1821 = { _0: "r ð", _1: 1520 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1822 = { _0: "r ɣ", _1: 2849 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1823 = { _0: "r θ", _1: 597 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1824 = { _0: "s a", _1: 25871 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1825 = { _0: "s e", _1: 25388 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1826 = { _0: "s f", _1: 1162 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1827 = { _0: "s i", _1: 46739 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1828 = { _0: "s k", _1: 4455 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1829 = { _0: "s o", _1: 15349 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1830 = { _0: "s p", _1: 2268 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1831 = { _0: "s s", _1: 3237 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1832 = { _0: "s t", _1: 19555 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1833 = { _0: "s u", _1: 10592 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1834 = { _0: "s x", _1: 2574 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1835 = { _0: "s θ", _1: 6440 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1836 = { _0: "t a", _1: 29472 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1837 = { _0: "t e", _1: 28500 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1838 = { _0: "t i", _1: 68620 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1839 = { _0: "t l", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1840 = { _0: "t m", _1: 89 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1841 = { _0: "t n", _1: 22 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1842 = { _0: "t o", _1: 71657 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1843 = { _0: "t r", _1: 7918 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1844 = { _0: "t t", _1: 270 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1845 = { _0: "t u", _1: 37240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1846 = { _0: "t θ", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1847 = { _0: "u a", _1: 62 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1848 = { _0: "u e", _1: 268 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1849 = { _0: "u f", _1: 51 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1850 = { _0: "u i", _1: 459 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1851 = { _0: "u k", _1: 4610 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1852 = { _0: "u l", _1: 1971 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1853 = { _0: "u m", _1: 1322 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1854 = { _0: "u n", _1: 3585 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1855 = { _0: "u o", _1: 151 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1856 = { _0: "u p", _1: 35 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1857 = { _0: "u r", _1: 1586 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1858 = { _0: "u s", _1: 22301 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1859 = { _0: "u t", _1: 5471 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1860 = { _0: "u u", _1: 31 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1861 = { _0: "u v", _1: 250 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1862 = { _0: "u x", _1: 1052 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1863 = { _0: "u z", _1: 36 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1864 = { _0: "u ð", _1: 3068 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1865 = { _0: "u ɣ", _1: 7 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1866 = { _0: "u θ", _1: 399 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1867 = { _0: "v a", _1: 10048 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1868 = { _0: "v e", _1: 3779 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1869 = { _0: "v i", _1: 7604 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1870 = { _0: "v l", _1: 2628 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1871 = { _0: "v m", _1: 1413 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1872 = { _0: "v n", _1: 203 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1873 = { _0: "v o", _1: 5008 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1874 = { _0: "v r", _1: 2857 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1875 = { _0: "v s", _1: 5 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1876 = { _0: "v u", _1: 1766 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1877 = { _0: "v v", _1: 297 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1878 = { _0: "v x", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1879 = { _0: "v z", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1880 = { _0: "v ð", _1: 1190 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1881 = { _0: "v ɣ", _1: 273 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1882 = { _0: "x a", _1: 2825 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1883 = { _0: "x e", _1: 2567 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1884 = { _0: "x i", _1: 9713 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1885 = { _0: "x l", _1: 381 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1886 = { _0: "x m", _1: 296 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1887 = { _0: "x n", _1: 294 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1888 = { _0: "x o", _1: 4565 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1889 = { _0: "x r", _1: 2302 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1890 = { _0: "x s", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1891 = { _0: "x u", _1: 762 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1892 = { _0: "x v", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1893 = { _0: "x x", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1894 = { _0: "x z", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1895 = { _0: "x θ", _1: 1348 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1896 = { _0: "z a", _1: 851 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1897 = { _0: "z e", _1: 973 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1898 = { _0: "z i", _1: 2228 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1899 = { _0: "z k", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1900 = { _0: "z l", _1: 23 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1901 = { _0: "z m", _1: 2918 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1902 = { _0: "z n", _1: 11 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1903 = { _0: "z o", _1: 2489 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1904 = { _0: "z r", _1: 3132 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1905 = { _0: "z u", _1: 229 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1906 = { _0: "z v", _1: 493 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1907 = { _0: "z ð", _1: 213 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1908 = { _0: "z ɣ", _1: 32 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1909 = { _0: "ð a", _1: 6287 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1910 = { _0: "ð e", _1: 17486 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1911 = { _0: "ð i", _1: 19831 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1912 = { _0: "ð l", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1913 = { _0: "ð m", _1: 15 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1914 = { _0: "ð n", _1: 21 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1915 = { _0: "ð o", _1: 10522 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1916 = { _0: "ð r", _1: 3240 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1917 = { _0: "ð s", _1: 38 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1918 = { _0: "ð t", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1919 = { _0: "ð u", _1: 3321 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1920 = { _0: "ð v", _1: 2 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1921 = { _0: "ð ð", _1: 117 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1922 = { _0: "ð ɣ", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1923 = { _0: "ɣ a", _1: 9501 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1924 = { _0: "ɣ e", _1: 8208 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1925 = { _0: "ɣ i", _1: 15869 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1926 = { _0: "ɣ l", _1: 444 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1927 = { _0: "ɣ m", _1: 1124 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1928 = { _0: "ɣ n", _1: 1670 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1929 = { _0: "ɣ o", _1: 8502 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1930 = { _0: "ɣ r", _1: 1430 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1931 = { _0: "ɣ u", _1: 1263 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1932 = { _0: "ɣ ð", _1: 130 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1933 = { _0: "θ a", _1: 6252 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1934 = { _0: "θ e", _1: 14887 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1935 = { _0: "θ f", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1936 = { _0: "θ i", _1: 19882 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1937 = { _0: "θ l", _1: 440 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1938 = { _0: "θ m", _1: 484 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1939 = { _0: "θ n", _1: 1422 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1940 = { _0: "θ o", _1: 4594 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1941 = { _0: "θ r", _1: 3694 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1942 = { _0: "θ s", _1: 69 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1943 = { _0: "θ u", _1: 597 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1944 = { _0: "θ v", _1: 12 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1945 = { _0: "θ x", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1946 = { _0: "θ z", _1: 4 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1947 = { _0: "θ ð", _1: 3 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1948 = { _0: "θ ɣ", _1: 1 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1949 = { _0: "θ θ", _1: 61 };
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N7_2abindS1950 = [_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1596, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1597, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1598, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1599, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1600, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1601, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1602, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1603, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1604, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1605, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1606, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1607, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1608, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1609, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1610, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1611, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1612, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1613, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1614, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1615, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1616, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1617, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1618, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1619, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1620, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1621, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1622, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1623, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1624, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1625, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1626, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1627, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1628, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1629, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1630, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1631, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1632, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1633, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1634, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1635, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1636, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1637, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1638, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1639, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1640, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1641, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1642, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1643, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1644, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1645, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1646, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1647, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1648, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1649, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1650, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1651, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1652, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1653, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1654, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1655, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1656, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1657, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1658, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1659, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1660, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1661, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1662, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1663, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1664, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1665, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1666, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1667, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1668, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1669, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1670, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1671, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1672, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1673, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1674, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1675, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1676, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1677, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1678, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1679, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1680, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1681, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1682, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1683, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1684, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1685, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1686, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1687, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1688, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1689, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1690, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1691, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1692, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1693, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1694, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1695, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1696, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1697, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1698, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1699, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1700, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1701, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1702, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1703, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1704, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1705, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1706, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1707, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1708, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1709, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1710, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1711, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1712, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1713, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1714, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1715, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1716, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1717, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1718, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1719, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1720, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1721, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1722, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1723, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1724, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1725, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1726, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1727, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1728, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1729, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1730, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1731, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1732, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1733, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1734, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1735, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1736, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1737, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1738, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1739, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1740, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1741, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1742, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1743, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1744, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1745, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1746, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1747, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1748, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1749, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1750, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1751, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1752, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1753, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1754, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1755, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1756, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1757, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1758, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1759, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1760, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1761, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1762, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1763, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1764, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1765, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1766, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1767, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1768, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1769, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1770, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1771, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1772, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1773, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1774, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1775, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1776, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1777, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1778, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1779, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1780, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1781, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1782, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1783, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1784, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1785, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1786, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1787, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1788, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1789, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1790, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1791, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1792, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1793, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1794, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1795, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1796, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1797, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1798, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1799, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1800, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1801, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1802, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1803, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1804, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1805, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1806, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1807, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1808, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1809, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1810, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1811, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1812, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1813, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1814, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1815, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1816, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1817, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1818, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1819, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1820, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1821, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1822, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1823, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1824, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1825, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1826, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1827, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1828, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1829, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1830, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1831, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1832, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1833, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1834, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1835, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1836, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1837, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1838, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1839, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1840, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1841, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1842, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1843, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1844, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1845, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1846, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1847, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1848, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1849, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1850, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1851, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1852, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1853, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1854, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1855, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1856, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1857, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1858, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1859, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1860, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1861, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1862, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1863, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1864, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1865, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1866, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1867, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1868, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1869, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1870, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1871, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1872, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1873, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1874, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1875, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1876, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1877, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1878, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1879, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1880, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1881, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1882, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1883, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1884, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1885, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1886, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1887, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1888, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1889, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1890, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1891, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1892, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1893, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1894, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1895, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1896, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1897, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1898, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1899, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1900, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1901, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1902, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1903, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1904, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1905, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1906, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1907, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1908, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1909, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1910, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1911, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1912, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1913, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1914, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1915, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1916, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1917, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1918, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1919, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1920, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1921, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1922, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1923, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1924, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1925, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1926, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1927, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1928, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1929, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1930, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1931, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1932, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1933, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1934, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1935, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1936, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1937, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1938, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1939, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1940, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1941, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1942, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1943, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1944, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1945, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1946, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1947, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1948, _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N5tupleS1949];
const _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0N7_2abindS1950, 0, 354), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3290 = { _0: "a", _1: 285395 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3291 = { _0: "b", _1: 1252 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3292 = { _0: "d", _1: 21540 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3293 = { _0: "e", _1: 277373 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3294 = { _0: "f", _1: 70771 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3295 = { _0: "g", _1: 1270 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3296 = { _0: "i", _1: 287618 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3297 = { _0: "k", _1: 165021 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3298 = { _0: "l", _1: 90714 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3299 = { _0: "m", _1: 97105 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3300 = { _0: "n", _1: 109643 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3301 = { _0: "o", _1: 258134 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3302 = { _0: "p", _1: 120002 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3303 = { _0: "r", _1: 125574 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3304 = { _0: "s", _1: 170388 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3305 = { _0: "t", _1: 243802 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3306 = { _0: "u", _1: 46715 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3307 = { _0: "v", _1: 37076 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3308 = { _0: "x", _1: 25061 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3309 = { _0: "y", _1: 86569 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3310 = { _0: "z", _1: 6835 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3311 = { _0: "ð", _1: 60888 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3312 = { _0: "ɣ", _1: 48141 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3313 = { _0: "θ", _1: 52417 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N7_2abindS3314 = [_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3290, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3291, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3292, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3293, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3294, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3295, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3296, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3297, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3298, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3299, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3300, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3301, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3302, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3303, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3304, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3305, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3306, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3307, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3308, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3309, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3310, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3311, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3312, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N5tupleS3313];
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1N7_2abindS3314, 0, 24), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3335 = { _0: "a", _1: 400616 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3336 = { _0: "b", _1: 26580 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3337 = { _0: "d", _1: 67606 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3338 = { _0: "e", _1: 435489 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3339 = { _0: "g", _1: 48141 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3340 = { _0: "h", _1: 90506 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3341 = { _0: "i", _1: 175304 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3342 = { _0: "k", _1: 190544 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3343 = { _0: "l", _1: 85502 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3344 = { _0: "m", _1: 95684 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3345 = { _0: "n", _1: 108580 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3346 = { _0: "o", _1: 320854 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3347 = { _0: "p", _1: 142791 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3348 = { _0: "r", _1: 124348 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3349 = { _0: "s", _1: 167151 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3350 = { _0: "t", _1: 317428 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3351 = { _0: "u", _1: 105682 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3352 = { _0: "y", _1: 62749 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3353 = { _0: "z", _1: 6913 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N7_2abindS3354 = [_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3335, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3336, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3337, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3338, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3339, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3340, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3341, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3342, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3343, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3344, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3345, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3346, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3347, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3348, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3349, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3350, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3351, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3352, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N5tupleS3353];
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3N7_2abindS3354, 0, 19), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3266 = { _0: "a", _1: 285395 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3267 = { _0: "b", _1: 1252 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3268 = { _0: "d", _1: 21540 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3269 = { _0: "e", _1: 277373 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3270 = { _0: "f", _1: 70771 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3271 = { _0: "g", _1: 1270 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3272 = { _0: "i", _1: 374187 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3273 = { _0: "k", _1: 165021 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3274 = { _0: "l", _1: 90714 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3275 = { _0: "m", _1: 97105 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3276 = { _0: "n", _1: 109643 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3277 = { _0: "o", _1: 258134 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3278 = { _0: "p", _1: 120002 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3279 = { _0: "r", _1: 125574 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3280 = { _0: "s", _1: 163630 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3281 = { _0: "t", _1: 243802 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3282 = { _0: "u", _1: 46715 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3283 = { _0: "v", _1: 37076 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3284 = { _0: "x", _1: 25061 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3285 = { _0: "z", _1: 13593 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3286 = { _0: "ð", _1: 60888 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3287 = { _0: "ɣ", _1: 48141 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3288 = { _0: "θ", _1: 52417 };
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N7_2abindS3289 = [_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3266, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3267, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3268, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3269, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3270, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3271, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3272, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3273, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3274, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3275, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3276, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3277, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3278, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3279, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3280, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3281, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3282, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3283, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3284, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3285, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3286, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3287, _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N5tupleS3288];
const _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0N7_2abindS3289, 0, 23), undefined);
const _bind$2 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib17ct__phones__total = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$2, 0, 0), undefined);
const _bind$3 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib10lex__exact = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
const _bind$4 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib9lex__bare = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined);
const _bind$5 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib9lex__fold = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$5, 0, 0), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib10g2p__indexN6recordS4639 = new _M0TP39aaronshaf17greek_2dphonology3lib5Phone("|", "", -2, 0);
const _bind$6 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib9ct__preds = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$6, 0, 0), undefined);
const _bind$7 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib16ct__units__total = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$7, 0, 0), undefined);
const _bind$8 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib9ct__units = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$8, 0, 0), undefined);
const _bind$9 = [];
const _M0FP39aaronshaf17greek_2dphonology3lib16ct__preds__total = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$9, 0, 0), undefined);
const _M0FP39aaronshaf17greek_2dphonology3lib11lex__accentN5tupleS3877 = { _0: 0, _1: false };
const _M0MPC16string10StringView4findN6constrS249 = 0;
const _M0FP39aaronshaf17greek_2dphonology3lib28extract__consonant__clustersN6recordS4287 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib15lexical__phraseN6recordS4029 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib15lexical__phraseN6recordS4030 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phraseN6recordS3970 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phraseN6recordS3971 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accentsN6recordS4060 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accentsN6recordS4061 = new _M0TPC16string10StringView(" ", 0, 1);
const _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accentsN6recordS4062 = new _M0TPC16string10StringView(",", 0, 1);
const _p = new Array(_M0FP39aaronshaf17greek_2dphonology3lib15contract__rules.length);
const _p$2 = _M0FP39aaronshaf17greek_2dphonology3lib15contract__rules.length;
let _tmp = 0;
while (true) {
  const _p$3 = _tmp;
  if (_p$3 < _p$2) {
    const _p$4 = _M0FP39aaronshaf17greek_2dphonology3lib15contract__rules[_p$3];
    const _p$5 = _M0FP39aaronshaf17greek_2dphonology3lib6expand(_p$4._0);
    const _p$6 = [];
    const _p$7 = _p$5.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$8 = _tmp$2;
      if (_p$8 < _p$7) {
        const _p$9 = _p$5[_p$8];
        const _p$10 = _p$9.length;
        let _tmp$3 = 0;
        while (true) {
          const _p$11 = _tmp$3;
          if (_p$11 < _p$10) {
            let _p$12;
            let _p$13;
            _L: {
              const _p$14 = _p$9.charCodeAt(_p$11);
              if (_p$14 >= 55296 && _p$14 <= 56319 && (_p$11 + 1 | 0) < _p$10) {
                const _p$15 = _p$9.charCodeAt(_p$11 + 1 | 0);
                if (_p$15 >= 56320 && _p$15 <= 57343) {
                  const _tmp$4 = _p$11 + 2 | 0;
                  const _p$16 = (((Math.imul(_p$14 - 55296 | 0, 1024) | 0) + _p$15 | 0) - 56320 | 0) + 65536 | 0;
                  _p$12 = _tmp$4;
                  _p$13 = _p$16;
                  break _L;
                } else {
                  const _tmp$4 = _p$11 + 1 | 0;
                  const _p$16 = _p$14;
                  _p$12 = _tmp$4;
                  _p$13 = _p$16;
                  break _L;
                }
              } else {
                const _tmp$4 = _p$11 + 1 | 0;
                const _p$15 = _p$14;
                _p$12 = _tmp$4;
                _p$13 = _p$15;
                break _L;
              }
            }
            _M0MPC15array5Array4pushGiE(_p$6, _p$13);
            _tmp$3 = _p$12;
            continue;
          } else {
            break;
          }
        }
        _tmp$2 = _p$8 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _p$8;
    if (_p$4._1 === "[ει]") {
      _p$8 = [1114112];
    } else {
      if (_p$4._1 === "[ου]") {
        _p$8 = [1114113];
      } else {
        const _p$9 = _M0FP39aaronshaf17greek_2dphonology3lib5chars(_p$4._1);
        const _p$10 = new Array(_p$9.length);
        const _p$11 = _p$9.length;
        let _tmp$3 = 0;
        while (true) {
          const _p$12 = _tmp$3;
          if (_p$12 < _p$11) {
            const _p$13 = _p$9[_p$12];
            _p$10[_p$12] = _p$13;
            _tmp$3 = _p$12 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _p$8 = _p$10;
      }
    }
    _p[_p$3] = { _0: _M0MPC15array10FixedArray11from__arrayGiE(new _M0TPB9ArrayViewGiE(_p$6, 0, _p$6.length)), _1: _M0FP39aaronshaf17greek_2dphonology3lib11char__count(_M0MPC15array5Array2atGsE(_p$5, 0)), _2: _M0MPC15array10FixedArray11from__arrayGiE(new _M0TPB9ArrayViewGiE(_p$8, 0, _p$8.length)) };
    _tmp = _p$3 + 1 | 0;
    continue;
  } else {
    break;
  }
}
const _M0FP39aaronshaf17greek_2dphonology3lib16contract__tables = _p;
const _M0FP39aaronshaf17greek_2dphonology3lib4jarrN6recordS4386 = new _M0TPC16string10StringView(",", 0, 1);
const _M0MPC16string6String4trimN6recordS399 = new _M0TPC16string10StringView("\t\n\r ", 0, 4);
const _M0FP39aaronshaf17greek_2dphonology3api8run__strN6recordS4881 = new _M0TPC16string10StringView("\u0001", 0, 1);
function _M0FPB13consume4__acc(acc, input) {
  const _p$3 = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$4 = 17;
  return Math.imul(_p$3 << _p$4 | (_p$3 >>> (32 - _p$4 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB4Iter4nextGsE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$10 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS45GsE;
  } else {
    if (_bind$10 === undefined) {
    } else {
      const _Some = _bind$10;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS44GsE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$10 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS61GcE;
  } else {
    if (_bind$10 === undefined) {
    } else {
      const _Some = _bind$10;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS60GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS78GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS84GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind$10 = chars.end - chars.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp$2 = end_offset;
  let _tmp$3 = 0;
  while (true) {
    const utf16_offset = _tmp$2;
    const char_count = _tmp$3;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp$2 = utf16_offset - 2 | 0;
        _tmp$3 = char_count + 1 | 0;
        continue;
      } else {
        _tmp$2 = utf16_offset - 1 | 0;
        _tmp$3 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp$2 = start_offset;
    let _tmp$3 = 0;
    while (true) {
      const utf16_offset = _tmp$2;
      const char_count = _tmp$3;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp$2 = utf16_offset + 2 | 0;
          _tmp$3 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$2 = utf16_offset + 1 | 0;
          _tmp$3 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPB13StringBuilder5reset(self) {
  self.val = "";
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$3;
        if (k > 0) {
          const _p$3 = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$3 = c !== _p$3;
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          const _tmp$4 = k - 1 | 0;
          k = _tmp$4 >>> 0 < table.length ? table[_tmp$4] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p$3 = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p$3) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$3;
        if (k > 0) {
          const _p$3 = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$3 = c !== _p$3;
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          const _tmp$4 = k - 1 | 0;
          k = _tmp$4 >>> 0 < table.length ? table[_tmp$4] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p$3 = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p$3) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    if (pos < candidate_end) {
      let _tmp$3;
      const _p$3 = data.charCodeAt(pos);
      if (_p$3 === first) {
        const _p$4 = data.charCodeAt(pos + last_offset | 0);
        _tmp$3 = _p$4 === last;
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        return pos;
      }
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < length) {
      const _p$3 = left.charCodeAt(left_start + i | 0);
      const _p$4 = right.charCodeAt(right_start + i | 0);
      if (_p$3 !== _p$4) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp$2 = target_start;
  let _tmp$3 = 0;
  while (true) {
    const pos = _tmp$2;
    const failures = _tmp$3;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp$2 = found + 1 | 0;
      _tmp$3 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    if (pos < end) {
      const _p$3 = data.charCodeAt(pos);
      if (_p$3 === code) {
        return pos;
      }
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS249;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib5PhoneEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      const _p$3 = str.charCodeAt(i);
      if (_p$3 === code) {
        return true;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$10 = chars.str;
  const _bind$11 = chars.start;
  const _bind$12 = chars.end;
  let _tmp$2 = _bind$11;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$12) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$13 = _bind$10.charCodeAt(_string_index);
        if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index + 1 | 0) < _bind$12) {
          const _bind$14 = _bind$10.charCodeAt(_string_index + 1 | 0);
          if (_bind$14 >= 56320 && _bind$14 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$13;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$13;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$13 = code >>> 5 | 0;
        switch (_bind$13) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$10 = code >>> 5 | 0;
    switch (_bind$10) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    let _tmp$3;
    if (pos < end) {
      const _p$3 = str.charCodeAt(pos);
      _tmp$3 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p$3);
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$2 = end;
  while (true) {
    const pos = _tmp$2;
    let _tmp$3;
    if (pos > start) {
      const _p$3 = str.charCodeAt(pos - 1 | 0);
      _tmp$3 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p$3);
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      _tmp$2 = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i < (len - 1 | 0)) {
                const _p$3 = self.str.charCodeAt(self.start + i | 0);
                if (_p$3 === high$2) {
                  const _p$4 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$4 === low) {
                    return true;
                  }
                  _tmp$2 = i + 2 | 0;
                  continue;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$3 = x.str;
      const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$4;
      if (_bind$10 === undefined) {
        _tmp$4 = x.end;
      } else {
        const _Some = _bind$10;
        _tmp$4 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$3, _tmp$4, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$2 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$2 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$10 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$10 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$10;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = _M0MPC16string6String4trimN6recordS399;
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind$10 = _M0MPB4Iter4nextGsE(self);
    if (_bind$10 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$10;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind$10 = _M0MPB4Iter4nextGcE(self);
    if (_bind$10 === -1) {
      return undefined;
    } else {
      const _Some = _bind$10;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind$10 = remaining.val;
    if (_bind$10 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$10;
      const _view = _Some;
      const _bind$11 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$11 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$11;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind$10 = self.size_hint;
  let result;
  if (_bind$10 === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$11 = _M0MPB4Iter4nextGsE(self);
    if (_bind$11 === undefined) {
      break;
    } else {
      const _Some = _bind$11;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0MPC15array10FixedArray11from__arrayGiE(array) {
  const _p$3 = array.end - array.start | 0;
  if (_p$3 <= 0) {
    return [];
  } else {
    const _p$4 = 0;
    const _p$5 = $make_array_len_and_init(_p$3, array.buf[array.start + _p$4 | 0]);
    let _tmp$2 = 1;
    while (true) {
      const _p$6 = _tmp$2;
      if (_p$6 < _p$3) {
        if (_p$6 >>> 0 < _p$5.length) {
          _p$5[_p$6] = array.buf[array.start + _p$6 | 0];
        } else {
          $oob();
        }
        _tmp$2 = _p$6 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$5;
  }
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$10 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$2 = 0;
    let _tmp$3 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$2;
      const size_hint$2 = _tmp$3;
      if (_ < _bind$10) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$2 = _ + 1 | 0;
        const _bind$11 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$3 = (size_hint$2 + (_bind$11.end - _bind$11.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$11 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$11) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$11 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$11) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function _M0MPC16option6Option10unwrap__orGdE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC16option6Option10unwrap__orGiE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGRPB5ArrayGUsdEEE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGiRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$10 = capacity$2 - 1 | 0;
  const _bind$11 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$12 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$13 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGsEE(_bind$12, 0, capacity$2, _bind$10, _bind$11, _bind$13, -1);
}
function _M0FPB8new__mapGiUsRPB5ArrayGiEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$10 = capacity$2 - 1 | 0;
  const _bind$11 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$12 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$13 = undefined;
  return new _M0TPB3MapGiUsRPB5ArrayGiEEE(_bind$12, 0, capacity$2, _bind$10, _bind$11, _bind$13, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$10 = capacity$2 - 1 | 0;
  const _bind$11 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$12 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$13 = undefined;
  return new _M0TPB3MapGsiE(_bind$12, 0, capacity$2, _bind$10, _bind$11, _bind$13, -1);
}
function _M0FPB8new__mapGsRPB5ArrayGUsdEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$10 = capacity$2 - 1 | 0;
  const _bind$11 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$12 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$13 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGUsdEEE(_bind$12, 0, capacity$2, _bind$10, _bind$11, _bind$13, -1);
}
function _M0FPB8new__mapGsdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$10 = capacity$2 - 1 | 0;
  const _bind$11 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$12 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$13 = undefined;
  return new _M0TPB3MapGsdE(_bind$12, 0, capacity$2, _bind$10, _bind$11, _bind$13, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p$3 = capacity;
  if (length > ((Math.imul(_p$3, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, entry) {
  const _bind$10 = self.tail;
  if (_bind$10 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p$3 = _bind$10 >>> 0 < _tmp$2.length ? _tmp$2[_bind$10] : $oob();
    let _tmp$3;
    if (_p$3 === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$4 = _p$3;
      _tmp$3 = _p$4;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiUsRPB5ArrayGiEEE(self, idx, entry) {
  const _bind$10 = self.tail;
  if (_bind$10 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p$3 = _bind$10 >>> 0 < _tmp$2.length ? _tmp$2[_bind$10] : $oob();
    let _tmp$3;
    if (_p$3 === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$4 = _p$3;
      _tmp$3 = _p$4;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind$10 = self.tail;
  if (_bind$10 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p$3 = _bind$10 >>> 0 < _tmp$2.length ? _tmp$2[_bind$10] : $oob();
    let _tmp$3;
    if (_p$3 === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$4 = _p$3;
      _tmp$3 = _p$4;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUsdEEE(self, idx, entry) {
  const _bind$10 = self.tail;
  if (_bind$10 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p$3 = _bind$10 >>> 0 < _tmp$2.length ? _tmp$2[_bind$10] : $oob();
    let _tmp$3;
    if (_p$3 === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$4 = _p$3;
      _tmp$3 = _p$4;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsdE(self, idx, entry) {
  const _bind$10 = self.tail;
  if (_bind$10 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p$3 = _bind$10 >>> 0 < _tmp$2.length ? _tmp$2[_bind$10] : $oob();
    let _tmp$3;
    if (_p$3 === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$4 = _p$3;
      _tmp$3 = _p$4;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGiRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind$10 = entry.next;
  if (_bind$10 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$10;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiUsRPB5ArrayGiEEE(self, entry, new_idx) {
  const _bind$10 = entry.next;
  if (_bind$10 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$10;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind$10 = entry.next;
  if (_bind$10 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$10;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGUsdEEE(self, entry, new_idx) {
  const _bind$10 = entry.next;
  if (_bind$10 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$10;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsdE(self, entry, new_idx) {
  const _bind$10 = entry.next;
  if (_bind$10 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$10;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGiRPB5ArrayGsEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$10 = self.entries[idx$2];
    if (_bind$10 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiUsRPB5ArrayGiEEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$10 = self.entries[idx$2];
    if (_bind$10 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiUsRPB5ArrayGiEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiUsRPB5ArrayGiEEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$10 = self.entries[idx$2];
    if (_bind$10 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGUsdEEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$10 = self.entries[idx$2];
    if (_bind$10 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGUsdEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGUsdEEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsdE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$10 = self.entries[idx$2];
    if (_bind$10 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsdE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiUsRPB5ArrayGiEEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiUsRPB5ArrayGiEEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiUsRPB5ArrayGiEEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiUsRPB5ArrayGiEEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGUsdEEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUsdEEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGUsdEEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUsdEEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsdE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsdE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsdE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsdE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$3 = self.capacity;
  self.grow_at = (Math.imul(_p$3, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRPB5ArrayGsEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiUsRPB5ArrayGiEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$3 = self.capacity;
  self.grow_at = (Math.imul(_p$3, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiUsRPB5ArrayGiEEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$3 = self.capacity;
  self.grow_at = (Math.imul(_p$3, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGUsdEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$3 = self.capacity;
  self.grow_at = (Math.imul(_p$3, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGUsdEEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p$3 = self.capacity;
  self.grow_at = (Math.imul(_p$3, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsdE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGsEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$11 = self.tail;
      const _bind$12 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGsEE(_bind$11, _bind$12, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGsEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$11 = self.tail;
        const _bind$12 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGsEE(_bind$11, _bind$12, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiUsRPB5ArrayGiEEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiUsRPB5ArrayGiEEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$11 = self.tail;
      const _bind$12 = undefined;
      const entry = new _M0TPB5EntryGiUsRPB5ArrayGiEEE(_bind$11, _bind$12, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiUsRPB5ArrayGiEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiUsRPB5ArrayGiEEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiUsRPB5ArrayGiEEE(self, idx, _curr_entry);
        const _bind$11 = self.tail;
        const _bind$12 = undefined;
        const entry = new _M0TPB5EntryGiUsRPB5ArrayGiEEE(_bind$11, _bind$12, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiUsRPB5ArrayGiEEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$11 = self.tail;
      const _bind$12 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$11, _bind$12, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$11 = self.tail;
        const _bind$12 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$11, _bind$12, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGUsdEEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGUsdEEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$11 = self.tail;
      const _bind$12 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGUsdEEE(_bind$11, _bind$12, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUsdEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGUsdEEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGUsdEEE(self, idx, _curr_entry);
        const _bind$11 = self.tail;
        const _bind$12 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGUsdEEE(_bind$11, _bind$12, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGUsdEEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsdE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsdE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$11 = self.tail;
      const _bind$12 = undefined;
      const entry = new _M0TPB5EntryGsdE(_bind$11, _bind$12, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsdE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$10;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsdE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsdE(self, idx, _curr_entry);
        const _bind$11 = self.tail;
        const _bind$12 = undefined;
        const entry = new _M0TPB5EntryGsdE(_bind$11, _bind$12, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsdE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGiRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGsEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiUsRPB5ArrayGiEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiUsRPB5ArrayGiEEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGUsdEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGUsdEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsdE(self, key, value) {
  _M0MPB3Map15set__with__hashGsdE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGiRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p$3 = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p$3 ? _capacity : _p$3;
  }
  const m = _M0FPB8new__mapGiRPB5ArrayGsEE(capacity$2);
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGsEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiUsRPB5ArrayGiEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p$3 = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p$3 ? _capacity : _p$3;
  }
  const m = _M0FPB8new__mapGiUsRPB5ArrayGiEEE(capacity$2);
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiUsRPB5ArrayGiEEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p$3 = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p$3 ? _capacity : _p$3;
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGUsdEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p$3 = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p$3 ? _capacity : _p$3;
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGUsdEEE(capacity$2);
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGUsdEEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsdE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p$3 = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p$3 ? _capacity : _p$3;
  }
  const m = _M0FPB8new__mapGsdE(capacity$2);
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsdE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$10;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGsEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    } else {
      const _Some = _bind$10;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiUsRPB5ArrayGiEEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$10;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsdE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      return _M0DTPC16option6OptionGdE4None__;
    } else {
      const _Some = _bind$10;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGdE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGdE4None__;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGUsdEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$10 = self.entries[idx];
    if (_bind$10 === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4None__;
    } else {
      const _Some = _bind$10;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGUsdEEE4None__;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsiEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map5clearGsiE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsiEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map4iterGsiE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsiEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$10 = curr_entry.val;
        if (_bind$10 === undefined) {
          break _L;
        } else {
          const _Some = _bind$10;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsiE(self) {
  return _M0MPB3Map4iterGsiE(self);
}
function _M0MPB4Iter6filterGsE(self, f) {
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    while (true) {
      const _bind$10 = _M0MPB4Iter4nextGsE(self);
      if (_bind$10 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$10;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB5Iter24nextGsiE(self) {
  return _M0MPB4Iter4nextGsE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$10 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double5round(_tmp$2) {
  return Math.round(_tmp$2);
}
function _M0MPC15array5Array21clamped__view_2einnerGcE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$10 = self;
  return new _M0TPB9ArrayViewGcE(_bind$10, lo, lo + count | 0);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP39aaronshaf17greek_2dphonology3lib8LexEntryE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array11unsafe__popGcE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGcE(self) {
  if (self.length === 0) {
    return -1;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGcE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGcE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRPB5ArrayGsEE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGiE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGiE(arr, start, end) {
  const _bind$10 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$10)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGiE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGdE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGbE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGcE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGiE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp$2 = len;
  let _tmp$3 = 0;
  while (true) {
    const len$2 = _tmp$2;
    const limit = _tmp$3;
    if (len$2 > 0) {
      _tmp$2 = len$2 / 2 | 0;
      _tmp$3 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGiE(arr) {
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S1202GiE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S1203GiE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S1202GiE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S1202GiE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S1202GiE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGiE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S1203GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S1203GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S1203GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S1203GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGiE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGiE(arr) {
  const len = arr.end - arr.start | 0;
  const _bind$10 = len / 2 | 0;
  let _tmp$2 = _bind$10 - 1 | 0;
  let _tmp$3 = _bind$10 > 0;
  while (true) {
    const i = _tmp$2;
    const _more = _tmp$3;
    if (_more) {
      _M0FPB17fixed__sift__downGiE(arr, i);
      _tmp$2 = i - 1 | 0;
      _tmp$3 = i > 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4 = len - 1 | 0;
  let _tmp$5 = len > 1;
  while (true) {
    const i = _tmp$4;
    const _more = _tmp$5;
    if (_more) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB17fixed__sift__downGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0);
      _tmp$4 = i - 1 | 0;
      _tmp$5 = i > 1;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGiE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$10 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$10) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGiE(arr) {
  const _bind$10 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$10) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGiE(arr, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGiE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGiE(arr$2);
      return undefined;
    }
    const _bind$10 = _M0FPB20fixed__choose__pivotGiE(arr$2);
    const _pivot_index = _bind$10._0;
    const _likely_sorted = _bind$10._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGiE(arr$2)) {
        return undefined;
      }
    }
    const _bind$11 = _M0FPB16fixed__partitionGiE(arr$2, _pivot_index);
    const _pivot = _bind$11._0;
    const _partitioned = _bind$11._1;
    const _p$3 = len - _pivot | 0;
    const balanced$2 = (_pivot > _p$3 ? _p$3 : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$4 = _Some;
      if (_p$4 === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && _p$4 === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGiE(left, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGiE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGiE(self) {
  _M0FPB18fixed__quick__sortGiE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGiE(self) {
  const _bind$10 = self.length;
  _M0MPC15array12MutArrayView4sortGiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$10));
}
function _M0MPC15array5Array4makeGdE(len, elem) {
  const arr = new Array(len);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      arr[i] = elem;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array4makeGbE(len, elem) {
  const arr = new Array(len);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      arr[i] = elem;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array5clearGiE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, 0);
}
function _M0MPC15array5Array5clearGRP39aaronshaf17greek_2dphonology3lib8LexEntryE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP39aaronshaf17greek_2dphonology3lib8LexEntryE(self, 0);
}
function _M0MPC15array5Array14rev__in__placeGUiiEE(self) {
  const len = self.length;
  const _bind$10 = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const temp = self[i];
      self[i] = self[(len - i | 0) - 1 | 0];
      self[(len - i | 0) - 1 | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array8containsGiE(self, value) {
  const _bind$10 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind$10 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGcE(self, value) {
  const _bind$10 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC14math2ln(_tmp$2) {
  return Math.log(_tmp$2);
}
function _M0FPC14math3exp(_tmp$2) {
  return Math.exp(_tmp$2);
}
function _M0FP39aaronshaf17greek_2dphonology6kernel13syllable__cut(kinds, a, b, onset) {
  const ncons = (b - a | 0) - 1 | 0;
  const o = onset > ncons ? ncons : onset;
  return b - o | 0;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel7law__ok(nsyl, pos, circ, nuc_long, ult_long) {
  return pos < 1 || (pos > nsyl || pos > 3) ? false : pos === 3 && ult_long ? false : circ ? (pos > 2 ? false : nuc_long ? !(pos === 2 && ult_long) : false) : true;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel12extra__acute(lex_pos, lex_circ, proclitic, next_enclitic) {
  return next_enclitic ? (proclitic ? true : lex_pos === 3 ? true : lex_pos === 2 ? lex_circ : false) : false;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel7argmax5(w0, w1, w2, w3, w4) {
  let b = 0;
  let bw = w0;
  if (BigInt.asIntN(64, w1) > BigInt.asIntN(64, bw)) {
    b = 1;
    bw = w1;
  }
  if (BigInt.asIntN(64, w2) > BigInt.asIntN(64, bw)) {
    b = 2;
    bw = w2;
  }
  if (BigInt.asIntN(64, w3) > BigInt.asIntN(64, bw)) {
    b = 3;
    bw = w3;
  }
  if (BigInt.asIntN(64, w4) > BigInt.asIntN(64, bw)) {
    b = 4;
  }
  return b;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel10normalize5(w0, w1, w2, w3, w4, s) {
  const t = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, w0 + w1) + w2) + w3) + w4);
  if (t === 0n) {
    $panic();
  }
  const q0 = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, w0 * s)) / BigInt.asIntN(64, t));
  if (t === 0n) {
    $panic();
  }
  const q1 = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, w1 * s)) / BigInt.asIntN(64, t));
  if (t === 0n) {
    $panic();
  }
  const q2 = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, w2 * s)) / BigInt.asIntN(64, t));
  if (t === 0n) {
    $panic();
  }
  const q3 = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, w3 * s)) / BigInt.asIntN(64, t));
  if (t === 0n) {
    $panic();
  }
  const q4 = BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, w4 * s)) / BigInt.asIntN(64, t));
  const rem = BigInt.asUintN(64, s - BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, q0 + q1) + q2) + q3) + q4));
  const top = _M0FP39aaronshaf17greek_2dphonology6kernel7argmax5(w0, w1, w2, w3, w4);
  const r0 = top === 0 ? BigInt.asUintN(64, q0 + rem) : q0;
  const r1 = top === 1 ? BigInt.asUintN(64, q1 + rem) : q1;
  const r2 = top === 2 ? BigInt.asUintN(64, q2 + rem) : q2;
  const r3 = top === 3 ? BigInt.asUintN(64, q3 + rem) : q3;
  const r4 = top === 4 ? BigInt.asUintN(64, q4 + rem) : q4;
  return [r0, r1, r2, r3, r4];
}
function _M0FP39aaronshaf17greek_2dphonology6kernel11stop__class(c) {
  return c === 960 || (c === 946 || c === 966) ? 1 : c === 954 || (c === 947 || c === 967) ? 2 : c === 964 || (c === 948 || c === 952) ? 3 : 0;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel16amalgamate__core(cs, out) {
  const n = cs.length;
  let j = 0;
  let adv = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      let k;
      let _tmp$3;
      if ((i + 1 | 0) < n) {
        const _tmp$4 = i + 1 | 0;
        _tmp$3 = (_tmp$4 >>> 0 < cs.length ? cs[_tmp$4] : $oob()) === 963;
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        k = _M0FP39aaronshaf17greek_2dphonology6kernel11stop__class(i >>> 0 < cs.length ? cs[i] : $oob());
      } else {
        k = 0;
      }
      if (k === 1) {
        const _tmp$4 = j;
        if (_tmp$4 >>> 0 < out.length) {
          out[_tmp$4] = 968;
        } else {
          $oob();
        }
        adv = 2;
      } else {
        if (k === 2) {
          const _tmp$4 = j;
          if (_tmp$4 >>> 0 < out.length) {
            out[_tmp$4] = 958;
          } else {
            $oob();
          }
          adv = 2;
        } else {
          if (k === 3) {
            const _tmp$4 = j;
            if (_tmp$4 >>> 0 < out.length) {
              out[_tmp$4] = 963;
            } else {
              $oob();
            }
            adv = 2;
          } else {
            const _tmp$4 = j;
            if (_tmp$4 >>> 0 < out.length) {
              out[_tmp$4] = i >>> 0 < cs.length ? cs[i] : $oob();
            } else {
              $oob();
            }
            adv = 1;
          }
        }
      }
      j = j + 1 | 0;
      _tmp$2 = i + adv | 0;
      continue;
    } else {
      break;
    }
  }
  return j;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel16phrase__decision(kind, lex_pos, lex_circ, next_enc, word_follows, stop_after, interrog, is_ou, keeps, keeps_circ) {
  if (kind === 0) {
    const extra = _M0FP39aaronshaf17greek_2dphonology6kernel12extra__acute(lex_pos, lex_circ, false, next_enc);
    if (extra && lex_pos >= 2) {
      return 4;
    } else {
      if (lex_pos === 1) {
        if (lex_circ) {
          return 1;
        } else {
          if (interrog) {
            return 2;
          } else {
            const _p$3 = 1;
            const _p$4 = true;
            if (_p$3 === 1 && _p$4 ? word_follows : false) {
              return 3;
            } else {
              return 2;
            }
          }
        }
      } else {
        return 1;
      }
    }
  } else {
    if (kind === 1) {
      return next_enc ? 2 : stop_after && is_ou ? 2 : 0;
    } else {
      if (keeps) {
        if (keeps_circ) {
          return 5;
        } else {
          const _p$3 = 1;
          const _p$4 = true;
          if (_p$3 === 1 && _p$4 ? word_follows : false) {
            return 3;
          } else {
            return 2;
          }
        }
      } else {
        return next_enc ? 2 : 0;
      }
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology6kernel10alt__match(cs, i, alts, plen) {
  let found = false;
  if ((i + plen | 0) <= cs.length) {
    let _tmp$2 = 0;
    while (true) {
      const b = _tmp$2;
      if (b < ((alts.length - plen | 0) + 1 | 0)) {
        let same = (b % plen | 0) === 0;
        let _tmp$3 = 0;
        while (true) {
          const t = _tmp$3;
          if (t < plen) {
            const _tmp$4 = i + t | 0;
            const _tmp$5 = _tmp$4 >>> 0 < cs.length ? cs[_tmp$4] : $oob();
            const _tmp$6 = b + t | 0;
            if (_tmp$5 !== (_tmp$6 >>> 0 < alts.length ? alts[_tmp$6] : $oob())) {
              same = false;
            }
            _tmp$3 = t + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (same) {
          found = true;
        }
        _tmp$2 = b + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return found;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel14contract__core(cs, alts, plen, rep, rlen, out) {
  const n = cs.length;
  let j = 0;
  let hit_any = 0;
  let adv = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const m = _M0FP39aaronshaf17greek_2dphonology6kernel10alt__match(cs, i, alts, plen);
      if (m) {
        if (rlen >= 1) {
          const _tmp$3 = j;
          if (_tmp$3 >>> 0 < out.length) {
            out[_tmp$3] = 0 >>> 0 < rep.length ? rep[0] : $oob();
          } else {
            $oob();
          }
        }
        if (rlen >= 2) {
          const _tmp$3 = j + 1 | 0;
          if (_tmp$3 >>> 0 < out.length) {
            out[_tmp$3] = 1 >>> 0 < rep.length ? rep[1] : $oob();
          } else {
            $oob();
          }
        }
        j = j + rlen | 0;
        adv = plen;
        hit_any = 1;
      } else {
        const _tmp$3 = j;
        if (_tmp$3 >>> 0 < out.length) {
          out[_tmp$3] = i >>> 0 < cs.length ? cs[i] : $oob();
        } else {
          $oob();
        }
        j = j + 1 | 0;
        adv = 1;
      }
      _tmp$2 = i + adv | 0;
      continue;
    } else {
      break;
    }
  }
  return (Math.imul(2, j) | 0) + hit_any | 0;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(c) {
  return c === 945 || (c === 949 || (c === 951 || (c === 953 || (c === 959 || (c === 965 || c === 969)))));
}
function _M0FP39aaronshaf17greek_2dphonology6kernel7g__diph(a, b) {
  return b === 953 ? a === 945 || (a === 949 || (a === 959 || a === 965)) : b === 965 ? a === 945 || (a === 949 || (a === 959 || a === 951)) : false;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel12g__voiceless(c) {
  return c === 960 || (c === 954 || (c === 964 || (c === 966 || (c === 952 || (c === 967 || (c === 963 || (c === 958 || (c === 968 || c === 962))))))));
}
function _M0FP39aaronshaf17greek_2dphonology6kernel15g__voiced__cons(c) {
  return c === 946 || (c === 947 || (c === 948 || (c === 956 || (c === 957 || (c === 955 || c === 961)))));
}
function _M0FP39aaronshaf17greek_2dphonology6kernel8g__velar(c) {
  return c === 954 || (c === 947 || (c === 967 || c === 958));
}
function _M0FP39aaronshaf17greek_2dphonology6kernel8g__front(bs, dd, j) {
  if (j >= bs.length) {
    return false;
  } else {
    if (_M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(j >>> 0 < bs.length ? bs[j] : $oob())) {
      let _tmp$2;
      if ((j + 1 | 0) < bs.length) {
        let _tmp$3;
        const _tmp$4 = j + 1 | 0;
        if ((_tmp$4 >>> 0 < dd.length ? dd[_tmp$4] : $oob()) === 0) {
          const _tmp$5 = j >>> 0 < bs.length ? bs[j] : $oob();
          const _tmp$6 = j + 1 | 0;
          _tmp$3 = _M0FP39aaronshaf17greek_2dphonology6kernel7g__diph(_tmp$5, _tmp$6 >>> 0 < bs.length ? bs[_tmp$6] : $oob());
        } else {
          _tmp$3 = false;
        }
        _tmp$2 = _tmp$3;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        const a = j >>> 0 < bs.length ? bs[j] : $oob();
        const _tmp$3 = j + 1 | 0;
        const b = _tmp$3 >>> 0 < bs.length ? bs[_tmp$3] : $oob();
        return b === 953 || b === 965 && (a === 949 || a === 951);
      } else {
        const c = j >>> 0 < bs.length ? bs[j] : $oob();
        return c === 949 || (c === 951 || (c === 953 || c === 965));
      }
    } else {
      return false;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology6kernel12g__koine__vl(bs, f) {
  return f >= bs.length ? true : _M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(f >>> 0 < bs.length ? bs[f] : $oob()) ? false : _M0FP39aaronshaf17greek_2dphonology6kernel12g__voiceless(f >>> 0 < bs.length ? bs[f] : $oob());
}
function _M0FP39aaronshaf17greek_2dphonology6kernel13g__vowel__seq(s, c) {
  return c === 945 ? 1 : c === 953 ? 3 : c === 959 ? 4 : c === 949 ? (s === 2 ? 7 : 2) : c === 951 ? (s <= 1 ? 3 : s === 2 ? 2 : s === 3 ? 8 : 770) : c === 965 ? (s === 0 ? 3 : s === 4 ? 5 : 6) : c === 969 ? (s === 3 ? 9 : s === 4 ? 836 : 4) : 0;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel12g__diph__seq(s, bs, i) {
  const a = i >>> 0 < bs.length ? bs[i] : $oob();
  const _tmp$2 = i + 1 | 0;
  const b = _tmp$2 >>> 0 < bs.length ? bs[_tmp$2] : $oob();
  const ai = a === 945 && b === 953;
  const ei = a === 949 && b === 953;
  const oi = a === 959 && b === 953;
  const yi = a === 965 && b === 953;
  const ou = a === 959 && b === 965;
  const au = a === 945 && b === 965;
  const eu = a === 949 && b === 965;
  if (s === 3) {
    return ai ? 193 : ei ? 10 : oi ? 196 : yi ? 198 : ou ? 44 : au ? 321 : eu ? 322 : 328;
  } else {
    if (s === 4) {
      return ai ? 769 : ei ? 770 : oi ? 782 : yi ? 207 : ou ? 5 : au ? 833 : eu ? 336 : 21250;
    } else {
      if (s <= 1) {
        if (ai) {
          return 2;
        } else {
          if (ei) {
            return 3;
          } else {
            if (oi || yi) {
              return s === 1 ? 6 : 3;
            } else {
              if (ou) {
                return 5;
              } else {
                const head = a === 945 ? 1 : a === 949 ? 2 : 3;
                return head + (Math.imul(64, _M0FP39aaronshaf17greek_2dphonology6kernel12g__koine__vl(bs, i + 2 | 0) ? 18 : 19) | 0) | 0;
              }
            }
          }
        }
      } else {
        if (ai) {
          return 7;
        } else {
          if (ei) {
            return 3;
          } else {
            if (oi || yi) {
              return 6;
            } else {
              if (ou) {
                return 5;
              } else {
                const head = a === 945 ? 1 : a === 949 ? 7 : 2;
                let vl;
                if ((i + 2 | 0) < bs.length) {
                  const _tmp$3 = i + 2 | 0;
                  vl = _M0FP39aaronshaf17greek_2dphonology6kernel12g__voiceless(_tmp$3 >>> 0 < bs.length ? bs[_tmp$3] : $oob());
                } else {
                  vl = false;
                }
                return head + (Math.imul(64, vl ? 18 : 20) | 0) | 0;
              }
            }
          }
        }
      }
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology6kernel9g__simple(c) {
  return c === 946 ? 21 : c === 948 ? 22 : c === 954 ? 34 : c === 955 ? 37 : c === 956 ? 24 : c === 957 ? 25 : c === 960 ? 36 : c === 961 ? 38 : c === 963 || c === 962 ? 35 : c === 964 ? 39 : 0;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel12g__cons__seq(s, bs, dd, i) {
  const c = i >>> 0 < bs.length ? bs[i] : $oob();
  let nas;
  if ((i + 1 | 0) < bs.length) {
    const _tmp$2 = i + 1 | 0;
    nas = _M0FP39aaronshaf17greek_2dphonology6kernel8g__velar(_tmp$2 >>> 0 < bs.length ? bs[_tmp$2] : $oob());
  } else {
    nas = false;
  }
  if (c === 958) {
    return 2274;
  } else {
    if (c === 968) {
      return 2276;
    } else {
      if (s <= 1) {
        if (c === 947) {
          return nas ? 26 : _M0FP39aaronshaf17greek_2dphonology6kernel8g__front(bs, dd, i + 1 | 0) ? 27 : 28;
        } else {
          if (c === 967) {
            return _M0FP39aaronshaf17greek_2dphonology6kernel8g__front(bs, dd, i + 1 | 0) ? 29 : 30;
          } else {
            if (c === 946) {
              return 19;
            } else {
              if (c === 948) {
                return 32;
              } else {
                if (c === 950) {
                  return 31;
                } else {
                  if (c === 952) {
                    return 33;
                  } else {
                    if (c === 966) {
                      return 18;
                    } else {
                      let _tmp$2;
                      if (s === 0) {
                        let _tmp$3;
                        if (c === 963 || c === 962) {
                          let _tmp$4;
                          if ((i + 1 | 0) < bs.length) {
                            const _tmp$5 = i + 1 | 0;
                            _tmp$4 = _M0FP39aaronshaf17greek_2dphonology6kernel15g__voiced__cons(_tmp$5 >>> 0 < bs.length ? bs[_tmp$5] : $oob());
                          } else {
                            _tmp$4 = false;
                          }
                          _tmp$3 = _tmp$4;
                        } else {
                          _tmp$3 = false;
                        }
                        _tmp$2 = _tmp$3;
                      } else {
                        _tmp$2 = false;
                      }
                      if (_tmp$2) {
                        return 31;
                      } else {
                        return _M0FP39aaronshaf17greek_2dphonology6kernel9g__simple(c);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (s === 4) {
          return c === 947 ? (nas ? 26 : 23) : c === 950 ? 40 : c === 952 ? 33 : c === 966 ? 18 : c === 967 ? 30 : _M0FP39aaronshaf17greek_2dphonology6kernel9g__simple(c);
        } else {
          const koine = s === 2;
          return c === 947 ? (nas ? 26 : koine ? (_M0FP39aaronshaf17greek_2dphonology6kernel8g__front(bs, dd, i + 1 | 0) ? 27 : 28) : 23) : c === 946 ? (koine ? 19 : 21) : c === 948 ? (koine ? 32 : 22) : c === 950 ? (koine ? 31 : 1439) : c === 952 ? 41 : c === 966 ? 42 : c === 967 ? 43 : _M0FP39aaronshaf17greek_2dphonology6kernel9g__simple(c);
        }
      }
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology6kernel6g__put(s, out, k, q) {
  const p1 = q % 64 | 0;
  const p2 = (q / 64 | 0) % 64 | 0;
  const p3 = q / 4096 | 0;
  let j = k;
  if (p1 !== 0) {
    const _tmp$2 = j;
    if (_tmp$2 >>> 0 < out.length) {
      out[_tmp$2] = p1;
    } else {
      $oob();
    }
    j = j + 1 | 0;
  }
  if (p2 !== 0) {
    const _tmp$2 = j;
    if (_tmp$2 >>> 0 < out.length) {
      out[_tmp$2] = p2;
    } else {
      $oob();
    }
    j = j + 1 | 0;
  }
  if (p3 !== 0) {
    const _tmp$2 = j;
    if (_tmp$2 >>> 0 < out.length) {
      out[_tmp$2] = p3;
    } else {
      $oob();
    }
    j = j + 1 | 0;
  }
  return j;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel8g2p__adv(s, bs, dd, i) {
  if ((i + 1 | 0) < bs.length) {
    const c = i >>> 0 < bs.length ? bs[i] : $oob();
    const _tmp$2 = i + 1 | 0;
    const d = _tmp$2 >>> 0 < bs.length ? bs[_tmp$2] : $oob();
    let _tmp$3;
    if (_M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(c)) {
      let _tmp$4;
      if (_M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(d)) {
        let _tmp$5;
        const _tmp$6 = i + 1 | 0;
        if ((_tmp$6 >>> 0 < dd.length ? dd[_tmp$6] : $oob()) === 0) {
          _tmp$5 = _M0FP39aaronshaf17greek_2dphonology6kernel7g__diph(c, d);
        } else {
          _tmp$5 = false;
        }
        _tmp$4 = _tmp$5;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      return 2;
    } else {
      return s <= 1 && (c === 956 && d === 960 || (c === 957 && d === 964 || c === 947 && d === 954)) ? 2 : 1;
    }
  } else {
    return 1;
  }
}
function _M0FP39aaronshaf17greek_2dphonology6kernel9g2p__step(s, bs, rf, dd, i, out) {
  const n = bs.length;
  const c = i >>> 0 < bs.length ? bs[i] : $oob();
  const has_nxt = (i + 1 | 0) < n;
  const att = s === 3 || s === 4;
  let is_d;
  if (has_nxt) {
    let _tmp$2;
    if (_M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(c)) {
      let _tmp$3;
      const _tmp$4 = i + 1 | 0;
      if (_M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(_tmp$4 >>> 0 < bs.length ? bs[_tmp$4] : $oob())) {
        let _tmp$5;
        const _tmp$6 = i + 1 | 0;
        if ((_tmp$6 >>> 0 < dd.length ? dd[_tmp$6] : $oob()) === 0) {
          const _tmp$7 = i + 1 | 0;
          _tmp$5 = _M0FP39aaronshaf17greek_2dphonology6kernel7g__diph(c, _tmp$7 >>> 0 < bs.length ? bs[_tmp$7] : $oob());
        } else {
          _tmp$5 = false;
        }
        _tmp$3 = _tmp$5;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    is_d = _tmp$2;
  } else {
    is_d = false;
  }
  let rough;
  if (is_d) {
    if (att) {
      let _tmp$2;
      if ((i >>> 0 < rf.length ? rf[i] : $oob()) !== 0) {
        _tmp$2 = true;
      } else {
        const _tmp$3 = i + 1 | 0;
        _tmp$2 = (_tmp$3 >>> 0 < rf.length ? rf[_tmp$3] : $oob()) !== 0;
      }
      rough = _tmp$2;
    } else {
      rough = false;
    }
  } else {
    rough = _M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(c) ? att && (i >>> 0 < rf.length ? rf[i] : $oob()) !== 0 : att && (c === 961 && (i >>> 0 < rf.length ? rf[i] : $oob()) !== 0);
  }
  let k = 0;
  if (rough) {
    if (0 >>> 0 < out.length) {
      out[0] = 17;
    } else {
      $oob();
    }
    k = 1;
  }
  let mp;
  if (s <= 1) {
    let _tmp$2;
    if (has_nxt) {
      let _tmp$3;
      if (c === 956) {
        const _tmp$4 = i + 1 | 0;
        _tmp$3 = (_tmp$4 >>> 0 < bs.length ? bs[_tmp$4] : $oob()) === 960;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    mp = _tmp$2;
  } else {
    mp = false;
  }
  let nt;
  if (s <= 1) {
    let _tmp$2;
    if (has_nxt) {
      let _tmp$3;
      if (c === 957) {
        const _tmp$4 = i + 1 | 0;
        _tmp$3 = (_tmp$4 >>> 0 < bs.length ? bs[_tmp$4] : $oob()) === 964;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    nt = _tmp$2;
  } else {
    nt = false;
  }
  let gk;
  if (s <= 1) {
    let _tmp$2;
    if (has_nxt) {
      let _tmp$3;
      if (c === 947) {
        const _tmp$4 = i + 1 | 0;
        _tmp$3 = (_tmp$4 >>> 0 < bs.length ? bs[_tmp$4] : $oob()) === 954;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    gk = _tmp$2;
  } else {
    gk = false;
  }
  if (is_d) {
    k = _M0FP39aaronshaf17greek_2dphonology6kernel6g__put(s, out, k, _M0FP39aaronshaf17greek_2dphonology6kernel12g__diph__seq(s, bs, i));
    return k + (Math.imul(8, _M0FP39aaronshaf17greek_2dphonology6kernel8g2p__adv(s, bs, dd, i)) | 0) | 0;
  } else {
    if (_M0FP39aaronshaf17greek_2dphonology6kernel8g__vowel(c)) {
      k = _M0FP39aaronshaf17greek_2dphonology6kernel6g__put(s, out, k, _M0FP39aaronshaf17greek_2dphonology6kernel13g__vowel__seq(s, c));
      return k + (Math.imul(8, _M0FP39aaronshaf17greek_2dphonology6kernel8g2p__adv(s, bs, dd, i)) | 0) | 0;
    } else {
      if (mp || (nt || gk)) {
        const q = i === 0 ? (mp ? 21 : nt ? 22 : 23) : mp ? 1368 : nt ? 1433 : 1498;
        k = _M0FP39aaronshaf17greek_2dphonology6kernel6g__put(s, out, k, q);
        return k + (Math.imul(8, _M0FP39aaronshaf17greek_2dphonology6kernel8g2p__adv(s, bs, dd, i)) | 0) | 0;
      } else {
        k = _M0FP39aaronshaf17greek_2dphonology6kernel6g__put(s, out, k, _M0FP39aaronshaf17greek_2dphonology6kernel12g__cons__seq(s, bs, dd, i));
        return k + (Math.imul(8, _M0FP39aaronshaf17greek_2dphonology6kernel8g2p__adv(s, bs, dd, i)) | 0) | 0;
      }
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology6kernel10g2p__units(s, bs, rf, dd, starts) {
  const n = bs.length;
  let k = 0;
  let adv = 1;
  let pos = 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const _tmp$3 = k;
      if (_tmp$3 >>> 0 < starts.length) {
        starts[_tmp$3] = i;
      } else {
        $oob();
      }
      adv = _M0FP39aaronshaf17greek_2dphonology6kernel8g2p__adv(s, bs, dd, i);
      pos = i + adv | 0;
      k = k + 1 | 0;
      _tmp$2 = i + adv | 0;
      continue;
    } else {
      break;
    }
  }
  if (n === 0) {
    pos = 0;
  }
  const _tmp$3 = k;
  if (_tmp$3 >>> 0 < starts.length) {
    starts[_tmp$3] = pos;
  } else {
    $oob();
  }
  return k;
}
function _M0FP39aaronshaf17greek_2dphonology6kernel14g__attic__long(id) {
  return id === 1 ? 45 : id === 3 ? 46 : id === 6 ? 47 : id;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8is__apos(c) {
  return c === 8217 || (c === 39 || (c === 8125 || (c === 700 || c === 8127)));
}
function _M0FP39aaronshaf17greek_2dphonology3lib19is__greek__or__mark(c) {
  const o = c;
  return o >= 880 && o <= 1023 || (o >= 7936 && o <= 8191 || (c >= 768 && c <= 879 || _M0FP39aaronshaf17greek_2dphonology3lib8is__apos(c)));
}
function _M0FP39aaronshaf17greek_2dphonology3lib5chars(s) {
  const out = [];
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(out, _decoded_char);
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib11join__chars(cs) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = cs.end - cs.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const c = cs.buf[cs.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib10split__tok(t) {
  const cs = _M0FP39aaronshaf17greek_2dphonology3lib5chars(t);
  let a = 0;
  while (true) {
    if (a < cs.length && !_M0FP39aaronshaf17greek_2dphonology3lib19is__greek__or__mark(_M0MPC15array5Array2atGcE(cs, a))) {
      a = a + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let b = cs.length;
  while (true) {
    if (b > a && !_M0FP39aaronshaf17greek_2dphonology3lib19is__greek__or__mark(_M0MPC15array5Array2atGcE(cs, b - 1 | 0))) {
      b = b - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (a < b && _M0FP39aaronshaf17greek_2dphonology3lib8is__apos(_M0MPC15array5Array2atGcE(cs, a))) {
      a = a + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP39aaronshaf17greek_2dphonology3lib3Tok(_M0FP39aaronshaf17greek_2dphonology3lib11join__chars(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, 0, a)), _M0FP39aaronshaf17greek_2dphonology3lib11join__chars(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, a, b)), _M0FP39aaronshaf17greek_2dphonology3lib11join__chars(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, b, undefined)));
}
function _M0FP39aaronshaf17greek_2dphonology3lib9has__stop(s) {
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      _L$2: {
        _L$3: {
          switch (_decoded_char) {
            case 44: {
              break _L$3;
            }
            case 46: {
              break _L$3;
            }
            case 183: {
              break _L$3;
            }
            case 59: {
              break _L$3;
            }
            case 894: {
              break _L$3;
            }
            case 903: {
              break _L$3;
            }
            case 58: {
              break _L$3;
            }
            case 33: {
              break _L$3;
            }
            case 63: {
              break _L$3;
            }
            case 40: {
              break _L$3;
            }
            case 41: {
              break _L$3;
            }
            case 8212: {
              break _L$3;
            }
            case 8211: {
              break _L$3;
            }
            case 91: {
              break _L$3;
            }
            case 93: {
              break _L$3;
            }
          }
          break _L$2;
        }
        return true;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP39aaronshaf17greek_2dphonology3lib6decomp(c) {
  switch (c) {
    case 880: {
      return "ͱ";
    }
    case 882: {
      return "ͳ";
    }
    case 884: {
      return "ʹ";
    }
    case 886: {
      return "ͷ";
    }
    case 895: {
      return "ϳ";
    }
    case 902: {
      return "ά";
    }
    case 904: {
      return "έ";
    }
    case 905: {
      return "ή";
    }
    case 906: {
      return "ί";
    }
    case 908: {
      return "ό";
    }
    case 910: {
      return "ύ";
    }
    case 911: {
      return "ώ";
    }
    case 912: {
      return "ΐ";
    }
    case 913: {
      return "α";
    }
    case 914: {
      return "β";
    }
    case 915: {
      return "γ";
    }
    case 916: {
      return "δ";
    }
    case 917: {
      return "ε";
    }
    case 918: {
      return "ζ";
    }
    case 919: {
      return "η";
    }
    case 920: {
      return "θ";
    }
    case 921: {
      return "ι";
    }
    case 922: {
      return "κ";
    }
    case 923: {
      return "λ";
    }
    case 924: {
      return "μ";
    }
    case 925: {
      return "ν";
    }
    case 926: {
      return "ξ";
    }
    case 927: {
      return "ο";
    }
    case 928: {
      return "π";
    }
    case 929: {
      return "ρ";
    }
    case 931: {
      return "σ";
    }
    case 932: {
      return "τ";
    }
    case 933: {
      return "υ";
    }
    case 934: {
      return "φ";
    }
    case 935: {
      return "χ";
    }
    case 936: {
      return "ψ";
    }
    case 937: {
      return "ω";
    }
    case 938: {
      return "ϊ";
    }
    case 939: {
      return "ϋ";
    }
    case 940: {
      return "ά";
    }
    case 941: {
      return "έ";
    }
    case 942: {
      return "ή";
    }
    case 943: {
      return "ί";
    }
    case 944: {
      return "ΰ";
    }
    case 970: {
      return "ϊ";
    }
    case 971: {
      return "ϋ";
    }
    case 972: {
      return "ό";
    }
    case 973: {
      return "ύ";
    }
    case 974: {
      return "ώ";
    }
    case 975: {
      return "ϗ";
    }
    case 979: {
      return "ϓ";
    }
    case 980: {
      return "ϔ";
    }
    case 984: {
      return "ϙ";
    }
    case 986: {
      return "ϛ";
    }
    case 988: {
      return "ϝ";
    }
    case 990: {
      return "ϟ";
    }
    case 992: {
      return "ϡ";
    }
    case 994: {
      return "ϣ";
    }
    case 996: {
      return "ϥ";
    }
    case 998: {
      return "ϧ";
    }
    case 1000: {
      return "ϩ";
    }
    case 1002: {
      return "ϫ";
    }
    case 1004: {
      return "ϭ";
    }
    case 1006: {
      return "ϯ";
    }
    case 1012: {
      return "θ";
    }
    case 1015: {
      return "ϸ";
    }
    case 1017: {
      return "ϲ";
    }
    case 1018: {
      return "ϻ";
    }
    case 1021: {
      return "ͻ";
    }
    case 1022: {
      return "ͼ";
    }
    case 1023: {
      return "ͽ";
    }
    case 7936: {
      return "ἀ";
    }
    case 7937: {
      return "ἁ";
    }
    case 7938: {
      return "ἂ";
    }
    case 7939: {
      return "ἃ";
    }
    case 7940: {
      return "ἄ";
    }
    case 7941: {
      return "ἅ";
    }
    case 7942: {
      return "ἆ";
    }
    case 7943: {
      return "ἇ";
    }
    case 7944: {
      return "ἀ";
    }
    case 7945: {
      return "ἁ";
    }
    case 7946: {
      return "ἂ";
    }
    case 7947: {
      return "ἃ";
    }
    case 7948: {
      return "ἄ";
    }
    case 7949: {
      return "ἅ";
    }
    case 7950: {
      return "ἆ";
    }
    case 7951: {
      return "ἇ";
    }
    case 7952: {
      return "ἐ";
    }
    case 7953: {
      return "ἑ";
    }
    case 7954: {
      return "ἒ";
    }
    case 7955: {
      return "ἓ";
    }
    case 7956: {
      return "ἔ";
    }
    case 7957: {
      return "ἕ";
    }
    case 7960: {
      return "ἐ";
    }
    case 7961: {
      return "ἑ";
    }
    case 7962: {
      return "ἒ";
    }
    case 7963: {
      return "ἓ";
    }
    case 7964: {
      return "ἔ";
    }
    case 7965: {
      return "ἕ";
    }
    case 7968: {
      return "ἠ";
    }
    case 7969: {
      return "ἡ";
    }
    case 7970: {
      return "ἢ";
    }
    case 7971: {
      return "ἣ";
    }
    case 7972: {
      return "ἤ";
    }
    case 7973: {
      return "ἥ";
    }
    case 7974: {
      return "ἦ";
    }
    case 7975: {
      return "ἧ";
    }
    case 7976: {
      return "ἠ";
    }
    case 7977: {
      return "ἡ";
    }
    case 7978: {
      return "ἢ";
    }
    case 7979: {
      return "ἣ";
    }
    case 7980: {
      return "ἤ";
    }
    case 7981: {
      return "ἥ";
    }
    case 7982: {
      return "ἦ";
    }
    case 7983: {
      return "ἧ";
    }
    case 7984: {
      return "ἰ";
    }
    case 7985: {
      return "ἱ";
    }
    case 7986: {
      return "ἲ";
    }
    case 7987: {
      return "ἳ";
    }
    case 7988: {
      return "ἴ";
    }
    case 7989: {
      return "ἵ";
    }
    case 7990: {
      return "ἶ";
    }
    case 7991: {
      return "ἷ";
    }
    case 7992: {
      return "ἰ";
    }
    case 7993: {
      return "ἱ";
    }
    case 7994: {
      return "ἲ";
    }
    case 7995: {
      return "ἳ";
    }
    case 7996: {
      return "ἴ";
    }
    case 7997: {
      return "ἵ";
    }
    case 7998: {
      return "ἶ";
    }
    case 7999: {
      return "ἷ";
    }
    case 8000: {
      return "ὀ";
    }
    case 8001: {
      return "ὁ";
    }
    case 8002: {
      return "ὂ";
    }
    case 8003: {
      return "ὃ";
    }
    case 8004: {
      return "ὄ";
    }
    case 8005: {
      return "ὅ";
    }
    case 8008: {
      return "ὀ";
    }
    case 8009: {
      return "ὁ";
    }
    case 8010: {
      return "ὂ";
    }
    case 8011: {
      return "ὃ";
    }
    case 8012: {
      return "ὄ";
    }
    case 8013: {
      return "ὅ";
    }
    case 8016: {
      return "ὐ";
    }
    case 8017: {
      return "ὑ";
    }
    case 8018: {
      return "ὒ";
    }
    case 8019: {
      return "ὓ";
    }
    case 8020: {
      return "ὔ";
    }
    case 8021: {
      return "ὕ";
    }
    case 8022: {
      return "ὖ";
    }
    case 8023: {
      return "ὗ";
    }
    case 8025: {
      return "ὑ";
    }
    case 8027: {
      return "ὓ";
    }
    case 8029: {
      return "ὕ";
    }
    case 8031: {
      return "ὗ";
    }
    case 8032: {
      return "ὠ";
    }
    case 8033: {
      return "ὡ";
    }
    case 8034: {
      return "ὢ";
    }
    case 8035: {
      return "ὣ";
    }
    case 8036: {
      return "ὤ";
    }
    case 8037: {
      return "ὥ";
    }
    case 8038: {
      return "ὦ";
    }
    case 8039: {
      return "ὧ";
    }
    case 8040: {
      return "ὠ";
    }
    case 8041: {
      return "ὡ";
    }
    case 8042: {
      return "ὢ";
    }
    case 8043: {
      return "ὣ";
    }
    case 8044: {
      return "ὤ";
    }
    case 8045: {
      return "ὥ";
    }
    case 8046: {
      return "ὦ";
    }
    case 8047: {
      return "ὧ";
    }
    case 8048: {
      return "ὰ";
    }
    case 8049: {
      return "ά";
    }
    case 8050: {
      return "ὲ";
    }
    case 8051: {
      return "έ";
    }
    case 8052: {
      return "ὴ";
    }
    case 8053: {
      return "ή";
    }
    case 8054: {
      return "ὶ";
    }
    case 8055: {
      return "ί";
    }
    case 8056: {
      return "ὸ";
    }
    case 8057: {
      return "ό";
    }
    case 8058: {
      return "ὺ";
    }
    case 8059: {
      return "ύ";
    }
    case 8060: {
      return "ὼ";
    }
    case 8061: {
      return "ώ";
    }
    case 8064: {
      return "ᾀ";
    }
    case 8065: {
      return "ᾁ";
    }
    case 8066: {
      return "ᾂ";
    }
    case 8067: {
      return "ᾃ";
    }
    case 8068: {
      return "ᾄ";
    }
    case 8069: {
      return "ᾅ";
    }
    case 8070: {
      return "ᾆ";
    }
    case 8071: {
      return "ᾇ";
    }
    case 8072: {
      return "ᾀ";
    }
    case 8073: {
      return "ᾁ";
    }
    case 8074: {
      return "ᾂ";
    }
    case 8075: {
      return "ᾃ";
    }
    case 8076: {
      return "ᾄ";
    }
    case 8077: {
      return "ᾅ";
    }
    case 8078: {
      return "ᾆ";
    }
    case 8079: {
      return "ᾇ";
    }
    case 8080: {
      return "ᾐ";
    }
    case 8081: {
      return "ᾑ";
    }
    case 8082: {
      return "ᾒ";
    }
    case 8083: {
      return "ᾓ";
    }
    case 8084: {
      return "ᾔ";
    }
    case 8085: {
      return "ᾕ";
    }
    case 8086: {
      return "ᾖ";
    }
    case 8087: {
      return "ᾗ";
    }
    case 8088: {
      return "ᾐ";
    }
    case 8089: {
      return "ᾑ";
    }
    case 8090: {
      return "ᾒ";
    }
    case 8091: {
      return "ᾓ";
    }
    case 8092: {
      return "ᾔ";
    }
    case 8093: {
      return "ᾕ";
    }
    case 8094: {
      return "ᾖ";
    }
    case 8095: {
      return "ᾗ";
    }
    case 8096: {
      return "ᾠ";
    }
    case 8097: {
      return "ᾡ";
    }
    case 8098: {
      return "ᾢ";
    }
    case 8099: {
      return "ᾣ";
    }
    case 8100: {
      return "ᾤ";
    }
    case 8101: {
      return "ᾥ";
    }
    case 8102: {
      return "ᾦ";
    }
    case 8103: {
      return "ᾧ";
    }
    case 8104: {
      return "ᾠ";
    }
    case 8105: {
      return "ᾡ";
    }
    case 8106: {
      return "ᾢ";
    }
    case 8107: {
      return "ᾣ";
    }
    case 8108: {
      return "ᾤ";
    }
    case 8109: {
      return "ᾥ";
    }
    case 8110: {
      return "ᾦ";
    }
    case 8111: {
      return "ᾧ";
    }
    case 8112: {
      return "ᾰ";
    }
    case 8113: {
      return "ᾱ";
    }
    case 8114: {
      return "ᾲ";
    }
    case 8115: {
      return "ᾳ";
    }
    case 8116: {
      return "ᾴ";
    }
    case 8118: {
      return "ᾶ";
    }
    case 8119: {
      return "ᾷ";
    }
    case 8120: {
      return "ᾰ";
    }
    case 8121: {
      return "ᾱ";
    }
    case 8122: {
      return "ὰ";
    }
    case 8123: {
      return "ά";
    }
    case 8124: {
      return "ᾳ";
    }
    case 8126: {
      return "ι";
    }
    case 8130: {
      return "ῂ";
    }
    case 8131: {
      return "ῃ";
    }
    case 8132: {
      return "ῄ";
    }
    case 8134: {
      return "ῆ";
    }
    case 8135: {
      return "ῇ";
    }
    case 8136: {
      return "ὲ";
    }
    case 8137: {
      return "έ";
    }
    case 8138: {
      return "ὴ";
    }
    case 8139: {
      return "ή";
    }
    case 8140: {
      return "ῃ";
    }
    case 8144: {
      return "ῐ";
    }
    case 8145: {
      return "ῑ";
    }
    case 8146: {
      return "ῒ";
    }
    case 8147: {
      return "ΐ";
    }
    case 8150: {
      return "ῖ";
    }
    case 8151: {
      return "ῗ";
    }
    case 8152: {
      return "ῐ";
    }
    case 8153: {
      return "ῑ";
    }
    case 8154: {
      return "ὶ";
    }
    case 8155: {
      return "ί";
    }
    case 8160: {
      return "ῠ";
    }
    case 8161: {
      return "ῡ";
    }
    case 8162: {
      return "ῢ";
    }
    case 8163: {
      return "ΰ";
    }
    case 8164: {
      return "ῤ";
    }
    case 8165: {
      return "ῥ";
    }
    case 8166: {
      return "ῦ";
    }
    case 8167: {
      return "ῧ";
    }
    case 8168: {
      return "ῠ";
    }
    case 8169: {
      return "ῡ";
    }
    case 8170: {
      return "ὺ";
    }
    case 8171: {
      return "ύ";
    }
    case 8172: {
      return "ῥ";
    }
    case 8178: {
      return "ῲ";
    }
    case 8179: {
      return "ῳ";
    }
    case 8180: {
      return "ῴ";
    }
    case 8182: {
      return "ῶ";
    }
    case 8183: {
      return "ῷ";
    }
    case 8184: {
      return "ὸ";
    }
    case 8185: {
      return "ό";
    }
    case 8186: {
      return "ὼ";
    }
    case 8187: {
      return "ώ";
    }
    case 8188: {
      return "ῳ";
    }
    default: {
      return _M0IPC14char4CharPB4Show10to__string(c);
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib11first__char(s) {
  const _bind$10 = s.length;
  while (true) {
    if (0 < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(0);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && 1 < _bind$10) {
          const _bind$12 = s.charCodeAt(1);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = 2;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _p$3 = _bind$11;
            _decoded_next_string_index = 1;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _p$3 = _bind$11;
          _decoded_next_string_index = 1;
          _decoded_char = _p$3;
          break _L;
        }
      }
      return _decoded_char;
    } else {
      break;
    }
  }
  return 0;
}
function _M0FP39aaronshaf17greek_2dphonology3lib11fold__lower(c) {
  if (c === 962) {
    return 963;
  }
  const d = _M0FP39aaronshaf17greek_2dphonology3lib6decomp(c);
  const _p$3 = _M0IPC14char4CharPB4Show10to__string(c);
  if (!(d === _p$3)) {
    return _M0FP39aaronshaf17greek_2dphonology3lib11first__char(d);
  }
  if (c >= 65 && c <= 90) {
    return c + 32 | 0;
  }
  return c;
}
function _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookup(s) {
  switch (s) {
    case "Ὰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3429;
    }
    case "Ά": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3430;
    }
    case "Ᾱ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3431;
    }
    case "Ᾰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3432;
    }
    case "Ἀ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3433;
    }
    case "Ἂ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3434;
    }
    case "ᾊ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3435;
    }
    case "Ἄ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3436;
    }
    case "ᾌ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3437;
    }
    case "Ἆ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3438;
    }
    case "ᾎ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3439;
    }
    case "ᾈ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3440;
    }
    case "Ἁ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3441;
    }
    case "Ἃ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3442;
    }
    case "ᾋ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3443;
    }
    case "Ἅ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3444;
    }
    case "ᾍ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3445;
    }
    case "Ἇ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3446;
    }
    case "ᾏ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3447;
    }
    case "ᾉ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3448;
    }
    case "ᾼ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3449;
    }
    case "Ὲ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3450;
    }
    case "Έ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3451;
    }
    case "Ἐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3452;
    }
    case "Ἒ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3453;
    }
    case "Ἔ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3454;
    }
    case "Ἑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3455;
    }
    case "Ἓ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3456;
    }
    case "Ἕ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3457;
    }
    case "Ὴ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3458;
    }
    case "Ή": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3459;
    }
    case "Ἠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3460;
    }
    case "Ἢ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3461;
    }
    case "ᾚ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3462;
    }
    case "Ἤ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3463;
    }
    case "ᾜ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3464;
    }
    case "Ἦ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3465;
    }
    case "ᾞ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3466;
    }
    case "ᾘ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3467;
    }
    case "Ἡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3468;
    }
    case "Ἣ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3469;
    }
    case "ᾛ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3470;
    }
    case "Ἥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3471;
    }
    case "ᾝ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3472;
    }
    case "Ἧ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3473;
    }
    case "ᾟ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3474;
    }
    case "ᾙ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3475;
    }
    case "ῌ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3476;
    }
    case "Ὶ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3477;
    }
    case "Ί": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3478;
    }
    case "Ῑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3479;
    }
    case "Ῐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3480;
    }
    case "Ϊ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3481;
    }
    case "Ἰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3482;
    }
    case "Ἲ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3483;
    }
    case "Ἴ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3484;
    }
    case "Ἶ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3485;
    }
    case "Ἱ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3486;
    }
    case "Ἳ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3487;
    }
    case "Ἵ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3488;
    }
    case "Ἷ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3489;
    }
    case "Ὸ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3490;
    }
    case "Ό": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3491;
    }
    case "Ὀ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3492;
    }
    case "Ὂ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3493;
    }
    case "Ὄ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3494;
    }
    case "Ὁ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3495;
    }
    case "Ὃ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3496;
    }
    case "Ὅ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3497;
    }
    case "Ῥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3498;
    }
    case "Ὺ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3499;
    }
    case "Ύ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3500;
    }
    case "Ῡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3501;
    }
    case "Ῠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3502;
    }
    case "Ϋ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3503;
    }
    case "Ὑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3504;
    }
    case "Ὓ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3505;
    }
    case "Ὕ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3506;
    }
    case "Ὗ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3507;
    }
    case "Ὼ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3508;
    }
    case "Ώ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3509;
    }
    case "Ὠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3510;
    }
    case "Ὢ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3511;
    }
    case "ᾪ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3512;
    }
    case "Ὤ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3513;
    }
    case "ᾬ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3514;
    }
    case "Ὦ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3515;
    }
    case "ᾮ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3516;
    }
    case "ᾨ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3517;
    }
    case "Ὡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3518;
    }
    case "Ὣ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3519;
    }
    case "ᾫ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3520;
    }
    case "Ὥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3521;
    }
    case "ᾭ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3522;
    }
    case "Ὧ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3523;
    }
    case "ᾯ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3524;
    }
    case "ᾩ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3525;
    }
    case "ῼ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3526;
    }
    case "ὰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3527;
    }
    case "ᾲ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3528;
    }
    case "ά": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3529;
    }
    case "ᾴ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3530;
    }
    case "ᾱ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3531;
    }
    case "ᾰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3532;
    }
    case "ἀ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3533;
    }
    case "ἂ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3534;
    }
    case "ᾂ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3535;
    }
    case "ἄ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3536;
    }
    case "ᾄ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3537;
    }
    case "ἆ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3538;
    }
    case "ᾆ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3539;
    }
    case "ᾀ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3540;
    }
    case "ἁ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3541;
    }
    case "ἃ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3542;
    }
    case "ᾃ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3543;
    }
    case "ἅ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3544;
    }
    case "ᾅ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3545;
    }
    case "ἇ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3546;
    }
    case "ᾇ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3547;
    }
    case "ᾁ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3548;
    }
    case "ᾶ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3549;
    }
    case "ᾷ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3550;
    }
    case "ᾳ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3551;
    }
    case "ὲ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3552;
    }
    case "έ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3553;
    }
    case "ἐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3554;
    }
    case "ἒ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3555;
    }
    case "ἔ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3556;
    }
    case "ἑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3557;
    }
    case "ἓ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3558;
    }
    case "ἕ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3559;
    }
    case "ὴ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3560;
    }
    case "ῂ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3561;
    }
    case "ή": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3562;
    }
    case "ῄ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3563;
    }
    case "ἠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3564;
    }
    case "ἢ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3565;
    }
    case "ᾒ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3566;
    }
    case "ἤ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3567;
    }
    case "ᾔ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3568;
    }
    case "ἦ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3569;
    }
    case "ᾖ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3570;
    }
    case "ᾐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3571;
    }
    case "ἡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3572;
    }
    case "ἣ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3573;
    }
    case "ᾓ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3574;
    }
    case "ἥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3575;
    }
    case "ᾕ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3576;
    }
    case "ἧ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3577;
    }
    case "ᾗ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3578;
    }
    case "ᾑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3579;
    }
    case "ῆ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3580;
    }
    case "ῇ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3581;
    }
    case "ῃ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3582;
    }
    case "ὶ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3583;
    }
    case "ί": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3584;
    }
    case "ῑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3585;
    }
    case "ῐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3586;
    }
    case "ϊ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3587;
    }
    case "ῒ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3588;
    }
    case "ΐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3589;
    }
    case "ῗ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3590;
    }
    case "ἰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3591;
    }
    case "ἲ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3592;
    }
    case "ἴ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3593;
    }
    case "ἶ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3594;
    }
    case "ἱ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3595;
    }
    case "ἳ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3596;
    }
    case "ἵ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3597;
    }
    case "ἷ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3598;
    }
    case "ῖ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3599;
    }
    case "ὸ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3600;
    }
    case "ό": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3601;
    }
    case "ὀ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3602;
    }
    case "ὂ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3603;
    }
    case "ὄ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3604;
    }
    case "ὁ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3605;
    }
    case "ὃ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3606;
    }
    case "ὅ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3607;
    }
    case "ῤ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3608;
    }
    case "ῥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3609;
    }
    case "ὺ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3610;
    }
    case "ύ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3611;
    }
    case "ῡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3612;
    }
    case "ῠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3613;
    }
    case "ϋ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3614;
    }
    case "ῢ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3615;
    }
    case "ΰ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3616;
    }
    case "ῧ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3617;
    }
    case "ὐ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3618;
    }
    case "ὒ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3619;
    }
    case "ὔ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3620;
    }
    case "ὖ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3621;
    }
    case "ὑ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3622;
    }
    case "ὓ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3623;
    }
    case "ὕ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3624;
    }
    case "ὗ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3625;
    }
    case "ῦ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3626;
    }
    case "ὼ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3627;
    }
    case "ῲ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3628;
    }
    case "ώ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3629;
    }
    case "ῴ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3630;
    }
    case "ὠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3631;
    }
    case "ὢ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3632;
    }
    case "ᾢ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3633;
    }
    case "ὤ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3634;
    }
    case "ᾤ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3635;
    }
    case "ὦ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3636;
    }
    case "ᾦ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3637;
    }
    case "ᾠ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3638;
    }
    case "ὡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3639;
    }
    case "ὣ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3640;
    }
    case "ᾣ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3641;
    }
    case "ὥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3642;
    }
    case "ᾥ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3643;
    }
    case "ὧ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3644;
    }
    case "ᾧ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3645;
    }
    case "ᾡ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3646;
    }
    case "ῶ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3647;
    }
    case "ῷ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3648;
    }
    case "ῳ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3649;
    }
    case "ϓ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3650;
    }
    case "ϔ": {
      return _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookupN6constrS3651;
    }
    default: {
      return -1;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(c) {
  switch (c) {
    case 884: {
      return "ʹ";
    }
    case 902: {
      return "Ά";
    }
    case 904: {
      return "Έ";
    }
    case 905: {
      return "Ή";
    }
    case 906: {
      return "Ί";
    }
    case 908: {
      return "Ό";
    }
    case 910: {
      return "Ύ";
    }
    case 911: {
      return "Ώ";
    }
    case 912: {
      return "ΐ";
    }
    case 938: {
      return "Ϊ";
    }
    case 939: {
      return "Ϋ";
    }
    case 940: {
      return "ά";
    }
    case 941: {
      return "έ";
    }
    case 942: {
      return "ή";
    }
    case 943: {
      return "ί";
    }
    case 944: {
      return "ΰ";
    }
    case 970: {
      return "ϊ";
    }
    case 971: {
      return "ϋ";
    }
    case 972: {
      return "ό";
    }
    case 973: {
      return "ύ";
    }
    case 974: {
      return "ώ";
    }
    case 979: {
      return "ϓ";
    }
    case 980: {
      return "ϔ";
    }
    case 7936: {
      return "ἀ";
    }
    case 7937: {
      return "ἁ";
    }
    case 7938: {
      return "ἂ";
    }
    case 7939: {
      return "ἃ";
    }
    case 7940: {
      return "ἄ";
    }
    case 7941: {
      return "ἅ";
    }
    case 7942: {
      return "ἆ";
    }
    case 7943: {
      return "ἇ";
    }
    case 7944: {
      return "Ἀ";
    }
    case 7945: {
      return "Ἁ";
    }
    case 7946: {
      return "Ἂ";
    }
    case 7947: {
      return "Ἃ";
    }
    case 7948: {
      return "Ἄ";
    }
    case 7949: {
      return "Ἅ";
    }
    case 7950: {
      return "Ἆ";
    }
    case 7951: {
      return "Ἇ";
    }
    case 7952: {
      return "ἐ";
    }
    case 7953: {
      return "ἑ";
    }
    case 7954: {
      return "ἒ";
    }
    case 7955: {
      return "ἓ";
    }
    case 7956: {
      return "ἔ";
    }
    case 7957: {
      return "ἕ";
    }
    case 7960: {
      return "Ἐ";
    }
    case 7961: {
      return "Ἑ";
    }
    case 7962: {
      return "Ἒ";
    }
    case 7963: {
      return "Ἓ";
    }
    case 7964: {
      return "Ἔ";
    }
    case 7965: {
      return "Ἕ";
    }
    case 7968: {
      return "ἠ";
    }
    case 7969: {
      return "ἡ";
    }
    case 7970: {
      return "ἢ";
    }
    case 7971: {
      return "ἣ";
    }
    case 7972: {
      return "ἤ";
    }
    case 7973: {
      return "ἥ";
    }
    case 7974: {
      return "ἦ";
    }
    case 7975: {
      return "ἧ";
    }
    case 7976: {
      return "Ἠ";
    }
    case 7977: {
      return "Ἡ";
    }
    case 7978: {
      return "Ἢ";
    }
    case 7979: {
      return "Ἣ";
    }
    case 7980: {
      return "Ἤ";
    }
    case 7981: {
      return "Ἥ";
    }
    case 7982: {
      return "Ἦ";
    }
    case 7983: {
      return "Ἧ";
    }
    case 7984: {
      return "ἰ";
    }
    case 7985: {
      return "ἱ";
    }
    case 7986: {
      return "ἲ";
    }
    case 7987: {
      return "ἳ";
    }
    case 7988: {
      return "ἴ";
    }
    case 7989: {
      return "ἵ";
    }
    case 7990: {
      return "ἶ";
    }
    case 7991: {
      return "ἷ";
    }
    case 7992: {
      return "Ἰ";
    }
    case 7993: {
      return "Ἱ";
    }
    case 7994: {
      return "Ἲ";
    }
    case 7995: {
      return "Ἳ";
    }
    case 7996: {
      return "Ἴ";
    }
    case 7997: {
      return "Ἵ";
    }
    case 7998: {
      return "Ἶ";
    }
    case 7999: {
      return "Ἷ";
    }
    case 8000: {
      return "ὀ";
    }
    case 8001: {
      return "ὁ";
    }
    case 8002: {
      return "ὂ";
    }
    case 8003: {
      return "ὃ";
    }
    case 8004: {
      return "ὄ";
    }
    case 8005: {
      return "ὅ";
    }
    case 8008: {
      return "Ὀ";
    }
    case 8009: {
      return "Ὁ";
    }
    case 8010: {
      return "Ὂ";
    }
    case 8011: {
      return "Ὃ";
    }
    case 8012: {
      return "Ὄ";
    }
    case 8013: {
      return "Ὅ";
    }
    case 8016: {
      return "ὐ";
    }
    case 8017: {
      return "ὑ";
    }
    case 8018: {
      return "ὒ";
    }
    case 8019: {
      return "ὓ";
    }
    case 8020: {
      return "ὔ";
    }
    case 8021: {
      return "ὕ";
    }
    case 8022: {
      return "ὖ";
    }
    case 8023: {
      return "ὗ";
    }
    case 8025: {
      return "Ὑ";
    }
    case 8027: {
      return "Ὓ";
    }
    case 8029: {
      return "Ὕ";
    }
    case 8031: {
      return "Ὗ";
    }
    case 8032: {
      return "ὠ";
    }
    case 8033: {
      return "ὡ";
    }
    case 8034: {
      return "ὢ";
    }
    case 8035: {
      return "ὣ";
    }
    case 8036: {
      return "ὤ";
    }
    case 8037: {
      return "ὥ";
    }
    case 8038: {
      return "ὦ";
    }
    case 8039: {
      return "ὧ";
    }
    case 8040: {
      return "Ὠ";
    }
    case 8041: {
      return "Ὡ";
    }
    case 8042: {
      return "Ὢ";
    }
    case 8043: {
      return "Ὣ";
    }
    case 8044: {
      return "Ὤ";
    }
    case 8045: {
      return "Ὥ";
    }
    case 8046: {
      return "Ὦ";
    }
    case 8047: {
      return "Ὧ";
    }
    case 8048: {
      return "ὰ";
    }
    case 8049: {
      return "ά";
    }
    case 8050: {
      return "ὲ";
    }
    case 8051: {
      return "έ";
    }
    case 8052: {
      return "ὴ";
    }
    case 8053: {
      return "ή";
    }
    case 8054: {
      return "ὶ";
    }
    case 8055: {
      return "ί";
    }
    case 8056: {
      return "ὸ";
    }
    case 8057: {
      return "ό";
    }
    case 8058: {
      return "ὺ";
    }
    case 8059: {
      return "ύ";
    }
    case 8060: {
      return "ὼ";
    }
    case 8061: {
      return "ώ";
    }
    case 8064: {
      return "ᾀ";
    }
    case 8065: {
      return "ᾁ";
    }
    case 8066: {
      return "ᾂ";
    }
    case 8067: {
      return "ᾃ";
    }
    case 8068: {
      return "ᾄ";
    }
    case 8069: {
      return "ᾅ";
    }
    case 8070: {
      return "ᾆ";
    }
    case 8071: {
      return "ᾇ";
    }
    case 8072: {
      return "ᾈ";
    }
    case 8073: {
      return "ᾉ";
    }
    case 8074: {
      return "ᾊ";
    }
    case 8075: {
      return "ᾋ";
    }
    case 8076: {
      return "ᾌ";
    }
    case 8077: {
      return "ᾍ";
    }
    case 8078: {
      return "ᾎ";
    }
    case 8079: {
      return "ᾏ";
    }
    case 8080: {
      return "ᾐ";
    }
    case 8081: {
      return "ᾑ";
    }
    case 8082: {
      return "ᾒ";
    }
    case 8083: {
      return "ᾓ";
    }
    case 8084: {
      return "ᾔ";
    }
    case 8085: {
      return "ᾕ";
    }
    case 8086: {
      return "ᾖ";
    }
    case 8087: {
      return "ᾗ";
    }
    case 8088: {
      return "ᾘ";
    }
    case 8089: {
      return "ᾙ";
    }
    case 8090: {
      return "ᾚ";
    }
    case 8091: {
      return "ᾛ";
    }
    case 8092: {
      return "ᾜ";
    }
    case 8093: {
      return "ᾝ";
    }
    case 8094: {
      return "ᾞ";
    }
    case 8095: {
      return "ᾟ";
    }
    case 8096: {
      return "ᾠ";
    }
    case 8097: {
      return "ᾡ";
    }
    case 8098: {
      return "ᾢ";
    }
    case 8099: {
      return "ᾣ";
    }
    case 8100: {
      return "ᾤ";
    }
    case 8101: {
      return "ᾥ";
    }
    case 8102: {
      return "ᾦ";
    }
    case 8103: {
      return "ᾧ";
    }
    case 8104: {
      return "ᾨ";
    }
    case 8105: {
      return "ᾩ";
    }
    case 8106: {
      return "ᾪ";
    }
    case 8107: {
      return "ᾫ";
    }
    case 8108: {
      return "ᾬ";
    }
    case 8109: {
      return "ᾭ";
    }
    case 8110: {
      return "ᾮ";
    }
    case 8111: {
      return "ᾯ";
    }
    case 8112: {
      return "ᾰ";
    }
    case 8113: {
      return "ᾱ";
    }
    case 8114: {
      return "ᾲ";
    }
    case 8115: {
      return "ᾳ";
    }
    case 8116: {
      return "ᾴ";
    }
    case 8118: {
      return "ᾶ";
    }
    case 8119: {
      return "ᾷ";
    }
    case 8120: {
      return "Ᾰ";
    }
    case 8121: {
      return "Ᾱ";
    }
    case 8122: {
      return "Ὰ";
    }
    case 8123: {
      return "Ά";
    }
    case 8124: {
      return "ᾼ";
    }
    case 8126: {
      return "ι";
    }
    case 8130: {
      return "ῂ";
    }
    case 8131: {
      return "ῃ";
    }
    case 8132: {
      return "ῄ";
    }
    case 8134: {
      return "ῆ";
    }
    case 8135: {
      return "ῇ";
    }
    case 8136: {
      return "Ὲ";
    }
    case 8137: {
      return "Έ";
    }
    case 8138: {
      return "Ὴ";
    }
    case 8139: {
      return "Ή";
    }
    case 8140: {
      return "ῌ";
    }
    case 8144: {
      return "ῐ";
    }
    case 8145: {
      return "ῑ";
    }
    case 8146: {
      return "ῒ";
    }
    case 8147: {
      return "ΐ";
    }
    case 8150: {
      return "ῖ";
    }
    case 8151: {
      return "ῗ";
    }
    case 8152: {
      return "Ῐ";
    }
    case 8153: {
      return "Ῑ";
    }
    case 8154: {
      return "Ὶ";
    }
    case 8155: {
      return "Ί";
    }
    case 8160: {
      return "ῠ";
    }
    case 8161: {
      return "ῡ";
    }
    case 8162: {
      return "ῢ";
    }
    case 8163: {
      return "ΰ";
    }
    case 8164: {
      return "ῤ";
    }
    case 8165: {
      return "ῥ";
    }
    case 8166: {
      return "ῦ";
    }
    case 8167: {
      return "ῧ";
    }
    case 8168: {
      return "Ῠ";
    }
    case 8169: {
      return "Ῡ";
    }
    case 8170: {
      return "Ὺ";
    }
    case 8171: {
      return "Ύ";
    }
    case 8172: {
      return "Ῥ";
    }
    case 8178: {
      return "ῲ";
    }
    case 8179: {
      return "ῳ";
    }
    case 8180: {
      return "ῴ";
    }
    case 8182: {
      return "ῶ";
    }
    case 8183: {
      return "ῷ";
    }
    case 8184: {
      return "Ὸ";
    }
    case 8185: {
      return "Ό";
    }
    case 8186: {
      return "Ὼ";
    }
    case 8187: {
      return "Ώ";
    }
    case 8188: {
      return "ῼ";
    }
    default: {
      return _M0IPC14char4CharPB4Show10to__string(c);
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib3nfc(s) {
  const cs = [];
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          _M0MPC15array5Array4pushGcE(cs, _decoded_char$2);
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  let a = 0;
  while (true) {
    if (a < cs.length) {
      const _p$3 = _M0MPC15array5Array2atGcE(cs, a);
      if (_p$3 >= 768 && _p$3 <= 879) {
        let b = a;
        while (true) {
          let _tmp$3;
          if (b < cs.length) {
            const _p$4 = _M0MPC15array5Array2atGcE(cs, b);
            _tmp$3 = _p$4 >= 768 && _p$4 <= 879;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            b = b + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let n = 0;
        const _bind$11 = a;
        const _bind$12 = b;
        let _tmp$3 = _bind$11;
        while (true) {
          const t = _tmp$3;
          if (t < _bind$12) {
            if (_M0MPC15array5Array2atGcE(cs, t) !== 837) {
              _M0MPC15array5Array3setGcE(cs, a + n | 0, _M0MPC15array5Array2atGcE(cs, t));
              n = n + 1 | 0;
            }
            _tmp$3 = t + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$13 = a + n | 0;
        const _bind$14 = b;
        let _tmp$4 = _bind$13;
        while (true) {
          const t = _tmp$4;
          if (t < _bind$14) {
            _M0MPC15array5Array3setGcE(cs, t, 837);
            _tmp$4 = t + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        a = b;
      } else {
        a = a + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let i = 0;
  while (true) {
    if (i < cs.length) {
      let j = i + 1 | 0;
      while (true) {
        let _tmp$3;
        if (j < cs.length) {
          const _p$3 = _M0MPC15array5Array2atGcE(cs, j);
          _tmp$3 = _p$3 >= 768 && _p$3 <= 879;
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          j = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let k = j;
      let done = false;
      while (true) {
        if (k > (i + 1 | 0) && !done) {
          const piece = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          const _bind$11 = i;
          const _bind$12 = k;
          let _tmp$3 = _bind$11;
          while (true) {
            const t = _tmp$3;
            if (t < _bind$12) {
              _M0IPB13StringBuilderPB6Logger11write__char(piece, _M0MPC15array5Array2atGcE(cs, t));
              _tmp$3 = t + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$13 = _M0FP39aaronshaf17greek_2dphonology3lib11nfc__lookup(piece.val);
          if (_bind$13 === -1) {
            k = k - 1 | 0;
          } else {
            const _Some = _bind$13;
            const _c = _Some;
            _M0IPB13StringBuilderPB6Logger11write__char(sb, _c);
            const _bind$14 = k;
            const _bind$15 = j;
            let _tmp$4 = _bind$14;
            while (true) {
              const t = _tmp$4;
              if (t < _bind$15) {
                _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cs, t));
                _tmp$4 = t + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            done = true;
          }
          continue;
        } else {
          break;
        }
      }
      if (!done) {
        const _bind$11 = i;
        const _bind$12 = j;
        let _tmp$3 = _bind$11;
        while (true) {
          const t = _tmp$3;
          if (t < _bind$12) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cs, t));
            _tmp$3 = t + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      i = j;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib5plain(w) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = w.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = w.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = w.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          _L$3: {
            if (_decoded_char$2 === 769 || (_decoded_char$2 === 768 || _decoded_char$2 === 834)) {
              break _L$3;
            }
            if (_decoded_char$2 >= 768 && _decoded_char$2 <= 879 || _decoded_char$2 === 962) {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char$2);
            } else {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0FP39aaronshaf17greek_2dphonology3lib11fold__lower(_decoded_char$2));
            }
            break _L$3;
          }
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(sb.val);
}
function _M0FP39aaronshaf17greek_2dphonology3lib10nfd__chars(w) {
  const out = [];
  const _bind$10 = w.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = w.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = w.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          _M0MPC15array5Array4pushGcE(out, _decoded_char$2 === 768 ? 769 : _decoded_char$2);
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9key__bare(w) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib10nfd__chars(w);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$11) {
      const c = _bind$10[_];
      if (!(c >= 768 && c <= 879) && c !== 8126) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0FP39aaronshaf17greek_2dphonology3lib11fold__lower(c));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib12ends__elided(w) {
  const cs = _M0FP39aaronshaf17greek_2dphonology3lib5chars(w);
  return cs.length > 0 && _M0FP39aaronshaf17greek_2dphonology3lib8is__apos(_M0MPC15array5Array2atGcE(cs, cs.length - 1 | 0));
}
function _M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(c) {
  return c === 945 || (c === 949 || (c === 951 || (c === 953 || (c === 959 || (c === 965 || c === 969)))));
}
function _M0FP39aaronshaf17greek_2dphonology3lib9is__onset(s) {
  switch (s) {
    case "πλ": {
      return true;
    }
    case "πρ": {
      return true;
    }
    case "βλ": {
      return true;
    }
    case "βρ": {
      return true;
    }
    case "γλ": {
      return true;
    }
    case "γρ": {
      return true;
    }
    case "κλ": {
      return true;
    }
    case "κρ": {
      return true;
    }
    case "τρ": {
      return true;
    }
    case "δρ": {
      return true;
    }
    case "θρ": {
      return true;
    }
    case "φρ": {
      return true;
    }
    case "φλ": {
      return true;
    }
    case "χρ": {
      return true;
    }
    case "χλ": {
      return true;
    }
    case "θλ": {
      return true;
    }
    case "κν": {
      return true;
    }
    case "γν": {
      return true;
    }
    case "πν": {
      return true;
    }
    case "μν": {
      return true;
    }
    case "τμ": {
      return true;
    }
    case "θν": {
      return true;
    }
    case "κτ": {
      return true;
    }
    case "πτ": {
      return true;
    }
    case "φθ": {
      return true;
    }
    case "χθ": {
      return true;
    }
    case "βδ": {
      return true;
    }
    case "σπ": {
      return true;
    }
    case "στ": {
      return true;
    }
    case "σκ": {
      return true;
    }
    case "σφ": {
      return true;
    }
    case "σθ": {
      return true;
    }
    case "σχ": {
      return true;
    }
    case "σμ": {
      return true;
    }
    case "στρ": {
      return true;
    }
    case "σπλ": {
      return true;
    }
    case "σκλ": {
      return true;
    }
    case "σκρ": {
      return true;
    }
    case "πτρ": {
      return true;
    }
    case "χθρ": {
      return true;
    }
    case "φθρ": {
      return true;
    }
    case "σφρ": {
      return true;
    }
    case "κτρ": {
      return true;
    }
    case "τλ": {
      return true;
    }
    case "δμ": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib10onset__len(cons) {
  const n = cons.length;
  let j = 0;
  while (true) {
    if (j < n) {
      const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      const _bind$10 = j;
      let _tmp$2 = _bind$10;
      while (true) {
        const k = _tmp$2;
        if (k < n) {
          _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cons, k));
          _tmp$2 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (_M0FP39aaronshaf17greek_2dphonology3lib9is__onset(sb.val) || (n - j | 0) <= 1) {
        break;
      }
      j = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return n - j | 0;
}
function _M0FP39aaronshaf17greek_2dphonology3lib14syllable__cuts(us) {
  const kinds = $make_array_len_and_init(us.length, 0);
  const nuc = [];
  const _bind$10 = us.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const x = us[i];
      if (_M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(_M0FP39aaronshaf17greek_2dphonology3lib11first__char(x.u))) {
        if (i >>> 0 < kinds.length) {
          kinds[i] = 1;
        } else {
          $oob();
        }
        _M0MPC15array5Array4pushGiE(nuc, i);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const cuts = [];
  const _bind$11 = nuc.length - 1 | 0;
  let _tmp$3 = 0;
  while (true) {
    const k = _tmp$3;
    if (k < _bind$11) {
      const a = _M0MPC15array5Array2atGiE(nuc, k);
      const b = _M0MPC15array5Array2atGiE(nuc, k + 1 | 0);
      const cons = [];
      const _bind$12 = a + 1 | 0;
      let _tmp$4 = _bind$12;
      while (true) {
        const i = _tmp$4;
        if (i < b) {
          const _bind$13 = _M0MPC15array5Array2atGsE(us, i).u;
          const _bind$14 = _bind$13.length;
          let _tmp$5 = 0;
          while (true) {
            const _string_index = _tmp$5;
            if (_string_index < _bind$14) {
              let _decoded_next_string_index;
              let _decoded_char;
              _L: {
                const _bind$15 = _bind$13.charCodeAt(_string_index);
                if (_bind$15 >= 55296 && _bind$15 <= 56319 && (_string_index + 1 | 0) < _bind$14) {
                  const _bind$16 = _bind$13.charCodeAt(_string_index + 1 | 0);
                  if (_bind$16 >= 56320 && _bind$16 <= 57343) {
                    const _tmp$6 = _string_index + 2 | 0;
                    const _p$3 = (((Math.imul(_bind$15 - 55296 | 0, 1024) | 0) + _bind$16 | 0) - 56320 | 0) + 65536 | 0;
                    _decoded_next_string_index = _tmp$6;
                    _decoded_char = _p$3;
                    break _L;
                  } else {
                    const _tmp$6 = _string_index + 1 | 0;
                    const _p$3 = _bind$15;
                    _decoded_next_string_index = _tmp$6;
                    _decoded_char = _p$3;
                    break _L;
                  }
                } else {
                  const _tmp$6 = _string_index + 1 | 0;
                  const _p$3 = _bind$15;
                  _decoded_next_string_index = _tmp$6;
                  _decoded_char = _p$3;
                  break _L;
                }
              }
              _M0MPC15array5Array4pushGcE(cons, _decoded_char);
              _tmp$5 = _decoded_next_string_index;
              continue;
            } else {
              break;
            }
          }
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGiE(cuts, _M0FP39aaronshaf17greek_2dphonology6kernel13syllable__cut(kinds, a, b, _M0FP39aaronshaf17greek_2dphonology3lib10onset__len(cons)));
      _tmp$3 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return cuts;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8clusters(word) {
  const out = [];
  const _bind$10 = word.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = word.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = word.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib6decomp(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          if (_decoded_char$2 >= 768 && _decoded_char$2 <= 879) {
            if (out.length > 0) {
              const m = _M0MPC15array5Array2atGsE(out, out.length - 1 | 0)._1;
              if (!_M0MPC15array5Array8containsGcE(m, _decoded_char$2)) {
                _M0MPC15array5Array4pushGcE(m, _decoded_char$2);
              }
            }
          } else {
            if (_decoded_char$2 >= 880 && _decoded_char$2 <= 1023) {
              _M0MPC15array5Array4pushGsE(out, { _0: _decoded_char$2, _1: [] });
            }
          }
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8is__diph(s) {
  return s === "αι" || (s === "ει" || (s === "οι" || (s === "υι" || (s === "αυ" || (s === "ευ" || (s === "ου" || s === "ηυ"))))));
}
function _M0FP39aaronshaf17greek_2dphonology3lib5units(word) {
  const cl = _M0FP39aaronshaf17greek_2dphonology3lib8clusters(word);
  const res = [];
  let i = 0;
  while (true) {
    if (i < cl.length) {
      const _bind$10 = _M0MPC15array5Array2atGsE(cl, i);
      const _b = _bind$10._0;
      const _m = _bind$10._1;
      if ((i + 1 | 0) < cl.length) {
        const _bind$11 = _M0MPC15array5Array2atGsE(cl, i + 1 | 0);
        const _b2 = _bind$11._0;
        const _m2 = _bind$11._1;
        const pair = `${_M0IPC14char4CharPB4Show10to__string(_b)}${_M0IPC14char4CharPB4Show10to__string(_b2)}`;
        if (_M0FP39aaronshaf17greek_2dphonology3lib8is__diph(pair) && (!_M0MPC15array5Array8containsGcE(_m2, 776) && !_M0MPC15array5Array8containsGcE(_m, 837))) {
          const mm = _M0MPC15array5Array4copyGcE(_m);
          const _bind$12 = _m2.length;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < _bind$12) {
              const x = _m2[_];
              if (!_M0MPC15array5Array8containsGcE(mm, x)) {
                _M0MPC15array5Array4pushGcE(mm, x);
              }
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(res, new _M0TP39aaronshaf17greek_2dphonology3lib5GUnit(pair, mm));
          i = i + 2 | 0;
          continue;
        }
      }
      _M0MPC15array5Array4pushGsE(res, new _M0TP39aaronshaf17greek_2dphonology3lib5GUnit(_M0IPC14char4CharPB4Show10to__string(_b), _M0MPC15array5Array4copyGcE(_m)));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9syllabify(word) {
  const us = _M0FP39aaronshaf17greek_2dphonology3lib5units(word);
  if (us.length === 0) {
    return [];
  }
  let any = false;
  const _bind$10 = us.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const x = us[_];
      if (_M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(_M0FP39aaronshaf17greek_2dphonology3lib11first__char(x.u))) {
        any = true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!any) {
    const _p$3 = new Array(us.length);
    const _p$4 = us.length;
    let _tmp$3 = 0;
    while (true) {
      const _p$5 = _tmp$3;
      if (_p$5 < _p$4) {
        const _p$6 = us[_p$5];
        _p$3[_p$5] = _p$6.u;
        _tmp$3 = _p$5 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return [_p$3];
  }
  const out = [];
  const cuts = _M0FP39aaronshaf17greek_2dphonology3lib14syllable__cuts(us);
  _M0MPC15array5Array4pushGiE(cuts, us.length);
  let prev = 0;
  const _bind$11 = cuts.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$11) {
      const c = cuts[_];
      const s = [];
      const _bind$12 = prev;
      let _tmp$4 = _bind$12;
      while (true) {
        const i = _tmp$4;
        if (i < c) {
          _M0MPC15array5Array4pushGsE(s, _M0MPC15array5Array2atGsE(us, i).u);
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib5PhoneEE(out, s);
      prev = c;
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib10syl__marks(word) {
  const us = _M0FP39aaronshaf17greek_2dphonology3lib5units(word);
  const sy = _M0FP39aaronshaf17greek_2dphonology3lib9syllabify(word);
  const out = [];
  let k = 0;
  const _bind$10 = sy.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const s = sy[_];
      const m = [];
      let nu = "";
      const _bind$11 = s.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$11) {
          const _bind$12 = _M0MPC15array5Array2atGsE(us, k).marks;
          const _bind$13 = _bind$12.length;
          let _tmp$4 = 0;
          while (true) {
            const _$3 = _tmp$4;
            if (_$3 < _bind$13) {
              const x = _bind$12[_$3];
              if (!_M0MPC15array5Array8containsGcE(m, x)) {
                _M0MPC15array5Array4pushGcE(m, x);
              }
              _tmp$4 = _$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (_M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(_M0FP39aaronshaf17greek_2dphonology3lib11first__char(_M0MPC15array5Array2atGsE(us, k).u))) {
            nu = `${_M0MPC15array5Array2atGsE(us, k).u}${_M0MPC15array5Array8containsGcE(_M0MPC15array5Array2atGsE(us, k).marks, 837) ? "ι" : ""}`;
          }
          k = k + 1 | 0;
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(out, { _0: m, _1: nu });
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib6accent(word) {
  const sm = _M0FP39aaronshaf17greek_2dphonology3lib10syl__marks(word);
  const _bind$10 = sm.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const x = sm[i];
      const m = x._0;
      if (_M0MPC15array5Array8containsGcE(m, 769)) {
        return { _0: sm.length - i | 0, _1: "acute" };
      }
      if (_M0MPC15array5Array8containsGcE(m, 768)) {
        return { _0: sm.length - i | 0, _1: "grave" };
      }
      if (_M0MPC15array5Array8containsGcE(m, 834)) {
        return { _0: sm.length - i | 0, _1: "circumflex" };
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP39aaronshaf17greek_2dphonology3lib11lex__accent(w) {
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib6accent(w);
  if (_bind$10 === undefined) {
    return _M0FP39aaronshaf17greek_2dphonology3lib11lex__accentN5tupleS3877;
  } else {
    const _Some = _bind$10;
    const _x = _Some;
    const _p$3 = _x._0;
    const _k = _x._1;
    return { _0: _p$3, _1: _k === "circumflex" };
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib4nsyl(w) {
  return _M0FP39aaronshaf17greek_2dphonology3lib9syllabify(w).length;
}
function _M0FP39aaronshaf17greek_2dphonology3lib12is__enclitic(w) {
  const p = _M0FP39aaronshaf17greek_2dphonology3lib5plain(w);
  if (!_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib15enclitic__plain, p)) {
    return false;
  }
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib11lex__accent(w);
  const _pos = _bind$10._0;
  const _c = _bind$10._1;
  if (_pos === 0) {
    return true;
  }
  if (p === "τις" || p === "τι") {
    const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib6accent(w);
    let _tmp$2;
    if (_bind$11 === undefined) {
      _tmp$2 = false;
    } else {
      const _Some = _bind$11;
      const _x = _Some;
      const _x$2 = _x._1;
      if (_x$2 === "grave") {
        _tmp$2 = true;
      } else {
        _tmp$2 = false;
      }
    }
    return _tmp$2;
  }
  if (_pos !== 1) {
    return false;
  }
  if (_c) {
    return p === "τινων";
  }
  return true;
}
function _M0FP39aaronshaf17greek_2dphonology3lib13is__proclitic(w) {
  return _M0FP39aaronshaf17greek_2dphonology3lib11lex__accent(w)._0 === 0 && _M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib16proclitic__plain, _M0FP39aaronshaf17greek_2dphonology3lib5plain(w));
}
function _M0FP39aaronshaf17greek_2dphonology3lib12filter__mark(s, m) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          const _p$3 = _decoded_char$2;
          const _p$4 = m;
          if (_p$3 !== _p$4) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char$2);
          }
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(sb.val);
}
function _M0FP39aaronshaf17greek_2dphonology3lib14remove__acutes(s) {
  return _M0FP39aaronshaf17greek_2dphonology3lib12filter__mark(s, 769);
}
function _M0FP39aaronshaf17greek_2dphonology3lib20remove__circumflexes(s) {
  return _M0FP39aaronshaf17greek_2dphonology3lib12filter__mark(s, 834);
}
function _M0FP39aaronshaf17greek_2dphonology3lib14remove__graves(s) {
  return _M0FP39aaronshaf17greek_2dphonology3lib12filter__mark(s, 768);
}
function _M0FP39aaronshaf17greek_2dphonology3lib10strip__acc(w) {
  return _M0FP39aaronshaf17greek_2dphonology3lib20remove__circumflexes(_M0FP39aaronshaf17greek_2dphonology3lib14remove__acutes(_M0FP39aaronshaf17greek_2dphonology3lib14remove__graves(w)));
}
function _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(w, pos, mark) {
  const sy = _M0FP39aaronshaf17greek_2dphonology3lib9syllabify(w);
  const n = sy.length;
  if (pos < 1 || pos > n) {
    return w;
  }
  const us = _M0FP39aaronshaf17greek_2dphonology3lib5units(w);
  let base_i = 0;
  let target = -1;
  let k = 0;
  const _bind$10 = sy.length;
  let _tmp$2 = 0;
  while (true) {
    const si = _tmp$2;
    if (si < _bind$10) {
      const s = sy[si];
      const _bind$11 = s.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$11) {
          const _bind$12 = _M0MPC15array5Array2atGsE(us, k).u;
          const _bind$13 = _bind$12.length;
          let _tmp$4 = 0;
          while (true) {
            const _string_index = _tmp$4;
            if (_string_index < _bind$13) {
              let _decoded_next_string_index;
              let _decoded_char;
              _L: {
                const _bind$14 = _bind$12.charCodeAt(_string_index);
                if (_bind$14 >= 55296 && _bind$14 <= 56319 && (_string_index + 1 | 0) < _bind$13) {
                  const _bind$15 = _bind$12.charCodeAt(_string_index + 1 | 0);
                  if (_bind$15 >= 56320 && _bind$15 <= 57343) {
                    const _tmp$5 = _string_index + 2 | 0;
                    const _p$3 = (((Math.imul(_bind$14 - 55296 | 0, 1024) | 0) + _bind$15 | 0) - 56320 | 0) + 65536 | 0;
                    _decoded_next_string_index = _tmp$5;
                    _decoded_char = _p$3;
                    break _L;
                  } else {
                    const _tmp$5 = _string_index + 1 | 0;
                    const _p$3 = _bind$14;
                    _decoded_next_string_index = _tmp$5;
                    _decoded_char = _p$3;
                    break _L;
                  }
                } else {
                  const _tmp$5 = _string_index + 1 | 0;
                  const _p$3 = _bind$14;
                  _decoded_next_string_index = _tmp$5;
                  _decoded_char = _p$3;
                  break _L;
                }
              }
              if (si === (n - pos | 0) && _M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(_decoded_char)) {
                target = base_i;
              }
              base_i = base_i + 1 | 0;
              _tmp$4 = _decoded_next_string_index;
              continue;
            } else {
              break;
            }
          }
          k = k + 1 | 0;
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = si + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let bi = -1;
  let pending = false;
  const _bind$11 = w.length;
  let _tmp$3 = 0;
  while (true) {
    const _string_index = _tmp$3;
    if (_string_index < _bind$11) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$12 = w.charCodeAt(_string_index);
        if (_bind$12 >= 55296 && _bind$12 <= 56319 && (_string_index + 1 | 0) < _bind$11) {
          const _bind$13 = w.charCodeAt(_string_index + 1 | 0);
          if (_bind$13 >= 56320 && _bind$13 <= 57343) {
            const _tmp$4 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$12 - 55296 | 0, 1024) | 0) + _bind$13 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$4;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$4 = _string_index + 1 | 0;
            const _p$3 = _bind$12;
            _decoded_next_string_index = _tmp$4;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$4 = _string_index + 1 | 0;
          const _p$3 = _bind$12;
          _decoded_next_string_index = _tmp$4;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$13 = _bind$12.length;
      let _tmp$4 = 0;
      while (true) {
        const _string_index$2 = _tmp$4;
        if (_string_index$2 < _bind$13) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$14 = _bind$12.charCodeAt(_string_index$2);
            if (_bind$14 >= 55296 && _bind$14 <= 56319 && (_string_index$2 + 1 | 0) < _bind$13) {
              const _bind$15 = _bind$12.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$15 >= 56320 && _bind$15 <= 57343) {
                const _tmp$5 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$14 - 55296 | 0, 1024) | 0) + _bind$15 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$5;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$5 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$14;
                _decoded_next_string_index$2 = _tmp$5;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$5 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$14;
              _decoded_next_string_index$2 = _tmp$5;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          const greek_base = !(_decoded_char$2 >= 768 && _decoded_char$2 <= 879) && (_decoded_char$2 >= 880 && _decoded_char$2 <= 1023);
          if (!(_decoded_char$2 >= 768 && _decoded_char$2 <= 879)) {
            if (pending) {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, mark);
              pending = false;
            }
            if (greek_base) {
              bi = bi + 1 | 0;
              if (bi === target) {
                pending = true;
              }
            }
          }
          if (pending && _decoded_char$2 === 837) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, mark);
            pending = false;
          }
          _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char$2);
          _tmp$4 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  if (pending) {
    _M0IPB13StringBuilderPB6Logger11write__char(sb, mark);
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(sb.val);
}
function _M0FP39aaronshaf17greek_2dphonology3lib9orthotone(base, p) {
  return p === "σου" ? _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 834) : p === "σοι" || (p === "σε" || (_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib11eimi__forms, p) || _M0FP39aaronshaf17greek_2dphonology3lib4nsyl(base) >= 2)) ? _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, p === "τινων" ? 834 : 769) : base;
}
function _M0FP39aaronshaf17greek_2dphonology3lib16render__decision(code, w, base) {
  switch (code) {
    case 0: {
      return base;
    }
    case 1: {
      return w;
    }
    case 2: {
      return _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 769);
    }
    case 3: {
      return _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 768);
    }
    case 4: {
      return _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(w, 1, 769);
    }
    default: {
      return _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 834);
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phrase(text) {
  const raw = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter6filterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(text, _M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phraseN6recordS3970), (v) => _M0MPC16string10StringView9to__owned(v)), (v) => {
    const _p$3 = "";
    return !(v === _p$3);
  }));
  const _p$3 = new Array(raw.length);
  const _p$4 = raw.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp$2;
    if (_p$5 < _p$4) {
      const _p$6 = raw[_p$5];
      _p$3[_p$5] = _M0FP39aaronshaf17greek_2dphonology3lib10split__tok(_p$6);
      _tmp$2 = _p$5 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const toks = _p$3;
  const n = toks.length;
  const _p$5 = new Array(toks.length);
  const _p$6 = toks.length;
  let _tmp$3 = 0;
  while (true) {
    const _p$7 = _tmp$3;
    if (_p$7 < _p$6) {
      const _p$8 = toks[_p$7];
      let _tmp$4;
      const _p$9 = _p$8.core;
      const _p$10 = "";
      if (!(_p$9 === _p$10)) {
        _tmp$4 = _M0FP39aaronshaf17greek_2dphonology3lib12is__enclitic(_p$8.core);
      } else {
        _tmp$4 = false;
      }
      _p$5[_p$7] = _tmp$4;
      _tmp$3 = _p$7 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const enc = _p$5;
  const ortho = _M0MPC15array5Array4makeGbE(n, false);
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < n) {
      _L: {
        if (!_M0MPC15array5Array2atGbE(enc, i)) {
          break _L;
        }
        const p = _M0FP39aaronshaf17greek_2dphonology3lib5plain(_M0MPC15array5Array2atGsE(toks, i).core);
        const hostless = i === 0 || (_M0FP39aaronshaf17greek_2dphonology3lib9has__stop(_M0MPC15array5Array2atGsE(toks, i - 1 | 0).post) || (_M0FP39aaronshaf17greek_2dphonology3lib9has__stop(_M0MPC15array5Array2atGsE(toks, i).pre) || _M0MPC15array5Array2atGsE(toks, i - 1 | 0).core === ""));
        const hp = i > 0 ? _M0FP39aaronshaf17greek_2dphonology3lib5plain(_M0MPC15array5Array2atGsE(toks, i - 1 | 0).core) : "";
        if (hostless || (_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib11eimi__forms, p) && _M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib14esti__triggers, hp) || (p === "σου" || (p === "σοι" || p === "σε")) && _M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib12su__triggers, hp))) {
          _M0MPC15array5Array3setGbE(enc, i, false);
          _M0MPC15array5Array3setGbE(ortho, i, true);
        }
        break _L;
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const out = [];
  let _tmp$5 = 0;
  while (true) {
    const i = _tmp$5;
    if (i < n) {
      _L: {
        const t = _M0MPC15array5Array2atGsE(toks, i);
        if (t.core === "") {
          _M0MPC15array5Array4pushGsE(out, _M0MPC15array5Array2atGsE(raw, i));
          break _L;
        }
        const w = t.core;
        const stop_after = _M0FP39aaronshaf17greek_2dphonology3lib9has__stop(t.post) || ((i + 1 | 0) >= n || _M0FP39aaronshaf17greek_2dphonology3lib9has__stop(_M0MPC15array5Array2atGsE(toks, i + 1 | 0).pre));
        const next_enc = !stop_after && _M0MPC15array5Array2atGbE(enc, i + 1 | 0);
        let word_follows;
        if (!stop_after) {
          let _tmp$6;
          if (!next_enc) {
            const _p$7 = _M0MPC15array5Array2atGsE(toks, i + 1 | 0).core;
            const _p$8 = "";
            _tmp$6 = !(_p$7 === _p$8);
          } else {
            _tmp$6 = false;
          }
          word_follows = _tmp$6;
        } else {
          word_follows = false;
        }
        const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib11lex__accent(w);
        const _lp = _bind$10._0;
        const _lc = _bind$10._1;
        const base = _M0FP39aaronshaf17greek_2dphonology3lib10strip__acc(w);
        let res = w;
        if (_M0MPC15array5Array2atGbE(ortho, i)) {
          const p = _M0FP39aaronshaf17greek_2dphonology3lib5plain(w);
          const hp = i > 0 ? _M0FP39aaronshaf17greek_2dphonology3lib5plain(_M0MPC15array5Array2atGsE(toks, i - 1 | 0).core) : "";
          const hostless = i === 0 || (_M0FP39aaronshaf17greek_2dphonology3lib9has__stop(_M0MPC15array5Array2atGsE(toks, i - 1 | 0).post) || (_M0FP39aaronshaf17greek_2dphonology3lib9has__stop(t.pre) || _M0MPC15array5Array2atGsE(toks, i - 1 | 0).core === ""));
          if ((p === "ἐστι" || p === "ἐστιν") && (hostless || _M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib14esti__triggers, hp))) {
            res = _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 2, 769);
          } else {
            if (hostless && !_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib11eimi__forms, p)) {
              res = base;
            } else {
              res = _M0FP39aaronshaf17greek_2dphonology3lib9orthotone(base, p);
              const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib11lex__accent(res);
              const _op = _bind$11._0;
              const _oc = _bind$11._1;
              let _tmp$6;
              if (_op === 1) {
                let _tmp$7;
                if (!_oc) {
                  let _tmp$8;
                  if (!next_enc) {
                    const _p$7 = 1;
                    const _p$8 = true;
                    _tmp$8 = _p$7 === 1 && _p$8 ? word_follows : false;
                  } else {
                    _tmp$8 = false;
                  }
                  _tmp$7 = _tmp$8;
                } else {
                  _tmp$7 = false;
                }
                _tmp$6 = _tmp$7;
              } else {
                _tmp$6 = false;
              }
              if (_tmp$6) {
                res = _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 768);
              } else {
                if (next_enc && _op >= 2) {
                  res = _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(res, 1, 769);
                }
              }
            }
          }
        } else {
          const kind = _M0MPC15array5Array2atGbE(enc, i) ? 2 : _M0FP39aaronshaf17greek_2dphonology3lib13is__proclitic(w) ? 1 : 0;
          const p = _M0FP39aaronshaf17greek_2dphonology3lib5plain(w);
          let keeps;
          if (kind === 2) {
            const host = _M0MPC15array5Array2atGsE(toks, i - 1 | 0).core;
            const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib11lex__accent(host);
            const _hp = _bind$11._0;
            const _hc = _bind$11._1;
            let _tmp$6;
            if (!_M0MPC15array5Array2atGbE(enc, i - 1 | 0)) {
              let _tmp$7;
              if (!_M0FP39aaronshaf17greek_2dphonology3lib13is__proclitic(host)) {
                let _tmp$8;
                if (!_M0FP39aaronshaf17greek_2dphonology3lib12ends__elided(host)) {
                  const _p$7 = _M0FP39aaronshaf17greek_2dphonology3lib4nsyl(base);
                  _tmp$8 = _p$7 === 2 && _hp === 2 ? !_hc : false;
                } else {
                  _tmp$8 = false;
                }
                _tmp$7 = _tmp$8;
              } else {
                _tmp$7 = false;
              }
              _tmp$6 = _tmp$7;
            } else {
              _tmp$6 = false;
            }
            keeps = _tmp$6;
          } else {
            keeps = false;
          }
          const interrog = p === "τις" || (p === "τι" || (p === "ἱνατι" || p === "διατι"));
          const is_ou = p === "οὐ" || (p === "οὐκ" || p === "οὐχ");
          const code = _M0FP39aaronshaf17greek_2dphonology6kernel16phrase__decision(kind, _lp, _lc, next_enc, word_follows, stop_after, interrog, is_ou, keeps, p === "τινων");
          res = _M0FP39aaronshaf17greek_2dphonology3lib16render__decision(code, w, base);
        }
        _M0MPC15array5Array4pushGsE(out, `${t.pre}${res}${t.post}`);
        break _L;
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array4joinGsE(out, _M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phraseN6recordS3971);
}
function _M0FP39aaronshaf17greek_2dphonology3lib16written__accents(w) {
  const sm = _M0FP39aaronshaf17greek_2dphonology3lib10syl__marks(w);
  const out = [];
  const _bind$10 = sm.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const x = sm[i];
      const _bind$11 = [769, 768, 834];
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$12) {
          const m = _bind$11[_];
          if (_M0MPC15array5Array8containsGcE(x._0, m)) {
            _M0MPC15array5Array4pushGsE(out, { _0: sm.length - i | 0, _1: m });
          }
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib15lexical__phrase(text) {
  const raw = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter6filterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(text, _M0FP39aaronshaf17greek_2dphonology3lib15lexical__phraseN6recordS4029), (v) => _M0MPC16string10StringView9to__owned(v)), (v) => {
    const _p$3 = "";
    return !(v === _p$3);
  }));
  const out = [];
  const _bind$10 = raw.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const r = raw[_];
      _L: {
        const t = _M0FP39aaronshaf17greek_2dphonology3lib10split__tok(r);
        if (t.core === "") {
          _M0MPC15array5Array4pushGsE(out, r);
          break _L;
        }
        const w = t.core;
        const base = _M0FP39aaronshaf17greek_2dphonology3lib10strip__acc(w);
        const p = _M0FP39aaronshaf17greek_2dphonology3lib5plain(w);
        const accs = _M0FP39aaronshaf17greek_2dphonology3lib16written__accents(w);
        let res;
        if (_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib15enclitic__plain, p) && ((accs.length === 0 || (_M0MPC15array5Array2atGsE(accs, 0)._0 === 1 && (_M0MPC15array5Array2atGsE(accs, 0)._1 !== 834 || p === "τινων") || (p === "ἐστι" || p === "ἐστιν"))) && !((p === "τις" || p === "τι") && (accs.length === 1 && _M0MPC15array5Array2atGsE(accs, 0)._1 === 769)))) {
          let _tmp$3;
          if (_M0FP39aaronshaf17greek_2dphonology3lib4nsyl(base) >= 2) {
            let _tmp$4;
            const _p$3 = "ἐστι";
            if (!(p === _p$3)) {
              let _tmp$5;
              const _p$4 = "ἐστιν";
              if (!(p === _p$4)) {
                let _tmp$6;
                const _p$5 = "εἰμι";
                if (!(p === _p$5)) {
                  const _p$6 = "φημι";
                  _tmp$6 = !(p === _p$6);
                } else {
                  _tmp$6 = false;
                }
                _tmp$5 = _tmp$6;
              } else {
                _tmp$5 = false;
              }
              _tmp$4 = _tmp$5;
            } else {
              _tmp$4 = false;
            }
            _tmp$3 = _tmp$4;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            res = _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, p === "τινων" ? 834 : 769);
          } else {
            res = p === "εἰμι" || (p === "φημι" || (p === "ἐστι" || (p === "ἐστιν" || (p === "εἰσι" || (p === "εἰσιν" || (p === "φησι" || (p === "φησιν" || (p === "φασι" || p === "φασιν")))))))) ? _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 769) : p === "τις" || p === "τι" ? _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, 1, 768) : base;
          }
        } else {
          if (_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib16proclitic__plain, p) && ((accs.length === 0 || _M0MPC15array5Array2atGsE(accs, 0)._1 === 769) && !(p === "ὁ" || (p === "ἡ" || (p === "οἱ" || p === "αἱ"))))) {
            res = base;
          } else {
            if (_M0MPC15array5Array8containsGsE(_M0FP39aaronshaf17greek_2dphonology3lib16proclitic__plain, p) && accs.length === 0) {
              res = base;
            } else {
              if (accs.length === 0) {
                res = w;
              } else {
                const _bind$11 = _M0MPC15array5Array2atGsE(accs, 0);
                const _pos = _bind$11._0;
                const _m = _bind$11._1;
                res = _M0FP39aaronshaf17greek_2dphonology3lib13place__accent(base, _pos, _m === 768 ? 769 : _m);
              }
            }
          }
        }
        _M0MPC15array5Array4pushGsE(out, `${t.pre}${res}${t.post}`);
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array4joinGsE(out, _M0FP39aaronshaf17greek_2dphonology3lib15lexical__phraseN6recordS4030);
}
function _M0FP39aaronshaf17greek_2dphonology3lib4jstr(s) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 34);
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      switch (_decoded_char) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\\\");
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\n");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 34);
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accents(text) {
  const pred = _M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phrase(_M0FP39aaronshaf17greek_2dphonology3lib15lexical__phrase(text));
  const a = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter6filterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(text, _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accentsN6recordS4060), (v) => _M0MPC16string10StringView9to__owned(v)), (v) => {
    const _p$3 = "";
    return !(v === _p$3);
  }));
  const b = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(pred, _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accentsN6recordS4061), (v) => _M0MPC16string10StringView9to__owned(v)));
  const items = [];
  const _bind$10 = a.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const w = a[i];
      const e = i < b.length ? _M0MPC15array5Array2atGsE(b, i) : "";
      const ok = _M0FP39aaronshaf17greek_2dphonology3lib3nfc(_M0FP39aaronshaf17greek_2dphonology3lib10split__tok(w).core) === _M0FP39aaronshaf17greek_2dphonology3lib3nfc(_M0FP39aaronshaf17greek_2dphonology3lib10split__tok(e).core);
      _M0MPC15array5Array4pushGsE(items, `{\"word\":${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(w)},\"expected\":${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(e)},\"ok\":${ok ? "true" : "false"}}`);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return `[${_M0MPC15array5Array4joinGsE(items, _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accentsN6recordS4062)}]`;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9nfc__join(cs) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = cs.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const c = cs[_];
      _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(sb.val);
}
function _M0FP39aaronshaf17greek_2dphonology3lib9key__fold(w) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib10nfd__chars(w);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$11) {
      const c = _bind$10[_];
      _L: {
        if (c === 837 || c === 8126) {
          break _L;
        }
        _M0IPB13StringBuilderPB6Logger11write__char(sb, c >= 768 && c <= 879 ? c : _M0FP39aaronshaf17greek_2dphonology3lib11fold__lower(c));
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8lex__put(m, k, idx) {
  const _bind$10 = _M0MPB3Map3getGsiE(m, k);
  if (_bind$10 === undefined) {
    _M0MPB3Map3setGsiE(m, k, idx);
    return;
  } else {
    const _Some = _bind$10;
    const _j = _Some;
    if (_M0MPC15array5Array2atGsE(_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries, idx).flags >> 2 > _M0MPC15array5Array2atGsE(_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries, _j).flags >> 2) {
      _M0MPB3Map3setGsiE(m, k, idx);
      return;
    } else {
      return;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib16key__fold__exact(w) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib10nfd__chars(w);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$11) {
      const c = _bind$10[_];
      _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib13load__lexicon(blob) {
  _M0MPB3Map5clearGsiE(_M0FP39aaronshaf17greek_2dphonology3lib10lex__exact);
  _M0MPB3Map5clearGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9lex__fold);
  _M0MPB3Map5clearGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9lex__bare);
  _M0MPC15array5Array5clearGRP39aaronshaf17greek_2dphonology3lib8LexEntryE(_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries);
  const alpha = [0];
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib10lex__alpha.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib10lex__alpha.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib10lex__alpha.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(alpha, _decoded_char);
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  const cur = [];
  let i = 0;
  while (true) {
    if ((i + 1 | 0) < blob.length) {
      const k = _M0MPC15array5Array2atGiE(blob, i);
      const flags = _M0MPC15array5Array2atGiE(blob, i + 1 | 0);
      i = i + 2 | 0;
      while (true) {
        if (cur.length > k) {
          _M0MPC15array5Array3popGcE(cur);
          continue;
        } else {
          break;
        }
      }
      while (true) {
        if (i < blob.length && _M0MPC15array5Array2atGiE(blob, i) !== 0) {
          _M0MPC15array5Array4pushGcE(cur, _M0MPC15array5Array2atGcE(alpha, _M0MPC15array5Array2atGiE(blob, i)));
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      i = i + 1 | 0;
      const form = _M0FP39aaronshaf17greek_2dphonology3lib9nfc__join(cur);
      const idx = _M0FP39aaronshaf17greek_2dphonology3lib12lex__entries.length;
      _M0MPC15array5Array4pushGsE(_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries, new _M0TP39aaronshaf17greek_2dphonology3lib8LexEntry(form, flags));
      _M0FP39aaronshaf17greek_2dphonology3lib8lex__put(_M0FP39aaronshaf17greek_2dphonology3lib10lex__exact, _M0FP39aaronshaf17greek_2dphonology3lib16key__fold__exact(form), idx);
      _M0FP39aaronshaf17greek_2dphonology3lib8lex__put(_M0FP39aaronshaf17greek_2dphonology3lib9lex__fold, _M0FP39aaronshaf17greek_2dphonology3lib9key__fold(form), idx);
      _M0FP39aaronshaf17greek_2dphonology3lib8lex__put(_M0FP39aaronshaf17greek_2dphonology3lib9lex__bare, _M0FP39aaronshaf17greek_2dphonology3lib9key__bare(form), idx);
      continue;
    } else {
      break;
    }
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib12lex__entries.length;
}
function _M0FP39aaronshaf17greek_2dphonology3lib12lookup__json(word) {
  const w = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(word, undefined));
  const e0 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib10lex__exact, _M0FP39aaronshaf17greek_2dphonology3lib16key__fold__exact(w));
  const e1 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9lex__fold, _M0FP39aaronshaf17greek_2dphonology3lib9key__fold(w));
  const e2 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9lex__bare, _M0FP39aaronshaf17greek_2dphonology3lib9key__bare(w));
  let hit;
  let how;
  _L: {
    const _p$3 = !(e0 === undefined);
    const _p$4 = !(e1 === undefined);
    const _p$5 = !(e2 === undefined);
    const _bind$10 = _p$3 ? 0 : _p$4 ? 1 : _p$5 ? 2 : 3;
    switch (_bind$10) {
      case 0: {
        let _tmp$2;
        if (e0 === undefined) {
          _tmp$2 = $panic();
        } else {
          const _p$6 = e0;
          _tmp$2 = _p$6;
        }
        hit = _tmp$2;
        how = "exact";
        break _L;
      }
      case 1: {
        let _tmp$3;
        if (e1 === undefined) {
          _tmp$3 = $panic();
        } else {
          const _p$6 = e1;
          _tmp$3 = _p$6;
        }
        hit = _tmp$3;
        how = "fold";
        break _L;
      }
      case 2: {
        let _tmp$4;
        if (e2 === undefined) {
          _tmp$4 = $panic();
        } else {
          const _p$6 = e2;
          _tmp$4 = _p$6;
        }
        hit = _tmp$4;
        how = "bare";
        break _L;
      }
      default: {
        hit = -1;
        how = "";
        break _L;
      }
    }
  }
  if (hit < 0) {
    return "null";
  }
  const e = _M0MPC15array5Array2atGsE(_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries, hit);
  const _tmp$2 = _M0FP39aaronshaf17greek_2dphonology3lib4jstr(e.form);
  const _p$3 = (e.flags & 1) !== 0;
  const _tmp$3 = _p$3 ? "true" : "false";
  const _p$4 = (e.flags & 2) !== 0;
  return `{\"form\":${_tmp$2},\"match\":\"${how}\",\"nt\":${_tmp$3},\"lxx\":${_p$4 ? "true" : "false"},\"freq_band\":${_M0MPC13int3Int18to__string_2einner(e.flags >> 2, 10)}}`;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9lex__form(w) {
  if (_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries.length === 0) {
    return w;
  }
  const _bind$10 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib10lex__exact, _M0FP39aaronshaf17greek_2dphonology3lib16key__fold__exact(w));
  let hit;
  if (_bind$10 === undefined) {
    const _bind$11 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9lex__fold, _M0FP39aaronshaf17greek_2dphonology3lib9key__fold(w));
    if (_bind$11 === undefined) {
      hit = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9lex__bare, _M0FP39aaronshaf17greek_2dphonology3lib9key__bare(w)), -1);
    } else {
      const _Some = _bind$11;
      hit = _Some;
    }
  } else {
    const _Some = _bind$10;
    hit = _Some;
  }
  return hit < 0 ? w : _M0MPC15array5Array2atGsE(_M0FP39aaronshaf17greek_2dphonology3lib12lex__entries, hit).form;
}
function _M0FP39aaronshaf17greek_2dphonology3lib13kl__is__vowel(c) {
  const b = _M0FP39aaronshaf17greek_2dphonology3lib11first__char(_M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(c));
  return _M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(b);
}
function _M0FP39aaronshaf17greek_2dphonology3lib11char__count(s) {
  let n = 0;
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      n = n + 1 | 0;
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return n;
}
function _M0FP39aaronshaf17greek_2dphonology3lib6expand(pat) {
  const cs = _M0FP39aaronshaf17greek_2dphonology3lib5chars(pat);
  let acc = [""];
  let i = 0;
  while (true) {
    if (i < cs.length) {
      const opts = [];
      if (_M0MPC15array5Array2atGcE(cs, i) === 91) {
        i = i + 1 | 0;
        while (true) {
          if (_M0MPC15array5Array2atGcE(cs, i) !== 93) {
            _M0MPC15array5Array4pushGsE(opts, _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i)));
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        if (_M0MPC15array5Array2atGcE(cs, i) === 40) {
          i = i + 1 | 0;
          const cur = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          while (true) {
            if (_M0MPC15array5Array2atGcE(cs, i) !== 41) {
              if (_M0MPC15array5Array2atGcE(cs, i) === 124) {
                _M0MPC15array5Array4pushGsE(opts, cur.val);
                _M0MPB13StringBuilder5reset(cur);
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(cur, _M0MPC15array5Array2atGcE(cs, i));
              }
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(opts, cur.val);
        } else {
          _M0MPC15array5Array4pushGsE(opts, _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i)));
        }
      }
      i = i + 1 | 0;
      const next = [];
      const _bind$10 = acc;
      const _bind$11 = _bind$10.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$11) {
          const a = _bind$10[_];
          const _bind$12 = opts.length;
          let _tmp$3 = 0;
          while (true) {
            const _$2 = _tmp$3;
            if (_$2 < _bind$12) {
              const o = opts[_$2];
              _M0MPC15array5Array4pushGsE(next, `${a}${o}`);
              _tmp$3 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      acc = next;
      continue;
    } else {
      break;
    }
  }
  return acc;
}
function _M0FP39aaronshaf17greek_2dphonology3lib10amalgamate(s) {
  const _p$3 = _M0FP39aaronshaf17greek_2dphonology3lib5chars(s);
  const _p$4 = new Array(_p$3.length);
  const _p$5 = _p$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$6 = _tmp$2;
    if (_p$6 < _p$5) {
      const _p$7 = _p$3[_p$6];
      _p$4[_p$6] = _p$7;
      _tmp$2 = _p$6 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$10 = _p$4;
  const cs = _M0MPC15array10FixedArray11from__arrayGiE(new _M0TPB9ArrayViewGiE(_bind$10, 0, _bind$10.length));
  const out = $make_array_len_and_init(cs.length, 0);
  const n = _M0FP39aaronshaf17greek_2dphonology6kernel16amalgamate__core(cs, out);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < n) {
      _M0IPB13StringBuilderPB6Logger11write__char(sb, i >>> 0 < out.length ? out[i] : $oob());
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8contract(s) {
  const _p$3 = _M0FP39aaronshaf17greek_2dphonology3lib5chars(s);
  const _p$4 = new Array(_p$3.length);
  const _p$5 = _p$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$6 = _tmp$2;
    if (_p$6 < _p$5) {
      const _p$7 = _p$3[_p$6];
      _p$4[_p$6] = _p$7;
      _tmp$2 = _p$6 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$10 = _p$4;
  const cs = _M0MPC15array10FixedArray11from__arrayGiE(new _M0TPB9ArrayViewGiE(_bind$10, 0, _bind$10.length));
  const out = $make_array_len_and_init(cs.length, 0);
  const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib16contract__tables.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$11) {
      const r = _M0FP39aaronshaf17greek_2dphonology3lib16contract__tables[_];
      const _alts = r._0;
      const _plen = r._1;
      const _rep = r._2;
      const res = _M0FP39aaronshaf17greek_2dphonology6kernel14contract__core(cs, _alts, _plen, _rep, _rep.length, out);
      if ((res % 2 | 0) === 1) {
        const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
        const _bind$12 = res / 2 | 0;
        let _tmp$4 = 0;
        while (true) {
          const i = _tmp$4;
          if (i < _bind$12) {
            const t = i >>> 0 < out.length ? out[i] : $oob();
            if (t === 1114112) {
              _M0IPB13StringBuilderPB6Logger13write__string(sb, "[ει]");
            } else {
              if (t === 1114113) {
                _M0IPB13StringBuilderPB6Logger13write__string(sb, "[ου]");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(sb, t);
              }
            }
            _tmp$4 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return sb.val;
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return s;
}
function _M0FP39aaronshaf17greek_2dphonology3lib20contains__circumflex(s) {
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          if (_decoded_char$2 === 834) {
            return true;
          }
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP39aaronshaf17greek_2dphonology3lib10add__acute(s) {
  return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(`${s}́`);
}
function _M0FP39aaronshaf17greek_2dphonology3lib15add__circumflex(s) {
  return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(`${s}͂`);
}
function _M0FP39aaronshaf17greek_2dphonology3lib16without__accents(s) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const d = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      if (d === "") {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
      } else {
        const _bind$11 = d.length;
        let _tmp$3 = 0;
        while (true) {
          const _string_index$2 = _tmp$3;
          if (_string_index$2 < _bind$11) {
            let _decoded_next_string_index$2;
            let _decoded_char$2;
            _L$2: {
              const _bind$12 = d.charCodeAt(_string_index$2);
              if (_bind$12 >= 55296 && _bind$12 <= 56319 && (_string_index$2 + 1 | 0) < _bind$11) {
                const _bind$13 = d.charCodeAt(_string_index$2 + 1 | 0);
                if (_bind$13 >= 56320 && _bind$13 <= 57343) {
                  const _tmp$4 = _string_index$2 + 2 | 0;
                  const _p$3 = (((Math.imul(_bind$12 - 55296 | 0, 1024) | 0) + _bind$13 | 0) - 56320 | 0) + 65536 | 0;
                  _decoded_next_string_index$2 = _tmp$4;
                  _decoded_char$2 = _p$3;
                  break _L$2;
                } else {
                  const _tmp$4 = _string_index$2 + 1 | 0;
                  const _p$3 = _bind$12;
                  _decoded_next_string_index$2 = _tmp$4;
                  _decoded_char$2 = _p$3;
                  break _L$2;
                }
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$12;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            }
            const _p$3 = _decoded_char$2;
            if (_p$3 < 768 || _p$3 > 879) {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char$2);
            }
            _tmp$3 = _decoded_next_string_index$2;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib23accentuate__last__vowel(s) {
  const cs = _M0FP39aaronshaf17greek_2dphonology3lib5chars(_M0FP39aaronshaf17greek_2dphonology3lib3nfc(s));
  let x = cs.length - 1 | 0;
  while (true) {
    if (x >= 0) {
      if (_M0FP39aaronshaf17greek_2dphonology3lib13kl__is__vowel(_M0MPC15array5Array2atGcE(cs, x))) {
        return `${_M0FP39aaronshaf17greek_2dphonology3lib11join__chars(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, 0, x))}${_M0FP39aaronshaf17greek_2dphonology3lib10add__acute(_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, x)))}${_M0FP39aaronshaf17greek_2dphonology3lib11join__chars(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, x + 1 | 0, undefined))}`;
      }
      x = x - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib11join__chars(new _M0TPB9ArrayViewGcE(cs, 0, cs.length));
}
function _M0FP39aaronshaf17greek_2dphonology3lib18is__long__syllable(syl) {
  const v = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let n = 0;
  const _bind$10 = syl.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = syl.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = syl.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      if (_M0FP39aaronshaf17greek_2dphonology3lib13kl__is__vowel(_decoded_char)) {
        _M0IPB13StringBuilderPB6Logger11write__char(v, _decoded_char);
        n = n + 1 | 0;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  const vs = v.val;
  if (n === 2) {
    return _M0FP39aaronshaf17greek_2dphonology3lib8is__diph(vs);
  }
  return vs === "η" || (vs === "ω" || vs === "ᾳ");
}
function _M0FP39aaronshaf17greek_2dphonology3lib19remove__punctuation(s) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      if (_decoded_char !== 44 && (_decoded_char !== 46 && (_decoded_char !== 183 && _decoded_char !== 59))) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib15remove__numbers(s) {
  const _p$3 = _M0FP39aaronshaf17greek_2dphonology3lib5chars(s);
  const _p$4 = [];
  const _p$5 = _p$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$6 = _tmp$2;
    if (_p$6 < _p$5) {
      const _p$7 = _p$3[_p$6];
      if (_p$7 !== 10 && _p$7 !== 13) {
        _M0MPC15array5Array4pushGcE(_p$4, _p$7);
      }
      _tmp$2 = _p$6 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const cs = _p$4;
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = cs.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$10) {
      const c = cs[i];
      _L: {
        if (c === 32 && ((i + 1 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 32)) {
          break _L;
        }
        if (c >= 48 && c <= 57) {
          break _L;
        }
        _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
        break _L;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib7nfc__or(d, c) {
  const cs = _M0FP39aaronshaf17greek_2dphonology3lib5chars(_M0FP39aaronshaf17greek_2dphonology3lib3nfc(d));
  return cs.length === 1 ? _M0MPC15array5Array2atGcE(cs, 0) : c;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9kl__lower(s) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const o = _decoded_char;
      let l;
      if (o >= 913 && (o <= 937 && o !== 930)) {
        l = o + 32 | 0;
      } else {
        if (_decoded_char >= 65 && _decoded_char <= 90) {
          l = o + 32 | 0;
        } else {
          const d = _M0FP39aaronshaf17greek_2dphonology3lib6decomp(_decoded_char);
          let _tmp$3;
          const _p$3 = _M0IPC14char4CharPB4Show10to__string(_decoded_char);
          if (!(d === _p$3)) {
            _tmp$3 = o >= 880;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            l = _M0FP39aaronshaf17greek_2dphonology3lib7nfc__or(d, _decoded_char);
          } else {
            l = _decoded_char;
          }
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, l);
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib28extract__consonant__clusters(text) {
  const out = [];
  const t = _M0FP39aaronshaf17greek_2dphonology3lib15remove__numbers(_M0FP39aaronshaf17greek_2dphonology3lib19remove__punctuation(_M0FP39aaronshaf17greek_2dphonology3lib9kl__lower(text)));
  const _it = _M0MPC16string6String5split(t, _M0FP39aaronshaf17greek_2dphonology3lib28extract__consonant__clustersN6recordS4287);
  while (true) {
    const _bind$10 = _M0MPB4Iter4nextGsE(_it);
    if (_bind$10 === undefined) {
      break;
    } else {
      const _Some = _bind$10;
      const _w = _Some;
      const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      let n = 0;
      const _bind$11 = _w.str;
      const _bind$12 = _w.start;
      const _bind$13 = _w.end;
      let _tmp$2 = _bind$12;
      while (true) {
        const _string_index = _tmp$2;
        if (_string_index < _bind$13) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$14 = _bind$11.charCodeAt(_string_index);
            if (_bind$14 >= 55296 && _bind$14 <= 56319 && (_string_index + 1 | 0) < _bind$13) {
              const _bind$15 = _bind$11.charCodeAt(_string_index + 1 | 0);
              if (_bind$15 >= 56320 && _bind$15 <= 57343) {
                const _tmp$3 = _string_index + 2 | 0;
                const _p$3 = (((Math.imul(_bind$14 - 55296 | 0, 1024) | 0) + _bind$15 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index = _tmp$3;
                _decoded_char = _p$3;
                break _L;
              } else {
                const _tmp$3 = _string_index + 1 | 0;
                const _p$3 = _bind$14;
                _decoded_next_string_index = _tmp$3;
                _decoded_char = _p$3;
                break _L;
              }
            } else {
              const _tmp$3 = _string_index + 1 | 0;
              const _p$3 = _bind$14;
              _decoded_next_string_index = _tmp$3;
              _decoded_char = _p$3;
              break _L;
            }
          }
          if (_M0FP39aaronshaf17greek_2dphonology3lib13kl__is__vowel(_decoded_char)) {
            break;
          }
          _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
          n = n + 1 | 0;
          _tmp$2 = _decoded_next_string_index;
          continue;
        } else {
          break;
        }
      }
      const cl = sb.val;
      if (n > 1 && !_M0MPC15array5Array8containsGsE(out, cl)) {
        _M0MPC15array5Array4pushGsE(out, cl);
      }
      continue;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib15ends__in__vowel(word) {
  const us = _M0FP39aaronshaf17greek_2dphonology3lib5units(word);
  return us.length > 0 && _M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(_M0FP39aaronshaf17greek_2dphonology3lib11first__char(_M0MPC15array5Array2atGsE(us, us.length - 1 | 0).u));
}
function _M0FP39aaronshaf17greek_2dphonology3lib13nucleus__long(nu, is_final) {
  if (nu === "") {
    return 0;
  }
  if (_M0FP39aaronshaf17greek_2dphonology3lib11char__count(nu) >= 2) {
    return is_final && (nu === "αι" || nu === "οι") ? 0 : 1;
  }
  const c = _M0FP39aaronshaf17greek_2dphonology3lib11first__char(nu);
  return c === 951 || c === 969 ? 1 : c === 949 || c === 959 ? 0 : 2;
}
function _M0FP39aaronshaf17greek_2dphonology3lib17recessive__accent(word) {
  const sm = _M0FP39aaronshaf17greek_2dphonology3lib10syl__marks(word);
  const n = sm.length;
  if (n === 0) {
    return undefined;
  }
  const ul = _M0FP39aaronshaf17greek_2dphonology3lib13nucleus__long(_M0MPC15array5Array2atGsE(sm, n - 1 | 0)._1, _M0FP39aaronshaf17greek_2dphonology3lib15ends__in__vowel(word)) === 1;
  let pos;
  let c;
  _L: {
    if (n === 1) {
      const _p$3 = 1;
      const _p$4 = false;
      const _p$5 = _M0FP39aaronshaf17greek_2dphonology3lib13nucleus__long(_M0MPC15array5Array2atGsE(sm, 0)._1, false) === 1;
      pos = 1;
      c = _p$3 === 1 ? _p$5 : _p$4 ? false : _p$3 === 2 ? _p$5 : false;
      break _L;
    } else {
      const p = n === 1 ? 1 : ul || n === 2 ? 2 : 3;
      const _p$3 = _M0FP39aaronshaf17greek_2dphonology3lib13nucleus__long(_M0MPC15array5Array2atGsE(sm, n - 2 | 0)._1, false) === 1;
      pos = p;
      c = n === 1 ? _p$3 : ul ? false : n === 2 ? _p$3 : false;
      break _L;
    }
  }
  return { _0: pos, _1: c ? "circumflex" : "acute" };
}
function _M0FP39aaronshaf17greek_2dphonology3lib16accentuate__verb(word) {
  const w = _M0FP39aaronshaf17greek_2dphonology3lib14remove__acutes(_M0FP39aaronshaf17greek_2dphonology3lib14remove__graves(word));
  const sm = _M0FP39aaronshaf17greek_2dphonology3lib10syl__marks(w);
  const n = sm.length;
  if (n === 0) {
    return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(w);
  }
  if (_M0MPC15array5Array8containsGcE(_M0MPC15array5Array2atGsE(sm, n - 1 | 0)._0, 834)) {
    return w;
  }
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib17recessive__accent(w);
  if (_bind$10 === undefined) {
    return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(w);
  } else {
    const _Some = _bind$10;
    const _x = _Some;
    const _pos = _x._0;
    const _kind = _x._1;
    const us = _M0FP39aaronshaf17greek_2dphonology3lib5units(w);
    const sy = _M0FP39aaronshaf17greek_2dphonology3lib9syllabify(w);
    let base_i = 0;
    let target = -1;
    let k = 0;
    const _bind$11 = sy.length;
    let _tmp$2 = 0;
    while (true) {
      const si = _tmp$2;
      if (si < _bind$11) {
        const s = sy[si];
        const _bind$12 = s.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$12) {
            const u = _M0MPC15array5Array2atGsE(us, k).u;
            const _bind$13 = u.length;
            let _tmp$4 = 0;
            while (true) {
              const _string_index = _tmp$4;
              if (_string_index < _bind$13) {
                let _decoded_next_string_index;
                let _decoded_char;
                _L: {
                  const _bind$14 = u.charCodeAt(_string_index);
                  if (_bind$14 >= 55296 && _bind$14 <= 56319 && (_string_index + 1 | 0) < _bind$13) {
                    const _bind$15 = u.charCodeAt(_string_index + 1 | 0);
                    if (_bind$15 >= 56320 && _bind$15 <= 57343) {
                      const _tmp$5 = _string_index + 2 | 0;
                      const _p$3 = (((Math.imul(_bind$14 - 55296 | 0, 1024) | 0) + _bind$15 | 0) - 56320 | 0) + 65536 | 0;
                      _decoded_next_string_index = _tmp$5;
                      _decoded_char = _p$3;
                      break _L;
                    } else {
                      const _tmp$5 = _string_index + 1 | 0;
                      const _p$3 = _bind$14;
                      _decoded_next_string_index = _tmp$5;
                      _decoded_char = _p$3;
                      break _L;
                    }
                  } else {
                    const _tmp$5 = _string_index + 1 | 0;
                    const _p$3 = _bind$14;
                    _decoded_next_string_index = _tmp$5;
                    _decoded_char = _p$3;
                    break _L;
                  }
                }
                if (si === (n - _pos | 0) && _M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(_decoded_char)) {
                  target = base_i;
                }
                base_i = base_i + 1 | 0;
                _tmp$4 = _decoded_next_string_index;
                continue;
              } else {
                break;
              }
            }
            k = k + 1 | 0;
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$2 = si + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const mark = _kind === "circumflex" ? 834 : 769;
    const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    let bi = -1;
    let pending = false;
    const _bind$12 = w.length;
    let _tmp$3 = 0;
    while (true) {
      const _string_index = _tmp$3;
      if (_string_index < _bind$12) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$13 = w.charCodeAt(_string_index);
          if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index + 1 | 0) < _bind$12) {
            const _bind$14 = w.charCodeAt(_string_index + 1 | 0);
            if (_bind$14 >= 56320 && _bind$14 <= 57343) {
              const _tmp$4 = _string_index + 2 | 0;
              const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$4;
              _decoded_char = _p$3;
              break _L;
            } else {
              const _tmp$4 = _string_index + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index = _tmp$4;
              _decoded_char = _p$3;
              break _L;
            }
          } else {
            const _tmp$4 = _string_index + 1 | 0;
            const _p$3 = _bind$13;
            _decoded_next_string_index = _tmp$4;
            _decoded_char = _p$3;
            break _L;
          }
        }
        const _bind$13 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
        const _bind$14 = _bind$13.length;
        let _tmp$4 = 0;
        while (true) {
          const _string_index$2 = _tmp$4;
          if (_string_index$2 < _bind$14) {
            let _decoded_next_string_index$2;
            let _decoded_char$2;
            _L$2: {
              const _bind$15 = _bind$13.charCodeAt(_string_index$2);
              if (_bind$15 >= 55296 && _bind$15 <= 56319 && (_string_index$2 + 1 | 0) < _bind$14) {
                const _bind$16 = _bind$13.charCodeAt(_string_index$2 + 1 | 0);
                if (_bind$16 >= 56320 && _bind$16 <= 57343) {
                  const _tmp$5 = _string_index$2 + 2 | 0;
                  const _p$3 = (((Math.imul(_bind$15 - 55296 | 0, 1024) | 0) + _bind$16 | 0) - 56320 | 0) + 65536 | 0;
                  _decoded_next_string_index$2 = _tmp$5;
                  _decoded_char$2 = _p$3;
                  break _L$2;
                } else {
                  const _tmp$5 = _string_index$2 + 1 | 0;
                  const _p$3 = _bind$15;
                  _decoded_next_string_index$2 = _tmp$5;
                  _decoded_char$2 = _p$3;
                  break _L$2;
                }
              } else {
                const _tmp$5 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$15;
                _decoded_next_string_index$2 = _tmp$5;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            }
            const greek_base = !(_decoded_char$2 >= 768 && _decoded_char$2 <= 879) && (_decoded_char$2 >= 880 && _decoded_char$2 <= 1023);
            if (greek_base || !(_decoded_char$2 >= 768 && _decoded_char$2 <= 879)) {
              if (pending) {
                _M0IPB13StringBuilderPB6Logger11write__char(sb, mark);
                pending = false;
              }
              if (greek_base) {
                bi = bi + 1 | 0;
                if (bi === target) {
                  pending = true;
                }
              }
            }
            if (pending && _decoded_char$2 === 837) {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, mark);
              pending = false;
            }
            _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char$2);
            _tmp$4 = _decoded_next_string_index$2;
            continue;
          } else {
            break;
          }
        }
        _tmp$3 = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    if (pending) {
      _M0IPB13StringBuilderPB6Logger11write__char(sb, mark);
    }
    return _M0FP39aaronshaf17greek_2dphonology3lib3nfc(sb.val);
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib10verb__stem(lexical_form) {
  const cs = _M0FP39aaronshaf17greek_2dphonology3lib5chars(lexical_form);
  return cs.length === 0 ? "" : _M0FP39aaronshaf17greek_2dphonology3lib11join__chars(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, 0, cs.length - 1 | 0));
}
function _M0FP39aaronshaf17greek_2dphonology3lib9conjugate(stem, paradigm) {
  _L: {
    switch (paradigm) {
      case "present-active-indicative": {
        const _p$3 = new Array(_M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes.length);
        const _p$4 = _M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes.length;
        let _tmp$2 = 0;
        while (true) {
          const _p$5 = _tmp$2;
          if (_p$5 < _p$4) {
            const _p$6 = _M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes[_p$5];
            _p$3[_p$5] = _M0FP39aaronshaf17greek_2dphonology3lib16accentuate__verb(`${stem}${_p$6}`);
            _tmp$2 = _p$5 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return _p$3;
      }
      case "imperfect-active-indicative": {
        const _p$5 = new Array(_M0FP39aaronshaf17greek_2dphonology3lib18imperfect__endings.length);
        const _p$6 = _M0FP39aaronshaf17greek_2dphonology3lib18imperfect__endings.length;
        let _tmp$3 = 0;
        while (true) {
          const _p$7 = _tmp$3;
          if (_p$7 < _p$6) {
            const _p$8 = _M0FP39aaronshaf17greek_2dphonology3lib18imperfect__endings[_p$7];
            _p$5[_p$7] = _M0FP39aaronshaf17greek_2dphonology3lib16accentuate__verb(`ἐ${stem}${_p$8}`);
            _tmp$3 = _p$7 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return _p$5;
      }
      case "future-active-indicative": {
        const _p$7 = new Array(_M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes.length);
        const _p$8 = _M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes.length;
        let _tmp$4 = 0;
        while (true) {
          const _p$9 = _tmp$4;
          if (_p$9 < _p$8) {
            const _p$10 = _M0FP39aaronshaf17greek_2dphonology3lib17primary__suffixes[_p$9];
            _p$7[_p$9] = _M0FP39aaronshaf17greek_2dphonology3lib16accentuate__verb(_M0FP39aaronshaf17greek_2dphonology3lib10amalgamate(`${stem}σ${_p$10}`));
            _tmp$4 = _p$9 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return _p$7;
      }
      case "future-middle-indicative": {
        const _p$9 = new Array(_M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings.length);
        const _p$10 = _M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings.length;
        let _tmp$5 = 0;
        while (true) {
          const _p$11 = _tmp$5;
          if (_p$11 < _p$10) {
            const _p$12 = _M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings[_p$11];
            _p$9[_p$11] = `${stem}σ${_p$12}`;
            _tmp$5 = _p$11 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return _p$9;
      }
      case "middle-passive-indicative": {
        const _p$11 = new Array(_M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings.length);
        const _p$12 = _M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings.length;
        let _tmp$6 = 0;
        while (true) {
          const _p$13 = _tmp$6;
          if (_p$13 < _p$12) {
            const _p$14 = _M0FP39aaronshaf17greek_2dphonology3lib24middle__passive__endings[_p$13];
            _p$11[_p$13] = `${stem}${_p$14}`;
            _tmp$6 = _p$13 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return _p$11;
      }
      case "present-active-subjunctive": {
        break _L;
      }
      case "middle-passive-subjunctive": {
        break _L;
      }
      default: {
        return [];
      }
    }
  }
  const _p$3 = new Array(_M0FP39aaronshaf17greek_2dphonology3lib20subjunctive__endings.length);
  const _p$4 = _M0FP39aaronshaf17greek_2dphonology3lib20subjunctive__endings.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp$2;
    if (_p$5 < _p$4) {
      const _p$6 = _M0FP39aaronshaf17greek_2dphonology3lib20subjunctive__endings[_p$5];
      _p$3[_p$5] = `${stem}${_p$6}`;
      _tmp$2 = _p$5 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p$3;
}
function _M0FP39aaronshaf17greek_2dphonology3lib4jarr(xs) {
  const _p$3 = new Array(xs.length);
  const _p$4 = xs.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp$2;
    if (_p$5 < _p$4) {
      const _p$6 = xs[_p$5];
      _p$3[_p$5] = _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_p$6);
      _tmp$2 = _p$5 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return `[${_M0MPC15array5Array4joinGsE(_p$3, _M0FP39aaronshaf17greek_2dphonology3lib4jarrN6recordS4386)}]`;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9fold__map(p) {
  switch (p) {
    case "ɛ": {
      return "e";
    }
    case "ə": {
      return "e";
    }
    case "ɪ": {
      return "i";
    }
    case "j": {
      return "i";
    }
    case "ʊ": {
      return "u";
    }
    case "w": {
      return "u";
    }
    case "ɔ": {
      return "o";
    }
    case "ʏ": {
      return "y";
    }
    case "ø": {
      return "y";
    }
    case "β": {
      return "v";
    }
    case "ʋ": {
      return "v";
    }
    case "ʝ": {
      return "ɣ";
    }
    case "ç": {
      return "x";
    }
    case "χ": {
      return "x";
    }
    case "ɡ": {
      return "g";
    }
    case "ɾ": {
      return "r";
    }
    case "ɐ": {
      return "a";
    }
    case "ɑ": {
      return "a";
    }
    case "ŋ": {
      return "n";
    }
    case "d͡z": {
      return "z";
    }
    default: {
      return p;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib4fold(p) {
  if (p === "|" || p === "") {
    return p;
  }
  const cs = [];
  const _bind$10 = p.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = p.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = p.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      if (_decoded_char !== 720) {
        _M0MPC15array5Array4pushGcE(cs, _decoded_char);
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (cs.length > 0 && _M0MPC15array5Array2atGcE(cs, cs.length - 1 | 0) === 688) {
      _M0MPC15array5Array3popGcE(cs);
      continue;
    } else {
      break;
    }
  }
  return _M0FP39aaronshaf17greek_2dphonology3lib9fold__map(_M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(cs, 0, cs.length)));
}
function _M0FP39aaronshaf17greek_2dphonology3lib10lm__tables(s) {
  switch (s) {
    case 0: {
      return { _0: _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__0, _1: _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__0 };
    }
    case 1: {
      return { _0: _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__1, _1: _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__1 };
    }
    case 2: {
      return { _0: _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__2, _1: _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__2 };
    }
    case 3: {
      return { _0: _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__3, _1: _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__3 };
    }
    default: {
      return { _0: _M0FP39aaronshaf17greek_2dphonology3lib13lm__bigram__4, _1: _M0FP39aaronshaf17greek_2dphonology3lib14lm__unigram__4 };
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib13split__spaces(s) {
  const out = [];
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let n = 0;
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      if (_decoded_char === 32) {
        if (n > 0) {
          _M0MPC15array5Array4pushGsE(out, sb.val);
          _M0MPB13StringBuilder5reset(sb);
          n = 0;
        }
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
        n = n + 1 | 0;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  if (n > 0) {
    _M0MPC15array5Array4pushGsE(out, sb.val);
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib9noisy__lm(s) {
  if (_M0FP39aaronshaf17greek_2dphonology3lib9nl__cache.length === 0) {
    const v = _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab.length + 0;
    const _bind$10 = [];
    const cf = _M0MPB3Map3MapGsRPB5ArrayGUsdEEE(new _M0TPB9ArrayViewGUsRPB5ArrayGUsdEEEE(_bind$10, 0, 0), undefined);
    const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$11) {
        const e = _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab[_];
        const n = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib17ct__phones__total, e), 0) + 0;
        const d = [];
        const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab.length;
        let _tmp$3 = 0;
        while (true) {
          const _$2 = _tmp$3;
          if (_$2 < _bind$12) {
            const h = _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab[_$2];
            const base = h === e ? 0.7 : 0.300000000000000044 / v;
            const x = (_M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib10ct__phones, `${e}\t${h}`), 0) + 0 + 5 * base) / (n + 5);
            if (x > 0.0001) {
              _M0MPC15array5Array4pushGsE(d, { _0: h, _1: x });
            }
            _tmp$3 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPB3Map3setGsRPB5ArrayGUsdEEE(cf, e, d);
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib7schemes.length;
    let _tmp$3 = 0;
    while (true) {
      const si = _tmp$3;
      if (si < _bind$12) {
        const _bind$13 = _M0FP39aaronshaf17greek_2dphonology3lib10lm__tables(si);
        const _big0 = _bind$13._0;
        const _bind$14 = [];
        const big = _M0MPB3Map3MapGsdE(new _M0TPB9ArrayViewGUsdEE(_bind$14, 0, 0), undefined);
        const _bind$15 = [];
        const uni = _M0MPB3Map3MapGsdE(new _M0TPB9ArrayViewGUsdEE(_bind$15, 0, 0), undefined);
        const _it = _M0MPB3Map5iter2GsiE(_big0);
        while (true) {
          const _bind$16 = _M0MPB5Iter24nextGsiE(_it);
          if (_bind$16 === undefined) {
            break;
          } else {
            const _Some = _bind$16;
            const _x = _Some;
            const _k = _x._0;
            const _c = _x._1;
            const parts = _M0FP39aaronshaf17greek_2dphonology3lib13split__spaces(_k);
            const e1 = _M0MPC15array5Array2atGsE(parts, 0);
            const e2 = _M0MPC15array5Array2atGsE(parts, 1);
            const c1 = _M0MPC16option6Option10unwrap__orGRPB5ArrayGUsdEEE(_M0MPB3Map3getGsRPB5ArrayGUsdEEE(cf, e1), [{ _0: e1, _1: 1 }]);
            const c2 = _M0MPC16option6Option10unwrap__orGRPB5ArrayGUsdEEE(_M0MPB3Map3getGsRPB5ArrayGUsdEEE(cf, e2), [{ _0: e2, _1: 1 }]);
            const _bind$17 = c1.length;
            let _tmp$4 = 0;
            while (true) {
              const _ = _tmp$4;
              if (_ < _bind$17) {
                const x1 = c1[_];
                const _bind$18 = c2.length;
                let _tmp$5 = 0;
                while (true) {
                  const _$2 = _tmp$5;
                  if (_$2 < _bind$18) {
                    const x2 = c2[_$2];
                    const x = (_c + 0) * x1._1 * x2._1;
                    const key = `${x1._0} ${x2._0}`;
                    _M0MPB3Map3setGsdE(big, key, _M0MPC16option6Option10unwrap__orGdE(_M0MPB3Map3getGsdE(big, key), 0) + x);
                    _M0MPB3Map3setGsdE(uni, x1._0, _M0MPC16option6Option10unwrap__orGdE(_M0MPB3Map3getGsdE(uni, x1._0), 0) + x);
                    _tmp$5 = _$2 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _tmp$4 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            continue;
          }
        }
        _M0MPC15array5Array4pushGsE(_M0FP39aaronshaf17greek_2dphonology3lib9nl__cache, { _0: big, _1: uni });
        _tmp$3 = si + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return _M0MPC15array5Array2atGsE(_M0FP39aaronshaf17greek_2dphonology3lib9nl__cache, s);
}
function _M0FP39aaronshaf17greek_2dphonology3lib7softmax(ll, t) {
  const m = new _M0TPB8MutLocalGdE(_M0MPC15array5Array2atGdE(ll, 0));
  const _bind$10 = ll.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const x = ll[_];
      if (x > m.val) {
        m.val = x;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = new Array(ll.length);
  const _p$4 = ll.length;
  let _tmp$3 = 0;
  while (true) {
    const _p$5 = _tmp$3;
    if (_p$5 < _p$4) {
      const _p$6 = ll[_p$5];
      _p$3[_p$5] = _M0FPC14math3exp((_p$6 - m.val) / t);
      _tmp$3 = _p$5 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const e = _p$3;
  if (e.length === 5) {
    const _p$5 = new Array(e.length);
    const _p$6 = e.length;
    let _tmp$4 = 0;
    while (true) {
      const _p$7 = _tmp$4;
      if (_p$7 < _p$6) {
        const _p$8 = e[_p$7];
        _p$5[_p$7] = $i64_trunc_f64(_M0MPC16double6Double5round(_p$8 * 67108864));
        _tmp$4 = _p$7 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const w = _p$5;
    const q = _M0FP39aaronshaf17greek_2dphonology6kernel10normalize5(_M0MPC15array5Array2atGsE(w, 0), _M0MPC15array5Array2atGsE(w, 1), _M0MPC15array5Array2atGsE(w, 2), _M0MPC15array5Array2atGsE(w, 3), _M0MPC15array5Array2atGsE(w, 4), _M0FP39aaronshaf17greek_2dphonology3lib7softmaxN1sS4460);
    const _p$7 = [0 >>> 0 < q.length ? q[0] : $oob(), 1 >>> 0 < q.length ? q[1] : $oob(), 2 >>> 0 < q.length ? q[2] : $oob(), 3 >>> 0 < q.length ? q[3] : $oob(), 4 >>> 0 < q.length ? q[4] : $oob()];
    const _p$8 = new Array(_p$7.length);
    const _p$9 = _p$7.length;
    let _tmp$5 = 0;
    while (true) {
      const _p$10 = _tmp$5;
      if (_p$10 < _p$9) {
        const _p$11 = _p$7[_p$10];
        _p$8[_p$10] = $f64_convert_i64(BigInt.asIntN(64, _p$11)) / 1073741824;
        _tmp$5 = _p$10 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$8;
  }
  const z = new _M0TPB8MutLocalGdE(0);
  const _bind$11 = e.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$11) {
      const x = e[_];
      z.val = z.val + x;
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$5 = new Array(e.length);
  const _p$6 = e.length;
  let _tmp$5 = 0;
  while (true) {
    const _p$7 = _tmp$5;
    if (_p$7 < _p$6) {
      const _p$8 = e[_p$7];
      _p$5[_p$7] = _p$8 / z.val;
      _tmp$5 = _p$7 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p$5;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8is__base(c) {
  const i = c;
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (i >= 592 && i <= 687 || (c === 946 || (c === 952 || (c === 231 || (c === 240 || (c === 331 || (c === 611 || (c === 967 || (c === 248 || (c === 603 || (c === 596 || (c === 618 || (c === 650 || c === 655))))))))))))));
}
function _M0FP39aaronshaf17greek_2dphonology3lib8tokenizeN5flushS4482(_env) {
  const out = _env._1;
  const cur = _env._0;
  if (out.length > 0 && cur.length > 0) {
    _M0MPC15array5Array4pushGsE(out, "|");
  }
  const _bind$10 = cur.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$10) {
      const t = cur[_];
      _M0MPC15array5Array4pushGsE(out, t);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array5clearGRP39aaronshaf17greek_2dphonology3lib8LexEntryE(cur);
}
function _M0FP39aaronshaf17greek_2dphonology3lib8tokenize(s) {
  const cs = [];
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      if (!(_decoded_char >= 768 && _decoded_char <= 879 && _decoded_char !== 865) && (_decoded_char !== 712 && (_decoded_char !== 716 && _decoded_char !== 46))) {
        _M0MPC15array5Array4pushGcE(cs, _decoded_char);
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  const out = [];
  const cur = [];
  const _env = { _0: cur, _1: out };
  let i = 0;
  while (true) {
    if (i < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i);
      if (c === 124) {
        _M0FP39aaronshaf17greek_2dphonology3lib8tokenizeN5flushS4482(_env);
        i = i + 1 | 0;
        continue;
      }
      if (!_M0FP39aaronshaf17greek_2dphonology3lib8is__base(c)) {
        i = i + 1 | 0;
        continue;
      }
      const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
      i = i + 1 | 0;
      if ((i + 1 | 0) < cs.length && (_M0MPC15array5Array2atGcE(cs, i) === 865 && (_M0MPC15array5Array2atGcE(cs, i + 1 | 0) >= 97 && _M0MPC15array5Array2atGcE(cs, i + 1 | 0) <= 122 || (_M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 658 || _M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 657)))) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cs, i));
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cs, i + 1 | 0));
        i = i + 2 | 0;
      }
      if (i < cs.length && (_M0MPC15array5Array2atGcE(cs, i) === 688 || (_M0MPC15array5Array2atGcE(cs, i) === 690 || _M0MPC15array5Array2atGcE(cs, i) === 695))) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cs, i));
        i = i + 1 | 0;
      }
      if (i < cs.length && _M0MPC15array5Array2atGcE(cs, i) === 720) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0MPC15array5Array2atGcE(cs, i));
        i = i + 1 | 0;
      }
      _M0MPC15array5Array4pushGsE(cur, sb.val);
      continue;
    } else {
      break;
    }
  }
  _M0FP39aaronshaf17greek_2dphonology3lib8tokenizeN5flushS4482(_env);
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib12detect__free(ipa_s) {
  const obs = [];
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib8tokenize(ipa_s);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$11) {
      const p = _bind$10[_];
      const _p$3 = "|";
      if (!(p === _p$3)) {
        _M0MPC15array5Array4pushGsE(obs, _M0FP39aaronshaf17greek_2dphonology3lib4fold(p));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ns = _M0FP39aaronshaf17greek_2dphonology3lib7schemes.length;
  const ll = _M0MPC15array5Array4makeGdE(ns, 0);
  const vs = _M0FP39aaronshaf17greek_2dphonology3lib9nl__vocab.length + 0;
  let _tmp$3 = 0;
  while (true) {
    const s = _tmp$3;
    if (s < ns) {
      const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib9noisy__lm(s);
      const _big = _bind$12._0;
      const _uni = _bind$12._1;
      let tot = 0;
      const _bind$13 = obs.length - 1 | 0;
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < _bind$13) {
          const cab = _M0MPC16option6Option10unwrap__orGdE(_M0MPB3Map3getGsdE(_big, `${_M0MPC15array5Array2atGsE(obs, i)} ${_M0MPC15array5Array2atGsE(obs, i + 1 | 0)}`), 0);
          const ca = _M0MPC16option6Option10unwrap__orGdE(_M0MPB3Map3getGsdE(_uni, _M0MPC15array5Array2atGsE(obs, i)), 0);
          tot = tot + _M0FPC14math2ln((cab + 0.5) / (ca + 0.5 * vs));
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array3setGdE(ll, s, tot);
      _tmp$3 = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP39aaronshaf17greek_2dphonology3lib9Detection("free", _M0FP39aaronshaf17greek_2dphonology3lib7softmax(ll, 1), ll, [], [], [], obs.length);
}
function _M0FP39aaronshaf17greek_2dphonology3lib3vow(p) {
  return p === "a" || (p === "e" || (p === "i" || (p === "o" || (p === "u" || p === "y"))));
}
function _M0FP39aaronshaf17greek_2dphonology3lib9sub__cost(a, b) {
  return a === b ? 0 : _M0FP39aaronshaf17greek_2dphonology3lib3vow(a) && _M0FP39aaronshaf17greek_2dphonology3lib3vow(b) ? 0.5 : 1;
}
function _M0FP39aaronshaf17greek_2dphonology3lib5align(obs, exp) {
  const n = obs.length;
  const m = exp.length;
  const _p$3 = n + 1 | 0;
  let d;
  if (_p$3 <= 0) {
    d = [];
  } else {
    const _p$4 = new Array(_p$3);
    let _tmp$2 = 0;
    while (true) {
      const _p$5 = _tmp$2;
      if (_p$5 < _p$3) {
        _p$4[_p$5] = _M0MPC15array5Array4makeGdE(m + 1 | 0, 0);
        _tmp$2 = _p$5 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    d = _p$4;
  }
  let _tmp$2 = 1;
  let _tmp$3 = 1 <= n;
  while (true) {
    const i = _tmp$2;
    const _more = _tmp$3;
    if (_more) {
      _M0MPC15array5Array3setGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i), 0, i + 0);
      _tmp$2 = i + 1 | 0;
      _tmp$3 = i < n;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4 = 1;
  let _tmp$5 = 1 <= m;
  while (true) {
    const j = _tmp$4;
    const _more = _tmp$5;
    if (_more) {
      _M0MPC15array5Array3setGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, 0), j, j + 0);
      _tmp$4 = j + 1 | 0;
      _tmp$5 = j < m;
      continue;
    } else {
      break;
    }
  }
  let _tmp$6 = 1;
  let _tmp$7 = 1 <= n;
  while (true) {
    const i = _tmp$6;
    const _more = _tmp$7;
    if (_more) {
      let _tmp$8 = 1;
      let _tmp$9 = 1 <= m;
      while (true) {
        const j = _tmp$8;
        const _more$2 = _tmp$9;
        if (_more$2) {
          const a = _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i - 1 | 0), j - 1 | 0) + _M0FP39aaronshaf17greek_2dphonology3lib9sub__cost(_M0MPC15array5Array2atGsE(obs, i - 1 | 0), _M0MPC15array5Array2atGsE(exp, j - 1 | 0));
          const b = _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i - 1 | 0), j) + 1;
          const c = _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i), j - 1 | 0) + 1;
          let v = a;
          if (b < v) {
            v = b;
          }
          if (c < v) {
            v = c;
          }
          _M0MPC15array5Array3setGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i), j, v);
          _tmp$8 = j + 1 | 0;
          _tmp$9 = j < m;
          continue;
        } else {
          break;
        }
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = i < n;
      continue;
    } else {
      break;
    }
  }
  const path = [];
  let i = n;
  let j = m;
  while (true) {
    if (i > 0 || j > 0) {
      if (i > 0 && (j > 0 && _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i), j) === _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i - 1 | 0), j - 1 | 0) + _M0FP39aaronshaf17greek_2dphonology3lib9sub__cost(_M0MPC15array5Array2atGsE(obs, i - 1 | 0), _M0MPC15array5Array2atGsE(exp, j - 1 | 0)))) {
        _M0MPC15array5Array4pushGsE(path, { _0: i - 1 | 0, _1: j - 1 | 0 });
        i = i - 1 | 0;
        j = j - 1 | 0;
      } else {
        if (i > 0 && _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i), j) === _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, i - 1 | 0), j) + 1) {
          _M0MPC15array5Array4pushGsE(path, { _0: i - 1 | 0, _1: -1 });
          i = i - 1 | 0;
        } else {
          _M0MPC15array5Array4pushGsE(path, { _0: -1, _1: j - 1 | 0 });
          j = j - 1 | 0;
        }
      }
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array14rev__in__placeGUiiEE(path);
  return { _0: path, _1: _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(d, n), m) };
}
function _M0FP39aaronshaf17greek_2dphonology3lib6is__ws(c) {
  return c === 32 || (c === 9 || (c === 10 || (c === 13 || (c === 11 || c === 12))));
}
function _M0FP39aaronshaf17greek_2dphonology3lib9split__ws(s) {
  const out = [];
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let n = 0;
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      if (_M0FP39aaronshaf17greek_2dphonology3lib6is__ws(_decoded_char)) {
        if (n > 0) {
          _M0MPC15array5Array4pushGsE(out, sb.val);
          _M0MPB13StringBuilder5reset(sb);
          n = 0;
        }
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
        n = n + 1 | 0;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  if (n > 0) {
    _M0MPC15array5Array4pushGsE(out, sb.val);
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib15is__alpha__like(c) {
  const o = c;
  if (_M0MPC15array5Array8containsGiE(_M0FP39aaronshaf17greek_2dphonology3lib10non__alpha, o)) {
    return false;
  }
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (o >= 192 && o <= 591 || (o >= 880 && o <= 1023 || o >= 7936 && o <= 8191)));
}
function _M0FP39aaronshaf17greek_2dphonology3lib6is__gc(c) {
  switch (c) {
    case 946: {
      return true;
    }
    case 947: {
      return true;
    }
    case 948: {
      return true;
    }
    case 950: {
      return true;
    }
    case 952: {
      return true;
    }
    case 954: {
      return true;
    }
    case 955: {
      return true;
    }
    case 956: {
      return true;
    }
    case 957: {
      return true;
    }
    case 958: {
      return true;
    }
    case 960: {
      return true;
    }
    case 961: {
      return true;
    }
    case 963: {
      return true;
    }
    case 962: {
      return true;
    }
    case 964: {
      return true;
    }
    case 966: {
      return true;
    }
    case 967: {
      return true;
    }
    case 968: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib6is__gv(c) {
  return _M0FP39aaronshaf17greek_2dphonology3lib9is__vowel(c);
}
function _M0FP39aaronshaf17greek_2dphonology3lib13g2p__clusters(word) {
  const t = [];
  const _bind$10 = word.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = word.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = word.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const _bind$11 = _M0FP39aaronshaf17greek_2dphonology3lib9nfd__char(_decoded_char);
      const _bind$12 = _bind$11.length;
      let _tmp$3 = 0;
      while (true) {
        const _string_index$2 = _tmp$3;
        if (_string_index$2 < _bind$12) {
          let _decoded_next_string_index$2;
          let _decoded_char$2;
          _L$2: {
            const _bind$13 = _bind$11.charCodeAt(_string_index$2);
            if (_bind$13 >= 55296 && _bind$13 <= 56319 && (_string_index$2 + 1 | 0) < _bind$12) {
              const _bind$14 = _bind$11.charCodeAt(_string_index$2 + 1 | 0);
              if (_bind$14 >= 56320 && _bind$14 <= 57343) {
                const _tmp$4 = _string_index$2 + 2 | 0;
                const _p$3 = (((Math.imul(_bind$13 - 55296 | 0, 1024) | 0) + _bind$14 | 0) - 56320 | 0) + 65536 | 0;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              } else {
                const _tmp$4 = _string_index$2 + 1 | 0;
                const _p$3 = _bind$13;
                _decoded_next_string_index$2 = _tmp$4;
                _decoded_char$2 = _p$3;
                break _L$2;
              }
            } else {
              const _tmp$4 = _string_index$2 + 1 | 0;
              const _p$3 = _bind$13;
              _decoded_next_string_index$2 = _tmp$4;
              _decoded_char$2 = _p$3;
              break _L$2;
            }
          }
          _L$3: {
            if (_decoded_char$2 === 837 || _decoded_char$2 === 8126) {
              _M0MPC15array5Array4pushGcE(t, 837);
              break _L$3;
            }
            _M0MPC15array5Array4pushGcE(t, _decoded_char$2 >= 768 && _decoded_char$2 <= 879 ? _decoded_char$2 : _M0FP39aaronshaf17greek_2dphonology3lib11fold__lower(_decoded_char$2));
            break _L$3;
          }
          _tmp$3 = _decoded_next_string_index$2;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  const out = [];
  let i = 0;
  while (true) {
    if (i < t.length) {
      const ch = _M0MPC15array5Array2atGcE(t, i);
      if (ch >= 768 && ch <= 879 || ch === 837) {
        i = i + 1 | 0;
        continue;
      }
      i = i + 1 | 0;
      let rough = false;
      let dia = false;
      let long = false;
      let isub = false;
      while (true) {
        let _tmp$3;
        if (i < t.length) {
          let _tmp$4;
          const _p$3 = _M0MPC15array5Array2atGcE(t, i);
          if (_p$3 >= 768 && _p$3 <= 879) {
            _tmp$4 = true;
          } else {
            _tmp$4 = _M0MPC15array5Array2atGcE(t, i) === 837;
          }
          _tmp$3 = _tmp$4;
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          if (_M0MPC15array5Array2atGcE(t, i) === 837) {
            isub = true;
          } else {
            if (_M0MPC15array5Array2atGcE(t, i) === 834 || _M0MPC15array5Array2atGcE(t, i) === 772) {
              long = true;
            } else {
              if (_M0MPC15array5Array2atGcE(t, i) === 788) {
                rough = true;
              } else {
                if (_M0MPC15array5Array2atGcE(t, i) === 776) {
                  dia = true;
                }
              }
            }
          }
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (_M0FP39aaronshaf17greek_2dphonology3lib6is__gv(ch) || _M0FP39aaronshaf17greek_2dphonology3lib6is__gc(ch)) {
        _M0MPC15array5Array4pushGsE(out, new _M0TP39aaronshaf17greek_2dphonology3lib3GCl(ch, rough, dia, long, isub));
      } else {
        if (_M0FP39aaronshaf17greek_2dphonology3lib15is__alpha__like(ch)) {
          return _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4None__;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return out.length === 0 ? _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4None__ : new _M0DTPC16option6OptionGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib3GClEE4Some(out);
}
function _M0FP39aaronshaf17greek_2dphonology3lib12word__phones(word, s, wi) {
  const out = [];
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib13g2p__clusters(word);
  if (_bind$10.$tag === 1) {
    const _Some = _bind$10;
    const _cl = _Some._0;
    const n = _cl.length;
    const bs = $make_array_len_and_init(n, 0);
    const rf = $make_array_len_and_init(n, 0);
    const dd = $make_array_len_and_init(n, 0);
    const _bind$11 = _cl.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$11) {
        const c = _cl[i];
        if (i >>> 0 < bs.length) {
          bs[i] = c.b;
        } else {
          $oob();
        }
        if (i >>> 0 < rf.length) {
          rf[i] = c.rough ? 1 : 0;
        } else {
          $oob();
        }
        if (i >>> 0 < dd.length) {
          dd[i] = c.dia ? 1 : 0;
        } else {
          $oob();
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const buf = $make_array_len_and_init(8, 0);
    const starts = $make_array_len_and_init(n + 1 | 0, 0);
    const nu = _M0FP39aaronshaf17greek_2dphonology6kernel10g2p__units(s, bs, rf, dd, starts);
    let skip = false;
    let _tmp$3 = 0;
    while (true) {
      const ui = _tmp$3;
      if (ui < nu) {
        _L: {
          const i = ui >>> 0 < starts.length ? starts[ui] : $oob();
          const r = _M0FP39aaronshaf17greek_2dphonology6kernel9g2p__step(s, bs, rf, dd, i, buf);
          const cnt = r % 8 | 0;
          const adv = r / 8 | 0;
          if (skip) {
            skip = false;
            break _L;
          }
          let gem = false;
          let isub = false;
          if (s === 3 && (adv === 1 && _M0FP39aaronshaf17greek_2dphonology3lib6is__gv(_M0MPC15array5Array2atGsE(_cl, i).b))) {
            let _tmp$4 = 0;
            while (true) {
              const k = _tmp$4;
              if (k < cnt) {
                if ((k >>> 0 < buf.length ? buf[k] : $oob()) !== 17 && (_M0MPC15array5Array2atGsE(_cl, i).long || _M0MPC15array5Array2atGsE(_cl, i).isub)) {
                  if (k >>> 0 < buf.length) {
                    buf[k] = _M0FP39aaronshaf17greek_2dphonology6kernel14g__attic__long(k >>> 0 < buf.length ? buf[k] : $oob());
                  } else {
                    $oob();
                  }
                }
                _tmp$4 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            isub = _M0MPC15array5Array2atGsE(_cl, i).isub;
          } else {
            let _tmp$4;
            if (s === 3) {
              let _tmp$5;
              if (adv === 1) {
                let _tmp$6;
                if (cnt === 1) {
                  let _tmp$7;
                  if (!_M0FP39aaronshaf17greek_2dphonology3lib6is__gv(_M0MPC15array5Array2atGsE(_cl, i).b)) {
                    let _tmp$8;
                    if (_M0MPC15array5Array2atGsE(_cl, i).b !== 947) {
                      let _tmp$9;
                      if ((ui + 1 | 0) < nu) {
                        let _tmp$10;
                        const _tmp$11 = ui + 1 | 0;
                        if ((_tmp$11 >>> 0 < starts.length ? starts[_tmp$11] : $oob()) === (i + 1 | 0)) {
                          _tmp$10 = (i + 1 | 0) < n && _M0MPC15array5Array2atGsE(_cl, i + 1 | 0).b === _M0MPC15array5Array2atGsE(_cl, i).b;
                        } else {
                          _tmp$10 = false;
                        }
                        _tmp$9 = _tmp$10;
                      } else {
                        _tmp$9 = false;
                      }
                      _tmp$8 = _tmp$9;
                    } else {
                      _tmp$8 = false;
                    }
                    _tmp$7 = _tmp$8;
                  } else {
                    _tmp$7 = false;
                  }
                  _tmp$6 = _tmp$7;
                } else {
                  _tmp$6 = false;
                }
                _tmp$5 = _tmp$6;
              } else {
                _tmp$5 = false;
              }
              _tmp$4 = _tmp$5;
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              gem = true;
              skip = true;
            }
          }
          const base = _M0MPC15array5Array2atGsE(_cl, i).b;
          let tag;
          if (adv === 2) {
            tag = `${_M0IPC14char4CharPB4Show10to__string(base)}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGsE(_cl, i + 1 | 0).b)}`;
          } else {
            if (_M0FP39aaronshaf17greek_2dphonology3lib6is__gv(base)) {
              tag = _M0IPC14char4CharPB4Show10to__string(base);
            } else {
              _L$2: {
                _L$3: {
                  switch (base) {
                    case 946: {
                      break _L$3;
                    }
                    case 947: {
                      break _L$3;
                    }
                    case 948: {
                      break _L$3;
                    }
                    case 950: {
                      break _L$3;
                    }
                    case 952: {
                      break _L$3;
                    }
                    case 966: {
                      break _L$3;
                    }
                    case 967: {
                      break _L$3;
                    }
                    default: {
                      tag = "";
                    }
                  }
                  break _L$2;
                }
                tag = _M0IPC14char4CharPB4Show10to__string(base);
              }
            }
          }
          let _tmp$4 = 0;
          while (true) {
            const k = _tmp$4;
            if (k < cnt) {
              const id = k >>> 0 < buf.length ? buf[k] : $oob();
              if (id === 17) {
                _M0MPC15array5Array4pushGsE(out, new _M0TP39aaronshaf17greek_2dphonology3lib5Phone("h", "h", wi, -1));
              } else {
                _M0MPC15array5Array4pushGsE(out, new _M0TP39aaronshaf17greek_2dphonology3lib5Phone(`${_M0MPC15array5Array2atGsE(_M0FP39aaronshaf17greek_2dphonology3lib12phone__names, id)}${gem ? "ː" : ""}`, tag, wi, ui));
              }
              _tmp$4 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (isub) {
            _M0MPC15array5Array4pushGsE(out, new _M0TP39aaronshaf17greek_2dphonology3lib5Phone("i", tag, wi, ui));
          }
          break _L;
        }
        _tmp$3 = ui + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return out;
  } else {
    return out;
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib10g2p__index(text, s) {
  const out = [];
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib9split__ws(text);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const wi = _tmp$2;
    if (wi < _bind$11) {
      const w = _bind$10[wi];
      const p = _M0FP39aaronshaf17greek_2dphonology3lib12word__phones(_M0FP39aaronshaf17greek_2dphonology3lib9lex__form(w), s, wi);
      if (p.length > 0) {
        if (out.length > 0) {
          _M0MPC15array5Array4pushGsE(out, _M0FP39aaronshaf17greek_2dphonology3lib10g2p__indexN6recordS4639);
        }
        const _bind$12 = p.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$12) {
            const x = p[_];
            _M0MPC15array5Array4pushGsE(out, x);
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp$2 = wi + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP39aaronshaf17greek_2dphonology3lib8is__diag(tag) {
  switch (tag) {
    case "η": {
      return true;
    }
    case "υ": {
      return true;
    }
    case "β": {
      return true;
    }
    case "γ": {
      return true;
    }
    case "δ": {
      return true;
    }
    case "φ": {
      return true;
    }
    case "θ": {
      return true;
    }
    case "χ": {
      return true;
    }
    case "αι": {
      return true;
    }
    case "ει": {
      return true;
    }
    case "οι": {
      return true;
    }
    case "ου": {
      return true;
    }
    case "υι": {
      return true;
    }
    case "ω": {
      return true;
    }
    case "ζ": {
      return true;
    }
    case "h": {
      return true;
    }
    case "αυ": {
      return true;
    }
    case "ευ": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib8p__heard(tag, pred, heard) {
  const p0 = heard === pred ? 0.8 : 0.00666666666666666536;
  const _bind$10 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib16ct__preds__total, pred);
  let pb;
  if (_bind$10 === undefined) {
    pb = p0;
  } else {
    const _Some = _bind$10;
    const _n = _Some;
    pb = (_M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9ct__preds, `${pred}\t${heard}`), 0) + 0 + 4 * p0) / (_n + 0 + 4);
  }
  const k = `${tag}\t${pred}`;
  const _bind$11 = _M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib16ct__units__total, k);
  if (_bind$11 === undefined) {
    return pb;
  } else {
    const _Some = _bind$11;
    const _n = _Some;
    return (_M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(_M0FP39aaronshaf17greek_2dphonology3lib9ct__units, `${k}\t${heard}`), 0) + 0 + 2 * pb) / (_n + 0 + 2);
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib12detect__text(ipa_s, text) {
  const obs = [];
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib8tokenize(ipa_s);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$11) {
      const p = _bind$10[_];
      const _p$3 = "|";
      if (!(p === _p$3)) {
        _M0MPC15array5Array4pushGsE(obs, _M0FP39aaronshaf17greek_2dphonology3lib4fold(p));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ns = _M0FP39aaronshaf17greek_2dphonology3lib7schemes.length;
  const exp = [];
  let _tmp$3 = 0;
  while (true) {
    const s = _tmp$3;
    if (s < ns) {
      const _p$3 = _M0FP39aaronshaf17greek_2dphonology3lib10g2p__index(text, s);
      const _p$4 = [];
      const _p$5 = _p$3.length;
      let _tmp$4 = 0;
      while (true) {
        const _p$6 = _tmp$4;
        if (_p$6 < _p$5) {
          const _p$7 = _p$3[_p$6];
          const _p$8 = _p$7.p;
          const _p$9 = "|";
          if (!(_p$8 === _p$9)) {
            _M0MPC15array5Array4pushGsE(_p$4, _p$7);
          }
          _tmp$4 = _p$6 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPB5ArrayGRP39aaronshaf17greek_2dphonology3lib5PhoneEE(exp, _p$4);
      _tmp$3 = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const segs = [];
  const costs = [];
  let _tmp$4 = 0;
  while (true) {
    const s = _tmp$4;
    if (s < ns) {
      const _p$3 = _M0MPC15array5Array2atGRPB5ArrayGsEE(exp, s);
      const _p$4 = new Array(_p$3.length);
      const _p$5 = _p$3.length;
      let _tmp$5 = 0;
      while (true) {
        const _p$6 = _tmp$5;
        if (_p$6 < _p$5) {
          const _p$7 = _p$3[_p$6];
          _p$4[_p$6] = _M0FP39aaronshaf17greek_2dphonology3lib4fold(_p$7.p);
          _tmp$5 = _p$6 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib5align(obs, _p$4);
      const _path = _bind$12._0;
      const _cost = _bind$12._1;
      const _bind$13 = [];
      const seg = _M0MPB3Map3MapGiRPB5ArrayGsEE(new _M0TPB9ArrayViewGUiRPB5ArrayGsEEE(_bind$13, 0, 0), undefined);
      const _bind$14 = _path.length;
      let _tmp$6 = 0;
      while (true) {
        const _ = _tmp$6;
        if (_ < _bind$14) {
          const pr = _path[_];
          const _io = pr._0;
          const _je = pr._1;
          if (_io >= 0 && _je >= 0) {
            const _bind$15 = _M0MPB3Map3getGiRPB5ArrayGsEE(seg, _je);
            if (_bind$15.$tag === 1) {
              const _Some = _bind$15;
              const _a = _Some._0;
              _M0MPC15array5Array4pushGsE(_a, _M0MPC15array5Array2atGsE(obs, _io));
            } else {
              _M0MPB3Map3setGiRPB5ArrayGsEE(seg, _je, [_M0MPC15array5Array2atGsE(obs, _io)]);
            }
          }
          _tmp$6 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(segs, seg);
      _M0MPC15array5Array4pushGdE(costs, _cost);
      _tmp$4 = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let rf = 0;
  let _tmp$5 = 0;
  while (true) {
    const s = _tmp$5;
    if (s < ns) {
      if (_M0MPC15array5Array2atGdE(costs, s) < _M0MPC15array5Array2atGdE(costs, rf)) {
        rf = s;
      }
      _tmp$5 = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const us = [];
  const all = [];
  let _tmp$6 = 0;
  while (true) {
    const s = _tmp$6;
    if (s < ns) {
      const _bind$12 = [];
      const d = _M0MPB3Map3MapGiUsRPB5ArrayGiEEE(new _M0TPB9ArrayViewGUiUsRPB5ArrayGiEEEE(_bind$12, 0, 0), undefined);
      const _bind$13 = _M0MPC15array5Array2atGRPB5ArrayGsEE(exp, s);
      const _bind$14 = _bind$13.length;
      let _tmp$7 = 0;
      while (true) {
        const k = _tmp$7;
        if (k < _bind$14) {
          const x = _bind$13[k];
          const _p$3 = x.tag;
          const _p$4 = "";
          if (!(_p$3 === _p$4)) {
            const _p$5 = x.w;
            const _p$6 = x.u;
            const key = (Math.imul(_p$5, 100000) | 0) + (_p$6 + 1 | 0) | 0;
            const _bind$15 = _M0MPB3Map3getGiUsRPB5ArrayGiEEE(d, key);
            if (_bind$15 === undefined) {
              _M0MPB3Map3setGiUsRPB5ArrayGiEEE(d, key, { _0: x.tag, _1: [k] });
              if (!_M0MPC15array5Array8containsGiE(all, key)) {
                _M0MPC15array5Array4pushGiE(all, key);
              }
            } else {
              const _Some = _bind$15;
              const _v = _Some;
              _M0MPC15array5Array4pushGiE(_v._1, k);
            }
          }
          _tmp$7 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(us, d);
      _tmp$6 = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4sortGiE(all);
  let tags;
  if (ns <= 0) {
    tags = [];
  } else {
    const _p$3 = new Array(ns);
    let _tmp$7 = 0;
    while (true) {
      const _p$4 = _tmp$7;
      if (_p$4 < ns) {
        _p$3[_p$4] = [];
        _tmp$7 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    tags = _p$3;
  }
  let hits;
  if (ns <= 0) {
    hits = [];
  } else {
    const _p$3 = new Array(ns);
    let _tmp$7 = 0;
    while (true) {
      const _p$4 = _tmp$7;
      if (_p$4 < ns) {
        _p$3[_p$4] = [];
        _tmp$7 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    hits = _p$3;
  }
  let tots;
  if (ns <= 0) {
    tots = [];
  } else {
    const _p$3 = new Array(ns);
    let _tmp$7 = 0;
    while (true) {
      const _p$4 = _tmp$7;
      if (_p$4 < ns) {
        _p$3[_p$4] = [];
        _tmp$7 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    tots = _p$3;
  }
  const ll = _M0MPC15array5Array4makeGdE(ns, 0);
  const _bind$12 = all.length;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$12) {
      const key = all[_];
      _L: {
        let tag = "";
        let _tmp$8 = 0;
        while (true) {
          const s = _tmp$8;
          if (s < ns) {
            if (tag === "") {
              const _bind$13 = _M0MPB3Map3getGiUsRPB5ArrayGiEEE(_M0MPC15array5Array2atGsE(us, s), key);
              if (_bind$13 === undefined) {
              } else {
                const _Some = _bind$13;
                const _v = _Some;
                tag = _v._0;
              }
            }
            _tmp$8 = s + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (!_M0FP39aaronshaf17greek_2dphonology3lib8is__diag(tag)) {
          break _L;
        }
        const hb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
        const _bind$13 = _M0MPB3Map3getGiUsRPB5ArrayGiEEE(_M0MPC15array5Array2atGsE(us, rf), key);
        if (_bind$13 === undefined) {
        } else {
          const _Some = _bind$13;
          const _v = _Some;
          const _bind$14 = _v._1;
          const _bind$15 = _bind$14.length;
          let _tmp$9 = 0;
          while (true) {
            const _$2 = _tmp$9;
            if (_$2 < _bind$15) {
              const k = _bind$14[_$2];
              const _bind$16 = _M0MPB3Map3getGiRPB5ArrayGsEE(_M0MPC15array5Array2atGsE(segs, rf), k);
              if (_bind$16.$tag === 1) {
                const _Some$2 = _bind$16;
                const _a = _Some$2._0;
                const _bind$17 = _a.length;
                let _tmp$10 = 0;
                while (true) {
                  const _$3 = _tmp$10;
                  if (_$3 < _bind$17) {
                    const p = _a[_$3];
                    _M0IPB13StringBuilderPB6Logger13write__string(hb, p);
                    _tmp$10 = _$3 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
              }
              _tmp$9 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const heard0 = hb.val;
        const heard = heard0 === "" ? "∅" : heard0;
        const preds = [];
        let _tmp$9 = 0;
        while (true) {
          const s = _tmp$9;
          if (s < ns) {
            const _bind$14 = _M0MPB3Map3getGiUsRPB5ArrayGiEEE(_M0MPC15array5Array2atGsE(us, s), key);
            if (_bind$14 === undefined) {
              _M0MPC15array5Array4pushGsE(preds, "∅");
            } else {
              const _Some = _bind$14;
              const _v = _Some;
              const pb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
              const _bind$15 = _v._1;
              const _bind$16 = _bind$15.length;
              let _tmp$10 = 0;
              while (true) {
                const _$2 = _tmp$10;
                if (_$2 < _bind$16) {
                  const k = _bind$15[_$2];
                  _M0IPB13StringBuilderPB6Logger13write__string(pb, _M0FP39aaronshaf17greek_2dphonology3lib4fold(_M0MPC15array5Array2atGsE(_M0MPC15array5Array2atGRPB5ArrayGsEE(exp, s), k).p));
                  _tmp$10 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGsE(preds, pb.val);
            }
            _tmp$9 = s + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let same = true;
        const _bind$14 = preds.length;
        let _tmp$10 = 0;
        while (true) {
          const _$2 = _tmp$10;
          if (_$2 < _bind$14) {
            const p = preds[_$2];
            const _p$3 = _M0MPC15array5Array2atGsE(preds, 0);
            if (!(p === _p$3)) {
              same = false;
            }
            _tmp$10 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (same) {
          break _L;
        }
        let _tmp$11 = 0;
        while (true) {
          const s = _tmp$11;
          if (s < ns) {
            let ok;
            if (heard === _M0MPC15array5Array2atGsE(preds, s)) {
              ok = true;
            } else {
              let _tmp$12;
              if (tag === "φ" || (tag === "θ" || tag === "χ")) {
                let _tmp$13;
                const _p$3 = _M0MPC15array5Array2atGsE(preds, s);
                if (_p$3 === "p" || (_p$3 === "t" || _p$3 === "k")) {
                  _tmp$13 = heard === "p" || (heard === "t" || heard === "k");
                } else {
                  _tmp$13 = false;
                }
                _tmp$12 = _tmp$13;
              } else {
                _tmp$12 = false;
              }
              ok = _tmp$12;
            }
            let idx = -1;
            const _bind$15 = _M0MPC15array5Array2atGRPB5ArrayGsEE(tags, s);
            const _bind$16 = _bind$15.length;
            let _tmp$12 = 0;
            while (true) {
              const i = _tmp$12;
              if (i < _bind$16) {
                const t = _bind$15[i];
                if (t === tag) {
                  idx = i;
                }
                _tmp$12 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (idx < 0) {
              _M0MPC15array5Array4pushGsE(_M0MPC15array5Array2atGRPB5ArrayGsEE(tags, s), tag);
              _M0MPC15array5Array4pushGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(hits, s), 0);
              _M0MPC15array5Array4pushGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(tots, s), 0);
              idx = _M0MPC15array5Array2atGRPB5ArrayGsEE(tags, s).length - 1 | 0;
            }
            const _tmp$13 = _M0MPC15array5Array2atGRPB5ArrayGsEE(hits, s);
            const _tmp$14 = idx;
            const _p$3 = _M0MPC15array5Array2atGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(hits, s), idx);
            _M0MPC15array5Array2atGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(tots, s), idx);
            _M0MPC15array5Array3setGiE(_tmp$13, _tmp$14, ok ? _p$3 + 1 | 0 : _p$3);
            const _array_1 = _M0MPC15array5Array2atGRPB5ArrayGsEE(tots, s);
            const _index_2 = idx;
            _M0MPC15array5Array3setGiE(_array_1, _index_2, _M0MPC15array5Array2atGiE(_array_1, _index_2) + 1 | 0);
            _M0MPC15array5Array3setGdE(ll, s, _M0MPC15array5Array2atGdE(ll, s) + _M0FPC14math2ln(_M0FP39aaronshaf17greek_2dphonology3lib8p__heard(tag, _M0MPC15array5Array2atGsE(preds, s), heard)));
            _tmp$11 = s + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$8 = 0;
  while (true) {
    const s = _tmp$8;
    if (s < ns) {
      const len = _M0MPC15array5Array2atGRPB5ArrayGsEE(exp, s).length > 1 ? _M0MPC15array5Array2atGRPB5ArrayGsEE(exp, s).length : 1;
      _M0MPC15array5Array3setGdE(ll, s, _M0MPC15array5Array2atGdE(ll, s) - 1 * _M0MPC15array5Array2atGdE(costs, s) / (len + 0));
      _tmp$8 = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP39aaronshaf17greek_2dphonology3lib9Detection("aligned", _M0FP39aaronshaf17greek_2dphonology3lib7softmax(ll, 1), ll, tags, hits, tots, obs.length);
}
function _M0FP39aaronshaf17greek_2dphonology3lib14detect_2einner(ipa_s, greek_text) {
  return _M0FP39aaronshaf17greek_2dphonology3lib9split__ws(greek_text).length > 0 ? _M0FP39aaronshaf17greek_2dphonology3lib12detect__text(ipa_s, greek_text) : _M0FP39aaronshaf17greek_2dphonology3lib12detect__free(ipa_s);
}
function _M0FP39aaronshaf17greek_2dphonology3lib13scheme__index(name) {
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib7schemes.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const s = _M0FP39aaronshaf17greek_2dphonology3lib7schemes[i];
      if (s === name) {
        return i;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0FP39aaronshaf17greek_2dphonology3lib3ipa(text, scheme) {
  const s = _M0FP39aaronshaf17greek_2dphonology3lib13scheme__index(scheme);
  if (s < 0) {
    return "";
  }
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib10g2p__index(text, s);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$11) {
      const x = _bind$10[i];
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 32);
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, x.p);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib15syllabify__json(word) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib9syllabify(word);
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$11) {
      const s = _bind$10[i];
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
      const _bind$12 = s.length;
      let _tmp$3 = 0;
      while (true) {
        const j = _tmp$3;
        if (j < _bind$12) {
          const u = s[j];
          if (j > 0) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
          }
          _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP39aaronshaf17greek_2dphonology3lib4jstr(u));
          _tmp$3 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib10accent__ok(word) {
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib6accent(word);
  if (_bind$10 === undefined) {
    return -1;
  } else {
    const _Some = _bind$10;
    const _x = _Some;
    const _pos = _x._0;
    const _kind = _x._1;
    const sm = _M0FP39aaronshaf17greek_2dphonology3lib10syl__marks(word);
    const n = sm.length;
    const nl = _M0FP39aaronshaf17greek_2dphonology3lib13nucleus__long(_M0MPC15array5Array2atGsE(sm, n - _pos | 0)._1, false);
    const ul = _M0FP39aaronshaf17greek_2dphonology3lib13nucleus__long(_M0MPC15array5Array2atGsE(sm, n - 1 | 0)._1, _M0FP39aaronshaf17greek_2dphonology3lib15ends__in__vowel(word));
    return _M0FP39aaronshaf17greek_2dphonology6kernel7law__ok(n, _pos, _kind === "circumflex", nl !== 0, ul === 1);
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib8opt__acc(a) {
  if (a === undefined) {
    return "null";
  } else {
    const _Some = a;
    const _x = _Some;
    const _p$3 = _x._0;
    const _k = _x._1;
    return `[${_M0MPC13int3Int18to__string_2einner(_p$3, 10)},${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(_k)}]`;
  }
}
function _M0FP39aaronshaf17greek_2dphonology3lib10word__json(word) {
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3lib10accent__ok(word);
  let ok;
  if (_bind$10 === -1) {
    ok = "null";
  } else {
    const _Some = _bind$10;
    const _x = _Some;
    if (_x === true) {
      ok = "true";
    } else {
      ok = "false";
    }
  }
  return `{\"syllables\":${_M0FP39aaronshaf17greek_2dphonology3lib15syllabify__json(word)},\"accent\":${_M0FP39aaronshaf17greek_2dphonology3lib8opt__acc(_M0FP39aaronshaf17greek_2dphonology3lib6accent(word))},\"accent_ok\":${ok},\"recessive\":${_M0FP39aaronshaf17greek_2dphonology3lib8opt__acc(_M0FP39aaronshaf17greek_2dphonology3lib17recessive__accent(word))}}`;
}
function _M0FP39aaronshaf17greek_2dphonology3lib4jnum(d) {
  return String(d);
}
function _M0MP39aaronshaf17greek_2dphonology3lib9Detection16to__json__string(self) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, `{\"mode\":${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(self.mode)}`);
  const _bind$10 = ["probs", "loglik"];
  const _bind$11 = _bind$10.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$11) {
      const k = _bind$10[_];
      const v = k === "probs" ? self.probs : self.loglik;
      _M0IPB13StringBuilderPB6Logger13write__string(sb, `,\"${k}\":{`);
      const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib7schemes.length;
      let _tmp$3 = 0;
      while (true) {
        const i = _tmp$3;
        if (i < _bind$12) {
          const s = _M0FP39aaronshaf17greek_2dphonology3lib7schemes[i];
          if (i > 0) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
          }
          _M0IPB13StringBuilderPB6Logger13write__string(sb, `${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(s)}:${_M0FP39aaronshaf17greek_2dphonology3lib4jnum(_M0MPC15array5Array2atGdE(v, i))}`);
          _tmp$3 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"evidence\":{");
  const _bind$12 = _M0FP39aaronshaf17greek_2dphonology3lib7schemes.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$12) {
      const s = _M0FP39aaronshaf17greek_2dphonology3lib7schemes[i];
      if (self.evidence_tags.length === 0) {
        break;
      }
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, `${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(s)}:{`);
      const _bind$13 = _M0MPC15array5Array2atGRPB5ArrayGsEE(self.evidence_tags, i);
      const _bind$14 = _bind$13.length;
      let _tmp$4 = 0;
      while (true) {
        const j = _tmp$4;
        if (j < _bind$14) {
          const t = _bind$13[j];
          if (j > 0) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
          }
          _M0IPB13StringBuilderPB6Logger13write__string(sb, `${_M0FP39aaronshaf17greek_2dphonology3lib4jstr(t)}:[${_M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(self.evidence_hits, i), j), 10)},${_M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(self.evidence_total, i), j), 10)}]`);
          _tmp$4 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, `},\"phones\":${_M0MPC13int3Int18to__string_2einner(self.phones, 10)}}`);
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3lib10call__json(name, arg, arg2) {
  switch (name) {
    case "amalgamate": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib10amalgamate(arg));
    }
    case "contract": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib8contract(arg));
    }
    case "remove_acutes": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib14remove__acutes(arg));
    }
    case "remove_graves": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib14remove__graves(arg));
    }
    case "remove_circumflexes": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib20remove__circumflexes(arg));
    }
    case "contains_circumflex": {
      const _p$3 = _M0FP39aaronshaf17greek_2dphonology3lib20contains__circumflex(arg);
      return _p$3 ? "true" : "false";
    }
    case "add_acute": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib10add__acute(arg));
    }
    case "add_circumflex": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib15add__circumflex(arg));
    }
    case "without_accents": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib16without__accents(arg));
    }
    case "accentuate_last_vowel": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib23accentuate__last__vowel(arg));
    }
    case "is_long_syllable": {
      const _p$4 = _M0FP39aaronshaf17greek_2dphonology3lib18is__long__syllable(arg);
      return _p$4 ? "true" : "false";
    }
    case "remove_punctuation": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib19remove__punctuation(arg));
    }
    case "remove_numbers": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib15remove__numbers(arg));
    }
    case "extract_consonant_clusters": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jarr(_M0FP39aaronshaf17greek_2dphonology3lib28extract__consonant__clusters(arg));
    }
    case "accentuate_verb": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib16accentuate__verb(arg));
    }
    case "accentuate_phrase": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib18accentuate__phrase(arg));
    }
    case "lexical_phrase": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib15lexical__phrase(arg));
    }
    case "check_phrase_accents": {
      return _M0FP39aaronshaf17greek_2dphonology3lib22check__phrase__accents(arg);
    }
    case "is_enclitic": {
      const _p$5 = _M0FP39aaronshaf17greek_2dphonology3lib12is__enclitic(arg);
      return _p$5 ? "true" : "false";
    }
    case "is_proclitic": {
      const _p$6 = _M0FP39aaronshaf17greek_2dphonology3lib13is__proclitic(arg);
      return _p$6 ? "true" : "false";
    }
    case "verb_stem": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib10verb__stem(arg));
    }
    case "augmentize": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(`ἐ${arg}`);
    }
    case "conjugate": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jarr(_M0FP39aaronshaf17greek_2dphonology3lib9conjugate(arg, arg2));
    }
    case "syllabify": {
      return _M0FP39aaronshaf17greek_2dphonology3lib15syllabify__json(arg);
    }
    case "word": {
      return _M0FP39aaronshaf17greek_2dphonology3lib10word__json(arg);
    }
    case "ipa": {
      return _M0FP39aaronshaf17greek_2dphonology3lib4jstr(_M0FP39aaronshaf17greek_2dphonology3lib3ipa(arg, arg2));
    }
    case "lookup": {
      return _M0FP39aaronshaf17greek_2dphonology3lib12lookup__json(arg);
    }
    case "detect": {
      return _M0MP39aaronshaf17greek_2dphonology3lib9Detection16to__json__string(_M0FP39aaronshaf17greek_2dphonology3lib14detect_2einner(arg, arg2));
    }
    default: {
      return "null";
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3api9in__clear() {
  _M0MPC15array5Array5clearGiE(_M0FP39aaronshaf17greek_2dphonology3api5inbuf);
}
function _M0FP39aaronshaf17greek_2dphonology3api8in__push(b) {
  _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api5inbuf, b);
}
function _M0FP39aaronshaf17greek_2dphonology3api8out__len() {
  return _M0FP39aaronshaf17greek_2dphonology3api6outbuf.length;
}
function _M0FP39aaronshaf17greek_2dphonology3api8out__get(i) {
  return _M0MPC15array5Array2atGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, i);
}
function _M0FP39aaronshaf17greek_2dphonology3api12utf8__decode(bs, lo, hi) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let i = lo;
  while (true) {
    if (i < hi) {
      const b = _M0MPC15array5Array2atGiE(bs, i);
      let cp;
      let n;
      _L: {
        if (b < 128) {
          cp = b;
          n = 1;
          break _L;
        } else {
          if (b < 224) {
            cp = (b & 31) << 6 | _M0MPC15array5Array2atGiE(bs, i + 1 | 0) & 63;
            n = 2;
            break _L;
          } else {
            if (b < 240) {
              cp = (b & 15) << 12 | (_M0MPC15array5Array2atGiE(bs, i + 1 | 0) & 63) << 6 | _M0MPC15array5Array2atGiE(bs, i + 2 | 0) & 63;
              n = 3;
              break _L;
            } else {
              cp = (b & 7) << 18 | (_M0MPC15array5Array2atGiE(bs, i + 1 | 0) & 63) << 12 | (_M0MPC15array5Array2atGiE(bs, i + 2 | 0) & 63) << 6 | _M0MPC15array5Array2atGiE(bs, i + 3 | 0) & 63;
              n = 4;
              break _L;
            }
          }
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, cp);
      i = i + n | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP39aaronshaf17greek_2dphonology3api12utf8__encode(s) {
  _M0MPC15array5Array5clearGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf);
  const _bind$10 = s.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$10) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$11 = s.charCodeAt(_string_index);
        if (_bind$11 >= 55296 && _bind$11 <= 56319 && (_string_index + 1 | 0) < _bind$10) {
          const _bind$12 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$12 >= 56320 && _bind$12 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p$3 = (((Math.imul(_bind$11 - 55296 | 0, 1024) | 0) + _bind$12 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p$3 = _bind$11;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p$3;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p$3 = _bind$11;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p$3;
          break _L;
        }
      }
      const cp = _decoded_char;
      if (cp < 128) {
        _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, cp);
      } else {
        if (cp < 2048) {
          _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 192 | cp >> 6);
          _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 128 | cp & 63);
        } else {
          if (cp < 65536) {
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 224 | cp >> 12);
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 128 | cp >> 6 & 63);
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 128 | cp & 63);
          } else {
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 240 | cp >> 18);
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 128 | cp >> 12 & 63);
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 128 | cp >> 6 & 63);
            _M0MPC15array5Array4pushGiE(_M0FP39aaronshaf17greek_2dphonology3api6outbuf, 128 | cp & 63);
          }
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3api8run__str(cmd, a0, a1) {
  switch (cmd) {
    case 0: {
      return _M0MP39aaronshaf17greek_2dphonology3lib9Detection16to__json__string(_M0FP39aaronshaf17greek_2dphonology3lib14detect_2einner(a0, a1));
    }
    case 1: {
      return _M0FP39aaronshaf17greek_2dphonology3lib3ipa(a0, a1);
    }
    case 4: {
      return _M0FP39aaronshaf17greek_2dphonology3lib12lookup__json(a0);
    }
    case 5: {
      const parts = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(a1, _M0FP39aaronshaf17greek_2dphonology3api8run__strN6recordS4881), (v) => _M0MPC16string10StringView9to__owned(v)));
      return _M0FP39aaronshaf17greek_2dphonology3lib10call__json(a0, _M0MPC15array5Array2atGsE(parts, 0), parts.length > 1 ? _M0MPC15array5Array2atGsE(parts, 1) : "");
    }
    default: {
      return _M0FP39aaronshaf17greek_2dphonology3lib10word__json(a0);
    }
  }
}
function _M0FP39aaronshaf17greek_2dphonology3api3run(cmd) {
  if (cmd === 3) {
    _M0FP39aaronshaf17greek_2dphonology3api12utf8__encode(_M0MPC13int3Int18to__string_2einner(_M0FP39aaronshaf17greek_2dphonology3lib13load__lexicon(_M0FP39aaronshaf17greek_2dphonology3api5inbuf), 10));
    return _M0FP39aaronshaf17greek_2dphonology3api6outbuf.length;
  }
  let sep = _M0FP39aaronshaf17greek_2dphonology3api5inbuf.length;
  const _bind$10 = _M0FP39aaronshaf17greek_2dphonology3api5inbuf.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$10) {
      const b = _M0FP39aaronshaf17greek_2dphonology3api5inbuf[i];
      if (b === 0) {
        sep = i;
        break;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const a0 = _M0FP39aaronshaf17greek_2dphonology3api12utf8__decode(_M0FP39aaronshaf17greek_2dphonology3api5inbuf, 0, sep);
  const a1 = sep < _M0FP39aaronshaf17greek_2dphonology3api5inbuf.length ? _M0FP39aaronshaf17greek_2dphonology3api12utf8__decode(_M0FP39aaronshaf17greek_2dphonology3api5inbuf, sep + 1 | 0, _M0FP39aaronshaf17greek_2dphonology3api5inbuf.length) : "";
  _M0FP39aaronshaf17greek_2dphonology3api12utf8__encode(_M0FP39aaronshaf17greek_2dphonology3api8run__str(cmd, a0, a1));
  return _M0FP39aaronshaf17greek_2dphonology3api6outbuf.length;
}
function _M0FP39aaronshaf17greek_2dphonology3api12detect__json(ipa, greek_text) {
  return _M0FP39aaronshaf17greek_2dphonology3api8run__str(0, ipa, greek_text);
}
function _M0FP39aaronshaf17greek_2dphonology3api3ipa(text, scheme) {
  return _M0FP39aaronshaf17greek_2dphonology3api8run__str(1, text, scheme);
}
function _M0FP39aaronshaf17greek_2dphonology3api10word__json(word) {
  return _M0FP39aaronshaf17greek_2dphonology3api8run__str(2, word, "");
}
function _M0FP39aaronshaf17greek_2dphonology3api12lookup__json(word) {
  return _M0FP39aaronshaf17greek_2dphonology3api8run__str(4, word, "");
}
function _M0FP39aaronshaf17greek_2dphonology3api4call(name, arg, arg2) {
  return _M0FP39aaronshaf17greek_2dphonology3lib10call__json(name, arg, arg2);
}
exports.in_clear = _M0FP39aaronshaf17greek_2dphonology3api9in__clear;
exports.in_push = _M0FP39aaronshaf17greek_2dphonology3api8in__push;
exports.out_len = _M0FP39aaronshaf17greek_2dphonology3api8out__len;
exports.out_get = _M0FP39aaronshaf17greek_2dphonology3api8out__get;
exports.run_str = _M0FP39aaronshaf17greek_2dphonology3api8run__str;
exports.run = _M0FP39aaronshaf17greek_2dphonology3api3run;
exports.detect_json = _M0FP39aaronshaf17greek_2dphonology3api12detect__json;
exports.ipa = _M0FP39aaronshaf17greek_2dphonology3api3ipa;
exports.word_json = _M0FP39aaronshaf17greek_2dphonology3api10word__json;
exports.lookup_json = _M0FP39aaronshaf17greek_2dphonology3api12lookup__json;
exports.call = _M0FP39aaronshaf17greek_2dphonology3api4call;
