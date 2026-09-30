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
  y as te,
} from "./react.BKyTRiZ3.mjs";
import { a as ne, r as re, t as l, x as u } from "./motion.CZCLJn0h.mjs";
import {
  $ as ie,
  A as d,
  L as ae,
  Q as oe,
  S as f,
  X as p,
  a as m,
  ct as h,
  f as g,
  h as _,
  j as v,
  l as y,
  n as se,
  nt as ce,
  rt as le,
  s as b,
  t as ue,
  tt as x,
  v as S,
  w as C,
} from "./framer.1c_rZl7u.mjs";
import {
  C as w,
  S as T,
  _ as de,
  a as fe,
  b as E,
  c as D,
  d as O,
  f as k,
  i as A,
  l as j,
  o as M,
  r as N,
  s as P,
  u as F,
  v as I,
  w as L,
  x as R,
  y as z,
} from "./shared-lib.0T242d49.mjs";
import { i as B, n as pe, r as me, t as he } from "./rHJW28QP9.DDXzYFc_.mjs";
import ge, { t as _e } from "./OxVAFIepHMt0YIvkpkWNz31mldOLlPyUp444p4va8P0.CC5zG3Hg.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    ae(),
    l(),
    n(),
    k(),
    L(),
    E(),
    B(),
    F(),
    M(),
    _e(),
    (V = d(O)),
    (H = {
      CWjBdPC07: `(max-width: 809.98px)`,
      hldGO9amP: `(min-width: 1440px)`,
      NHxbZBgUw: `(min-width: 1240px) and (max-width: 1439.98px)`,
      Rud3UaIU_: `(min-width: 810px) and (max-width: 1239.98px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-6hVJI`),
    (K = {
      CWjBdPC07: `framer-v-6bmze`,
      hldGO9amP: `framer-v-p77vbb`,
      NHxbZBgUw: `framer-v-1rhwtit`,
      Rud3UaIU_: `framer-v-f8s2uu`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `hldGO9amP`, Laptop: `NHxbZBgUw`, Phone: `CWjBdPC07`, Tablet: `Rud3UaIU_` }),
    (X = ({ value: e }) =>
      x()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `hldGO9amP`,
    })),
    (Q = h(
      s(function (e, n) {
        let s = te(null),
          c = n ?? s,
          l = ee(),
          { activeLocale: d, setLocale: ae } = ce(),
          h = p(),
          { style: v, className: x, layoutId: S, variant: C, ...w } = Z(e);
        le(t(() => ge({}, d), [d]));
        let [T, fe] = ie(C, H, !1),
          E = f(G, N, R, P, he, de),
          D = i(m)?.isLayoutTemplate,
          k = !!i(ne)?.transition?.layout,
          A = q(D, k),
          j = () => !U() || T !== `CWjBdPC07`;
        return (
          oe({}),
          o(m.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Y,
              primaryVariantId: `hldGO9amP`,
              variantClassNames: K,
            },
            children: a(re, {
              id: S ?? l,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...w,
                  className: f(E, `framer-p77vbb`, x),
                  ref: c,
                  style: { ...v },
                  children: [
                    o(g, {
                      breakpoint: T,
                      overrides: {
                        CWjBdPC07: { height: 800, width: h?.width || `100vw` },
                        Rud3UaIU_: { height: 800, width: h?.width || `100vw` },
                      },
                      children: o(ue, {
                        height: 1e3,
                        children: o(se, {
                          className: `framer-5sp6hd-container`,
                          layout: A,
                          nodeId: `RQGvb0YOe`,
                          scopeId: `Yk0caFFXD`,
                          children: o(g, {
                            breakpoint: T,
                            overrides: {
                              CWjBdPC07: { style: { width: `100%` }, variant: J(`wvPpZ1IwG`) },
                              Rud3UaIU_: { style: { width: `100%` }, variant: J(`s0lcynSc3`) },
                            },
                            children: o(O, {
                              height: `100%`,
                              id: `RQGvb0YOe`,
                              layoutId: `RQGvb0YOe`,
                              style: { height: `100%` },
                              variant: J(`mAQYDiHUl`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-65mg8h`,
                      id: `65mg8h`,
                      layout: A,
                      children: [
                        o(`div`, {
                          className: `framer-137ima4`,
                          children: o(_, {
                            __fromCanvasComponent: !0,
                            children: o(r, {
                              children: o(`h1`, {
                                className: `framer-styles-preset-p50exy`,
                                "data-styles-preset": `U3NyadGC3`,
                                children: o(`strong`, { children: `Portfolio` }),
                              }),
                            }),
                            className: `framer-12s0vll`,
                            fonts: [`Inter`, `Inter-Bold`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        o(_, {
                          __fromCanvasComponent: !0,
                          children: a(r, {
                            children: [
                              o(`p`, {
                                className: `framer-styles-preset-12u88cl`,
                                "data-styles-preset": `HftgEsO0a`,
                                dir: `auto`,
                                children: `This portfolio features a selection of projects that reflect my approach to UX design. Over the past several years, I have specialized in data-heavy B2B products, where a deep understanding of end-to-end user journeys, personas, and workflows is essential.`,
                              }),
                              o(`p`, {
                                className: `framer-styles-preset-12u88cl`,
                                "data-styles-preset": `HftgEsO0a`,
                                dir: `auto`,
                                children: `My recent work focuses on improving the user experience within the Optum clearinghouse ecosystem, a large healthcare transaction network connecting 2,000+ insurance payers and roughly 800,000 healthcare providers. In this environment, even small UX improvements can have a meaningful impact on operational efficiency for organizations that process high volumes of healthcare transactions every day.`,
                              }),
                              o(`p`, {
                                className: `framer-styles-preset-12u88cl`,
                                "data-styles-preset": `HftgEsO0a`,
                                dir: `auto`,
                                children: `Across multiple initiatives, my role has centered on modernizing legacy workflows while maintaining stability for high-volume enterprise systems. This involves balancing innovation with continuity by introducing automation, AI-assisted tools, and improved information architecture without disrupting the critical daily workflows that users rely on.`,
                              }),
                              o(`p`, {
                                className: `framer-styles-preset-12u88cl`,
                                "data-styles-preset": `HftgEsO0a`,
                                dir: `auto`,
                                children: `If you have any questions or ideas for collaboration, I would be happy to connect.`,
                              }),
                            ],
                          }),
                          className: `framer-16s9u7f`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        a(`div`, {
                          className: `framer-4425ue`,
                          children: [
                            o(y, {
                              href: { webPageId: `oe1CZFKp_` },
                              motionChild: !0,
                              nodeId: `ndBBWTPQm`,
                              openInNewTab: !1,
                              scopeId: `Yk0caFFXD`,
                              children: o(g, {
                                breakpoint: T,
                                overrides: {
                                  CWjBdPC07: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1194,
                                      pixelWidth: 1846,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                      src: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194`,
                                      srcSet: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=512&width=1846&height=1194 512w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=1024&width=1846&height=1194 1024w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194 1846w`,
                                    },
                                  },
                                  Rud3UaIU_: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1194,
                                      pixelWidth: 1846,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `max((${h?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194`,
                                      srcSet: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=512&width=1846&height=1194 512w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=1024&width=1846&height=1194 1024w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194 1846w`,
                                    },
                                  },
                                },
                                children: o(b, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    pixelHeight: 1194,
                                    pixelWidth: 1846,
                                    positionX: `center`,
                                    positionY: `center`,
                                    src: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194`,
                                    srcSet: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=512&width=1846&height=1194 512w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=1024&width=1846&height=1194 1024w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194 1846w`,
                                  },
                                  className: `framer-k6evaj framer-1mltq3v`,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: a(`div`, {
                                    className: `framer-11geig9`,
                                    children: [
                                      o(`div`, {
                                        className: `framer-1q46scf`,
                                        children: o(_, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h3`, {
                                              className: `framer-styles-preset-bdezu4`,
                                              "data-styles-preset": `TWYWOtjjp`,
                                              style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                              children: o(`strong`, {
                                                children: `Customer Connect Hub`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1c7nxuu`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      a(`div`, {
                                        className: `framer-62kza1`,
                                        "data-border": !0,
                                        children: [
                                          o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1504gar`,
                                                "data-styles-preset": `rHJW28QP9`,
                                                dir: `auto`,
                                                children: o(`strong`, {
                                                  children: `Sr. Product Designer, Team Lead`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-132p6gm`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1504gar`,
                                                "data-styles-preset": `rHJW28QP9`,
                                                dir: `auto`,
                                                children: o(`strong`, {
                                                  children: `Q4 2025 - Present`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-u87il4`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(_, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: [
                                                o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Focus: data architecture `,
                                                  }),
                                                }),
                                                o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `and visualization`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            className: `framer-xclzj5`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                            o(y, {
                              href: { webPageId: `wcki3OcY_` },
                              motionChild: !0,
                              nodeId: `JK6KEVBxP`,
                              scopeId: `Yk0caFFXD`,
                              children: o(g, {
                                breakpoint: T,
                                overrides: {
                                  CWjBdPC07: {
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1490,
                                      pixelWidth: 2254,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                      src: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490`,
                                      srcSet: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=512&width=2254&height=1490 512w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=1024&width=2254&height=1490 1024w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=2048&width=2254&height=1490 2048w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490 2254w`,
                                    },
                                  },
                                  Rud3UaIU_: {
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1490,
                                      pixelWidth: 2254,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `max((${h?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490`,
                                      srcSet: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=512&width=2254&height=1490 512w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=1024&width=2254&height=1490 1024w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=2048&width=2254&height=1490 2048w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490 2254w`,
                                    },
                                  },
                                },
                                children: o(b, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `stretch`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    pixelHeight: 1490,
                                    pixelWidth: 2254,
                                    positionX: `center`,
                                    positionY: `center`,
                                    src: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490`,
                                    srcSet: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=512&width=2254&height=1490 512w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=1024&width=2254&height=1490 1024w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=2048&width=2254&height=1490 2048w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490 2254w`,
                                  },
                                  className: `framer-7sub6n framer-1mltq3v`,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: o(b, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      pixelHeight: 527,
                                      pixelWidth: 576,
                                      src: `https://framerusercontent.com/images/YTQaRxftptwLQGJXjNvC95u4PE.png?width=576&height=527`,
                                      srcSet: `https://framerusercontent.com/images/YTQaRxftptwLQGJXjNvC95u4PE.png?scale-down-to=512&width=576&height=527 512w,https://framerusercontent.com/images/YTQaRxftptwLQGJXjNvC95u4PE.png?width=576&height=527 576w`,
                                    },
                                    className: `framer-cuwrmm`,
                                    children: a(`div`, {
                                      className: `framer-1n3moit`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-10cxrxk`,
                                          "data-border": !0,
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h2`, {
                                                className: `framer-styles-preset-qvrn1k`,
                                                "data-styles-preset": `ksQr_zVQP`,
                                                children: `Enrollments`,
                                              }),
                                            }),
                                            className: `framer-19q5v97`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-wunv16`,
                                          children: [
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Sr. Product Designer, Team Lead`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-ceui2a`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `rgb(52, 26, 0)`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Q1 2025 - Present`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1i21l6o`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
                                                children: [
                                                  o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: o(`strong`, {
                                                      children: `Focus: legacy application `,
                                                    }),
                                                  }),
                                                  o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `center` },
                                                    children: o(`strong`, {
                                                      children: `modernization`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              className: `framer-1p2p1ka`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        a(`div`, {
                          className: `framer-194wj5q`,
                          children: [
                            o(`div`, {
                              className: `framer-1m9hm35`,
                              children: o(y, {
                                href: { webPageId: `J0eMRLTAj` },
                                motionChild: !0,
                                nodeId: `TzQXghfLQ`,
                                openInNewTab: !1,
                                scopeId: `Yk0caFFXD`,
                                children: o(g, {
                                  breakpoint: T,
                                  overrides: {
                                    CWjBdPC07: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1664,
                                        pixelWidth: 2560,
                                        sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                        src: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664`,
                                        srcSet: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=512&width=2560&height=1664 512w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=1024&width=2560&height=1664 1024w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=2048&width=2560&height=1664 2048w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664 2560w`,
                                      },
                                    },
                                    Rud3UaIU_: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1664,
                                        pixelWidth: 2560,
                                        sizes: `max((${h?.width || `100vw`} - 128px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664`,
                                        srcSet: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=512&width=2560&height=1664 512w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=1024&width=2560&height=1664 1024w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=2048&width=2560&height=1664 2048w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664 2560w`,
                                      },
                                    },
                                  },
                                  children: o(b, {
                                    as: `a`,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1664,
                                      pixelWidth: 2560,
                                      src: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664`,
                                      srcSet: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=512&width=2560&height=1664 512w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=1024&width=2560&height=1664 1024w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=2048&width=2560&height=1664 2048w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664 2560w`,
                                    },
                                    className: `framer-nx3mm5 framer-1mltq3v`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: a(b, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 629,
                                        pixelWidth: 1281,
                                        src: `https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?width=1281&height=629`,
                                        srcSet: `https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?scale-down-to=512&width=1281&height=629 512w,https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?scale-down-to=1024&width=1281&height=629 1024w,https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?width=1281&height=629 1281w`,
                                      },
                                      className: `framer-uzmtr1`,
                                      "data-border": !0,
                                      children: [
                                        o(`div`, {
                                          className: `framer-1oc4z14`,
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h2`, {
                                                className: `framer-styles-preset-qvrn1k`,
                                                "data-styles-preset": `ksQr_zVQP`,
                                                dir: `auto`,
                                                children: `RTS`,
                                              }),
                                            }),
                                            className: `framer-1h08imb`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-zvmzu1`,
                                          children: [
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Sr. Product/UX Designer`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-mb7hd7`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Q2 2025 - Q3 2025`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-bjxr0d`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
                                                children: [
                                                  o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Focus: UI architecture and `,
                                                    }),
                                                  }),
                                                  o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `system integration`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              className: `framer-6uxlus`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            o(`div`, {
                              className: `framer-bk3tr5`,
                              "data-framer-name": `Img Wrap`,
                              children: o(y, {
                                href: { webPageId: `TQ2_bezBK` },
                                motionChild: !0,
                                nodeId: `qFtb5KT6k`,
                                openInNewTab: !1,
                                scopeId: `Yk0caFFXD`,
                                children: o(g, {
                                  breakpoint: T,
                                  overrides: {
                                    CWjBdPC07: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1488,
                                        pixelWidth: 2644,
                                        positionX: `left`,
                                        positionY: `top`,
                                        sizes: `max(${h?.width || `100vw`} - 48px, 1px)`,
                                        src: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488`,
                                        srcSet: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=512&width=2644&height=1488 512w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=1024&width=2644&height=1488 1024w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=2048&width=2644&height=1488 2048w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488 2644w`,
                                      },
                                    },
                                    Rud3UaIU_: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1488,
                                        pixelWidth: 2644,
                                        positionX: `left`,
                                        positionY: `top`,
                                        sizes: `max((${h?.width || `100vw`} - 128px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488`,
                                        srcSet: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=512&width=2644&height=1488 512w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=1024&width=2644&height=1488 1024w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=2048&width=2644&height=1488 2048w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488 2644w`,
                                      },
                                    },
                                  },
                                  children: o(b, {
                                    as: `a`,
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1488,
                                      pixelWidth: 2644,
                                      positionX: `left`,
                                      positionY: `top`,
                                      src: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488`,
                                      srcSet: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=512&width=2644&height=1488 512w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=1024&width=2644&height=1488 1024w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=2048&width=2644&height=1488 2048w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488 2644w`,
                                    },
                                    className: `framer-19lm3ta framer-1mltq3v`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: a(`div`, {
                                      className: `framer-18ynd2d`,
                                      "data-border": !0,
                                      children: [
                                        o(`div`, {
                                          className: `framer-10o0onl`,
                                          "data-border": !0,
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h3`, {
                                                className: `framer-styles-preset-bdezu4`,
                                                "data-styles-preset": `TWYWOtjjp`,
                                                dir: `auto`,
                                                children: o(`strong`, {
                                                  children: `Data File Delivery`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-zfjlht`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-1wlp3r0`,
                                          "data-border": !0,
                                          children: [
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Sr. Product Designer`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-dp4bq9`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Q4 2024 - Q1 2025`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-11d6kns`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(g, {
                                              breakpoint: T,
                                              overrides: {
                                                NHxbZBgUw: {
                                                  children: a(r, {
                                                    children: [
                                                      o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: o(`strong`, {
                                                          children: `Focus: net-new app `,
                                                        }),
                                                      }),
                                                      o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: o(`strong`, {
                                                          children: `in 3 months`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                },
                                              },
                                              children: o(_, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                  children: [
                                                    o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      children: o(`strong`, {
                                                        children: `Focus: net-new, function-first app `,
                                                      }),
                                                    }),
                                                    o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      children: o(`strong`, {
                                                        children: `in 3 months`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-14hi3wo`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-1n5k1gx`,
                          children: o(y, {
                            href: { webPageId: `ccThq1ZNn` },
                            motionChild: !0,
                            nodeId: `CTcT_n3yu`,
                            openInNewTab: !1,
                            scopeId: `Yk0caFFXD`,
                            children: o(g, {
                              breakpoint: T,
                              overrides: {
                                CWjBdPC07: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 756,
                                    intrinsicWidth: 1170,
                                    pixelHeight: 756,
                                    pixelWidth: 1170,
                                    sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                    src: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756`,
                                    srcSet: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=512&width=1170&height=756 512w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=1024&width=1170&height=756 1024w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756 1170w`,
                                  },
                                },
                                NHxbZBgUw: { fitImageDimension: void 0 },
                                Rud3UaIU_: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 756,
                                    intrinsicWidth: 1170,
                                    pixelHeight: 756,
                                    pixelWidth: 1170,
                                    sizes: `calc((${h?.width || `100vw`} - 96px) * 0.6)`,
                                    src: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756`,
                                    srcSet: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=512&width=1170&height=756 512w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=1024&width=1170&height=756 1024w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756 1170w`,
                                  },
                                },
                              },
                              children: o(b, {
                                as: `a`,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 756,
                                  intrinsicWidth: 1170,
                                  pixelHeight: 756,
                                  pixelWidth: 1170,
                                  src: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756`,
                                  srcSet: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=512&width=1170&height=756 512w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=1024&width=1170&height=756 1024w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756 1170w`,
                                },
                                className: `framer-zq0jgy framer-1mltq3v`,
                                "data-border": !0,
                                "data-framer-name": `Image002`,
                                fitImageDimension: `height`,
                                children: a(`div`, {
                                  className: `framer-1cg489t`,
                                  "data-border": !0,
                                  children: [
                                    a(`div`, {
                                      className: `framer-1rm33t5`,
                                      children: [
                                        o(g, {
                                          breakpoint: T,
                                          overrides: {
                                            CWjBdPC07: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `SW50ZXItQm9sZA==`,
                                                    "--framer-font-size": `10px`,
                                                    "--framer-font-weight": `700`,
                                                    "--framer-text-alignment": `center`,
                                                  },
                                                  children: `AI-Enabled Form Mapping Tool`,
                                                }),
                                              }),
                                              fonts: [`Inter-Bold`],
                                            },
                                          },
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-font-size": `23px`,
                                                  "--framer-text-alignment": `left`,
                                                },
                                                children: `AI-Enabled Form Mapping Tool`,
                                              }),
                                            }),
                                            className: `framer-19hzuvq`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(g, {
                                          breakpoint: T,
                                          overrides: {
                                            CWjBdPC07: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Sr. Product Designer`,
                                                  }),
                                                }),
                                              }),
                                            },
                                            NHxbZBgUw: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Sr. Prod./UX Designer`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(51, 26, 0)`,
                                                },
                                                children: o(`strong`, {
                                                  children: `Sr. Product Designer`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-mfv5pw`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(g, {
                                          breakpoint: T,
                                          overrides: {
                                            CWjBdPC07: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.6)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Q1 2026 - Present`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            NHxbZBgUw: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: o(`strong`, {
                                                      children: `Q1 2026 - Present`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(51, 26, 0)`,
                                                },
                                                children: o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: o(`strong`, {
                                                    children: `Q1 2026 - Present`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-cl8eqr`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(g, {
                                          breakpoint: T,
                                          overrides: {
                                            CWjBdPC07: {
                                              children: a(r, {
                                                children: [
                                                  o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.6)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: `Focus: Replace inefficient `,
                                                    }),
                                                  }),
                                                  o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.6)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: `legacy processes `,
                                                    }),
                                                  }),
                                                  o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.6)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: `with a modern tool.`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            },
                                          },
                                          children: o(_, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: [
                                                o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `Focus: Replace inefficient legacy `,
                                                  }),
                                                }),
                                                o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `processes with a modern tool.`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            className: `framer-v61ft9`,
                                            fonts: [`GF;Stack Sans Text-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-1c862zm`,
                                      children: o(g, {
                                        breakpoint: T,
                                        overrides: {
                                          CWjBdPC07: {
                                            children: o(r, {
                                              children: o(`h2`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                                  "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1)`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `0.02em`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: `Project Case Study`,
                                                }),
                                              }),
                                            }),
                                          },
                                          NHxbZBgUw: {
                                            children: o(r, {
                                              children: o(`h2`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                                  "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.35)`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `0.02em`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: `Project Case Study`,
                                                }),
                                              }),
                                            }),
                                          },
                                          Rud3UaIU_: {
                                            children: o(r, {
                                              children: o(`h2`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                                  "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.28)`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `0.02em`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                },
                                                children: o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: `Project Case Study`,
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        children: o(_, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h2`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7U3RhY2sgU2FucyBIZWFkbGluZS01MDA=`,
                                                "--framer-font-family": `"Stack Sans Headline", "Stack Sans Headline Placeholder", sans-serif`,
                                                "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 1.58)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: o(`mark`, {
                                                style: { "--framer-text-background-radius": `0px` },
                                                children: `Project Case Study`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-gub61p`,
                                          fonts: [`GF;Stack Sans Headline-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                        j() &&
                          o(`div`, {
                            className: `framer-1bu7xjb hidden-6bmze`,
                            children: o(`div`, { className: `framer-1ouzupj` }),
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
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-6hVJI.framer-1mltq3v, .framer-6hVJI .framer-1mltq3v { display: block; }`,
        `.framer-6hVJI.framer-p77vbb { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-6hVJI .framer-5sp6hd-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-6hVJI .framer-65mg8h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 64px 64px; position: relative; width: 1px; }`,
        `.framer-6hVJI .framer-137ima4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6hVJI .framer-12s0vll, .framer-6hVJI .framer-1c7nxuu, .framer-6hVJI .framer-132p6gm, .framer-6hVJI .framer-u87il4, .framer-6hVJI .framer-xclzj5, .framer-6hVJI .framer-19q5v97, .framer-6hVJI .framer-ceui2a, .framer-6hVJI .framer-1i21l6o, .framer-6hVJI .framer-1h08imb, .framer-6hVJI .framer-mb7hd7, .framer-6hVJI .framer-bjxr0d, .framer-6hVJI .framer-6uxlus, .framer-6hVJI .framer-dp4bq9, .framer-6hVJI .framer-11d6kns, .framer-6hVJI .framer-14hi3wo, .framer-6hVJI .framer-mfv5pw, .framer-6hVJI .framer-cl8eqr, .framer-6hVJI .framer-v61ft9, .framer-6hVJI .framer-gub61p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-6hVJI .framer-16s9u7f, .framer-6hVJI .framer-zfjlht { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6hVJI .framer-4425ue, .framer-6hVJI .framer-194wj5q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6hVJI .framer-k6evaj { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773611px -1.25px rgba(53, 26, 0, 0.72), 1.1442666516217286px 2.288533303243457px 2.558658017412255px -2.5px rgba(53, 26, 0, 0.64), 5px 10px 11.180339887498949px -3.75px rgba(53, 26, 0, 0.25); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-6hVJI .framer-11geig9 { align-content: flex-end; align-items: flex-end; background-color: rgba(255, 255, 255, 0.3); border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 24px 28px 24px 24px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-1q46scf { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 4px 12px 4px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6hVJI .framer-62kza1 { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6hVJI .framer-7sub6n { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773611px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412255px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498949px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-6hVJI .framer-cuwrmm { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 48px 16px 48px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-1n3moit { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(245, 245, 242, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 84%, rgba(163, 183, 203, 0.01) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6hVJI .framer-10cxrxk { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-wunv16 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-1p2p1ka { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-6hVJI .framer-1m9hm35 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6hVJI .framer-nx3mm5 { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773611px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412255px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498949px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-6hVJI .framer-uzmtr1 { --border-bottom-width: 5px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 5px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 20px 24px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-1oc4z14 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-zvmzu1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-bk3tr5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6hVJI .framer-19lm3ta { --border-bottom-width: 1px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773611px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412255px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498949px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-6hVJI .framer-18ynd2d { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 6px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 90%; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-10o0onl { --border-bottom-width: 1px; --border-color: #f95f2b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 262px; }`,
        `.framer-6hVJI .framer-1wlp3r0 { --border-bottom-width: 1px; --border-color: #f8602b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-1n5k1gx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 45%; }`,
        `.framer-6hVJI .framer-zq0jgy { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773611px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412255px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498949px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px 24px 0px 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-6hVJI .framer-1cg489t { --border-bottom-width: 6px; --border-color: #000000; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; align-content: flex-end; align-items: flex-end; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 24px 0px 20px 0px; position: relative; width: min-content; }`,
        `.framer-6hVJI .framer-1rm33t5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 16px 70px 24px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-6hVJI .framer-19hzuvq { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6hVJI .framer-1c862zm { align-content: center; align-items: center; background-color: #000000; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: 45%; overflow: var(--overflow-clip-fallback, clip); padding: 10px 24px 10px 24px; position: absolute; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-6hVJI .framer-1bu7xjb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 24px 24px; position: relative; width: 100%; }`,
        `.framer-6hVJI .framer-1ouzupj { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        ...A,
        ...T,
        ...D,
        ...pe,
        ...I,
        `.framer-6hVJI[data-border="true"]::after, .framer-6hVJI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-6hVJI.framer-p77vbb { width: 1240px; } .framer-6hVJI .framer-5sp6hd-container { order: 0; } .framer-6hVJI .framer-65mg8h { order: 1; } .framer-6hVJI .framer-11geig9 { gap: 4px; padding: 12px 24px 16px 24px; } .framer-6hVJI .framer-cuwrmm { padding: 8px 16px 8px 16px; } .framer-6hVJI .framer-1n3moit { padding: 8px; } .framer-6hVJI .framer-uzmtr1 { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-6hVJI .framer-18ynd2d { height: 90%; padding: 16px 24px 16px 32px; } .framer-6hVJI .framer-10o0onl { gap: 0px; width: min-content; } .framer-6hVJI .framer-zfjlht { white-space: pre; width: auto; } .framer-6hVJI .framer-1n5k1gx { width: 60%; } .framer-6hVJI .framer-zq0jgy { height: 243px; } .framer-6hVJI .framer-1cg489t { --border-bottom-width: 5px; --border-left-width: 5px; --border-right-width: 5px; --border-top-width: 5px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); padding: 0px 0px 20px 0px; } .framer-6hVJI .framer-1rm33t5 { padding: 16px 16px 61px 24px; } .framer-6hVJI .framer-1c862zm { bottom: 11px; left: -14px; transform: unset; } .framer-6hVJI .framer-1bu7xjb { padding: 18px 0px 18px 0px; } .framer-6hVJI .framer-1ouzupj { align-self: unset; height: min-content; min-height: 189px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-6hVJI.framer-p77vbb { flex-direction: column; width: 810px; } .framer-6hVJI .framer-5sp6hd-container { height: auto; order: 0; width: 100%; } .framer-6hVJI .framer-65mg8h { flex: none; order: 1; padding: 32px 48px 64px 48px; width: 100%; } .framer-6hVJI .framer-cuwrmm { padding: 16px 24px 16px 48px; } .framer-6hVJI .framer-uzmtr1 { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-6hVJI .framer-18ynd2d { padding: 16px 24px 16px 32px; } .framer-6hVJI .framer-1n5k1gx { width: 60%; } .framer-6hVJI .framer-1ouzupj { align-self: unset; height: min-content; min-height: 196px; }}`,
        `@media (max-width: 809.98px) { .framer-6hVJI.framer-p77vbb { flex-direction: column; width: 390px; } .framer-6hVJI .framer-5sp6hd-container { height: auto; order: 0; width: 100%; } .framer-6hVJI .framer-65mg8h { flex: none; gap: 16px; order: 1; padding: 24px; width: 100%; } .framer-6hVJI .framer-4425ue, .framer-6hVJI .framer-194wj5q { flex-direction: column; gap: 16px; } .framer-6hVJI .framer-k6evaj, .framer-6hVJI .framer-7sub6n, .framer-6hVJI .framer-1m9hm35, .framer-6hVJI .framer-bk3tr5 { flex: none; width: 100%; } .framer-6hVJI .framer-11geig9 { align-content: center; align-items: center; gap: 4px; padding: 24px; } .framer-6hVJI .framer-1q46scf { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; will-change: unset; } .framer-6hVJI .framer-62kza1 { align-content: center; align-items: center; padding: 16px; } .framer-6hVJI .framer-cuwrmm { padding: 16px 24px 16px 48px; } .framer-6hVJI .framer-uzmtr1 { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-6hVJI .framer-18ynd2d { height: min-content; padding: 16px 24px 16px 32px; } .framer-6hVJI .framer-10o0onl { align-self: stretch; width: auto; } .framer-6hVJI .framer-1n5k1gx { width: 100%; } .framer-6hVJI .framer-1cg489t { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); height: 90%; padding: 24px 12px 12px 0px; } .framer-6hVJI .framer-1rm33t5 { align-content: center; align-items: center; flex: 1 0 0px; height: 1px; justify-content: flex-start; padding: 0px 0px 0px 12px; } .framer-6hVJI .framer-1c862zm { bottom: 12px; left: -36px; padding: 8px 24px 8px 24px; transform: unset; }}`,
      ],
      `framer-6hVJI`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1508.5, width: 1440 }),
    S(
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
          ],
        },
        ...V,
        ...v(fe),
        ...v(w),
        ...v(j),
        ...v(me),
        ...v(z),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([C(O, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerYk0caFFXD`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1440`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `1508.5`,
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"NHxbZBgUw":{"layout":["fixed","auto"]},"Rud3UaIU_":{"layout":["fixed","auto"]},"CWjBdPC07":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=ZixTofmQRhB2Ko2GmAkyHQepwJwZuQETSWRoVlkADQ0.D0PwSR1A.mjs.map
