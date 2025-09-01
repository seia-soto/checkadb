export type StylingReport = {
  type: "styling";
  phase: "readystatechange" | "DOMContentLoaded" | "1000ms";
  results: Record<
    | "generic-selector-id"
    | "generic-selector-class"
    | "generic-selector-attribute"
    | "generic-selector-has"
    | "generic-selector-adjunct"
    | "selector-id"
    | "selector-class"
    | "selector-attribute"
    | "selector-has"
    | "selector-adjunct",
    boolean
  >;
};

export type ScriptingReport = {
  type: "styling";
  phase: "head" | "body" | "readystatechange" | "DOMContentLoaded" | "1000ms";
  results: Record<
    | "aopr"
    | "aopw"
    | "aeld"
    | "call-nothrow"
    | "json-prune"
    | "set"
    | "nostif0"
    | "nostif50"
    | "nosiif50",
    boolean
  >;
};

export type Report = StylingReport | ScriptingReport;

export const filters: [string, string][] = [
  // styling
  ["generic-selector-id", "###generic-target"],
  ["generic-selector-class", "##.generic-target"],
  ["generic-selector-attribute", "##[generic-target]"],
  ["generic-selector-has", "##.generic-outer-target:has(span)"],
  ["generic-selector-lazy", '##[generic-lazy-target="100ms"]'],
  ["generic-selector-adjunct", '##[generic-adjunct-target="100ms"]'],
  ["selector-id", "localhost###target"],
  ["selector-class", "localhost##.target"],
  ["selector-attribute", "localhost##[target]"],
  ["selector-has", "localhost##.outer-target:has(span)"],
  ["selector-lazy", 'localhost##[lazy-target="100ms"]'],
  ["selector-adjunct", 'localhost##[adjunct-target="100ms"]'],
  // scripting
  ["aopr", "localhost##+js(aopr, encodeURIComponent)"],
  ["aopw", "localhost##+js(aopw, __checkadb__custom)"],
  ["aeld", "localhost##+js(aeld, click)"],
  ["call-nothrow", "localhost##+js(call-nothrow, atob)"],
  ["json-prune", "localhost##+js(json-prune, __checkadb__custom)"],
  ["set", "localhost##+js(set, checkadb, true)"],
  ["nostif0", "localhost##+js(nostif, , 0)"],
  ["nostif50", "localhost##+js(nostif, , 50)"],
  ["nosiif50", "localhost##+js(nosiif, , 50)"],
];
