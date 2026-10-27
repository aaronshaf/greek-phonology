export type Scheme = "modern" | "koine" | "attic" | "erasmian";

export type AccentKind = "acute" | "grave" | "circumflex";

/** Position from the end (1 = ultima) and the accent kind. */
export type AccentMark = [number, AccentKind];

export interface WordInfo {
  syllables: string[][];
  accent: AccentMark | null;
  accent_ok: boolean | null;
  recessive: AccentMark | null;
}

export interface LookupResult {
  form: string;
  match: "exact" | "fold" | "bare";
  nt: boolean;
  lxx: boolean;
  freq_band: number;
}

export interface Detection {
  mode: string;
  probs: Record<Scheme, number>;
  loglik: Record<Scheme, number>;
  evidence: Record<Scheme, Record<string, [number, number]>>;
  phones: number;
}

export interface PhraseAccentCheck {
  word: string;
  expected: string;
  ok: boolean;
}

export type LearnerGoal = "strict" | "gracious" | "lenient";

export type DistanceTier = "accurate" | "tolerated" | "not-a-match";

export interface PhoneLabel {
  say: string;
  ex: string;
  kind: string;
}

export interface PhoneDistance {
  d: number;
  sim: number;
  tier: DistanceTier;
  note: string;
  advice: string;
  said: PhoneLabel;
  target: PhoneLabel;
}

export interface CreditHit {
  phone: string;
  p: number;
  sim: number;
  d: number;
  tier: DistanceTier;
}

export interface PhoneCredit {
  exact: number;
  near: number;
  combined: number;
  best: CreditHit | null;
}

/** `phone_credit` plus the learner note for the best alternate. */
export interface HearingCredit extends PhoneCredit {
  note: string;
}

export type CreditLevel = "none" | "close tint" | "light" | "medium" | "clear" | "deepest";

/** Percent cutoffs. Omitted fields keep the default constants. */
export interface CreditScale {
  close?: number;
  light?: number;
  medium?: number;
  clear?: number;
  deepest?: number;
}

export type PosteriorItem =
  | { phone: string; p?: number; probability?: number; weight?: number }
  | [string, number];

export type Posterior = string | PosteriorItem[];

export interface G2pAlt {
  heard: string[];
  tier: string;
  d: number;
  note: string;
  src: string;
}

export interface G2pUnit {
  t: string;
  k: string;
  ph: string[];
  from: number;
  to: number;
  restored: boolean;
  asp?: 1;
  ctx?: string;
  alts?: G2pAlt[];
}

export interface G2pWord {
  text: string;
  form: string;
  form_used: string;
  phones: string[];
  units: G2pUnit[];
}

export interface G2pResult {
  v: 1;
  scheme: string;
  lib: string;
  words: G2pWord[];
}

export type StringCallName =
  | "amalgamate"
  | "contract"
  | "remove_acutes"
  | "remove_graves"
  | "remove_circumflexes"
  | "add_acute"
  | "add_circumflex"
  | "without_accents"
  | "accentuate_last_vowel"
  | "remove_punctuation"
  | "remove_numbers"
  | "accentuate_verb"
  | "accentuate_phrase"
  | "lexical_phrase"
  | "verb_stem"
  | "augmentize"
  | "ipa";

export type BoolCallName =
  | "contains_circumflex"
  | "is_long_syllable"
  | "is_enclitic"
  | "is_proclitic";

export interface AlignToken {
  id: number;
  p: string;
  t0: number;
  t1: number;
  pk: number;
  fr: number[];
}

export interface AlignPair {
  h: number;
  j: number;
  att: number;
  shared?: boolean;
}

export interface AlignResult {
  pairs: AlignPair[];
  k: number;
  cost: number;
  atts: number;
  heardN: number;
}

export interface AlignPhoneHit {
  target: string;
  score: number | null;
  optional?: boolean;
  heard?: string | null;
  h?: number;
  t0?: number;
  t1?: number;
  shared?: boolean;
}

export interface AlignWord {
  i: number;
  score: number;
  attempts: number;
  evidence: boolean;
  ph: AlignPhoneHit[] | null;
  lo: number;
  hi: number;
  t0: number | null;
  t1: number | null;
}

export interface AlignTake {
  words: AlignWord[];
  overall: number;
  cursorWord: number;
  lastPhone: number;
  attempts: number;
  tokens: AlignToken[];
  cost: number;
  align: AlignResult;
}

/** Returned when the spec stitches windows and does not pass a lane. */
export interface AlignMatrix {
  lp: number[];
  T: number;
  V: number;
  spf: number;
}

export type CallName =
  | StringCallName
  | BoolCallName
  | "extract_consonant_clusters"
  | "conjugate"
  | "syllabify"
  | "word"
  | "lookup"
  | "detect"
  | "check_phrase_accents"
  | "g2p_json"
  | "phone_distance"
  | "phone_credit"
  | "dist_table"
  | "hearing_credit"
  | "unit_hearing_credit"
  | "align_phones"
  | "credit_level"
  | "scheme_id";

