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
import { a as te, r as ne, t as u, x as d } from "./motion.CZCLJn0h.mjs";
import {
  $ as re,
  A as f,
  L as ie,
  M as p,
  Q as ae,
  S as m,
  W as h,
  X as oe,
  a as se,
  ct as g,
  f as _,
  g as v,
  h as y,
  it as b,
  j as x,
  l as S,
  lt as C,
  n as w,
  nt as ce,
  rt as le,
  s as ue,
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
  m as pe,
  o as me,
  p as he,
  r as ge,
  s as _e,
  u as ve,
  v as ye,
  w as be,
  x as xe,
  y as Se,
} from "./shared-lib.0T242d49.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./rHJW28QP9.DDXzYFc_.mjs";
import { i as De, n as Oe, r as z, t as ke } from "./Auth.gSmpk-8B.mjs";
import Ae, { t as je } from "./WBpGzUytcvXc3LfmA-6BCcErLprkqhiQPdfbSeE1QVY.zCAnc9GK.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, Me;
e(() => {
  (c(),
    ie(),
    u(),
    n(),
    De(),
    P(),
    ke(),
    be(),
    j(),
    Ce(),
    ve(),
    me(),
    F(),
    je(),
    (B = f(N)),
    (V = f(z)),
    (H = C(d.div, { nodeId: `zgk0QaDsK`, override: Oe, scopeId: `pVjAhsh5N` })),
    (U = {
      sklJvkDHA: `(max-width: 809.98px)`,
      tnB6i87FL: `(min-width: 810px) and (max-width: 1239.98px)`,
      uaL9v0B0w: `(min-width: 1240px) and (max-width: 1439.98px)`,
      zgk0QaDsK: `(min-width: 1440px)`,
    }),
    (W = () => typeof document < `u`),
    (G = []),
    (K = `framer-u0h4s`),
    (q = {
      sklJvkDHA: `framer-v-xin06n`,
      tnB6i87FL: `framer-v-m204ki`,
      uaL9v0B0w: `framer-v-1jdl1ak`,
      zgk0QaDsK: `framer-v-1tndy4v`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (X = { Desktop: `zgk0QaDsK`, Laptop: `uaL9v0B0w`, Phone: `sklJvkDHA`, Tablet: `tnB6i87FL` }),
    (Z = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `zgk0QaDsK`,
    })),
    ($ = g(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          u = ee(),
          { activeLocale: f, setLocale: ie } = ce(),
          h = oe(),
          { style: g, className: x, layoutId: C, variant: E, ...D } = Q(e);
        le(t(() => Ae({}, f), [f]));
        let [O, de] = re(E, U, !1),
          k = m(K, ge, Ee, he, fe, xe, _e),
          A = i(se)?.isLayoutTemplate,
          j = !!i(te)?.transition?.layout,
          M = J(A, j),
          P = () => !W() || ![`tnB6i87FL`, `sklJvkDHA`].includes(O),
          F = b(`N2qrz6sgb`),
          I = l(null),
          L = b(`PXDWSVpoO`),
          R = l(null);
        return (
          ae({}),
          o(se.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: X,
              primaryVariantId: `zgk0QaDsK`,
              variantClassNames: q,
            },
            children: a(ne, {
              id: C ?? u,
              children: [
                o(Z, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(H, {
                  ...D,
                  className: m(k, `framer-1tndy4v`, x),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: O,
                      overrides: {
                        sklJvkDHA: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                        tnB6i87FL: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(T, {
                        height: 1e3,
                        y: (h?.y || 0) + 0,
                        children: o(w, {
                          className: `framer-1thhwxq-container`,
                          layout: M,
                          nodeId: `xXv5vxwMh`,
                          rendersWithMotion: !0,
                          scopeId: `pVjAhsh5N`,
                          children: o(_, {
                            breakpoint: O,
                            overrides: {
                              sklJvkDHA: { style: { width: `100%` }, variant: Y(`XJ7hq0Zpp`) },
                              tnB6i87FL: { style: { width: `100%` }, variant: Y(`YCYFEcIjL`) },
                            },
                            children: o(N, {
                              height: `100%`,
                              id: `xXv5vxwMh`,
                              layoutId: `xXv5vxwMh`,
                              style: { height: `100%` },
                              variant: Y(`IstTIDm1f`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-225q7t`,
                      layout: M,
                      children: a(d.div, {
                        className: `framer-1yzngg8`,
                        children: [
                          a(d.div, {
                            className: `framer-jp77ck`,
                            children: [
                              a(d.div, {
                                className: `framer-16bm6to`,
                                children: [
                                  o(d.div, {
                                    className: `framer-em6n0n`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Data File Delivery (DFD)`,
                                        }),
                                      }),
                                      className: `framer-nkf0e6`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(S, {
                                    href: { webPageId: `v0NP7rg_A` },
                                    motionChild: !0,
                                    nodeId: `P3uAEKvY3`,
                                    openInNewTab: !1,
                                    scopeId: `pVjAhsh5N`,
                                    children: o(_, {
                                      breakpoint: O,
                                      overrides: {
                                        sklJvkDHA: { "data-border": !0 },
                                        tnB6i87FL: { "data-border": !0 },
                                      },
                                      children: o(d.a, {
                                        className: `framer-73q7jy framer-79m7tg`,
                                        "data-framer-name": `Button`,
                                        children: o(d.div, {
                                          className: `framer-in870d`,
                                          children: o(_, {
                                            breakpoint: O,
                                            overrides: {
                                              sklJvkDHA: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                              },
                                              tnB6i87FL: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                              },
                                            },
                                            children: a(v, {
                                              className: `framer-1qpsw8y`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                o(v, {
                                                  className: `framer-4ywouf`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(v, {
                                                  className: `framer-1c9admt`,
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
                              P() &&
                                a(d.div, {
                                  className: `framer-1lva40s hidden-m204ki hidden-xin06n`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1504gar`,
                                          "data-styles-preset": `rHJW28QP9`,
                                          dir: `auto`,
                                          children: o(S, {
                                            href: { hash: `:N2qrz6sgb`, webPageId: `pVjAhsh5N` },
                                            motionChild: !0,
                                            nodeId: `BDqgCdG_5`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `pVjAhsh5N`,
                                            smoothScroll: !0,
                                            children: o(d.a, {
                                              className: `framer-styles-preset-fx4193`,
                                              "data-styles-preset": `uWIEDCuYW`,
                                              children: o(`strong`, {
                                                children: `Системная архитектура`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1biyn5k`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1504gar`,
                                          "data-styles-preset": `rHJW28QP9`,
                                          dir: `auto`,
                                          children: o(S, {
                                            href: { hash: `:PXDWSVpoO`, webPageId: `pVjAhsh5N` },
                                            motionChild: !0,
                                            nodeId: `VfXhmjjvD`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `pVjAhsh5N`,
                                            smoothScroll: !0,
                                            children: o(d.a, {
                                              className: `framer-styles-preset-fx4193`,
                                              "data-styles-preset": `uWIEDCuYW`,
                                              children: o(`strong`, { children: `Прототип DFD` }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-rfc6j1`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          a(d.div, {
                            className: `framer-186guu5`,
                            children: [
                              a(d.div, {
                                className: `framer-hgfa9k`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        children: o(`strong`, { children: `Обзор проекта` }),
                                      }),
                                    }),
                                    className: `framer-1xaba0n`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: [
                                          o(`strong`, { children: `DFD (Data File Delivery)` }),
                                          ` — внутренний административный инструмент, разработанный для замены нескольких разрозненных систем единым централизованным решением. Продукт автоматизирует доставку критически важных файлов, включая инструкции к медицинскому оборудованию, сервисные уведомления и обновления. Доставка осуществляется как по подписке, так и по запросу, в зависимости от сценария использования.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-qb6q6x`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-1jru6ph`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: o(`strong`, { children: `Основная задача` }),
                                      }),
                                    }),
                                    className: `framer-75jf0w`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: `Команды поддержки работали с набором устаревших и несвязанных инструментов, частично выполняя рассылки вручную. Процессы были повторяющимися, подверженными ошибкам и сложными в поддержке, с отдельными потоками настройки для продуктов и клиентов и ручным связыванием коммуникаций. Задача заключалась в том, чтобы объединить эти процессы в единый инструмент, способный поддерживать широкий спектр сценариев доставки при жёстких ограничениях по времени и бюджету.`,
                                      }),
                                    }),
                                    className: `framer-8izra9`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-165f7`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: o(`strong`, { children: `Моя роль` }),
                                      }),
                                    }),
                                    className: `framer-11if07f`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Я выступала в роли единственного UX-дизайнера и вела проект end-to-end. В тесном сотрудничестве с product manager и ключевыми внутренними пользователями я анализировала существующие рабочие процессы, выявляла проблемные зоны и проектировала архитектуру единого приложения. В зону моей ответственности входили картирование рабочих процессов, разработка информационной архитектуры и модели данных, а также проектирование взаимодействий с фокусом на минимизацию времени обучения и операционных затрат.`,
                                      }),
                                    }),
                                    className: `framer-14bafrt`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-1nuv5wb`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: o(`strong`, { children: `Решение` }),
                                      }),
                                    }),
                                    className: `framer-4eao9n`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: `Мы разработали единое приложение, которое объединяет управление подписками, пользовательскими группами, графиками коммуникаций и лендинг-страницами в одной системе. Важной частью решения стало переосмысление процесса настройки как гибкой, нелинейной системы, в которую пользователи могут входить и вносить изменения на любом этапе. Централизация данных и автоматизация назначения коммуникаций на уровне продукта позволили устранить ручные операции и гарантировать, что нужные пользователи всегда получают соответствующие обновления.`,
                                      }),
                                    }),
                                    className: `framer-eh75rd`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-16uhfa0`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: o(`strong`, { children: `Ключевые UX-решения` }),
                                      }),
                                    }),
                                    className: `framer-1q5kd4z`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: a(`ul`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
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
                                    className: `framer-y6799l`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-zs96zs`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: [o(`strong`, { children: `Инструменты:` }), ` `],
                                      }),
                                    }),
                                    className: `framer-1z0nke4`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: [
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            o(`strong`, { children: `Figma` }),
                                            `: для создания макетов и прототипов.`,
                                          ],
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            o(`strong`, { children: `FigJam` }),
                                            `: для совместной работы, сбора идей и анализа интервью с пользователями.`,
                                          ],
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            o(`strong`, { children: `Microsoft Loop` }),
                                            `: для ведения документации, координации команды и организации рабочего процесса.`,
                                          ],
                                        }),
                                      ],
                                    }),
                                    className: `framer-b53oiz`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-1dx6uib`,
                                "data-border": !0,
                                id: F,
                                ref: I,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: o(`strong`, {
                                          children: `Системная архитектура`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-zzge6p`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(d.div, {
                                    className: `framer-dahpmo`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
                                          a(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: [
                                              `Ключевой особенностью нового инструмента стало внедрение модели `,
                                              o(`strong`, { children: `many-to-many` }),
                                              ` и групп как отдельных объектов. Возможность объединять получателей в группы позволила выстроить единый рабочий процесс по цепочке «инструменты → сообщения / группы сообщений → группы пользователей → инструменты» вместо прежних разрозненных связок. В старой системе эти потоки существовали отдельно друг от друга, группы создавались заново в каждом сценарии и использовались только в рамках конкретной настройки. На финальном этапе все элементы приходилось связывать вручную.`,
                                            ],
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `В новом решении был реализован циклический процесс настройки. Администраторы могут создавать группы пользователей и группы сообщений, связывать их между собой и использовать на протяжении всего жизненного цикла инструмента, а также обновлять состав групп без необходимости изменять другие настройки. Новая архитектура сократила количество ошибок и упростила планирование коммуникаций. Централизация данных в одном приложении позволила назначать коммуникации на уровне продукта и автоматически доставлять обновления нужным пользователям без ручного вмешательства.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-1ce38dk`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(d.div, {
                                    className: `framer-razyn9`,
                                    children: [
                                      o(d.div, {
                                        className: `framer-66c98j`,
                                        children: o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h3`, {
                                              className: `framer-styles-preset-bdezu4`,
                                              "data-styles-preset": `TWYWOtjjp`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: o(`strong`, {
                                                children: `Диаграммы оригинального и нового процессов`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1ir97jb`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      o(d.div, {
                                        className: `framer-1ybt30p`,
                                        children: o(_, {
                                          breakpoint: O,
                                          overrides: {
                                            sklJvkDHA: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    69.2 +
                                                    0 +
                                                    1966 +
                                                    16 +
                                                    349 +
                                                    0 +
                                                    54.8 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1490,
                                                pixelWidth: 2093,
                                                positionX: `left`,
                                                positionY: `top`,
                                                sizes: `calc(${h?.width || `100vw`} - 56px)`,
                                                src: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490`,
                                                srcSet: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=512&width=2093&height=1490 512w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=1024&width=2093&height=1490 1024w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=2048&width=2093&height=1490 2048w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490 2093w`,
                                              },
                                            },
                                            tnB6i87FL: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    69.2 +
                                                    0 +
                                                    2014 +
                                                    32 +
                                                    349 +
                                                    0 +
                                                    54.8 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1490,
                                                pixelWidth: 2093,
                                                positionX: `left`,
                                                positionY: `top`,
                                                sizes: `calc(${h?.width || `100vw`} - 80px)`,
                                                src: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490`,
                                                srcSet: `https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=512&width=2093&height=1490 512w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=1024&width=2093&height=1490 1024w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?scale-down-to=2048&width=2093&height=1490 2048w,https://framerusercontent.com/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png?width=2093&height=1490 2093w`,
                                              },
                                            },
                                            uaL9v0B0w: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: p(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    2014 +
                                                    32 +
                                                    333 +
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
                                          },
                                          children: o(ue, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 799,
                                              intrinsicWidth: 959,
                                              loading: p(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  158 +
                                                  0 +
                                                  2014 +
                                                  32 +
                                                  349 +
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
                                            className: `framer-1o1s4jn`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a(d.div, {
                                className: `framer-12w2lvq`,
                                "data-border": !0,
                                id: L,
                                ref: R,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: o(`strong`, { children: `Прототип DFD` }),
                                      }),
                                    }),
                                    className: `framer-1cet5u7`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Прототип DFD предполагает добавление нового инструмента как отдельной функции к существующему админ-порталу. Через навигацию пользователь может выбрать объект, с которого хочет зайти в инструмент. Далее пользователь может создавать сообщения, формировать группы и разрабатывать лендинги в удобной последовательности, работая в едином рабочем пространстве. Процесс спроектирован как гибкий, цикличный поток, позволяющий в любой момент начинать, корректировать или возвращаться к любому этапу. Каждый элемент функционирует автономно и может быть привязан к продукту или отсоединён от него по мере необходимости. Такой подход существенно упрощает и ускоряет настройку кампаний.`,
                                      }),
                                    }),
                                    className: `framer-xz55m1`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(d.div, {
                                    className: `framer-3bv99h`,
                                    children: o(T, {
                                      children: o(w, {
                                        className: `framer-45jbqb-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `Gw0bqm_1B`,
                                        rendersWithMotion: !0,
                                        scopeId: `pVjAhsh5N`,
                                        children: o(z, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !0,
                                          height: `100%`,
                                          id: `Gw0bqm_1B`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `Gw0bqm_1B`,
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
        `.framer-u0h4s.framer-79m7tg, .framer-u0h4s .framer-79m7tg { display: block; }`,
        `.framer-u0h4s.framer-1tndy4v { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-u0h4s .framer-1thhwxq-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-u0h4s .framer-225q7t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-u0h4s .framer-1yzngg8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-jp77ck { align-content: flex-start; align-items: flex-start; background-color: #fdfbf9; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 8px 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-u0h4s .framer-16bm6to { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-em6n0n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-u0h4s .framer-nkf0e6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-u0h4s .framer-73q7jy { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-u0h4s .framer-in870d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-u0h4s .framer-1qpsw8y { height: 13px; position: relative; width: 14px; }`,
        `.framer-u0h4s .framer-4ywouf { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-u0h4s .framer-1c9admt { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-u0h4s .framer-1lva40s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-u0h4s .framer-1biyn5k, .framer-u0h4s .framer-rfc6j1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-u0h4s .framer-186guu5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-hgfa9k, .framer-u0h4s .framer-dahpmo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-1xaba0n, .framer-u0h4s .framer-qb6q6x, .framer-u0h4s .framer-75jf0w, .framer-u0h4s .framer-8izra9, .framer-u0h4s .framer-11if07f, .framer-u0h4s .framer-14bafrt, .framer-u0h4s .framer-4eao9n, .framer-u0h4s .framer-eh75rd, .framer-u0h4s .framer-1q5kd4z, .framer-u0h4s .framer-y6799l, .framer-u0h4s .framer-1z0nke4, .framer-u0h4s .framer-b53oiz, .framer-u0h4s .framer-zzge6p, .framer-u0h4s .framer-1ce38dk, .framer-u0h4s .framer-xz55m1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-u0h4s .framer-1jru6ph, .framer-u0h4s .framer-165f7, .framer-u0h4s .framer-16uhfa0, .framer-u0h4s .framer-zs96zs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-1nuv5wb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-1dx6uib { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-u0h4s .framer-razyn9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-66c98j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 0px 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-1ir97jb, .framer-u0h4s .framer-1cet5u7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-u0h4s .framer-1ybt30p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-u0h4s .framer-1o1s4jn { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-12w2lvq { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 0px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-u0h4s .framer-3bv99h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-u0h4s .framer-45jbqb-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...L,
        ...we,
        ...pe,
        ...ye,
        ...k,
        ...M,
        `.framer-u0h4s[data-border="true"]::after, .framer-u0h4s [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-u0h4s.framer-1tndy4v { flex-direction: column; width: 810px; } .framer-u0h4s .framer-1thhwxq-container { height: auto; width: 100%; z-index: 2; } .framer-u0h4s .framer-225q7t { flex: none; overflow: hidden; padding: 32px 0px 64px 32px; width: 100%; } .framer-u0h4s .framer-1yzngg8 { gap: 16px; order: 0; } .framer-u0h4s .framer-jp77ck { box-shadow: unset; padding: 0px; position: relative; top: unset; z-index: 0; } .framer-u0h4s .framer-16bm6to, .framer-u0h4s .framer-186guu5 { padding: 0px 32px 0px 0px; } .framer-u0h4s .framer-73q7jy { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-u0h4s .framer-razyn9 { overflow: var(--overflow-clip-fallback, clip); } .framer-u0h4s .framer-3bv99h { flex-direction: column; } .framer-u0h4s .framer-45jbqb-container { flex: none; width: 100%; }}`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-u0h4s.framer-1tndy4v { width: 1240px; } .framer-u0h4s .framer-1dx6uib { gap: 16px; } .framer-u0h4s .framer-dahpmo, .framer-u0h4s .framer-razyn9 { gap: 8px; }}`,
        `@media (max-width: 809.98px) { .framer-u0h4s.framer-1tndy4v { flex-direction: column; width: 390px; } .framer-u0h4s .framer-1thhwxq-container { height: auto; width: 100%; z-index: 2; } .framer-u0h4s .framer-225q7t { flex: none; overflow: hidden; padding: 32px 24px 32px 24px; width: 100%; } .framer-u0h4s .framer-1yzngg8 { gap: 16px; order: 0; } .framer-u0h4s .framer-jp77ck { align-content: center; align-items: center; box-shadow: unset; padding: 0px; position: relative; top: unset; } .framer-u0h4s .framer-16bm6to { order: 1; } .framer-u0h4s .framer-73q7jy { --border-bottom-width: 1px; --border-color: #341a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; padding: 2px 16px 2px 13px; } .framer-u0h4s .framer-186guu5 { gap: 24px; padding: 0px; } .framer-u0h4s .framer-1dx6uib { padding: 16px 0px 24px 8px; } .framer-u0h4s .framer-dahpmo { gap: 8px; } .framer-u0h4s .framer-66c98j { padding: 0px; } .framer-u0h4s .framer-12w2lvq { padding: 16px 0px 0px 8px; } .framer-u0h4s .framer-3bv99h { flex-direction: column; } .framer-u0h4s .framer-45jbqb-container { flex: none; width: 100%; }}`,
      ],
      `framer-u0h4s`
    )),
    ($.displayName = `Portfolio / Dfd`),
    ($.defaultProps = { height: 3765, width: 1440 }),
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
        ...B,
        ...V,
        ...x(A),
        ...x(Te),
        ...x(I),
        ...x(Se),
        ...x(de),
        ...x(R),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => h([() => O(N, {}, t)], t) }),
    (Me = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerpVjAhsh5N`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1440`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"N2qrz6sgb":{"pattern":":N2qrz6sgb","name":"research"},"PXDWSVpoO":{"pattern":":PXDWSVpoO","name":"prototype"}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tnB6i87FL":{"layout":["fixed","auto"]},"uaL9v0B0w":{"layout":["fixed","auto"]},"sklJvkDHA":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `3765`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, $ as default, G as queryParamNames };
//# sourceMappingURL=cXv6uXfR-rWJ9BNmGMPjJltiDGIrh9w8iQAPocMaY7I.1nZZGP1V.mjs.map
