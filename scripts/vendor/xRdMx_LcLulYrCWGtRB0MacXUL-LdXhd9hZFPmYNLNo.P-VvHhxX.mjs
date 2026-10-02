import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { dt as t, ht as n, j as r } from "./framer.CuDPj9y9.mjs";
import { i, t as a } from "./y4dXcSpHz.DZYbT7ty.mjs";
function o(e, t) {
  let n = e?.ZoNDcATiM,
    r = e?.YpuNJB3o0;
  return {
    breakpoints: [
      { hash: `1kjouxe`, mediaQuery: `(min-width: 1200px)` },
      { hash: `wfsl9n`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1jjpjch`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `Special ${n === void 0 ? `{{ZoNDcATiM}}` : l(n)} deal  — ${r === void 0 ? `{{YpuNJB3o0}}` : l(r)}`,
    elements: {
      AfYhraCeZ: `bento-performance`,
      DrA_5uDyn: `agents`,
      ki4b7TEZp: `contact`,
      N4W67znV5: `agents-design`,
      UnEIHG_ya: `bento-cms`,
      VH5EIZFb2: `agents-cms`,
      zcYRAke77: `agents-optimize`,
    },
    framerSearch: { index: !1 },
    robots: `noindex`,
    serializationId: `framer-zOGl5`,
    title: `Framer \xd7 ${n === void 0 ? `{{ZoNDcATiM}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `H3yHC8BiI`, data: a, type: `Collection` },
      select: [
        { collection: `H3yHC8BiI`, name: `ZoNDcATiM`, type: `Identifier` },
        { collection: `H3yHC8BiI`, name: `YpuNJB3o0`, type: `Identifier` },
      ],
      where: t(e, `H3yHC8BiI`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `H3yHC8BiI`, data: a, type: `Collection` },
      select: [
        { collection: `H3yHC8BiI`, name: `ZoNDcATiM`, type: `Identifier` },
        { collection: `H3yHC8BiI`, name: `YpuNJB3o0`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `H3yHC8BiI`, name: t, type: `Identifier` });
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=xRdMx_LcLulYrCWGtRB0MacXUL-LdXhd9hZFPmYNLNo.P-VvHhxX.mjs.map
