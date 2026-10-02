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
import { V as d, c as f, o as p, r as m } from "./motion.CaZjHSpz.mjs";
import {
  C as h,
  Ft as g,
  G as _,
  I as v,
  K as y,
  Qt as b,
  Z as x,
  _n as S,
  c as C,
  gn as w,
  ht as T,
  zt as E,
} from "./framer.CuDPj9y9.mjs";
import { n as D, t as O } from "./P0K9uVDju.DQet21yA.mjs";
import { n as k, t as A } from "./mvD6g4TgD.NHz87jH7.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W = e(() => {
    (s(),
      T(),
      m(),
      r(),
      k(),
      D(),
      (M = { O8Z3nnPeT: { hover: !0 } }),
      (N = [`O8Z3nnPeT`, `z0rX5ozwP`, `kXBxbmBfd`, `ugGzYIccv`]),
      (P = `framer-sup4z`),
      (F = {
        kXBxbmBfd: `framer-v-6q1tkz`,
        O8Z3nnPeT: `framer-v-1wgb221`,
        ugGzYIccv: `framer-v-nhwyg0`,
        z0rX5ozwP: `framer-v-frhy0c`,
      }),
      (I = { duration: 0, type: `tween` }),
      (L = ({ value: e, children: t }) => {
        let r = i(f),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (R = {
        "No Hover": `ugGzYIccv`,
        Default: `O8Z3nnPeT`,
        Hidden: `kXBxbmBfd`,
        Loading: `z0rX5ozwP`,
      }),
      (z = d.create(a)),
      (B = ({ background: e, click: t, color: n, height: r, id: i, title: a, width: o, ...s }) => ({
        ...s,
        CRGWUwUnF: n ?? s.CRGWUwUnF ?? `rgb(255, 255, 255)`,
        O1iy32btv: a ?? s.O1iy32btv ?? `Load more`,
        variant: R[s.variant] ?? s.variant ?? `O8Z3nnPeT`,
        Wld3NDzSj: t ?? s.Wld3NDzSj,
        Y8jx2UZrf: e ?? s.Y8jx2UZrf ?? `rgba(255, 255, 255, 0.1)`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = S(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, contentLocale: f, setLocale: m } = b();
          E();
          let {
              style: _,
              className: y,
              layoutId: S,
              variant: C,
              Wld3NDzSj: T,
              O1iy32btv: D,
              Y8jx2UZrf: k,
              CRGWUwUnF: R,
              ...H
            } = B(e),
            {
              baseVariant: U,
              classNames: W,
              clearLoadingGesture: ee,
              gestureHandlers: G,
              gestureVariant: K,
              isLoading: te,
              setGestureState: q,
              setVariant: ne,
              variants: J,
            } = w({
              cycleOrder: N,
              defaultVariant: `O8Z3nnPeT`,
              enabledGestures: M,
              ref: i,
              variant: C,
              variantClassNames: F,
            }),
            Y = V(e, J),
            X = [],
            Z = () => U !== `kXBxbmBfd`,
            { activeVariantCallback: Q, delay: re } = g(U),
            $ = Q(async (...e) => {
              if ((q({ isPressed: !1 }), T && (await T(...e)) === !1)) return !1;
            }),
            ie = x(P, ...X),
            ae = () => U !== `z0rX5ozwP`,
            oe = () => U === `z0rX5ozwP`;
          return l(p, {
            id: S ?? s,
            children: l(z, {
              animate: J,
              initial: !1,
              children:
                Z() &&
                l(L, {
                  value: I,
                  children: u(d.div, {
                    ...H,
                    ...G,
                    className: x(ie, `framer-1wgb221`, y, W),
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: Y,
                    layoutId: `O8Z3nnPeT`,
                    onTap: $,
                    ref: i,
                    style: {
                      backgroundColor: k,
                      borderBottomLeftRadius: 9,
                      borderBottomRightRadius: 9,
                      borderTopLeftRadius: 9,
                      borderTopRightRadius: 9,
                      opacity: 1,
                      ..._,
                    },
                    variants: { "O8Z3nnPeT-hover": { opacity: 0.6 } },
                    ...j(
                      {
                        ugGzYIccv: { "data-framer-name": `No Hover` },
                        z0rX5ozwP: { "data-framer-name": `Loading` },
                      },
                      U,
                      K
                    ),
                    children: [
                      ae() &&
                        l(v, {
                          __fromCanvasComponent: !0,
                          children: l(a, {
                            children: l(d.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTRMQ0FpZDJkb2RDSWdOVFl3`,
                                "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on`,
                                "--framer-font-size": `15px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wght" 560)`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-CRGWUwUnF-oBQP1pPNl))`,
                              },
                              children: `Load more`,
                            }),
                          }),
                          className: `framer-12z81ik`,
                          fonts: [`Inter-Variable`],
                          layoutDependency: Y,
                          layoutId: `oKOzmJOLK`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 18, "wght" 560`,
                            "--extracted-r6o4lv": `var(--variable-reference-CRGWUwUnF-oBQP1pPNl)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--variable-reference-CRGWUwUnF-oBQP1pPNl": R,
                          },
                          text: D,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      oe() &&
                        l(h, {
                          animated: !0,
                          className: `framer-yd0q2h`,
                          Component: A,
                          layoutDependency: Y,
                          layoutId: `IGJDqUS8m`,
                          style: {
                            "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                            "--1iwhep7": 2.5,
                            "--1l3yetw": R,
                          },
                          variants: { z0rX5ozwP: { "--1l3yetw": `rgb(255, 255, 255)` } },
                          ...j({ z0rX5ozwP: { Component: O } }, U, K),
                        }),
                    ],
                  }),
                }),
            }),
          });
        }),
        [
          `.framer-sup4z.framer-1vxl9h8, .framer-sup4z .framer-1vxl9h8 { display: block; }`,
          `.framer-sup4z.framer-1wgb221 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px 14px 10px 14px; position: relative; width: min-content; }`,
          `.framer-sup4z .framer-12z81ik { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-sup4z .framer-yd0q2h { flex: none; height: auto; position: relative; width: 15px; }`,
        ],
        `framer-sup4z`
      )),
      (H.displayName = `Load More`),
      (H.defaultProps = { height: 35, width: 101 }),
      y(H, {
        variant: {
          options: [`O8Z3nnPeT`, `z0rX5ozwP`, `kXBxbmBfd`, `ugGzYIccv`],
          optionTitles: [`Default`, `Loading`, `Hidden`, `No Hover`],
          title: `Variant`,
          type: C.Enum,
        },
        Wld3NDzSj: { title: `Click`, type: C.EventHandler },
        O1iy32btv: {
          defaultValue: `Load more`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        onO1iy32btvChange: { changes: `O1iy32btv`, type: C.ChangeHandler },
        Y8jx2UZrf: { defaultValue: `rgba(255, 255, 255, 0.1)`, title: `Background`, type: C.Color },
        CRGWUwUnF: { defaultValue: `rgb(255, 255, 255)`, title: `Color`, type: C.Color },
      }),
      (U = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      _(
        H,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: U,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: U,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: U,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: U,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: U,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: U,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: U,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { W as n, H as t };
//# sourceMappingURL=oBQP1pPNl.M-isNJpU.mjs.map
