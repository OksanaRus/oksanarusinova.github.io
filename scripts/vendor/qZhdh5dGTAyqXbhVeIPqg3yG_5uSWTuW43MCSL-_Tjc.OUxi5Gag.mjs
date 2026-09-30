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
import { a as te, r as ne, t as re, x as u } from "./motion.CZCLJn0h.mjs";
import {
  $ as ie,
  A as d,
  L as ae,
  M as f,
  Q as oe,
  S as p,
  W as m,
  X as se,
  a as h,
  ct as g,
  f as _,
  g as v,
  h as y,
  it as ce,
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
import Oe, { t as ke } from "./nPvbAbp9mnDO9_h7-YviilzdkTAndKQO10tbgWTt_Do.DUDXL48P.mjs";
var H, U, W, G, K, q, J, Y, X, Z, Q, Ae, je, $, Me;
e(() => {
  (c(),
    ae(),
    re(),
    n(),
    Te(),
    P(),
    De(),
    ve(),
    j(),
    xe(),
    ge(),
    B(),
    F(),
    ke(),
    (H = d(N)),
    (U = d(V)),
    (W = S(u.div, { nodeId: `VrLFz36Kh`, override: Ee, scopeId: `wcki3OcY_` })),
    (G = {
      CpJoOsDxW: `(min-width: 1240px) and (max-width: 1439.98px)`,
      DEJr44GVb: `(min-width: 810px) and (max-width: 1239.98px)`,
      P1J7WvMcG: `(max-width: 809.98px)`,
      VrLFz36Kh: `(min-width: 1440px)`,
    }),
    (K = () => typeof document < `u`),
    (q = []),
    (J = `framer-ZcVc7`),
    (Y = {
      CpJoOsDxW: `framer-v-1nirddn`,
      DEJr44GVb: `framer-v-y7clc5`,
      P1J7WvMcG: `framer-v-3l7bnq`,
      VrLFz36Kh: `framer-v-nt5dje`,
    }),
    (X = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `VrLFz36Kh`, Laptop: `CpJoOsDxW`, Phone: `P1J7WvMcG`, Tablet: `DEJr44GVb` }),
    (Ae = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (je = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `VrLFz36Kh`,
    })),
    ($ = g(
      s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          re = ee(),
          { activeLocale: d, setLocale: ae } = le(),
          m = se(),
          { style: g, className: b, layoutId: S, variant: E, ...D } = je(e);
        ue(t(() => Oe({}, d), [d]));
        let [O, de] = ie(E, G, !1),
          k = p(J, me, we, pe, fe, ye, he),
          A = i(h)?.isLayoutTemplate,
          j = !!i(te)?.transition?.layout,
          M = X(A, j),
          P = () => !K() || ![`DEJr44GVb`, `P1J7WvMcG`].includes(O),
          F = ce(`qGiz83ySR`),
          I = l(null),
          L = ce(`E_6yIy1Lz`),
          R = l(null),
          z = () => !K() || O === `P1J7WvMcG`,
          B = () => !K() || O === `DEJr44GVb`;
        return (
          oe({}),
          o(h.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `VrLFz36Kh`,
              variantClassNames: Y,
            },
            children: a(ne, {
              id: S ?? re,
              children: [
                o(Ae, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(W, {
                  ...D,
                  className: p(k, `framer-nt5dje`, b),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: O,
                      overrides: {
                        DEJr44GVb: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                        P1J7WvMcG: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(T, {
                        height: 1e3,
                        y: (m?.y || 0) + 0,
                        children: o(C, {
                          className: `framer-14dlwbn-container`,
                          layout: M,
                          nodeId: `uexsNqO8D`,
                          rendersWithMotion: !0,
                          scopeId: `wcki3OcY_`,
                          children: o(_, {
                            breakpoint: O,
                            overrides: {
                              DEJr44GVb: { style: { width: `100%` }, variant: Z(`s0lcynSc3`) },
                              P1J7WvMcG: { style: { width: `100%` }, variant: Z(`wvPpZ1IwG`) },
                            },
                            children: o(N, {
                              height: `100%`,
                              id: `uexsNqO8D`,
                              layoutId: `uexsNqO8D`,
                              style: { height: `100%` },
                              variant: Z(`mAQYDiHUl`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-8i82sf`,
                      layout: M,
                      children: [
                        P() &&
                          a(u.div, {
                            className: `framer-exru3p hidden-y7clc5 hidden-3l7bnq`,
                            children: [
                              a(u.div, {
                                className: `framer-1wxkc08`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h1`, {
                                        className: `framer-styles-preset-p50exy`,
                                        "data-styles-preset": `U3NyadGC3`,
                                        dir: `auto`,
                                        children: `Enrollments`,
                                      }),
                                    }),
                                    className: `framer-1djgb97`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(u.div, {
                                    className: `framer-95qg58`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-1504gar`,
                                            "data-styles-preset": `rHJW28QP9`,
                                            dir: `auto`,
                                            children: o(x, {
                                              href: { hash: `:qGiz83ySR`, webPageId: `wcki3OcY_` },
                                              motionChild: !0,
                                              nodeId: `PKM_tyj8m`,
                                              openInNewTab: !1,
                                              preserveParams: !1,
                                              relValues: [],
                                              scopeId: `wcki3OcY_`,
                                              smoothScroll: !0,
                                              children: o(u.a, {
                                                className: `framer-styles-preset-fx4193`,
                                                "data-styles-preset": `uWIEDCuYW`,
                                                children: o(`strong`, {
                                                  children: `Usability Research`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1y8unus`,
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
                                            children: o(x, {
                                              href: { hash: `:E_6yIy1Lz`, webPageId: `wcki3OcY_` },
                                              motionChild: !0,
                                              nodeId: `KIv7kaMRS`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `wcki3OcY_`,
                                              smoothScroll: !0,
                                              children: o(u.a, {
                                                className: `framer-styles-preset-fx4193`,
                                                "data-styles-preset": `uWIEDCuYW`,
                                                children: o(`strong`, {
                                                  children: `Prototypes and Mockups`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-6ed7py`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o(u.div, {
                                className: `framer-1eh109x`,
                                children: o(x, {
                                  href: { webPageId: `Yk0caFFXD` },
                                  motionChild: !0,
                                  nodeId: `VSfCEv2Fp`,
                                  openInNewTab: !1,
                                  scopeId: `wcki3OcY_`,
                                  children: o(u.a, {
                                    className: `framer-ijfle8 framer-1bpinvh`,
                                    "data-framer-name": `Button`,
                                    children: o(u.div, {
                                      className: `framer-v1cgbz`,
                                      children: a(v, {
                                        className: `framer-eoch6j`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          o(v, {
                                            className: `framer-18zy1kv`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          o(v, {
                                            className: `framer-kjbgxi`,
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
                        a(u.div, {
                          className: `framer-1vgbq3n`,
                          children: [
                            a(u.div, {
                              className: `framer-54nn8j`,
                              children: [
                                a(u.div, {
                                  className: `framer-1y0gm8t`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          children: o(`strong`, { children: `Project Overview` }),
                                        }),
                                      }),
                                      className: `framer-b9wp0x`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, {
                                              children: `Transforming a complex legacy enrollment system that supports thousands of daily transactions into a scalable, self-service portal, reducing enrollment-related support tickets by over 40% within three months of deployment.`,
                                            }),
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `Originally built in 2010 as an internal tool, the Enrollments portal supports the registration and onboarding of medical providers with major U.S. insurance companies. Its primary function is to connect medical offices to Optum systems, enabling providers to interact directly with insurer billing platforms. The system was not designed for external users and did not support self-service configuration.`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `In 2025, my team was tasked with evolving Enrollments into a self-service solution to support a tiered support and pricing model. This required simplifying complex workflows for independent use while maintaining critical functionality and integrations. The long-term vision is to transform the platform into a centralized, AI-powered system for registration, configuration, and ongoing user support across the Optum product ecosystem.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-a2rpbo`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(u.div, {
                                  className: `framer-c638hh`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          dir: `auto`,
                                          children: o(`strong`, { children: `Main Challenge` }),
                                        }),
                                      }),
                                      className: `framer-1deosv2`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `The challenge was to modernize a highly complex, business-critical system without disrupting existing operations.`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `The platform supported thousands of daily interactions and multiple interconnected workflows, making full redesign risky. Instead, we executed an incremental transformation strategy, simplifying the experience step-by-step while maintaining full functionality and system stability.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-2br3vw`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(u.div, {
                                  className: `framer-1ouj6vd`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          children: o(`strong`, { children: `My Role` }),
                                        }),
                                      }),
                                      className: `framer-1uk6r8h`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: [
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `I joined as Lead UX Designer and team lead, working with a junior designer and a UX researcher.`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `I led the decomposition of complex workflows into core functional steps, identifying high-frequency use cases that accounted for approximately 80% of daily activity. These became the foundation for a simplified navigation model, while less common scenarios were embedded contextually within workflows.`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `I worked closely with product and engineering to ensure that all design decisions aligned with technical constraints, regulatory requirements, and business priorities.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-aeqyiu`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(u.div, {
                                  className: `framer-1s43c80`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          children: o(`strong`, { children: `Key UX Decisions` }),
                                        }),
                                      }),
                                      className: `framer-1jly1ba`,
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
                                          dir: `auto`,
                                          children: [
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Reframed navigation around primary workflows rather than system structure`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Prioritized progressive disclosure to reduce cognitive load`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Eliminating unnecessary steps and rare edge cases.`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Introduced contextual guidance and inline support`,
                                              }),
                                            }),
                                            o(`li`, {
                                              "data-preset-tag": `p`,
                                              children: o(`p`, {
                                                children: `Implementing real-time feedback to improve user confidence and error recovery`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-4hadgr`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(u.div, {
                                  className: `framer-1f31pj1`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          children: o(`strong`, { children: `Tools` }),
                                        }),
                                      }),
                                      className: `framer-17fn6xk`,
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
                                          children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make`,
                                        }),
                                      }),
                                      className: `framer-363flx`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(u.div, {
                                  className: `framer-1nvxuc1`,
                                  "data-border": !0,
                                  id: F,
                                  ref: I,
                                  children: [
                                    a(u.div, {
                                      className: `framer-f2xksd`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h2`, {
                                              className: `framer-styles-preset-qvrn1k`,
                                              "data-styles-preset": `ksQr_zVQP`,
                                              dir: `auto`,
                                              children: o(`strong`, {
                                                children: `Research and early concepting`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-11e7b0t`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: [
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `After joining the project, we conducted a structured discovery phase to understand the existing system, workflows, and constraints. We partnered with product stakeholders and internal users to analyze behavior, pain points, and usage patterns, identifying opportunities to simplify high-frequency tasks.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `In parallel, we expanded the research to include external users, focusing on their expectations for self-service and identifying gaps between the current system and real-world onboarding needs. A competitive analysis of comparable platforms helped benchmark functionality, surface best practices, and highlight areas for differentiation.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `These insights informed a clear set of user requirements and design principles, enabling us to define solutions that balance usability, business goals, and the technical and regulatory constraints of an enterprise healthcare system.`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-q1xnv7`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    a(u.div, {
                                      className: `framer-fhda0q`,
                                      children: [
                                        a(u.div, {
                                          className: `framer-n120ts`,
                                          children: [
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Project board`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-q3dfun`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              breakpoint: O,
                                              overrides: {
                                                CpJoOsDxW: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        0 +
                                                        168 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2242.2 +
                                                        24 +
                                                        476.5 +
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
                                                DEJr44GVb: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        32 +
                                                        77.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2202.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        139.5
                                                    ),
                                                    pixelHeight: 7392,
                                                    pixelWidth: 7751,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                    src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                                    srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                                  },
                                                },
                                                P1J7WvMcG: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        53.2 +
                                                        0 +
                                                        2122.2 +
                                                        24 +
                                                        468.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        131.5
                                                    ),
                                                    pixelHeight: 7392,
                                                    pixelWidth: 7751,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                    src: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392`,
                                                    srcSet: `https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=512&width=7751&height=7392 512w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=1024&width=7751&height=7392 1024w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=2048&width=7751&height=7392 2048w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?scale-down-to=4096&width=7751&height=7392 4096w,https://framerusercontent.com/images/Bwaw3UCD7FvNkAhbhJVMbpCJ0.png?width=7751&height=7392 7751w`,
                                                  },
                                                },
                                              },
                                              children: o(w, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 821,
                                                  intrinsicWidth: 1244,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      2202.2 +
                                                      24 +
                                                      476.5 +
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
                                                className: `framer-1i9ro87`,
                                                "data-framer-name": `Image`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(u.div, {
                                          className: `framer-i3j6gh`,
                                          children: [
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Main workflows`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1t2o9vu`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              breakpoint: O,
                                              overrides: {
                                                CpJoOsDxW: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        0 +
                                                        168 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2242.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        818.5 +
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
                                                DEJr44GVb: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        32 +
                                                        77.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2202.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        833.5 +
                                                        0 +
                                                        139.5
                                                    ),
                                                    pixelHeight: 17299,
                                                    pixelWidth: 23700,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                    src: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299`,
                                                    srcSet: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=512&width=23700&height=17299 512w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=1024&width=23700&height=17299 1024w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=2048&width=23700&height=17299 2048w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=4096&width=23700&height=17299 4096w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299 23700w`,
                                                  },
                                                },
                                                P1J7WvMcG: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        53.2 +
                                                        0 +
                                                        2122.2 +
                                                        24 +
                                                        468.5 +
                                                        0 +
                                                        470.5 +
                                                        0 +
                                                        131.5
                                                    ),
                                                    pixelHeight: 17299,
                                                    pixelWidth: 23700,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                    src: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299`,
                                                    srcSet: `https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=512&width=23700&height=17299 512w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=1024&width=23700&height=17299 1024w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=2048&width=23700&height=17299 2048w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?scale-down-to=4096&width=23700&height=17299 4096w,https://framerusercontent.com/images/GLsNTvD1lEbXXhUiMWQzuMLkRI.png?width=23700&height=17299 23700w`,
                                                  },
                                                },
                                              },
                                              children: o(w, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 821,
                                                  intrinsicWidth: 1244,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      2202.2 +
                                                      24 +
                                                      476.5 +
                                                      0 +
                                                      1009.5 +
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
                                                className: `framer-1gsoz4j`,
                                                "data-framer-name": `Image`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                            o(_, {
                                              breakpoint: O,
                                              overrides: {
                                                CpJoOsDxW: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        0 +
                                                        168 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2242.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        818.5 +
                                                        0 +
                                                        654.5
                                                    ),
                                                    pixelHeight: 6236,
                                                    pixelWidth: 14342,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                    srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                                  },
                                                },
                                                DEJr44GVb: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        32 +
                                                        77.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2202.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        833.5 +
                                                        0 +
                                                        664.5
                                                    ),
                                                    pixelHeight: 6236,
                                                    pixelWidth: 14342,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                    src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                    srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                                  },
                                                },
                                                P1J7WvMcG: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        53.2 +
                                                        0 +
                                                        2122.2 +
                                                        24 +
                                                        468.5 +
                                                        0 +
                                                        470.5 +
                                                        0 +
                                                        383.5
                                                    ),
                                                    pixelHeight: 6236,
                                                    pixelWidth: 14342,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                    src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                    srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                                  },
                                                },
                                              },
                                              children: o(w, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 821,
                                                  intrinsicWidth: 1244,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      2202.2 +
                                                      24 +
                                                      476.5 +
                                                      0 +
                                                      1009.5 +
                                                      0 +
                                                      800.5
                                                  ),
                                                  pixelHeight: 6236,
                                                  pixelWidth: 14342,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  src: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236`,
                                                  srcSet: `https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=512&width=14342&height=6236 512w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=1024&width=14342&height=6236 1024w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=2048&width=14342&height=6236 2048w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?scale-down-to=4096&width=14342&height=6236 4096w,https://framerusercontent.com/images/4hgV6GJDwt9ZETiLnlYoGjbk8Oc.png?width=14342&height=6236 14342w`,
                                                },
                                                className: `framer-1v7w9oy`,
                                                "data-framer-name": `Image`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(u.div, {
                                          className: `framer-rlx6j6`,
                                          children: [
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: o(`strong`, { children: `Personas` }),
                                                }),
                                              }),
                                              className: `framer-13t34xu`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              breakpoint: O,
                                              overrides: {
                                                CpJoOsDxW: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        0 +
                                                        168 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2242.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        1798 +
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
                                                DEJr44GVb: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        32 +
                                                        77.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2202.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        1829 +
                                                        0 +
                                                        139.5
                                                    ),
                                                    pixelHeight: 8540,
                                                    pixelWidth: 10034,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                    src: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540`,
                                                    srcSet: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=512&width=10034&height=8540 512w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=1024&width=10034&height=8540 1024w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=2048&width=10034&height=8540 2048w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=4096&width=10034&height=8540 4096w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540 10034w`,
                                                  },
                                                },
                                                P1J7WvMcG: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        53.2 +
                                                        0 +
                                                        2122.2 +
                                                        24 +
                                                        468.5 +
                                                        0 +
                                                        1019 +
                                                        0 +
                                                        139.5
                                                    ),
                                                    pixelHeight: 8540,
                                                    pixelWidth: 10034,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                    src: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540`,
                                                    srcSet: `https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=512&width=10034&height=8540 512w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=1024&width=10034&height=8540 1024w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=2048&width=10034&height=8540 2048w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?scale-down-to=4096&width=10034&height=8540 4096w,https://framerusercontent.com/images/4JSg9AEfANXnZY3QqqeK2KTgA.png?width=10034&height=8540 10034w`,
                                                  },
                                                },
                                              },
                                              children: o(w, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 821,
                                                  intrinsicWidth: 1244,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      2202.2 +
                                                      24 +
                                                      476.5 +
                                                      0 +
                                                      2222 +
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
                                                className: `framer-1mytiia`,
                                                "data-framer-name": `Image`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(u.div, {
                                          className: `framer-glytjy`,
                                          children: [
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-12u88cl`,
                                                  "data-styles-preset": `HftgEsO0a`,
                                                  dir: `auto`,
                                                  children: o(`strong`, {
                                                    children: `Competitive Analysis`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1dfyvgt`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(_, {
                                              breakpoint: O,
                                              overrides: {
                                                CpJoOsDxW: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        0 +
                                                        168 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2242.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        2546.5 +
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
                                                DEJr44GVb: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        32 +
                                                        77.2 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        2202.2 +
                                                        24 +
                                                        476.5 +
                                                        0 +
                                                        2590.5 +
                                                        0 +
                                                        139.5
                                                    ),
                                                    pixelHeight: 10408,
                                                    pixelWidth: 7152,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                    src: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408`,
                                                    srcSet: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=1024&width=7152&height=10408 703w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=2048&width=7152&height=10408 1407w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=4096&width=7152&height=10408 2814w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408 7152w`,
                                                  },
                                                },
                                                P1J7WvMcG: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    intrinsicHeight: 821,
                                                    intrinsicWidth: 1244,
                                                    loading: f(
                                                      (m?.y || 0) +
                                                        0 +
                                                        800 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        53.2 +
                                                        0 +
                                                        2122.2 +
                                                        24 +
                                                        468.5 +
                                                        0 +
                                                        1462.5 +
                                                        0 +
                                                        139.5
                                                    ),
                                                    pixelHeight: 10408,
                                                    pixelWidth: 7152,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                    src: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408`,
                                                    srcSet: `https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=1024&width=7152&height=10408 703w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=2048&width=7152&height=10408 1407w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?scale-down-to=4096&width=7152&height=10408 2814w,https://framerusercontent.com/images/wt1YuQ5MmjnVwKDYcGMi41DYyM.png?width=7152&height=10408 7152w`,
                                                  },
                                                },
                                              },
                                              children: o(w, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  intrinsicHeight: 821,
                                                  intrinsicWidth: 1244,
                                                  loading: f(
                                                    (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      168 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      2202.2 +
                                                      24 +
                                                      476.5 +
                                                      0 +
                                                      3141.5 +
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
                                                className: `framer-t3njru`,
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
                                a(u.div, {
                                  className: `framer-1w0kn7b`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-bdezu4`,
                                          "data-styles-preset": `TWYWOtjjp`,
                                          dir: `auto`,
                                          children: o(`strong`, {
                                            children: `Prototypes and Mockups`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1ycj9ed`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      id: L,
                                      ref: R,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(u.div, {
                                      className: `framer-s0qej`,
                                      "data-border": !0,
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
                                                children: `Navigation and Landing`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-aa1zor`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: [
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `We simplified navigation by removing unnecessary decision points and automating medical facility selection through user settings. This allowed us to reduce a complex, multi-step process to two primary actions: selecting a facility and creating enrollments.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `As a result, we refocused the application on managing enrollments, the core workflow, significantly reducing cognitive load for users. This led to improved task completion rates and a noticeable decrease in user frustration.`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-gix1aq`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(u.div, {
                                          className: `framer-12fwxri`,
                                          children: [
                                            a(u.div, {
                                              className: `framer-1s2vd8w`,
                                              children: [
                                                o(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`h3`, {
                                                      className: `framer-styles-preset-bdezu4`,
                                                      "data-styles-preset": `TWYWOtjjp`,
                                                      dir: `auto`,
                                                      children: o(`strong`, {
                                                        children: `Original Workflow`,
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-52a40b`,
                                                  fonts: [`Inter`, `Inter-Bold`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(r, {
                                                    children: [
                                                      o(`p`, {
                                                        className: `framer-styles-preset-12u88cl`,
                                                        "data-styles-preset": `HftgEsO0a`,
                                                        dir: `auto`,
                                                        children: `The original homepage lacked a clear and logical flow. Users were required to select a facility before starting an enrollment, but this dependency was not clearly communicated. The facility search experience itself was also overly complex and difficult to navigate.`,
                                                      }),
                                                      o(`p`, {
                                                        className: `framer-styles-preset-12u88cl`,
                                                        "data-styles-preset": `HftgEsO0a`,
                                                        dir: `auto`,
                                                        children: `The primary call to action, “Create Enrollment,” redirected users into this unclear flow, often causing confusion and drop-off. Many users abandoned the process or attempted to find alternative paths to complete the same task.`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-12r9z6y`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(u.div, {
                                                  className: `framer-1qr6vfi`,
                                                  children: o(T, {
                                                    children: o(C, {
                                                      className: `framer-ozni4m-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `pHkP1_Yx3`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `wcki3OcY_`,
                                                      children: o(V, {
                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                        borderRadius: 8,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        controls: !0,
                                                        height: `100%`,
                                                        id: `pHkP1_Yx3`,
                                                        isMixedBorderRadius: !1,
                                                        layoutId: `pHkP1_Yx3`,
                                                        loop: !1,
                                                        muted: !1,
                                                        objectFit: `scale-down`,
                                                        playing: !1,
                                                        posterEnabled: !1,
                                                        srcFile: `https://framerusercontent.com/assets/ciAGlfVDxtAqYuPy3IJn5Q06h0.mp4`,
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
                                              ],
                                            }),
                                            a(u.div, {
                                              className: `framer-rh31x1`,
                                              children: [
                                                o(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`h3`, {
                                                      className: `framer-styles-preset-bdezu4`,
                                                      "data-styles-preset": `TWYWOtjjp`,
                                                      dir: `auto`,
                                                      children: o(`strong`, {
                                                        children: `New Navigation and Landing`,
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-v7ei25`,
                                                  fonts: [`Inter`, `Inter-Bold`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(r, {
                                                    children: [
                                                      o(`p`, {
                                                        className: `framer-styles-preset-12u88cl`,
                                                        "data-styles-preset": `HftgEsO0a`,
                                                        dir: `auto`,
                                                        children: `In the new workflow, facility selection occurs through user settings before the user enters the main interface. This breaks the process into clear, sequential steps and reduces cognitive load, ensuring that users always start in the correct context. To make the process even more efficient, users can save a default facility, so they only need to select a new one when necessary.`,
                                                      }),
                                                      o(`p`, {
                                                        className: `framer-styles-preset-12u88cl`,
                                                        "data-styles-preset": `HftgEsO0a`,
                                                        dir: `auto`,
                                                        children: `Once inside, users land directly in the selected facility’s workspace, where they can quickly enroll with new payers, access customized reporting, or receive instant assistance from the integrated AI support bot.`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-1uezng5`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(u.div, {
                                                  className: `framer-1hiamb8`,
                                                  children: o(T, {
                                                    children: o(C, {
                                                      className: `framer-1h5pzmg-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `dZ5SihUsM`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `wcki3OcY_`,
                                                      children: o(V, {
                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                        borderRadius: 8,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        controls: !0,
                                                        height: `100%`,
                                                        id: `dZ5SihUsM`,
                                                        isMixedBorderRadius: !1,
                                                        layoutId: `dZ5SihUsM`,
                                                        loop: !1,
                                                        muted: !1,
                                                        objectFit: `scale-down`,
                                                        playing: !1,
                                                        posterEnabled: !1,
                                                        srcFile: `https://framerusercontent.com/assets/kDLLqBXVDJKpyeMNdCGx4oiMzk.mp4`,
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
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a(u.div, {
                                      className: `framer-1pjm8yo`,
                                      "data-border": !0,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h2`, {
                                              className: `framer-styles-preset-qvrn1k`,
                                              "data-styles-preset": `ksQr_zVQP`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `Enrollments Management Workflow`,
                                            }),
                                          }),
                                          className: `framer-1w4h566`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: [
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `The Enrollments page serves as the primary workspace for managing provider enrollments and plays a critical role in helping users stay organized and move enrollments to completion.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `The original design was difficult to scan and manage. Key information was often hidden, and excessive horizontal scrolling made it challenging for users to track progress or take action efficiently.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `The redesign transformed the page into a clear, action-oriented worklist. Enrollment status is now visible at a glance, users can perform bulk actions, and notes simplify follow-up. Each enrollment moves through eight distinct statuses across preparation and post-submission phases. To reduce complexity, statuses are grouped by action type, with color highlighting emphasizing required next steps rather than individual states. Submitted enrollments are further distinguished with a filled form icon for quick identification.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `An enhanced filtering system allows users to quickly narrow down enrollments that need attention, while saved views provide fast access to commonly used filter presets. Together, these improvements streamline workflows, reduce cognitive load, and help users move enrollments forward more efficiently.`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-1sq89ec`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(u.div, {
                                          className: `framer-6493yz`,
                                          children: [
                                            a(u.div, {
                                              className: `framer-1hyfjc`,
                                              children: [
                                                o(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`h3`, {
                                                      className: `framer-styles-preset-bdezu4`,
                                                      "data-styles-preset": `TWYWOtjjp`,
                                                      dir: `auto`,
                                                      children: o(`strong`, {
                                                        children: `Original Enrollments Page`,
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-1gkg71c`,
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
                                                      children: `The original Enrollments page presented users with an overwhelming number of search and filter options, most of which were irrelevant. Key information and actions were buried in a wide, cluttered table, making it difficult to locate updates or complete critical tasks efficiently. The lack of focus and poor information hierarchy frequently frustrated users and reduced overall page efficiency.`,
                                                    }),
                                                  }),
                                                  className: `framer-mx9qg3`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(u.div, {
                                                  className: `framer-1luhb7t`,
                                                  children: o(T, {
                                                    children: o(C, {
                                                      className: `framer-m0ymge-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `NgBDNxEfZ`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `wcki3OcY_`,
                                                      children: o(V, {
                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                        borderRadius: 8,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        controls: !0,
                                                        height: `100%`,
                                                        id: `NgBDNxEfZ`,
                                                        isMixedBorderRadius: !1,
                                                        layoutId: `NgBDNxEfZ`,
                                                        loop: !1,
                                                        muted: !1,
                                                        objectFit: `scale-down`,
                                                        playing: !1,
                                                        posterEnabled: !1,
                                                        srcFile: `https://framerusercontent.com/assets/ciAGlfVDxtAqYuPy3IJn5Q06h0.mp4`,
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
                                              ],
                                            }),
                                            a(u.div, {
                                              className: `framer-azom93`,
                                              children: [
                                                o(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(r, {
                                                    children: o(`h3`, {
                                                      className: `framer-styles-preset-bdezu4`,
                                                      "data-styles-preset": `TWYWOtjjp`,
                                                      dir: `auto`,
                                                      children: o(`strong`, {
                                                        children: `New Enrollment Landing`,
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-zg27vj`,
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
                                                      children: `In the new design, we prioritized a clean and intuitive presentation of the data. While maintaining continuity with the original experience, we enhanced the elements that mattered most. Search functionality was simplified, with the added ability to save views for frequently used queries. Key information was organized into a clear, easy-to-scan table, while still allowing users to customize it for less common scenarios. Bulk actions were introduced, enabling users to perform operations on multiple enrollments efficiently without being overwhelmed by a clutter of buttons.`,
                                                    }),
                                                  }),
                                                  className: `framer-1pqkt8e`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(u.div, {
                                                  className: `framer-1khobuv`,
                                                  children: o(T, {
                                                    children: o(C, {
                                                      className: `framer-17ornf-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `iidu8nOXt`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `wcki3OcY_`,
                                                      children: o(V, {
                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                        borderRadius: 8,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        controls: !0,
                                                        height: `100%`,
                                                        id: `iidu8nOXt`,
                                                        isMixedBorderRadius: !1,
                                                        layoutId: `iidu8nOXt`,
                                                        loop: !0,
                                                        muted: !1,
                                                        objectFit: `scale-down`,
                                                        playing: !1,
                                                        posterEnabled: !1,
                                                        srcFile: `https://framerusercontent.com/assets/rXd8pZgfaTQfIipA99pvEdjcZEs.mp4`,
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
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a(u.div, {
                                      className: `framer-wuz4jr`,
                                      "data-border": !0,
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
                                                children: `Redesign of the Create Enrollment Workflow`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1h8dzn9`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: [
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `The primary challenge of the Create Enrollment workflow was the sheer number of variations users could encounter. In earlier versions, all variations were presented upfront, resulting in excessive number of steps and unnecessary complexity for most users.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `For the new self-service model, we took a different approach. We identified three core steps required for all enrollments, covering approximately 80% of use cases. These steps form the primary flow. For the remaining edge cases, we layered in contextual alerts, progressive disclosure, and validation to surface additional requirements only when needed.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `This approach significantly reduced cognitive load while preserving full functionality. In future iterations, we plan to introduce a planning tool that allows users to group enrollments, making it easier to organize, track, and manage the process at scale.`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-1xd7d1y`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(u.div, {
                                          className: `framer-1oj5x0k`,
                                          children: a(u.div, {
                                            className: `framer-1xn545n`,
                                            children: [
                                              o(y, {
                                                __fromCanvasComponent: !0,
                                                children: o(r, {
                                                  children: o(`h3`, {
                                                    className: `framer-styles-preset-bdezu4`,
                                                    "data-styles-preset": `TWYWOtjjp`,
                                                    dir: `auto`,
                                                    children: o(`strong`, {
                                                      children: `New Create Enrollment Workflow`,
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-1unzz6m`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              o(y, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                  children: [
                                                    o(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      dir: `auto`,
                                                      children: `The new workflow is streamlined into three clear steps:`,
                                                    }),
                                                    a(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      dir: `auto`,
                                                      children: [
                                                        o(`strong`, {
                                                          children: `Step 1 – Select Provider:`,
                                                        }),
                                                        ` Users select an existing NPI (National Provider Identifier) from their saved list or creates a new one using a built-in subflow. During this step, they also choose the transaction types for enrollment.`,
                                                      ],
                                                    }),
                                                    a(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      dir: `auto`,
                                                      children: [
                                                        o(`strong`, {
                                                          children: `Step 2 – Complete Enrollment Form:`,
                                                        }),
                                                        ` The system generates a dynamic form that consolidates all required information for the selected enrollments into a single experience. The form is prefilled with previously saved data based on the selected NPI. While all fields are required for submission, users can save incomplete enrollments if certain information is not yet available.`,
                                                      ],
                                                    }),
                                                    a(`p`, {
                                                      className: `framer-styles-preset-12u88cl`,
                                                      "data-styles-preset": `HftgEsO0a`,
                                                      dir: `auto`,
                                                      children: [
                                                        o(`strong`, {
                                                          children: `Step 3 – Review and Submit:`,
                                                        }),
                                                        ` Users review the generated enrollment records and submit those that are ready. Remaining enrollments can be saved and completed later, ensuring flexibility while maintaining workflow continuity.`,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-1x5jeej`,
                                                fonts: [`Inter`, `Inter-Bold`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(u.div, {
                                                className: `framer-yb8856`,
                                                children: [
                                                  o(y, {
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
                                                    className: `framer-17s0nxe`,
                                                    fonts: [`Inter`, `Inter-Bold`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  o(_, {
                                                    breakpoint: O,
                                                    overrides: {
                                                      CpJoOsDxW: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fit`,
                                                          intrinsicHeight: 821,
                                                          intrinsicWidth: 1244,
                                                          loading: f(
                                                            (m?.y || 0) +
                                                              0 +
                                                              0 +
                                                              168 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              6482.7 +
                                                              0 +
                                                              2656 +
                                                              24 +
                                                              484.5 +
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
                                                      DEJr44GVb: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fit`,
                                                          intrinsicHeight: 821,
                                                          intrinsicWidth: 1244,
                                                          loading: f(
                                                            (m?.y || 0) +
                                                              0 +
                                                              800 +
                                                              32 +
                                                              77.2 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              6500.7 +
                                                              0 +
                                                              2656 +
                                                              24 +
                                                              484.5 +
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
                                                          sizes: `calc(${m?.width || `100vw`} - 112px)`,
                                                          src: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726`,
                                                          srcSet: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=512&width=2400&height=726 512w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=1024&width=2400&height=726 1024w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=2048&width=2400&height=726 2048w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726 2400w`,
                                                        },
                                                      },
                                                      P1J7WvMcG: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fit`,
                                                          intrinsicHeight: 821,
                                                          intrinsicWidth: 1244,
                                                          loading: f(
                                                            (m?.y || 0) +
                                                              0 +
                                                              800 +
                                                              24 +
                                                              0 +
                                                              0 +
                                                              53.2 +
                                                              0 +
                                                              4746.7 +
                                                              0 +
                                                              2640 +
                                                              16 +
                                                              484.5 +
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
                                                          sizes: `calc(${m?.width || `100vw`} - 56px)`,
                                                          src: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726`,
                                                          srcSet: `https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=512&width=2400&height=726 512w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=1024&width=2400&height=726 1024w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?scale-down-to=2048&width=2400&height=726 2048w,https://framerusercontent.com/images/rhN5Obp8h7Smebedl86NzaAOic.png?width=2400&height=726 2400w`,
                                                        },
                                                      },
                                                    },
                                                    children: o(w, {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fit`,
                                                        intrinsicHeight: 821,
                                                        intrinsicWidth: 1244,
                                                        loading: f(
                                                          (m?.y || 0) +
                                                            0 +
                                                            0 +
                                                            168 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            7320.7 +
                                                            0 +
                                                            2656 +
                                                            24 +
                                                            484.5 +
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
                                                      className: `framer-jzwwqf`,
                                                      "data-framer-name": `Image`,
                                                      fitImageDimension: `height`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              a(u.div, {
                                                className: `framer-rkp30g`,
                                                children: [
                                                  o(y, {
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
                                                    className: `framer-1mfmp2l`,
                                                    fonts: [`Inter`, `Inter-Bold`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  o(T, {
                                                    children: o(C, {
                                                      className: `framer-4ggdf-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `lO6XK7oA9`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `wcki3OcY_`,
                                                      children: o(V, {
                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                        borderRadius: 8,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        controls: !0,
                                                        height: `100%`,
                                                        id: `lO6XK7oA9`,
                                                        isMixedBorderRadius: !1,
                                                        layoutId: `lO6XK7oA9`,
                                                        loop: !1,
                                                        muted: !1,
                                                        objectFit: `scale-down`,
                                                        playing: !1,
                                                        posterEnabled: !1,
                                                        srcFile: `https://framerusercontent.com/assets/yKFZSM31Gl8Mn2T7s6Yj4bRisOE.mp4`,
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
                            z() &&
                              a(u.div, {
                                className: `framer-1jw0vn3 hidden-nt5dje hidden-y7clc5 hidden-1nirddn`,
                                children: [
                                  o(u.div, {
                                    className: `framer-gbshwo`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Enrollments`,
                                        }),
                                      }),
                                      className: `framer-6vm7at`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(x, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `ZOK_4OF2O`,
                                    openInNewTab: !1,
                                    scopeId: `wcki3OcY_`,
                                    children: o(u.a, {
                                      className: `framer-wmis1v framer-1bpinvh`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(u.div, {
                                        className: `framer-1lz67wq`,
                                        children: a(v, {
                                          className: `framer-dd037c`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(v, {
                                              className: `framer-86jonw`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              className: `framer-9448ke`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        B() &&
                          a(u.div, {
                            className: `framer-ap43nl hidden-nt5dje hidden-1nirddn hidden-3l7bnq`,
                            children: [
                              o(u.div, {
                                className: `framer-jc7wkb`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h1`, {
                                      className: `framer-styles-preset-p50exy`,
                                      "data-styles-preset": `U3NyadGC3`,
                                      dir: `auto`,
                                      children: `Enrollments`,
                                    }),
                                  }),
                                  className: `framer-6ywue2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(x, {
                                href: { webPageId: `Yk0caFFXD` },
                                motionChild: !0,
                                nodeId: `bXFmCt2g2`,
                                openInNewTab: !1,
                                scopeId: `wcki3OcY_`,
                                children: o(u.a, {
                                  className: `framer-ysjsoq framer-1bpinvh`,
                                  "data-border": !0,
                                  "data-framer-name": `Button`,
                                  children: o(u.div, {
                                    className: `framer-1bmn193`,
                                    children: a(v, {
                                      className: `framer-1cybm50`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(v, {
                                          className: `framer-1rc25h0`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(v, {
                                          className: `framer-1xnvure`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
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
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ZcVc7.framer-1bpinvh, .framer-ZcVc7 .framer-1bpinvh { display: block; }`,
        `.framer-ZcVc7.framer-nt5dje { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-ZcVc7 .framer-14dlwbn-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-ZcVc7 .framer-8i82sf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-ZcVc7 .framer-exru3p { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 0px 0px; position: sticky; top: 0px; width: 100%; z-index: 3; }`,
        `.framer-ZcVc7 .framer-1wxkc08 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-ZcVc7 .framer-1djgb97, .framer-ZcVc7 .framer-6vm7at, .framer-ZcVc7 .framer-6ywue2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZcVc7 .framer-95qg58 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ZcVc7 .framer-1y8unus, .framer-ZcVc7 .framer-6ed7py { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZcVc7 .framer-1eh109x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ZcVc7 .framer-ijfle8 { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-ZcVc7 .framer-v1cgbz, .framer-ZcVc7 .framer-1lz67wq, .framer-ZcVc7 .framer-1bmn193 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ZcVc7 .framer-eoch6j, .framer-ZcVc7 .framer-dd037c, .framer-ZcVc7 .framer-1cybm50 { height: 13px; position: relative; width: 14px; }`,
        `.framer-ZcVc7 .framer-18zy1kv, .framer-ZcVc7 .framer-86jonw, .framer-ZcVc7 .framer-1rc25h0 { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-ZcVc7 .framer-kjbgxi, .framer-ZcVc7 .framer-9448ke, .framer-ZcVc7 .framer-1xnvure { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-ZcVc7 .framer-1vgbq3n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-54nn8j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-1y0gm8t, .framer-ZcVc7 .framer-c638hh, .framer-ZcVc7 .framer-1ouj6vd, .framer-ZcVc7 .framer-1s43c80, .framer-ZcVc7 .framer-1f31pj1, .framer-ZcVc7 .framer-f2xksd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-b9wp0x, .framer-ZcVc7 .framer-a2rpbo, .framer-ZcVc7 .framer-1deosv2, .framer-ZcVc7 .framer-2br3vw, .framer-ZcVc7 .framer-1uk6r8h, .framer-ZcVc7 .framer-aeqyiu, .framer-ZcVc7 .framer-1jly1ba, .framer-ZcVc7 .framer-4hadgr, .framer-ZcVc7 .framer-17fn6xk, .framer-ZcVc7 .framer-363flx, .framer-ZcVc7 .framer-11e7b0t, .framer-ZcVc7 .framer-q1xnv7, .framer-ZcVc7 .framer-gix1aq, .framer-ZcVc7 .framer-1sq89ec, .framer-ZcVc7 .framer-1xd7d1y { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZcVc7 .framer-1nvxuc1 { --border-bottom-width: 0px; --border-color: #0085a6; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 3px; align-content: center; align-items: center; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 24px; position: relative; scroll-margin-top: 220px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ZcVc7 .framer-fhda0q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-n120ts, .framer-ZcVc7 .framer-i3j6gh, .framer-ZcVc7 .framer-rlx6j6, .framer-ZcVc7 .framer-glytjy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ZcVc7 .framer-q3dfun, .framer-ZcVc7 .framer-1t2o9vu, .framer-ZcVc7 .framer-13t34xu, .framer-ZcVc7 .framer-1dfyvgt, .framer-ZcVc7 .framer-aa1zor, .framer-ZcVc7 .framer-52a40b, .framer-ZcVc7 .framer-v7ei25, .framer-ZcVc7 .framer-1w4h566, .framer-ZcVc7 .framer-1gkg71c, .framer-ZcVc7 .framer-zg27vj, .framer-ZcVc7 .framer-1h8dzn9, .framer-ZcVc7 .framer-1unzz6m, .framer-ZcVc7 .framer-17s0nxe, .framer-ZcVc7 .framer-1mfmp2l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-ZcVc7 .framer-1i9ro87, .framer-ZcVc7 .framer-1gsoz4j, .framer-ZcVc7 .framer-1v7w9oy, .framer-ZcVc7 .framer-1mytiia, .framer-ZcVc7 .framer-t3njru { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-1w0kn7b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-1ycj9ed { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; scroll-margin-top: 150px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-ZcVc7 .framer-s0qej { --border-bottom-width: 0px; --border-color: #012a87; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ZcVc7 .framer-12fwxri { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ZcVc7 .framer-1s2vd8w, .framer-ZcVc7 .framer-rh31x1, .framer-ZcVc7 .framer-1hyfjc, .framer-ZcVc7 .framer-azom93, .framer-ZcVc7 .framer-1xn545n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-12r9z6y, .framer-ZcVc7 .framer-1uezng5, .framer-ZcVc7 .framer-mx9qg3, .framer-ZcVc7 .framer-1pqkt8e, .framer-ZcVc7 .framer-1x5jeej { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZcVc7 .framer-1qr6vfi, .framer-ZcVc7 .framer-1hiamb8, .framer-ZcVc7 .framer-1luhb7t, .framer-ZcVc7 .framer-1khobuv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-ozni4m-container, .framer-ZcVc7 .framer-1h5pzmg-container, .framer-ZcVc7 .framer-m0ymge-container, .framer-ZcVc7 .framer-17ornf-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-ZcVc7 .framer-1pjm8yo { --border-bottom-width: 0px; --border-color: #002b84; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ZcVc7 .framer-6493yz, .framer-ZcVc7 .framer-1oj5x0k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ZcVc7 .framer-wuz4jr { --border-bottom-width: 0px; --border-color: #345eaa; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ZcVc7 .framer-yb8856, .framer-ZcVc7 .framer-rkp30g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-jzwwqf { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-4ggdf-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ZcVc7 .framer-1jw0vn3, .framer-ZcVc7 .framer-ap43nl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; width: 100%; z-index: 1; }`,
        `.framer-ZcVc7 .framer-gbshwo, .framer-ZcVc7 .framer-jc7wkb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ZcVc7 .framer-wmis1v, .framer-ZcVc7 .framer-ysjsoq { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fdfbf9; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        ...L,
        ...Se,
        ...z,
        ..._e,
        ...k,
        ...M,
        `.framer-ZcVc7[data-border="true"]::after, .framer-ZcVc7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-ZcVc7.framer-nt5dje { flex-direction: column; width: 810px; } .framer-ZcVc7 .framer-14dlwbn-container { height: auto; width: 100%; z-index: 2; } .framer-ZcVc7 .framer-8i82sf { flex: none; overflow: hidden; padding: 32px 48px 64px 48px; width: 100%; } .framer-ZcVc7 .framer-1vgbq3n { gap: 0px; order: 1; overflow: hidden; padding: 0px; } .framer-ZcVc7 .framer-1nvxuc1 { padding: 24px 0px 24px 16px; } .framer-ZcVc7 .framer-ap43nl { order: 0; }}`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-ZcVc7.framer-nt5dje { width: 1240px; } .framer-ZcVc7 .framer-54nn8j { gap: 32px; }}`,
        `@media (max-width: 809.98px) { .framer-ZcVc7.framer-nt5dje { flex-direction: column; width: 390px; } .framer-ZcVc7 .framer-14dlwbn-container { height: auto; width: 100%; z-index: 2; } .framer-ZcVc7 .framer-8i82sf { flex: none; overflow: hidden; padding: 24px 24px 32px 24px; width: 100%; } .framer-ZcVc7 .framer-1vgbq3n { gap: 0px; order: 0; overflow: hidden; padding: 0px; } .framer-ZcVc7 .framer-54nn8j { gap: 16px; order: 1; } .framer-ZcVc7 .framer-1y0gm8t, .framer-ZcVc7 .framer-c638hh, .framer-ZcVc7 .framer-1ouj6vd, .framer-ZcVc7 .framer-1s43c80, .framer-ZcVc7 .framer-1f31pj1, .framer-ZcVc7 .framer-n120ts, .framer-ZcVc7 .framer-i3j6gh { gap: 8px; } .framer-ZcVc7 .framer-1nvxuc1 { gap: 16px; padding: 24px 0px 24px 8px; } .framer-ZcVc7 .framer-fhda0q { gap: 16px; } .framer-ZcVc7 .framer-s0qej, .framer-ZcVc7 .framer-1pjm8yo, .framer-ZcVc7 .framer-wuz4jr { padding: 16px 0px 24px 8px; } .framer-ZcVc7 .framer-1jw0vn3 { order: 0; }}`,
      ],
      `framer-ZcVc7`
    )),
    ($.displayName = `Projects / Medicalnetwork`),
    ($.defaultProps = { height: 11909, width: 1440 }),
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
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => m([() => O(N, {}, t)], t) }),
    (Me = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerwcki3OcY_`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1440`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DEJr44GVb":{"layout":["fixed","auto"]},"CpJoOsDxW":{"layout":["fixed","auto"]},"P1J7WvMcG":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `11909`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `{"qGiz83ySR":{"pattern":":qGiz83ySR","name":"research"},"E_6yIy1Lz":{"pattern":":E_6yIy1Lz","name":"prototype"}}`,
            framerImmutableVariables: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, $ as default, q as queryParamNames };
//# sourceMappingURL=qZhdh5dGTAyqXbhVeIPqg3yG_5uSWTuW43MCSL-_Tjc.OUxi5Gag.mjs.map
