import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as s,
  l as c,
  m as l,
  s as u,
  u as d,
} from "./react.hMW2PJqY.mjs";
import { V as f, c as p, o as m, r as ee } from "./motion.CaZjHSpz.mjs";
import {
  G as h,
  I as g,
  K as _,
  Qt as te,
  T as ne,
  Z as v,
  _n as y,
  c as b,
  cn as x,
  ct as S,
  gn as re,
  ht as C,
  k as ie,
  lt as w,
  n as ae,
  x as oe,
  zt as se,
} from "./framer.CuDPj9y9.mjs";
import {
  _ as ce,
  b as T,
  g as E,
  h as D,
  m as O,
  p as le,
  v as k,
  y as A,
} from "./shared.DbR_nTE0.mjs";
import { i as j, n as M, r as N, t as ue } from "./opnE6P6z1.D-hpdzOY.mjs";
import { i as de, t as P } from "./c5NTs3UKr.B09jT0pe.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
  R,
  z,
  B,
  V,
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
  fe = e(() => {
    (s(),
      C(),
      ee(),
      r(),
      de(),
      j(),
      T(),
      E(),
      (I = { ad28cqqOB: { hover: !0 }, OV3cRbEEb: { hover: !0 }, Z5MWAFXuD: { hover: !0 } }),
      (L = [`ad28cqqOB`, `OV3cRbEEb`, `Z5MWAFXuD`]),
      (R = `framer-pjexH`),
      (z = {
        ad28cqqOB: `framer-v-1812f3k`,
        OV3cRbEEb: `framer-v-1ytmyu8`,
        Z5MWAFXuD: `framer-v-14okgle`,
      }),
      (B = { duration: 0, type: `tween` }),
      (V = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (H = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (U = (e, t) => typeof e == `number` && typeof t == `number` && e > t),
      (W = (e) => ({
        from: { alias: `hwts098RB`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 3 },
        orderBy: [
          {
            arguments: [
              { type: `LiteralValue`, value: e },
              { collection: `hwts098RB`, name: `id`, type: `Identifier` },
            ],
            direction: `asc`,
            functionName: `INDEX_OF`,
            type: `FunctionCall`,
          },
        ],
        select: [
          { collection: `hwts098RB`, name: `CNEM9i5ox`, type: `Identifier` },
          { collection: `hwts098RB`, name: `l2hmjNbeZ`, type: `Identifier` },
          { collection: `hwts098RB`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `hwts098RB`, name: `id`, type: `Identifier` },
          operator: `in`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      })),
      (G = ({ query: e, pageSize: t, children: n }) => n(x(e))),
      (K = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return u(p.Provider, { value: o, children: t });
      }),
      (q = { Basic: `Z5MWAFXuD`, Lesson: `ad28cqqOB`, Small: `OV3cRbEEb` }),
      (J = f.create(a)),
      (Y = ({
        academyTopic: e,
        duration: t,
        height: n,
        id: r,
        link: i,
        thumbnail: a,
        title: o,
        topics: s,
        tracking: c,
        truncate: l,
        width: u,
        ...d
      }) => ({
        ...d,
        C2THCLO4W: e ?? d.C2THCLO4W ?? [`nO_kGJpgu`],
        cZdT2c5oE: l ?? d.cZdT2c5oE ?? 1,
        DSBrLjWx7: c ?? d.DSBrLjWx7,
        eayk1a5zZ: a ??
          d.eayk1a5zZ ?? {
            pixelHeight: 576,
            pixelWidth: 1024,
            src: `https://framerusercontent.com/images/tG49TZMtz3Pem6LoFzXgs1vQYps.png?width=1024&height=576`,
            srcSet: `https://framerusercontent.com/images/tG49TZMtz3Pem6LoFzXgs1vQYps.png?scale-down-to=512&width=1024&height=576 512w,https://framerusercontent.com/images/tG49TZMtz3Pem6LoFzXgs1vQYps.png?width=1024&height=576 1024w`,
          },
        I5b2T1CzX: s ?? d.I5b2T1CzX ?? `design`,
        Kd9IP3Utk: o ?? d.Kd9IP3Utk ?? `Multi-Stop and Conic Gradients`,
        PVr4uD4WI: i ?? d.PVr4uD4WI,
        variant: q[d.variant] ?? d.variant ?? `ad28cqqOB`,
        zeomXB9jD: t ?? d.zeomXB9jD ?? `4:13`,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = y(
        l(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: l, contentLocale: p, setLocale: ee } = te(),
            h = se(),
            {
              style: _,
              className: y,
              layoutId: b,
              variant: x,
              eayk1a5zZ: S,
              Kd9IP3Utk: C,
              zeomXB9jD: T,
              I5b2T1CzX: E,
              PVr4uD4WI: D,
              C2THCLO4W: O,
              cZdT2c5oE: k,
              DSBrLjWx7: A,
              ...j
            } = Y(e),
            {
              baseVariant: M,
              classNames: N,
              clearLoadingGesture: de,
              gestureHandlers: P,
              gestureVariant: q,
              isLoading: Z,
              setGestureState: fe,
              setVariant: pe,
              variants: Q,
            } = re({
              cycleOrder: L,
              defaultVariant: `ad28cqqOB`,
              enabledGestures: I,
              ref: i,
              variant: x,
              variantClassNames: z,
            }),
            $ = X(e, Q),
            me = v(R, ue, ce, le),
            he = () => !(q === `Z5MWAFXuD-hover` || M === `Z5MWAFXuD`),
            ge = H(E),
            _e = () =>
              !(
                [`OV3cRbEEb-hover`, `Z5MWAFXuD-hover`].includes(q) ||
                [`OV3cRbEEb`, `Z5MWAFXuD`].includes(M)
              ),
            ve = () =>
              !!(
                [`OV3cRbEEb-hover`, `Z5MWAFXuD-hover`].includes(q) ||
                [`OV3cRbEEb`, `Z5MWAFXuD`].includes(M)
              ),
            ye = H(T),
            be = (e) =>
              [`OV3cRbEEb-hover`, `Z5MWAFXuD-hover`].includes(q) ||
              [`OV3cRbEEb`, `Z5MWAFXuD`].includes(M)
                ? !0
                : e;
          return u(m, {
            id: b ?? s,
            children: u(J, {
              animate: Q,
              initial: !1,
              children: u(K, {
                value: B,
                children: u(ne, {
                  clickTrackingId: A,
                  href: D,
                  motionChild: !0,
                  nodeId: `ad28cqqOB`,
                  openInNewTab: !1,
                  scopeId: `KDa4VTwjd`,
                  children: d(f.a, {
                    ...j,
                    ...P,
                    className: `${v(me, `framer-1812f3k`, y, N)} framer-1hbs6up`,
                    "data-border": !0,
                    "data-framer-name": `Lesson`,
                    layoutDependency: $,
                    layoutId: `ad28cqqOB`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      borderBottomLeftRadius: 18,
                      borderBottomRightRadius: 18,
                      borderTopLeftRadius: 18,
                      borderTopRightRadius: 18,
                      ..._,
                    },
                    variants: {
                      OV3cRbEEb: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      Z5MWAFXuD: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                    },
                    ...F(
                      {
                        OV3cRbEEb: { "data-framer-name": `Small` },
                        Z5MWAFXuD: { "data-framer-name": `Basic` },
                      },
                      M,
                      q
                    ),
                    children: [
                      he() &&
                        u(oe, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: w((h?.y || 0) + 0 + 0),
                            pixelHeight: 576,
                            pixelWidth: 1024,
                            sizes: h?.width || `100vw`,
                            ...V(S),
                          },
                          className: `framer-wigx4r`,
                          "data-framer-name": `Cover`,
                          layoutDependency: $,
                          layoutId: `W5DXCur__`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `rgba(0, 0, 0, 0)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            mask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 27%) add`,
                            opacity: 1,
                            WebkitMask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 27%) add`,
                          },
                          variants: {
                            "ad28cqqOB-hover": {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              opacity: 0.7,
                            },
                            "OV3cRbEEb-hover": { opacity: 0.6 },
                            OV3cRbEEb: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              mask: `none`,
                              WebkitMask: `none`,
                            },
                          },
                          ...F(
                            {
                              OV3cRbEEb: {
                                "data-border": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: w(
                                    (h?.y || 0) +
                                      (0 +
                                        ((h?.height || 200) - 0 - ((h?.height || 200) - 0) * 1) / 2)
                                  ),
                                  pixelHeight: 576,
                                  pixelWidth: 1024,
                                  sizes: `120px`,
                                  ...V(S),
                                  positionX: `center`,
                                  positionY: `top`,
                                },
                              },
                            },
                            M,
                            q
                          ),
                        }),
                      d(f.div, {
                        className: `framer-14ydyhj`,
                        "data-framer-name": `Metadata`,
                        layoutDependency: $,
                        layoutId: `lTXina3ra`,
                        style: { opacity: 1 },
                        variants: {
                          "ad28cqqOB-hover": { opacity: 0.5 },
                          "OV3cRbEEb-hover": { opacity: 0.6 },
                          "Z5MWAFXuD-hover": { opacity: 1 },
                        },
                        children: [
                          d(f.div, {
                            className: `framer-1xzqvoe`,
                            layoutDependency: $,
                            layoutId: `gjjvKDrp7`,
                            style: { opacity: 1 },
                            variants: { "Z5MWAFXuD-hover": { opacity: 0.6 } },
                            children: [
                              d(f.div, {
                                className: `framer-1ow6366`,
                                layoutDependency: $,
                                layoutId: `bqmRrpYNQ`,
                                children: [
                                  ge !== !1 &&
                                    u(f.div, {
                                      className: `framer-5l4tx`,
                                      layoutDependency: $,
                                      layoutId: `ebCS5IxcV`,
                                      children: u(f.div, {
                                        className: `framer-pgn8uw`,
                                        layoutDependency: $,
                                        layoutId: `hwts098RB`,
                                        children: u(ae, {
                                          children: u(G, {
                                            query: W(O),
                                            children: (e, t, n) =>
                                              u(c, {
                                                children: e?.map(
                                                  ({ CNEM9i5ox: e, id: t, l2hmjNbeZ: n }, r) => {
                                                    ((e ??= ``), (n ??= ``));
                                                    let i = r + 1,
                                                      o = U(i, 1);
                                                    return u(
                                                      m,
                                                      {
                                                        id: `hwts098RB-${t}`,
                                                        children: u(ie.Provider, {
                                                          value: { l2hmjNbeZ: n },
                                                          children: d(f.div, {
                                                            className: `framer-19sshjl`,
                                                            layoutDependency: $,
                                                            layoutId: `DZVojHe31`,
                                                            children: [
                                                              o !== !1 &&
                                                                u(g, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: u(a, {
                                                                    children: u(f.p, {
                                                                      className: `framer-styles-preset-bbixn5`,
                                                                      "data-styles-preset": `opnE6P6z1`,
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-text-alignment": `start`,
                                                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4)))`,
                                                                      },
                                                                      children: `,`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-1j1ztaq`,
                                                                  fonts: [`Inter`],
                                                                  layoutDependency: $,
                                                                  layoutId: `skJbrAWB8`,
                                                                  style: {
                                                                    "--extracted-r6o4lv": `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                    "--framer-link-text-decoration": `underline`,
                                                                  },
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              u(g, {
                                                                __fromCanvasComponent: !0,
                                                                children: u(a, {
                                                                  children: u(f.p, {
                                                                    className: `framer-styles-preset-rhbxb3`,
                                                                    "data-styles-preset": `vvG68NbwN`,
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--framer-text-alignment": `start`,
                                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4)))`,
                                                                    },
                                                                    children: `Basics`,
                                                                  }),
                                                                }),
                                                                className: `framer-rxdb6g`,
                                                                fonts: [`Inter`],
                                                                layoutDependency: $,
                                                                layoutId: `xauNBZmBt`,
                                                                style: {
                                                                  "--extracted-r6o4lv": `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                                                },
                                                                text: e,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                                ...F(
                                                                  {
                                                                    OV3cRbEEb: {
                                                                      children: u(a, {
                                                                        children: u(f.p, {
                                                                          className: `framer-styles-preset-bbixn5`,
                                                                          "data-styles-preset": `opnE6P6z1`,
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--framer-text-alignment": `start`,
                                                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4)))`,
                                                                          },
                                                                          children: `Basics`,
                                                                        }),
                                                                      }),
                                                                    },
                                                                    Z5MWAFXuD: {
                                                                      children: u(a, {
                                                                        children: u(f.p, {
                                                                          className: `framer-styles-preset-bbixn5`,
                                                                          "data-styles-preset": `opnE6P6z1`,
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--framer-text-alignment": `start`,
                                                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4)))`,
                                                                          },
                                                                          children: `Basics`,
                                                                        }),
                                                                      }),
                                                                    },
                                                                  },
                                                                  M,
                                                                  q
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      },
                                                      t
                                                    );
                                                  }
                                                ),
                                              }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  _e() &&
                                    u(g, {
                                      __fromCanvasComponent: !0,
                                      children: u(a, {
                                        children: u(f.p, {
                                          className: `framer-styles-preset-4eptxb`,
                                          "data-styles-preset": `XHuCPIQKc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: u(f.strong, {
                                            children: `Multi-Stop and Conic Gradients`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1gmytff`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      layoutDependency: $,
                                      layoutId: `S4TmLJwb5`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: C,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                ],
                              }),
                              ve() &&
                                u(g, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(f.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: u(f.strong, {
                                        children: `Multi-Stop and Conic Gradients`,
                                      }),
                                    }),
                                  }),
                                  className: `framer-8xzvvy`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  layoutDependency: $,
                                  layoutId: `eexGGaNC5`,
                                  style: {
                                    "--camglb": k,
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: C,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                          _e() &&
                            u(f.div, {
                              className: `framer-1wzenai`,
                              layoutDependency: $,
                              layoutId: `pRwLJVF2b`,
                            }),
                          be(ye !== !1) &&
                            u(g, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(f.p, {
                                  className: `framer-styles-preset-rhbxb3`,
                                  "data-styles-preset": `vvG68NbwN`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgb(153, 153, 153)))`,
                                  },
                                  children: `4:13`,
                                }),
                              }),
                              className: `framer-6bqzba`,
                              "data-framer-name": `Time`,
                              fonts: [`Inter`],
                              layoutDependency: $,
                              layoutId: `VM4v3NnrH`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgb(153, 153, 153))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 1,
                              },
                              text: T,
                              variants: {
                                "Z5MWAFXuD-hover": { opacity: 0.6 },
                                OV3cRbEEb: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                Z5MWAFXuD: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...F(
                                {
                                  OV3cRbEEb: {
                                    children: u(a, {
                                      children: u(f.p, {
                                        className: `framer-styles-preset-bbixn5`,
                                        "data-styles-preset": `opnE6P6z1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                        },
                                        children: `4:13`,
                                      }),
                                    }),
                                  },
                                  Z5MWAFXuD: {
                                    children: u(a, {
                                      children: u(f.p, {
                                        className: `framer-styles-preset-bbixn5`,
                                        "data-styles-preset": `opnE6P6z1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                        },
                                        children: `4:13`,
                                      }),
                                    }),
                                  },
                                },
                                M,
                                q
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-pjexH.framer-1hbs6up, .framer-pjexH .framer-1hbs6up { display: block; }`,
          `.framer-pjexH.framer-1812f3k { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pjexH .framer-wigx4r { align-content: flex-start; align-items: flex-start; aspect-ratio: 1.7777777777777777 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-pjexH .framer-14ydyhj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 20px 20px 20px; position: relative; width: 100%; }`,
          `.framer-pjexH .framer-1xzqvoe { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-pjexH .framer-1ow6366 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-pjexH .framer-5l4tx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-pjexH .framer-pgn8uw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-pjexH .framer-19sshjl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-pjexH .framer-1j1ztaq, .framer-pjexH .framer-rxdb6g { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-pjexH .framer-1gmytff { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-pjexH .framer-8xzvvy { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: var(--camglb); display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200px; }`,
          `.framer-pjexH .framer-1wzenai { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 15px; }`,
          `.framer-pjexH .framer-6bqzba { --framer-text-wrap-override: none; flex: none; height: auto; max-height: 50px; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-pjexH.framer-v-1ytmyu8.framer-1812f3k { flex-direction: row; min-height: 90px; width: 444px; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-wigx4r { align-content: center; align-items: center; align-self: stretch; aspect-ratio: unset; justify-content: center; max-height: 100%; min-height: 100%; padding: 10px; width: 120px; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-14ydyhj { flex: 1 0 0px; gap: 20px; justify-content: center; padding: 0px 20px 0px 20px; width: 1px; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-1xzqvoe { align-content: flex-start; align-items: flex-start; gap: 3px; order: 1; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-1ow6366, .framer-pjexH.framer-v-14okgle .framer-1ow6366 { flex-direction: row; gap: unset; justify-content: space-between; width: 148px; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-5l4tx, .framer-pjexH.framer-v-14okgle .framer-5l4tx { flex-direction: row; order: 1; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-1j1ztaq, .framer-pjexH.framer-v-14okgle .framer-1j1ztaq, .framer-pjexH.framer-v-1ytmyu8.hover .framer-1xzqvoe { order: 0; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-rxdb6g, .framer-pjexH.framer-v-14okgle .framer-rxdb6g, .framer-pjexH.framer-v-14okgle .framer-6bqzba { order: 1; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-8xzvvy, .framer-pjexH.framer-v-14okgle .framer-8xzvvy { -webkit-line-clamp: 1; width: 100%; }`,
          `.framer-pjexH.framer-v-1ytmyu8 .framer-6bqzba { order: 2; }`,
          `.framer-pjexH.framer-v-14okgle.framer-1812f3k { flex-direction: row; min-height: 70px; width: 444px; }`,
          `.framer-pjexH.framer-v-14okgle .framer-14ydyhj { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: column; gap: 10px; justify-content: center; padding: 15px; width: 1px; }`,
          `.framer-pjexH.framer-v-14okgle .framer-1xzqvoe { align-content: flex-start; align-items: flex-start; flex: none; gap: 3px; order: 2; width: 100%; }`,
          `.framer-pjexH.framer-v-1ytmyu8.hover .framer-wigx4r { aspect-ratio: unset; }`,
          `.framer-pjexH.framer-v-1ytmyu8.hover .framer-1ow6366, .framer-pjexH.framer-v-14okgle.hover .framer-1ow6366 { gap: unset; }`,
          ...M,
          ...k,
          ...O,
          `.framer-pjexH[data-border="true"]::after, .framer-pjexH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-pjexH`
      )),
      (Z.displayName = `Academy/Lesson Card`),
      (Z.defaultProps = { height: 380, width: 560 }),
      _(Z, {
        variant: {
          options: [`ad28cqqOB`, `OV3cRbEEb`, `Z5MWAFXuD`],
          optionTitles: [`Lesson`, `Small`, `Basic`],
          title: `Variant`,
          type: b.Enum,
        },
        eayk1a5zZ: {
          __defaultAssetReference: `data:framer/asset-reference,tG49TZMtz3Pem6LoFzXgs1vQYps.png?originalFilename=image.png&width=1024&height=576`,
          title: `Thumbnail`,
          type: b.ResponsiveImage,
        },
        Kd9IP3Utk: {
          defaultValue: `Multi-Stop and Conic Gradients`,
          displayTextArea: !1,
          title: `Title`,
          type: b.String,
        },
        onKd9IP3UtkChange: { changes: `Kd9IP3Utk`, type: b.ChangeHandler },
        zeomXB9jD: { defaultValue: `4:13`, displayTextArea: !1, title: `Duration`, type: b.String },
        onzeomXB9jDChange: { changes: `zeomXB9jD`, type: b.ChangeHandler },
        I5b2T1CzX: { defaultValue: `design`, title: `Topics`, type: b.String },
        onI5b2T1CzXChange: { changes: `I5b2T1CzX`, type: b.ChangeHandler },
        PVr4uD4WI: { title: `Link`, type: b.Link },
        C2THCLO4W: {
          dataIdentifier: `local-module:collection/c5NTs3UKr:default`,
          defaultValue: [`nO_kGJpgu`],
          title: `Academy Topic`,
          type: b.MultiCollectionReference,
        },
        onC2THCLO4WChange: { changes: `C2THCLO4W`, type: b.ChangeHandler },
        cZdT2c5oE: {
          defaultValue: 1,
          displayStepper: !0,
          min: 1,
          step: 1,
          title: `Truncate`,
          type: b.Number,
        },
        oncZdT2c5oEChange: { changes: `cZdT2c5oE`, type: b.ChangeHandler },
        DSBrLjWx7: { title: `Tracking`, type: b.TrackingId },
      }),
      h(
        Z,
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
          ...S(N),
          ...S(A),
          ...S(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { fe as n, Z as t };
//# sourceMappingURL=KDa4VTwjd.CNlDRekM.mjs.map
