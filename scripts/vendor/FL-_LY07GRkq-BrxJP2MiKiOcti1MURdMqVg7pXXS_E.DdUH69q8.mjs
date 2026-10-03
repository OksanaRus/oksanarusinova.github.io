import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  N as r,
  S as ee,
  k as i,
  l as a,
  o,
  p as s,
  s as c,
  y as l,
} from "./react.BKyTRiZ3.mjs";
import { A as u, a as te, r as ne, t as re } from "./motion.AUYMciny.mjs";
import {
  $ as ie,
  A as d,
  L as ae,
  M as f,
  Q as oe,
  S as p,
  W as m,
  X as se,
  a as h,
  ct as g,
  f as _,
  g as v,
  h as y,
  it as b,
  j as x,
  l as S,
  n as C,
  nt as ce,
  rt as le,
  s as w,
  t as T,
  tt as E,
  v as D,
  w as O,
} from "./framer.I4hUVXCD.mjs";
import {
  a as ue,
  c as k,
  d as de,
  f as A,
  g as j,
  h as M,
  i as N,
  l as fe,
  m as P,
  o as F,
  p as pe,
  r as I,
  s as L,
  u as R,
} from "./shared-lib.s-tZHqY3.mjs";
import {
  a as me,
  c as z,
  i as B,
  n as V,
  o as H,
  r as he,
  s as U,
  t as ge,
} from "./U3NyadGC3.CFPXkF2H.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./rHJW28QP9.71J2OPNo.mjs";
import { n as xe, t as W } from "./Video.BAtjOJoI.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./FZfftxcm3.D-2lrkRc.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./SDQdvccR0.CUkUXkBW.mjs";
import Ae, { t as je } from "./zuRHxZ6ktoTRKdcxtad9_6x5GszmHY083o3om15isYk.BZY3n98b.mjs";
var G, K, q, J, Y, Me, Ne, Pe, X, Z, Fe, Ie, Q, $;
e(() => {
  (c(),
    ae(),
    re(),
    n(),
    xe(),
    N(),
    Se(),
    j(),
    A(),
    _e(),
    Ee(),
    z(),
    B(),
    k(),
    je(),
    (G = d(I)),
    (K = d(W)),
    (q = {
      kRIcmfdc9: `(min-width: 1240px) and (max-width: 1439.98px)`,
      mSSArEkuf: `(min-width: 1440px)`,
      OKBdZqY9U: `(min-width: 810px) and (max-width: 1239.98px)`,
      ulIRTz2D_: `(max-width: 809.98px)`,
    }),
    (J = () => typeof document < `u`),
    (Y = []),
    (Me = `framer-Ch7Rq`),
    (Ne = {
      kRIcmfdc9: `framer-v-10wtumm`,
      mSSArEkuf: `framer-v-1na5ixm`,
      OKBdZqY9U: `framer-v-1as8k83`,
      ulIRTz2D_: `framer-v-q3g0ln`,
    }),
    (Pe = (e, t, n) => (e && t ? `position` : n)),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `mSSArEkuf`, Laptop: `kRIcmfdc9`, Phone: `ulIRTz2D_`, Tablet: `OKBdZqY9U` }),
    (Fe = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ie = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `mSSArEkuf`,
    })),
    (Q = g(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          re = ee(),
          { activeLocale: d, setLocale: ae } = ce(),
          m = se(),
          { style: g, className: x, layoutId: E, variant: D, ...O } = Ie(e);
        le(t(() => Ae({}, d), [d]));
        let [k, de] = ie(D, q, !1),
          A = p(Me, ge, be, ue, fe, pe, me, Te, ke),
          j = i(h)?.isLayoutTemplate,
          M = !!i(te)?.transition?.layout,
          N = Pe(j, M),
          P = () => !J() || ![`OKBdZqY9U`, `ulIRTz2D_`].includes(k),
          F = b(`mEW_aRsFW`),
          L = l(null),
          R = () => !J() || k === `OKBdZqY9U`,
          z = () => !J() || k !== `OKBdZqY9U`,
          B = () => !J() || k === `ulIRTz2D_`,
          V = b(`LzK9Rer8f`),
          H = l(null),
          he = b(`XnacIMfmh`),
          U = l(null);
        return (
          oe({}),
          o(h.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Z,
              primaryVariantId: `mSSArEkuf`,
              variantClassNames: Ne,
            },
            children: a(ne, {
              id: E ?? re,
              children: [
                o(Fe, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...O,
                  className: p(A, `framer-1na5ixm`, x),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: k,
                      overrides: {
                        OKBdZqY9U: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                        ulIRTz2D_: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(T, {
                        height: 1e3,
                        y: (m?.y || 0) + 0,
                        children: o(C, {
                          className: `framer-yuhbxu-container`,
                          layout: N,
                          nodeId: `LrYHa4sh9`,
                          scopeId: `aQL_eOTAm`,
                          children: o(_, {
                            breakpoint: k,
                            overrides: {
                              OKBdZqY9U: { style: { width: `100%` }, variant: X(`YCYFEcIjL`) },
                              ulIRTz2D_: { style: { width: `100%` }, variant: X(`XJ7hq0Zpp`) },
                            },
                            children: o(I, {
                              height: `100%`,
                              id: `LrYHa4sh9`,
                              layoutId: `LrYHa4sh9`,
                              style: { height: `100%` },
                              variant: X(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-65ewut`,
                      layout: N,
                      children: [
                        P() &&
                          o(`div`, {
                            className: `framer-12b4j7y hidden-1as8k83 hidden-q3g0ln`,
                            children: a(`div`, {
                              className: `framer-1ubohen`,
                              children: [
                                a(`div`, {
                                  className: `framer-1vi9fta`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1p69018`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-1fu46tx`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: o(S, {
                                                href: {
                                                  hash: `:LzK9Rer8f`,
                                                  webPageId: `aQL_eOTAm`,
                                                },
                                                motionChild: !0,
                                                nodeId: `mEW_aRsFW`,
                                                openInNewTab: !1,
                                                preserveParams: !1,
                                                relValues: [],
                                                scopeId: `aQL_eOTAm`,
                                                smoothScroll: !0,
                                                children: o(u.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: o(`strong`, {
                                                    children: `Пользовательские исследования`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-ajsyt9`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          id: F,
                                          ref: L,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: o(S, {
                                                href: {
                                                  hash: `:XnacIMfmh`,
                                                  webPageId: `aQL_eOTAm`,
                                                },
                                                motionChild: !0,
                                                nodeId: `eLiCKYnsG`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `aQL_eOTAm`,
                                                smoothScroll: !0,
                                                children: o(u.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: o(`strong`, {
                                                    children: `Прототипы и макеты`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1bv4lv8`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-hq9oh3`,
                                  children: o(S, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `BaZx7EEBe`,
                                    openInNewTab: !1,
                                    scopeId: `aQL_eOTAm`,
                                    children: o(u.a, {
                                      className: `framer-1425qjy framer-1i8cw8e`,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-7aia9y`,
                                        children: a(v, {
                                          className: `framer-1ikp9ft`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(v, {
                                              className: `framer-1546ewt`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              className: `framer-14cv0b4`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        a(`div`, {
                          className: `framer-1fo02nk`,
                          children: [
                            R() &&
                              a(`div`, {
                                className: `framer-gtfho6 hidden-1na5ixm hidden-10wtumm hidden-q3g0ln`,
                                children: [
                                  o(`div`, {
                                    className: `framer-y88u7r`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-wpsku9`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(S, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `guDY3yk69`,
                                    openInNewTab: !1,
                                    scopeId: `aQL_eOTAm`,
                                    children: o(u.a, {
                                      className: `framer-18zjtti framer-1i8cw8e`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-5v2bvz`,
                                        children: a(v, {
                                          className: `framer-kadg2t`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(v, {
                                              className: `framer-8v25a9`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              className: `framer-egaqrn`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            a(`div`, {
                              className: `framer-1xs21xk`,
                              children: [
                                z() &&
                                  o(_, {
                                    breakpoint: k,
                                    overrides: {
                                      ulIRTz2D_: {
                                        children: o(r, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-qvrn1k`,
                                            "data-styles-preset": `ksQr_zVQP`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Обзор проекта` }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          children: o(`strong`, { children: `Обзор проекта` }),
                                        }),
                                      }),
                                      className: `framer-c7qg20 hidden-1as8k83`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: [
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Customer Connect Hub — многолетний проект, направленный на консолидацию двух зрелых продуктов: iEDI Clearinghouse и Optum Connect Center. Изначально разработанные для разных ниш одной индустрии, со временем продукты эволюционировали, их функциональность пересеклась, и они начали конкурировать между собой, создавая фрагментированный пользовательский опыт и дублирование решений.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `В этом кейсе рассматриваются UX-стратегия и ключевые дизайнерские решения, лежащие в основе создания целостной платформы с сохранением существующего пользовательского поведения.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-g0ugjq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                R() &&
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        dir: `auto`,
                                        children: o(`strong`, { children: `Обзор проекта` }),
                                      }),
                                    }),
                                    className: `framer-4ajm5s hidden-1na5ixm hidden-10wtumm hidden-q3g0ln`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                            o(y, {
                              __fromCanvasComponent: !0,
                              children: o(r, {
                                children: o(`h3`, {
                                  className: `framer-styles-preset-bdezu4`,
                                  "data-styles-preset": `TWYWOtjjp`,
                                  dir: `auto`,
                                  children: `Основные Макеты`,
                                }),
                              }),
                              className: `framer-alg1zx`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(`div`, {
                              className: `framer-10iaog5`,
                              children: [
                                a(`div`, {
                                  className: `framer-17m0ba0`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-rbdi59`,
                                      children: [
                                        o(_, {
                                          breakpoint: k,
                                          overrides: {
                                            ulIRTz2D_: {
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: o(`strong`, { children: `Landing` }),
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h6`, {
                                                className: `framer-styles-preset-1uytke0`,
                                                "data-styles-preset": `FZfftxcm3`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                children: o(`strong`, { children: `Landing` }),
                                              }),
                                            }),
                                            className: `framer-lwfxto`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-z3nmgz`,
                                          children: o(_, {
                                            breakpoint: k,
                                            overrides: {
                                              kRIcmfdc9: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      28.2 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080`,
                                                  srcSet: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                              OKBdZqY9U: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      800 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      465 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      28.2 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((${m?.width || `100vw`} - 108px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080`,
                                                  srcSet: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                              ulIRTz2D_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      800 +
                                                      16 +
                                                      0 +
                                                      0 +
                                                      116 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      23 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((${m?.width || `100vw`} - 60px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080`,
                                                  srcSet: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                            },
                                            children: o(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 1080,
                                                intrinsicWidth: 1920,
                                                loading: f(
                                                  (m?.y || 0) +
                                                    0 +
                                                    0 +
                                                    168 +
                                                    0 +
                                                    395.8 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    28.2 +
                                                    244 -
                                                    243.5299
                                                ),
                                                pixelHeight: 1080,
                                                pixelWidth: 1920,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080`,
                                                srcSet: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080 1920w`,
                                              },
                                              className: `framer-ip90u7`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-l6iaq`,
                                      children: [
                                        o(_, {
                                          breakpoint: k,
                                          overrides: {
                                            ulIRTz2D_: {
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: a(`strong`, {
                                                    children: [
                                                      `Основной режим `,
                                                      o(`br`, {}),
                                                      `редактирования`,
                                                    ],
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h6`, {
                                                className: `framer-styles-preset-1uytke0`,
                                                "data-styles-preset": `FZfftxcm3`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                children: o(`strong`, {
                                                  children: `Основной экран редактирования`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-11evksh`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-1eor35a`,
                                          children: o(_, {
                                            breakpoint: k,
                                            overrides: {
                                              kRIcmfdc9: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1787,
                                                  intrinsicWidth: 3192,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      0 +
                                                      288.2 +
                                                      0 +
                                                      28.2 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1787,
                                                  pixelWidth: 3192,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787`,
                                                  srcSet: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=512&width=3192&height=1787 512w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=1024&width=3192&height=1787 1024w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=2048&width=3192&height=1787 2048w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787 3192w`,
                                                },
                                              },
                                              OKBdZqY9U: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1787,
                                                  intrinsicWidth: 3192,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      800 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      465 +
                                                      0 +
                                                      0 +
                                                      288.2 +
                                                      0 +
                                                      28.2 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1787,
                                                  pixelWidth: 3192,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((${m?.width || `100vw`} - 108px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787`,
                                                  srcSet: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=512&width=3192&height=1787 512w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=1024&width=3192&height=1787 1024w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=2048&width=3192&height=1787 2048w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787 3192w`,
                                                },
                                              },
                                              ulIRTz2D_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1787,
                                                  intrinsicWidth: 3192,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      800 +
                                                      16 +
                                                      0 +
                                                      0 +
                                                      116 +
                                                      0 +
                                                      0 +
                                                      283 +
                                                      0 +
                                                      23 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1787,
                                                  pixelWidth: 3192,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((${m?.width || `100vw`} - 60px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787`,
                                                  srcSet: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=512&width=3192&height=1787 512w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=1024&width=3192&height=1787 1024w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=2048&width=3192&height=1787 2048w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787 3192w`,
                                                },
                                              },
                                            },
                                            children: o(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 1787,
                                                intrinsicWidth: 3192,
                                                loading: f(
                                                  (m?.y || 0) +
                                                    0 +
                                                    0 +
                                                    168 +
                                                    0 +
                                                    395.8 +
                                                    0 +
                                                    0 +
                                                    288.2 +
                                                    0 +
                                                    28.2 +
                                                    244 -
                                                    243.5299
                                                ),
                                                pixelHeight: 1787,
                                                pixelWidth: 3192,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787`,
                                                srcSet: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=512&width=3192&height=1787 512w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=1024&width=3192&height=1787 1024w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=2048&width=3192&height=1787 2048w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787 3192w`,
                                              },
                                              className: `framer-6scud1`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-1dyvxpw`,
                                  children: [
                                    o(_, {
                                      breakpoint: k,
                                      overrides: {
                                        ulIRTz2D_: {
                                          children: o(r, {
                                            children: o(`h6`, {
                                              className: `framer-styles-preset-yhn7fw`,
                                              "data-styles-preset": `SDQdvccR0`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                              children: o(`strong`, {
                                                children: `Claims Dashboard`,
                                              }),
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`h6`, {
                                            className: `framer-styles-preset-1uytke0`,
                                            "data-styles-preset": `FZfftxcm3`,
                                            dir: `auto`,
                                            style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                            children: o(`strong`, { children: `Claims Dashboard` }),
                                          }),
                                        }),
                                        className: `framer-829akw`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    o(_, {
                                      breakpoint: k,
                                      overrides: {
                                        kRIcmfdc9: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 2134,
                                            intrinsicWidth: 1920,
                                            loading: f(
                                              (m?.y || 0) + 0 + 0 + 168 + 0 + 371.8 + 0 + 0 + 30.2
                                            ),
                                            pixelHeight: 2134,
                                            pixelWidth: 1920,
                                            positionX: `left`,
                                            positionY: `top`,
                                            src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                            srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                          },
                                        },
                                        OKBdZqY9U: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 2134,
                                            intrinsicWidth: 1920,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                800 +
                                                0 +
                                                0 +
                                                16 +
                                                465 +
                                                0 +
                                                0 +
                                                30.2
                                            ),
                                            pixelHeight: 2134,
                                            pixelWidth: 1920,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `max((${m?.width || `100vw`} - 108px) / 2, 1px)`,
                                            src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                            srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                          },
                                        },
                                        ulIRTz2D_: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 2134,
                                            intrinsicWidth: 1920,
                                            loading: f(
                                              (m?.y || 0) + 0 + 800 + 16 + 0 + 0 + 116 + 0 + 0 + 25
                                            ),
                                            pixelHeight: 2134,
                                            pixelWidth: 1920,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `max((${m?.width || `100vw`} - 60px) / 2, 1px)`,
                                            src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                            srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                          },
                                        },
                                      },
                                      children: o(w, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 2134,
                                          intrinsicWidth: 1920,
                                          loading: f(
                                            (m?.y || 0) + 0 + 0 + 168 + 0 + 395.8 + 0 + 0 + 30.2
                                          ),
                                          pixelHeight: 2134,
                                          pixelWidth: 1920,
                                          positionX: `left`,
                                          positionY: `top`,
                                          src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                          srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                        },
                                        className: `framer-17igxe5`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1gjnhny`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Основная задача`,
                                    }),
                                  }),
                                  className: `framer-h0iteq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `Customer Connect Hub объединяет два зрелых и популярных продукта, iEDI Clearinghouse и Connect Center, которые глубоко интегрированы в повседневные рабочие процессы пользователей. Основная задача UX, объединить эти платформы без нарушения привычных процессов, обеспечивая постепенную миграцию функциональности и создавая прочную основу для дальнейшего развития и углубленной интеграции продукта.`,
                                    }),
                                  }),
                                  className: `framer-1f578n7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1qhtwfx`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: `Моя роль`,
                                    }),
                                  }),
                                  className: `framer-1mb20wb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: [
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: `Я присоединилась к проекту в Q4 2025 года в роли Sr. UX-дизайнера и лидера команды, включающей младшего UX-дизайнера и UX-исследователя. Моей задачей было разработать UX-стратегию объединения двух продуктов, создать единый дизайн и общую информационную архитектуру, которая учитывает существующие рабочие процессы и долгосрочное видение продукта.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: `Мы начали с проведения UX-исследования для определения ключевых пользовательских персон, основных рабочих потоков и областей для быстрых улучшений с высоким эффектом. Результаты исследования позволили сформировать стратегию плавного перехода пользователей на новую платформу к концу 2026 года, сохранив их продуктивность и доверие к продукту.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-xw6zgk`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1ph23fq`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: `Ключевые UX-решения`,
                                    }),
                                  }),
                                  className: `framer-142x7tp`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(_, {
                                  breakpoint: k,
                                  overrides: {
                                    kRIcmfdc9: {
                                      children: o(r, {
                                        children: a(`ul`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          children: [
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                dir: `auto`,
                                                children: `Внедрение лендинга Customer Connect Hub как нейтральной, централизованной точки входа.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                dir: `auto`,
                                                children: `Разработка общего dashboard и рабочего списка для отображения статусов и активности вне зависимости от исходного продукта.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                dir: `auto`,
                                                children: `Настройка прямых переходов в знакомые пользователю инструменты.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                dir: `auto`,
                                                children: `Сохранение существующих рабочих процессов, чтобы избежать сбоев и сохранить доверие пользователей.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: a(`ul`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: [
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Внедрение лендинга Customer Connect Hub как нейтральной, централизованной точки входа.`,
                                            }),
                                          }),
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Разработка общего dashboard и рабочего списка для отображения статусов и активности вне зависимости от исходного продукта.`,
                                            }),
                                          }),
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Настройка прямых переходов в знакомые пользователю инструменты.`,
                                            }),
                                          }),
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Сохранение существующих рабочих процессов, чтобы избежать сбоев и сохранить доверие пользователей.`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-693un`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1ix2s6k`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: `Инструменты`,
                                    }),
                                  }),
                                  className: `framer-26y8j1`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                    }),
                                  }),
                                  className: `framer-ip2adg`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            B() &&
                              a(`div`, {
                                className: `framer-1srp7n8 hidden-1na5ixm hidden-10wtumm hidden-1as8k83`,
                                children: [
                                  o(`div`, {
                                    className: `framer-1vzxhf3`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1ueb92z`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(S, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `VDZ0J7_3q`,
                                    openInNewTab: !1,
                                    scopeId: `aQL_eOTAm`,
                                    children: o(u.a, {
                                      className: `framer-13sug3o framer-1i8cw8e`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-1hnqihk`,
                                        children: a(v, {
                                          className: `framer-1c406rk`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(v, {
                                              className: `framer-97nbpe`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              className: `framer-iabdmw`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-nhn5nl`,
                          children: a(`div`, {
                            className: `framer-9ph3xp`,
                            "data-border": !0,
                            id: V,
                            ref: H,
                            children: [
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: o(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: o(`strong`, {
                                      children: `Пользовательские исследования`,
                                    }),
                                  }),
                                }),
                                className: `framer-4ih330`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(`div`, {
                                className: `framer-1g0f2du`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `С самого начала проекта моя команда тесно сотрудничала с проектным менеджером, чтобы понять инструмент и существующие рабочие процессы. Мы анализировали поведение пользователей на обеих существующих платформах, выявляли болевые точки и шаблоны использования, а также возможности для улучшения. В рамках исследования мы провели анализ существующих пользовательских данных, конкурентный анализ и интервью с пользователями, чтобы глубже понять текущие продукты, их аудиторию и определить наилучший способ их объединения. Эти исследования заложили прочную основу для формирования требований пользователей и проектирования решений, которые учитывают как потребности пользователей, так и бизнес-цели.`,
                                    }),
                                  }),
                                  className: `framer-kaisdo`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-wo507k`,
                                children: [
                                  a(`div`, {
                                    className: `framer-11u9wnk`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, {
                                              children: `Скриншот рабочей сессии: детальный анализ существующих пользовательских данных`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1jeui5m`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: k,
                                        overrides: {
                                          kRIcmfdc9: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2387.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  197.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 3078,
                                              pixelWidth: 8767,
                                              src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                              srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                            },
                                          },
                                          OKBdZqY9U: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2352.6 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  213.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 3078,
                                              pixelWidth: 8767,
                                              sizes: `690px`,
                                              src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                              srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                            },
                                          },
                                          ulIRTz2D_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2286.2 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  213.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 3078,
                                              pixelWidth: 8767,
                                              sizes: `calc(${m?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                              srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2467.4 +
                                                0 +
                                                0 +
                                                32 +
                                                213.5 +
                                                0 +
                                                0 +
                                                0 +
                                                139.5
                                            ),
                                            pixelHeight: 3078,
                                            pixelWidth: 8767,
                                            src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                            srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                          },
                                          className: `framer-4i55bg`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-wcthk1`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, {
                                              children: `Организация ключевых функций по типам пользователей`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1ol3640`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: k,
                                        overrides: {
                                          kRIcmfdc9: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2387.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  197.5 +
                                                  0 +
                                                  387.5 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 11199,
                                              pixelWidth: 12568,
                                              src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                              srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                            },
                                          },
                                          OKBdZqY9U: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2352.6 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  213.5 +
                                                  0 +
                                                  409.5 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 11199,
                                              pixelWidth: 12568,
                                              sizes: `690px`,
                                              src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                              srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                            },
                                          },
                                          ulIRTz2D_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2286.2 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  213.5 +
                                                  0 +
                                                  281.5 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 11199,
                                              pixelWidth: 12568,
                                              sizes: `calc(${m?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                              srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2467.4 +
                                                0 +
                                                0 +
                                                32 +
                                                213.5 +
                                                0 +
                                                473.5 +
                                                0 +
                                                139.5
                                            ),
                                            pixelHeight: 11199,
                                            pixelWidth: 12568,
                                            src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                            srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                          },
                                          className: `framer-1nkwod5`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-pabe1s`,
                                children: [
                                  o(`div`, {
                                    className: `framer-14x9qlf`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: o(`strong`, {
                                            children: `Ключевые инсайты юзабилити, сгруппированные по темам`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-rsetb1`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-109e68`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Доступ` }),
                                          }),
                                        }),
                                        className: `framer-13mu1e5`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: k,
                                        overrides: {
                                          kRIcmfdc9: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2387.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1342.5 +
                                                  0 +
                                                  38.8 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                          OKBdZqY9U: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2352.6 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1405.5 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                          ulIRTz2D_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2286.2 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  952.5 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2467.4 +
                                                0 +
                                                0 +
                                                32 +
                                                1630.5 +
                                                0 +
                                                54.8 +
                                                0 +
                                                40.7
                                            ),
                                            pixelHeight: 1282,
                                            pixelWidth: 2282,
                                            src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                            srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                          },
                                          className: `framer-l3njby`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-1m357mx`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Коммуникации` }),
                                          }),
                                        }),
                                        className: `framer-1mgwcem`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: k,
                                        overrides: {
                                          kRIcmfdc9: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2387.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1342.5 +
                                                  0 +
                                                  468.5 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                          OKBdZqY9U: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2352.6 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1405.5 +
                                                  0 +
                                                  515.5 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                          ulIRTz2D_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2286.2 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  952.5 +
                                                  0 +
                                                  306.5 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2467.4 +
                                                0 +
                                                0 +
                                                32 +
                                                1630.5 +
                                                0 +
                                                612.5 +
                                                0 +
                                                40.7
                                            ),
                                            pixelHeight: 1278,
                                            pixelWidth: 2282,
                                            src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                            srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                          },
                                          className: `framer-13bh7wp`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-ccakx8`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Инновации` }),
                                          }),
                                        }),
                                        className: `framer-jzu9sb`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: k,
                                        overrides: {
                                          kRIcmfdc9: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2387.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1342.5 +
                                                  0 +
                                                  897.2 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                          OKBdZqY9U: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2352.6 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1405.5 +
                                                  0 +
                                                  975.2 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              sizes: `calc(${m?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                          ulIRTz2D_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2286.2 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  952.5 +
                                                  0 +
                                                  558.2 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2467.4 +
                                                0 +
                                                0 +
                                                32 +
                                                1630.5 +
                                                0 +
                                                1169.2 +
                                                0 +
                                                40.7
                                            ),
                                            pixelHeight: 1276,
                                            pixelWidth: 2274,
                                            src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                            srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                          },
                                          className: `framer-1r52ipz`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        o(`div`, {
                          className: `framer-zyblju`,
                          children: a(`div`, {
                            className: `framer-1vy4wwp`,
                            "data-border": !0,
                            id: he,
                            ref: U,
                            children: [
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: o(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: o(`strong`, { children: `Прототипы и макеты` }),
                                  }),
                                }),
                                className: `framer-rzoyij`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Мы спроектировали лендинг Customer Connect Hub как персонализированную точку входа. В верхней части страницы отображаются ключевые показатели дашборда, дающие пользователю наглядный обзор его claims. В нижней части размещены быстрые ссылки на наиболее часто используемые инструменты для управления claims.`,
                                  }),
                                }),
                                className: `framer-ba7trh`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(`div`, {
                                className: `framer-fs74so`,
                                children: [
                                  a(`div`, {
                                    className: `framer-6inntu`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`h3`, {
                                            className: `framer-styles-preset-bdezu4`,
                                            "data-styles-preset": `TWYWOtjjp`,
                                            dir: `auto`,
                                            children: o(`strong`, {
                                              children: `Customer Connect Hub Landing`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1lrtla1`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: [
                                            o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: `В первой итерации лендинга Customer Connect Hub мы сосредоточились на демонстрации нового дашборда. Дашборд показывает ключевые тенденции данных и предоставляет высокоуровневые сводки по всем типам claims, независимо от используемого основного инструмента.`,
                                            }),
                                            o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: `В нижней части экрана пользователи могут воспользоваться быстрыми ссылками для доступа к наиболее часто используемым инструментам управления claims или перейти напрямую в Connect Center или iEDI.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-83flvx`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-17qjf8l`,
                                    children: o(T, {
                                      children: o(C, {
                                        className: `framer-1240azu-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `JfzriZvt5`,
                                        scopeId: `aQL_eOTAm`,
                                        children: o(W, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `JfzriZvt5`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `JfzriZvt5`,
                                          loop: !0,
                                          muted: !0,
                                          objectFit: `scale-down`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/HMV0Je3ipj3Q0Fuo2DlYIa6zw7w.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { width: `100%` },
                                          topLeftRadius: 4,
                                          topRightRadius: 4,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-982uqb`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        dir: `auto`,
                                        children: o(`strong`, {
                                          children: `Customer Connect Hub Dashboard`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-123h415`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: [
                                        o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Дашборд Customer Connect Hub выступает как инструмент быстрого сканирования текущей работы на уровне менеджера, предоставляя целостную картину состояния claims и позволяя оперативно оценить ситуацию без погружения в детали. Одновременно он служит мощным инструментом поиска и фильтрации, позволяя менеджерам и аналитикам быстро находить конкретные заявки или сегментировать claims по любым релевантным критериям.`,
                                        }),
                                        o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `В первой итерации мы сфокусировались на отображении наиболее критичной информации для управления процессом: дашборд дает наглядный обзор текущей нагрузки, помогает быстро выявлять приоритетные зоны и обеспечивает прямой доступ к нужным заявкам, значительно ускоряя их обработку и принятие решений.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-hssf6e`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(`div`, {
                                    className: `framer-1rbd7mv`,
                                    children: o(T, {
                                      children: o(C, {
                                        className: `framer-39mjs0-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `B2wArY7oi`,
                                        scopeId: `aQL_eOTAm`,
                                        children: o(W, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `B2wArY7oi`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `B2wArY7oi`,
                                          loop: !0,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/ltjaiLjvFFg7dDPssiqtshHMzNQ.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { width: `100%` },
                                          topLeftRadius: 4,
                                          topRightRadius: 4,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Ch7Rq.framer-1i8cw8e, .framer-Ch7Rq .framer-1i8cw8e { display: block; }`,
        `.framer-Ch7Rq.framer-1na5ixm { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Ch7Rq .framer-yuhbxu-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-Ch7Rq .framer-65ewut { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-Ch7Rq .framer-12b4j7y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-Ch7Rq .framer-1ubohen { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 0px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-Ch7Rq .framer-1vi9fta { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-Ch7Rq .framer-1p69018, .framer-Ch7Rq .framer-wpsku9, .framer-Ch7Rq .framer-lwfxto, .framer-Ch7Rq .framer-11evksh, .framer-Ch7Rq .framer-829akw, .framer-Ch7Rq .framer-1ueb92z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ch7Rq .framer-1fu46tx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ch7Rq .framer-ajsyt9, .framer-Ch7Rq .framer-1bv4lv8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ch7Rq .framer-hq9oh3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ch7Rq .framer-1425qjy { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-Ch7Rq .framer-7aia9y, .framer-Ch7Rq .framer-5v2bvz, .framer-Ch7Rq .framer-1hnqihk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ch7Rq .framer-1ikp9ft, .framer-Ch7Rq .framer-kadg2t, .framer-Ch7Rq .framer-1c406rk { height: 13px; position: relative; width: 14px; }`,
        `.framer-Ch7Rq .framer-1546ewt, .framer-Ch7Rq .framer-8v25a9, .framer-Ch7Rq .framer-97nbpe { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Ch7Rq .framer-14cv0b4, .framer-Ch7Rq .framer-egaqrn, .framer-Ch7Rq .framer-iabdmw { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Ch7Rq .framer-1fo02nk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-gtfho6, .framer-Ch7Rq .framer-1srp7n8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; width: 100%; z-index: 1; }`,
        `.framer-Ch7Rq .framer-y88u7r, .framer-Ch7Rq .framer-1vzxhf3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ch7Rq .framer-18zjtti, .framer-Ch7Rq .framer-13sug3o { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fdfbf9; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-Ch7Rq .framer-1xs21xk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-c7qg20, .framer-Ch7Rq .framer-g0ugjq, .framer-Ch7Rq .framer-4ajm5s, .framer-Ch7Rq .framer-alg1zx, .framer-Ch7Rq .framer-h0iteq, .framer-Ch7Rq .framer-1f578n7, .framer-Ch7Rq .framer-1mb20wb, .framer-Ch7Rq .framer-xw6zgk, .framer-Ch7Rq .framer-142x7tp, .framer-Ch7Rq .framer-693un, .framer-Ch7Rq .framer-26y8j1, .framer-Ch7Rq .framer-ip2adg, .framer-Ch7Rq .framer-4ih330, .framer-Ch7Rq .framer-kaisdo, .framer-Ch7Rq .framer-ba7trh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ch7Rq .framer-10iaog5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-17m0ba0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ch7Rq .framer-rbdi59, .framer-Ch7Rq .framer-l6iaq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-z3nmgz, .framer-Ch7Rq .framer-1eor35a { aspect-ratio: 1.7866666666666666 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-ip90u7, .framer-Ch7Rq .framer-6scud1 { aspect-ratio: 1.7866666666666666 / 1; bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-Ch7Rq .framer-1dyvxpw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ch7Rq .framer-17igxe5 { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-1gjnhny, .framer-Ch7Rq .framer-1ix2s6k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-1qhtwfx, .framer-Ch7Rq .framer-1g0f2du { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-1ph23fq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-nhn5nl, .framer-Ch7Rq .framer-zyblju { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-9ph3xp { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ch7Rq .framer-wo507k, .framer-Ch7Rq .framer-pabe1s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-11u9wnk, .framer-Ch7Rq .framer-wcthk1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 16px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Ch7Rq .framer-1jeui5m, .framer-Ch7Rq .framer-1ol3640, .framer-Ch7Rq .framer-rsetb1, .framer-Ch7Rq .framer-rzoyij, .framer-Ch7Rq .framer-1lrtla1, .framer-Ch7Rq .framer-123h415 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-Ch7Rq .framer-4i55bg, .framer-Ch7Rq .framer-l3njby, .framer-Ch7Rq .framer-13bh7wp, .framer-Ch7Rq .framer-1r52ipz { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-1nkwod5 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-14x9qlf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-109e68, .framer-Ch7Rq .framer-1m357mx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 16px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Ch7Rq .framer-13mu1e5, .framer-Ch7Rq .framer-1mgwcem, .framer-Ch7Rq .framer-jzu9sb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }`,
        `.framer-Ch7Rq .framer-ccakx8, .framer-Ch7Rq .framer-982uqb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Ch7Rq .framer-1vy4wwp { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 0px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ch7Rq .framer-fs74so { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Ch7Rq .framer-6inntu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-83flvx, .framer-Ch7Rq .framer-hssf6e { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ch7Rq .framer-17qjf8l, .framer-Ch7Rq .framer-1rbd7mv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ch7Rq .framer-1240azu-container, .framer-Ch7Rq .framer-39mjs0-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...V,
        ...ve,
        ...F,
        ...R,
        ...P,
        ...H,
        ...Ce,
        ...De,
        `.framer-Ch7Rq[data-border="true"]::after, .framer-Ch7Rq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-Ch7Rq.framer-1na5ixm { width: 1240px; } .framer-Ch7Rq .framer-1fo02nk { gap: 16px; justify-content: flex-start; } .framer-Ch7Rq .framer-1xs21xk, .framer-Ch7Rq .framer-1gjnhny, .framer-Ch7Rq .framer-1qhtwfx, .framer-Ch7Rq .framer-1ph23fq, .framer-Ch7Rq .framer-1g0f2du, .framer-Ch7Rq .framer-wo507k, .framer-Ch7Rq .framer-pabe1s { gap: 8px; } .framer-Ch7Rq .framer-9ph3xp { gap: 16px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-Ch7Rq.framer-1na5ixm { flex-direction: column; width: 810px; } .framer-Ch7Rq .framer-yuhbxu-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-Ch7Rq .framer-65ewut { flex: none; order: 1; overflow: auto; padding: 0px 0px 32px 0px; width: 100%; } .framer-Ch7Rq .framer-1fo02nk { order: 1; padding: 16px 48px 0px 48px; } .framer-Ch7Rq .framer-1xs21xk, .framer-Ch7Rq .framer-1gjnhny, .framer-Ch7Rq .framer-1qhtwfx, .framer-Ch7Rq .framer-1ph23fq, .framer-Ch7Rq .framer-1ix2s6k { gap: 8px; } .framer-Ch7Rq .framer-g0ugjq { order: 2; } .framer-Ch7Rq .framer-4ajm5s { order: 1; } .framer-Ch7Rq .framer-nhn5nl { order: 2; padding: 0px 0px 0px 32px; } .framer-Ch7Rq .framer-9ph3xp { padding: 32px 48px 24px 16px; } .framer-Ch7Rq .framer-wo507k, .framer-Ch7Rq .framer-pabe1s { overflow: var(--overflow-clip-fallback, clip); } .framer-Ch7Rq .framer-4i55bg, .framer-Ch7Rq .framer-1nkwod5 { width: 690px; } .framer-Ch7Rq .framer-zyblju { flex-direction: row; order: 3; padding: 0px 0px 0px 32px; } .framer-Ch7Rq .framer-1vy4wwp { flex: 1 0 0px; padding: 32px 48px 0px 16px; width: 1px; } .framer-Ch7Rq .framer-17qjf8l, .framer-Ch7Rq .framer-1rbd7mv { flex-direction: column; } .framer-Ch7Rq .framer-1240azu-container, .framer-Ch7Rq .framer-39mjs0-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-Ch7Rq.framer-1na5ixm { flex-direction: column; width: 390px; } .framer-Ch7Rq .framer-yuhbxu-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-Ch7Rq .framer-65ewut { flex: none; order: 1; overflow: auto; padding: 16px 0px 32px 0px; width: 100%; } .framer-Ch7Rq .framer-1fo02nk { gap: 16px; padding: 0px 24px 0px 24px; } .framer-Ch7Rq .framer-1xs21xk { gap: 8px; order: 4; } .framer-Ch7Rq .framer-alg1zx { order: 2; } .framer-Ch7Rq .framer-10iaog5 { order: 3; } .framer-Ch7Rq .framer-1gjnhny { gap: 8px; order: 5; } .framer-Ch7Rq .framer-1qhtwfx { order: 6; } .framer-Ch7Rq .framer-1ph23fq { order: 7; } .framer-Ch7Rq .framer-1ix2s6k { gap: 8px; order: 8; } .framer-Ch7Rq .framer-1srp7n8 { order: 1; } .framer-Ch7Rq .framer-nhn5nl, .framer-Ch7Rq .framer-zyblju { padding: 0px 0px 0px 16px; } .framer-Ch7Rq .framer-9ph3xp { padding: 16px 24px 24px 8px; } .framer-Ch7Rq .framer-1g0f2du { gap: 8px; } .framer-Ch7Rq .framer-14x9qlf { padding: 0px; } .framer-Ch7Rq .framer-1vy4wwp { padding: 16px 24px 0px 8px; } .framer-Ch7Rq .framer-17qjf8l, .framer-Ch7Rq .framer-1rbd7mv { flex-direction: column; } .framer-Ch7Rq .framer-1240azu-container, .framer-Ch7Rq .framer-39mjs0-container { flex: none; width: 100%; }}`,
      ],
      `framer-Ch7Rq`
    )),
    (Q.displayName = `Portfolio / Connecthub`),
    (Q.defaultProps = { height: 7343.5, width: 1440 }),
    D(
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
          ],
        },
        ...G,
        ...K,
        ...x(he),
        ...x(ye),
        ...x(L),
        ...x(de),
        ...x(M),
        ...x(U),
        ...x(we),
        ...x(Oe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => m([() => O(I, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraQL_eOTAm`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"kRIcmfdc9":{"layout":["fixed","auto"]},"OKBdZqY9U":{"layout":["fixed","auto"]},"ulIRTz2D_":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `7343.5`,
            framerAcceptsLayoutTemplate: `false`,
            framerScrollSections: `{"mEW_aRsFW":{"pattern":":mEW_aRsFW","name":"research"},"LzK9Rer8f":{"pattern":":LzK9Rer8f","name":"research"},"XnacIMfmh":{"pattern":":XnacIMfmh","name":"prototype"}}`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1440`,
            framerResponsiveScreen: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Y as queryParamNames };
//# sourceMappingURL=FL-_LY07GRkq-BrxJP2MiKiOcti1MURdMqVg7pXXS_E.DdUH69q8.mjs.map
