import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as s,
  l as ee,
  m as c,
  s as l,
  u,
} from "./react.hMW2PJqY.mjs";
import { V as d, c as f, o as p, r as m } from "./motion.CaZjHSpz.mjs";
import {
  A as h,
  G as g,
  Ht as te,
  I as _,
  Jt as v,
  K as y,
  Kt as ne,
  Ot as b,
  Qt as x,
  St as S,
  T as C,
  Z as w,
  _ as T,
  _n as E,
  bn as re,
  c as D,
  ct as O,
  en as ie,
  et as k,
  fn as A,
  g as ae,
  gn as oe,
  ht as j,
  ln as se,
  o as ce,
  ot as M,
  s as le,
  vn as N,
  y as P,
  zt as F,
} from "./framer.CuDPj9y9.mjs";
import {
  _ as ue,
  b as I,
  d as L,
  f as R,
  i as de,
  l as fe,
  n as pe,
  r as me,
  t as he,
  u as ge,
  v as _e,
  y as ve,
} from "./shared.DbR_nTE0.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./opnE6P6z1.D-hpdzOY.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./qRN7MgZKk.DvYJUCYH.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./uT_bT0pMG.Dx8mPC7G.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./sBHBrQO1O.CbRe7bH2.mjs";
import { n as Fe, t as Ie } from "./ScannerOverrides.B7wiDEoV.mjs";
import Le, { t as Re } from "./9ECtgGx6J-jMG2jpNiqKo4iZBYcjwuzg6f_7pJ3-Enk.CHG-HSRz.mjs";
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
  V,
  H,
  U,
  W,
  ze,
  G,
  K,
  q,
  Be,
  Ve,
  He,
  Ue,
  J,
  Y,
  We = e(() => {
    (s(),
      j(),
      m(),
      r(),
      (B = re(d.div)),
      (V = { jS7lDpYHW: { hover: !0, pressed: !0 } }),
      (H = [`jS7lDpYHW`, `WoRfq6DmU`, `XivSmXjsa`, `T37hCxp07`]),
      (U = `framer-1eBju`),
      (W = {
        jS7lDpYHW: `framer-v-16zy8u3`,
        T37hCxp07: `framer-v-qqaiok`,
        WoRfq6DmU: `framer-v-1ol4fo2`,
        XivSmXjsa: `framer-v-paw7xa`,
      }),
      S(),
      (ze = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (G = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (K = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (q = ({ value: e, children: t }) => {
        let r = i(f),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (Be = {
        Default: `jS7lDpYHW`,
        Error: `T37hCxp07`,
        Loading: `WoRfq6DmU`,
        Success: `XivSmXjsa`,
      }),
      (Ve = d.create(a)),
      (He = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        rHL5j0Crk: n ?? i.rHL5j0Crk ?? `Scan your site`,
        variant: Be[i.variant] ?? i.variant ?? `jS7lDpYHW`,
      })),
      (Ue = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = E(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: ee, setLocale: c } = x();
          F();
          let { style: f, className: m, layoutId: h, variant: g, rHL5j0Crk: te, ...v } = He(e),
            {
              baseVariant: y,
              classNames: ne,
              clearLoadingGesture: b,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: T,
              setGestureState: E,
              setVariant: re,
              variants: D,
            } = oe({
              cycleOrder: H,
              defaultVariant: `jS7lDpYHW`,
              enabledGestures: V,
              ref: i,
              variant: g,
              variantClassNames: W,
            }),
            O = Ue(e, D),
            ie = w(U),
            k = () => y !== `WoRfq6DmU`,
            A = () => y === `WoRfq6DmU`;
          return l(p, {
            id: h ?? s,
            children: l(Ve, {
              animate: D,
              initial: !1,
              children: l(q, {
                value: ze,
                children: u(d.button, {
                  ...v,
                  ...S,
                  className: w(ie, `framer-16zy8u3`, m, ne),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: O,
                  layoutId: `jS7lDpYHW`,
                  ref: i,
                  style: {
                    "--corner-shape-fallback": 0.752,
                    backgroundColor: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: `calc(15px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(15px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(15px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(15px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.5)`,
                    opacity: 1,
                    ...f,
                  },
                  variants: {
                    "jS7lDpYHW-hover": { opacity: 0.8 },
                    "jS7lDpYHW-pressed": { opacity: 0.6 },
                    T37hCxp07: { opacity: 0.25 },
                  },
                  ...z(
                    {
                      "jS7lDpYHW-hover": { "data-framer-name": `Hover` },
                      "jS7lDpYHW-pressed": { "data-framer-name": `Pressed` },
                      T37hCxp07: { "data-framer-name": `Error` },
                      WoRfq6DmU: { "data-framer-name": `Loading` },
                      XivSmXjsa: { "data-framer-name": `Success` },
                    },
                    y,
                    C
                  ),
                  children: [
                    k() &&
                      l(_, {
                        __fromCanvasComponent: !0,
                        children: l(a, {
                          children: l(d.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbmRuYUhRaUlEVXdNQT09`,
                              "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                              "--framer-font-size": `15px`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                              "--framer-letter-spacing": `-0.01em`,
                              "--framer-line-height": `1em`,
                              "--framer-text-alignment": `center`,
                            },
                            children: `Scan your site`,
                          }),
                        }),
                        className: `framer-5n5q0q`,
                        fonts: [`Inter-Variable`],
                        layoutDependency: O,
                        layoutId: `q6jS75Sup`,
                        style: { "--extracted-2gg91v": `"wght" 500` },
                        text: te,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...z(
                          {
                            T37hCxp07: {
                              children: l(a, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                    "--framer-font-size": `15px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `Scan your site`,
                                }),
                              }),
                              fonts: [`Inter-Medium`],
                            },
                            XivSmXjsa: {
                              children: l(a, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                    "--framer-font-size": `15px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `Scan your site`,
                                }),
                              }),
                              fonts: [`Inter-Medium`],
                            },
                          },
                          y,
                          C
                        ),
                      }),
                    A() &&
                      l(d.div, {
                        className: `framer-1c2ivua`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: O,
                        layoutId: `PhnG1wsAo`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/nh3wMpY2ATnDl7442isB10c3JY.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/nh3wMpY2ATnDl7442isB10c3JY.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: l(B, {
                          __framer__loop: K,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: G,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-5p7ogp`,
                          layoutDependency: O,
                          layoutId: `BCB2h0Wq8`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(0, 0, 0, 0) 7deg, rgb(0, 0, 0) 342deg)`,
                          },
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-1eBju.framer-1jv9ocw, .framer-1eBju .framer-1jv9ocw { display: block; }`,
          `.framer-1eBju.framer-16zy8u3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 14px 10px 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1eBju .framer-5n5q0q { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-1eBju .framer-1c2ivua { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: hidden; position: relative; width: 20px; }`,
          `.framer-1eBju .framer-5p7ogp { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-1eBju`
      )),
      (J.displayName = `Submit Button`),
      (J.defaultProps = { height: 35, width: 127 }),
      y(J, {
        variant: {
          options: [`jS7lDpYHW`, `WoRfq6DmU`, `XivSmXjsa`, `T37hCxp07`],
          optionTitles: [`Default`, `Loading`, `Success`, `Error`],
          title: `Variant`,
          type: D.Enum,
        },
        rHL5j0Crk: { defaultValue: `Scan your site`, title: `Title`, type: D.String },
        onrHL5j0CrkChange: { changes: `rHL5j0Crk`, type: D.ChangeHandler },
      }),
      (Y = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      g(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: Y,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  X,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Z,
  Qe,
  $e,
  Q,
  $;
e(() => {
  (s(),
    j(),
    m(),
    r(),
    We(),
    Ie(),
    de(),
    ye(),
    Ce(),
    je(),
    De(),
    R(),
    I(),
    Re(),
    (X = M(J)),
    (Ge = N(d.div, { nodeId: `KkkVCFNah`, override: Fe, scopeId: `yTsg6HFKI` })),
    (Ke = {
      JFgfElJqF: `(max-width: 809.98px)`,
      rO6h3hNVW: `(min-width: 1200px)`,
      yC4o7G_qJ: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (qe = []),
    (Je = `framer-bo1UT`),
    (Ye = {
      JFgfElJqF: `framer-v-g9bqur`,
      rO6h3hNVW: `framer-v-1vn37vg`,
      yC4o7G_qJ: `framer-v-1gg8ics`,
    }),
    (Xe = (e, t, n) => (e && t ? `position` : n)),
    S(),
    (Ze = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `rO6h3hNVW`, Phone: `JFgfElJqF`, Tablet: `yC4o7G_qJ` }),
    (Qe = ({ value: e }) =>
      v()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    ($e = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `rO6h3hNVW`,
    })),
    (Q = E(
      c(function (e, r) {
        let s = o(null),
          c = r ?? s,
          m = t(),
          { activeLocale: g, contentLocale: v, setLocale: y } = x(),
          b = F(),
          { style: S, className: E, layoutId: re, variant: D, ...O } = $e(e);
        ie(n(() => Le({}, v), [v]));
        let [k, oe] = ne(D, Ke, !1),
          j = w(Je, Pe, he, ue, Se, Ee, fe, Ae),
          M = i(P)?.isLayoutTemplate,
          N = !!i(f)?.transition?.layout,
          I = Xe(M, N),
          L = se(`vD9FPHOSQ`),
          R = A();
        return (
          te({}),
          l(P.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Z,
              primaryVariantId: `rO6h3hNVW`,
              variantClassNames: Ye,
            },
            children: u(p, {
              id: re ?? m,
              children: [
                l(Qe, {
                  value: `html body { background: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0)); }`,
                }),
                l(d.div, {
                  ...O,
                  className: w(j, `framer-1vn37vg`, E),
                  ref: c,
                  style: { ...S },
                  children: u(d.div, {
                    className: `framer-em3ujx`,
                    "data-framer-name": `Main`,
                    layout: I,
                    children: [
                      l(`div`, {
                        className: `framer-1laoy2u`,
                        children: l(`div`, {
                          className: `framer-1b721tj`,
                          "data-framer-name": `Visual`,
                          children: u(`div`, {
                            className: `framer-kufmlb`,
                            "data-framer-name": `Hero`,
                            children: [
                              u(`div`, {
                                className: `framer-1v5zqmx`,
                                "data-framer-name": `Hero Text`,
                                children: [
                                  l(_, {
                                    __fromCanvasComponent: !0,
                                    children: l(a, {
                                      children: l(`h1`, {
                                        className: `framer-styles-preset-erdl1g`,
                                        "data-styles-preset": `sBHBrQO1O`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Can AI find your website?`,
                                      }),
                                    }),
                                    className: `framer-z7i1y2`,
                                    fonts: [`Inter`],
                                    id: L,
                                    ref: R(L),
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  l(h, {
                                    breakpoint: k,
                                    overrides: {
                                      JFgfElJqF: {
                                        children: l(a, {
                                          children: u(`p`, {
                                            className: `framer-styles-preset-vn6u90`,
                                            "data-styles-preset": `kuibWYBoM`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: [
                                              `AI is changing how customers find you. LLMs like `,
                                              l(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                                },
                                                children: `ChatGPT, Perplexity, and Gemini`,
                                              }),
                                              ` now answer questions directly. Scan yours in 10 seconds.`,
                                            ],
                                          }),
                                        }),
                                      },
                                    },
                                    children: l(_, {
                                      __fromCanvasComponent: !0,
                                      children: l(a, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: [
                                            `AI is changing how customers find you. LLMs like `,
                                            l(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                              },
                                              children: `ChatGPT, Perplexity, and Gemini`,
                                            }),
                                            ` now answer questions directly and most sites aren’t ready. Scan yours in 10 seconds.`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-isnfya`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-ph591b`,
                                children: [
                                  l(Ge, {
                                    className: `framer-3omxry`,
                                    "data-border": !0,
                                    "data-framer-name": `Form Card`,
                                    children: l(ae, {
                                      action: `https://api.framer.com/forms/v1/forms/6ada378c-899d-44c9-848f-a60efeb30218/submit`,
                                      className: `framer-uegwd3`,
                                      "data-framer-name": `Form`,
                                      nodeId: `ghjaGfxrU`,
                                      submitTrackingId: `aeo-scan-submit`,
                                      children: (e) =>
                                        u(ee, {
                                          children: [
                                            u(d.div, {
                                              className: `framer-i7gkzn`,
                                              children: [
                                                u(d.label, {
                                                  className: `framer-19iwbx1`,
                                                  children: [
                                                    l(_, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(a, {
                                                        children: l(`p`, {
                                                          className: `framer-styles-preset-rhbxb3`,
                                                          "data-styles-preset": `vvG68NbwN`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                                          },
                                                          children: `Website`,
                                                        }),
                                                      }),
                                                      className: `framer-10cqzsq`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    l(T, {
                                                      className: `framer-135z6ix`,
                                                      inputName: `URL`,
                                                      placeholder: `https://yoursite.com`,
                                                      type: `text`,
                                                    }),
                                                    l(_, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(a, {
                                                        children: l(`p`, {
                                                          className: `framer-styles-preset-rhbxb3`,
                                                          "data-styles-preset": `vvG68NbwN`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102))`,
                                                          },
                                                          children: `Please enter a valid website`,
                                                        }),
                                                      }),
                                                      className: `framer-16lhibh`,
                                                      "data-framer-name": `FormError_url`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(d.div, {
                                                  className: `framer-1o55zff`,
                                                  children: [
                                                    u(d.label, {
                                                      className: `framer-1aoya8o`,
                                                      children: [
                                                        l(_, {
                                                          __fromCanvasComponent: !0,
                                                          children: l(a, {
                                                            children: l(`p`, {
                                                              className: `framer-styles-preset-rhbxb3`,
                                                              "data-styles-preset": `vvG68NbwN`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                                              },
                                                              children: `First name`,
                                                            }),
                                                          }),
                                                          className: `framer-2v4t5e`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        l(T, {
                                                          className: `framer-1x3frwk`,
                                                          inputName: `Firstname`,
                                                          placeholder: `First name`,
                                                          required: !1,
                                                          type: `text`,
                                                        }),
                                                        l(_, {
                                                          __fromCanvasComponent: !0,
                                                          children: l(a, {
                                                            children: l(`p`, {
                                                              className: `framer-styles-preset-rhbxb3`,
                                                              "data-styles-preset": `vvG68NbwN`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102))`,
                                                              },
                                                              children: `Please enter your first name`,
                                                            }),
                                                          }),
                                                          className: `framer-iprpqk`,
                                                          "data-framer-name": `FormError_firstname`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    u(d.label, {
                                                      className: `framer-zz8w94`,
                                                      children: [
                                                        l(_, {
                                                          __fromCanvasComponent: !0,
                                                          children: l(a, {
                                                            children: l(`p`, {
                                                              className: `framer-styles-preset-rhbxb3`,
                                                              "data-styles-preset": `vvG68NbwN`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                                              },
                                                              children: `Last name`,
                                                            }),
                                                          }),
                                                          className: `framer-1lv8jn4`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        l(T, {
                                                          className: `framer-1udr3a3`,
                                                          inputName: `Lastname`,
                                                          placeholder: `Last name`,
                                                          required: !1,
                                                          type: `text`,
                                                        }),
                                                        l(_, {
                                                          __fromCanvasComponent: !0,
                                                          children: l(a, {
                                                            children: l(`p`, {
                                                              className: `framer-styles-preset-rhbxb3`,
                                                              "data-styles-preset": `vvG68NbwN`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102))`,
                                                              },
                                                              children: `Please enter your last name`,
                                                            }),
                                                          }),
                                                          className: `framer-1xecgxe`,
                                                          "data-framer-name": `FormError_lastname`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                u(d.label, {
                                                  className: `framer-gpwunc`,
                                                  children: [
                                                    l(_, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(a, {
                                                        children: l(`p`, {
                                                          className: `framer-styles-preset-rhbxb3`,
                                                          "data-styles-preset": `vvG68NbwN`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                                          },
                                                          children: `Business email`,
                                                        }),
                                                      }),
                                                      className: `framer-1x11gw`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    l(T, {
                                                      className: `framer-1bllry7`,
                                                      inputName: `Email`,
                                                      placeholder: `you@company.com`,
                                                      type: `email`,
                                                    }),
                                                    l(_, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(a, {
                                                        children: l(`p`, {
                                                          className: `framer-styles-preset-rhbxb3`,
                                                          "data-styles-preset": `vvG68NbwN`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102))`,
                                                          },
                                                          children: `Please enter a valid work email`,
                                                        }),
                                                      }),
                                                      className: `framer-hkyb7k`,
                                                      "data-framer-name": `FormError_email`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            l(h, {
                                              breakpoint: k,
                                              overrides: {
                                                JFgfElJqF: {
                                                  width: `calc(min(${b?.width || `100vw`}, 1200px) - 80px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    120 +
                                                    221.8 +
                                                    0 +
                                                    0 +
                                                    20 +
                                                    0 +
                                                    0 +
                                                    508.8,
                                                },
                                              },
                                              children: l(ce, {
                                                height: 35,
                                                width: `419px`,
                                                y:
                                                  (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  160 +
                                                  241.8 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  381.6,
                                                children: l(le, {
                                                  className: `framer-accg8k-container`,
                                                  nodeId: `EgRMdd7s8`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `yTsg6HFKI`,
                                                  children: l(J, {
                                                    height: `100%`,
                                                    id: `EgRMdd7s8`,
                                                    layoutId: `EgRMdd7s8`,
                                                    rHL5j0Crk: `Scan your site`,
                                                    style: { width: `100%` },
                                                    type: `submit`,
                                                    variant: Ze(`jS7lDpYHW`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    }),
                                  }),
                                  l(_, {
                                    __fromCanvasComponent: !0,
                                    children: l(a, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-bbixn5`,
                                        "data-styles-preset": `opnE6P6z1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: [
                                          l(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            },
                                            children: `This assessment scans one URL and uses AI`,
                                          }),
                                          ` — results may not be perfect. Use them as a guide, not a final answer. Scores reflect our own methodology and may differ from other AEO reports.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-h6lzh3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      l(`div`, {
                        className: `framer-14obonm`,
                        children: l(`div`, {
                          className: `framer-n3gamb`,
                          "data-framer-name": `What is AEO`,
                          children: u(`div`, {
                            className: `framer-ofvtqf`,
                            children: [
                              l(`div`, {
                                className: `framer-1axyd5d`,
                                children: l(_, {
                                  __fromCanvasComponent: !0,
                                  children: l(a, {
                                    children: u(`h2`, {
                                      className: `framer-styles-preset-fbtpvo`,
                                      "data-styles-preset": `qRN7MgZKk`,
                                      dir: `auto`,
                                      children: [
                                        `AI doesn’t rank pages.`,
                                        l(`br`, {}),
                                        `It picks answers.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-z0if7k`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              u(`div`, {
                                className: `framer-m2byrl`,
                                children: [
                                  l(_, {
                                    __fromCanvasComponent: !0,
                                    children: l(a, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: [
                                          `Answer Engine Optimization (AEO) is the practice of making your content easy for AI systems like `,
                                          l(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            },
                                            children: `ChatGPT, Perplexity, and Gemini`,
                                          }),
                                          ` to find, understand, and quote. As more people get answers directly from AI instead of clicking search results, being invisible to AI means being invisible to your audience.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-msvq59`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  u(`div`, {
                                    className: `framer-16zdtvu`,
                                    children: [
                                      l(`div`, {
                                        className: `framer-sszjkv`,
                                        children: u(`div`, {
                                          className: `framer-inmvpe`,
                                          children: [
                                            l(_, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`h3`, {
                                                  className: `framer-styles-preset-ojsfn5`,
                                                  "data-styles-preset": `VQBQVu8qk`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `AI answers are replacing search clicks`,
                                                }),
                                              }),
                                              className: `framer-2f1d8l`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(_, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-vn6u90`,
                                                  "data-styles-preset": `kuibWYBoM`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `Over 60% of searches now end without a click. If AI doesn’t surface your site, users may never find you at all.`,
                                                }),
                                              }),
                                              className: `framer-d36joi`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1hohxff`,
                                        children: u(`div`, {
                                          className: `framer-70ynz1`,
                                          children: [
                                            l(_, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`h3`, {
                                                  className: `framer-styles-preset-ojsfn5`,
                                                  "data-styles-preset": `VQBQVu8qk`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `Structure and trust signals matter more than ever`,
                                                }),
                                              }),
                                              className: `framer-kok5to`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(_, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: u(`p`, {
                                                  className: `framer-styles-preset-vn6u90`,
                                                  "data-styles-preset": `kuibWYBoM`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: [
                                                    `AI models favor pages with clear metadata, structured content, and authoritative sources. Framer’s `,
                                                    l(C, {
                                                      href: { webPageId: `EgIhdvdlp` },
                                                      motionChild: !0,
                                                      nodeId: `OvxHvSHRI`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `yTsg6HFKI`,
                                                      smoothScroll: !1,
                                                      children: l(d.a, {
                                                        className: `framer-styles-preset-8rmpkv`,
                                                        "data-styles-preset": `uT_bT0pMG`,
                                                        children: `SEO`,
                                                      }),
                                                    }),
                                                    ` tools and `,
                                                    l(C, {
                                                      href: { webPageId: `Up8izajbI` },
                                                      motionChild: !0,
                                                      nodeId: `OvxHvSHRI`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `yTsg6HFKI`,
                                                      smoothScroll: !1,
                                                      children: l(d.a, {
                                                        className: `framer-styles-preset-8rmpkv`,
                                                        "data-styles-preset": `uT_bT0pMG`,
                                                        children: `CMS`,
                                                      }),
                                                    }),
                                                    ` help keep those signals clean as your site grows.`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-1xjl32m`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-y8dwqo`,
                                        children: u(`div`, {
                                          className: `framer-1nzqncf`,
                                          children: [
                                            l(_, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`h3`, {
                                                  className: `framer-styles-preset-ojsfn5`,
                                                  "data-styles-preset": `VQBQVu8qk`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `Most websites aren’t ready — yours can be`,
                                                }),
                                              }),
                                              className: `framer-1v4rvkr`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(_, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-vn6u90`,
                                                  "data-styles-preset": `kuibWYBoM`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `Most sites still lack the basic signals AI needs. A few targeted fixes can move you from invisible to frequently cited.`,
                                                }),
                                              }),
                                              className: `framer-12vwd0e`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
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
                        }),
                      }),
                    ],
                  }),
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-bo1UT.framer-1duldaz, .framer-bo1UT .framer-1duldaz { display: block; }`,
        `.framer-bo1UT.framer-1vn37vg { align-content: center; align-items: center; background-color: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-bo1UT .framer-em3ujx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-1laoy2u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-bo1UT .framer-1b721tj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-kufmlb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1200px; padding: 160px 48px 80px 48px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-bo1UT .framer-1v5zqmx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 720px; z-index: 1; }`,
        `.framer-bo1UT .framer-z7i1y2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-isnfya { flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre-wrap; width: 496px; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-bo1UT .framer-ph591b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-3omxry { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #141414); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; --corner-shape-fallback: 0.752; align-content: flex-start; align-items: flex-start; background-color: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000); border-bottom-left-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 459px; }`,
        `.framer-bo1UT .framer-uegwd3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-i7gkzn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-19iwbx1, .framer-bo1UT .framer-gpwunc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-10cqzsq, .framer-bo1UT .framer-16lhibh, .framer-bo1UT .framer-2v4t5e, .framer-bo1UT .framer-iprpqk, .framer-bo1UT .framer-1lv8jn4, .framer-bo1UT .framer-1xecgxe { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-bo1UT .framer-135z6ix, .framer-bo1UT .framer-1x3frwk, .framer-bo1UT .framer-1udr3a3 { --corner-shape-fallback: 0.752; --framer-input-background: var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.5); --framer-input-focused-border-color: var(--token-3ead4217-f562-484f-ae35-d367de8b213a, #0099ff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, #ffffff); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.4em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 10px 15px 10px 15px; --framer-input-placeholder-color: rgba(255, 255, 255, 0.4); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-1o55zff { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-1aoya8o, .framer-bo1UT .framer-zz8w94 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bo1UT .framer-1x11gw, .framer-bo1UT .framer-hkyb7k { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-bo1UT .framer-1bllry7 { --corner-shape-fallback: 0.752; --framer-input-background: var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(17px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.5); --framer-input-focused-border-color: var(--token-3ead4217-f562-484f-ae35-d367de8b213a, #0099ff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, #ffffff); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.4em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 10px 15px 10px 15px; --framer-input-placeholder-color: var(--token-c728f732-7c78-48e8-94a1-513a91a25137, rgba(255, 255, 255, 0.4)); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-accg8k-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-h6lzh3 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 380px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-bo1UT .framer-14obonm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-n3gamb { align-content: flex-start; align-items: flex-start; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1200px; padding: 80px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-ofvtqf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-1axyd5d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-bo1UT .framer-z0if7k { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bo1UT .framer-m2byrl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 10px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-bo1UT .framer-msvq59, .framer-bo1UT .framer-2f1d8l, .framer-bo1UT .framer-d36joi, .framer-bo1UT .framer-kok5to, .framer-bo1UT .framer-1xjl32m, .framer-bo1UT .framer-1v4rvkr { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-16zdtvu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-sszjkv, .framer-bo1UT .framer-1hohxff, .framer-bo1UT .framer-y8dwqo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bo1UT .framer-inmvpe { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bo1UT .framer-70ynz1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bo1UT .framer-1nzqncf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bo1UT .framer-12vwd0e { --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; position: relative; width: 510px; }`,
        ...Me,
        ...pe,
        ..._e,
        ...be,
        ...we,
        ...ge,
        ...Oe,
        `.framer-bo1UT[data-border="true"]::after, .framer-bo1UT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bo1UT.framer-1vn37vg { width: 810px; } .framer-bo1UT .framer-1v5zqmx { width: 470px; } .framer-bo1UT .framer-isnfya { max-width: 380px; } .framer-bo1UT .framer-n3gamb { padding: 80px 0px 80px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-bo1UT.framer-1vn37vg { width: 390px; } .framer-bo1UT .framer-kufmlb { gap: 25px; padding: 120px 20px 50px 20px; } .framer-bo1UT .framer-1v5zqmx { gap: 5px; width: 100%; } .framer-bo1UT .framer-isnfya { max-width: 310px; } .framer-bo1UT .framer-3omxry { width: 100%; } .framer-bo1UT .framer-1o55zff { flex-direction: column; } .framer-bo1UT .framer-1aoya8o, .framer-bo1UT .framer-zz8w94, .framer-bo1UT .framer-1axyd5d { flex: none; width: 100%; } .framer-bo1UT .framer-h6lzh3 { max-width: 290px; width: 100%; } .framer-bo1UT .framer-ofvtqf { flex-direction: column; gap: 20px; } .framer-bo1UT .framer-m2byrl { flex: none; gap: 50px; padding: 0px; width: 100%; } .framer-bo1UT .framer-inmvpe, .framer-bo1UT .framer-70ynz1, .framer-bo1UT .framer-1nzqncf { gap: 3px; }}`,
      ],
      `framer-bo1UT`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 2416, width: 1200 }),
    g(
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
          ],
        },
        ...X,
        ...O(Ne),
        ...O(me),
        ...O(ve),
        ...O(xe),
        ...O(Te),
        ...O(L),
        ...O(ke),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => b([() => k(J, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameryTsg6HFKI`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"yC4o7G_qJ":{"layout":["fixed","auto"]},"JFgfElJqF":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerResolvesOwnDefaults: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerTrackingIds: `[{"id":"_1o5xkqh","trackingId":"aeo-scan-submit","type":"form_submit","nodeId":"ghjaGfxrU"}]`,
            framerIntrinsicHeight: `2416`,
            framerScrollSections: `{"vD9FPHOSQ":{"pattern":":vD9FPHOSQ","name":"switch"}}`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, qe as queryParamNames };
//# sourceMappingURL=N8eXobgXeHG9lu23TDygnF5LM6PeU2PtYBZ8bNC1dpo.Bp7JuTAS.mjs.map
