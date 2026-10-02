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
  m as f,
  s as p,
  u as m,
  y as h,
} from "./react.hMW2PJqY.mjs";
import { V as g, c as _, o as te, r as ne } from "./motion.CaZjHSpz.mjs";
import {
  A as re,
  F as ie,
  G as v,
  Ht as ae,
  I as y,
  Jt as oe,
  K as b,
  Kt as se,
  Ot as x,
  Qt as ce,
  T as S,
  Z as C,
  _n as w,
  c as T,
  cn as le,
  ct as E,
  dn as ue,
  en as de,
  et as fe,
  gn as pe,
  ht as D,
  i as me,
  j as O,
  k,
  kn as A,
  kt as he,
  lt as ge,
  n as _e,
  o as ve,
  ot as ye,
  s as be,
  t as xe,
  un as Se,
  wn as Ce,
  wt as we,
  x as Te,
  y as Ee,
  z as De,
  zt as Oe,
} from "./framer.CuDPj9y9.mjs";
import { g as ke, h as Ae, m as je, p as Me } from "./shared.DbR_nTE0.mjs";
import { n as Ne, t as Pe } from "./M8z52uvts.DWJ-2QW4.mjs";
import { r as Fe, t as j } from "./fpJV3zp1q.BBYwyjT7.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./q5l9lrIfW.CSGcYlC1.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./sBHBrQO1O.CbRe7bH2.mjs";
import { n as We, t as Ge } from "./HoRfFp9QY.bTp-UdUi.mjs";
import Ke, { t as qe } from "./-Bj4Lw5tW7x5kqObx9DLYIaqh5BKTedSIgYpF5CwHVo.CQK8wn4c.mjs";
var Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  M,
  et = e(() => {
    (l(),
      D(),
      i(),
      (Je = `var(--framer-icon-mask)`),
      (Ye = f(function (e, t) {
        return p(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Xe = g.create(Ye)),
      (Ze = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? p(Xe, { ...a, layoutId: r, ref: t, children: i })
          : p(`svg`, { ...a, ref: t, children: i });
      })),
      (Qe = `<svg display="block" id="2669755429" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 9 0 C 10.657 0 12 1.343 12 3 L 12 16 L 6 12 L 0 16 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="16px" id="fi5PhwJCi" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 2)" width="12px"/></svg>`),
      ($e = ({ fill: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        DTFJRR839: r ?? o.DTFJRR839 ?? `rgb(136, 136, 136)`,
        pJdIdADIa: e ?? o.pJdIdADIa ?? `rgba(136, 136, 136, 0.2)`,
        XI2ObiqYx: a ?? o.XI2ObiqYx ?? 2,
      })),
      (M = w(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              DTFJRR839: o,
              pJdIdADIa: s,
              XI2ObiqYx: c,
              ...l
            } = $e(e),
            u = ue(`2669755429`, Qe);
          return p(Ze, {
            ...l,
            className: C(`framer-FVMcA`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": s, "--1iwhep7": c, "--1l3yetw": o, ...n },
            viewBox: `0 0 20 20`,
            children: p(`use`, { href: u }),
          });
        }),
        [
          `.framer-FVMcA { -webkit-mask: ${Je}; aspect-ratio: 1; display: block; mask: ${Je}; width: 20px; }`,
        ],
        `framer-FVMcA`
      )),
      (M.displayName = `Tag`),
      b(M, {
        DTFJRR839: {
          defaultValue: `rgb(136, 136, 136)`,
          hidden: !1,
          title: `Stroke`,
          type: T.Color,
        },
        pJdIdADIa: {
          defaultValue: `rgba(136, 136, 136, 0.2)`,
          hidden: !1,
          title: `Fill`,
          type: T.Color,
        },
        XI2ObiqYx: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          min: 0,
          title: `Width`,
          type: T.Number,
        },
      }));
  }),
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  N,
  P,
  pt = e(() => {
    (l(),
      D(),
      ne(),
      i(),
      et(),
      We(),
      ke(),
      Fe(),
      Ne(),
      (tt = ye(M)),
      (nt = ye(j)),
      (rt = `framer-dsVkk`),
      (it = { rgAUl2l0y: `framer-v-s1xxic` }),
      (at = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ot = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (st = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ct = ({ value: e, children: t }) => {
        let r = a(_),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(_.Provider, { value: o, children: t });
      }),
      (lt = g.create(o)),
      (ut = (e, t) => {
        let [n, r] = h(e),
          [i, a] = h(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (dt = ({
        category: e,
        description: t,
        height: n,
        id: r,
        image: i,
        link: a,
        new1: o,
        newTab: s,
        savings: c,
        title: l,
        width: u,
        ...d
      }) => ({
        ...d,
        DGYZfJySn: l ?? d.DGYZfJySn ?? `Framer`,
        DpgDPEgYO: a ?? d.DpgDPEgYO,
        hjxbdDDt6: c ?? d.hjxbdDDt6 ?? `Saving $1,000+`,
        HyrwAZhi3:
          t ?? d.HyrwAZhi3 ?? `The ultimate no-code website design and publishing platform.`,
        SvwgrIdSm: e ?? d.SvwgrIdSm ?? `Design`,
        sxobXesJm: i ??
          d.sxobXesJm ?? {
            pixelHeight: 46,
            pixelWidth: 46,
            src: `https://framerusercontent.com/images/YFkqGelkpS1S2stn4UfH2d9VB4.svg?width=46&height=46`,
          },
        TelrCQiPo: s ?? d.TelrCQiPo ?? !0,
        ZeRD5pdqh: o ?? d.ZeRD5pdqh ?? !0,
      })),
      (ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (N = w(
        f(function (e, n) {
          let r = s(null),
            i = n ?? r,
            a = t(),
            { activeLocale: c, setLocale: l } = ce(),
            u = Oe(),
            {
              style: d,
              className: ee,
              layoutId: f,
              variant: h,
              DGYZfJySn: _,
              SvwgrIdSm: ne,
              HyrwAZhi3: re,
              ZeRD5pdqh: ie,
              sxobXesJm: v,
              DpgDPEgYO: ae,
              TelrCQiPo: oe,
              onTelrCQiPoChange: b,
              hjxbdDDt6: se,
              ...x
            } = dt(e),
            [S, w] = ut(oe, b),
            {
              baseVariant: T,
              classNames: le,
              clearLoadingGesture: E,
              gestureHandlers: ue,
              gestureVariant: de,
              isLoading: fe,
              setGestureState: D,
              setVariant: me,
              variants: O,
            } = pe({ defaultVariant: `rgAUl2l0y`, ref: i, variant: h, variantClassNames: it }),
            k = ft(e, O),
            A = C(rt, Me);
          return p(te, {
            id: f ?? a,
            children: p(lt, {
              animate: O,
              initial: !1,
              children: p(ct, {
                value: at,
                children: m(g.div, {
                  ...x,
                  ...ue,
                  className: C(A, `framer-s1xxic`, ee, le),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `rgAUl2l0y`,
                  ref: i,
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
                    ...d,
                  },
                  children: [
                    m(g.div, {
                      className: `framer-14b43iw`,
                      layoutDependency: k,
                      layoutId: `ESGqrQZ03`,
                      children: [
                        m(g.div, {
                          className: `framer-1kcqqyx`,
                          layoutDependency: k,
                          layoutId: `LFCiQAV2a`,
                          children: [
                            m(g.div, {
                              className: `framer-jccb1a`,
                              layoutDependency: k,
                              layoutId: `wrIqjYMLC`,
                              children: [
                                p(g.div, {
                                  className: `framer-nhts49`,
                                  "data-border": !0,
                                  layoutDependency: k,
                                  layoutId: `jgygpt9Za`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgba(255, 255, 255, 0.08)`,
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                  },
                                  children: p(Te, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: ge((u?.y || 0) + 30 + 0 + 0 + 0 + 0 + 0 + 78.25 + 0),
                                      sizes: `46px`,
                                      ...ot(v),
                                    },
                                    className: `framer-t30exy`,
                                    layoutDependency: k,
                                    layoutId: `DPX37Zmz_`,
                                    style: {
                                      borderBottomLeftRadius: 8,
                                      borderBottomRightRadius: 8,
                                      borderTopLeftRadius: 8,
                                      borderTopRightRadius: 8,
                                    },
                                  }),
                                }),
                                m(g.div, {
                                  className: `framer-52vd6f`,
                                  layoutDependency: k,
                                  layoutId: `PCT2CKBqL`,
                                  children: [
                                    p(y, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(g.p, {
                                          className: `framer-styles-preset-4eptxb`,
                                          "data-styles-preset": `XHuCPIQKc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f7c1d118-c2a0-4569-b903-967f2348401c, rgb(255, 255, 255)))`,
                                          },
                                          children: `Framer`,
                                        }),
                                      }),
                                      className: `framer-1h0x8dn`,
                                      fonts: [`Inter`],
                                      layoutDependency: k,
                                      layoutId: `eqJVqj7m1`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-f7c1d118-c2a0-4569-b903-967f2348401c, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: _,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(y, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(g.p, {
                                          className: `framer-styles-preset-4eptxb`,
                                          "data-styles-preset": `XHuCPIQKc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                          },
                                          children: `Design`,
                                        }),
                                      }),
                                      className: `framer-181xqla`,
                                      fonts: [`Inter`],
                                      layoutDependency: k,
                                      layoutId: `cJ7cEhEal`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      text: ne,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p(y, {
                              __fromCanvasComponent: !0,
                              children: p(o, {
                                children: p(g.p, {
                                  className: `framer-styles-preset-4eptxb`,
                                  "data-styles-preset": `XHuCPIQKc`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                  },
                                  children: p(g.strong, {
                                    children: `The ultimate no-code website design and publishing platform.`,
                                  }),
                                }),
                              }),
                              className: `framer-pwjdm7`,
                              "data-framer-name": `Description`,
                              fonts: [`Inter`, `Inter-Bold`],
                              layoutDependency: k,
                              layoutId: `m8W45yiBe`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: re,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        p(g.div, {
                          className: `framer-1mtkhqo`,
                          layoutDependency: k,
                          layoutId: `kXSz4Rkgv`,
                          style: {
                            backgroundColor: `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          },
                        }),
                        p(g.div, {
                          className: `framer-1lzsnro`,
                          layoutDependency: k,
                          layoutId: `thyeQh1gA`,
                          children: m(g.div, {
                            className: `framer-aqhd4x`,
                            layoutDependency: k,
                            layoutId: `Z15xnDTmz`,
                            children: [
                              p(g.div, {
                                className: `framer-p1v36m`,
                                layoutDependency: k,
                                layoutId: `yY44puoW2`,
                                children: p(M, {
                                  animated: !0,
                                  className: `framer-1w6vx4s`,
                                  layoutDependency: k,
                                  layoutId: `Wdgg1KMpc`,
                                  style: {
                                    "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                    "--1iwhep7": 2,
                                    "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  },
                                }),
                              }),
                              p(y, {
                                __fromCanvasComponent: !0,
                                children: p(o, {
                                  children: p(g.p, {
                                    className: `framer-styles-preset-4eptxb`,
                                    "data-styles-preset": `XHuCPIQKc`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Saving $1,000+`,
                                  }),
                                }),
                                className: `framer-1poo8bw`,
                                "data-framer-name": `Description`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `yEMwOKZX0`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: se,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    ie !== !1 &&
                      p(g.div, {
                        className: `framer-8n1l1a`,
                        "data-border": !0,
                        "data-framer-name": `Badge`,
                        layoutDependency: k,
                        layoutId: `caZiDlJwy`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, color(display-p3 0.0964912280701754 0.5148269122606849 1))`,
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 4,
                        },
                        children: p(y, {
                          __fromCanvasComponent: !0,
                          children: p(o, {
                            children: p(g.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOekF3`,
                                "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                "--framer-font-size": `10px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 14, "wght" 700)`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                "--framer-text-transform": `uppercase`,
                              },
                              children: `NEW`,
                            }),
                          }),
                          className: `framer-e3jzyi`,
                          fonts: [`Inter-Variable`],
                          layoutDependency: k,
                          layoutId: `A9No8Zsrv`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 14, "wght" 700`,
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    p(ve, {
                      height: 200,
                      y: (u?.y || 0) + 30 + 496,
                      children: p(De, {
                        className: `framer-1ek6c7m-container`,
                        layoutDependency: k,
                        layoutId: `mE5nsMCrp-container`,
                        nodeId: `mE5nsMCrp`,
                        rendersWithMotion: !0,
                        scopeId: `KVwmqvqBS`,
                        children: p(j, {
                          aq3hTZ9m1: ae,
                          c8MUIFu8M: S,
                          DJXtUU2Fb: !1,
                          height: `100%`,
                          id: `mE5nsMCrp`,
                          iZh0bTFo1: Ge,
                          kw6l_suoH: `Get the deal`,
                          layoutId: `mE5nsMCrp`,
                          ljsS0PDRT: 5,
                          m34vmsLTM: ``,
                          MBD8rTH3H: `rgb(255, 255, 255)`,
                          onc8MUIFu8MChange: w,
                          variant: st(`Her3HD7gg`),
                          width: `100%`,
                          xdxfhd9wh: `rgb(0, 0, 0)`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-dsVkk.framer-1ilulr0, .framer-dsVkk .framer-1ilulr0 { display: block; }`,
          `.framer-dsVkk.framer-s1xxic { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 30px; position: relative; width: 367px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dsVkk .framer-14b43iw, .framer-dsVkk .framer-1kcqqyx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dsVkk .framer-jccb1a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dsVkk .framer-nhts49 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dsVkk .framer-t30exy { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 46px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dsVkk .framer-52vd6f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-dsVkk .framer-1h0x8dn, .framer-dsVkk .framer-181xqla { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-dsVkk .framer-pwjdm7 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; position: relative; width: 307px; }`,
          `.framer-dsVkk .framer-1mtkhqo { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-dsVkk .framer-1lzsnro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dsVkk .framer-aqhd4x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dsVkk .framer-p1v36m { flex: none; height: 18px; overflow: hidden; position: relative; width: 18px; }`,
          `.framer-dsVkk .framer-1w6vx4s { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 0px; width: calc(100% - 0px); }`,
          `.framer-dsVkk .framer-1poo8bw { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-dsVkk .framer-8n1l1a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 6px 4px 6px; position: absolute; right: 30px; top: 30px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-dsVkk .framer-e3jzyi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-dsVkk .framer-1ek6c7m-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
          ...je,
          `.framer-dsVkk[data-border="true"]::after, .framer-dsVkk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-dsVkk`
      )),
      (N.displayName = `Startups/Deal`),
      (N.defaultProps = { height: 284, width: 366 }),
      b(N, {
        DGYZfJySn: { defaultValue: `Framer`, title: `Title`, type: T.String },
        onDGYZfJySnChange: { changes: `DGYZfJySn`, type: T.ChangeHandler },
        SvwgrIdSm: {
          defaultValue: `Design`,
          displayTextArea: !1,
          title: `Category`,
          type: T.String,
        },
        onSvwgrIdSmChange: { changes: `SvwgrIdSm`, type: T.ChangeHandler },
        HyrwAZhi3: {
          defaultValue: `The ultimate no-code website design and publishing platform.`,
          title: `Description`,
          type: T.String,
        },
        onHyrwAZhi3Change: { changes: `HyrwAZhi3`, type: T.ChangeHandler },
        ZeRD5pdqh: { defaultValue: !0, title: `New`, type: T.Boolean },
        onZeRD5pdqhChange: { changes: `ZeRD5pdqh`, type: T.ChangeHandler },
        sxobXesJm: {
          __defaultAssetReference: `data:framer/asset-reference,YFkqGelkpS1S2stn4UfH2d9VB4.svg?originalFilename=Framer.svg&preferredSize=auto`,
          title: `Image`,
          type: T.ResponsiveImage,
        },
        DpgDPEgYO: { title: `Link`, type: T.Link },
        TelrCQiPo: { defaultValue: !0, title: `New Tab`, type: T.Boolean },
        onTelrCQiPoChange: { changes: `TelrCQiPo`, type: T.ChangeHandler },
        hjxbdDDt6: {
          defaultValue: `Saving $1,000+`,
          displayTextArea: !1,
          title: `Savings`,
          type: T.String,
        },
        onhjxbdDDt6Change: { changes: `hjxbdDDt6`, type: T.ChangeHandler },
      }),
      (P = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      v(
        N,
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
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: P,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: P,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: P,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: P,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: P,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: P,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: P,
                weight: `400`,
              },
            ],
          },
          ...tt,
          ...nt,
          ...E(Ae),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (N.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([fe(Pe, {}, t), fe(j, {}, t)])),
      }));
  });
function F(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function mt(e) {
  return typeof e == `function` ? e() : e;
}
function ht(e, t) {
  return Tn[e] > Tn[t];
}
function gt(e) {
  let t;
  for (let n of e) {
    let e = mt(n);
    if (((t === void 0 || ht(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function _t(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function I(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function vt(e) {
  throw Error(`Unexpected value: ${e}`);
}
function yt(e) {
  return typeof e == `string`;
}
function L(e) {
  return Number.isFinite(e);
}
function bt(e) {
  return e === null;
}
function xt(e) {
  if (bt(e)) return 0;
  switch (e.type) {
    case T.Array:
      return 1;
    case T.Boolean:
      return 2;
    case T.Color:
      return 3;
    case T.Date:
      return 4;
    case T.Enum:
      return 5;
    case T.File:
      return 6;
    case T.ResponsiveImage:
      return 10;
    case T.Link:
      return 7;
    case T.Number:
      return 8;
    case T.Object:
      return 9;
    case T.RichText:
      return 11;
    case T.String:
      return 12;
    case T.VectorSetItem:
      return 13;
    default:
      vt(e);
  }
}
function St(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = R.read(e);
    n.push(t);
  }
  return { type: T.Array, value: n };
}
function Ct(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) R.write(e, n);
}
function wt(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = R.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Tt(e) {
  return { type: T.Boolean, value: e.readUint8() !== 0 };
}
function Et(e, t) {
  e.writeUint8(+!!t.value);
}
function Dt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ot(e) {
  return { type: T.Color, value: e.readString() };
}
function kt(e, t) {
  e.writeString(t.value);
}
function At(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function jt(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: T.Date, value: n.toISOString() };
}
function Mt(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Nt(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Pt(e) {
  return { type: T.Enum, value: e.readString() };
}
function Ft(e, t) {
  e.writeString(t.value);
}
function It(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Lt(e) {
  return { type: T.File, value: e.readString() };
}
function Rt(e, t) {
  e.writeString(t.value);
}
function zt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Bt(e) {
  return { type: T.Link, value: e.readJson() };
}
function Vt(e, t) {
  e.writeJson(t.value);
}
function Ht(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ut(e) {
  return { type: T.Number, value: e.readFloat64() };
}
function Wt(e, t) {
  e.writeFloat64(t.value);
}
function Gt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Kt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = R.read(e);
  }
  return { type: T.Object, value: n };
}
function qt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), R.write(e, r));
}
function Jt(e, t, n) {
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
      u = R.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Yt(e) {
  return { type: T.ResponsiveImage, value: e.readJson() };
}
function Xt(e, t) {
  e.writeJson(t.value);
}
function Zt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Qt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: T.RichText, value: e.readUint32() };
  if (t === 1) return { type: T.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function $t(e, t) {
  if (L(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (yt(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function en(e, t) {
  let n = e.value,
    r = t.value;
  if ((L(n) && L(r)) || (yt(n) && yt(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function tn(e) {
  return { type: T.String, value: e.readString() };
}
function nn(e, t) {
  e.writeString(t.value);
}
function rn(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function an(e) {
  return { type: T.VectorSetItem, value: e.readUint32() };
}
function on(e, t) {
  e.writeUint32(t.value);
}
function sn(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function cn(e) {
  let t = Math.floor(An * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ln(e, t) {
  let n = dn(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Mn(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Nn(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function un(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function dn(e) {
  I(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function fn(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = R.read(e);
  }
  return t;
}
function* pn(e) {
  for (let t of e) yield* t.prioritySources;
}
var mn,
  R,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  z,
  En,
  Dn,
  On,
  B,
  V,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = e(() => {
    (r(),
      D(),
      (hn = Object.create),
      (gn = Object.defineProperty),
      (_n = Object.getOwnPropertyDescriptor),
      (vn = Object.getOwnPropertyNames),
      (yn = Object.getPrototypeOf),
      (bn = Object.prototype.hasOwnProperty),
      (xn = (e, t) =>
        function () {
          try {
            return (t || (0, e[vn(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Sn = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of vn(t))
            bn.call(e, i) ||
              i === n ||
              gn(e, i, { get: () => t[i], enumerable: !(r = _n(t, i)) || r.enumerable });
        return e;
      }),
      (Cn = (e, t, n) => (
        (n = e == null ? {} : hn(yn(e))),
        Sn(!t && e && e.__esModule ? n : gn(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (wn = Cn(
        xn({
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
      (Tn = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (z = {
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
      (En =
        ((mn = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = z.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = z.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = z.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = z.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = z.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = z.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = z.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = z.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = z.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = z.Float64;
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
            (F(this, `bytes`, void 0),
              F(this, `offset`, 0),
              F(this, `view`, void 0),
              (this.bytes = e),
              (this.view = _t(this.bytes)));
          }
        }),
        F(mn, `textDecoder`, new TextDecoder()),
        mn)),
      c !== void 0 && c.requestIdleCallback,
      (Dn = (e) => 2 ** e - 1),
      (On = (e) => -(2 ** (e - 1))),
      (B = (e) => 2 ** (e - 1) - 1),
      On(8),
      On(16),
      On(32),
      -(BigInt(2) ** BigInt(63)),
      Dn(8),
      Dn(16),
      Dn(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      B(8),
      B(16),
      B(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (V = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            I(L(n), `Invalid chunkId`),
            I(L(r), `Invalid offset`),
            I(L(i), `Invalid length`),
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
                  : (I(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (F(this, `chunkId`, void 0),
            F(this, `offset`, void 0),
            F(this, `length`, void 0),
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
              return St(e);
            case 2:
              return Tt(e);
            case 3:
              return Ot(e);
            case 4:
              return jt(e);
            case 5:
              return Pt(e);
            case 6:
              return Lt(e);
            case 7:
              return Bt(e);
            case 8:
              return Ut(e);
            case 9:
              return Kt(e);
            case 10:
              return Yt(e);
            case 11:
              return Qt(e);
            case 12:
              return tn(e);
            case 13:
              return an(e);
            default:
              vt(t);
          }
        }),
          (e.write = function (e, t) {
            let n = xt(t);
            if ((e.writeUint8(n), !bt(t)))
              switch (t.type) {
                case T.Array:
                  return Ct(e, t);
                case T.Boolean:
                  return Et(e, t);
                case T.Color:
                  return kt(e, t);
                case T.Date:
                  return Mt(e, t);
                case T.Enum:
                  return Ft(e, t);
                case T.File:
                  return Rt(e, t);
                case T.Link:
                  return Vt(e, t);
                case T.Number:
                  return Wt(e, t);
                case T.Object:
                  return qt(e, t);
                case T.ResponsiveImage:
                  return Xt(e, t);
                case T.RichText:
                  return $t(e, t);
                case T.VectorSetItem:
                  return on(e, t);
                case T.String:
                  return nn(e, t);
                default:
                  vt(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = xt(e),
              i = xt(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (bt(e) || bt(t)) return 0;
            switch (e.type) {
              case T.Array:
                return (I(t.type === T.Array), wt(e, t, n));
              case T.Boolean:
                return (I(t.type === T.Boolean), Dt(e, t));
              case T.Color:
                return (I(t.type === T.Color), At(e, t));
              case T.Date:
                return (I(t.type === T.Date), Nt(e, t));
              case T.Enum:
                return (I(t.type === T.Enum), It(e, t));
              case T.File:
                return (I(t.type === T.File), zt(e, t));
              case T.Link:
                return (I(t.type === T.Link), Ht(e, t));
              case T.Number:
                return (I(t.type === T.Number), Gt(e, t));
              case T.Object:
                return (I(t.type === T.Object), Jt(e, t, n));
              case T.ResponsiveImage:
                return (I(t.type === T.ResponsiveImage), Zt(e, t));
              case T.RichText:
                return (I(t.type === T.RichText), en(e, t));
              case T.VectorSetItem:
                return (I(t.type === T.VectorSetItem), sn(e, t));
              case T.String:
                return (I(t.type === T.String), rn(e, t, n));
              default:
                vt(e);
            }
          }));
      })((R ||= {})),
      (kn = 3),
      (An = 250),
      (jn = [408, 429, 500, 502, 503, 504]),
      (Mn = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!jn.includes(r.status) || ++n > kn) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > kn) throw e;
          }
          await cn(n);
        }
      }),
      (Nn = class {
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
            if ((I(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = un(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((I(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = un(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          F(this, `chunks`, []);
        }
      }),
      (Pn = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = Mn(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new En(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = gt(this.scanPrioritySources),
                        t = e ? A({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = fn(n),
                        o = n.getOffset() - i,
                        s = new V(this.id, i, o).toString(),
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
          (F(this, `id`, void 0),
            F(this, `url`, void 0),
            F(this, `itemsPromise`, void 0),
            F(this, `isScanning`, !1),
            F(this, `scanPrioritySources`, new Set()),
            F(this, `itemPrioritySources`, new Map()),
            F(
              this,
              `itemLoader`,
              new wn.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = V.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await ln(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = gt(pn(e)),
                      a = i ? A({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    I(o, `Missing range bytes`);
                    let s = fn(new En(o)),
                      c = e[t]?.pointer;
                    (I(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (Fn = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = V.fromString(e),
                r = this.chunks[n.chunkId];
              return (I(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = V.fromString(e.pointer),
            r = V.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return R.compare(e, t, n);
        }
        constructor(e) {
          (F(this, `options`, void 0),
            F(this, `id`, void 0),
            F(this, `schema`, void 0),
            F(this, `indexes`, void 0),
            F(this, `resolveRichText`, void 0),
            F(this, `resolveVectorSetItem`, void 0),
            F(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new Pn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Ln(e) {
  return typeof e == `object` && !!e && !d(e) && Hn in e;
}
function Rn(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function zn(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    Bn(t, i, n);
  }
}
function Bn(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Bn(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || zn(e, t, n);
  }
}
function Vn(e) {
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
          return u(S, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          zn(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (Ln(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            Rn(o, `Module not found`),
            Ln(o) && o.preload(),
            p(me, {
              componentIdentifier: r,
              children: (e) => p(xe, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return u(e === `a` ? g.a : e, r, ...a);
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
var H,
  U,
  Hn,
  Un,
  Wn,
  Gn = e(() => {
    (r(),
      l(),
      D(),
      i(),
      c !== void 0 && c.requestIdleCallback,
      (Hn = `preload`),
      (Un =
        (((H = Un || {})[(H.Fragment = 1)] = `Fragment`),
        (H[(H.Link = 2)] = `Link`),
        (H[(H.Module = 3)] = `Module`),
        (H[(H.Tag = 4)] = `Tag`),
        (H[(H.Text = 5)] = `Text`),
        H)),
      (Wn =
        (((U = Wn || {})[(U.RichText = 1)] = `RichText`),
        (U[(U.VectorSetItem = 2)] = `VectorSetItem`),
        U)));
  }),
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn = e(() => {
    (D(),
      In(),
      Gn(),
      (Kn = {
        createdAt: { isNullable: !0, type: T.Date },
        DLroDu9tG: { isNullable: !0, type: T.String },
        FkPXDrQLO: { isNullable: !0, type: T.String },
        g8TIWUNXD: { isNullable: !0, type: T.Boolean },
        id: { isNullable: !1, type: T.String },
        JK2cwZVML: { isNullable: !0, type: T.Boolean },
        k9ypv2DiX: { isNullable: !0, type: T.String },
        kjQaTJ5Ar: { isNullable: !0, type: T.String },
        KppJWJ5Lw: { isNullable: !0, type: T.String },
        L4HRCmXr_: { isNullable: !0, type: T.Link },
        l6CmwrZnx: { isNullable: !0, type: T.Boolean },
        nextItemId: { isNullable: !0, type: T.String },
        Nkz7uZuUB: { isNullable: !0, type: T.String },
        oEHQ46CmJ: { isNullable: !0, type: T.ResponsiveImage },
        previousItemId: { isNullable: !0, type: T.String },
        u3qoqrlIK: { isNullable: !0, type: T.String },
        updatedAt: { isNullable: !0, type: T.Date },
        VLAchYEPz: { isNullable: !0, type: T.String },
        WUo28JUZW: { isNullable: !0, type: T.String },
      }),
      (qn = []),
      (Jn = (e) => {
        let t = qn[e];
        if (t) return t().then((e) => e.default);
      }),
      (Yn = Vn({})),
      new O(),
      (Xn = {
        collectionByLocaleId: {
          default: new Fn({
            chunks: [
              new URL(
                `./MbR03LUXF-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/XTl58XPVeN90026M38G5/ajqT2LYSPgCuZXUj6RZB/MbR03LUXF.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `2b10673f-6eff-4aa7-a98a-8932c0f0d1e9default`,
            indexes: [],
            resolveRichText: Yn,
            resolveVectorSetItem: Jn,
            schema: Kn,
          }),
          zPfFQNtX1: new Fn({
            chunks: [
              new URL(
                `./MbR03LUXF-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/XTl58XPVeN90026M38G5/ajqT2LYSPgCuZXUj6RZB/MbR03LUXF.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `2b10673f-6eff-4aa7-a98a-8932c0f0d1e9zPfFQNtX1`,
            indexes: [],
            resolveRichText: Yn,
            resolveVectorSetItem: Jn,
            schema: Kn,
          }),
        },
        displayName: `Startup deals`,
        id: `2b10673f-6eff-4aa7-a98a-8932c0f0d1e9`,
      }),
      b(Xn, {
        JK2cwZVML: { defaultValue: !0, title: `Visible`, type: T.Boolean },
        g8TIWUNXD: { defaultValue: !0, title: `New`, type: T.Boolean },
        KppJWJ5Lw: { defaultValue: ``, title: `Title`, type: T.String },
        Nkz7uZuUB: {
          dataIdentifier: `local-module:collection/VWxSWoX2N:default`,
          title: `Category`,
          type: T.CollectionReference,
        },
        VLAchYEPz: {
          defaultValue: ``,
          placeholder: `The ultimate no-code website design and publishing platform.`,
          title: `Description`,
          type: T.String,
        },
        oEHQ46CmJ: { title: `Logo`, type: T.ResponsiveImage },
        k9ypv2DiX: {
          defaultValue: ``,
          placeholder: `Free Pro plan for one year`,
          title: `Deal`,
          type: T.String,
        },
        FkPXDrQLO: {
          defaultValue: ``,
          placeholder: `Saving $1,000+`,
          title: `Savings`,
          type: T.String,
        },
        L4HRCmXr_: { title: `Link`, type: T.Link },
        l6CmwrZnx: { defaultValue: !0, title: `New tab`, type: T.Boolean },
        kjQaTJ5Ar: { defaultValue: ``, title: `1 - Rule`, type: T.String },
        DLroDu9tG: { defaultValue: ``, title: `2 - Rule`, type: T.String },
        u3qoqrlIK: { defaultValue: ``, title: `3 - Rule`, type: T.String },
        WUo28JUZW: { preventLocalization: !0, title: `Slug`, type: T.String },
        createdAt: { title: `Created`, type: T.Date },
        updatedAt: { title: `Updated`, type: T.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/MbR03LUXF:default`,
          title: `Previous`,
          type: T.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/MbR03LUXF:default`,
          title: `Next`,
          type: T.CollectionReference,
        },
      }));
  });
function W(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Qn(e) {
  return typeof e == `function` ? e() : e;
}
function $n(e, t) {
  return ci[e] > ci[t];
}
function er(e) {
  let t;
  for (let n of e) {
    let e = Qn(n);
    if (((t === void 0 || $n(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function tr(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function G(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function nr(e) {
  throw Error(`Unexpected value: ${e}`);
}
function rr(e) {
  return typeof e == `string`;
}
function K(e) {
  return Number.isFinite(e);
}
function ir(e) {
  return e === null;
}
function ar(e) {
  if (ir(e)) return 0;
  switch (e.type) {
    case T.Array:
      return 1;
    case T.Boolean:
      return 2;
    case T.Color:
      return 3;
    case T.Date:
      return 4;
    case T.Enum:
      return 5;
    case T.File:
      return 6;
    case T.ResponsiveImage:
      return 10;
    case T.Link:
      return 7;
    case T.Number:
      return 8;
    case T.Object:
      return 9;
    case T.RichText:
      return 11;
    case T.String:
      return 12;
    case T.VectorSetItem:
      return 13;
    default:
      nr(e);
  }
}
function or(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = q.read(e);
    n.push(t);
  }
  return { type: T.Array, value: n };
}
function sr(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) q.write(e, n);
}
function cr(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = q.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function lr(e) {
  return { type: T.Boolean, value: e.readUint8() !== 0 };
}
function ur(e, t) {
  e.writeUint8(+!!t.value);
}
function dr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function fr(e) {
  return { type: T.Color, value: e.readString() };
}
function pr(e, t) {
  e.writeString(t.value);
}
function mr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function hr(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: T.Date, value: n.toISOString() };
}
function gr(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function _r(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function vr(e) {
  return { type: T.Enum, value: e.readString() };
}
function yr(e, t) {
  e.writeString(t.value);
}
function br(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xr(e) {
  return { type: T.File, value: e.readString() };
}
function Sr(e, t) {
  e.writeString(t.value);
}
function Cr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function wr(e) {
  return { type: T.Link, value: e.readJson() };
}
function Tr(e, t) {
  e.writeJson(t.value);
}
function Er(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Dr(e) {
  return { type: T.Number, value: e.readFloat64() };
}
function Or(e, t) {
  e.writeFloat64(t.value);
}
function kr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ar(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = q.read(e);
  }
  return { type: T.Object, value: n };
}
function jr(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), q.write(e, r));
}
function Mr(e, t, n) {
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
      u = q.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Nr(e) {
  return { type: T.ResponsiveImage, value: e.readJson() };
}
function Pr(e, t) {
  e.writeJson(t.value);
}
function Fr(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ir(e) {
  let t = e.readInt8();
  if (t === 0) return { type: T.RichText, value: e.readUint32() };
  if (t === 1) return { type: T.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Lr(e, t) {
  if (K(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (rr(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Rr(e, t) {
  let n = e.value,
    r = t.value;
  if ((K(n) && K(r)) || (rr(n) && rr(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function zr(e) {
  return { type: T.String, value: e.readString() };
}
function Br(e, t) {
  e.writeString(t.value);
}
function Vr(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Hr(e) {
  return { type: T.VectorSetItem, value: e.readUint32() };
}
function Ur(e, t) {
  e.writeUint32(t.value);
}
function Wr(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Gr(e) {
  let t = Math.floor(pi * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Kr(e, t) {
  let n = Jr(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await hi(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new gi(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function qr(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Jr(e) {
  G(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Yr(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = q.read(e);
  }
  return t;
}
function* Xr(e) {
  for (let t of e) yield* t.prioritySources;
}
var Zr,
  q,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  J,
  li,
  Y,
  ui,
  di,
  X,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi = e(() => {
    (r(),
      D(),
      (Qr = Object.create),
      ($r = Object.defineProperty),
      (ei = Object.getOwnPropertyDescriptor),
      (ti = Object.getOwnPropertyNames),
      (ni = Object.getPrototypeOf),
      (ri = Object.prototype.hasOwnProperty),
      (ii = (e, t) =>
        function () {
          try {
            return (t || (0, e[ti(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (ai = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ti(t))
            ri.call(e, i) ||
              i === n ||
              $r(e, i, { get: () => t[i], enumerable: !(r = ei(t, i)) || r.enumerable });
        return e;
      }),
      (oi = (e, t, n) => (
        (n = e == null ? {} : Qr(ni(e))),
        ai(!t && e && e.__esModule ? n : $r(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (si = oi(
        ii({
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
      (ci = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (J = {
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
      (li =
        ((Zr = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = J.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = J.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = J.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = J.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = J.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = J.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = J.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = J.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = J.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = J.Float64;
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
            (W(this, `bytes`, void 0),
              W(this, `offset`, 0),
              W(this, `view`, void 0),
              (this.bytes = e),
              (this.view = tr(this.bytes)));
          }
        }),
        W(Zr, `textDecoder`, new TextDecoder()),
        Zr)),
      c !== void 0 && c.requestIdleCallback,
      (Y = (e) => 2 ** e - 1),
      (ui = (e) => -(2 ** (e - 1))),
      (di = (e) => 2 ** (e - 1) - 1),
      ui(8),
      ui(16),
      ui(32),
      -(BigInt(2) ** BigInt(63)),
      Y(8),
      Y(16),
      Y(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      di(8),
      di(16),
      di(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (X = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            G(K(n), `Invalid chunkId`),
            G(K(r), `Invalid offset`),
            G(K(i), `Invalid length`),
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
                  : (G(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (W(this, `chunkId`, void 0),
            W(this, `offset`, void 0),
            W(this, `length`, void 0),
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
              return or(e);
            case 2:
              return lr(e);
            case 3:
              return fr(e);
            case 4:
              return hr(e);
            case 5:
              return vr(e);
            case 6:
              return xr(e);
            case 7:
              return wr(e);
            case 8:
              return Dr(e);
            case 9:
              return Ar(e);
            case 10:
              return Nr(e);
            case 11:
              return Ir(e);
            case 12:
              return zr(e);
            case 13:
              return Hr(e);
            default:
              nr(t);
          }
        }),
          (e.write = function (e, t) {
            let n = ar(t);
            if ((e.writeUint8(n), !ir(t)))
              switch (t.type) {
                case T.Array:
                  return sr(e, t);
                case T.Boolean:
                  return ur(e, t);
                case T.Color:
                  return pr(e, t);
                case T.Date:
                  return gr(e, t);
                case T.Enum:
                  return yr(e, t);
                case T.File:
                  return Sr(e, t);
                case T.Link:
                  return Tr(e, t);
                case T.Number:
                  return Or(e, t);
                case T.Object:
                  return jr(e, t);
                case T.ResponsiveImage:
                  return Pr(e, t);
                case T.RichText:
                  return Lr(e, t);
                case T.VectorSetItem:
                  return Ur(e, t);
                case T.String:
                  return Br(e, t);
                default:
                  nr(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = ar(e),
              i = ar(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (ir(e) || ir(t)) return 0;
            switch (e.type) {
              case T.Array:
                return (G(t.type === T.Array), cr(e, t, n));
              case T.Boolean:
                return (G(t.type === T.Boolean), dr(e, t));
              case T.Color:
                return (G(t.type === T.Color), mr(e, t));
              case T.Date:
                return (G(t.type === T.Date), _r(e, t));
              case T.Enum:
                return (G(t.type === T.Enum), br(e, t));
              case T.File:
                return (G(t.type === T.File), Cr(e, t));
              case T.Link:
                return (G(t.type === T.Link), Er(e, t));
              case T.Number:
                return (G(t.type === T.Number), kr(e, t));
              case T.Object:
                return (G(t.type === T.Object), Mr(e, t, n));
              case T.ResponsiveImage:
                return (G(t.type === T.ResponsiveImage), Fr(e, t));
              case T.RichText:
                return (G(t.type === T.RichText), Rr(e, t));
              case T.VectorSetItem:
                return (G(t.type === T.VectorSetItem), Wr(e, t));
              case T.String:
                return (G(t.type === T.String), Vr(e, t, n));
              default:
                nr(e);
            }
          }));
      })((q ||= {})),
      (fi = 3),
      (pi = 250),
      (mi = [408, 429, 500, 502, 503, 504]),
      (hi = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!mi.includes(r.status) || ++n > fi) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > fi) throw e;
          }
          await Gr(n);
        }
      }),
      (gi = class {
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
            if ((G(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = qr(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((G(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = qr(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          W(this, `chunks`, []);
        }
      }),
      (_i = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = hi(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new li(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = er(this.scanPrioritySources),
                        t = e ? A({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Yr(n),
                        o = n.getOffset() - i,
                        s = new X(this.id, i, o).toString(),
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
          (W(this, `id`, void 0),
            W(this, `url`, void 0),
            W(this, `itemsPromise`, void 0),
            W(this, `isScanning`, !1),
            W(this, `scanPrioritySources`, new Set()),
            W(this, `itemPrioritySources`, new Map()),
            W(
              this,
              `itemLoader`,
              new si.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = X.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Kr(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = er(Xr(e)),
                      a = i ? A({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    G(o, `Missing range bytes`);
                    let s = Yr(new li(o)),
                      c = e[t]?.pointer;
                    (G(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (vi = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = X.fromString(e),
                r = this.chunks[n.chunkId];
              return (G(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = X.fromString(e.pointer),
            r = X.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return q.compare(e, t, n);
        }
        constructor(e) {
          (W(this, `options`, void 0),
            W(this, `id`, void 0),
            W(this, `schema`, void 0),
            W(this, `indexes`, void 0),
            W(this, `resolveRichText`, void 0),
            W(this, `resolveVectorSetItem`, void 0),
            W(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new _i(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function bi(e) {
  return typeof e == `object` && !!e && !d(e) && Ti in e;
}
function xi(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Si(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    Ci(t, i, n);
  }
}
function Ci(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Ci(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || Si(e, t, n);
  }
}
function wi(e) {
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
          return u(S, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          Si(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (bi(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            xi(o, `Module not found`),
            bi(o) && o.preload(),
            p(me, {
              componentIdentifier: r,
              children: (e) => p(xe, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return u(e === `a` ? g.a : e, r, ...a);
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
var Z,
  Q,
  Ti,
  Ei,
  Di,
  Oi = e(() => {
    (r(),
      l(),
      D(),
      i(),
      c !== void 0 && c.requestIdleCallback,
      (Ti = `preload`),
      (Ei =
        (((Z = Ei || {})[(Z.Fragment = 1)] = `Fragment`),
        (Z[(Z.Link = 2)] = `Link`),
        (Z[(Z.Module = 3)] = `Module`),
        (Z[(Z.Tag = 4)] = `Tag`),
        (Z[(Z.Text = 5)] = `Text`),
        Z)),
      (Di =
        (((Q = Di || {})[(Q.RichText = 1)] = `RichText`),
        (Q[(Q.VectorSetItem = 2)] = `VectorSetItem`),
        Q)));
  }),
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi = e(() => {
    (D(),
      yi(),
      Oi(),
      (ki = {
        BxGB9r47P: { isNullable: !0, type: T.String },
        createdAt: { isNullable: !0, type: T.Date },
        g9MhzF6lb: { isNullable: !0, type: T.RichText },
        H8KrW6bvt: { isNullable: !0, type: T.String },
        id: { isNullable: !1, type: T.String },
        nextItemId: { isNullable: !0, type: T.String },
        previousItemId: { isNullable: !0, type: T.String },
        updatedAt: { isNullable: !0, type: T.Date },
      }),
      (Ai = []),
      (ji = (e) => {
        let t = Ai[e];
        if (t) return t().then((e) => e.default);
      }),
      (Mi = wi({})),
      new O(),
      (Ni = {
        collectionByLocaleId: {
          default: new vi({
            chunks: [
              new URL(
                `./VWxSWoX2N-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/o1B1IsNozRswsF6Vds8Y/inxcSbg9hNgH4vNabAee/VWxSWoX2N.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `5cd92c4f-8310-4439-ba8a-046f1032906ddefault`,
            indexes: [],
            resolveRichText: Mi,
            resolveVectorSetItem: ji,
            schema: ki,
          }),
          zPfFQNtX1: new vi({
            chunks: [
              new URL(
                `./VWxSWoX2N-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/o1B1IsNozRswsF6Vds8Y/inxcSbg9hNgH4vNabAee/VWxSWoX2N.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `5cd92c4f-8310-4439-ba8a-046f1032906dzPfFQNtX1`,
            indexes: [],
            resolveRichText: Mi,
            resolveVectorSetItem: ji,
            schema: ki,
          }),
        },
        displayName: `Startup deals categories`,
        id: `5cd92c4f-8310-4439-ba8a-046f1032906d`,
      }),
      b(Ni, {
        H8KrW6bvt: { defaultValue: ``, title: `Title`, type: T.String },
        BxGB9r47P: { preventLocalization: !0, title: `Slug`, type: T.String },
        g9MhzF6lb: { defaultValue: ``, title: `Content`, type: T.RichText },
        createdAt: { title: `Created`, type: T.Date },
        updatedAt: { title: `Updated`, type: T.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/VWxSWoX2N:default`,
          title: `Previous`,
          type: T.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/VWxSWoX2N:default`,
          title: `Next`,
          type: T.CollectionReference,
        },
      }));
  }),
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
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
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  $,
  da;
e(() => {
  (l(),
    D(),
    ne(),
    i(),
    Fe(),
    pt(),
    Zn(),
    Pi(),
    Ie(),
    Be(),
    qe(),
    (Fi = Ce(Te)),
    (Ii = Ce(g.div)),
    (Li = ye(j)),
    (Ri = Ce(be)),
    (zi = ye(N)),
    (Bi = {
      Rwwhg9hZK: `(min-width: 1200px)`,
      UtIHoNujd: `(min-width: 810px) and (max-width: 1199.98px)`,
      UzWNnxHU9: `(max-width: 809.98px)`,
    }),
    (Vi = []),
    (Hi = `framer-Lk7LT`),
    (Ui = {
      Rwwhg9hZK: `framer-v-w20w2g`,
      UtIHoNujd: `framer-v-x7ujf6`,
      UzWNnxHU9: `framer-v-1vb8aqa`,
    }),
    (Wi = (e, t, n) => (e && t ? `position` : n)),
    (Gi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.6, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Ki = {
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
    (qi = (e, t) => `translateY(-50%) ${t}`),
    (Ji = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.3, delay: 0, duration: 2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Yi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 110,
    }),
    (Xi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.1, duration: 2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Zi = {
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
    (Qi = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 }),
    ($i = { bounce: 0, delay: 0.08, duration: 2, type: `spring` }),
    (ea = {
      effect: Qi,
      repeat: !1,
      startDelay: 0.1,
      tokenization: `word`,
      transition: $i,
      trigger: `onMount`,
      type: `appear`,
    }),
    (ta = {
      effect: Qi,
      repeat: !1,
      startDelay: 0.2,
      tokenization: `word`,
      transition: $i,
      trigger: `onMount`,
      type: `appear`,
    }),
    (na = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.9, duration: 2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (ra = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.15, duration: 2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (ia = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (aa = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? t + e
        : typeof e == `string`
          ? e
          : typeof t == `string`
            ? t
            : ``),
    (oa = () => ({
      from: {
        constraint: {
          left: { collection: `dOAahQ9B5`, name: `Nkz7uZuUB`, type: `Identifier` },
          operator: `==`,
          right: { collection: `Nkz7uZuUB`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `dOAahQ9B5`, data: Xn, type: `Collection` },
        right: { alias: `Nkz7uZuUB`, data: Ni, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `dOAahQ9B5`, name: `JK2cwZVML`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `KppJWJ5Lw`, type: `Identifier` },
        {
          alias: `Nkz7uZuUB.H8KrW6bvt`,
          collection: `Nkz7uZuUB`,
          name: `H8KrW6bvt`,
          type: `Identifier`,
        },
        { collection: `dOAahQ9B5`, name: `VLAchYEPz`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `g8TIWUNXD`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `oEHQ46CmJ`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `L4HRCmXr_`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `WUo28JUZW`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `l6CmwrZnx`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `FkPXDrQLO`, type: `Identifier` },
        { collection: `dOAahQ9B5`, name: `id`, type: `Identifier` },
      ],
    })),
    (sa = ({ query: e, pageSize: t, children: n }) => n(le(e))),
    (ca = { Desktop: `Rwwhg9hZK`, Phone: `UzWNnxHU9`, Tablet: `UtIHoNujd` }),
    (la = ({ value: e }) =>
      oe()
        ? null
        : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ua = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: ca[r.variant] ?? r.variant ?? `Rwwhg9hZK`,
    })),
    ($ = w(
      f(function (e, r) {
        let i = s(null),
          c = r ?? i,
          l = t(),
          { activeLocale: u, contentLocale: d, setLocale: f } = ce(),
          h = Oe(),
          { style: ne, className: v, layoutId: oe, variant: b, ...x } = ua(e);
        de(n(() => Ke({}, d), [d]));
        let [S, w] = se(b, Bi, !1),
          T = C(Hi, Ue, ze),
          le = a(Ee)?.isLayoutTemplate,
          E = !!a(_)?.transition?.layout,
          ue = Wi(le, E);
        return (
          Se(),
          ae({}),
          p(Ee.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: ca,
              primaryVariantId: `Rwwhg9hZK`,
              variantClassNames: Ui,
            },
            children: m(te, {
              id: oe ?? l,
              children: [
                p(la, {
                  value: `html body { background: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0)); }`,
                }),
                m(g.div, {
                  ...x,
                  className: C(T, `framer-w20w2g`, v),
                  ref: c,
                  style: { ...ne },
                  children: [
                    m(g.div, {
                      className: `framer-1ojqdmq`,
                      "data-framer-name": `Hero`,
                      layout: ue,
                      children: [
                        p(Ii, {
                          animate: Gi,
                          className: `framer-ce6q5v`,
                          "data-framer-appear-id": `ce6q5v`,
                          initial: Ki,
                          optimized: !0,
                          children: p(`div`, {
                            className: `framer-pnbep1`,
                            children: p(g.div, {
                              className: `framer-16179va`,
                              style: { rotate: 45 },
                              children: p(Fi, {
                                animate: Ji,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 450,
                                  intrinsicWidth: 259,
                                  loading: ge((h?.y || 0) + 0 + 0 + 90 + 0 + -36 + 9 + 0.25),
                                  pixelHeight: 900,
                                  pixelWidth: 518,
                                  sizes: `56px`,
                                  src: `https://framerusercontent.com/images/ZidqkuqnHR8xrfNQ175DEC2EQ.png?width=518&height=900`,
                                  srcSet: `https://framerusercontent.com/images/ZidqkuqnHR8xrfNQ175DEC2EQ.png?width=518&height=900 518w`,
                                },
                                className: `framer-18ir440`,
                                "data-framer-appear-id": `18ir440`,
                                "data-framer-name": `Rocket2`,
                                initial: Yi,
                                optimized: !0,
                                transformTemplate: qi,
                              }),
                            }),
                          }),
                        }),
                        p(`div`, {
                          className: `framer-1qgqo07`,
                          "data-framer-name": `Content`,
                          children: p(`div`, {
                            className: `framer-jzjg0d`,
                            "data-framer-name": `Text`,
                            children: m(Ii, {
                              animate: Xi,
                              className: `framer-c5xs23`,
                              "data-framer-appear-id": `c5xs23`,
                              "data-framer-name": `Title + Subline`,
                              initial: Zi,
                              optimized: !0,
                              children: [
                                p(y, {
                                  __fromCanvasComponent: !0,
                                  children: p(o, {
                                    children: p(`h1`, {
                                      className: `framer-styles-preset-erdl1g`,
                                      "data-styles-preset": `sBHBrQO1O`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `The ultimate startup stack`,
                                    }),
                                  }),
                                  className: `framer-1hvpavu`,
                                  effect: ea,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                p(y, {
                                  __fromCanvasComponent: !0,
                                  children: p(o, {
                                    children: p(`p`, {
                                      className: `framer-styles-preset-18enhj0`,
                                      "data-styles-preset": `q5l9lrIfW`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Tools. Credits. Discounts. Your curated list of $100k+ in startup-friendly deals.`,
                                    }),
                                  }),
                                  className: `framer-1r6c8eg`,
                                  effect: ta,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        }),
                        p(re, {
                          breakpoint: S,
                          overrides: {
                            UtIHoNujd: { y: (h?.y || 0) + 0 + 0 + 90 + 363.3 },
                            UzWNnxHU9: { y: (h?.y || 0) + 0 + 0 + 90 + 343.3 },
                          },
                          children: p(ve, {
                            height: 34,
                            y: (h?.y || 0) + 0 + 0 + 90 + 122,
                            children: p(Ri, {
                              animate: na,
                              className: `framer-4fhdi6-container`,
                              "data-framer-appear-id": `4fhdi6`,
                              initial: Zi,
                              nodeId: `lJe1qpWcP`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `tSO4cKetc`,
                              children: p(j, {
                                height: `100%`,
                                id: `lJe1qpWcP`,
                                kw6l_suoH: `Get updates`,
                                layoutId: `lJe1qpWcP`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    p(Ii, {
                      animate: ra,
                      className: `framer-1jvns64`,
                      "data-framer-appear-id": `1jvns64`,
                      initial: Zi,
                      layout: ue,
                      optimized: !0,
                      children: p(`div`, {
                        className: `framer-sn96of`,
                        children: p(_e, {
                          children: p(sa, {
                            query: oa(),
                            children: (e, t, n) =>
                              p(ee, {
                                children: e?.map(
                                  (
                                    {
                                      "Nkz7uZuUB.H8KrW6bvt": e,
                                      FkPXDrQLO: t,
                                      g8TIWUNXD: n,
                                      id: r,
                                      JK2cwZVML: i,
                                      KppJWJ5Lw: a,
                                      L4HRCmXr_: o,
                                      l6CmwrZnx: s,
                                      oEHQ46CmJ: c,
                                      VLAchYEPz: l,
                                      WUo28JUZW: u,
                                    },
                                    d
                                  ) => (
                                    (i ??= !0),
                                    (a ??= ``),
                                    (e ??= ``),
                                    (l ??= ``),
                                    (n ??= !0),
                                    (o ??= ``),
                                    (u ??= ``),
                                    (s ??= !0),
                                    (t ??= ``),
                                    p(
                                      te,
                                      {
                                        id: `dOAahQ9B5-${r}`,
                                        children: p(k.Provider, {
                                          value: { WUo28JUZW: u },
                                          children:
                                            i !== !1 &&
                                            p(ie, {
                                              links: [
                                                {
                                                  href: o,
                                                  implicitPathVariables: { WUo28JUZW: u },
                                                },
                                                {
                                                  href: o,
                                                  implicitPathVariables: { WUo28JUZW: u },
                                                },
                                                {
                                                  href: o,
                                                  implicitPathVariables: { WUo28JUZW: u },
                                                },
                                              ],
                                              children: (r) =>
                                                p(re, {
                                                  breakpoint: S,
                                                  overrides: {
                                                    UtIHoNujd: {
                                                      width: `max((min(${h?.width || `100vw`} - 80px, 1200px) - 10px) / 2, 50px)`,
                                                      y: (h?.y || 0) + 0 + 527.3 + 60 + 0 + 0 + 0,
                                                    },
                                                    UzWNnxHU9: {
                                                      height: 284,
                                                      width: `max(min(${h?.width || `100vw`} - 40px, 1200px), 50px)`,
                                                      y: (h?.y || 0) + 0 + 507.3 + 40 + 0 + 0 + 0,
                                                    },
                                                  },
                                                  children: p(ve, {
                                                    height: 312,
                                                    width: `max((min(${h?.width || `100vw`} - 80px, 1200px) - 20px) / 3, 50px)`,
                                                    y: (h?.y || 0) + 0 + 286 + 60 + 0 + 0 + 0,
                                                    children: p(be, {
                                                      className: `framer-1448pv1-container`,
                                                      nodeId: `XjeoV9Unj`,
                                                      scopeId: `tSO4cKetc`,
                                                      children: p(re, {
                                                        breakpoint: S,
                                                        overrides: {
                                                          UtIHoNujd: { DpgDPEgYO: r[1] },
                                                          UzWNnxHU9: {
                                                            DpgDPEgYO: r[2],
                                                            style: { width: `100%` },
                                                          },
                                                        },
                                                        children: p(N, {
                                                          DGYZfJySn: a,
                                                          DpgDPEgYO: r[0],
                                                          height: `100%`,
                                                          hjxbdDDt6: aa(t, `Saving `),
                                                          HyrwAZhi3: l,
                                                          id: `XjeoV9Unj`,
                                                          layoutId: `XjeoV9Unj`,
                                                          style: { height: `100%`, width: `100%` },
                                                          SvwgrIdSm: e,
                                                          sxobXesJm: ia(c),
                                                          TelrCQiPo: s,
                                                          width: `100%`,
                                                          ZeRD5pdqh: n,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                        }),
                                      },
                                      r
                                    )
                                  )
                                ),
                              }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Lk7LT.framer-uo5ifr, .framer-Lk7LT .framer-uo5ifr { display: block; }`,
        `.framer-Lk7LT.framer-w20w2g { align-content: center; align-items: center; background-color: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Lk7LT .framer-1ojqdmq { align-content: center; align-items: center; background: radial-gradient(56.00000000000001% 50% at 50% 46.800000000000004%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 48.9461570945946%, rgba(0, 0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; max-width: 1240px; overflow: visible; padding: 90px 20px 40px 20px; position: relative; width: 100%; z-index: 5; }`,
        `.framer-Lk7LT .framer-ce6q5v { background: linear-gradient(180deg, #121212 0%, rgb(31, 31, 31) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25); flex: none; height: 72px; overflow: visible; position: relative; width: 72px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Lk7LT .framer-pnbep1 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: -38px; top: -36px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Lk7LT .framer-16179va { flex: none; height: 98px; left: calc(46.36363636363639% - 56px / 2); overflow: visible; position: absolute; top: calc(53.70370370370373% - 98px / 2); width: 56px; }`,
        `.framer-Lk7LT .framer-18ir440 { -webkit-filter: brightness(1.8) contrast(1.4) drop-shadow(18px 18px 5px rgba(0, 0, 0, 0.35)) drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.1)); aspect-ratio: 0.5755555555555556 / 1; filter: brightness(1.8) contrast(1.4) drop-shadow(18px 18px 5px rgba(0, 0, 0, 0.35)) drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.1)); flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Lk7LT .framer-1qgqo07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Lk7LT .framer-jzjg0d { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Lk7LT .framer-c5xs23 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Lk7LT .framer-1hvpavu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; width: 520px; }`,
        `.framer-Lk7LT .framer-1r6c8eg { --framer-text-wrap-override: none; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; width: 444px; }`,
        `.framer-Lk7LT .framer-4fhdi6-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Lk7LT .framer-1jvns64 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 40px 120px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Lk7LT .framer-sn96of { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; max-width: 1200px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Lk7LT .framer-1448pv1-container { align-self: start; flex: none; height: 312px; justify-self: start; position: relative; width: 100%; }`,
        ...Ve,
        ...Le,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Lk7LT.framer-w20w2g { width: 810px; } .framer-Lk7LT .framer-1ojqdmq { background: radial-gradient(56.00000000000001% 50% at 50% 35.3%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0) 100%); } .framer-Lk7LT .framer-1qgqo07 { flex-direction: column; gap: 50px; justify-content: flex-start; } .framer-Lk7LT .framer-jzjg0d { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-Lk7LT .framer-c5xs23 { order: 0; } .framer-Lk7LT .framer-1hvpavu { width: 426px; } .framer-Lk7LT .framer-1r6c8eg { width: 346px; } .framer-Lk7LT .framer-sn96of { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-Lk7LT.framer-w20w2g { width: 390px; } .framer-Lk7LT .framer-1ojqdmq { gap: 20px; } .framer-Lk7LT .framer-1qgqo07 { flex-direction: column; } .framer-Lk7LT .framer-jzjg0d { align-self: unset; flex: none; gap: 15px; height: min-content; width: 100%; } .framer-Lk7LT .framer-c5xs23 { gap: 5px; } .framer-Lk7LT .framer-1hvpavu { width: 284px; } .framer-Lk7LT .framer-1r6c8eg { width: 248px; } .framer-Lk7LT .framer-1jvns64 { padding: 40px 20px 120px 20px; } .framer-Lk7LT .framer-sn96of { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Lk7LT .framer-1448pv1-container { height: auto; }}`,
      ],
      `framer-Lk7LT`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 2839, width: 1200 }),
    v(
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
          ],
        },
        ...Li,
        ...zi,
        ...E(He),
        ...E(Re),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = we.get(oa(), n, r);
        return x(
          [
            () => i.preload(),
            () => fe(j, {}, t),
            async () =>
              x(
                ((await he(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => fe(N, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    (da = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramertSO4cKetc`,
          slots: [],
          annotations: {
            framerResolvesOwnDefaults: `true`,
            framerIntrinsicHeight: `2839`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"UtIHoNujd":{"layout":["fixed","fixed"]},"UzWNnxHU9":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { da as __FramerMetadata__, $ as default, Vi as queryParamNames };
//# sourceMappingURL=oC6muwn2ttA9UzDhtTViKseIlVGhy1iPgrM0KHDU1JE.C6wEk9Uu.mjs.map
