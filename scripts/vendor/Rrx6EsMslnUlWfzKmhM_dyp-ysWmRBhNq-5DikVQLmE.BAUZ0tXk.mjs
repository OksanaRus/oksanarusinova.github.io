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
  Q as ie,
  S as m,
  W as h,
  X as ae,
  a as g,
  ct as _,
  f as v,
  h as y,
  j as b,
  l as x,
  n as oe,
  nt as se,
  rt as ce,
  s as S,
  t as le,
  tt as C,
  v as w,
  w as T,
} from "./framer.CfbrMSxG.mjs";
import {
  d as E,
  f as ue,
  g as D,
  h as O,
  i as k,
  l as de,
  m as A,
  p as fe,
  r as j,
  u as M,
} from "./shared-lib.f3R8fmkt.mjs";
import {
  a as N,
  c as P,
  i as F,
  n as I,
  o as L,
  r as R,
  s as z,
  t as B,
} from "./U3NyadGC3.BwBuOktC.mjs";
import { i as pe, n as me, r as he, t as ge } from "./rHJW28QP9.Bk1-6hy6.mjs";
import _e, { t as ve } from "./9ysj-M7oy-2rDt9LuAMhFZRsH5MQAS2sdV4y6mCZvx4.Cab3ch24.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (l(),
    re(),
    f(),
    n(),
    k(),
    D(),
    ue(),
    pe(),
    P(),
    F(),
    ve(),
    (V = p(j)),
    (H = {
      oLTPyz34B: `(min-width: 1240px) and (max-width: 1439.98px)`,
      SCkkeNSqb: `(max-width: 809.98px)`,
      TtioI8JsX: `(min-width: 810px) and (max-width: 1239.98px)`,
      Ug3rjEteN: `(min-width: 1440px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-p2NCn`),
    (K = {
      oLTPyz34B: `framer-v-1lrzhwy`,
      SCkkeNSqb: `framer-v-klacin`,
      TtioI8JsX: `framer-v-mz7iub`,
      Ug3rjEteN: `framer-v-10aqqr8`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `Ug3rjEteN`, Laptop: `oLTPyz34B`, Phone: `SCkkeNSqb`, Tablet: `TtioI8JsX` }),
    (X = ({ value: e }) =>
      C()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `Ug3rjEteN`,
    })),
    (Q = _(
      c(function (e, n) {
        let c = u(null),
          l = n ?? c,
          f = i(),
          { activeLocale: p, setLocale: re } = se(),
          h = ae(),
          { style: _, className: b, layoutId: C, variant: w, ...T } = Z(e);
        ce(t(() => _e({}, p), [p]));
        let [E, ue] = ne(w, H, !1),
          D = m(G, B, fe, N, ge, de),
          O = a(g)?.isLayoutTemplate,
          k = !!a(ee)?.transition?.layout,
          A = q(O, k),
          M = () => !U() || E !== `SCkkeNSqb`,
          P = () => !U() || ![`oLTPyz34B`, `SCkkeNSqb`].includes(E);
        return (
          ie({}),
          s(g.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Y,
              primaryVariantId: `Ug3rjEteN`,
              variantClassNames: K,
            },
            children: o(te, {
              id: C ?? f,
              children: [
                s(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                o(d.div, {
                  ...T,
                  className: m(D, `framer-10aqqr8`, b),
                  ref: l,
                  style: { ..._ },
                  children: [
                    s(v, {
                      breakpoint: E,
                      overrides: {
                        SCkkeNSqb: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                        TtioI8JsX: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                      },
                      children: s(le, {
                        height: 1e3,
                        y: (h?.y || 0) + 0,
                        children: s(oe, {
                          className: `framer-lr9rl3-container`,
                          layout: A,
                          nodeId: `B3XgXr2fB`,
                          scopeId: `v0NP7rg_A`,
                          children: s(v, {
                            breakpoint: E,
                            overrides: {
                              SCkkeNSqb: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                              TtioI8JsX: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                            },
                            children: s(j, {
                              height: `100%`,
                              id: `B3XgXr2fB`,
                              layoutId: `B3XgXr2fB`,
                              style: { height: `100%` },
                              variant: J(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-yhuj1y`,
                      id: `yhuj1y`,
                      layout: A,
                      children: [
                        s(`div`, {
                          className: `framer-1gf42oi`,
                          children: s(y, {
                            __fromCanvasComponent: !0,
                            children: s(r, {
                              children: s(`h1`, {
                                className: `framer-styles-preset-p50exy`,
                                "data-styles-preset": `U3NyadGC3`,
                                dir: `auto`,
                                children: `Портфолио`,
                              }),
                            }),
                            className: `framer-5vp5k6`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        s(v, {
                          breakpoint: E,
                          overrides: {
                            SCkkeNSqb: {
                              children: o(r, {
                                children: [
                                  s(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Последние несколько лет я работаю в Optum (технологическое подразделение UnitedHealth Group), где создаю решения для одной из крупнейших медицинских экосистем США, объединяющей более 2 400 страховых организаций и сотни тысяч медицинских учреждений.`,
                                  }),
                                  s(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Я специализируюсь на модернизации сложных цифровых продуктов: проектировании масштабируемых интерфейсов, оптимизации рабочих процессов, интеграции AI-решений и автоматизации, а также развитии информационной архитектуры и дизайн-систем. В основе моего подхода лежат глубокое исследование пользователей, системное мышление и тесное сотрудничество с бизнесом и командами разработки — это позволяет создавать решения, которые одновременно отвечают потребностям пользователей и поддерживают достижение бизнес-целей.`,
                                  }),
                                  s(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Ниже представленa подборка ключевых проектов.`,
                                  }),
                                ],
                              }),
                            },
                          },
                          children: s(y, {
                            __fromCanvasComponent: !0,
                            children: o(r, {
                              children: [
                                s(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Последние несколько лет я работаю в Optum (технологическое подразделение UnitedHealth Group), где создаю решения для одной из крупнейших медицинских экосистем США, объединяющей более 2 400 страховых организаций и сотни тысяч медицинских учреждений.`,
                                }),
                                s(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Я специализируюсь на модернизации сложных цифровых продуктов: проектировании масштабируемых интерфейсов, оптимизации рабочих процессов, интеграции AI-решений и автоматизации, а также развитии информационной архитектуры и дизайн-систем. В основе моего подхода лежат глубокое исследование пользователей, системное мышление и тесное сотрудничество с бизнесом и командами разработки — это позволяет создавать решения, которые одновременно отвечают потребностям пользователей и поддерживают достижение бизнес-целей.`,
                                }),
                                s(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Ниже представлен мой подход к проектированию и подборка ключевых проектов.`,
                                }),
                              ],
                            }),
                            className: `framer-1ci7pyg`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        M() &&
                          s(v, {
                            breakpoint: E,
                            overrides: {
                              oLTPyz34B: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 716,
                                  intrinsicWidth: 1672,
                                  pixelHeight: 716,
                                  pixelWidth: 1672,
                                  positionX: `center`,
                                  positionY: `center`,
                                  src: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png`,
                                  srcSet: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-038e36.png 512w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-55970f.png 1024w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png 1672w`,
                                },
                              },
                              TtioI8JsX: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 716,
                                  intrinsicWidth: 1672,
                                  pixelHeight: 716,
                                  pixelWidth: 1672,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(${h?.width || `100vw`} - 96px)`,
                                  src: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png`,
                                  srcSet: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-038e36.png 512w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-55970f.png 1024w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png 1672w`,
                                },
                              },
                            },
                            children: s(S, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 716,
                                intrinsicWidth: 1672,
                                pixelHeight: 716,
                                pixelWidth: 1672,
                                src: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png`,
                                srcSet: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-038e36.png 512w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-55970f.png 1024w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png 1672w`,
                              },
                              className: `framer-1kn9sho hidden-klacin`,
                            }),
                          }),
                        o(`div`, {
                          className: `framer-1mus7e9`,
                          children: [
                            s(x, {
                              href: { webPageId: `yNWqB1Ufr` },
                              motionChild: !0,
                              nodeId: `fMSQYzypL`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: s(v, {
                                breakpoint: E,
                                overrides: {
                                  SCkkeNSqb: {
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
                                      src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                      srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                    },
                                  },
                                  TtioI8JsX: {
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
                                      src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                      srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                    },
                                  },
                                },
                                children: s(S, {
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
                                    src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                    srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                  },
                                  className: `framer-1ij1pp7 framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: s(v, {
                                    breakpoint: E,
                                    overrides: {
                                      oLTPyz34B: {
                                        href: { webPageId: `yNWqB1Ufr` },
                                        openInNewTab: !1,
                                      },
                                    },
                                    children: s(x, {
                                      motionChild: !0,
                                      nodeId: `KA3SD3RMJ`,
                                      scopeId: `v0NP7rg_A`,
                                      children: o(d.a, {
                                        className: `framer-1i447j9 framer-197ogg6`,
                                        children: [
                                          s(`div`, {
                                            className: `framer-h518s0`,
                                            children: s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: s(`strong`, {
                                                    children: `Customer Connect Hub`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-r1z4ru`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-3hrxt`,
                                            "data-border": !0,
                                            children: [
                                              s(y, {
                                                __fromCanvasComponent: !0,
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: `Sr. Product Designer, Team Lead`,
                                                  }),
                                                }),
                                                className: `framer-4w11nv`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              s(y, {
                                                __fromCanvasComponent: !0,
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(18, 0, 0)`,
                                                    },
                                                    children: `Q4 2025 - Present`,
                                                  }),
                                                }),
                                                className: `framer-d2q4xg`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              s(y, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: [
                                                    s(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(18, 0, 0)`,
                                                      },
                                                      children: `Фокус: архитектура `,
                                                    }),
                                                    s(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(18, 0, 0)`,
                                                      },
                                                      children: `и визуализация данных`,
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-1ihnugh`,
                                                fonts: [`Inter`],
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
                            }),
                            s(x, {
                              href: { webPageId: `AgTyDC1r5` },
                              motionChild: !0,
                              nodeId: `Fkn8yqr1R`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: s(v, {
                                breakpoint: E,
                                overrides: {
                                  SCkkeNSqb: {
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
                                      src: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png`,
                                      srcSet: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-6ef04b.png 512w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-decfae.png 1024w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png 2048w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png 2254w`,
                                    },
                                  },
                                  TtioI8JsX: {
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
                                      src: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png`,
                                      srcSet: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-6ef04b.png 512w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-decfae.png 1024w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png 2048w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png 2254w`,
                                    },
                                  },
                                },
                                children: s(S, {
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
                                    src: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png`,
                                    srcSet: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-6ef04b.png 512w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-decfae.png 1024w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png 2048w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png 2254w`,
                                  },
                                  className: `framer-1r9hq6v framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: s(S, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      pixelHeight: 527,
                                      pixelWidth: 576,
                                      src: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png`,
                                      srcSet: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE-6670b1.png 512w,../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png 576w`,
                                    },
                                    className: `framer-1d3iass`,
                                    children: o(`div`, {
                                      className: `framer-15nxd1d`,
                                      children: [
                                        s(`div`, {
                                          className: `framer-1a5yvf9`,
                                          "data-border": !0,
                                          children: s(v, {
                                            breakpoint: E,
                                            overrides: {
                                              SCkkeNSqb: {
                                                children: s(r, {
                                                  children: s(`h2`, {
                                                    className: `framer-styles-preset-qvrn1k`,
                                                    "data-styles-preset": `ksQr_zVQP`,
                                                    dir: `auto`,
                                                    children: `Enrollments`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`h2`, {
                                                  className: `framer-styles-preset-qvrn1k`,
                                                  "data-styles-preset": `ksQr_zVQP`,
                                                  children: `Enrollments`,
                                                }),
                                              }),
                                              className: `framer-vpbpgz`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-1i0pr8i`,
                                          children: [
                                            s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: s(`strong`, {
                                                    children: `Sr. Product Designer, Team Lead`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-18nepwx`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `rgb(52, 26, 0)`,
                                                  },
                                                  children: s(`strong`, {
                                                    children: `Q1 2025 - Present`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-fjiyo`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: [
                                                  s(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `center` },
                                                    children: s(`strong`, {
                                                      children: `Фокус: модернизация `,
                                                    }),
                                                  }),
                                                  s(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `center` },
                                                    children: s(`strong`, {
                                                      children: `устаревшего UI`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              className: `framer-fcojeg`,
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
                        o(`div`, {
                          className: `framer-c6w1qr`,
                          children: [
                            s(`div`, {
                              className: `framer-1ks9pv5`,
                              children: s(x, {
                                href: { webPageId: `TfvKxublX` },
                                motionChild: !0,
                                nodeId: `fDyfHZPOr`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: s(v, {
                                  breakpoint: E,
                                  overrides: {
                                    SCkkeNSqb: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1664,
                                        pixelWidth: 2560,
                                        sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                        src: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png`,
                                        srcSet: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-c76a97.png 512w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-fc7ca1.png 1024w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM.png 2048w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png 2560w`,
                                      },
                                    },
                                    TtioI8JsX: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1664,
                                        pixelWidth: 2560,
                                        sizes: `max((${h?.width || `100vw`} - 128px) / 2, 1px)`,
                                        src: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png`,
                                        srcSet: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-c76a97.png 512w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-fc7ca1.png 1024w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM.png 2048w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png 2560w`,
                                      },
                                    },
                                  },
                                  children: s(S, {
                                    as: `a`,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      pixelHeight: 1664,
                                      pixelWidth: 2560,
                                      src: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png`,
                                      srcSet: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-c76a97.png 512w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-fc7ca1.png 1024w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM.png 2048w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png 2560w`,
                                    },
                                    className: `framer-etp7m framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: o(S, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 629,
                                        pixelWidth: 1281,
                                        src: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png`,
                                        srcSet: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-e9f2a6.png 512w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-476ba2.png 1024w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png 1281w`,
                                      },
                                      className: `framer-16wg2wh`,
                                      "data-border": !0,
                                      children: [
                                        s(`div`, {
                                          className: `framer-mbzsgl`,
                                          children: s(y, {
                                            __fromCanvasComponent: !0,
                                            children: s(r, {
                                              children: s(`h2`, {
                                                className: `framer-styles-preset-qvrn1k`,
                                                "data-styles-preset": `ksQr_zVQP`,
                                                dir: `auto`,
                                                children: `RTS`,
                                              }),
                                            }),
                                            className: `framer-m5lzkt`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-16aah55`,
                                          children: [
                                            s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: `Sr. Product/UX Designer`,
                                                }),
                                              }),
                                              className: `framer-iz8usq`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: `Q2 2025 - Q3 2025`,
                                                }),
                                              }),
                                              className: `framer-14ilrjw`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(v, {
                                              breakpoint: E,
                                              overrides: {
                                                oLTPyz34B: {
                                                  children: o(r, {
                                                    children: [
                                                      s(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `Фокус: архитектура `,
                                                      }),
                                                      s(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `интерфейса и `,
                                                      }),
                                                      s(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `системная интеграция`,
                                                      }),
                                                    ],
                                                  }),
                                                },
                                              },
                                              children: s(y, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: [
                                                    s(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(0, 0, 0)`,
                                                      },
                                                      children: `Фокус: архитектура интерфейса и `,
                                                    }),
                                                    s(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(0, 0, 0)`,
                                                      },
                                                      children: `системная интеграция`,
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-1xeriin`,
                                                fonts: [`Inter`],
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
                            s(`div`, {
                              className: `framer-cu42is`,
                              "data-framer-name": `Img Wrap`,
                              children: s(x, {
                                href: { webPageId: `QijvxGXqd` },
                                motionChild: !0,
                                nodeId: `dpcU0F0l_`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: s(v, {
                                  breakpoint: E,
                                  overrides: {
                                    SCkkeNSqb: {
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
                                        src: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png`,
                                        srcSet: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-67b95e.png 512w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-c106d3.png 1024w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png 2048w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png 2644w`,
                                      },
                                    },
                                    TtioI8JsX: {
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
                                        src: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png`,
                                        srcSet: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-67b95e.png 512w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-c106d3.png 1024w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png 2048w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png 2644w`,
                                      },
                                    },
                                  },
                                  children: s(S, {
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
                                      src: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png`,
                                      srcSet: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-67b95e.png 512w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-c106d3.png 1024w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png 2048w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png 2644w`,
                                    },
                                    className: `framer-lf2ng2 framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: s(x, {
                                      href: { webPageId: `pVjAhsh5N` },
                                      motionChild: !0,
                                      nodeId: `Tqt8CAPqZ`,
                                      openInNewTab: !1,
                                      scopeId: `v0NP7rg_A`,
                                      children: o(d.a, {
                                        className: `framer-h00g12 framer-197ogg6`,
                                        "data-border": !0,
                                        children: [
                                          s(`div`, {
                                            className: `framer-12su8lr`,
                                            "data-border": !0,
                                            children: s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  children: s(`strong`, {
                                                    children: `Data File Delivery`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1lq6x1x`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-a7fzjf`,
                                            "data-border": !0,
                                            children: [
                                              s(y, {
                                                __fromCanvasComponent: !0,
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: s(`strong`, {
                                                      children: `Sr. Product Designer`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-1lf6r25`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              s(y, {
                                                __fromCanvasComponent: !0,
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: s(`strong`, {
                                                      children: `Q4 2024 - Q1 2025`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-1a3dosa`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              s(v, {
                                                breakpoint: E,
                                                overrides: {
                                                  oLTPyz34B: {
                                                    children: o(r, {
                                                      children: [
                                                        s(`p`, {
                                                          className: `framer-styles-preset-1504gar`,
                                                          "data-styles-preset": `rHJW28QP9`,
                                                          dir: `auto`,
                                                          children: `Focus: net-new app `,
                                                        }),
                                                        s(`p`, {
                                                          className: `framer-styles-preset-1504gar`,
                                                          "data-styles-preset": `rHJW28QP9`,
                                                          dir: `auto`,
                                                          children: `in 3 months`,
                                                        }),
                                                      ],
                                                    }),
                                                    fonts: [`Inter`],
                                                  },
                                                  SCkkeNSqb: {
                                                    children: o(r, {
                                                      children: [
                                                        s(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                            "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.81)`,
                                                            "--framer-line-height": `1.4em`,
                                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                                          },
                                                          children: s(`mark`, {
                                                            style: {
                                                              "--framer-text-background-radius": `0px`,
                                                            },
                                                            children: `Фокус: разработка нового `,
                                                          }),
                                                        }),
                                                        s(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                            "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.81)`,
                                                            "--framer-line-height": `1.4em`,
                                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                                          },
                                                          children: s(`mark`, {
                                                            style: {
                                                              "--framer-text-background-radius": `0px`,
                                                            },
                                                            children: `приложения с нуля за 3 месяца`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    fonts: [`GF;Stack Sans Text-regular`],
                                                  },
                                                  TtioI8JsX: {
                                                    children: o(r, {
                                                      children: [
                                                        s(`p`, {
                                                          className: `framer-styles-preset-1504gar`,
                                                          "data-styles-preset": `rHJW28QP9`,
                                                          dir: `auto`,
                                                          children: s(`strong`, {
                                                            children: `Focus: net-new app `,
                                                          }),
                                                        }),
                                                        s(`p`, {
                                                          className: `framer-styles-preset-1504gar`,
                                                          "data-styles-preset": `rHJW28QP9`,
                                                          dir: `auto`,
                                                          children: s(`strong`, {
                                                            children: `in 3 months`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  },
                                                },
                                                children: s(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: [
                                                      s(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: s(`strong`, {
                                                          children: `Focus: net-new, function-first app `,
                                                        }),
                                                      }),
                                                      s(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: s(`strong`, {
                                                          children: `in 3 months`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-11leisq`,
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
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-pab799`,
                          children: [
                            s(`div`, {
                              className: `framer-u9yrnd`,
                              children: s(x, {
                                href: { webPageId: `ZZVh6lBF_` },
                                motionChild: !0,
                                nodeId: `XSG6cXLt7`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: s(v, {
                                  breakpoint: E,
                                  overrides: {
                                    oLTPyz34B: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 756,
                                        intrinsicWidth: 1170,
                                        pixelHeight: 756,
                                        pixelWidth: 1170,
                                        sizes: `402.5px`,
                                        src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                        srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                      },
                                      fitImageDimension: void 0,
                                    },
                                    SCkkeNSqb: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 756,
                                        intrinsicWidth: 1170,
                                        pixelHeight: 756,
                                        pixelWidth: 1170,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                        src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                        srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                      },
                                    },
                                    TtioI8JsX: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 756,
                                        intrinsicWidth: 1170,
                                        pixelHeight: 756,
                                        pixelWidth: 1170,
                                        sizes: `max((${h?.width || `100vw`} - 120px) / 2, 1px)`,
                                        src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                        srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                      },
                                    },
                                  },
                                  children: s(S, {
                                    as: `a`,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 756,
                                      intrinsicWidth: 1170,
                                      pixelHeight: 756,
                                      pixelWidth: 1170,
                                      src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                      srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                    },
                                    className: `framer-1tz296u framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: s(`div`, {
                                      className: `framer-nlbqo4`,
                                      "data-border": !0,
                                      children: o(`div`, {
                                        className: `framer-1obwo1j`,
                                        children: [
                                          s(v, {
                                            breakpoint: E,
                                            overrides: {
                                              SCkkeNSqb: {
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `SW50ZXItQm9sZA==`,
                                                      "--framer-font-size": `12px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: `AI-Enabled Form Mapping Tool`,
                                                  }),
                                                }),
                                                fonts: [`Inter-Bold`],
                                              },
                                            },
                                            children: s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  dir: `auto`,
                                                  style: { "--framer-font-size": `21px` },
                                                  children: `AI-Enabled Form Mapping Tool`,
                                                }),
                                              }),
                                              className: `framer-1b51asn`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          s(v, {
                                            breakpoint: E,
                                            overrides: {
                                              oLTPyz34B: {
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: s(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: s(`strong`, {
                                                        children: `Sr. Prod./UX Designer`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              SCkkeNSqb: {
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: s(`strong`, {
                                                      children: `Sr. Product Designer`,
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: s(`strong`, {
                                                    children: `Sr. Product Designer`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-grg6rh`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          s(v, {
                                            breakpoint: E,
                                            overrides: {
                                              oLTPyz34B: {
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: s(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: s(`strong`, {
                                                        children: `Q1 2026 - Q2 2026`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              SCkkeNSqb: {
                                                children: s(r, {
                                                  children: s(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.6)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: s(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: s(`strong`, {
                                                        children: `Q1 2026 - Q2 2026`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: s(y, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: s(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: s(`strong`, {
                                                      children: `Q1 2026 - Q2 2026`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-18ivu67`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          s(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: [
                                                s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: s(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `Фокус: заменить неэффективные `,
                                                  }),
                                                }),
                                                s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: s(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `устаревшие процессы современным `,
                                                  }),
                                                }),
                                                s(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: s(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `инструментом.`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            className: `framer-139uija`,
                                            fonts: [`GF;Stack Sans Text-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-125k893`,
                              children: s(v, {
                                breakpoint: E,
                                overrides: {
                                  oLTPyz34B: {
                                    children: s(r, {
                                      children: s(`h2`, {
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
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: `Project Case Study`,
                                        }),
                                      }),
                                    }),
                                  },
                                  SCkkeNSqb: {
                                    children: s(r, {
                                      children: s(`h2`, {
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
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: `Project Case Study`,
                                        }),
                                      }),
                                    }),
                                  },
                                  TtioI8JsX: {
                                    children: s(r, {
                                      children: s(`h2`, {
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
                                        children: s(`mark`, {
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: `Project Case Study`,
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: s(y, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h2`, {
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
                                      children: s(`mark`, {
                                        style: { "--framer-text-background-radius": `0px` },
                                        children: `Project Case Study`,
                                      }),
                                    }),
                                  }),
                                  className: `framer-1p7ao80`,
                                  fonts: [`GF;Stack Sans Headline-500`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            P() &&
                              s(`div`, { className: `framer-fb48da hidden-1lrzhwy hidden-klacin` }),
                          ],
                        }),
                      ],
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
        `.framer-p2NCn.framer-197ogg6, .framer-p2NCn .framer-197ogg6 { display: block; }`,
        `.framer-p2NCn.framer-10aqqr8 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-p2NCn .framer-lr9rl3-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-p2NCn .framer-yhuj1y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 1864px; justify-content: flex-start; overflow: visible; padding: 24px 64px 64px 64px; position: relative; width: 1px; }`,
        `.framer-p2NCn .framer-1gf42oi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-p2NCn .framer-5vp5k6, .framer-p2NCn .framer-r1z4ru, .framer-p2NCn .framer-4w11nv, .framer-p2NCn .framer-d2q4xg, .framer-p2NCn .framer-1ihnugh, .framer-p2NCn .framer-vpbpgz, .framer-p2NCn .framer-18nepwx, .framer-p2NCn .framer-fjiyo, .framer-p2NCn .framer-m5lzkt, .framer-p2NCn .framer-iz8usq, .framer-p2NCn .framer-14ilrjw, .framer-p2NCn .framer-1xeriin, .framer-p2NCn .framer-1lf6r25, .framer-p2NCn .framer-1a3dosa, .framer-p2NCn .framer-11leisq, .framer-p2NCn .framer-grg6rh, .framer-p2NCn .framer-18ivu67, .framer-p2NCn .framer-139uija, .framer-p2NCn .framer-1p7ao80 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-p2NCn .framer-1ci7pyg, .framer-p2NCn .framer-1lq6x1x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-p2NCn .framer-1kn9sho { aspect-ratio: 2.399449035812672 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-p2NCn .framer-1mus7e9, .framer-p2NCn .framer-c6w1qr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-p2NCn .framer-1ij1pp7 { --border-bottom-width: 0px; --border-color: rgba(0, 71, 64, 0.26); --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(53, 26, 0, 0.72), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(53, 26, 0, 0.64), 5px 10px 11.180339887498945px -3.75px rgba(53, 26, 0, 0.25); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-p2NCn .framer-1i447j9 { align-content: flex-end; align-items: flex-end; background-color: rgba(255, 255, 255, 0.3); border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 24px 28px 24px 24px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-h518s0 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-p2NCn .framer-3hrxt { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-p2NCn .framer-1r9hq6v { --border-bottom-width: 3px; --border-color: #f8edeb; --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-p2NCn .framer-1d3iass { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-15nxd1d { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(245, 245, 242, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 91.29539695945947%, rgba(163, 183, 203, 0.01) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-p2NCn .framer-1a5yvf9 { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-1i0pr8i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-fcojeg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-p2NCn .framer-1ks9pv5, .framer-p2NCn .framer-u9yrnd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-p2NCn .framer-etp7m { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-p2NCn .framer-16wg2wh { --border-bottom-width: 5px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 5px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 20px 24px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-mbzsgl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-16aah55 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-cu42is { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-p2NCn .framer-lf2ng2 { --border-bottom-width: 1px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-p2NCn .framer-h00g12 { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 6px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 90%; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-p2NCn .framer-12su8lr { --border-bottom-width: 1px; --border-color: #f95f2b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 293px; }`,
        `.framer-p2NCn .framer-a7fzjf { --border-bottom-width: 1px; --border-color: #f8602b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-pab799 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 6px 0px; position: relative; width: 100%; }`,
        `.framer-p2NCn .framer-1tz296u { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 16px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-p2NCn .framer-nlbqo4 { --border-bottom-width: 6px; --border-color: #000000; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; align-content: flex-end; align-items: flex-end; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 24px 0px 20px 0px; position: relative; width: min-content; }`,
        `.framer-p2NCn .framer-1obwo1j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 16px 100px 24px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-p2NCn .framer-1b51asn { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-p2NCn .framer-125k893 { align-content: center; align-items: center; background-color: #000000; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 42px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: 129px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 24px 10px 24px; position: absolute; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-p2NCn .framer-fb48da { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 16px 0px 0px 16px; position: relative; width: 1px; }`,
        ...I,
        ...A,
        ...L,
        ...me,
        ...M,
        `.framer-p2NCn[data-border="true"]::after, .framer-p2NCn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-p2NCn.framer-10aqqr8 { width: 1240px; } .framer-p2NCn .framer-lr9rl3-container { order: 0; } .framer-p2NCn .framer-yhuj1y { height: 1624px; order: 1; } .framer-p2NCn .framer-1i447j9 { flex: 1 0 0px; text-decoration: none; width: 1px; } .framer-p2NCn .framer-1d3iass { align-content: center; align-items: center; padding: 16px; } .framer-p2NCn .framer-15nxd1d { background: radial-gradient(50% 50% at 50% 50%, rgba(242, 244, 245, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 91.29539695945947%, rgba(163, 183, 203, 0.03) 100%); padding: 0px; } .framer-p2NCn .framer-16wg2wh { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-p2NCn .framer-h00g12 { height: 90%; padding: 16px 24px 16px 32px; width: 80%; } .framer-p2NCn .framer-12su8lr { gap: 0px; width: min-content; } .framer-p2NCn .framer-1lq6x1x { white-space: pre; width: auto; } .framer-p2NCn .framer-pab799 { justify-content: flex-start; } .framer-p2NCn .framer-u9yrnd { align-content: flex-start; align-items: flex-start; flex: none; justify-content: flex-start; width: min-content; } .framer-p2NCn .framer-1tz296u { flex: none; height: 260px; padding: 0px 16px 4px 0px; width: 403px; } .framer-p2NCn .framer-nlbqo4 { --border-bottom-width: 5px; --border-left-width: 5px; --border-right-width: 5px; --border-top-width: 5px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); padding: 0px 0px 20px 0px; } .framer-p2NCn .framer-1obwo1j { padding: 16px 16px 61px 24px; } .framer-p2NCn .framer-125k893 { bottom: 25px; left: 147px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-p2NCn.framer-10aqqr8 { flex-direction: column; width: 810px; } .framer-p2NCn .framer-lr9rl3-container { height: auto; order: 0; width: 100%; } .framer-p2NCn .framer-yhuj1y { flex: none; gap: 24px; height: 1645px; order: 1; padding: 32px 48px 64px 48px; width: 100%; } .framer-p2NCn .framer-1d3iass { padding: 0px 24px 0px 16px; } .framer-p2NCn .framer-16wg2wh { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-p2NCn .framer-h00g12 { padding: 16px 24px 16px 32px; } .framer-p2NCn .framer-12su8lr { width: min-content; } .framer-p2NCn .framer-1lq6x1x { white-space: pre; width: auto; } .framer-p2NCn .framer-u9yrnd { align-content: flex-start; align-items: flex-start; justify-content: flex-start; } .framer-p2NCn .framer-125k893 { bottom: 34px; left: 75px; padding: 10px 32px 10px 32px; } .framer-p2NCn .framer-fb48da { align-self: unset; height: min-content; min-height: 222px; }}`,
        `@media (max-width: 809.98px) { .framer-p2NCn.framer-10aqqr8 { flex-direction: column; width: 390px; } .framer-p2NCn .framer-lr9rl3-container { height: auto; order: 0; width: 100%; } .framer-p2NCn .framer-yhuj1y { flex: none; gap: 16px; order: 1; padding: 24px; width: 100%; } .framer-p2NCn .framer-1mus7e9, .framer-p2NCn .framer-c6w1qr { flex-direction: column; gap: 16px; } .framer-p2NCn .framer-1ij1pp7, .framer-p2NCn .framer-1r9hq6v, .framer-p2NCn .framer-1ks9pv5, .framer-p2NCn .framer-cu42is, .framer-p2NCn .framer-u9yrnd { flex: none; width: 100%; } .framer-p2NCn .framer-1i447j9 { padding: 24px; } .framer-p2NCn .framer-3hrxt { align-content: center; align-items: center; padding: 16px; } .framer-p2NCn .framer-1d3iass { padding: 0px 24px 0px 16px; } .framer-p2NCn .framer-16wg2wh { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-p2NCn .framer-h00g12 { height: min-content; padding: 16px 24px 16px 32px; } .framer-p2NCn .framer-12su8lr { align-self: stretch; width: auto; } .framer-p2NCn .framer-pab799 { flex-direction: column; } .framer-p2NCn .framer-nlbqo4 { height: 200px; justify-content: flex-start; padding: 24px 12px 20px 0px; } .framer-p2NCn .framer-1obwo1j { align-content: center; align-items: center; justify-content: flex-start; padding: 0px 0px 24px 12px; } .framer-p2NCn .framer-125k893 { bottom: unset; left: 75px; padding: 8px 38px 8px 38px; top: 161px; }}`,
      ],
      `framer-p2NCn`
    )),
    (Q.displayName = `Portfolio`),
    (Q.defaultProps = { height: 1864, width: 1440 }),
    w(
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
        ...b(R),
        ...b(O),
        ...b(z),
        ...b(he),
        ...b(E),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => h([() => T(j, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerv0NP7rg_A`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1440`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oLTPyz34B":{"layout":["fixed","auto"]},"TtioI8JsX":{"layout":["fixed","auto"]},"SCkkeNSqb":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerIntrinsicHeight: `1864`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=Rrx6EsMslnUlWfzKmhM_dyp-ysWmRBhNq-5DikVQLmE.BAUZ0tXk.mjs.map
