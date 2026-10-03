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
  X as _,
  a as v,
  ct as y,
  f as b,
  g as x,
  h as S,
  it as C,
  j as w,
  l as T,
  n as E,
  nt as ae,
  rt as D,
  s as O,
  t as k,
  tt as A,
  v as j,
  w as M,
} from "./framer.I4hUVXCD.mjs";
import { a as oe, c as N, i as se, o as P, r as F, s as I } from "./shared-lib.s-tZHqY3.mjs";
import { n as L, t as R } from "./Video.BAtjOJoI.mjs";
import ce, { t as z } from "./TLkkq5e5YDgLK6PlNJgG62J8xSUAjk1ybODYvfkftIE.iJxMr2zo.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    re(),
    f(),
    n(),
    L(),
    se(),
    N(),
    z(),
    (B = p(F)),
    (V = p(R)),
    (H = {
      NSea9AHFk: `(min-width: 810px) and (max-width: 1239.98px)`,
      QPpL2DTwT: `(min-width: 1240px) and (max-width: 1439.98px)`,
      x9gEsqjVR: `(min-width: 1440px)`,
      Z4GU1z0GR: `(max-width: 809.98px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-Tglpg`),
    (K = {
      NSea9AHFk: `framer-v-1vaazca`,
      QPpL2DTwT: `framer-v-1itcmyr`,
      x9gEsqjVR: `framer-v-1dhwzcq`,
      Z4GU1z0GR: `framer-v-w24uk8`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `x9gEsqjVR`, Laptop: `QPpL2DTwT`, Phone: `Z4GU1z0GR`, Tablet: `NSea9AHFk` }),
    (X = ({ value: e }) =>
      A()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `x9gEsqjVR`,
    })),
    (Q = y(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          f = ee(),
          { activeLocale: p, setLocale: re } = ae(),
          g = _(),
          { style: y, className: w, layoutId: A, variant: j, ...M } = Z(e);
        D(t(() => ce({}, p), [p]));
        let [N, se] = ne(j, H, !1),
          P = h(G, oe),
          I = i(v)?.isLayoutTemplate,
          L = !!i(d)?.transition?.layout,
          z = q(I, L),
          B = () => !U() || ![`NSea9AHFk`, `Z4GU1z0GR`].includes(N),
          V = C(`dqEfO62Pw`),
          W = l(null),
          Q = C(`iF0dDDRNs`),
          $ = l(null),
          le = C(`v0DfLnpOZ`),
          ue = l(null),
          de = () => !!(!U() || [`NSea9AHFk`, `Z4GU1z0GR`].includes(N));
        return (
          ie({}),
          o(v.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: Y,
              primaryVariantId: `x9gEsqjVR`,
              variantClassNames: K,
            },
            children: a(te, {
              id: A ?? f,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...M,
                  className: h(P, `framer-1dhwzcq`, w),
                  ref: c,
                  style: { ...y },
                  children: [
                    o(b, {
                      breakpoint: N,
                      overrides: {
                        NSea9AHFk: {
                          height: 800,
                          width: g?.width || `100vw`,
                          y: (g?.y || 0) + 0 + 0,
                        },
                        Z4GU1z0GR: {
                          height: 800,
                          width: g?.width || `100vw`,
                          y: (g?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(k, {
                        height: 1e3,
                        y: (g?.y || 0) + 0,
                        children: o(E, {
                          className: `framer-1lc5qsv-container`,
                          layout: z,
                          nodeId: `VJnRNmO6e`,
                          scopeId: `ZZVh6lBF_`,
                          children: o(b, {
                            breakpoint: N,
                            overrides: {
                              NSea9AHFk: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                              Z4GU1z0GR: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                            },
                            children: o(F, {
                              height: `100%`,
                              id: `VJnRNmO6e`,
                              layoutId: `VJnRNmO6e`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1avpm2i`,
                      layout: z,
                      children: [
                        B() &&
                          o(`div`, {
                            className: `framer-z0gx07 hidden-1vaazca hidden-w24uk8`,
                            children: a(`div`, {
                              className: `framer-1j9ofws`,
                              children: [
                                a(`div`, {
                                  className: `framer-1756928`,
                                  children: [
                                    o(S, {
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
                                          children: `PDF to Digital Form Mapping tool`,
                                        }),
                                      }),
                                      className: `framer-1eiqtdq`,
                                      fonts: [`GF;Stack Sans Headline-700`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-eqf1fe`,
                                      children: [
                                        o(S, {
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
                                              children: o(T, {
                                                href: {
                                                  hash: `:iF0dDDRNs`,
                                                  webPageId: `jFBc0bflX`,
                                                },
                                                motionChild: !0,
                                                nodeId: `dqEfO62Pw`,
                                                openInNewTab: !1,
                                                preserveParams: !1,
                                                relValues: [],
                                                scopeId: `ZZVh6lBF_`,
                                                smoothScroll: !0,
                                                children: o(u.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: o(`strong`, {
                                                    children: `Предварительное исследование`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-922p59`,
                                          fonts: [
                                            `GF;Stack Sans Text-regular`,
                                            `GF;Stack Sans Text-700`,
                                          ],
                                          id: V,
                                          ref: W,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(S, {
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
                                              children: o(T, {
                                                href: {
                                                  hash: `:v0DfLnpOZ`,
                                                  webPageId: `jFBc0bflX`,
                                                },
                                                motionChild: !0,
                                                nodeId: `hZQMm46cN`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `ZZVh6lBF_`,
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
                                          className: `framer-1m6s24d`,
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
                                  className: `framer-17whymn`,
                                  children: o(T, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `ZGBcdwxWL`,
                                    openInNewTab: !1,
                                    scopeId: `ZZVh6lBF_`,
                                    children: o(u.a, {
                                      className: `framer-1c1j6kq framer-9uhszv`,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-8ntqaa`,
                                        children: a(x, {
                                          className: `framer-kp9muv`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(x, {
                                              className: `framer-11t1rft`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(x, {
                                              className: `framer-1swhgl9`,
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
                          className: `framer-1gg52u2`,
                          children: [
                            a(`div`, {
                              className: `framer-lsaif3`,
                              children: [
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
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
                                    QPpL2DTwT: {
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
                                    Z4GU1z0GR: {
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
                                  children: o(S, {
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
                                    className: `framer-avi2xx`,
                                    fonts: [
                                      `GF;Stack Sans Headline-500`,
                                      `GF;Stack Sans Headline-700`,
                                    ],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(S, {
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
                                        children: `Form Mapping Tool — это внутренний проект с небольшой командой и быстрыми сроками реализации, направленный на модернизацию устаревшего процесса, используемого в экосистеме Optum Clearinghouse для создания цифровых версий медицинских PDF-форм.`,
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
                                        children: `Целью было ускорить преобразование статических PDF-документов в структурированные цифровые формы, чтобы сократить повторяющийся ввод данных в процессах регистрации у плательщиков и обработки страховых заявок.`,
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
                                        children: `Для этого мы разработали плагин-компонент, который можно интегрировать в любое внутреннее приложение, обеспечивая единообразное и эффективное преобразование PDF-форм в цифровой формат.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1y4gshm`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                      },
                                    },
                                    Z4GU1z0GR: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                      },
                                    },
                                  },
                                  children: o(O, {
                                    background: { alt: ``, fit: `fill` },
                                    className: `framer-jxmh2n`,
                                    children: o(k, {
                                      children: o(E, {
                                        className: `framer-azopbu-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `r22YuWSNC`,
                                        scopeId: `ZZVh6lBF_`,
                                        children: o(R, {
                                          backgroundColor: `rgb(253, 251, 249)`,
                                          borderRadius: 12,
                                          bottomLeftRadius: 12,
                                          bottomRightRadius: 12,
                                          controls: !0,
                                          height: `100%`,
                                          id: `r22YuWSNC`,
                                          isMixedBorderRadius: !0,
                                          layoutId: `r22YuWSNC`,
                                          loop: !1,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !1,
                                          poster: `https://framerusercontent.com/images/zWkC0ZgOQD5TR08gFF4akURK9hM.png?width=2051&height=1252`,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/r0kTwKfTFyjdk8BcovnBWPmbKY.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { width: `100%` },
                                          topLeftRadius: 12,
                                          topRightRadius: 12,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1kaet6k`,
                              children: [
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
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
                                    QPpL2DTwT: {
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
                                    Z4GU1z0GR: {
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
                                  },
                                  children: o(S, {
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
                                    className: `framer-1odcnrd`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(S, {
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
                                        children: `Основная задача заключается в разработке инструмента, выходящего за рамки базовой оцифровки PDF. Традиционные решения для преобразования PDF в формы обрабатывают каждый документ отдельно, вынуждая пользователей многократно вводить одни и те же данные в различных форматах.`,
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
                                        children: `Нашей целью является создание связи между PDF-документами и их цифровыми аналогами, чтобы данные, введённые один раз в цифровую форму, могли автоматически подставляться в несколько PDF-документов в рамках одного процесса. Система также должна поддерживать разнообразные форматы форм от разных плательщиков, сохраняя при этом высокий уровень точности, необходимый для медицинской документации.`,
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
                                        children: `Критически важно сбалансировать автоматизацию, гибкость и пользовательский контроль, чтобы инструмент мог масштабироваться на тысячи шаблонов форм от разных плательщиков и при этом оставаться надёжным для операционных команд.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1xij0ij`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-ofglc4`,
                              children: [
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
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
                                    QPpL2DTwT: {
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
                                    Z4GU1z0GR: {
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
                                  },
                                  children: o(S, {
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
                                    className: `framer-1nyq5f7`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(S, {
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
                                        children: `Я выступала в роли ведущего продуктового/UX-дизайнера на проекте, тесно сотрудничая с продакт-менеджером для определения стратегии и структуры пользовательского опыта.`,
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
                                        children: `Мои ключевые обязанности включали:`,
                                      }),
                                      a(`ul`, {
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
                                              children: `Руководство UX-стратегией и проектированием взаимодействия для работы с формами`,
                                            }),
                                          }),
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Участие в анализе рынка и исследовании подходов с поддержкой ИИ`,
                                            }),
                                          }),
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Проектирование рабочих процессов конфигурации для администраторов, отвечающих за настройку форм плательщиков`,
                                            }),
                                          }),
                                          o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: o(`p`, {
                                              children: `Итеративная работа с командой продукта и инженерами для нахождения баланса между автоматизацией и контролем со стороны пользователя`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  className: `framer-z6wmd9`,
                                  fonts: [`GF;Varela Round-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1f9g35y`,
                              children: [
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
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
                                    QPpL2DTwT: {
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
                                    Z4GU1z0GR: {
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
                                  },
                                  children: o(S, {
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
                                    className: `framer-d8n0o7`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    QPpL2DTwT: {
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
                                              o(`strong`, { children: `Поддержка ИИ` }),
                                              o(`br`, {}),
                                              `Система анализирует загруженные PDF и формирует первоначальный список обнаруженных полей с предложенными соответствиями, что значительно сокращает время ручной настройки.`,
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
                                              o(`strong`, {
                                                children: `Валидация с участием человека`,
                                              }),
                                              o(`br`, {}),
                                              `Администраторы могут просматривать, редактировать и уточнять соответствия, созданные ИИ, чтобы обеспечить точность и соответствие требованиям медицинской документации.`,
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
                                              o(`strong`, {
                                                children: `Двусторонняя связь PDF и цифровой формы`,
                                              }),
                                              o(`br`, {}),
                                              `Цифровой слой формы напрямую связан с исходным PDF, позволяя пользователям вводить данные один раз и автоматически заполнять несколько форм плательщиков.`,
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
                                              o(`strong`, {
                                                children: `Интеллектуальное предварительное заполнение в рабочих процессах`,
                                              }),
                                              o(`br`, {}),
                                              `Данные, введённые один раз, могут использоваться повторно в нескольких формах, сокращая повторный ввод при регистрации плательщиков и подаче заявлений на возмещение.`,
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  children: o(S, {
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
                                            o(`strong`, { children: `Поддержка ИИ` }),
                                            o(`br`, {}),
                                            `Система анализирует загруженные PDF и формирует первоначальный список обнаруженных полей с предложенными соответствиями, что значительно сокращает время ручной настройки.`,
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
                                            o(`strong`, {
                                              children: `Валидация с участием человека`,
                                            }),
                                            o(`br`, {}),
                                            `Администраторы могут просматривать, редактировать и уточнять соответствия, созданные ИИ, чтобы обеспечить точность и соответствие требованиям медицинской документации.`,
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
                                            o(`strong`, {
                                              children: `Двусторонняя связь PDF и цифровой формы`,
                                            }),
                                            o(`br`, {}),
                                            `Цифровой слой формы напрямую связан с исходным PDF, позволяя пользователям вводить данные один раз и автоматически заполнять несколько форм плательщиков.`,
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
                                            o(`strong`, {
                                              children: `Интеллектуальное предварительное заполнение в рабочих процессах`,
                                            }),
                                            o(`br`, {}),
                                            `Данные, введённые один раз, могут использоваться повторно в нескольких формах, сокращая повторный ввод при регистрации плательщиков и подаче заявлений на возмещение.`,
                                          ],
                                        }),
                                      ],
                                    }),
                                    className: `framer-stk5j3`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-uzizku`,
                              children: [
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
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
                                    QPpL2DTwT: {
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
                                    Z4GU1z0GR: {
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
                                  },
                                  children: o(S, {
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
                                    className: `framer-15xlzz0`,
                                    fonts: [`GF;Stack Sans Headline-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(b, {
                                  breakpoint: N,
                                  overrides: {
                                    NSea9AHFk: {
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
                                    QPpL2DTwT: {
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
                                  children: o(S, {
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
                                    className: `framer-1fpz3i1`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-79lb5f`,
                          children: a(`div`, {
                            className: `framer-1ubow7q`,
                            "data-border": !0,
                            id: Q,
                            ref: $,
                            children: [
                              o(b, {
                                breakpoint: N,
                                overrides: {
                                  NSea9AHFk: {
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
                                            children: `Предварительное исследование, рабочие процессы и низкоуровневые вайрфреймы`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                  QPpL2DTwT: {
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
                                            children: `Предварительное исследование, рабочие процессы и низкоуровневые вайрфреймы`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                  Z4GU1z0GR: {
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
                                            children: `Предварительное исследование, рабочие процессы и низкоуровневые вайрфреймы`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: o(S, {
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
                                          children: `Предварительное исследование, рабочие процессы и низкоуровневые вайрфреймы`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-pyavly`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-1qstig4`,
                                children: [
                                  o(S, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.4)`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `1.4em`,
                                        },
                                        children: o(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: o(`strong`, {
                                            children: `Предварительное исследование`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-lxc1ue`,
                                    fonts: [
                                      `GF;Stack Sans Headline-regular`,
                                      `GF;Stack Sans Headline-700`,
                                    ],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(S, {
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
                                          children: `В рамках разведочного исследования мы исходили из чёткой предпосылки: существующие инструменты для преобразования PDF в цифровые формы неэффективны, избыточно сложны и не подходят для повторного использования на уровне всей организации. Наша цель заключалась в том, чтобы определить требования к упрощённому решению в виде плагина, которое можно было бы масштабировать и использовать в разных командах, занимающихся оцифровкой форм.`,
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
                                          children: `Чтобы обеспечить масштабируемость решения в экосистеме Optum Clearinghouse, мы провели интервью со стейкхолдерами из различных бизнес-подразделений. Это помогло понять, как используются текущие инструменты, какие функции критически важны для повседневной работы, в чём заключаются ограничения существующих решений и какие задачи команды стремятся решить с помощью оцифровки.`,
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
                                          children: `Параллельно мы провели детальный анализ текущих рабочих процессов, включая пошаговое картирование процесса создания форм на основе записанных демонстраций работы с инструментами. Это позволило выявить ключевые точки трения — в частности, ситуации, где пользователи были вынуждены повторно вводить одни и те же данные в разные формы плательщиков, а также места, где из-за фрагментированных процессов возникали несоответствия.`,
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
                                          children: `Мы также проанализировали существующие инструменты и решения конкурентов, чтобы определить стандартные возможности и выявить пробелы — в частности, в поддержке повторного использования данных, вариативности шаблонов и валидации итоговых документов.`,
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
                                          children: `Ключевые выводы:`,
                                        }),
                                        a(`ul`, {
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
                                                children: `Основная неэффективность заключалась не в самой оцифровке форм, а во фрагментации данных. Пользователи были вынуждены повторно вводить одну и ту же информацию в разные формы, поскольку каждый документ рассматривался как независимая сущность. Это подтвердило необходимость создания единого слоя данных, позволяющего вводить информацию один раз и использовать её в нескольких формах.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Существовал критический разрыв между вводом данных и проверкой итогового результата. Пользователи вводили информацию в структурированных цифровых формах, но проверка корректности происходила уже в PDF-документах с отличающимися форматами, что усложняло обнаружение ошибок. Это выявило потребность в синхронизированном, параллельном отображении цифровых данных и итоговых документов.`,
                                              }),
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
                                          children: `На основе этих инсайтов мы определили ключевой функционал для MVP, а также дополнительные возможности для следующей фазы (MVP+). На базе проведённого исследования были созданы вайрфреймы, описывающие пользовательские сценарии и структуру интерфейса. В дальнейшем они были валидированы с реальными пользователями, чтобы убедиться в их соответствии рабочим процессам, и легли в основу последующих макетов и интерактивных прототипов.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-j7vfsl`,
                                    fonts: [`GF;Varela Round-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-co9wwq`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1djoviv`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS1yZWd1bGFy`,
                                              "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.4)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.4em`,
                                            },
                                            children: o(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: o(`strong`, {
                                                children: `Создание нового вопроса — версия A`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1i0meju`,
                                        fonts: [
                                          `GF;Stack Sans Headline-regular`,
                                          `GF;Stack Sans Headline-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(b, {
                                        breakpoint: N,
                                        overrides: {
                                          NSea9AHFk: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  893.2 +
                                                  0 +
                                                  2484.2 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1232.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  170
                                              ),
                                              pixelHeight: 5335,
                                              pixelWidth: 7521,
                                              sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                          QPpL2DTwT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2526 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1215.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  170
                                              ),
                                              pixelHeight: 5335,
                                              pixelWidth: 7521,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                          Z4GU1z0GR: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  877.2 +
                                                  16 +
                                                  2508.9 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  1221.8 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  170
                                              ),
                                              pixelHeight: 5335,
                                              pixelWidth: 7521,
                                              sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                        },
                                        children: o(O, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 5335,
                                            intrinsicWidth: 7521,
                                            loading: m(
                                              (g?.y || 0) +
                                                0 +
                                                0 +
                                                2760.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1248 +
                                                0 +
                                                0 +
                                                0 +
                                                170
                                            ),
                                            pixelHeight: 5335,
                                            pixelWidth: 7521,
                                            src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                            srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                          },
                                          className: `framer-i9ikui`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS1yZWd1bGFy`,
                                              "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.4)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.4em`,
                                            },
                                            children: o(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: o(`strong`, {
                                                children: `Создание нового вопроса — версия B`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-8acim8`,
                                        fonts: [
                                          `GF;Stack Sans Headline-regular`,
                                          `GF;Stack Sans Headline-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(b, {
                                        breakpoint: N,
                                        overrides: {
                                          NSea9AHFk: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  893.2 +
                                                  0 +
                                                  2484.2 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1232.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  653
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                          QPpL2DTwT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2526 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1215.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  653
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                          Z4GU1z0GR: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: m(
                                                (g?.y || 0) +
                                                  0 +
                                                  877.2 +
                                                  16 +
                                                  2508.9 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  1221.8 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  653
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                        },
                                        children: o(O, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4035,
                                            intrinsicWidth: 7238,
                                            loading: m(
                                              (g?.y || 0) +
                                                0 +
                                                0 +
                                                2760.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1248 +
                                                0 +
                                                0 +
                                                0 +
                                                653
                                            ),
                                            pixelHeight: 4035,
                                            pixelWidth: 7238,
                                            src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                            srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                          },
                                          className: `framer-dnpwd3`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-1140skr`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS1yZWd1bGFy`,
                                              "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                              "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.4)`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.4em`,
                                            },
                                            children: o(`mark`, {
                                              style: { "--framer-text-background-radius": `0px` },
                                              children: o(`strong`, {
                                                children: `Lo-fi wireframes`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1kst4jh`,
                                        fonts: [
                                          `GF;Stack Sans Headline-regular`,
                                          `GF;Stack Sans Headline-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(`div`, {
                                        className: `framer-1dsplug`,
                                        children: [
                                          o(S, {
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
                                                  children: `Главная страница — список форм, к которым у пользователя есть доступ`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-1j1fblr`,
                                            fonts: [`GF;Varela Round-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            breakpoint: N,
                                            overrides: {
                                              NSea9AHFk: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3262,
                                                  intrinsicWidth: 7066,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2484.2 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1232.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      178 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 3262,
                                                  pixelWidth: 7066,
                                                  sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                                  srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                                },
                                              },
                                              QPpL2DTwT: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3262,
                                                  intrinsicWidth: 7066,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2526 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1215.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      178 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 3262,
                                                  pixelWidth: 7066,
                                                  src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                                  srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                                },
                                              },
                                              Z4GU1z0GR: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3262,
                                                  intrinsicWidth: 7066,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2508.9 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1221.8 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      178 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 3262,
                                                  pixelWidth: 7066,
                                                  sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                                  srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                                },
                                              },
                                            },
                                            children: o(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3262,
                                                intrinsicWidth: 7066,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2760.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1248 +
                                                    0 +
                                                    978 +
                                                    0 +
                                                    178 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 3262,
                                                pixelWidth: 7066,
                                                src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                                srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                              },
                                              className: `framer-th79gf`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-1dwccn7`,
                                        children: [
                                          o(S, {
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
                                                  children: `Создание новой формы`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-d08rx7`,
                                            fonts: [`GF;Varela Round-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            breakpoint: N,
                                            overrides: {
                                              NSea9AHFk: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1762,
                                                  intrinsicWidth: 3894,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2484.2 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1232.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      889.5 +
                                                      0 +
                                                      129.5
                                                  ),
                                                  pixelHeight: 1762,
                                                  pixelWidth: 3894,
                                                  sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                  srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                                },
                                              },
                                              QPpL2DTwT: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1762,
                                                  intrinsicWidth: 3894,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2526 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1215.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      889.5 +
                                                      0 +
                                                      129.5
                                                  ),
                                                  pixelHeight: 1762,
                                                  pixelWidth: 3894,
                                                  src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                  srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                                },
                                              },
                                              Z4GU1z0GR: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1762,
                                                  intrinsicWidth: 3894,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2508.9 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1221.8 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      889.5 +
                                                      0 +
                                                      129.5
                                                  ),
                                                  pixelHeight: 1762,
                                                  pixelWidth: 3894,
                                                  sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                  srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                                },
                                              },
                                            },
                                            children: o(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1762,
                                                intrinsicWidth: 3894,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2760.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1248 +
                                                    0 +
                                                    978 +
                                                    0 +
                                                    889.5 +
                                                    0 +
                                                    129.5
                                                ),
                                                pixelHeight: 1762,
                                                pixelWidth: 3894,
                                                src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                              },
                                              className: `framer-1rrcr02`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-hmqa6i`,
                                        children: [
                                          o(S, {
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
                                                  children: `Редактирование существующей формы`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-187cocf`,
                                            fonts: [`GF;Varela Round-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            breakpoint: N,
                                            overrides: {
                                              NSea9AHFk: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4444,
                                                  intrinsicWidth: 5461,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2484.2 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1232.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      1599 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 4444,
                                                  pixelWidth: 5461,
                                                  sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                  srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                                },
                                              },
                                              QPpL2DTwT: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4444,
                                                  intrinsicWidth: 5461,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2526 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1215.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      1599 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 4444,
                                                  pixelWidth: 5461,
                                                  src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                  srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                                },
                                              },
                                              Z4GU1z0GR: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4444,
                                                  intrinsicWidth: 5461,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2508.9 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1221.8 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      1599 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 4444,
                                                  pixelWidth: 5461,
                                                  sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                  srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                                },
                                              },
                                            },
                                            children: o(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 4444,
                                                intrinsicWidth: 5461,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2760.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1248 +
                                                    0 +
                                                    978 +
                                                    0 +
                                                    1599 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 4444,
                                                pixelWidth: 5461,
                                                src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                              },
                                              className: `framer-1y2aax`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-7a2lc9`,
                                        children: [
                                          o(S, {
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
                                                  children: `Сопоставление полей, которые не были определены ИИ или требуют корректировки`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-1px5hao`,
                                            fonts: [`GF;Varela Round-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            breakpoint: N,
                                            overrides: {
                                              NSea9AHFk: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 6309,
                                                  intrinsicWidth: 9365,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2484.2 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1232.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      2310.5 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 6309,
                                                  pixelWidth: 9365,
                                                  sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                  srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                                },
                                              },
                                              QPpL2DTwT: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 6309,
                                                  intrinsicWidth: 9365,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2526 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1215.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      2310.5 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 6309,
                                                  pixelWidth: 9365,
                                                  src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                  srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                                },
                                              },
                                              Z4GU1z0GR: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 6309,
                                                  intrinsicWidth: 9365,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2508.9 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1221.8 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      2310.5 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 6309,
                                                  pixelWidth: 9365,
                                                  sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                  srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                                },
                                              },
                                            },
                                            children: o(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 6309,
                                                intrinsicWidth: 9365,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2760.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1248 +
                                                    0 +
                                                    978 +
                                                    0 +
                                                    2310.5 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 6309,
                                                pixelWidth: 9365,
                                                src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                              },
                                              className: `framer-1lcna4c`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-1q7zbt`,
                                        children: [
                                          o(S, {
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
                                                  children: `Добавление вопросов в форму`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-zdl5uj`,
                                            fonts: [`GF;Varela Round-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            breakpoint: N,
                                            overrides: {
                                              NSea9AHFk: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 7825,
                                                  intrinsicWidth: 14499,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2484.2 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1232.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      3022 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 7825,
                                                  pixelWidth: 14499,
                                                  sizes: `calc(${g?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                  srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                                },
                                              },
                                              QPpL2DTwT: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 7825,
                                                  intrinsicWidth: 14499,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2526 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1215.6 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      3022 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 7825,
                                                  pixelWidth: 14499,
                                                  src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                  srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                                },
                                              },
                                              Z4GU1z0GR: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 7825,
                                                  intrinsicWidth: 14499,
                                                  loading: m(
                                                    (g?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2508.9 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1221.8 +
                                                      0 +
                                                      962 +
                                                      0 +
                                                      3022 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 7825,
                                                  pixelWidth: 14499,
                                                  sizes: `calc(${g?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                  srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                                },
                                              },
                                            },
                                            children: o(O, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 7825,
                                                intrinsicWidth: 14499,
                                                loading: m(
                                                  (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2760.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1248 +
                                                    0 +
                                                    978 +
                                                    0 +
                                                    3022 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 7825,
                                                pixelWidth: 14499,
                                                src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                              },
                                              className: `framer-7f8o0b`,
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
                            ],
                          }),
                        }),
                        o(`div`, {
                          className: `framer-1f382i1`,
                          children: o(`div`, {
                            className: `framer-1mw078b`,
                            children: a(`div`, {
                              className: `framer-nmrh27`,
                              "data-border": !0,
                              id: le,
                              ref: ue,
                              children: [
                                o(S, {
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
                                        children: o(`strong`, { children: `Hi-fidelity прототип` }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-5bi2gk`,
                                  fonts: [
                                    `GF;Stack Sans Headline-500`,
                                    `GF;Stack Sans Headline-700`,
                                  ],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(`div`, {
                                  className: `framer-11v49tt`,
                                  children: o(`div`, {
                                    className: `framer-10j63kh`,
                                    children: o(k, {
                                      children: o(E, {
                                        className: `framer-9b1x4w-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `WH1knakdy`,
                                        scopeId: `ZZVh6lBF_`,
                                        children: o(R, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 8,
                                          bottomLeftRadius: 8,
                                          bottomRightRadius: 8,
                                          controls: !0,
                                          height: `100%`,
                                          id: `WH1knakdy`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `WH1knakdy`,
                                          loop: !1,
                                          muted: !0,
                                          objectFit: `scale-down`,
                                          playing: !1,
                                          posterEnabled: !1,
                                          srcFile: `https://framerusercontent.com/assets/zan6zovDacrXwXtQIBrlo9ujcI4.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { width: `100%` },
                                          topLeftRadius: 8,
                                          topRightRadius: 8,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    de() &&
                      a(u.div, {
                        className: `framer-3etdkn hidden-1dhwzcq hidden-1itcmyr`,
                        layout: z,
                        children: [
                          o(`div`, {
                            className: `framer-rn5964`,
                            children: o(S, {
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
                                  children: o(`strong`, { children: `Customer Connect Hub` }),
                                }),
                              }),
                              className: `framer-1e03fwv`,
                              fonts: [`GF;Stack Sans Headline-700`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          o(`div`, {
                            className: `framer-1056plh`,
                            children: o(T, {
                              href: { webPageId: `v0NP7rg_A` },
                              motionChild: !0,
                              nodeId: `auURv1irs`,
                              openInNewTab: !1,
                              scopeId: `ZZVh6lBF_`,
                              children: o(u.a, {
                                className: `framer-11xdddb framer-9uhszv`,
                                "data-framer-name": `Button`,
                                children: o(`div`, {
                                  className: `framer-q8nz57`,
                                  children: o(b, {
                                    breakpoint: N,
                                    overrides: {
                                      NSea9AHFk: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                      Z4GU1z0GR: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    children: a(x, {
                                      className: `framer-982q9h`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(x, {
                                          className: `framer-1vlaiig`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(x, {
                                          className: `framer-1otjvqc`,
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
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Tglpg.framer-9uhszv, .framer-Tglpg .framer-9uhszv { display: block; }`,
        `.framer-Tglpg.framer-1dhwzcq { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Tglpg .framer-1lc5qsv-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-Tglpg .framer-1avpm2i { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-Tglpg .framer-z0gx07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-Tglpg .framer-1j9ofws { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 0px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-Tglpg .framer-1756928, .framer-Tglpg .framer-rn5964 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-Tglpg .framer-1eiqtdq, .framer-Tglpg .framer-1e03fwv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Tglpg .framer-eqf1fe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Tglpg .framer-922p59, .framer-Tglpg .framer-1m6s24d { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Tglpg .framer-17whymn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-Tglpg .framer-1c1j6kq { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-Tglpg .framer-8ntqaa, .framer-Tglpg .framer-q8nz57 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Tglpg .framer-kp9muv, .framer-Tglpg .framer-982q9h { height: 13px; position: relative; width: 14px; }`,
        `.framer-Tglpg .framer-11t1rft, .framer-Tglpg .framer-1vlaiig { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Tglpg .framer-1swhgl9, .framer-Tglpg .framer-1otjvqc { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Tglpg .framer-1gg52u2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-lsaif3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-avi2xx, .framer-Tglpg .framer-1y4gshm, .framer-Tglpg .framer-1odcnrd, .framer-Tglpg .framer-1xij0ij, .framer-Tglpg .framer-1nyq5f7, .framer-Tglpg .framer-z6wmd9, .framer-Tglpg .framer-d8n0o7, .framer-Tglpg .framer-stk5j3, .framer-Tglpg .framer-15xlzz0, .framer-Tglpg .framer-1fpz3i1, .framer-Tglpg .framer-pyavly, .framer-Tglpg .framer-j7vfsl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Tglpg .framer-jxmh2n { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Tglpg .framer-azopbu-container, .framer-Tglpg .framer-9b1x4w-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-1kaet6k, .framer-Tglpg .framer-uzizku { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-ofglc4, .framer-Tglpg .framer-1qstig4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-1f9g35y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-79lb5f, .framer-Tglpg .framer-1f382i1, .framer-Tglpg .framer-1mw078b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-1ubow7q { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Tglpg .framer-lxc1ue, .framer-Tglpg .framer-1i0meju, .framer-Tglpg .framer-8acim8, .framer-Tglpg .framer-1kst4jh, .framer-Tglpg .framer-1j1fblr, .framer-Tglpg .framer-d08rx7, .framer-Tglpg .framer-187cocf, .framer-Tglpg .framer-1px5hao, .framer-Tglpg .framer-zdl5uj, .framer-Tglpg .framer-5bi2gk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-Tglpg .framer-co9wwq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-1djoviv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Tglpg .framer-i9ikui, .framer-Tglpg .framer-dnpwd3, .framer-Tglpg .framer-th79gf, .framer-Tglpg .framer-1rrcr02, .framer-Tglpg .framer-1y2aax, .framer-Tglpg .framer-1lcna4c, .framer-Tglpg .framer-7f8o0b { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-1140skr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Tglpg .framer-1dsplug, .framer-Tglpg .framer-hmqa6i, .framer-Tglpg .framer-7a2lc9, .framer-Tglpg .framer-1q7zbt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-1dwccn7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-nmrh27 { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 0px 16px; position: relative; scroll-margin-top: 150px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Tglpg .framer-11v49tt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Tglpg .framer-10j63kh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Tglpg .framer-3etdkn { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 48px 8px 32px; position: sticky; top: 40px; width: 100%; z-index: 1; }`,
        `.framer-Tglpg .framer-1056plh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Tglpg .framer-11xdddb { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 1px 10px 0px 9px; position: relative; text-decoration: none; width: min-content; }`,
        ...P,
        `.framer-Tglpg[data-border="true"]::after, .framer-Tglpg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-Tglpg.framer-1dhwzcq { width: 1240px; } .framer-Tglpg .framer-1gg52u2 { gap: 16px; justify-content: flex-start; } .framer-Tglpg .framer-lsaif3, .framer-Tglpg .framer-1kaet6k, .framer-Tglpg .framer-ofglc4, .framer-Tglpg .framer-1f9g35y, .framer-Tglpg .framer-1qstig4, .framer-Tglpg .framer-co9wwq { gap: 8px; } .framer-Tglpg .framer-1ubow7q { gap: 16px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-Tglpg.framer-1dhwzcq { flex-direction: column; width: 810px; } .framer-Tglpg .framer-1lc5qsv-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-Tglpg .framer-1avpm2i { flex: none; order: 2; overflow: auto; padding: 0px 0px 32px 0px; width: 100%; } .framer-Tglpg .framer-1gg52u2 { padding: 16px 48px 0px 48px; } .framer-Tglpg .framer-lsaif3, .framer-Tglpg .framer-1kaet6k, .framer-Tglpg .framer-ofglc4, .framer-Tglpg .framer-1f9g35y, .framer-Tglpg .framer-uzizku, .framer-Tglpg .framer-co9wwq { gap: 8px; } .framer-Tglpg .framer-avi2xx { order: 0; } .framer-Tglpg .framer-1y4gshm { order: 1; } .framer-Tglpg .framer-jxmh2n { order: 2; } .framer-Tglpg .framer-79lb5f { padding: 0px 0px 0px 32px; } .framer-Tglpg .framer-1ubow7q { padding: 32px 48px 24px 16px; } .framer-Tglpg .framer-1f382i1 { flex-direction: row; padding: 0px 0px 0px 32px; } .framer-Tglpg .framer-1mw078b { flex: 1 0 0px; width: 1px; } .framer-Tglpg .framer-nmrh27 { padding: 32px 32px 0px 16px; } .framer-Tglpg .framer-3etdkn { box-shadow: unset; order: 1; } .framer-Tglpg .framer-11xdddb { padding: 2px 10px 2px 9px; }}`,
        `@media (max-width: 809.98px) { .framer-Tglpg.framer-1dhwzcq { flex-direction: column; width: 390px; } .framer-Tglpg .framer-1lc5qsv-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-Tglpg .framer-1avpm2i { flex: none; order: 2; overflow: auto; padding: 16px 0px 32px 0px; width: 100%; } .framer-Tglpg .framer-1gg52u2 { padding: 0px 24px 0px 24px; } .framer-Tglpg .framer-lsaif3, .framer-Tglpg .framer-1kaet6k, .framer-Tglpg .framer-uzizku, .framer-Tglpg .framer-1qstig4, .framer-Tglpg .framer-co9wwq { gap: 8px; } .framer-Tglpg .framer-79lb5f, .framer-Tglpg .framer-1f382i1 { padding: 0px 0px 0px 16px; } .framer-Tglpg .framer-1ubow7q { padding: 16px 24px 24px 8px; } .framer-Tglpg .framer-nmrh27 { padding: 32px 32px 0px 16px; } .framer-Tglpg .framer-3etdkn { align-content: center; align-items: center; box-shadow: unset; order: 1; padding: 16px 24px 8px 24px; } .framer-Tglpg .framer-rn5964 { padding: 0px; } .framer-Tglpg .framer-11xdddb { padding: 2px 10px 2px 8px; }}`,
      ],
      `framer-Tglpg`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 8377.5, width: 1440 }),
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
              cssFamilyName: `Stack Sans Headline`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Stack Sans Headline`,
              url: `../../assets/fonts/1PtFg9jZXvmMnkLnuURbaukKZJTyrDV326uH6mSinjBIwc5tIgFCqgUA3ZCX.woff2`,
              weight: `400`,
            },
          ],
        },
        ...B,
        ...V,
        ...w(I),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => g([() => M(F, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerZZVh6lBF_`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"dqEfO62Pw":{"pattern":":dqEfO62Pw","name":"research"},"iF0dDDRNs":{"pattern":":iF0dDDRNs","name":"research-map"},"v0DfLnpOZ":{"pattern":":v0DfLnpOZ","name":"prototype"}}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"QPpL2DTwT":{"layout":["fixed","auto"]},"NSea9AHFk":{"layout":["fixed","auto"]},"Z4GU1z0GR":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `8377.5`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1440`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=sgogaNqGk2ee9n9cSmV_TZ8jiGT7oRrIRprzfG2Bqws.DNN1QXpY.mjs.map
