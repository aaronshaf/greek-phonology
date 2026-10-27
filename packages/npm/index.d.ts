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

export type CallName =
  | StringCallName
  | BoolCallName
  | "extract_consonant_clusters"
  | "conjugate"
  | "syllabify"
  | "word"
  | "lookup"
  | "detect"
  | "check_phrase_accents";

export type CallResult =
  | string
  | boolean
  | string[]
  | string[][]
  | WordInfo
  | LookupResult
  | Detection
  | PhraseAccentCheck[]
  | null;

export function ipa(text: string, scheme: Scheme | string): string;
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
export function call(name: StringCallName, arg?: string, arg2?: string): string;
export function call(name: string, arg?: string, arg2?: string): CallResult;
export function loadLexicon(bytes?: Uint8Array): void;
export const wasmPath: URL;

declare const _default: {
  ipa: typeof ipa;
  detect: typeof detect;
  word: typeof word;
  lookup: typeof lookup;
  call: typeof call;
  loadLexicon: typeof loadLexicon;
  wasmPath: URL;
};
export default _default;
