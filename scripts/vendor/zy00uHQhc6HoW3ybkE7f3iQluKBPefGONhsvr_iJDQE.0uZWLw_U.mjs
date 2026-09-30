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
import { a as ne, r as l, t as u, x as d } from "./motion.CZCLJn0h.mjs";
import {
  $ as re,
  A as f,
  L as ie,
  Q as ae,
  S as p,
  W as m,
  X as oe,
  a as h,
  ct as g,
  f as _,
  h as v,
  j as y,
  l as b,
  n as se,
  nt as ce,
  rt as le,
  s as x,
  t as ue,
  tt as S,
  v as C,
  w,
} from "./framer.1c_rZl7u.mjs";
import {
  C as T,
  S as de,
  _ as fe,
  a as E,
  b as D,
  c as O,
  d as k,
  f as A,
  i as j,
  l as M,
  o as N,
  r as P,
  s as F,
  u as I,
  v as L,
  w as R,
  x as z,
  y as B,
} from "./shared-lib.0T242d49.mjs";
import { i as pe, n as me, r as he, t as ge } from "./rHJW28QP9.DDXzYFc_.mjs";
import _e, { t as ve } from "./e9qS-zHTy1oxaMZ0XU58AspjH1bdKTZ4Zc7GsS_43ss.DCoiKfHm.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    ie(),
    u(),
    n(),
    A(),
    R(),
    D(),
    pe(),
    I(),
    N(),
    ve(),
    (V = f(k)),
    (H = {
      oLTPyz34B: `(min-width: 1240px) and (max-width: 1439.98px)`,
      SCkkeNSqb: `(max-width: 809.98px)`,
      TtioI8JsX: `(min-width: 810px) and (max-width: 1239.98px)`,
      Ug3rjEteN: `(min-width: 1440px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-jIXvC`),
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
      S()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `Ug3rjEteN`,
    })),
    (Q = g(
      s(function (e, n) {
        let s = te(null),
          c = n ?? s,
          u = ee(),
          { activeLocale: f, setLocale: ie } = ce(),
          m = oe(),
          { style: g, className: y, layoutId: S, variant: C, ...w } = Z(e);
        le(t(() => _e({}, f), [f]));
        let [T, de] = re(C, H, !1),
          E = p(G, P, z, F, ge, fe),
          D = i(h)?.isLayoutTemplate,
          O = !!i(ne)?.transition?.layout,
          A = q(D, O),
          j = () => !U() || T !== `SCkkeNSqb`,
          M = () => !U() || ![`oLTPyz34B`, `SCkkeNSqb`].includes(T);
        return (
          ae({}),
          o(h.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Y,
              primaryVariantId: `Ug3rjEteN`,
              variantClassNames: K,
            },
            children: a(l, {
              id: S ?? u,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(d.div, {
                  ...w,
                  className: p(E, `framer-10aqqr8`, y),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: T,
                      overrides: {
                        SCkkeNSqb: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                        TtioI8JsX: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(ue, {
                        height: 1e3,
                        y: (m?.y || 0) + 0,
                        children: o(se, {
                          className: `framer-lr9rl3-container`,
                          layout: A,
                          nodeId: `B3XgXr2fB`,
                          scopeId: `v0NP7rg_A`,
                          children: o(_, {
                            breakpoint: T,
                            overrides: {
                              SCkkeNSqb: { style: { width: `100%` }, variant: J(`XJ7hq0Zpp`) },
                              TtioI8JsX: { style: { width: `100%` }, variant: J(`YCYFEcIjL`) },
                            },
                            children: o(k, {
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
                    a(d.div, {
                      className: `framer-yhuj1y`,
                      id: `yhuj1y`,
                      layout: A,
                      children: [
                        o(`div`, {
                          className: `framer-1gf42oi`,
                          children: o(v, {
                            __fromCanvasComponent: !0,
                            children: o(r, {
                              children: o(`h1`, {
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
                        o(_, {
                          breakpoint: T,
                          overrides: {
                            SCkkeNSqb: {
                              children: a(r, {
                                children: [
                                  o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Последние несколько лет я работаю в Optum (технологическое подразделение UnitedHealth Group), где создаю решения для одной из крупнейших медицинских экосистем США, объединяющей более 2 400 страховых организаций и сотни тысяч медицинских учреждений.`,
                                  }),
                                  o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Я специализируюсь на модернизации сложных цифровых продуктов: проектировании масштабируемых интерфейсов, оптимизации рабочих процессов, интеграции AI-решений и автоматизации, а также развитии информационной архитектуры и дизайн-систем. В основе моего подхода лежат глубокое исследование пользователей, системное мышление и тесное сотрудничество с бизнесом и командами разработки — это позволяет создавать решения, которые одновременно отвечают потребностям пользователей и поддерживают достижение бизнес-целей.`,
                                  }),
                                  o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Ниже представленa подборка ключевых проектов.`,
                                  }),
                                ],
                              }),
                            },
                          },
                          children: o(v, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: [
                                o(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Последние несколько лет я работаю в Optum (технологическое подразделение UnitedHealth Group), где создаю решения для одной из крупнейших медицинских экосистем США, объединяющей более 2 400 страховых организаций и сотни тысяч медицинских учреждений.`,
                                }),
                                o(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Я специализируюсь на модернизации сложных цифровых продуктов: проектировании масштабируемых интерфейсов, оптимизации рабочих процессов, интеграции AI-решений и автоматизации, а также развитии информационной архитектуры и дизайн-систем. В основе моего подхода лежат глубокое исследование пользователей, системное мышление и тесное сотрудничество с бизнесом и командами разработки — это позволяет создавать решения, которые одновременно отвечают потребностям пользователей и поддерживают достижение бизнес-целей.`,
                                }),
                                o(`p`, {
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
                        j() &&
                          o(_, {
                            breakpoint: T,
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
                                  src: `https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?width=1672&height=716`,
                                  srcSet: `https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?scale-down-to=512&width=1672&height=716 512w,https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?scale-down-to=1024&width=1672&height=716 1024w,https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?width=1672&height=716 1672w`,
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
                                  sizes: `calc(${m?.width || `100vw`} - 96px)`,
                                  src: `https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?width=1672&height=716`,
                                  srcSet: `https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?scale-down-to=512&width=1672&height=716 512w,https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?scale-down-to=1024&width=1672&height=716 1024w,https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?width=1672&height=716 1672w`,
                                },
                              },
                            },
                            children: o(x, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 716,
                                intrinsicWidth: 1672,
                                pixelHeight: 716,
                                pixelWidth: 1672,
                                src: `https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?width=1672&height=716`,
                                srcSet: `https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?scale-down-to=512&width=1672&height=716 512w,https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?scale-down-to=1024&width=1672&height=716 1024w,https://framerusercontent.com/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png?width=1672&height=716 1672w`,
                              },
                              className: `framer-1kn9sho hidden-klacin`,
                            }),
                          }),
                        a(`div`, {
                          className: `framer-1mus7e9`,
                          children: [
                            o(b, {
                              href: { webPageId: `aQL_eOTAm` },
                              motionChild: !0,
                              nodeId: `fMSQYzypL`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: o(_, {
                                breakpoint: T,
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
                                      sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                      src: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194`,
                                      srcSet: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=512&width=1846&height=1194 512w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=1024&width=1846&height=1194 1024w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194 1846w`,
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
                                      sizes: `max((${m?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194`,
                                      srcSet: `https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=512&width=1846&height=1194 512w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?scale-down-to=1024&width=1846&height=1194 1024w,https://framerusercontent.com/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png?width=1846&height=1194 1846w`,
                                    },
                                  },
                                },
                                children: o(x, {
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
                                  className: `framer-1ij1pp7 framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: a(`div`, {
                                    className: `framer-1i447j9`,
                                    children: [
                                      o(`div`, {
                                        className: `framer-h518s0`,
                                        children: o(v, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h3`, {
                                              className: `framer-styles-preset-bdezu4`,
                                              "data-styles-preset": `TWYWOtjjp`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                              children: o(`strong`, {
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
                                      a(`div`, {
                                        className: `framer-3hrxt`,
                                        "data-border": !0,
                                        children: [
                                          o(v, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
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
                                          o(v, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1504gar`,
                                                "data-styles-preset": `rHJW28QP9`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(18, 0, 0)` },
                                                children: `Q4 2025 - Present`,
                                              }),
                                            }),
                                            className: `framer-d2q4xg`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: [
                                                o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(18, 0, 0)` },
                                                  children: `Фокус: архитектура `,
                                                }),
                                                o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(18, 0, 0)` },
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
                            o(b, {
                              href: { webPageId: `CuKpzzXMb` },
                              motionChild: !0,
                              nodeId: `Fkn8yqr1R`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: o(_, {
                                breakpoint: T,
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
                                      sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                      src: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490`,
                                      srcSet: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=512&width=2254&height=1490 512w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=1024&width=2254&height=1490 1024w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=2048&width=2254&height=1490 2048w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490 2254w`,
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
                                      sizes: `max((${m?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490`,
                                      srcSet: `https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=512&width=2254&height=1490 512w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=1024&width=2254&height=1490 1024w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?scale-down-to=2048&width=2254&height=1490 2048w,https://framerusercontent.com/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png?width=2254&height=1490 2254w`,
                                    },
                                  },
                                },
                                children: o(x, {
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
                                  className: `framer-1r9hq6v framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: o(x, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      pixelHeight: 527,
                                      pixelWidth: 576,
                                      src: `https://framerusercontent.com/images/YTQaRxftptwLQGJXjNvC95u4PE.png?width=576&height=527`,
                                      srcSet: `https://framerusercontent.com/images/YTQaRxftptwLQGJXjNvC95u4PE.png?scale-down-to=512&width=576&height=527 512w,https://framerusercontent.com/images/YTQaRxftptwLQGJXjNvC95u4PE.png?width=576&height=527 576w`,
                                    },
                                    className: `framer-1d3iass`,
                                    children: a(`div`, {
                                      className: `framer-15nxd1d`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-1a5yvf9`,
                                          "data-border": !0,
                                          children: o(_, {
                                            breakpoint: T,
                                            overrides: {
                                              SCkkeNSqb: {
                                                children: o(r, {
                                                  children: o(`h2`, {
                                                    className: `framer-styles-preset-qvrn1k`,
                                                    "data-styles-preset": `ksQr_zVQP`,
                                                    dir: `auto`,
                                                    children: `Enrollments`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h2`, {
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
                                        a(`div`, {
                                          className: `framer-1i0pr8i`,
                                          children: [
                                            o(v, {
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
                                              className: `framer-18nepwx`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
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
                                              className: `framer-fjiyo`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
                                                children: [
                                                  o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `center` },
                                                    children: o(`strong`, {
                                                      children: `Фокус: модернизация `,
                                                    }),
                                                  }),
                                                  o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `center` },
                                                    children: o(`strong`, {
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
                        a(`div`, {
                          className: `framer-c6w1qr`,
                          children: [
                            o(`div`, {
                              className: `framer-1ks9pv5`,
                              children: o(b, {
                                href: { webPageId: `Q70j7ZVMn` },
                                motionChild: !0,
                                nodeId: `fDyfHZPOr`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: o(_, {
                                  breakpoint: T,
                                  overrides: {
                                    SCkkeNSqb: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 875,
                                        intrinsicWidth: 1397,
                                        pixelHeight: 1664,
                                        pixelWidth: 2560,
                                        sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                        src: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664`,
                                        srcSet: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=512&width=2560&height=1664 512w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=1024&width=2560&height=1664 1024w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=2048&width=2560&height=1664 2048w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664 2560w`,
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
                                        sizes: `max((${m?.width || `100vw`} - 128px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664`,
                                        srcSet: `https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=512&width=2560&height=1664 512w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=1024&width=2560&height=1664 1024w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?scale-down-to=2048&width=2560&height=1664 2048w,https://framerusercontent.com/images/82hktWvz1Cnyh8TUu4ggHad3AM.png?width=2560&height=1664 2560w`,
                                      },
                                    },
                                  },
                                  children: o(x, {
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
                                    className: `framer-etp7m framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: a(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 629,
                                        pixelWidth: 1281,
                                        src: `https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?width=1281&height=629`,
                                        srcSet: `https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?scale-down-to=512&width=1281&height=629 512w,https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?scale-down-to=1024&width=1281&height=629 1024w,https://framerusercontent.com/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png?width=1281&height=629 1281w`,
                                      },
                                      className: `framer-16wg2wh`,
                                      "data-border": !0,
                                      children: [
                                        o(`div`, {
                                          className: `framer-mbzsgl`,
                                          children: o(v, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h2`, {
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
                                        a(`div`, {
                                          className: `framer-16aah55`,
                                          children: [
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
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
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
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
                                            o(_, {
                                              breakpoint: T,
                                              overrides: {
                                                oLTPyz34B: {
                                                  children: a(r, {
                                                    children: [
                                                      o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `Фокус: архитектура `,
                                                      }),
                                                      o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `интерфейса и `,
                                                      }),
                                                      o(`p`, {
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
                                              children: o(v, {
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
                                                      children: `Фокус: архитектура интерфейса и `,
                                                    }),
                                                    o(`p`, {
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
                            o(`div`, {
                              className: `framer-cu42is`,
                              "data-framer-name": `Img Wrap`,
                              children: o(b, {
                                href: { webPageId: `TQ2_bezBK` },
                                motionChild: !0,
                                nodeId: `dpcU0F0l_`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: o(_, {
                                  breakpoint: T,
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
                                        sizes: `max(${m?.width || `100vw`} - 48px, 1px)`,
                                        src: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488`,
                                        srcSet: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=512&width=2644&height=1488 512w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=1024&width=2644&height=1488 1024w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=2048&width=2644&height=1488 2048w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488 2644w`,
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
                                        sizes: `max((${m?.width || `100vw`} - 128px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488`,
                                        srcSet: `https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=512&width=2644&height=1488 512w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=1024&width=2644&height=1488 1024w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?scale-down-to=2048&width=2644&height=1488 2048w,https://framerusercontent.com/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png?width=2644&height=1488 2644w`,
                                      },
                                    },
                                  },
                                  children: o(x, {
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
                                    className: `framer-lf2ng2 framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: o(b, {
                                      href: { webPageId: `pVjAhsh5N` },
                                      motionChild: !0,
                                      nodeId: `Tqt8CAPqZ`,
                                      openInNewTab: !1,
                                      scopeId: `v0NP7rg_A`,
                                      children: a(d.a, {
                                        className: `framer-h00g12 framer-197ogg6`,
                                        "data-border": !0,
                                        children: [
                                          o(`div`, {
                                            className: `framer-12su8lr`,
                                            "data-border": !0,
                                            children: o(v, {
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
                                              className: `framer-1lq6x1x`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          a(`div`, {
                                            className: `framer-a7fzjf`,
                                            "data-border": !0,
                                            children: [
                                              o(v, {
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
                                                className: `framer-1lf6r25`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(v, {
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
                                                className: `framer-1a3dosa`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(_, {
                                                breakpoint: T,
                                                overrides: {
                                                  oLTPyz34B: {
                                                    children: a(r, {
                                                      children: [
                                                        o(`p`, {
                                                          className: `framer-styles-preset-1504gar`,
                                                          "data-styles-preset": `rHJW28QP9`,
                                                          dir: `auto`,
                                                          children: `Focus: net-new app `,
                                                        }),
                                                        o(`p`, {
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
                                                    children: a(r, {
                                                      children: [
                                                        o(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                            "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.81)`,
                                                            "--framer-line-height": `1.4em`,
                                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                                          },
                                                          children: o(`mark`, {
                                                            style: {
                                                              "--framer-text-background-radius": `0px`,
                                                            },
                                                            children: `Фокус: разработка нового `,
                                                          }),
                                                        }),
                                                        o(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                            "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                            "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.81)`,
                                                            "--framer-line-height": `1.4em`,
                                                            "--framer-text-color": `rgb(51, 26, 0)`,
                                                          },
                                                          children: o(`mark`, {
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
                                                children: o(v, {
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
                        a(`div`, {
                          className: `framer-pab799`,
                          children: [
                            o(`div`, {
                              className: `framer-u9yrnd`,
                              children: o(b, {
                                href: { webPageId: `jFBc0bflX` },
                                motionChild: !0,
                                nodeId: `XSG6cXLt7`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: o(_, {
                                  breakpoint: T,
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
                                        src: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756`,
                                        srcSet: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=512&width=1170&height=756 512w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=1024&width=1170&height=756 1024w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756 1170w`,
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
                                        sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                        src: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756`,
                                        srcSet: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=512&width=1170&height=756 512w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=1024&width=1170&height=756 1024w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756 1170w`,
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
                                        sizes: `max((${m?.width || `100vw`} - 120px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756`,
                                        srcSet: `https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=512&width=1170&height=756 512w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?scale-down-to=1024&width=1170&height=756 1024w,https://framerusercontent.com/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png?width=1170&height=756 1170w`,
                                      },
                                    },
                                  },
                                  children: o(x, {
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
                                    className: `framer-1tz296u framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: o(`div`, {
                                      className: `framer-nlbqo4`,
                                      "data-border": !0,
                                      children: a(`div`, {
                                        className: `framer-1obwo1j`,
                                        children: [
                                          o(_, {
                                            breakpoint: T,
                                            overrides: {
                                              SCkkeNSqb: {
                                                children: o(r, {
                                                  children: o(`p`, {
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
                                            children: o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
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
                                          o(_, {
                                            breakpoint: T,
                                            overrides: {
                                              oLTPyz34B: {
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
                                              SCkkeNSqb: {
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
                                            },
                                            children: o(v, {
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
                                              className: `framer-grg6rh`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(_, {
                                            breakpoint: T,
                                            overrides: {
                                              oLTPyz34B: {
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
                                                        children: `Q1 2026 - Q2 2026`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              SCkkeNSqb: {
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
                                                        children: `Q1 2026 - Q2 2026`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: o(v, {
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
                                          o(v, {
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
                                                    children: `Фокус: заменить неэффективные `,
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
                                                    children: `устаревшие процессы современным `,
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
                            o(`div`, {
                              className: `framer-125k893`,
                              children: o(_, {
                                breakpoint: T,
                                overrides: {
                                  oLTPyz34B: {
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
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: `Project Case Study`,
                                        }),
                                      }),
                                    }),
                                  },
                                  SCkkeNSqb: {
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
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: `Project Case Study`,
                                        }),
                                      }),
                                    }),
                                  },
                                  TtioI8JsX: {
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
                                          style: { "--framer-text-background-radius": `0px` },
                                          children: `Project Case Study`,
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: o(v, {
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
                                  className: `framer-1p7ao80`,
                                  fonts: [`GF;Stack Sans Headline-500`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            M() &&
                              o(`div`, { className: `framer-fb48da hidden-1lrzhwy hidden-klacin` }),
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
        `.framer-jIXvC.framer-197ogg6, .framer-jIXvC .framer-197ogg6 { display: block; }`,
        `.framer-jIXvC.framer-10aqqr8 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-jIXvC .framer-lr9rl3-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-jIXvC .framer-yhuj1y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 1864px; justify-content: flex-start; overflow: visible; padding: 24px 64px 64px 64px; position: relative; width: 1px; }`,
        `.framer-jIXvC .framer-1gf42oi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-jIXvC .framer-5vp5k6, .framer-jIXvC .framer-r1z4ru, .framer-jIXvC .framer-4w11nv, .framer-jIXvC .framer-d2q4xg, .framer-jIXvC .framer-1ihnugh, .framer-jIXvC .framer-vpbpgz, .framer-jIXvC .framer-18nepwx, .framer-jIXvC .framer-fjiyo, .framer-jIXvC .framer-m5lzkt, .framer-jIXvC .framer-iz8usq, .framer-jIXvC .framer-14ilrjw, .framer-jIXvC .framer-1xeriin, .framer-jIXvC .framer-1lf6r25, .framer-jIXvC .framer-1a3dosa, .framer-jIXvC .framer-11leisq, .framer-jIXvC .framer-grg6rh, .framer-jIXvC .framer-18ivu67, .framer-jIXvC .framer-139uija, .framer-jIXvC .framer-1p7ao80 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-jIXvC .framer-1ci7pyg, .framer-jIXvC .framer-1lq6x1x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jIXvC .framer-1kn9sho { aspect-ratio: 2.399449035812672 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-jIXvC .framer-1mus7e9, .framer-jIXvC .framer-c6w1qr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-jIXvC .framer-1ij1pp7 { --border-bottom-width: 0px; --border-color: rgba(0, 71, 64, 0.26); --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(53, 26, 0, 0.72), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(53, 26, 0, 0.64), 5px 10px 11.180339887498945px -3.75px rgba(53, 26, 0, 0.25); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-jIXvC .framer-1i447j9 { align-content: flex-end; align-items: flex-end; background-color: rgba(255, 255, 255, 0.3); border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 24px 28px 24px 24px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-h518s0 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jIXvC .framer-3hrxt { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jIXvC .framer-1r9hq6v { --border-bottom-width: 3px; --border-color: #f8edeb; --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-jIXvC .framer-1d3iass { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 48px 16px 48px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-15nxd1d { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(245, 245, 242, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 91.29539695945947%, rgba(163, 183, 203, 0.01) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jIXvC .framer-1a5yvf9 { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-1i0pr8i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-fcojeg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-jIXvC .framer-1ks9pv5, .framer-jIXvC .framer-u9yrnd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-jIXvC .framer-etp7m { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-jIXvC .framer-16wg2wh { --border-bottom-width: 5px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 5px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 20px 24px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-mbzsgl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-16aah55 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-cu42is { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-jIXvC .framer-lf2ng2 { --border-bottom-width: 1px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-jIXvC .framer-h00g12 { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 6px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 90%; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-jIXvC .framer-12su8lr { --border-bottom-width: 1px; --border-color: #f95f2b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 293px; }`,
        `.framer-jIXvC .framer-a7fzjf { --border-bottom-width: 1px; --border-color: #f8602b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-pab799 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 6px 0px; position: relative; width: 100%; }`,
        `.framer-jIXvC .framer-1tz296u { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 16px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-jIXvC .framer-nlbqo4 { --border-bottom-width: 6px; --border-color: #000000; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; align-content: flex-end; align-items: flex-end; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 24px 0px 20px 0px; position: relative; width: min-content; }`,
        `.framer-jIXvC .framer-1obwo1j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 16px 100px 24px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-jIXvC .framer-1b51asn { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jIXvC .framer-125k893 { align-content: center; align-items: center; background-color: #000000; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 42px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: 129px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 24px 10px 24px; position: absolute; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-jIXvC .framer-fb48da { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 16px 0px 0px 16px; position: relative; width: 1px; }`,
        ...j,
        ...de,
        ...O,
        ...me,
        ...L,
        `.framer-jIXvC[data-border="true"]::after, .framer-jIXvC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-jIXvC.framer-10aqqr8 { width: 1240px; } .framer-jIXvC .framer-lr9rl3-container { order: 0; } .framer-jIXvC .framer-yhuj1y { height: 1624px; order: 1; } .framer-jIXvC .framer-1i447j9 { flex: 1 0 0px; width: 1px; } .framer-jIXvC .framer-1d3iass { align-content: center; align-items: center; padding: 16px; } .framer-jIXvC .framer-15nxd1d { background: radial-gradient(50% 50% at 50% 50%, rgba(242, 244, 245, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 91.29539695945947%, rgba(163, 183, 203, 0.03) 100%); padding: 0px; } .framer-jIXvC .framer-16wg2wh { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-jIXvC .framer-h00g12 { height: 90%; padding: 16px 24px 16px 32px; width: 80%; } .framer-jIXvC .framer-12su8lr { gap: 0px; width: min-content; } .framer-jIXvC .framer-1lq6x1x { white-space: pre; width: auto; } .framer-jIXvC .framer-pab799 { justify-content: flex-start; } .framer-jIXvC .framer-u9yrnd { align-content: flex-start; align-items: flex-start; flex: none; justify-content: flex-start; width: min-content; } .framer-jIXvC .framer-1tz296u { flex: none; height: 260px; padding: 0px 16px 4px 0px; width: 403px; } .framer-jIXvC .framer-nlbqo4 { --border-bottom-width: 5px; --border-left-width: 5px; --border-right-width: 5px; --border-top-width: 5px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); padding: 0px 0px 20px 0px; } .framer-jIXvC .framer-1obwo1j { padding: 16px 16px 61px 24px; } .framer-jIXvC .framer-125k893 { bottom: 25px; left: 147px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-jIXvC.framer-10aqqr8 { flex-direction: column; width: 810px; } .framer-jIXvC .framer-lr9rl3-container { height: auto; order: 0; width: 100%; } .framer-jIXvC .framer-yhuj1y { flex: none; gap: 24px; height: 1645px; order: 1; padding: 32px 48px 64px 48px; width: 100%; } .framer-jIXvC .framer-1d3iass { padding: 16px 24px 16px 48px; } .framer-jIXvC .framer-16wg2wh { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-jIXvC .framer-h00g12 { padding: 16px 24px 16px 32px; } .framer-jIXvC .framer-12su8lr { width: min-content; } .framer-jIXvC .framer-1lq6x1x { white-space: pre; width: auto; } .framer-jIXvC .framer-u9yrnd { align-content: flex-start; align-items: flex-start; justify-content: flex-start; } .framer-jIXvC .framer-125k893 { bottom: 34px; left: 75px; padding: 10px 32px 10px 32px; } .framer-jIXvC .framer-fb48da { align-self: unset; height: min-content; min-height: 222px; }}`,
        `@media (max-width: 809.98px) { .framer-jIXvC.framer-10aqqr8 { flex-direction: column; width: 390px; } .framer-jIXvC .framer-lr9rl3-container { height: auto; order: 0; width: 100%; } .framer-jIXvC .framer-yhuj1y { flex: none; gap: 16px; order: 1; padding: 24px; width: 100%; } .framer-jIXvC .framer-1mus7e9, .framer-jIXvC .framer-c6w1qr { flex-direction: column; gap: 16px; } .framer-jIXvC .framer-1ij1pp7, .framer-jIXvC .framer-1r9hq6v, .framer-jIXvC .framer-1ks9pv5, .framer-jIXvC .framer-cu42is, .framer-jIXvC .framer-u9yrnd { flex: none; width: 100%; } .framer-jIXvC .framer-1i447j9 { padding: 24px; } .framer-jIXvC .framer-3hrxt { align-content: center; align-items: center; padding: 16px; } .framer-jIXvC .framer-1d3iass { padding: 16px 24px 16px 48px; } .framer-jIXvC .framer-16wg2wh { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-jIXvC .framer-h00g12 { height: min-content; padding: 16px 24px 16px 32px; } .framer-jIXvC .framer-12su8lr { align-self: stretch; width: auto; } .framer-jIXvC .framer-pab799 { flex-direction: column; } .framer-jIXvC .framer-nlbqo4 { height: 200px; justify-content: flex-start; padding: 24px 12px 20px 0px; } .framer-jIXvC .framer-1obwo1j { align-content: center; align-items: center; justify-content: flex-start; padding: 0px 0px 24px 12px; } .framer-jIXvC .framer-125k893 { bottom: unset; left: 75px; padding: 8px 38px 8px 38px; top: 161px; }}`,
      ],
      `framer-jIXvC`
    )),
    (Q.displayName = `Portfolio`),
    (Q.defaultProps = { height: 1864, width: 1440 }),
    C(
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
        ...y(E),
        ...y(T),
        ...y(M),
        ...y(he),
        ...y(B),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => m([() => w(k, {}, t)], t) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerv0NP7rg_A`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oLTPyz34B":{"layout":["fixed","auto"]},"TtioI8JsX":{"layout":["fixed","auto"]},"SCkkeNSqb":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerIntrinsicHeight: `1864`,
            framerIntrinsicWidth: `1440`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=zy00uHQhc6HoW3ybkE7f3iQluKBPefGONhsvr_iJDQE.0uZWLw_U.mjs.map
