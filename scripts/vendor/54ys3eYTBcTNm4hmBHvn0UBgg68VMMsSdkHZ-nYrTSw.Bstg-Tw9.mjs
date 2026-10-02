import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { dt as t, ht as n, j as r } from "./framer.CuDPj9y9.mjs";
import { a as i, t as a } from "./gCLhGCLuL.CJVpz9b-.mjs";
function o(e, t) {
  let n = e?.ggiEy6IJj,
    r = e?.WmumaPQKL,
    i = e?.OPtjflbvt;
  return {
    breakpoints: [
      { hash: `w9h9c3`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1xvlpi6`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1a8pzih`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{WmumaPQKL}}` : l(r)}`,
    elements: { Bt5JI1SVd: `content`, kJAyXJ6cM: `article`, wQWwQ5UNc: `visual` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-CdGFz`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{ggiEy6IJj}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `usCSYAzGe`, data: a, type: `Collection` },
      select: [
        { collection: `usCSYAzGe`, name: `ggiEy6IJj`, type: `Identifier` },
        { collection: `usCSYAzGe`, name: `WmumaPQKL`, type: `Identifier` },
        { collection: `usCSYAzGe`, name: `OPtjflbvt`, type: `Identifier` },
      ],
      where: t(e, `usCSYAzGe`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `usCSYAzGe`, data: a, type: `Collection` },
      select: [
        { collection: `usCSYAzGe`, name: `ggiEy6IJj`, type: `Identifier` },
        { collection: `usCSYAzGe`, name: `WmumaPQKL`, type: `Identifier` },
        { collection: `usCSYAzGe`, name: `OPtjflbvt`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `usCSYAzGe`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f,
  p = e(() => {
    (n(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = 1),
      (f = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
p();
export {
  f as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  d as metadataVersion,
  p as t,
};
//# sourceMappingURL=54ys3eYTBcTNm4hmBHvn0UBgg68VMMsSdkHZ-nYrTSw.Bstg-Tw9.mjs.map
