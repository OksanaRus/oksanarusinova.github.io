import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as ee,
  l as te,
  m as s,
  s as c,
  u as l,
} from "./react.hMW2PJqY.mjs";
import { V as u, c as ne, o as d, r as f } from "./motion.CaZjHSpz.mjs";
import {
  A as p,
  F as re,
  G as ie,
  Ht as ae,
  I as oe,
  Jt as m,
  Kt as se,
  Ot as h,
  Qt as ce,
  Z as le,
  _n as g,
  cn as _,
  ct as v,
  en as ue,
  et as y,
  ht as b,
  k as de,
  kt as x,
  ln as fe,
  n as pe,
  o as S,
  ot as C,
  s as w,
  un as me,
  wt as T,
  y as E,
  zt as he,
} from "./framer.CuDPj9y9.mjs";
import { a as ge, c as D, o as O, s as k } from "./shared.DbR_nTE0.mjs";
import { n as A, t as j } from "./i5eOVfIN4.DK8p7zA6.mjs";
import { n as M, t as N } from "./cGJ8D8e0D.BOWUN3if.mjs";
import { i as P, o as F } from "./FQd2ub6EO.C4tgEVxw.mjs";
import { n as _e, t as I } from "./Qk3ds_mPn.Byezsh1t.mjs";
import ve, { t as ye } from "./agdpjTuRZW-CdNnpmi_BSig5VZGYw3qfluANpdKJqK0.C6KGc0jS.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, be, Q, xe, Se, $, Ce;
e(() => {
  (ee(),
    b(),
    f(),
    r(),
    M(),
    A(),
    _e(),
    P(),
    D(),
    ye(),
    (L = C(j)),
    (R = C(N)),
    (z = C(I)),
    (B = {
      DhMUvI2Pj: `(min-width: 810px) and (max-width: 1199.98px)`,
      ojDrXTlk1: `(min-width: 1200px)`,
      Zbob943qj: `(max-width: 809.98px)`,
    }),
    (V = []),
    (H = `framer-EOrws`),
    (U = {
      DhMUvI2Pj: `framer-v-qpsoze`,
      ojDrXTlk1: `framer-v-14wfcz`,
      Zbob943qj: `framer-v-mmrdgl`,
    }),
    (W = (e, t, n) => (e && t ? `position` : n)),
    (G = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (K = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (q = (e, t) => (e ? `mDZHNjF_Y` : `UuvWBIUgU`)),
    (J = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Y = (e, t) => (e ? `sAjOGenyB` : `oAvl4MGv4`)),
    (X = () => ({
      from: { alias: `T7DqKm64Q`, data: F, type: `Collection` },
      limit: { type: `LiteralValue`, value: 4 },
      orderBy: [
        { collection: `T7DqKm64Q`, direction: `desc`, name: `V3qJuAYDT`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `L2B9CPxSA`, type: `Identifier` },
      ],
      select: [
        { collection: `T7DqKm64Q`, name: `V3qJuAYDT`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `v005QldSH`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `ea_vfA8vz`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `id`, type: `Identifier` },
      ],
    })),
    (Z = () => ({
      from: { alias: `T7DqKm64Q`, data: F, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [
        { collection: `T7DqKm64Q`, direction: `desc`, name: `V3qJuAYDT`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `L2B9CPxSA`, type: `Identifier` },
      ],
      select: [
        { collection: `T7DqKm64Q`, name: `V3qJuAYDT`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `v005QldSH`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `ea_vfA8vz`, type: `Identifier` },
        { collection: `T7DqKm64Q`, name: `id`, type: `Identifier` },
      ],
    })),
    (be = ({ query: e, pageSize: t, children: n }) => n(_(e))),
    (Q = { Desktop: `ojDrXTlk1`, Phone: `Zbob943qj`, Tablet: `DhMUvI2Pj` }),
    (xe = ({ value: e }) =>
      m()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Se = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `ojDrXTlk1`,
    })),
    ($ = g(
      s(function (e, r) {
        let ee = o(null),
          s = r ?? ee,
          f = t(),
          { activeLocale: ie, contentLocale: m, setLocale: h } = ce(),
          g = he(),
          { style: _, className: v, layoutId: y, variant: b, ...x } = Se(e);
        ue(n(() => ve({}, m), [m]));
        let [C, T] = se(b, B, !1),
          D = le(H, ge),
          O = i(E)?.isLayoutTemplate,
          k = !!i(ne)?.transition?.layout,
          A = W(O, k),
          M = fe(`wH5HRUN3v`),
          P = o(null);
        return (
          me(),
          ae({}),
          c(E.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Q,
              primaryVariantId: `ojDrXTlk1`,
              variantClassNames: U,
            },
            children: l(d, {
              id: y ?? f,
              children: [
                c(xe, {
                  value: `html body { background: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0)); }`,
                }),
                l(u.main, {
                  ...x,
                  className: le(D, `framer-14wfcz`, v),
                  ref: s,
                  style: { ..._ },
                  children: [
                    l(u.div, {
                      className: `framer-n63qkx`,
                      "data-framer-name": `Hero`,
                      layout: A,
                      children: [
                        c(`div`, {
                          className: `framer-1loz8mw`,
                          "data-framer-name": `Title`,
                          id: M,
                          ref: P,
                          children: c(`div`, {
                            className: `framer-3oakc3`,
                            children: l(`div`, {
                              className: `framer-zf4id8`,
                              "data-framer-name": `Text`,
                              children: [
                                c(oe, {
                                  __fromCanvasComponent: !0,
                                  children: c(a, {
                                    children: c(`h1`, {
                                      className: `framer-styles-preset-1gzpg4m`,
                                      "data-styles-preset": `gM4yNG9Qq`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `Practical guides for building on the web`,
                                    }),
                                  }),
                                  className: `framer-10uzmyu`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(p, {
                                  breakpoint: C,
                                  overrides: {
                                    Zbob943qj: {
                                      y: (g?.y || 0) + 0 + 0 + 0 + 0 + 80 + 0 + 0 + 0 + 0 + 74,
                                    },
                                  },
                                  children: c(S, {
                                    height: 34,
                                    width: `200px`,
                                    y: (g?.y || 0) + 0 + 0 + 0 + 0 + 100 + 0 + 0 + 0 + 0 + 20,
                                    children: c(w, {
                                      className: `framer-1ti7co1-container`,
                                      nodeId: `iqlnWoVmd`,
                                      scopeId: `JhIhfQV5m`,
                                      children: c(j, {
                                        DOnmlCmCG: `Search guides...`,
                                        height: `100%`,
                                        id: `iqlnWoVmd`,
                                        layoutId: `iqlnWoVmd`,
                                        style: { maxWidth: `100%`, width: `100%` },
                                        variant: G(`NpOxz85ze`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-8579r3`,
                          "data-framer-name": `Book Stack`,
                          children: c(`div`, {
                            className: `framer-1o5zmb4`,
                            children: c(pe, {
                              children: c(p, {
                                breakpoint: C,
                                overrides: { Zbob943qj: { query: Z() } },
                                children: c(be, {
                                  query: X(),
                                  children: (e, t, n) =>
                                    c(te, {
                                      children: e?.map(
                                        (
                                          { ea_vfA8vz: e, id: t, v005QldSH: n, V3qJuAYDT: r },
                                          i
                                        ) => (
                                          (r ??= !0),
                                          (n ??= ``),
                                          c(
                                            d,
                                            {
                                              id: `T7DqKm64Q-${t}`,
                                              children: c(de.Provider, {
                                                value: { v005QldSH: n },
                                                children: c(re, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { v005QldSH: n },
                                                        webPageId: `o4rL8tcZy`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { v005QldSH: n },
                                                        webPageId: `o4rL8tcZy`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { v005QldSH: n },
                                                        webPageId: `o4rL8tcZy`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (t) =>
                                                    c(p, {
                                                      breakpoint: C,
                                                      overrides: {
                                                        DhMUvI2Pj: { height: 346, width: `240px` },
                                                        Zbob943qj: {
                                                          height: 480,
                                                          width: `max(min(${g?.width || `100vw`} - 40px, 1200px), 50px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            248 +
                                                            0 +
                                                            0 +
                                                            10 +
                                                            0,
                                                        },
                                                      },
                                                      children: c(S, {
                                                        height: 360,
                                                        width: `279.8844px`,
                                                        y:
                                                          (g?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          214 +
                                                          0 +
                                                          0 +
                                                          10,
                                                        children: c(w, {
                                                          className: `framer-thmnjc-container`,
                                                          nodeId: `qIyfrcX7l`,
                                                          scopeId: `JhIhfQV5m`,
                                                          children: c(p, {
                                                            breakpoint: C,
                                                            overrides: {
                                                              DhMUvI2Pj: {
                                                                variant: G(Y(K(r, !0), m)),
                                                                xc02pDypi: t[1],
                                                              },
                                                              Zbob943qj: {
                                                                variant: G(Y(K(r, !0), m)),
                                                                xc02pDypi: t[2],
                                                              },
                                                            },
                                                            children: c(N, {
                                                              height: `100%`,
                                                              id: `qIyfrcX7l`,
                                                              layoutId: `qIyfrcX7l`,
                                                              style: {
                                                                height: `100%`,
                                                                width: `100%`,
                                                              },
                                                              variant: G(q(K(r, !0), m)),
                                                              width: `100%`,
                                                              xc02pDypi: t[0],
                                                              yJzQYL4DQ: J(e),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(p, {
                      breakpoint: C,
                      overrides: {
                        DhMUvI2Pj: { y: (g?.y || 0) + 0 + 680 },
                        Zbob943qj: { y: (g?.y || 0) + 0 + 1828 },
                      },
                      children: c(S, {
                        height: 1089,
                        width: g?.width || `100vw`,
                        y: (g?.y || 0) + 0 + 744,
                        children: c(w, {
                          className: `framer-14g05dl-container`,
                          layout: A,
                          nodeId: `P8FWmoD3w`,
                          scopeId: `JhIhfQV5m`,
                          children: c(p, {
                            breakpoint: C,
                            overrides: {
                              DhMUvI2Pj: { variant: G(`uMVfLDufo`) },
                              Zbob943qj: { variant: G(`OtdhaXQ5k`) },
                            },
                            children: c(I, {
                              height: `100%`,
                              id: `P8FWmoD3w`,
                              layoutId: `P8FWmoD3w`,
                              style: { width: `100%` },
                              variant: G(`FLmo0XG5N`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-EOrws.framer-108vf30, .framer-EOrws .framer-108vf30 { display: block; }`,
        `.framer-EOrws.framer-14wfcz { align-content: center; align-items: center; background-color: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-EOrws .framer-n63qkx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; padding: 0px 0px 150px 0px; position: relative; width: 100%; }`,
        `.framer-EOrws .framer-1loz8mw { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: visible; padding: 100px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-EOrws .framer-3oakc3 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-EOrws .framer-zf4id8 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-EOrws .framer-10uzmyu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre-wrap; width: 590px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EOrws .framer-1ti7co1-container { flex: none; height: auto; max-width: 1160px; position: relative; width: 200px; }`,
        `.framer-EOrws .framer-8579r3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-EOrws .framer-1o5zmb4 { -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 15%, rgba(0,0,0,1) 30%) add; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.58) 15%, rgba(0,0,0,1) 30%) add; max-width: 1200px; padding: 10px 0px 10px 0px; position: relative; width: 100%; }`,
        `.framer-EOrws .framer-thmnjc-container { aspect-ratio: 0.7774566473988439 / 1; flex: none; height: auto; position: relative; width: 280px; }`,
        `.framer-EOrws .framer-14g05dl-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...O,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-EOrws.framer-14wfcz { width: 810px; } .framer-EOrws .framer-n63qkx { padding: 0px 0px 100px 0px; } .framer-EOrws .framer-10uzmyu { width: 417px; } .framer-EOrws .framer-1o5zmb4 { -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 10%, rgba(0,0,0,1) 20%) add; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.58) 10%, rgba(0,0,0,1) 20%) add; } .framer-EOrws .framer-thmnjc-container { aspect-ratio: 0.6936416184971098 / 1; width: 240px; }}`,
        `@media (max-width: 809.98px) { .framer-EOrws.framer-14wfcz { width: 390px; } .framer-EOrws .framer-n63qkx { padding: 0px 0px 80px 0px; } .framer-EOrws .framer-1loz8mw { padding: 80px 20px 0px 20px; } .framer-EOrws .framer-zf4id8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-EOrws .framer-10uzmyu { max-width: 350px; } .framer-EOrws .framer-1o5zmb4 { -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 14.000000000000002%, rgba(0,0,0,1) 38%) add; align-content: unset; align-items: unset; display: grid; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); justify-content: center; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.58) 14.000000000000002%, rgba(0,0,0,1) 38%) add; } .framer-EOrws .framer-thmnjc-container { align-self: start; aspect-ratio: unset; height: 480px; justify-self: start; width: 100%; }}`,
      ],
      `framer-EOrws`
    )),
    ($.displayName = `Guides`),
    ($.defaultProps = { height: 2455, width: 1200 }),
    ie(
      $,
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
        ...L,
        ...R,
        ...z,
        ...v(k),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = T.get(X(), n, r),
          a = T.get(Z(), n, r);
        return h(
          [
            () => i.preload(),
            () => a.preload(),
            () => y(j, {}, t),
            () => y(I, {}, t),
            async () =>
              h(
                ((await x(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => y(N, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    (Ce = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerJhIhfQV5m`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DhMUvI2Pj":{"layout":["fixed","auto"]},"Zbob943qj":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"wH5HRUN3v":{"pattern":":wH5HRUN3v","name":"intro"}}`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `2455`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResolvesOwnDefaults: `true`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ce as __FramerMetadata__, $ as default, V as queryParamNames };
//# sourceMappingURL=dOWVIVg2bGwr06Rn7_CN9gQkuWgDNocOPkUzM-ldxg8.CtqHVxjs.mjs.map
