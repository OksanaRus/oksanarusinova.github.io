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
import { A as l, a as ne, r as re, t as u } from "./motion.AUYMciny.mjs";
import {
  $ as ie,
  A as d,
  L as ae,
  Q as oe,
  S as f,
  W as p,
  X as m,
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
  t as S,
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
import { i as N, n as P, r as F, t as I } from "./dnqfQO1cP.DpLvdd9U.mjs";
import {
  a as L,
  c as R,
  i as z,
  n as B,
  o as pe,
  r as me,
  s as he,
  t as ge,
} from "./U3NyadGC3.BwBuOktC.mjs";
import _e, { t as ve } from "./QCiIHVAccyyq-4wo6PgRtcuw7dMFPBxFBbCxdGUACYg.Dth7-lSC.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    ae(),
    u(),
    n(),
    k(),
    N(),
    D(),
    ue(),
    R(),
    z(),
    ve(),
    (V = d(j)),
    (H = {
      c4UVkII0P: `(min-width: 1440px)`,
      CrQlS5q0K: `(max-width: 809.98px)`,
      crV_7TqZ_: `(min-width: 810px) and (max-width: 1239.98px)`,
      Vdw2124u2: `(min-width: 1240px) and (max-width: 1439.98px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-EYfXR`),
    (K = {
      c4UVkII0P: `framer-v-efqszq`,
      CrQlS5q0K: `framer-v-14662qb`,
      crV_7TqZ_: `framer-v-1d9rt5a`,
      Vdw2124u2: `framer-v-16y0sml`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `c4UVkII0P`, Laptop: `Vdw2124u2`, Phone: `CrQlS5q0K`, Tablet: `crV_7TqZ_` }),
    (X = ({ value: e }) =>
      C()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `c4UVkII0P`,
    })),
    (Q = g(
      s(function (e, n) {
        let s = te(null),
          c = n ?? s,
          u = ee(),
          { activeLocale: d, setLocale: ae } = ce(),
          p = m(),
          { style: g, className: y, layoutId: C, variant: w, ...T } = Z(e);
        le(t(() => _e({}, d), [d]));
        let [E, ue] = ie(w, H, !1),
          D = f(G, ge, fe, de, L, I),
          O = i(h)?.isLayoutTemplate,
          k = !!i(ne)?.transition?.layout,
          A = q(O, k),
          M = () => !U() || E !== `CrQlS5q0K`;
        return (
          oe({}),
          o(h.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Y,
              primaryVariantId: `c4UVkII0P`,
              variantClassNames: K,
            },
            children: a(re, {
              id: C ?? u,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(l.div, {
                  ...T,
                  className: f(D, `framer-efqszq`, y),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: E,
                      overrides: {
                        CrQlS5q0K: { height: 800, width: p?.width || `100vw` },
                        crV_7TqZ_: { height: 800, width: p?.width || `100vw` },
                      },
                      children: o(S, {
                        height: 1e3,
                        children: o(se, {
                          className: `framer-1rn3y7m-container`,
                          layout: A,
                          nodeId: `G3az4A8oL`,
                          scopeId: `Y4OqO87uw`,
                          children: o(_, {
                            breakpoint: E,
                            overrides: {
                              CrQlS5q0K: { style: { width: `100%` }, variant: J(`uNyq4fbPF`) },
                              crV_7TqZ_: { style: { width: `100%` }, variant: J(`wTSt7CULk`) },
                            },
                            children: o(j, {
                              height: `100%`,
                              id: `G3az4A8oL`,
                              layoutId: `G3az4A8oL`,
                              style: { height: `100%` },
                              variant: J(`VJwjE6noT`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(l.div, {
                      className: `framer-om7om6`,
                      "data-framer-name": `Frame 31`,
                      layout: A,
                      children: [
                        a(`div`, {
                          className: `framer-7ol8nm`,
                          "data-framer-name": `Intro`,
                          children: [
                            a(`div`, {
                              className: `framer-4k1qm8`,
                              children: [
                                a(`div`, {
                                  className: `framer-1ry1sdl`,
                                  "data-framer-name": `Frame 3`,
                                  children: [
                                    o(v, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: o(`strong`, { children: `краткий профиль` }),
                                        }),
                                      }),
                                      className: `framer-1sm4vv2`,
                                      "data-framer-name": `About`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(v, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Senior Product / UX Designer с 10+ лет опыта в end-to-end продуктах B2B, B2B2C и B2E в сферах Healthcare и FinTech. `,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Специализируюсь на упрощении сложных процессов и превращении их в масштабируемые и интуитивно понятные решения; имею практический опыт интеграции AI в продукты для решения реальных бизнес-задач.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-1j2uaoo`,
                                      "data-framer-name": `An Enterprise UX professional with 10+ years of experience. Passionate about finding simple and elegant solutions to solve complex problems. I design products that are user friendly, have intuitive interface and drive business goals. Currently, working on streamlining, simplifying and generally improving Healthcare-related products in US as part of Optum’s (United Healthcare Group) UX team. \u2028I specialize in creative design solutions, focusing on product strategy, visual design, and interaction design. Additionally, I have expertise in design thinking, content strategy, responsive design, accessibility design, design systems, and various aspects of user research.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                M() &&
                                  o(`div`, {
                                    className: `framer-qmoefe hidden-14662qb`,
                                    "data-framer-name": `Frame 3`,
                                    children: o(_, {
                                      breakpoint: E,
                                      overrides: {
                                        crV_7TqZ_: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 913,
                                            pixelWidth: 874,
                                            positionX: `center`,
                                            positionY: `top`,
                                            sizes: `282.8773px`,
                                            src: `../../assets/images/hJPUTXodnM8nITCe8m4V9ZHYvaQ.png`,
                                            srcSet: `../../assets/images/hJPUTXodnM8nITCe8m4V9ZHYvaQ.png 874w`,
                                          },
                                          fitImageDimension: `width`,
                                        },
                                        Vdw2124u2: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 913,
                                            pixelWidth: 874,
                                            positionX: `center`,
                                            positionY: `top`,
                                            src: `../../assets/images/hJPUTXodnM8nITCe8m4V9ZHYvaQ.png`,
                                            srcSet: `../../assets/images/hJPUTXodnM8nITCe8m4V9ZHYvaQ.png 874w`,
                                          },
                                        },
                                      },
                                      children: o(x, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 913,
                                          pixelWidth: 874,
                                          positionX: `center`,
                                          positionY: `top`,
                                          sizes: `283px`,
                                          src: `../../assets/images/hJPUTXodnM8nITCe8m4V9ZHYvaQ.png`,
                                          srcSet: `../../assets/images/hJPUTXodnM8nITCe8m4V9ZHYvaQ.png 874w`,
                                        },
                                        className: `framer-13mre45`,
                                        "data-border": !0,
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-qt22r1`,
                              children: [
                                o(_, {
                                  breakpoint: E,
                                  overrides: {
                                    CrQlS5q0K: {
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          children: o(`strong`, { children: `Ключевые навыки:` }),
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
                                        children: o(`strong`, { children: `Ключевые навыки:` }),
                                      }),
                                    }),
                                    className: `framer-oe72vu`,
                                    "data-framer-name": `An Enterprise UX professional with 10+ years of experience. Passionate about finding simple and elegant solutions to solve complex problems. I design products that are user friendly, have intuitive interface and drive business goals. Currently, working on streamlining, simplifying and generally improving Healthcare-related products in US as part of Optum’s (United Healthcare Group) UX team. \u2028I specialize in creative design solutions, focusing on product strategy, visual design, and interaction design. Additionally, I have expertise in design thinking, content strategy, responsive design, accessibility design, design systems, and various aspects of user research.`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(v, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: a(`ul`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: [
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `B2B-интерфейсы` }),
                                              ` — приоритизация функциональности и эффективности пользовательских сценариев при сохранении консистентного и аккуратного UI.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `Системное мышление` }),
                                              ` — Проектирование взаимосвязанных систем с масштабируемой архитектурой интерфейсов с использованием компонентов, вариантов и auto-layout в Figma.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, {
                                                children: `Кросс-функциональное взаимодействие`,
                                              }),
                                              ` — Перевод бизнес-целей, потребностей пользователей и технических ограничений в эффективные дизайн-решения`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, {
                                                children: `UX-исследования и тестирование`,
                                              }),
                                              ` — Применение гипотезно-ориентированного подхода через пользовательские интервью, CJM (карты пользовательского пути), юзабилити-тестирование и аналитику.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, {
                                                children: `End-to-End продуктовый дизайн`,
                                              }),
                                              ` — Ведение полного цикла дизайна от исследования до реализации: процессы, вайрфреймы, прототипы и UI с итеративным подходом. (Figma, Sketch, Balsamiq, Adobe CC)`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `Дизайн-системы` }),
                                              ` — Cтандартизация UI-паттернов, документация и поддержка командного взаимодействия (FigJam, Miro, Mirrow).`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `AI в UX` }),
                                              ` — Использование AI для генерации идей, персонализации и анализа поведения пользователей. Интеграция AI-инструментов в продуктовые решения (ChatGPT, DALL·E, Figma Make, Codex).`,
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-n5jmlj`,
                                  "data-framer-name": `An Enterprise UX professional with 10+ years of experience. Passionate about finding simple and elegant solutions to solve complex problems. I design products that are user friendly, have intuitive interface and drive business goals. Currently, working on streamlining, simplifying and generally improving Healthcare-related products in US as part of Optum’s (United Healthcare Group) UX team. \u2028I specialize in creative design solutions, focusing on product strategy, visual design, and interaction design. Additionally, I have expertise in design thinking, content strategy, responsive design, accessibility design, design systems, and various aspects of user research.`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        a(`div`, {
                          className: `framer-18fxew`,
                          "data-framer-name": `Body`,
                          children: [
                            a(`div`, {
                              className: `framer-1np3cs4`,
                              "data-framer-name": `Experience`,
                              children: [
                                o(v, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h1`, {
                                      className: `framer-styles-preset-p50exy`,
                                      "data-styles-preset": `U3NyadGC3`,
                                      children: o(`strong`, { children: `Опыт` }),
                                    }),
                                  }),
                                  className: `framer-ji4pd0`,
                                  "data-framer-name": `Experience`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-19cqeat`,
                                  "data-framer-name": `Frame 6`,
                                  children: [
                                    o(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 88,
                                        pixelWidth: 92,
                                        sizes: `46px`,
                                        src: `../../assets/images/r7bC0IDXaduJs1ya3dBMlgdYc.png`,
                                      },
                                      className: `framer-1mkqpwp`,
                                      "data-framer-name": `image 1`,
                                    }),
                                    a(`div`, {
                                      className: `framer-f29tf5`,
                                      "data-framer-name": `Frame 7`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1mxfbx9`,
                                          "data-framer-name": `Frame 4`,
                                          children: [
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: a(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: [
                                                    o(`strong`, {
                                                      children: `Sr. Product UX Designer`,
                                                    }),
                                                    o(`br`, {}),
                                                    `Optum (Subsidiary of United Healthcare Group)`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-1dequtj`,
                                              "data-framer-name": `Optum (United Healthcare Group) - Principal Enterprise UX Designer`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: `09.2022 – по настоящее время`,
                                                }),
                                              }),
                                              className: `framer-1u3dt8q`,
                                              "data-framer-name": `Sep 2022 - Present / Full-time`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: [
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `Трансформирую сложные, многошаговые legacy-приложения в Medtech в современные, структурированные порталы с использованием многоразовых компонентов для упрощения разработки и обеспечения консистентного UI.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `За 4 года в Optum я работала над множеством критически важных для бизнеса (enterprise-level) решений, включая:`,
                                              }),
                                              a(`ul`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: [
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: a(`p`, {
                                                      children: [
                                                        `Веду многолетний поэтапный продуктовый дизайн-проект по объединению десятков разрозненных систем онбординга и регистрации в единый портал самообслуживания. Совместно с product-менеджером определяю продуктовую стратегию, упрощаю пользовательские сценарии и веду end-to-end дизайн пользовательского опыта на всех этапах внедрения. Результат: после первого апдейта в начале 2026 года количество обращений в поддержку по вопросам регистрации снизилось более чем на 40% в течение первых трёх месяцев, что подтвердило повышение удобства использования и операционной эффективности.(`,
                                                        o(b, {
                                                          href: { webPageId: `AgTyDC1r5` },
                                                          motionChild: !0,
                                                          nodeId: `yI15xuwNI`,
                                                          openInNewTab: !1,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `Y4OqO87uw`,
                                                          smoothScroll: !1,
                                                          children: o(l.a, {
                                                            className: `framer-styles-preset-5o0yrv`,
                                                            "data-styles-preset": `dnqfQO1cP`,
                                                            children: `См. кейс Enrollments`,
                                                          }),
                                                        }),
                                                        `)`,
                                                      ],
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: a(`p`, {
                                                      children: [
                                                        `Совместно с Product-командой разработала и реализовала стратегию единого портала, объединив многоуровневые решения под одним логином. Это упростило процессы для клиентов, повысило безопасность и позволило Optum интегрировать несколько независимых продуктов в единый консистентный UI. (`,
                                                        o(b, {
                                                          href: { webPageId: `yNWqB1Ufr` },
                                                          motionChild: !0,
                                                          nodeId: `yI15xuwNI`,
                                                          openInNewTab: !1,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `Y4OqO87uw`,
                                                          smoothScroll: !1,
                                                          children: o(l.a, {
                                                            className: `framer-styles-preset-5o0yrv`,
                                                            "data-styles-preset": `dnqfQO1cP`,
                                                            children: `См. кейс Connect Center Hub`,
                                                          }),
                                                        }),
                                                        `)`,
                                                      ],
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: a(`p`, {
                                                      children: [
                                                        `Создала набор plug-in приложений для многоразового использования на уровне всей компании, включая инструмент преобразования PDF в цифровые формы. (`,
                                                        o(b, {
                                                          href: { webPageId: `ZZVh6lBF_` },
                                                          motionChild: !0,
                                                          nodeId: `yI15xuwNI`,
                                                          openInNewTab: !1,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `Y4OqO87uw`,
                                                          smoothScroll: !1,
                                                          children: o(l.a, {
                                                            className: `framer-styles-preset-5o0yrv`,
                                                            "data-styles-preset": `dnqfQO1cP`,
                                                            children: `См. кейс PDF Mapping`,
                                                          }),
                                                        }),
                                                        `)`,
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `Я достигла этих результатов в роли тимлида, тесно работая с дизайнерами и исследователями, и развивая культуру менторства и обмена знаниями. Такой подход обеспечивает консистентность дизайна, а также соблюдение регуляторных требований и соответствие продуктовой стратегии.`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-r5wgfc`,
                                          "data-framer-name": `As a\xA0Principal Enterprise UX Designer\xA0at Optum, I led the design of innovative and user-centered solutions for both new and legacy healthcare products, directly impacting the experiences of healthcare professionals and patients. I spearheaded multiple projects, conducting user research, analyzing data, and collaborating with cross-functional teams to define and deliver intuitive, accessible, and scalable designs. By creating wireframes, prototypes, and design specifications, I effectively communicated solutions that balanced user needs with business goals. I also mentored junior designers, advocated for user-centered design principles, and presented design strategies to stakeholders, ensuring alignment and buy-in. My work contributed to improving healthcare workflows and enhancing patient outcomes, while staying ahead of industry trends and regulatory requirements.`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-150gf8t`,
                                  "data-framer-name": `Frame 5`,
                                  children: [
                                    o(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 96,
                                        pixelWidth: 96,
                                        sizes: `48px`,
                                        src: `../../assets/images/qHjkpmP5eOpfBDvzmrgj0sA.png`,
                                      },
                                      className: `framer-4sg1pi`,
                                      "data-framer-name": `image 2`,
                                    }),
                                    a(`div`, {
                                      className: `framer-xarkj6`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-15rnyrg`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: a(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: [
                                                    o(`strong`, {
                                                      children: `Sr. UX, UI Application Designer`,
                                                    }),
                                                    o(`br`, {}),
                                                    `TransUnion`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-1vcw3x9`,
                                              "data-framer-name": `Optum (United Healthcare Group) - Principal Enterprise UX Designer`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: `10.2016 - 09.2022`,
                                                }),
                                              }),
                                              className: `framer-fcbm4e`,
                                              "data-framer-name": `Oct 2016 - Sep 2022 / Full-time`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: [
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `В TransUnion я возглавляла продуктовый дизайн по объединению нескольких порталов поддержки на базе Salesforce в единую корпоративную тикетинговую платформу, обеспечив консистентный и эффективный пользовательский опыт для всех цифровых продуктов.`,
                                              }),
                                              a(`ul`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: [
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Проводила пользовательские исследования и анализ, формируя чёткие требования к опыту и отстаивая потребности пользователей в сложных многошаговых сценариях`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Разрабатывала end-to-end дизайн-артефакты, включая вайрфреймы, прототипы, карты сайта, спецификации функционала и документацию по взаимодействию`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Тесно сотрудничала с кросс-функциональными командами, дизайнерами, исследователями, контент-специалистами и разработчиками`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Обеспечивала дизайн-консультации на этапе реализации, контролируя точность воплощения UX-видения на различных платформах и в разных регионах`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Участвовала во внутренних инновационных инициативах, развивая UX-практики и стандартизируя дизайн-процессы для корпоративных приложений`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          className: `framer-1moww29`,
                                          "data-framer-name": `At TransUnion I conducted research, analysis, and interpretation of diverse inputs to define and document user experience requirements. Advocated for user needs to guide and enhance design decisions. Developed comprehensive design deliverables, including wireframes, prototypes, site maps, feature lists, and specifications. Collaborated closely with cross-functional teams, including visual designers, content specialists, and developers, throughout ideation, design, and development stages. Provided ongoing consultation during development and rollout to ensure accurate implementation and communication of designs. Contributed to internal innovation initiatives focused on advancing user experience practices.`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-zbr21s`,
                                  "data-framer-name": `Frame 6`,
                                  children: [
                                    o(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        pixelHeight: 54,
                                        pixelWidth: 110,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `48px`,
                                        src: `../../assets/images/lYRDD06wj5Ko5r9wQu8G04GTFnA.png`,
                                      },
                                      className: `framer-12y5m2a`,
                                      "data-framer-name": `image 2`,
                                    }),
                                    a(`div`, {
                                      className: `framer-10yfk4x`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-60sv8s`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-swbm40`,
                                              children: [
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: o(`strong`, {
                                                        children: `UX Architect`,
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-3gmq9g`,
                                                  "data-framer-name": `Optum (United Healthcare Group) - Principal Enterprise UX Designer`,
                                                  fonts: [`Inter`, `Inter-Bold`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: `Premier Farnell`,
                                                    }),
                                                  }),
                                                  className: `framer-1b4gjru`,
                                                  "data-framer-name": `Optum (United Healthcare Group) - Principal Enterprise UX Designer`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: `01.2016 - 06.2016`,
                                                }),
                                              }),
                                              className: `framer-lvkgz3`,
                                              "data-framer-name": `Oct 2016 - Sep 2022 / Full-time`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(v, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              children: `В компании Premier Farnell я возглавляла разработку продуктов, основанных на анализе данных, с целью улучшения операционной эффективности через передовую аналитику и автоматизацию. Наше внимание к повышению удобства использования обеспечивало интуитивно понятные решения, адаптированные для заинтересованных сторон и конечных пользователей. Кроме того, мы модернизировали устаревшие продукты, интегрируя передовые технологии, чтобы соответствовать отраслевым стандартам и улучшить их долговременные возможности. Эти усилия были направлены на стимулирование инноваций, эффективности и удовлетворенности пользователей в различных областях и приложениях.`,
                                            }),
                                          }),
                                          className: `framer-1fh0jgj`,
                                          "data-framer-name": `At Premier Farnell I led the development of data-driven products aimed at improving operational efficiencies through advanced analytics and automation. Our focus on enhancing usability ensured intuitive experiences tailored to stakeholders and end-users. Additionally, we modernized legacy products by integrating cutting-edge technologies, aligning them with industry standards, and enhancing their long-term capabilities. These efforts aimed to drive innovation, efficiency, and user satisfaction across diverse domains and applications.`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-18g13px`,
                                  "data-framer-name": `Frame 7`,
                                  children: [
                                    o(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 96,
                                        pixelWidth: 96,
                                        sizes: `48px`,
                                        src: `../../assets/images/qHjkpmP5eOpfBDvzmrgj0sA.png`,
                                      },
                                      className: `framer-1o8dfft`,
                                      "data-framer-name": `image 2`,
                                    }),
                                    a(`div`, {
                                      className: `framer-w4rcia`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1btzwcx`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1ehoa28`,
                                              children: [
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: o(`strong`, {
                                                        children: `Business Analyst (Product Owner/UX Designer)`,
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-ymc68w`,
                                                  "data-framer-name": `Optum (United Healthcare Group) - Principal Enterprise UX Designer`,
                                                  fonts: [`Inter`, `Inter-Bold`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: `TransUnion`,
                                                    }),
                                                  }),
                                                  className: `framer-v1surm`,
                                                  "data-framer-name": `Optum (United Healthcare Group) - Principal Enterprise UX Designer`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: `02.2008 - 10.2015`,
                                                }),
                                              }),
                                              className: `framer-1omfyun`,
                                              "data-framer-name": `Oct 2016 - Sep 2022 / Full-time`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(v, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              children: `В TransUnion я совмещала роли владельца продукта, продуктового аналитика и UX-дизайнера. Мои обязанности включали формулирование целей и требований проекта, проведение тестирования на удобство использования, анализ полученных данных и улучшение дизайна на основе результатов исследований UX. Я создавала карты сайта, каркасы (wireframes), высокодетализированные макеты и интерактивные прототипы. Благодаря тесной кооперации с деловыми подразделениями и IT, я обеспечивала бесшовную интеграцию новых разработок с существующими веб-платформами, тем самым оптимизируя функциональность и оперативную эффективность.`,
                                            }),
                                          }),
                                          className: `framer-17p8wnu`,
                                          "data-framer-name": `I fulfilled a hybrid role encompassing Product Owner, Product Analyst, and UX Designer responsibilities. My duties included defining project objectives and requirements, conducting usability testing, analyzing findings, and refining design solutions based on UX study results. I created site maps, wireframes, high-fidelity mockups, and interactive prototypes. Through collaborative efforts with business units and IT, I ensured the seamless integration of new developments with existing web platforms, thereby optimizing functionality and operational efficiency.`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1pgfqx1`,
                              "data-framer-name": `Education`,
                              children: [
                                o(v, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h1`, {
                                      className: `framer-styles-preset-p50exy`,
                                      "data-styles-preset": `U3NyadGC3`,
                                      children: o(`strong`, { children: `Образование` }),
                                    }),
                                  }),
                                  className: `framer-1b2gfd1`,
                                  "data-framer-name": `Education`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-1kyuj46`,
                                  "data-framer-name": `Frame 29`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-17dit45`,
                                      "data-framer-name": `Frame 7`,
                                      children: [
                                        o(x, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 78,
                                            pixelWidth: 70,
                                            sizes: `46px`,
                                            src: `../../assets/images/ZqWKuXSlyYsXMTTbmDmcl3Xt6ao.png`,
                                          },
                                          className: `framer-34zz9o`,
                                          "data-framer-name": `image 1`,
                                        }),
                                        a(`div`, {
                                          className: `framer-ynzlrn`,
                                          "data-framer-name": `Frame 7`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1gr5vyr`,
                                              "data-framer-name": `Frame 4`,
                                              children: [
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: `DePaul University`,
                                                    }),
                                                  }),
                                                  className: `framer-zy85fc`,
                                                  "data-framer-name": `DePaul University`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: `2009 - 2012`,
                                                    }),
                                                  }),
                                                  className: `framer-wcp4pm`,
                                                  "data-framer-name": `2009 - 2012`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: `Магистр наук в области бизнес-информационных технологий из высшей школы бизнеса Кэлстадт`,
                                                }),
                                              }),
                                              className: `framer-1u52k0v`,
                                              "data-framer-name": `MS, Business Information Technology from Kellstadt Graduate School of Business`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-e8a9tg`,
                                      "data-framer-name": `Frame 8`,
                                      children: [
                                        o(x, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 80,
                                            pixelWidth: 82,
                                            sizes: `46px`,
                                            src: `../../assets/images/OrtU87EjvOJK0wG296SAy6rYk4.png`,
                                          },
                                          className: `framer-dc6af1`,
                                          "data-framer-name": `image 1`,
                                        }),
                                        a(`div`, {
                                          className: `framer-j97c37`,
                                          "data-framer-name": `Frame 7`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-15c65yj`,
                                              "data-framer-name": `Frame 4`,
                                              children: [
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: `Grand Valley State University`,
                                                    }),
                                                  }),
                                                  className: `framer-1hez7g4`,
                                                  "data-framer-name": `Grand Valley State University`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: `2003 - 2007`,
                                                    }),
                                                  }),
                                                  className: `framer-dq9kiu`,
                                                  "data-framer-name": `2003 - 2007`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            o(v, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: `Бакалавр делового администрирования, международного бизнеса и маркетинга в Колледже бизнеса Сейдмана`,
                                                }),
                                              }),
                                              className: `framer-1to8n2`,
                                              "data-framer-name": `BBA, International Business and Marketing from Seidman College of Business`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
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
        `.framer-EYfXR.framer-1t4rbxf, .framer-EYfXR .framer-1t4rbxf { display: block; }`,
        `.framer-EYfXR.framer-efqszq { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-EYfXR .framer-1rn3y7m-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-EYfXR .framer-om7om6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 64px 0px; position: relative; width: 1px; }`,
        `.framer-EYfXR .framer-7ol8nm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-4k1qm8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-1ry1sdl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 87px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-EYfXR .framer-1sm4vv2, .framer-EYfXR .framer-ji4pd0, .framer-EYfXR .framer-1dequtj, .framer-EYfXR .framer-1u3dt8q, .framer-EYfXR .framer-1vcw3x9, .framer-EYfXR .framer-fcbm4e, .framer-EYfXR .framer-3gmq9g, .framer-EYfXR .framer-1b4gjru, .framer-EYfXR .framer-lvkgz3, .framer-EYfXR .framer-ymc68w, .framer-EYfXR .framer-v1surm, .framer-EYfXR .framer-1omfyun, .framer-EYfXR .framer-zy85fc, .framer-EYfXR .framer-wcp4pm, .framer-EYfXR .framer-1hez7g4, .framer-EYfXR .framer-dq9kiu { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-EYfXR .framer-1j2uaoo, .framer-EYfXR .framer-oe72vu, .framer-EYfXR .framer-n5jmlj, .framer-EYfXR .framer-r5wgfc, .framer-EYfXR .framer-1moww29, .framer-EYfXR .framer-1fh0jgj, .framer-EYfXR .framer-17p8wnu, .framer-EYfXR .framer-1b2gfd1, .framer-EYfXR .framer-1u52k0v, .framer-EYfXR .framer-1to8n2 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EYfXR .framer-qmoefe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 333px; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-EYfXR .framer-13mre45 { --border-bottom-width: 4px; --border-color: #222222; --border-left-width: 4px; --border-right-width: 4px; --border-style: double; --border-top-width: 4px; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 295px; position: relative; width: 283px; }`,
        `.framer-EYfXR .framer-qt22r1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-18fxew { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-1np3cs4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-19cqeat, .framer-EYfXR .framer-150gf8t, .framer-EYfXR .framer-zbr21s, .framer-EYfXR .framer-18g13px { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-1mkqpwp, .framer-EYfXR .framer-34zz9o, .framer-EYfXR .framer-dc6af1 { aspect-ratio: 1.0454545454545454 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 46px; }`,
        `.framer-EYfXR .framer-f29tf5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-EYfXR .framer-1mxfbx9, .framer-EYfXR .framer-15rnyrg, .framer-EYfXR .framer-60sv8s, .framer-EYfXR .framer-1btzwcx { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-4sg1pi, .framer-EYfXR .framer-1o8dfft { aspect-ratio: 1 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 48px; }`,
        `.framer-EYfXR .framer-xarkj6, .framer-EYfXR .framer-10yfk4x, .framer-EYfXR .framer-w4rcia { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-EYfXR .framer-12y5m2a { aspect-ratio: 1.7142857142857142 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 48px; }`,
        `.framer-EYfXR .framer-swbm40, .framer-EYfXR .framer-1ehoa28 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-EYfXR .framer-1pgfqx1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-1kyuj46 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-17dit45, .framer-EYfXR .framer-e8a9tg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EYfXR .framer-ynzlrn, .framer-EYfXR .framer-j97c37 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-EYfXR .framer-1gr5vyr, .framer-EYfXR .framer-15c65yj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        ...B,
        ...A,
        ...M,
        ...pe,
        ...P,
        `.framer-EYfXR[data-border="true"]::after, .framer-EYfXR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-EYfXR.framer-efqszq { width: 1240px; } .framer-EYfXR .framer-1ry1sdl { flex: none; justify-content: flex-start; width: 480px; } .framer-EYfXR .framer-qmoefe { align-self: stretch; flex: 1 0 0px; height: auto; width: 1px; } .framer-EYfXR .framer-13mre45 { flex: 1 0 0px; height: 1px; width: 100%; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-EYfXR.framer-efqszq { flex-direction: column; gap: 16px; width: 810px; } .framer-EYfXR .framer-1rn3y7m-container { height: auto; width: 100%; } .framer-EYfXR .framer-om7om6 { flex: none; padding: 0px 48px 48px 48px; width: 100%; } .framer-EYfXR .framer-4k1qm8 { align-content: center; align-items: center; gap: 16px; padding: 0px; } .framer-EYfXR .framer-1ry1sdl, .framer-EYfXR .framer-qt22r1, .framer-EYfXR .framer-18fxew { padding: 0px; } .framer-EYfXR .framer-qmoefe { align-self: stretch; height: auto; padding: 0px; width: 283px; } .framer-EYfXR .framer-13mre45 { height: 296px; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-EYfXR.framer-efqszq { flex-direction: column; gap: 16px; width: 390px; } .framer-EYfXR .framer-1rn3y7m-container { height: auto; width: 100%; } .framer-EYfXR .framer-om7om6 { flex: none; gap: 24px; padding: 0px 24px 24px 24px; width: 100%; } .framer-EYfXR .framer-4k1qm8 { align-content: center; align-items: center; padding: 0px; } .framer-EYfXR .framer-1ry1sdl, .framer-EYfXR .framer-qt22r1 { padding: 0px; } .framer-EYfXR .framer-18fxew { gap: 24px; padding: 0px; } .framer-EYfXR .framer-1np3cs4 { gap: 16px; }}`,
      ],
      `framer-EYfXR`
    )),
    (Q.displayName = `Home`),
    (Q.defaultProps = { height: 3289.5, width: 1440 }),
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
          ],
        },
        ...V,
        ...y(me),
        ...y(O),
        ...y(E),
        ...y(he),
        ...y(F),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => p([() => T(j, {}, t)], t) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerY4OqO87uw`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `3289.5`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `false`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1440`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Vdw2124u2":{"layout":["fixed","auto"]},"crV_7TqZ_":{"layout":["fixed","auto"]},"CrQlS5q0K":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=HFOf4xK1wa9GkR7_lL5ArhxZh1XKoP2lAp6mhodgDLc.Bqe-c-o-.mjs.map
