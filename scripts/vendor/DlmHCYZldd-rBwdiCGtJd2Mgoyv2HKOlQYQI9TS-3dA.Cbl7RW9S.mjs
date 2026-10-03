import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  N as r,
  S as i,
  k as a,
  l as o,
  o as s,
  p as c,
  s as l,
  y as u,
} from "./react.BKyTRiZ3.mjs";
import { A as d, a as ee, r as te, t as f } from "./motion.AUYMciny.mjs";
import {
  $ as ne,
  A as p,
  L as re,
  M as m,
  Q as ie,
  S as h,
  W as g,
  X as ae,
  a as _,
  ct as v,
  f as y,
  g as b,
  h as x,
  it as oe,
  j as S,
  l as se,
  n as C,
  nt as ce,
  rt as le,
  s as w,
  t as T,
  tt as E,
  v as D,
  w as O,
} from "./framer.CfbrMSxG.mjs";
import {
  d as k,
  f as ue,
  g as A,
  h as j,
  i as M,
  l as de,
  m as N,
  p as fe,
  r as P,
  u as F,
} from "./shared-lib.f3R8fmkt.mjs";
import {
  a as pe,
  c as I,
  i as L,
  n as R,
  o as z,
  r as me,
  s as he,
  t as ge,
} from "./U3NyadGC3.BwBuOktC.mjs";
import { n as _e, t as B } from "./Video.KjNbylVS.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./SDQdvccR0.C-vUhudJ.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./Cj8wzhVDX.Kg5aTz3a.mjs";
import Ee, { t as De } from "./emCPP2v-VU4afWzsUCQC6qBRWVwi1xQh3Y8v0C-N9N0.idOzmJeF.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (l(),
    re(),
    f(),
    n(),
    _e(),
    M(),
    Se(),
    A(),
    ue(),
    ve(),
    I(),
    L(),
    De(),
    (V = p(P)),
    (H = p(B)),
    (U = {
      aC_ckjuO_: `(min-width: 1240px) and (max-width: 1439.98px)`,
      C6xnyR_QF: `(max-width: 809.98px)`,
      vl4rOFLph: `(min-width: 810px) and (max-width: 1239.98px)`,
      XEvdDV4Kn: `(min-width: 1440px)`,
    }),
    (W = []),
    (G = `framer-IsTTi`),
    (K = {
      aC_ckjuO_: `framer-v-1xh15p9`,
      C6xnyR_QF: `framer-v-wwrc2o`,
      vl4rOFLph: `framer-v-bg9cke`,
      XEvdDV4Kn: `framer-v-1deck5t`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `XEvdDV4Kn`, Laptop: `aC_ckjuO_`, Phone: `C6xnyR_QF`, Tablet: `vl4rOFLph` }),
    (X = ({ value: e }) =>
      E()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `XEvdDV4Kn`,
    })),
    (Q = v(
      c(function (e, n) {
        let c = u(null),
          l = n ?? c,
          f = i(),
          { activeLocale: p, setLocale: re } = ce(),
          g = ae(),
          { style: v, className: S, layoutId: E, variant: D, ...O } = Z(e);
        le(t(() => Ee({}, p), [p]));
        let [k, ue] = ne(D, U, !1),
          A = h(G, ge, de, fe, xe, pe, Te),
          j = a(_)?.isLayoutTemplate,
          M = !!a(ee)?.transition?.layout,
          N = q(j, M),
          F = oe(`SOKv0e65U`),
          I = u(null);
        return (
          ie({}),
          s(_.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Y,
              primaryVariantId: `XEvdDV4Kn`,
              variantClassNames: K,
            },
            children: o(te, {
              id: E ?? f,
              children: [
                s(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                o(d.div, {
                  ...O,
                  className: h(A, `framer-1deck5t`, S),
                  ref: l,
                  style: { ...v },
                  children: [
                    s(y, {
                      breakpoint: k,
                      overrides: {
                        C6xnyR_QF: {
                          height: 800,
                          width: g?.width || `100vw`,
                          y: (g?.y || 0) + 0 + 0,
                        },
                        vl4rOFLph: {
                          height: 800,
                          width: g?.width || `100vw`,
                          y: (g?.y || 0) + 0 + 0,
                        },
                      },
                      children: s(T, {
                        height: 1e3,
                        y: (g?.y || 0) + 0,
                        children: s(C, {
                          className: `framer-10v1pap-container`,
                          layout: N,
                          nodeId: `f9Wgccwnf`,
                          scopeId: `Q70j7ZVMn`,
                          children: s(y, {
                            breakpoint: k,
                            overrides: {
                              C6xnyR_QF: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                              vl4rOFLph: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                            },
                            children: s(P, {
                              height: `100%`,
                              id: `f9Wgccwnf`,
                              layoutId: `f9Wgccwnf`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    s(d.div, {
                      className: `framer-13a5423`,
                      layout: N,
                      children: o(`div`, {
                        className: `framer-1t4wolm`,
                        children: [
                          s(`div`, {
                            className: `framer-1sopcbt`,
                            children: o(`div`, {
                              className: `framer-58iv7j`,
                              children: [
                                s(x, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h1`, {
                                      className: `framer-styles-preset-p50exy`,
                                      "data-styles-preset": `U3NyadGC3`,
                                      children: `RTS (Real Time Settlement)`,
                                    }),
                                  }),
                                  className: `framer-mw943p`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(se, {
                                  href: { webPageId: `v0NP7rg_A` },
                                  motionChild: !0,
                                  nodeId: `GAlevKpVx`,
                                  openInNewTab: !1,
                                  scopeId: `Q70j7ZVMn`,
                                  children: s(y, {
                                    breakpoint: k,
                                    overrides: {
                                      C6xnyR_QF: { "data-border": !0 },
                                      vl4rOFLph: { "data-border": !0 },
                                    },
                                    children: s(d.a, {
                                      className: `framer-vdoori framer-ztzgb5`,
                                      "data-framer-name": `Button`,
                                      children: s(`div`, {
                                        className: `framer-1y6iklx`,
                                        children: s(y, {
                                          breakpoint: k,
                                          overrides: {
                                            C6xnyR_QF: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                            vl4rOFLph: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                          },
                                          children: o(b, {
                                            className: `framer-1cynp0p`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              s(b, {
                                                className: `framer-1rg6pnp`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              s(b, {
                                                className: `framer-1ucwxx1`,
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
                                }),
                              ],
                            }),
                          }),
                          o(`div`, {
                            className: `framer-1is7md9`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    children: s(`strong`, { children: `Обзор проекта` }),
                                  }),
                                }),
                                className: `framer-1kelhhe`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: `RTS - это комплекс медицинских программ с интегрированным искусственным интеллектом, разработанный для снижения административной нагрузки, связанной с клинической документацией, ведением заметок и управлением страховыми заявками.`,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: `RTS включает в себя множество программ, я работала над двумя из них: Chart Advisor и Inquiry Advisor.`,
                                    }),
                                    o(`ul`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: [
                                        s(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: [
                                              s(`strong`, { children: `Chart Advisor` }),
                                              ` - позволяет медицинским специалистам записывать разговоры с пациентами или диктовать заметки, которые затем обрабатываются ИИ, и преобразуются в структурированные, соответствующие требованиям страховых компаний медицинские карты и проверяются на полноту и точность.`,
                                            ],
                                          }),
                                        }),
                                        s(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: [
                                              s(`strong`, { children: `Inquiry Advisor` }),
                                              ` - помогает управлять страховыми заявками, заранее проверяя их на покрытие. Это позволяет медицинским специалистам составлять более эффективные планы лечения, которые гарантированно покрываются страховкой. `,
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: `Вместе инструменты RTS автоматизируют рутинные задачи, минимизируют ошибки и повышают эффективность на всех этапах работы с документацией и оплатой. За первый квартал тестирования RTS мы снизили административную нагрузку и повысили скорость обработки страховых заявок на 28%, а количество отклонённых заявок снизилось до нуля.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1xfz5k4`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(y, {
                            breakpoint: k,
                            overrides: {
                              aC_ckjuO_: {
                                children: s(r, {
                                  children: s(`h3`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS02MDA=`,
                                      "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.4em`,
                                    },
                                    children: s(`mark`, {
                                      style: { "--framer-text-background-radius": `0px` },
                                      children: `Основные макеты`,
                                    }),
                                  }),
                                }),
                              },
                              C6xnyR_QF: {
                                children: s(r, {
                                  children: s(`h3`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS02MDA=`,
                                      "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.4em`,
                                    },
                                    children: s(`mark`, {
                                      style: { "--framer-text-background-radius": `0px` },
                                      children: `Основные макеты`,
                                    }),
                                  }),
                                }),
                              },
                              vl4rOFLph: {
                                children: s(r, {
                                  children: s(`h3`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS02MDA=`,
                                      "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.4em`,
                                    },
                                    children: s(`mark`, {
                                      style: { "--framer-text-background-radius": `0px` },
                                      children: `Основные макеты`,
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: s(x, {
                              __fromCanvasComponent: !0,
                              children: s(r, {
                                children: s(`h3`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS02MDA=`,
                                    "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.4)`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `0.02em`,
                                    "--framer-line-height": `1.4em`,
                                  },
                                  children: s(`mark`, {
                                    style: { "--framer-text-background-radius": `0px` },
                                    children: `Основные макеты`,
                                  }),
                                }),
                              }),
                              className: `framer-18k1vil`,
                              fonts: [`GF;Stack Sans Headline-600`],
                              id: F,
                              ref: I,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-1i00fqp`,
                            children: o(`div`, {
                              className: `framer-1n0upun`,
                              children: [
                                o(`div`, {
                                  className: `framer-1nl6yx3`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-13n8ged`,
                                      children: [
                                        s(y, {
                                          breakpoint: k,
                                          overrides: {
                                            C6xnyR_QF: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: s(`strong`, {
                                                    children: `Chart Advisor Landing`,
                                                  }),
                                                }),
                                              }),
                                              fonts: [`Inter`, `Inter-Bold`],
                                            },
                                          },
                                          children: s(x, {
                                            __fromCanvasComponent: !0,
                                            children: s(r, {
                                              children: s(`h6`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.3em`,
                                                },
                                                children: s(`strong`, {
                                                  children: `Chart Advisor Landing`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-fv3khu`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-bik27d`,
                                          children: s(y, {
                                            breakpoint: k,
                                            overrides: {
                                              aC_ckjuO_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 670,
                                                  intrinsicWidth: 1028,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      898.1 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 670,
                                                  pixelWidth: 1028,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670`,
                                                  srcSet: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=512&width=1028&height=670 512w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=1024&width=1028&height=670 1024w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670 1028w`,
                                                },
                                              },
                                              C6xnyR_QF: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 670,
                                                  intrinsicWidth: 1028,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      25 +
                                                      0
                                                  ),
                                                  pixelHeight: 670,
                                                  pixelWidth: 1028,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670`,
                                                  srcSet: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=512&width=1028&height=670 512w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=1024&width=1028&height=670 1024w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670 1028w`,
                                                },
                                              },
                                              vl4rOFLph: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 670,
                                                  intrinsicWidth: 1028,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 670,
                                                  pixelWidth: 1028,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670`,
                                                  srcSet: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=512&width=1028&height=670 512w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=1024&width=1028&height=670 1024w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670 1028w`,
                                                },
                                              },
                                            },
                                            children: s(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 670,
                                                intrinsicWidth: 1028,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    902.3 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    30.2 +
                                                    0
                                                ),
                                                pixelHeight: 670,
                                                pixelWidth: 1028,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670`,
                                                srcSet: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=512&width=1028&height=670 512w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=1024&width=1028&height=670 1024w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670 1028w`,
                                              },
                                              className: `framer-ly5loq`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-1orhbra`,
                                      children: [
                                        s(y, {
                                          breakpoint: k,
                                          overrides: {
                                            C6xnyR_QF: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `rgb(0, 0, 0)`,
                                                  },
                                                  children: s(`strong`, {
                                                    children: `ИИ проверяет результат`,
                                                  }),
                                                }),
                                              }),
                                              fonts: [`Inter`, `Inter-Bold`],
                                            },
                                          },
                                          children: s(x, {
                                            __fromCanvasComponent: !0,
                                            children: s(r, {
                                              children: s(`h6`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.3em`,
                                                },
                                                children: s(`strong`, {
                                                  children: `ИИ проверяет результат`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-11qpv0t`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-lwffyi`,
                                          children: s(y, {
                                            breakpoint: k,
                                            overrides: {
                                              aC_ckjuO_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 653,
                                                  intrinsicWidth: 982,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      898.1 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 653,
                                                  pixelWidth: 982,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653`,
                                                  srcSet: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?scale-down-to=512&width=982&height=653 512w,https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653 982w`,
                                                },
                                              },
                                              C6xnyR_QF: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 653,
                                                  intrinsicWidth: 982,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      25 +
                                                      0
                                                  ),
                                                  pixelHeight: 653,
                                                  pixelWidth: 982,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653`,
                                                  srcSet: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?scale-down-to=512&width=982&height=653 512w,https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653 982w`,
                                                },
                                              },
                                              vl4rOFLph: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 653,
                                                  intrinsicWidth: 982,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 653,
                                                  pixelWidth: 982,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653`,
                                                  srcSet: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?scale-down-to=512&width=982&height=653 512w,https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653 982w`,
                                                },
                                              },
                                            },
                                            children: s(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 653,
                                                intrinsicWidth: 982,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    902.3 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    30.2 +
                                                    0
                                                ),
                                                pixelHeight: 653,
                                                pixelWidth: 982,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653`,
                                                srcSet: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?scale-down-to=512&width=982&height=653 512w,https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653 982w`,
                                              },
                                              className: `framer-qym9xq`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-1w8b14c`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-v4nnbm`,
                                      children: [
                                        s(y, {
                                          breakpoint: k,
                                          overrides: {
                                            C6xnyR_QF: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: s(`strong`, {
                                                    children: `Summary Note`,
                                                  }),
                                                }),
                                              }),
                                              fonts: [`Inter`, `Inter-Bold`],
                                            },
                                          },
                                          children: s(x, {
                                            __fromCanvasComponent: !0,
                                            children: s(r, {
                                              children: s(`h6`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.3em`,
                                                },
                                                children: s(`strong`, { children: `Summary Note` }),
                                              }),
                                            }),
                                            className: `framer-vhcajn`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-ltx32u`,
                                          children: s(y, {
                                            breakpoint: k,
                                            overrides: {
                                              aC_ckjuO_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 599,
                                                  intrinsicWidth: 886,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      898.1 +
                                                      0 +
                                                      0 +
                                                      264.2 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 599,
                                                  pixelWidth: 886,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599`,
                                                  srcSet: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?scale-down-to=512&width=886&height=599 512w,https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599 886w`,
                                                },
                                              },
                                              C6xnyR_QF: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 599,
                                                  intrinsicWidth: 886,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      149 +
                                                      0 +
                                                      0 +
                                                      25 +
                                                      0
                                                  ),
                                                  pixelHeight: 599,
                                                  pixelWidth: 886,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599`,
                                                  srcSet: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?scale-down-to=512&width=886&height=599 512w,https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599 886w`,
                                                },
                                              },
                                              vl4rOFLph: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 599,
                                                  intrinsicWidth: 886,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      278.2 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 599,
                                                  pixelWidth: 886,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599`,
                                                  srcSet: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?scale-down-to=512&width=886&height=599 512w,https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599 886w`,
                                                },
                                              },
                                            },
                                            children: s(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 599,
                                                intrinsicWidth: 886,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    902.3 +
                                                    0 +
                                                    0 +
                                                    330.2 +
                                                    0 +
                                                    0 +
                                                    30.2 +
                                                    0
                                                ),
                                                pixelHeight: 599,
                                                pixelWidth: 886,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599`,
                                                srcSet: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?scale-down-to=512&width=886&height=599 512w,https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599 886w`,
                                              },
                                              className: `framer-1fcvxqz`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-1017ub3`,
                                      children: [
                                        s(y, {
                                          breakpoint: k,
                                          overrides: {
                                            C6xnyR_QF: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: s(`strong`, {
                                                    children: `Inquiry Advisor Checkout`,
                                                  }),
                                                }),
                                              }),
                                              fonts: [`Inter`, `Inter-Bold`],
                                            },
                                          },
                                          children: s(x, {
                                            __fromCanvasComponent: !0,
                                            children: s(r, {
                                              children: s(`h6`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.3em`,
                                                },
                                                children: s(`strong`, {
                                                  children: `Inquiry Advisor Checkout`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-ziasej`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-a4uny4`,
                                          children: s(y, {
                                            breakpoint: k,
                                            overrides: {
                                              aC_ckjuO_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 632,
                                                  intrinsicWidth: 966,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      898.1 +
                                                      0 +
                                                      0 +
                                                      264.2 +
                                                      3.5 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 632,
                                                  pixelWidth: 966,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632`,
                                                  srcSet: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?scale-down-to=512&width=966&height=632 512w,https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632 966w`,
                                                },
                                              },
                                              C6xnyR_QF: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 632,
                                                  intrinsicWidth: 966,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      149 +
                                                      1.5 +
                                                      0 +
                                                      25 +
                                                      0
                                                  ),
                                                  pixelHeight: 632,
                                                  pixelWidth: 966,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632`,
                                                  srcSet: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?scale-down-to=512&width=966&height=632 512w,https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632 966w`,
                                                },
                                              },
                                              vl4rOFLph: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 632,
                                                  intrinsicWidth: 966,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      847.1 +
                                                      0 +
                                                      0 +
                                                      278.2 +
                                                      4 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 632,
                                                  pixelWidth: 966,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${g?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632`,
                                                  srcSet: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?scale-down-to=512&width=966&height=632 512w,https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632 966w`,
                                                },
                                              },
                                            },
                                            children: s(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 632,
                                                intrinsicWidth: 966,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    902.3 +
                                                    0 +
                                                    0 +
                                                    330.2 +
                                                    4.5 +
                                                    0 +
                                                    30.2 +
                                                    0
                                                ),
                                                pixelHeight: 632,
                                                pixelWidth: 966,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632`,
                                                srcSet: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?scale-down-to=512&width=966&height=632 512w,https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632 966w`,
                                              },
                                              className: `framer-sgnllk`,
                                              fitImageDimension: `height`,
                                            }),
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
                            className: `framer-4ah8f5`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-bdezu4`,
                                    "data-styles-preset": `TWYWOtjjp`,
                                    children: s(`strong`, { children: `Основная задача` }),
                                  }),
                                }),
                                className: `framer-1m9fs6`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    children: [
                                      `Сделать удобный и запоминающийся UX в сжатые сроки.`,
                                      s(`br`, {}),
                                      `У нас было всего две недели, чтобы разработать прототип полного рабочего сценария для Chart Advisor. Цель заключалась в том, чтобы показать чистый, современный интерфейс, который выделялся бы среди конкурентов, оставаясь при этом простым и удобным для пользователей.`,
                                    ],
                                  }),
                                }),
                                className: `framer-1onquj1`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-tenccc`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-bdezu4`,
                                    "data-styles-preset": `TWYWOtjjp`,
                                    children: s(`strong`, { children: `Моя роль` }),
                                  }),
                                }),
                                className: `framer-zze9c`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    children: `Как старший UX-дизайнер, я работала в тесном контакте с продуктовым менеджером (PM), UI-дизайнером и разработчиками, чтобы сделать RTS удобным и понятным для врачей, медсестёр и администраторов. Моя основная задача создать логичную и простую для понимания архитектуру сайта и спроектировать общие рабочие процессы так, чтобы медицинский персонал мог быстро и легко работать с приложением в разных условиях, не запутываясь в сотнях страниц и кнопок.`,
                                  }),
                                }),
                                className: `framer-1fc6mce`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-bou9ba`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-bdezu4`,
                                    "data-styles-preset": `TWYWOtjjp`,
                                    children: s(`strong`, { children: `Решение` }),
                                  }),
                                }),
                                className: `framer-u3hgui`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    children: `Протестировав несколько вариантов дизайна, мы нашли баланс между простотой и современным дизайном. Интерфейс стал понятным: мы упростили его и дополнили функциями ИИ так, чтобы пользователям было комфортно и легко работать.`,
                                  }),
                                }),
                                className: `framer-17ijjhs`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-1tvgu78`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-bdezu4`,
                                    "data-styles-preset": `TWYWOtjjp`,
                                    children: s(`strong`, { children: `Ключевые UX-решения` }),
                                  }),
                                }),
                                className: `framer-h6quqi`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: o(`ul`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    children: [
                                      s(`li`, {
                                        "data-preset-tag": `p`,
                                        children: s(`p`, {
                                          children: `Проектирование workflow с опорой на существующие рабочие процессы и максимальным упрощением интерфейса для быстрого и безболезненного внедрения продукта.`,
                                        }),
                                      }),
                                      s(`li`, {
                                        "data-preset-tag": `p`,
                                        children: s(`p`, {
                                          children: `Использование ИИ для упрощения проверки данных и подсветки только тех областей, которые требуют внимания провайдера.`,
                                        }),
                                      }),
                                      s(`li`, {
                                        "data-preset-tag": `p`,
                                        children: s(`p`, {
                                          children: `Создание новой дизайн-системы даже в условиях сжатых сроков, чтобы обеспечить единый визуальный язык и масштабируемость решений.`,
                                        }),
                                      }),
                                      s(`li`, {
                                        "data-preset-tag": `p`,
                                        children: s(`p`, {
                                          children: `Снижение когнитивной нагрузки за счёт чёткой структуры информации, логичной организации данных, меньшего количества шагов и предсказуемых взаимодействий.`,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-jibg47`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-vhbz56`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-bdezu4`,
                                    "data-styles-preset": `TWYWOtjjp`,
                                    children: s(`strong`, { children: `Инструменты` }),
                                  }),
                                }),
                                className: `framer-ijfkig`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: [
                                        s(`strong`, { children: `Figma` }),
                                        `: для создания макетов и прототипов.`,
                                      ],
                                    }),
                                    o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: [
                                        s(`strong`, { children: `FigJam` }),
                                        `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                      ],
                                    }),
                                    o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: [
                                        s(`strong`, { children: `Microsoft Loop` }),
                                        `: для ведения документации, координации команды и организации рабочего процесса.`,
                                      ],
                                    }),
                                  ],
                                }),
                                className: `framer-a9u2hd`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-4dnlqv`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    children: s(`strong`, { children: `Chart Advisor` }),
                                  }),
                                }),
                                className: `framer-vyi8yd`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `Chart Advisor это ключевой продукт в составе пакета RTS, разработанный для того, чтобы помочь врачам быстро и эффективно создавать и организававать клинические записи. Chart Advisor позволяет врачу записать беседу с пациентом или надиктовывать заметки, которые ИИ автоматически формирует в структурированную медицинскую запись в нужном формате, значительно сокращая время потраченное на правильное оформление бумаг и снимая эту нагрузку с врача.`,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `С точки зрения UX продукт спроектирован так, чтобы пользователь всегда оставался в центре процесса и контролировал всё происходящее, при этом освобождая себя от рутинных операций. Мы применили принцип постепенного раскрытия информации: ИИ предлагает контент слоями, который удобно просматривать и редактировать по частям. Заметки полностью редактируемы, врач может быстро просмотреть их и внести правки, не теряя ритма работы. Контекстные подсказки и встроенные уведомления помогают сосредоточиться и решать проблемы именно там, где они возникают. Рекомендации по кодам появляются только после завершения заметки, что укрепляет доверие и логично выстраивает последовательность действий.`,
                                    }),
                                    o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: [
                                        s(`strong`, { children: `Результат` }),
                                        ` - более гибкий и умный процесс документации, где ИИ не просто подсказывает, но действительно берёт на себя часть работы, а врач управляет и проверяет результат. Так мы переосмыслили оформление медицинских записей как настоящую коллаборацию человеческого опыта и машинной точности.`,
                                      ],
                                    }),
                                  ],
                                }),
                                className: `framer-1smqav1`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(`div`, {
                                className: `framer-baiqco`,
                                children: [
                                  s(`div`, {
                                    className: `framer-15l1rrq`,
                                    children: s(x, {
                                      __fromCanvasComponent: !0,
                                      children: s(r, {
                                        children: s(`p`, {
                                          className: `framer-styles-preset-dnzj83`,
                                          "data-styles-preset": `Cj8wzhVDX`,
                                          children: `Прототип Chart Advisor демонстрирует, как врач начинает свой день с чёткого и структурированного списка сегодняшних приёмов. Ближайший приём выделен в левом верхнем углу для быстрого доступа, а справа отображается полный список встреч с удобными фильтрами. Из этого списка врач выбирает следующего пациента и запрашивает у него разрешение на запись визита; после того как пациент даёт согласие, врач начинает запись разговора. После визита Chart Advisor автоматически формирует готовую к использованию медицинскую запись на основе записанного разговора и выделяет недостающие или некорректные данные для проверки. Если разрешение на запись не получено, врач может продиктовать или ввести заметки вручную после приёма и всё равно пропустить их через Physician Advisor для правильного форматирования и проверки точности и полноты данных. Затем врач быстро вносит правки, выбирает соответствующий медицинский код и отправляет запись в страховое агентство для оплаты.`,
                                        }),
                                      }),
                                      className: `framer-l8c8dp`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-k8gs6`,
                                    children: s(T, {
                                      children: s(C, {
                                        className: `framer-1oq314n-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `kFwKcjlRV`,
                                        scopeId: `Q70j7ZVMn`,
                                        children: s(B, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `kFwKcjlRV`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `kFwKcjlRV`,
                                          loop: !0,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/A0gpAJiVvoGjjXOENoPJcLpcg.mp4`,
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
                          o(`div`, {
                            className: `framer-j2b4nt`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    children: s(`strong`, { children: `Inquiry Advisor` }),
                                  }),
                                }),
                                className: `framer-u9zxcl`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: [
                                        `Второй ключевой программой в составе пакета RTS является `,
                                        s(`strong`, { children: `Inquiry Advisor` }),
                                        `. Эта программа даёт медицинским специалистам возможность заранее проверить покрытие медицинских процедур с помощью ИИ. При этом не требуется никаких дополнительных действий со стороны медицинских сотрудников. После визита пациента система автоматически анализирует отправленную документацию с помощью ИИ, выявляя возможные проблемы - например, неполные данные или несоответствия с предыдущими записями - которые могут привести к отклонению заявки. Если проблема обнаружена, заявке присваивается статус «Вероятно отклонено», а врач получает понятное объяснение причины и возможность исправить её до отправки. Первые пользователи инструмента отметили почти полное устранение типичных человеческих ошибок, таких как опечатки в именах или неверные данные о страховке. Это привело к значительному росту доли одобренных заявок и заметному снижению административной нагрузки.`,
                                      ],
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: `Оптимизируя UX, мы сделали акцент на ясность интерфейса и снижении когнитивной нагрузки. В новой версии реализована централизованная рабочая лента с фильтрацией, чтобы врачи сразу видели, какие заявки требуют внимания и почему. Встроенные индикаторы ошибок и контекстные подсказки помогают быстро устранять проблемы без лишних переключений между экранами. Показывая только актуальную информацию в нужный момент, мы упростили процесс принятия решений и позволили врачам сосредоточиться на решении задач, а не на поиске данных.`,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: `С Inquiry Advisor управление заявками переходит от реактивного исправления ошибок к проактивной их оптимизации - помогая специалистам предотвращать проблемы ещё до отклонения заявки и сохранять уверенность и контроль на каждом этапе.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1yermst`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(`div`, {
                                className: `framer-16fbxgc`,
                                children: [
                                  s(`div`, {
                                    className: `framer-x12osg`,
                                    children: s(x, {
                                      __fromCanvasComponent: !0,
                                      children: s(r, {
                                        children: s(`p`, {
                                          className: `framer-styles-preset-dnzj83`,
                                          "data-styles-preset": `Cj8wzhVDX`,
                                          children: `Прототип Inquiries Advisor показывает полный пользовательский сценарий - от входа в систему и выбора инструмента Inquiries до детального управления страховыми заявками. Внутри Inquiries Advisor пользователю доступен упорядоченный обзор всех заявок, с возможностью быстро выделить те, что отмечены как «Вероятно отклонено», и проверить их на наличие ошибок. Удобные фильтры позволяют сортировать заявки по статусу ответа, по этапу обслуживания (до или после услуги), по типу услуги, типу страховки и многим другим параметрам. На экране также отображаются ключевые показатели: количество потенциальных отклонений, их общая предполагаемая стоимость и общая сумма ожидающих выплат. При переходе в детали заявки пользователь может просмотреть выполненные услуги, выявленные системой ошибки, а также заметки и историю заявки. Всё это помогает быстрее и точнее обрабатывать страховые выплаты.`,
                                        }),
                                      }),
                                      className: `framer-16p4gw5`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-j5q5zq`,
                                    children: s(T, {
                                      children: s(C, {
                                        className: `framer-1n22h0r-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `LIxk3lnrC`,
                                        scopeId: `Q70j7ZVMn`,
                                        children: s(B, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `LIxk3lnrC`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `LIxk3lnrC`,
                                          loop: !0,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/NJoecsyzBqLLMIqVVb9Tra9NFl0.mp4`,
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
                          o(`div`, {
                            className: `framer-1s1cp86`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    children: s(`strong`, { children: `Лэндинг` }),
                                  }),
                                }),
                                className: `framer-1m7wqgz`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    children: `Лэндинг был спроектирован как единая точка входа для всего продуктового пакета RTS, предоставляя пользователям централизованный обзор всех доступных решений. Он позволяет легко настраивать подписку, выбирая любое сочетание продуктов под свои задачи. Если пользователь подключает несколько продуктов, лэндинг может использоваться как главная страница, упрощая навигацию по всему пакету. Пользователи также могут назначить предпочитаемый продукт по умолчанию и быстро переключаться между продуктами через глобальные настройки навигации.`,
                                  }),
                                }),
                                className: `framer-1vqeicj`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(`div`, {
                                className: `framer-1x07uhn`,
                                children: s(y, {
                                  breakpoint: k,
                                  overrides: {
                                    aC_ckjuO_: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 669,
                                        intrinsicWidth: 1018,
                                        loading: m(
                                          (g?.y || 0) + 0 + 68 + 0 + 0 + 4599.5 + 16 + 197.5 + 0 + 0
                                        ),
                                        pixelHeight: 1024,
                                        pixelWidth: 1440,
                                        src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                        srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                      },
                                    },
                                    C6xnyR_QF: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 669,
                                        intrinsicWidth: 1018,
                                        loading: m(
                                          (g?.y || 0) +
                                            0 +
                                            800 +
                                            24 +
                                            0 +
                                            0 +
                                            4269.1 +
                                            16 +
                                            197.5 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1024,
                                        pixelWidth: 1440,
                                        sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                        src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                        srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                      },
                                    },
                                    vl4rOFLph: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 669,
                                        intrinsicWidth: 1018,
                                        loading: m(
                                          (g?.y || 0) +
                                            0 +
                                            800 +
                                            48 +
                                            0 +
                                            0 +
                                            4577.5 +
                                            16 +
                                            197.5 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1024,
                                        pixelWidth: 1440,
                                        sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                        src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                        srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                      },
                                    },
                                  },
                                  children: s(w, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 669,
                                      intrinsicWidth: 1018,
                                      loading: m(
                                        (g?.y || 0) + 0 + 68 + 0 + 0 + 4737.7 + 16 + 197.5 + 0 + 0
                                      ),
                                      pixelHeight: 1024,
                                      pixelWidth: 1440,
                                      src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                      srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                    },
                                    className: `framer-olfeef`,
                                    "data-framer-name": `Image`,
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
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-IsTTi.framer-ztzgb5, .framer-IsTTi .framer-ztzgb5 { display: block; }`,
        `.framer-IsTTi.framer-1deck5t { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-IsTTi .framer-10v1pap-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-IsTTi .framer-13a5423 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 68px 64px 64px 64px; position: relative; width: 1px; }`,
        `.framer-IsTTi .framer-1t4wolm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-1sopcbt { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-IsTTi .framer-58iv7j { align-content: center; align-items: center; background-color: #fdfbf9; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsTTi .framer-mw943p, .framer-IsTTi .framer-fv3khu, .framer-IsTTi .framer-11qpv0t, .framer-IsTTi .framer-vhcajn, .framer-IsTTi .framer-ziasej { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-IsTTi .framer-vdoori { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-IsTTi .framer-1y6iklx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IsTTi .framer-1cynp0p { height: 13px; position: relative; width: 14px; }`,
        `.framer-IsTTi .framer-1rg6pnp { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-IsTTi .framer-1ucwxx1 { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-IsTTi .framer-1is7md9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-1kelhhe, .framer-IsTTi .framer-1xfz5k4, .framer-IsTTi .framer-18k1vil, .framer-IsTTi .framer-1m9fs6, .framer-IsTTi .framer-1onquj1, .framer-IsTTi .framer-zze9c, .framer-IsTTi .framer-1fc6mce, .framer-IsTTi .framer-u3hgui, .framer-IsTTi .framer-17ijjhs, .framer-IsTTi .framer-h6quqi, .framer-IsTTi .framer-jibg47, .framer-IsTTi .framer-ijfkig, .framer-IsTTi .framer-a9u2hd, .framer-IsTTi .framer-vyi8yd, .framer-IsTTi .framer-1smqav1, .framer-IsTTi .framer-u9zxcl, .framer-IsTTi .framer-1yermst, .framer-IsTTi .framer-1m7wqgz, .framer-IsTTi .framer-1vqeicj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-IsTTi .framer-1i00fqp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-1n0upun { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsTTi .framer-1nl6yx3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-13n8ged, .framer-IsTTi .framer-1017ub3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsTTi .framer-bik27d, .framer-IsTTi .framer-lwffyi, .framer-IsTTi .framer-ltx32u, .framer-IsTTi .framer-a4uny4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-ly5loq, .framer-IsTTi .framer-qym9xq, .framer-IsTTi .framer-1fcvxqz, .framer-IsTTi .framer-sgnllk { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-1orhbra, .framer-IsTTi .framer-v4nnbm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsTTi .framer-1w8b14c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-4ah8f5, .framer-IsTTi .framer-tenccc, .framer-IsTTi .framer-bou9ba, .framer-IsTTi .framer-1tvgu78, .framer-IsTTi .framer-vhbz56 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-4dnlqv, .framer-IsTTi .framer-1s1cp86 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-baiqco, .framer-IsTTi .framer-16fbxgc { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, #141414 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: inset 0px 1px 2px 0px rgba(255, 255, 255, 0.75); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IsTTi .framer-15l1rrq, .framer-IsTTi .framer-k8gs6, .framer-IsTTi .framer-x12osg, .framer-IsTTi .framer-j5q5zq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-l8c8dp, .framer-IsTTi .framer-16p4gw5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-IsTTi .framer-1oq314n-container, .framer-IsTTi .framer-1n22h0r-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-IsTTi .framer-j2b4nt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-1x07uhn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsTTi .framer-olfeef { aspect-ratio: 1.5216741405082213 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.18), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.16), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.06); flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        ...R,
        ...F,
        ...N,
        ...ye,
        ...z,
        ...Ce,
        `.framer-IsTTi[data-border="true"]::after, .framer-IsTTi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-IsTTi.framer-1deck5t { width: 1240px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-IsTTi.framer-1deck5t { flex-direction: column; width: 810px; } .framer-IsTTi .framer-10v1pap-container { height: auto; width: 100%; z-index: 2; } .framer-IsTTi .framer-13a5423 { flex: none; overflow: hidden; padding: 48px 48px 64px 48px; width: 100%; } .framer-IsTTi .framer-1sopcbt { position: relative; top: unset; } .framer-IsTTi .framer-58iv7j { height: min-content; z-index: 0; } .framer-IsTTi .framer-vdoori { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-IsTTi .framer-15l1rrq, .framer-IsTTi .framer-x12osg { flex-direction: column; order: 0; } .framer-IsTTi .framer-l8c8dp, .framer-IsTTi .framer-1oq314n-container, .framer-IsTTi .framer-16p4gw5, .framer-IsTTi .framer-1n22h0r-container { flex: none; width: 100%; } .framer-IsTTi .framer-k8gs6, .framer-IsTTi .framer-j5q5zq { flex-direction: column; order: 1; }}`,
        `@media (max-width: 809.98px) { .framer-IsTTi.framer-1deck5t { flex-direction: column; width: 390px; } .framer-IsTTi .framer-10v1pap-container { height: auto; width: 100%; z-index: 2; } .framer-IsTTi .framer-13a5423 { flex: none; overflow: hidden; padding: 24px 24px 64px 24px; width: 100%; } .framer-IsTTi .framer-1sopcbt { position: relative; top: unset; } .framer-IsTTi .framer-58iv7j { height: min-content; z-index: 0; } .framer-IsTTi .framer-mw943p { order: 0; } .framer-IsTTi .framer-vdoori { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; order: 1; padding: 2px 16px 2px 13px; } .framer-IsTTi .framer-baiqco, .framer-IsTTi .framer-16fbxgc { gap: 16px; padding: 16px; } .framer-IsTTi .framer-15l1rrq, .framer-IsTTi .framer-k8gs6, .framer-IsTTi .framer-x12osg, .framer-IsTTi .framer-j5q5zq { flex-direction: column; } .framer-IsTTi .framer-l8c8dp, .framer-IsTTi .framer-1oq314n-container, .framer-IsTTi .framer-16p4gw5, .framer-IsTTi .framer-1n22h0r-container { flex: none; width: 100%; }}`,
      ],
      `framer-IsTTi`
    )),
    (Q.displayName = `Portfolio / Rts`),
    (Q.defaultProps = { height: 6336, width: 1440 }),
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
            {
              cssFamilyName: `Stack Sans Headline`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Stack Sans Headline`,
              url: `../../assets/fonts/1PtFg9jZXvmMnkLnuURbaukKZJTyrDV326uH6mSinjBIwc6zJQFCqgUA3ZCX.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Stack Sans Text`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Stack Sans Text`,
              url: `https://fonts.gstatic.com/s/stacksanstext/v1/kJEkBuAJ-Q0hiGPmzHEu345X1JJNBpRJ3RPan47MNg-KJOhyGgKF1a0.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Stack Sans Text`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Stack Sans Text`,
              url: `https://fonts.gstatic.com/s/stacksanstext/v1/kJEkBuAJ-Q0hiGPmzHEu345X1JJNBpRJ3RPan47MNuiNJOhyGgKF1a0.woff2`,
              weight: `700`,
            },
          ],
        },
        ...V,
        ...H,
        ...S(me),
        ...S(k),
        ...S(j),
        ...S(be),
        ...S(he),
        ...S(we),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => g([() => O(P, {}, t)], t) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerQ70j7ZVMn`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1440`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"SOKv0e65U":{"pattern":":SOKv0e65U","name":"основные-макеты"}}`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `6336`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aC_ckjuO_":{"layout":["fixed","auto"]},"vl4rOFLph":{"layout":["fixed","auto"]},"C6xnyR_QF":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=DlmHCYZldd-rBwdiCGtJd2Mgoyv2HKOlQYQI9TS-3dA.Cbl7RW9S.mjs.map
