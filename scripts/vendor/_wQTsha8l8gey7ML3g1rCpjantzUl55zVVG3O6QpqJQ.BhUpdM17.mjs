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
import { A as u, a as d, r as te, t as f } from "./motion.AUYMciny.mjs";
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
  it as S,
  j as C,
  l as w,
  n as T,
  nt as oe,
  rt as se,
  s as ce,
  t as E,
  tt as D,
  v as O,
  w as k,
} from "./framer.CfbrMSxG.mjs";
import { a as le, c as A, i as ue, o as j, r as M, s as N } from "./shared-lib.f3R8fmkt.mjs";
import { i as P, n as F, r as I, t as de } from "./dnqfQO1cP.DpLvdd9U.mjs";
import { n as L, t as R } from "./Video.KjNbylVS.mjs";
import fe, { t as z } from "./Gdvw5KXCK_7Tnn-rXlnaoiYHvWHHVOtQYeKK0S9GaxQ.DCJq-_I_.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    re(),
    f(),
    n(),
    L(),
    ue(),
    P(),
    A(),
    z(),
    (B = p(M)),
    (V = p(R)),
    (H = {
      He6AGrWrn: `(min-width: 1440px)`,
      td4chYDLO: `(min-width: 1240px) and (max-width: 1439.98px)`,
      Uga6BTVny: `(min-width: 810px) and (max-width: 1239.98px)`,
      v3GXcwJZS: `(max-width: 809.98px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-nExCA`),
    (K = {
      He6AGrWrn: `framer-v-1j57uli`,
      td4chYDLO: `framer-v-154vgs4`,
      Uga6BTVny: `framer-v-r7ksoo`,
      v3GXcwJZS: `framer-v-pnzo6k`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `He6AGrWrn`, Laptop: `td4chYDLO`, Phone: `v3GXcwJZS`, Tablet: `Uga6BTVny` }),
    (X = ({ value: e }) =>
      D()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `He6AGrWrn`,
    })),
    (Q = v(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          f = ee(),
          { activeLocale: p, setLocale: re } = oe(),
          g = ae(),
          { style: v, className: C, layoutId: D, variant: O, ...k } = Z(e);
        se(t(() => fe({}, p), [p]));
        let [A, ue] = ne(O, H, !1),
          j = h(G, le, de),
          N = i(_)?.isLayoutTemplate,
          P = !!i(d)?.transition?.layout,
          F = q(N, P),
          I = () => !U() || ![`Uga6BTVny`, `v3GXcwJZS`].includes(A),
          L = S(`b6BP89ahK`),
          z = l(null),
          B = S(`UmUuJMeaU`),
          V = l(null);
        return (
          ie({}),
          o(_.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Y,
              primaryVariantId: `He6AGrWrn`,
              variantClassNames: K,
            },
            children: a(te, {
              id: D ?? f,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...k,
                  className: h(j, `framer-1j57uli`, C),
                  ref: c,
                  style: { ...v },
                  children: [
                    o(y, {
                      breakpoint: A,
                      overrides: {
                        Uga6BTVny: {
                          height: 800,
                          width: g?.width || `100vw`,
                          y: (g?.y || 0) + 0 + 0,
                        },
                        v3GXcwJZS: {
                          height: 800,
                          width: g?.width || `100vw`,
                          y: (g?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(E, {
                        height: 1e3,
                        y: (g?.y || 0) + 0,
                        children: o(T, {
                          className: `framer-1jma3s0-container`,
                          layout: F,
                          nodeId: `Vg23KooEM`,
                          scopeId: `QijvxGXqd`,
                          children: o(y, {
                            breakpoint: A,
                            overrides: {
                              Uga6BTVny: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                              v3GXcwJZS: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                            },
                            children: o(M, {
                              height: `100%`,
                              id: `Vg23KooEM`,
                              layoutId: `Vg23KooEM`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    o(u.div, {
                      className: `framer-rb5zmw`,
                      layout: F,
                      children: a(`div`, {
                        className: `framer-1ut2vr7`,
                        children: [
                          a(`div`, {
                            className: `framer-18afh7w`,
                            children: [
                              a(`div`, {
                                className: `framer-5k3hph`,
                                children: [
                                  o(`div`, {
                                    className: `framer-luiwxh`,
                                    children: o(x, {
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
                                          children: `Data File Delivery (DFD)`,
                                        }),
                                      }),
                                      className: `framer-g1uch2`,
                                      fonts: [`GF;Stack Sans Headline-700`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(w, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `jvl79HRhc`,
                                    openInNewTab: !1,
                                    scopeId: `QijvxGXqd`,
                                    children: o(y, {
                                      breakpoint: A,
                                      overrides: {
                                        Uga6BTVny: { "data-border": !0 },
                                        v3GXcwJZS: { "data-border": !0 },
                                      },
                                      children: o(u.a, {
                                        className: `framer-177h93z framer-1aifb29`,
                                        "data-framer-name": `Button`,
                                        children: o(`div`, {
                                          className: `framer-10jowdf`,
                                          children: o(y, {
                                            breakpoint: A,
                                            overrides: {
                                              Uga6BTVny: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                              },
                                              v3GXcwJZS: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                              },
                                            },
                                            children: a(b, {
                                              className: `framer-1llk6x3`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                o(b, {
                                                  className: `framer-p945pt`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(b, {
                                                  className: `framer-j4b0e0`,
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
                              I() &&
                                a(`div`, {
                                  className: `framer-2ys318 hidden-r7ksoo hidden-pnzo6k`,
                                  children: [
                                    o(x, {
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
                                          children: o(w, {
                                            href: { hash: `:b6BP89ahK`, webPageId: `pVjAhsh5N` },
                                            motionChild: !0,
                                            nodeId: `xqYwOSh2W`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `QijvxGXqd`,
                                            smoothScroll: !0,
                                            children: o(u.a, {
                                              className: `framer-styles-preset-fx4193`,
                                              "data-styles-preset": `uWIEDCuYW`,
                                              children: o(`strong`, {
                                                children: `Системная архитектура`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-4drfdz`,
                                      fonts: [
                                        `GF;Stack Sans Text-regular`,
                                        `GF;Stack Sans Text-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      breakpoint: A,
                                      overrides: {
                                        td4chYDLO: {
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
                                              children: o(w, {
                                                href: {
                                                  hash: `:UmUuJMeaU`,
                                                  webPageId: `pVjAhsh5N`,
                                                },
                                                motionChild: !0,
                                                nodeId: `nCWlB6Wrs`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `QijvxGXqd`,
                                                smoothScroll: !0,
                                                children: o(u.a, {
                                                  className: `framer-styles-preset-5o0yrv`,
                                                  "data-styles-preset": `dnqfQO1cP`,
                                                  children: o(`strong`, {
                                                    children: `Прототип DFD`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(x, {
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
                                            children: o(w, {
                                              href: { hash: `:UmUuJMeaU`, webPageId: `pVjAhsh5N` },
                                              motionChild: !0,
                                              nodeId: `nCWlB6Wrs`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `QijvxGXqd`,
                                              smoothScroll: !0,
                                              children: o(u.a, {
                                                className: `framer-styles-preset-fx4193`,
                                                "data-styles-preset": `uWIEDCuYW`,
                                                children: o(`strong`, { children: `Прототип DFD` }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-kte1bw`,
                                        fonts: [
                                          `GF;Stack Sans Text-regular`,
                                          `GF;Stack Sans Text-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          a(`div`, {
                            className: `framer-1vyd6ii`,
                            children: [
                              a(`div`, {
                                className: `framer-n6r9hr`,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      td4chYDLO: {
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
                                      Uga6BTVny: {
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
                                      v3GXcwJZS: {
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
                                    },
                                    children: o(x, {
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
                                      className: `framer-f43b1b`,
                                      fonts: [
                                        `GF;Stack Sans Headline-500`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
                                        children: o(r, {
                                          children: a(`p`, {
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
                                              o(`strong`, { children: `DFD (Data File Delivery)` }),
                                              ` — внутренний административный инструмент, разработанный для замены нескольких разрозненных систем единым централизованным решением. Продукт автоматизирует доставку критически важных файлов, включая инструкции к медицинскому оборудованию, сервисные уведомления и обновления. Доставка осуществляется как по подписке, так и по запросу, в зависимости от сценария использования.`,
                                            ],
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
                                        children: o(r, {
                                          children: a(`p`, {
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
                                              o(`strong`, { children: `DFD (Data File Delivery)` }),
                                              ` — внутренний административный инструмент, разработанный для замены нескольких разрозненных систем единым централизованным решением. Продукт автоматизирует доставку критически важных файлов, включая инструкции к медицинскому оборудованию, сервисные уведомления и обновления. Доставка осуществляется как по подписке, так и по запросу, в зависимости от сценария использования.`,
                                            ],
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: a(`p`, {
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
                                            o(`strong`, { children: `DFD (Data File Delivery)` }),
                                            ` — внутренний административный инструмент, разработанный для замены нескольких разрозненных систем единым централизованным решением. Продукт автоматизирует доставку критически важных файлов, включая инструкции к медицинскому оборудованию, сервисные уведомления и обновления. Доставка осуществляется как по подписке, так и по запросу, в зависимости от сценария использования.`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-pbgo6c`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1ypusxq`,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                              children: o(`strong`, {
                                                children: `Основная задача`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                              children: o(`strong`, {
                                                children: `Основная задача`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                      className: `framer-1e32ip4`,
                                      fonts: [
                                        `GF;Stack Sans Headline-600`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                            children: `Команды поддержки работали с набором устаревших и несвязанных инструментов, частично выполняя рассылки вручную. Процессы были повторяющимися, подверженными ошибкам и сложными в поддержке, с отдельными потоками настройки для продуктов и клиентов и ручным связыванием коммуникаций. Задача заключалась в том, чтобы объединить эти процессы в единый инструмент, способный поддерживать широкий спектр сценариев доставки при жёстких ограничениях по времени и бюджету.`,
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                            children: `Команды поддержки работали с набором устаревших и несвязанных инструментов, частично выполняя рассылки вручную. Процессы были повторяющимися, подверженными ошибкам и сложными в поддержке, с отдельными потоками настройки для продуктов и клиентов и ручным связыванием коммуникаций. Задача заключалась в том, чтобы объединить эти процессы в единый инструмент, способный поддерживать широкий спектр сценариев доставки при жёстких ограничениях по времени и бюджету.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                          children: `Команды поддержки работали с набором устаревших и несвязанных инструментов, частично выполняя рассылки вручную. Процессы были повторяющимися, подверженными ошибкам и сложными в поддержке, с отдельными потоками настройки для продуктов и клиентов и ручным связыванием коммуникаций. Задача заключалась в том, чтобы объединить эти процессы в единый инструмент, способный поддерживать широкий спектр сценариев доставки при жёстких ограничениях по времени и бюджету.`,
                                        }),
                                      }),
                                      className: `framer-15lsv7w`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1be12do`,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                              children: o(`strong`, { children: `Моя роль` }),
                                            }),
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                              children: o(`strong`, { children: `Моя роль` }),
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                      className: `framer-yw9zv8`,
                                      fonts: [
                                        `GF;Stack Sans Headline-600`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                            children: `Я выступала в роли единственного UX-дизайнера и вела проект end-to-end. В тесном сотрудничестве с product manager и ключевыми внутренними пользователями я анализировала существующие рабочие процессы, выявляла проблемные зоны и проектировала архитектуру единого приложения. В зону моей ответственности входили картирование рабочих процессов, разработка информационной архитектуры и модели данных, а также проектирование взаимодействий с фокусом на минимизацию времени обучения и операционных затрат.`,
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                            children: `Я выступала в роли единственного UX-дизайнера и вела проект end-to-end. В тесном сотрудничестве с product manager и ключевыми внутренними пользователями я анализировала существующие рабочие процессы, выявляла проблемные зоны и проектировала архитектуру единого приложения. В зону моей ответственности входили картирование рабочих процессов, разработка информационной архитектуры и модели данных, а также проектирование взаимодействий с фокусом на минимизацию времени обучения и операционных затрат.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                          children: `Я выступала в роли единственного UX-дизайнера и вела проект end-to-end. В тесном сотрудничестве с product manager и ключевыми внутренними пользователями я анализировала существующие рабочие процессы, выявляла проблемные зоны и проектировала архитектуру единого приложения. В зону моей ответственности входили картирование рабочих процессов, разработка информационной архитектуры и модели данных, а также проектирование взаимодействий с фокусом на минимизацию времени обучения и операционных затрат.`,
                                        }),
                                      }),
                                      className: `framer-5rsqt0`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1bzyymf`,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                              children: o(`strong`, { children: `Решение` }),
                                            }),
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                              children: o(`strong`, { children: `Решение` }),
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                            children: o(`strong`, { children: `Решение` }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-10j61jo`,
                                      fonts: [
                                        `GF;Stack Sans Headline-600`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                            children: `Мы разработали единое приложение, которое объединяет управление подписками, пользовательскими группами, графиками коммуникаций и лендинг-страницами в одной системе. Важной частью решения стало переосмысление процесса настройки как гибкой, нелинейной системы, в которую пользователи могут входить и вносить изменения на любом этапе. Централизация данных и автоматизация назначения коммуникаций на уровне продукта позволили устранить ручные операции и гарантировать, что нужные пользователи всегда получают соответствующие обновления.`,
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                            children: `Мы разработали единое приложение, которое объединяет управление подписками, пользовательскими группами, графиками коммуникаций и лендинг-страницами в одной системе. Важной частью решения стало переосмысление процесса настройки как гибкой, нелинейной системы, в которую пользователи могут входить и вносить изменения на любом этапе. Централизация данных и автоматизация назначения коммуникаций на уровне продукта позволили устранить ручные операции и гарантировать, что нужные пользователи всегда получают соответствующие обновления.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                          children: `Мы разработали единое приложение, которое объединяет управление подписками, пользовательскими группами, графиками коммуникаций и лендинг-страницами в одной системе. Важной частью решения стало переосмысление процесса настройки как гибкой, нелинейной системы, в которую пользователи могут входить и вносить изменения на любом этапе. Централизация данных и автоматизация назначения коммуникаций на уровне продукта позволили устранить ручные операции и гарантировать, что нужные пользователи всегда получают соответствующие обновления.`,
                                        }),
                                      }),
                                      className: `framer-1a0m20f`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-u5vc1s`,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                              children: o(`strong`, {
                                                children: `Ключевые UX-решения`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                              children: o(`strong`, {
                                                children: `Ключевые UX-решения`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                              children: `Ключевые UX-решения`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1f5ev46`,
                                      fonts: [
                                        `GF;Stack Sans Headline-600`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                                  children: `Внедрение drop-in навигации, позволяющей пользователям начинать настройку или вносить изменения на любом этапе рабочего процесса.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Проектирование групп пользователей и коммуникаций, которые могут быть связаны с несколькими продуктами.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Переход от линейных структур one-to-many к гибкой круговой модели данных many-to-many.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Интеграция встроенных коммуникаций с клиентами, включая планирование сообщений, для сокращения задержек и упрощения процессов поддержки.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Фокус на ясности и простоте интерфейса с целью минимизировать время обучения пользователей.`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
                                        children: o(r, {
                                          children: a(`ul`, {
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
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Внедрение drop-in навигации, позволяющей пользователям начинать настройку или вносить изменения на любом этапе рабочего процесса.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Проектирование групп пользователей и коммуникаций, которые могут быть связаны с несколькими продуктами.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Переход от линейных структур one-to-many к гибкой круговой модели данных many-to-many.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Интеграция встроенных коммуникаций с клиентами, включая планирование сообщений, для сокращения задержек и упрощения процессов поддержки.`,
                                                }),
                                              }),
                                              o(`li`, {
                                                "data-preset-tag": `p`,
                                                children: o(`p`, {
                                                  children: `Фокус на ясности и простоте интерфейса с целью минимизировать время обучения пользователей.`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                                children: `Внедрение drop-in навигации, позволяющей пользователям начинать настройку или вносить изменения на любом этапе рабочего процесса.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Проектирование групп пользователей и коммуникаций, которые могут быть связаны с несколькими продуктами.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Переход от линейных структур one-to-many к гибкой круговой модели данных many-to-many.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Интеграция встроенных коммуникаций с клиентами, включая планирование сообщений, для сокращения задержек и упрощения процессов поддержки.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Фокус на ясности и простоте интерфейса с целью минимизировать время обучения пользователей.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-100mvec`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-uagy1d`,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      Uga6BTVny: {
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
                                            children: a(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: [
                                                o(`strong`, { children: `Инструменты:` }),
                                                ` `,
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                            children: a(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: [
                                                o(`strong`, { children: `Инструменты:` }),
                                                ` `,
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                          children: a(`mark`, {
                                            style: { "--framer-text-background-radius": `0px` },
                                            children: [
                                              o(`strong`, { children: `Инструменты:` }),
                                              ` `,
                                            ],
                                          }),
                                        }),
                                      }),
                                      className: `framer-1gjf7ge`,
                                      fonts: [
                                        `GF;Stack Sans Headline-600`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      td4chYDLO: {
                                        children: a(r, {
                                          children: [
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
                                                o(`strong`, { children: `Figma` }),
                                                `: для создания макетов и прототипов.`,
                                              ],
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
                                                o(`strong`, { children: `FigJam` }),
                                                `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                              ],
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
                                                o(`strong`, { children: `Microsoft Loop` }),
                                                `: для ведения документации, координации команды и организации рабочего процесса.`,
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      Uga6BTVny: {
                                        children: a(r, {
                                          children: [
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
                                                o(`strong`, { children: `Figma` }),
                                                `: для создания макетов и прототипов.`,
                                              ],
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
                                                o(`strong`, { children: `FigJam` }),
                                                `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                              ],
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
                                                o(`strong`, { children: `Microsoft Loop` }),
                                                `: для ведения документации, координации команды и организации рабочего процесса.`,
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      v3GXcwJZS: {
                                        children: a(r, {
                                          children: [
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
                                                o(`strong`, { children: `Figma` }),
                                                `: для создания макетов и прототипов.`,
                                              ],
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
                                                o(`strong`, { children: `FigJam` }),
                                                `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                              ],
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
                                                o(`strong`, { children: `Microsoft Loop` }),
                                                `: для ведения документации, координации команды и организации рабочего процесса.`,
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    children: o(x, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
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
                                              o(`strong`, { children: `Figma` }),
                                              `: для создания макетов и прототипов.`,
                                            ],
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
                                              o(`strong`, { children: `FigJam` }),
                                              `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                            ],
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
                                              o(`strong`, { children: `Microsoft Loop` }),
                                              `: для ведения документации, координации команды и организации рабочего процесса.`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      className: `framer-ndar4v`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-qx80n7`,
                                "data-border": !0,
                                id: L,
                                ref: z,
                                children: [
                                  o(y, {
                                    breakpoint: A,
                                    overrides: {
                                      td4chYDLO: {
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
                                                children: `Системная архитектура`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      Uga6BTVny: {
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
                                                children: `Системная архитектура`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      v3GXcwJZS: {
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
                                                children: `Системная архитектура`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(x, {
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
                                              children: `Системная архитектура`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-y0zj2t`,
                                      fonts: [
                                        `GF;Stack Sans Headline-500`,
                                        `GF;Stack Sans Headline-700`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(`div`, {
                                    className: `framer-6d4s5d`,
                                    children: o(x, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
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
                                              `Ключевой особенностью нового инструмента стало внедрение модели `,
                                              o(`strong`, { children: `many-to-many` }),
                                              ` и групп как отдельных объектов. Возможность объединять получателей в группы позволила выстроить единый рабочий процесс по цепочке «инструменты → сообщения / группы сообщений → группы пользователей → инструменты» вместо прежних разрозненных связок. В старой системе эти потоки существовали отдельно друг от друга, группы создавались заново в каждом сценарии и использовались только в рамках конкретной настройки. На финальном этапе все элементы приходилось связывать вручную.`,
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
                                            children: `В новом решении был реализован циклический процесс настройки. Администраторы могут создавать группы пользователей и группы сообщений, связывать их между собой и использовать на протяжении всего жизненного цикла инструмента, а также обновлять состав групп без необходимости изменять другие настройки. Новая архитектура сократила количество ошибок и упростила планирование коммуникаций. Централизация данных в одном приложении позволила назначать коммуникации на уровне продукта и автоматически доставлять обновления нужным пользователям без ручного вмешательства.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-92jra2`,
                                      fonts: [`GF;Varela Round-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-1fyg7g`,
                                    children: [
                                      o(`div`, {
                                        className: `framer-rhyay2`,
                                        children: o(x, {
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
                                                  children: `Диаграммы оригинального и нового процессов`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-6wqg0z`,
                                          fonts: [
                                            `GF;Stack Sans Headline-600`,
                                            `GF;Stack Sans Headline-700`,
                                          ],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      o(`div`, {
                                        className: `framer-1b0fkiw`,
                                        children: o(y, {
                                          breakpoint: A,
                                          overrides: {
                                            td4chYDLO: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    1851.1 +
                                                    32 +
                                                    312.6 +
                                                    0 +
                                                    38.8 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1490,
                                                pixelWidth: 2093,
                                                positionX: `left`,
                                                positionY: `top`,
                                                src: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490`,
                                                srcSet: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=512&width=2093&height=1490 512w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=1024&width=2093&height=1490 1024w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=2048&width=2093&height=1490 2048w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490 2093w`,
                                              },
                                            },
                                            Uga6BTVny: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    800 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    69.2 +
                                                    0 +
                                                    1554.6 +
                                                    32 +
                                                    321.6 +
                                                    0 +
                                                    54.8 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1490,
                                                pixelWidth: 2093,
                                                positionX: `left`,
                                                positionY: `top`,
                                                sizes: `calc(${g?.width || `100vw`} - 80px)`,
                                                src: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490`,
                                                srcSet: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=512&width=2093&height=1490 512w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=1024&width=2093&height=1490 1024w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=2048&width=2093&height=1490 2048w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490 2093w`,
                                              },
                                            },
                                            v3GXcwJZS: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    800 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    69.2 +
                                                    0 +
                                                    1287.8 +
                                                    16 +
                                                    318.8 +
                                                    0 +
                                                    54.8 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1490,
                                                pixelWidth: 2093,
                                                positionX: `left`,
                                                positionY: `top`,
                                                sizes: `calc(${g?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490`,
                                                srcSet: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=512&width=2093&height=1490 512w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=1024&width=2093&height=1490 1024w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=2048&width=2093&height=1490 2048w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490 2093w`,
                                              },
                                            },
                                          },
                                          children: o(ce, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 799,
                                              intrinsicWidth: 959,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  158 +
                                                  0 +
                                                  1942 +
                                                  32 +
                                                  337 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 1490,
                                              pixelWidth: 2093,
                                              positionX: `left`,
                                              positionY: `top`,
                                              src: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490`,
                                              srcSet: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=512&width=2093&height=1490 512w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=1024&width=2093&height=1490 1024w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=2048&width=2093&height=1490 2048w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490 2093w`,
                                            },
                                            className: `framer-jssojb`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1wxdva9`,
                                "data-border": !0,
                                id: B,
                                ref: V,
                                children: [
                                  o(x, {
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
                                          children: o(`strong`, { children: `Прототип DFD` }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1vbwayv`,
                                    fonts: [
                                      `GF;Stack Sans Headline-500`,
                                      `GF;Stack Sans Headline-700`,
                                    ],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(x, {
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
                                        children: `Прототип DFD предполагает добавление нового инструмента как отдельной функции к существующему админ-порталу. Через навигацию пользователь может выбрать объект, с которого хочет зайти в инструмент. Далее пользователь может создавать сообщения, формировать группы и разрабатывать лендинги в удобной последовательности, работая в едином рабочем пространстве. Процесс спроектирован как гибкий, цикличный поток, позволяющий в любой момент начинать, корректировать или возвращаться к любому этапу. Каждый элемент функционирует автономно и может быть привязан к продукту или отсоединён от него по мере необходимости. Такой подход существенно упрощает и ускоряет настройку кампаний.`,
                                      }),
                                    }),
                                    className: `framer-17jby3`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(`div`, {
                                    className: `framer-pmht7w`,
                                    children: o(E, {
                                      children: o(T, {
                                        className: `framer-12l4q3a-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `mimnThbAe`,
                                        scopeId: `QijvxGXqd`,
                                        children: o(R, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !0,
                                          height: `100%`,
                                          id: `mimnThbAe`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `mimnThbAe`,
                                          loop: !0,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/C56ilr3bBb7KUy0zxrhQZ7CYMk.mp4`,
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
        `.framer-nExCA.framer-1aifb29, .framer-nExCA .framer-1aifb29 { display: block; }`,
        `.framer-nExCA.framer-1j57uli { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-nExCA .framer-1jma3s0-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-nExCA .framer-rb5zmw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-nExCA .framer-1ut2vr7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-18afh7w { align-content: flex-start; align-items: flex-start; background-color: #fdfbf9; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 8px 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-nExCA .framer-5k3hph { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-luiwxh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-nExCA .framer-g1uch2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-nExCA .framer-177h93z { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-nExCA .framer-10jowdf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-nExCA .framer-1llk6x3 { height: 13px; position: relative; width: 14px; }`,
        `.framer-nExCA .framer-p945pt { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-nExCA .framer-j4b0e0 { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-nExCA .framer-2ys318 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-nExCA .framer-4drfdz, .framer-nExCA .framer-kte1bw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-nExCA .framer-1vyd6ii { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-n6r9hr, .framer-nExCA .framer-6d4s5d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-f43b1b, .framer-nExCA .framer-pbgo6c, .framer-nExCA .framer-1e32ip4, .framer-nExCA .framer-15lsv7w, .framer-nExCA .framer-yw9zv8, .framer-nExCA .framer-5rsqt0, .framer-nExCA .framer-10j61jo, .framer-nExCA .framer-1a0m20f, .framer-nExCA .framer-1f5ev46, .framer-nExCA .framer-100mvec, .framer-nExCA .framer-1gjf7ge, .framer-nExCA .framer-ndar4v, .framer-nExCA .framer-y0zj2t, .framer-nExCA .framer-92jra2, .framer-nExCA .framer-17jby3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-nExCA .framer-1ypusxq, .framer-nExCA .framer-1be12do, .framer-nExCA .framer-u5vc1s, .framer-nExCA .framer-uagy1d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-1bzyymf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-qx80n7 { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-nExCA .framer-1fyg7g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-rhyay2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 0px 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-6wqg0z, .framer-nExCA .framer-1vbwayv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-nExCA .framer-1b0fkiw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-nExCA .framer-jssojb { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-1wxdva9 { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 0px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-nExCA .framer-pmht7w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nExCA .framer-12l4q3a-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...j,
        ...F,
        `.framer-nExCA[data-border="true"]::after, .framer-nExCA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-nExCA.framer-1j57uli { flex-direction: column; width: 810px; } .framer-nExCA .framer-1jma3s0-container { height: auto; width: 100%; z-index: 2; } .framer-nExCA .framer-rb5zmw { flex: none; overflow: hidden; padding: 32px 0px 64px 32px; width: 100%; } .framer-nExCA .framer-1ut2vr7 { gap: 16px; order: 0; } .framer-nExCA .framer-18afh7w { box-shadow: unset; padding: 0px; position: relative; top: unset; z-index: 0; } .framer-nExCA .framer-5k3hph, .framer-nExCA .framer-1vyd6ii { padding: 0px 32px 0px 0px; } .framer-nExCA .framer-177h93z { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-nExCA .framer-1fyg7g { overflow: var(--overflow-clip-fallback, clip); } .framer-nExCA .framer-pmht7w { flex-direction: column; } .framer-nExCA .framer-12l4q3a-container { flex: none; width: 100%; }}`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-nExCA.framer-1j57uli { width: 1240px; } .framer-nExCA .framer-qx80n7 { gap: 16px; } .framer-nExCA .framer-6d4s5d, .framer-nExCA .framer-1fyg7g { gap: 8px; }}`,
        `@media (max-width: 809.98px) { .framer-nExCA.framer-1j57uli { flex-direction: column; width: 390px; } .framer-nExCA .framer-1jma3s0-container { height: auto; width: 100%; z-index: 2; } .framer-nExCA .framer-rb5zmw { flex: none; overflow: hidden; padding: 32px 24px 32px 24px; width: 100%; } .framer-nExCA .framer-1ut2vr7 { gap: 16px; order: 0; } .framer-nExCA .framer-18afh7w { align-content: center; align-items: center; box-shadow: unset; padding: 0px; position: relative; top: unset; } .framer-nExCA .framer-5k3hph { order: 1; } .framer-nExCA .framer-177h93z { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-nExCA .framer-1vyd6ii { gap: 24px; padding: 0px; } .framer-nExCA .framer-qx80n7 { padding: 16px 0px 24px 8px; } .framer-nExCA .framer-6d4s5d { gap: 8px; } .framer-nExCA .framer-rhyay2 { padding: 0px; } .framer-nExCA .framer-1wxdva9 { padding: 16px 0px 0px 8px; } .framer-nExCA .framer-pmht7w { flex-direction: column; } .framer-nExCA .framer-12l4q3a-container { flex: none; width: 100%; }}`,
      ],
      `framer-nExCA`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 3729, width: 1440 }),
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
          ],
        },
        ...B,
        ...V,
        ...C(N),
        ...C(I),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => g([() => k(M, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerQijvxGXqd`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `3729`,
            framerIntrinsicWidth: `1440`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Uga6BTVny":{"layout":["fixed","auto"]},"td4chYDLO":{"layout":["fixed","auto"]},"v3GXcwJZS":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"b6BP89ahK":{"pattern":":b6BP89ahK","name":"research"},"UmUuJMeaU":{"pattern":":UmUuJMeaU","name":"prototype"}}`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=_wQTsha8l8gey7ML3g1rCpjantzUl55zVVG3O6QpqJQ.BhUpdM17.mjs.map
