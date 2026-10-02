import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { dt as t, ht as n, j as r } from "./framer.CuDPj9y9.mjs";
import { i, t as a } from "./UmP8abwJL.pwQTd5X-.mjs";
function o(e, t) {
  let n = e?.a8ZAaoovg,
    r = e?.fhdsIcnWB,
    i = e?.MCZi_DjOF;
  return {
    breakpoints: [
      { hash: `1ex7wa3`, mediaQuery: `(min-width: 1200px)` },
      { hash: `19ttag1`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1l8qfcq`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{fhdsIcnWB}}` : l(r)}`,
    elements: { EtHQc2K8Q: `size`, fTgI5Dge1: `scroll` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-UVlhh`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{a8ZAaoovg}}` : l(n)} on the Framer Store`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `XGqHdMUqV`, data: a, type: `Collection` },
      select: [
        { collection: `XGqHdMUqV`, name: `a8ZAaoovg`, type: `Identifier` },
        { collection: `XGqHdMUqV`, name: `fhdsIcnWB`, type: `Identifier` },
        { collection: `XGqHdMUqV`, name: `MCZi_DjOF`, type: `Identifier` },
      ],
      where: t(e, `XGqHdMUqV`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `XGqHdMUqV`, data: a, type: `Collection` },
      select: [
        { collection: `XGqHdMUqV`, name: `a8ZAaoovg`, type: `Identifier` },
        { collection: `XGqHdMUqV`, name: `fhdsIcnWB`, type: `Identifier` },
        { collection: `XGqHdMUqV`, name: `MCZi_DjOF`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `XGqHdMUqV`, name: t, type: `Identifier` });
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
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=KhFWlWdPAeyETOoBHnXxvzGeArJYVQGZozyvQaam7d8.C_V9Bsdc.mjs.map
