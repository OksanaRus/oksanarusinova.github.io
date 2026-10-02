import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { dt as t, ht as n, j as r } from "./framer.CuDPj9y9.mjs";
import { i, t as a } from "./wtmhDJz9O.IDSDCL0B.mjs";
function o(e, t) {
  let n = e?.Psmfxf4pL;
  return {
    breakpoints: [
      { hash: `17alo5e`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1rgn3a1`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `fr69zi`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `{{JPzHyrpsJ}}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-Dn4zJ`,
    title: `${n === void 0 ? `{{Psmfxf4pL}}` : l(n)} - Framer: Create a professional website, free. No code website builder loved by designers.`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `v1rqQlnFZ`, data: a, type: `Collection` },
      select: [{ collection: `v1rqQlnFZ`, name: `Psmfxf4pL`, type: `Identifier` }],
      where: t(e, `v1rqQlnFZ`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `v1rqQlnFZ`, data: a, type: `Collection` },
      select: [{ collection: `v1rqQlnFZ`, name: `Psmfxf4pL`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `v1rqQlnFZ`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (n(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
f();
export {
  d as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  u as metadataVersion,
  f as t,
};
//# sourceMappingURL=o3mquJvQdKkaT6XeF47gW5na-CuLjQcwQCNY3XKB0DM.DtLQK9Fv.mjs.map
