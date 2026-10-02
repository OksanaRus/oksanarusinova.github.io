import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  H as r,
  O as i,
  P as a,
  R as o,
  S as s,
  W as c,
  c as l,
  f as u,
  h as d,
  l as ee,
  m as te,
  s as f,
  u as p,
} from "./react.hMW2PJqY.mjs";
import { V as m, c as h, o as ne, r as g } from "./motion.CaZjHSpz.mjs";
import {
  A as _,
  En as re,
  F as v,
  Ft as ie,
  G as y,
  H as b,
  Ht as ae,
  I as x,
  Jt as S,
  K as C,
  Kt as oe,
  Lt as se,
  Ot as w,
  Qt as ce,
  T as le,
  Ut as T,
  Z as E,
  Zt as ue,
  _ as de,
  _n as D,
  bn as O,
  c as k,
  cn as fe,
  ct as A,
  en as pe,
  et as j,
  g as me,
  gn as he,
  ht as M,
  i as ge,
  j as _e,
  k as ve,
  kn as ye,
  kt as be,
  ln as xe,
  lt as N,
  n as Se,
  o as P,
  ot as F,
  s as I,
  t as Ce,
  un as we,
  v as Te,
  wn as Ee,
  wt as De,
  x as L,
  y as Oe,
  z as ke,
  zt as Ae,
} from "./framer.CuDPj9y9.mjs";
import {
  _ as je,
  a as Me,
  b as Ne,
  c as Pe,
  d as Fe,
  f as Ie,
  g as Le,
  h as Re,
  i as ze,
  l as Be,
  m as Ve,
  n as He,
  o as Ue,
  p as We,
  r as Ge,
  s as Ke,
  t as qe,
  u as Je,
  v as Ye,
  y as Xe,
} from "./shared.DbR_nTE0.mjs";
import { r as Ze, t as Qe } from "./OPnii3S3H.BvtBHx0b.mjs";
import { n as $e, t as et } from "./p7rJCFjrH.BG9qU99m.mjs";
import { n as tt, t as nt } from "./HoRfFp9QY.CmxrPvv7.mjs";
import { r as rt, t as it } from "./fpJV3zp1q.BBYwyjT7.mjs";
import { n as at, t as ot } from "./GM_4jaOoY.B1Q57_0d.mjs";
import { i as st, n as ct, r as lt, t as ut } from "./qRN7MgZKk.DvYJUCYH.mjs";
import { n as dt, t as ft } from "./yvN7Q2UKc.DPEr_Xop.mjs";
import { n as pt, t as R } from "./AmW8zIqzt.CpsKyQmV.mjs";
import { n as mt, t as ht } from "./oKltOl1Go.DrMsj-TA.mjs";
import { i as gt, n as _t, r as vt, t as yt } from "./uT_bT0pMG.Dx8mPC7G.mjs";
import { n as bt, t as xt } from "./dNKFce39i.sjPpmf6v.mjs";
import { n as St, t as Ct } from "./hADclDOPA.CIF5o4ap.mjs";
import { i as wt, n as Tt, r as Et, t as Dt } from "./dj5AkQsfq.B4e_WiBt.mjs";
import { n as Ot, t as kt } from "./Px4Xi5vXE.C584K5G9.mjs";
import { i as At, n as jt, r as Mt, t as Nt } from "./lauDPxbHX.D-HTprcT.mjs";
import { n as Pt, t as Ft } from "./jPUWJj7cj.D7rnbdV0.mjs";
import { n as It, t as Lt } from "./ZUF3ty2Ht.LZ4Nfh5J.mjs";
import { n as Rt, t as zt } from "./U5DY31N9J.CN8KXRyp.mjs";
import Bt, { t as Vt } from "./SDo3IBj1SzWi-mpmug7xUuECG1NVnGojavj1a87sYa0.KmxurH7R.mjs";
function Ht(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  z,
  un = e(() => {
    (l(),
      M(),
      g(),
      i(),
      St(),
      wt(),
      ze(),
      gt(),
      Ot(),
      (Ut = F(kt)),
      (Wt = F(Ct)),
      (Gt = Ee(O(m.div))),
      (Kt = [`aCeUyUAvr`, `FFaHqc4rm`, `SJye0Gct7`, `vIixlUXPD`]),
      (qt = `framer-me44A`),
      (Jt = {
        aCeUyUAvr: `framer-v-18smxlq`,
        FFaHqc4rm: `framer-v-6lyrye`,
        SJye0Gct7: `framer-v-18jpy72`,
        vIixlUXPD: `framer-v-19htqi5`,
      }),
      (Yt = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Xt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Zt = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (Qt = { bounce: 0, delay: 0.2, duration: 2, type: `spring` }),
      ($t = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qt,
        x: 0,
        y: 0,
      }),
      (en = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (tn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qt,
        x: 0,
        y: 0,
      }),
      (nn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (rn = ({ value: e, children: t }) => {
        let r = a(h),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(h.Provider, { value: o, children: t });
      }),
      (an = { Error: `vIixlUXPD`, Form: `aCeUyUAvr`, Loading: `FFaHqc4rm`, Success: `SJye0Gct7` }),
      (on = m.create(o)),
      (sn = { Horizontal: `row`, Vertical: `column` }),
      (cn = ({ height: e, id: t, layout: n, width: r, ...i }) => ({
        ...i,
        variant: an[i.variant] ?? i.variant ?? `aCeUyUAvr`,
        Y21lLUbk1: sn[n] ?? n ?? i.Y21lLUbk1 ?? `row`,
      })),
      (ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = D(
        te(function (e, n) {
          let r = s(null),
            i = n ?? r,
            a = t(),
            { activeLocale: c, contentLocale: l, setLocale: u } = ce();
          Ae();
          let { style: d, className: te, layoutId: h, variant: g, Y21lLUbk1: _, ...re } = cn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: ae,
              gestureVariant: S,
              isLoading: C,
              setGestureState: oe,
              setVariant: se,
              variants: w,
            } = he({
              cycleOrder: Kt,
              defaultVariant: `aCeUyUAvr`,
              ref: i,
              variant: g,
              variantClassNames: Jt,
            }),
            T = ln(e, w),
            { activeVariantCallback: ue, delay: D } = ie(v),
            O = ue(async (...e) => {
              se(`FFaHqc4rm`);
            }),
            k = ue(async (...e) => {
              se(`SJye0Gct7`);
            }),
            fe = ue(async (...e) => {
              se(`vIixlUXPD`);
            }),
            A = E(qt, Dt, yt, qe),
            pe = () => v === `SJye0Gct7`;
          return f(ne, {
            id: h ?? a,
            children: f(on, {
              animate: w,
              initial: !1,
              children: f(rn, {
                value: Yt,
                children: p(m.div, {
                  ...re,
                  ...ae,
                  className: E(A, `framer-18smxlq`, te, y),
                  "data-framer-name": `Form`,
                  layoutDependency: T,
                  layoutId: `aCeUyUAvr`,
                  ref: i,
                  style: { ...d },
                  ...Ht(
                    {
                      FFaHqc4rm: { "data-framer-name": `Loading` },
                      SJye0Gct7: { "data-framer-name": `Success` },
                      vIixlUXPD: { "data-framer-name": `Error` },
                    },
                    v,
                    S
                  ),
                  children: [
                    f(me, {
                      action: `https://api.framer.com/forms/v1/forms/85293363-aee3-4c50-ad93-8dca85de56e5/submit`,
                      className: `framer-1ttv0t`,
                      "data-highlight": !0,
                      layoutDependency: T,
                      layoutId: `rBqAwhglm`,
                      nodeId: `rBqAwhglm`,
                      onError: fe,
                      onLoading: O,
                      onSuccess: k,
                      style: { opacity: 1 },
                      variants: { SJye0Gct7: { opacity: 0 }, vIixlUXPD: { opacity: 0 } },
                      ...Ht(
                        { SJye0Gct7: { onLoading: void 0 }, vIixlUXPD: { onLoading: void 0 } },
                        v,
                        S
                      ),
                      children: (e) =>
                        p(ee, {
                          children: [
                            f(m.div, {
                              className: `framer-1uz5249`,
                              layoutDependency: T,
                              layoutId: `lgTupUZba`,
                              style: { opacity: 1 },
                              variants: {
                                FFaHqc4rm: { opacity: 0.5 },
                                SJye0Gct7: { opacity: 1 },
                                vIixlUXPD: { opacity: 1 },
                              },
                              children: p(m.div, {
                                className: `framer-1t9tftt`,
                                layoutDependency: T,
                                layoutId: `FSpA28Gf0`,
                                children: [
                                  p(m.div, {
                                    className: `framer-1xnblbu`,
                                    "data-framer-name": `Person`,
                                    layoutDependency: T,
                                    layoutId: `T8gQiCarK`,
                                    style: {
                                      "--1te1p9b": _ === `column` ? void 0 : `1 0 0px`,
                                      "--1v1phff": _,
                                      "--h4zw5s": _ === `column` ? `100%` : `1px`,
                                    },
                                    children: [
                                      p(m.label, {
                                        className: `framer-2wxrkx`,
                                        layoutDependency: T,
                                        layoutId: `o7pjQMBji`,
                                        children: [
                                          f(x, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: f(m.h6, {
                                                className: `framer-styles-preset-1otej31`,
                                                "data-styles-preset": `dj5AkQsfq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                                },
                                                children: `Full name`,
                                              }),
                                            }),
                                            className: `framer-196yajm`,
                                            fonts: [`Inter`],
                                            layoutDependency: T,
                                            layoutId: `QO9QOtGzg`,
                                            style: {
                                              "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(de, {
                                            autoFocus: !1,
                                            className: `framer-1gxuwtn`,
                                            inputName: `Full name`,
                                            layoutDependency: T,
                                            layoutId: `J6F62usGS`,
                                            placeholder: `Full name`,
                                            required: !0,
                                            style: {
                                              "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                              "--framer-input-border-bottom-width": `1px`,
                                              "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                              "--framer-input-border-left-width": `1px`,
                                              "--framer-input-border-radius-bottom-left": `10px`,
                                              "--framer-input-border-radius-bottom-right": `10px`,
                                              "--framer-input-border-radius-top-left": `10px`,
                                              "--framer-input-border-radius-top-right": `10px`,
                                              "--framer-input-border-right-width": `1px`,
                                              "--framer-input-border-style": `solid`,
                                              "--framer-input-border-top-width": `1px`,
                                              "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.4)`,
                                            },
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      p(m.label, {
                                        className: `framer-64a2w3`,
                                        layoutDependency: T,
                                        layoutId: `PWAMhZFDG`,
                                        children: [
                                          f(x, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: f(m.h6, {
                                                className: `framer-styles-preset-1otej31`,
                                                "data-styles-preset": `dj5AkQsfq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                                },
                                                children: `Email`,
                                              }),
                                            }),
                                            className: `framer-1x9l6jd`,
                                            fonts: [`Inter`],
                                            layoutDependency: T,
                                            layoutId: `dnZcxVVQ5`,
                                            style: {
                                              "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(de, {
                                            className: `framer-1fvptty`,
                                            inputName: `Email`,
                                            layoutDependency: T,
                                            layoutId: `sGY2TuhDn`,
                                            placeholder: `Email`,
                                            required: !0,
                                            style: {
                                              "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                              "--framer-input-border-bottom-width": `1px`,
                                              "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                              "--framer-input-border-left-width": `1px`,
                                              "--framer-input-border-radius-bottom-left": `10px`,
                                              "--framer-input-border-radius-bottom-right": `10px`,
                                              "--framer-input-border-radius-top-left": `10px`,
                                              "--framer-input-border-radius-top-right": `10px`,
                                              "--framer-input-border-right-width": `1px`,
                                              "--framer-input-border-style": `solid`,
                                              "--framer-input-border-top-width": `1px`,
                                              "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.4)`,
                                            },
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  p(m.div, {
                                    className: `framer-1nql7t2`,
                                    "data-framer-name": `Team`,
                                    layoutDependency: T,
                                    layoutId: `Q611eAJrV`,
                                    style: {
                                      "--1te1p9b": _ === `column` ? void 0 : `1 0 0px`,
                                      "--1v1phff": _,
                                      "--h4zw5s": _ === `column` ? `100%` : `1px`,
                                    },
                                    children: [
                                      p(m.label, {
                                        className: `framer-8xu5nb`,
                                        layoutDependency: T,
                                        layoutId: `wQ39uGl8w`,
                                        children: [
                                          f(m.div, {
                                            className: `framer-7pjzo0`,
                                            layoutDependency: T,
                                            layoutId: `fRhkwHqyw`,
                                            children: f(x, {
                                              __fromCanvasComponent: !0,
                                              children: f(o, {
                                                children: p(m.h6, {
                                                  className: `framer-styles-preset-1otej31`,
                                                  "data-styles-preset": `dj5AkQsfq`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                                  },
                                                  children: [
                                                    `Are you an `,
                                                    f(le, {
                                                      href: `https://www.framer.com/experts/`,
                                                      motionChild: !0,
                                                      nodeId: `DAhFFvzUZ`,
                                                      openInNewTab: !0,
                                                      relValues: [],
                                                      scopeId: `IvFZ9rf8J`,
                                                      smoothScroll: !1,
                                                      children: f(m.a, {
                                                        className: `framer-styles-preset-8rmpkv`,
                                                        "data-styles-preset": `uT_bT0pMG`,
                                                        children: `Expert`,
                                                      }),
                                                    }),
                                                    ` or a `,
                                                    f(le, {
                                                      href: { webPageId: `k_d8t7k9Z` },
                                                      motionChild: !0,
                                                      nodeId: `DAhFFvzUZ`,
                                                      openInNewTab: !0,
                                                      relValues: [],
                                                      scopeId: `IvFZ9rf8J`,
                                                      smoothScroll: !1,
                                                      children: f(m.a, {
                                                        className: `framer-styles-preset-8rmpkv`,
                                                        "data-styles-preset": `uT_bT0pMG`,
                                                        children: `Creator`,
                                                      }),
                                                    }),
                                                    `?`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-12h185d`,
                                              fonts: [`Inter`],
                                              layoutDependency: T,
                                              layoutId: `DAhFFvzUZ`,
                                              style: {
                                                "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          f(Te, {
                                            className: `framer-54iov6`,
                                            inputName: `Experience`,
                                            layoutDependency: T,
                                            layoutId: `Y8P0tPclm`,
                                            required: !0,
                                            selectOptions: [
                                              { title: `Expert`, type: `option`, value: `Expert` },
                                              {
                                                title: `Creator`,
                                                type: `option`,
                                                value: `Creator`,
                                              },
                                            ],
                                            style: {
                                              "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                              "--framer-input-border-bottom-width": `1px`,
                                              "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                              "--framer-input-border-left-width": `1px`,
                                              "--framer-input-border-radius-bottom-left": `10px`,
                                              "--framer-input-border-radius-bottom-right": `10px`,
                                              "--framer-input-border-radius-top-left": `10px`,
                                              "--framer-input-border-radius-top-right": `10px`,
                                              "--framer-input-border-right-width": `1px`,
                                              "--framer-input-border-style": `solid`,
                                              "--framer-input-border-top-width": `1px`,
                                              "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-invalid-text-color": `rgb(153, 153, 153)`,
                                            },
                                          }),
                                        ],
                                      }),
                                      p(m.label, {
                                        className: `framer-9n858o`,
                                        layoutDependency: T,
                                        layoutId: `Fd5ALjst4`,
                                        children: [
                                          f(x, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: f(m.h6, {
                                                className: `framer-styles-preset-1otej31`,
                                                "data-styles-preset": `dj5AkQsfq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                                },
                                                children: `City`,
                                              }),
                                            }),
                                            className: `framer-19h56`,
                                            fonts: [`Inter`],
                                            layoutDependency: T,
                                            layoutId: `CYV_UEM4A`,
                                            style: {
                                              "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(de, {
                                            className: `framer-1ew4es9`,
                                            inputName: `Event city`,
                                            layoutDependency: T,
                                            layoutId: `fveTPYMj6`,
                                            placeholder: `City`,
                                            required: !0,
                                            style: {
                                              "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                              "--framer-input-border-bottom-width": `1px`,
                                              "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                              "--framer-input-border-left-width": `1px`,
                                              "--framer-input-border-radius-bottom-left": `10px`,
                                              "--framer-input-border-radius-bottom-right": `10px`,
                                              "--framer-input-border-radius-top-left": `10px`,
                                              "--framer-input-border-radius-top-right": `10px`,
                                              "--framer-input-border-right-width": `1px`,
                                              "--framer-input-border-style": `solid`,
                                              "--framer-input-border-top-width": `1px`,
                                              "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.4)`,
                                            },
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  p(m.div, {
                                    className: `framer-13w042p`,
                                    "data-framer-name": `Team`,
                                    layoutDependency: T,
                                    layoutId: `RO9SzeXPf`,
                                    style: {
                                      "--1te1p9b": _ === `column` ? void 0 : `1 0 0px`,
                                      "--1v1phff": _,
                                      "--h4zw5s": _ === `column` ? `100%` : `1px`,
                                    },
                                    children: [
                                      p(m.label, {
                                        className: `framer-17xinuw`,
                                        layoutDependency: T,
                                        layoutId: `QQftTVm5m`,
                                        children: [
                                          f(m.div, {
                                            className: `framer-1vunfxc`,
                                            layoutDependency: T,
                                            layoutId: `tT01HxiPl`,
                                            children: f(x, {
                                              __fromCanvasComponent: !0,
                                              children: f(o, {
                                                children: f(m.h6, {
                                                  className: `framer-styles-preset-1otej31`,
                                                  "data-styles-preset": `dj5AkQsfq`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Date`,
                                                }),
                                              }),
                                              className: `framer-5ak1tc`,
                                              fonts: [`Inter`],
                                              layoutDependency: T,
                                              layoutId: `hE4cZ64Fb`,
                                              style: {
                                                "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          f(de, {
                                            className: `framer-u8thax`,
                                            inputName: `Date`,
                                            layoutDependency: T,
                                            layoutId: `NVvh8lFJ1`,
                                            placeholder: `City`,
                                            required: !0,
                                            style: {
                                              "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                              "--framer-input-border-bottom-width": `1px`,
                                              "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                              "--framer-input-border-left-width": `1px`,
                                              "--framer-input-border-radius-bottom-left": `10px`,
                                              "--framer-input-border-radius-bottom-right": `10px`,
                                              "--framer-input-border-radius-top-left": `10px`,
                                              "--framer-input-border-radius-top-right": `10px`,
                                              "--framer-input-border-right-width": `1px`,
                                              "--framer-input-border-style": `solid`,
                                              "--framer-input-border-top-width": `1px`,
                                              "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.4)`,
                                            },
                                            type: `date`,
                                          }),
                                        ],
                                      }),
                                      p(m.label, {
                                        className: `framer-6i1bex`,
                                        layoutDependency: T,
                                        layoutId: `AS5WADKFu`,
                                        children: [
                                          f(x, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: f(m.h6, {
                                                className: `framer-styles-preset-1otej31`,
                                                "data-styles-preset": `dj5AkQsfq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                                },
                                                children: `Time`,
                                              }),
                                            }),
                                            className: `framer-maet92`,
                                            fonts: [`Inter`],
                                            layoutDependency: T,
                                            layoutId: `z8etcMUkH`,
                                            style: {
                                              "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(de, {
                                            className: `framer-a00efk`,
                                            inputName: `Time`,
                                            layoutDependency: T,
                                            layoutId: `kHVi6EQXl`,
                                            placeholder: `City`,
                                            required: !0,
                                            style: {
                                              "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                              "--framer-input-border-bottom-width": `1px`,
                                              "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                              "--framer-input-border-left-width": `1px`,
                                              "--framer-input-border-radius-bottom-left": `10px`,
                                              "--framer-input-border-radius-bottom-right": `10px`,
                                              "--framer-input-border-radius-top-left": `10px`,
                                              "--framer-input-border-radius-top-right": `10px`,
                                              "--framer-input-border-right-width": `1px`,
                                              "--framer-input-border-style": `solid`,
                                              "--framer-input-border-top-width": `1px`,
                                              "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.4)`,
                                            },
                                            type: `time`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  f(m.div, {
                                    className: `framer-jozsfm`,
                                    "data-framer-name": `Team`,
                                    layoutDependency: T,
                                    layoutId: `vcyiNzUrw`,
                                    style: {
                                      "--1te1p9b": _ === `column` ? void 0 : `1 0 0px`,
                                      "--1v1phff": _,
                                      "--h4zw5s": _ === `column` ? `100%` : `1px`,
                                    },
                                    children: p(m.label, {
                                      className: `framer-bsnw6u`,
                                      layoutDependency: T,
                                      layoutId: `dIqGQzEJu`,
                                      children: [
                                        f(x, {
                                          __fromCanvasComponent: !0,
                                          children: f(o, {
                                            children: f(m.h6, {
                                              className: `framer-styles-preset-1otej31`,
                                              "data-styles-preset": `dj5AkQsfq`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                              },
                                              children: `Community profile URL`,
                                            }),
                                          }),
                                          className: `framer-1yhy68h`,
                                          fonts: [`Inter`],
                                          layoutDependency: T,
                                          layoutId: `LVGX24DSk`,
                                          style: {
                                            "--extracted-1w1cjl5": `rgb(255, 255, 255)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(de, {
                                          className: `framer-1ei5szj`,
                                          inputName: `Profile URL`,
                                          layoutDependency: T,
                                          layoutId: `uI686kl6u`,
                                          placeholder: `https://www.framer.com/@yourname/`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.05))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `var(--token-bed18f81-9cf1-4e2e-871f-69719f53f1d4, rgba(255, 255, 255, 0.1))`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `10px`,
                                            "--framer-input-border-radius-bottom-right": `10px`,
                                            "--framer-input-border-radius-top-left": `10px`,
                                            "--framer-input-border-radius-top-right": `10px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-d4634443-ffec-443d-a754-10b0a24f2eba, rgb(255, 255, 255))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.4)`,
                                          },
                                          type: `url`,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            f(P, {
                              height: 35,
                              children: f(ke, {
                                className: `framer-12796qd-container`,
                                layoutDependency: T,
                                layoutId: `odgf4lsbi-container`,
                                nodeId: `odgf4lsbi`,
                                rendersWithMotion: !0,
                                scopeId: `IvFZ9rf8J`,
                                children: f(kt, {
                                  height: `100%`,
                                  id: `odgf4lsbi`,
                                  layoutId: `odgf4lsbi`,
                                  lgAwcZeds: `Submit`,
                                  style: { height: `100%` },
                                  type: `submit`,
                                  variant: Zt(
                                    e,
                                    {
                                      error: `f_2_3e7VC`,
                                      pending: `ZbjufnIrY`,
                                      success: `f_2_3e7VC`,
                                    },
                                    Xt(`f_2_3e7VC`)
                                  ),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    pe() &&
                      p(Gt, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 0,
                        animate: $t,
                        className: `framer-136qlqz`,
                        "data-framer-appear-id": `136qlqz`,
                        "data-framer-name": `Modal`,
                        initial: en,
                        layoutDependency: T,
                        layoutId: `TJLL1XS92`,
                        optimized: !0,
                        style: {
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          opacity: 0,
                        },
                        variants: { SJye0Gct7: { opacity: 1 } },
                        ...Ht(
                          { SJye0Gct7: { __targetOpacity: 1, animate: tn, initial: nn } },
                          v,
                          S
                        ),
                        children: [
                          f(Ct, {
                            animated: !0,
                            className: `framer-a3edod`,
                            layoutDependency: T,
                            layoutId: `bM4ilKr3T`,
                            style: {
                              "--17kkcf8": `rgba(0, 0, 0, 0)`,
                              "--1iwhep7": 2,
                              "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                            },
                          }),
                          p(m.div, {
                            className: `framer-9lgsae`,
                            "data-framer-name": `Text`,
                            layoutDependency: T,
                            layoutId: `AgQOa_XIn`,
                            children: [
                              f(x, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(m.p, {
                                    className: `framer-styles-preset-vn6u90`,
                                    "data-styles-preset": `kuibWYBoM`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: f(m.em, { children: `Thanks` }),
                                  }),
                                }),
                                className: `framer-1vsid6h`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: T,
                                layoutId: `pOuTvVcx6`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(x, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: p(m.p, {
                                    className: `framer-styles-preset-vn6u90`,
                                    "data-styles-preset": `kuibWYBoM`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: [
                                      `We review your meetup.`,
                                      f(m.br, {}),
                                      `You’ll hear from us within a few days.`,
                                    ],
                                  }),
                                }),
                                className: `framer-e52e9e`,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `qP3ZQ1fqp`,
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
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-me44A.framer-skl1ct, .framer-me44A .framer-skl1ct { display: block; }`,
          `.framer-me44A.framer-18smxlq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 450px; }`,
          `.framer-me44A .framer-1ttv0t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-me44A .framer-1uz5249 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-me44A .framer-1t9tftt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-me44A .framer-1xnblbu, .framer-me44A .framer-1nql7t2, .framer-me44A .framer-13w042p, .framer-me44A .framer-jozsfm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: var(--1v1phff); flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-me44A .framer-2wxrkx, .framer-me44A .framer-64a2w3, .framer-me44A .framer-8xu5nb, .framer-me44A .framer-9n858o, .framer-me44A .framer-17xinuw, .framer-me44A .framer-6i1bex, .framer-me44A .framer-bsnw6u { align-content: flex-start; align-items: flex-start; display: flex; flex: var(--1te1p9b); flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: var(--h4zw5s); }`,
          `.framer-me44A .framer-196yajm, .framer-me44A .framer-1x9l6jd, .framer-me44A .framer-12h185d, .framer-me44A .framer-19h56, .framer-me44A .framer-5ak1tc, .framer-me44A .framer-maet92, .framer-me44A .framer-1yhy68h { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-me44A .framer-1gxuwtn, .framer-me44A .framer-1fvptty, .framer-me44A .framer-1ew4es9, .framer-me44A .framer-u8thax, .framer-me44A .framer-a00efk, .framer-me44A .framer-1ei5szj { --framer-input-focused-border-color: var(--token-3ead4217-f562-484f-ae35-d367de8b213a, #0099ff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.4em; --framer-input-font-open-type-features: 'cv11' on, 'cv05' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 10px 15px 10px 15px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-me44A .framer-7pjzo0, .framer-me44A .framer-1vunfxc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-me44A .framer-54iov6 { --framer-input-focused-border-color: var(--token-3ead4217-f562-484f-ae35-d367de8b213a, #0099ff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.4em; --framer-input-font-open-type-features: 'cv11' on, 'cv05' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 10px 15px 10px 15px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-me44A .framer-12796qd-container { flex: none; height: 35px; position: relative; width: auto; }`,
          `.framer-me44A .framer-136qlqz { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-me44A .framer-a3edod { flex: none; height: auto; position: relative; width: 40px; }`,
          `.framer-me44A .framer-9lgsae { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-me44A .framer-1vsid6h, .framer-me44A .framer-e52e9e { --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; position: relative; width: 100%; }`,
          `.framer-me44A.framer-v-18jpy72 .framer-1ttv0t, .framer-me44A.framer-v-19htqi5 .framer-1ttv0t { pointer-events: none; }`,
          ...Tt,
          ..._t,
          ...He,
        ],
        `framer-me44A`
      )),
      (z.displayName = `Form Meetups`),
      (z.defaultProps = { height: 509, width: 450 }),
      C(z, {
        variant: {
          options: [`aCeUyUAvr`, `FFaHqc4rm`, `SJye0Gct7`, `vIixlUXPD`],
          optionTitles: [`Form`, `Loading`, `Success`, `Error`],
          title: `Variant`,
          type: k.Enum,
        },
        Y21lLUbk1: {
          defaultValue: `row`,
          displaySegmentedControl: !0,
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          options: [`row`, `column`],
          optionTitles: [`Horizontal`, `Vertical`],
          title: `Layout`,
          type: k.Enum,
        },
      }),
      y(
        z,
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
          ...Ut,
          ...Wt,
          ...A(Et),
          ...A(vt),
          ...A(Ge),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (z.loader = { load: (e, t) => w([() => j(kt, {}, t)], t) }));
  }),
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn = e(() => {
    (l(),
      M(),
      g(),
      i(),
      (dn = re(m.div)),
      (fn = `framer-XGT4w`),
      (pn = { QAgQzk8cb: `framer-v-1v71gd9` }),
      (mn = void 0),
      (hn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gn = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (_n = ({ value: e, children: t }) => {
        let r = a(h),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(h.Provider, { value: o, children: t });
      }),
      (vn = m.create(o)),
      (yn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (bn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xn = D(
        te(function (e, n) {
          let r = s(null),
            i = n ?? r,
            a = t(),
            { activeLocale: o, contentLocale: c, setLocale: l } = ce(),
            u = Ae(),
            { style: d, className: ee, layoutId: te, variant: m, ...h } = yn(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: re,
              gestureHandlers: v,
              gestureVariant: ie,
              isLoading: y,
              setGestureState: ae,
              setVariant: x,
              variants: S,
            } = he({ defaultVariant: `QAgQzk8cb`, ref: i, variant: m, variantClassNames: pn }),
            C = bn(e, S),
            oe = E(fn);
          return f(ne, {
            id: te ?? a,
            children: f(vn, {
              animate: S,
              initial: !1,
              children: f(_n, {
                value: hn,
                children: p(dn, {
                  ...h,
                  ...v,
                  className: E(oe, `framer-1v71gd9`, ee, _),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: C,
                  layoutId: `QAgQzk8cb`,
                  ref: i,
                  style: { ...d },
                  tickerEffectAlign: `center`,
                  tickerEffectDirectionModifier: `default`,
                  tickerEffectDraggable: !1,
                  tickerEffectEnabled: !0,
                  tickerEffectGap: `0px`,
                  tickerEffectHoverModifier: 100,
                  tickerEffectOverflow: `clip`,
                  tickerEffectPosition: `absolute`,
                  tickerEffectStackDirection: `row`,
                  tickerEffectVelocity: 15,
                  children: [
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1330,
                          intrinsicWidth: 1568,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 900,
                          sizes: `450px`,
                          src: `https://framerusercontent.com/images/HKxow2Q3HdCjfMzim8TJZMCu0A.jpg?width=900&height=600`,
                        },
                        className: `framer-3gu6za`,
                        "data-border": !0,
                        "data-framer-name": `Image 1`,
                        layoutDependency: C,
                        layoutId: `kzpjCuhG8`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 5824,
                          intrinsicWidth: 4368,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 400,
                          sizes: `200px`,
                          src: `https://framerusercontent.com/images/nr2oLEyyu8Yey5Kml9hL6oBzDA.jpg?width=400&height=600`,
                        },
                        className: `framer-53raof`,
                        "data-border": !0,
                        "data-framer-name": `Image 2`,
                        layoutDependency: C,
                        layoutId: `xWDEofK_t`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 2336,
                          intrinsicWidth: 3504,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 900,
                          sizes: `450px`,
                          src: `https://framerusercontent.com/images/AXAJVrj5q85xC69QMTE4bMaBbvs.jpg?width=900&height=600`,
                        },
                        className: `framer-mxgtb3`,
                        "data-border": !0,
                        "data-framer-name": `Image 3`,
                        layoutDependency: C,
                        layoutId: `QVICvOeog`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1226,
                          intrinsicWidth: 752,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 400,
                          sizes: `calc(${((u?.height || 300) - 0) * 1} / 1.5)`,
                          src: `https://framerusercontent.com/images/a2PZMaqYMuEpKWf2esxgz3romQ.jpg?width=400&height=600`,
                        },
                        className: `framer-1qcd8xq`,
                        "data-border": !0,
                        "data-framer-name": `Image 4`,
                        layoutDependency: C,
                        layoutId: `I5D2mbNXV`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1333,
                          intrinsicWidth: 2e3,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 900,
                          sizes: `calc(${((u?.height || 300) - 0) * 1} * 1.5)`,
                          src: `https://framerusercontent.com/images/1MDjJcjxgTojg3H1bAMvxtn2Aw.jpg?width=900&height=600`,
                        },
                        className: `framer-c69icx`,
                        "data-border": !0,
                        "data-framer-name": `Image 5`,
                        layoutDependency: C,
                        layoutId: `mv8BKz9D3`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1346,
                          intrinsicWidth: 884,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 400,
                          sizes: `calc(${((u?.height || 300) - 0) * 1} / 1.5)`,
                          src: `https://framerusercontent.com/images/klox7Jkfz3rgLHGYrF6BUgzbc7s.jpg?width=400&height=600`,
                        },
                        className: `framer-6mzg6d`,
                        "data-border": !0,
                        "data-framer-name": `Image 6`,
                        layoutDependency: C,
                        layoutId: `O2bRuHkOr`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1316,
                          intrinsicWidth: 1984,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 900,
                          sizes: `calc(${((u?.height || 300) - 0) * 1} * 1.5)`,
                          src: `https://framerusercontent.com/images/eYSv3TnV5nYNrOvaiAGovjKxQhg.jpg?width=900&height=600`,
                        },
                        className: `framer-1pfru2e`,
                        "data-border": !0,
                        "data-framer-name": `Image 7`,
                        layoutDependency: C,
                        layoutId: `wkkObinw1`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          borderBottomLeftRadius: gn(mn, 3),
                          borderBottomRightRadius: gn(mn, 2),
                          borderTopLeftRadius: gn(mn, 0),
                          borderTopRightRadius: gn(mn, 1),
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1028,
                          intrinsicWidth: 1464,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 900,
                          sizes: `calc(${((u?.height || 300) - 0) * 1} * 1.5)`,
                          src: `https://framerusercontent.com/images/WW61p0FJQJHdjTO1GSFVtdqwXAc.jpg?width=900&height=600`,
                        },
                        className: `framer-1pp986h`,
                        "data-border": !0,
                        "data-framer-name": `Image 8`,
                        layoutDependency: C,
                        layoutId: `Iod_31AQe`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 2400,
                          intrinsicWidth: 1358,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 600,
                          pixelWidth: 400,
                          sizes: `calc(${((u?.height || 300) - 0) * 1} / 1.5)`,
                          src: `https://framerusercontent.com/images/RVlTdC7ivtDXTl1BG441yXYAQ.jpg?width=400&height=600`,
                        },
                        className: `framer-igmiy9`,
                        "data-border": !0,
                        "data-framer-name": `Image 9`,
                        layoutDependency: C,
                        layoutId: `NUGqYN7gP`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      }),
                    }),
                    f(b, {
                      height: `100%`,
                      children: f(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1162,
                          intrinsicWidth: 712,
                          loading: N(
                            (u?.y || 0) +
                              (0 + ((u?.height || 300) - 0 - ((u?.height || 300) - 0) * 1) / 2)
                          ),
                          pixelHeight: 7008,
                          pixelWidth: 4672,
                          sizes: `200px`,
                          src: `https://framerusercontent.com/images/CXnGc6Av2oz4BW67mmSRAUNfdI.jpg?width=4672&height=7008`,
                          srcSet: `https://framerusercontent.com/images/CXnGc6Av2oz4BW67mmSRAUNfdI.jpg?scale-down-to=1024&width=4672&height=7008 682w,https://framerusercontent.com/images/CXnGc6Av2oz4BW67mmSRAUNfdI.jpg?scale-down-to=2048&width=4672&height=7008 1365w,https://framerusercontent.com/images/CXnGc6Av2oz4BW67mmSRAUNfdI.jpg?scale-down-to=4096&width=4672&height=7008 2730w,https://framerusercontent.com/images/CXnGc6Av2oz4BW67mmSRAUNfdI.jpg?width=4672&height=7008 4672w`,
                        },
                        className: `framer-116f9p5`,
                        "data-border": !0,
                        "data-framer-name": `Image 10`,
                        layoutDependency: C,
                        layoutId: `szmuoORuo`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
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
          `.framer-XGT4w.framer-1vxwqrt, .framer-XGT4w .framer-1vxwqrt { display: block; }`,
          `.framer-XGT4w.framer-1v71gd9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 300px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
          `.framer-XGT4w .framer-3gu6za { flex: none; height: 100%; overflow: visible; position: relative; width: 450px; z-index: 0; }`,
          `.framer-XGT4w .framer-53raof, .framer-XGT4w .framer-116f9p5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 200px; }`,
          `.framer-XGT4w .framer-mxgtb3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 450px; }`,
          `.framer-XGT4w .framer-1qcd8xq, .framer-XGT4w .framer-igmiy9 { align-content: center; align-items: center; aspect-ratio: 0.6666666666666666 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-XGT4w .framer-c69icx { align-content: center; align-items: center; aspect-ratio: 1.5 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-XGT4w .framer-6mzg6d { align-content: center; align-items: center; aspect-ratio: 0.6666666666666666 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-XGT4w .framer-1pfru2e { align-content: center; align-items: center; aspect-ratio: 1.5 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-XGT4w .framer-1pp986h { align-content: center; align-items: center; aspect-ratio: 1.5 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; z-index: 0; }`,
          `.framer-XGT4w[data-border="true"]::after, .framer-XGT4w [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-XGT4w`
      )),
      (xn.displayName = `Meetups/Ticker`),
      (xn.defaultProps = { height: 300, width: 3250 }),
      y(xn, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Cn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  B,
  Fn = e(() => {
    (l(),
      M(),
      g(),
      i(),
      Ne(),
      (wn = { tM_daJUDp: { hover: !0 } }),
      (Tn = [`GxxLvddnG`, `tM_daJUDp`]),
      (En = `framer-F9oBK`),
      (Dn = { GxxLvddnG: `framer-v-s0w1bu`, tM_daJUDp: `framer-v-16r4fdm` }),
      (On = void 0),
      (kn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (An = ({ value: e, children: t }) => {
        let r = a(h),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(h.Provider, { value: o, children: t });
      }),
      (jn = { Active: `GxxLvddnG`, Inactive: `tM_daJUDp` }),
      (Mn = m.create(o)),
      (Nn = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        I1UC3hbZV: e ?? o.I1UC3hbZV,
        JkJtPwYeX: i ?? o.JkJtPwYeX ?? `Featured`,
        variant: jn[o.variant] ?? o.variant ?? `GxxLvddnG`,
        zhr90kAc8: r ?? o.zhr90kAc8,
      })),
      (Pn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = D(
        te(function (e, n) {
          let r = s(null),
            i = n ?? r,
            a = t(),
            { activeLocale: c, contentLocale: l, setLocale: u } = ce();
          Ae();
          let {
              style: d,
              className: ee,
              layoutId: te,
              variant: p,
              JkJtPwYeX: h,
              zhr90kAc8: g,
              I1UC3hbZV: _,
              ...re
            } = Nn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: ae,
              gestureVariant: S,
              isLoading: C,
              setGestureState: oe,
              setVariant: se,
              variants: w,
            } = he({
              cycleOrder: Tn,
              defaultVariant: `GxxLvddnG`,
              enabledGestures: wn,
              ref: i,
              variant: p,
              variantClassNames: Dn,
            }),
            T = Pn(e, w),
            { activeVariantCallback: ue, delay: de } = ie(v),
            D = ue(async (...e) => {
              if ((oe({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            O = E(En, je);
          return f(ne, {
            id: te ?? a,
            children: f(Mn, {
              animate: w,
              initial: !1,
              children: f(An, {
                value: kn,
                children: f(le, {
                  clickTrackingId: On,
                  href: g,
                  motionChild: !0,
                  nodeId: `GxxLvddnG`,
                  openInNewTab: !1,
                  scopeId: `MV_8DShgI`,
                  smoothScroll: !0,
                  children: f(m.a, {
                    ...re,
                    ...ae,
                    className: `${E(O, `framer-s0w1bu`, ee, y)} framer-7ad2ji`,
                    "data-border": !0,
                    "data-framer-name": `Active`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: T,
                    layoutId: `GxxLvddnG`,
                    onTap: D,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      ...d,
                    },
                    variants: { tM_daJUDp: { "--border-color": `rgba(255, 255, 255, 0)` } },
                    ...Cn({ tM_daJUDp: { "data-framer-name": `Inactive` } }, v, S),
                    children: f(x, {
                      __fromCanvasComponent: !0,
                      children: f(o, {
                        children: f(m.p, {
                          className: `framer-styles-preset-rhbxb3`,
                          "data-styles-preset": `vvG68NbwN`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                          },
                          children: `Featured`,
                        }),
                      }),
                      className: `framer-12qvfar`,
                      "data-framer-name": `Default`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `tOBDGpBFK`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: h,
                      variants: {
                        "tM_daJUDp-hover": {
                          "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                        },
                        tM_daJUDp: {
                          "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Cn(
                        {
                          "tM_daJUDp-hover": {
                            children: f(o, {
                              children: f(m.p, {
                                className: `framer-styles-preset-rhbxb3`,
                                "data-styles-preset": `vvG68NbwN`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                },
                                children: `Featured`,
                              }),
                            }),
                          },
                          tM_daJUDp: {
                            children: f(o, {
                              children: f(m.p, {
                                className: `framer-styles-preset-rhbxb3`,
                                "data-styles-preset": `vvG68NbwN`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                },
                                children: `Featured`,
                              }),
                            }),
                          },
                        },
                        v,
                        S
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-F9oBK.framer-7ad2ji, .framer-F9oBK .framer-7ad2ji { display: block; }`,
          `.framer-F9oBK.framer-s0w1bu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-F9oBK .framer-12qvfar { --framer-text-wrap-override: none; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          ...Ye,
          `.framer-F9oBK[data-border="true"]::after, .framer-F9oBK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-F9oBK`
      )),
      (B.displayName = `Tab Element`),
      (B.defaultProps = { height: 35.5, width: 82.5 }),
      C(B, {
        variant: {
          options: [`GxxLvddnG`, `tM_daJUDp`],
          optionTitles: [`Active`, `Inactive`],
          title: `Variant`,
          type: k.Enum,
        },
        JkJtPwYeX: {
          defaultValue: `Featured`,
          displayTextArea: !1,
          title: `Title`,
          type: k.String,
        },
        onJkJtPwYeXChange: { changes: `JkJtPwYeX`, type: k.ChangeHandler },
        zhr90kAc8: { title: `Link`, type: k.Link },
        I1UC3hbZV: { title: `Click`, type: k.EventHandler },
      }),
      y(
        B,
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
          ...A(Xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function In(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  V,
  $n = e(() => {
    (l(),
      M(),
      g(),
      i(),
      dt(),
      Pt(),
      Rt(),
      Ie(),
      Le(),
      (Ln = F(zt)),
      (Rn = F(ft)),
      (zn = F(Ft)),
      (Bn = { oWndBM1H6: { hover: !0 }, uavBv7dhM: { hover: !0 } }),
      (Vn = [`uavBv7dhM`, `kbPKWHxph`, `oWndBM1H6`]),
      (Hn = `framer-ckkxP`),
      (Un = {
        kbPKWHxph: `framer-v-1oo50vb`,
        oWndBM1H6: `framer-v-nda2h9`,
        uavBv7dhM: `framer-v-y7qee4`,
      }),
      (Wn = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (Gn = (e) => !e),
      (Kn = { duration: 0, type: `tween` }),
      (qn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Jn = ({ value: e, children: t }) => {
        let r = a(h),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(h.Provider, { value: o, children: t });
      }),
      (Yn = { Desktop: `uavBv7dhM`, Past: `oWndBM1H6`, Phone: `kbPKWHxph` }),
      (Xn = m.create(o)),
      (Zn = ({
        date: e,
        height: t,
        hosts: n,
        id: r,
        image: i,
        link: a,
        location: o,
        name1: s,
        width: c,
        ...l
      }) => ({
        ...l,
        afHQTs90Z: o ?? l.afHQTs90Z ?? `Location`,
        r3OeMD_vx: n ?? l.r3OeMD_vx ?? `Hosted by Name`,
        SOsJJGZMI: a ?? l.SOsJJGZMI,
        SxmEnE6_f: e ?? l.SxmEnE6_f ?? `Date`,
        sZ9NHKEYQ: s ?? l.sZ9NHKEYQ ?? `Name`,
        variant: Yn[l.variant] ?? l.variant ?? `uavBv7dhM`,
        zI6CACc5m: i ?? l.zI6CACc5m,
      })),
      (Qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = D(
        te(function (e, n) {
          let r = s(null),
            i = n ?? r,
            a = t(),
            { activeLocale: c, contentLocale: l, setLocale: u } = ce(),
            d = Ae(),
            {
              style: ee,
              className: te,
              layoutId: h,
              variant: g,
              SOsJJGZMI: _,
              sZ9NHKEYQ: re,
              SxmEnE6_f: v,
              r3OeMD_vx: ie,
              afHQTs90Z: y,
              zI6CACc5m: b,
              ...ae
            } = Zn(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: oe,
              gestureHandlers: se,
              gestureVariant: w,
              isLoading: T,
              setGestureState: ue,
              setVariant: de,
              variants: D,
            } = he({
              cycleOrder: Vn,
              defaultVariant: `uavBv7dhM`,
              enabledGestures: Bn,
              ref: i,
              variant: g,
              variantClassNames: Un,
            }),
            O = Qn(e, D),
            k = [Be, We],
            fe = Gn(Wn(v, `Error`)),
            A = E(Hn, ...k);
          return f(ne, {
            id: h ?? a,
            children: f(Xn, {
              animate: D,
              initial: !1,
              children:
                fe !== !1 &&
                f(Jn, {
                  value: Kn,
                  children: f(le, {
                    href: _,
                    motionChild: !0,
                    nodeId: `uavBv7dhM`,
                    openInNewTab: !0,
                    scopeId: `ZfwXuvGfY`,
                    children: p(m.a, {
                      ...ae,
                      ...se,
                      className: `${E(A, `framer-y7qee4`, te, C)} framer-d3mshv`,
                      "data-border": !0,
                      "data-framer-name": `Desktop`,
                      layoutDependency: O,
                      layoutId: `uavBv7dhM`,
                      ref: i,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(26, 26, 26))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(255, 255, 255, 0)`,
                        ...ee,
                      },
                      variants: {
                        "oWndBM1H6-hover": { backgroundColor: `rgba(255, 255, 255, 0.05)` },
                        "uavBv7dhM-hover": { backgroundColor: `rgba(255, 255, 255, 0.05)` },
                      },
                      ...In(
                        {
                          kbPKWHxph: { "data-framer-name": `Phone` },
                          oWndBM1H6: { "data-framer-name": `Past` },
                        },
                        S,
                        w
                      ),
                      children: [
                        p(m.div, {
                          className: `framer-1vt3zme`,
                          "data-framer-name": `Content`,
                          layoutDependency: O,
                          layoutId: `Kn0HeZMsK`,
                          style: { opacity: 1 },
                          variants: {
                            "uavBv7dhM-hover": { opacity: 1 },
                            oWndBM1H6: { opacity: 0.4 },
                          },
                          children: [
                            f(m.div, {
                              className: `framer-1vsq7mr`,
                              "data-framer-name": `Event`,
                              layoutDependency: O,
                              layoutId: `JVR7txgHY`,
                              children: f(x, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(m.p, {
                                    className: `framer-styles-preset-ojsfn5`,
                                    "data-styles-preset": `VQBQVu8qk`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: f(m.strong, { children: `Name` }),
                                  }),
                                }),
                                className: `framer-1hl8zbb`,
                                fonts: [`Inter`, `Inter-Bold`],
                                layoutDependency: O,
                                layoutId: `RCkbFTFKZ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: re,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            p(m.div, {
                              className: `framer-1095ltk`,
                              "data-framer-name": `Details`,
                              layoutDependency: O,
                              layoutId: `sn93bN3Q5`,
                              children: [
                                p(m.div, {
                                  className: `framer-vboguh`,
                                  "data-framer-name": `Date`,
                                  layoutDependency: O,
                                  layoutId: `HTKPCBfmx`,
                                  children: [
                                    f(zt, {
                                      animated: !0,
                                      className: `framer-ay6g7c`,
                                      layoutDependency: O,
                                      layoutId: `YYNKjE8yG`,
                                      style: {
                                        "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                        "--1iwhep7": 2,
                                        "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        opacity: 0.6,
                                      },
                                    }),
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(m.p, {
                                          className: `framer-styles-preset-4eptxb`,
                                          "data-styles-preset": `XHuCPIQKc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: f(m.strong, { children: `Date` }),
                                        }),
                                      }),
                                      className: `framer-1d4adst`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      layoutDependency: O,
                                      layoutId: `EJKH8gFbC`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                        opacity: 0.6,
                                      },
                                      text: v,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                p(m.div, {
                                  className: `framer-1nlznul`,
                                  "data-framer-name": `Hosts`,
                                  layoutDependency: O,
                                  layoutId: `AzPeg4NDl`,
                                  children: [
                                    f(ft, {
                                      animated: !0,
                                      className: `framer-1o2kkdb`,
                                      layoutDependency: O,
                                      layoutId: `k8Wb0SFq3`,
                                      style: {
                                        "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                        "--1iwhep7": 2,
                                        "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        opacity: 0.6,
                                      },
                                    }),
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(m.p, {
                                          className: `framer-styles-preset-4eptxb`,
                                          "data-styles-preset": `XHuCPIQKc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3))`,
                                          },
                                          children: `Hosts`,
                                        }),
                                      }),
                                      className: `framer-1nnrpbe`,
                                      fonts: [`Inter`],
                                      layoutDependency: O,
                                      layoutId: `cHBy0IIys`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                      },
                                      text: ie,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                p(m.div, {
                                  className: `framer-v1d4yg`,
                                  "data-framer-name": `Location`,
                                  layoutDependency: O,
                                  layoutId: `FvmmgTUtD`,
                                  children: [
                                    f(Ft, {
                                      animated: !0,
                                      className: `framer-1qeiz`,
                                      layoutDependency: O,
                                      layoutId: `lJMa0lEto`,
                                      style: {
                                        "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                        "--1iwhep7": 2,
                                        "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        opacity: 0.6,
                                      },
                                    }),
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(m.p, {
                                          className: `framer-styles-preset-4eptxb`,
                                          "data-styles-preset": `XHuCPIQKc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                          },
                                          children: f(m.strong, { children: `Location` }),
                                        }),
                                      }),
                                      className: `framer-1tm7v18`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      layoutDependency: O,
                                      layoutId: `cLFThj4VG`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      text: y,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(m.div, {
                          className: `framer-pyho8j`,
                          "data-border": !0,
                          "data-framer-name": `Visual`,
                          layoutDependency: O,
                          layoutId: `CS3Sc_LvN`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                          children: f(L, {
                            background: {
                              alt: `var(--variable-sZ9NHKEYQ)`,
                              fit: `fill`,
                              loading: N(
                                (d?.y || 0) + (30 + ((d?.height || 200) - 60 - 100) / 2) + 0 + 0
                              ),
                              sizes: `120px`,
                              ...qn(b),
                            },
                            className: `framer-gphre0`,
                            draggable: `false`,
                            layoutDependency: O,
                            layoutId: `BADHTX8Uc`,
                            style: { filter: `blur(0px)`, WebkitFilter: `blur(0px)` },
                            variants: {
                              oWndBM1H6: {
                                filter: `grayscale(1) blur(0px)`,
                                WebkitFilter: `grayscale(1) blur(0px)`,
                              },
                            },
                            ...In(
                              {
                                kbPKWHxph: {
                                  background: {
                                    alt: `var(--variable-sZ9NHKEYQ)`,
                                    fit: `fill`,
                                    loading: N(
                                      (d?.y || 0) +
                                        20 +
                                        (((d?.height || 200) - 40 - 565.25) / 2 + 0 + 0) +
                                        0 +
                                        0
                                    ),
                                    sizes: `calc(${d?.width || `100vw`} - 40px)`,
                                    ...qn(b),
                                  },
                                },
                              },
                              S,
                              w
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            }),
          });
        }),
        [
          `.framer-ckkxP.framer-d3mshv, .framer-ckkxP .framer-d3mshv { display: block; }`,
          `.framer-ckkxP.framer-y7qee4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; text-decoration: none; width: 600px; }`,
          `.framer-ckkxP .framer-1vt3zme { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-ckkxP .framer-1vsq7mr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ckkxP .framer-1hl8zbb { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; -webkit-user-select: none; display: -webkit-box; flex: none; height: auto; max-width: 90%; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; width: 100%; }`,
          `.framer-ckkxP .framer-1095ltk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ckkxP .framer-vboguh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ckkxP .framer-ay6g7c, .framer-ckkxP .framer-1o2kkdb, .framer-ckkxP .framer-1qeiz { flex: none; height: auto; position: relative; width: 15px; }`,
          `.framer-ckkxP .framer-1d4adst { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; -webkit-user-select: none; display: -webkit-box; flex: none; height: auto; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; width: 289px; }`,
          `.framer-ckkxP .framer-1nlznul, .framer-ckkxP .framer-v1d4yg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ckkxP .framer-1nnrpbe { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; -webkit-user-select: none; display: -webkit-box; flex: 1 0 0px; height: auto; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-ckkxP .framer-1tm7v18 { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; -webkit-user-select: none; display: -webkit-box; flex: 1 0 0px; height: auto; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; width: 1px; }`,
          `.framer-ckkxP .framer-pyho8j { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 120px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ckkxP .framer-gphre0 { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-ckkxP.framer-v-1oo50vb.framer-y7qee4 { cursor: unset; flex-direction: column; gap: 20px; padding: 20px; width: 400px; }`,
          `.framer-ckkxP.framer-v-1oo50vb .framer-1vt3zme { flex: none; order: 1; width: 100%; }`,
          `.framer-ckkxP.framer-v-1oo50vb .framer-pyho8j { order: 0; width: 100%; }`,
          ...Je,
          ...Ve,
          `.framer-ckkxP[data-border="true"]::after, .framer-ckkxP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-ckkxP`
      )),
      (V.displayName = `Meetups/Event`),
      (V.defaultProps = { height: 180, width: 600 }),
      C(V, {
        variant: {
          options: [`uavBv7dhM`, `kbPKWHxph`, `oWndBM1H6`],
          optionTitles: [`Desktop`, `Phone`, `Past`],
          title: `Variant`,
          type: k.Enum,
        },
        SOsJJGZMI: { title: `Link`, type: k.Link },
        sZ9NHKEYQ: { defaultValue: `Name`, displayTextArea: !1, title: `Name`, type: k.String },
        onsZ9NHKEYQChange: { changes: `sZ9NHKEYQ`, type: k.ChangeHandler },
        SxmEnE6_f: { defaultValue: `Date`, displayTextArea: !1, title: `Date`, type: k.String },
        onSxmEnE6_fChange: { changes: `SxmEnE6_f`, type: k.ChangeHandler },
        r3OeMD_vx: { defaultValue: `Hosted by Name`, title: `Hosts`, type: k.String },
        onr3OeMD_vxChange: { changes: `r3OeMD_vx`, type: k.ChangeHandler },
        afHQTs90Z: {
          defaultValue: `Location`,
          displayTextArea: !1,
          title: `Location`,
          type: k.String,
        },
        onafHQTs90ZChange: { changes: `afHQTs90Z`, type: k.ChangeHandler },
        zI6CACc5m: { title: `Image`, type: k.ResponsiveImage },
      }),
      y(
        V,
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
          ...Ln,
          ...Rn,
          ...zn,
          ...A(Fe),
          ...A(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function H(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function er(e) {
  return typeof e == `function` ? e() : e;
}
function tr(e, t) {
  return di[e] > di[t];
}
function nr(e) {
  let t;
  for (let n of e) {
    let e = er(n);
    if (((t === void 0 || tr(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function rr(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function U(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ir(e) {
  throw Error(`Unexpected value: ${e}`);
}
function W(e, t, n, r) {
  (U(e >= t, e, `outside lower bound for`, r), U(e <= n, e, `outside upper bound for`, r));
}
function ar(e) {
  return typeof e == `string`;
}
function or(e) {
  return Number.isFinite(e);
}
function sr(e) {
  return e === null;
}
function cr(e) {
  if (sr(e)) return 0;
  switch (e.type) {
    case k.Array:
      return 1;
    case k.Boolean:
      return 2;
    case k.Color:
      return 3;
    case k.Date:
      return 4;
    case k.Enum:
      return 5;
    case k.File:
      return 6;
    case k.ResponsiveImage:
      return 10;
    case k.Link:
      return 7;
    case k.Number:
      return 8;
    case k.Object:
      return 9;
    case k.RichText:
      return 11;
    case k.String:
      return 12;
    case k.VectorSetItem:
      return 13;
    default:
      ir(e);
  }
}
function lr(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = G.read(e);
    n.push(t);
  }
  return { type: k.Array, value: n };
}
function ur(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) G.write(e, n);
}
function dr(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = G.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function fr(e) {
  return { type: k.Boolean, value: e.readUint8() !== 0 };
}
function pr(e, t) {
  e.writeUint8(+!!t.value);
}
function mr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function hr(e) {
  return { type: k.Color, value: e.readString() };
}
function gr(e, t) {
  e.writeString(t.value);
}
function _r(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function vr(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: k.Date, value: n.toISOString() };
}
function yr(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function br(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function xr(e) {
  return { type: k.Enum, value: e.readString() };
}
function Sr(e, t) {
  e.writeString(t.value);
}
function Cr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function wr(e) {
  return { type: k.File, value: e.readString() };
}
function Tr(e, t) {
  e.writeString(t.value);
}
function Er(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Dr(e) {
  return { type: k.Link, value: e.readJson() };
}
function Or(e, t) {
  e.writeJson(t.value);
}
function kr(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ar(e) {
  return { type: k.Number, value: e.readFloat64() };
}
function jr(e, t) {
  e.writeFloat64(t.value);
}
function Mr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Nr(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = G.read(e);
  }
  return { type: k.Object, value: n };
}
function Pr(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), G.write(e, r));
}
function Fr(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = G.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ir(e) {
  return { type: k.ResponsiveImage, value: e.readJson() };
}
function Lr(e, t) {
  e.writeJson(t.value);
}
function Rr(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function zr(e) {
  let t = e.readInt8();
  if (t === 0) return { type: k.RichText, value: e.readUint32() };
  if (t === 1) return { type: k.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Br(e, t) {
  if (or(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (ar(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Vr(e, t) {
  let n = e.value,
    r = t.value;
  if ((or(n) && or(r)) || (ar(n) && ar(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Hr(e) {
  return { type: k.String, value: e.readString() };
}
function Ur(e, t) {
  e.writeString(t.value);
}
function Wr(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Gr(e) {
  return { type: k.VectorSetItem, value: e.readUint32() };
}
function Kr(e, t) {
  e.writeUint32(t.value);
}
function qr(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Jr(e) {
  let t = Math.floor(Si * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Yr(e, t) {
  let n = Zr(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await wi(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Ti(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Xr(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Zr(e) {
  U(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Qr(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = G.read(e);
  }
  return t;
}
function* $r(e) {
  for (let t of e) yield* t.prioritySources;
}
var ei,
  G,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  K,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  q,
  J,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Y,
  Ei,
  Di,
  Oi = e(() => {
    (r(),
      M(),
      (ti = Object.create),
      (ni = Object.defineProperty),
      (ri = Object.getOwnPropertyDescriptor),
      (ii = Object.getOwnPropertyNames),
      (ai = Object.getPrototypeOf),
      (oi = Object.prototype.hasOwnProperty),
      (si = (e, t) =>
        function () {
          try {
            return (t || (0, e[ii(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (ci = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ii(t))
            oi.call(e, i) ||
              i === n ||
              ni(e, i, { get: () => t[i], enumerable: !(r = ri(t, i)) || r.enumerable });
        return e;
      }),
      (li = (e, t, n) => (
        (n = e == null ? {} : ti(ai(e))),
        ci(!t && e && e.__esModule ? n : ni(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (ui = li(
        si({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (di = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (K = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (fi =
        ((ei = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = K.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = K.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = K.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = K.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = K.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = K.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = K.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = K.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = K.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = K.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (H(this, `bytes`, void 0),
              H(this, `offset`, 0),
              H(this, `view`, void 0),
              (this.bytes = e),
              (this.view = rr(this.bytes)));
          }
        }),
        H(ei, `textDecoder`, new TextDecoder()),
        ei)),
      c !== void 0 && c.requestIdleCallback,
      (pi = 1024),
      (mi = 1.5),
      (hi = (e) => 2 ** e - 1),
      (gi = (e) => -(2 ** (e - 1))),
      (_i = (e) => 2 ** (e - 1) - 1),
      (q = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: gi(8),
        Int16: gi(16),
        Int32: gi(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (J = {
        Uint8: hi(8),
        Uint16: hi(16),
        Uint32: hi(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: _i(8),
        Int16: _i(16),
        Int32: _i(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (vi = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * mi) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = rr(n)));
        }
        writeUint8(e) {
          W(e, q.Uint8, J.Uint8, `Uint8`);
          let t = K.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          W(e, q.Uint16, J.Uint16, `Uint16`);
          let t = K.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          W(e, q.Uint32, J.Uint32, `Uint32`);
          let t = K.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          W(e, q.Uint64, J.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          W(e, q.BigUint64, J.BigUint64, `BigUint64`);
          let t = K.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          W(e, q.Int8, J.Int8, `Int8`);
          let t = K.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          W(e, q.Int16, J.Int16, `Int16`);
          let t = K.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          W(e, q.Int32, J.Int32, `Int32`);
          let t = K.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          W(e, q.Int64, J.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          W(e, q.BigInt64, J.BigInt64, `BigInt64`);
          let t = K.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = K.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = K.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (H(this, `offset`, 0),
            H(this, `bytes`, new Uint8Array(pi)),
            H(this, `view`, rr(this.bytes)),
            H(this, `encoder`, new TextEncoder()),
            H(this, `encodedStrings`, new Map()));
        }
      }),
      (yi = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            U(or(n), `Invalid chunkId`),
            U(or(r), `Invalid offset`),
            U(or(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (U(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (H(this, `chunkId`, void 0),
            H(this, `offset`, void 0),
            H(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return lr(e);
            case 2:
              return fr(e);
            case 3:
              return hr(e);
            case 4:
              return vr(e);
            case 5:
              return xr(e);
            case 6:
              return wr(e);
            case 7:
              return Dr(e);
            case 8:
              return Ar(e);
            case 9:
              return Nr(e);
            case 10:
              return Ir(e);
            case 11:
              return zr(e);
            case 12:
              return Hr(e);
            case 13:
              return Gr(e);
            default:
              ir(t);
          }
        }),
          (e.write = function (e, t) {
            let n = cr(t);
            if ((e.writeUint8(n), !sr(t)))
              switch (t.type) {
                case k.Array:
                  return ur(e, t);
                case k.Boolean:
                  return pr(e, t);
                case k.Color:
                  return gr(e, t);
                case k.Date:
                  return yr(e, t);
                case k.Enum:
                  return Sr(e, t);
                case k.File:
                  return Tr(e, t);
                case k.Link:
                  return Or(e, t);
                case k.Number:
                  return jr(e, t);
                case k.Object:
                  return Pr(e, t);
                case k.ResponsiveImage:
                  return Lr(e, t);
                case k.RichText:
                  return Br(e, t);
                case k.VectorSetItem:
                  return Kr(e, t);
                case k.String:
                  return Ur(e, t);
                default:
                  ir(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = cr(e),
              i = cr(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (sr(e) || sr(t)) return 0;
            switch (e.type) {
              case k.Array:
                return (U(t.type === k.Array), dr(e, t, n));
              case k.Boolean:
                return (U(t.type === k.Boolean), mr(e, t));
              case k.Color:
                return (U(t.type === k.Color), _r(e, t));
              case k.Date:
                return (U(t.type === k.Date), br(e, t));
              case k.Enum:
                return (U(t.type === k.Enum), Cr(e, t));
              case k.File:
                return (U(t.type === k.File), Er(e, t));
              case k.Link:
                return (U(t.type === k.Link), kr(e, t));
              case k.Number:
                return (U(t.type === k.Number), Mr(e, t));
              case k.Object:
                return (U(t.type === k.Object), Fr(e, t, n));
              case k.ResponsiveImage:
                return (U(t.type === k.ResponsiveImage), Rr(e, t));
              case k.RichText:
                return (U(t.type === k.RichText), Vr(e, t));
              case k.VectorSetItem:
                return (U(t.type === k.VectorSetItem), qr(e, t));
              case k.String:
                return (U(t.type === k.String), Wr(e, t, n));
              default:
                ir(e);
            }
          }));
      })((G ||= {})),
      (bi = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = G.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new fi(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = G.read(r);
                e.push(t);
              }
              let t = yi.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new vi();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) G.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (H(this, `fieldNames`, void 0),
            H(this, `options`, void 0),
            H(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (xi = 3),
      (Si = 250),
      (Ci = [408, 429, 500, 502, 503, 504]),
      (wi = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ci.includes(r.status) || ++n > xi) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > xi) throw e;
          }
          await Jr(n);
        }
      }),
      (Ti = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((U(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Xr(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((U(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Xr(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          H(this, `chunks`, []);
        }
      }),
      (Y = class {
        async loadModel() {
          let [e] = await Yr(this.options.url, [this.options.range]);
          return (
            U(e, `Failed to load model`),
            bi.deserialize(e, () => {
              let e = nr(this.modelPrioritySources);
              return e ? ye({ batch: !0, priority: e }) : void 0;
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          U(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? ye({ batch: !0, priority: er(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  ir(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? ye({ batch: !0, priority: er(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== k.String || t.value?.type !== k.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== k.String || t.value?.type !== k.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== k.String || t.value?.type !== k.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > G.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            G.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? ye({ batch: !0, priority: er(n) }) : void 0;
            s && (await s);
            let c = e[o].values[t];
            if (!r(c)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (H(this, `options`, void 0),
            H(this, `schema`, void 0),
            H(this, `fields`, void 0),
            H(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            H(this, `modelPromise`, void 0),
            H(this, `model`, void 0),
            H(this, `modelPrioritySources`, new Set()),
            H(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (U(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (Ei = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = wi(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new fi(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = nr(this.scanPrioritySources),
                        t = e ? ye({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Qr(n),
                        o = n.getOffset() - i,
                        s = new yi(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (H(this, `id`, void 0),
            H(this, `url`, void 0),
            H(this, `itemsPromise`, void 0),
            H(this, `isScanning`, !1),
            H(this, `scanPrioritySources`, new Set()),
            H(this, `itemPrioritySources`, new Map()),
            H(
              this,
              `itemLoader`,
              new ui.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = yi.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Yr(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = nr($r(e)),
                      a = i ? ye({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    U(o, `Missing range bytes`);
                    let s = Qr(new fi(o)),
                      c = e[t]?.pointer;
                    (U(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (Di = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = yi.fromString(e),
                r = this.chunks[n.chunkId];
              return (U(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = yi.fromString(e.pointer),
            r = yi.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return G.compare(e, t, n);
        }
        constructor(e) {
          (H(this, `options`, void 0),
            H(this, `id`, void 0),
            H(this, `schema`, void 0),
            H(this, `indexes`, void 0),
            H(this, `resolveRichText`, void 0),
            H(this, `resolveVectorSetItem`, void 0),
            H(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new Ei(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function ki(e) {
  return typeof e == `object` && !!e && !d(e) && Fi in e;
}
function Ai(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ji(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    Mi(t, i, n);
  }
}
function Mi(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Mi(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || ji(e, t, n);
  }
}
function Ni(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return u(o, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return u(le, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          ji(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (ki(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            Ai(o, `Module not found`),
            ki(o) && o.preload(),
            f(ge, {
              componentIdentifier: r,
              children: (e) => f(Ce, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return u(e === `a` ? m.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var X,
  Pi,
  Fi,
  Ii,
  Li,
  Ri = e(() => {
    (r(),
      l(),
      M(),
      i(),
      c !== void 0 && c.requestIdleCallback,
      (Fi = `preload`),
      (Ii =
        (((X = Ii || {})[(X.Fragment = 1)] = `Fragment`),
        (X[(X.Link = 2)] = `Link`),
        (X[(X.Module = 3)] = `Module`),
        (X[(X.Tag = 4)] = `Tag`),
        (X[(X.Text = 5)] = `Text`),
        X)),
      (Li =
        (((Pi = Li || {})[(Pi.RichText = 1)] = `RichText`),
        (Pi[(Pi.VectorSetItem = 2)] = `VectorSetItem`),
        Pi)));
  }),
  Z,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Q,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia = e(() => {
    (M(),
      Oi(),
      Ri(),
      (Z = {
        BYMITZ8Xq: { isNullable: !0, type: k.String },
        CdSMjhlHk: { isNullable: !0, type: k.ResponsiveImage },
        createdAt: { isNullable: !0, type: k.Date },
        d8qFSV8RA: { isNullable: !0, type: k.String },
        dkf1x4IKp: { isNullable: !0, type: k.Date },
        EblzaHjbD: { isNullable: !0, type: k.String },
        id: { isNullable: !1, type: k.String },
        iJRTJXhDE: { isNullable: !0, type: k.String },
        Kcl1THogg: { isNullable: !0, type: k.String },
        nextItemId: { isNullable: !0, type: k.String },
        previousItemId: { isNullable: !0, type: k.String },
        umV4sCUxl: { isNullable: !0, type: k.Boolean },
        updatedAt: { isNullable: !0, type: k.Date },
        yYm_8lPg5: { isNullable: !0, type: k.Link },
      }),
      (zi = [`id`]),
      (Bi = { type: 1 }),
      (Vi = [`previousItemId`]),
      (Hi = [`nextItemId`]),
      (Ui = [`id`, `BYMITZ8Xq`]),
      (Wi = [`BYMITZ8Xq`, `id`]),
      (Q = { type: 0 }),
      (Gi = [`d8qFSV8RA`]),
      (Ki = [`BYMITZ8Xq`]),
      (qi = [`dkf1x4IKp`]),
      (Ji = [`umV4sCUxl`]),
      (Yi = [`EblzaHjbD`]),
      (Xi = [`Kcl1THogg`]),
      (Zi = [`CdSMjhlHk`]),
      (Qi = [`yYm_8lPg5`]),
      ($i = [`iJRTJXhDE`]),
      (ea = []),
      (ta = (e) => {
        let t = ea[e];
        if (t) return t().then((e) => e.default);
      }),
      (na = Ni({})),
      new _e(),
      (ra = {
        collectionByLocaleId: {
          default: new Di({
            chunks: [
              new URL(
                `./Pl_A41546-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `984a9453-8763-4915-a37d-242be066402cdefault`,
            indexes: [
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: zi,
                range: { from: 0, to: 1201 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: Vi,
                range: { from: 1201, to: 2401 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: Hi,
                range: { from: 2401, to: 3597 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: Ui,
                range: { from: 3597, to: 6564 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Wi,
                range: { from: 6564, to: 9531 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Gi,
                range: { from: 9531, to: 11833 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Ki,
                range: { from: 11833, to: 14108 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: qi,
                range: { from: 14108, to: 15071 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Ji,
                range: { from: 15071, to: 15691 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Yi,
                range: { from: 15691, to: 18634 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Xi,
                range: { from: 18634, to: 20247 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Zi,
                range: { from: 20247, to: 48156 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Qi,
                range: { from: 48156, to: 50264 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: $i,
                range: { from: 50264, to: 51962 },
                url: new URL(
                  `./Pl_A41546-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: na,
            resolveVectorSetItem: ta,
            schema: Z,
          }),
          zPfFQNtX1: new Di({
            chunks: [
              new URL(
                `./Pl_A41546-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `984a9453-8763-4915-a37d-242be066402czPfFQNtX1`,
            indexes: [
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: zi,
                range: { from: 0, to: 1201 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: Vi,
                range: { from: 1201, to: 2401 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: Hi,
                range: { from: 2401, to: 3597 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Bi,
                collectionSchema: Z,
                fieldNames: Ui,
                range: { from: 3597, to: 6564 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Wi,
                range: { from: 6564, to: 9531 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Gi,
                range: { from: 9531, to: 11833 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Ki,
                range: { from: 11833, to: 14108 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: qi,
                range: { from: 14108, to: 15071 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Ji,
                range: { from: 15071, to: 15691 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Yi,
                range: { from: 15691, to: 18634 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Xi,
                range: { from: 18634, to: 20247 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Zi,
                range: { from: 20247, to: 48156 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: Qi,
                range: { from: 48156, to: 50264 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Q,
                collectionSchema: Z,
                fieldNames: $i,
                range: { from: 50264, to: 51962 },
                url: new URL(
                  `./Pl_A41546-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/YSLnHHYlcW52K9q27o1u/vqOL8NI88qTq9FH6BTIw/Pl_A41546.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: na,
            resolveVectorSetItem: ta,
            schema: Z,
          }),
        },
        displayName: `Meetups`,
        id: `984a9453-8763-4915-a37d-242be066402c`,
      }),
      C(ra, {
        d8qFSV8RA: { defaultValue: ``, title: `Name`, type: k.String },
        BYMITZ8Xq: { preventLocalization: !0, title: `Slug`, type: k.String },
        dkf1x4IKp: { displayTime: !0, title: `Event Date`, type: k.Date },
        umV4sCUxl: { defaultValue: !0, title: `Upcoming`, type: k.Boolean },
        EblzaHjbD: { defaultValue: ``, title: `Hosts`, type: k.String },
        Kcl1THogg: { defaultValue: ``, title: `Location`, type: k.String },
        CdSMjhlHk: { title: `Cover Image`, type: k.ResponsiveImage },
        yYm_8lPg5: { title: `Luma URL`, type: k.Link },
        iJRTJXhDE: { defaultValue: ``, title: `Luma Event ID`, type: k.String },
        createdAt: { title: `Created`, type: k.Date },
        updatedAt: { title: `Updated`, type: k.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/Pl_A41546:default`,
          title: `Previous`,
          type: k.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/Pl_A41546:default`,
          title: `Next`,
          type: k.CollectionReference,
        },
      }));
  }),
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  $,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba;
e(() => {
  (l(),
    M(),
    g(),
    i(),
    Ze(),
    dt(),
    at(),
    Pt(),
    $e(),
    It(),
    bt(),
    tt(),
    mt(),
    pt(),
    rt(),
    un(),
    Sn(),
    Fn(),
    $n(),
    ia(),
    Pe(),
    ze(),
    At(),
    st(),
    Ie(),
    Le(),
    Vt(),
    (aa = F(it)),
    (oa = F(xn)),
    (sa = F(B)),
    (ca = F(V)),
    (la = O(m.div)),
    (ua = F(R)),
    (da = F(z)),
    (fa = F(xt)),
    (pa = F(ot)),
    (ma = F(nt)),
    (ha = F(ht)),
    (ga = {
      fls9uMZcu: `(min-width: 810px) and (max-width: 1199.98px)`,
      nEonl_3wf: `(min-width: 1200px)`,
      uDPBcMjp2: `(max-width: 809.98px)`,
    }),
    (_a = () => typeof document < `u`),
    (va = [`events`]),
    (ya = `framer-DUsqE`),
    (ba = {
      fls9uMZcu: `framer-v-pt7ljp`,
      nEonl_3wf: `framer-v-ehnrz0`,
      uDPBcMjp2: `framer-v-1w45x5u`,
    }),
    (xa = (e, t, n) => (e && t ? `position` : n)),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Sa = (e, t) => (e ? `GxxLvddnG` : `tM_daJUDp`)),
    (Ca = (e, t) => (e ? `tM_daJUDp` : `GxxLvddnG`)),
    (wa = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (Ta = { dateStyle: `medium`, timeStyle: `short`, timeZone: `UTC` }),
    (Ea = (e, t) => wa(e, Ta, t)),
    (Da = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Oa = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (ka = { delay: 0, duration: 4, ease: [0, 0, 1, 1], type: `tween` }),
    (Aa = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 360,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (ja = () => ({
      from: { alias: `yFx24AEy8`, data: ra, type: `Collection` },
      limit: { type: `LiteralValue`, value: 6 },
      orderBy: [{ collection: `yFx24AEy8`, name: `dkf1x4IKp`, type: `Identifier` }],
      select: [
        { collection: `yFx24AEy8`, name: `BYMITZ8Xq`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `yYm_8lPg5`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `d8qFSV8RA`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `dkf1x4IKp`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `EblzaHjbD`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `Kcl1THogg`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `CdSMjhlHk`, type: `Identifier` },
        { collection: `yFx24AEy8`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `yFx24AEy8`, name: `umV4sCUxl`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: !0 },
        type: `BinaryOperation`,
      },
    })),
    (Ma = ({ query: e, pageSize: t, children: n }) => n(fe(e))),
    (Na = (e) => !e),
    (Pa = () => ({
      from: { alias: `C6SD8Eryy`, data: ra, type: `Collection` },
      limit: { type: `LiteralValue`, value: 6 },
      orderBy: [
        { collection: `C6SD8Eryy`, direction: `desc`, name: `dkf1x4IKp`, type: `Identifier` },
      ],
      select: [
        { collection: `C6SD8Eryy`, name: `BYMITZ8Xq`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `yYm_8lPg5`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `d8qFSV8RA`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `dkf1x4IKp`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `EblzaHjbD`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `Kcl1THogg`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `CdSMjhlHk`, type: `Identifier` },
        { collection: `C6SD8Eryy`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `C6SD8Eryy`, name: `umV4sCUxl`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: !1 },
        type: `BinaryOperation`,
      },
    })),
    (Fa = () => ({
      from: { alias: `RO1PfJLuF`, data: ra, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `RO1PfJLuF`, name: `BYMITZ8Xq`, type: `Identifier` },
        { collection: `RO1PfJLuF`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `RO1PfJLuF`, name: `umV4sCUxl`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: !0 },
        type: `BinaryOperation`,
      },
    })),
    (Ia = { Desktop: `nEonl_3wf`, Phone: `uDPBcMjp2`, Tablet: `fls9uMZcu` }),
    (La = ({ value: e }) =>
      S()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ra = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ia[r.variant] ?? r.variant ?? `nEonl_3wf`,
    })),
    (za = D(
      te(function (e, r) {
        let i = s(null),
          c = r ?? i,
          l = t(),
          { activeLocale: u, contentLocale: d, setLocale: te } = ce(),
          g = Ae(),
          [re, y] = se({ initialValue: !0, parameterName: `events` }),
          { style: b, className: S, layoutId: C, variant: w, ...de } = Ra(e);
        pe(n(() => Bt({}, d), [d]));
        let [D, O] = oe(w, ga, !1),
          k = E(ya, Me, We, qe, Nt, ut, Be),
          fe = a(Oe)?.isLayoutTemplate,
          A = !!a(h)?.transition?.layout,
          j = xa(fe, A),
          me = xe(`cldwnK9uc`),
          he = s(null);
        we();
        let M = () => !_a() || D !== `uDPBcMjp2`,
          { activeVariantCallback: ge, delay: _e } = ie(void 0),
          ye = ge(async (...e) => {
            y?.(!0);
          }),
          be = ge(async (...e) => {
            y?.(!1);
          }),
          F = xe(`LfPR4Lfnj`),
          Ce = ue(),
          Te = T(),
          Ee = Na(re),
          De = xe(`fIlm_A1Rb`),
          ke = xe(`r8KDCx07F`),
          je = s(null),
          Ne = xe(`meJZlcd6c`),
          Pe = s(null);
        return (
          ae({}),
          f(Oe.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Ia,
              primaryVariantId: `nEonl_3wf`,
              variantClassNames: ba,
            },
            children: p(ne, {
              id: C ?? l,
              children: [
                f(La, { value: `html body { background: rgb(0, 0, 0); }` }),
                p(m.div, {
                  ...de,
                  className: E(k, `framer-ehnrz0`, S),
                  ref: c,
                  style: { ...b },
                  children: [
                    p(m.section, {
                      className: `framer-jqy87z`,
                      "data-framer-name": `Hero`,
                      layout: j,
                      children: [
                        p(`div`, {
                          className: `framer-1ns7g32`,
                          "data-framer-name": `Header`,
                          id: me,
                          ref: he,
                          children: [
                            f(`div`, {
                              className: `framer-10zp0yt`,
                              "data-framer-name": `Text`,
                              children: f(x, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: f(`h1`, {
                                    className: `framer-styles-preset-1gzpg4m`,
                                    "data-styles-preset": `gM4yNG9Qq`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    },
                                    children: `Meet, make, and connect at Framer meetups`,
                                  }),
                                }),
                                className: `framer-1l0stpq`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            f(`div`, {
                              className: `framer-11hv3v3`,
                              "data-framer-name": `Buttons`,
                              children: f(v, {
                                links: [
                                  {
                                    href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  f(_, {
                                    breakpoint: D,
                                    overrides: {
                                      uDPBcMjp2: { y: (g?.y || 0) + 0 + 0 + 60 + 0 + 0 + 79 + 0 },
                                    },
                                    children: f(P, {
                                      height: 34,
                                      y: (g?.y || 0) + 0 + 0 + 100 + 0 + 0 + 79 + 0,
                                      children: f(I, {
                                        className: `framer-1mlm31e-container`,
                                        nodeId: `Vl56brY0b`,
                                        scopeId: `vfKr2IJB_`,
                                        children: f(_, {
                                          breakpoint: D,
                                          overrides: {
                                            fls9uMZcu: { aq3hTZ9m1: e[1] },
                                            uDPBcMjp2: { aq3hTZ9m1: e[2], variant: $(`Her3HD7gg`) },
                                          },
                                          children: f(it, {
                                            aq3hTZ9m1: e[0],
                                            height: `100%`,
                                            id: `Vl56brY0b`,
                                            kw6l_suoH: `Apply to host`,
                                            layoutId: `Vl56brY0b`,
                                            ljsS0PDRT: 0,
                                            MBD8rTH3H: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            width: `100%`,
                                            xdxfhd9wh: `var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            }),
                          ],
                        }),
                        p(`div`, {
                          className: `framer-39xuxf`,
                          children: [
                            p(`div`, {
                              className: `framer-1ryu1zl`,
                              children: [
                                M() &&
                                  f(`div`, {
                                    className: `framer-1gvvoeo hidden-1w45x5u`,
                                    "data-border": !0,
                                    "data-framer-name": `Ticker`,
                                    children: f(P, {
                                      height: 300,
                                      width: `min(${g?.width || `100vw`} - 40px, 1200px)`,
                                      y: (g?.y || 0) + 0 + 0 + 100 + 153 + 0 + 0 + 0 + 0 + 0 + 0,
                                      children: f(I, {
                                        className: `framer-1nd3epi-container`,
                                        nodeId: `X_UhWT7xQ`,
                                        scopeId: `vfKr2IJB_`,
                                        children: f(xn, {
                                          height: `100%`,
                                          id: `X_UhWT7xQ`,
                                          layoutId: `X_UhWT7xQ`,
                                          style: { height: `100%`, width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                p(`div`, {
                                  className: `framer-1amqovd`,
                                  "data-border": !0,
                                  children: [
                                    f(`div`, {
                                      className: `framer-1c6uc1t`,
                                      "data-border": !0,
                                      children: p(`div`, {
                                        className: `framer-14qecq2`,
                                        "data-framer-name": `Events Filter`,
                                        children: [
                                          f(x, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-4eptxb`,
                                                "data-styles-preset": `XHuCPIQKc`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `Meetups calendar`,
                                              }),
                                            }),
                                            className: `framer-1pvys9f`,
                                            "data-framer-name": `Default`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          p(`div`, {
                                            className: `framer-1kx6fvc`,
                                            children: [
                                              f(_, {
                                                breakpoint: D,
                                                overrides: {
                                                  uDPBcMjp2: {
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      153 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      305.75 +
                                                      15 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                children: f(P, {
                                                  height: 35,
                                                  y:
                                                    (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    153 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    320 +
                                                    0 +
                                                    305.75 +
                                                    15 +
                                                    0 +
                                                    0 +
                                                    0,
                                                  children: f(I, {
                                                    className: `framer-af7r6o-container`,
                                                    "data-framer-name": `Upcoming Tab`,
                                                    name: `Upcoming Tab`,
                                                    nodeId: `MhzXVpdYK`,
                                                    scopeId: `vfKr2IJB_`,
                                                    children: f(B, {
                                                      height: `100%`,
                                                      I1UC3hbZV: ye,
                                                      id: `MhzXVpdYK`,
                                                      JkJtPwYeX: `Upcoming`,
                                                      layoutId: `MhzXVpdYK`,
                                                      name: `Upcoming Tab`,
                                                      variant: $(Sa(re, d)),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              f(_, {
                                                breakpoint: D,
                                                overrides: {
                                                  uDPBcMjp2: {
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      153 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      305.75 +
                                                      15 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                children: f(P, {
                                                  height: 35,
                                                  y:
                                                    (g?.y || 0) +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    153 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    320 +
                                                    0 +
                                                    305.75 +
                                                    15 +
                                                    0 +
                                                    0 +
                                                    0,
                                                  children: f(I, {
                                                    className: `framer-x31dqg-container`,
                                                    "data-framer-name": `Past Tab`,
                                                    name: `Past Tab`,
                                                    nodeId: `TBD4_yNX_`,
                                                    scopeId: `vfKr2IJB_`,
                                                    children: f(B, {
                                                      height: `100%`,
                                                      I1UC3hbZV: be,
                                                      id: `TBD4_yNX_`,
                                                      JkJtPwYeX: `Past`,
                                                      layoutId: `TBD4_yNX_`,
                                                      name: `Past Tab`,
                                                      variant: $(Ca(re, d)),
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
                                    re !== !1 &&
                                      f(`div`, {
                                        className: `framer-cbk5am`,
                                        "data-framer-name": `Upcoming Meetups List`,
                                        children: f(Se, {
                                          children: f(Ma, {
                                            query: ja(),
                                            children: (e, t, n) => {
                                              let r = e?.length ?? 0,
                                                i = Oa(r, 0);
                                              return p(ee, {
                                                children: [
                                                  e?.map(
                                                    (
                                                      {
                                                        BYMITZ8Xq: e,
                                                        CdSMjhlHk: t,
                                                        d8qFSV8RA: n,
                                                        dkf1x4IKp: r,
                                                        EblzaHjbD: i,
                                                        id: a,
                                                        Kcl1THogg: o,
                                                        yYm_8lPg5: s,
                                                      },
                                                      c
                                                    ) => (
                                                      (e ??= ``),
                                                      (s ??= ``),
                                                      (n ??= ``),
                                                      (i ??= ``),
                                                      (o ??= ``),
                                                      f(
                                                        ne,
                                                        {
                                                          id: `yFx24AEy8-${a}`,
                                                          children: f(ve.Provider, {
                                                            value: { BYMITZ8Xq: e },
                                                            children: f(v, {
                                                              links: [
                                                                {
                                                                  href: s,
                                                                  implicitPathVariables: {
                                                                    BYMITZ8Xq: e,
                                                                  },
                                                                },
                                                                {
                                                                  href: s,
                                                                  implicitPathVariables: {
                                                                    BYMITZ8Xq: e,
                                                                  },
                                                                },
                                                                {
                                                                  href: s,
                                                                  implicitPathVariables: {
                                                                    BYMITZ8Xq: e,
                                                                  },
                                                                },
                                                              ],
                                                              children: (a) =>
                                                                f(_, {
                                                                  breakpoint: D,
                                                                  overrides: {
                                                                    uDPBcMjp2: {
                                                                      y:
                                                                        (g?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        60 +
                                                                        153 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        370.75 +
                                                                        0 +
                                                                        0,
                                                                    },
                                                                  },
                                                                  children: f(P, {
                                                                    height: 180,
                                                                    width: `min(${g?.width || `100vw`} - 40px, 1200px)`,
                                                                    y:
                                                                      (g?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      100 +
                                                                      153 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      320 +
                                                                      0 +
                                                                      370.75 +
                                                                      0 +
                                                                      0,
                                                                    children: f(I, {
                                                                      className: `framer-1sebuyy-container`,
                                                                      "data-framer-name": `Meetup Card`,
                                                                      id: `${e}-${F}`,
                                                                      name: `Meetup Card`,
                                                                      nodeId: `LfPR4Lfnj`,
                                                                      ref: Te(`${e}-${F}`),
                                                                      scopeId: `vfKr2IJB_`,
                                                                      children: f(_, {
                                                                        breakpoint: D,
                                                                        overrides: {
                                                                          fls9uMZcu: {
                                                                            SOsJJGZMI: a[1],
                                                                          },
                                                                          uDPBcMjp2: {
                                                                            SOsJJGZMI: a[2],
                                                                            variant: $(`kbPKWHxph`),
                                                                          },
                                                                        },
                                                                        children: f(V, {
                                                                          afHQTs90Z: o,
                                                                          height: `100%`,
                                                                          id: `LfPR4Lfnj`,
                                                                          layoutId: `LfPR4Lfnj`,
                                                                          name: `Meetup Card`,
                                                                          r3OeMD_vx: i,
                                                                          SOsJJGZMI: a[0],
                                                                          style: { width: `100%` },
                                                                          SxmEnE6_f: Ea(r, Ce),
                                                                          sZ9NHKEYQ: n,
                                                                          variant: $(`uavBv7dhM`),
                                                                          width: `100%`,
                                                                          zI6CACc5m: Da(t),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                            }),
                                                          }),
                                                        },
                                                        a
                                                      )
                                                    )
                                                  ),
                                                  i !== !1 &&
                                                    p(`div`, {
                                                      className: `framer-1dtq5v1`,
                                                      "data-framer-name": `Empty State`,
                                                      children: [
                                                        f(m.div, {
                                                          className: `framer-191ydvw`,
                                                          "data-framer-name": `Scene`,
                                                          style: { transformPerspective: 1400 },
                                                          children: f(m.div, {
                                                            className: `framer-1wipcae`,
                                                            "data-framer-name": `Tilt`,
                                                            style: { originY: 1, rotateX: -16 },
                                                            children: f(la, {
                                                              __framer__loop: Aa,
                                                              __framer__loopEffectEnabled: !0,
                                                              __framer__loopPauseOffscreen: !0,
                                                              __framer__loopRepeatDelay: 0,
                                                              __framer__loopRepeatType: `loop`,
                                                              __framer__loopTransition: ka,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-1tmfwmn`,
                                                              "data-framer-name": `Spin Axis`,
                                                              style: { originY: 1 },
                                                              children: p(m.div, {
                                                                className: `framer-v2xlcu`,
                                                                "data-framer-name": `Framer Mark`,
                                                                style: { rotateY: -40 },
                                                                children: [
                                                                  f(m.div, {
                                                                    className: `framer-1mnzabx`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-11wtsca`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1y5vzy4`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-18v8zr7`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-lc77f2`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-19ddhml`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1td06ri`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1m65152`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-bg6q2e`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-chqvu2`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-12cxt6b`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-18dj1j9`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1c5j218`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1ezkvt0`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-c0qrjc`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1x2dhh5`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-igsirk`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-fw1zxf`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-365i2b`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-ir3jvy`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-mtgjk0`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-8rmryd`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1uk7h58`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1ion18s`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-x06r65`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1y7e0js`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1j3yq4t`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1e3xbw9`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-c29wkm`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-fuayf5`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1ntqt1t`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-e4y081`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-15s1ytp`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-5fpz8v`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-o06533`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-9hm48p`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1tw4xem`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1ao6u6v`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-twxsdd`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1558qpa`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-fki739`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-pmu3g9`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1k4xgeg`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1hj72oq`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-fyqmxd`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1uynbtm`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-vtyw4y`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-c5qgm2`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1j4yfxn`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-xgeyxn`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1vea49u`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-mijylr`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-t6t1bz`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1a9ckjx`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        f(x, {
                                                          __fromCanvasComponent: !0,
                                                          children: f(o, {
                                                            children: p(`p`, {
                                                              className: `framer-styles-preset-vn6u90`,
                                                              "data-styles-preset": `kuibWYBoM`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                                              },
                                                              children: [
                                                                `No upcoming meetups yet. Check back soon or `,
                                                                f(le, {
                                                                  href: `https://luma.com/framer-events`,
                                                                  motionChild: !0,
                                                                  nodeId: `CVA6Ev_so`,
                                                                  openInNewTab: !0,
                                                                  relValues: [],
                                                                  scopeId: `vfKr2IJB_`,
                                                                  smoothScroll: !1,
                                                                  children: f(m.a, {
                                                                    className: `framer-styles-preset-17uz1e6`,
                                                                    "data-styles-preset": `lauDPxbHX`,
                                                                    children: `browse all events`,
                                                                  }),
                                                                }),
                                                                ` on Luma.`,
                                                              ],
                                                            }),
                                                          }),
                                                          className: `framer-4yd9af`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              });
                                            },
                                          }),
                                        }),
                                      }),
                                    Ee !== !1 &&
                                      f(`div`, {
                                        className: `framer-9zwen3`,
                                        "data-framer-name": `Past Meetups List`,
                                        children: f(Se, {
                                          children: f(Ma, {
                                            query: Pa(),
                                            children: (e, t, n) => {
                                              let r = e?.length ?? 0,
                                                i = Oa(r, 0);
                                              return p(ee, {
                                                children: [
                                                  e?.map(
                                                    (
                                                      {
                                                        BYMITZ8Xq: e,
                                                        CdSMjhlHk: t,
                                                        d8qFSV8RA: n,
                                                        dkf1x4IKp: r,
                                                        EblzaHjbD: i,
                                                        id: a,
                                                        Kcl1THogg: o,
                                                        yYm_8lPg5: s,
                                                      },
                                                      c
                                                    ) => (
                                                      (e ??= ``),
                                                      (s ??= ``),
                                                      (n ??= ``),
                                                      (i ??= ``),
                                                      (o ??= ``),
                                                      f(
                                                        ne,
                                                        {
                                                          id: `C6SD8Eryy-${a}`,
                                                          children: f(ve.Provider, {
                                                            value: { BYMITZ8Xq: e },
                                                            children: f(v, {
                                                              links: [
                                                                {
                                                                  href: s,
                                                                  implicitPathVariables: {
                                                                    BYMITZ8Xq: e,
                                                                  },
                                                                },
                                                                {
                                                                  href: s,
                                                                  implicitPathVariables: {
                                                                    BYMITZ8Xq: e,
                                                                  },
                                                                },
                                                                {
                                                                  href: s,
                                                                  implicitPathVariables: {
                                                                    BYMITZ8Xq: e,
                                                                  },
                                                                },
                                                              ],
                                                              children: (a) =>
                                                                f(_, {
                                                                  breakpoint: D,
                                                                  overrides: {
                                                                    uDPBcMjp2: {
                                                                      y:
                                                                        (g?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        60 +
                                                                        153 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        370.75 +
                                                                        0 +
                                                                        0,
                                                                    },
                                                                  },
                                                                  children: f(P, {
                                                                    height: 180,
                                                                    width: `min(${g?.width || `100vw`} - 40px, 1200px)`,
                                                                    y:
                                                                      (g?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      100 +
                                                                      153 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      320 +
                                                                      0 +
                                                                      370.75 +
                                                                      0 +
                                                                      0,
                                                                    children: f(I, {
                                                                      className: `framer-1j8ivyo-container`,
                                                                      "data-framer-name": `Meetup Card`,
                                                                      id: `${e}-${De}`,
                                                                      name: `Meetup Card`,
                                                                      nodeId: `fIlm_A1Rb`,
                                                                      ref: Te(`${e}-${De}`),
                                                                      scopeId: `vfKr2IJB_`,
                                                                      children: f(_, {
                                                                        breakpoint: D,
                                                                        overrides: {
                                                                          fls9uMZcu: {
                                                                            SOsJJGZMI: a[1],
                                                                          },
                                                                          uDPBcMjp2: {
                                                                            SOsJJGZMI: a[2],
                                                                          },
                                                                        },
                                                                        children: f(V, {
                                                                          afHQTs90Z: o,
                                                                          height: `100%`,
                                                                          id: `fIlm_A1Rb`,
                                                                          layoutId: `fIlm_A1Rb`,
                                                                          name: `Meetup Card`,
                                                                          r3OeMD_vx: i,
                                                                          SOsJJGZMI: a[0],
                                                                          style: { width: `100%` },
                                                                          SxmEnE6_f: Ea(r, Ce),
                                                                          sZ9NHKEYQ: n,
                                                                          variant: $(`oWndBM1H6`),
                                                                          width: `100%`,
                                                                          zI6CACc5m: Da(t),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                            }),
                                                          }),
                                                        },
                                                        a
                                                      )
                                                    )
                                                  ),
                                                  i !== !1 &&
                                                    p(`div`, {
                                                      className: `framer-7nzzv6`,
                                                      "data-framer-name": `Empty State`,
                                                      children: [
                                                        f(m.div, {
                                                          className: `framer-2zowwp`,
                                                          "data-framer-name": `Scene`,
                                                          style: { transformPerspective: 1400 },
                                                          children: f(m.div, {
                                                            className: `framer-o5s621`,
                                                            "data-framer-name": `Tilt`,
                                                            style: { originY: 1, rotateX: -16 },
                                                            children: f(la, {
                                                              __framer__loop: Aa,
                                                              __framer__loopEffectEnabled: !0,
                                                              __framer__loopPauseOffscreen: !0,
                                                              __framer__loopRepeatDelay: 0,
                                                              __framer__loopRepeatType: `loop`,
                                                              __framer__loopTransition: ka,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-1re5jud`,
                                                              "data-framer-name": `Spin Axis`,
                                                              style: { originY: 1 },
                                                              children: p(m.div, {
                                                                className: `framer-19b9mg`,
                                                                "data-framer-name": `Framer Mark`,
                                                                style: { rotateY: -40 },
                                                                children: [
                                                                  f(m.div, {
                                                                    className: `framer-lmn8sz`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-l0cmqh`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1sp9ivg`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-ne7xuj`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-5izfvd`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1hiongf`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-eg2cio`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1d1cglk`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-4uo8ff`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1ughe8f`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-yr9m93`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1qrf2h8`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-10yas0n`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-ueem68`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1vz4hp0`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-ny263o`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 45,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-6iicer`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1hb1ru3`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-t6sft3`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-bi58th`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-18h5ln7`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-i78nj1`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-f5s4um`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-7exh3y`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-korf8x`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-3t4rj7`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: 20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-19yesio`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-sw6v1u`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: { originX: 0, z: -20 },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-nww26k`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-99bzsm`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1mfsv9o`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-19d213v`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-h8t31d`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      rotateX: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-huvihd`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1n6ob3h`,
                                                                    "data-framer-name": `Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      rotateX: 90,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-68d934`,
                                                                    "data-framer-name": `Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: -135,
                                                                      z: -20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-6ffpyl`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1rfzwq7`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1cs9e58`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-c6tqyu`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1j3hgo1`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1yjn691`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-15corgt`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-rnbhm8`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-wvey8f`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-108fufw`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1eykmrt`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1c2tv1q`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-j9yknx`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-14kro6c`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-ocwslh`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-wdvush`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-1cd796l`,
                                                                    "data-framer-name": `Depth Edge Cross`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotate: 90,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                  f(m.div, {
                                                                    className: `framer-ws8it4`,
                                                                    "data-framer-name": `Depth Edge`,
                                                                    style: {
                                                                      originX: 0,
                                                                      rotateY: 90,
                                                                      z: 20,
                                                                    },
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        f(x, {
                                                          __fromCanvasComponent: !0,
                                                          children: f(o, {
                                                            children: f(`p`, {
                                                              className: `framer-styles-preset-vn6u90`,
                                                              "data-styles-preset": `kuibWYBoM`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                                              },
                                                              children: `No past meetups yet. Check back soon or browse all events on Luma.`,
                                                            }),
                                                          }),
                                                          className: `framer-1rnpvmm`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              });
                                            },
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-17zsyzg`,
                              "data-framer-name": `Upcoming Link Condition`,
                              children: f(Se, {
                                children: f(Ma, {
                                  query: Fa(),
                                  children: (e, t, n) =>
                                    f(ee, {
                                      children: e?.map(
                                        ({ BYMITZ8Xq: e, id: t }, n) => (
                                          (e ??= ``),
                                          f(
                                            ne,
                                            {
                                              id: `RO1PfJLuF-${t}`,
                                              children: f(ve.Provider, {
                                                value: { BYMITZ8Xq: e },
                                                children: f(`div`, {
                                                  className: `framer-xn4yyq`,
                                                  "data-framer-name": `Upcoming Link Item`,
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(m.section, {
                      className: `framer-10rselg`,
                      "data-framer-name": `Benefits`,
                      id: ke,
                      layout: j,
                      ref: je,
                      children: [
                        p(`header`, {
                          className: `framer-2bqt87`,
                          "data-framer-name": `Header`,
                          children: [
                            f(x, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(`h2`, {
                                  className: `framer-styles-preset-fbtpvo`,
                                  "data-styles-preset": `qRN7MgZKk`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `start` },
                                  children: `Organize a meetup`,
                                }),
                              }),
                              className: `framer-1b2xel3`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(v, {
                              links: [
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(_, {
                                  breakpoint: D,
                                  overrides: {
                                    fls9uMZcu: { y: (g?.y || 0) + 0 + 1264.5 + 80 + 0 + 0 + 14.4 },
                                    uDPBcMjp2: { y: (g?.y || 0) + 0 + 964.5 + 60 + 0 + 0 + 68.4 },
                                  },
                                  children: f(P, {
                                    height: 34,
                                    y: (g?.y || 0) + 0 + 1324.5 + 120 + 0 + 0 + 14.4,
                                    children: f(I, {
                                      className: `framer-4ul3zw-container`,
                                      nodeId: `XqzsZD1df`,
                                      scopeId: `vfKr2IJB_`,
                                      children: f(_, {
                                        breakpoint: D,
                                        overrides: {
                                          fls9uMZcu: { aq3hTZ9m1: e[1] },
                                          uDPBcMjp2: { aq3hTZ9m1: e[2], variant: $(`Her3HD7gg`) },
                                        },
                                        children: f(it, {
                                          aq3hTZ9m1: e[0],
                                          height: `100%`,
                                          id: `XqzsZD1df`,
                                          kw6l_suoH: `Apply to host`,
                                          layoutId: `XqzsZD1df`,
                                          ljsS0PDRT: 0,
                                          MBD8rTH3H: `var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))`,
                                          width: `100%`,
                                          xdxfhd9wh: `rgb(255, 255, 255)`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        p(`div`, {
                          className: `framer-gbiprp`,
                          "data-border": !0,
                          children: [
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  height: 60,
                                  width: `385px`,
                                  y: (g?.y || 0) + 0 + 1264.5 + 80 + 88.4 + 0 + 0,
                                },
                                uDPBcMjp2: {
                                  height: 60,
                                  width: `350px`,
                                  y: (g?.y || 0) + 0 + 964.5 + 60 + 132.4 + 0 + 0,
                                },
                              },
                              children: f(P, {
                                height: 138.5,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 4, 50px)`,
                                y: (g?.y || 0) + 0 + 1324.5 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-1dbfbcp-container`,
                                  "data-framer-name": `Event budget`,
                                  name: `Event budget`,
                                  nodeId: `gSdXYvAcP`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { style: { width: `100%` } } },
                                    children: f(R, {
                                      CMxUKwqs7: 2,
                                      EgTPw1Hvi: xt,
                                      height: `100%`,
                                      HQAMbCX8z: `Event budget`,
                                      id: `gSdXYvAcP`,
                                      JVfwE60h6: `Access food, supplies, and event reimbursement`,
                                      layoutId: `gSdXYvAcP`,
                                      name: `Event budget`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  height: 60,
                                  width: `385px`,
                                  y: (g?.y || 0) + 0 + 1264.5 + 80 + 88.4 + 0 + 0,
                                },
                                uDPBcMjp2: {
                                  height: 60,
                                  width: `350px`,
                                  y: (g?.y || 0) + 0 + 964.5 + 60 + 132.4 + 0 + 60,
                                },
                              },
                              children: f(P, {
                                height: 138.5,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 4, 50px)`,
                                y: (g?.y || 0) + 0 + 1324.5 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-161pvqc-container`,
                                  "data-framer-name": `Official Framer merch`,
                                  name: `Official Framer merch`,
                                  nodeId: `vdtm3Pjcw`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { style: { width: `100%` } } },
                                    children: f(R, {
                                      CMxUKwqs7: 2,
                                      EgTPw1Hvi: ot,
                                      height: `100%`,
                                      HQAMbCX8z: `Official Framer merch`,
                                      id: `vdtm3Pjcw`,
                                      JVfwE60h6: `Claim Framer merch for hosts and attendees`,
                                      layoutId: `vdtm3Pjcw`,
                                      name: `Official Framer merch`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  height: 60,
                                  width: `385px`,
                                  y: (g?.y || 0) + 0 + 1264.5 + 80 + 88.4 + 0 + 60,
                                },
                                uDPBcMjp2: {
                                  height: 60,
                                  width: `350px`,
                                  y: (g?.y || 0) + 0 + 964.5 + 60 + 132.4 + 0 + 120,
                                },
                              },
                              children: f(P, {
                                height: 138.5,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 4, 50px)`,
                                y: (g?.y || 0) + 0 + 1324.5 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-kxk2oj-container`,
                                  "data-framer-name": `Framer Pro and Agent credits`,
                                  name: `Framer Pro and Agent credits`,
                                  nodeId: `KE6mJH8q3`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { style: { width: `100%` } } },
                                    children: f(R, {
                                      CMxUKwqs7: 2,
                                      EgTPw1Hvi: nt,
                                      height: `100%`,
                                      HQAMbCX8z: `Framer Pro and Agent credits`,
                                      id: `KE6mJH8q3`,
                                      JVfwE60h6: `Receive one year of Framer Pro plus agent credits`,
                                      layoutId: `KE6mJH8q3`,
                                      name: `Framer Pro and Agent credits`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  height: 60,
                                  width: `385px`,
                                  y: (g?.y || 0) + 0 + 1264.5 + 80 + 88.4 + 0 + 60,
                                },
                                uDPBcMjp2: {
                                  height: 60,
                                  width: `350px`,
                                  y: (g?.y || 0) + 0 + 964.5 + 60 + 132.4 + 0 + 180,
                                },
                              },
                              children: f(P, {
                                height: 138.5,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 4, 50px)`,
                                y: (g?.y || 0) + 0 + 1324.5 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-rwk4uh-container`,
                                  "data-framer-name": `Artwork and promotion`,
                                  name: `Artwork and promotion`,
                                  nodeId: `uJ5T7xrrs`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { style: { width: `100%` } } },
                                    children: f(R, {
                                      CMxUKwqs7: 2,
                                      EgTPw1Hvi: ht,
                                      height: `100%`,
                                      HQAMbCX8z: `Creative support`,
                                      id: `uJ5T7xrrs`,
                                      JVfwE60h6: `Get event artwork and promotion across Framer channels`,
                                      layoutId: `uJ5T7xrrs`,
                                      name: `Artwork and promotion`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(m.section, {
                      className: `framer-1haz6eu`,
                      "data-framer-name": `Meetup Types`,
                      layout: j,
                      children: [
                        p(`header`, {
                          className: `framer-1w372xi`,
                          "data-framer-name": `Header`,
                          children: [
                            f(x, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(`h2`, {
                                  className: `framer-styles-preset-fbtpvo`,
                                  "data-styles-preset": `qRN7MgZKk`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Ways to run a Framer meetup`,
                                }),
                              }),
                              className: `framer-q7ho5g`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(v, {
                              links: [
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(_, {
                                  breakpoint: D,
                                  overrides: {
                                    fls9uMZcu: { y: (g?.y || 0) + 0 + 1632.9 + 80 + 0 + 0 + 14.4 },
                                    uDPBcMjp2: { y: (g?.y || 0) + 0 + 1456.9 + 60 + 0 + 0 + 68.4 },
                                  },
                                  children: f(P, {
                                    height: 34,
                                    y: (g?.y || 0) + 0 + 1791.4 + 120 + 0 + 0 + 14.4,
                                    children: f(I, {
                                      className: `framer-6vjqq1-container`,
                                      nodeId: `TVsNmCh90`,
                                      scopeId: `vfKr2IJB_`,
                                      children: f(_, {
                                        breakpoint: D,
                                        overrides: {
                                          fls9uMZcu: { aq3hTZ9m1: e[1] },
                                          uDPBcMjp2: { aq3hTZ9m1: e[2], variant: $(`Her3HD7gg`) },
                                        },
                                        children: f(it, {
                                          aq3hTZ9m1: e[0],
                                          height: `100%`,
                                          id: `TVsNmCh90`,
                                          kw6l_suoH: `Apply to host`,
                                          layoutId: `TVsNmCh90`,
                                          ljsS0PDRT: 0,
                                          MBD8rTH3H: `var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))`,
                                          width: `100%`,
                                          xdxfhd9wh: `rgb(255, 255, 255)`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        p(`div`, {
                          className: `framer-xco6z3`,
                          "data-border": !0,
                          children: [
                            p(`div`, {
                              className: `framer-7a3v7e`,
                              "data-border": !0,
                              "data-framer-name": `Card`,
                              children: [
                                f(_, {
                                  breakpoint: D,
                                  overrides: {
                                    fls9uMZcu: {
                                      background: {
                                        alt: `Person working on a laptop at a wooden desk`,
                                        fit: `fill`,
                                        intrinsicHeight: 1302,
                                        intrinsicWidth: 1636,
                                        loading: N(
                                          (g?.y || 0) + 0 + 1632.9 + 80 + 88.4 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 1302,
                                        pixelWidth: 1636,
                                        positionX: `left`,
                                        positionY: `center`,
                                        sizes: `max((min(${g?.width || `100vw`} - 40px, 1200px) - 20px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?width=1636&height=1302`,
                                        srcSet: `https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?scale-down-to=512&width=1636&height=1302 512w,https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?scale-down-to=1024&width=1636&height=1302 1024w,https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?width=1636&height=1302 1636w`,
                                      },
                                    },
                                    uDPBcMjp2: {
                                      background: {
                                        alt: `Person working on a laptop at a wooden desk`,
                                        fit: `fill`,
                                        intrinsicHeight: 1302,
                                        intrinsicWidth: 1636,
                                        loading: N(
                                          (g?.y || 0) + 0 + 1456.9 + 60 + 132.4 + 0 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 1302,
                                        pixelWidth: 1636,
                                        positionX: `left`,
                                        positionY: `center`,
                                        sizes: `min(${g?.width || `100vw`} - 40px, 1200px)`,
                                        src: `https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?width=1636&height=1302`,
                                        srcSet: `https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?scale-down-to=512&width=1636&height=1302 512w,https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?scale-down-to=1024&width=1636&height=1302 1024w,https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?width=1636&height=1302 1636w`,
                                      },
                                    },
                                  },
                                  children: f(L, {
                                    background: {
                                      alt: `Person working on a laptop at a wooden desk`,
                                      fit: `fill`,
                                      intrinsicHeight: 1302,
                                      intrinsicWidth: 1636,
                                      loading: N((g?.y || 0) + 0 + 1791.4 + 120 + 88.4 + 0 + 0 + 0),
                                      pixelHeight: 1302,
                                      pixelWidth: 1636,
                                      positionX: `left`,
                                      positionY: `center`,
                                      sizes: `max(min(${g?.width || `100vw`} - 40px, 1200px) / 3, 1px)`,
                                      src: `https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?width=1636&height=1302`,
                                      srcSet: `https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?scale-down-to=512&width=1636&height=1302 512w,https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?scale-down-to=1024&width=1636&height=1302 1024w,https://framerusercontent.com/images/6EQ9MW0Vrpg04584vU4wHgUwLk.png?width=1636&height=1302 1636w`,
                                    },
                                    className: `framer-178jkrc`,
                                    "data-border": !0,
                                    "data-framer-name": `Visual`,
                                    draggable: `false`,
                                  }),
                                }),
                                p(`div`, {
                                  className: `framer-153s8cr`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`h3`, {
                                          className: `framer-styles-preset-ojsfn5`,
                                          "data-styles-preset": `VQBQVu8qk`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          },
                                          children: f(`strong`, { children: `Community meetup` }),
                                        }),
                                      }),
                                      className: `framer-1947iz8`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                          },
                                          children: f(`em`, {
                                            children: `Casual meetups where local Framer users can network, share what they’re working on, and exchange tips in a relaxed, social setting.`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-8mrsyc`,
                                      fonts: [`Inter`, `Inter-Italic`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p(`div`, {
                              className: `framer-1r584nt`,
                              "data-border": !0,
                              "data-framer-name": `Card`,
                              children: [
                                f(_, {
                                  breakpoint: D,
                                  overrides: {
                                    fls9uMZcu: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: N(
                                          (g?.y || 0) + 0 + 1632.9 + 80 + 88.4 + 0 + 370 + 0
                                        ),
                                        pixelHeight: 1365,
                                        pixelWidth: 2048,
                                        sizes: `max((min(${g?.width || `100vw`} - 40px, 1200px) - 20px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?width=2048&height=1365`,
                                        srcSet: `https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?scale-down-to=512&width=2048&height=1365 512w,https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?scale-down-to=1024&width=2048&height=1365 1024w,https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?width=2048&height=1365 2048w`,
                                      },
                                    },
                                    uDPBcMjp2: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: N(
                                          (g?.y || 0) + 0 + 1456.9 + 60 + 132.4 + 0 + 535.8 + 0 + 0
                                        ),
                                        pixelHeight: 1365,
                                        pixelWidth: 2048,
                                        sizes: `min(${g?.width || `100vw`} - 40px, 1200px)`,
                                        src: `https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?width=2048&height=1365`,
                                        srcSet: `https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?scale-down-to=512&width=2048&height=1365 512w,https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?scale-down-to=1024&width=2048&height=1365 1024w,https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?width=2048&height=1365 2048w`,
                                      },
                                    },
                                  },
                                  children: f(L, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: N((g?.y || 0) + 0 + 1791.4 + 120 + 88.4 + 0 + 0 + 0),
                                      pixelHeight: 1365,
                                      pixelWidth: 2048,
                                      sizes: `max(min(${g?.width || `100vw`} - 40px, 1200px) / 3, 1px)`,
                                      src: `https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?width=2048&height=1365`,
                                      srcSet: `https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?scale-down-to=512&width=2048&height=1365 512w,https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?scale-down-to=1024&width=2048&height=1365 1024w,https://framerusercontent.com/images/loby3kV2H5Hm4fgSSVmQjwI4BQ4.jpg?width=2048&height=1365 2048w`,
                                    },
                                    className: `framer-1gv2hq`,
                                    "data-framer-name": `Visual`,
                                    draggable: `false`,
                                  }),
                                }),
                                p(`div`, {
                                  className: `framer-p2rk01`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`h3`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          },
                                          children: `Speaker night`,
                                        }),
                                      }),
                                      className: `framer-45axur`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                          },
                                          children: `Events featuring talks or panels from Framer creators and design leaders, offering inspiration and insights to your community.`,
                                        }),
                                      }),
                                      className: `framer-1h0c2zr`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p(`div`, {
                              className: `framer-1q2epnb`,
                              "data-border": !0,
                              "data-framer-name": `Card`,
                              children: [
                                f(_, {
                                  breakpoint: D,
                                  overrides: {
                                    fls9uMZcu: {
                                      background: {
                                        alt: `Hand using a digital stylus on a tablet screen`,
                                        fit: `fill`,
                                        intrinsicHeight: 1184,
                                        intrinsicWidth: 1262,
                                        loading: N(
                                          (g?.y || 0) + 0 + 1632.9 + 80 + 88.4 + 0 + 740 + 0
                                        ),
                                        pixelHeight: 1184,
                                        pixelWidth: 1262,
                                        sizes: `max((min(${g?.width || `100vw`} - 40px, 1200px) - 20px) / 2, 1px)`,
                                        src: `https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?width=1262&height=1184`,
                                        srcSet: `https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?scale-down-to=512&width=1262&height=1184 512w,https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?scale-down-to=1024&width=1262&height=1184 1024w,https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?width=1262&height=1184 1262w`,
                                      },
                                    },
                                    uDPBcMjp2: {
                                      background: {
                                        alt: `Hand using a digital stylus on a tablet screen`,
                                        fit: `fill`,
                                        intrinsicHeight: 1184,
                                        intrinsicWidth: 1262,
                                        loading: N(
                                          (g?.y || 0) + 0 + 1456.9 + 60 + 132.4 + 0 + 1071.6 + 0 + 0
                                        ),
                                        pixelHeight: 1184,
                                        pixelWidth: 1262,
                                        sizes: `min(${g?.width || `100vw`} - 40px, 1200px)`,
                                        src: `https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?width=1262&height=1184`,
                                        srcSet: `https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?scale-down-to=512&width=1262&height=1184 512w,https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?scale-down-to=1024&width=1262&height=1184 1024w,https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?width=1262&height=1184 1262w`,
                                      },
                                    },
                                  },
                                  children: f(L, {
                                    background: {
                                      alt: `Hand using a digital stylus on a tablet screen`,
                                      fit: `fill`,
                                      intrinsicHeight: 1184,
                                      intrinsicWidth: 1262,
                                      loading: N((g?.y || 0) + 0 + 1791.4 + 120 + 88.4 + 0 + 0 + 0),
                                      pixelHeight: 1184,
                                      pixelWidth: 1262,
                                      sizes: `max(min(${g?.width || `100vw`} - 40px, 1200px) / 3, 1px)`,
                                      src: `https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?width=1262&height=1184`,
                                      srcSet: `https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?scale-down-to=512&width=1262&height=1184 512w,https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?scale-down-to=1024&width=1262&height=1184 1024w,https://framerusercontent.com/images/NwoHAlz9H1BbtTB8jGzHOILBMLg.png?width=1262&height=1184 1262w`,
                                    },
                                    className: `framer-5jxxkn`,
                                    "data-framer-name": `Visual`,
                                    draggable: `false`,
                                  }),
                                }),
                                p(`div`, {
                                  className: `framer-vd6vmk`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`h3`, {
                                          className: `framer-styles-preset-ojsfn5`,
                                          "data-styles-preset": `VQBQVu8qk`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          },
                                          children: f(`strong`, { children: `Workshop` }),
                                        }),
                                      }),
                                      className: `framer-av9u01`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(x, {
                                      __fromCanvasComponent: !0,
                                      children: f(o, {
                                        children: f(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                          },
                                          children: f(`em`, {
                                            children: `Hands-on sessions where attendees learn and build with Framer, whether creating their first site or sharpening their skills alongside others.`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-15fgqsc`,
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
                      ],
                    }),
                    p(m.section, {
                      className: `framer-1oe9424`,
                      "data-framer-name": `Host Eligibility`,
                      layout: j,
                      children: [
                        p(`header`, {
                          className: `framer-16b4ver`,
                          "data-framer-name": `Header`,
                          children: [
                            f(x, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(`h2`, {
                                  className: `framer-styles-preset-fbtpvo`,
                                  "data-styles-preset": `qRN7MgZKk`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `start` },
                                  children: `What hosting involves`,
                                }),
                              }),
                              className: `framer-1szidk5`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(v, {
                              links: [
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(_, {
                                  breakpoint: D,
                                  overrides: {
                                    fls9uMZcu: { y: (g?.y || 0) + 0 + 2991.3 + 100 + 0 + 0 + 14.4 },
                                    uDPBcMjp2: { y: (g?.y || 0) + 0 + 3316.7 + 60 + 0 + 0 + 68.4 },
                                  },
                                  children: f(P, {
                                    height: 34,
                                    y: (g?.y || 0) + 0 + 2652.1 + 120 + 0 + 0 + 14.4,
                                    children: f(I, {
                                      className: `framer-p2rzl2-container`,
                                      nodeId: `h8IMJC_kv`,
                                      scopeId: `vfKr2IJB_`,
                                      children: f(_, {
                                        breakpoint: D,
                                        overrides: {
                                          fls9uMZcu: { aq3hTZ9m1: e[1] },
                                          uDPBcMjp2: { aq3hTZ9m1: e[2], variant: $(`Her3HD7gg`) },
                                        },
                                        children: f(it, {
                                          aq3hTZ9m1: e[0],
                                          height: `100%`,
                                          id: `h8IMJC_kv`,
                                          kw6l_suoH: `Apply to host`,
                                          layoutId: `h8IMJC_kv`,
                                          ljsS0PDRT: 0,
                                          MBD8rTH3H: `var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1))`,
                                          width: `100%`,
                                          xdxfhd9wh: `rgb(255, 255, 255)`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        p(`div`, {
                          className: `framer-1hyysa3`,
                          "data-border": !0,
                          children: [
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 2, 50px)`,
                                  y: (g?.y || 0) + 0 + 2991.3 + 100 + 88.4 + 0 + 0,
                                },
                                uDPBcMjp2: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3316.7 + 60 + 142.4 + 0 + 0,
                                },
                              },
                              children: f(P, {
                                height: 60,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 2652.1 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-1nsvvwo-container`,
                                  "data-framer-name": `Host every three months`,
                                  name: `Host every three months`,
                                  nodeId: `K2AMeqO3Z`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { variant: $(`QbH1X3Y9b`) } },
                                    children: f(R, {
                                      CMxUKwqs7: 3,
                                      EgTPw1Hvi: Lt,
                                      height: `100%`,
                                      HQAMbCX8z: `Host every three months`,
                                      id: `K2AMeqO3Z`,
                                      JVfwE60h6: `Host one Framer meetup every three months`,
                                      layoutId: `K2AMeqO3Z`,
                                      name: `Host every three months`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 2, 50px)`,
                                  y: (g?.y || 0) + 0 + 2991.3 + 100 + 88.4 + 0 + 0,
                                },
                                uDPBcMjp2: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3316.7 + 60 + 142.4 + 0 + 60,
                                },
                              },
                              children: f(P, {
                                height: 60,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 2652.1 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-7z0kzi-container`,
                                  "data-framer-name": `Welcome 10+ attendees`,
                                  name: `Welcome 10+ attendees`,
                                  nodeId: `MwTiLmGfX`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { variant: $(`QbH1X3Y9b`) } },
                                    children: f(R, {
                                      CMxUKwqs7: 3,
                                      EgTPw1Hvi: ft,
                                      height: `100%`,
                                      HQAMbCX8z: `Welcome 10+ attendees`,
                                      id: `MwTiLmGfX`,
                                      JVfwE60h6: `Plan each meetup for at least 10 Framer creators`,
                                      layoutId: `MwTiLmGfX`,
                                      name: `Welcome 10+ attendees`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 2, 50px)`,
                                  y: (g?.y || 0) + 0 + 2991.3 + 100 + 88.4 + 0 + 60,
                                },
                                uDPBcMjp2: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3316.7 + 60 + 142.4 + 0 + 120,
                                },
                              },
                              children: f(P, {
                                height: 60,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 2652.1 + 120 + 88.4 + 0 + 0,
                                children: f(I, {
                                  className: `framer-127fhhk-container`,
                                  "data-framer-name": `Capture the meetup`,
                                  name: `Capture the meetup`,
                                  nodeId: `gxupZ6jng`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { variant: $(`QbH1X3Y9b`) } },
                                    children: f(R, {
                                      CMxUKwqs7: 3,
                                      EgTPw1Hvi: ht,
                                      height: `100%`,
                                      HQAMbCX8z: `Capture the meetup`,
                                      id: `gxupZ6jng`,
                                      JVfwE60h6: `Take photos or video to document the event`,
                                      layoutId: `gxupZ6jng`,
                                      name: `Capture the meetup`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 2, 50px)`,
                                  y: (g?.y || 0) + 0 + 2991.3 + 100 + 88.4 + 0 + 60,
                                },
                                uDPBcMjp2: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3316.7 + 60 + 142.4 + 0 + 180,
                                },
                              },
                              children: f(P, {
                                height: 60,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 2652.1 + 120 + 88.4 + 0 + 60,
                                children: f(I, {
                                  className: `framer-ky1nne-container`,
                                  "data-framer-name": `Share the meetup`,
                                  name: `Share the meetup`,
                                  nodeId: `TH1FENCrj`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { variant: $(`QbH1X3Y9b`) } },
                                    children: f(R, {
                                      CMxUKwqs7: 3,
                                      EgTPw1Hvi: et,
                                      height: `100%`,
                                      HQAMbCX8z: `Share the meetup`,
                                      id: `TH1FENCrj`,
                                      JVfwE60h6: `Post about it on X, LinkedIn, or Instagram`,
                                      layoutId: `TH1FENCrj`,
                                      name: `Share the meetup`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 2, 50px)`,
                                  y: (g?.y || 0) + 0 + 2991.3 + 100 + 88.4 + 0 + 120,
                                },
                                uDPBcMjp2: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3316.7 + 60 + 142.4 + 0 + 240,
                                },
                              },
                              children: f(P, {
                                height: 60,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 2652.1 + 120 + 88.4 + 0 + 60,
                                children: f(I, {
                                  className: `framer-1l2rgpt-container`,
                                  "data-framer-name": `Plan and run the event`,
                                  name: `Plan and run the event`,
                                  nodeId: `PAoaVUSVM`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { variant: $(`QbH1X3Y9b`) } },
                                    children: f(R, {
                                      CMxUKwqs7: 3,
                                      EgTPw1Hvi: Ft,
                                      height: `100%`,
                                      HQAMbCX8z: `Plan and run the event`,
                                      id: `PAoaVUSVM`,
                                      JVfwE60h6: `Handle the venue, food, check-in, and agenda`,
                                      layoutId: `PAoaVUSVM`,
                                      name: `Plan and run the event`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            f(_, {
                              breakpoint: D,
                              overrides: {
                                fls9uMZcu: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 2, 50px)`,
                                  y: (g?.y || 0) + 0 + 2991.3 + 100 + 88.4 + 0 + 120,
                                },
                                uDPBcMjp2: {
                                  width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px), 50px)`,
                                  y: (g?.y || 0) + 0 + 3316.7 + 60 + 142.4 + 0 + 300,
                                },
                              },
                              children: f(P, {
                                height: 60,
                                width: `max(min(min(${g?.width || `100vw`}, 1240px) - 40px, 1200px) / 3, 50px)`,
                                y: (g?.y || 0) + 0 + 2652.1 + 120 + 88.4 + 0 + 60,
                                children: f(I, {
                                  className: `framer-e2mpl9-container`,
                                  "data-framer-name": `Send an event recap`,
                                  name: `Send an event recap`,
                                  nodeId: `V_4wcvPEu`,
                                  scopeId: `vfKr2IJB_`,
                                  children: f(_, {
                                    breakpoint: D,
                                    overrides: { uDPBcMjp2: { variant: $(`QbH1X3Y9b`) } },
                                    children: f(R, {
                                      CMxUKwqs7: 3,
                                      EgTPw1Hvi: Qe,
                                      height: `100%`,
                                      HQAMbCX8z: `Send an event recap`,
                                      id: `V_4wcvPEu`,
                                      JVfwE60h6: `Share receipts and your recap within five days`,
                                      layoutId: `V_4wcvPEu`,
                                      name: `Send an event recap`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`C_QbVIcCn`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(m.section, {
                      "aria-label": `Frequently asked questions`,
                      className: `framer-1f3o65k`,
                      "data-framer-name": `FAQ`,
                      layout: j,
                      children: p(`div`, {
                        className: `framer-1cx5k36`,
                        "data-framer-name": `Content`,
                        children: [
                          f(`header`, {
                            className: `framer-1vt53mr`,
                            "data-framer-name": `Header`,
                            children: f(x, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(`h2`, {
                                  className: `framer-styles-preset-fbtpvo`,
                                  "data-styles-preset": `qRN7MgZKk`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `start` },
                                  children: `Frequently asked questions`,
                                }),
                              }),
                              className: `framer-19v5gj9`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          p(`div`, {
                            className: `framer-1nxmcpw`,
                            "data-framer-name": `FAQ`,
                            children: [
                              p(`div`, {
                                className: `framer-1ald9cf`,
                                "data-border": !0,
                                "data-framer-name": `FAQ Item`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        children: `What do I get as a Framer meetup host?`,
                                      }),
                                    }),
                                    className: `framer-mf2aiw`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `Approved hosts receive a $300–$600 USD event budget, a merch pack, a one-year Framer Pro plan, agent credits, a branded event graphic, the host playbook, and a Luma event link.`,
                                      }),
                                    }),
                                    className: `framer-1pmz6ec`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-23sjmi`,
                                "data-border": !0,
                                "data-framer-name": `FAQ Item`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        children: `How much budget do I get?`,
                                      }),
                                    }),
                                    className: `framer-p8hsfw`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `Framer covers $300 to $600 USD per meetup, depending on your expected attendance and venue setup.`,
                                      }),
                                    }),
                                    className: `framer-evg06l`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-lnzdxe`,
                                "data-border": !0,
                                "data-framer-name": `FAQ Item`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        children: `What does the budget cover, and what doesn’t it?`,
                                      }),
                                    }),
                                    className: `framer-5ft5vv`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: p(o, {
                                      children: [
                                        f(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Covered: snacks, supplies, and basic event costs like signage or a small venue fee.`,
                                        }),
                                        f(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Not covered: dinners, alcohol, paid speakers, sponsor costs, travel, and premium venues.`,
                                        }),
                                        f(`p`, {
                                          className: `framer-styles-preset-vn6u90`,
                                          "data-styles-preset": `kuibWYBoM`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Anything outside this needs approval before the event.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-oxdiaf`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-rvc2rk`,
                                "data-border": !0,
                                "data-framer-name": `FAQ Item`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        children: `How do I get reimbursed?`,
                                      }),
                                    }),
                                    className: `framer-1yev2fj`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `Keep your receipts and submit them within 5 days of the event along with your recap form. Framer processes the payment from there.`,
                                      }),
                                    }),
                                    className: `framer-tnty9z`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-11puyl6`,
                                "data-border": !0,
                                "data-framer-name": `FAQ Item`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        children: `Do hosts get Framer merch?`,
                                      }),
                                    }),
                                    className: `framer-113sfie`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `Yes. Approved hosts receive a Framer merch pack for their event.`,
                                      }),
                                    }),
                                    className: `framer-i4yiiq`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-1l8c6uh`,
                                "data-framer-name": `FAQ Item`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        children: `How long does approval take?`,
                                      }),
                                    }),
                                    className: `framer-1ai24ui`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: p(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: [
                                          f(le, {
                                            href: { hash: `:meJZlcd6c`, webPageId: `vfKr2IJB_` },
                                            motionChild: !0,
                                            nodeId: `WNg7b1JYm`,
                                            openInNewTab: !1,
                                            preserveParams: !1,
                                            relValues: [],
                                            scopeId: `vfKr2IJB_`,
                                            smoothScroll: !0,
                                            children: f(m.a, {
                                              className: `framer-styles-preset-17uz1e6`,
                                              "data-styles-preset": `lauDPxbHX`,
                                              children: `Apply through the form`,
                                            }),
                                          }),
                                          ` and you’ll hear back within four business days. We review each application based on local demand, host readiness, and program fit, so applying doesn’t guarantee approval. Approved hosts receive the playbook, Luma link, and perks.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-qd9ga5`,
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
                    }),
                    f(m.section, {
                      className: `framer-m7lz6j`,
                      "data-framer-name": `Form`,
                      id: Ne,
                      layout: j,
                      ref: Pe,
                      children: p(`div`, {
                        className: `framer-1wi5mdg`,
                        "data-border": !0,
                        children: [
                          p(`div`, {
                            className: `framer-ekj20a`,
                            "data-border": !0,
                            "data-framer-name": `Form`,
                            children: [
                              p(`div`, {
                                className: `framer-1pim4vi`,
                                "data-framer-name": `Header`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        },
                                        children: `Host Framer meetups in your city`,
                                      }),
                                    }),
                                    className: `framer-1gzfcoc`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                        },
                                        children: `Bring local designers together through recurring events that grow your city’s Framer community.`,
                                      }),
                                    }),
                                    className: `framer-mwqkou`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              f(_, {
                                breakpoint: D,
                                overrides: {
                                  fls9uMZcu: {
                                    width: `calc(max(min(${g?.width || `100vw`} - 40px, 1200px) / 2, 50px) * 2 - 120px)`,
                                    y: (g?.y || 0) + 0 + 5122.5 + 80 + 0 + 0 + 0 + 60 + 165.8,
                                  },
                                  uDPBcMjp2: {
                                    width: `calc(min(${g?.width || `100vw`} - 40px, 1200px) - 40px)`,
                                    y: (g?.y || 0) + 0 + 5565.3 + 60 + 0 + 0 + 0 + 20 + 165.8,
                                  },
                                },
                                children: f(P, {
                                  height: 509,
                                  width: `calc(max(min(${g?.width || `100vw`} - 40px, 1200px) / 4, 50px) * 2 - 120px)`,
                                  y: (g?.y || 0) + 0 + 4843.3 + 120 + 0 + 0 + 0 + 60 + 165.8,
                                  children: f(I, {
                                    className: `framer-1ysdvr9-container`,
                                    nodeId: `rhsRk1iqM`,
                                    scopeId: `vfKr2IJB_`,
                                    children: f(_, {
                                      breakpoint: D,
                                      overrides: { uDPBcMjp2: { Y21lLUbk1: `column` } },
                                      children: f(z, {
                                        height: `100%`,
                                        id: `rhsRk1iqM`,
                                        layoutId: `rhsRk1iqM`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-147l9j8`,
                            "data-border": !0,
                            "data-framer-name": `Budget`,
                            children: [
                              f(xt, {
                                animated: !1,
                                className: `framer-1lsddm2`,
                                DTFJRR839: !0,
                                layoutId: `rhag2QqW7`,
                                pJdIdADIa: !0,
                                XI2ObiqYx: !0,
                              }),
                              p(`div`, {
                                className: `framer-9y8my2`,
                                "data-framer-name": `Text`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        },
                                        children: `Event budget`,
                                      }),
                                    }),
                                    className: `framer-8z830y`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                        },
                                        children: `Funding for approved food, supplies, venue fees, and event costs`,
                                      }),
                                    }),
                                    className: `framer-1ar7ufb`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-7gb0ye`,
                            "data-border": !0,
                            "data-framer-name": `Merch`,
                            children: [
                              f(ot, {
                                animated: !1,
                                className: `framer-2sxt5h`,
                                DTFJRR839: !0,
                                layoutId: `bbcpP_5wu`,
                                pJdIdADIa: !0,
                                XI2ObiqYx: !0,
                              }),
                              p(`div`, {
                                className: `framer-fmhdb`,
                                "data-framer-name": `Text`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        },
                                        children: `Official Framer merch`,
                                      }),
                                    }),
                                    className: `framer-5z7vnc`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                        },
                                        children: `Official Framer merch for every approved host and attendee`,
                                      }),
                                    }),
                                    className: `framer-1ghjxos`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-1frkxp0`,
                            "data-border": !0,
                            "data-framer-name": `Framer Pro and Agent credits`,
                            children: [
                              f(nt, {
                                animated: !1,
                                className: `framer-fqmqwj`,
                                DTFJRR839: !0,
                                layoutId: `sd30rT_4D`,
                                pJdIdADIa: !0,
                                XI2ObiqYx: !0,
                              }),
                              p(`div`, {
                                className: `framer-1bzxpvs`,
                                "data-framer-name": `Text`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        },
                                        children: `Framer Pro and credits`,
                                      }),
                                    }),
                                    className: `framer-wfb4n7`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                        },
                                        children: `One year of Framer Pro, plus agent credits to build your site`,
                                      }),
                                    }),
                                    className: `framer-1fbn8j8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-1tcgac4`,
                            "data-border": !0,
                            "data-framer-name": `Promo`,
                            children: [
                              f(ht, {
                                animated: !1,
                                className: `framer-xxftyz`,
                                DTFJRR839: !0,
                                layoutId: `uHkovI4gv`,
                                pJdIdADIa: !0,
                                XI2ObiqYx: !0,
                              }),
                              p(`div`, {
                                className: `framer-7ryv94`,
                                "data-framer-name": `Text`,
                                children: [
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`h6`, {
                                        className: `framer-styles-preset-ojsfn5`,
                                        "data-styles-preset": `VQBQVu8qk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                        },
                                        children: `Artwork and promotion`,
                                      }),
                                    }),
                                    className: `framer-112sxhg`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(x, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-vn6u90`,
                                        "data-styles-preset": `kuibWYBoM`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                                        },
                                        children: `Branded event artwork and promotion across Framer channels`,
                                      }),
                                    }),
                                    className: `framer-1nr2lvp`,
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
                    }),
                  ],
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-DUsqE.framer-17s5poh, .framer-DUsqE .framer-17s5poh { display: block; }`,
        `.framer-DUsqE.framer-ehnrz0 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-DUsqE .framer-jqy87z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 20px 60px 20px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1ns7g32 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-10zp0yt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1l0stpq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 573px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DUsqE .framer-11hv3v3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-DUsqE .framer-1mlm31e-container, .framer-DUsqE .framer-4ul3zw-container, .framer-DUsqE .framer-6vjqq1-container, .framer-DUsqE .framer-p2rzl2-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
        `.framer-DUsqE .framer-39xuxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1ryu1zl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1gvvoeo { --border-bottom-width: 1px; --border-color: var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-DUsqE .framer-1nd3epi-container { flex: none; height: 300px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1amqovd { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-DUsqE .framer-1c6uc1t { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.05); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px 30px 15px 30px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-14qecq2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1pvys9f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-DUsqE .framer-1kx6fvc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-DUsqE .framer-af7r6o-container, .framer-DUsqE .framer-x31dqg-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-DUsqE .framer-cbk5am, .framer-DUsqE .framer-9zwen3, .framer-DUsqE .framer-17zsyzg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1sebuyy-container, .framer-DUsqE .framer-1j8ivyo-container, .framer-DUsqE .framer-1ysdvr9-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1dtq5v1, .framer-DUsqE .framer-7nzzv6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-191ydvw, .framer-DUsqE .framer-2zowwp { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) -5%, rgba(0,0,0,1) 55.00000000000001%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 160px; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) -5%, rgba(0,0,0,1) 55.00000000000001%) add; padding: 0px; position: relative; width: 160px; }`,
        `.framer-DUsqE .framer-1wipcae, .framer-DUsqE .framer-o5s621 { flex: none; height: 120px; position: relative; transform-style: preserve-3d; width: 80px; }`,
        `.framer-DUsqE .framer-1tmfwmn, .framer-DUsqE .framer-v2xlcu, .framer-DUsqE .framer-1re5jud, .framer-DUsqE .framer-19b9mg { flex: none; height: 120px; left: 0px; position: absolute; top: 0px; transform-style: preserve-3d; width: 80px; }`,
        `.framer-DUsqE .framer-1mnzabx, .framer-DUsqE .framer-11wtsca, .framer-DUsqE .framer-1y5vzy4, .framer-DUsqE .framer-18v8zr7, .framer-DUsqE .framer-lmn8sz, .framer-DUsqE .framer-l0cmqh, .framer-DUsqE .framer-1sp9ivg, .framer-DUsqE .framer-ne7xuj { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 0px; position: absolute; top: 0px; width: 80px; }`,
        `.framer-DUsqE .framer-lc77f2, .framer-DUsqE .framer-19ddhml, .framer-DUsqE .framer-1td06ri, .framer-DUsqE .framer-1m65152, .framer-DUsqE .framer-twxsdd, .framer-DUsqE .framer-1558qpa, .framer-DUsqE .framer-5izfvd, .framer-DUsqE .framer-1hiongf, .framer-DUsqE .framer-eg2cio, .framer-DUsqE .framer-1d1cglk, .framer-DUsqE .framer-1cs9e58, .framer-DUsqE .framer-c6tqyu { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 80px; position: absolute; top: 0px; width: 40px; }`,
        `.framer-DUsqE .framer-bg6q2e, .framer-DUsqE .framer-chqvu2, .framer-DUsqE .framer-12cxt6b, .framer-DUsqE .framer-18dj1j9, .framer-DUsqE .framer-1k4xgeg, .framer-DUsqE .framer-1hj72oq, .framer-DUsqE .framer-4uo8ff, .framer-DUsqE .framer-1ughe8f, .framer-DUsqE .framer-yr9m93, .framer-DUsqE .framer-1qrf2h8, .framer-DUsqE .framer-15corgt, .framer-DUsqE .framer-rnbhm8 { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 40px; position: absolute; top: 40px; width: 40px; }`,
        `.framer-DUsqE .framer-1c5j218, .framer-DUsqE .framer-1ezkvt0, .framer-DUsqE .framer-c0qrjc, .framer-DUsqE .framer-1x2dhh5, .framer-DUsqE .framer-10yas0n, .framer-DUsqE .framer-ueem68, .framer-DUsqE .framer-1vz4hp0, .framer-DUsqE .framer-ny263o { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 0px; position: absolute; top: 0px; width: 113px; }`,
        `.framer-DUsqE .framer-igsirk, .framer-DUsqE .framer-fw1zxf, .framer-DUsqE .framer-365i2b, .framer-DUsqE .framer-ir3jvy, .framer-DUsqE .framer-mtgjk0, .framer-DUsqE .framer-8rmryd, .framer-DUsqE .framer-1uk7h58, .framer-DUsqE .framer-1ion18s, .framer-DUsqE .framer-fyqmxd, .framer-DUsqE .framer-1uynbtm, .framer-DUsqE .framer-6iicer, .framer-DUsqE .framer-1hb1ru3, .framer-DUsqE .framer-t6sft3, .framer-DUsqE .framer-bi58th, .framer-DUsqE .framer-18h5ln7, .framer-DUsqE .framer-i78nj1, .framer-DUsqE .framer-f5s4um, .framer-DUsqE .framer-7exh3y, .framer-DUsqE .framer-wvey8f, .framer-DUsqE .framer-108fufw { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 0px; position: absolute; top: 40px; width: 40px; }`,
        `.framer-DUsqE .framer-x06r65, .framer-DUsqE .framer-1y7e0js, .framer-DUsqE .framer-1j3yq4t, .framer-DUsqE .framer-1e3xbw9, .framer-DUsqE .framer-korf8x, .framer-DUsqE .framer-3t4rj7, .framer-DUsqE .framer-19yesio, .framer-DUsqE .framer-sw6v1u { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 0px; position: absolute; top: 80px; width: 80px; }`,
        `.framer-DUsqE .framer-c29wkm, .framer-DUsqE .framer-fuayf5, .framer-DUsqE .framer-1ntqt1t, .framer-DUsqE .framer-e4y081, .framer-DUsqE .framer-1vea49u, .framer-DUsqE .framer-mijylr, .framer-DUsqE .framer-nww26k, .framer-DUsqE .framer-99bzsm, .framer-DUsqE .framer-1mfsv9o, .framer-DUsqE .framer-19d213v, .framer-DUsqE .framer-ocwslh, .framer-DUsqE .framer-wdvush { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 40px; position: absolute; top: 80px; width: 40px; }`,
        `.framer-DUsqE .framer-15s1ytp, .framer-DUsqE .framer-5fpz8v, .framer-DUsqE .framer-o06533, .framer-DUsqE .framer-9hm48p, .framer-DUsqE .framer-h8t31d, .framer-DUsqE .framer-huvihd, .framer-DUsqE .framer-1n6ob3h, .framer-DUsqE .framer-68d934 { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 40px; position: absolute; top: 120px; width: 57px; }`,
        `.framer-DUsqE .framer-1tw4xem, .framer-DUsqE .framer-1ao6u6v, .framer-DUsqE .framer-6ffpyl, .framer-DUsqE .framer-1rfzwq7 { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 0px; position: absolute; top: 0px; width: 40px; }`,
        `.framer-DUsqE .framer-fki739, .framer-DUsqE .framer-pmu3g9, .framer-DUsqE .framer-1j3hgo1, .framer-DUsqE .framer-1yjn691 { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 80px; position: absolute; top: 40px; width: 40px; }`,
        `.framer-DUsqE .framer-vtyw4y, .framer-DUsqE .framer-c5qgm2, .framer-DUsqE .framer-1eykmrt, .framer-DUsqE .framer-1c2tv1q { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 0px; position: absolute; top: 80px; width: 40px; }`,
        `.framer-DUsqE .framer-1j4yfxn, .framer-DUsqE .framer-xgeyxn, .framer-DUsqE .framer-j9yknx, .framer-DUsqE .framer-14kro6c { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 80px; position: absolute; top: 80px; width: 40px; }`,
        `.framer-DUsqE .framer-t6t1bz, .framer-DUsqE .framer-1a9ckjx, .framer-DUsqE .framer-1cd796l, .framer-DUsqE .framer-ws8it4 { background-color: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, #ffffff); flex: none; height: 1px; left: 40px; position: absolute; top: 120px; width: 40px; }`,
        `.framer-DUsqE .framer-4yd9af, .framer-DUsqE .framer-1rnpvmm { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 360px; }`,
        `.framer-DUsqE .framer-xn4yyq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 100px; overflow: var(--overflow-clip-fallback, clip); padding: 15px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-10rselg, .framer-DUsqE .framer-1oe9424 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1240px; overflow: var(--overflow-clip-fallback, clip); padding: 120px 20px 120px 20px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-2bqt87 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1b2xel3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; position: relative; width: 400px; }`,
        `.framer-DUsqE .framer-gbiprp { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: 139px; justify-content: start; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-DUsqE .framer-1dbfbcp-container, .framer-DUsqE .framer-161pvqc-container, .framer-DUsqE .framer-kxk2oj-container, .framer-DUsqE .framer-rwk4uh-container, .framer-DUsqE .framer-1nsvvwo-container, .framer-DUsqE .framer-7z0kzi-container, .framer-DUsqE .framer-127fhhk-container, .framer-DUsqE .framer-ky1nne-container, .framer-DUsqE .framer-1l2rgpt-container, .framer-DUsqE .framer-e2mpl9-container { align-self: start; flex: none; height: 100%; justify-self: start; pointer-events: none; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1haz6eu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 20px 120px 20px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1w372xi, .framer-DUsqE .framer-16b4ver { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-q7ho5g { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; width: 368px; z-index: 1; }`,
        `.framer-DUsqE .framer-xco6z3 { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px 0px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
        `.framer-DUsqE .framer-7a3v7e { --border-bottom-width: 0px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-DUsqE .framer-178jkrc { --border-bottom-width: 1px; --border-color: var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-DUsqE .framer-153s8cr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1947iz8, .framer-DUsqE .framer-45axur, .framer-DUsqE .framer-av9u01 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 320px; }`,
        `.framer-DUsqE .framer-8mrsyc, .framer-DUsqE .framer-15fgqsc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; position: relative; width: 320px; }`,
        `.framer-DUsqE .framer-1r584nt, .framer-DUsqE .framer-1q2epnb { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-DUsqE .framer-1gv2hq { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-DUsqE .framer-p2rk01, .framer-DUsqE .framer-vd6vmk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1h0c2zr { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; position: relative; width: 320px; }`,
        `.framer-DUsqE .framer-5jxxkn { -webkit-filter: brightness(1.1); aspect-ratio: 1 / 1; filter: brightness(1.1); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-DUsqE .framer-1szidk5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; position: relative; width: 431px; }`,
        `.framer-DUsqE .framer-1hyysa3 { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: start; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-DUsqE .framer-1f3o65k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 20px 120px 20px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-DUsqE .framer-1cx5k36 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-DUsqE .framer-1vt53mr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-DUsqE .framer-19v5gj9 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 380px; }`,
        `.framer-DUsqE .framer-1nxmcpw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-DUsqE .framer-1ald9cf { --border-bottom-width: 1px; --border-color: var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 15px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-mf2aiw, .framer-DUsqE .framer-p8hsfw, .framer-DUsqE .framer-5ft5vv, .framer-DUsqE .framer-1yev2fj, .framer-DUsqE .framer-113sfie, .framer-DUsqE .framer-1ai24ui { --framer-text-wrap-override: balance; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1pmz6ec, .framer-DUsqE .framer-evg06l, .framer-DUsqE .framer-oxdiaf, .framer-DUsqE .framer-tnty9z, .framer-DUsqE .framer-i4yiiq, .framer-DUsqE .framer-qd9ga5 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 90%; overflow: visible; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-23sjmi, .framer-DUsqE .framer-lnzdxe, .framer-DUsqE .framer-rvc2rk, .framer-DUsqE .framer-11puyl6 { --border-bottom-width: 1px; --border-color: var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 30px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1l8c6uh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-m7lz6j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 20px 120px 20px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-DUsqE .framer-1wi5mdg { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-DUsqE .framer-ekj20a { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; grid-column: span 2; grid-row: span 2; height: 100%; justify-content: center; justify-self: start; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); padding: 60px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1pim4vi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1gzfcoc, .framer-DUsqE .framer-8z830y, .framer-DUsqE .framer-5z7vnc, .framer-DUsqE .framer-wfb4n7, .framer-DUsqE .framer-112sxhg { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; position: relative; width: auto; }`,
        `.framer-DUsqE .framer-mwqkou, .framer-DUsqE .framer-1ar7ufb, .framer-DUsqE .framer-1ghjxos, .framer-DUsqE .framer-1fbn8j8, .framer-DUsqE .framer-1nr2lvp { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-147l9j8, .framer-DUsqE .framer-7gb0ye, .framer-DUsqE .framer-1frkxp0, .framer-DUsqE .framer-1tcgac4 { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; max-width: 100%; min-height: 170px; overflow: hidden; padding: 30px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-1lsddm2, .framer-DUsqE .framer-2sxt5h, .framer-DUsqE .framer-fqmqwj, .framer-DUsqE .framer-xxftyz { --17kkcf8: var(--token-70c17056-82cb-4934-97c9-7213cf77c853, rgba(255, 255, 255, 0.1)); --1iwhep7: 2; --1l3yetw: var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4); flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-DUsqE .framer-9y8my2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 100%; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DUsqE .framer-fmhdb, .framer-DUsqE .framer-1bzxpvs, .framer-DUsqE .framer-7ryv94 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 100%; overflow: hidden; padding: 0px; position: relative; width: 220px; }`,
        ...Ue,
        ...Ve,
        ...He,
        ...jt,
        ...ct,
        ...Je,
        `.framer-DUsqE[data-border="true"]::after, .framer-DUsqE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-DUsqE.framer-ehnrz0 { width: 810px; } .framer-DUsqE .framer-jqy87z { min-height: 100vh; padding: 100px 20px 0px 20px; } .framer-DUsqE .framer-1l0stpq { width: 455px; } .framer-DUsqE .framer-10rselg, .framer-DUsqE .framer-1haz6eu, .framer-DUsqE .framer-1f3o65k { padding: 80px 20px 80px 20px; } .framer-DUsqE .framer-1b2xel3 { width: 320px; } .framer-DUsqE .framer-gbiprp { grid-template-columns: repeat(2, minmax(240px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; width: 770px; } .framer-DUsqE .framer-q7ho5g { width: 300px; } .framer-DUsqE .framer-xco6z3 { flex-direction: column; gap: 0px; justify-content: flex-start; } .framer-DUsqE .framer-7a3v7e { --border-bottom-width: 1px; align-content: center; align-items: center; flex: none; flex-direction: row; gap: 20px; width: 100%; } .framer-DUsqE .framer-178jkrc { flex: 1 0 0px; width: 1px; } .framer-DUsqE .framer-153s8cr { align-content: center; align-items: center; flex: 1 0 0px; width: 1px; } .framer-DUsqE .framer-1947iz8, .framer-DUsqE .framer-8mrsyc, .framer-DUsqE .framer-45axur, .framer-DUsqE .framer-1h0c2zr, .framer-DUsqE .framer-av9u01, .framer-DUsqE .framer-15fgqsc { width: 100%; } .framer-DUsqE .framer-1r584nt, .framer-DUsqE .framer-1q2epnb { align-content: center; align-items: center; flex: none; flex-direction: row; gap: 20px; width: 100%; } .framer-DUsqE .framer-1gv2hq { flex: 1 0 0px; order: 1; width: 1px; } .framer-DUsqE .framer-p2rk01 { align-content: center; align-items: center; flex: 1 0 0px; order: 0; width: 1px; } .framer-DUsqE .framer-5jxxkn { flex: 1 0 0px; order: 0; width: 1px; } .framer-DUsqE .framer-vd6vmk { align-content: center; align-items: center; flex: 1 0 0px; order: 1; width: 1px; } .framer-DUsqE .framer-1oe9424 { padding: 100px 20px 100px 20px; } .framer-DUsqE .framer-1hyysa3 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-DUsqE .framer-m7lz6j { gap: 30px; padding: 80px 20px 80px 20px; } .framer-DUsqE .framer-1wi5mdg { grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(3, min-content); } .framer-DUsqE .framer-ekj20a { grid-column: 1 / -1; grid-row: unset; height: 1fr; order: 0; } .framer-DUsqE .framer-mwqkou, .framer-DUsqE .framer-1ar7ufb, .framer-DUsqE .framer-1fbn8j8 { max-width: 100%; } .framer-DUsqE .framer-147l9j8 { height: min-content; min-height: 220px; order: 1; } .framer-DUsqE .framer-9y8my2 { width: 306px; } .framer-DUsqE .framer-7gb0ye { height: min-content; min-height: 220px; order: 2; } .framer-DUsqE .framer-fmhdb, .framer-DUsqE .framer-1bzxpvs, .framer-DUsqE .framer-7ryv94 { width: 280px; } .framer-DUsqE .framer-1frkxp0 { height: min-content; min-height: 220px; order: 3; } .framer-DUsqE .framer-1tcgac4 { height: min-content; min-height: 220px; order: 4; }}`,
        `@media (max-width: 809.98px) { .framer-DUsqE.framer-ehnrz0 { width: 390px; } .framer-DUsqE .framer-jqy87z { justify-content: flex-start; padding: 60px 20px 60px 20px; } .framer-DUsqE .framer-1l0stpq, .framer-DUsqE .framer-fmhdb, .framer-DUsqE .framer-1bzxpvs, .framer-DUsqE .framer-7ryv94 { width: 100%; } .framer-DUsqE .framer-1c6uc1t { padding: 15px 20px 15px 20px; } .framer-DUsqE .framer-10rselg, .framer-DUsqE .framer-1haz6eu, .framer-DUsqE .framer-m7lz6j { gap: 30px; padding: 60px 20px 60px 20px; } .framer-DUsqE .framer-2bqt87, .framer-DUsqE .framer-1w372xi, .framer-DUsqE .framer-16b4ver { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-DUsqE .framer-1b2xel3 { width: 240px; } .framer-DUsqE .framer-gbiprp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: flex-start; width: 350px; } .framer-DUsqE .framer-1dbfbcp-container, .framer-DUsqE .framer-161pvqc-container, .framer-DUsqE .framer-kxk2oj-container, .framer-DUsqE .framer-rwk4uh-container { align-self: unset; height: auto; } .framer-DUsqE .framer-q7ho5g { width: 210px; } .framer-DUsqE .framer-xco6z3 { flex-direction: column; gap: 0px 20px; justify-content: flex-start; } .framer-DUsqE .framer-7a3v7e, .framer-DUsqE .framer-1r584nt, .framer-DUsqE .framer-1q2epnb, .framer-DUsqE .framer-1vt53mr, .framer-DUsqE .framer-1nxmcpw { flex: none; width: 100%; } .framer-DUsqE .framer-153s8cr, .framer-DUsqE .framer-p2rk01, .framer-DUsqE .framer-vd6vmk { padding: 20px; } .framer-DUsqE .framer-8mrsyc { width: 303px; } .framer-DUsqE .framer-1h0c2zr { width: 295px; } .framer-DUsqE .framer-1oe9424 { padding: 60px 20px 60px 20px; } .framer-DUsqE .framer-1hyysa3 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-DUsqE .framer-1f3o65k { flex-direction: column; padding: 60px 20px 60px 20px; } .framer-DUsqE .framer-1cx5k36 { flex: none; flex-direction: column; gap: 30px; width: 100%; } .framer-DUsqE .framer-19v5gj9 { width: 250px; } .framer-DUsqE .framer-1ald9cf { padding: 0px 0px 24px 0px; } .framer-DUsqE .framer-1pmz6ec, .framer-DUsqE .framer-evg06l, .framer-DUsqE .framer-oxdiaf, .framer-DUsqE .framer-tnty9z, .framer-DUsqE .framer-i4yiiq, .framer-DUsqE .framer-qd9ga5, .framer-DUsqE .framer-mwqkou, .framer-DUsqE .framer-1ar7ufb, .framer-DUsqE .framer-1fbn8j8 { max-width: 100%; } .framer-DUsqE .framer-23sjmi, .framer-DUsqE .framer-lnzdxe, .framer-DUsqE .framer-rvc2rk, .framer-DUsqE .framer-11puyl6 { padding: 24px 0px 24px 0px; } .framer-DUsqE .framer-1l8c6uh { padding: 24px 0px 0px 0px; } .framer-DUsqE .framer-1wi5mdg { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; } .framer-DUsqE .framer-ekj20a { align-self: unset; height: min-content; order: 0; padding: 20px; } .framer-DUsqE .framer-147l9j8 { align-self: unset; gap: 20px; height: min-content; justify-content: flex-start; min-height: unset; order: 1; padding: 24px; } .framer-DUsqE .framer-7gb0ye { align-self: unset; gap: 20px; height: min-content; justify-content: flex-start; order: 2; } .framer-DUsqE .framer-1frkxp0 { align-self: unset; gap: 20px; height: min-content; justify-content: flex-start; min-height: unset; order: 3; padding: 24px; } .framer-DUsqE .framer-1tcgac4 { --border-right-width: 0px; align-self: unset; gap: 20px; height: min-content; justify-content: flex-start; min-height: unset; order: 4; padding: 24px; }}`,
      ],
      `framer-DUsqE`
    )),
    (za.displayName = `Meetups`),
    (za.defaultProps = { height: 5863, width: 1200 }),
    y(
      za,
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
        ...aa,
        ...oa,
        ...sa,
        ...ca,
        ...ua,
        ...da,
        ...fa,
        ...pa,
        ...ma,
        ...ha,
        ...A(Ke),
        ...A(Re),
        ...A(Ge),
        ...A(Mt),
        ...A(lt),
        ...A(Fe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (za.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = De.get(ja(), n, r),
          a = De.get(Pa(), n, r),
          o = De.get(Fa(), n, r);
        return w(
          [
            () => i.preload(),
            () => a.preload(),
            () => o.preload(),
            () => j(it, {}, t),
            () => j(xn, {}, t),
            () => j(B, {}, t),
            () => j(R, {}, t),
            () => j(z, {}, t),
            async () =>
              w(
                ((await be(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => j(V, {}, t)),
                t
              ),
            async () =>
              w(
                ((await be(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => () => j(V, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    (Ba = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramervfKr2IJB_`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"cldwnK9uc":{"pattern":":cldwnK9uc","name":"hero"},"LfPR4Lfnj":{"pattern":":BYMITZ8Xq-:LfPR4Lfnj","name":"events","slugs":{"BYMITZ8Xq":{"identifier":"local-module:collection/Pl_A41546:default","provider":"yFx24AEy8"}}},"fIlm_A1Rb":{"pattern":":BYMITZ8Xq-:fIlm_A1Rb","name":"events","slugs":{"BYMITZ8Xq":{"identifier":"local-module:collection/Pl_A41546:default","provider":"C6SD8Eryy"}}},"r8KDCx07F":{"pattern":":r8KDCx07F","name":"benefits"},"meJZlcd6c":{"pattern":":meJZlcd6c","name":"form"}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResolvesOwnDefaults: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `5863`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"fls9uMZcu":{"layout":["fixed","auto"]},"uDPBcMjp2":{"layout":["fixed","auto"]}}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ba as __FramerMetadata__, za as default, va as queryParamNames };
//# sourceMappingURL=gHZEmgvsuAlkgpsP3kPHIwTQukyTNk0hcnqmu97l9S0.CV2kkeOg.mjs.map
