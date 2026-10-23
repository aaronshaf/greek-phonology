// IPA -> Kokoro-82M v1.0 token ids. Input is IPA only (no text, no phonemizer).
// Vocab: the model's tokenizer.json (shared by every voice, including if_sara).
// Approximations for symbols not in the vocab (everything in VOCAB is used as-is):
//   g (U+0067)            -> ɡ (U+0261)   the vocab has only script g
//   d͡z t͡s t͡ʃ d͡ʒ           -> ʣ ʦ ʧ ʤ      tie bar U+0361 is not in the vocab
//   other tie bars        -> dropped
//   ˑ (half-long)         -> dropped      ː (long) is in the vocab and kept
//   combining diacritics (U+0300-036F: accents, syllabic, etc.) and . -> dropped
//   spaces between phones -> dropped; word separator | -> one space token (a word break)
//   anything else not in the vocab -> dropped and returned in unk
// Kept as-is (in vocab): ʰ (so Koine θ = tʰ is t + ʰ), ɣ θ ð β ʝ ç χ x ʎ ɲ ŋ ɾ r ˈ ˌ ː
export const VOCAB = {"$":0,";":1,":":2,",":3,".":4,"!":5,"?":6,"—":9,"…":10,"\"":11,"(":12,")":13,"“":14,"”":15," ":16,"̃":17,"ʣ":18,"ʥ":19,"ʦ":20,"ʨ":21,"ᵝ":22,"ꭧ":23,"A":24,"I":25,"O":31,"Q":33,"S":35,"T":36,"W":39,"Y":41,"ᵊ":42,"a":43,"b":44,"c":45,"d":46,"e":47,"f":48,"h":50,"i":51,"j":52,"k":53,"l":54,"m":55,"n":56,"o":57,"p":58,"q":59,"r":60,"s":61,"t":62,"u":63,"v":64,"w":65,"x":66,"y":67,"z":68,"ɑ":69,"ɐ":70,"ɒ":71,"æ":72,"β":75,"ɔ":76,"ɕ":77,"ç":78,"ɖ":80,"ð":81,"ʤ":82,"ə":83,"ɚ":85,"ɛ":86,"ɜ":87,"ɟ":90,"ɡ":92,"ɥ":99,"ɨ":101,"ɪ":102,"ʝ":103,"ɯ":110,"ɰ":111,"ŋ":112,"ɳ":113,"ɲ":114,"ɴ":115,"ø":116,"ɸ":118,"θ":119,"œ":120,"ɹ":123,"ɾ":125,"ɻ":126,"ʁ":128,"ɽ":129,"ʂ":130,"ʃ":131,"ʈ":132,"ʧ":133,"ʊ":135,"ʋ":136,"ʌ":138,"ɣ":139,"ɤ":140,"χ":142,"ʎ":143,"ʒ":147,"ʔ":148,"ˈ":156,"ˌ":157,"ː":158,"ʰ":162,"ʲ":164,"↓":169,"→":171,"↗":172,"↘":173,"ᵻ":177};
export function toIds(ipa) {
  const s = String(ipa || "").normalize("NFD")
    .replace(/d\u0361z/g, "ʣ").replace(/t\u0361s/g, "ʦ").replace(/t\u0361ʃ/g, "ʧ").replace(/d\u0361ʒ/g, "ʤ")
    .replace(/g/g, "ɡ").replace(/[\u0300-\u036f\u02d1.]/g, "")
    .split("|").map((w) => w.replace(/\s+/g, "")).filter(Boolean).join(" ");
  const ids = [], unk = [];
  for (const ch of s) { if (ch in VOCAB) ids.push(VOCAB[ch]); else unk.push(ch); }
  return { ids, unk, ph: s };
}
