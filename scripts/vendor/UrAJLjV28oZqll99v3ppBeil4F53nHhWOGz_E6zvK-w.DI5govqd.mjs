import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  N as r,
  S as ee,
  k as te,
  l as i,
  o as a,
  p as o,
  s,
  y as c,
} from "./react.BKyTRiZ3.mjs";
import { a as ne, r as re, t as ie, x as l } from "./motion.CZCLJn0h.mjs";
import {
  $ as ae,
  A as u,
  L as oe,
  M as d,
  Q as se,
  S as f,
  W as p,
  X as ce,
  a as m,
  ct as h,
  f as g,
  g as _,
  h as v,
  it as y,
  j as b,
  l as x,
  lt as S,
  n as C,
  nt as le,
  rt as ue,
  s as w,
  t as T,
  tt as E,
  v as D,
  w as O,
} from "./framer.1c_rZl7u.mjs";
import {
  C as de,
  S as k,
  _ as fe,
  a as A,
  b as j,
  c as M,
  d as N,
  f as P,
  g as F,
  h as I,
  i as L,
  l as R,
  m as z,
  o as B,
  p as pe,
  r as me,
  s as he,
  u as ge,
  v as _e,
  w as ve,
  x as ye,
  y as be,
} from "./shared-lib.0T242d49.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./rHJW28QP9.DDXzYFc_.mjs";
import { i as Te, n as Ee, r as V, t as De } from "./Auth.gSmpk-8B.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./h7BtS_2Gk.BwPWS4oe.mjs";
import Me, { t as Ne } from "./l07xoZMpohumHQfxMw5tTwEAnk1ST3oH1F8_-7b3WL0.Vbr7cqhk.mjs";
var H, U, W, G, K, q, J, Y, X, Z, Q, Pe, Fe, $, Ie;
e(() => {
  (s(),
    oe(),
    ie(),
    n(),
    Te(),
    P(),
    De(),
    Oe(),
    ve(),
    j(),
    xe(),
    ge(),
    B(),
    F(),
    Ne(),
    (H = u(N)),
    (U = u(V)),
    (W = S(l.div, { nodeId: `NUuoiDurc`, override: Ee, scopeId: `jFBc0bflX` })),
    (G = {
      Gb4TINP73: `(min-width: 810px) and (max-width: 1239.98px)`,
      J7gfniKpB: `(max-width: 809.98px)`,
      NUuoiDurc: `(min-width: 1440px)`,
      Xvl2779Qv: `(min-width: 1240px) and (max-width: 1439.98px)`,
    }),
    (K = () => typeof document < `u`),
    (q = []),
    (J = `framer-76Tag`),
    (Y = {
      Gb4TINP73: `framer-v-18sgt68`,
      J7gfniKpB: `framer-v-fcgxpp`,
      NUuoiDurc: `framer-v-1phe3p7`,
      Xvl2779Qv: `framer-v-1l3dfae`,
    }),
    (X = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `NUuoiDurc`, Laptop: `Xvl2779Qv`, Phone: `J7gfniKpB`, Tablet: `Gb4TINP73` }),
    (Pe = ({ value: e }) =>
      E()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Fe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `NUuoiDurc`,
    })),
    ($ = h(
      o(function (e, n) {
        let o = c(null),
          s = n ?? o,
          ie = ee(),
          { activeLocale: u, setLocale: oe } = le(),
          p = ce(),
          { style: h, className: b, layoutId: S, variant: E, ...D } = Fe(e);
        ue(t(() => Me({}, u), [u]));
        let [O, de] = ae(E, G, !1),
          k = f(J, me, we, pe, fe, ye, he, je),
          A = te(m)?.isLayoutTemplate,
          j = !!te(ne)?.transition?.layout,
          M = X(A, j),
          P = () => !K() || ![`Gb4TINP73`, `J7gfniKpB`].includes(O),
          F = y(`sEeKPetuQ`),
          I = c(null),
          L = y(`CXicQXHyJ`),
          R = c(null),
          z = y(`iKWTngtWU`),
          B = c(null),
          ge = () => !!(!K() || [`Gb4TINP73`, `J7gfniKpB`].includes(O));
        return (
          se({}),
          a(m.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `NUuoiDurc`,
              variantClassNames: Y,
            },
            children: i(re, {
              id: S ?? ie,
              children: [
                a(Pe, { value: `html body { background: rgb(253, 251, 248); }` }),
                i(W, {
                  ...D,
                  className: f(k, `framer-1phe3p7`, b),
                  ref: s,
                  style: { ...h },
                  children: [
                    a(g, {
                      breakpoint: O,
                      overrides: {
                        Gb4TINP73: {
                          height: 800,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0,
                        },
                        J7gfniKpB: {
                          height: 800,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0,
                        },
                      },
                      children: a(T, {
                        height: 1e3,
                        y: (p?.y || 0) + 0,
                        children: a(C, {
                          className: `framer-1h22k53-container`,
                          layout: M,
                          nodeId: `TOkZaoDxO`,
                          rendersWithMotion: !0,
                          scopeId: `jFBc0bflX`,
                          children: a(g, {
                            breakpoint: O,
                            overrides: {
                              Gb4TINP73: { style: { width: `100%` }, variant: Z(`YCYFEcIjL`) },
                              J7gfniKpB: { style: { width: `100%` }, variant: Z(`XJ7hq0Zpp`) },
                            },
                            children: a(N, {
                              height: `100%`,
                              id: `TOkZaoDxO`,
                              layoutId: `TOkZaoDxO`,
                              style: { height: `100%` },
                              variant: Z(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    i(l.div, {
                      className: `framer-dd1p5c`,
                      layout: M,
                      children: [
                        P() &&
                          a(l.div, {
                            className: `framer-tk12nu hidden-18sgt68 hidden-fcgxpp`,
                            children: i(l.div, {
                              className: `framer-1lvbeco`,
                              children: [
                                i(l.div, {
                                  className: `framer-1z0nvzp`,
                                  children: [
                                    a(v, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `PDF to Digital Form Mapping tool`,
                                        }),
                                      }),
                                      className: `framer-19jc6yq`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    i(l.div, {
                                      className: `framer-by16ai`,
                                      children: [
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: a(x, {
                                                href: {
                                                  hash: `:CXicQXHyJ`,
                                                  webPageId: `jFBc0bflX`,
                                                },
                                                motionChild: !0,
                                                nodeId: `sEeKPetuQ`,
                                                openInNewTab: !1,
                                                preserveParams: !1,
                                                relValues: [],
                                                scopeId: `jFBc0bflX`,
                                                smoothScroll: !0,
                                                children: a(l.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: a(`strong`, {
                                                    children: `Предварительное исследование`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-11n7w3n`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          id: F,
                                          ref: I,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: a(x, {
                                                href: {
                                                  hash: `:iKWTngtWU`,
                                                  webPageId: `jFBc0bflX`,
                                                },
                                                motionChild: !0,
                                                nodeId: `uZJ07cSLb`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `jFBc0bflX`,
                                                smoothScroll: !0,
                                                children: a(l.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: a(`strong`, {
                                                    children: `Прототипы и макеты`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-xqhm4i`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(l.div, {
                                  className: `framer-1k36lv6`,
                                  children: a(x, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `tjMtU5OAL`,
                                    openInNewTab: !1,
                                    scopeId: `jFBc0bflX`,
                                    children: a(l.a, {
                                      className: `framer-1jf6end framer-hhcxh`,
                                      "data-framer-name": `Button`,
                                      children: a(l.div, {
                                        className: `framer-1qvf12y`,
                                        children: i(_, {
                                          className: `framer-fsubnk`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            a(_, {
                                              className: `framer-497ded`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            a(_, {
                                              className: `framer-104gcdu`,
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
                        i(l.div, {
                          className: `framer-i8d2l5`,
                          children: [
                            i(l.div, {
                              className: `framer-iry5n4`,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h2`, {
                                      className: `framer-styles-preset-qvrn1k`,
                                      "data-styles-preset": `ksQr_zVQP`,
                                      dir: `auto`,
                                      children: a(`strong`, { children: `Обзор проекта` }),
                                    }),
                                  }),
                                  className: `framer-g0dqvc`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Form Mapping Tool — это внутренний проект с небольшой командой и быстрыми сроками реализации, направленный на модернизацию устаревшего процесса, используемого в экосистеме Optum Clearinghouse для создания цифровых версий медицинских PDF-форм.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Целью было ускорить преобразование статических PDF-документов в структурированные цифровые формы, чтобы сократить повторяющийся ввод данных в процессах регистрации у плательщиков и обработки страховых заявок.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Для этого мы разработали плагин-компонент, который можно интегрировать в любое внутреннее приложение, обеспечивая единообразное и эффективное преобразование PDF-форм в цифровой формат.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1reqizj`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(g, {
                                  breakpoint: O,
                                  overrides: {
                                    Gb4TINP73: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                      },
                                    },
                                    J7gfniKpB: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                      },
                                    },
                                  },
                                  children: a(w, {
                                    background: { alt: ``, fit: `fill` },
                                    className: `framer-1fgkmjz`,
                                    children: a(T, {
                                      children: a(C, {
                                        className: `framer-15hzw4r-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `obV_DCKh_`,
                                        rendersWithMotion: !0,
                                        scopeId: `jFBc0bflX`,
                                        children: a(V, {
                                          backgroundColor: `rgb(253, 251, 249)`,
                                          borderRadius: 12,
                                          bottomLeftRadius: 12,
                                          bottomRightRadius: 12,
                                          controls: !0,
                                          height: `100%`,
                                          id: `obV_DCKh_`,
                                          isMixedBorderRadius: !0,
                                          layoutId: `obV_DCKh_`,
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
                            i(l.div, {
                              className: `framer-1o1bx81`,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Основная задача`,
                                    }),
                                  }),
                                  className: `framer-1sfbyhs`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Основная задача заключается в разработке инструмента, выходящего за рамки базовой оцифровки PDF. Традиционные решения для преобразования PDF в формы обрабатывают каждый документ отдельно, вынуждая пользователей многократно вводить одни и те же данные в различных форматах.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Нашей целью является создание связи между PDF-документами и их цифровыми аналогами, чтобы данные, введённые один раз в цифровую форму, могли автоматически подставляться в несколько PDF-документов в рамках одного процесса. Система также должна поддерживать разнообразные форматы форм от разных плательщиков, сохраняя при этом высокий уровень точности, необходимый для медицинской документации.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Критически важно сбалансировать автоматизацию, гибкость и пользовательский контроль, чтобы инструмент мог масштабироваться на тысячи шаблонов форм от разных плательщиков и при этом оставаться надёжным для операционных команд.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1edl8k`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-1xk34jg`,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Моя роль`,
                                    }),
                                  }),
                                  className: `framer-1by85t1`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Я выступала в роли ведущего продуктового/UX-дизайнера на проекте, тесно сотрудничая с продакт-менеджером для определения стратегии и структуры пользовательского опыта.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Мои ключевые обязанности включали:`,
                                      }),
                                      i(`ul`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Руководство UX-стратегией и проектированием взаимодействия для работы с формами`,
                                            }),
                                          }),
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Участие в анализе рынка и исследовании подходов с поддержкой ИИ`,
                                            }),
                                          }),
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Проектирование рабочих процессов конфигурации для администраторов, отвечающих за настройку форм плательщиков`,
                                            }),
                                          }),
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Итеративная работа с командой продукта и инженерами для нахождения баланса между автоматизацией и контролем со стороны пользователя`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  className: `framer-tcckp7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-1yzr5ny`,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Ключевые UX-решения`,
                                    }),
                                  }),
                                  className: `framer-1b96ae7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, { children: `Поддержка ИИ` }),
                                          a(`br`, {}),
                                          `Система анализирует загруженные PDF и формирует первоначальный список обнаруженных полей с предложенными соответствиями, что значительно сокращает время ручной настройки.`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, {
                                            children: `Валидация с участием человека`,
                                          }),
                                          a(`br`, {}),
                                          `Администраторы могут просматривать, редактировать и уточнять соответствия, созданные ИИ, чтобы обеспечить точность и соответствие требованиям медицинской документации.`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, {
                                            children: `Двусторонняя связь PDF и цифровой формы`,
                                          }),
                                          a(`br`, {}),
                                          `Цифровой слой формы напрямую связан с исходным PDF, позволяя пользователям вводить данные один раз и автоматически заполнять несколько форм плательщиков.`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, {
                                            children: `Интеллектуальное предварительное заполнение в рабочих процессах`,
                                          }),
                                          a(`br`, {}),
                                          `Данные, введённые один раз, могут использоваться повторно в нескольких формах, сокращая повторный ввод при регистрации плательщиков и подаче заявлений на возмещение.`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  className: `framer-16kzyb`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-12zpk7x`,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Инструменты`,
                                    }),
                                  }),
                                  className: `framer-18oyo33`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                    }),
                                  }),
                                  className: `framer-7r3rk8`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        a(l.div, {
                          className: `framer-6km3y1`,
                          children: i(l.div, {
                            className: `framer-1d068q3`,
                            "data-border": !0,
                            id: L,
                            ref: R,
                            children: [
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: a(`strong`, {
                                      children: `Предварительное исследование, рабочие процессы и низкоуровневые вайрфреймы`,
                                    }),
                                  }),
                                }),
                                className: `framer-198vbwc`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(l.div, {
                                className: `framer-lmfz0h`,
                                children: [
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-r40bfx`,
                                        "data-styles-preset": `h7BtS_2Gk`,
                                        dir: `auto`,
                                        children: a(`strong`, {
                                          children: `Предварительное исследование`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-fo1v0`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: [
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `В рамках разведочного исследования мы исходили из чёткой предпосылки: существующие инструменты для преобразования PDF в цифровые формы неэффективны, избыточно сложны и не подходят для повторного использования на уровне всей организации. Наша цель заключалась в том, чтобы определить требования к упрощённому решению в виде плагина, которое можно было бы масштабировать и использовать в разных командах, занимающихся оцифровкой форм.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Чтобы обеспечить масштабируемость решения в экосистеме Optum Clearinghouse, мы провели интервью со стейкхолдерами из различных бизнес-подразделений. Это помогло понять, как используются текущие инструменты, какие функции критически важны для повседневной работы, в чём заключаются ограничения существующих решений и какие задачи команды стремятся решить с помощью оцифровки.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Параллельно мы провели детальный анализ текущих рабочих процессов, включая пошаговое картирование процесса создания форм на основе записанных демонстраций работы с инструментами. Это позволило выявить ключевые точки трения — в частности, ситуации, где пользователи были вынуждены повторно вводить одни и те же данные в разные формы плательщиков, а также места, где из-за фрагментированных процессов возникали несоответствия.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Мы также проанализировали существующие инструменты и решения конкурентов, чтобы определить стандартные возможности и выявить пробелы — в частности, в поддержке повторного использования данных, вариативности шаблонов и валидации итоговых документов.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Ключевые выводы:`,
                                        }),
                                        i(`ul`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            a(`li`, {
                                              "data-preset-tag": `p`,
                                              children: a(`p`, {
                                                children: `Основная неэффективность заключалась не в самой оцифровке форм, а во фрагментации данных. Пользователи были вынуждены повторно вводить одну и ту же информацию в разные формы, поскольку каждый документ рассматривался как независимая сущность. Это подтвердило необходимость создания единого слоя данных, позволяющего вводить информацию один раз и использовать её в нескольких формах.`,
                                              }),
                                            }),
                                            a(`li`, {
                                              "data-preset-tag": `p`,
                                              children: a(`p`, {
                                                children: `Существовал критический разрыв между вводом данных и проверкой итогового результата. Пользователи вводили информацию в структурированных цифровых формах, но проверка корректности происходила уже в PDF-документах с отличающимися форматами, что усложняло обнаружение ошибок. Это выявило потребность в синхронизированном, параллельном отображении цифровых данных и итоговых документов.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `На основе этих инсайтов мы определили ключевой функционал для MVP, а также дополнительные возможности для следующей фазы (MVP+). На базе проведённого исследования были созданы вайрфреймы, описывающие пользовательские сценарии и структуру интерфейса. В дальнейшем они были валидированы с реальными пользователями, чтобы убедиться в их соответствии рабочим процессам, и легли в основу последующих макетов и интерактивных прототипов.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-vf9gkd`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              i(l.div, {
                                className: `framer-1p26lic`,
                                children: [
                                  i(l.div, {
                                    className: `framer-1vs2n10`,
                                    children: [
                                      a(v, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-r40bfx`,
                                            "data-styles-preset": `h7BtS_2Gk`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Создание нового вопроса — версия A`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-68o5wz`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(g, {
                                        breakpoint: O,
                                        overrides: {
                                          Gb4TINP73: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: d(
                                                (p?.y || 0) +
                                                  0 +
                                                  893.2 +
                                                  0 +
                                                  2704.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1332 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  170
                                              ),
                                              pixelHeight: 5335,
                                              pixelWidth: 7521,
                                              sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                          J7gfniKpB: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: d(
                                                (p?.y || 0) +
                                                  0 +
                                                  877.2 +
                                                  16 +
                                                  2704.7 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  1324 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  170
                                              ),
                                              pixelHeight: 5335,
                                              pixelWidth: 7521,
                                              sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                          Xvl2779Qv: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: d(
                                                (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2832.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
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
                                        },
                                        children: a(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 5335,
                                            intrinsicWidth: 7521,
                                            loading: d(
                                              (p?.y || 0) +
                                                0 +
                                                0 +
                                                2904.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
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
                                          className: `framer-1olo9ds`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      a(v, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-r40bfx`,
                                            "data-styles-preset": `h7BtS_2Gk`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Создание нового вопроса — версия B`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-r8zzoz`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(g, {
                                        breakpoint: O,
                                        overrides: {
                                          Gb4TINP73: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: d(
                                                (p?.y || 0) +
                                                  0 +
                                                  893.2 +
                                                  0 +
                                                  2704.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1332 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  862
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                          J7gfniKpB: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: d(
                                                (p?.y || 0) +
                                                  0 +
                                                  877.2 +
                                                  16 +
                                                  2704.7 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  1324 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  599
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                          Xvl2779Qv: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: d(
                                                (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2832.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  843
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                        },
                                        children: a(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4035,
                                            intrinsicWidth: 7238,
                                            loading: d(
                                              (p?.y || 0) +
                                                0 +
                                                0 +
                                                2904.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                0 +
                                                0 +
                                                985
                                            ),
                                            pixelHeight: 4035,
                                            pixelWidth: 7238,
                                            src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                            srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                          },
                                          className: `framer-14ag66c`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  i(l.div, {
                                    className: `framer-3nfhw5`,
                                    children: [
                                      a(v, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-r40bfx`,
                                            "data-styles-preset": `h7BtS_2Gk`,
                                            dir: `auto`,
                                            children: a(`strong`, { children: `Lo-fi wireframes` }),
                                          }),
                                        }),
                                        className: `framer-18k34yv`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      i(l.div, {
                                        className: `framer-186famw`,
                                        children: [
                                          a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: a(`strong`, {
                                                  children: `Главная страница — список форм, к которым у пользователя есть доступ`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-hiebed`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(g, {
                                            breakpoint: O,
                                            overrides: {
                                              Gb4TINP73: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3262,
                                                  intrinsicWidth: 7066,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1332 +
                                                      0 +
                                                      1272 +
                                                      0 +
                                                      178 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 3262,
                                                  pixelWidth: 7066,
                                                  sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                                  srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                                },
                                              },
                                              J7gfniKpB: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3262,
                                                  intrinsicWidth: 7066,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1324 +
                                                      0 +
                                                      802 +
                                                      0 +
                                                      178 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 3262,
                                                  pixelWidth: 7066,
                                                  sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                                  srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                                },
                                              },
                                              Xvl2779Qv: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3262,
                                                  intrinsicWidth: 7066,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2832.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1308 +
                                                      0 +
                                                      1238 +
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
                                            },
                                            children: a(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3262,
                                                intrinsicWidth: 7066,
                                                loading: d(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2904.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1332 +
                                                    0 +
                                                    1507 +
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
                                              className: `framer-1vp2jjt`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(l.div, {
                                        className: `framer-37z1dq`,
                                        children: [
                                          a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: a(`strong`, {
                                                  children: `Создание новой формы`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-119vi86`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(g, {
                                            breakpoint: O,
                                            overrides: {
                                              Gb4TINP73: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1762,
                                                  intrinsicWidth: 3894,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1332 +
                                                      0 +
                                                      1272 +
                                                      0 +
                                                      663.5 +
                                                      0 +
                                                      129.5
                                                  ),
                                                  pixelHeight: 1762,
                                                  pixelWidth: 3894,
                                                  sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                  srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                                },
                                              },
                                              J7gfniKpB: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1762,
                                                  intrinsicWidth: 3894,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1324 +
                                                      0 +
                                                      802 +
                                                      0 +
                                                      491.5 +
                                                      0 +
                                                      129.5
                                                  ),
                                                  pixelHeight: 1762,
                                                  pixelWidth: 3894,
                                                  sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                  srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                                },
                                              },
                                              Xvl2779Qv: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1762,
                                                  intrinsicWidth: 3894,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2832.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1308 +
                                                      0 +
                                                      1238 +
                                                      0 +
                                                      650.5 +
                                                      0 +
                                                      129.5
                                                  ),
                                                  pixelHeight: 1762,
                                                  pixelWidth: 3894,
                                                  src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                  srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                                },
                                              },
                                            },
                                            children: a(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1762,
                                                intrinsicWidth: 3894,
                                                loading: d(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2904.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1332 +
                                                    0 +
                                                    1507 +
                                                    0 +
                                                    742.5 +
                                                    0 +
                                                    129.5
                                                ),
                                                pixelHeight: 1762,
                                                pixelWidth: 3894,
                                                src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                                srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                              },
                                              className: `framer-1454c90`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(l.div, {
                                        className: `framer-1l6uk4v`,
                                        children: [
                                          a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: a(`strong`, {
                                                  children: `Редактирование существующей формы`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-ht0ony`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(g, {
                                            breakpoint: O,
                                            overrides: {
                                              Gb4TINP73: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4444,
                                                  intrinsicWidth: 5461,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1332 +
                                                      0 +
                                                      1272 +
                                                      0 +
                                                      1140 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 4444,
                                                  pixelWidth: 5461,
                                                  sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                  srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                                },
                                              },
                                              J7gfniKpB: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4444,
                                                  intrinsicWidth: 5461,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1324 +
                                                      0 +
                                                      802 +
                                                      0 +
                                                      800 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 4444,
                                                  pixelWidth: 5461,
                                                  sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                  srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                                },
                                              },
                                              Xvl2779Qv: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4444,
                                                  intrinsicWidth: 5461,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2832.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1308 +
                                                      0 +
                                                      1238 +
                                                      0 +
                                                      1115 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 4444,
                                                  pixelWidth: 5461,
                                                  src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                  srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                                },
                                              },
                                            },
                                            children: a(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 4444,
                                                intrinsicWidth: 5461,
                                                loading: d(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2904.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1332 +
                                                    0 +
                                                    1507 +
                                                    0 +
                                                    1297 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 4444,
                                                pixelWidth: 5461,
                                                src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                                srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                              },
                                              className: `framer-1n1to8z`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(l.div, {
                                        className: `framer-803hvi`,
                                        children: [
                                          a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: a(`strong`, {
                                                  children: `Сопоставление полей, которые не были определены ИИ или требуют корректировки`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-132sjkw`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(g, {
                                            breakpoint: O,
                                            overrides: {
                                              Gb4TINP73: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 6309,
                                                  intrinsicWidth: 9365,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1332 +
                                                      0 +
                                                      1272 +
                                                      0 +
                                                      1876.5 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 6309,
                                                  pixelWidth: 9365,
                                                  sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                  srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                                },
                                              },
                                              J7gfniKpB: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 6309,
                                                  intrinsicWidth: 9365,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1324 +
                                                      0 +
                                                      802 +
                                                      0 +
                                                      1233.5 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 6309,
                                                  pixelWidth: 9365,
                                                  sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                  srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                                },
                                              },
                                              Xvl2779Qv: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 6309,
                                                  intrinsicWidth: 9365,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2832.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1308 +
                                                      0 +
                                                      1238 +
                                                      0 +
                                                      1829.5 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 6309,
                                                  pixelWidth: 9365,
                                                  src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                  srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                                },
                                              },
                                            },
                                            children: a(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 6309,
                                                intrinsicWidth: 9365,
                                                loading: d(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2904.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1332 +
                                                    0 +
                                                    1507 +
                                                    0 +
                                                    2174.5 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 6309,
                                                pixelWidth: 9365,
                                                src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                                srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                              },
                                              className: `framer-r1686g`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(l.div, {
                                        className: `framer-16fci05`,
                                        children: [
                                          a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: a(`strong`, {
                                                  children: `Добавление вопросов в форму`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-1f41jwp`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(g, {
                                            breakpoint: O,
                                            overrides: {
                                              Gb4TINP73: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 7825,
                                                  intrinsicWidth: 14499,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      893.2 +
                                                      0 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1332 +
                                                      0 +
                                                      1272 +
                                                      0 +
                                                      2513 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 7825,
                                                  pixelWidth: 14499,
                                                  sizes: `calc(${p?.width || `100vw`} - 96px)`,
                                                  src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                  srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                                },
                                              },
                                              J7gfniKpB: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 7825,
                                                  intrinsicWidth: 14499,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      877.2 +
                                                      16 +
                                                      2704.7 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      1324 +
                                                      0 +
                                                      802 +
                                                      0 +
                                                      1619 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 7825,
                                                  pixelWidth: 14499,
                                                  sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                                  src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                  srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                                },
                                              },
                                              Xvl2779Qv: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 7825,
                                                  intrinsicWidth: 14499,
                                                  loading: d(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      2832.7 +
                                                      0 +
                                                      0 +
                                                      32 +
                                                      1308 +
                                                      0 +
                                                      1238 +
                                                      0 +
                                                      2448 +
                                                      0 +
                                                      131.5
                                                  ),
                                                  pixelHeight: 7825,
                                                  pixelWidth: 14499,
                                                  src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                  srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                                },
                                              },
                                            },
                                            children: a(w, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 7825,
                                                intrinsicWidth: 14499,
                                                loading: d(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    2904.7 +
                                                    0 +
                                                    0 +
                                                    32 +
                                                    1332 +
                                                    0 +
                                                    1507 +
                                                    0 +
                                                    2928 +
                                                    0 +
                                                    131.5
                                                ),
                                                pixelHeight: 7825,
                                                pixelWidth: 14499,
                                                src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                                srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                              },
                                              className: `framer-16ial6o`,
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
                        a(l.div, {
                          className: `framer-11nej1v`,
                          children: a(l.div, {
                            className: `framer-5uplna`,
                            children: i(l.div, {
                              className: `framer-ig985f`,
                              "data-border": !0,
                              id: z,
                              ref: B,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h2`, {
                                      className: `framer-styles-preset-qvrn1k`,
                                      "data-styles-preset": `ksQr_zVQP`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: a(`strong`, { children: `Hi-fidelity прототип` }),
                                    }),
                                  }),
                                  className: `framer-1qgi4z6`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(l.div, {
                                  className: `framer-1j211ob`,
                                  children: a(l.div, {
                                    className: `framer-ksh61g`,
                                    children: a(T, {
                                      children: a(C, {
                                        className: `framer-1uzsykv-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `LTyJCdXVe`,
                                        rendersWithMotion: !0,
                                        scopeId: `jFBc0bflX`,
                                        children: a(V, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 8,
                                          bottomLeftRadius: 8,
                                          bottomRightRadius: 8,
                                          controls: !0,
                                          height: `100%`,
                                          id: `LTyJCdXVe`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `LTyJCdXVe`,
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
                    ge() &&
                      i(l.div, {
                        className: `framer-1adhaaf hidden-1phe3p7 hidden-1l3dfae`,
                        layout: M,
                        children: [
                          a(l.div, {
                            className: `framer-g611mi`,
                            children: a(v, {
                              __fromCanvasComponent: !0,
                              children: a(r, {
                                children: a(`h1`, {
                                  className: `framer-styles-preset-p50exy`,
                                  "data-styles-preset": `U3NyadGC3`,
                                  dir: `auto`,
                                  children: a(`strong`, { children: `Customer Connect Hub` }),
                                }),
                              }),
                              className: `framer-5qejir`,
                              fonts: [`Inter`, `Inter-Bold`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          a(l.div, {
                            className: `framer-1wgm5oh`,
                            children: a(x, {
                              href: { webPageId: `v0NP7rg_A` },
                              motionChild: !0,
                              nodeId: `h65kqH5i3`,
                              openInNewTab: !1,
                              scopeId: `jFBc0bflX`,
                              children: a(l.a, {
                                className: `framer-a1o386 framer-hhcxh`,
                                "data-framer-name": `Button`,
                                children: a(l.div, {
                                  className: `framer-10m9suz`,
                                  children: a(g, {
                                    breakpoint: O,
                                    overrides: {
                                      Gb4TINP73: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                      J7gfniKpB: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    children: i(_, {
                                      className: `framer-1kmikyn`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        a(_, {
                                          className: `framer-11d7wmh`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        a(_, {
                                          className: `framer-14nckqw`,
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
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-76Tag.framer-hhcxh, .framer-76Tag .framer-hhcxh { display: block; }`,
        `.framer-76Tag.framer-1phe3p7 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-76Tag .framer-1h22k53-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-76Tag .framer-dd1p5c { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-76Tag .framer-tk12nu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-76Tag .framer-1lvbeco { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 0px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-76Tag .framer-1z0nvzp, .framer-76Tag .framer-g611mi { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-76Tag .framer-19jc6yq, .framer-76Tag .framer-5qejir { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-76Tag .framer-by16ai { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-76Tag .framer-11n7w3n, .framer-76Tag .framer-xqhm4i { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-76Tag .framer-1k36lv6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-76Tag .framer-1jf6end { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-76Tag .framer-1qvf12y, .framer-76Tag .framer-10m9suz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-76Tag .framer-fsubnk, .framer-76Tag .framer-1kmikyn { height: 13px; position: relative; width: 14px; }`,
        `.framer-76Tag .framer-497ded, .framer-76Tag .framer-11d7wmh { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-76Tag .framer-104gcdu, .framer-76Tag .framer-14nckqw { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-76Tag .framer-i8d2l5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-iry5n4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-g0dqvc, .framer-76Tag .framer-1reqizj, .framer-76Tag .framer-1sfbyhs, .framer-76Tag .framer-1edl8k, .framer-76Tag .framer-1by85t1, .framer-76Tag .framer-tcckp7, .framer-76Tag .framer-1b96ae7, .framer-76Tag .framer-16kzyb, .framer-76Tag .framer-18oyo33, .framer-76Tag .framer-7r3rk8, .framer-76Tag .framer-198vbwc, .framer-76Tag .framer-vf9gkd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-76Tag .framer-1fgkmjz { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-76Tag .framer-15hzw4r-container, .framer-76Tag .framer-1uzsykv-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-1o1bx81, .framer-76Tag .framer-12zpk7x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-1xk34jg, .framer-76Tag .framer-lmfz0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-1yzr5ny { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-6km3y1, .framer-76Tag .framer-11nej1v, .framer-76Tag .framer-5uplna { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-1d068q3 { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-76Tag .framer-fo1v0, .framer-76Tag .framer-68o5wz, .framer-76Tag .framer-r8zzoz, .framer-76Tag .framer-18k34yv, .framer-76Tag .framer-hiebed, .framer-76Tag .framer-119vi86, .framer-76Tag .framer-ht0ony, .framer-76Tag .framer-132sjkw, .framer-76Tag .framer-1f41jwp, .framer-76Tag .framer-1qgi4z6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-76Tag .framer-1p26lic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-1vs2n10 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-76Tag .framer-1olo9ds, .framer-76Tag .framer-14ag66c, .framer-76Tag .framer-1vp2jjt, .framer-76Tag .framer-1454c90, .framer-76Tag .framer-1n1to8z, .framer-76Tag .framer-r1686g, .framer-76Tag .framer-16ial6o { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-3nfhw5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-76Tag .framer-186famw, .framer-76Tag .framer-1l6uk4v, .framer-76Tag .framer-803hvi, .framer-76Tag .framer-16fci05 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-37z1dq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-ig985f { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 0px 16px; position: relative; scroll-margin-top: 150px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-76Tag .framer-1j211ob { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-76Tag .framer-ksh61g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-76Tag .framer-1adhaaf { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 48px 8px 32px; position: sticky; top: 40px; width: 100%; z-index: 1; }`,
        `.framer-76Tag .framer-1wgm5oh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-76Tag .framer-a1o386 { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 1px 10px 0px 9px; position: relative; text-decoration: none; width: min-content; }`,
        ...L,
        ...Se,
        ...z,
        ..._e,
        ...k,
        ...M,
        ...ke,
        `.framer-76Tag[data-border="true"]::after, .framer-76Tag [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-76Tag.framer-1phe3p7 { width: 1240px; } .framer-76Tag .framer-i8d2l5 { gap: 16px; justify-content: flex-start; } .framer-76Tag .framer-iry5n4, .framer-76Tag .framer-1o1bx81, .framer-76Tag .framer-1xk34jg, .framer-76Tag .framer-1yzr5ny, .framer-76Tag .framer-lmfz0h, .framer-76Tag .framer-1p26lic { gap: 8px; } .framer-76Tag .framer-1d068q3 { gap: 16px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-76Tag.framer-1phe3p7 { flex-direction: column; width: 810px; } .framer-76Tag .framer-1h22k53-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-76Tag .framer-dd1p5c { flex: none; order: 2; overflow: auto; padding: 0px 0px 32px 0px; width: 100%; } .framer-76Tag .framer-i8d2l5 { padding: 16px 48px 0px 48px; } .framer-76Tag .framer-iry5n4, .framer-76Tag .framer-1o1bx81, .framer-76Tag .framer-1xk34jg, .framer-76Tag .framer-1yzr5ny, .framer-76Tag .framer-12zpk7x, .framer-76Tag .framer-1p26lic { gap: 8px; } .framer-76Tag .framer-g0dqvc { order: 0; } .framer-76Tag .framer-1reqizj { order: 1; } .framer-76Tag .framer-1fgkmjz { order: 2; } .framer-76Tag .framer-6km3y1 { padding: 0px 0px 0px 32px; } .framer-76Tag .framer-1d068q3 { padding: 32px 48px 24px 16px; } .framer-76Tag .framer-11nej1v { flex-direction: row; padding: 0px 0px 0px 32px; } .framer-76Tag .framer-5uplna { flex: 1 0 0px; width: 1px; } .framer-76Tag .framer-ig985f { padding: 32px 32px 0px 16px; } .framer-76Tag .framer-1adhaaf { box-shadow: unset; order: 1; } .framer-76Tag .framer-a1o386 { padding: 2px 10px 2px 9px; }}`,
        `@media (max-width: 809.98px) { .framer-76Tag.framer-1phe3p7 { flex-direction: column; width: 390px; } .framer-76Tag .framer-1h22k53-container { height: auto; order: 0; width: 100%; z-index: 2; } .framer-76Tag .framer-dd1p5c { flex: none; order: 2; overflow: auto; padding: 16px 0px 32px 0px; width: 100%; } .framer-76Tag .framer-i8d2l5 { padding: 0px 24px 0px 24px; } .framer-76Tag .framer-iry5n4, .framer-76Tag .framer-1o1bx81, .framer-76Tag .framer-12zpk7x, .framer-76Tag .framer-lmfz0h, .framer-76Tag .framer-1p26lic { gap: 8px; } .framer-76Tag .framer-6km3y1, .framer-76Tag .framer-11nej1v { padding: 0px 0px 0px 16px; } .framer-76Tag .framer-1d068q3 { padding: 16px 24px 24px 8px; } .framer-76Tag .framer-ig985f { padding: 32px 32px 0px 16px; } .framer-76Tag .framer-1adhaaf { align-content: center; align-items: center; box-shadow: unset; order: 1; padding: 16px 24px 8px 24px; } .framer-76Tag .framer-g611mi { padding: 0px; } .framer-76Tag .framer-a1o386 { padding: 2px 10px 2px 8px; }}`,
      ],
      `framer-76Tag`
    )),
    ($.displayName = `Ru / Portfolio 2 / Connecthub 2`),
    ($.defaultProps = { height: 8557.5, width: 1440 }),
    D(
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
        ...b(A),
        ...b(Ce),
        ...b(I),
        ...b(be),
        ...b(de),
        ...b(R),
        ...b(Ae),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => p([() => O(N, {}, t)], t) }),
    (Ie = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerjFBc0bflX`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Xvl2779Qv":{"layout":["fixed","auto"]},"Gb4TINP73":{"layout":["fixed","auto"]},"J7gfniKpB":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"sEeKPetuQ":{"pattern":":sEeKPetuQ","name":"research"},"CXicQXHyJ":{"pattern":":CXicQXHyJ","name":"research-map"},"iKWTngtWU":{"pattern":":iKWTngtWU","name":"prototype"}}`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1440`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `8557.5`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ie as __FramerMetadata__, $ as default, q as queryParamNames };
//# sourceMappingURL=UrAJLjV28oZqll99v3ppBeil4F53nHhWOGz_E6zvK-w.DI5govqd.mjs.map
