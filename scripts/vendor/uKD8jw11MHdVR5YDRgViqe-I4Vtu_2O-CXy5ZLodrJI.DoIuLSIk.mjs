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
  y as l,
} from "./react.B4lOa1lM.mjs";
import { S as u, a as te, r as ne, t as d } from "./motion.CcP9hEf_.mjs";
import {
  $ as re,
  A as f,
  F as p,
  O as m,
  Q as ie,
  S as h,
  W as ae,
  X as oe,
  _ as se,
  a as g,
  b as _,
  ct as v,
  f as y,
  h as b,
  it as x,
  k as S,
  l as C,
  lt as w,
  m as T,
  n as E,
  nt as ce,
  rt as le,
  s as ue,
  t as D,
  tt as O,
} from "./framer.DkH54azp.mjs";
import {
  a as k,
  c as de,
  d as fe,
  f as A,
  i as j,
  l as M,
  m as N,
  n as P,
  o as F,
  p as I,
  r as pe,
  s as me,
  t as L,
  u as R,
} from "./A9Wi3tJm7.DxAh4jTX.mjs";
import {
  a as he,
  c as z,
  i as ge,
  n as _e,
  o as ve,
  r as ye,
  s as be,
  t as xe,
} from "./U3NyadGC3.D4-KMvY1.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./rHJW28QP9.DPhSi4SB.mjs";
import { n as Ee, t as B } from "./Video.B2s1Q6fJ.mjs";
import { n as De, t as Oe } from "./Auth.CVK5H7vu.mjs";
import { n as ke, r as Ae } from "./TQ2_bezBK.DoT9jAYB.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, je, Q, Me, Ne, $, Pe;
function Fe() {
  return (Fe = e(() => {
    (c(),
      p(),
      d(),
      n(),
      Ee(),
      P(),
      Oe(),
      N(),
      R(),
      Se(),
      z(),
      ge(),
      F(),
      ke(),
      (V = m(L)),
      (H = m(B)),
      (U = w(u.div, { nodeId: `k8YbHirU3`, override: De, scopeId: `TQ2_bezBK` })),
      (W = {
        k8YbHirU3: `(min-width: 1440px)`,
        lVEPxDY4f: `(min-width: 810px) and (max-width: 1239.98px)`,
        mRmndZ5x2: `(min-width: 1240px) and (max-width: 1439.98px)`,
        tHQ684SA6: `(max-width: 809.98px)`,
      }),
      (G = () => typeof document < `u`),
      (K = []),
      (q = `framer-XZTJc`),
      (J = {
        k8YbHirU3: `framer-v-18esrmk`,
        lVEPxDY4f: `framer-v-tyf9bm`,
        mRmndZ5x2: `framer-v-1kev6g`,
        tHQ684SA6: `framer-v-v16fx7`,
      }),
      (Y = (e, t, n) => (e && t ? `position` : n)),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Z = { Desktop: `k8YbHirU3`, Laptop: `mRmndZ5x2`, Phone: `tHQ684SA6`, Tablet: `lVEPxDY4f` }),
      (je = ({ value: e }) =>
        O()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Q = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Z[r.variant] ?? r.variant ?? `k8YbHirU3`,
      })),
      (Me = /*#__PURE__*/ s(function (e, n) {
        let s = l(null),
          c = n ?? s,
          d = ee(),
          { activeLocale: p, setLocale: m } = ce(),
          h = oe(),
          { style: ae, className: se, layoutId: v, variant: S, ...w } = Q(e),
          O = t(() => Ae({}, p), [p]);
        le(O);
        let [k, de] = re(S, W, !1),
          A = _(q, xe, Te, pe, me, fe, he),
          j = i(g)?.isLayoutTemplate,
          M = !!i(te)?.transition?.layout,
          N = Y(j, M),
          P = () => !G() || ![`lVEPxDY4f`, `tHQ684SA6`].includes(k),
          F = x(`eMAnFFwqX`),
          I = l(null),
          R = x(`vnCqcB2zw`),
          z = l(null);
        return (
          ie({}),
          /*#__PURE__*/ o(g.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Z,
              primaryVariantId: `k8YbHirU3`,
              variantClassNames: J,
            },
            children: /*#__PURE__*/ a(ne, {
              id: v ?? d,
              children: [
                /*#__PURE__*/ o(je, { value: `html body { background: rgb(253, 251, 248); }` }),
                /*#__PURE__*/ a(U, {
                  ...w,
                  className: _(A, `framer-18esrmk`, se),
                  ref: c,
                  style: { ...ae },
                  children: [
                    /*#__PURE__*/ o(y, {
                      breakpoint: k,
                      overrides: {
                        lVEPxDY4f: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                        tHQ684SA6: {
                          height: 800,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0,
                        },
                      },
                      children: /*#__PURE__*/ o(D, {
                        height: 1e3,
                        y: (h?.y || 0) + 0,
                        children: /*#__PURE__*/ o(E, {
                          className: `framer-14bq5v3-container`,
                          layout: N,
                          nodeId: `HI7eBQlV6`,
                          rendersWithMotion: !0,
                          scopeId: `TQ2_bezBK`,
                          children: /*#__PURE__*/ o(y, {
                            breakpoint: k,
                            overrides: {
                              lVEPxDY4f: { style: { width: `100%` }, variant: X(`s0lcynSc3`) },
                              tHQ684SA6: { style: { width: `100%` }, variant: X(`wvPpZ1IwG`) },
                            },
                            children: /*#__PURE__*/ o(L, {
                              height: `100%`,
                              id: `HI7eBQlV6`,
                              layoutId: `HI7eBQlV6`,
                              style: { height: `100%` },
                              variant: X(`mAQYDiHUl`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ o(u.div, {
                      className: `framer-cls3y7`,
                      layout: N,
                      children: /*#__PURE__*/ a(u.div, {
                        className: `framer-3uerkt`,
                        children: [
                          /*#__PURE__*/ a(u.div, {
                            className: `framer-edh56o`,
                            children: [
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-tl2t9a`,
                                children: [
                                  /*#__PURE__*/ o(u.div, {
                                    className: `framer-1wfvcv`,
                                    children: /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `Data File Delivery (DFD)`,
                                        }),
                                      }),
                                      className: `framer-197qst6`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ o(C, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `AykwylZwm`,
                                    openInNewTab: !1,
                                    scopeId: `TQ2_bezBK`,
                                    children: /*#__PURE__*/ o(y, {
                                      breakpoint: k,
                                      overrides: {
                                        lVEPxDY4f: { "data-border": !0 },
                                        tHQ684SA6: { "data-border": !0 },
                                      },
                                      children: /*#__PURE__*/ o(u.a, {
                                        className: `framer-utnyiq framer-1b1mrjc`,
                                        "data-framer-name": `Button`,
                                        children: /*#__PURE__*/ o(u.div, {
                                          className: `framer-1ohagqu`,
                                          children: /*#__PURE__*/ o(y, {
                                            breakpoint: k,
                                            overrides: {
                                              lVEPxDY4f: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                              },
                                              tHQ684SA6: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                              },
                                            },
                                            children: /*#__PURE__*/ a(b, {
                                              className: `framer-avve4l`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                              withExternalLayout: !0,
                                              children: [
                                                /*#__PURE__*/ o(b, {
                                                  className: `framer-1c4d6y2`,
                                                  requiresOverflowVisible: !1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ o(b, {
                                                  className: `framer-hvhn29`,
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
                                /*#__PURE__*/ a(u.div, {
                                  className: `framer-tuwcok hidden-tyf9bm hidden-v16fx7`,
                                  children: [
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-1504gar`,
                                          "data-styles-preset": `rHJW28QP9`,
                                          dir: `auto`,
                                          children: /*#__PURE__*/ o(C, {
                                            href: { hash: `:eMAnFFwqX`, webPageId: `TQ2_bezBK` },
                                            motionChild: !0,
                                            nodeId: `rXAyKvuTh`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `TQ2_bezBK`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ o(u.a, {
                                              className: `framer-styles-preset-fx4193`,
                                              "data-styles-preset": `uWIEDCuYW`,
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `System Architecture`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1seurba`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(r, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-1504gar`,
                                          "data-styles-preset": `rHJW28QP9`,
                                          dir: `auto`,
                                          children: /*#__PURE__*/ o(C, {
                                            href: { hash: `:vnCqcB2zw`, webPageId: `TQ2_bezBK` },
                                            motionChild: !0,
                                            nodeId: `MPoirmXwU`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `TQ2_bezBK`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ o(u.a, {
                                              className: `framer-styles-preset-fx4193`,
                                              "data-styles-preset": `uWIEDCuYW`,
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `DFD Prototype`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1jb04td`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          /*#__PURE__*/ a(u.div, {
                            className: `framer-tf1h1r`,
                            children: [
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-1qt3e1w`,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Project Overview`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-puixdc`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: `DFD (Data File Delivery) is an internal administrative tool designed to replace several disconnected systems with a single centralized solution. The product automates the delivery of critical files, including medical device instructions, service notifications, and updates. File delivery is supported both by subscription and on demand, depending on the use case.`,
                                      }),
                                    }),
                                    className: `framer-wwg384`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-1tqdw9`,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Main Challenge`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-r0zyh1`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Support teams were working with a set of outdated, disconnected tools and partially relied on manual messaging. The processes were repetitive, error-prone, and difficult to maintain, with separate setup flows for products and clients and manual linking of communications. The challenge was to consolidate these workflows into a single tool capable of supporting a wide range of delivery scenarios under strict time and budget constraints.`,
                                      }),
                                    }),
                                    className: `framer-1nvwnwc`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-5v9si8`,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        dir: `auto`,
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `My Role`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-1745oce`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: `I served as the sole UX designer and led the project end to end. Working closely with the product manager and key internal users, I analyzed existing workflows, identified pain points, and designed the architecture of a unified application. My responsibilities included workflow mapping, information architecture and data model design, and interaction design, with a strong focus on minimizing training time and operational overhead.`,
                                      }),
                                    }),
                                    className: `framer-15jw6op`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-upnur4`,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        dir: `auto`,
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `Solution / Key UX Decisions`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-o9zit8`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ a(`ul`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        children: [
                                          /*#__PURE__*/ o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: /*#__PURE__*/ o(`p`, {
                                              children: `Introduced drop-in navigation that allows users to start or modify setup at any stage of the workflow`,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: /*#__PURE__*/ o(`p`, {
                                              children: `Designed user groups and communication groups that can be shared across multiple products`,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: /*#__PURE__*/ o(`p`, {
                                              children: `Transitioned from linear one-to-many structures to a flexible many-to-many data model`,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: /*#__PURE__*/ o(`p`, {
                                              children: `Integrated built-in customer communications, including message scheduling`,
                                            }),
                                          }),
                                          /*#__PURE__*/ o(`li`, {
                                            "data-preset-tag": `p`,
                                            children: /*#__PURE__*/ o(`p`, {
                                              children: `Prioritized clarity and simplicity in the interface to reduce user onboarding time`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-610zpm`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-brwakf`,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h3`, {
                                        className: `framer-styles-preset-bdezu4`,
                                        "data-styles-preset": `TWYWOtjjp`,
                                        children: /*#__PURE__*/ o(`strong`, { children: `Tools` }),
                                      }),
                                    }),
                                    className: `framer-1q9578d`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ a(r, {
                                      children: [
                                        /*#__PURE__*/ a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            /*#__PURE__*/ o(`strong`, { children: `Figma` }),
                                            `: Mockups and interactive prototypes.`,
                                          ],
                                        }),
                                        /*#__PURE__*/ a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            /*#__PURE__*/ o(`strong`, { children: `FigJam` }),
                                            `: Collaboration, brainstorming, and workflow analysis.`,
                                          ],
                                        }),
                                        /*#__PURE__*/ a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            /*#__PURE__*/ o(`strong`, {
                                              children: `Microsoft Loop`,
                                            }),
                                            `: Documentation, coordination, and day-to-day project organization.`,
                                          ],
                                        }),
                                      ],
                                    }),
                                    className: `framer-1f5g5yf`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-ixvl18`,
                                "data-border": !0,
                                id: F,
                                ref: I,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `System Architecture`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-2xfhv9`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(u.div, {
                                    className: `framer-gwiyi0`,
                                    children: /*#__PURE__*/ o(T, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ a(r, {
                                        children: [
                                          /*#__PURE__*/ o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `A key feature of the new tool was the introduction of a many-to-many data model and groups as independent objects. The ability to organize recipients into groups enabled a unified workflow along the chain: “tools → messages or message groups → user groups → tools,” replacing the previously fragmented and disconnected relationships. In the legacy system, these flows were separate, groups had to be recreated for each scenario, and were used only within a single configuration.`,
                                          }),
                                          /*#__PURE__*/ o(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: `The new solution implements a cyclical configuration process. Administrators can create reusable groups, that are managed as independent objects and can be linked to any campaign or product. Which reduces human errors and simplifies communication planning. `,
                                          }),
                                        ],
                                      }),
                                      className: `framer-17swldk`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ a(u.div, {
                                    className: `framer-1tgsukv`,
                                    children: [
                                      /*#__PURE__*/ o(u.div, {
                                        className: `framer-1g6z3wq`,
                                        children: /*#__PURE__*/ o(T, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ o(r, {
                                            children: /*#__PURE__*/ o(`h3`, {
                                              className: `framer-styles-preset-bdezu4`,
                                              "data-styles-preset": `TWYWOtjjp`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: /*#__PURE__*/ o(`strong`, {
                                                children: `Original and New Process Flows`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-1moftcr`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ o(u.div, {
                                        className: `framer-1fq07g7`,
                                        children: /*#__PURE__*/ o(y, {
                                          breakpoint: k,
                                          overrides: {
                                            lVEPxDY4f: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: f(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    77.2 +
                                                    0 +
                                                    1811.7 +
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
                                                src: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png`,
                                                srcSet: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-ffb01e.png 512w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-e38f0f.png 1024w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png 2048w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png 2093w`,
                                              },
                                            },
                                            mRmndZ5x2: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: f(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    1811.7 +
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
                                                src: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png`,
                                                srcSet: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-ffb01e.png 512w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-e38f0f.png 1024w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png 2048w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png 2093w`,
                                              },
                                            },
                                            tHQ684SA6: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 799,
                                                intrinsicWidth: 959,
                                                loading: f(
                                                  (h?.y || 0) +
                                                    0 +
                                                    800 +
                                                    16 +
                                                    0 +
                                                    0 +
                                                    69.2 +
                                                    0 +
                                                    1811.7 +
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
                                                src: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png`,
                                                srcSet: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-ffb01e.png 512w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-e38f0f.png 1024w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png 2048w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png 2093w`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ o(ue, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 799,
                                              intrinsicWidth: 959,
                                              loading: f(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  158 +
                                                  0 +
                                                  1811.7 +
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
                                              src: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png`,
                                              srcSet: `../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-ffb01e.png 512w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-e38f0f.png 1024w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM.png 2048w,../../assets/images/5hAiTCKsayKPgsNFqGGLtxXUDM-1858da.png 2093w`,
                                            },
                                            className: `framer-1eu7xot`,
                                            "data-framer-name": `Image`,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(u.div, {
                                className: `framer-l14ifw`,
                                "data-border": !0,
                                id: R,
                                ref: z,
                                children: [
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(r, {
                                      children: /*#__PURE__*/ o(`h2`, {
                                        className: `framer-styles-preset-qvrn1k`,
                                        "data-styles-preset": `ksQr_zVQP`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: /*#__PURE__*/ o(`strong`, {
                                          children: `DFD Prototype`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-1cu5fi6`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(T, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ a(r, {
                                      children: [
                                        /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `The DFD prototype assumes that the new portal will be integrated as an independent function into the existing admin site. The design allows users to select an object from the navigation to begin the setup process. Users can create an account, build a user group, or design a landing page within a single workspace. The process is intentionally designed as a flexible, circular flow, allowing users to start, adjust, or revisit any step at any time.`,
                                        }),
                                        /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `Each entity functions independently while remaining connected to others through flexible many-to-many relationships. This approach significantly simplifies and accelerates campaign setup.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-19a0gdl`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ o(u.div, {
                                    className: `framer-oh6aue`,
                                    children: /*#__PURE__*/ o(D, {
                                      children: /*#__PURE__*/ o(E, {
                                        className: `framer-174usqu-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `NQ8ZDLOgL`,
                                        rendersWithMotion: !0,
                                        scopeId: `TQ2_bezBK`,
                                        children: /*#__PURE__*/ o(B, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 8,
                                          bottomLeftRadius: 8,
                                          bottomRightRadius: 8,
                                          controls: !0,
                                          height: `100%`,
                                          id: `NQ8ZDLOgL`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `NQ8ZDLOgL`,
                                          loop: !1,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !1,
                                          posterEnabled: !1,
                                          srcFile: `../../assets/misc/C56ilr3bBb7KUy0zxrhQZ7CYMk.mp4`,
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
                    }),
                  ],
                }),
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Ne = [
        `.framer-XZTJc.framer-1b1mrjc, .framer-XZTJc .framer-1b1mrjc { display: block; }`,
        `.framer-XZTJc.framer-18esrmk { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-XZTJc .framer-14bq5v3-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-XZTJc .framer-cls3y7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-XZTJc .framer-3uerkt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-edh56o { align-content: flex-start; align-items: flex-start; background-color: #fdfbf9; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 8px 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-XZTJc .framer-tl2t9a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-1wfvcv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-XZTJc .framer-197qst6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-XZTJc .framer-utnyiq { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-XZTJc .framer-1ohagqu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XZTJc .framer-avve4l { height: 13px; position: relative; width: 14px; }`,
        `.framer-XZTJc .framer-1c4d6y2 { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-XZTJc .framer-hvhn29 { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-XZTJc .framer-tuwcok { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XZTJc .framer-1seurba, .framer-XZTJc .framer-1jb04td { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-XZTJc .framer-tf1h1r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-1qt3e1w, .framer-XZTJc .framer-gwiyi0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-puixdc, .framer-XZTJc .framer-wwg384, .framer-XZTJc .framer-r0zyh1, .framer-XZTJc .framer-1nvwnwc, .framer-XZTJc .framer-1745oce, .framer-XZTJc .framer-15jw6op, .framer-XZTJc .framer-o9zit8, .framer-XZTJc .framer-610zpm, .framer-XZTJc .framer-1q9578d, .framer-XZTJc .framer-1f5g5yf, .framer-XZTJc .framer-2xfhv9, .framer-XZTJc .framer-17swldk, .framer-XZTJc .framer-19a0gdl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XZTJc .framer-1tqdw9, .framer-XZTJc .framer-5v9si8, .framer-XZTJc .framer-upnur4, .framer-XZTJc .framer-brwakf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-ixvl18 { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-XZTJc .framer-1tgsukv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-1g6z3wq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 0px 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-1moftcr, .framer-XZTJc .framer-1cu5fi6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-XZTJc .framer-1fq07g7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-XZTJc .framer-1eu7xot { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-l14ifw { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 0px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-XZTJc .framer-oh6aue { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XZTJc .framer-174usqu-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ..._e,
        ...Ce,
        ...j,
        ...de,
        ...A,
        ...ve,
        `.framer-XZTJc[data-border="true"]::after, .framer-XZTJc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-XZTJc.framer-18esrmk { flex-direction: column; width: 810px; } .framer-XZTJc .framer-14bq5v3-container { height: auto; width: 100%; z-index: 2; } .framer-XZTJc .framer-cls3y7 { flex: none; overflow: hidden; padding: 32px 0px 64px 32px; width: 100%; } .framer-XZTJc .framer-3uerkt { order: 0; } .framer-XZTJc .framer-edh56o { box-shadow: unset; padding: 0px; position: relative; top: unset; z-index: 0; } .framer-XZTJc .framer-tl2t9a, .framer-XZTJc .framer-tf1h1r { padding: 0px 32px 0px 0px; } .framer-XZTJc .framer-utnyiq { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; } .framer-XZTJc .framer-1tgsukv { overflow: var(--overflow-clip-fallback, clip); } .framer-XZTJc .framer-oh6aue { flex-direction: column; } .framer-XZTJc .framer-174usqu-container { flex: none; width: 100%; }}`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-XZTJc.framer-18esrmk { width: 1240px; } .framer-XZTJc .framer-ixvl18 { gap: 16px; } .framer-XZTJc .framer-gwiyi0, .framer-XZTJc .framer-1tgsukv { gap: 8px; }}`,
        `@media (max-width: 809.98px) { .framer-XZTJc.framer-18esrmk { flex-direction: column; width: 390px; } .framer-XZTJc .framer-14bq5v3-container { height: auto; width: 100%; } .framer-XZTJc .framer-cls3y7 { flex: none; overflow: hidden; padding: 16px 24px 32px 24px; width: 100%; } .framer-XZTJc .framer-3uerkt { gap: 16px; height: 2157px; order: 0; } .framer-XZTJc .framer-edh56o { align-content: center; align-items: center; box-shadow: unset; padding: 0px; position: relative; top: unset; } .framer-XZTJc .framer-tl2t9a { order: 1; } .framer-XZTJc .framer-utnyiq { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #fdfbf9; } .framer-XZTJc .framer-tf1h1r, .framer-XZTJc .framer-1g6z3wq { padding: 0px; } .framer-XZTJc .framer-ixvl18 { padding: 16px 0px 24px 8px; } .framer-XZTJc .framer-gwiyi0 { gap: 8px; } .framer-XZTJc .framer-l14ifw { padding: 16px 0px 0px 8px; } .framer-XZTJc .framer-oh6aue { flex-direction: column; } .framer-XZTJc .framer-174usqu-container { flex: none; width: 100%; }}`,
      ]),
      ($ = v(Me, Ne, `framer-XZTJc`)),
      ($.displayName = `Portfolio / Medicalnetwork`),
      ($.defaultProps = { height: 3174, width: 1440 }),
      se(
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
          ...V,
          ...H,
          ...S(ye),
          ...S(we),
          ...S(k),
          ...S(M),
          ...S(I),
          ...S(be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => ae([() => h(L, {}, t)], t) }),
      (Pe = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerTQ2_bezBK`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"lVEPxDY4f":{"layout":["fixed","auto"]},"mRmndZ5x2":{"layout":["fixed","auto"]},"tHQ684SA6":{"layout":["fixed","auto"]}}}`,
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `false`,
              framerIntrinsicHeight: `3174`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1440`,
              framerScrollSections: `{"eMAnFFwqX":{"pattern":":eMAnFFwqX","name":"research"},"vnCqcB2zw":{"pattern":":vnCqcB2zw","name":"prototype"}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Fe();
export { Pe as __FramerMetadata__, $ as default, K as queryParamNames };
//# sourceMappingURL=uKD8jw11MHdVR5YDRgViqe-I4Vtu_2O-CXy5ZLodrJI.DoIuLSIk.mjs.map
