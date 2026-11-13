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
import { S as l, a as ne, r as re, t as ie } from "./motion.CcP9hEf_.mjs";
import {
  $ as ae,
  F as u,
  O as d,
  Q as oe,
  S as f,
  W as p,
  X as m,
  _ as h,
  a as g,
  b as _,
  ct as v,
  f as y,
  k as b,
  m as x,
  n as se,
  nt as ce,
  rt as le,
  s as S,
  t as ue,
  tt as C,
} from "./framer.DkH54azp.mjs";
import {
  c as w,
  d as de,
  f as T,
  l as fe,
  m as E,
  n as D,
  p as O,
  s as pe,
  t as k,
  u as A,
} from "./A9Wi3tJm7.DxAh4jTX.mjs";
import {
  a as me,
  c as j,
  i as he,
  n as M,
  o as N,
  r as P,
  s as F,
  t as I,
} from "./U3NyadGC3.D4-KMvY1.mjs";
import { n as L, r as ge } from "./Y4OqO87uw.PUt_3AGE.mjs";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (c(),
      u(),
      ie(),
      n(),
      D(),
      E(),
      A(),
      j(),
      he(),
      L(),
      (R = d(k)),
      (z = {
        c4UVkII0P: `(min-width: 1440px)`,
        CrQlS5q0K: `(max-width: 809.98px)`,
        crV_7TqZ_: `(min-width: 810px) and (max-width: 1239.98px)`,
        Vdw2124u2: `(min-width: 1240px) and (max-width: 1439.98px)`,
      }),
      (B = () => typeof document < `u`),
      (V = []),
      (H = `framer-y2XGU`),
      (U = {
        c4UVkII0P: `framer-v-efqszq`,
        CrQlS5q0K: `framer-v-14662qb`,
        crV_7TqZ_: `framer-v-1d9rt5a`,
        Vdw2124u2: `framer-v-16y0sml`,
      }),
      (W = (e, t, n) => (e && t ? `position` : n)),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (K = { Desktop: `c4UVkII0P`, Laptop: `Vdw2124u2`, Phone: `CrQlS5q0K`, Tablet: `crV_7TqZ_` }),
      (q = ({ value: e }) =>
        C()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `c4UVkII0P`,
      })),
      (Y = /*#__PURE__*/ s(function (e, n) {
        let s = te(null),
          c = n ?? s;
        ee();
        let { activeLocale: ie, contentLocale: u, setLocale: d } = ce(),
          f = m(),
          { style: p, className: h, layoutId: v, variant: b, ...C } = J(e),
          w = t(() => ge({}, u), [u]);
        le(w);
        let [T, fe] = ae(b, z, !1),
          E = _(H, I, de, pe, me),
          D = i(g)?.isLayoutTemplate,
          O = !!i(ne)?.transition?.layout,
          A = W(D, O),
          j = () => !B() || T !== `CrQlS5q0K`;
        return (
          oe({}),
          /*#__PURE__*/ o(g.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: K,
              primaryVariantId: `c4UVkII0P`,
              variantClassNames: U,
            },
            children: /*#__PURE__*/ a(re, {
              id: v ?? `Y4OqO87uw`,
              children: [
                /*#__PURE__*/ o(q, { value: `html body { background: rgb(253, 251, 248); }` }),
                /*#__PURE__*/ a(l.div, {
                  ...C,
                  className: _(E, `framer-efqszq`, h),
                  ref: c,
                  style: { ...p },
                  children: [
                    /*#__PURE__*/ o(y, {
                      breakpoint: T,
                      overrides: {
                        CrQlS5q0K: { height: 800, width: f?.width || `100vw` },
                        crV_7TqZ_: { height: 800, width: f?.width || `100vw` },
                      },
                      children: /*#__PURE__*/ o(ue, {
                        height: 1e3,
                        children: /*#__PURE__*/ o(se, {
                          className: `framer-1rn3y7m-container`,
                          layout: A,
                          nodeId: `G3az4A8oL`,
                          scopeId: `Y4OqO87uw`,
                          children: /*#__PURE__*/ o(y, {
                            breakpoint: T,
                            overrides: {
                              CrQlS5q0K: { style: { width: `100%` }, variant: G(`uNyq4fbPF`) },
                              crV_7TqZ_: { style: { width: `100%` }, variant: G(`wTSt7CULk`) },
                            },
                            children: /*#__PURE__*/ o(k, {
                              height: `100%`,
                              id: `G3az4A8oL`,
                              layoutId: `G3az4A8oL`,
                              style: { height: `100%` },
                              variant: G(`VJwjE6noT`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ a(l.div, {
                      className: `framer-om7om6`,
                      "data-framer-name": `Frame 31`,
                      layout: A,
                      children: [
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-7ol8nm`,
                          "data-framer-name": `Intro`,
                          children: [
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-4k1qm8`,
                              children: [
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1ry1sdl`,
                                  "data-framer-name": `Frame 3`,
                                  children: [
                                    /*#__PURE__*/ o(x, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: /*#__PURE__*/ o(`strong`, {
                                            children: `краткий профиль`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1sm4vv2`,
                                      "data-framer-name": `About`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(x, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ a(r, {
                                        children: [
                                          /*#__PURE__*/ o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Senior Product / UX Designer с 10+ лет опыта в end-to-end продуктах B2B, B2B2C и B2E в сферах Healthcare и FinTech. `,
                                          }),
                                          /*#__PURE__*/ o(`p`, {
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
                                j() &&
                                  /*#__PURE__*/ o(`div`, {
                                    className: `framer-qmoefe hidden-14662qb`,
                                    "data-framer-name": `Frame 3`,
                                    children: /*#__PURE__*/ o(y, {
                                      breakpoint: T,
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
                                      children: /*#__PURE__*/ o(S, {
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-qt22r1`,
                              children: [
                                /*#__PURE__*/ o(y, {
                                  breakpoint: T,
                                  overrides: {
                                    CrQlS5q0K: {
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          children: /*#__PURE__*/ o(`strong`, {
                                            children: `Ключевые навыки:`,
                                          }),
                                        }),
                                      }),
                                    },
                                  },
                                  children: /*#__PURE__*/ o(x, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Ключевые навыки:`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-oe72vu`,
                                    "data-framer-name": `An Enterprise UX professional with 10+ years of experience. Passionate about finding simple and elegant solutions to solve complex problems. I design products that are user friendly, have intuitive interface and drive business goals. Currently, working on streamlining, simplifying and generally improving Healthcare-related products in US as part of Optum’s (United Healthcare Group) UX team. \u2028I specialize in creative design solutions, focusing on product strategy, visual design, and interaction design. Additionally, I have expertise in design thinking, content strategy, responsive design, accessibility design, design systems, and various aspects of user research.`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ o(x, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ a(`ul`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                      children: [
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ a(`p`, {
                                            style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                            children: [
                                              /*#__PURE__*/ o(`strong`, {
                                                children: `Сложные пользовательские сценарии`,
                                              }),
                                              ` — Проектирование B2B- и B2B2C-продуктов.`,
                                            ],
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ a(`p`, {
                                            style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                            children: [
                                              /*#__PURE__*/ o(`strong`, {
                                                children: `AI-интеграция`,
                                              }),
                                              ` — Внедрение AI-возможностей в существующие и новые продукты.`,
                                            ],
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ a(`p`, {
                                            style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                            children: [
                                              /*#__PURE__*/ o(`strong`, {
                                                children: `Системное мышление и дизайн-системы`,
                                              }),
                                              ` — Создание масштабируемых компонентов и консистентных UI-паттернов.`,
                                            ],
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ a(`p`, {
                                            style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                            children: [
                                              /*#__PURE__*/ o(`strong`, {
                                                children: `UX-исследования и валидация`,
                                              }),
                                              ` — Интервью, CJM, юзабилити-тестирование и аналитика для проверки гипотез.`,
                                            ],
                                          }),
                                        }),
                                        /*#__PURE__*/ o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: /*#__PURE__*/ a(`p`, {
                                            style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                            children: [
                                              /*#__PURE__*/ o(`strong`, {
                                                children: `End-to-End продуктовый дизайн`,
                                              }),
                                              ` — Полный цикл дизайна от исследования до реализации: пользовательские сценарии, вайрфреймы, прототипы и UI. Инструменты: Figma, Sketch, Balsamiq, Adobe CC.`,
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
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-18fxew`,
                          "data-framer-name": `Body`,
                          children: [
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1np3cs4`,
                              "data-framer-name": `Experience`,
                              children: [
                                /*#__PURE__*/ o(x, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h1`, {
                                      className: `framer-styles-preset-p50exy`,
                                      "data-styles-preset": `U3NyadGC3`,
                                      children: /*#__PURE__*/ o(`strong`, { children: `Опыт` }),
                                    }),
                                  }),
                                  className: `framer-ji4pd0`,
                                  "data-framer-name": `Experience`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-19cqeat`,
                                  "data-framer-name": `Frame 6`,
                                  children: [
                                    j() &&
                                      /*#__PURE__*/ o(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          pixelHeight: 88,
                                          pixelWidth: 92,
                                          sizes: `46px`,
                                          src: `../../assets/images/r7bC0IDXaduJs1ya3dBMlgdYc.png`,
                                        },
                                        className: `framer-1mkqpwp hidden-14662qb`,
                                        "data-framer-name": `image 1`,
                                      }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-f29tf5`,
                                      "data-framer-name": `Frame 7`,
                                      children: [
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-1mxfbx9`,
                                          "data-framer-name": `Frame 4`,
                                          children: [
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ a(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: [
                                                    /*#__PURE__*/ o(`strong`, {
                                                      children: `Sr. Product UX Designer`,
                                                    }),
                                                    /*#__PURE__*/ o(`br`, {}),
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
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                        /*#__PURE__*/ o(x, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ a(r, {
                                            children: [
                                              /*#__PURE__*/ o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                                children: `Трансформирую сложные B2B-системы в современные, масштабируемые порталы с консистентным UI. `,
                                              }),
                                              /*#__PURE__*/ o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(20, 20, 20)` },
                                                children: `Последние два года я работала над тремя ключевыми проектами:`,
                                              }),
                                              /*#__PURE__*/ a(`ul`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ a(`p`, {
                                                      children: [
                                                        /*#__PURE__*/ o(`strong`, {
                                                          children: `Enrollments:`,
                                                        }),
                                                        ` Веду поэтапную трансформацию legacy-систем онбординга в интуитивно понятный портал самообслуживания, не требующий дополнительного обучения пользователей. После первого релиза количество обращений в поддержку по вопросам регистрации снизилось более чем на 40%.`,
                                                      ],
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ a(`p`, {
                                                      children: [
                                                        /*#__PURE__*/ o(`strong`, {
                                                          children: `AI-powered PDF Mapping:`,
                                                        }),
                                                        ` Совместно с командой разработала AI-плагин для автоматизации настройки Enrollments, позволяющий объединять данные из множества PDF-форм в единую цифровую форму регистрации и поддерживать сценарий many-to-one.`,
                                                      ],
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ a(`p`, {
                                                      children: [
                                                        /*#__PURE__*/ o(`strong`, {
                                                          children: `Connect Center Hub:`,
                                                        }),
                                                        ` Объединяю несколько legacy-продуктов в единый портал с общим логином и консистентным пользовательским интерфейсом.`,
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          className: `framer-r5wgfc`,
                                          "data-framer-name": `As a\xA0Principal Enterprise UX Designer\xA0at Optum, I led the design of innovative and user-centered solutions for both new and legacy healthcare products, directly impacting the experiences of healthcare professionals and patients. I spearheaded multiple projects, conducting user research, analyzing data, and collaborating with cross-functional teams to define and deliver intuitive, accessible, and scalable designs. By creating wireframes, prototypes, and design specifications, I effectively communicated solutions that balanced user needs with business goals. I also mentored junior designers, advocated for user-centered design principles, and presented design strategies to stakeholders, ensuring alignment and buy-in. My work contributed to improving healthcare workflows and enhancing patient outcomes, while staying ahead of industry trends and regulatory requirements.`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-150gf8t`,
                                  "data-framer-name": `Frame 5`,
                                  children: [
                                    j() &&
                                      /*#__PURE__*/ o(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          pixelHeight: 96,
                                          pixelWidth: 96,
                                          sizes: `48px`,
                                          src: `../../assets/images/qHjkpmP5eOpfBDvzmrgj0sA.png`,
                                        },
                                        className: `framer-4sg1pi hidden-14662qb`,
                                        "data-framer-name": `image 2`,
                                      }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-xarkj6`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-15rnyrg`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ a(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  children: [
                                                    /*#__PURE__*/ o(`strong`, {
                                                      children: `Sr. UX, UI Application Designer`,
                                                    }),
                                                    /*#__PURE__*/ o(`br`, {}),
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
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                        /*#__PURE__*/ o(x, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ a(`ul`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: [
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Руководила объединением нескольких Salesforce-порталов поддержки в единую корпоративную тикетинговую платформу с консистентным UX.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Проводила исследования и проектировала сложные пользовательские сценарии.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Сотрудничала с кросс-функциональными командами и контролировала качество реализации на разных платформах и рынках.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Развивала UX-практики и стандартизировала дизайн-процессы компании.`,
                                                  }),
                                                }),
                                              ],
                                            }),
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
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-zbr21s`,
                                  "data-framer-name": `Frame 6`,
                                  children: [
                                    j() &&
                                      /*#__PURE__*/ o(S, {
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
                                        className: `framer-12y5m2a hidden-14662qb`,
                                        "data-framer-name": `image 2`,
                                      }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-10yfk4x`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-60sv8s`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            /*#__PURE__*/ a(`div`, {
                                              className: `framer-swbm40`,
                                              children: [
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: /*#__PURE__*/ o(`strong`, {
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
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                        /*#__PURE__*/ o(x, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ a(`ul`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: [
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Руководила дизайном B2C-продуктов, оптимизируя пользовательские сценарии, CJM и конверсию.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Совместно с маркетингом и контент-командой улучшала UX посадочных страниц и вовлечённость пользователей.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Анализировала веб- и продуктовые метрики для выявления точек роста и устранения барьеров в пользовательских сценариях.`,
                                                  }),
                                                }),
                                              ],
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
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-18g13px`,
                                  "data-framer-name": `Frame 7`,
                                  children: [
                                    j() &&
                                      /*#__PURE__*/ o(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          pixelHeight: 96,
                                          pixelWidth: 96,
                                          sizes: `48px`,
                                          src: `../../assets/images/qHjkpmP5eOpfBDvzmrgj0sA.png`,
                                        },
                                        className: `framer-1o8dfft hidden-14662qb`,
                                        "data-framer-name": `image 2`,
                                      }),
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-w4rcia`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-1btzwcx`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            /*#__PURE__*/ a(`div`, {
                                              className: `framer-1ehoa28`,
                                              children: [
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      children: /*#__PURE__*/ o(`strong`, {
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
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                        /*#__PURE__*/ o(x, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ a(`ul`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: [
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Работала в глобальной команде Shared Services, отвечая за развитие цифрового присутствия TransUnion на международных рынках.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Управляла развитием TransUnion.com и международных версий сайта: UX/UI, веб-аналитика и контент.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Спроектировала с нуля первый полностью онлайн-продукт TransUnion: CJM, информационную архитектуру, вайрфреймы и прототипы.`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ o(`p`, {
                                                    children: `Участвовала в редизайне бренда (2012–2014), обновляя интерфейсы в соответствии с новой визуальной стратегией.`,
                                                  }),
                                                }),
                                              ],
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
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1pgfqx1`,
                              "data-framer-name": `Education`,
                              children: [
                                /*#__PURE__*/ o(x, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(r, {
                                    children: /*#__PURE__*/ o(`h1`, {
                                      className: `framer-styles-preset-p50exy`,
                                      "data-styles-preset": `U3NyadGC3`,
                                      children: /*#__PURE__*/ o(`strong`, {
                                        children: `Образование`,
                                      }),
                                    }),
                                  }),
                                  className: `framer-1b2gfd1`,
                                  "data-framer-name": `Education`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1kyuj46`,
                                  "data-framer-name": `Frame 29`,
                                  children: [
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-17dit45`,
                                      "data-framer-name": `Frame 7`,
                                      children: [
                                        /*#__PURE__*/ o(S, {
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
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-ynzlrn`,
                                          "data-framer-name": `Frame 7`,
                                          children: [
                                            /*#__PURE__*/ a(`div`, {
                                              className: `framer-1gr5vyr`,
                                              "data-framer-name": `Frame 4`,
                                              children: [
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
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
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                                    /*#__PURE__*/ a(`div`, {
                                      className: `framer-e8a9tg`,
                                      "data-framer-name": `Frame 8`,
                                      children: [
                                        /*#__PURE__*/ o(S, {
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
                                        /*#__PURE__*/ a(`div`, {
                                          className: `framer-j97c37`,
                                          "data-framer-name": `Frame 7`,
                                          children: [
                                            /*#__PURE__*/ a(`div`, {
                                              className: `framer-15c65yj`,
                                              "data-framer-name": `Frame 4`,
                                              children: [
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
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
                                                /*#__PURE__*/ o(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ o(r, {
                                                    children: /*#__PURE__*/ o(`p`, {
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
                                            /*#__PURE__*/ o(x, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ o(r, {
                                                children: /*#__PURE__*/ o(`p`, {
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
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `.framer-y2XGU.framer-1t4rbxf, .framer-y2XGU .framer-1t4rbxf { display: block; }`,
        `.framer-y2XGU.framer-efqszq { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-y2XGU .framer-1rn3y7m-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-y2XGU .framer-om7om6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 64px 0px; position: relative; width: 1px; }`,
        `.framer-y2XGU .framer-7ol8nm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-4k1qm8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-1ry1sdl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 87px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-y2XGU .framer-1sm4vv2, .framer-y2XGU .framer-ji4pd0, .framer-y2XGU .framer-1dequtj, .framer-y2XGU .framer-1u3dt8q, .framer-y2XGU .framer-1vcw3x9, .framer-y2XGU .framer-fcbm4e, .framer-y2XGU .framer-3gmq9g, .framer-y2XGU .framer-1b4gjru, .framer-y2XGU .framer-lvkgz3, .framer-y2XGU .framer-ymc68w, .framer-y2XGU .framer-v1surm, .framer-y2XGU .framer-1omfyun, .framer-y2XGU .framer-zy85fc, .framer-y2XGU .framer-wcp4pm, .framer-y2XGU .framer-1hez7g4, .framer-y2XGU .framer-dq9kiu { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-y2XGU .framer-1j2uaoo, .framer-y2XGU .framer-oe72vu, .framer-y2XGU .framer-n5jmlj, .framer-y2XGU .framer-r5wgfc, .framer-y2XGU .framer-1moww29, .framer-y2XGU .framer-1fh0jgj, .framer-y2XGU .framer-17p8wnu, .framer-y2XGU .framer-1b2gfd1, .framer-y2XGU .framer-1u52k0v, .framer-y2XGU .framer-1to8n2 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-y2XGU .framer-qmoefe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 333px; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-y2XGU .framer-13mre45 { --border-bottom-width: 4px; --border-color: #222222; --border-left-width: 4px; --border-right-width: 4px; --border-style: double; --border-top-width: 4px; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 295px; position: relative; width: 283px; }`,
        `.framer-y2XGU .framer-qt22r1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-18fxew { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-1np3cs4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-19cqeat, .framer-y2XGU .framer-150gf8t, .framer-y2XGU .framer-zbr21s, .framer-y2XGU .framer-18g13px { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-1mkqpwp, .framer-y2XGU .framer-34zz9o, .framer-y2XGU .framer-dc6af1 { aspect-ratio: 1.0454545454545454 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 46px; }`,
        `.framer-y2XGU .framer-f29tf5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-y2XGU .framer-1mxfbx9, .framer-y2XGU .framer-15rnyrg, .framer-y2XGU .framer-60sv8s, .framer-y2XGU .framer-1btzwcx { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-4sg1pi, .framer-y2XGU .framer-1o8dfft { aspect-ratio: 1 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 48px; }`,
        `.framer-y2XGU .framer-xarkj6, .framer-y2XGU .framer-10yfk4x, .framer-y2XGU .framer-w4rcia { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-y2XGU .framer-12y5m2a { aspect-ratio: 1.7142857142857142 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 48px; }`,
        `.framer-y2XGU .framer-swbm40, .framer-y2XGU .framer-1ehoa28 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-y2XGU .framer-1pgfqx1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-1kyuj46 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-17dit45, .framer-y2XGU .framer-e8a9tg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y2XGU .framer-ynzlrn, .framer-y2XGU .framer-j97c37 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-y2XGU .framer-1gr5vyr, .framer-y2XGU .framer-15c65yj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        ...M,
        ...T,
        ...w,
        ...N,
        `.framer-y2XGU[data-border="true"]::after, .framer-y2XGU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-y2XGU.framer-efqszq { width: 1240px; } .framer-y2XGU .framer-1ry1sdl { flex: none; justify-content: flex-start; width: 480px; } .framer-y2XGU .framer-qmoefe { align-self: stretch; flex: 1 0 0px; height: auto; width: 1px; } .framer-y2XGU .framer-13mre45 { flex: 1 0 0px; height: 1px; width: 100%; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-y2XGU.framer-efqszq { flex-direction: column; gap: 16px; width: 810px; } .framer-y2XGU .framer-1rn3y7m-container { height: auto; width: 100%; } .framer-y2XGU .framer-om7om6 { flex: none; padding: 0px 48px 48px 48px; width: 100%; } .framer-y2XGU .framer-4k1qm8 { align-content: center; align-items: center; gap: 16px; padding: 0px; } .framer-y2XGU .framer-1ry1sdl, .framer-y2XGU .framer-qt22r1, .framer-y2XGU .framer-18fxew { padding: 0px; } .framer-y2XGU .framer-qmoefe { align-self: stretch; height: auto; padding: 0px; width: 283px; } .framer-y2XGU .framer-13mre45 { height: 296px; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-y2XGU.framer-efqszq { flex-direction: column; gap: 16px; width: 390px; } .framer-y2XGU .framer-1rn3y7m-container { height: auto; width: 100%; } .framer-y2XGU .framer-om7om6 { flex: none; gap: 24px; padding: 0px 24px 24px 24px; width: 100%; } .framer-y2XGU .framer-4k1qm8 { align-content: center; align-items: center; padding: 0px; } .framer-y2XGU .framer-1ry1sdl, .framer-y2XGU .framer-qt22r1 { padding: 0px; } .framer-y2XGU .framer-18fxew { gap: 24px; padding: 0px; } .framer-y2XGU .framer-1np3cs4 { gap: 16px; }}`,
      ]),
      (Z = v(Y, X, `framer-y2XGU`)),
      (Z.displayName = `Home`),
      (Z.defaultProps = { height: 2355, width: 1440 }),
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
            ],
          },
          ...R,
          ...b(P),
          ...b(O),
          ...b(fe),
          ...b(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => p([() => f(k, {}, t)], t) }),
      (Q = {
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
              framerIntrinsicHeight: `2355`,
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
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default, V as queryParamNames };
//# sourceMappingURL=BDpdvQY7HqxtwpjC1IkTNpkeB2bcK2Y-FiKbvLe734Y.DkE1q0Zk.mjs.map
