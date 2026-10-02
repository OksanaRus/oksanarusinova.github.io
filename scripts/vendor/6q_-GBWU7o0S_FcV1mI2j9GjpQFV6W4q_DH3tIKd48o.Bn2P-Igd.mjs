import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { dt as t, ht as n, j as r } from "./framer.CuDPj9y9.mjs";
import { a as i, t as a } from "./gmyT5CP9g.CqDAXgoA.mjs";
function o(e, t) {
  let n = e?.lgUr0vKry,
    r = e?.P8F4W0BLO,
    i = e?.Ifl12g28h,
    a = e?.Z5UodXCEl;
  return {
    breakpoints: [
      { hash: `am69w`, mediaQuery: `(min-width: 1200px)` },
      { hash: `16p7a2x`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1t9d11j`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{P8F4W0BLO}}` : l(r)}`,
    elements: { BglXe2tv_: `story` },
    framerSearch: { index: a !== void 0 && d(a) === !1 },
    robots: a !== void 0 && d(a) === !1 ? `max-image-preview:large` : `noindex`,
    serializationId: `framer-cifCr`,
    socialImage: u(i),
    title: `Framer Stories: ${n === void 0 ? `{{lgUr0vKry}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `B5mOPlUB1`, data: a, type: `Collection` },
      select: [
        { collection: `B5mOPlUB1`, name: `lgUr0vKry`, type: `Identifier` },
        { collection: `B5mOPlUB1`, name: `P8F4W0BLO`, type: `Identifier` },
        { collection: `B5mOPlUB1`, name: `Ifl12g28h`, type: `Identifier` },
        { collection: `B5mOPlUB1`, name: `Z5UodXCEl`, type: `Identifier` },
      ],
      where: t(e, `B5mOPlUB1`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `B5mOPlUB1`, data: a, type: `Collection` },
      select: [
        { collection: `B5mOPlUB1`, name: `lgUr0vKry`, type: `Identifier` },
        { collection: `B5mOPlUB1`, name: `P8F4W0BLO`, type: `Identifier` },
        { collection: `B5mOPlUB1`, name: `Ifl12g28h`, type: `Identifier` },
        { collection: `B5mOPlUB1`, name: `Z5UodXCEl`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `B5mOPlUB1`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f,
  p,
  m = e(() => {
    (n(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = (e) => !e),
      (f = 1),
      (p = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
m();
export {
  p as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  f as metadataVersion,
  m as t,
};
//# sourceMappingURL=6q_-GBWU7o0S_FcV1mI2j9GjpQFV6W4q_DH3tIKd48o.Bn2P-Igd.mjs.map