export type CallResult =
  | string
  | boolean
  | string[]
  | string[][]
  | WordInfo
  | LookupResult
  | Detection
  | PhraseAccentCheck[]
  | G2pResult
  | PhoneDistance
  | PhoneCredit
  | HearingCredit
  | CreditLevel
  | AlignTake
  | AlignMatrix
  | null;

export function ipa(text: string, scheme: Scheme | string): string;
/** Units that tile `text`. `flags` is a comma list; `alts` and `ctx` are opt-in and default off. */
export function g2p(text: string, scheme: Scheme | string, flags?: string): G2pResult;
/** `goal` changes tier and sim only. Empty `goal` is gracious. */
export function phoneDistance(
  target: string,
  heard: string,
  scheme?: string,
  goal?: LearnerGoal | string,
): PhoneDistance;
/** `posterior` is `phone=weight` pairs separated by commas. */
export function phoneCredit(
  target: string,
  scheme?: string,
  goal?: LearnerGoal | string,
  posterior?: string,
): PhoneCredit;
/** Same numbers as `phoneCredit`, plus the best alternate note. Accepts the string form or a candidate list. */
export function hearingCredit(
  target: string,
  posterior: Posterior,
  scheme?: string,
  goal?: LearnerGoal | string,
): HearingCredit;
/** Align heard phones to target words. Accepts the JSON spec string or the same object. A spec with `windows` and no `lane` returns the stitched matrix. */
export function alignPhonesJson(spec: string | object): AlignTake | AlignMatrix;
/** Score a grapheme unit. `at` < 0 (the default) keeps the phone with the highest combined credit. */
export function unitHearingCredit(
  unit: { ph?: string[]; phones?: string[]; alts?: Array<{ heard: string[]; note?: string }> },
  posterior: Posterior,
  scheme?: string,
  goal?: LearnerGoal | string,
  at?: number,
): HearingCredit;
/** Default cutoffs in percent: 8, 30, 60, 85, 95. */
export const CREDIT_LEVEL_CLOSE: number;
export const CREDIT_LEVEL_LIGHT: number;
export const CREDIT_LEVEL_MEDIUM: number;
export const CREDIT_LEVEL_CLEAR: number;
export const CREDIT_LEVEL_DEEPEST: number;
/** Map a combined credit in [0, 1] to a display level. Pass `scale` to override any cutoff. */
export function creditLevel(combined: number, scale?: CreditScale): CreditLevel;
/** Short id for a page id (`koine`, `attic`, `erasmian`, `modern`) or a long id. Unknown is `""`. */
export function schemeId(name: string): Scheme | "";
export function distTable(scheme: Scheme | string): unknown;
export function detect(ipa: string, greekText?: string): Detection;
export function word(w: string): WordInfo;
export function lookup(w: string): LookupResult | null;
export function call(name: BoolCallName, arg?: string, arg2?: string): boolean;
export function call(name: "extract_consonant_clusters" | "conjugate", arg?: string, arg2?: string): string[];
export function call(name: "syllabify", arg?: string, arg2?: string): string[][];
export function call(name: "word", arg?: string, arg2?: string): WordInfo;
export function call(name: "lookup", arg?: string, arg2?: string): LookupResult | null;
export function call(name: "detect", arg?: string, arg2?: string): Detection;
export function call(name: "check_phrase_accents", arg?: string, arg2?: string): PhraseAccentCheck[];
export function call(name: "align_phones", arg?: string, arg2?: string): AlignTake | AlignMatrix;
export function call(name: StringCallName, arg?: string, arg2?: string): string;
export function call(name: string, arg?: string, arg2?: string): CallResult;
export function loadLexicon(bytes?: Uint8Array): void;
export const wasmPath: URL;

declare const _default: {
  ipa: typeof ipa;
  g2p: typeof g2p;
  phoneDistance: typeof phoneDistance;
  phoneCredit: typeof phoneCredit;
  hearingCredit: typeof hearingCredit;
  unitHearingCredit: typeof unitHearingCredit;
  alignPhonesJson: typeof alignPhonesJson;
  creditLevel: typeof creditLevel;
  CREDIT_LEVEL_CLOSE: number;
  CREDIT_LEVEL_LIGHT: number;
  CREDIT_LEVEL_MEDIUM: number;
  CREDIT_LEVEL_CLEAR: number;
  CREDIT_LEVEL_DEEPEST: number;
  schemeId: typeof schemeId;
  distTable: typeof distTable;
  detect: typeof detect;
  word: typeof word;
  lookup: typeof lookup;
  call: typeof call;
  loadLexicon: typeof loadLexicon;
  wasmPath: URL;
};
export default _default;
