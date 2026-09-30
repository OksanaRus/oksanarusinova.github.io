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
import Oe, { t as ke } from "./D2qVbbanM2w6-RFjAAW-mU8r7k5ygELHv9lzvOUJvnM.C-SV2u-a.mjs";
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
    (W = S(u.div, { nodeId: `YRcueVQAw`, override: Ee, scopeId: `oe1CZFKp_` })),
    (G = {
      gGCIKPV7_: `(min-width: 810px) and (max-width: 1239.98px)`,
      impLoGW9K: `(max-width: 809.98px)`,
      TIdWwmQB_: `(min-width: 1240px) and (max-width: 1439.98px)`,
      YRcueVQAw: `(min-width: 1440px)`,
    }),
    (K = () => typeof document < `u`),
    (q = []),
    (J = `framer-ScNse`),
    (Y = {
      gGCIKPV7_: `framer-v-fkioe7`,
      impLoGW9K: `framer-v-1v5vx51`,
      TIdWwmQB_: `framer-v-rrmqwx`,
      YRcueVQAw: `framer-v-1o3px57`,
    }),
    (X = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `YRcueVQAw`, Laptop: `TIdWwmQB_`, Phone: `impLoGW9K`, Tablet: `gGCIKPV7_` }),
    (Ae = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (je = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `YRcueVQAw`,
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
          P = () => !K() || ![`gGCIKPV7_`, `impLoGW9K`].includes(O),
          F = () => !K() || O === `gGCIKPV7_`,
          I = () => !K() || O === `impLoGW9K`,
          L = ce(`GUo93gOQe`),
          R = l(null),
          z = ce(`TN_9sjLMV`),
          B = l(null);
        return (
          oe({}),
          o(h.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `YRcueVQAw`,
              variantClassNames: Y,
            },
            children: a(ne, {
              id: S ?? re,
              children: [
                o(Ae, { value: `html body { background: rgb(253, 251, 248); }` }),
                a(W, {
                  ...D,
                  className: p(k, `framer-1o3px57`, b),
                  ref: c,
                  style: { ...g },
                  children: [
                    o(_, {
                      breakpoint: O,
                      overrides: {
                        gGCIKPV7_: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                        impLoGW9K: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                      },
                      children: o(T, {
                        height: 1e3,
                        y: (m?.y || 0) + 0,
                        children: o(C, {
                          className: `framer-wq39so-container`,
                          layout: M,
                          nodeId: `bYoMwEGFU`,
                          rendersWithMotion: !0,
                          scopeId: `oe1CZFKp_`,
                          children: o(_, {
                            breakpoint: O,
                            overrides: {
                              gGCIKPV7_: { style: { width: `100%` }, variant: Z(`s0lcynSc3`) },
                              impLoGW9K: { style: { width: `100%` }, variant: Z(`wvPpZ1IwG`) },
                            },
                            children: o(N, {
                              height: `100%`,
                              id: `bYoMwEGFU`,
                              layoutId: `bYoMwEGFU`,
                              style: { height: `100%` },
                              variant: Z(`mAQYDiHUl`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-r2n1ln`,
                      layout: M,
                      children: [
                        P() &&
                          o(u.div, {
                            className: `framer-hzsyu8 hidden-fkioe7 hidden-1v5vx51`,
                            children: a(u.div, {
                              className: `framer-1j3metg`,
                              children: [
                                a(u.div, {
                                  className: `framer-22az4x`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1mxjay6`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(u.div, {
                                      className: `framer-b3cj81`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: o(x, {
                                                href: {
                                                  hash: `:GUo93gOQe`,
                                                  webPageId: `oe1CZFKp_`,
                                                },
                                                motionChild: !0,
                                                nodeId: `c2xKb8cgc`,
                                                openInNewTab: !1,
                                                preserveParams: !1,
                                                relValues: [],
                                                scopeId: `oe1CZFKp_`,
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
                                          className: `framer-1qb2oqn`,
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
                                                href: {
                                                  hash: `:TN_9sjLMV`,
                                                  webPageId: `oe1CZFKp_`,
                                                },
                                                motionChild: !0,
                                                nodeId: `cJcCx2rfb`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `oe1CZFKp_`,
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
                                          className: `framer-1brcq3r`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(u.div, {
                                  className: `framer-7qgukb`,
                                  children: o(_, {
                                    breakpoint: O,
                                    overrides: { TIdWwmQB_: { href: { webPageId: `Yk0caFFXD` } } },
                                    children: o(x, {
                                      href: { webPageId: `v0NP7rg_A` },
                                      motionChild: !0,
                                      nodeId: `RoZtK9e8H`,
                                      openInNewTab: !1,
                                      scopeId: `oe1CZFKp_`,
                                      children: o(u.a, {
                                        className: `framer-16d9e02 framer-1uxlbtw`,
                                        "data-framer-name": `Button`,
                                        children: o(u.div, {
                                          className: `framer-6rlb1u`,
                                          children: a(v, {
                                            className: `framer-1te1vw3`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              o(v, {
                                                className: `framer-p1ft7j`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              o(v, {
                                                className: `framer-1g8wk08`,
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
                          }),
                        a(u.div, {
                          className: `framer-1mpxs0n`,
                          children: [
                            a(u.div, {
                              className: `framer-o3mnev`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h2`, {
                                      className: `framer-styles-preset-qvrn1k`,
                                      "data-styles-preset": `ksQr_zVQP`,
                                      dir: `auto`,
                                      children: `Project Overview`,
                                    }),
                                  }),
                                  className: `framer-1mikb5c`,
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
                                        children: `Customer Connect Hub is a multi-year UX and platform consolidation initiative that brings together two mature, high-traffic products, iEDI Clearinghouse and Optum Connect Center, into a unified experience. The design effort centers on establishing shared interaction patterns, a consistent information architecture, and a scalable foundation to support overlapping user needs and future growth.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Because both products are live, widely adopted, and deeply integrated into daily workflows, the primary design challenge is convergence without disruption. The solution focuses on incremental unification through aligned navigation, familiar workflows, and progressive adoption, allowing users to transition naturally while maintaining trust and productivity.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `This case study highlights the UX strategy and design decisions behind creating a cohesive platform while respecting existing user behaviors.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-z1nzvb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-1fss3ll`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Main Challenge`,
                                    }),
                                  }),
                                  className: `framer-779w7e`,
                                  fonts: [`Inter`],
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
                                      children: `The core challenge is to unify two mature, high-volume products without disrupting existing workflows, while enabling a phased migration of functionality and establishing a scalable foundation for long-term platform convergence.`,
                                    }),
                                  }),
                                  className: `framer-1c0k7h7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-431r6e`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `My Role`,
                                    }),
                                  }),
                                  className: `framer-1binmcl`,
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
                                        children: `I joined the project in Q4 2025 as a Senior UX Designer and team lead, working with a junior UX designer and a UX researcher. My role focuses on defining the transition strategy, shaping the information architecture, and delivering interaction design across the Customer Connect Hub initiative.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `I work closely with product managers, engineering teams, UX researchers, and key stakeholders to align on the unification approach, ensure continuity across platforms, and balance the long-term product vision with the realities of live production systems.`,
                                      }),
                                      o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `We began the project with UX research to identify key user personas, core workflows, and high-impact, low-effort improvement opportunities. These insights continue to inform the strategy for a seamless transition to the new platform by the end of 2026, while preserving user productivity and trust.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-19p1nun`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-1mgb48y`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Key UX Decisions`,
                                    }),
                                  }),
                                  className: `framer-5p0thj`,
                                  fonts: [`Inter`],
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
                                            dir: `auto`,
                                            children: `Introducing a Customer Connect Hub landing page as a neutral, centralized entry point.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            dir: `auto`,
                                            children: `Designing a shared dashboard and worklist to surface cross-product activity and status.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            dir: `auto`,
                                            children: `Using deep linking to connect users back to their preferred tools seamlessly.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            dir: `auto`,
                                            children: `Preserving existing workflows to minimize disruption and maintain user trust.`,
                                          }),
                                        }),
                                        o(`li`, {
                                          "data-preset-tag": `p`,
                                          children: o(`p`, {
                                            dir: `auto`,
                                            children: `Enabling gradual platform convergence to support long-term scalability and feature evolution.`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-c6nexq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-1s3f0jd`,
                              children: [
                                o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Tools`,
                                    }),
                                  }),
                                  className: `framer-bhzzh`,
                                  fonts: [`Inter`],
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
                                  className: `framer-18wu9vu`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            F() &&
                              a(u.div, {
                                className: `framer-dwlkt8 hidden-1o3px57 hidden-rrmqwx hidden-1v5vx51`,
                                children: [
                                  o(u.div, {
                                    className: `framer-1jh92ik`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-68oa9c`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(x, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `ZJ8oKJHIB`,
                                    openInNewTab: !1,
                                    scopeId: `oe1CZFKp_`,
                                    children: o(u.a, {
                                      className: `framer-ikl81s framer-1uxlbtw`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(u.div, {
                                        className: `framer-1ap137y`,
                                        children: a(v, {
                                          className: `framer-h6558d`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(v, {
                                              className: `framer-h2tvqm`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              className: `framer-613hv8`,
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
                            I() &&
                              a(u.div, {
                                className: `framer-1po0faa hidden-1o3px57 hidden-rrmqwx hidden-fkioe7`,
                                children: [
                                  o(u.div, {
                                    className: `framer-fhy169`,
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Customer Connect Hub`,
                                        }),
                                      }),
                                      className: `framer-1wlsoiz`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(x, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `zEDkWwHju`,
                                    openInNewTab: !1,
                                    scopeId: `oe1CZFKp_`,
                                    children: o(u.a, {
                                      className: `framer-1dvq6n5 framer-1uxlbtw`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: o(u.div, {
                                        className: `framer-1dyrm9s`,
                                        children: a(v, {
                                          className: `framer-fouuu1`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(v, {
                                              className: `framer-1tlfip0`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(v, {
                                              className: `framer-64tnk4`,
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
                        o(u.div, {
                          className: `framer-ct21to`,
                          children: a(u.div, {
                            className: `framer-1njljz2`,
                            "data-border": !0,
                            id: L,
                            ref: R,
                            children: [
                              a(u.div, {
                                className: `framer-wv2b4r`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: o(`strong`, { children: `Usability Research` }),
                                      }),
                                    }),
                                    className: `framer-1dkqxy8`,
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
                                        children: `From the very beginning of the project, my team worked closely with the project manager to understand the tool and existing workflows. We analyzed user behavior across both existing platforms, identified pain points and usage patterns, and explored opportunities for improvement. As part of the research, we conducted an analysis of existing user data, a competitive analysis, and user interviews to gain a deeper understanding of the current products, their audiences, and determine the best approach to unify them. This research provided a solid foundation for defining user requirements and designing solutions that balance both user needs and business goals.`,
                                      }),
                                    }),
                                    className: `framer-1r7c9d8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(u.div, {
                                className: `framer-4o3ym1`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: o(`strong`, {
                                          children: `Screenshot from a working session: in-depth analysis of existing user data`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-yxyajm`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(_, {
                                    breakpoint: O,
                                    overrides: {
                                      gGCIKPV7_: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 821,
                                          intrinsicWidth: 1244,
                                          loading: f(
                                            (m?.y || 0) +
                                              0 +
                                              800 +
                                              0 +
                                              2079.9 +
                                              0 +
                                              0 +
                                              32 +
                                              205.5 +
                                              0 +
                                              131.5
                                          ),
                                          pixelHeight: 3078,
                                          pixelWidth: 8767,
                                          sizes: `690px`,
                                          src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                          srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                        },
                                      },
                                      impLoGW9K: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 821,
                                          intrinsicWidth: 1244,
                                          loading: f(
                                            (m?.y || 0) +
                                              0 +
                                              800 +
                                              16 +
                                              2079.9 +
                                              0 +
                                              0 +
                                              16 +
                                              197.5 +
                                              0 +
                                              131.5
                                          ),
                                          pixelHeight: 3078,
                                          pixelWidth: 8767,
                                          sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                          src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                          srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                        },
                                      },
                                      TIdWwmQB_: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 821,
                                          intrinsicWidth: 1244,
                                          loading: f(
                                            (m?.y || 0) +
                                              0 +
                                              0 +
                                              2170.7 +
                                              0 +
                                              0 +
                                              32 +
                                              205.5 +
                                              0 +
                                              131.5
                                          ),
                                          pixelHeight: 3078,
                                          pixelWidth: 8767,
                                          src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                          srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                        },
                                      },
                                    },
                                    children: o(w, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 821,
                                        intrinsicWidth: 1244,
                                        loading: f(
                                          (m?.y || 0) +
                                            0 +
                                            0 +
                                            2202.7 +
                                            0 +
                                            0 +
                                            32 +
                                            213.5 +
                                            0 +
                                            131.5
                                        ),
                                        pixelHeight: 3078,
                                        pixelWidth: 8767,
                                        src: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078`,
                                        srcSet: `https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=512&width=8767&height=3078 512w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=1024&width=8767&height=3078 1024w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=2048&width=8767&height=3078 2048w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?scale-down-to=4096&width=8767&height=3078 4096w,https://framerusercontent.com/images/dGWbKFE2DPgMgBiA9pJiiL8fP4.png?width=8767&height=3078 8767w`,
                                      },
                                      className: `framer-gzexkp`,
                                      "data-framer-name": `Image`,
                                      fitImageDimension: `height`,
                                    }),
                                  }),
                                ],
                              }),
                              a(u.div, {
                                className: `framer-8wggd1`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: o(`strong`, {
                                          children: `Organizing key features by user type`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-1gymknk`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(_, {
                                    breakpoint: O,
                                    overrides: {
                                      gGCIKPV7_: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 821,
                                          intrinsicWidth: 1244,
                                          loading: f(
                                            (m?.y || 0) +
                                              0 +
                                              800 +
                                              0 +
                                              2079.9 +
                                              0 +
                                              0 +
                                              32 +
                                              603 +
                                              0 +
                                              131.5
                                          ),
                                          pixelHeight: 11199,
                                          pixelWidth: 12568,
                                          sizes: `690px`,
                                          src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                          srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                        },
                                      },
                                      impLoGW9K: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 821,
                                          intrinsicWidth: 1244,
                                          loading: f(
                                            (m?.y || 0) +
                                              0 +
                                              800 +
                                              16 +
                                              2079.9 +
                                              0 +
                                              0 +
                                              16 +
                                              473 +
                                              0 +
                                              131.5
                                          ),
                                          pixelHeight: 11199,
                                          pixelWidth: 12568,
                                          sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                          src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                          srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                        },
                                      },
                                      TIdWwmQB_: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 821,
                                          intrinsicWidth: 1244,
                                          loading: f(
                                            (m?.y || 0) +
                                              0 +
                                              0 +
                                              2170.7 +
                                              0 +
                                              0 +
                                              32 +
                                              617 +
                                              0 +
                                              131.5
                                          ),
                                          pixelHeight: 11199,
                                          pixelWidth: 12568,
                                          src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                          srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                        },
                                      },
                                    },
                                    children: o(w, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 821,
                                        intrinsicWidth: 1244,
                                        loading: f(
                                          (m?.y || 0) +
                                            0 +
                                            0 +
                                            2202.7 +
                                            0 +
                                            0 +
                                            32 +
                                            695 +
                                            0 +
                                            131.5
                                        ),
                                        pixelHeight: 11199,
                                        pixelWidth: 12568,
                                        src: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199`,
                                        srcSet: `https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=512&width=12568&height=11199 512w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=1024&width=12568&height=11199 1024w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=2048&width=12568&height=11199 2048w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?scale-down-to=4096&width=12568&height=11199 4096w,https://framerusercontent.com/images/zQENHjlzOwB9a3wXkOkXmnPaXo.png?width=12568&height=11199 12568w`,
                                      },
                                      className: `framer-18dfg05`,
                                      "data-framer-name": `Image`,
                                      fitImageDimension: `height`,
                                    }),
                                  }),
                                ],
                              }),
                              a(u.div, {
                                className: `framer-1a761cj`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: o(`strong`, {
                                          children: `Key Usability Insights, Grouped by Theme`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-1efanp1`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(u.div, {
                                    className: `framer-190pu9m`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Access` }),
                                          }),
                                        }),
                                        className: `framer-13h986c`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: O,
                                        overrides: {
                                          gGCIKPV7_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2079.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1373.5 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                          impLoGW9K: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2079.9 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  933.5 +
                                                  0 +
                                                  46.8 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                          TIdWwmQB_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2170.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1410.5 +
                                                  0 +
                                                  54.8 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1282,
                                              pixelWidth: 2282,
                                              src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                              srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2202.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1666.5 +
                                                0 +
                                                54.8 +
                                                0 +
                                                32.7
                                            ),
                                            pixelHeight: 1282,
                                            pixelWidth: 2282,
                                            src: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282`,
                                            srcSet: `https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=512&width=2282&height=1282 512w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=1024&width=2282&height=1282 1024w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?scale-down-to=2048&width=2282&height=1282 2048w,https://framerusercontent.com/images/vmEoEDEtdUNvwS9qADctKgs3LE.png?width=2282&height=1282 2282w`,
                                          },
                                          className: `framer-11oghby`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(u.div, {
                                    className: `framer-19kikd2`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Communication` }),
                                          }),
                                        }),
                                        className: `framer-vdjk6n`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: O,
                                        overrides: {
                                          gGCIKPV7_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2079.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1373.5 +
                                                  0 +
                                                  512.5 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                          impLoGW9K: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2079.9 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  933.5 +
                                                  0 +
                                                  287.5 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                          TIdWwmQB_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2170.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1410.5 +
                                                  0 +
                                                  508.5 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1278,
                                              pixelWidth: 2282,
                                              src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                              srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2202.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1666.5 +
                                                0 +
                                                621.5 +
                                                0 +
                                                32.7
                                            ),
                                            pixelHeight: 1278,
                                            pixelWidth: 2282,
                                            src: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278`,
                                            srcSet: `https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=512&width=2282&height=1278 512w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=1024&width=2282&height=1278 1024w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?scale-down-to=2048&width=2282&height=1278 2048w,https://framerusercontent.com/images/qI7z0sG1MiJWR0N8SuFYNp4.png?width=2282&height=1278 2282w`,
                                          },
                                          className: `framer-13diqq6`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(u.div, {
                                    className: `framer-1f72ug2`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: o(`strong`, { children: `Innovation` }),
                                          }),
                                        }),
                                        className: `framer-10az26o`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(_, {
                                        breakpoint: O,
                                        overrides: {
                                          gGCIKPV7_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  0 +
                                                  2079.9 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1373.5 +
                                                  0 +
                                                  969.2 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              sizes: `calc(${m?.width || `100vw`} - 96px)`,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                          impLoGW9K: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  16 +
                                                  2079.9 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  933.5 +
                                                  0 +
                                                  528.2 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                          TIdWwmQB_: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 821,
                                              intrinsicWidth: 1244,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2170.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1410.5 +
                                                  0 +
                                                  961.2 +
                                                  0 +
                                                  32.7
                                              ),
                                              pixelHeight: 1276,
                                              pixelWidth: 2274,
                                              src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                              srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                            },
                                          },
                                        },
                                        children: o(w, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 821,
                                            intrinsicWidth: 1244,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2202.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1666.5 +
                                                0 +
                                                1186.2 +
                                                0 +
                                                32.7
                                            ),
                                            pixelHeight: 1276,
                                            pixelWidth: 2274,
                                            src: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276`,
                                            srcSet: `https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=512&width=2274&height=1276 512w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=1024&width=2274&height=1276 1024w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?scale-down-to=2048&width=2274&height=1276 2048w,https://framerusercontent.com/images/Jp1C89s01cIUM0oPvS920u1pdpk.png?width=2274&height=1276 2274w`,
                                          },
                                          className: `framer-1xryep2`,
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
                        }),
                        o(u.div, {
                          className: `framer-3nrpkt`,
                          children: a(u.div, {
                            className: `framer-9s4szm`,
                            "data-border": !0,
                            id: z,
                            ref: B,
                            children: [
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: o(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: o(`strong`, { children: `Prototypes and mockups` }),
                                  }),
                                }),
                                className: `framer-biz1gd`,
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
                                    children: `We designed the Customer Connect Hub landing page as a customizable entry point. The top of the page highlights key data points from the dashboard, giving users a clear overview of their claims. At the bottom, quick links provide access to their most frequently used claim management tools.`,
                                  }),
                                }),
                                className: `framer-1g3ehm`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(u.div, {
                                className: `framer-f2wqbc`,
                                children: [
                                  a(u.div, {
                                    className: `framer-1x92pp`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(`h3`, {
                                            className: `framer-styles-preset-bdezu4`,
                                            "data-styles-preset": `TWYWOtjjp`,
                                            dir: `auto`,
                                            children: o(`strong`, {
                                              children: `Customer Connect Hub Landing`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-3ki7ys`,
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
                                              children: `In the first iteration of the CCH landing page, we focused on showcasing the new dashboard. The dashboard highlights data trends and provides high-level summaries for all claim types, regardless of the primary tool used.`,
                                            }),
                                            o(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: `At the bottom of the screen, users can access quick links to their most frequently used claim management tools or navigate directly to Connect Center or iEDI if desired.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-1jbkr8n`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(u.div, {
                                    className: `framer-z42svv`,
                                    children: o(T, {
                                      children: o(C, {
                                        className: `framer-oowjib-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `ZEnlVdjBA`,
                                        rendersWithMotion: !0,
                                        scopeId: `oe1CZFKp_`,
                                        children: o(V, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 8,
                                          bottomLeftRadius: 8,
                                          bottomRightRadius: 8,
                                          controls: !0,
                                          height: `100%`,
                                          id: `ZEnlVdjBA`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `ZEnlVdjBA`,
                                          loop: !1,
                                          muted: !0,
                                          objectFit: `scale-down`,
                                          playing: !1,
                                          posterEnabled: !1,
                                          srcFile: `https://framerusercontent.com/assets/HMV0Je3ipj3Q0Fuo2DlYIa6zw7w.mp4`,
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
                                className: `framer-1o8quzi`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        dir: `auto`,
                                        children: o(`strong`, {
                                          children: `Customer Connect Hub Dashboard`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-y27yoa`,
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
                                          children: `The Customer Connect Hub dashboard gives users a simple, efficient way to track their claims. While it is designed to evolve into a full reporting tool, its initial role is to provide a clear snapshot of the user’s claim management landscape. From this view, users can quickly filter to rejected or denied claims and navigate directly to the appropriate tools to resolve them.`,
                                        }),
                                        o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `In the first iteration of the CCH dashboard, we focused on surfacing the most critical information needed for effective claim management. The dashboard provides a clear snapshot of ongoing work and enables users to quickly identify and access rejected or denied claims, supporting faster triage and resolution.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-mmzwet`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(u.div, {
                                    className: `framer-1h006u`,
                                    children: o(T, {
                                      children: o(C, {
                                        className: `framer-109ly5w-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `bTn7TuMj_`,
                                        rendersWithMotion: !0,
                                        scopeId: `oe1CZFKp_`,
                                        children: o(V, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 8,
                                          bottomLeftRadius: 8,
                                          bottomRightRadius: 8,
                                          controls: !0,
                                          height: `100%`,
                                          id: `bTn7TuMj_`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `bTn7TuMj_`,
                                          loop: !1,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !1,
                                          posterEnabled: !1,
                                          srcFile: `https://framerusercontent.com/assets/ltjaiLjvFFg7dDPssiqtshHMzNQ.mp4`,
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
        `.framer-ScNse.framer-1uxlbtw, .framer-ScNse .framer-1uxlbtw { display: block; }`,
        `.framer-ScNse.framer-1o3px57 { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-ScNse .framer-wq39so-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-ScNse .framer-r2n1ln { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-ScNse .framer-hzsyu8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-ScNse .framer-1j3metg { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 64px 0px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ScNse .framer-22az4x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-ScNse .framer-1mxjay6, .framer-ScNse .framer-68oa9c, .framer-ScNse .framer-1wlsoiz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ScNse .framer-b3cj81 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ScNse .framer-1qb2oqn, .framer-ScNse .framer-1brcq3r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ScNse .framer-7qgukb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ScNse .framer-16d9e02 { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-ScNse .framer-6rlb1u, .framer-ScNse .framer-1ap137y, .framer-ScNse .framer-1dyrm9s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ScNse .framer-1te1vw3, .framer-ScNse .framer-h6558d, .framer-ScNse .framer-fouuu1 { height: 13px; position: relative; width: 14px; }`,
        `.framer-ScNse .framer-p1ft7j, .framer-ScNse .framer-h2tvqm, .framer-ScNse .framer-1tlfip0 { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-ScNse .framer-1g8wk08, .framer-ScNse .framer-613hv8, .framer-ScNse .framer-64tnk4 { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-ScNse .framer-1mpxs0n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-o3mnev { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-1mikb5c, .framer-ScNse .framer-z1nzvb, .framer-ScNse .framer-779w7e, .framer-ScNse .framer-1c0k7h7, .framer-ScNse .framer-1binmcl, .framer-ScNse .framer-19p1nun, .framer-ScNse .framer-5p0thj, .framer-ScNse .framer-c6nexq, .framer-ScNse .framer-bhzzh, .framer-ScNse .framer-18wu9vu, .framer-ScNse .framer-1dkqxy8, .framer-ScNse .framer-1r7c9d8, .framer-ScNse .framer-1g3ehm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ScNse .framer-1fss3ll, .framer-ScNse .framer-1s3f0jd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-431r6e, .framer-ScNse .framer-wv2b4r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-1mgb48y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-dwlkt8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; width: 100%; z-index: 1; }`,
        `.framer-ScNse .framer-1jh92ik, .framer-ScNse .framer-fhy169 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ScNse .framer-ikl81s, .framer-ScNse .framer-1dvq6n5 { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fdfbf9; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-ScNse .framer-1po0faa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-ct21to { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-1njljz2 { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 24px 16px; position: relative; scroll-margin-top: 230px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ScNse .framer-4o3ym1, .framer-ScNse .framer-8wggd1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ScNse .framer-yxyajm, .framer-ScNse .framer-1gymknk, .framer-ScNse .framer-1efanp1, .framer-ScNse .framer-biz1gd, .framer-ScNse .framer-3ki7ys, .framer-ScNse .framer-y27yoa { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-ScNse .framer-gzexkp, .framer-ScNse .framer-18dfg05, .framer-ScNse .framer-11oghby, .framer-ScNse .framer-13diqq6, .framer-ScNse .framer-1xryep2 { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-1a761cj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-190pu9m, .framer-ScNse .framer-19kikd2, .framer-ScNse .framer-1f72ug2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ScNse .framer-13h986c, .framer-ScNse .framer-vdjk6n, .framer-ScNse .framer-10az26o { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }`,
        `.framer-ScNse .framer-3nrpkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-9s4szm { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 0px 16px; position: relative; scroll-margin-top: 140px; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ScNse .framer-f2wqbc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-ScNse .framer-1x92pp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-1jbkr8n, .framer-ScNse .framer-mmzwet { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ScNse .framer-z42svv, .framer-ScNse .framer-1h006u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ScNse .framer-oowjib-container, .framer-ScNse .framer-109ly5w-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-ScNse .framer-1o8quzi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        ...L,
        ...Se,
        ...z,
        ..._e,
        ...k,
        ...M,
        `.framer-ScNse[data-border="true"]::after, .framer-ScNse [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-ScNse.framer-1o3px57 { width: 1240px; } .framer-ScNse .framer-1mpxs0n { justify-content: flex-start; } .framer-ScNse .framer-o3mnev, .framer-ScNse .framer-1fss3ll, .framer-ScNse .framer-431r6e, .framer-ScNse .framer-1mgb48y, .framer-ScNse .framer-wv2b4r { gap: 8px; } .framer-ScNse .framer-1njljz2, .framer-ScNse .framer-9s4szm { scroll-margin-top: 200px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-ScNse.framer-1o3px57 { flex-direction: column; width: 810px; } .framer-ScNse .framer-wq39so-container { height: auto; width: 100%; z-index: 2; } .framer-ScNse .framer-r2n1ln { flex: none; overflow: auto; padding: 0px 0px 32px 0px; width: 100%; } .framer-ScNse .framer-1mpxs0n { padding: 16px 48px 0px 48px; } .framer-ScNse .framer-o3mnev { gap: 8px; order: 1; } .framer-ScNse .framer-1mikb5c, .framer-ScNse .framer-dwlkt8 { order: 0; } .framer-ScNse .framer-z1nzvb { order: 1; } .framer-ScNse .framer-1fss3ll { gap: 8px; order: 2; } .framer-ScNse .framer-431r6e { gap: 8px; order: 3; } .framer-ScNse .framer-1mgb48y { gap: 8px; order: 4; } .framer-ScNse .framer-1s3f0jd { gap: 8px; order: 5; } .framer-ScNse .framer-ct21to, .framer-ScNse .framer-3nrpkt { padding: 0px 0px 0px 32px; } .framer-ScNse .framer-1njljz2 { gap: 24px; padding: 32px 48px 24px 16px; } .framer-ScNse .framer-gzexkp, .framer-ScNse .framer-18dfg05 { width: 690px; } .framer-ScNse .framer-1a761cj { justify-content: flex-start; } .framer-ScNse .framer-9s4szm { padding: 32px 48px 0px 16px; } .framer-ScNse .framer-z42svv, .framer-ScNse .framer-1h006u { flex-direction: column; } .framer-ScNse .framer-oowjib-container, .framer-ScNse .framer-109ly5w-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-ScNse.framer-1o3px57 { flex-direction: column; width: 390px; } .framer-ScNse .framer-wq39so-container { height: auto; width: 100%; z-index: 2; } .framer-ScNse .framer-r2n1ln { flex: none; overflow: auto; padding: 16px 0px 32px 0px; width: 100%; } .framer-ScNse .framer-1mpxs0n { padding: 0px 24px 0px 24px; } .framer-ScNse .framer-o3mnev { gap: 8px; order: 1; } .framer-ScNse .framer-1fss3ll { gap: 8px; order: 2; } .framer-ScNse .framer-431r6e { order: 3; } .framer-ScNse .framer-1mgb48y { order: 4; } .framer-ScNse .framer-1s3f0jd { gap: 8px; order: 5; } .framer-ScNse .framer-1po0faa { order: 0; } .framer-ScNse .framer-ct21to, .framer-ScNse .framer-3nrpkt { padding: 0px 0px 0px 16px; } .framer-ScNse .framer-1njljz2 { border-bottom-left-radius: unset; box-shadow: unset; gap: 24px; padding: 16px 24px 0px 8px; } .framer-ScNse .framer-wv2b4r { gap: 8px; } .framer-ScNse .framer-1a761cj { gap: 16px; } .framer-ScNse .framer-9s4szm { padding: 16px 24px 0px 8px; } .framer-ScNse .framer-z42svv, .framer-ScNse .framer-1h006u { flex-direction: column; } .framer-ScNse .framer-oowjib-container, .framer-ScNse .framer-109ly5w-container { flex: none; width: 100%; }}`,
      ],
      `framer-ScNse`
    )),
    ($.displayName = `Portfolio / Medicalnetwork`),
    ($.defaultProps = { height: 6670, width: 1440 }),
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
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Frameroe1CZFKp_`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"GUo93gOQe":{"pattern":":GUo93gOQe","name":"research"},"TN_9sjLMV":{"pattern":":TN_9sjLMV","name":"prototype"}}`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1440`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `6670`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"TIdWwmQB_":{"layout":["fixed","auto"]},"gGCIKPV7_":{"layout":["fixed","auto"]},"impLoGW9K":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, $ as default, q as queryParamNames };
//# sourceMappingURL=AD299xVsqQK_uKLv5G5IvmGbYAtY-G_U1m4S4qSM2aI.iwUaY-SH.mjs.map
