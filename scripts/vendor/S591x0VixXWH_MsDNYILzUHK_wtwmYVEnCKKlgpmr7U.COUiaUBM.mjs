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
import { A as d, a as f, r as ee, t as p } from "./motion.AUYMciny.mjs";
import {
  $ as te,
  A as m,
  L as ne,
  M as h,
  Q as re,
  S as g,
  W as _,
  X as v,
  a as y,
  ct as b,
  f as x,
  g as S,
  h as C,
  it as ie,
  j as w,
  l as ae,
  n as T,
  nt as E,
  rt as D,
  s as O,
  t as k,
  tt as A,
  v as j,
  w as M,
} from "./framer.I4hUVXCD.mjs";
import { i as N, r as P } from "./shared-lib.s-tZHqY3.mjs";
import { n as F, t as I } from "./Video.BAtjOJoI.mjs";
import { i as L, n as R, r as z, t as oe } from "./FZfftxcm3.D-2lrkRc.mjs";
import se, { t as B } from "./_gL01km3vVYdeFk3RSWQOUwNkma5bmAEh4iI3MAX1rU.Dztj25bS.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (l(),
    ne(),
    p(),
    n(),
    F(),
    N(),
    L(),
    B(),
    (V = m(P)),
    (H = m(I)),
    (U = {
      aCKCf7bn_: `(min-width: 1240px) and (max-width: 1439.98px)`,
      bBO16AQzs: `(min-width: 1440px)`,
      lfl3ObL5D: `(min-width: 810px) and (max-width: 1239.98px)`,
      lo_fquSvq: `(max-width: 809.98px)`,
    }),
    (W = []),
    (G = `framer-INdTl`),
    (K = {
      aCKCf7bn_: `framer-v-dgyxs0`,
      bBO16AQzs: `framer-v-9r7396`,
      lfl3ObL5D: `framer-v-wu4z7c`,
      lo_fquSvq: `framer-v-16rn5lv`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `bBO16AQzs`, Laptop: `aCKCf7bn_`, Phone: `lo_fquSvq`, Tablet: `lfl3ObL5D` }),
    (X = ({ value: e }) =>
      A()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `bBO16AQzs`,
    })),
    (Q = b(
      c(function (e, n) {
        let c = u(null),
          l = n ?? c,
          p = i(),
          { activeLocale: m, setLocale: ne } = E(),
          _ = v(),
          { style: b, className: w, layoutId: A, variant: j, ...M } = Z(e);
        D(t(() => se({}, m), [m]));
        let [N, F] = te(j, U, !1),
          L = g(G, oe),
          R = a(y)?.isLayoutTemplate,
          z = !!a(f)?.transition?.layout,
          B = q(R, z),
          V = ie(`nM2MZHuLN`),
          H = u(null);
        return (
          re({}),
          s(y.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: Y,
              primaryVariantId: `bBO16AQzs`,
              variantClassNames: K,
            },
            children: o(ee, {
              id: A ?? p,
              children: [
                s(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                o(d.div, {
                  ...M,
                  className: g(L, `framer-9r7396`, w),
                  ref: l,
                  style: { ...b },
                  children: [
                    s(x, {
                      breakpoint: N,
                      overrides: {
                        lfl3ObL5D: {
                          height: 800,
                          width: _?.width || `100vw`,
                          y: (_?.y || 0) + 0 + 0,
                        },
                        lo_fquSvq: {
                          height: 800,
                          width: _?.width || `100vw`,
                          y: (_?.y || 0) + 0 + 0,
                        },
                      },
                      children: s(k, {
                        height: 1e3,
                        y: (_?.y || 0) + 0,
                        children: s(T, {
                          className: `framer-6qyft7-container`,
                          layout: B,
                          nodeId: `XImQCRisT`,
                          scopeId: `TfvKxublX`,
                          children: s(x, {
                            breakpoint: N,
                            overrides: {
                              lfl3ObL5D: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                              lo_fquSvq: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                            },
                            children: s(P, {
                              height: `100%`,
                              id: `XImQCRisT`,
                              layoutId: `XImQCRisT`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    s(d.div, {
                      className: `framer-1opfur5`,
                      layout: B,
                      children: o(`div`, {
                        className: `framer-1pvhoqv`,
                        children: [
                          s(`div`, {
                            className: `framer-r4yvad`,
                            children: o(`div`, {
                              className: `framer-llasrl`,
                              children: [
                                s(C, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h1`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS03MDA=`,
                                        "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 2.4)`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `rgb(51, 26, 0)`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: `RTS (Real Time Settlement)`,
                                    }),
                                  }),
                                  className: `framer-1rw2fmh`,
                                  fonts: [`GF;Stack Sans Headline-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(ae, {
                                  href: { webPageId: `v0NP7rg_A` },
                                  motionChild: !0,
                                  nodeId: `A8MlR7f2S`,
                                  openInNewTab: !1,
                                  scopeId: `TfvKxublX`,
                                  children: s(x, {
                                    breakpoint: N,
                                    overrides: {
                                      lfl3ObL5D: { "data-border": !0 },
                                      lo_fquSvq: { "data-border": !0 },
                                    },
                                    children: s(d.a, {
                                      className: `framer-tsa038 framer-1fe3nj8`,
                                      "data-framer-name": `Button`,
                                      children: s(`div`, {
                                        className: `framer-65fk4i`,
                                        children: s(x, {
                                          breakpoint: N,
                                          overrides: {
                                            lfl3ObL5D: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                            lo_fquSvq: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                          },
                                          children: o(S, {
                                            className: `framer-evrzkc`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              s(S, {
                                                className: `framer-1qrrk2h`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              s(S, {
                                                className: `framer-ibwt4p`,
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
                            className: `framer-mjovsq`,
                            children: [
                              s(x, {
                                breakpoint: N,
                                overrides: {
                                  aCKCf7bn_: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.5)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Обзор проекта` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lfl3ObL5D: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.19)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Обзор проекта` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lo_fquSvq: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.04)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Обзор проекта` }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: s(C, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                        "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `rgb(51, 26, 0)`,
                                      },
                                      children: s(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: s(`strong`, { children: `Обзор проекта` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-193pw1g`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `RTS - это комплекс медицинских программ с интегрированным искусственным интеллектом, разработанный для снижения административной нагрузки, связанной с клинической документацией, ведением заметок и управлением страховыми заявками.`,
                                    }),
                                    s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `RTS включает в себя множество программ, я работала над двумя из них: Chart Advisor и Inquiry Advisor.`,
                                    }),
                                    o(`ul`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
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
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `Вместе инструменты RTS автоматизируют рутинные задачи, минимизируют ошибки и повышают эффективность на всех этапах работы с документацией и оплатой. За первый квартал тестирования RTS мы снизили административную нагрузку и повысили скорость обработки страховых заявок на 28%, а количество отклонённых заявок снизилось до нуля.`,
                                    }),
                                  ],
                                }),
                                className: `framer-gerl`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(x, {
                            breakpoint: N,
                            overrides: {
                              aCKCf7bn_: {
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
                              lfl3ObL5D: {
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
                              lo_fquSvq: {
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
                            children: s(C, {
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
                              className: `framer-423hef`,
                              fonts: [`GF;Stack Sans Headline-600`],
                              id: V,
                              ref: H,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-7gy64o`,
                            children: o(`div`, {
                              className: `framer-wyttj0`,
                              children: [
                                o(`div`, {
                                  className: `framer-jceos9`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-1mo7dog`,
                                      children: [
                                        s(x, {
                                          breakpoint: N,
                                          overrides: {
                                            lo_fquSvq: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
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
                                          children: s(C, {
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
                                            className: `framer-a1xbfs`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-1a01fp`,
                                          children: s(x, {
                                            breakpoint: N,
                                            overrides: {
                                              aCKCf7bn_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 670,
                                                  intrinsicWidth: 1028,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      841.7 +
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
                                              lfl3ObL5D: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 670,
                                                  intrinsicWidth: 1028,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      783.7 +
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
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670`,
                                                  srcSet: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=512&width=1028&height=670 512w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=1024&width=1028&height=670 1024w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670 1028w`,
                                                },
                                              },
                                              lo_fquSvq: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 670,
                                                  intrinsicWidth: 1028,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      780.9 +
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
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670`,
                                                  srcSet: `https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=512&width=1028&height=670 512w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?scale-down-to=1024&width=1028&height=670 1024w,https://framerusercontent.com/images/JDtVA3IkgMzwoHtnqET1xJRmsXI.png?width=1028&height=670 1028w`,
                                                },
                                              },
                                            },
                                            children: s(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 670,
                                                intrinsicWidth: 1028,
                                                loading: h(
                                                  (_?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    854.3 +
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
                                              className: `framer-5dl3ot`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-vgftcv`,
                                      children: [
                                        s(x, {
                                          breakpoint: N,
                                          overrides: {
                                            lo_fquSvq: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
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
                                          children: s(C, {
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
                                            className: `framer-1lygbcd`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-wgrj40`,
                                          children: s(x, {
                                            breakpoint: N,
                                            overrides: {
                                              aCKCf7bn_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 653,
                                                  intrinsicWidth: 982,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      841.7 +
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
                                              lfl3ObL5D: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 653,
                                                  intrinsicWidth: 982,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      783.7 +
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
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653`,
                                                  srcSet: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?scale-down-to=512&width=982&height=653 512w,https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653 982w`,
                                                },
                                              },
                                              lo_fquSvq: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 653,
                                                  intrinsicWidth: 982,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      780.9 +
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
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653`,
                                                  srcSet: `https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?scale-down-to=512&width=982&height=653 512w,https://framerusercontent.com/images/orawJj5QwnoaBDViMaHuHarcVY.png?width=982&height=653 982w`,
                                                },
                                              },
                                            },
                                            children: s(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 653,
                                                intrinsicWidth: 982,
                                                loading: h(
                                                  (_?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    854.3 +
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
                                              className: `framer-11ayg01`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-1hi3a76`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-1w8rumu`,
                                      children: [
                                        s(x, {
                                          breakpoint: N,
                                          overrides: {
                                            lo_fquSvq: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
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
                                          children: s(C, {
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
                                            className: `framer-c0wq8o`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-1ua546t`,
                                          children: s(x, {
                                            breakpoint: N,
                                            overrides: {
                                              aCKCf7bn_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 599,
                                                  intrinsicWidth: 886,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      841.7 +
                                                      0 +
                                                      0 +
                                                      290.7 +
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
                                              lfl3ObL5D: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 599,
                                                  intrinsicWidth: 886,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      783.7 +
                                                      0 +
                                                      0 +
                                                      290.7 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 599,
                                                  pixelWidth: 886,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599`,
                                                  srcSet: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?scale-down-to=512&width=886&height=599 512w,https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599 886w`,
                                                },
                                              },
                                              lo_fquSvq: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 599,
                                                  intrinsicWidth: 886,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      780.9 +
                                                      0 +
                                                      0 +
                                                      290.7 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 599,
                                                  pixelWidth: 886,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599`,
                                                  srcSet: `https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?scale-down-to=512&width=886&height=599 512w,https://framerusercontent.com/images/QPz556m87YaVfXXrIqJUb3VPH0.png?width=886&height=599 886w`,
                                                },
                                              },
                                            },
                                            children: s(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 599,
                                                intrinsicWidth: 886,
                                                loading: h(
                                                  (_?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    854.3 +
                                                    0 +
                                                    0 +
                                                    290.7 +
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
                                              className: `framer-12vry9a`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-1o01f61`,
                                      children: [
                                        s(x, {
                                          breakpoint: N,
                                          overrides: {
                                            lo_fquSvq: {
                                              children: s(r, {
                                                children: s(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
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
                                          children: s(C, {
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
                                            className: `framer-1rghgto`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        s(`div`, {
                                          className: `framer-1xjm59`,
                                          children: s(x, {
                                            breakpoint: N,
                                            overrides: {
                                              aCKCf7bn_: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 632,
                                                  intrinsicWidth: 966,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      68 +
                                                      0 +
                                                      0 +
                                                      841.7 +
                                                      0 +
                                                      0 +
                                                      290.7 +
                                                      0 +
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
                                              lfl3ObL5D: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 632,
                                                  intrinsicWidth: 966,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      48 +
                                                      0 +
                                                      0 +
                                                      783.7 +
                                                      0 +
                                                      0 +
                                                      290.7 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 632,
                                                  pixelWidth: 966,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632`,
                                                  srcSet: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?scale-down-to=512&width=966&height=632 512w,https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632 966w`,
                                                },
                                              },
                                              lo_fquSvq: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 632,
                                                  intrinsicWidth: 966,
                                                  loading: h(
                                                    (_?.y || 0) +
                                                      0 +
                                                      800 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      780.9 +
                                                      0 +
                                                      0 +
                                                      290.7 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 632,
                                                  pixelWidth: 966,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  sizes: `calc(max((max(${_?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632`,
                                                  srcSet: `https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?scale-down-to=512&width=966&height=632 512w,https://framerusercontent.com/images/2fWnyAQOZUJAyHpbTCjvxROF5Fs.png?width=966&height=632 966w`,
                                                },
                                              },
                                            },
                                            children: s(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 632,
                                                intrinsicWidth: 966,
                                                loading: h(
                                                  (_?.y || 0) +
                                                    0 +
                                                    68 +
                                                    0 +
                                                    0 +
                                                    854.3 +
                                                    0 +
                                                    0 +
                                                    290.7 +
                                                    0 +
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
                                              className: `framer-13rka1g`,
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
                            className: `framer-i2equo`,
                            children: [
                              s(C, {
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
                                      children: s(`strong`, { children: `Основная задача` }),
                                    }),
                                  }),
                                }),
                                className: `framer-1r14zut`,
                                fonts: [`GF;Stack Sans Headline-600`, `GF;Stack Sans Headline-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: o(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.3em`,
                                      "--framer-text-color": `rgb(20, 20, 20)`,
                                    },
                                    children: [
                                      `Сделать удобный и запоминающийся UX в сжатые сроки.`,
                                      s(`br`, {}),
                                      `У нас было всего две недели, чтобы разработать прототип полного рабочего сценария для Chart Advisor. Цель заключалась в том, чтобы показать чистый, современный интерфейс, который выделялся бы среди конкурентов, оставаясь при этом простым и удобным для пользователей.`,
                                    ],
                                  }),
                                }),
                                className: `framer-76ntqa`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-ogdimq`,
                            children: [
                              s(C, {
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
                                      children: s(`strong`, { children: `Моя роль` }),
                                    }),
                                  }),
                                }),
                                className: `framer-k9crmj`,
                                fonts: [`GF;Stack Sans Headline-600`, `GF;Stack Sans Headline-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.3em`,
                                      "--framer-text-color": `rgb(20, 20, 20)`,
                                    },
                                    children: `Как старший UX-дизайнер, я работала в тесном контакте с продуктовым менеджером (PM), UI-дизайнером и разработчиками, чтобы сделать RTS удобным и понятным для врачей, медсестёр и администраторов. Моя основная задача создать логичную и простую для понимания архитектуру сайта и спроектировать общие рабочие процессы так, чтобы медицинский персонал мог быстро и легко работать с приложением в разных условиях, не запутываясь в сотнях страниц и кнопок.`,
                                  }),
                                }),
                                className: `framer-1uyss3f`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-ib6767`,
                            children: [
                              s(C, {
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
                                      children: s(`strong`, { children: `Решение` }),
                                    }),
                                  }),
                                }),
                                className: `framer-12pb64z`,
                                fonts: [`GF;Stack Sans Headline-600`, `GF;Stack Sans Headline-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.3em`,
                                      "--framer-text-color": `rgb(20, 20, 20)`,
                                    },
                                    children: `Протестировав несколько вариантов дизайна, мы нашли баланс между простотой и современным дизайном. Интерфейс стал понятным: мы упростили его и дополнили функциями ИИ так, чтобы пользователям было комфортно и легко работать.`,
                                  }),
                                }),
                                className: `framer-1b6q6cn`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-1n9v6q3`,
                            children: [
                              s(C, {
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
                                      children: s(`strong`, { children: `Ключевые UX-решения` }),
                                    }),
                                  }),
                                }),
                                className: `framer-150krc5`,
                                fonts: [`GF;Stack Sans Headline-600`, `GF;Stack Sans Headline-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: o(`ul`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                      "--framer-letter-spacing": `0.02em`,
                                      "--framer-line-height": `1.3em`,
                                      "--framer-text-color": `rgb(20, 20, 20)`,
                                    },
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
                                className: `framer-1x4mw62`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-tstw2e`,
                            children: [
                              s(C, {
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
                                      children: s(`strong`, { children: `Инструменты` }),
                                    }),
                                  }),
                                }),
                                className: `framer-869ogm`,
                                fonts: [`GF;Stack Sans Headline-600`, `GF;Stack Sans Headline-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(x, {
                                breakpoint: N,
                                overrides: {
                                  aCKCf7bn_: {
                                    children: o(r, {
                                      children: [
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `Figma` }),
                                            `: для создания макетов и прототипов.`,
                                          ],
                                        }),
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `FigJam` }),
                                            `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                          ],
                                        }),
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `Microsoft Loop` }),
                                            `: для ведения документации, координации команды и организации рабочего процесса.`,
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  lfl3ObL5D: {
                                    children: o(r, {
                                      children: [
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `Figma` }),
                                            `: для создания макетов и прототипов.`,
                                          ],
                                        }),
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `FigJam` }),
                                            `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                          ],
                                        }),
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `Microsoft Loop` }),
                                            `: для ведения документации, координации команды и организации рабочего процесса.`,
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  lo_fquSvq: {
                                    children: o(r, {
                                      children: [
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.75)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.3em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `Figma` }),
                                            `: для создания макетов и прототипов.`,
                                          ],
                                        }),
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.75)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.3em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `FigJam` }),
                                            `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                          ],
                                        }),
                                        o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.75)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.3em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: [
                                            s(`strong`, { children: `Microsoft Loop` }),
                                            `: для ведения документации, координации команды и организации рабочего процесса.`,
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: s(C, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: [
                                      o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgb(20, 20, 20)`,
                                        },
                                        children: [
                                          s(`strong`, { children: `Figma` }),
                                          `: для создания макетов и прототипов.`,
                                        ],
                                      }),
                                      o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgb(20, 20, 20)`,
                                        },
                                        children: [
                                          s(`strong`, { children: `FigJam` }),
                                          `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                        ],
                                      }),
                                      o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgb(20, 20, 20)`,
                                        },
                                        children: [
                                          s(`strong`, { children: `Microsoft Loop` }),
                                          `: для ведения документации, координации команды и организации рабочего процесса.`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  className: `framer-1k3n61z`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-fb93c4`,
                            children: [
                              s(x, {
                                breakpoint: N,
                                overrides: {
                                  aCKCf7bn_: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.5)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Chart Advisor` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lfl3ObL5D: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.19)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Chart Advisor` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lo_fquSvq: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.04)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Chart Advisor` }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: s(C, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                        "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `rgb(51, 26, 0)`,
                                      },
                                      children: s(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: s(`strong`, { children: `Chart Advisor` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1e7dbky`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `Chart Advisor это ключевой продукт в составе пакета RTS, разработанный для того, чтобы помочь врачам быстро и эффективно создавать и организававать клинические записи. Chart Advisor позволяет врачу записать беседу с пациентом или надиктовывать заметки, которые ИИ автоматически формирует в структурированную медицинскую запись в нужном формате, значительно сокращая время потраченное на правильное оформление бумаг и снимая эту нагрузку с врача.`,
                                    }),
                                    s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `С точки зрения UX продукт спроектирован так, чтобы пользователь всегда оставался в центре процесса и контролировал всё происходящее, при этом освобождая себя от рутинных операций. Мы применили принцип постепенного раскрытия информации: ИИ предлагает контент слоями, который удобно просматривать и редактировать по частям. Заметки полностью редактируемы, врач может быстро просмотреть их и внести правки, не теряя ритма работы. Контекстные подсказки и встроенные уведомления помогают сосредоточиться и решать проблемы именно там, где они возникают. Рекомендации по кодам появляются только после завершения заметки, что укрепляет доверие и логично выстраивает последовательность действий.`,
                                    }),
                                    o(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: [
                                        s(`strong`, { children: `Результат` }),
                                        ` - более гибкий и умный процесс документации, где ИИ не просто подсказывает, но действительно берёт на себя часть работы, а врач управляет и проверяет результат. Так мы переосмыслили оформление медицинских записей как настоящую коллаборацию человеческого опыта и машинной точности.`,
                                      ],
                                    }),
                                  ],
                                }),
                                className: `framer-1lk27u2`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(`div`, {
                                className: `framer-7cfp0p`,
                                children: [
                                  s(`div`, {
                                    className: `framer-16hb8zk`,
                                    children: s(x, {
                                      breakpoint: N,
                                      overrides: {
                                        aCKCf7bn_: {
                                          children: s(r, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-text-color": `rgb(252, 250, 248)`,
                                              },
                                              children: `Прототип Chart Advisor демонстрирует, как врач начинает свой день с чёткого и структурированного списка сегодняшних приёмов. Ближайший приём выделен в левом верхнем углу для быстрого доступа, а справа отображается полный список встреч с удобными фильтрами. Из этого списка врач выбирает следующего пациента и запрашивает у него разрешение на запись визита; после того как пациент даёт согласие, врач начинает запись разговора. После визита Chart Advisor автоматически формирует готовую к использованию медицинскую запись на основе записанного разговора и выделяет недостающие или некорректные данные для проверки. Если разрешение на запись не получено, врач может продиктовать или ввести заметки вручную после приёма и всё равно пропустить их через Physician Advisor для правильного форматирования и проверки точности и полноты данных. Затем врач быстро вносит правки, выбирает соответствующий медицинский код и отправляет запись в страховое агентство для оплаты.`,
                                            }),
                                          }),
                                        },
                                        lfl3ObL5D: {
                                          children: s(r, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-text-color": `rgb(252, 250, 248)`,
                                              },
                                              children: `Прототип Chart Advisor демонстрирует, как врач начинает свой день с чёткого и структурированного списка сегодняшних приёмов. Ближайший приём выделен в левом верхнем углу для быстрого доступа, а справа отображается полный список встреч с удобными фильтрами. Из этого списка врач выбирает следующего пациента и запрашивает у него разрешение на запись визита; после того как пациент даёт согласие, врач начинает запись разговора. После визита Chart Advisor автоматически формирует готовую к использованию медицинскую запись на основе записанного разговора и выделяет недостающие или некорректные данные для проверки. Если разрешение на запись не получено, врач может продиктовать или ввести заметки вручную после приёма и всё равно пропустить их через Physician Advisor для правильного форматирования и проверки точности и полноты данных. Затем врач быстро вносит правки, выбирает соответствующий медицинский код и отправляет запись в страховое агентство для оплаты.`,
                                            }),
                                          }),
                                        },
                                        lo_fquSvq: {
                                          children: s(r, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.75)`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-line-height": `1.3em`,
                                                "--framer-text-color": `rgb(252, 250, 248)`,
                                              },
                                              children: `Прототип Chart Advisor демонстрирует, как врач начинает свой день с чёткого и структурированного списка сегодняшних приёмов. Ближайший приём выделен в левом верхнем углу для быстрого доступа, а справа отображается полный список встреч с удобными фильтрами. Из этого списка врач выбирает следующего пациента и запрашивает у него разрешение на запись визита; после того как пациент даёт согласие, врач начинает запись разговора. После визита Chart Advisor автоматически формирует готовую к использованию медицинскую запись на основе записанного разговора и выделяет недостающие или некорректные данные для проверки. Если разрешение на запись не получено, врач может продиктовать или ввести заметки вручную после приёма и всё равно пропустить их через Physician Advisor для правильного форматирования и проверки точности и полноты данных. Затем врач быстро вносит правки, выбирает соответствующий медицинский код и отправляет запись в страховое агентство для оплаты.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: s(C, {
                                        __fromCanvasComponent: !0,
                                        children: s(r, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(252, 250, 248)`,
                                            },
                                            children: `Прототип Chart Advisor демонстрирует, как врач начинает свой день с чёткого и структурированного списка сегодняшних приёмов. Ближайший приём выделен в левом верхнем углу для быстрого доступа, а справа отображается полный список встреч с удобными фильтрами. Из этого списка врач выбирает следующего пациента и запрашивает у него разрешение на запись визита; после того как пациент даёт согласие, врач начинает запись разговора. После визита Chart Advisor автоматически формирует готовую к использованию медицинскую запись на основе записанного разговора и выделяет недостающие или некорректные данные для проверки. Если разрешение на запись не получено, врач может продиктовать или ввести заметки вручную после приёма и всё равно пропустить их через Physician Advisor для правильного форматирования и проверки точности и полноты данных. Затем врач быстро вносит правки, выбирает соответствующий медицинский код и отправляет запись в страховое агентство для оплаты.`,
                                          }),
                                        }),
                                        className: `framer-ro0mz6`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-1vimmzd`,
                                    children: s(k, {
                                      children: s(T, {
                                        className: `framer-1x19inn-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `j5fxlaPN7`,
                                        scopeId: `TfvKxublX`,
                                        children: s(I, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `j5fxlaPN7`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `j5fxlaPN7`,
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
                            className: `framer-5pt8ps`,
                            children: [
                              s(x, {
                                breakpoint: N,
                                overrides: {
                                  aCKCf7bn_: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.5)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Inquiry Advisor` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lfl3ObL5D: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.19)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Inquiry Advisor` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lo_fquSvq: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.04)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Inquiry Advisor` }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: s(C, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                        "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `rgb(51, 26, 0)`,
                                      },
                                      children: s(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: s(`strong`, { children: `Inquiry Advisor` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-2qw8dm`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(C, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    o(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: [
                                        `Второй ключевой программой в составе пакета RTS является `,
                                        s(`strong`, { children: `Inquiry Advisor` }),
                                        `. Эта программа даёт медицинским специалистам возможность заранее проверить покрытие медицинских процедур с помощью ИИ. При этом не требуется никаких дополнительных действий со стороны медицинских сотрудников. После визита пациента система автоматически анализирует отправленную документацию с помощью ИИ, выявляя возможные проблемы - например, неполные данные или несоответствия с предыдущими записями - которые могут привести к отклонению заявки. Если проблема обнаружена, заявке присваивается статус «Вероятно отклонено», а врач получает понятное объяснение причины и возможность исправить её до отправки. Первые пользователи инструмента отметили почти полное устранение типичных человеческих ошибок, таких как опечатки в именах или неверные данные о страховке. Это привело к значительному росту доли одобренных заявок и заметному снижению административной нагрузки.`,
                                      ],
                                    }),
                                    s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `Оптимизируя UX, мы сделали акцент на ясность интерфейса и снижении когнитивной нагрузки. В новой версии реализована централизованная рабочая лента с фильтрацией, чтобы врачи сразу видели, какие заявки требуют внимания и почему. Встроенные индикаторы ошибок и контекстные подсказки помогают быстро устранять проблемы без лишних переключений между экранами. Показывая только актуальную информацию в нужный момент, мы упростили процесс принятия решений и позволили врачам сосредоточиться на решении задач, а не на поиске данных.`,
                                    }),
                                    s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `С Inquiry Advisor управление заявками переходит от реактивного исправления ошибок к проактивной их оптимизации - помогая специалистам предотвращать проблемы ещё до отклонения заявки и сохранять уверенность и контроль на каждом этапе.`,
                                    }),
                                  ],
                                }),
                                className: `framer-5m7hdo`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(`div`, {
                                className: `framer-1pyvzho`,
                                children: [
                                  s(`div`, {
                                    className: `framer-2cad4v`,
                                    children: s(x, {
                                      breakpoint: N,
                                      overrides: {
                                        aCKCf7bn_: {
                                          children: s(r, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-text-color": `rgb(252, 250, 248)`,
                                              },
                                              children: `Прототип Inquiries Advisor показывает полный пользовательский сценарий - от входа в систему и выбора инструмента Inquiries до детального управления страховыми заявками. Внутри Inquiries Advisor пользователю доступен упорядоченный обзор всех заявок, с возможностью быстро выделить те, что отмечены как «Вероятно отклонено», и проверить их на наличие ошибок. Удобные фильтры позволяют сортировать заявки по статусу ответа, по этапу обслуживания (до или после услуги), по типу услуги, типу страховки и многим другим параметрам. На экране также отображаются ключевые показатели: количество потенциальных отклонений, их общая предполагаемая стоимость и общая сумма ожидающих выплат. При переходе в детали заявки пользователь может просмотреть выполненные услуги, выявленные системой ошибки, а также заметки и историю заявки. Всё это помогает быстрее и точнее обрабатывать страховые выплаты.`,
                                            }),
                                          }),
                                        },
                                        lfl3ObL5D: {
                                          children: s(r, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-text-color": `rgb(252, 250, 248)`,
                                              },
                                              children: `Прототип Inquiries Advisor показывает полный пользовательский сценарий - от входа в систему и выбора инструмента Inquiries до детального управления страховыми заявками. Внутри Inquiries Advisor пользователю доступен упорядоченный обзор всех заявок, с возможностью быстро выделить те, что отмечены как «Вероятно отклонено», и проверить их на наличие ошибок. Удобные фильтры позволяют сортировать заявки по статусу ответа, по этапу обслуживания (до или после услуги), по типу услуги, типу страховки и многим другим параметрам. На экране также отображаются ключевые показатели: количество потенциальных отклонений, их общая предполагаемая стоимость и общая сумма ожидающих выплат. При переходе в детали заявки пользователь может просмотреть выполненные услуги, выявленные системой ошибки, а также заметки и историю заявки. Всё это помогает быстрее и точнее обрабатывать страховые выплаты.`,
                                            }),
                                          }),
                                        },
                                        lo_fquSvq: {
                                          children: s(r, {
                                            children: s(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.75)`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-line-height": `1.3em`,
                                                "--framer-text-color": `rgb(252, 250, 248)`,
                                              },
                                              children: `Прототип Inquiries Advisor показывает полный пользовательский сценарий - от входа в систему и выбора инструмента Inquiries до детального управления страховыми заявками. Внутри Inquiries Advisor пользователю доступен упорядоченный обзор всех заявок, с возможностью быстро выделить те, что отмечены как «Вероятно отклонено», и проверить их на наличие ошибок. Удобные фильтры позволяют сортировать заявки по статусу ответа, по этапу обслуживания (до или после услуги), по типу услуги, типу страховки и многим другим параметрам. На экране также отображаются ключевые показатели: количество потенциальных отклонений, их общая предполагаемая стоимость и общая сумма ожидающих выплат. При переходе в детали заявки пользователь может просмотреть выполненные услуги, выявленные системой ошибки, а также заметки и историю заявки. Всё это помогает быстрее и точнее обрабатывать страховые выплаты.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: s(C, {
                                        __fromCanvasComponent: !0,
                                        children: s(r, {
                                          children: s(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(252, 250, 248)`,
                                            },
                                            children: `Прототип Inquiries Advisor показывает полный пользовательский сценарий - от входа в систему и выбора инструмента Inquiries до детального управления страховыми заявками. Внутри Inquiries Advisor пользователю доступен упорядоченный обзор всех заявок, с возможностью быстро выделить те, что отмечены как «Вероятно отклонено», и проверить их на наличие ошибок. Удобные фильтры позволяют сортировать заявки по статусу ответа, по этапу обслуживания (до или после услуги), по типу услуги, типу страховки и многим другим параметрам. На экране также отображаются ключевые показатели: количество потенциальных отклонений, их общая предполагаемая стоимость и общая сумма ожидающих выплат. При переходе в детали заявки пользователь может просмотреть выполненные услуги, выявленные системой ошибки, а также заметки и историю заявки. Всё это помогает быстрее и точнее обрабатывать страховые выплаты.`,
                                          }),
                                        }),
                                        className: `framer-19msy7x`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-1ebh7su`,
                                    children: s(k, {
                                      children: s(T, {
                                        className: `framer-fb19b1-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `wA2lfmZIx`,
                                        scopeId: `TfvKxublX`,
                                        children: s(I, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `wA2lfmZIx`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `wA2lfmZIx`,
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
                            className: `framer-m7yocv`,
                            children: [
                              s(x, {
                                breakpoint: N,
                                overrides: {
                                  aCKCf7bn_: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.5)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Лэндинг` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lfl3ObL5D: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.19)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Лэндинг` }),
                                        }),
                                      }),
                                    }),
                                  },
                                  lo_fquSvq: {
                                    children: s(r, {
                                      children: s(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.04)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: s(`strong`, { children: `Лэндинг` }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: s(C, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                        "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `rgb(51, 26, 0)`,
                                      },
                                      children: s(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: s(`strong`, { children: `Лэндинг` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-2zogmm`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(x, {
                                breakpoint: N,
                                overrides: {
                                  aCKCf7bn_: {
                                    children: s(r, {
                                      children: s(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-text-color": `rgb(20, 20, 20)`,
                                        },
                                        children: `Лэндинг был спроектирован как единая точка входа для всего продуктового пакета RTS, предоставляя пользователям централизованный обзор всех доступных решений. Он позволяет легко настраивать подписку, выбирая любое сочетание продуктов под свои задачи. Если пользователь подключает несколько продуктов, лэндинг может использоваться как главная страница, упрощая навигацию по всему пакету. Пользователи также могут назначить предпочитаемый продукт по умолчанию и быстро переключаться между продуктами через глобальные настройки навигации.`,
                                      }),
                                    }),
                                  },
                                },
                                children: s(C, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.2)`,
                                        "--framer-letter-spacing": `0.02em`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(20, 20, 20)`,
                                      },
                                      children: `Лэндинг был спроектирован как единая точка входа для всего продуктового пакета RTS, предоставляя пользователям централизованный обзор всех доступных решений. Он позволяет легко настраивать подписку, выбирая любое сочетание продуктов под свои задачи. Если пользователь подключает несколько продуктов, лэндинг может использоваться как главная страница, упрощая навигацию по всему пакету. Пользователи также могут назначить предпочитаемый продукт по умолчанию и быстро переключаться между продуктами через глобальные настройки навигации.`,
                                    }),
                                  }),
                                  className: `framer-1u79iuk`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(`div`, {
                                className: `framer-lqbdfi`,
                                children: s(x, {
                                  breakpoint: N,
                                  overrides: {
                                    aCKCf7bn_: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 669,
                                        intrinsicWidth: 1018,
                                        loading: h(
                                          (_?.y || 0) + 0 + 68 + 0 + 0 + 4364.3 + 16 + 161.6 + 0 + 0
                                        ),
                                        pixelHeight: 1024,
                                        pixelWidth: 1440,
                                        src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                        srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                      },
                                    },
                                    lfl3ObL5D: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 669,
                                        intrinsicWidth: 1018,
                                        loading: h(
                                          (_?.y || 0) +
                                            0 +
                                            800 +
                                            48 +
                                            0 +
                                            0 +
                                            4292.3 +
                                            16 +
                                            182.1 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1024,
                                        pixelWidth: 1440,
                                        sizes: `calc(${_?.width || `100vw`} - 96px)`,
                                        src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                        srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                      },
                                    },
                                    lo_fquSvq: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 669,
                                        intrinsicWidth: 1018,
                                        loading: h(
                                          (_?.y || 0) +
                                            0 +
                                            800 +
                                            24 +
                                            0 +
                                            0 +
                                            4145.9 +
                                            16 +
                                            179.3 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1024,
                                        pixelWidth: 1440,
                                        sizes: `calc(${_?.width || `100vw`} - 48px)`,
                                        src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                        srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                      },
                                    },
                                  },
                                  children: s(O, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 669,
                                      intrinsicWidth: 1018,
                                      loading: h(
                                        (_?.y || 0) + 0 + 68 + 0 + 0 + 4492.2 + 16 + 197.5 + 0 + 0
                                      ),
                                      pixelHeight: 1024,
                                      pixelWidth: 1440,
                                      src: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024`,
                                      srcSet: `https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=512&width=1440&height=1024 512w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?scale-down-to=1024&width=1440&height=1024 1024w,https://framerusercontent.com/images/S0MqqIo9bByHaaEvBwMiv816M.png?width=1440&height=1024 1440w`,
                                    },
                                    className: `framer-1bvw3gn`,
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
        `.framer-INdTl.framer-1fe3nj8, .framer-INdTl .framer-1fe3nj8 { display: block; }`,
        `.framer-INdTl.framer-9r7396 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-INdTl .framer-6qyft7-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-INdTl .framer-1opfur5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 68px 64px 64px 64px; position: relative; width: 1px; }`,
        `.framer-INdTl .framer-1pvhoqv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-r4yvad { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-INdTl .framer-llasrl { align-content: center; align-items: center; background-color: #fdfbf9; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-INdTl .framer-1rw2fmh, .framer-INdTl .framer-a1xbfs, .framer-INdTl .framer-1lygbcd, .framer-INdTl .framer-c0wq8o, .framer-INdTl .framer-1rghgto { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-INdTl .framer-tsa038 { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-INdTl .framer-65fk4i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-INdTl .framer-evrzkc { height: 13px; position: relative; width: 14px; }`,
        `.framer-INdTl .framer-1qrrk2h { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-INdTl .framer-ibwt4p { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-INdTl .framer-mjovsq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-193pw1g, .framer-INdTl .framer-gerl, .framer-INdTl .framer-423hef, .framer-INdTl .framer-1r14zut, .framer-INdTl .framer-76ntqa, .framer-INdTl .framer-k9crmj, .framer-INdTl .framer-1uyss3f, .framer-INdTl .framer-12pb64z, .framer-INdTl .framer-1b6q6cn, .framer-INdTl .framer-150krc5, .framer-INdTl .framer-1x4mw62, .framer-INdTl .framer-869ogm, .framer-INdTl .framer-1k3n61z, .framer-INdTl .framer-1e7dbky, .framer-INdTl .framer-1lk27u2, .framer-INdTl .framer-2qw8dm, .framer-INdTl .framer-5m7hdo, .framer-INdTl .framer-2zogmm, .framer-INdTl .framer-1u79iuk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-INdTl .framer-7gy64o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-wyttj0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-INdTl .framer-jceos9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-1mo7dog, .framer-INdTl .framer-1o01f61 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-INdTl .framer-1a01fp, .framer-INdTl .framer-wgrj40, .framer-INdTl .framer-1ua546t, .framer-INdTl .framer-1xjm59 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-5dl3ot, .framer-INdTl .framer-11ayg01, .framer-INdTl .framer-12vry9a, .framer-INdTl .framer-13rka1g { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-vgftcv, .framer-INdTl .framer-1w8rumu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-INdTl .framer-1hi3a76 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-i2equo, .framer-INdTl .framer-ogdimq, .framer-INdTl .framer-ib6767, .framer-INdTl .framer-1n9v6q3, .framer-INdTl .framer-tstw2e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-fb93c4, .framer-INdTl .framer-m7yocv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-7cfp0p, .framer-INdTl .framer-1pyvzho { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, #141414 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: inset 0px 1px 2px 0px rgba(255, 255, 255, 0.75); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-INdTl .framer-16hb8zk, .framer-INdTl .framer-1vimmzd, .framer-INdTl .framer-2cad4v, .framer-INdTl .framer-1ebh7su { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-ro0mz6, .framer-INdTl .framer-19msy7x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-INdTl .framer-1x19inn-container, .framer-INdTl .framer-fb19b1-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-INdTl .framer-5pt8ps { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-lqbdfi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-INdTl .framer-1bvw3gn { aspect-ratio: 1.5216741405082213 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.18), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.16), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.06); flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        ...R,
        `.framer-INdTl[data-border="true"]::after, .framer-INdTl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-INdTl.framer-9r7396 { width: 1240px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-INdTl.framer-9r7396 { flex-direction: column; width: 810px; } .framer-INdTl .framer-6qyft7-container { height: auto; width: 100%; z-index: 2; } .framer-INdTl .framer-1opfur5 { flex: none; overflow: hidden; padding: 48px 48px 64px 48px; width: 100%; } .framer-INdTl .framer-r4yvad { position: relative; top: unset; } .framer-INdTl .framer-llasrl { height: min-content; z-index: 0; } .framer-INdTl .framer-tsa038 { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-INdTl .framer-16hb8zk, .framer-INdTl .framer-2cad4v { flex-direction: column; order: 0; } .framer-INdTl .framer-ro0mz6, .framer-INdTl .framer-1x19inn-container, .framer-INdTl .framer-19msy7x, .framer-INdTl .framer-fb19b1-container { flex: none; width: 100%; } .framer-INdTl .framer-1vimmzd, .framer-INdTl .framer-1ebh7su { flex-direction: column; order: 1; }}`,
        `@media (max-width: 809.98px) { .framer-INdTl.framer-9r7396 { flex-direction: column; width: 390px; } .framer-INdTl .framer-6qyft7-container { height: auto; width: 100%; z-index: 2; } .framer-INdTl .framer-1opfur5 { flex: none; overflow: hidden; padding: 24px 24px 64px 24px; width: 100%; } .framer-INdTl .framer-r4yvad { position: relative; top: unset; } .framer-INdTl .framer-llasrl { height: min-content; z-index: 0; } .framer-INdTl .framer-1rw2fmh { order: 0; } .framer-INdTl .framer-tsa038 { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; order: 1; padding: 2px 16px 2px 13px; } .framer-INdTl .framer-7cfp0p, .framer-INdTl .framer-1pyvzho { gap: 16px; padding: 16px; } .framer-INdTl .framer-16hb8zk, .framer-INdTl .framer-1vimmzd, .framer-INdTl .framer-2cad4v, .framer-INdTl .framer-1ebh7su { flex-direction: column; } .framer-INdTl .framer-ro0mz6, .framer-INdTl .framer-1x19inn-container, .framer-INdTl .framer-19msy7x, .framer-INdTl .framer-fb19b1-container { flex: none; width: 100%; }}`,
      ],
      `framer-INdTl`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 6228, width: 1440 }),
    j(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Stack Sans Headline`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Stack Sans Headline`,
              url: `../../assets/fonts/1PtFg9jZXvmMnkLnuURbaukKZJTyrDV326uH6mSinjBIwc6KJQFCqgUA3ZCX.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Stack Sans Headline`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Stack Sans Headline`,
              url: `../../assets/fonts/1PtFg9jZXvmMnkLnuURbaukKZJTyrDV326uH6mSinjBIwc5fIgFCqgUA3ZCX.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Varela Round`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Varela Round`,
              url: `../../assets/fonts/w8gdH283Tvk__Lua32TysjIvpcGOD9gxZw.woff2`,
              weight: `400`,
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
        ...V,
        ...H,
        ...w(z),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => _([() => M(P, {}, t)], t) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerTfvKxublX`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `6228`,
            framerAcceptsLayoutTemplate: `false`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aCKCf7bn_":{"layout":["fixed","auto"]},"lfl3ObL5D":{"layout":["fixed","auto"]},"lo_fquSvq":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"nM2MZHuLN":{"pattern":":nM2MZHuLN","name":"основные-макеты"}}`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1440`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=S591x0VixXWH_MsDNYILzUHK_wtwmYVEnCKKlgpmr7U.COUiaUBM.mjs.map
