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
  l as u,
  m as d,
  s as f,
  u as p,
  x as m,
  y as h,
} from "./react.hMW2PJqY.mjs";
import { V as g, c as _, o as v, r as y } from "./motion.CaZjHSpz.mjs";
import {
  G as b,
  I as x,
  K as S,
  Qt as ee,
  T as te,
  Z as C,
  Zt as ne,
  _n as w,
  c as T,
  cn as E,
  ct as D,
  gn as re,
  ht as O,
  k as ie,
  n as ae,
  o as oe,
  ot as k,
  z as se,
  zt as ce,
} from "./framer.CuDPj9y9.mjs";
import { n as A, t as j } from "./p7rJCFjrH.BG9qU99m.mjs";
import { i as M, n as N, r as P, t as le } from "./opnE6P6z1.D-hpdzOY.mjs";
import { b as ue } from "./propUtils.DXXiIDqr.mjs";
import { t as F } from "./default-utils.js__0.45.VqW8ntOf.mjs";
import { n as I, r as de } from "./JIJoMbGQG.DyEoyvm9.mjs";
import { i as fe, n as pe, r as L, t as me } from "./AsyGLBmHF.B26emjnL.mjs";
function R(e) {
  let {
      font: t,
      fontColor: r,
      title: i,
      displayMode: a,
      suffix: o,
      targetSelector: s,
      stickyTop: l = 0,
      readingSpeed: u = 200,
    } = e,
    [d, p] = h(0);
  m(() => {
    if (c === void 0) return;
    let e = document.createElement(`div`);
    e.innerHTML = typeof i == `string` ? i : JSON.stringify(i);
    let t = e.textContent || e.innerText || ``,
      n = t.trim().length === 0 ? 0 : t.trim().split(/\s+/).filter(Boolean).length;
    p(n);
  }, [i]);
  let [g, _] = h(0);
  m(() => {
    if (c === void 0) return;
    let e = null,
      t = null,
      n = !1,
      r = () => (s ? document.querySelector(s) : null),
      i = () => {
        let t = document.documentElement,
          n = document.body,
          i = c.innerHeight || t.clientHeight || 0;
        if (((e ||= r()), e)) {
          let t = e.getBoundingClientRect(),
            n = Math.max(e.scrollHeight, t.height),
            r = Math.max(0, i - l),
            a = Math.max(1, n - r),
            o = l - t.top,
            s = Math.min(1, Math.max(0, Math.min(Math.max(o, 0), a) / a));
          _(s);
          return;
        }
        let a = c.pageYOffset || t.scrollTop || n.scrollTop || 0,
          o = Math.max(
            n.scrollHeight,
            t.scrollHeight,
            n.offsetHeight,
            t.offsetHeight,
            n.clientHeight,
            t.clientHeight
          ),
          s = Math.max(1, o - i),
          u = Math.min(1, Math.max(0, a / s));
        _(u);
      },
      a = () => {
        n ||
          ((n = !0),
          requestAnimationFrame(() => {
            (i(), (n = !1));
          }));
      },
      o = () => {
        i();
      };
    return (
      i(),
      c.addEventListener(`scroll`, a, { passive: !0 }),
      c.addEventListener(`resize`, o),
      (e = r()),
      e && `ResizeObserver` in c && ((t = new ResizeObserver(() => i())), t.observe(e)),
      () => {
        (c.removeEventListener(`scroll`, a),
          c.removeEventListener(`resize`, o),
          t && e && t.unobserve(e));
      }
    );
  }, [s, l]);
  let v = n(() => {
      if (!t) return {};
      let { variable: e, opentype: n, ...r } = t,
        i = { ...r };
      return (
        n &&
          typeof n == `object` &&
          Object.keys(n).length &&
          (i.fontFeatureSettings = Object.entries(n)
            .filter(([, e]) => e)
            .map(([e, t]) => `"${e}" ${t}`)
            .join(`, `)),
        e &&
          typeof e == `object` &&
          Object.keys(e).length &&
          ((i.fontVariationSettings = Object.entries(e)
            .map(([e, t]) => `"${e}" ${t}`)
            .join(`, `)),
          e.wght && !i.fontWeight && (i.fontWeight = e.wght),
          e.slnt && !i.fontStyle && (i.fontStyle = `oblique`)),
        i
      );
    }, [t]),
    y = Math.ceil(d / u),
    b = Math.max(0, Math.ceil(((1 - g) * d) / u)),
    x = a === `words` ? `${d}` : a === `timeLeft` ? `${b}${o}` : `${y}${o}`;
  return f(`div`, {
    style: {
      ...v,
      color: r,
      display: `flex`,
      justifyContent: `left`,
      alignItems: `left`,
      padding: 0,
    },
    children: x,
  });
}
var z = e(() => {
  (r(),
    l(),
    O(),
    F(),
    i(),
    (R.defaultProps = {
      title: `<p>Your rich text here</p>`,
      font: ue.defaultProps,
      fontColor: `#000`,
      displayMode: `words`,
      suffix: `min read`,
      targetSelector: ``,
      stickyTop: 0,
      readingSpeed: 200,
    }),
    S(R, {
      title: { title: `Title`, type: T.RichText },
      font: { type: T.Font, controls: `extended`, title: `Font` },
      fontColor: { title: `Font Color`, type: T.Color, defaultValue: R.defaultProps.fontColor },
      displayMode: {
        title: `Display Mode`,
        type: T.SegmentedEnum,
        options: [`words`, `time`, `timeLeft`],
        optionTitles: [`Words`, `Total Time`, `Time Left`],
        defaultValue: R.defaultProps.displayMode,
      },
      suffix: { title: `Suffix`, type: T.String, defaultValue: R.defaultProps.suffix },
      targetSelector: {
        title: `Target Selector`,
        type: T.String,
        defaultValue: R.defaultProps.targetSelector,
        placeholder: `#article or .post`,
      },
      stickyTop: {
        title: `Sticky Top (px)`,
        type: T.Number,
        defaultValue: R.defaultProps.stickyTop,
        min: 0,
        displayStepper: !0,
        step: 1,
        unit: `px`,
      },
      readingSpeed: {
        title: `Reading Speed (WPM)`,
        type: T.Number,
        defaultValue: R.defaultProps.readingSpeed,
        min: 60,
        max: 600,
        displayStepper: !0,
        step: 10,
      },
    }));
});
function he(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
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
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  Q,
  $,
  we = e(() => {
    (l(),
      O(),
      y(),
      i(),
      A(),
      z(),
      de(),
      fe(),
      M(),
      (B = k(j)),
      (V = k(R)),
      (H = { Xg3Z4EZh6: { hover: !0 } }),
      (U = [`Xg3Z4EZh6`, `dWvOEENeA`]),
      (W = `framer-q41Wv`),
      (G = { dWvOEENeA: `framer-v-w7fjxe`, Xg3Z4EZh6: `framer-v-1uq9nvs` }),
      (K = { duration: 0, type: `tween` }),
      (q = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (J = (e, t, { y1yvR6zWM: n, A08lga8FR: r }) => (e ? n : r)),
      (Y = (e, t, n) => {
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
      (X = { dateStyle: `medium`, timeZone: `UTC` }),
      (Z = (e, t) => Y(e, X, t)),
      (ge = (e, t) => typeof e == `number` && typeof t == `number` && e > t),
      (_e = (e) => ({
        from: { alias: `zDPED6x5D`, data: I, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        orderBy: [
          {
            arguments: [
              { type: `LiteralValue`, value: e },
              { collection: `zDPED6x5D`, name: `id`, type: `Identifier` },
            ],
            direction: `asc`,
            functionName: `INDEX_OF`,
            type: `FunctionCall`,
          },
        ],
        select: [
          { collection: `zDPED6x5D`, name: `QzpenSzai`, type: `Identifier` },
          { collection: `zDPED6x5D`, name: `Lxe6TQro9`, type: `Identifier` },
          { collection: `zDPED6x5D`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `zDPED6x5D`, name: `id`, type: `Identifier` },
          operator: `in`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      })),
      (ve = ({ query: e, pageSize: t, children: n }) => n(E(e))),
      (ye = (e) => !e),
      (be = ({ value: e, children: t }) => {
        let r = a(_),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(_.Provider, { value: o, children: t });
      }),
      (xe = { Desktop: `Xg3Z4EZh6`, Phone: `dWvOEENeA` }),
      (Se = g.create(o)),
      (Ce = ({
        blogAuthorS: e,
        category: t,
        content: n,
        detailPath: r,
        height: i,
        hideReadingTime: a,
        id: s,
        link: c,
        openExternalInNewTab: l,
        publishDate: u,
        title: d,
        width: p,
        ...m
      }) => ({
        ...m,
        A08lga8FR: r ?? m.A08lga8FR,
        C8FPCrC6p: a ?? m.C8FPCrC6p ?? !1,
        ElWsckMqs: u ?? m.ElWsckMqs ?? `2026-06-16T00:00:00.000Z`,
        H3f3w0KgZ: t ?? m.H3f3w0KgZ ?? `News`,
        KvQ5WStvI: e ?? m.KvQ5WStvI ?? [`Gz0xGb7KP`],
        SaqNn0Qhz: l ?? m.SaqNn0Qhz ?? !1,
        variant: xe[m.variant] ?? m.variant ?? `Xg3Z4EZh6`,
        WgIs0Geb4: n ?? m.WgIs0Geb4 ?? f(o, { children: f(g.p, { children: `Content` }) }),
        wGYxmUlWM:
          d ?? m.wGYxmUlWM ?? `Why Marketplace is becoming part of the new Framer Community`,
        y1yvR6zWM: c ?? m.y1yvR6zWM,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = w(
        d(function (e, n) {
          let r = s(null),
            i = n ?? r,
            a = t(),
            { activeLocale: c, contentLocale: l, setLocale: d } = ee();
          ce();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              y1yvR6zWM: b,
              ElWsckMqs: S,
              H3f3w0KgZ: w,
              wGYxmUlWM: T,
              KvQ5WStvI: E,
              WgIs0Geb4: D,
              C8FPCrC6p: O,
              SaqNn0Qhz: k,
              A08lga8FR: A,
              ...M
            } = Ce(e),
            {
              baseVariant: N,
              classNames: P,
              clearLoadingGesture: ue,
              gestureHandlers: F,
              gestureVariant: I,
              isLoading: de,
              setGestureState: fe,
              setVariant: pe,
              variants: L,
            } = re({
              cycleOrder: U,
              defaultVariant: `Xg3Z4EZh6`,
              enabledGestures: H,
              ref: i,
              variant: y,
              variantClassNames: G,
            }),
            z = Q(e, L),
            B = C(W, le, me),
            V = ne(),
            Y = Z(S, V),
            X = ye(O);
          return f(v, {
            id: _ ?? a,
            children: f(Se, {
              animate: L,
              initial: !1,
              children: f(be, {
                value: K,
                children: f(te, {
                  href: J(q(b), l, { y1yvR6zWM: b, A08lga8FR: A }),
                  motionChild: !0,
                  nodeId: `Xg3Z4EZh6`,
                  openInNewTab: k,
                  scopeId: `aY2Y_syoZ`,
                  children: f(g.a, {
                    ...M,
                    ...F,
                    className: `${C(B, `framer-1uq9nvs`, h, P)} framer-qi8uon`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: z,
                    layoutId: `Xg3Z4EZh6`,
                    ref: i,
                    style: { ...m },
                    ...he({ dWvOEENeA: { "data-framer-name": `Phone` } }, N, I),
                    children: p(g.div, {
                      className: `framer-1w8tk5l`,
                      "data-border": !0,
                      "data-framer-name": `Blog/List`,
                      layoutDependency: z,
                      layoutId: `w15Xz4AZk`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(255, 255, 255, 0.1)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      children: [
                        p(g.div, {
                          className: `framer-1fr231b`,
                          layoutDependency: z,
                          layoutId: `ybHzkzkV6`,
                          style: { opacity: 1 },
                          variants: { "Xg3Z4EZh6-hover": { opacity: 0.6 } },
                          children: [
                            p(g.div, {
                              className: `framer-1naf2li`,
                              layoutDependency: z,
                              layoutId: `biAx4onau`,
                              children: [
                                f(x, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: f(g.p, {
                                      className: `framer-styles-preset-bbixn5`,
                                      "data-styles-preset": `opnE6P6z1`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                      },
                                      children: `News`,
                                    }),
                                  }),
                                  className: `framer-1x4qbe`,
                                  fonts: [`Inter`],
                                  layoutDependency: z,
                                  layoutId: `mI0FN7KPf`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                  },
                                  text: w,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(g.div, {
                                  className: `framer-1yr21ch`,
                                  layoutDependency: z,
                                  layoutId: `XY2zc98hd`,
                                  style: {
                                    backgroundColor: `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                    borderBottomLeftRadius: 60,
                                    borderBottomRightRadius: 60,
                                    borderTopLeftRadius: 60,
                                    borderTopRightRadius: 60,
                                  },
                                }),
                                f(x, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: f(g.p, {
                                      className: `framer-styles-preset-bbixn5`,
                                      "data-styles-preset": `opnE6P6z1`,
                                      dir: `auto`,
                                      children: `Jul 21, 2026`,
                                    }),
                                  }),
                                  className: `framer-m7tqtc`,
                                  fonts: [`Inter`],
                                  layoutDependency: z,
                                  layoutId: `z7a8enNjJ`,
                                  text: f(`time`, { dateTime: S, children: Y }),
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                k !== !1 &&
                                  f(j, {
                                    animated: !0,
                                    className: `framer-1rl4g01`,
                                    "data-framer-name": `External`,
                                    layoutDependency: z,
                                    layoutId: `pKQtjl6fv`,
                                    style: {
                                      "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                      "--1iwhep7": 2,
                                      "--1l3yetw": `rgb(255, 255, 255)`,
                                      opacity: 0.4,
                                    },
                                  }),
                              ],
                            }),
                            f(x, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(g.h6, {
                                  className: `framer-styles-preset-avvfkx`,
                                  "data-styles-preset": `AsyGLBmHF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                  },
                                  children: `Why Marketplace is becoming part of the new Framer Community`,
                                }),
                              }),
                              className: `framer-1wxcprl`,
                              fonts: [`Inter`],
                              layoutDependency: z,
                              layoutId: `kZkQNSKvZ`,
                              style: {
                                "--extracted-1w1cjl5": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                              },
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        p(g.div, {
                          className: `framer-10mb7w4`,
                          layoutDependency: z,
                          layoutId: `l3agH5rsv`,
                          style: { opacity: 1 },
                          variants: { "Xg3Z4EZh6-hover": { opacity: 0.6 } },
                          children: [
                            f(g.div, {
                              className: `framer-1e2jelu`,
                              "data-framer-name": `Authors`,
                              layoutDependency: z,
                              layoutId: `IpviR8vmM`,
                              children: f(g.div, {
                                className: `framer-qr7ibj`,
                                layoutDependency: z,
                                layoutId: `zDPED6x5D`,
                                children: f(ae, {
                                  children: f(ve, {
                                    query: _e(E),
                                    children: (e, t, n) =>
                                      f(u, {
                                        children: e?.map(
                                          ({ id: e, Lxe6TQro9: t, QzpenSzai: n }, r) => {
                                            ((n ??= ``), (t ??= ``));
                                            let i = r + 1,
                                              a = ge(i, 1);
                                            return f(
                                              v,
                                              {
                                                id: `zDPED6x5D-${e}`,
                                                children: f(ie.Provider, {
                                                  value: { Lxe6TQro9: t },
                                                  children: p(g.div, {
                                                    className: `framer-liqdrf`,
                                                    layoutDependency: z,
                                                    layoutId: `VhAGqzkfs`,
                                                    children: [
                                                      a !== !1 &&
                                                        f(x, {
                                                          __fromCanvasComponent: !0,
                                                          children: f(o, {
                                                            children: f(g.p, {
                                                              className: `framer-styles-preset-bbixn5`,
                                                              "data-styles-preset": `opnE6P6z1`,
                                                              dir: `auto`,
                                                              children: `,`,
                                                            }),
                                                          }),
                                                          className: `framer-1jis3d0`,
                                                          fonts: [`Inter`],
                                                          layoutDependency: z,
                                                          layoutId: `bBWH1Hhee`,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      f(x, {
                                                        __fromCanvasComponent: !0,
                                                        children: f(o, {
                                                          children: f(g.p, {
                                                            className: `framer-styles-preset-bbixn5`,
                                                            "data-styles-preset": `opnE6P6z1`,
                                                            dir: `auto`,
                                                            children: `Engineering`,
                                                          }),
                                                        }),
                                                        className: `framer-omlnmm`,
                                                        fonts: [`Inter`],
                                                        layoutDependency: z,
                                                        layoutId: `X3i_w72jp`,
                                                        text: n,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              },
                                              e
                                            );
                                          }
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                            }),
                            X !== !1 &&
                              f(g.div, {
                                className: `framer-1awf8zj`,
                                layoutDependency: z,
                                layoutId: `WdMQs3am6`,
                                style: {
                                  backgroundColor: `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                  borderBottomLeftRadius: 2,
                                  borderBottomRightRadius: 2,
                                  borderTopLeftRadius: 2,
                                  borderTopRightRadius: 2,
                                },
                              }),
                            X !== !1 &&
                              f(oe, {
                                children: f(se, {
                                  className: `framer-c3kkmp-container`,
                                  isAuthoredByUser: !0,
                                  layoutDependency: z,
                                  layoutId: `f6JRroL3v-container`,
                                  nodeId: `f6JRroL3v`,
                                  rendersWithMotion: !0,
                                  scopeId: `aY2Y_syoZ`,
                                  style: { opacity: 0.4 },
                                  children: f(R, {
                                    displayMode: `time`,
                                    font: {
                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                      fontFeatureSettings: `'cv11' on`,
                                      fontSize: `12px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `-0.03em`,
                                      lineHeight: `1em`,
                                      textAlign: `left`,
                                    },
                                    fontColor: `rgb(255, 255, 255)`,
                                    height: `100%`,
                                    id: `f6JRroL3v`,
                                    layoutId: `f6JRroL3v`,
                                    readingSpeed: 200,
                                    stickyTop: 0,
                                    suffix: `m`,
                                    targetSelector: ``,
                                    title: D,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-q41Wv.framer-qi8uon, .framer-q41Wv .framer-qi8uon { display: block; }`,
          `.framer-q41Wv.framer-1uq9nvs { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 780px; }`,
          `.framer-q41Wv .framer-1w8tk5l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 100%; }`,
          `.framer-q41Wv .framer-1fr231b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-q41Wv .framer-1naf2li { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-q41Wv .framer-1x4qbe, .framer-q41Wv .framer-m7tqtc, .framer-q41Wv .framer-1jis3d0, .framer-q41Wv .framer-omlnmm { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-q41Wv .framer-1yr21ch { flex: none; height: 2px; overflow: hidden; position: relative; width: 2px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q41Wv .framer-1rl4g01 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 12px; z-index: 1; }`,
          `.framer-q41Wv .framer-1wxcprl { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-q41Wv .framer-10mb7w4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-q41Wv .framer-1e2jelu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-q41Wv .framer-qr7ibj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-q41Wv .framer-liqdrf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-q41Wv .framer-1awf8zj { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 2px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q41Wv .framer-c3kkmp-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-q41Wv.framer-v-w7fjxe.framer-1uq9nvs { cursor: unset; }`,
          `.framer-q41Wv.framer-v-w7fjxe .framer-1w8tk5l { align-content: flex-start; align-items: flex-start; flex-direction: column; }`,
          `.framer-q41Wv.framer-v-w7fjxe .framer-1fr231b { flex: none; width: 100%; }`,
          `.framer-q41Wv.framer-v-w7fjxe .framer-10mb7w4 { justify-content: flex-start; }`,
          ...N,
          ...pe,
          `.framer-q41Wv[data-border="true"]::after, .framer-q41Wv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-q41Wv`
      )),
      ($.displayName = `Blog/Row 2026`),
      ($.defaultProps = { height: 87, width: 780 }),
      S($, {
        variant: {
          options: [`Xg3Z4EZh6`, `dWvOEENeA`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
        y1yvR6zWM: { title: `Link`, type: T.Link },
        ElWsckMqs: {
          defaultValue: `2026-06-16T00:00:00.000Z`,
          title: `Publish Date`,
          type: T.Date,
        },
        onElWsckMqsChange: { changes: `ElWsckMqs`, type: T.ChangeHandler },
        H3f3w0KgZ: { defaultValue: `News`, title: `Category`, type: T.String },
        onH3f3w0KgZChange: { changes: `H3f3w0KgZ`, type: T.ChangeHandler },
        wGYxmUlWM: {
          defaultValue: `Why Marketplace is becoming part of the new Framer Community`,
          title: `Title`,
          type: T.String,
        },
        onwGYxmUlWMChange: { changes: `wGYxmUlWM`, type: T.ChangeHandler },
        KvQ5WStvI: {
          dataIdentifier: `local-module:collection/JIJoMbGQG:default`,
          defaultValue: [`Gz0xGb7KP`],
          title: `Blog Author(s)`,
          type: T.MultiCollectionReference,
        },
        onKvQ5WStvIChange: { changes: `KvQ5WStvI`, type: T.ChangeHandler },
        WgIs0Geb4: { defaultValue: `<p>Content</p>`, title: `Content`, type: T.RichText },
        C8FPCrC6p: { defaultValue: !1, title: `Hide Reading Time`, type: T.Boolean },
        onC8FPCrC6pChange: { changes: `C8FPCrC6p`, type: T.ChangeHandler },
        SaqNn0Qhz: { defaultValue: !1, title: `Open External In New Tab`, type: T.Boolean },
        onSaqNn0QhzChange: { changes: `SaqNn0Qhz`, type: T.ChangeHandler },
        A08lga8FR: {
          description: `Fallback link target: rows link here unless an External URL is set. Auto-filled from the article slug — keep as is.`,
          optional: !0,
          title: `Detail Path`,
          type: T.String,
        },
        onA08lga8FRChange: { changes: `A08lga8FR`, type: T.ChangeHandler },
      }),
      b(
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
          ...B,
          ...V,
          ...D(P),
          ...D(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { z as i, we as n, R as r, $ as t };
//# sourceMappingURL=aY2Y_syoZ.DNrRa1lF.mjs.map
