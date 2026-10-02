import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as ee,
  c as o,
  m as s,
  s as c,
  u as l,
} from "./react.hMW2PJqY.mjs";
import { V as u, c as te, o as ne, r as d } from "./motion.CaZjHSpz.mjs";
import {
  A as f,
  G as p,
  Ht as m,
  I as h,
  Jt as g,
  Kt as re,
  Ot as ie,
  Qt as _,
  Z as v,
  _n as y,
  ct as b,
  en as ae,
  et as x,
  ht as S,
  o as C,
  ot as w,
  s as T,
  vn as E,
  y as D,
  zt as O,
} from "./framer.CuDPj9y9.mjs";
import { a as k, c as A, o as oe, s as j } from "./shared.DbR_nTE0.mjs";
import { i as M, n as N, r as P, t as F } from "./q5l9lrIfW.CSGcYlC1.mjs";
import { n as I, t as L } from "./vGILl3QFn.B0aCTm-V.mjs";
import { n as R, t as z } from "./WithSoft404Override.B7-HNnc9.mjs";
import B, { t as V } from "./atP2tXKGdolMR8qa3TWqRp75TUMJLZ8qUJF_DxGqVo0.GnAh3J2p.mjs";
var H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (o(),
    S(),
    d(),
    r(),
    I(),
    z(),
    A(),
    M(),
    V(),
    (H = w(L)),
    (U = E(u.div, { nodeId: `B_p3Fmp9Y`, override: R, scopeId: `OfMKlEvDk` })),
    (W = {
      HprkGsd2k: `(min-width: 810px) and (max-width: 1199.98px)`,
      stb1lmwiA: `(max-width: 809.98px)`,
      SXpcp15Jf: `(min-width: 1200px)`,
    }),
    (G = []),
    (K = `framer-6vZ41`),
    (q = {
      HprkGsd2k: `framer-v-m3ppn8`,
      stb1lmwiA: `framer-v-d44qom`,
      SXpcp15Jf: `framer-v-rnlzpg`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = { Desktop: `SXpcp15Jf`, Phone: `stb1lmwiA`, Tablet: `HprkGsd2k` }),
    (X = ({ value: e }) =>
      g()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `SXpcp15Jf`,
    })),
    (Q = y(
      s(function (e, r) {
        let o = ee(null),
          s = r ?? o,
          d = t(),
          { activeLocale: p, contentLocale: g, setLocale: ie } = _(),
          y = O(),
          { style: b, className: x, layoutId: S, variant: w, ...E } = Z(e);
        ae(n(() => B({}, g), [g]));
        let [A, oe] = re(w, W, !1),
          j = v(K, k, F),
          M = i(D)?.isLayoutTemplate,
          N = !!i(te)?.transition?.layout,
          P = J(M, N);
        return (
          m({}),
          c(D.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Y,
              primaryVariantId: `SXpcp15Jf`,
              variantClassNames: q,
            },
            children: l(ne, {
              id: S ?? d,
              children: [
                c(X, { value: `html body { background: rgb(0, 0, 0); }` }),
                c(u.div, {
                  ...E,
                  className: v(j, `framer-rnlzpg`, x),
                  ref: s,
                  style: { ...b },
                  children: c(U, {
                    className: `framer-1mq6ssn`,
                    layout: P,
                    children: c(u.div, {
                      className: `framer-rmwkut`,
                      children: c(u.div, {
                        className: `framer-npd3h1`,
                        children: l(u.div, {
                          className: `framer-10afz2a`,
                          children: [
                            l(u.div, {
                              className: `framer-82udxb`,
                              children: [
                                c(u.div, {
                                  className: `framer-1a7wiyo`,
                                  children: c(h, {
                                    __fromCanvasComponent: !0,
                                    children: c(a, {
                                      children: c(`h1`, {
                                        className: `framer-styles-preset-1gzpg4m`,
                                        "data-styles-preset": `gM4yNG9Qq`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Newsletter`,
                                      }),
                                    }),
                                    className: `framer-1k9rbo0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                c(h, {
                                  __fromCanvasComponent: !0,
                                  children: c(a, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-18enhj0`,
                                      "data-styles-preset": `q5l9lrIfW`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(168, 168, 168)`,
                                      },
                                      children: `Get updates about our latest releases, events, and more.`,
                                    }),
                                  }),
                                  className: `framer-1h931gq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(f, {
                              breakpoint: A,
                              overrides: {
                                HprkGsd2k: {
                                  width: `min(303px, min(min(max(max(${y?.width || `100vw`}, 1px) - 80px, 1px), 1400px), 420px))`,
                                },
                                stb1lmwiA: {
                                  width: `min(303px, min(min(max(${y?.width || `100vw`}, 1px) - 40px, 1400px), 420px))`,
                                },
                              },
                              children: c(C, {
                                height: 50,
                                width: `min(303px, min(max(min(max(max(${y?.width || `100vw`}, 1px) - 80px, 1px), 1400px), 1px), 420px))`,
                                children: c(T, {
                                  className: `framer-17qzdib-container`,
                                  nodeId: `QlqzAUm5p`,
                                  rendersWithMotion: !0,
                                  scopeId: `OfMKlEvDk`,
                                  children: c(L, {
                                    F27XNlSho: ``,
                                    height: `100%`,
                                    id: `QlqzAUm5p`,
                                    JKAYGKEtx: `cla9kwe0a00aomo08wa3cqno0`,
                                    layoutId: `QlqzAUm5p`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-6vZ41.framer-somgeu, .framer-6vZ41 .framer-somgeu { display: block; }`,
        `.framer-6vZ41.framer-rnlzpg { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-6vZ41 .framer-1mq6ssn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6vZ41 .framer-rmwkut { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: 100vh; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 1px; z-index: 5; }`,
        `.framer-6vZ41 .framer-npd3h1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; max-width: 1400px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6vZ41 .framer-10afz2a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 420px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6vZ41 .framer-82udxb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6vZ41 .framer-1a7wiyo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6vZ41 .framer-1k9rbo0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; pointer-events: none; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6vZ41 .framer-1h931gq { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 470px; pointer-events: auto; position: relative; width: 100%; }`,
        `.framer-6vZ41 .framer-17qzdib-container { flex: none; height: auto; max-width: 100%; position: relative; width: 303px; }`,
        ...oe,
        ...N,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-6vZ41.framer-rnlzpg { width: 810px; } .framer-6vZ41 .framer-rmwkut { gap: 20px; height: min-content; } .framer-6vZ41 .framer-npd3h1 { flex-direction: column; height: 767px; } .framer-6vZ41 .framer-10afz2a { flex: none; width: 100%; } .framer-6vZ41 .framer-82udxb { order: 0; } .framer-6vZ41 .framer-17qzdib-container { order: 1; }}`,
        `@media (max-width: 809.98px) { .framer-6vZ41.framer-rnlzpg { width: 390px; } .framer-6vZ41 .framer-rmwkut { flex-direction: column; gap: 50px; padding: 40px 20px 40px 20px; } .framer-6vZ41 .framer-npd3h1 { flex: none; flex-direction: column; height: min-content; width: 100%; } .framer-6vZ41 .framer-10afz2a { flex: none; width: 100%; }}`,
      ],
      `framer-6vZ41`
    )),
    (Q.displayName = `404`),
    (Q.defaultProps = { height: 1504, width: 1200 }),
    p(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...H,
        ...b(j),
        ...b(P),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => ie([() => x(L, {}, t)], t) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerOfMKlEvDk`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `1504`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HprkGsd2k":{"layout":["fixed","auto"]},"stb1lmwiA":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerResolvesOwnDefaults: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, G as queryParamNames };
//# sourceMappingURL=rytvWBFfvN2KYXbhndoL7GS0d3pmVnHv-4REoWihZrc.DZrHg5VY.mjs.map
