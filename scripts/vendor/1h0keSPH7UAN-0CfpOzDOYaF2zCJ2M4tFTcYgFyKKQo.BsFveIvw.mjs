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
import _e, { t as ve } from "./gK0EJhSeCV2eJcyH8zDEW_DtFGWImedalygCi0JWZHg.CzluLC_4.mjs";
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
      cqB4D5O6l: `(min-width: 1240px) and (max-width: 1439.98px)`,
      FPQzwkwBx: `(max-width: 809.98px)`,
      GFapnhTL1: `(min-width: 810px) and (max-width: 1239.98px)`,
      WQLkyLRf1: `(min-width: 1440px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-SShbh`),
    (K = {
      cqB4D5O6l: `framer-v-1r2efqj`,
      FPQzwkwBx: `framer-v-1q41gwh`,
      GFapnhTL1: `framer-v-4gt7hc`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `WQLkyLRf1`, Laptop: `cqB4D5O6l`, Phone: `FPQzwkwBx`, Tablet: `GFapnhTL1` }),
    (X = ({ value: e }) =>
      C()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `WQLkyLRf1`,
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
          D = f(G, ge, fe, L, de, I),
          O = i(h)?.isLayoutTemplate,
          k = !!i(ne)?.transition?.layout,
          A = q(O, k),
          M = () => !U() || E !== `FPQzwkwBx`;
        return (
          oe({}),
          o(h.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Y,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: K,
            },
            children: a(re, {
              id: C ?? u,
              children: [
                o(X, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(l.div, {
                  ...T,
                  className: f(D, `framer-72rtr7`, y),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: E,
                      overrides: {
                        FPQzwkwBx: { height: 800, width: p?.width || `100vw` },
                        GFapnhTL1: { height: 800, width: p?.width || `100vw` },
                      },
                      children: o(S, {
                        height: 1e3,
                        children: o(se, {
                          className: `framer-vf6gya-container`,
                          layout: A,
                          nodeId: `j0fOEEobX`,
                          scopeId: `augiA20Il`,
                          children: o(_, {
                            breakpoint: E,
                            overrides: {
                              FPQzwkwBx: { style: { width: `100%` }, variant: J(`gDp4vegDP`) },
                              GFapnhTL1: { style: { width: `100%` }, variant: J(`GyptpuIOr`) },
                            },
                            children: o(j, {
                              height: `100%`,
                              id: `j0fOEEobX`,
                              layoutId: `j0fOEEobX`,
                              style: { height: `100%` },
                              variant: J(`AVQqvKGKz`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(l.div, {
                      className: `framer-182msev`,
                      "data-framer-name": `Frame 31`,
                      layout: A,
                      children: [
                        a(`div`, {
                          className: `framer-lz7mbs`,
                          "data-framer-name": `Intro`,
                          children: [
                            a(`div`, {
                              className: `framer-qx7ue3`,
                              children: [
                                a(`div`, {
                                  className: `framer-8cttx`,
                                  "data-framer-name": `Frame 3`,
                                  children: [
                                    o(v, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: o(`strong`, {
                                            children: `Professional Summary`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-fdkj26`,
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
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: `Senior Product Designer | Multi-role Workflows | Enterprise & Global Systems`,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: `10+ years of experience building end-to-end B2B, B2B2C and B2C products in Healthcare and FinTech. `,
                                          }),
                                          o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(20, 20, 20)`,
                                            },
                                            children: `I transform complex workflows into scalable, intuitive solutions, with hands-on experience incorporating AI into products to solve real business problems.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-10w28z2`,
                                      "data-framer-name": `An Enterprise UX professional with 10+ years of experience. Passionate about finding simple and elegant solutions to solve complex problems. I design products that are user friendly, have intuitive interface and drive business goals. Currently, working on streamlining, simplifying and generally improving Healthcare-related products in US as part of Optum’s (United Healthcare Group) UX team. \u2028I specialize in creative design solutions, focusing on product strategy, visual design, and interaction design. Additionally, I have expertise in design thinking, content strategy, responsive design, accessibility design, design systems, and various aspects of user research.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                M() &&
                                  o(`div`, {
                                    className: `framer-1gr52n hidden-1q41gwh`,
                                    "data-framer-name": `Frame 3`,
                                    children: o(_, {
                                      breakpoint: E,
                                      overrides: {
                                        cqB4D5O6l: {
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
                                        GFapnhTL1: {
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
                                        className: `framer-ovq9mc`,
                                        "data-border": !0,
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-ex0ic8`,
                              children: [
                                o(v, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: o(`strong`, { children: `Key Skills:` }),
                                    }),
                                  }),
                                  className: `framer-2i6tbx`,
                                  "data-framer-name": `An Enterprise UX professional with 10+ years of experience. Passionate about finding simple and elegant solutions to solve complex problems. I design products that are user friendly, have intuitive interface and drive business goals. Currently, working on streamlining, simplifying and generally improving Healthcare-related products in US as part of Optum’s (United Healthcare Group) UX team. \u2028I specialize in creative design solutions, focusing on product strategy, visual design, and interaction design. Additionally, I have expertise in design thinking, content strategy, responsive design, accessibility design, design systems, and various aspects of user research.`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
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
                                              o(`strong`, {
                                                children: `Complex Workflow Design (B2B / Enterprise)`,
                                              }),
                                              ` — Design and optimize multi-step, multi-role workflows for efficiency, accuracy, and reduced cognitive load.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `Systems Thinking` }),
                                              ` — Design of interconnected systems with scalable interface architecture using components, variants, and auto-layout.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `Data-Driven UX` }),
                                              ` — Design dashboards and data-heavy interfaces that support decision-making.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `Product Collaboration` }),
                                              ` — Translate business goals, user needs, and technical constraints into design solutions.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `UX Research & Validation` }),
                                              ` — Apply hypothesis-driven design through user interviews, journey mapping (CJM), usability testing, and analytics.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, {
                                                children: `End-to-End Product Design`,
                                              }),
                                              ` — Lead the design process from discovery to delivery: workflows, wireframes, prototypes, and UI, with iterative execution.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `Design Systems` }),
                                              ` — Build and scale UI systems through standardize patterns and documentation across teams.`,
                                            ],
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: a(`p`, {
                                            children: [
                                              o(`strong`, { children: `AI in Product Design` }),
                                              ` — Apply AI for ideation, personalization, and user behavior analysis. Integrate AI tools into product experiences (ChatGPT, DALL·E, Figma Make, Codex).`,
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-1i3hgjw`,
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
                          className: `framer-ogw4o`,
                          "data-framer-name": `Body`,
                          children: [
                            a(`div`, {
                              className: `framer-n4fv4k`,
                              "data-framer-name": `Experience`,
                              children: [
                                o(v, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h2`, {
                                      className: `framer-styles-preset-qvrn1k`,
                                      "data-styles-preset": `ksQr_zVQP`,
                                      children: `Experience`,
                                    }),
                                  }),
                                  className: `framer-1rqpnh7`,
                                  "data-framer-name": `Experience`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-nmqj9v`,
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
                                      className: `framer-t2sdqu`,
                                      "data-framer-name": `image 1`,
                                    }),
                                    a(`div`, {
                                      className: `framer-1kpdzy0`,
                                      "data-framer-name": `Frame 7`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1k5enag`,
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
                                                      children: `Senior Product Designer (UX Team Lead)`,
                                                    }),
                                                    o(`br`, {}),
                                                    `Optum (Subsidiary of United Healthcare Group)`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-kfm74y`,
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
                                                  children: `Sep 2022 - Present`,
                                                }),
                                              }),
                                              className: `framer-18aqhyn`,
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
                                                children: `I transform complex, multi-step, multi-role legacy healthcare applications into modern, well-organized portals that use reusable components to simplify development and ensure UI consistency.`,
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: `During my four years at Optum, I worked on numerous enterprise-critical solutions, including:`,
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
                                                        o(`strong`, {
                                                          children: `Onboarding & Enrollment Portal:`,
                                                        }),
                                                        ` Leading a multi-year, phased product design project to consolidate dozens of fragmented onboarding and registration systems into a unified self-service portal. Collaborating with the product manager to define product strategy, streamline user flows, and drive end-to-end user experience design across all implementation stages. `,
                                                        o(`strong`, { children: `Result:` }),
                                                        ` After the first update in early 2026, registration-related support requests decreased by over 40% within the first three months, demonstrating improved usability and operational efficiency. `,
                                                        o(b, {
                                                          href: { webPageId: `wcki3OcY_` },
                                                          motionChild: !0,
                                                          nodeId: `sRkqJj6UP`,
                                                          openInNewTab: !1,
                                                          relValues: [],
                                                          scopeId: `augiA20Il`,
                                                          smoothScroll: !1,
                                                          children: o(l.a, {
                                                            className: `framer-styles-preset-5o0yrv`,
                                                            "data-styles-preset": `dnqfQO1cP`,
                                                            children: `Review Enrollments Case Study.`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: a(`p`, {
                                                      children: [
                                                        o(`strong`, {
                                                          children: `Product Unification Strategy:`,
                                                        }),
                                                        ` Partnered with the product team to define and execute a unified portal strategy, consolidating multi-layered solutions under a single login. This simplified customer workflows, improved security, and enabled Optum to integrate multiple independent products into a single, consistent user interface. `,
                                                        o(b, {
                                                          href: { webPageId: `oe1CZFKp_` },
                                                          motionChild: !0,
                                                          nodeId: `sRkqJj6UP`,
                                                          openInNewTab: !1,
                                                          relValues: [],
                                                          scopeId: `augiA20Il`,
                                                          smoothScroll: !1,
                                                          children: o(l.a, {
                                                            className: `framer-styles-preset-5o0yrv`,
                                                            "data-styles-preset": `dnqfQO1cP`,
                                                            children: `Review Connect Center Hub Case Study.`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: a(`p`, {
                                                      children: [
                                                        o(`strong`, {
                                                          children: `Reusable Plug-in Applications:`,
                                                        }),
                                                        ` Created reusable plug-in applications for enterprise-wide use, including a PDF-to-digital form mapping tool supporting industry-specific functionality. `,
                                                        o(b, {
                                                          href: { webPageId: `ccThq1ZNn` },
                                                          motionChild: !0,
                                                          nodeId: `sRkqJj6UP`,
                                                          openInNewTab: !1,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `augiA20Il`,
                                                          smoothScroll: !1,
                                                          children: o(l.a, {
                                                            className: `framer-styles-preset-5o0yrv`,
                                                            "data-styles-preset": `dnqfQO1cP`,
                                                            children: `Review PDF Mapping Case Study.`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: a(`p`, {
                                                      children: [
                                                        o(`strong`, {
                                                          children: `Payer Workflow Database:`,
                                                        }),
                                                        ` Consolidated hundreds of separate payer lists into a single searchable database, allowing users to quickly identify the workflows required for each payer.`,
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              o(`p`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: o(`strong`, {
                                                  children: `Approach & Leadership:`,
                                                }),
                                              }),
                                              a(`ul`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: [
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Standardize interfaces through repeatable patterns to accelerate adoption and ensure consistency across products`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Lead team development through mentorship and structured peer reviews, improving design quality and delivery speed`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Ensure alignment with regulatory requirements, product strategy, and technical constraints to deliver scalable, compliant solutions`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          className: `framer-4ptl4n`,
                                          "data-framer-name": `As a\xA0Principal Enterprise UX Designer\xA0at Optum, I led the design of innovative and user-centered solutions for both new and legacy healthcare products, directly impacting the experiences of healthcare professionals and patients. I spearheaded multiple projects, conducting user research, analyzing data, and collaborating with cross-functional teams to define and deliver intuitive, accessible, and scalable designs. By creating wireframes, prototypes, and design specifications, I effectively communicated solutions that balanced user needs with business goals. I also mentored junior designers, advocated for user-centered design principles, and presented design strategies to stakeholders, ensuring alignment and buy-in. My work contributed to improving healthcare workflows and enhancing patient outcomes, while staying ahead of industry trends and regulatory requirements.`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-1rb56lc`,
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
                                      className: `framer-1jobfno`,
                                      "data-framer-name": `image 2`,
                                    }),
                                    a(`div`, {
                                      className: `framer-1ozjj9b`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-11fvy5q`,
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
                                              className: `framer-7us5rz`,
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
                                                  children: `Oct 2016 - Sep 2022`,
                                                }),
                                              }),
                                              className: `framer-1lhy7hr`,
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
                                                children: o(`em`, {
                                                  children: `Returned to the company in 2016 to help build, structure, and scale a newly established, dedicated UX department. As UX Team Lead, directed product design for a massive, multi-year enterprise initiative.`,
                                                }),
                                              }),
                                              a(`ul`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: [
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Led product design for consolidating disparate Salesforce-based support portals into a unified ecosystem, ensuring a consistent UX/UI across all corporate B2B products.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Managed the full lifecycle of UX research, transforming user insights into actionable product requirements and advocating for user needs in complex, multi-step scenarios.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Designed end-to-end design artifacts, creating interactive prototypes, sitemaps, and wireframes, alongside comprehensive functional specifications and interaction documentation.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Established efficient cross-functional collaboration, coordinating the efforts of UI designers, researchers, content strategists, and product development teams.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Conducted Design QA throughout the development phase, ensuring precise implementation of the UX vision and adherence to accessibility standards across various regional platforms.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Advanced internal UX practices, scaling and standardizing design processes for enterprise applications, mentoring colleagues, and introducing modern design methodologies.`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          className: `framer-120bokv`,
                                          "data-framer-name": `At TransUnion I conducted research, analysis, and interpretation of diverse inputs to define and document user experience requirements. Advocated for user needs to guide and enhance design decisions. Developed comprehensive design deliverables, including wireframes, prototypes, site maps, feature lists, and specifications. Collaborated closely with cross-functional teams, including visual designers, content specialists, and developers, throughout ideation, design, and development stages. Provided ongoing consultation during development and rollout to ensure accurate implementation and communication of designs. Contributed to internal innovation initiatives focused on advancing user experience practices.`,
                                          fonts: [`Inter`, `Inter-Italic`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-jbn4jg`,
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
                                      className: `framer-1fymwrl`,
                                      "data-framer-name": `image 2`,
                                    }),
                                    a(`div`, {
                                      className: `framer-12adv3t`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-e2vypg`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-ybj8zr`,
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
                                                  className: `framer-fnso5h`,
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
                                                  className: `framer-cv8x08`,
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
                                                  children: `Jan 2016 - Jul 2016`,
                                                }),
                                              }),
                                              className: `framer-lx3cr1`,
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
                                            children: a(`ul`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: [
                                                o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: o(`p`, {
                                                    children: `Led the design of B2C data-driven products, focusing on the UX optimization of product landing pages, customer journey maps (CJMs), and key conversion metrics.`,
                                                  }),
                                                }),
                                                o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: o(`p`, {
                                                    children: `Collaborated closely with marketing teams and the Content Management Department (CMD) to design intuitive landing page interfaces and drive higher user engagement.`,
                                                  }),
                                                }),
                                                o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: o(`p`, {
                                                    children: `Utilized product and web analytics to identify growth opportunities, optimize the product life cycle, and eliminate friction points in customer journeys.`,
                                                  }),
                                                }),
                                                o(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: o(`p`, {
                                                    children: `Successfully modernized legacy systems to modern B2C UX standards, enhancing long-term product viability and boosting customer satisfaction metrics.`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          className: `framer-1067jo5`,
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
                                  className: `framer-6ilisv`,
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
                                      className: `framer-1mzibv`,
                                      "data-framer-name": `image 2`,
                                    }),
                                    a(`div`, {
                                      className: `framer-f0lft`,
                                      "data-framer-name": `Frame 9`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1ynt7wp`,
                                          "data-framer-name": `Frame 8`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1bcphgg`,
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
                                                  className: `framer-1eucl2c`,
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
                                                  className: `framer-1q8j0uh`,
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
                                                  children: `Feb 2008 - Oct 2015`,
                                                }),
                                              }),
                                              className: `framer-hg7a2k`,
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
                                                children: o(`em`, {
                                                  children: `In 2008, a dedicated UX Designer role did not exist at the company. I started on a cross-functional Shared Services team responsible for supporting TransUnion's entire global digital footprint.`,
                                                }),
                                              }),
                                              a(`ul`, {
                                                className: `framer-styles-preset-12u88cl`,
                                                "data-styles-preset": `HftgEsO0a`,
                                                dir: `auto`,
                                                children: [
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Managed the development and support of digital platforms, taking full ownership of interface design, web analytics, and content for the official TransUnion.com site and all its international localizations.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Designed the interface for TransUnion's first 100% online product, architecting the logic and customer journey maps (CJM) from scratch, and creating sitemaps, wireframes, and interactive prototypes for a successful web launch.`,
                                                    }),
                                                  }),
                                                  o(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: o(`p`, {
                                                      children: `Contributed to a major brand redesign (2012–2014) as part of a core three-person team, driving the UI design and visual transformation from a rigid, institutional style to a modern, energetic, and intuitive visual language.`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          className: `framer-1aj1k3c`,
                                          "data-framer-name": `I fulfilled a hybrid role encompassing Product Owner, Product Analyst, and UX Designer responsibilities. My duties included defining project objectives and requirements, conducting usability testing, analyzing findings, and refining design solutions based on UX study results. I created site maps, wireframes, high-fidelity mockups, and interactive prototypes. Through collaborative efforts with business units and IT, I ensured the seamless integration of new developments with existing web platforms, thereby optimizing functionality and operational efficiency.`,
                                          fonts: [`Inter`, `Inter-Italic`],
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
                              className: `framer-1e5bfwp`,
                              "data-framer-name": `Education`,
                              children: [
                                o(v, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h2`, {
                                      className: `framer-styles-preset-qvrn1k`,
                                      "data-styles-preset": `ksQr_zVQP`,
                                      children: `Education`,
                                    }),
                                  }),
                                  className: `framer-155nyau`,
                                  "data-framer-name": `Education`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-1iwo50g`,
                                  "data-framer-name": `Frame 29`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-jc5msr`,
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
                                          className: `framer-14frv6x`,
                                          "data-framer-name": `image 1`,
                                        }),
                                        a(`div`, {
                                          className: `framer-135rcy`,
                                          "data-framer-name": `Frame 7`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-n54x31`,
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
                                                  className: `framer-czzpj3`,
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
                                                  className: `framer-74j14d`,
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
                                                  children: `MS, Business Information Technology from Kellstadt Graduate School of Business`,
                                                }),
                                              }),
                                              className: `framer-xgml0c`,
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
                                      className: `framer-9p2kma`,
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
                                          className: `framer-y9nqd0`,
                                          "data-framer-name": `image 1`,
                                        }),
                                        a(`div`, {
                                          className: `framer-v78e3y`,
                                          "data-framer-name": `Frame 7`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-13z3nvl`,
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
                                                  className: `framer-19t1owm`,
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
                                                  className: `framer-f4fg9p`,
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
                                                  children: `BBA, International Business and Marketing from Seidman College of Business`,
                                                }),
                                              }),
                                              className: `framer-qi6otg`,
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
        `.framer-SShbh.framer-lux5qc, .framer-SShbh .framer-lux5qc { display: block; }`,
        `.framer-SShbh.framer-72rtr7 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-SShbh .framer-vf6gya-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-SShbh .framer-182msev { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 64px 0px; position: relative; width: 1px; }`,
        `.framer-SShbh .framer-lz7mbs { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-qx7ue3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-8cttx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 87px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-SShbh .framer-fdkj26, .framer-SShbh .framer-1rqpnh7, .framer-SShbh .framer-kfm74y, .framer-SShbh .framer-18aqhyn, .framer-SShbh .framer-7us5rz, .framer-SShbh .framer-1lhy7hr, .framer-SShbh .framer-fnso5h, .framer-SShbh .framer-cv8x08, .framer-SShbh .framer-lx3cr1, .framer-SShbh .framer-1eucl2c, .framer-SShbh .framer-1q8j0uh, .framer-SShbh .framer-hg7a2k, .framer-SShbh .framer-czzpj3, .framer-SShbh .framer-74j14d, .framer-SShbh .framer-19t1owm, .framer-SShbh .framer-f4fg9p { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-SShbh .framer-10w28z2, .framer-SShbh .framer-2i6tbx, .framer-SShbh .framer-1i3hgjw, .framer-SShbh .framer-4ptl4n, .framer-SShbh .framer-120bokv, .framer-SShbh .framer-1067jo5, .framer-SShbh .framer-1aj1k3c, .framer-SShbh .framer-155nyau, .framer-SShbh .framer-xgml0c, .framer-SShbh .framer-qi6otg { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-SShbh .framer-1gr52n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 333px; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-SShbh .framer-ovq9mc { --border-bottom-width: 4px; --border-color: #222222; --border-left-width: 4px; --border-right-width: 4px; --border-style: double; --border-top-width: 4px; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 295px; position: relative; width: 283px; }`,
        `.framer-SShbh .framer-ex0ic8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-ogw4o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 64px 0px 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-n4fv4k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-nmqj9v, .framer-SShbh .framer-1rb56lc, .framer-SShbh .framer-jbn4jg, .framer-SShbh .framer-6ilisv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-t2sdqu, .framer-SShbh .framer-y9nqd0 { aspect-ratio: 1.0454545454545454 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 46px; }`,
        `.framer-SShbh .framer-1kpdzy0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-SShbh .framer-1k5enag, .framer-SShbh .framer-11fvy5q, .framer-SShbh .framer-e2vypg, .framer-SShbh .framer-1ynt7wp { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-1jobfno, .framer-SShbh .framer-1mzibv { aspect-ratio: 1 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 48px; }`,
        `.framer-SShbh .framer-1ozjj9b, .framer-SShbh .framer-12adv3t, .framer-SShbh .framer-f0lft { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-SShbh .framer-1fymwrl { aspect-ratio: 1.7142857142857142 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: auto; position: relative; width: 48px; }`,
        `.framer-SShbh .framer-ybj8zr, .framer-SShbh .framer-1bcphgg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-SShbh .framer-1e5bfwp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-1iwo50g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-jc5msr, .framer-SShbh .framer-9p2kma { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-SShbh .framer-14frv6x { aspect-ratio: 1.0454545454545454 / 1; flex: none; height: auto; position: relative; width: 46px; }`,
        `.framer-SShbh .framer-135rcy, .framer-SShbh .framer-v78e3y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-SShbh .framer-n54x31, .framer-SShbh .framer-13z3nvl { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        ...B,
        ...A,
        ...pe,
        ...M,
        ...P,
        `.framer-SShbh[data-border="true"]::after, .framer-SShbh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-SShbh.framer-72rtr7 { width: 1240px; } .framer-SShbh .framer-8cttx { flex: none; justify-content: flex-start; width: 480px; } .framer-SShbh .framer-1gr52n { align-self: stretch; flex: 1 0 0px; height: auto; width: 1px; } .framer-SShbh .framer-ovq9mc { flex: 1 0 0px; height: 1px; width: 100%; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-SShbh.framer-72rtr7 { flex-direction: column; gap: 16px; width: 810px; } .framer-SShbh .framer-vf6gya-container { height: auto; width: 100%; } .framer-SShbh .framer-182msev { flex: none; padding: 0px 32px 24px 32px; width: 100%; } .framer-SShbh .framer-qx7ue3 { align-content: center; align-items: center; gap: 16px; padding: 0px; } .framer-SShbh .framer-8cttx, .framer-SShbh .framer-ex0ic8, .framer-SShbh .framer-ogw4o { padding: 0px; } .framer-SShbh .framer-1gr52n { align-self: stretch; height: auto; padding: 0px; width: 283px; } .framer-SShbh .framer-ovq9mc { height: 296px; order: 0; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-SShbh.framer-72rtr7 { flex-direction: column; gap: 16px; width: 390px; } .framer-SShbh .framer-vf6gya-container { height: auto; width: 100%; } .framer-SShbh .framer-182msev { flex: none; gap: 24px; padding: 0px 32px 24px 32px; width: 100%; } .framer-SShbh .framer-qx7ue3 { align-content: center; align-items: center; padding: 0px; } .framer-SShbh .framer-8cttx, .framer-SShbh .framer-ex0ic8, .framer-SShbh .framer-ogw4o { padding: 0px; }}`,
      ],
      `framer-SShbh`
    )),
    (Q.displayName = `Home`),
    (Q.defaultProps = { height: 3391.5, width: 1440 }),
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
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
        ...V,
        ...y(me),
        ...y(O),
        ...y(he),
        ...y(E),
        ...y(F),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => p([() => T(j, {}, t)], t) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `3391.5`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cqB4D5O6l":{"layout":["fixed","auto"]},"GFapnhTL1":{"layout":["fixed","auto"]},"FPQzwkwBx":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerIntrinsicWidth: `1440`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=1h0keSPH7UAN-0CfpOzDOYaF2zCJ2M4tFTcYgFyKKQo.BsFveIvw.mjs.map
