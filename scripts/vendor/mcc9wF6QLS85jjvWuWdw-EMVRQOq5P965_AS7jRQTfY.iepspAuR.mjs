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
import { A as l, a as ne, r as re, t as u } from "./motion.AUYMciny.mjs";
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
  it as b,
  j as x,
  l as S,
  lt as C,
  n as w,
  nt as ce,
  rt as le,
  s as T,
  t as E,
  tt as D,
  v as O,
  w as k,
} from "./framer.CfbrMSxG.mjs";
import {
  a as ue,
  c as de,
  d as A,
  f as j,
  g as M,
  h as N,
  i as P,
  l as fe,
  m as F,
  o as I,
  p as pe,
  r as L,
  s as R,
  u as z,
} from "./shared-lib.f3R8fmkt.mjs";
import {
  a as me,
  c as B,
  i as he,
  n as ge,
  o as _e,
  r as ve,
  s as ye,
  t as be,
} from "./U3NyadGC3.BwBuOktC.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./rHJW28QP9.Bk1-6hy6.mjs";
import { n as Te, t as V } from "./Video.KjNbylVS.mjs";
import { n as Ee, t as De } from "./Auth.DqmqebeX.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./h7BtS_2Gk.mQZTTX3K.mjs";
import Me, { t as Ne } from "./jFBEKMOcJ-8x2q2yBxNHKbbLt1_QWoXBz9sC10S9sjc.C1VXwmj3.mjs";
var H, U, W, G, K, q, J, Y, X, Z, Q, Pe, Fe, $, Ie;
e(() => {
  (s(),
    ae(),
    u(),
    n(),
    Te(),
    P(),
    De(),
    Oe(),
    M(),
    j(),
    xe(),
    B(),
    he(),
    de(),
    Ne(),
    (H = d(L)),
    (U = d(V)),
    (W = C(l.div, { nodeId: `e1NPwwOBz`, override: Ee, scopeId: `ccThq1ZNn` })),
    (G = {
      e1NPwwOBz: `(min-width: 1440px)`,
      FM0JI510d: `(min-width: 1240px) and (max-width: 1439.98px)`,
      ma0FEBTz6: `(min-width: 810px) and (max-width: 1239.98px)`,
      vYdsddEOF: `(max-width: 809.98px)`,
    }),
    (K = () => typeof document < `u`),
    (q = []),
    (J = `framer-zY7ga`),
    (Y = {
      e1NPwwOBz: `framer-v-5xhlbx`,
      FM0JI510d: `framer-v-vtmv0k`,
      ma0FEBTz6: `framer-v-62ok0c`,
      vYdsddEOF: `framer-v-1n3wwu3`,
    }),
    (X = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `e1NPwwOBz`, Laptop: `FM0JI510d`, Phone: `vYdsddEOF`, Tablet: `ma0FEBTz6` }),
    (Pe = ({ value: e }) =>
      D()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Fe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `e1NPwwOBz`,
    })),
    ($ = g(
      o(function (e, n) {
        let o = c(null),
          s = n ?? o,
          u = ee(),
          { activeLocale: d, setLocale: ae } = ce(),
          m = se(),
          { style: g, className: x, layoutId: C, variant: D, ...O } = Fe(e);
        le(t(() => Me({}, d), [d]));
        let [k, de] = ie(D, G, !1),
          A = p(J, be, pe, we, ue, fe, me, je),
          j = te(h)?.isLayoutTemplate,
          M = !!te(ne)?.transition?.layout,
          N = X(j, M),
          P = () => !K() || ![`ma0FEBTz6`, `vYdsddEOF`].includes(k),
          F = () => !K() || k === `vYdsddEOF`,
          I = () => !K() || k === `ma0FEBTz6`,
          R = b(`A6O3LzhzJ`),
          z = c(null),
          B = b(`MWWGEnItL`),
          he = c(null);
        return (
          oe({}),
          a(h.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Q,
              primaryVariantId: `e1NPwwOBz`,
              variantClassNames: Y,
            },
            children: i(re, {
              id: C ?? u,
              children: [
                a(Pe, { value: `html body { background: rgb(253, 251, 248); }` }),
                i(W, {
                  ...O,
                  className: p(A, `framer-5xhlbx`, x),
                  ref: s,
                  style: { ...g },
                  children: [
                    a(_, {
                      breakpoint: k,
                      overrides: {
                        ma0FEBTz6: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                        vYdsddEOF: {
                          height: 800,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + 0,
                        },
                      },
                      children: a(E, {
                        height: 1e3,
                        y: (m?.y || 0) + 0,
                        children: a(w, {
                          className: `framer-rfm1or-container`,
                          layout: N,
                          nodeId: `AmV0bJlDW`,
                          rendersWithMotion: !0,
                          scopeId: `ccThq1ZNn`,
                          children: a(_, {
                            breakpoint: k,
                            overrides: {
                              ma0FEBTz6: { style: { width: `100%` }, variant: Z(`s0lcynSc3`) },
                              vYdsddEOF: { style: { width: `100%` }, variant: Z(`wvPpZ1IwG`) },
                            },
                            children: a(L, {
                              height: `100%`,
                              id: `AmV0bJlDW`,
                              layoutId: `AmV0bJlDW`,
                              style: { height: `100%` },
                              variant: Z(`mAQYDiHUl`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    i(l.div, {
                      className: `framer-15axi0p`,
                      layout: N,
                      children: [
                        P() &&
                          a(l.div, {
                            className: `framer-13teasw hidden-62ok0c hidden-1n3wwu3`,
                            children: i(l.div, {
                              className: `framer-u4gbxp`,
                              children: [
                                i(l.div, {
                                  className: `framer-lj4h9m`,
                                  children: [
                                    i(l.div, {
                                      className: `framer-hd45wk`,
                                      children: [
                                        a(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: i(`h1`, {
                                              className: `framer-styles-preset-p50exy`,
                                              "data-styles-preset": `U3NyadGC3`,
                                              dir: `auto`,
                                              children: [
                                                a(`mark`, {
                                                  style: {
                                                    "--framer-text-background-radius": `0px`,
                                                  },
                                                  children: a(`span`, {
                                                    style: {
                                                      "--framer-text-color": `rgb(52, 26, 0)`,
                                                    },
                                                    children: `AI-Enabled `,
                                                  }),
                                                }),
                                                `Form Mapping tool`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-a2bl1o`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-12u88cl`,
                                              "data-styles-preset": `HftgEsO0a`,
                                              dir: `auto`,
                                              children: `A reusable plug-in component designed to streamline the conversion of PDF forms into digital formats across different platforms.`,
                                            }),
                                          }),
                                          className: `framer-1uoe83z`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    i(l.div, {
                                      className: `framer-1j8jq31`,
                                      children: [
                                        a(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: a(S, {
                                                href: {
                                                  hash: `:A6O3LzhzJ`,
                                                  webPageId: `ccThq1ZNn`,
                                                },
                                                motionChild: !0,
                                                nodeId: `UddTtWXmm`,
                                                openInNewTab: !1,
                                                preserveParams: !1,
                                                relValues: [],
                                                scopeId: `ccThq1ZNn`,
                                                smoothScroll: !0,
                                                children: a(l.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: a(`strong`, {
                                                    children: `Exploratory research, workflows and lo-fi wireframes`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-17sf5t1`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(y, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-1504gar`,
                                              "data-styles-preset": `rHJW28QP9`,
                                              dir: `auto`,
                                              children: a(S, {
                                                href: {
                                                  hash: `:MWWGEnItL`,
                                                  webPageId: `ccThq1ZNn`,
                                                },
                                                motionChild: !0,
                                                nodeId: `eLRWEO97c`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `ccThq1ZNn`,
                                                smoothScroll: !0,
                                                children: a(l.a, {
                                                  className: `framer-styles-preset-fx4193`,
                                                  "data-styles-preset": `uWIEDCuYW`,
                                                  children: a(`strong`, { children: `Prototype` }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1lsuiyx`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a(l.div, {
                                  className: `framer-1cg7qv8`,
                                  children: a(S, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `v6UwYOuhq`,
                                    openInNewTab: !1,
                                    scopeId: `ccThq1ZNn`,
                                    children: a(l.a, {
                                      className: `framer-1onj0ni framer-12c9i9w`,
                                      "data-framer-name": `Button`,
                                      children: a(l.div, {
                                        className: `framer-9n6f04`,
                                        children: i(v, {
                                          className: `framer-py34d7`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            a(v, {
                                              className: `framer-wxnbj9`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            a(v, {
                                              className: `framer-13uvcwh`,
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
                          className: `framer-1llj66u`,
                          children: [
                            F() &&
                              i(l.div, {
                                className: `framer-1xbr7m3 hidden-5xhlbx hidden-vtmv0k hidden-62ok0c`,
                                children: [
                                  a(l.div, {
                                    className: `framer-1d62ms3`,
                                    children: a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: i(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: [
                                            `PDF to Digital `,
                                            a(`br`, {}),
                                            `Form Mapping tool`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-1sda4qo`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(S, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `ZHPBWoLkW`,
                                    openInNewTab: !1,
                                    scopeId: `ccThq1ZNn`,
                                    children: a(l.a, {
                                      className: `framer-n4zdvx framer-12c9i9w`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: a(l.div, {
                                        className: `framer-msq3x3`,
                                        children: i(v, {
                                          className: `framer-4xe2yq`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            a(v, {
                                              className: `framer-1udhc1k`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            a(v, {
                                              className: `framer-17o1tb5`,
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
                            i(l.div, {
                              className: `framer-1clez2w`,
                              children: [
                                i(l.div, {
                                  className: `framer-1sudbin`,
                                  children: [
                                    a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`h2`, {
                                          className: `framer-styles-preset-qvrn1k`,
                                          "data-styles-preset": `ksQr_zVQP`,
                                          dir: `auto`,
                                          children: `Project Overview`,
                                        }),
                                      }),
                                      className: `framer-ug9tus`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            a(`strong`, {
                                              children: `Form Mapping Tool is a small-team, fast-turnaround internal project focused on modernizing an outdated process used across the Optum Clearinghouse ecosystem for creating digital versions of healthcare PDF forms.`,
                                            }),
                                            ` `,
                                          ],
                                        }),
                                      }),
                                      className: `framer-y140f`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `The goal was to accelerate the transformation of static PDFs into structured digital forms to reduce repetitive data entry across payer enrollment and claims workflows. To achieve this, we designed a plug-in component that can be integrated into any internal application, enabling consistent and efficient conversion of PDF forms into digital formats.`,
                                        }),
                                      }),
                                      className: `framer-yv59is`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(l.div, {
                                  className: `framer-19h4msq`,
                                  children: a(l.div, {
                                    className: `framer-1lzjqbe`,
                                    children: a(E, {
                                      children: a(w, {
                                        className: `framer-ykvtxp-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `CMFuWxtAD`,
                                        rendersWithMotion: !0,
                                        scopeId: `ccThq1ZNn`,
                                        children: a(V, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !0,
                                          height: `100%`,
                                          id: `CMFuWxtAD`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `CMFuWxtAD`,
                                          loop: !1,
                                          muted: !1,
                                          objectFit: `scale-down`,
                                          playing: !1,
                                          poster: `https://framerusercontent.com/images/nppctY6IhunpQrXYzyZZ4DqqPA.png?width=2048&height=2048`,
                                          posterEnabled: !0,
                                          srcFile: `https://framerusercontent.com/assets/edtRecZhxaX6MnHK7FHdM28.mp4`,
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
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-rvxc1p`,
                              children: [
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Main Challenge`,
                                    }),
                                  }),
                                  className: `framer-1ba8geo`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `The primary challenge was designing a tool that goes beyond basic PDF digitization. Traditional PDF-to-form tools treat each document independently, forcing users to enter the same information repeatedly across multiple payer forms.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Our goal was to establish a many-to-one relationship between PDFs and their digital counterparts, allowing information entered in a digital form to populate multiple PDF documents throughout the workflow. The system also needed to accommodate diverse payer form formats while maintaining the high level of accuracy required for healthcare documentation.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `Balancing automation, flexibility, and human control was critical to ensure the tool could scale across thousands of payer templates while remaining reliable for operational teams.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-159h5nb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-urj1nv`,
                              children: [
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: a(`strong`, { children: `My Role` }),
                                    }),
                                  }),
                                  className: `framer-9p73f5`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `I served as the Lead Product/UX Designer on the project, working closely with the product manager to define the experience and workflow structure for the new tool.`,
                                      }),
                                      a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: `My responsibilities included:`,
                                      }),
                                      i(`ul`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Leading UX strategy and interaction design for the form-mapping experience`,
                                            }),
                                          }),
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Participating in market analysis and exploration of AI-assisted approaches`,
                                            }),
                                          }),
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Designing configuration workflows for administrators responsible for setting up payer forms`,
                                            }),
                                          }),
                                          a(`li`, {
                                            "data-preset-tag": `p`,
                                            children: a(`p`, {
                                              children: `Iterating with product and engineering to balance automation with user control`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  className: `framer-17pq7ks`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-1fdao35`,
                              children: [
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: a(`strong`, {
                                        children: `Solution / Key UX Decisions`,
                                      }),
                                    }),
                                  }),
                                  className: `framer-3jy2kp`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, { children: `AI-assisted field detection` }),
                                          a(`br`, {}),
                                          `The system analyzes uploaded PDFs and generates an initial list of detected fields and suggested mappings, significantly reducing manual configuration time.`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, { children: `Human-in-the-loop validation` }),
                                          a(`br`, {}),
                                          `Administrators can review, edit, and refine AI-generated mappings to ensure accuracy and compliance with healthcare documentation requirements.`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, {
                                            children: `Two-way PDF–digital form linkage`,
                                          }),
                                          a(`br`, {}),
                                          `A digital form layer connects directly to the underlying PDF, allowing users to enter information once and automatically populate multiple payer forms.`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: [
                                          a(`strong`, {
                                            children: `Smart prepopulation across workflows`,
                                          }),
                                          a(`br`, {}),
                                          `Information captured once can be reused across multiple forms, reducing repetitive data entry during payer enrollment and claim submission.`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  className: `framer-1vsxzyl`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(l.div, {
                              className: `framer-zef996`,
                              children: [
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-bdezu4`,
                                      "data-styles-preset": `TWYWOtjjp`,
                                      dir: `auto`,
                                      children: `Tools`,
                                    }),
                                  }),
                                  className: `framer-wwgrm6`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(y, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-12u88cl`,
                                      "data-styles-preset": `HftgEsO0a`,
                                      dir: `auto`,
                                      children: `Figma, FigJam, Balsamiq, Microsoft Loop, Copilot AI, Figma Make, Codex and Figma MCP`,
                                    }),
                                  }),
                                  className: `framer-dfy91l`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            I() &&
                              i(l.div, {
                                className: `framer-1ygkz7n hidden-5xhlbx hidden-vtmv0k hidden-1n3wwu3`,
                                children: [
                                  a(l.div, {
                                    className: `framer-vxipc4`,
                                    children: a(y, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`h1`, {
                                          className: `framer-styles-preset-p50exy`,
                                          "data-styles-preset": `U3NyadGC3`,
                                          dir: `auto`,
                                          children: `PDF to Digital Form Mapping tool`,
                                        }),
                                      }),
                                      className: `framer-rdfbqw`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(S, {
                                    href: { webPageId: `Yk0caFFXD` },
                                    motionChild: !0,
                                    nodeId: `TlGjIrRKQ`,
                                    openInNewTab: !1,
                                    scopeId: `ccThq1ZNn`,
                                    children: a(l.a, {
                                      className: `framer-x2g48s framer-12c9i9w`,
                                      "data-border": !0,
                                      "data-framer-name": `Button`,
                                      children: a(l.div, {
                                        className: `framer-i92afq`,
                                        children: i(v, {
                                          className: `framer-m79pxm`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.271 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z M 5.65 6.207 L 11.857 12.414 L 13.271 11 L 8.478 6.207 L 13.271 1.414 L 11.857 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            a(v, {
                                              className: `framer-147x7e6`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.621 12.414" overflow="visible"><path d="M 0 6.207 L 6.207 12.414 L 7.621 11 L 2.828 6.207 L 7.621 1.414 L 6.207 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            a(v, {
                                              className: `framer-1kt0x6r`,
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
                        a(l.div, {
                          className: `framer-1hnz6t9`,
                          children: i(l.div, {
                            className: `framer-1q5p2a3`,
                            "data-border": !0,
                            id: R,
                            ref: z,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: a(`strong`, {
                                      children: `Exploratory research, workflows and lo-fi wireframes`,
                                    }),
                                  }),
                                }),
                                className: `framer-qbxv2b`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(l.div, {
                                className: `framer-yhz18p`,
                                children: [
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-r40bfx`,
                                        "data-styles-preset": `h7BtS_2Gk`,
                                        dir: `auto`,
                                        children: a(`strong`, { children: `Exploratory Research` }),
                                      }),
                                    }),
                                    className: `framer-6i8usu`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: [
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `As part of exploratory research, we operated from a clear premise: existing PDF-to-digital tools were inefficient, overly complex, and not reusable across the organization. Our goal was to define the requirements for a simplified, plug-in-based solution that could be adopted across multiple teams handling form digitization.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `To ensure the tool would scale across the Optum Clearinghouse ecosystem, we interviewed stakeholders across different business units to understand how similar tools were currently used, which features were essential for day-to-day workflows, where existing solutions fell short, and what teams ultimately needed to achieve through digitization.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `In parallel, we conducted a detailed analysis of current workflows, including step-by-step mapping of the form creation process using recorded tool walkthroughs. This helped us identify points of friction, particularly where users were required to re-enter the same data across multiple payer forms and where inconsistencies were introduced due to fragmented processes.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `We also evaluated existing tools and competitor products to benchmark common capabilities and identify gaps in how they support data reuse, template variability, and output validation.`,
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: a(`strong`, { children: `Key Findings:` }),
                                        }),
                                        i(`ul`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: [
                                            a(`li`, {
                                              "data-preset-tag": `p`,
                                              children: i(`p`, {
                                                children: [
                                                  a(`strong`, {
                                                    children: `The core inefficiency was not form digitization, but data fragmentation.`,
                                                  }),
                                                  ` Users were forced to re-enter the same information across multiple payer forms because each document was treated as an independent entity. This established the need for a shared data layer enabling single-input, multi-form population.`,
                                                ],
                                              }),
                                            }),
                                            a(`li`, {
                                              "data-preset-tag": `p`,
                                              children: i(`p`, {
                                                children: [
                                                  a(`strong`, {
                                                    children: `There was a critical disconnect between data entry and final output validation.`,
                                                  }),
                                                  ` Users entered data in structured digital formats but were required to verify accuracy in PDF outputs with different layouts, making errors difficult to detect. This exposed the need for synchronized, side-by-side visibility between digital inputs and generated documents.`,
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(`p`, {
                                          className: `framer-styles-preset-12u88cl`,
                                          "data-styles-preset": `HftgEsO0a`,
                                          dir: `auto`,
                                          children: `From these insights, we defined the core feature set for the MVP and additional functionality for a subsequent MVP-plus phase. Wireframes were created based on this research to outline user flows and interface structure, and were later validated with existing users to ensure alignment with real-world workflows. These wireframes then formed the foundation for subsequent mockups and interactive prototypes.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-1673y6g`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              i(l.div, {
                                className: `framer-140fdnd`,
                                children: [
                                  i(l.div, {
                                    className: `framer-5jm00f`,
                                    children: [
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-r40bfx`,
                                            "data-styles-preset": `h7BtS_2Gk`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Create New Question Workflow Version-A`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-18movso`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
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
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
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
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 5335,
                                              intrinsicWidth: 7521,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
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
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335`,
                                              srcSet: `https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=512&width=7521&height=5335 512w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=1024&width=7521&height=5335 1024w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=2048&width=7521&height=5335 2048w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?scale-down-to=4096&width=7521&height=5335 4096w,https://framerusercontent.com/images/k06ClcnYokhAPBerbXwU23fh7c.png?width=7521&height=5335 7521w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 5335,
                                            intrinsicWidth: 7521,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
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
                                          className: `framer-lt9f6f`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-r40bfx`,
                                            "data-styles-preset": `h7BtS_2Gk`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Create New Question Workflow Version-B`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1enq3xs`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  858
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  874
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4035,
                                              intrinsicWidth: 7238,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  582
                                              ),
                                              pixelHeight: 4035,
                                              pixelWidth: 7238,
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                              srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4035,
                                            intrinsicWidth: 7238,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                0 +
                                                0 +
                                                999
                                            ),
                                            pixelHeight: 4035,
                                            pixelWidth: 7238,
                                            src: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035`,
                                            srcSet: `https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=512&width=7238&height=4035 512w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=1024&width=7238&height=4035 1024w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=2048&width=7238&height=4035 2048w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?scale-down-to=4096&width=7238&height=4035 4096w,https://framerusercontent.com/images/KmEKbJoQg5pVeACUVMuxN107AY.png?width=7238&height=4035 7238w`,
                                          },
                                          className: `framer-4xu134`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  i(l.div, {
                                    className: `framer-iburlx`,
                                    children: [
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-r40bfx`,
                                            "data-styles-preset": `h7BtS_2Gk`,
                                            dir: `auto`,
                                            children: a(`strong`, { children: `Lo-fi wireframes` }),
                                          }),
                                        }),
                                        className: `framer-1q9959c`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Home page - list of forms that user has access to`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1rowukt`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 3262,
                                              intrinsicWidth: 7066,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1264 +
                                                  0 +
                                                  309.5
                                              ),
                                              pixelHeight: 3262,
                                              pixelWidth: 7066,
                                              src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                              srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                            },
                                          },
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 3262,
                                              intrinsicWidth: 7066,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1293 +
                                                  0 +
                                                  309.5
                                              ),
                                              pixelHeight: 3262,
                                              pixelWidth: 7066,
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                              srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 3262,
                                              intrinsicWidth: 7066,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  771 +
                                                  0 +
                                                  309.5
                                              ),
                                              pixelHeight: 3262,
                                              pixelWidth: 7066,
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                              srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3262,
                                            intrinsicWidth: 7066,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                1533 +
                                                0 +
                                                309.5
                                            ),
                                            pixelHeight: 3262,
                                            pixelWidth: 7066,
                                            src: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262`,
                                            srcSet: `https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=512&width=7066&height=3262 512w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=1024&width=7066&height=3262 1024w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=2048&width=7066&height=3262 2048w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?scale-down-to=4096&width=7066&height=3262 4096w,https://framerusercontent.com/images/eLuWPrwWS3jEpb54SanEqmC9vcY.png?width=7066&height=3262 7066w`,
                                          },
                                          className: `framer-3b5ep6`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Creating new form`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-usvppj`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1762,
                                              intrinsicWidth: 3894,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1264 +
                                                  0 +
                                                  791
                                              ),
                                              pixelHeight: 1762,
                                              pixelWidth: 3894,
                                              src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                              srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                            },
                                          },
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1762,
                                              intrinsicWidth: 3894,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1293 +
                                                  0 +
                                                  802
                                              ),
                                              pixelHeight: 1762,
                                              pixelWidth: 3894,
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                              srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1762,
                                              intrinsicWidth: 3894,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  771 +
                                                  0 +
                                                  612
                                              ),
                                              pixelHeight: 1762,
                                              pixelWidth: 3894,
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                              srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1762,
                                            intrinsicWidth: 3894,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                1533 +
                                                0 +
                                                884
                                            ),
                                            pixelHeight: 1762,
                                            pixelWidth: 3894,
                                            src: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762`,
                                            srcSet: `https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=512&width=3894&height=1762 512w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=1024&width=3894&height=1762 1024w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?scale-down-to=2048&width=3894&height=1762 2048w,https://framerusercontent.com/images/5QfKs2EPscoh47P1luV9oxS3Q.png?width=3894&height=1762 3894w`,
                                          },
                                          className: `framer-1wb16wl`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Editing Existing form`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1bwc4ln`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4444,
                                              intrinsicWidth: 5461,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1264 +
                                                  0 +
                                                  1266.5
                                              ),
                                              pixelHeight: 4444,
                                              pixelWidth: 5461,
                                              src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                              srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                            },
                                          },
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4444,
                                              intrinsicWidth: 5461,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1293 +
                                                  0 +
                                                  1287.5
                                              ),
                                              pixelHeight: 4444,
                                              pixelWidth: 5461,
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                              srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 4444,
                                              intrinsicWidth: 5461,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  771 +
                                                  0 +
                                                  911.5
                                              ),
                                              pixelHeight: 4444,
                                              pixelWidth: 5461,
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                              srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 4444,
                                            intrinsicWidth: 5461,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                1533 +
                                                0 +
                                                1449.5
                                            ),
                                            pixelHeight: 4444,
                                            pixelWidth: 5461,
                                            src: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444`,
                                            srcSet: `https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=512&width=5461&height=4444 512w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=1024&width=5461&height=4444 1024w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=2048&width=5461&height=4444 2048w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?scale-down-to=4096&width=5461&height=4444 4096w,https://framerusercontent.com/images/uDN5Sw4wW9h55aeVTTuKapZxwI.png?width=5461&height=4444 5461w`,
                                          },
                                          className: `framer-wiu71h`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Mapping of the fields that were not mapped by AI or need to be adjusted`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-6kk7ju`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 6309,
                                              intrinsicWidth: 9365,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1264 +
                                                  0 +
                                                  1997
                                              ),
                                              pixelHeight: 6309,
                                              pixelWidth: 9365,
                                              src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                              srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                            },
                                          },
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 6309,
                                              intrinsicWidth: 9365,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1293 +
                                                  0 +
                                                  2037
                                              ),
                                              pixelHeight: 6309,
                                              pixelWidth: 9365,
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                              srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 6309,
                                              intrinsicWidth: 9365,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  771 +
                                                  0 +
                                                  1326
                                              ),
                                              pixelHeight: 6309,
                                              pixelWidth: 9365,
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                              srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 6309,
                                            intrinsicWidth: 9365,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                1533 +
                                                0 +
                                                2343
                                            ),
                                            pixelHeight: 6309,
                                            pixelWidth: 9365,
                                            src: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309`,
                                            srcSet: `https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=512&width=9365&height=6309 512w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=1024&width=9365&height=6309 1024w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=2048&width=9365&height=6309 2048w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?scale-down-to=4096&width=9365&height=6309 4096w,https://framerusercontent.com/images/T9ZryLypQbTbgZ7OmeRdiUPBY.png?width=9365&height=6309 9365w`,
                                          },
                                          className: `framer-bx9zb3`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      a(y, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-12u88cl`,
                                            "data-styles-preset": `HftgEsO0a`,
                                            dir: `auto`,
                                            children: a(`strong`, {
                                              children: `Adding questions to the form`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-q5pe3c`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(_, {
                                        breakpoint: k,
                                        overrides: {
                                          FM0JI510d: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 7825,
                                              intrinsicWidth: 14499,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  0 +
                                                  2712.7 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1264 +
                                                  0 +
                                                  2628.5
                                              ),
                                              pixelHeight: 7825,
                                              pixelWidth: 14499,
                                              src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                              srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                            },
                                          },
                                          ma0FEBTz6: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 7825,
                                              intrinsicWidth: 14499,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  32 +
                                                  2478.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  1293 +
                                                  0 +
                                                  2684.5
                                              ),
                                              pixelHeight: 7825,
                                              pixelWidth: 14499,
                                              sizes: `calc(${m?.width || `100vw`} - 80px)`,
                                              src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                              srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                            },
                                          },
                                          vYdsddEOF: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 7825,
                                              intrinsicWidth: 14499,
                                              loading: f(
                                                (m?.y || 0) +
                                                  0 +
                                                  800 +
                                                  24 +
                                                  2598.4 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  1308 +
                                                  0 +
                                                  771 +
                                                  0 +
                                                  1695.5
                                              ),
                                              pixelHeight: 7825,
                                              pixelWidth: 14499,
                                              sizes: `calc(${m?.width || `100vw`} - 72px)`,
                                              src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                              srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                            },
                                          },
                                        },
                                        children: a(T, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 7825,
                                            intrinsicWidth: 14499,
                                            loading: f(
                                              (m?.y || 0) +
                                                0 +
                                                0 +
                                                2768.7 +
                                                0 +
                                                0 +
                                                32 +
                                                1332 +
                                                0 +
                                                1533 +
                                                0 +
                                                3109.5
                                            ),
                                            pixelHeight: 7825,
                                            pixelWidth: 14499,
                                            src: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825`,
                                            srcSet: `https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=512&width=14499&height=7825 512w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=1024&width=14499&height=7825 1024w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=2048&width=14499&height=7825 2048w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?scale-down-to=4096&width=14499&height=7825 4096w,https://framerusercontent.com/images/I8aoqIYbgVxJxNs5u5yBaDa9Bk.png?width=14499&height=7825 14499w`,
                                          },
                                          className: `framer-jrjjv4`,
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
                        a(l.div, {
                          className: `framer-48sihq`,
                          children: i(l.div, {
                            className: `framer-ugm7x8`,
                            "data-border": !0,
                            id: B,
                            ref: he,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h2`, {
                                    className: `framer-styles-preset-qvrn1k`,
                                    "data-styles-preset": `ksQr_zVQP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: a(`strong`, { children: `Hi-fidelity prototype` }),
                                  }),
                                }),
                                className: `framer-hu4v2b`,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(l.div, {
                                className: `framer-1bn4gvo`,
                                children: [
                                  a(y, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-12u88cl`,
                                        "data-styles-preset": `HftgEsO0a`,
                                        dir: `auto`,
                                        children: a(`strong`, {
                                          children: `On the admin side, once a form is uploaded, it is automatically analyzed by AI and presented for review. All processing happens seamlessly in the background—no manual triggers or interaction required. The admin is then presented with a fully mapped form for validation and testing. Once validated, the form is ready to be activated.`,
                                        }),
                                      }),
                                    }),
                                    className: `framer-15b6xrs`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(l.div, {
                                    className: `framer-1g0cd33`,
                                    children: a(E, {
                                      children: a(w, {
                                        className: `framer-121hd62-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `SJu3ymQOe`,
                                        rendersWithMotion: !0,
                                        scopeId: `ccThq1ZNn`,
                                        children: a(V, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 8,
                                          bottomLeftRadius: 8,
                                          bottomRightRadius: 8,
                                          controls: !0,
                                          height: `100%`,
                                          id: `SJu3ymQOe`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `SJu3ymQOe`,
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
                                ],
                              }),
                            ],
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
        `.framer-zY7ga.framer-12c9i9w, .framer-zY7ga .framer-12c9i9w { display: block; }`,
        `.framer-zY7ga.framer-5xhlbx { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-zY7ga .framer-rfm1or-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; z-index: 1; }`,
        `.framer-zY7ga .framer-15axi0p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 32px; position: relative; width: 1px; }`,
        `.framer-zY7ga .framer-13teasw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-zY7ga .framer-u4gbxp { align-content: flex-start; align-items: flex-start; background-color: #fdfbf8; box-shadow: 0px 0.3010936508871964px 0.3010936508871964px -1.25px rgba(0, 0, 0, 0.18), 0px 1.1442666516217286px 1.1442666516217286px -2.5px rgba(0, 0, 0, 0.16), 0px 5px 5px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 64px 0px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-zY7ga .framer-lj4h9m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 16px; position: relative; width: 1px; }`,
        `.framer-zY7ga .framer-hd45wk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-a2bl1o, .framer-zY7ga .framer-1sda4qo, .framer-zY7ga .framer-rdfbqw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zY7ga .framer-1uoe83z, .framer-zY7ga .framer-ug9tus, .framer-zY7ga .framer-y140f, .framer-zY7ga .framer-1ba8geo, .framer-zY7ga .framer-159h5nb, .framer-zY7ga .framer-9p73f5, .framer-zY7ga .framer-17pq7ks, .framer-zY7ga .framer-3jy2kp, .framer-zY7ga .framer-1vsxzyl, .framer-zY7ga .framer-wwgrm6, .framer-zY7ga .framer-dfy91l, .framer-zY7ga .framer-qbxv2b, .framer-zY7ga .framer-1673y6g { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zY7ga .framer-1j8jq31 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zY7ga .framer-17sf5t1, .framer-zY7ga .framer-1lsuiyx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zY7ga .framer-1cg7qv8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-zY7ga .framer-1onj0ni { align-content: center; align-items: center; background-color: #341a00; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-zY7ga .framer-9n6f04, .framer-zY7ga .framer-msq3x3, .framer-zY7ga .framer-i92afq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zY7ga .framer-py34d7, .framer-zY7ga .framer-4xe2yq, .framer-zY7ga .framer-m79pxm { height: 13px; position: relative; width: 14px; }`,
        `.framer-zY7ga .framer-wxnbj9, .framer-zY7ga .framer-1udhc1k, .framer-zY7ga .framer-147x7e6 { height: 13px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-zY7ga .framer-13uvcwh, .framer-zY7ga .framer-17o1tb5, .framer-zY7ga .framer-1kt0x6r { height: 13px; left: 6px; position: absolute; top: 0px; width: 8px; }`,
        `.framer-zY7ga .framer-1llj66u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 16px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-1xbr7m3, .framer-zY7ga .framer-1ygkz7n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-1d62ms3, .framer-zY7ga .framer-vxipc4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zY7ga .framer-n4zdvx, .framer-zY7ga .framer-x2g48s { --border-bottom-width: 1px; --border-color: #351a00; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fdfbf9; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 18px 4px 16px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-zY7ga .framer-1clez2w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-1sudbin { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zY7ga .framer-yv59is { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zY7ga .framer-19h4msq { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zY7ga .framer-1lzjqbe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-ykvtxp-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-rvxc1p, .framer-zY7ga .framer-zef996 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-urj1nv, .framer-zY7ga .framer-yhz18p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-1fdao35 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-1hnz6t9, .framer-zY7ga .framer-48sihq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-1q5p2a3 { --border-bottom-width: 0px; --border-color: #81a877; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 6px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 24px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zY7ga .framer-6i8usu, .framer-zY7ga .framer-18movso, .framer-zY7ga .framer-1enq3xs, .framer-zY7ga .framer-1q9959c, .framer-zY7ga .framer-1rowukt, .framer-zY7ga .framer-usvppj, .framer-zY7ga .framer-1bwc4ln, .framer-zY7ga .framer-6kk7ju, .framer-zY7ga .framer-q5pe3c, .framer-zY7ga .framer-hu4v2b, .framer-zY7ga .framer-15b6xrs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-zY7ga .framer-140fdnd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-5jm00f, .framer-zY7ga .framer-iburlx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-zY7ga .framer-lt9f6f, .framer-zY7ga .framer-4xu134, .framer-zY7ga .framer-3b5ep6, .framer-zY7ga .framer-1wb16wl, .framer-zY7ga .framer-wiu71h, .framer-zY7ga .framer-bx9zb3, .framer-zY7ga .framer-jrjjv4 { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-ugm7x8 { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-top-left-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 64px 0px 16px; position: relative; scroll-margin-top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zY7ga .framer-1bn4gvo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-zY7ga .framer-1g0cd33 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zY7ga .framer-121hd62-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...ge,
        ...F,
        ...Se,
        ...I,
        ...z,
        ..._e,
        ...ke,
        `.framer-zY7ga[data-border="true"]::after, .framer-zY7ga [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1240px) and (max-width: 1439.98px) { .framer-zY7ga.framer-5xhlbx { width: 1240px; } .framer-zY7ga .framer-1llj66u { gap: 16px; justify-content: flex-start; } .framer-zY7ga .framer-1clez2w, .framer-zY7ga .framer-rvxc1p, .framer-zY7ga .framer-urj1nv, .framer-zY7ga .framer-1fdao35, .framer-zY7ga .framer-yhz18p, .framer-zY7ga .framer-140fdnd { gap: 8px; } .framer-zY7ga .framer-1q5p2a3 { gap: 16px; }}`,
        `@media (min-width: 810px) and (max-width: 1239.98px) { .framer-zY7ga.framer-5xhlbx { flex-direction: column; width: 810px; } .framer-zY7ga .framer-rfm1or-container { height: auto; width: 100%; } .framer-zY7ga .framer-15axi0p { flex: none; padding: 32px 0px 64px 32px; width: 100%; } .framer-zY7ga .framer-1llj66u { gap: 16px; justify-content: flex-start; padding: 0px 32px 0px 16px; } .framer-zY7ga .framer-1clez2w { gap: 8px; order: 2; } .framer-zY7ga .framer-rvxc1p { gap: 8px; order: 3; } .framer-zY7ga .framer-urj1nv { gap: 8px; order: 4; } .framer-zY7ga .framer-1fdao35 { gap: 8px; order: 5; } .framer-zY7ga .framer-zef996 { order: 6; } .framer-zY7ga .framer-1ygkz7n { order: 1; } .framer-zY7ga .framer-1q5p2a3 { gap: 16px; padding: 32px 32px 24px 16px; } .framer-zY7ga .framer-yhz18p, .framer-zY7ga .framer-140fdnd { gap: 8px; } .framer-zY7ga .framer-ugm7x8 { padding: 32px 32px 0px 16px; }}`,
        `@media (max-width: 809.98px) { .framer-zY7ga.framer-5xhlbx { flex-direction: column; width: 390px; } .framer-zY7ga .framer-rfm1or-container { height: auto; width: 100%; } .framer-zY7ga .framer-15axi0p { flex: none; padding: 24px 0px 32px 24px; width: 100%; } .framer-zY7ga .framer-1llj66u { gap: 16px; justify-content: flex-start; order: 1; padding: 0px 32px 0px 16px; } .framer-zY7ga .framer-1clez2w { flex-direction: column; gap: 8px; } .framer-zY7ga .framer-1sudbin { flex: none; width: 100%; } .framer-zY7ga .framer-19h4msq { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-zY7ga .framer-rvxc1p, .framer-zY7ga .framer-urj1nv, .framer-zY7ga .framer-1fdao35, .framer-zY7ga .framer-yhz18p, .framer-zY7ga .framer-140fdnd { gap: 8px; } .framer-zY7ga .framer-1hnz6t9 { order: 2; } .framer-zY7ga .framer-1q5p2a3 { gap: 16px; padding: 32px 32px 24px 16px; } .framer-zY7ga .framer-48sihq { order: 3; } .framer-zY7ga .framer-ugm7x8 { padding: 32px 32px 0px 16px; }}`,
      ],
      `framer-zY7ga`
    )),
    ($.displayName = `Ru / Portfolio 2 / Mappingtool 2`),
    ($.defaultProps = { height: 7949, width: 1440 }),
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
        ...x(ve),
        ...x(N),
        ...x(Ce),
        ...x(R),
        ...x(A),
        ...x(ye),
        ...x(Ae),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => m([() => k(L, {}, t)], t) }),
    (Ie = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerccThq1ZNn`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1440`,
            framerScrollSections: `{"A6O3LzhzJ":{"pattern":":A6O3LzhzJ","name":"research-map"},"MWWGEnItL":{"pattern":":MWWGEnItL","name":"prototype"}}`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"FM0JI510d":{"layout":["fixed","auto"]},"ma0FEBTz6":{"layout":["fixed","auto"]},"vYdsddEOF":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `7949`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `false`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ie as __FramerMetadata__, $ as default, q as queryParamNames };
//# sourceMappingURL=mcc9wF6QLS85jjvWuWdw-EMVRQOq5P965_AS7jRQTfY.iepspAuR.mjs.map
