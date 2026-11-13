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
  y as te,
} from "./react.B4lOa1lM.mjs";
import { S as l, a as ne, r as re, t as u } from "./motion.CcP9hEf_.mjs";
import {
  $ as ie,
  A as d,
  F as f,
  O as ae,
  Q as oe,
  S as p,
  W as m,
  X as se,
  _ as h,
  a as g,
  b as _,
  ct as v,
  f as y,
  k as b,
  l as x,
  m as S,
  n as ce,
  nt as le,
  rt as ue,
  s as C,
  t as de,
  tt as w,
} from "./framer.DkH54azp.mjs";
import {
  c as T,
  d as fe,
  f as E,
  l as pe,
  m as D,
  n as O,
  p as k,
  s as me,
  t as A,
  u as j,
} from "./A9Wi3tJm7.DxAh4jTX.mjs";
import {
  a as he,
  c as M,
  i as N,
  n as P,
  o as F,
  r as I,
  s as L,
  t as ge,
} from "./U3NyadGC3.D4-KMvY1.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./rHJW28QP9.DPhSi4SB.mjs";
import { n as xe, r as Se } from "./v0NP7rg_A.DwginMh-.mjs";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (c(),
      f(),
      u(),
      n(),
      O(),
      D(),
      j(),
      _e(),
      M(),
      N(),
      xe(),
      (R = ae(A)),
      (z = {
        oLTPyz34B: `(min-width: 1240px) and (max-width: 1439.98px)`,
        SCkkeNSqb: `(max-width: 809.98px)`,
        TtioI8JsX: `(min-width: 810px) and (max-width: 1239.98px)`,
        Ug3rjEteN: `(min-width: 1440px)`,
      }),
      (B = () => typeof document < `u`),
      (V = []),
      (H = `framer-JPppJ`),
      (U = {
        oLTPyz34B: `framer-v-1lrzhwy`,
        SCkkeNSqb: `framer-v-klacin`,
        TtioI8JsX: `framer-v-mz7iub`,
        Ug3rjEteN: `framer-v-10aqqr8`,
      }),
      (W = (e, t, n) => (e && t ? `position` : n)),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (K = { Desktop: `Ug3rjEteN`, Laptop: `oLTPyz34B`, Phone: `SCkkeNSqb`, Tablet: `TtioI8JsX` }),
      (q = ({ value: e }) =>
        w()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `Ug3rjEteN`,
      })),
      (Y = /*#__PURE__*/ s(function (e, n) {
        let s = te(null),
          c = n ?? s;
        ee();
        let { activeLocale: u, contentLocale: f, setLocale: ae } = le(),
          p = se(),
          { style: m, className: h, layoutId: v, variant: b, ...w } = J(e),
          T = t(() => Se({}, f), [f]);
        ue(T);
        let [E, pe] = ie(b, z, !1),
          D = _(H, ge, fe, me, be, he),
          O = i(g)?.isLayoutTemplate,
          k = !!i(ne)?.transition?.layout,
          j = W(O, k),
          M = () => !B() || E !== `SCkkeNSqb`,
          N = () => !B() || E === `SCkkeNSqb`;
        return (
          oe({}),
          /*#__PURE__*/ o(g.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: K,
              primaryVariantId: `Ug3rjEteN`,
              variantClassNames: U,
            },
            children: /*#__PURE__*/ a(re, {
              id: v ?? `v0NP7rg_A`,
              children: [
                /*#__PURE__*/ o(q, { value: `html body { background: rgb(253, 251, 248); }` }),
                /*#__PURE__*/ a(l.div, {
                  ...w,
                  className: _(D, `framer-10aqqr8`, h),
                  ref: c,
                  style: { ...m },
                  children: [
                    /*#__PURE__*/ o(y, {
                      breakpoint: E,
                      overrides: {
                        SCkkeNSqb: { height: 800, width: p?.width || `100vw` },
                        TtioI8JsX: { height: 800, width: p?.width || `100vw` },
                      },
                      children: /*#__PURE__*/ o(de, {
                        height: 1e3,
                        y: p?.y || 0,
                        children: /*#__PURE__*/ o(ce, {
                          className: `framer-lr9rl3-container`,
                          layout: j,
                          nodeId: `B3XgXr2fB`,
                          scopeId: `v0NP7rg_A`,
                          children: /*#__PURE__*/ o(y, {
                            breakpoint: E,
                            overrides: {
                              SCkkeNSqb: { style: { width: `100%` }, variant: G(`XJ7hq0Zpp`) },
                              TtioI8JsX: { style: { width: `100%` }, variant: G(`YCYFEcIjL`) },
                            },
                            children: /*#__PURE__*/ o(A, {
                              height: `100%`,
                              id: `B3XgXr2fB`,
                              layoutId: `B3XgXr2fB`,
                              style: { height: `100%` },
                              variant: G(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ a(l.div, {
                      className: `framer-yhuj1y`,
                      id: `yhuj1y`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ o(`div`, {
                          className: `framer-1gf42oi`,
                          children: /*#__PURE__*/ o(S, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ o(r, {
                              children: /*#__PURE__*/ o(`h1`, {
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
                        /*#__PURE__*/ o(y, {
                          breakpoint: E,
                          overrides: {
                            SCkkeNSqb: {
                              children: /*#__PURE__*/ a(r, {
                                children: [
                                  /*#__PURE__*/ o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Последние несколько лет я работаю в Optum (технологическое подразделение UnitedHealth Group), где создаю решения для одной из крупнейших медицинских экосистем США, объединяющей более 2 400 страховых организаций и сотни тысяч медицинских учреждений.`,
                                  }),
                                  /*#__PURE__*/ o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Я специализируюсь на модернизации сложных цифровых продуктов: проектировании масштабируемых интерфейсов, оптимизации рабочих процессов, интеграции AI-решений и автоматизации, а также развитии информационной архитектуры и дизайн-систем. В основе моего подхода лежат глубокое исследование пользователей, системное мышление и тесное сотрудничество с бизнесом и командами разработки — это позволяет создавать решения, которые одновременно отвечают потребностям пользователей и поддерживают достижение бизнес-целей.`,
                                  }),
                                  /*#__PURE__*/ o(`p`, {
                                    className: `framer-styles-preset-12u88cl`,
                                    "data-styles-preset": `HftgEsO0a`,
                                    dir: `auto`,
                                    children: `Ниже представленa подборка ключевых проектов.`,
                                  }),
                                ],
                              }),
                            },
                          },
                          children: /*#__PURE__*/ o(S, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ a(r, {
                              children: [
                                /*#__PURE__*/ o(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Последние несколько лет я работаю в Optum (технологическое подразделение UnitedHealth Group), где создаю решения для одной из крупнейших медицинских экосистем США, объединяющей более 2 400 страховых организаций и сотни тысяч медицинских учреждений.`,
                                }),
                                /*#__PURE__*/ o(`p`, {
                                  className: `framer-styles-preset-12u88cl`,
                                  "data-styles-preset": `HftgEsO0a`,
                                  dir: `auto`,
                                  children: `Я специализируюсь на модернизации сложных цифровых продуктов: проектировании масштабируемых интерфейсов, оптимизации рабочих процессов, интеграции AI-решений и автоматизации, а также развитии информационной архитектуры и дизайн-систем. В основе моего подхода лежат глубокое исследование пользователей, системное мышление и тесное сотрудничество с бизнесом и командами разработки — это позволяет создавать решения, которые одновременно отвечают потребностям пользователей и поддерживают достижение бизнес-целей.`,
                                }),
                                /*#__PURE__*/ o(`p`, {
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
                          /*#__PURE__*/ o(y, {
                            breakpoint: E,
                            overrides: {
                              oLTPyz34B: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 716,
                                  intrinsicWidth: 1672,
                                  loading: d((p?.y || 0) + 535.7),
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
                                  loading: d((p?.y || 0) + 1327.7),
                                  pixelHeight: 716,
                                  pixelWidth: 1672,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                  src: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png`,
                                  srcSet: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-038e36.png 512w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-55970f.png 1024w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png 1672w`,
                                },
                              },
                            },
                            children: /*#__PURE__*/ o(C, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 716,
                                intrinsicWidth: 1672,
                                loading: d((p?.y || 0) + 535.7),
                                pixelHeight: 716,
                                pixelWidth: 1672,
                                src: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png`,
                                srcSet: `../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-038e36.png 512w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE-55970f.png 1024w,../../assets/images/BaA12wu4PBQAJ94uG3WFGgrX2TE.png 1672w`,
                              },
                              className: `framer-1kn9sho hidden-klacin`,
                            }),
                          }),
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-1mus7e9`,
                          children: [
                            /*#__PURE__*/ o(x, {
                              href: { webPageId: `AgTyDC1r5` },
                              motionChild: !0,
                              nodeId: `Fkn8yqr1R`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: /*#__PURE__*/ o(y, {
                                breakpoint: E,
                                overrides: {
                                  oLTPyz34B: {
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 971.7),
                                      pixelHeight: 1490,
                                      pixelWidth: 2254,
                                      positionX: `center`,
                                      positionY: `center`,
                                      src: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png`,
                                      srcSet: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-6ef04b.png 512w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-decfae.png 1024w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png 2048w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png 2254w`,
                                    },
                                  },
                                  SCkkeNSqb: {
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 1303.7),
                                      pixelHeight: 1490,
                                      pixelWidth: 2254,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc(${p?.width || `100vw`} - 48px)`,
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
                                      loading: d((p?.y || 0) + 1686.7),
                                      pixelHeight: 1490,
                                      pixelWidth: 2254,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `max((${p?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png`,
                                      srcSet: `../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-6ef04b.png 512w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-decfae.png 1024w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ.png 2048w,../../assets/images/bSof4SRuXBqsa9yYjuWWGqdg1gQ-f50ab9.png 2254w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ o(C, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `stretch`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    loading: d((p?.y || 0) + 574.9044),
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
                                  children: /*#__PURE__*/ o(y, {
                                    breakpoint: E,
                                    overrides: {
                                      oLTPyz34B: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: d((p?.y || 0) + 997.1),
                                          pixelHeight: 527,
                                          pixelWidth: 576,
                                          src: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png`,
                                          srcSet: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE-6670b1.png 512w,../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png 576w`,
                                        },
                                      },
                                      SCkkeNSqb: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: d((p?.y || 0) + 1349.1),
                                          pixelHeight: 527,
                                          pixelWidth: 576,
                                          src: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png`,
                                          srcSet: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE-6670b1.png 512w,../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png 576w`,
                                        },
                                      },
                                      TtioI8JsX: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: d((p?.y || 0) + 1721.1),
                                          pixelHeight: 527,
                                          pixelWidth: 576,
                                          src: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png`,
                                          srcSet: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE-6670b1.png 512w,../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png 576w`,
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ o(C, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: d((p?.y || 0) + 661.3044),
                                        pixelHeight: 527,
                                        pixelWidth: 576,
                                        src: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png`,
                                        srcSet: `../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE-6670b1.png 512w,../../assets/images/YTQaRxftptwLQGJXjNvC95u4PE.png 576w`,
                                      },
                                      className: `framer-1d3iass`,
                                      children: /*#__PURE__*/ a(`div`, {
                                        className: `framer-15nxd1d`,
                                        children: [
                                          /*#__PURE__*/ o(`div`, {
                                            className: `framer-1a5yvf9`,
                                            "data-border": !0,
                                            children: /*#__PURE__*/ o(y, {
                                              breakpoint: E,
                                              overrides: {
                                                SCkkeNSqb: {
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`h2`, {
                                                      className: `framer-styles-preset-qvrn1k`,
                                                      "data-styles-preset": `ksQr_zVQP`,
                                                      dir: `auto`,
                                                      children: `Enrollments`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`h2`, {
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
                                          /*#__PURE__*/ a(`div`, {
                                            className: `framer-1i0pr8i`,
                                            children: [
                                              /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: /*#__PURE__*/ o(`strong`, {
                                                      children: `Sr. Product Designer, Team Lead`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-18nepwx`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(52, 26, 0)`,
                                                    },
                                                    children: /*#__PURE__*/ o(`strong`, {
                                                      children: `Q1 2025 - Present`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-fjiyo`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ a(r, {
                                                  children: [
                                                    /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                      },
                                                      children: /*#__PURE__*/ o(`strong`, {
                                                        children: `Фокус: модернизация `,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                      },
                                                      children: /*#__PURE__*/ o(`strong`, {
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
                            }),
                            M() &&
                              /*#__PURE__*/ o(x, {
                                href: { webPageId: `ZZVh6lBF_` },
                                motionChild: !0,
                                nodeId: `tWZWCW5K7`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: /*#__PURE__*/ o(y, {
                                  breakpoint: E,
                                  overrides: {
                                    oLTPyz34B: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 756,
                                        intrinsicWidth: 1170,
                                        loading: d((p?.y || 0) + 930.7),
                                        pixelHeight: 756,
                                        pixelWidth: 1170,
                                        src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                        srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                      },
                                      fitImageDimension: void 0,
                                    },
                                    TtioI8JsX: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 756,
                                        intrinsicWidth: 1170,
                                        loading: d((p?.y || 0) + 1686.7),
                                        pixelHeight: 756,
                                        pixelWidth: 1170,
                                        sizes: `max((${p?.width || `100vw`} - 128px) / 2, 1px)`,
                                        src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                        srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                      },
                                      fitImageDimension: void 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ o(C, {
                                    as: `a`,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 756,
                                      intrinsicWidth: 1170,
                                      loading: d((p?.y || 0) + 567.9044),
                                      pixelHeight: 756,
                                      pixelWidth: 1170,
                                      src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                      srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                    },
                                    className: `framer-llnk2a hidden-klacin framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    fitImageDimension: `height`,
                                    children: /*#__PURE__*/ o(`div`, {
                                      className: `framer-h1e7e3`,
                                      "data-border": !0,
                                      children: /*#__PURE__*/ a(`div`, {
                                        className: `framer-1cgdcj2`,
                                        children: [
                                          /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`p`, {
                                                dir: `auto`,
                                                style: { "--framer-font-size": `21px` },
                                                children: `AI-Enabled Form Mapping Tool`,
                                              }),
                                            }),
                                            className: `framer-1kiiduj`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ o(y, {
                                            breakpoint: E,
                                            overrides: {
                                              oLTPyz34B: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: /*#__PURE__*/ o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: /*#__PURE__*/ o(`strong`, {
                                                        children: `Sr. Prod./UX Designer`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`strong`, {
                                                    children: `Sr. Product Designer`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-12rhvkw`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(y, {
                                            breakpoint: E,
                                            overrides: {
                                              oLTPyz34B: {
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                      "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                      "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.8)`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgb(51, 26, 0)`,
                                                    },
                                                    children: /*#__PURE__*/ o(`mark`, {
                                                      style: {
                                                        "--framer-text-background-radius": `0px`,
                                                      },
                                                      children: /*#__PURE__*/ o(`strong`, {
                                                        children: `Q1 2026 - Q2 2026`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: /*#__PURE__*/ o(`strong`, {
                                                      children: `Q1 2026 - Q2 2026`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-xq43kj`,
                                              fonts: [
                                                `GF;Stack Sans Text-regular`,
                                                `GF;Stack Sans Text-700`,
                                              ],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ a(r, {
                                              children: [
                                                /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `Фокус: заменить неэффективные `,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `устаревшие процессы современным `,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `инструментом.`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            className: `framer-1yszbda`,
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
                            N() &&
                              /*#__PURE__*/ o(x, {
                                href: { webPageId: `ZZVh6lBF_` },
                                motionChild: !0,
                                nodeId: `Ijb2AEwDq`,
                                openInNewTab: !1,
                                scopeId: `v0NP7rg_A`,
                                children: /*#__PURE__*/ o(y, {
                                  breakpoint: E,
                                  overrides: {
                                    SCkkeNSqb: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 756,
                                        intrinsicWidth: 1170,
                                        loading: d((p?.y || 0) + 1545.7),
                                        pixelHeight: 756,
                                        pixelWidth: 1170,
                                        sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                        src: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png`,
                                        srcSet: `../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c1a94e.png 512w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0-c54dc0.png 1024w,../../assets/images/hMurWJ6mgwPm1PGai2DHBMAOV0.png 1170w`,
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ o(C, {
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
                                    className: `framer-fi5jf2 hidden-10aqqr8 hidden-1lrzhwy hidden-mz7iub framer-197ogg6`,
                                    "data-border": !0,
                                    "data-framer-name": `Image002`,
                                    children: /*#__PURE__*/ o(`div`, {
                                      className: `framer-1ll7wcy`,
                                      "data-border": !0,
                                      children: /*#__PURE__*/ a(`div`, {
                                        className: `framer-nj5ioa`,
                                        children: [
                                          /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`p`, {
                                                dir: `auto`,
                                                style: { "--framer-font-size": `21px` },
                                                children: `AI-Enabled Form Mapping Tool`,
                                              }),
                                            }),
                                            className: `framer-rs0jww`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(51, 26, 0)`,
                                                },
                                                children: /*#__PURE__*/ o(`strong`, {
                                                  children: `Sr. Product Designer`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-1tbyowv`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                  "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.9)`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgb(51, 26, 0)`,
                                                },
                                                children: /*#__PURE__*/ o(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: /*#__PURE__*/ o(`strong`, {
                                                    children: `Q1 2026 - Q2 2026`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-14lv18m`,
                                            fonts: [
                                              `GF;Stack Sans Text-regular`,
                                              `GF;Stack Sans Text-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ a(r, {
                                              children: [
                                                /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `Фокус: заменить неэффективные `,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `устаревшие процессы современным `,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                    "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.7)`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgb(51, 26, 0)`,
                                                  },
                                                  children: /*#__PURE__*/ o(`mark`, {
                                                    style: {
                                                      "--framer-text-background-radius": `0px`,
                                                    },
                                                    children: `инструментом.`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            className: `framer-131kazs`,
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
                          ],
                        }),
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-nfbqbe`,
                          children: [
                            /*#__PURE__*/ o(x, {
                              href: { webPageId: `TfvKxublX` },
                              motionChild: !0,
                              nodeId: `SLVBVSe7v`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: /*#__PURE__*/ o(y, {
                                breakpoint: E,
                                overrides: {
                                  oLTPyz34B: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 1250.7),
                                      pixelHeight: 1664,
                                      pixelWidth: 2560,
                                      src: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png`,
                                      srcSet: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-c76a97.png 512w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-fc7ca1.png 1024w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM.png 2048w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png 2560w`,
                                    },
                                  },
                                  SCkkeNSqb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 1851.1),
                                      pixelHeight: 1664,
                                      pixelWidth: 2560,
                                      sizes: `calc(${p?.width || `100vw`} - 48px)`,
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
                                      loading: d((p?.y || 0) + 1925.7),
                                      pixelHeight: 1664,
                                      pixelWidth: 2560,
                                      sizes: `max((${p?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png`,
                                      srcSet: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-c76a97.png 512w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-fc7ca1.png 1024w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM.png 2048w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png 2560w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ o(C, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    loading: d((p?.y || 0) + 880.9044),
                                    pixelHeight: 1664,
                                    pixelWidth: 2560,
                                    src: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png`,
                                    srcSet: `../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-c76a97.png 512w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-fc7ca1.png 1024w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM.png 2048w,../../assets/images/82hktWvz1Cnyh8TUu4ggHad3AM-dcfc6b.png 2560w`,
                                  },
                                  className: `framer-5dzw3v framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: /*#__PURE__*/ o(y, {
                                    breakpoint: E,
                                    overrides: {
                                      oLTPyz34B: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: d((p?.y || 0) + 1250.7),
                                          pixelHeight: 629,
                                          pixelWidth: 1281,
                                          src: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png`,
                                          srcSet: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-e9f2a6.png 512w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-476ba2.png 1024w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png 1281w`,
                                        },
                                      },
                                      SCkkeNSqb: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: d((p?.y || 0) + 1888.5),
                                          pixelHeight: 629,
                                          pixelWidth: 1281,
                                          src: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png`,
                                          srcSet: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-e9f2a6.png 512w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-476ba2.png 1024w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png 1281w`,
                                        },
                                      },
                                      TtioI8JsX: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: d((p?.y || 0) + 1963.1),
                                          pixelHeight: 629,
                                          pixelWidth: 1281,
                                          src: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png`,
                                          srcSet: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-e9f2a6.png 512w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-476ba2.png 1024w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png 1281w`,
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ a(C, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: d((p?.y || 0) + 969.3044),
                                        pixelHeight: 629,
                                        pixelWidth: 1281,
                                        src: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png`,
                                        srcSet: `../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-e9f2a6.png 512w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU-476ba2.png 1024w,../../assets/images/x98HIPsNGyZxxo8GSYqCjmsTdOU.png 1281w`,
                                      },
                                      className: `framer-2tai82`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-guvpb9`,
                                          children: /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`h2`, {
                                                className: `framer-styles-preset-qvrn1k`,
                                                "data-styles-preset": `ksQr_zVQP`,
                                                dir: `auto`,
                                                children: `RTS`,
                                              }),
                                            }),
                                            className: `framer-17fvg4o`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-1l6yaki`,
                                          children: [
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: `Sr. Product/UX Designer`,
                                                }),
                                              }),
                                              className: `framer-drdibl`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: `Q2 2025 - Q3 2025`,
                                                }),
                                              }),
                                              className: `framer-hp5n40`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ o(y, {
                                              breakpoint: E,
                                              overrides: {
                                                oLTPyz34B: {
                                                  children: /*#__PURE__*/ a(r, {
                                                    children: [
                                                      /*#__PURE__*/ o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `Фокус: архитектура `,
                                                      }),
                                                      /*#__PURE__*/ o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                                        },
                                                        children: `интерфейса и `,
                                                      }),
                                                      /*#__PURE__*/ o(`p`, {
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
                                              children: /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ a(r, {
                                                  children: [
                                                    /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(0, 0, 0)`,
                                                      },
                                                      children: `Фокус: архитектура интерфейса и `,
                                                    }),
                                                    /*#__PURE__*/ o(`p`, {
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
                                                className: `framer-advb46`,
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
                            /*#__PURE__*/ o(x, {
                              href: { webPageId: `yNWqB1Ufr` },
                              motionChild: !0,
                              nodeId: `nowFWgOPV`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: /*#__PURE__*/ o(y, {
                                breakpoint: E,
                                overrides: {
                                  oLTPyz34B: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 1251.2),
                                      pixelHeight: 1194,
                                      pixelWidth: 1846,
                                      positionX: `center`,
                                      positionY: `center`,
                                      src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                      srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                    },
                                  },
                                  SCkkeNSqb: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 2089.1),
                                      pixelHeight: 1194,
                                      pixelWidth: 1846,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc(${p?.width || `100vw`} - 48px)`,
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
                                      loading: d((p?.y || 0) + 1926.2),
                                      pixelHeight: 1194,
                                      pixelWidth: 1846,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `max((${p?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                      srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ o(C, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    loading: d((p?.y || 0) + 881.9044),
                                    pixelHeight: 1194,
                                    pixelWidth: 1846,
                                    positionX: `center`,
                                    positionY: `center`,
                                    src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                    srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                  },
                                  className: `framer-2vr6q1 framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: /*#__PURE__*/ o(y, {
                                    breakpoint: E,
                                    overrides: {
                                      oLTPyz34B: {
                                        href: { webPageId: `yNWqB1Ufr` },
                                        openInNewTab: !1,
                                      },
                                    },
                                    children: /*#__PURE__*/ o(x, {
                                      motionChild: !0,
                                      nodeId: `ieSn7bvGy`,
                                      scopeId: `v0NP7rg_A`,
                                      children: /*#__PURE__*/ a(l.a, {
                                        className: `framer-1yh53z5 framer-197ogg6`,
                                        children: [
                                          /*#__PURE__*/ o(`div`, {
                                            className: `framer-153vo3g`,
                                            children: /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: /*#__PURE__*/ o(`strong`, {
                                                    children: `Customer Connect Hub`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-hdr0s4`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ a(`div`, {
                                            className: `framer-r269wp`,
                                            "data-border": !0,
                                            children: [
                                              /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: `Sr. Product Designer, Team Lead`,
                                                  }),
                                                }),
                                                className: `framer-xcb424`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ o(r, {
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(18, 0, 0)`,
                                                    },
                                                    children: `Q4 2025 - Present`,
                                                  }),
                                                }),
                                                className: `framer-1qperx4`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ a(r, {
                                                  children: [
                                                    /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(18, 0, 0)`,
                                                      },
                                                      children: `Фокус: архитектура `,
                                                    }),
                                                    /*#__PURE__*/ o(`p`, {
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
                                                className: `framer-7wjrt5`,
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
                          ],
                        }),
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-z9yd9a`,
                          children: [
                            /*#__PURE__*/ o(x, {
                              href: { webPageId: `QijvxGXqd` },
                              motionChild: !0,
                              nodeId: `F4IIi560Y`,
                              openInNewTab: !1,
                              scopeId: `v0NP7rg_A`,
                              children: /*#__PURE__*/ o(y, {
                                breakpoint: E,
                                overrides: {
                                  oLTPyz34B: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 1504.2),
                                      pixelHeight: 1488,
                                      pixelWidth: 2644,
                                      positionX: `left`,
                                      positionY: `top`,
                                      src: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png`,
                                      srcSet: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-67b95e.png 512w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-c106d3.png 1024w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png 2048w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png 2644w`,
                                    },
                                  },
                                  SCkkeNSqb: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 875,
                                      intrinsicWidth: 1397,
                                      loading: d((p?.y || 0) + 2326.1),
                                      pixelHeight: 1488,
                                      pixelWidth: 2644,
                                      positionX: `left`,
                                      positionY: `top`,
                                      sizes: `calc(${p?.width || `100vw`} - 48px)`,
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
                                      loading: d((p?.y || 0) + 2186.2),
                                      pixelHeight: 1488,
                                      pixelWidth: 2644,
                                      positionX: `left`,
                                      positionY: `top`,
                                      sizes: `max((${p?.width || `100vw`} - 128px) / 2, 1px)`,
                                      src: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png`,
                                      srcSet: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-67b95e.png 512w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-c106d3.png 1024w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png 2048w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png 2644w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ o(C, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    loading: d((p?.y || 0) + 1203.4044),
                                    pixelHeight: 1488,
                                    pixelWidth: 2644,
                                    positionX: `left`,
                                    positionY: `top`,
                                    src: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png`,
                                    srcSet: `../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-67b95e.png 512w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-c106d3.png 1024w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA.png 2048w,../../assets/images/7sPAhkq9OaZaKdBNi8pOjkEZXA-33a593.png 2644w`,
                                  },
                                  className: `framer-1ohe48k framer-197ogg6`,
                                  "data-border": !0,
                                  "data-framer-name": `Image002`,
                                  fitImageDimension: `height`,
                                  children: /*#__PURE__*/ o(x, {
                                    href: { webPageId: `pVjAhsh5N` },
                                    motionChild: !0,
                                    nodeId: `k1VvByehs`,
                                    openInNewTab: !1,
                                    scopeId: `v0NP7rg_A`,
                                    children: /*#__PURE__*/ a(l.a, {
                                      className: `framer-1x389ry framer-197ogg6`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-csu1im`,
                                          "data-border": !0,
                                          children: /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`h3`, {
                                                className: `framer-styles-preset-bdezu4`,
                                                "data-styles-preset": `TWYWOtjjp`,
                                                dir: `auto`,
                                                children: /*#__PURE__*/ o(`strong`, {
                                                  children: `Data File Delivery`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-5sb9qr`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-f7bgcl`,
                                          "data-border": !0,
                                          children: [
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: /*#__PURE__*/ o(`strong`, {
                                                    children: `Sr. Product Designer`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-l4rgao`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: /*#__PURE__*/ o(`strong`, {
                                                    children: `Q4 2024 - Q1 2025`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-qpymwb`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ o(y, {
                                              breakpoint: E,
                                              overrides: {
                                                oLTPyz34B: {
                                                  children: /*#__PURE__*/ a(r, {
                                                    children: [
                                                      /*#__PURE__*/ o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: `Focus: net-new app `,
                                                      }),
                                                      /*#__PURE__*/ o(`p`, {
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
                                                  children: /*#__PURE__*/ a(r, {
                                                    children: [
                                                      /*#__PURE__*/ o(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.81)`,
                                                          "--framer-line-height": `1.4em`,
                                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                                        },
                                                        children: /*#__PURE__*/ o(`mark`, {
                                                          style: {
                                                            "--framer-text-background-radius": `0px`,
                                                          },
                                                          children: `Фокус: разработка нового `,
                                                        }),
                                                      }),
                                                      /*#__PURE__*/ o(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7U3RhY2sgU2FucyBUZXh0LXJlZ3VsYXI=`,
                                                          "--framer-font-family": `"Stack Sans Text", "Stack Sans Text Placeholder", sans-serif`,
                                                          "--framer-font-size": `calc(var(--framer-root-font-size, 1rem) * 0.81)`,
                                                          "--framer-line-height": `1.4em`,
                                                          "--framer-text-color": `rgb(51, 26, 0)`,
                                                        },
                                                        children: /*#__PURE__*/ o(`mark`, {
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
                                                  children: /*#__PURE__*/ a(r, {
                                                    children: [
                                                      /*#__PURE__*/ o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: /*#__PURE__*/ o(`strong`, {
                                                          children: `Focus: net-new app `,
                                                        }),
                                                      }),
                                                      /*#__PURE__*/ o(`p`, {
                                                        className: `framer-styles-preset-1504gar`,
                                                        "data-styles-preset": `rHJW28QP9`,
                                                        dir: `auto`,
                                                        children: /*#__PURE__*/ o(`strong`, {
                                                          children: `in 3 months`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                },
                                              },
                                              children: /*#__PURE__*/ o(S, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ a(r, {
                                                  children: [
                                                    /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      children: /*#__PURE__*/ o(`strong`, {
                                                        children: `Focus: net-new, function-first app `,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-1504gar`,
                                                      "data-styles-preset": `rHJW28QP9`,
                                                      dir: `auto`,
                                                      children: /*#__PURE__*/ o(`strong`, {
                                                        children: `in 3 months`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-tkopxf`,
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
                            /*#__PURE__*/ o(y, {
                              breakpoint: E,
                              overrides: {
                                oLTPyz34B: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    loading: d((p?.y || 0) + 1490.7),
                                    pixelHeight: 1194,
                                    pixelWidth: 1846,
                                    positionX: `center`,
                                    positionY: `center`,
                                    src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                    srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                  },
                                },
                                SCkkeNSqb: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 875,
                                    intrinsicWidth: 1397,
                                    loading: d((p?.y || 0) + 2534.1),
                                    pixelHeight: 1194,
                                    pixelWidth: 1846,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `calc(${p?.width || `100vw`} - 48px)`,
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
                                    loading: d((p?.y || 0) + 2171.7),
                                    pixelHeight: 1194,
                                    pixelWidth: 1846,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `max((${p?.width || `100vw`} - 128px) / 2, 1px)`,
                                    src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                    srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                  },
                                },
                              },
                              children: /*#__PURE__*/ o(C, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 875,
                                  intrinsicWidth: 1397,
                                  loading: d((p?.y || 0) + 1185.9044),
                                  pixelHeight: 1194,
                                  pixelWidth: 1846,
                                  positionX: `center`,
                                  positionY: `center`,
                                  src: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png`,
                                  srcSet: `../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-0aea27.png 512w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0-9acc7c.png 1024w,../../assets/images/JNg0ERRJlpczJZJ5QaJd9nnSH0.png 1846w`,
                                },
                                className: `framer-11uee11`,
                                "data-border": !0,
                                "data-framer-name": `Image002`,
                                fitImageDimension: `height`,
                                children: /*#__PURE__*/ o(y, {
                                  breakpoint: E,
                                  overrides: {
                                    oLTPyz34B: {
                                      href: { webPageId: `yNWqB1Ufr` },
                                      openInNewTab: !1,
                                    },
                                  },
                                  children: /*#__PURE__*/ o(x, {
                                    motionChild: !0,
                                    nodeId: `WEeUQChv2`,
                                    scopeId: `v0NP7rg_A`,
                                    children: /*#__PURE__*/ a(l.a, {
                                      className: `framer-130s6yk framer-197ogg6`,
                                      children: [
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-lnfcw9`,
                                          children: /*#__PURE__*/ o(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ o(r, {
                                              children: /*#__PURE__*/ o(`h3`, {
                                                className: `framer-styles-preset-bdezu4`,
                                                "data-styles-preset": `TWYWOtjjp`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                children: /*#__PURE__*/ o(`strong`, {
                                                  children: `Customer Connect Hub`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-ox518s`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-1h8bn4d`,
                                          "data-border": !0,
                                          children: [
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  children: `Sr. Product Designer, Team Lead`,
                                                }),
                                              }),
                                              className: `framer-1do0jtl`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
                                                  className: `framer-styles-preset-1504gar`,
                                                  "data-styles-preset": `rHJW28QP9`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(18, 0, 0)` },
                                                  children: `Q4 2025 - Present`,
                                                }),
                                              }),
                                              className: `framer-1gtxfhm`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ o(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ a(r, {
                                                children: [
                                                  /*#__PURE__*/ o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(18, 0, 0)`,
                                                    },
                                                    children: `Фокус: архитектура `,
                                                  }),
                                                  /*#__PURE__*/ o(`p`, {
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
                                              className: `framer-46j02b`,
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
        `.framer-JPppJ.framer-197ogg6, .framer-JPppJ .framer-197ogg6 { display: block; }`,
        `.framer-JPppJ.framer-10aqqr8 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-JPppJ .framer-lr9rl3-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-JPppJ .framer-yhuj1y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 1864px; justify-content: flex-start; overflow: visible; padding: 24px 64px 64px 64px; position: relative; width: 1px; }`,
        `.framer-JPppJ .framer-1gf42oi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JPppJ .framer-5vp5k6, .framer-JPppJ .framer-vpbpgz, .framer-JPppJ .framer-18nepwx, .framer-JPppJ .framer-fjiyo, .framer-JPppJ .framer-12rhvkw, .framer-JPppJ .framer-xq43kj, .framer-JPppJ .framer-1yszbda, .framer-JPppJ .framer-1tbyowv, .framer-JPppJ .framer-14lv18m, .framer-JPppJ .framer-131kazs, .framer-JPppJ .framer-17fvg4o, .framer-JPppJ .framer-drdibl, .framer-JPppJ .framer-hp5n40, .framer-JPppJ .framer-advb46, .framer-JPppJ .framer-hdr0s4, .framer-JPppJ .framer-xcb424, .framer-JPppJ .framer-1qperx4, .framer-JPppJ .framer-7wjrt5, .framer-JPppJ .framer-l4rgao, .framer-JPppJ .framer-qpymwb, .framer-JPppJ .framer-tkopxf, .framer-JPppJ .framer-ox518s, .framer-JPppJ .framer-1do0jtl, .framer-JPppJ .framer-1gtxfhm, .framer-JPppJ .framer-46j02b { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JPppJ .framer-1ci7pyg, .framer-JPppJ .framer-5sb9qr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JPppJ .framer-1kn9sho { aspect-ratio: 2.399449035812672 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-JPppJ .framer-1mus7e9, .framer-JPppJ .framer-nfbqbe, .framer-JPppJ .framer-z9yd9a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JPppJ .framer-1r9hq6v { --border-bottom-width: 3px; --border-color: #f8edeb; --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-JPppJ .framer-1d3iass { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-15nxd1d { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(245, 245, 242, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 91.29539695945947%, rgba(163, 183, 203, 0.01) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JPppJ .framer-1a5yvf9 { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-1i0pr8i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-fcojeg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JPppJ .framer-llnk2a { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 16px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-JPppJ .framer-h1e7e3 { --border-bottom-width: 6px; --border-color: #000000; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; align-content: flex-end; align-items: flex-end; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 24px 0px 20px 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-1cgdcj2, .framer-JPppJ .framer-nj5ioa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 16px 16px 24px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-JPppJ .framer-1kiiduj, .framer-JPppJ .framer-rs0jww { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JPppJ .framer-fi5jf2 { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 16px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-JPppJ .framer-1ll7wcy { --border-bottom-width: 6px; --border-color: #000000; --border-left-width: 6px; --border-right-width: 6px; --border-style: solid; --border-top-width: 6px; align-content: flex-end; align-items: flex-end; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 24px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-5dzw3v { --border-bottom-width: 3px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 3px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-JPppJ .framer-2tai82 { --border-bottom-width: 5px; --border-color: rgba(15, 0, 64, 0.14); --border-left-width: 1px; --border-right-width: 5px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 20px 24px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-guvpb9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-1l6yaki { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-2vr6q1 { --border-bottom-width: 0px; --border-color: rgba(0, 71, 64, 0.26); --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(53, 26, 0, 0.72), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(53, 26, 0, 0.64), 5px 10px 11.180339887498945px -3.75px rgba(53, 26, 0, 0.25); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-JPppJ .framer-1yh53z5, .framer-JPppJ .framer-130s6yk { align-content: flex-end; align-items: flex-end; background-color: rgba(255, 255, 255, 0.3); border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 24px 28px 24px 24px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-153vo3g, .framer-JPppJ .framer-lnfcw9 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JPppJ .framer-r269wp, .framer-JPppJ .framer-1h8bn4d { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JPppJ .framer-1ohe48k { --border-bottom-width: 1px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(0, 0, 0, 0.29), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(0, 0, 0, 0.25), 5px 10px 11.180339887498945px -3.75px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-JPppJ .framer-1x389ry { --border-bottom-width: 6px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 6px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 45px; border-top-right-radius: 45px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.2891039613230273px -1.25px rgba(0, 0, 0, 0.5), 1.1442666516217286px 2.288533303243457px 8.699437259201666px -2.5px rgba(0, 0, 0, 0.44), 5px 10px 38.01315561749642px -3.75px rgba(0, 0, 0, 0.18); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 90%; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-JPppJ .framer-csu1im { --border-bottom-width: 1px; --border-color: #f95f2b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 293px; }`,
        `.framer-JPppJ .framer-f7bgcl { --border-bottom-width: 1px; --border-color: #f8602b; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-JPppJ .framer-11uee11 { --border-bottom-width: 0px; --border-color: rgba(0, 71, 64, 0.26); --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0.3010936508871964px 0.6021873017743928px 0.6732658709773609px -1.25px rgba(53, 26, 0, 0.72), 1.1442666516217286px 2.288533303243457px 2.558658017412254px -2.5px rgba(53, 26, 0, 0.64), 5px 10px 11.180339887498945px -3.75px rgba(53, 26, 0, 0.25); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; opacity: 0; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        ...P,
        ...E,
        ...T,
        ...ve,
        ...F,
        `.framer-JPppJ[data-border="true"]::after, .framer-JPppJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-JPppJ.framer-10aqqr8 { width: 1240px; } .framer-JPppJ .framer-lr9rl3-container { order: 0; } .framer-JPppJ .framer-yhuj1y { height: 1624px; order: 1; } .framer-JPppJ .framer-1d3iass { align-content: center; align-items: center; padding: 16px; } .framer-JPppJ .framer-15nxd1d { background: radial-gradient(50% 50% at 50% 50%, rgba(242, 244, 245, 0.9) 3.5138654279279278%, rgba(230, 235, 235, 0.8) 38.83375563063063%, rgba(217, 225, 232, 0.7) 62%, rgba(217, 225, 232, 0.5) 91.29539695945947%, rgba(163, 183, 203, 0.03) 100%); padding: 0px; } .framer-JPppJ .framer-llnk2a { height: min-content; padding: 24px 16px 4px 0px; } .framer-JPppJ .framer-h1e7e3 { --border-bottom-width: 5px; --border-left-width: 5px; --border-right-width: 5px; --border-top-width: 5px; box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); padding: 0px 0px 20px 0px; } .framer-JPppJ .framer-1cgdcj2 { padding: 16px 16px 8px 24px; } .framer-JPppJ .framer-2tai82 { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-JPppJ .framer-1yh53z5, .framer-JPppJ .framer-130s6yk { flex: 1 0 0px; text-decoration: none; width: 1px; } .framer-JPppJ .framer-1x389ry { height: 90%; padding: 16px 24px 16px 32px; width: 80%; } .framer-JPppJ .framer-csu1im { gap: 0px; width: min-content; } .framer-JPppJ .framer-5sb9qr { white-space: pre; width: auto; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-JPppJ.framer-10aqqr8 { flex-direction: column; width: 810px; } .framer-JPppJ .framer-lr9rl3-container { height: auto; order: 0; width: 100%; } .framer-JPppJ .framer-yhuj1y { flex: none; gap: 24px; height: 1645px; order: 1; padding: 32px 48px 64px 48px; width: 100%; } .framer-JPppJ .framer-1d3iass { padding: 0px 24px 0px 16px; } .framer-JPppJ .framer-llnk2a { align-self: stretch; } .framer-JPppJ .framer-h1e7e3 { padding: 24px 0px 0px 0px; } .framer-JPppJ .framer-2tai82 { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-JPppJ .framer-1x389ry { padding: 16px 24px 16px 32px; } .framer-JPppJ .framer-csu1im { width: min-content; } .framer-JPppJ .framer-5sb9qr { white-space: pre; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-JPppJ.framer-10aqqr8 { flex-direction: column; width: 390px; } .framer-JPppJ .framer-lr9rl3-container { height: auto; order: 0; width: 100%; } .framer-JPppJ .framer-yhuj1y { flex: none; gap: 16px; order: 1; padding: 24px; width: 100%; } .framer-JPppJ .framer-1mus7e9, .framer-JPppJ .framer-nfbqbe, .framer-JPppJ .framer-z9yd9a { flex-direction: column; gap: 16px; } .framer-JPppJ .framer-1r9hq6v, .framer-JPppJ .framer-fi5jf2, .framer-JPppJ .framer-5dzw3v, .framer-JPppJ .framer-2vr6q1, .framer-JPppJ .framer-1ohe48k, .framer-JPppJ .framer-11uee11 { flex: none; width: 100%; } .framer-JPppJ .framer-1d3iass { padding: 0px 24px 0px 16px; } .framer-JPppJ .framer-2tai82 { box-shadow: 0.3010936508871964px 0.6021873017743928px 2.8277166581049165px -1.4166666666666665px rgba(0, 0, 0, 0.57), 1.1442666516217286px 2.288533303243457px 10.746363673131471px -2.833333333333333px rgba(0, 0, 0, 0.48), 5px 10px 46.95742752749558px -4.25px rgba(0, 0, 0, 0.11); } .framer-JPppJ .framer-1yh53z5, .framer-JPppJ .framer-130s6yk { padding: 24px; } .framer-JPppJ .framer-r269wp, .framer-JPppJ .framer-1h8bn4d { align-content: center; align-items: center; padding: 16px; } .framer-JPppJ .framer-1x389ry { height: min-content; padding: 16px 24px 16px 32px; } .framer-JPppJ .framer-csu1im { align-self: stretch; width: auto; }}`,
      ]),
      (Z = v(Y, X, `framer-JPppJ`)),
      (Z.displayName = `Portfolio`),
      (Z.defaultProps = { height: 1864, width: 1440 }),
      h(
        Z,
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
            ],
          },
          ...R,
          ...b(I),
          ...b(k),
          ...b(pe),
          ...b(ye),
          ...b(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => m([() => p(A, {}, t)], t) }),
      (Q = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framerv0NP7rg_A`,
            slots: [],
            annotations: {
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicWidth: `1440`,
              framerScrollSections: `false`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `false`,
              framerIntrinsicHeight: `1864`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oLTPyz34B":{"layout":["fixed","auto"]},"TtioI8JsX":{"layout":["fixed","auto"]},"SCkkeNSqb":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default, V as queryParamNames };
//# sourceMappingURL=85h_7_WhCxH8ySppZY8eUhlwNwLGP7LSogsJSSVYD8Q.B6gwkTWE.mjs.map
