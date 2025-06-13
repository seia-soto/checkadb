import { transformPageToProgrammableScenario } from "./transforms.js";

export const scenarios = [
  transformPageToProgrammableScenario("selectors.html", {
    "###generic-target": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    "##.generic-target": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    "##[generic-target]": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    "##.generic-outer-target:has(span)": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    '##[generic-lazy-target="50ms"]': {
      "+immediate": false,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    '##[generic-adjunct-target="100ms"]': {
      "+immediate": false,
      "+50ms": false,
      "+100ms": true,
      "+200ms": true,
    },
    "example.com###target": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    "example.com##.target": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    "example.com##[target]": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    "example.com##.outer-target:has(span)": {
      "+immediate": true,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    'example.com##[lazy-target="50ms"]': {
      "+immediate": false,
      "+50ms": true,
      "+100ms": true,
      "+200ms": true,
    },
    'example.com##[adjunct-target="100ms"]': {
      "+immediate": false,
      "+50ms": false,
      "+100ms": true,
      "+200ms": true,
    },
  }),
  transformPageToProgrammableScenario("scripting.html", {
    "example.com##+js(aopr, encodeURIComponent)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(aopw, __chkfilt__custom)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(aeld, click)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(call-nothrow, atob)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(json-prune, __chkfilt__custom)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(set, chkfilt, true)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(nostif, , 0)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(nostif, , 50)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
    "example.com##+js(nosiif, , 50)": {
      "+head": true,
      "+immediate": true,
      "+readystatechange": true,
      "+domcontentloaded": true,
    },
  }),
];
