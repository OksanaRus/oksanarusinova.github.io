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
import { A as u, a as te, r as ne, t as d } from "./motion.AUYMciny.mjs";
import {
  $ as re,
  A as f,
  L as ie,
  M as p,
  Q as ae,
  S as m,
  W as h,
  X as oe,
  a as g,
  ct as _,
  f as v,
  g as y,
  h as b,
  it as x,
  j as S,
  l as C,
  n as w,
  nt as se,
  rt as ce,
  s as T,
  t as E,
  tt as D,
  v as O,
  w as k,
} from "./framer.CfbrMSxG.mjs";
import { a as le, c as A, i as ue, o as j, r as M, s as N } from "./shared-lib.f3R8fmkt.mjs";
import { n as P, t as F } from "./Video.KjNbylVS.mjs";
import { i as I, n as L, r as R, t as de } from "./SDQdvccR0.C-vUhudJ.mjs";
import fe, { t as z } from "./DE80JNPlO8G2PD0sQaJmvah8iC98CpHAyFcbk4NZz7I.9vNsskbK.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    ie(),
    d(),
    n(),
    P(),
    ue(),
    I(),
    A(),
    z(),
    (B = f(M)),
    (V = f(F)),
    (H = {
      CawUAswJJ: `(min-width: 1440px)`,
      sYEatTzoX: `(min-width: 1240px) and (max-width: 1439.98px)`,
      Yx8geYCJd: `(max-width: 809.98px)`,
      ZWh9kZq5D: `(min-width: 810px) and (max-width: 1239.98px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-IsVlL`),
    (K = {
      CawUAswJJ: `framer-v-axsey5`,
      sYEatTzoX: `framer-v-7v6g6q`,
      Yx8geYCJd: `framer-v-9s4676`,
      ZWh9kZq5D: `framer-v-y8msji`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `CawUAswJJ`, Laptop: `sYEatTzoX`, Phone: `Yx8geYCJd`, Tablet: `ZWh9kZq5D` }),
    (X = ({ value: e }) =>
      D()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `CawUAswJJ`,
    })),
    (Q = _(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          d = ee(),
          { activeLocale: f, setLocale: ie } = se(),
          h = oe(),
          { style: _, className: S, layoutId: D, variant: O, ...k } = Z(e);
        ce(t(() => fe({}, f), [f]));
        let [A, ue] = re(O, H, !1),
          j = m(G, le, de),
          N = i(g)?.isLayoutTemplate,
          P = !!i(te)?.transition?.layout,
          I = q(N, P),
          L = () => !U() || ![`ZWh9kZq5D`, `Yx8geYCJd`].includes(A),
          R = x(`ytp6B3a5C`),
          z = l(null),
          B = x(`Y82j_iKWi`),
          V = l(null),
          W = x(`Jf7JPLKX3`),
          Q = l(null);
        return (
          ae({}),
          o(g.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Y,
              primaryVariantId: `CawUAswJJ`,
              variantClassNames: K,
            },
            children: a(ne, {
              id: D ?? d,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...k,
                  className: m(j, `framer-axsey5`, S),
                  ref: c,
                  style: { ..._ },
                  children: [
                    o(v, {
                      breakpoint: A,
                      overrides: {
                        Yx8geYCJd: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                        ZWh9kZq5D: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(E, {
                        height: 1e3,
                        y: (h?.y || 0) + 0,
                        children: o(w, {
                          className: `framer-90lg0y-container`,
                          layout: I,
                          nodeId: `iiY9OxBFy`,
                          scopeId: `AgTyDC1r5`,
                          children: o(v, {
                            breakpoint: A,
                            overrides: {
                              Yx8geYCJd: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                              ZWh9kZq5D: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                            },
                            children: o(M, {
                              height: `100%`,
                              id: `iiY9OxBFy`,
                              layoutId: `iiY9OxBFy`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1dr774q`,
                      layout: I,
                      children: [
                        a(`div`, {
                          className: `framer-2tzmvq`,
                          children: [
                            a(`div`, {
                              className: `framer-1aod5t1`,
                              children: [
                                o(`div`, {
                                  className: `framer-17f1c2j`,
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h1`, {
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
                                        children: `Enrollments`,
                                      }),
                                    }),
                                    className: `framer-1qvo535`,
                                    fonts: [`GF;Stack Sans Headline-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(C, {
                                  href: { webPageId: `v0NP7rg_A` },
                                  motionChild: !0,
                                  nodeId: `QSrtCOjT5`,
                                  openInNewTab: !1,
                                  scopeId: `AgTyDC1r5`,
                                  children: o(v, {
                                    breakpoint: A,
                                    overrides: {
                                      Yx8geYCJd: { "data-border": !0 },
                                      ZWh9kZq5D: { "data-border": !0 },
                                    },
                                    children: o(u.a, {
                                      className: `framer-ttduee framer-vpm55m`,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-f2ye41`,
                                        children: o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Yx8geYCJd: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                            ZWh9kZq5D: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                          },
                                          children: a(y, {
                                            className: `framer-om4gck`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              o(y, {
                                                className: `framer-1ig3y2f`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              o(y, {
                                                className: `framer-1vdc36r`,
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
                            L() &&
                              a(`div`, {
                                className: `framer-11nzjbn hidden-y8msji hidden-9s4676`,
                                children: [
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(C, {
                                          href: { hash: `:ytp6B3a5C`, webPageId: `AgTyDC1r5` },
                                          motionChild: !0,
                                          nodeId: `jLJssncZ1`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `AgTyDC1r5`,
                                          smoothScroll: !0,
                                          children: o(u.a, {
                                            className: `framer-styles-preset-fx4193`,
                                            "data-styles-preset": `uWIEDCuYW`,
                                            children: o(`strong`, { children: `Основные макеты` }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1kj2xdu`,
                                    fonts: [`GF;Stack Sans Text-regular`, `GF;Stack Sans Text-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(C, {
                                          href: { hash: `:Y82j_iKWi`, webPageId: `AgTyDC1r5` },
                                          motionChild: !0,
                                          nodeId: `AD2C6wWxd`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `AgTyDC1r5`,
                                          smoothScroll: !0,
                                          children: o(u.a, {
                                            className: `framer-styles-preset-fx4193`,
                                            "data-styles-preset": `uWIEDCuYW`,
                                            children: o(`strong`, {
                                              children: `Пользовательские исследования и раннее концептирование`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-ynh0rd`,
                                    fonts: [`GF;Stack Sans Text-regular`, `GF;Stack Sans Text-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(C, {
                                          href: { hash: `:Jf7JPLKX3`, webPageId: `AgTyDC1r5` },
                                          motionChild: !0,
                                          nodeId: `mmrmHLVNZ`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `AgTyDC1r5`,
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
                                    className: `framer-ma0upn`,
                                    fonts: [`GF;Stack Sans Text-regular`, `GF;Stack Sans Text-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        a(`div`, {
                          className: `framer-1dcis8k`,
                          children: [
                            a(`div`, {
                              className: `framer-15bqwcc`,
                              children: [
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    sYEatTzoX: {
                                      children: o(r, {
                                        children: o(`h2`, {
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
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, { children: `Обзор проекта` }),
                                          }),
                                        }),
                                      }),
                                    },
                                    Yx8geYCJd: {
                                      children: o(r, {
                                        children: o(`h2`, {
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
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, { children: `Обзор проекта` }),
                                          }),
                                        }),
                                      }),
                                    },
                                    ZWh9kZq5D: {
                                      children: o(r, {
                                        children: o(`h2`, {
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
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, { children: `Обзор проекта` }),
                                          }),
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h2`, {
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
                                        children: o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: o(`strong`, { children: `Обзор проекта` }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-r0ud4u`,
                                    fonts: [
                                      `GF;Stack Sans Headline-500`,
                                      `GF;Stack Sans Headline-700`,
                                    ],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    sYEatTzoX: {
                                      children: a(r, {
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
                                            children: `Программа Enrollments — это сложная внутренняя легаси-система регистрации, изначально разработанная для онбординга медицинских провайдеров с крупнейшими страховыми компаниями США и обрабатывающая тысячи транзакций ежедневно. Её основная задача — подключение медицинских офисов к системам Optum, через которые провайдеры могут напрямую взаимодействовать с биллинговыми платформами страховщиков. Изначально система и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки.`,
                                          }),
                                          a(`p`, {
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
                                              `В 2025 году моей команде было поручено трансформировать этот инструмент в масштабируемый self-service портал: упростить и ускорить процесс настройки, чтобы медицинские провайдеры могли работать с системой самостоятельно или с минимальной поддержкой. `,
                                              o(`strong`, {
                                                children: `В результате нам удалось снизить количество обращений в поддержку, связанных с процессом регистрации, более чем на 40% в течение трёх месяцев после запуска.`,
                                              }),
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
                                            children: `В перспективе Enrollments будет развиваться в централизованную платформу с поддержкой ИИ для регистрации, конфигурации и дальнейшей поддержки пользователей во всех продуктах Optum.`,
                                          }),
                                        ],
                                      }),
                                    },
                                    Yx8geYCJd: {
                                      children: a(r, {
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
                                            children: `Программа Enrollments — это сложная внутренняя легаси-система регистрации, изначально разработанная для онбординга медицинских провайдеров с крупнейшими страховыми компаниями США и обрабатывающая тысячи транзакций ежедневно. Её основная задача — подключение медицинских офисов к системам Optum, через которые провайдеры могут напрямую взаимодействовать с биллинговыми платформами страховщиков. Изначально система и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки.`,
                                          }),
                                          a(`p`, {
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
                                              `В 2025 году моей команде было поручено трансформировать этот инструмент в масштабируемый self-service портал: упростить и ускорить процесс настройки, чтобы медицинские провайдеры могли работать с системой самостоятельно или с минимальной поддержкой. `,
                                              o(`strong`, {
                                                children: `В результате нам удалось снизить количество обращений в поддержку, связанных с процессом регистрации, более чем на 40% в течение трёх месяцев после запуска.`,
                                              }),
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
                                            children: `В перспективе Enrollments будет развиваться в централизованную платформу с поддержкой ИИ для регистрации, конфигурации и дальнейшей поддержки пользователей во всех продуктах Optum.`,
                                          }),
                                        ],
                                      }),
                                    },
                                    ZWh9kZq5D: {
                                      children: a(r, {
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
                                            children: `Программа Enrollments — это сложная внутренняя легаси-система регистрации, изначально разработанная для онбординга медицинских провайдеров с крупнейшими страховыми компаниями США и обрабатывающая тысячи транзакций ежедневно. Её основная задача — подключение медицинских офисов к системам Optum, через которые провайдеры могут напрямую взаимодействовать с биллинговыми платформами страховщиков. Изначально система и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки.`,
                                          }),
                                          a(`p`, {
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
                                              `В 2025 году моей команде было поручено трансформировать этот инструмент в масштабируемый self-service портал: упростить и ускорить процесс настройки, чтобы медицинские провайдеры могли работать с системой самостоятельно или с минимальной поддержкой. `,
                                              o(`strong`, {
                                                children: `В результате нам удалось снизить количество обращений в поддержку, связанных с процессом регистрации, более чем на 40% в течение трёх месяцев после запуска.`,
                                              }),
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
                                            children: `В перспективе Enrollments будет развиваться в централизованную платформу с поддержкой ИИ для регистрации, конфигурации и дальнейшей поддержки пользователей во всех продуктах Optum.`,
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
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
                                          children: `Программа Enrollments — это сложная внутренняя легаси-система регистрации, изначально разработанная для онбординга медицинских провайдеров с крупнейшими страховыми компаниями США и обрабатывающая тысячи транзакций ежедневно. Её основная задача — подключение медицинских офисов к системам Optum, через которые провайдеры могут напрямую взаимодействовать с биллинговыми платформами страховщиков. Изначально система и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки.`,
                                        }),
                                        a(`p`, {
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
                                            `В 2025 году моей команде было поручено трансформировать этот инструмент в масштабируемый self-service портал: упростить и ускорить процесс настройки, чтобы медицинские провайдеры могли работать с системой самостоятельно или с минимальной поддержкой. `,
                                            o(`strong`, {
                                              children: `В результате нам удалось снизить количество обращений в поддержку, связанных с процессом регистрации, более чем на 40% в течение трёх месяцев после запуска.`,
                                            }),
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
                                          children: `В перспективе Enrollments будет развиваться в централизованную платформу с поддержкой ИИ для регистрации, конфигурации и дальнейшей поддержки пользователей во всех продуктах Optum.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-19e8gs2`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            o(v, {
                              breakpoint: A,
                              overrides: {
                                sYEatTzoX: {
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Основные макеты`,
                                      }),
                                    }),
                                  }),
                                },
                                Yx8geYCJd: {
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Основные макеты`,
                                      }),
                                    }),
                                  }),
                                },
                                ZWh9kZq5D: {
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Основные макеты`,
                                      }),
                                    }),
                                  }),
                                },
                              },
                              children: o(b, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: o(`h3`, {
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
                                    children: o(`mark`, {
                                      style: { "--framer-text-background-radius": `0px` },
                                      children: `Основные макеты`,
                                    }),
                                  }),
                                }),
                                className: `framer-4kcib6`,
                                fonts: [`GF;Stack Sans Headline-600`],
                                id: R,
                                ref: z,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            o(`div`, {
                              className: `framer-7ula`,
                              children: a(`div`, {
                                className: `framer-b4xm9p`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1oxuizy`,
                                    children: [
                                      a(`div`, {
                                        className: `framer-aoxlbd`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              Yx8geYCJd: {
                                                children: o(r, {
                                                  children: o(`h6`, {
                                                    className: `framer-styles-preset-yhn7fw`,
                                                    "data-styles-preset": `SDQdvccR0`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: o(`strong`, { children: `Landing` }),
                                                  }),
                                                }),
                                                fonts: [`Inter`, `Inter-Bold`],
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: o(`strong`, { children: `Landing` }),
                                                }),
                                              }),
                                              className: `framer-s6dv9p`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-76bbce`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        184.4 +
                                                        0 +
                                                        428.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        244 -
                                                        215.5299
                                                    ),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1736,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120`,
                                                    srcSet: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=512&width=1736&height=1120 512w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=1024&width=1736&height=1120 1024w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120 1736w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        69.2 +
                                                        0 +
                                                        320.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        244 -
                                                        104.5299
                                                    ),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1736,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120`,
                                                    srcSet: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=512&width=1736&height=1120 512w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=1024&width=1736&height=1120 1024w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120 1736w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        77.2 +
                                                        0 +
                                                        401 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        244 -
                                                        224.5299
                                                    ),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1736,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120`,
                                                    srcSet: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=512&width=1736&height=1120 512w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=1024&width=1736&height=1120 1024w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120 1736w`,
                                                  },
                                                },
                                              },
                                              children: o(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1120,
                                                  intrinsicWidth: 1736,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      184.4 +
                                                      0 +
                                                      523.3 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      244 -
                                                      280.5299
                                                  ),
                                                  pixelHeight: 1120,
                                                  pixelWidth: 1736,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120`,
                                                  srcSet: `https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=512&width=1736&height=1120 512w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?scale-down-to=1024&width=1736&height=1120 1024w,https://framerusercontent.com/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg?width=1736&height=1120 1736w`,
                                                },
                                                className: `framer-1ba2nby`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-kx13ja`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              Yx8geYCJd: {
                                                children: o(r, {
                                                  children: o(`h6`, {
                                                    className: `framer-styles-preset-yhn7fw`,
                                                    "data-styles-preset": `SDQdvccR0`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Submitter Main`,
                                                    }),
                                                  }),
                                                }),
                                                fonts: [`Inter`, `Inter-Bold`],
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Submitter Main`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-guydbs`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-zlnk42`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        184.4 +
                                                        0 +
                                                        428.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        0
                                                    ),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921`,
                                                    srcSet: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921 1398w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        69.2 +
                                                        0 +
                                                        320.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        0
                                                    ),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921`,
                                                    srcSet: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921 1398w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        77.2 +
                                                        0 +
                                                        401 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        0
                                                    ),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921`,
                                                    srcSet: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921 1398w`,
                                                  },
                                                },
                                              },
                                              children: o(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 921,
                                                  intrinsicWidth: 1398,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      184.4 +
                                                      0 +
                                                      523.3 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      0
                                                  ),
                                                  pixelHeight: 921,
                                                  pixelWidth: 1398,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921`,
                                                  srcSet: `https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/etpcWyL45ctt6266oGQM2EvKEI.png?width=1398&height=921 1398w`,
                                                },
                                                className: `framer-1twbej2`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-1k23dox`,
                                    children: [
                                      a(`div`, {
                                        className: `framer-yhvl03`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              Yx8geYCJd: {
                                                children: o(r, {
                                                  children: o(`h6`, {
                                                    className: `framer-styles-preset-yhn7fw`,
                                                    "data-styles-preset": `SDQdvccR0`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Enrollments List`,
                                                    }),
                                                  }),
                                                }),
                                                fonts: [`Inter`, `Inter-Bold`],
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Enrollments List`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-yql46e`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-1lg13gi`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        184.4 +
                                                        0 +
                                                        428.2 +
                                                        0 +
                                                        0 +
                                                        314.2 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        244 -
                                                        243.5299
                                                    ),
                                                    pixelHeight: 1080,
                                                    pixelWidth: 1920,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080`,
                                                    srcSet: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080 1920w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        69.2 +
                                                        0 +
                                                        320.2 +
                                                        0 +
                                                        0 +
                                                        309 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        244 -
                                                        243.5299
                                                    ),
                                                    pixelHeight: 1080,
                                                    pixelWidth: 1920,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080`,
                                                    srcSet: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080 1920w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        77.2 +
                                                        0 +
                                                        401 +
                                                        0 +
                                                        0 +
                                                        314.2 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        244 -
                                                        243.5299
                                                    ),
                                                    pixelHeight: 1080,
                                                    pixelWidth: 1920,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080`,
                                                    srcSet: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080 1920w`,
                                                  },
                                                },
                                              },
                                              children: o(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      184.4 +
                                                      0 +
                                                      523.3 +
                                                      0 +
                                                      0 +
                                                      333.2 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080`,
                                                  srcSet: `https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png?width=1920&height=1080 1920w`,
                                                },
                                                className: `framer-1mher31`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-1ws1x0m`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              Yx8geYCJd: {
                                                children: o(r, {
                                                  children: a(`h6`, {
                                                    className: `framer-styles-preset-yhn7fw`,
                                                    "data-styles-preset": `SDQdvccR0`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: [
                                                      o(`strong`, { children: `Основной режим ` }),
                                                      o(`strong`, { children: o(`br`, {}) }),
                                                      o(`strong`, { children: `редактирования` }),
                                                    ],
                                                  }),
                                                }),
                                                fonts: [`Inter`, `Inter-Bold`],
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Основной экран редактирования`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-u1kdq0`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-1kle1rg`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        184.4 +
                                                        0 +
                                                        428.2 +
                                                        0 +
                                                        0 +
                                                        314.2 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        244 -
                                                        243.5299
                                                    ),
                                                    pixelHeight: 737,
                                                    pixelWidth: 1312,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737`,
                                                    srcSet: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=512&width=1312&height=737 512w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=1024&width=1312&height=737 1024w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737 1312w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        69.2 +
                                                        0 +
                                                        320.2 +
                                                        0 +
                                                        0 +
                                                        309 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        244 -
                                                        243.5299
                                                    ),
                                                    pixelHeight: 737,
                                                    pixelWidth: 1312,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 48px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737`,
                                                    srcSet: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=512&width=1312&height=737 512w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=1024&width=1312&height=737 1024w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737 1312w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        77.2 +
                                                        0 +
                                                        401 +
                                                        0 +
                                                        0 +
                                                        314.2 +
                                                        0 +
                                                        0 +
                                                        30.2 +
                                                        244 -
                                                        243.5299
                                                    ),
                                                    pixelHeight: 737,
                                                    pixelWidth: 1312,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${h?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737`,
                                                    srcSet: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=512&width=1312&height=737 512w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=1024&width=1312&height=737 1024w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737 1312w`,
                                                  },
                                                },
                                              },
                                              children: o(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 737,
                                                  intrinsicWidth: 1312,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      184.4 +
                                                      0 +
                                                      523.3 +
                                                      0 +
                                                      0 +
                                                      333.2 +
                                                      0 +
                                                      0 +
                                                      30.2 +
                                                      244 -
                                                      243.5299
                                                  ),
                                                  pixelHeight: 737,
                                                  pixelWidth: 1312,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737`,
                                                  srcSet: `https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=512&width=1312&height=737 512w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?scale-down-to=1024&width=1312&height=737 1024w,https://framerusercontent.com/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png?width=1312&height=737 1312w`,
                                                },
                                                className: `framer-18ipf4y`,
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
                            a(`div`, {
                              className: `framer-1119l3s`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: o(`strong`, { children: `Основная задача` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-xb5hwn`,
                                  fonts: [
                                    `GF;Stack Sans Headline-600`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
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
                                      children: `У нас был год, чтобы постепенно трансформировать существующий сложный легаси-инструмент в современное и интуитивно понятное решение. Ключевой задачей было не просто упростить интерфейс, а сделать это поэтапно, аккуратно снижая уровень сложности без нарушения устоявшихся процессов. Программа используется ежедневно для управления тысячами подключений и является критически важной для операционной деятельности. Поэтому все обновления внедрялись последовательно, с максимальным сохранением функциональности.`,
                                    }),
                                  }),
                                  className: `framer-yx03j7`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-14zihww`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: o(`strong`, { children: `Моя роль` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1yrxyvh`,
                                  fonts: [
                                    `GF;Stack Sans Headline-600`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
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
                                        children: `Я присоединилась к проекту в начале 2025 года в роли ведущего UX-дизайнера и лидера команды, включающей младшего UX-дизайнера и UX-исследователя. Мы начали с глубокого анализа существующего продукта, пользовательских сценариев и рабочих процессов, выделив критически важные функции и отделив их от кейс-специфик надстроек. Все процессы были декомпозированы до базовых шагов, что позволило определить ключевые сценарии, покрывающие около 80% повседневных задач. Эти сценарии стали основой первого уровня навигации, тогда как второстепенные функции были перенесены на соответствующие этапы выполнения задач.`,
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
                                        children: `Такой подход позволил переосмыслить и существенно упростить ключевые пользовательские сценарии для внешних пользователей, снизить когнитивную нагрузку и логично структурировать функциональность, показывая дополнительные возможности только в тот момент, когда они действительно необходимы.`,
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
                                        children: `Целью было создать простой и интуитивно понятный интерфейс, который понятен с первого взгляда и не требует обучения или дополнительной документации.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-ab4ka9`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-9bw73d`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: o(`strong`, { children: `Ключевые UX-решения` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1ezhp6x`,
                                  fonts: [
                                    `GF;Stack Sans Headline-600`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: a(`ul`, {
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
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: `Фокусировка навигации на ключевых рабочих процессах.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: `Приоритизация информации, отображая её в нужный момент.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: `Устранение лишних шагов и редких пограничных сценариев.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: `Добавление встроенной помощи и контекстных подсказок.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            children: `Внедрение механизмов обратной связи в реальном времени для поддержки информированности и уверенности пользователей.`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-1x432jo`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1sgkvvv`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: o(`strong`, { children: `Инструменты` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1d4wt7n`,
                                  fonts: [
                                    `GF;Stack Sans Headline-600`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    sYEatTzoX: {
                                      children: o(r, {
                                        children: o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                        }),
                                      }),
                                    },
                                    Yx8geYCJd: {
                                      children: o(r, {
                                        children: o(`p`, {
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
                                          children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                        }),
                                      }),
                                    },
                                    ZWh9kZq5D: {
                                      children: o(r, {
                                        children: o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-text-color": `rgb(20, 20, 20)`,
                                          },
                                          children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
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
                                        children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                      }),
                                    }),
                                    className: `framer-7bkw5k`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1annr6e`,
                              "data-border": !0,
                              id: B,
                              ref: V,
                              children: [
                                a(`div`, {
                                  className: `framer-1ww8shb`,
                                  children: [
                                    o(v, {
                                      breakpoint: A,
                                      overrides: {
                                        sYEatTzoX: {
                                          children: o(r, {
                                            children: o(`h2`, {
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
                                              children: o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: o(`strong`, {
                                                  children: `Пользовательские исследования и раннее концептирование`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        Yx8geYCJd: {
                                          children: o(r, {
                                            children: o(`h2`, {
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
                                              children: o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: o(`strong`, {
                                                  children: `Пользовательские исследования и раннее концептирование`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        ZWh9kZq5D: {
                                          children: o(r, {
                                            children: o(`h2`, {
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
                                              children: o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: o(`strong`, {
                                                  children: `Пользовательские исследования и раннее концептирование`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(b, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`h2`, {
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
                                            children: o(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: o(`strong`, {
                                                children: `Пользовательские исследования и раннее концептирование`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1k6nfcf`,
                                        fonts: [
                                          `GF;Stack Sans Headline-500`,
                                          `GF;Stack Sans Headline-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
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
                                          children: `С самого начала проекта моя команда тесно сотрудничала с проектным менеджером, чтобы понять инструмент и существующие рабочие процессы. Мы анализировали поведение пользователей на обеих существующих платформах, выявляли болевые точки и шаблоны использования, а также возможности для улучшения. В рамках исследования мы провели анализ существующих пользовательских данных, конкурентный анализ и интервью с пользователями, чтобы глубже понять текущие продукты, их аудиторию и определить наилучший способ их объединения. Эти исследования заложили прочную основу для формирования требований пользователей и проектирования решений, которые учитывают как потребности пользователей, так и бизнес-цели.`,
                                        }),
                                      }),
                                      className: `framer-lyfa23`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-1m542r6`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-1diaag4`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
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
                                              children: o(`strong`, {
                                                children: `Проектная Доска`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1f9j8hg`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    184.4 +
                                                    0 +
                                                    2571.3 +
                                                    24 +
                                                    181.1 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 7392,
                                                pixelWidth: 7751,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                                srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    69.2 +
                                                    0 +
                                                    2322.9 +
                                                    16 +
                                                    179.3 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 7392,
                                                pixelWidth: 7751,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                                srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    77.2 +
                                                    0 +
                                                    2504.1 +
                                                    24 +
                                                    190.1 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 7392,
                                                pixelWidth: 7751,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                                srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                              },
                                            },
                                          },
                                          children: o(T, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  184.4 +
                                                  0 +
                                                  2712.9 +
                                                  24 +
                                                  205.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 7392,
                                              pixelWidth: 7751,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                              srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                            },
                                            className: `framer-e68ye3`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-15v1ggg`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
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
                                              children: o(`strong`, {
                                                children: `Моделирование объектов и основные пользовательские сценарии`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1rorlwh`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    184.4 +
                                                    0 +
                                                    2571.3 +
                                                    24 +
                                                    181.1 +
                                                    0 +
                                                    783.5 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 17299,
                                                pixelWidth: 23700,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299`,
                                                srcSet: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=512&width=23700&height=17299 512w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=1024&width=23700&height=17299 1024w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=2048&width=23700&height=17299 2048w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=4096&width=23700&height=17299 4096w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299 23700w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    69.2 +
                                                    0 +
                                                    2322.9 +
                                                    16 +
                                                    179.3 +
                                                    0 +
                                                    478.5 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 17299,
                                                pixelWidth: 23700,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299`,
                                                srcSet: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=512&width=23700&height=17299 512w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=1024&width=23700&height=17299 1024w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=2048&width=23700&height=17299 2048w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=4096&width=23700&height=17299 4096w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299 23700w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    77.2 +
                                                    0 +
                                                    2504.1 +
                                                    24 +
                                                    190.1 +
                                                    0 +
                                                    832.5 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 17299,
                                                pixelWidth: 23700,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299`,
                                                srcSet: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=512&width=23700&height=17299 512w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=1024&width=23700&height=17299 1024w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=2048&width=23700&height=17299 2048w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=4096&width=23700&height=17299 4096w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299 23700w`,
                                              },
                                            },
                                          },
                                          children: o(T, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  184.4 +
                                                  0 +
                                                  2712.9 +
                                                  24 +
                                                  205.5 +
                                                  0 +
                                                  990.5 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 17299,
                                              pixelWidth: 23700,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299`,
                                              srcSet: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=512&width=23700&height=17299 512w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=1024&width=23700&height=17299 1024w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=2048&width=23700&height=17299 2048w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=4096&width=23700&height=17299 4096w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299 23700w`,
                                            },
                                            className: `framer-p1it0r`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    184.4 +
                                                    0 +
                                                    2571.3 +
                                                    24 +
                                                    181.1 +
                                                    0 +
                                                    783.5 +
                                                    0 +
                                                    639.5
                                                ),
                                                pixelHeight: 6236,
                                                pixelWidth: 14342,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    69.2 +
                                                    0 +
                                                    2322.9 +
                                                    16 +
                                                    179.3 +
                                                    0 +
                                                    478.5 +
                                                    0 +
                                                    399.5
                                                ),
                                                pixelHeight: 6236,
                                                pixelWidth: 14342,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    77.2 +
                                                    0 +
                                                    2504.1 +
                                                    24 +
                                                    190.1 +
                                                    0 +
                                                    832.5 +
                                                    0 +
                                                    670.5
                                                ),
                                                pixelHeight: 6236,
                                                pixelWidth: 14342,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                              },
                                            },
                                          },
                                          children: o(T, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  184.4 +
                                                  0 +
                                                  2712.9 +
                                                  24 +
                                                  205.5 +
                                                  0 +
                                                  990.5 +
                                                  0 +
                                                  785.5
                                              ),
                                              pixelHeight: 6236,
                                              pixelWidth: 14342,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                              srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                            },
                                            className: `framer-1qij601`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-uxad9`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
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
                                              children: o(`strong`, { children: `Personas` }),
                                            }),
                                          }),
                                          className: `framer-kop8nb`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    184.4 +
                                                    0 +
                                                    2571.3 +
                                                    24 +
                                                    181.1 +
                                                    0 +
                                                    1723 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 8540,
                                                pixelWidth: 10034,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540`,
                                                srcSet: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=512&width=10034&height=8540 512w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=1024&width=10034&height=8540 1024w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=2048&width=10034&height=8540 2048w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=4096&width=10034&height=8540 4096w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540 10034w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    69.2 +
                                                    0 +
                                                    2322.9 +
                                                    16 +
                                                    179.3 +
                                                    0 +
                                                    1039 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 8540,
                                                pixelWidth: 10034,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540`,
                                                srcSet: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=512&width=10034&height=8540 512w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=1024&width=10034&height=8540 1024w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=2048&width=10034&height=8540 2048w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=4096&width=10034&height=8540 4096w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540 10034w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    77.2 +
                                                    0 +
                                                    2504.1 +
                                                    24 +
                                                    190.1 +
                                                    0 +
                                                    1826 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 8540,
                                                pixelWidth: 10034,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540`,
                                                srcSet: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=512&width=10034&height=8540 512w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=1024&width=10034&height=8540 1024w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=2048&width=10034&height=8540 2048w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=4096&width=10034&height=8540 4096w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540 10034w`,
                                              },
                                            },
                                          },
                                          children: o(T, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  184.4 +
                                                  0 +
                                                  2712.9 +
                                                  24 +
                                                  205.5 +
                                                  0 +
                                                  2179 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 8540,
                                              pixelWidth: 10034,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540`,
                                              srcSet: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=512&width=10034&height=8540 512w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=1024&width=10034&height=8540 1024w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=2048&width=10034&height=8540 2048w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=4096&width=10034&height=8540 4096w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540 10034w`,
                                            },
                                            className: `framer-1w86onu`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-1pazivn`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
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
                                              children: o(`strong`, {
                                                children: `Конкурентный анализ`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-y6y36h`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    184.4 +
                                                    0 +
                                                    2571.3 +
                                                    24 +
                                                    181.1 +
                                                    0 +
                                                    2438.5 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 10408,
                                                pixelWidth: 7152,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408`,
                                                srcSet: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=1024&width=7152&height=10408 703w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=2048&width=7152&height=10408 1407w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=4096&width=7152&height=10408 2814w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408 7152w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    69.2 +
                                                    0 +
                                                    2322.9 +
                                                    16 +
                                                    179.3 +
                                                    0 +
                                                    1482.5 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 10408,
                                                pixelWidth: 7152,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408`,
                                                srcSet: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=1024&width=7152&height=10408 703w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=2048&width=7152&height=10408 1407w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=4096&width=7152&height=10408 2814w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408 7152w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    24 +
                                                    77.2 +
                                                    0 +
                                                    2504.1 +
                                                    24 +
                                                    190.1 +
                                                    0 +
                                                    2586.5 +
                                                    0 +
                                                    139.5
                                                ),
                                                pixelHeight: 10408,
                                                pixelWidth: 7152,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${h?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408`,
                                                srcSet: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=1024&width=7152&height=10408 703w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=2048&width=7152&height=10408 1407w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=4096&width=7152&height=10408 2814w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408 7152w`,
                                              },
                                            },
                                          },
                                          children: o(T, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  184.4 +
                                                  0 +
                                                  2712.9 +
                                                  24 +
                                                  205.5 +
                                                  0 +
                                                  3081.5 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 10408,
                                              pixelWidth: 7152,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408`,
                                              srcSet: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=1024&width=7152&height=10408 703w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=2048&width=7152&height=10408 1407w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=4096&width=7152&height=10408 2814w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408 7152w`,
                                            },
                                            className: `framer-1n01k3e`,
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
                            a(`div`, {
                              className: `framer-1sv740f`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
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
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: o(`strong`, { children: `Прототипы и макеты` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1h5o275`,
                                  fonts: [
                                    `GF;Stack Sans Headline-600`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  id: W,
                                  ref: Q,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-1tgk131`,
                                  "data-border": !0,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                            "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                          },
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, {
                                              children: `Новая навигация и главная страница.`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1ov2t0s`,
                                      fonts: [
                                        `GF;Stack Sans Headline-500`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
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
                                          children: `Мы упростили навигацию, автоматизировав выбор медицинского учреждения через пользовательские настройки. Это позволило трансформировать сложный процесс, разделив его на две простые и интуитивно понятные функции: выбор учреждения и создание enrollments. В результате landing-страница была переосмыслена и сфокусирована на ключевом действии, работе с Enrollments, что существенно снизило когнитивную нагрузку. Это привело к повышению успешности выполнения задач и заметному снижению уровня пользовательской фрустрации.`,
                                        }),
                                      }),
                                      className: `framer-8gqiao`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-1jkopas`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-rj3hvk`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
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
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Оригинальный лендинг и система навигации`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1p9c38w`,
                                              fonts: [
                                                `GF;Stack Sans Headline-600`,
                                                `GF;Stack Sans Headline-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
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
                                                  children: `Изначально главная страница не имела чёткой и логичной структуры. Пользователям необходимо было выбрать учреждение перед началом создания зачисления, однако это требование нигде явно не обозначалось. Основной CTA «Create Enrollment» направлял пользователей к выбору или созданию учреждения, что часто приводило к прерыванию сценария и попыткам найти альтернативный способ создания зачислений.`,
                                                }),
                                              }),
                                              className: `framer-1i49219`,
                                              fonts: [`GF;Varela Round-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        184.4 +
                                                        0 +
                                                        6379.4 +
                                                        0 +
                                                        46.8 +
                                                        24 +
                                                        197.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        186.3
                                                    ),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921`,
                                                    srcSet: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921 1398w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        69.2 +
                                                        0 +
                                                        4662.2 +
                                                        0 +
                                                        46.8 +
                                                        16 +
                                                        197.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        186.3
                                                    ),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                    src: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921`,
                                                    srcSet: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921 1398w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        77.2 +
                                                        0 +
                                                        6523.2 +
                                                        0 +
                                                        46.8 +
                                                        24 +
                                                        197.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        186.3
                                                    ),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(${h?.width || `100vw`} - 112px)`,
                                                    src: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921`,
                                                    srcSet: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921 1398w`,
                                                  },
                                                },
                                              },
                                              children: o(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 921,
                                                  intrinsicWidth: 1398,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      184.4 +
                                                      0 +
                                                      7479.4 +
                                                      0 +
                                                      46.8 +
                                                      24 +
                                                      197.5 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      186.3
                                                  ),
                                                  pixelHeight: 921,
                                                  pixelWidth: 1398,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921`,
                                                  srcSet: `https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=512&width=1398&height=921 512w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?scale-down-to=1024&width=1398&height=921 1024w,https://framerusercontent.com/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png?width=1398&height=921 1398w`,
                                                },
                                                className: `framer-pvl97h`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(`div`, {
                                          className: `framer-ifugpr`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
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
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Новый лендинг и система навигации`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-i0j19o`,
                                              fonts: [
                                                `GF;Stack Sans Headline-600`,
                                                `GF;Stack Sans Headline-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
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
                                                    children: `В обновлённом рабочем процессе выбор учреждения выполняется ещё до входа в интерфейс, разбивая процесс на понятные последовательные шаги и снижая когнитивную нагрузку. Пользователи могут сохранять своё учреждение по умолчанию, чтобы экономить время при последующих входах.`,
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
                                                    children: `После входа они сразу попадают в рабочее пространство выбранного учреждения, где могут быстро создавать enrollment с новыми плательщиками, получать доступ к настраиваемой отчетности и пользоваться поддержкой встроенного AI-ассистента в нужный момент.`,
                                                  }),
                                                ],
                                              }),
                                              className: `framer-1jjse6d`,
                                              fonts: [`GF;Varela Round-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-aww3af`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-1cs3502-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `JvN3kEOWL`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: o(F, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `JvN3kEOWL`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `JvN3kEOWL`,
                                                    loop: !0,
                                                    muted: !1,
                                                    objectFit: `scale-down`,
                                                    playing: !0,
                                                    posterEnabled: !0,
                                                    srcFile: `https://framerusercontent.com/assets/kDLLqBXVDJKpyeMNdCGx4oiMzk.mp4`,
                                                    srcType: `Upload`,
                                                    srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                    startTime: 0,
                                                    style: { width: `100%` },
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
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
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-18ixo3c`,
                                  "data-border": !0,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                            "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                          },
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, {
                                              children: `Редизайн страницы Enrollments`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-ignxa4`,
                                      fonts: [
                                        `GF;Stack Sans Headline-500`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
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
                                          children: `Оригинальная страница была неудобна для просмотра и управления: информация была скрыта, а для доступа приходилось использовать горизонтальную прокрутку. Новый дизайн страницы позволил организовать данные так, чтобы с ними было удобно работать. Пользователи теперь могут быстро видеть статус enrollment, выполнять действия с несколькими объектами одновременно с помощью функции «bulk actions» и оставлять заметки для удобного последующего отслеживания. Визуальные подсказки выделяют отправленные и ожидающие подтверждения соглашения, делая рабочие процессы более эффективными и снижая нагрузку на пользователя.`,
                                        }),
                                      }),
                                      className: `framer-1bsj3bs`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-1xp5947`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-78a6a`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
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
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Оригинальная страница Enrollments`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-7aa23w`,
                                              fonts: [
                                                `GF;Stack Sans Headline-600`,
                                                `GF;Stack Sans Headline-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
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
                                                  children: `Изначальная страница Enrollments перегружала пользователей большим количеством параметров поиска и фильтрации, большинство из которых было для них неактуально. Ключевая информация и основные действия были скрыты в широкой, перегруженной таблице, что затрудняло поиск обновлений и эффективное выполнение критически важных задач. Отсутствие фокуса и слабая иерархия информации часто вызывали у пользователей раздражение и делали страницу неэффективной.`,
                                                }),
                                              }),
                                              className: `framer-19ufz9h`,
                                              fonts: [`GF;Varela Round-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-4bufna`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-sjn71x-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `W_VWndSqm`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: o(F, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `W_VWndSqm`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `W_VWndSqm`,
                                                    loop: !0,
                                                    muted: !1,
                                                    objectFit: `scale-down`,
                                                    playing: !0,
                                                    posterEnabled: !0,
                                                    srcFile: `https://framerusercontent.com/assets/ciAGlfVDxtAqYuPy3IJn5Q06h0.mp4`,
                                                    srcType: `Upload`,
                                                    srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                    startTime: 0,
                                                    style: { width: `100%` },
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
                                                    volume: 25,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(`div`, {
                                          className: `framer-1tgyhz0`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
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
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Новая страница Enrollments`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-50zgw7`,
                                              fonts: [
                                                `GF;Stack Sans Headline-600`,
                                                `GF;Stack Sans Headline-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
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
                                                  children: `В новом дизайне мы сосредоточились на простом и интуитивно понятном представлении информации. При этом была сохранена преемственность с оригинальным интерфейсом, с улучшением ключевых элементов. Поиск был упрощён, с добавлением возможности сохранять часто используемые запросы. Информация организована с акцентом на ключевые данные, при этом пользователи могут настраивать таблицу под нестандартные сценарии. Также была добавлена возможность работать с несколькими enrollments одновременно с помощью функции «bulk actions».`,
                                                }),
                                              }),
                                              className: `framer-1xriopz`,
                                              fonts: [`GF;Varela Round-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-m5h3h7`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-5dgbnb-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `h2LFS0AtU`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: o(F, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `h2LFS0AtU`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `h2LFS0AtU`,
                                                    loop: !0,
                                                    muted: !1,
                                                    objectFit: `scale-down`,
                                                    playing: !0,
                                                    posterEnabled: !0,
                                                    srcFile: `https://framerusercontent.com/assets/rXd8pZgfaTQfIipA99pvEdjcZEs.mp4`,
                                                    srcType: `Upload`,
                                                    srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                    startTime: 0,
                                                    style: { width: `100%` },
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
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
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-1eir9kx`,
                                  "data-border": !0,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                            "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.88)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                          },
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, {
                                              children: `Редизайн Enrollments workflow`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-4f4l92`,
                                      fonts: [
                                        `GF;Stack Sans Headline-500`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
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
                                            children: `Основной проблемой рабочего процесса "Создание Enrollment" было большое количество возможных вариантов, с которыми могли столкнуться пользователи. В предыдущих версиях все варианты сразу показывались пользователю, что приводило к чрезмерному количеству шагов и избыточной сложности для большинства случаев.`,
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
                                            children: `Для новой модели самообслуживания мы применили иной подход. Мы выделили три ключевых шага, обязательных для всех Enrollment, которые охватывают примерно 80 процентов сценариев. Эти шаги образуют основной поток. Для оставшихся редких случаев мы добавили контекстные уведомления, постепенное раскрытие информации и валидацию, чтобы дополнительные требования появлялись только при необходимости.`,
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
                                            children: `Такой подход значительно снизил когнитивную нагрузку, сохранив полную функциональность. В будущей итерации планируется внедрить инструмент планирования, позволяющий группировать Enrollment для удобной организации, отслеживания и управления процессом в масштабах.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-j97w6c`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(`div`, {
                                      className: `framer-9yb5bx`,
                                      children: a(`div`, {
                                        className: `framer-11px804`,
                                        children: [
                                          o(b, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h3`, {
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
                                                children: o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Новый процесс "Создание Enrollment"`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-efhcx0`,
                                            fonts: [
                                              `GF;Stack Sans Headline-600`,
                                              `GF;Stack Sans Headline-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
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
                                                  children: `Новый рабочий процесс "Создание Enrollment" упрощен и состоит из 3 шагов.`,
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
                                                  children: `На первом этапе, пользователь выбирает существующий NPI (National Provider Identifier) из сохраненного списка или создает новый с помощью встроенного подпроцесса. На этом шаге также выбираются типы транзакций, в которых пользователь хочет зарегистрироваться.`,
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
                                                  children: `На втором этапе, система генерирует динамическую форму, которая объединяет всю необходимую информацию для выбранных Enrollment в едином интерфейсе. Форма предварительно заполняется ранее сохраненными данными на основе выбранного NPI. Все поля обязательны для отправки, но пользователи могут сохранить незавершенные Enrollment, если некоторые данные еще недоступны.`,
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
                                                  children: `На третьем этапе, пользователи просматривают созданные записи Enrollment и отправляют те, которые готовы. Остальные можно сохранить и завершить позднее.`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-3ybzne`,
                                            fonts: [`GF;Varela Round-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(`div`, {
                                            className: `framer-1nb816w`,
                                            children: [
                                              o(b, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: o(`strong`, {
                                                        children: `Concepting`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-luqwj9`,
                                                fonts: [
                                                  `GF;Stack Sans Text-regular`,
                                                  `GF;Stack Sans Text-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(v, {
                                                breakpoint: A,
                                                overrides: {
                                                  sYEatTzoX: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: p(
                                                        (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          184.4 +
                                                          0 +
                                                          6379.4 +
                                                          0 +
                                                          2264.5 +
                                                          24 +
                                                          444.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          556.8 +
                                                          0 +
                                                          120
                                                      ),
                                                      pixelHeight: 726,
                                                      pixelWidth: 2400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      src: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726`,
                                                      srcSet: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=512&width=2400&height=726 512w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=1024&width=2400&height=726 1024w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=2048&width=2400&height=726 2048w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726 2400w`,
                                                    },
                                                  },
                                                  Yx8geYCJd: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: p(
                                                        (h?.y || 0) +
                                                          0 +
                                                          800 +
                                                          24 +
                                                          69.2 +
                                                          0 +
                                                          4662.2 +
                                                          0 +
                                                          2002.5 +
                                                          16 +
                                                          444.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          556.8 +
                                                          0 +
                                                          120
                                                      ),
                                                      pixelHeight: 726,
                                                      pixelWidth: 2400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                      src: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726`,
                                                      srcSet: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=512&width=2400&height=726 512w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=1024&width=2400&height=726 1024w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=2048&width=2400&height=726 2048w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726 2400w`,
                                                    },
                                                  },
                                                  ZWh9kZq5D: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: p(
                                                        (h?.y || 0) +
                                                          0 +
                                                          800 +
                                                          24 +
                                                          77.2 +
                                                          0 +
                                                          6523.2 +
                                                          0 +
                                                          2282.5 +
                                                          24 +
                                                          444.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          556.8 +
                                                          0 +
                                                          120
                                                      ),
                                                      pixelHeight: 726,
                                                      pixelWidth: 2400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `calc(${h?.width || `100vw`} - 112px)`,
                                                      src: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726`,
                                                      srcSet: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=512&width=2400&height=726 512w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=1024&width=2400&height=726 1024w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=2048&width=2400&height=726 2048w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726 2400w`,
                                                    },
                                                  },
                                                },
                                                children: o(T, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        184.4 +
                                                        0 +
                                                        7479.4 +
                                                        0 +
                                                        2396.5 +
                                                        24 +
                                                        444.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        556.8 +
                                                        0 +
                                                        120
                                                    ),
                                                    pixelHeight: 726,
                                                    pixelWidth: 2400,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    src: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726`,
                                                    srcSet: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=512&width=2400&height=726 512w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=1024&width=2400&height=726 1024w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=2048&width=2400&height=726 2048w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726 2400w`,
                                                  },
                                                  className: `framer-1ib5thm`,
                                                  "data-framer-name": `Image`,
                                                  fitImageDimension: `height`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          a(`div`, {
                                            className: `framer-93ijns`,
                                            children: [
                                              o(b, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: o(`strong`, {
                                                        children: `Prototype`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-9wx41c`,
                                                fonts: [
                                                  `GF;Stack Sans Text-regular`,
                                                  `GF;Stack Sans Text-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(E, {
                                                children: o(w, {
                                                  className: `framer-1fxr1ai-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `SkcgQywPw`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: o(F, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 4,
                                                    bottomLeftRadius: 4,
                                                    bottomRightRadius: 4,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `SkcgQywPw`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `SkcgQywPw`,
                                                    loop: !0,
                                                    muted: !1,
                                                    objectFit: `scale-down`,
                                                    playing: !0,
                                                    posterEnabled: !0,
                                                    srcFile: `https://framerusercontent.com/assets/yKFZSM31Gl8Mn2T7s6Yj4bRisOE.mp4`,
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
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
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
        `.framer-IsVlL.framer-vpm55m, .framer-IsVlL .framer-vpm55m { display: block; }`,
        `.framer-IsVlL.framer-axsey5 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-IsVlL .framer-90lg0y-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-IsVlL .framer-1dr774q { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 32px; position: relative; width: 1px; }`,
        `.framer-IsVlL .framer-2tzmvq { align-content: flex-start; align-items: flex-start; background-color: #fdfbf9; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 8px 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-IsVlL .framer-1aod5t1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-17f1c2j { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsVlL .framer-1qvo535, .framer-IsVlL .framer-s6dv9p, .framer-IsVlL .framer-guydbs, .framer-IsVlL .framer-yql46e, .framer-IsVlL .framer-u1kdq0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-IsVlL .framer-ttduee { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-IsVlL .framer-f2ye41 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IsVlL .framer-om4gck { height: 13px; position: relative; width: 14px; }`,
        `.framer-IsVlL .framer-1ig3y2f { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-IsVlL .framer-1vdc36r { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-IsVlL .framer-11nzjbn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IsVlL .framer-1kj2xdu, .framer-IsVlL .framer-ynh0rd, .framer-IsVlL .framer-ma0upn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-IsVlL .framer-1dcis8k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-15bqwcc, .framer-IsVlL .framer-1119l3s, .framer-IsVlL .framer-14zihww, .framer-IsVlL .framer-9bw73d, .framer-IsVlL .framer-1sgkvvv, .framer-IsVlL .framer-1ww8shb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-r0ud4u, .framer-IsVlL .framer-19e8gs2, .framer-IsVlL .framer-4kcib6, .framer-IsVlL .framer-xb5hwn, .framer-IsVlL .framer-yx03j7, .framer-IsVlL .framer-1yrxyvh, .framer-IsVlL .framer-ab4ka9, .framer-IsVlL .framer-1ezhp6x, .framer-IsVlL .framer-1x432jo, .framer-IsVlL .framer-1d4wt7n, .framer-IsVlL .framer-7bkw5k, .framer-IsVlL .framer-1k6nfcf, .framer-IsVlL .framer-lyfa23, .framer-IsVlL .framer-8gqiao, .framer-IsVlL .framer-1bsj3bs, .framer-IsVlL .framer-j97w6c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-IsVlL .framer-7ula { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-b4xm9p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsVlL .framer-1oxuizy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-aoxlbd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 24px 0px; position: relative; width: 1px; }`,
        `.framer-IsVlL .framer-76bbce, .framer-IsVlL .framer-1lg13gi, .framer-IsVlL .framer-1kle1rg { aspect-ratio: 1.7866666666666666 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1ba2nby { bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-IsVlL .framer-kx13ja, .framer-IsVlL .framer-yhvl03, .framer-IsVlL .framer-1ws1x0m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-IsVlL .framer-zlnk42 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1twbej2, .framer-IsVlL .framer-pvl97h, .framer-IsVlL .framer-1fxr1ai-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1k23dox { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1mher31, .framer-IsVlL .framer-18ipf4y { aspect-ratio: 1.7866666666666666 / 1; bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-IsVlL .framer-1annr6e { --border-bottom-width: 0px; --border-color: #0085a6; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 3px; align-content: center; align-items: center; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 24px; position: relative; scroll-margin-top: 220px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IsVlL .framer-1m542r6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1diaag4, .framer-IsVlL .framer-15v1ggg, .framer-IsVlL .framer-uxad9, .framer-IsVlL .framer-1pazivn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-IsVlL .framer-1f9j8hg, .framer-IsVlL .framer-1rorlwh, .framer-IsVlL .framer-kop8nb, .framer-IsVlL .framer-y6y36h, .framer-IsVlL .framer-1ov2t0s, .framer-IsVlL .framer-1p9c38w, .framer-IsVlL .framer-i0j19o, .framer-IsVlL .framer-ignxa4, .framer-IsVlL .framer-7aa23w, .framer-IsVlL .framer-50zgw7, .framer-IsVlL .framer-4f4l92, .framer-IsVlL .framer-efhcx0, .framer-IsVlL .framer-luqwj9, .framer-IsVlL .framer-9wx41c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-IsVlL .framer-e68ye3, .framer-IsVlL .framer-p1it0r, .framer-IsVlL .framer-1qij601, .framer-IsVlL .framer-1w86onu, .framer-IsVlL .framer-1n01k3e, .framer-IsVlL .framer-1ib5thm { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1sv740f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1h5o275 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; scroll-margin-top: 150px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-IsVlL .framer-1tgk131 { --border-bottom-width: 0px; --border-color: #012a87; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IsVlL .framer-1jkopas { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-IsVlL .framer-rj3hvk, .framer-IsVlL .framer-ifugpr, .framer-IsVlL .framer-78a6a, .framer-IsVlL .framer-1tgyhz0, .framer-IsVlL .framer-11px804 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1i49219, .framer-IsVlL .framer-1jjse6d, .framer-IsVlL .framer-19ufz9h, .framer-IsVlL .framer-1xriopz, .framer-IsVlL .framer-3ybzne { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-IsVlL .framer-aww3af, .framer-IsVlL .framer-4bufna, .framer-IsVlL .framer-m5h3h7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IsVlL .framer-1cs3502-container, .framer-IsVlL .framer-sjn71x-container, .framer-IsVlL .framer-5dgbnb-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-IsVlL .framer-18ixo3c { --border-bottom-width: 0px; --border-color: #002b84; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IsVlL .framer-1xp5947, .framer-IsVlL .framer-9yb5bx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-IsVlL .framer-1eir9kx { --border-bottom-width: 0px; --border-color: #345eaa; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IsVlL .framer-1nb816w, .framer-IsVlL .framer-93ijns { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...j,
        ...L,
        `.framer-IsVlL[data-border="true"]::after, .framer-IsVlL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-IsVlL.framer-axsey5 { width: 1240px; } .framer-IsVlL .framer-2tzmvq { order: 0; } .framer-IsVlL .framer-1dcis8k { order: 1; } .framer-IsVlL .framer-1annr6e { gap: 16px; } .framer-IsVlL .framer-1ww8shb, .framer-IsVlL .framer-1m542r6 { gap: 8px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-IsVlL.framer-axsey5 { flex-direction: column; width: 810px; } .framer-IsVlL .framer-90lg0y-container { height: auto; width: 100%; z-index: 2; } .framer-IsVlL .framer-1dr774q { flex: none; padding: 24px 48px 0px 48px; width: 100%; } .framer-IsVlL .framer-2tzmvq { box-shadow: unset; order: 0; padding: 0px; position: relative; top: unset; z-index: 0; } .framer-IsVlL .framer-ttduee { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; } .framer-IsVlL .framer-1dcis8k { gap: 24px; order: 1; padding: 0px; } .framer-IsVlL .framer-1annr6e, .framer-IsVlL .framer-18ixo3c { padding: 24px 0px 24px 8px; } .framer-IsVlL .framer-1m542r6 { gap: 16px; overflow: var(--overflow-clip-fallback, clip); } .framer-IsVlL .framer-15v1ggg { padding: 0px; } .framer-IsVlL .framer-aww3af, .framer-IsVlL .framer-4bufna, .framer-IsVlL .framer-m5h3h7 { flex-direction: column; } .framer-IsVlL .framer-1cs3502-container, .framer-IsVlL .framer-sjn71x-container, .framer-IsVlL .framer-5dgbnb-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-IsVlL.framer-axsey5 { flex-direction: column; width: 390px; } .framer-IsVlL .framer-90lg0y-container { height: auto; width: 100%; z-index: 2; } .framer-IsVlL .framer-1dr774q { flex: none; gap: 16px; padding: 24px 24px 0px 24px; width: 100%; } .framer-IsVlL .framer-2tzmvq { align-content: center; align-items: center; box-shadow: unset; order: 0; padding: 0px; position: relative; top: unset; } .framer-IsVlL .framer-1aod5t1 { order: 1; } .framer-IsVlL .framer-ttduee { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-IsVlL .framer-1dcis8k { gap: 16px; order: 1; padding: 0px; } .framer-IsVlL .framer-15bqwcc, .framer-IsVlL .framer-1119l3s, .framer-IsVlL .framer-14zihww, .framer-IsVlL .framer-9bw73d, .framer-IsVlL .framer-1sgkvvv, .framer-IsVlL .framer-1ww8shb { gap: 8px; } .framer-IsVlL .framer-1annr6e, .framer-IsVlL .framer-18ixo3c, .framer-IsVlL .framer-1eir9kx { padding: 16px 0px 16px 8px; } .framer-IsVlL .framer-1m542r6 { gap: 16px; } .framer-IsVlL .framer-15v1ggg { padding: 0px; } .framer-IsVlL .framer-1tgk131 { padding: 16px 0px 8px 8px; } .framer-IsVlL .framer-aww3af, .framer-IsVlL .framer-4bufna, .framer-IsVlL .framer-m5h3h7 { flex-direction: column; } .framer-IsVlL .framer-1cs3502-container, .framer-IsVlL .framer-sjn71x-container, .framer-IsVlL .framer-5dgbnb-container { flex: none; width: 100%; }}`,
      ],
      `framer-IsVlL`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 12507.5, width: 1440 }),
    O(
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
        ...B,
        ...V,
        ...S(N),
        ...S(R),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => h([() => k(M, {}, t)], t) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerAgTyDC1r5`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"ytp6B3a5C":{"pattern":":ytp6B3a5C","name":"основные-макеты"},"Y82j_iKWi":{"pattern":":Y82j_iKWi","name":"research2"},"Jf7JPLKX3":{"pattern":":Jf7JPLKX3","name":"naviagtion"}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"sYEatTzoX":{"layout":["fixed","auto"]},"ZWh9kZq5D":{"layout":["fixed","auto"]},"Yx8geYCJd":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `12507.5`,
            framerIntrinsicWidth: `1440`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=XcI1R7XcsSgWe_pKcKgEV5BhUB8lBKJvcvInP_lewNA.BJJimA-B.mjs.map
