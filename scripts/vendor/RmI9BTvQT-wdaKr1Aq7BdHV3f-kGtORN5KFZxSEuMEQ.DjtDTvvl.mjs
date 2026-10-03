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
import fe, { t as z } from "./x7J06e89xepOel12b7jtnm91Mpmus5C4mRLFzjyD7zI.DtqMUDlL.mjs";
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
      epGArhgIw: `(max-width: 809.98px)`,
      PbVMyshBc: `(min-width: 810px) and (max-width: 1239.98px)`,
      xdsZYuhh7: `(min-width: 1240px) and (max-width: 1439.98px)`,
      yCV1Bmw9v: `(min-width: 1440px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-EdUZT`),
    (K = {
      epGArhgIw: `framer-v-1fvbzbi`,
      PbVMyshBc: `framer-v-4j1r2m`,
      xdsZYuhh7: `framer-v-pifq72`,
      yCV1Bmw9v: `framer-v-h60ghz`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `yCV1Bmw9v`, Laptop: `xdsZYuhh7`, Phone: `epGArhgIw`, Tablet: `PbVMyshBc` }),
    (X = ({ value: e }) =>
      D()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `yCV1Bmw9v`,
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
          L = () => !U() || ![`PbVMyshBc`, `epGArhgIw`].includes(A),
          R = () => !U() || A === `PbVMyshBc`,
          z = () => !U() || A !== `PbVMyshBc`,
          B = x(`GdZGCtzTE`),
          V = l(null),
          W = () => !U() || A === `epGArhgIw`,
          Q = x(`P0XnJztSj`),
          $ = l(null),
          pe = x(`Lv6ixVkCA`),
          me = l(null);
        return (
          ae({}),
          o(g.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Y,
              primaryVariantId: `yCV1Bmw9v`,
              variantClassNames: K,
            },
            children: a(ne, {
              id: D ?? d,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...k,
                  className: m(j, `framer-h60ghz`, S),
                  ref: c,
                  style: { ..._ },
                  children: [
                    o(v, {
                      breakpoint: A,
                      overrides: {
                        epGArhgIw: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                        PbVMyshBc: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(E, {
                        height: 1e3,
                        y: (h?.y || 0) + 0,
                        children: o(w, {
                          className: `framer-qlewdf-container`,
                          layout: I,
                          nodeId: `XttGUhNs6`,
                          scopeId: `yNWqB1Ufr`,
                          children: o(v, {
                            breakpoint: A,
                            overrides: {
                              epGArhgIw: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                              PbVMyshBc: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                            },
                            children: o(M, {
                              height: `100%`,
                              id: `XttGUhNs6`,
                              layoutId: `XttGUhNs6`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1i1bpdp`,
                      layout: I,
                      children: [
                        L() &&
                          o(`div`, {
                            className: `framer-15m3891 hidden-4j1r2m hidden-1fvbzbi`,
                            children: a(`div`, {
                              className: `framer-1ruzsw1`,
                              children: [
                                a(`div`, {
                                  className: `framer-1j1i4fj`,
                                  children: [
                                    o(b, {
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
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1or6gif`,
                                      fonts: [`GF;Stack Sans Headline-700`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-c5lepp`,
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
                                                href: { webPageId: `yNWqB1Ufr` },
                                                motionChild: !0,
                                                nodeId: `kv79g1PbX`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `yNWqB1Ufr`,
                                                smoothScroll: !0,
                                                children: o(u.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: o(`strong`, {
                                                    children: `Основные макеты`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1ohnvbd`,
                                          fonts: [
                                            `GF;Stack Sans Text-regular`,
                                            `GF;Stack Sans Text-700`,
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
                                                "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `rgb(51, 26, 0)`,
                                              },
                                              children: o(C, {
                                                href: {
                                                  hash: `:P0XnJztSj`,
                                                  webPageId: `yNWqB1Ufr`,
                                                },
                                                motionChild: !0,
                                                nodeId: `qXz5hIK5T`,
                                                openInNewTab: !1,
                                                preserveParams: !1,
                                                relValues: [],
                                                scopeId: `yNWqB1Ufr`,
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
                                          className: `framer-1nw04c9`,
                                          fonts: [
                                            `GF;Stack Sans Text-regular`,
                                            `GF;Stack Sans Text-700`,
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
                                                "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `rgb(51, 26, 0)`,
                                              },
                                              children: o(C, {
                                                href: {
                                                  hash: `:Lv6ixVkCA`,
                                                  webPageId: `yNWqB1Ufr`,
                                                },
                                                motionChild: !0,
                                                nodeId: `GSSDr9AfC`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `yNWqB1Ufr`,
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
                                          className: `framer-1s8f719`,
                                          fonts: [
                                            `GF;Stack Sans Text-regular`,
                                            `GF;Stack Sans Text-700`,
                                          ],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-1e5ijix`,
                                  children: o(C, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `vz0KrqAta`,
                                    openInNewTab: !1,
                                    scopeId: `yNWqB1Ufr`,
                                    children: o(u.a, {
                                      className: `framer-1bbxqfr framer-97wmo2`,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-zf9fjd`,
                                        children: a(y, {
                                          className: `framer-omk8v7`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(y, {
                                              className: `framer-16ej2oa`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(y, {
                                              className: `framer-1bebbma`,
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
                          className: `framer-tav378`,
                          children: [
                            R() &&
                              a(`div`, {
                                className: `framer-1gy8927 hidden-h60ghz hidden-pifq72 hidden-1fvbzbi`,
                                children: [
                                  o(`div`, {
                                    className: `framer-83excu`,
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
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1omfcsa`,
                                      fonts: [`GF;Stack Sans Headline-700`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(C, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `Du26bERfo`,
                                    openInNewTab: !1,
                                    scopeId: `yNWqB1Ufr`,
                                    children: o(u.a, {
                                      className: `framer-f1e2e framer-97wmo2`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-rc4ksj`,
                                        children: a(y, {
                                          className: `framer-8s7fpe`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(y, {
                                              className: `framer-fe76wl`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(y, {
                                              className: `framer-8bduef`,
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
                              className: `framer-l44man`,
                              children: [
                                z() &&
                                  o(v, {
                                    breakpoint: A,
                                    overrides: {
                                      epGArhgIw: {
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
                                      xdsZYuhh7: {
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
                                      className: `framer-1mk69i hidden-4j1r2m`,
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
                                        children: `Customer Connect Hub — многолетний проект, направленный на консолидацию двух зрелых продуктов: iEDI Clearinghouse и Optum Connect Center. Изначально разработанные для разных ниш одной индустрии, со временем продукты эволюционировали, их функциональность пересеклась, и они начали конкурировать между собой, создавая фрагментированный пользовательский опыт и дублирование решений.`,
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
                                        children: `В этом кейсе рассматриваются UX-стратегия и ключевые дизайнерские решения, лежащие в основе создания целостной платформы с сохранением существующего пользовательского поведения.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-13qwgr9`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                R() &&
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
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: o(`strong`, { children: `Обзор проекта` }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1uanhdh hidden-h60ghz hidden-pifq72 hidden-1fvbzbi`,
                                    fonts: [
                                      `GF;Stack Sans Headline-500`,
                                      `GF;Stack Sans Headline-700`,
                                    ],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                            o(v, {
                              breakpoint: A,
                              overrides: {
                                epGArhgIw: {
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
                                        children: `Основные Макеты`,
                                      }),
                                    }),
                                  }),
                                },
                                PbVMyshBc: {
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
                                        children: `Основные Макеты`,
                                      }),
                                    }),
                                  }),
                                },
                                xdsZYuhh7: {
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
                                        children: `Основные Макеты`,
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
                                      children: `Основные Макеты`,
                                    }),
                                  }),
                                }),
                                className: `framer-rsduqx`,
                                fonts: [`GF;Stack Sans Headline-600`],
                                id: B,
                                ref: V,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(`div`, {
                              className: `framer-18qkp5j`,
                              children: [
                                a(`div`, {
                                  className: `framer-chmwgs`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-1jcd6ey`,
                                      children: [
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            epGArhgIw: {
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
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
                                            className: `framer-10r8p2l`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-17pjl58`,
                                          children: o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              epGArhgIw: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      800 +
                                                      16 +
                                                      0 +
                                                      0 +
                                                      107.6 +
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
                                                  sizes: `calc(max((${h?.width || `100vw`} - 60px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080`,
                                                  srcSet: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                              PbVMyshBc: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      800 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      444.6 +
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
                                                  sizes: `calc(max((${h?.width || `100vw`} - 108px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080`,
                                                  srcSet: `https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/i0LvIiCzwhuxRlm80JSS3rAGA8.png?width=1920&height=1080 1920w`,
                                                },
                                              },
                                              xdsZYuhh7: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1080,
                                                  intrinsicWidth: 1920,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      194.4 +
                                                      0 +
                                                      347.2 +
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
                                                    194.4 +
                                                    0 +
                                                    383.8 +
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
                                              className: `framer-1etltgw`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-79k728`,
                                      children: [
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            epGArhgIw: {
                                              children: o(r, {
                                                children: a(`h6`, {
                                                  className: `framer-styles-preset-yhn7fw`,
                                                  "data-styles-preset": `SDQdvccR0`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
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
                                            className: `framer-1negms2`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-n1u1ur`,
                                          children: o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              epGArhgIw: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1787,
                                                  intrinsicWidth: 3192,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      800 +
                                                      16 +
                                                      0 +
                                                      0 +
                                                      107.6 +
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
                                                  sizes: `calc(max((${h?.width || `100vw`} - 60px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787`,
                                                  srcSet: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=512&width=3192&height=1787 512w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=1024&width=3192&height=1787 1024w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=2048&width=3192&height=1787 2048w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787 3192w`,
                                                },
                                              },
                                              PbVMyshBc: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1787,
                                                  intrinsicWidth: 3192,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      800 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      444.6 +
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
                                                  sizes: `calc(max((${h?.width || `100vw`} - 108px) / 2, 1px) * 0.9989)`,
                                                  src: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787`,
                                                  srcSet: `https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=512&width=3192&height=1787 512w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=1024&width=3192&height=1787 1024w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?scale-down-to=2048&width=3192&height=1787 2048w,https://framerusercontent.com/images/x0yP8wNnTCQCXEWqQgWRzNSb7U.png?width=3192&height=1787 3192w`,
                                                },
                                              },
                                              xdsZYuhh7: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 1787,
                                                  intrinsicWidth: 3192,
                                                  loading: p(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      194.4 +
                                                      0 +
                                                      347.2 +
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
                                            },
                                            children: o(T, {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 1787,
                                                intrinsicWidth: 3192,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    194.4 +
                                                    0 +
                                                    383.8 +
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
                                              className: `framer-jb57fi`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-72fimo`,
                                  children: [
                                    o(v, {
                                      breakpoint: A,
                                      overrides: {
                                        epGArhgIw: {
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
                                            children: o(`strong`, { children: `Claims Dashboard` }),
                                          }),
                                        }),
                                        className: `framer-q9pbqp`,
                                        fonts: [
                                          `GF;Stack Sans Text-regular`,
                                          `GF;Stack Sans Text-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    o(v, {
                                      breakpoint: A,
                                      overrides: {
                                        epGArhgIw: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 2134,
                                            intrinsicWidth: 1920,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                800 +
                                                16 +
                                                0 +
                                                0 +
                                                107.6 +
                                                0 +
                                                0 +
                                                25
                                            ),
                                            pixelHeight: 2134,
                                            pixelWidth: 1920,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `max((${h?.width || `100vw`} - 60px) / 2, 1px)`,
                                            src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                            srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                          },
                                        },
                                        PbVMyshBc: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 2134,
                                            intrinsicWidth: 1920,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                800 +
                                                0 +
                                                0 +
                                                16 +
                                                444.6 +
                                                0 +
                                                0 +
                                                30.2
                                            ),
                                            pixelHeight: 2134,
                                            pixelWidth: 1920,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `max((${h?.width || `100vw`} - 108px) / 2, 1px)`,
                                            src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                            srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                          },
                                        },
                                        xdsZYuhh7: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            intrinsicHeight: 2134,
                                            intrinsicWidth: 1920,
                                            loading: p(
                                              (h?.y || 0) + 0 + 0 + 194.4 + 0 + 347.2 + 0 + 0 + 30.2
                                            ),
                                            pixelHeight: 2134,
                                            pixelWidth: 1920,
                                            positionX: `left`,
                                            positionY: `top`,
                                            src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                            srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                          },
                                        },
                                      },
                                      children: o(T, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 2134,
                                          intrinsicWidth: 1920,
                                          loading: p(
                                            (h?.y || 0) + 0 + 0 + 194.4 + 0 + 383.8 + 0 + 0 + 30.2
                                          ),
                                          pixelHeight: 2134,
                                          pixelWidth: 1920,
                                          positionX: `left`,
                                          positionY: `top`,
                                          src: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134`,
                                          srcSet: `https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=1024&width=1920&height=2134 921w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?scale-down-to=2048&width=1920&height=2134 1842w,https://framerusercontent.com/images/nbYhmIOz2TZ9YhrKQJyCPZfA0MU.png?width=1920&height=2134 1920w`,
                                        },
                                        className: `framer-tmk53p`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-142uz7f`,
                              children: [
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    epGArhgIw: {
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
                                            children: `Основная задача`,
                                          }),
                                        }),
                                      }),
                                    },
                                    PbVMyshBc: {
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
                                            children: `Основная задача`,
                                          }),
                                        }),
                                      }),
                                    },
                                    xdsZYuhh7: {
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
                                            children: `Основная задача`,
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
                                          children: `Основная задача`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-fi5tok`,
                                    fonts: [`GF;Stack Sans Headline-600`],
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
                                      children: `Customer Connect Hub объединяет два зрелых и популярных продукта, iEDI Clearinghouse и Connect Center, которые глубоко интегрированы в повседневные рабочие процессы пользователей. Основная задача UX, объединить эти платформы без нарушения привычных процессов, обеспечивая постепенную миграцию функциональности и создавая прочную основу для дальнейшего развития и углубленной интеграции продукта.`,
                                    }),
                                  }),
                                  className: `framer-11kfdc3`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-ku3oft`,
                              children: [
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    epGArhgIw: {
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
                                            children: `Моя роль`,
                                          }),
                                        }),
                                      }),
                                    },
                                    PbVMyshBc: {
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
                                            children: `Моя роль`,
                                          }),
                                        }),
                                      }),
                                    },
                                    xdsZYuhh7: {
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
                                            children: `Моя роль`,
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
                                          children: `Моя роль`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-yswguh`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
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
                                        children: `Я присоединилась к проекту в Q4 2025 года в роли Sr. UX-дизайнера и лидера команды, включающей младшего UX-дизайнера и UX-исследователя. Моей задачей было разработать UX-стратегию объединения двух продуктов, создать единый дизайн и общую информационную архитектуру, которая учитывает существующие рабочие процессы и долгосрочное видение продукта.`,
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
                                        children: `Мы начали с проведения UX-исследования для определения ключевых пользовательских персон, основных рабочих потоков и областей для быстрых улучшений с высоким эффектом. Результаты исследования позволили сформировать стратегию плавного перехода пользователей на новую платформу к концу 2026 года, сохранив их продуктивность и доверие к продукту.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1p2dv1n`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-aeqsiu`,
                              children: [
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    epGArhgIw: {
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
                                            children: `Ключевые UX-решения`,
                                          }),
                                        }),
                                      }),
                                    },
                                    PbVMyshBc: {
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
                                            children: `Ключевые UX-решения`,
                                          }),
                                        }),
                                      }),
                                    },
                                    xdsZYuhh7: {
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
                                            children: `Ключевые UX-решения`,
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
                                          children: `Ключевые UX-решения`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-ooxcru`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    xdsZYuhh7: {
                                      children: o(r, {
                                        children: a(`ul`, {
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
                                    },
                                  },
                                  children: o(b, {
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
                                    className: `framer-ym6lkc`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-ovhcv1`,
                              children: [
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    epGArhgIw: {
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
                                            children: `Инструменты`,
                                          }),
                                        }),
                                      }),
                                    },
                                    PbVMyshBc: {
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
                                            children: `Инструменты`,
                                          }),
                                        }),
                                      }),
                                    },
                                    xdsZYuhh7: {
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
                                            children: `Инструменты`,
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
                                          children: `Инструменты`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-fnncl2`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(v, {
                                  breakpoint: A,
                                  overrides: {
                                    PbVMyshBc: {
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
                                    xdsZYuhh7: {
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
                                    className: `framer-dgjfqk`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            W() &&
                              a(`div`, {
                                className: `framer-1mf4wj hidden-h60ghz hidden-pifq72 hidden-4j1r2m`,
                                children: [
                                  o(`div`, {
                                    className: `framer-1yl2aj0`,
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
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1j3frms`,
                                      fonts: [`GF;Stack Sans Headline-700`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(C, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `LOEbTwdeW`,
                                    openInNewTab: !1,
                                    scopeId: `yNWqB1Ufr`,
                                    children: o(u.a, {
                                      className: `framer-1blk2co framer-97wmo2`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-1a0cj6e`,
                                        children: a(y, {
                                          className: `framer-wl0i8l`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(y, {
                                              className: `framer-1g5fm8t`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(y, {
                                              className: `framer-179xgn`,
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
                          className: `framer-rt4kao`,
                          children: a(`div`, {
                            className: `framer-2lrt0d`,
                            "data-border": !0,
                            id: Q,
                            ref: $,
                            children: [
                              o(v, {
                                breakpoint: A,
                                overrides: {
                                  epGArhgIw: {
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
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: o(`strong`, {
                                            children: `Пользовательские исследования`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                  PbVMyshBc: {
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
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: o(`strong`, {
                                            children: `Пользовательские исследования`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                  xdsZYuhh7: {
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
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                        },
                                        children: o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: o(`strong`, {
                                            children: `Пользовательские исследования`,
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
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(51, 26, 0)`,
                                      },
                                      children: o(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: o(`strong`, {
                                          children: `Пользовательские исследования`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1bt2y32`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(`div`, {
                                className: `framer-h6jgd2`,
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
                                      children: `С самого начала проекта моя команда тесно сотрудничала с проектным менеджером, чтобы понять инструмент и существующие рабочие процессы. Мы анализировали поведение пользователей на обеих существующих платформах, выявляли болевые точки и шаблоны использования, а также возможности для улучшения. В рамках исследования мы провели анализ существующих пользовательских данных, конкурентный анализ и интервью с пользователями, чтобы глубже понять текущие продукты, их аудиторию и определить наилучший способ их объединения. Эти исследования заложили прочную основу для формирования требований пользователей и проектирования решений, которые учитывают как потребности пользователей, так и бизнес-цели.`,
                                    }),
                                  }),
                                  className: `framer-1q18uya`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-xaty7q`,
                                children: [
                                  a(`div`, {
                                    className: `framer-182laxx`,
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
                                              children: `Скриншот рабочей сессии: детальный анализ существующих пользовательских данных`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-e615pz`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(v, {
                                        breakpoint: A,
                                        overrides: {
                                          epGArhgIw: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2166 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  195.3 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 3078,
                                              pixelWidth: 8767,
                                              sizes: `calc(${h?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                              srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                            },
                                          },
                                          PbVMyshBc: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2223.1 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  198.1 +
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
                                          xdsZYuhh7: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2186.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  189.1 +
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
                                        },
                                        children: o(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                0 +
                                                2433.8 +
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
                                          className: `framer-umw2et`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-5gbsua`,
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
                                              children: `Организация ключевых функций по типам пользователей`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-spftro`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(v, {
                                        breakpoint: A,
                                        overrides: {
                                          epGArhgIw: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2166 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  195.3 +
                                                  0 +
                                                  281.5 +
                                                  0 +
                                                  139.5
                                              ),
                                              pixelHeight: 11199,
                                              pixelWidth: 12568,
                                              sizes: `calc(${h?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                              srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                            },
                                          },
                                          PbVMyshBc: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2223.1 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  198.1 +
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
                                          xdsZYuhh7: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2186.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  189.1 +
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
                                        },
                                        children: o(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                0 +
                                                2433.8 +
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
                                          className: `framer-1b7k5h1`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-18umfcr`,
                                children: [
                                  o(`div`, {
                                    className: `framer-1syilxx`,
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
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: o(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: o(`strong`, {
                                              children: `Ключевые инсайты юзабилити, сгруппированные по темам`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1qcz9vn`,
                                      fonts: [
                                        `GF;Stack Sans Headline-600`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-omv2cj`,
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
                                            children: o(`strong`, { children: `Доступ` }),
                                          }),
                                        }),
                                        className: `framer-k1i7n7`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(v, {
                                        breakpoint: A,
                                        overrides: {
                                          epGArhgIw: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2166 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  934.3 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              sizes: `calc(${h?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                          PbVMyshBc: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2223.1 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1390.1 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              sizes: `calc(${h?.width || `100vw`} - 112px)`,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                          xdsZYuhh7: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2186.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1334.1 +
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
                                        },
                                        children: o(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                0 +
                                                2433.8 +
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
                                          className: `framer-s4hhsx`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-n4vwsm`,
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
                                            children: o(`strong`, { children: `Коммуникации` }),
                                          }),
                                        }),
                                        className: `framer-1a6gaah`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(v, {
                                        breakpoint: A,
                                        overrides: {
                                          epGArhgIw: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2166 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  934.3 +
                                                  0 +
                                                  306.5 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              sizes: `calc(${h?.width || `100vw`} - 64px)`,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                          PbVMyshBc: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2223.1 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1390.1 +
                                                  0 +
                                                  515.5 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              sizes: `calc(${h?.width || `100vw`} - 112px)`,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                          xdsZYuhh7: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2186.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1334.1 +
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
                                        },
                                        children: o(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                0 +
                                                2433.8 +
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
                                          className: `framer-un216s`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-19v602x`,
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
                                            children: o(`strong`, { children: `Инновации` }),
                                          }),
                                        }),
                                        className: `framer-jdk2ok`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(v, {
                                        breakpoint: A,
                                        overrides: {
                                          epGArhgIw: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2166 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  934.3 +
                                                  0 +
                                                  558.2 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                          PbVMyshBc: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2223.1 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1390.1 +
                                                  0 +
                                                  975.2 +
                                                  0 +
                                                  40.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              sizes: `calc(${h?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                          xdsZYuhh7: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2186.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1334.1 +
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
                                        },
                                        children: o(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: p(
                                              (h?.y || 0) +
                                                0 +
                                                0 +
                                                2433.8 +
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
                                          className: `framer-1r5yvik`,
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
                          className: `framer-h1hwfq`,
                          children: a(`div`, {
                            className: `framer-al6vm4`,
                            "data-border": !0,
                            id: pe,
                            ref: me,
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
                                      children: o(`strong`, { children: `Прототипы и макеты` }),
                                    }),
                                  }),
                                }),
                                className: `framer-1kylvcb`,
                                fonts: [`GF;Stack Sans Headline-500`, `GF;Stack Sans Headline-700`],
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
                                    children: `Мы спроектировали лендинг Customer Connect Hub как персонализированную точку входа. В верхней части страницы отображаются ключевые показатели дашборда, дающие пользователю наглядный обзор его claims. В нижней части размещены быстрые ссылки на наиболее часто используемые инструменты для управления claims.`,
                                  }),
                                }),
                                className: `framer-src85d`,
                                fonts: [`GF;Varela Round-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(`div`, {
                                className: `framer-gyqop7`,
                                children: [
                                  a(`div`, {
                                    className: `framer-io0wz2`,
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
                                              children: o(`strong`, {
                                                children: `Customer Connect Hub Landing`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-khi6m0`,
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
                                              children: `В первой итерации лендинга Customer Connect Hub мы сосредоточились на демонстрации нового дашборда. Дашборд показывает ключевые тенденции данных и предоставляет высокоуровневые сводки по всем типам claims, независимо от используемого основного инструмента.`,
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
                                              children: `В нижней части экрана пользователи могут воспользоваться быстрыми ссылками для доступа к наиболее часто используемым инструментам управления claims или перейти напрямую в Connect Center или iEDI.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-1vwb0b2`,
                                        fonts: [`GF;Varela Round-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-rn7482`,
                                    children: o(E, {
                                      children: o(w, {
                                        className: `framer-jok34e-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `HdxCaetmJ`,
                                        scopeId: `yNWqB1Ufr`,
                                        children: o(F, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `HdxCaetmJ`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `HdxCaetmJ`,
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
                                className: `framer-1sx33my`,
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
                                          children: o(`strong`, {
                                            children: `Customer Connect Hub Dashboard`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-qej53w`,
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
                                          children: `Дашборд Customer Connect Hub выступает как инструмент быстрого сканирования текущей работы на уровне менеджера, предоставляя целостную картину состояния claims и позволяя оперативно оценить ситуацию без погружения в детали. Одновременно он служит мощным инструментом поиска и фильтрации, позволяя менеджерам и аналитикам быстро находить конкретные заявки или сегментировать claims по любым релевантным критериям.`,
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
                                          children: `В первой итерации мы сфокусировались на отображении наиболее критичной информации для управления процессом: дашборд дает наглядный обзор текущей нагрузки, помогает быстро выявлять приоритетные зоны и обеспечивает прямой доступ к нужным заявкам, значительно ускоряя их обработку и принятие решений.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-v0ybj`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(`div`, {
                                    className: `framer-1mtgin8`,
                                    children: o(E, {
                                      children: o(w, {
                                        className: `framer-3lapwk-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `yI0cKirs5`,
                                        scopeId: `yNWqB1Ufr`,
                                        children: o(F, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 4,
                                          bottomLeftRadius: 4,
                                          bottomRightRadius: 4,
                                          controls: !0,
                                          height: `100%`,
                                          id: `yI0cKirs5`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `yI0cKirs5`,
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
        `.framer-EdUZT.framer-97wmo2, .framer-EdUZT .framer-97wmo2 { display: block; }`,
        `.framer-EdUZT.framer-h60ghz { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-EdUZT .framer-qlewdf-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-EdUZT .framer-1i1bpdp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-EdUZT .framer-15m3891 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-EdUZT .framer-1ruzsw1 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 0px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-EdUZT .framer-1j1i4fj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-EdUZT .framer-1or6gif, .framer-EdUZT .framer-1omfcsa, .framer-EdUZT .framer-10r8p2l, .framer-EdUZT .framer-1negms2, .framer-EdUZT .framer-q9pbqp, .framer-EdUZT .framer-1j3frms { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-EdUZT .framer-c5lepp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-EdUZT .framer-1ohnvbd, .framer-EdUZT .framer-1nw04c9, .framer-EdUZT .framer-1s8f719 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-EdUZT .framer-1e5ijix { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-EdUZT .framer-1bbxqfr { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-EdUZT .framer-zf9fjd, .framer-EdUZT .framer-rc4ksj, .framer-EdUZT .framer-1a0cj6e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-EdUZT .framer-omk8v7, .framer-EdUZT .framer-8s7fpe, .framer-EdUZT .framer-wl0i8l { height: 13px; position: relative; width: 14px; }`,
        `.framer-EdUZT .framer-16ej2oa, .framer-EdUZT .framer-fe76wl, .framer-EdUZT .framer-1g5fm8t { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-EdUZT .framer-1bebbma, .framer-EdUZT .framer-8bduef, .framer-EdUZT .framer-179xgn { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-EdUZT .framer-tav378 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-1gy8927, .framer-EdUZT .framer-1mf4wj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; width: 100%; z-index: 1; }`,
        `.framer-EdUZT .framer-83excu, .framer-EdUZT .framer-1yl2aj0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-EdUZT .framer-f1e2e, .framer-EdUZT .framer-1blk2co { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fdfbf9; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-EdUZT .framer-l44man { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-1mk69i, .framer-EdUZT .framer-13qwgr9, .framer-EdUZT .framer-1uanhdh, .framer-EdUZT .framer-rsduqx, .framer-EdUZT .framer-fi5tok, .framer-EdUZT .framer-11kfdc3, .framer-EdUZT .framer-yswguh, .framer-EdUZT .framer-1p2dv1n, .framer-EdUZT .framer-ooxcru, .framer-EdUZT .framer-ym6lkc, .framer-EdUZT .framer-fnncl2, .framer-EdUZT .framer-dgjfqk, .framer-EdUZT .framer-1bt2y32, .framer-EdUZT .framer-1q18uya, .framer-EdUZT .framer-src85d { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EdUZT .framer-18qkp5j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-chmwgs { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-EdUZT .framer-1jcd6ey, .framer-EdUZT .framer-79k728 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-17pjl58, .framer-EdUZT .framer-n1u1ur { aspect-ratio: 1.7866666666666666 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-1etltgw, .framer-EdUZT .framer-jb57fi { aspect-ratio: 1.7866666666666666 / 1; bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-EdUZT .framer-72fimo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-EdUZT .framer-tmk53p { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-142uz7f, .framer-EdUZT .framer-ovhcv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-ku3oft, .framer-EdUZT .framer-h6jgd2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-aeqsiu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-rt4kao, .framer-EdUZT .framer-h1hwfq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-2lrt0d { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-EdUZT .framer-xaty7q, .framer-EdUZT .framer-18umfcr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-182laxx, .framer-EdUZT .framer-5gbsua { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 16px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-EdUZT .framer-e615pz, .framer-EdUZT .framer-spftro, .framer-EdUZT .framer-1qcz9vn, .framer-EdUZT .framer-1kylvcb, .framer-EdUZT .framer-khi6m0, .framer-EdUZT .framer-qej53w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-EdUZT .framer-umw2et, .framer-EdUZT .framer-s4hhsx, .framer-EdUZT .framer-un216s, .framer-EdUZT .framer-1r5yvik { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-1b7k5h1 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-1syilxx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 0px 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-omv2cj, .framer-EdUZT .framer-n4vwsm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 16px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-EdUZT .framer-k1i7n7, .framer-EdUZT .framer-1a6gaah, .framer-EdUZT .framer-jdk2ok { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }`,
        `.framer-EdUZT .framer-19v602x, .framer-EdUZT .framer-1sx33my { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-EdUZT .framer-al6vm4 { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 0px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-EdUZT .framer-gyqop7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-EdUZT .framer-io0wz2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-1vwb0b2, .framer-EdUZT .framer-v0ybj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EdUZT .framer-rn7482, .framer-EdUZT .framer-1mtgin8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EdUZT .framer-jok34e-container, .framer-EdUZT .framer-3lapwk-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...j,
        ...L,
        `.framer-EdUZT[data-border="true"]::after, .framer-EdUZT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-EdUZT.framer-h60ghz { width: 1240px; } .framer-EdUZT .framer-tav378 { gap: 16px; justify-content: flex-start; } .framer-EdUZT .framer-l44man, .framer-EdUZT .framer-142uz7f, .framer-EdUZT .framer-ku3oft, .framer-EdUZT .framer-aeqsiu, .framer-EdUZT .framer-h6jgd2, .framer-EdUZT .framer-xaty7q, .framer-EdUZT .framer-18umfcr { gap: 8px; } .framer-EdUZT .framer-2lrt0d { gap: 16px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-EdUZT.framer-h60ghz { flex-direction: column; width: 810px; } .framer-EdUZT .framer-qlewdf-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-EdUZT .framer-1i1bpdp { flex: none; order: 1; overflow: auto; padding: 0px 0px 32px 0px; width: 100%; } .framer-EdUZT .framer-tav378 { order: 1; padding: 16px 48px 0px 48px; } .framer-EdUZT .framer-l44man, .framer-EdUZT .framer-142uz7f, .framer-EdUZT .framer-ku3oft, .framer-EdUZT .framer-aeqsiu, .framer-EdUZT .framer-ovhcv1 { gap: 8px; } .framer-EdUZT .framer-13qwgr9 { order: 2; } .framer-EdUZT .framer-1uanhdh { order: 1; } .framer-EdUZT .framer-rt4kao { order: 2; padding: 0px 0px 0px 32px; } .framer-EdUZT .framer-2lrt0d { padding: 32px 48px 24px 16px; } .framer-EdUZT .framer-xaty7q, .framer-EdUZT .framer-18umfcr { overflow: var(--overflow-clip-fallback, clip); } .framer-EdUZT .framer-umw2et, .framer-EdUZT .framer-1b7k5h1 { width: 690px; } .framer-EdUZT .framer-h1hwfq { flex-direction: row; order: 3; padding: 0px 0px 0px 32px; } .framer-EdUZT .framer-al6vm4 { flex: 1 0 0px; padding: 32px 48px 0px 16px; width: 1px; } .framer-EdUZT .framer-rn7482, .framer-EdUZT .framer-1mtgin8 { flex-direction: column; } .framer-EdUZT .framer-jok34e-container, .framer-EdUZT .framer-3lapwk-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-EdUZT.framer-h60ghz { flex-direction: column; width: 390px; } .framer-EdUZT .framer-qlewdf-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-EdUZT .framer-1i1bpdp { flex: none; order: 1; overflow: auto; padding: 16px 0px 32px 0px; width: 100%; } .framer-EdUZT .framer-tav378 { gap: 16px; padding: 0px 24px 0px 24px; } .framer-EdUZT .framer-l44man { gap: 8px; order: 4; } .framer-EdUZT .framer-rsduqx { order: 2; } .framer-EdUZT .framer-18qkp5j { order: 3; } .framer-EdUZT .framer-142uz7f { gap: 8px; order: 5; } .framer-EdUZT .framer-ku3oft { order: 6; } .framer-EdUZT .framer-aeqsiu { order: 7; } .framer-EdUZT .framer-ovhcv1 { gap: 8px; order: 8; } .framer-EdUZT .framer-1mf4wj { order: 1; } .framer-EdUZT .framer-rt4kao, .framer-EdUZT .framer-h1hwfq { padding: 0px 0px 0px 16px; } .framer-EdUZT .framer-2lrt0d { padding: 16px 24px 24px 8px; } .framer-EdUZT .framer-h6jgd2 { gap: 8px; } .framer-EdUZT .framer-1syilxx { padding: 0px; } .framer-EdUZT .framer-al6vm4 { padding: 16px 24px 0px 8px; } .framer-EdUZT .framer-rn7482, .framer-EdUZT .framer-1mtgin8 { flex-direction: column; } .framer-EdUZT .framer-jok34e-container, .framer-EdUZT .framer-3lapwk-container { flex: none; width: 100%; }}`,
      ],
      `framer-EdUZT`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 7320.5, width: 1440 }),
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
        default: {
          type: `reactComponent`,
          name: `FrameryNWqB1Ufr`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1440`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xdsZYuhh7":{"layout":["fixed","auto"]},"PbVMyshBc":{"layout":["fixed","auto"]},"epGArhgIw":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"GdZGCtzTE":{"pattern":":GdZGCtzTE","name":"основные-макеты"},"P0XnJztSj":{"pattern":":P0XnJztSj","name":"research"},"Lv6ixVkCA":{"pattern":":Lv6ixVkCA","name":"prototype"}}`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `7320.5`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=RmI9BTvQT-wdaKr1Aq7BdHV3f-kGtORN5KFZxSEuMEQ.DjtDTvvl.mjs.map
