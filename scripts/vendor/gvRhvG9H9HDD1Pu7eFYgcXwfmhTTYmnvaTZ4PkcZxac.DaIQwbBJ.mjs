import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
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
} from "./react.B4lOa1lM.mjs";
import { S as u, a as te, r as ne, t as re } from "./motion.CcP9hEf_.mjs";
import {
  $ as ie,
  A as d,
  F as f,
  O as p,
  Q as ae,
  S as m,
  W as h,
  X as oe,
  _ as g,
  a as _,
  b as v,
  ct as y,
  f as b,
  h as x,
  it as S,
  k as C,
  l as w,
  m as T,
  n as E,
  nt as se,
  rt as ce,
  s as D,
  t as O,
  tt as k,
} from "./framer.DkH54azp.mjs";
import { a as A, i as j, n as le, o as M, r as ue, t as N } from "./A9Wi3tJm7.DxAh4jTX.mjs";
import { n as P, t as F } from "./Video.B2s1Q6fJ.mjs";
import { n as I, r as de } from "./AgTyDC1r5.C8j_DMDO.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (c(),
      f(),
      re(),
      n(),
      P(),
      le(),
      M(),
      I(),
      (L = p(N)),
      (R = p(F)),
      (z = {
        CawUAswJJ: `(min-width: 1440px)`,
        sYEatTzoX: `(min-width: 1240px) and (max-width: 1439.98px)`,
        Yx8geYCJd: `(max-width: 809.98px)`,
        ZWh9kZq5D: `(min-width: 810px) and (max-width: 1239.98px)`,
      }),
      (B = () => typeof document < `u`),
      (V = []),
      (H = `framer-eFF9T`),
      (U = {
        CawUAswJJ: `framer-v-axsey5`,
        sYEatTzoX: `framer-v-7v6g6q`,
        Yx8geYCJd: `framer-v-9s4676`,
        ZWh9kZq5D: `framer-v-y8msji`,
      }),
      (W = (e, t, n) => (e && t ? `position` : n)),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (K = { Desktop: `CawUAswJJ`, Laptop: `sYEatTzoX`, Phone: `Yx8geYCJd`, Tablet: `ZWh9kZq5D` }),
      (q = ({ value: e }) =>
        k()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `CawUAswJJ`,
      })),
      (Y = /*#__PURE__*/ s(function (e, n) {
        let s = l(null),
          c = n ?? s;
        ee();
        let { activeLocale: re, contentLocale: f, setLocale: p } = se(),
          m = oe(),
          { style: h, className: g, layoutId: y, variant: C, ...k } = J(e),
          A = t(() => de({}, f), [f]);
        ce(A);
        let [j, le] = ie(C, z, !1),
          M = v(H, ue),
          P = i(_)?.isLayoutTemplate,
          I = !!i(te)?.transition?.layout,
          L = W(P, I),
          R = () => !B() || ![`ZWh9kZq5D`, `Yx8geYCJd`].includes(j),
          V = S(`ytp6B3a5C`),
          Y = l(null),
          X = S(`Y82j_iKWi`),
          Z = l(null),
          Q = S(`Jf7JPLKX3`),
          $ = l(null);
        return (
          ae({}),
          /*#__PURE__*/ o(_.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: K,
              primaryVariantId: `CawUAswJJ`,
              variantClassNames: U,
            },
            children: /*#__PURE__*/ a(ne, {
              id: y ?? `AgTyDC1r5`,
              children: [
                /*#__PURE__*/ o(q, { value: `html body { background: rgb(253, 251, 248); }` }),
                /*#__PURE__*/ a(u.div, {
                  ...k,
                  className: v(M, `framer-axsey5`, g),
                  ref: c,
                  style: { ...h },
                  children: [
                    /*#__PURE__*/ o(b, {
                      breakpoint: j,
                      overrides: {
                        Yx8geYCJd: { height: 800, width: m?.width || `100vw` },
                        ZWh9kZq5D: { height: 800, width: m?.width || `100vw` },
                      },
                      children: /*#__PURE__*/ o(O, {
                        height: 1e3,
                        y: m?.y || 0,
                        children: /*#__PURE__*/ o(E, {
                          className: `framer-90lg0y-container`,
                          layout: L,
                          nodeId: `iiY9OxBFy`,
                          scopeId: `AgTyDC1r5`,
                          children: /*#__PURE__*/ o(b, {
                            breakpoint: j,
                            overrides: {
                              Yx8geYCJd: { style: { width: `100%` }, variant: G(`XJ7hq0Zpp`) },
                              ZWh9kZq5D: { style: { width: `100%` }, variant: G(`YCYFEcIjL`) },
                            },
                            children: /*#__PURE__*/ o(N, {
                              height: `100%`,
                              id: `iiY9OxBFy`,
                              layoutId: `iiY9OxBFy`,
                              style: { height: `100%` },
                              variant: G(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ a(u.div, {
                      className: `framer-1dr774q`,
                      layout: L,
                      children: [
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-2tzmvq`,
                          children: [
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1aod5t1`,
                              children: [
                                /*#__PURE__*/ o(`div`, {
                                  className: `framer-17f1c2j`,
                                  children: /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h1`, {
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
                                /*#__PURE__*/ o(w, {
                                  href: { webPageId: `v0NP7rg_A` },
                                  motionChild: !0,
                                  nodeId: `QSrtCOjT5`,
                                  openInNewTab: !1,
                                  scopeId: `AgTyDC1r5`,
                                  children: /*#__PURE__*/ o(b, {
                                    breakpoint: j,
                                    overrides: {
                                      Yx8geYCJd: { "data-border": !0 },
                                      ZWh9kZq5D: { "data-border": !0 },
                                    },
                                    children: /*#__PURE__*/ o(u.a, {
                                      className: `framer-ttduee framer-vpm55m`,
                                      "data-framer-name": `Button`,
                                      children: /*#__PURE__*/ o(`div`, {
                                        className: `framer-f2ye41`,
                                        children: /*#__PURE__*/ o(b, {
                                          breakpoint: j,
                                          overrides: {
                                            Yx8geYCJd: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                            ZWh9kZq5D: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                          },
                                          children: /*#__PURE__*/ a(x, {
                                            className: `framer-om4gck`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              /*#__PURE__*/ o(x, {
                                                className: `framer-1ig3y2f`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ o(x, {
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
                            R() &&
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-11nzjbn hidden-y8msji hidden-9s4676`,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: /*#__PURE__*/ o(w, {
                                          href: { hash: `:ytp6B3a5C`, webPageId: `AgTyDC1r5` },
                                          motionChild: !0,
                                          nodeId: `jLJssncZ1`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `AgTyDC1r5`,
                                          smoothScroll: !0,
                                          children: /*#__PURE__*/ o(u.a, {
                                            className: `framer-styles-preset-fx4193`,
                                            "data-styles-preset": `uWIEDCuYW`,
                                            children: /*#__PURE__*/ o(`strong`, {
                                              children: `Основные макеты`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1kj2xdu`,
                                    fonts: [`GF;Stack Sans Text-regular`, `GF;Stack Sans Text-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: /*#__PURE__*/ o(w, {
                                          href: { hash: `:Y82j_iKWi`, webPageId: `AgTyDC1r5` },
                                          motionChild: !0,
                                          nodeId: `AD2C6wWxd`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `AgTyDC1r5`,
                                          smoothScroll: !0,
                                          children: /*#__PURE__*/ o(u.a, {
                                            className: `framer-styles-preset-fx4193`,
                                            "data-styles-preset": `uWIEDCuYW`,
                                            children: /*#__PURE__*/ o(`strong`, {
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
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: /*#__PURE__*/ o(w, {
                                          href: { hash: `:Jf7JPLKX3`, webPageId: `AgTyDC1r5` },
                                          motionChild: !0,
                                          nodeId: `mmrmHLVNZ`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `AgTyDC1r5`,
                                          smoothScroll: !0,
                                          children: /*#__PURE__*/ o(u.a, {
                                            className: `framer-styles-preset-fx4193`,
                                            "data-styles-preset": `uWIEDCuYW`,
                                            children: /*#__PURE__*/ o(`strong`, {
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
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-1dcis8k`,
                          children: [
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-15bqwcc`,
                              children: [
                                /*#__PURE__*/ o(b, {
                                  breakpoint: j,
                                  overrides: {
                                    sYEatTzoX: {
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
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
                                          children: /*#__PURE__*/ o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: /*#__PURE__*/ o(`strong`, {
                                              children: `Обзор проекта`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    Yx8geYCJd: {
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
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
                                          children: /*#__PURE__*/ o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: /*#__PURE__*/ o(`strong`, {
                                              children: `Обзор проекта`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    ZWh9kZq5D: {
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
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
                                          children: /*#__PURE__*/ o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: /*#__PURE__*/ o(`strong`, {
                                              children: `Обзор проекта`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                  },
                                  children: /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h2`, {
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
                                        children: /*#__PURE__*/ o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: /*#__PURE__*/ o(`strong`, {
                                            children: `Обзор проекта`,
                                          }),
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
                                /*#__PURE__*/ o(b, {
                                  breakpoint: j,
                                  overrides: {
                                    Yx8geYCJd: {
                                      children: /*#__PURE__*/ a(r, {
                                        children: [
                                          /*#__PURE__*/ o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: `Это сложная легаси-система, разработанная для онбординга медицинских провайдеров и страховых компаний в США в рамках экосистемы Optum. Изначально системы и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки со стороны клиентов.`,
                                          }),
                                          /*#__PURE__*/ o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: /*#__PURE__*/ o(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: `В 2025–2026 годах моя команда трансформировала этот внутренний инструмент в масштабируемый self-service портал, автоматизировав ключевые этапы настройки и проверки данных. Уже в течение первого квартала после запуска количество обращений в службу поддержки, связанных с процессом регистрации, сократилось более чем на 40%.`,
                                          }),
                                          /*#__PURE__*/ o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: /*#__PURE__*/ o(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7VmFyZWxhIFJvdW5kLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Varela Round", "Varela Round Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: `В дальнейшем Enrollments планируется развивать в централизованную платформу с поддержкой ИИ, которая объединит процессы регистрации, настройки и сопровождения пользователей во всех продуктах Optum.`,
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  children: /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ a(r, {
                                      children: [
                                        /*#__PURE__*/ o(`p`, {
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
                                          children: `Это сложная легаси-система, разработанная для онбординга медицинских провайдеров и страховых компаний в США в рамках экосистемы Optum. Изначально системы и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки со стороны клиентов.`,
                                        }),
                                        /*#__PURE__*/ o(`p`, {
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
                                          children: /*#__PURE__*/ o(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`p`, {
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
                                          children: `В 2025–2026 годах моя команда трансформировала этот внутренний инструмент в масштабируемый self-service портал, автоматизировав ключевые этапы настройки и проверки данных. Уже в течение первого квартала после запуска количество обращений в службу поддержки, связанных с процессом регистрации, сократилось более чем на 40%.`,
                                        }),
                                        /*#__PURE__*/ o(`p`, {
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
                                          children: /*#__PURE__*/ o(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`p`, {
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
                                          children: `В дальнейшем Enrollments планируется развивать в централизованную платформу с поддержкой ИИ, которая объединит процессы регистрации, настройки и сопровождения пользователей во всех продуктах Optum.`,
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
                            /*#__PURE__*/ o(b, {
                              breakpoint: j,
                              overrides: {
                                sYEatTzoX: {
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Основные макеты`,
                                      }),
                                    }),
                                  }),
                                },
                                Yx8geYCJd: {
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Основные макеты`,
                                      }),
                                    }),
                                  }),
                                },
                                ZWh9kZq5D: {
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Основные макеты`,
                                      }),
                                    }),
                                  }),
                                },
                              },
                              children: /*#__PURE__*/ o(T, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ o(r, {
                                  children: /*#__PURE__*/ o(`h3`, {
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
                                    children: /*#__PURE__*/ o(`mark`, {
                                      style: { "--framer-text-background-radius": `0px` },
                                      children: `Основные макеты`,
                                    }),
                                  }),
                                }),
                                className: `framer-4kcib6`,
                                fonts: [`GF;Stack Sans Headline-600`],
                                id: V,
                                ref: Y,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ o(`div`, {
                              className: `framer-7ula`,
                              children: /*#__PURE__*/ a(`div`, {
                                className: `framer-b4xm9p`,
                                children: [
                                  /*#__PURE__*/ a(`div`, {
                                    className: `framer-1oxuizy`,
                                    children: [
                                      /*#__PURE__*/ a(`div`, {
                                        className: `framer-aoxlbd`,
                                        children: [
                                          /*#__PURE__*/ o(b, {
                                            breakpoint: j,
                                            overrides: {
                                              Yx8geYCJd: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Qkk7T3BlbmluZyBIb3VycyBTYW5zL1JlZ3VsYXIvdjA=`,
                                                      "--framer-font-family": `"Opening Hours Sans", "Opening Hours Sans Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                      "--framer-text-color": `rgb(61, 61, 61)`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Дашборд для мониторинга активных заявок:`,
                                                      }),
                                                      ` отображает ключевые показатели и динамику по статусам, позволяя быстро выявлять незавершённые этапы и переходить к связанным задачам.`,
                                                    ],
                                                  }),
                                                }),
                                                fonts: [`BI;Opening Hours Sans/Regular/v0`],
                                              },
                                            },
                                            children: /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ a(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: [
                                                    /*#__PURE__*/ o(`strong`, {
                                                      children: `Дашборд для мониторинга активных заявок:`,
                                                    }),
                                                    ` отображает ключевые показатели и динамику по статусам, позволяя быстро выявлять незавершённые этапы и переходить к связанным задачам.`,
                                                  ],
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
                                          /*#__PURE__*/ o(`div`, {
                                            className: `framer-76bbce`,
                                            children: /*#__PURE__*/ o(b, {
                                              breakpoint: j,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: d((m?.y || 0) + 991.4701),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1736,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg`,
                                                    srcSet: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-a8b523.svg 512w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-581c33.svg 1024w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg 1736w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: d((m?.y || 0) + 1552.7701),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1736,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max(${m?.width || `100vw`} - 48px, 1px) * 0.9989)`,
                                                    src: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg`,
                                                    srcSet: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-a8b523.svg 512w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-581c33.svg 1024w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg 1736w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: d((m?.y || 0) + 1680.0701),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1736,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${m?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg`,
                                                    srcSet: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-a8b523.svg 512w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-581c33.svg 1024w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg 1736w`,
                                                  },
                                                },
                                              },
                                              children: /*#__PURE__*/ o(D, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1120,
                                                  intrinsicWidth: 1736,
                                                  loading: d((m?.y || 0) + 947.0701),
                                                  pixelHeight: 1120,
                                                  pixelWidth: 1736,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg`,
                                                  srcSet: `../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-a8b523.svg 512w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88-581c33.svg 1024w,../../assets/images/sz5kW3eBK0aSxXffgOvcVbJaQ88.svg 1736w`,
                                                },
                                                className: `framer-1ba2nby`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ a(`div`, {
                                        className: `framer-kx13ja`,
                                        children: [
                                          /*#__PURE__*/ o(T, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ a(`h6`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                  "--framer-line-height": `1.3em`,
                                                },
                                                children: [
                                                  /*#__PURE__*/ o(`strong`, {
                                                    children: `Профиль провайдера:`,
                                                  }),
                                                  ` единая страница для просмотра и управления данными организации и специалистов, контактной информацией, историей регистраций, транзакциями и платёжными реквизитами.`,
                                                ],
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
                                          /*#__PURE__*/ o(`div`, {
                                            className: `framer-zlnk42`,
                                            children: /*#__PURE__*/ o(b, {
                                              breakpoint: j,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: d((m?.y || 0) + 963),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png`,
                                                    srcSet: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-1ec6b1.png 512w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-529283.png 1024w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png 1398w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: d((m?.y || 0) + 1817.2),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max(${m?.width || `100vw`} - 48px, 1px) * 0.9989)`,
                                                    src: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png`,
                                                    srcSet: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-1ec6b1.png 512w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-529283.png 1024w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png 1398w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: d((m?.y || 0) + 1660.6),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${m?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png`,
                                                    srcSet: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-1ec6b1.png 512w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-529283.png 1024w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png 1398w`,
                                                  },
                                                },
                                              },
                                              children: /*#__PURE__*/ o(D, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 921,
                                                  intrinsicWidth: 1398,
                                                  loading: d((m?.y || 0) + 983.6),
                                                  pixelHeight: 921,
                                                  pixelWidth: 1398,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png`,
                                                  srcSet: `../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-1ec6b1.png 512w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI-529283.png 1024w,../../assets/images/etpcWyL45ctt6266oGQM2EvKEI.png 1398w`,
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
                                  /*#__PURE__*/ a(`div`, {
                                    className: `framer-1k23dox`,
                                    children: [
                                      /*#__PURE__*/ a(`div`, {
                                        className: `framer-yhvl03`,
                                        children: [
                                          /*#__PURE__*/ o(b, {
                                            breakpoint: j,
                                            overrides: {
                                              sYEatTzoX: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Рабочий список регистраций:`,
                                                      }),
                                                      ` единый список текущих заявок с актуальными статусами и прогрессом заполнения, обеспечивающий быстрый доступ к незавершённым этапам каждого процесса.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                              Yx8geYCJd: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Рабочий список регистраций:`,
                                                      }),
                                                      ` единый список текущих заявок с актуальными статусами и прогрессом заполнения, обеспечивающий быстрый доступ к незавершённым этапам каждого процесса.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                              ZWh9kZq5D: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Рабочий список регистраций:`,
                                                      }),
                                                      ` единый список текущих заявок с актуальными статусами и прогрессом заполнения, обеспечивающий быстрый доступ к незавершённым этапам каждого процесса.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                            },
                                            children: /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: /*#__PURE__*/ o(`strong`, {
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
                                          /*#__PURE__*/ o(`div`, {
                                            className: `framer-1lg13gi`,
                                            children: /*#__PURE__*/ o(b, {
                                              breakpoint: j,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: d((m?.y || 0) + 1276.3701),
                                                    pixelHeight: 1080,
                                                    pixelWidth: 1920,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png`,
                                                    srcSet: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-deee83.png 512w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-bb866c.png 1024w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png 1920w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: d((m?.y || 0) + 2087.5701),
                                                    pixelHeight: 1080,
                                                    pixelWidth: 1920,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max(${m?.width || `100vw`} - 48px, 1px) * 0.9989)`,
                                                    src: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png`,
                                                    srcSet: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-deee83.png 512w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-bb866c.png 1024w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png 1920w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: d((m?.y || 0) + 1973.9701),
                                                    pixelHeight: 1080,
                                                    pixelWidth: 1920,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${m?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png`,
                                                    srcSet: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-deee83.png 512w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-bb866c.png 1024w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png 1920w`,
                                                  },
                                                },
                                              },
                                              children: /*#__PURE__*/ o(D, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: d((m?.y || 0) + 1317.2701),
                                                  pixelHeight: 1080,
                                                  pixelWidth: 1920,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png`,
                                                  srcSet: `../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-deee83.png 512w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk-bb866c.png 1024w,../../assets/images/pmgO8tNl137lDqEfwVMfnNbwqvk.png 1920w`,
                                                },
                                                className: `framer-1mher31`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ a(`div`, {
                                        className: `framer-1ws1x0m`,
                                        children: [
                                          /*#__PURE__*/ o(b, {
                                            breakpoint: j,
                                            overrides: {
                                              sYEatTzoX: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Создание новой регистрации:`,
                                                      }),
                                                      ` пошаговый мастер оформления заявки, позволяющий выбрать плательщика, определить тип транзакций и последовательно заполнить все необходимые данные.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                              Yx8geYCJd: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Создание новой регистрации:`,
                                                      }),
                                                      ` пошаговый мастер оформления заявки, позволяющий выбрать плательщика, определить тип транзакций и последовательно заполнить все необходимые данные.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                              ZWh9kZq5D: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ a(`h6`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.3em`,
                                                    },
                                                    children: [
                                                      /*#__PURE__*/ o(`strong`, {
                                                        children: `Создание новой регистрации:`,
                                                      }),
                                                      ` пошаговый мастер оформления заявки, позволяющий выбрать плательщика, определить тип транзакций и последовательно заполнить все необходимые данные.`,
                                                    ],
                                                  }),
                                                }),
                                              },
                                            },
                                            children: /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h6`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.3em`,
                                                  },
                                                  children: /*#__PURE__*/ o(`strong`, {
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
                                          /*#__PURE__*/ o(`div`, {
                                            className: `framer-1kle1rg`,
                                            children: /*#__PURE__*/ o(b, {
                                              breakpoint: j,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: d((m?.y || 0) + 1276.3701),
                                                    pixelHeight: 737,
                                                    pixelWidth: 1312,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png`,
                                                    srcSet: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-270da2.png 512w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-be5aa4.png 1024w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png 1312w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: d((m?.y || 0) + 2376.4701),
                                                    pixelHeight: 737,
                                                    pixelWidth: 1312,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max(${m?.width || `100vw`} - 48px, 1px) * 0.9989)`,
                                                    src: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png`,
                                                    srcSet: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-270da2.png 512w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-be5aa4.png 1024w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png 1312w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: d((m?.y || 0) + 1973.9701),
                                                    pixelHeight: 737,
                                                    pixelWidth: 1312,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(max((max(${m?.width || `100vw`} - 96px, 1px) - 16px) / 2, 1px) * 0.9989)`,
                                                    src: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png`,
                                                    srcSet: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-270da2.png 512w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-be5aa4.png 1024w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png 1312w`,
                                                  },
                                                },
                                              },
                                              children: /*#__PURE__*/ o(D, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 737,
                                                  intrinsicWidth: 1312,
                                                  loading: d((m?.y || 0) + 1317.2701),
                                                  pixelHeight: 737,
                                                  pixelWidth: 1312,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png`,
                                                  srcSet: `../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-270da2.png 512w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE-be5aa4.png 1024w,../../assets/images/u9xmDPI5W3mATSz4wDGa5n0dQE.png 1312w`,
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1119l3s`,
                              children: [
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: /*#__PURE__*/ o(`strong`, { children: `Задача` }),
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
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ a(`p`, {
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
                                        /*#__PURE__*/ o(`strong`, {
                                          children: `Упростить онбординг и регистрацию провайдеров`,
                                        }),
                                        ` для Medical Network, поэтапно трансформировав сложный легаси-инструмент в интуитивно понятный продукт.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-yx03j7`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-14zihww`,
                              children: [
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Моя роль`,
                                        }),
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
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(r, {
                                    children: [
                                      /*#__PURE__*/ o(`p`, {
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
                                      /*#__PURE__*/ o(`p`, {
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
                                      /*#__PURE__*/ o(`p`, {
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-9bw73d`,
                              children: [
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Ключевые UX-решения`,
                                        }),
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
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ a(`ul`, {
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
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ o(`p`, {
                                            children: `Фокусировка навигации на ключевых рабочих процессах.`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ o(`p`, {
                                            children: `Приоритизация информации, отображая её в нужный момент.`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ o(`p`, {
                                            children: `Устранение лишних шагов и редких пограничных сценариев.`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ o(`p`, {
                                            children: `Добавление встроенной помощи и контекстных подсказок.`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ o(`p`, {
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1sgkvvv`,
                              children: [
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Инструменты`,
                                        }),
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
                                /*#__PURE__*/ o(b, {
                                  breakpoint: j,
                                  overrides: {
                                    sYEatTzoX: {
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
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
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
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
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
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
                                  children: /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1annr6e`,
                              "data-border": !0,
                              id: X,
                              ref: Z,
                              children: [
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1ww8shb`,
                                  children: [
                                    /*#__PURE__*/ o(b, {
                                      breakpoint: j,
                                      overrides: {
                                        sYEatTzoX: {
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`h2`, {
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
                                              children: /*#__PURE__*/ o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: /*#__PURE__*/ o(`strong`, {
                                                  children: `Пользовательские исследования и раннее концептирование`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        Yx8geYCJd: {
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`h2`, {
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
                                              children: /*#__PURE__*/ o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: /*#__PURE__*/ o(`strong`, {
                                                  children: `Пользовательские исследования и раннее концептирование`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        ZWh9kZq5D: {
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`h2`, {
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
                                              children: /*#__PURE__*/ o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: /*#__PURE__*/ o(`strong`, {
                                                  children: `Пользовательские исследования и раннее концептирование`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                      },
                                      children: /*#__PURE__*/ o(T, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ o(r, {
                                          children: /*#__PURE__*/ o(`h2`, {
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
                                            children: /*#__PURE__*/ o(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: /*#__PURE__*/ o(`strong`, {
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
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
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
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1m542r6`,
                                  children: [
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-1diaag4`,
                                      children: [
                                        /*#__PURE__*/ o(T, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`p`, {
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
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `Проектная Доска`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1f9j8hg`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ o(b, {
                                          breakpoint: j,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 3399.2),
                                                pixelHeight: 7392,
                                                pixelWidth: 7751,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png`,
                                                srcSet: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-d12785.png 512w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-0f1966.png 1024w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png 2048w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-a1c382.png 4096w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png 7751w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 4379.5),
                                                pixelHeight: 7392,
                                                pixelWidth: 7751,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                src: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png`,
                                                srcSet: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-d12785.png 512w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-0f1966.png 1024w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png 2048w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-a1c382.png 4096w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png 7751w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 4085.8),
                                                pixelHeight: 7392,
                                                pixelWidth: 7751,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 104px)`,
                                                src: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png`,
                                                srcSet: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-d12785.png 512w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-0f1966.png 1024w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png 2048w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-a1c382.png 4096w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png 7751w`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ o(D, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: d((m?.y || 0) + 3512),
                                              pixelHeight: 7392,
                                              pixelWidth: 7751,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png`,
                                              srcSet: `../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-d12785.png 512w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-0f1966.png 1024w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png 2048w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-a1c382.png 4096w,../../assets/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0-724240.png 7751w`,
                                            },
                                            className: `framer-e68ye3`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-15v1ggg`,
                                      children: [
                                        /*#__PURE__*/ o(T, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`p`, {
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
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `Моделирование объектов и основные пользовательские сценарии`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1rorlwh`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ o(b, {
                                          breakpoint: j,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 4182.7),
                                                pixelHeight: 17299,
                                                pixelWidth: 23700,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png`,
                                                srcSet: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c30f5c.png 512w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c4b68a.png 1024w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png 2048w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-93fee6.png 4096w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png 23700w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 4858),
                                                pixelHeight: 17299,
                                                pixelWidth: 23700,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                src: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png`,
                                                srcSet: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c30f5c.png 512w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c4b68a.png 1024w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png 2048w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-93fee6.png 4096w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png 23700w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 4918.3),
                                                pixelHeight: 17299,
                                                pixelWidth: 23700,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 104px)`,
                                                src: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png`,
                                                srcSet: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c30f5c.png 512w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c4b68a.png 1024w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png 2048w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-93fee6.png 4096w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png 23700w`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ o(D, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: d((m?.y || 0) + 4502.5),
                                              pixelHeight: 17299,
                                              pixelWidth: 23700,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png`,
                                              srcSet: `../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c30f5c.png 512w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-c4b68a.png 1024w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png 2048w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-93fee6.png 4096w,../../assets/images/GLsNTvD1lEbXXhUiMWQzuMLkRI-7cb6a6.png 23700w`,
                                            },
                                            className: `framer-p1it0r`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                        /*#__PURE__*/ o(b, {
                                          breakpoint: j,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 4682.7),
                                                pixelHeight: 6236,
                                                pixelWidth: 14342,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                srcSet: `../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-1ba56c.png 512w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-cdc7d8.png 1024w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png 2048w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-91c977.png 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5118),
                                                pixelHeight: 6236,
                                                pixelWidth: 14342,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                srcSet: `../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-1ba56c.png 512w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-cdc7d8.png 1024w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png 2048w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-91c977.png 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5449.3),
                                                pixelHeight: 6236,
                                                pixelWidth: 14342,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                srcSet: `../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-1ba56c.png 512w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-cdc7d8.png 1024w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png 2048w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-91c977.png 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ o(D, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: d((m?.y || 0) + 5148.5),
                                              pixelHeight: 6236,
                                              pixelWidth: 14342,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                              srcSet: `../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-1ba56c.png 512w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-cdc7d8.png 1024w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png 2048w,../../assets/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc-91c977.png 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                            },
                                            className: `framer-1qij601`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-uxad9`,
                                      children: [
                                        /*#__PURE__*/ o(T, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`p`, {
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
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `Personas`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-kop8nb`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ o(b, {
                                          breakpoint: j,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5122.2),
                                                pixelHeight: 8540,
                                                pixelWidth: 10034,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png`,
                                                srcSet: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-7188c6.png 512w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-e3d016.png 1024w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA.png 2048w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-9070a9.png 4096w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png 10034w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5418.5),
                                                pixelHeight: 8540,
                                                pixelWidth: 10034,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                src: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png`,
                                                srcSet: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-7188c6.png 512w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-e3d016.png 1024w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA.png 2048w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-9070a9.png 4096w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png 10034w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5911.8),
                                                pixelHeight: 8540,
                                                pixelWidth: 10034,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 104px)`,
                                                src: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png`,
                                                srcSet: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-7188c6.png 512w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-e3d016.png 1024w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA.png 2048w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-9070a9.png 4096w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png 10034w`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ o(D, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: d((m?.y || 0) + 5691),
                                              pixelHeight: 8540,
                                              pixelWidth: 10034,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png`,
                                              srcSet: `../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-7188c6.png 512w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-e3d016.png 1024w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA.png 2048w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-9070a9.png 4096w,../../assets/images/4JSg9AEfANXnZY3QqqeK2KTgA-671624.png 10034w`,
                                            },
                                            className: `framer-1w86onu`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-1pazivn`,
                                      children: [
                                        /*#__PURE__*/ o(T, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`p`, {
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
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `Конкурентный анализ`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-y6y36h`,
                                          fonts: [`GF;Varela Round-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ o(b, {
                                          breakpoint: j,
                                          overrides: {
                                            sYEatTzoX: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5837.7),
                                                pixelHeight: 10408,
                                                pixelWidth: 7152,
                                                positionX: `center`,
                                                positionY: `center`,
                                                src: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png`,
                                                srcSet: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-620bfc.png 703w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-0ee9ff.png 1407w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png 2814w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png 7152w`,
                                              },
                                            },
                                            Yx8geYCJd: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 5862),
                                                pixelHeight: 10408,
                                                pixelWidth: 7152,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                src: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png`,
                                                srcSet: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-620bfc.png 703w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-0ee9ff.png 1407w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png 2814w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png 7152w`,
                                              },
                                            },
                                            ZWh9kZq5D: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: d((m?.y || 0) + 6672.3),
                                                pixelHeight: 10408,
                                                pixelWidth: 7152,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(${m?.width || `100vw`} - 104px)`,
                                                src: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png`,
                                                srcSet: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-620bfc.png 703w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-0ee9ff.png 1407w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png 2814w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png 7152w`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ o(D, {
                                            background: {
                                              alt: ``,
                                              fit: `fit`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: d((m?.y || 0) + 6593.5),
                                              pixelHeight: 10408,
                                              pixelWidth: 7152,
                                              positionX: `center`,
                                              positionY: `center`,
                                              src: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png`,
                                              srcSet: `../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-620bfc.png 703w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-0ee9ff.png 1407w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png 2814w,../../assets/images/wt1YuQ5MmjnVwKDYcGMi41DYyM-be4de2.png 7152w`,
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1sv740f`,
                              children: [
                                /*#__PURE__*/ o(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h3`, {
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
                                      children: /*#__PURE__*/ o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Прототипы и макеты`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1h5o275`,
                                  fonts: [
                                    `GF;Stack Sans Headline-600`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  id: Q,
                                  ref: $,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1tgk131`,
                                  "data-border": !0,
                                  children: [
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
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
                                          children: /*#__PURE__*/ o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: /*#__PURE__*/ o(`strong`, {
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
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
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
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-1jkopas`,
                                      children: [
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-rj3hvk`,
                                          children: [
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h3`, {
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
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: /*#__PURE__*/ o(`strong`, {
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
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(b, {
                                              breakpoint: j,
                                              overrides: {
                                                sYEatTzoX: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: d((m?.y || 0) + 7313.3),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    src: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png`,
                                                    srcSet: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-f363ee.png 512w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-7c20c1.png 1024w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png 1398w`,
                                                  },
                                                },
                                                Yx8geYCJd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: d((m?.y || 0) + 6830.6),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                    src: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png`,
                                                    srcSet: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-f363ee.png 512w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-7c20c1.png 1024w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png 1398w`,
                                                  },
                                                },
                                                ZWh9kZq5D: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 921,
                                                    intrinsicWidth: 1398,
                                                    loading: d((m?.y || 0) + 8205.9),
                                                    pixelHeight: 921,
                                                    pixelWidth: 1398,
                                                    positionX: `left`,
                                                    positionY: `top`,
                                                    sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                    src: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png`,
                                                    srcSet: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-f363ee.png 512w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-7c20c1.png 1024w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png 1398w`,
                                                  },
                                                },
                                              },
                                              children: /*#__PURE__*/ o(D, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 921,
                                                  intrinsicWidth: 1398,
                                                  loading: d((m?.y || 0) + 8364.1),
                                                  pixelHeight: 921,
                                                  pixelWidth: 1398,
                                                  positionX: `left`,
                                                  positionY: `top`,
                                                  src: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png`,
                                                  srcSet: `../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-f363ee.png 512w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI-7c20c1.png 1024w,../../assets/images/r4CQDyFsohtI3wfdayRSCXbgDkI.png 1398w`,
                                                },
                                                className: `framer-pvl97h`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-ifugpr`,
                                          children: [
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h3`, {
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
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: /*#__PURE__*/ o(`strong`, {
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
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ a(r, {
                                                children: [
                                                  /*#__PURE__*/ o(`p`, {
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
                                                  /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(`div`, {
                                              className: `framer-aww3af`,
                                              children: /*#__PURE__*/ o(O, {
                                                children: /*#__PURE__*/ o(E, {
                                                  className: `framer-1cs3502-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `JvN3kEOWL`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: /*#__PURE__*/ o(F, {
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
                                                    srcFile: `../../assets/misc/kDLLqBXVDJKpyeMNdCGx4oiMzk.mp4`,
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
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-18ixo3c`,
                                  "data-border": !0,
                                  children: [
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
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
                                          children: /*#__PURE__*/ o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: /*#__PURE__*/ o(`strong`, {
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
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
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
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-1xp5947`,
                                      children: [
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-78a6a`,
                                          children: [
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h3`, {
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
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: /*#__PURE__*/ o(`strong`, {
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
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(`div`, {
                                              className: `framer-4bufna`,
                                              children: /*#__PURE__*/ o(O, {
                                                children: /*#__PURE__*/ o(E, {
                                                  className: `framer-sjn71x-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `W_VWndSqm`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: /*#__PURE__*/ o(F, {
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
                                                    srcFile: `../../assets/misc/ciAGlfVDxtAqYuPy3IJn5Q06h0.mp4`,
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
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-1tgyhz0`,
                                          children: [
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h3`, {
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
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: /*#__PURE__*/ o(`strong`, {
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
                                            /*#__PURE__*/ o(T, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(`div`, {
                                              className: `framer-m5h3h7`,
                                              children: /*#__PURE__*/ o(O, {
                                                children: /*#__PURE__*/ o(E, {
                                                  className: `framer-5dgbnb-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `h2LFS0AtU`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: /*#__PURE__*/ o(F, {
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
                                                    srcFile: `../../assets/misc/rXd8pZgfaTQfIipA99pvEdjcZEs.mp4`,
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
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1eir9kx`,
                                  "data-border": !0,
                                  children: [
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
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
                                          children: /*#__PURE__*/ o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: /*#__PURE__*/ o(`strong`, {
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
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ a(r, {
                                        children: [
                                          /*#__PURE__*/ o(`p`, {
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
                                          /*#__PURE__*/ o(`p`, {
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
                                          /*#__PURE__*/ o(`p`, {
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
                                    /*#__PURE__*/ o(`div`, {
                                      className: `framer-9yb5bx`,
                                      children: /*#__PURE__*/ a(`div`, {
                                        className: `framer-11px804`,
                                        children: [
                                          /*#__PURE__*/ o(T, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`h3`, {
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
                                                children: /*#__PURE__*/ o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: /*#__PURE__*/ o(`strong`, {
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
                                          /*#__PURE__*/ o(T, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ a(r, {
                                              children: [
                                                /*#__PURE__*/ o(`p`, {
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
                                                /*#__PURE__*/ o(`p`, {
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
                                                /*#__PURE__*/ o(`p`, {
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
                                                /*#__PURE__*/ o(`p`, {
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
                                          /*#__PURE__*/ a(`div`, {
                                            className: `framer-1nb816w`,
                                            children: [
                                              /*#__PURE__*/ o(T, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: /*#__PURE__*/ o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: /*#__PURE__*/ o(`strong`, {
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
                                              /*#__PURE__*/ o(b, {
                                                breakpoint: j,
                                                overrides: {
                                                  sYEatTzoX: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: d((m?.y || 0) + 10268.5),
                                                      pixelHeight: 726,
                                                      pixelWidth: 2400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      src: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png`,
                                                      srcSet: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-1c5ce6.png 512w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-6700e5.png 1024w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic.png 2048w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png 2400w`,
                                                    },
                                                  },
                                                  Yx8geYCJd: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: d((m?.y || 0) + 9523.8),
                                                      pixelHeight: 726,
                                                      pixelWidth: 2400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                      src: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png`,
                                                      srcSet: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-1c5ce6.png 512w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-6700e5.png 1024w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic.png 2048w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png 2400w`,
                                                    },
                                                  },
                                                  ZWh9kZq5D: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: d((m?.y || 0) + 11179.1),
                                                      pixelHeight: 726,
                                                      pixelWidth: 2400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                      src: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png`,
                                                      srcSet: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-1c5ce6.png 512w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-6700e5.png 1024w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic.png 2048w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png 2400w`,
                                                    },
                                                  },
                                                },
                                                children: /*#__PURE__*/ o(D, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: d((m?.y || 0) + 11451.3),
                                                    pixelHeight: 726,
                                                    pixelWidth: 2400,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    src: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png`,
                                                    srcSet: `../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-1c5ce6.png 512w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-6700e5.png 1024w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic.png 2048w,../../assets/images/rhN5Obp8h7Smebedl86NzaAOic-fa87c6.png 2400w`,
                                                  },
                                                  className: `framer-1ib5thm`,
                                                  "data-framer-name": `Image`,
                                                  fitImageDimension: `height`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ a(`div`, {
                                            className: `framer-93ijns`,
                                            children: [
                                              /*#__PURE__*/ o(T, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: /*#__PURE__*/ o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: /*#__PURE__*/ o(`strong`, {
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
                                              /*#__PURE__*/ o(O, {
                                                children: /*#__PURE__*/ o(E, {
                                                  className: `framer-1fxr1ai-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `SkcgQywPw`,
                                                  scopeId: `AgTyDC1r5`,
                                                  children: /*#__PURE__*/ o(F, {
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
                                                    srcFile: `../../assets/misc/yKFZSM31Gl8Mn2T7s6Yj4bRisOE.mp4`,
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
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `.framer-eFF9T.framer-vpm55m, .framer-eFF9T .framer-vpm55m { display: block; }`,
        `.framer-eFF9T.framer-axsey5 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-eFF9T .framer-90lg0y-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-eFF9T .framer-1dr774q { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 32px; position: relative; width: 1px; }`,
        `.framer-eFF9T .framer-2tzmvq { align-content: flex-start; align-items: flex-start; background-color: #fdfbf9; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 8px 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-eFF9T .framer-1aod5t1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-17f1c2j { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-eFF9T .framer-1qvo535, .framer-eFF9T .framer-yql46e, .framer-eFF9T .framer-u1kdq0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-eFF9T .framer-ttduee { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-eFF9T .framer-f2ye41 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-eFF9T .framer-om4gck { height: 13px; position: relative; width: 14px; }`,
        `.framer-eFF9T .framer-1ig3y2f { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-eFF9T .framer-1vdc36r { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-eFF9T .framer-11nzjbn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-eFF9T .framer-1kj2xdu, .framer-eFF9T .framer-ynh0rd, .framer-eFF9T .framer-ma0upn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-eFF9T .framer-1dcis8k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-15bqwcc, .framer-eFF9T .framer-1119l3s, .framer-eFF9T .framer-14zihww, .framer-eFF9T .framer-9bw73d, .framer-eFF9T .framer-1sgkvvv, .framer-eFF9T .framer-1ww8shb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-r0ud4u, .framer-eFF9T .framer-19e8gs2, .framer-eFF9T .framer-4kcib6, .framer-eFF9T .framer-s6dv9p, .framer-eFF9T .framer-guydbs, .framer-eFF9T .framer-xb5hwn, .framer-eFF9T .framer-yx03j7, .framer-eFF9T .framer-1yrxyvh, .framer-eFF9T .framer-ab4ka9, .framer-eFF9T .framer-1ezhp6x, .framer-eFF9T .framer-1x432jo, .framer-eFF9T .framer-1d4wt7n, .framer-eFF9T .framer-7bkw5k, .framer-eFF9T .framer-1k6nfcf, .framer-eFF9T .framer-lyfa23, .framer-eFF9T .framer-8gqiao, .framer-eFF9T .framer-1bsj3bs, .framer-eFF9T .framer-j97w6c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eFF9T .framer-7ula { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-b4xm9p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-eFF9T .framer-1oxuizy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-aoxlbd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 24px 0px; position: relative; width: 1px; }`,
        `.framer-eFF9T .framer-76bbce, .framer-eFF9T .framer-1lg13gi, .framer-eFF9T .framer-1kle1rg { aspect-ratio: 1.7866666666666666 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1ba2nby { bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-eFF9T .framer-kx13ja, .framer-eFF9T .framer-yhvl03, .framer-eFF9T .framer-1ws1x0m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-eFF9T .framer-zlnk42 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1twbej2, .framer-eFF9T .framer-pvl97h, .framer-eFF9T .framer-1fxr1ai-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1k23dox { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1mher31, .framer-eFF9T .framer-18ipf4y { aspect-ratio: 1.7866666666666666 / 1; bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-eFF9T .framer-1annr6e { --border-bottom-width: 0px; --border-color: #0085a6; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 3px; align-content: center; align-items: center; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 24px; position: relative; scroll-margin-top: 220px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eFF9T .framer-1m542r6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1diaag4, .framer-eFF9T .framer-15v1ggg, .framer-eFF9T .framer-uxad9, .framer-eFF9T .framer-1pazivn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-eFF9T .framer-1f9j8hg, .framer-eFF9T .framer-1rorlwh, .framer-eFF9T .framer-kop8nb, .framer-eFF9T .framer-y6y36h, .framer-eFF9T .framer-1ov2t0s, .framer-eFF9T .framer-1p9c38w, .framer-eFF9T .framer-i0j19o, .framer-eFF9T .framer-ignxa4, .framer-eFF9T .framer-7aa23w, .framer-eFF9T .framer-50zgw7, .framer-eFF9T .framer-4f4l92, .framer-eFF9T .framer-efhcx0, .framer-eFF9T .framer-luqwj9, .framer-eFF9T .framer-9wx41c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-eFF9T .framer-e68ye3, .framer-eFF9T .framer-p1it0r, .framer-eFF9T .framer-1qij601, .framer-eFF9T .framer-1w86onu, .framer-eFF9T .framer-1n01k3e, .framer-eFF9T .framer-1ib5thm { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1sv740f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1h5o275 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; scroll-margin-top: 150px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-eFF9T .framer-1tgk131 { --border-bottom-width: 0px; --border-color: #012a87; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eFF9T .framer-1jkopas { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-eFF9T .framer-rj3hvk, .framer-eFF9T .framer-ifugpr, .framer-eFF9T .framer-78a6a, .framer-eFF9T .framer-1tgyhz0, .framer-eFF9T .framer-11px804 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1i49219, .framer-eFF9T .framer-1jjse6d, .framer-eFF9T .framer-19ufz9h, .framer-eFF9T .framer-1xriopz, .framer-eFF9T .framer-3ybzne { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eFF9T .framer-aww3af, .framer-eFF9T .framer-4bufna, .framer-eFF9T .framer-m5h3h7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eFF9T .framer-1cs3502-container, .framer-eFF9T .framer-sjn71x-container, .framer-eFF9T .framer-5dgbnb-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-eFF9T .framer-18ixo3c { --border-bottom-width: 0px; --border-color: #002b84; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eFF9T .framer-1xp5947, .framer-eFF9T .framer-9yb5bx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-eFF9T .framer-1eir9kx { --border-bottom-width: 0px; --border-color: #345eaa; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eFF9T .framer-1nb816w, .framer-eFF9T .framer-93ijns { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...j,
        `.framer-eFF9T[data-border="true"]::after, .framer-eFF9T [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-eFF9T.framer-axsey5 { width: 1240px; } .framer-eFF9T .framer-2tzmvq { order: 0; } .framer-eFF9T .framer-1dcis8k { gap: 28px; order: 1; } .framer-eFF9T .framer-yql46e, .framer-eFF9T .framer-u1kdq0 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-eFF9T .framer-1annr6e { gap: 16px; } .framer-eFF9T .framer-1ww8shb, .framer-eFF9T .framer-1m542r6 { gap: 8px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-eFF9T.framer-axsey5 { flex-direction: column; width: 810px; } .framer-eFF9T .framer-90lg0y-container { height: auto; width: 100%; z-index: 2; } .framer-eFF9T .framer-1dr774q { flex: none; padding: 24px 48px 0px 48px; width: 100%; } .framer-eFF9T .framer-2tzmvq { box-shadow: unset; order: 0; padding: 0px; position: relative; top: unset; z-index: 0; } .framer-eFF9T .framer-ttduee { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; } .framer-eFF9T .framer-1dcis8k { gap: 24px; order: 1; padding: 0px; } .framer-eFF9T .framer-yql46e, .framer-eFF9T .framer-u1kdq0 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-eFF9T .framer-1annr6e, .framer-eFF9T .framer-18ixo3c { padding: 24px 0px 24px 8px; } .framer-eFF9T .framer-1m542r6 { gap: 16px; overflow: var(--overflow-clip-fallback, clip); } .framer-eFF9T .framer-15v1ggg { padding: 0px; } .framer-eFF9T .framer-aww3af, .framer-eFF9T .framer-4bufna, .framer-eFF9T .framer-m5h3h7 { flex-direction: column; } .framer-eFF9T .framer-1cs3502-container, .framer-eFF9T .framer-sjn71x-container, .framer-eFF9T .framer-5dgbnb-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-eFF9T.framer-axsey5 { flex-direction: column; width: 390px; } .framer-eFF9T .framer-90lg0y-container { height: auto; width: 100%; z-index: 2; } .framer-eFF9T .framer-1dr774q { flex: none; gap: 16px; padding: 24px 24px 0px 24px; width: 100%; } .framer-eFF9T .framer-2tzmvq { align-content: center; align-items: center; box-shadow: unset; order: 0; padding: 0px; position: relative; top: unset; } .framer-eFF9T .framer-1aod5t1 { order: 1; } .framer-eFF9T .framer-ttduee { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-eFF9T .framer-1dcis8k { gap: 16px; order: 1; padding: 0px; } .framer-eFF9T .framer-15bqwcc, .framer-eFF9T .framer-1119l3s, .framer-eFF9T .framer-14zihww, .framer-eFF9T .framer-9bw73d, .framer-eFF9T .framer-1sgkvvv, .framer-eFF9T .framer-1ww8shb { gap: 8px; } .framer-eFF9T .framer-1oxuizy, .framer-eFF9T .framer-1k23dox, .framer-eFF9T .framer-aww3af, .framer-eFF9T .framer-4bufna, .framer-eFF9T .framer-m5h3h7 { flex-direction: column; } .framer-eFF9T .framer-aoxlbd { flex: none; padding: 0px; width: 100%; } .framer-eFF9T .framer-kx13ja, .framer-eFF9T .framer-yhvl03, .framer-eFF9T .framer-1ws1x0m, .framer-eFF9T .framer-1cs3502-container, .framer-eFF9T .framer-sjn71x-container, .framer-eFF9T .framer-5dgbnb-container { flex: none; width: 100%; } .framer-eFF9T .framer-yql46e, .framer-eFF9T .framer-u1kdq0 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-eFF9T .framer-1annr6e, .framer-eFF9T .framer-18ixo3c, .framer-eFF9T .framer-1eir9kx { padding: 16px 0px 16px 8px; } .framer-eFF9T .framer-1m542r6 { gap: 16px; } .framer-eFF9T .framer-15v1ggg { padding: 0px; } .framer-eFF9T .framer-1tgk131 { padding: 16px 0px 8px 8px; }}`,
      ]),
      (Z = y(Y, X, `framer-eFF9T`)),
      (Z.displayName = `Page`),
      (Z.defaultProps = { height: 12339, width: 1440 }),
      g(
        Z,
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
                cssFamilyName: `Opening Hours Sans`,
                source: `builtIn`,
                style: `normal`,
                uiFamilyName: `Opening Hours Sans`,
                url: `../../assets/fonts/cRqYdMfI2ReRe9YpkZxDs3FRvhA.woff2`,
                weight: `400`,
              },
            ],
          },
          ...L,
          ...R,
          ...C(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => h([() => m(N, {}, t)], t) }),
      (Q = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerAgTyDC1r5`,
            slots: [],
            annotations: {
              framerAcceptsLayoutTemplate: `false`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerContractVersion: `1`,
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerColorSyntax: `true`,
              framerScrollSections: `{"ytp6B3a5C":{"pattern":":ytp6B3a5C","name":"основные-макеты"},"Y82j_iKWi":{"pattern":":Y82j_iKWi","name":"research2"},"Jf7JPLKX3":{"pattern":":Jf7JPLKX3","name":"naviagtion"}}`,
              framerIntrinsicWidth: `1440`,
              framerIntrinsicHeight: `12339`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"sYEatTzoX":{"layout":["fixed","auto"]},"ZWh9kZq5D":{"layout":["fixed","auto"]},"Yx8geYCJd":{"layout":["fixed","auto"]}}}`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default, V as queryParamNames };
//# sourceMappingURL=gvRhvG9H9HDD1Pu7eFYgcXwfmhTTYmnvaTZ4PkcZxac.DaIQwbBJ.mjs.map
