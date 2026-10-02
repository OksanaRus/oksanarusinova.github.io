import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.hMW2PJqY.mjs";
import { V as d, c as f, o as ee, r as p } from "./motion.CaZjHSpz.mjs";
import {
  Cn as m,
  F as h,
  G as g,
  I as _,
  K as v,
  Qt as te,
  Z as y,
  _n as b,
  c as x,
  ct as S,
  et as C,
  gn as w,
  ht as T,
  lt as E,
  o as D,
  ot as O,
  un as ne,
  vn as k,
  x as re,
  z as A,
  zt as j,
} from "./framer.CuDPj9y9.mjs";
import { n as M, t as N } from "./Debug.snhVMFQU.mjs";
import { n as P, r as F, t as I } from "./fpJV3zp1q.BBYwyjT7.mjs";
import { i as L, n as R, r as ie, t as ae } from "./q5l9lrIfW.CSGcYlC1.mjs";
import { n as oe, t as z } from "./HoRfFp9QY.bTp-UdUi.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  se = e(() => {
    (s(),
      T(),
      p(),
      r(),
      oe(),
      N(),
      L(),
      F(),
      (V = O(I)),
      (H = m(k(I, { nodeId: `xxCBKPz21`, override: M, scopeId: `Qk3ds_mPn` }), P)),
      (U = [`FLmo0XG5N`, `uMVfLDufo`, `OtdhaXQ5k`]),
      (W = `framer-RJyw8`),
      (G = {
        FLmo0XG5N: `framer-v-fk8ehq`,
        OtdhaXQ5k: `framer-v-ahemvv`,
        uMVfLDufo: `framer-v-bkuvze`,
      }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (J = ({ value: e, children: t }) => {
        let r = i(f),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (Y = { Desktop: `FLmo0XG5N`, Phone: `OtdhaXQ5k`, Tablet: `uMVfLDufo` }),
      (X = d.create(a)),
      (Z = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Y[r.variant] ?? r.variant ?? `FLmo0XG5N`,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = b(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, setLocale: f } = te(),
            p = j(),
            { style: m, className: g, layoutId: v, variant: b, ...x } = Z(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: M,
              setGestureState: N,
              setVariant: P,
              variants: F,
            } = w({
              cycleOrder: U,
              defaultVariant: `FLmo0XG5N`,
              ref: i,
              variant: b,
              variantClassNames: G,
            }),
            L = Q(e, F),
            R = y(W, ae);
          return (
            ne(),
            l(ee, {
              id: v ?? s,
              children: l(X, {
                animate: F,
                initial: !1,
                children: l(J, {
                  value: K,
                  children: u(d.div, {
                    ...x,
                    ...O,
                    className: y(R, `framer-fk8ehq`, g, C),
                    "data-framer-name": `Desktop`,
                    layoutDependency: L,
                    layoutId: `FLmo0XG5N`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))`,
                      ...m,
                    },
                    ...B(
                      {
                        OtdhaXQ5k: { "data-framer-name": `Phone` },
                        uMVfLDufo: { "data-framer-name": `Tablet` },
                      },
                      S,
                      k
                    ),
                    children: [
                      u(d.header, {
                        className: `framer-k6di86`,
                        "data-framer-name": `Header`,
                        layoutDependency: L,
                        layoutId: `SzWgMFbVq`,
                        children: [
                          u(d.div, {
                            className: `framer-1p9rtco`,
                            "data-framer-name": `Text`,
                            layoutDependency: L,
                            layoutId: `Q7F4AF1DM`,
                            children: [
                              l(_, {
                                __fromCanvasComponent: !0,
                                children: l(a, {
                                  children: u(d.h5, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `Q1VTVE9NO0dUIFdhbHNoZWltIE1lZGl1bQ==`,
                                      "--framer-font-family": `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'ss02' on`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.05em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: [
                                      l(d.span, {
                                        style: { "--framer-font-size": `68px` },
                                        children: `Ship faster.`,
                                      }),
                                      l(d.span, {
                                        style: { "--framer-font-size": `68px` },
                                        children: l(d.br, {}),
                                      }),
                                      l(d.span, {
                                        style: { "--framer-font-size": `68px` },
                                        children: `Build smarter.`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-4xq2fp`,
                                fonts: [`CUSTOM;GT Walsheim Medium`],
                                layoutDependency: L,
                                layoutId: `OFppA6zeH`,
                                style: {
                                  "--extracted-1lwpl3i": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    OtdhaXQ5k: {
                                      children: l(a, {
                                        children: u(d.h5, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Q1VTVE9NO0dUIFdhbHNoZWltIE1lZGl1bQ==`,
                                            "--framer-font-family": `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'ss02' on`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: [
                                            l(d.span, {
                                              style: { "--framer-font-size": `36px` },
                                              children: `Ship faster.`,
                                            }),
                                            l(d.span, {
                                              style: { "--framer-font-size": `36px` },
                                              children: l(d.br, {}),
                                            }),
                                            l(d.span, {
                                              style: { "--framer-font-size": `36px` },
                                              children: `Build smarter.`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                    uMVfLDufo: {
                                      children: l(a, {
                                        children: u(d.h5, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Q1VTVE9NO0dUIFdhbHNoZWltIE1lZGl1bQ==`,
                                            "--framer-font-family": `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `'ss02' on`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-1.8px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: [
                                            l(d.span, {
                                              style: { "--framer-font-size": `48px` },
                                              children: `Ship faster.`,
                                            }),
                                            l(d.span, {
                                              style: { "--framer-font-size": `48px` },
                                              children: l(d.br, {}),
                                            }),
                                            l(d.span, {
                                              style: { "--framer-font-size": `48px` },
                                              children: `Build smarter.`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  S,
                                  k
                                ),
                              }),
                              l(_, {
                                __fromCanvasComponent: !0,
                                children: l(a, {
                                  children: l(d.p, {
                                    className: `framer-styles-preset-18enhj0`,
                                    "data-styles-preset": `q5l9lrIfW`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Apply advanced practices to build and run sites, without slowing down.`,
                                  }),
                                }),
                                className: `framer-1wh9z0n`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `MDnNnfjkR`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          u(d.div, {
                            className: `framer-k2pcxd`,
                            "data-framer-name": `Buttons`,
                            layoutDependency: L,
                            layoutId: `EeavHLyFl`,
                            children: [
                              l(D, {
                                height: 34,
                                y:
                                  (p?.y || 0) +
                                  120 +
                                  (((p?.height || 1089) - 120 - 798) / 2 + 0 + 0) +
                                  0 +
                                  254 +
                                  0,
                                ...B(
                                  {
                                    OtdhaXQ5k: {
                                      y:
                                        (p?.y || 0) +
                                        80 +
                                        (((p?.height || 200) - 80 - 766) / 2 + 0 + 0) +
                                        0 +
                                        222 +
                                        0,
                                    },
                                    uMVfLDufo: {
                                      y:
                                        (p?.y || 0) +
                                        80 +
                                        (((p?.height || 200) - 80 - 782.8) / 2 + 0 + 0) +
                                        0 +
                                        238.8 +
                                        0,
                                    },
                                  },
                                  S,
                                  k
                                ),
                                children: l(A, {
                                  className: `framer-rxm7om-container`,
                                  layoutDependency: L,
                                  layoutId: `xxCBKPz21-container`,
                                  nodeId: `xxCBKPz21`,
                                  rendersWithMotion: !0,
                                  scopeId: `Qk3ds_mPn`,
                                  children: l(H, {
                                    aq3hTZ9m1: `framer.com/r/signup`,
                                    c8MUIFu8M: !1,
                                    DJXtUU2Fb: !1,
                                    height: `100%`,
                                    id: `xxCBKPz21`,
                                    iZh0bTFo1: z,
                                    kw6l_suoH: `Start for free`,
                                    layoutId: `xxCBKPz21`,
                                    ljsS0PDRT: 0,
                                    m34vmsLTM: ``,
                                    MBD8rTH3H: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    N15cKHn29: `clicked-get-started-footer`,
                                    variant: q(`aHq3iETXg`),
                                    width: `100%`,
                                    xdxfhd9wh: `var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))`,
                                  }),
                                }),
                              }),
                              l(h, {
                                links: [
                                  {
                                    href: { webPageId: `CRh1Z3ynB` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `CRh1Z3ynB` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `CRh1Z3ynB` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  l(D, {
                                    height: 34,
                                    y:
                                      (p?.y || 0) +
                                      120 +
                                      (((p?.height || 1089) - 120 - 798) / 2 + 0 + 0) +
                                      0 +
                                      254 +
                                      0,
                                    ...B(
                                      {
                                        OtdhaXQ5k: {
                                          y:
                                            (p?.y || 0) +
                                            80 +
                                            (((p?.height || 200) - 80 - 766) / 2 + 0 + 0) +
                                            0 +
                                            222 +
                                            0,
                                        },
                                        uMVfLDufo: {
                                          y:
                                            (p?.y || 0) +
                                            80 +
                                            (((p?.height || 200) - 80 - 782.8) / 2 + 0 + 0) +
                                            0 +
                                            238.8 +
                                            0,
                                        },
                                      },
                                      S,
                                      k
                                    ),
                                    children: l(A, {
                                      className: `framer-1fgabf1-container`,
                                      layoutDependency: L,
                                      layoutId: `z9yk5QNkQ-container`,
                                      nodeId: `z9yk5QNkQ`,
                                      rendersWithMotion: !0,
                                      scopeId: `Qk3ds_mPn`,
                                      children: l(I, {
                                        aq3hTZ9m1: e[0],
                                        c8MUIFu8M: !1,
                                        DJXtUU2Fb: !1,
                                        height: `100%`,
                                        id: `z9yk5QNkQ`,
                                        iZh0bTFo1: z,
                                        kw6l_suoH: `Talk to our team`,
                                        layoutId: `z9yk5QNkQ`,
                                        ljsS0PDRT: 0,
                                        m34vmsLTM: ``,
                                        MBD8rTH3H: `rgba(255, 255, 255, 0.2)`,
                                        N15cKHn29: `start-with-ai`,
                                        variant: q(`aHq3iETXg`),
                                        width: `100%`,
                                        xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        ...B(
                                          {
                                            OtdhaXQ5k: { aq3hTZ9m1: e[2] },
                                            uMVfLDufo: { aq3hTZ9m1: e[1] },
                                          },
                                          S,
                                          k
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l(d.div, {
                        className: `framer-1x2hodz`,
                        layoutDependency: L,
                        layoutId: `uRbl9TV4W`,
                        children: u(re, {
                          background: {
                            alt: `Framer UI showing Pages, Layers and Assets panels titles`,
                            fit: `fill`,
                            intrinsicHeight: 2160,
                            intrinsicWidth: 3840,
                            loading: E(
                              (p?.y || 0) +
                                120 +
                                (((p?.height || 1089) - 120 - 798) / 2 + 288 + 0) +
                                510 -
                                612
                            ),
                            pixelHeight: 2160,
                            pixelWidth: 3840,
                            positionX: `center`,
                            positionY: `top`,
                            sizes: `min(${p?.width || `100vw`}, 1500px)`,
                            src: `../../assets/images/S9zounRUePKHNPN2kI93ExzXk-650e5a.png`,
                            srcSet: `../../assets/images/S9zounRUePKHNPN2kI93ExzXk-f7e901.png 512w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk-160243.png 1024w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk.png 2048w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk-650e5a.png 3840w`,
                          },
                          className: `framer-pdplbl`,
                          "data-framer-name": `Image`,
                          layoutDependency: L,
                          layoutId: `bQNGPJBiw`,
                          style: {
                            mask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%) add`,
                            WebkitMask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%) add`,
                          },
                          ...B(
                            {
                              OtdhaXQ5k: {
                                background: {
                                  alt: `Framer UI showing Pages, Layers and Assets panels titles`,
                                  fit: `fill`,
                                  intrinsicHeight: 2160,
                                  intrinsicWidth: 3840,
                                  loading: E(
                                    (p?.y || 0) +
                                      80 +
                                      (((p?.height || 200) - 80 - 766) / 2 + 256 + 0) +
                                      510 -
                                      612
                                  ),
                                  pixelHeight: 2160,
                                  pixelWidth: 3840,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `min(${p?.width || `100vw`}, 1500px)`,
                                  src: `../../assets/images/S9zounRUePKHNPN2kI93ExzXk-650e5a.png`,
                                  srcSet: `../../assets/images/S9zounRUePKHNPN2kI93ExzXk-f7e901.png 512w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk-160243.png 1024w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk.png 2048w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk-650e5a.png 3840w`,
                                },
                              },
                              uMVfLDufo: {
                                background: {
                                  alt: `Framer UI showing Pages, Layers and Assets panels titles`,
                                  fit: `fill`,
                                  intrinsicHeight: 2160,
                                  intrinsicWidth: 3840,
                                  loading: E(
                                    (p?.y || 0) +
                                      80 +
                                      (((p?.height || 200) - 80 - 782.8) / 2 + 272.8 + 0) +
                                      510 -
                                      612
                                  ),
                                  pixelHeight: 2160,
                                  pixelWidth: 3840,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `min(${p?.width || `100vw`}, 1500px)`,
                                  src: `../../assets/images/S9zounRUePKHNPN2kI93ExzXk-650e5a.png`,
                                  srcSet: `../../assets/images/S9zounRUePKHNPN2kI93ExzXk-f7e901.png 512w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk-160243.png 1024w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk.png 2048w,../../assets/images/S9zounRUePKHNPN2kI93ExzXk-650e5a.png 3840w`,
                                },
                              },
                            },
                            S,
                            k
                          ),
                          children: [
                            l(d.div, {
                              className: `framer-1vibwgh`,
                              layoutDependency: L,
                              layoutId: `MKnCNbgii`,
                              style: {
                                background: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)`,
                              },
                            }),
                            l(d.div, {
                              className: `framer-cu4e7j`,
                              layoutDependency: L,
                              layoutId: `LcMW1y2X5`,
                              style: {
                                background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)`,
                              },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-RJyw8.framer-s6vkoq, .framer-RJyw8 .framer-s6vkoq { display: block; }`,
          `.framer-RJyw8.framer-fk8ehq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 0px 0px 0px; position: relative; width: 1200px; }`,
          `.framer-RJyw8 .framer-k6di86 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-RJyw8 .framer-1p9rtco { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-RJyw8 .framer-4xq2fp { --framer-text-wrap: balance; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 570px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-RJyw8 .framer-1wh9z0n { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; position: relative; width: 483px; }`,
          `.framer-RJyw8 .framer-k2pcxd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-RJyw8 .framer-rxm7om-container, .framer-RJyw8 .framer-1fgabf1-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
          `.framer-RJyw8 .framer-1x2hodz { aspect-ratio: 2.3529411764705883 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 85px); max-width: 1500px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-RJyw8 .framer-pdplbl { bottom: 0px; flex: none; height: 120%; left: 0px; overflow: visible; pointer-events: none; position: absolute; width: 100%; }`,
          `.framer-RJyw8 .framer-1vibwgh { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; top: 0px; width: 20%; }`,
          `.framer-RJyw8 .framer-cu4e7j { bottom: 0px; flex: none; overflow: visible; position: absolute; right: 0px; top: 0px; width: 20%; }`,
          `.framer-RJyw8.framer-v-bkuvze.framer-fk8ehq { padding: 80px 0px 0px 0px; width: 810px; }`,
          `.framer-RJyw8.framer-v-bkuvze .framer-4xq2fp { width: 474px; }`,
          `.framer-RJyw8.framer-v-ahemvv.framer-fk8ehq { padding: 80px 0px 0px 0px; width: 390px; }`,
          ...R,
        ],
        `framer-RJyw8`
      )),
      ($.displayName = `Guides Pivot`),
      ($.defaultProps = { height: 1089, width: 1200 }),
      v($, {
        variant: {
          options: [`FLmo0XG5N`, `uMVfLDufo`, `OtdhaXQ5k`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: x.Enum,
        },
      }),
      g(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `GT Walsheim Medium`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `GT Walsheim`,
                url: `../../assets/fonts/6kEeNyQwxT59TY7SpLEnehG2fc.woff2`,
                weight: `500`,
              },
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
            ],
          },
          ...V,
          ...S(ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([C(I, {}, t)])) }));
  });
export { se as n, $ as t };
//# sourceMappingURL=Qk3ds_mPn.Byezsh1t.mjs.map
