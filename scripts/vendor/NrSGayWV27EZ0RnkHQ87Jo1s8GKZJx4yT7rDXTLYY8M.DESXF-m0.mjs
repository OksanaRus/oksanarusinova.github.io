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
import {
  a as le,
  c as A,
  d as ue,
  f as j,
  g as M,
  h as N,
  i as P,
  l as de,
  m as F,
  o as I,
  p as fe,
  r as L,
  s as R,
  u as z,
} from "./shared-lib.f3R8fmkt.mjs";
import {
  a as pe,
  c as B,
  i as me,
  n as he,
  o as ge,
  r as _e,
  s as ve,
  t as ye,
} from "./U3NyadGC3.BwBuOktC.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./rHJW28QP9.Bk1-6hy6.mjs";
import { n as we, t as V } from "./Video.KjNbylVS.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./FZfftxcm3.CWqNuFsn.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./SDQdvccR0.C-vUhudJ.mjs";
import Ne, { t as Pe } from "./Xzu-WFoj2PZqqknkGmPoIPYB_gqawF2lXuLBIoZbVnE.C01ikvHk.mjs";
var H, U, W, G, K, q, J, Y, X, Z, Q, Fe, $, Ie;
e(() => {
  (c(),
    ie(),
    d(),
    n(),
    we(),
    P(),
    Te(),
    M(),
    j(),
    be(),
    ke(),
    B(),
    me(),
    A(),
    Pe(),
    (H = f(L)),
    (U = f(V)),
    (W = {
      Eiw3s9tpl: `(min-width: 810px) and (max-width: 1239.98px)`,
      FSjZe4VEp: `(min-width: 1440px)`,
      qCCjwlnKz: `(min-width: 1240px) and (max-width: 1439.98px)`,
      wvoroQlI0: `(max-width: 809.98px)`,
    }),
    (G = () => typeof document < `u`),
    (K = []),
    (q = `framer-n30uR`),
    (J = {
      Eiw3s9tpl: `framer-v-3okwci`,
      FSjZe4VEp: `framer-v-1i3skto`,
      qCCjwlnKz: `framer-v-7dw4hc`,
      wvoroQlI0: `framer-v-8vtm7q`,
    }),
    (Y = (e, t, n) => (e && t ? `position` : n)),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `FSjZe4VEp`, Laptop: `qCCjwlnKz`, Phone: `wvoroQlI0`, Tablet: `Eiw3s9tpl` }),
    (Q = ({ value: e }) =>
      D()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Fe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `FSjZe4VEp`,
    })),
    ($ = _(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          d = ee(),
          { activeLocale: f, setLocale: ie } = se(),
          h = oe(),
          { style: _, className: S, layoutId: D, variant: O, ...k } = Fe(e);
        ce(t(() => Ne({}, f), [f]));
        let [A, ue] = re(O, W, !1),
          j = m(q, ye, Ce, le, de, fe, pe, Oe, Me),
          M = i(g)?.isLayoutTemplate,
          N = !!i(te)?.transition?.layout,
          P = Y(M, N),
          F = () => !G() || ![`Eiw3s9tpl`, `wvoroQlI0`].includes(A),
          I = x(`LVMJdOstt`),
          R = l(null),
          z = x(`vCiuHYrzF`),
          B = l(null);
        return (
          ae({}),
          o(g.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Z,
              primaryVariantId: `FSjZe4VEp`,
              variantClassNames: J,
            },
            children: a(ne, {
              id: D ?? d,
              children: [
                o(Q, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(u.div, {
                  ...k,
                  className: m(j, `framer-1i3skto`, S),
                  ref: c,
                  style: { ..._ },
                  children: [
                    o(v, {
                      breakpoint: A,
                      overrides: {
                        Eiw3s9tpl: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                        wvoroQlI0: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(E, {
                        height: 1e3,
                        y: (h?.y || 0) + 0,
                        children: o(w, {
                          className: `framer-u3trgt-container`,
                          layout: P,
                          nodeId: `a4QJE9N18`,
                          scopeId: `CuKpzzXMb`,
                          children: o(v, {
                            breakpoint: A,
                            overrides: {
                              Eiw3s9tpl: { style: { width: `100%` }, variant: X(`YCYFEcIjL`) },
                              wvoroQlI0: { style: { width: `100%` }, variant: X(`XJ7hq0Zpp`) },
                            },
                            children: o(L, {
                              height: `100%`,
                              id: `a4QJE9N18`,
                              layoutId: `a4QJE9N18`,
                              style: { height: `100%` },
                              variant: X(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1y03zrr`,
                      layout: P,
                      children: [
                        a(`div`, {
                          className: `framer-52iqh9`,
                          children: [
                            a(`div`, {
                              className: `framer-1pg1cca`,
                              children: [
                                o(`div`, {
                                  className: `framer-amssg5`,
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h1`, {
                                        className: `framer-styles-preset-p50exy`,
                                        "data-styles-preset": `U3NyadGC3`,
                                        dir: `auto`,
                                        children: `Enrollments`,
                                      }),
                                    }),
                                    className: `framer-1ef0q9u`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(C, {
                                  href: { webPageId: `v0NP7rg_A` },
                                  motionChild: !0,
                                  nodeId: `wRxqJgNiL`,
                                  openInNewTab: !1,
                                  scopeId: `CuKpzzXMb`,
                                  children: o(v, {
                                    breakpoint: A,
                                    overrides: {
                                      Eiw3s9tpl: { "data-border": !0 },
                                      wvoroQlI0: { "data-border": !0 },
                                    },
                                    children: o(u.a, {
                                      className: `framer-1vrmfus framer-zxhsvw`,
                                      "data-framer-name": `Button`,
                                      children: o(`div`, {
                                        className: `framer-1hhfafh`,
                                        children: o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Eiw3s9tpl: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                            wvoroQlI0: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            },
                                          },
                                          children: a(y, {
                                            className: `framer-1uhtioj`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              o(y, {
                                                className: `framer-jvub38`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              o(y, {
                                                className: `framer-r9sah0`,
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
                            F() &&
                              a(`div`, {
                                className: `framer-x5a884 hidden-3okwci hidden-8vtm7q`,
                                children: [
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-1504gar`,
                                        "data-styles-preset": `rHJW28QP9`,
                                        dir: `auto`,
                                        children: o(C, {
                                          href: { hash: `:LVMJdOstt`, webPageId: `CuKpzzXMb` },
                                          motionChild: !0,
                                          nodeId: `VBzs03YNz`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `CuKpzzXMb`,
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
                                    className: `framer-171esqw`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-1504gar`,
                                        "data-styles-preset": `rHJW28QP9`,
                                        dir: `auto`,
                                        children: o(C, {
                                          href: { hash: `:vCiuHYrzF`, webPageId: `CuKpzzXMb` },
                                          motionChild: !0,
                                          nodeId: `wIta22BWr`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `CuKpzzXMb`,
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
                                    className: `framer-wpmr0l`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        a(`div`, {
                          className: `framer-156gq9d`,
                          children: [
                            a(`div`, {
                              className: `framer-1tmwp29`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h2`, {
                                      className: `framer-styles-preset-qvrn1k`,
                                      "data-styles-preset": `ksQr_zVQP`,
                                      children: o(`strong`, { children: `Обзор проекта` }),
                                    }),
                                  }),
                                  className: `framer-1oa63k2`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: [
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Программа Enrollments — это сложная внутренняя легаси-система регистрации, изначально разработанная для онбординга медицинских провайдеров с крупнейшими страховыми компаниями США и обрабатывающая тысячи транзакций ежедневно. Её основная задача — подключение медицинских офисов к системам Optum, через которые провайдеры могут напрямую взаимодействовать с биллинговыми платформами страховщиков. Изначально система и инфраструктура Optum создавались исключительно для внутреннего использования и не предусматривали возможности самостоятельной настройки.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          `В 2025 году моей команде было поручено трансформировать этот инструмент в масштабируемый self-service портал: упростить и ускорить процесс настройки, чтобы медицинские провайдеры могли работать с системой самостоятельно или с минимальной поддержкой. `,
                                          o(`strong`, {
                                            children: `В результате нам удалось снизить количество обращений в поддержку, связанных с процессом регистрации, более чем на 40% в течение трёх месяцев после запуска.`,
                                          }),
                                        ],
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `В перспективе Enrollments будет развиваться в централизованную платформу с поддержкой ИИ для регистрации, конфигурации и дальнейшей поддержки пользователей во всех продуктах Optum.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-vzndje`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            o(b, {
                              __fromCanvasComponent: !0,
                              children: o(r, {
                                children: o(`h3`, {
                                  className: `framer-styles-preset-bdezu4`,
                                  "data-styles-preset": `TWYWOtjjp`,
                                  dir: `auto`,
                                  children: `Основные Макеты`,
                                }),
                              }),
                              className: `framer-1dtoqw9`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            o(`div`, {
                              className: `framer-13a3op1`,
                              children: a(`div`, {
                                className: `framer-1t3i4yu`,
                                children: [
                                  a(`div`, {
                                    className: `framer-14q9ty0`,
                                    children: [
                                      a(`div`, {
                                        className: `framer-1dgbvna`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              wvoroQlI0: {
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
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: o(`strong`, { children: `Landing` }),
                                                }),
                                              }),
                                              className: `framer-e188a9`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-az8xx5`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                Eiw3s9tpl: {
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
                                                        531.3 +
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
                                                qCCjwlnKz: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1736,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        158 +
                                                        0 +
                                                        547.3 +
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
                                                wvoroQlI0: {
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
                                                        507.3 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        244 -
                                                        244.0299
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
                                                      158 +
                                                      0 +
                                                      547.3 +
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
                                                className: `framer-121l6oa`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-xg50pm`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              wvoroQlI0: {
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
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: o(`strong`, {
                                                    children: `Submitter Main`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-chwn2p`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-hznsj8`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                Eiw3s9tpl: {
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
                                                        531.3 +
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
                                                wvoroQlI0: {
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
                                                        507.3 +
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
                                                      158 +
                                                      0 +
                                                      547.3 +
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
                                                className: `framer-tbxkmd`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-mj4kz`,
                                    children: [
                                      a(`div`, {
                                        className: `framer-1wns849`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              wvoroQlI0: {
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
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: o(`strong`, {
                                                    children: `Enrollments List`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-100ozaa`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-x1viao`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                Eiw3s9tpl: {
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
                                                        531.3 +
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
                                                qCCjwlnKz: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 1080,
                                                    intrinsicWidth: 1920,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        158 +
                                                        0 +
                                                        547.3 +
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
                                                wvoroQlI0: {
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
                                                        507.3 +
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
                                                      158 +
                                                      0 +
                                                      547.3 +
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
                                                className: `framer-12wu17z`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-atxhzt`,
                                        children: [
                                          o(v, {
                                            breakpoint: A,
                                            overrides: {
                                              wvoroQlI0: {
                                                children: o(r, {
                                                  children: o(`h6`, {
                                                    className: `framer-styles-preset-yhn7fw`,
                                                    "data-styles-preset": `SDQdvccR0`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: a(`strong`, {
                                                      children: [
                                                        `Основной режим `,
                                                        o(`br`, {}),
                                                        `редактирования`,
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h6`, {
                                                  className: `framer-styles-preset-1uytke0`,
                                                  "data-styles-preset": `FZfftxcm3`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                                  children: o(`strong`, {
                                                    children: `Основной экран редактирования`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-15d43ry`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-1fpk1e9`,
                                            children: o(v, {
                                              breakpoint: A,
                                              overrides: {
                                                Eiw3s9tpl: {
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
                                                        531.3 +
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
                                                qCCjwlnKz: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 737,
                                                    intrinsicWidth: 1312,
                                                    loading: p(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        158 +
                                                        0 +
                                                        547.3 +
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
                                                wvoroQlI0: {
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
                                                        507.3 +
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
                                                      158 +
                                                      0 +
                                                      547.3 +
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
                                                className: `framer-v1tuxv`,
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
                              className: `framer-ncx8zu`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: o(`strong`, { children: `Основная задача` }),
                                    }),
                                  }),
                                  className: `framer-sd8k9u`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      children: `У нас был год, чтобы постепенно трансформировать существующий сложный легаси-инструмент в современное и интуитивно понятное решение. Ключевой задачей было не просто упростить интерфейс, а сделать это поэтапно, аккуратно снижая уровень сложности без нарушения устоявшихся процессов. Программа используется ежедневно для управления тысячами подключений и является критически важной для операционной деятельности. Поэтому все обновления внедрялись последовательно, с максимальным сохранением функциональности.`,
                                    }),
                                  }),
                                  className: `framer-emgq22`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-14vstau`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: o(`strong`, { children: `Моя роль` }),
                                    }),
                                  }),
                                  className: `framer-o6c2i7`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: [
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Я присоединилась к проекту в начале 2025 года в роли ведущего UX-дизайнера и лидера команды, включающей младшего UX-дизайнера и UX-исследователя. Мы начали с глубокого анализа существующего продукта, пользовательских сценариев и рабочих процессов, выделив критически важные функции и отделив их от кейс-специфик надстроек. Все процессы были декомпозированы до базовых шагов, что позволило определить ключевые сценарии, покрывающие около 80% повседневных задач. Эти сценарии стали основой первого уровня навигации, тогда как второстепенные функции были перенесены на соответствующие этапы выполнения задач.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Такой подход позволил переосмыслить и существенно упростить ключевые пользовательские сценарии для внешних пользователей, снизить когнитивную нагрузку и логично структурировать функциональность, показывая дополнительные возможности только в тот момент, когда они действительно необходимы.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Целью было создать простой и интуитивно понятный интерфейс, который понятен с первого взгляда и не требует обучения или дополнительной документации.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1x1vdak`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-wb5361`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: o(`strong`, { children: `Ключевые UX-решения` }),
                                    }),
                                  }),
                                  className: `framer-1tbgu4v`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: a(`ul`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
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
                                  className: `framer-ec0ll2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1owyhd9`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      children: o(`strong`, { children: `Инструменты` }),
                                    }),
                                  }),
                                  className: `framer-brg427`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                    }),
                                  }),
                                  className: `framer-1cqzqxe`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-ec2ur4`,
                              "data-border": !0,
                              id: I,
                              ref: R,
                              children: [
                                a(`div`, {
                                  className: `framer-1htemrj`,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          dir: `auto`,
                                          children: o(`strong`, {
                                            children: `Пользовательские исследования и раннее концептирование`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-d6t1za`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `С самого начала проекта моя команда тесно сотрудничала с проектным менеджером, чтобы понять инструмент и существующие рабочие процессы. Мы анализировали поведение пользователей на обеих существующих платформах, выявляли болевые точки и шаблоны использования, а также возможности для улучшения. В рамках исследования мы провели анализ существующих пользовательских данных, конкурентный анализ и интервью с пользователями, чтобы глубже понять текущие продукты, их аудиторию и определить наилучший способ их объединения. Эти исследования заложили прочную основу для формирования требований пользователей и проектирования решений, которые учитывают как потребности пользователей, так и бизнес-цели.`,
                                        }),
                                      }),
                                      className: `framer-q5fe89`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-1ex19mr`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-193817g`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: o(`strong`, {
                                                children: `Проектная Доска`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-vd4zy1`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Eiw3s9tpl: {
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
                                                    2733.9 +
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
                                                sizes: `calc(${h?.width || `100vw`} - 104px)`,
                                                src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                                srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                              },
                                            },
                                            qCCjwlnKz: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    2789.9 +
                                                    24 +
                                                    189.5 +
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
                                            wvoroQlI0: {
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
                                                    2627.5 +
                                                    16 +
                                                    197.5 +
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
                                                  158 +
                                                  0 +
                                                  2808.9 +
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
                                            className: `framer-rrp5it`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-198et0l`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: o(`strong`, {
                                                children: `Моделирование объектов и основные пользовательские сценарии`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-o3l6qg`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Eiw3s9tpl: {
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
                                                    2733.9 +
                                                    24 +
                                                    205.5 +
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
                                            qCCjwlnKz: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    2789.9 +
                                                    24 +
                                                    189.5 +
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
                                            wvoroQlI0: {
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
                                                    2627.5 +
                                                    16 +
                                                    197.5 +
                                                    0 +
                                                    715.5 +
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
                                                  158 +
                                                  0 +
                                                  2808.9 +
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
                                            className: `framer-btkyw8`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Eiw3s9tpl: {
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
                                                    2733.9 +
                                                    24 +
                                                    205.5 +
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
                                            qCCjwlnKz: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    2789.9 +
                                                    24 +
                                                    189.5 +
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
                                            wvoroQlI0: {
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
                                                    2627.5 +
                                                    16 +
                                                    197.5 +
                                                    0 +
                                                    715.5 +
                                                    0 +
                                                    711.5
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
                                                  158 +
                                                  0 +
                                                  2808.9 +
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
                                            className: `framer-wx6qpw`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-z66pqn`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: o(`strong`, { children: `Personas` }),
                                            }),
                                          }),
                                          className: `framer-1qdj8f7`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Eiw3s9tpl: {
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
                                                    2733.9 +
                                                    24 +
                                                    205.5 +
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
                                            qCCjwlnKz: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    2789.9 +
                                                    24 +
                                                    189.5 +
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
                                            wvoroQlI0: {
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
                                                    2627.5 +
                                                    16 +
                                                    197.5 +
                                                    0 +
                                                    1999 +
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
                                                  158 +
                                                  0 +
                                                  2808.9 +
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
                                            className: `framer-1xs2hfa`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-1xpx7mf`,
                                      children: [
                                        o(b, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: o(`strong`, {
                                                children: `Конкурентный анализ`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1f7s2uu`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          breakpoint: A,
                                          overrides: {
                                            Eiw3s9tpl: {
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
                                                    2733.9 +
                                                    24 +
                                                    205.5 +
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
                                            qCCjwlnKz: {
                                              background: {
                                                alt: ``,
                                                fit: `fit`,
                                                intrinsicHeight: 821,
                                                intrinsicWidth: 1244,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    2789.9 +
                                                    24 +
                                                    189.5 +
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
                                            wvoroQlI0: {
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
                                                    2627.5 +
                                                    16 +
                                                    197.5 +
                                                    0 +
                                                    2714.5 +
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
                                                  158 +
                                                  0 +
                                                  2808.9 +
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
                                            className: `framer-10eed4c`,
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
                              className: `framer-16lmhs8`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: o(`strong`, { children: `Прототипы и макеты` }),
                                    }),
                                  }),
                                  className: `framer-wm711u`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  id: z,
                                  ref: B,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-179lhq8`,
                                  "data-border": !0,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: o(`strong`, {
                                            children: `Новая навигация и главная страница.`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1dalrj1`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Мы упростили навигацию, автоматизировав выбор медицинского учреждения через пользовательские настройки. Это позволило трансформировать сложный процесс, разделив его на две простые и интуитивно понятные функции: выбор учреждения и создание enrollments. В результате landing-страница была переосмыслена и сфокусирована на ключевом действии, работе с Enrollments, что существенно снизило когнитивную нагрузку. Это привело к повышению успешности выполнения задач и заметному снижению уровня пользовательской фрустрации.`,
                                        }),
                                      }),
                                      className: `framer-1v4yjee`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-3yg6uw`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1b4eeoh`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Оригинальный лендинг и система навигации`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-bff7qs`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `Изначально главная страница не имела чёткой и логичной структуры. Пользователям необходимо было выбрать учреждение перед началом создания зачисления, однако это требование нигде явно не обозначалось. Основной CTA «Create Enrollment» направлял пользователей к выбору или созданию учреждения, что часто приводило к прерыванию сценария и попыткам найти альтернативный способ создания зачислений.`,
                                                }),
                                              }),
                                              className: `framer-oozd0e`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-6cd11p`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-1ne5127-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `oE1YMgMFH`,
                                                  scopeId: `CuKpzzXMb`,
                                                  children: o(V, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `oE1YMgMFH`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `oE1YMgMFH`,
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
                                          className: `framer-ivt7di`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Новый лендинг и система навигации`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1e0cik6`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
                                                children: [
                                                  o(`p`, {
                                                    className: `framer-styles-preset-12u88cl`,
                                                    "data-styles-preset": `HftgEsO0a`,
                                                    dir: `auto`,
                                                    children: `В обновлённом рабочем процессе выбор учреждения выполняется ещё до входа в интерфейс, разбивая процесс на понятные последовательные шаги и снижая когнитивную нагрузку. Пользователи могут сохранять своё учреждение по умолчанию, чтобы экономить время при последующих входах.`,
                                                  }),
                                                  o(`p`, {
                                                    className: `framer-styles-preset-12u88cl`,
                                                    "data-styles-preset": `HftgEsO0a`,
                                                    dir: `auto`,
                                                    children: `После входа они сразу попадают в рабочее пространство выбранного учреждения, где могут быстро создавать enrollment с новыми плательщиками, получать доступ к настраиваемой отчетности и пользоваться поддержкой встроенного AI-ассистента в нужный момент.`,
                                                  }),
                                                ],
                                              }),
                                              className: `framer-ptzjec`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-3zq5he`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-uwupjc-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `G6VDVqySc`,
                                                  scopeId: `CuKpzzXMb`,
                                                  children: o(V, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `G6VDVqySc`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `G6VDVqySc`,
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
                                  className: `framer-1fpjig3`,
                                  "data-border": !0,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: o(`strong`, {
                                            children: `Редизайн страницы Enrollments`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-6d1600`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Оригинальная страница была неудобна для просмотра и управления: информация была скрыта, а для доступа приходилось использовать горизонтальную прокрутку. Новый дизайн страницы позволил организовать данные так, чтобы с ними было удобно работать. Пользователи теперь могут быстро видеть статус enrollment, выполнять действия с несколькими объектами одновременно с помощью функции «bulk actions» и оставлять заметки для удобного последующего отслеживания. Визуальные подсказки выделяют отправленные и ожидающие подтверждения соглашения, делая рабочие процессы более эффективными и снижая нагрузку на пользователя.`,
                                        }),
                                      }),
                                      className: `framer-15krg2e`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(`div`, {
                                      className: `framer-1u6rf2o`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-12cptqt`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Оригинальная страница Enrollments`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1ug5wzd`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `Изначальная страница Enrollments перегружала пользователей большим количеством параметров поиска и фильтрации, большинство из которых было для них неактуально. Ключевая информация и основные действия были скрыты в широкой, перегруженной таблице, что затрудняло поиск обновлений и эффективное выполнение критически важных задач. Отсутствие фокуса и слабая иерархия информации часто вызывали у пользователей раздражение и делали страницу неэффективной.`,
                                                }),
                                              }),
                                              className: `framer-1mjcejb`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-iz31b2`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-18p19pw-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `msNMRrqLr`,
                                                  scopeId: `CuKpzzXMb`,
                                                  children: o(V, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `msNMRrqLr`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `msNMRrqLr`,
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
                                          className: `framer-fq92f3`,
                                          children: [
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h3`, {
                                                  className: `framer-styles-preset-bdezu4`,
                                                  "data-styles-preset": `TWYWOtjjp`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Новая страница Enrollments`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-gis1yy`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(b, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `В новом дизайне мы сосредоточились на простом и интуитивно понятном представлении информации. При этом была сохранена преемственность с оригинальным интерфейсом, с улучшением ключевых элементов. Поиск был упрощён, с добавлением возможности сохранять часто используемые запросы. Информация организована с акцентом на ключевые данные, при этом пользователи могут настраивать таблицу под нестандартные сценарии. Также была добавлена возможность работать с несколькими enrollments одновременно с помощью функции «bulk actions».`,
                                                }),
                                              }),
                                              className: `framer-1s571g4`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-12e8iep`,
                                              children: o(E, {
                                                children: o(w, {
                                                  className: `framer-1phzzb2-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `EPXVANPDf`,
                                                  scopeId: `CuKpzzXMb`,
                                                  children: o(V, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `EPXVANPDf`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `EPXVANPDf`,
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
                                  className: `framer-11uyvud`,
                                  "data-border": !0,
                                  children: [
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: o(`strong`, {
                                            children: `Редизайн Enrollments workflow`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1rd2rd1`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(b, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `Основной проблемой рабочего процесса "Создание Enrollment" было большое количество возможных вариантов, с которыми могли столкнуться пользователи. В предыдущих версиях все варианты сразу показывались пользователю, что приводило к чрезмерному количеству шагов и избыточной сложности для большинства случаев.`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `Для новой модели самообслуживания мы применили иной подход. Мы выделили три ключевых шага, обязательных для всех Enrollment, которые охватывают примерно 80 процентов сценариев. Эти шаги образуют основной поток. Для оставшихся редких случаев мы добавили контекстные уведомления, постепенное раскрытие информации и валидацию, чтобы дополнительные требования появлялись только при необходимости.`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `Такой подход значительно снизил когнитивную нагрузку, сохранив полную функциональность. В будущей итерации планируется внедрить инструмент планирования, позволяющий группировать Enrollment для удобной организации, отслеживания и управления процессом в масштабах.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-ze7ebe`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(`div`, {
                                      className: `framer-16eersy`,
                                      children: a(`div`, {
                                        className: `framer-givdqf`,
                                        children: [
                                          o(b, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h3`, {
                                                className: `framer-styles-preset-bdezu4`,
                                                "data-styles-preset": `TWYWOtjjp`,
                                                dir: `auto`,
                                                children: o(`strong`, {
                                                  children: `Новый процесс "Создание Enrollment"`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-4o0evc`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(b, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: [
                                                o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `Новый рабочий процесс "Создание Enrollment" упрощен и состоит из 3 шагов.`,
                                                }),
                                                o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `На первом этапе, пользователь выбирает существующий NPI (National Provider Identifier) из сохраненного списка или создает новый с помощью встроенного подпроцесса. На этом шаге также выбираются типы транзакций, в которых пользователь хочет зарегистрироваться.`,
                                                }),
                                                o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `На втором этапе, система генерирует динамическую форму, которая объединяет всю необходимую информацию для выбранных Enrollment в едином интерфейсе. Форма предварительно заполняется ранее сохраненными данными на основе выбранного NPI. Все поля обязательны для отправки, но пользователи могут сохранить незавершенные Enrollment, если некоторые данные еще недоступны.`,
                                                }),
                                                o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: `На третьем этапе, пользователи просматривают созданные записи Enrollment и отправляют те, которые готовы. Остальные можно сохранить и завершить позднее.`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-ismm13`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(`div`, {
                                            className: `framer-8z36cp`,
                                            children: [
                                              o(b, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: o(`strong`, {
                                                      children: `Concepting`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-15b76au`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(v, {
                                                breakpoint: A,
                                                overrides: {
                                                  Eiw3s9tpl: {
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
                                                          6768.4 +
                                                          0 +
                                                          1946.5 +
                                                          24 +
                                                          468.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          592.8 +
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
                                                  qCCjwlnKz: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      intrinsicHeight: 821,
                                                      intrinsicWidth: 1244,
                                                      loading: p(
                                                        (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          158 +
                                                          0 +
                                                          6606.4 +
                                                          0 +
                                                          1946.5 +
                                                          24 +
                                                          468.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          592.8 +
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
                                                  wvoroQlI0: {
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
                                                          6287 +
                                                          0 +
                                                          1906.5 +
                                                          16 +
                                                          468.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          592.8 +
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
                                                        158 +
                                                        0 +
                                                        7575.4 +
                                                        0 +
                                                        1946.5 +
                                                        24 +
                                                        468.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        592.8 +
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
                                                  className: `framer-3m0kg9`,
                                                  "data-framer-name": `Image`,
                                                  fitImageDimension: `height`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          a(`div`, {
                                            className: `framer-1qydi3x`,
                                            children: [
                                              o(b, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: o(`p`, {
                                                    className: `framer-styles-preset-1504gar`,
                                                    "data-styles-preset": `rHJW28QP9`,
                                                    dir: `auto`,
                                                    children: o(`strong`, {
                                                      children: `Prototype`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-145f960`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(E, {
                                                children: o(w, {
                                                  className: `framer-adysae-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `qModNY7nN`,
                                                  scopeId: `CuKpzzXMb`,
                                                  children: o(V, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 4,
                                                    bottomLeftRadius: 4,
                                                    bottomRightRadius: 4,
                                                    controls: !0,
                                                    height: `100%`,
                                                    id: `qModNY7nN`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `qModNY7nN`,
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
        `.framer-n30uR.framer-zxhsvw, .framer-n30uR .framer-zxhsvw { display: block; }`,
        `.framer-n30uR.framer-1i3skto { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-n30uR .framer-u3trgt-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-n30uR .framer-1y03zrr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 32px; position: relative; width: 1px; }`,
        `.framer-n30uR .framer-52iqh9 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf9; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 8px 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-n30uR .framer-1pg1cca { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-amssg5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-n30uR .framer-1ef0q9u, .framer-n30uR .framer-e188a9, .framer-n30uR .framer-chwn2p, .framer-n30uR .framer-100ozaa, .framer-n30uR .framer-15d43ry { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-n30uR .framer-1vrmfus { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-n30uR .framer-1hhfafh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-n30uR .framer-1uhtioj { height: 13px; position: relative; width: 14px; }`,
        `.framer-n30uR .framer-jvub38 { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-n30uR .framer-r9sah0 { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-n30uR .framer-x5a884 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-n30uR .framer-171esqw, .framer-n30uR .framer-wpmr0l { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-n30uR .framer-156gq9d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-1tmwp29, .framer-n30uR .framer-ncx8zu, .framer-n30uR .framer-14vstau, .framer-n30uR .framer-wb5361, .framer-n30uR .framer-1owyhd9, .framer-n30uR .framer-1htemrj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-1oa63k2, .framer-n30uR .framer-vzndje, .framer-n30uR .framer-1dtoqw9, .framer-n30uR .framer-sd8k9u, .framer-n30uR .framer-emgq22, .framer-n30uR .framer-o6c2i7, .framer-n30uR .framer-1x1vdak, .framer-n30uR .framer-1tbgu4v, .framer-n30uR .framer-ec0ll2, .framer-n30uR .framer-brg427, .framer-n30uR .framer-1cqzqxe, .framer-n30uR .framer-d6t1za, .framer-n30uR .framer-q5fe89, .framer-n30uR .framer-1v4yjee, .framer-n30uR .framer-15krg2e, .framer-n30uR .framer-ze7ebe { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n30uR .framer-13a3op1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-1t3i4yu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-n30uR .framer-14q9ty0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-1dgbvna { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 24px 0px; position: relative; width: 1px; }`,
        `.framer-n30uR .framer-az8xx5, .framer-n30uR .framer-x1viao, .framer-n30uR .framer-1fpk1e9 { aspect-ratio: 1.7866666666666666 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-n30uR .framer-121l6oa { bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-n30uR .framer-xg50pm, .framer-n30uR .framer-1wns849, .framer-n30uR .framer-atxhzt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-n30uR .framer-hznsj8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-tbxkmd, .framer-n30uR .framer-adysae-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-mj4kz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-12wu17z, .framer-n30uR .framer-v1tuxv { aspect-ratio: 1.7866666666666666 / 1; bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; }`,
        `.framer-n30uR .framer-ec2ur4 { --border-bottom-width: 0px; --border-color: #0085a6; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 3px; align-content: center; align-items: center; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 24px; position: relative; scroll-margin-top: 220px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-n30uR .framer-1ex19mr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-193817g, .framer-n30uR .framer-198et0l, .framer-n30uR .framer-z66pqn, .framer-n30uR .framer-1xpx7mf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-n30uR .framer-vd4zy1, .framer-n30uR .framer-o3l6qg, .framer-n30uR .framer-1qdj8f7, .framer-n30uR .framer-1f7s2uu, .framer-n30uR .framer-1dalrj1, .framer-n30uR .framer-bff7qs, .framer-n30uR .framer-1e0cik6, .framer-n30uR .framer-6d1600, .framer-n30uR .framer-1ug5wzd, .framer-n30uR .framer-gis1yy, .framer-n30uR .framer-1rd2rd1, .framer-n30uR .framer-4o0evc, .framer-n30uR .framer-15b76au, .framer-n30uR .framer-145f960 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-n30uR .framer-rrp5it, .framer-n30uR .framer-btkyw8, .framer-n30uR .framer-wx6qpw, .framer-n30uR .framer-1xs2hfa, .framer-n30uR .framer-10eed4c, .framer-n30uR .framer-3m0kg9 { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-16lmhs8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-wm711u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; scroll-margin-top: 150px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-n30uR .framer-179lhq8 { --border-bottom-width: 0px; --border-color: #012a87; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-n30uR .framer-3yg6uw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-n30uR .framer-1b4eeoh, .framer-n30uR .framer-ivt7di, .framer-n30uR .framer-12cptqt, .framer-n30uR .framer-fq92f3, .framer-n30uR .framer-givdqf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-oozd0e, .framer-n30uR .framer-ptzjec, .framer-n30uR .framer-1mjcejb, .framer-n30uR .framer-1s571g4, .framer-n30uR .framer-ismm13 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n30uR .framer-6cd11p, .framer-n30uR .framer-3zq5he, .framer-n30uR .framer-iz31b2, .framer-n30uR .framer-12e8iep { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-n30uR .framer-1ne5127-container, .framer-n30uR .framer-uwupjc-container, .framer-n30uR .framer-18p19pw-container, .framer-n30uR .framer-1phzzb2-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-n30uR .framer-1fpjig3 { --border-bottom-width: 0px; --border-color: #002b84; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-n30uR .framer-1u6rf2o, .framer-n30uR .framer-16eersy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-n30uR .framer-11uyvud { --border-bottom-width: 0px; --border-color: #345eaa; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-n30uR .framer-8z36cp, .framer-n30uR .framer-1qydi3x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...he,
        ...xe,
        ...I,
        ...z,
        ...F,
        ...ge,
        ...Ee,
        ...Ae,
        `.framer-n30uR[data-border="true"]::after, .framer-n30uR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-n30uR.framer-1i3skto { width: 1240px; } .framer-n30uR .framer-52iqh9 { order: 0; } .framer-n30uR .framer-156gq9d { order: 1; } .framer-n30uR .framer-ec2ur4 { gap: 16px; } .framer-n30uR .framer-1htemrj, .framer-n30uR .framer-1ex19mr { gap: 8px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-n30uR.framer-1i3skto { flex-direction: column; width: 810px; } .framer-n30uR .framer-u3trgt-container { height: auto; width: 100%; z-index: 2; } .framer-n30uR .framer-1y03zrr { flex: none; padding: 24px 48px 0px 48px; width: 100%; } .framer-n30uR .framer-52iqh9 { box-shadow: unset; order: 0; padding: 0px; position: relative; top: unset; z-index: 0; } .framer-n30uR .framer-1vrmfus { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; } .framer-n30uR .framer-156gq9d { gap: 24px; order: 1; padding: 0px; } .framer-n30uR .framer-ec2ur4, .framer-n30uR .framer-1fpjig3 { padding: 24px 0px 24px 8px; } .framer-n30uR .framer-1ex19mr { gap: 16px; overflow: var(--overflow-clip-fallback, clip); } .framer-n30uR .framer-198et0l { padding: 0px; } .framer-n30uR .framer-6cd11p, .framer-n30uR .framer-3zq5he, .framer-n30uR .framer-iz31b2, .framer-n30uR .framer-12e8iep { flex-direction: column; } .framer-n30uR .framer-1ne5127-container, .framer-n30uR .framer-uwupjc-container, .framer-n30uR .framer-18p19pw-container, .framer-n30uR .framer-1phzzb2-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-n30uR.framer-1i3skto { flex-direction: column; width: 390px; } .framer-n30uR .framer-u3trgt-container { height: auto; width: 100%; z-index: 2; } .framer-n30uR .framer-1y03zrr { flex: none; gap: 16px; padding: 24px 24px 0px 24px; width: 100%; } .framer-n30uR .framer-52iqh9 { align-content: center; align-items: center; box-shadow: unset; order: 0; padding: 0px; position: relative; top: unset; } .framer-n30uR .framer-1pg1cca { order: 1; } .framer-n30uR .framer-1vrmfus { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-n30uR .framer-156gq9d { gap: 16px; order: 1; padding: 0px; } .framer-n30uR .framer-1tmwp29, .framer-n30uR .framer-ncx8zu, .framer-n30uR .framer-14vstau, .framer-n30uR .framer-wb5361, .framer-n30uR .framer-1owyhd9, .framer-n30uR .framer-1htemrj { gap: 8px; } .framer-n30uR .framer-ec2ur4, .framer-n30uR .framer-1fpjig3, .framer-n30uR .framer-11uyvud { padding: 16px 0px 16px 8px; } .framer-n30uR .framer-1ex19mr { gap: 16px; } .framer-n30uR .framer-198et0l { padding: 0px; } .framer-n30uR .framer-179lhq8 { padding: 16px 0px 8px 8px; } .framer-n30uR .framer-6cd11p, .framer-n30uR .framer-3zq5he, .framer-n30uR .framer-iz31b2, .framer-n30uR .framer-12e8iep { flex-direction: column; } .framer-n30uR .framer-1ne5127-container, .framer-n30uR .framer-uwupjc-container, .framer-n30uR .framer-18p19pw-container, .framer-n30uR .framer-1phzzb2-container { flex: none; width: 100%; }}`,
      ],
      `framer-n30uR`
    )),
    ($.displayName = `Portfolio / Enrollments`),
    ($.defaultProps = { height: 12527.5, width: 1440 }),
    O(
      $,
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
          ],
        },
        ...H,
        ...U,
        ...S(_e),
        ...S(Se),
        ...S(R),
        ...S(ue),
        ...S(N),
        ...S(ve),
        ...S(De),
        ...S(je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => h([() => k(L, {}, t)], t) }),
    (Ie = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerCuKpzzXMb`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `12527.5`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qCCjwlnKz":{"layout":["fixed","auto"]},"Eiw3s9tpl":{"layout":["fixed","auto"]},"wvoroQlI0":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1440`,
            framerScrollSections: `{"LVMJdOstt":{"pattern":":LVMJdOstt","name":"research2"},"vCiuHYrzF":{"pattern":":vCiuHYrzF","name":"naviagtion"}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ie as __FramerMetadata__, $ as default, K as queryParamNames };
//# sourceMappingURL=NrSGayWV27EZ0RnkHQ87Jo1s8GKZJx4yT7rDXTLYY8M.DESXF-m0.mjs.map
