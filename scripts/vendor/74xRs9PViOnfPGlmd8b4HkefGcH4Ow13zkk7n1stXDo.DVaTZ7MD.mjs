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
import { V as u, c as d, o as te, r as f } from "./motion.CaZjHSpz.mjs";
import {
  A as p,
  F as m,
  G as ne,
  Ht as re,
  I as h,
  Jt as g,
  Kt as ie,
  Ot as _,
  Qt as v,
  Z as y,
  _n as b,
  ct as x,
  en as ae,
  et as S,
  ht as C,
  o as w,
  ot as T,
  s as E,
  un as oe,
  y as D,
  zt as se,
} from "./framer.CuDPj9y9.mjs";
import { a as ce, c as O, o as k, s as le } from "./shared.DbR_nTE0.mjs";
import { i as A, n as j, r as M, t as N } from "./qRN7MgZKk.DvYJUCYH.mjs";
import { i as P, n as F, r as I, t as L } from "./q5l9lrIfW.CSGcYlC1.mjs";
import { n as R, t as z } from "./uNNbVYFS3.QAy4kOV6.mjs";
import B, { t as V } from "./SDcZCqDW5nkZKlu-5IzcEnTpRvRr3nfiHyDJjp-IIEw.DaLjnPK4.mjs";
var H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (o(),
    C(),
    f(),
    r(),
    R(),
    O(),
    P(),
    A(),
    V(),
    (H = T(z)),
    (U = {
      cY13yv0dF: `(min-width: 810px) and (max-width: 1199.98px)`,
      Hv884vqX8: `(min-width: 1200px)`,
      iAp7dnaY7: `(max-width: 809.98px)`,
    }),
    (W = []),
    (G = `framer-OHBEn`),
    (K = {
      cY13yv0dF: `framer-v-j4a91r`,
      Hv884vqX8: `framer-v-m1iigj`,
      iAp7dnaY7: `framer-v-1l99odm`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `Hv884vqX8`, Phone: `iAp7dnaY7`, Tablet: `cY13yv0dF` }),
    (X = ({ value: e }) =>
      g()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `Hv884vqX8`,
    })),
    (Q = b(
      s(function (e, r) {
        let o = ee(null),
          s = r ?? o,
          f = t(),
          { activeLocale: ne, contentLocale: g, setLocale: _ } = v(),
          b = se(),
          { style: x, className: S, layoutId: C, variant: T, ...O } = Z(e);
        ae(n(() => B({}, g), [g]));
        let [k, le] = ie(T, U, !1),
          A = y(G, N, ce, L),
          j = i(D)?.isLayoutTemplate,
          M = !!i(d)?.transition?.layout,
          P = q(j, M);
        return (
          oe(),
          re({}),
          c(D.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Y,
              primaryVariantId: `Hv884vqX8`,
              variantClassNames: K,
            },
            children: l(te, {
              id: C ?? f,
              children: [
                c(X, { value: `html body { background: rgb(0, 0, 0); }` }),
                c(u.div, {
                  ...O,
                  className: y(A, `framer-m1iigj`, S),
                  ref: s,
                  style: { ...x },
                  children: c(u.div, {
                    className: `framer-38ko76`,
                    layout: P,
                    children: l(`div`, {
                      className: `framer-1dtbr2l`,
                      children: [
                        l(`div`, {
                          className: `framer-167uimq`,
                          children: [
                            c(p, {
                              breakpoint: k,
                              overrides: {
                                iAp7dnaY7: {
                                  children: c(a, {
                                    children: c(`h1`, {
                                      className: `framer-styles-preset-1gzpg4m`,
                                      "data-styles-preset": `gM4yNG9Qq`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `We’ll notify you.`,
                                    }),
                                  }),
                                },
                              },
                              children: c(h, {
                                __fromCanvasComponent: !0,
                                children: c(a, {
                                  children: c(`h2`, {
                                    className: `framer-styles-preset-fbtpvo`,
                                    "data-styles-preset": `qRN7MgZKk`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `We’ll notify you.`,
                                  }),
                                }),
                                className: `framer-14a0rzc`,
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
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Once we fix the problems and our servers are running again, we’ll let you know right away.`,
                                }),
                              }),
                              className: `framer-1bfcxf4`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        c(m, {
                          links: [
                            { href: { webPageId: `CaG4CPscx` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `CaG4CPscx` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `CaG4CPscx` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            c(p, {
                              breakpoint: k,
                              overrides: {
                                cY13yv0dF: { y: (b?.y || 0) + 0 + 0 + 40 + 312.8 + 0 + 254.4 },
                                iAp7dnaY7: { y: (b?.y || 0) + 0 + 0 + 20 + 335 + 0 + 250 },
                              },
                              children: c(w, {
                                height: 40,
                                y: (b?.y || 0) + 0 + 0 + 80 + 262.8 + 0 + 254.4,
                                children: c(E, {
                                  className: `framer-umuekw-container`,
                                  nodeId: `SlBxCsZbl`,
                                  scopeId: `ScP1Xffgv`,
                                  children: c(p, {
                                    breakpoint: k,
                                    overrides: {
                                      cY13yv0dF: { Pt4SlUv6A: e[1] },
                                      iAp7dnaY7: { Pt4SlUv6A: e[2] },
                                    },
                                    children: c(z, {
                                      height: `100%`,
                                      HeJOhYkQ6: !0,
                                      id: `SlBxCsZbl`,
                                      layoutId: `SlBxCsZbl`,
                                      n5VvH4WnL: 0,
                                      Oit14HMmd: `0px 2px 5px 0px rgba(0, 0, 0, 0.25)`,
                                      PcMxA8YPo: !1,
                                      pLKRspnPt: `rgb(0, 0, 0)`,
                                      Pt4SlUv6A: e[0],
                                      Qc01sGp7o: `rgb(255, 255, 255)`,
                                      rNByUHuLd: `Back Home`,
                                      SyDFmDAZO: !1,
                                      variant: J(`PJ3a7VPTm`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
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
        `.framer-OHBEn.framer-uepf2p, .framer-OHBEn .framer-uepf2p { display: block; }`,
        `.framer-OHBEn.framer-m1iigj { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-OHBEn .framer-38ko76 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100vh; justify-content: center; overflow: visible; padding: 80px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-OHBEn .framer-1dtbr2l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-OHBEn .framer-167uimq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-OHBEn .framer-14a0rzc { --framer-link-hover-text-decoration: underline; --framer-link-text-color: #0099ff; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OHBEn .framer-1bfcxf4 { flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre-wrap; width: 497px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OHBEn .framer-umuekw-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...j,
        ...k,
        ...F,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-OHBEn.framer-m1iigj { width: 810px; } .framer-OHBEn .framer-38ko76 { gap: 10px; padding: 40px; } .framer-OHBEn .framer-167uimq { order: 0; width: 600px; } .framer-OHBEn .framer-1bfcxf4 { max-width: unset; width: 471px; } .framer-OHBEn .framer-umuekw-container { order: 1; }}`,
        `@media (max-width: 809.98px) { .framer-OHBEn.framer-m1iigj { width: 390px; } .framer-OHBEn .framer-38ko76 { gap: 0px; padding: 20px; } .framer-OHBEn .framer-1dtbr2l { gap: 30px; } .framer-OHBEn .framer-167uimq { width: 292px; } .framer-OHBEn .framer-1bfcxf4 { max-width: unset; width: 100%; }}`,
      ],
      `framer-OHBEn`
    )),
    (Q.displayName = `Busy / Thanks`),
    (Q.defaultProps = { height: 1549, width: 1200 }),
    ne(
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
        ...x(M),
        ...x(le),
        ...x(I),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => _([() => S(z, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerScP1Xffgv`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerResolvesOwnDefaults: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `1549`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cY13yv0dF":{"layout":["fixed","auto"]},"iAp7dnaY7":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=74xRs9PViOnfPGlmd8b4HkefGcH4Ow13zkk7n1stXDo.DVaTZ7MD.mjs.map
