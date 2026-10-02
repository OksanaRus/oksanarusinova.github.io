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
} from "./react.hMW2PJqY.mjs";
import { V as u, c as d, o as f, r as p } from "./motion.CaZjHSpz.mjs";
import {
  G as m,
  K as h,
  Qt as g,
  Z as _,
  _n as v,
  c as y,
  gn as b,
  ht as x,
  ot as S,
  zt as C,
} from "./framer.CuDPj9y9.mjs";
import { n as w, t as T } from "./ZN14weCOL.XHeKJF5h.mjs";
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    (s(),
      x(),
      p(),
      r(),
      w(),
      (E = S(T)),
      (D = [`to_WmrC7P`, `f8OoznWtp`]),
      (O = `framer-Y6lKE`),
      (k = { f8OoznWtp: `framer-v-1xl0xkf`, to_WmrC7P: `framer-v-ahvsmy` }),
      (A = { duration: 0, type: `tween` }),
      (j = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(d.Provider, { value: o, children: t });
      }),
      (M = u.create(a)),
      (N = { Hidden: `f8OoznWtp`, Loading: `to_WmrC7P` }),
      (P = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: N[r.variant] ?? r.variant ?? `to_WmrC7P`,
      })),
      (F = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (I = v(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            a = t(),
            { activeLocale: s, setLocale: c } = g();
          C();
          let { style: d, className: p, layoutId: m, variant: h, ...v } = P(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: N,
              setGestureState: I,
              setVariant: L,
              variants: R,
            } = b({
              cycleOrder: D,
              defaultVariant: `to_WmrC7P`,
              ref: i,
              variant: h,
              variantClassNames: k,
            }),
            z = F(e, R),
            B = [],
            V = () => y !== `f8OoznWtp`,
            H = _(O, ...B);
          return l(f, {
            id: m ?? a,
            children: l(M, {
              animate: R,
              initial: !1,
              children:
                V() &&
                l(j, {
                  value: A,
                  children: l(u.div, {
                    ...v,
                    ...w,
                    className: _(H, `framer-ahvsmy`, p, x),
                    "data-framer-name": `Loading`,
                    layoutDependency: z,
                    layoutId: `to_WmrC7P`,
                    ref: i,
                    style: { ...d },
                    children: l(T, {
                      animated: !0,
                      className: `framer-9clykq`,
                      layoutDependency: z,
                      layoutId: `TRi5DDHOC`,
                      style: {
                        "--15eem7i": `rgb(255, 255, 255)`,
                        "--190pkig": 2,
                        "--wnsumo": `rgb(255, 255, 255)`,
                      },
                    }),
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Y6lKE.framer-1dczd17, .framer-Y6lKE .framer-1dczd17 { display: block; }`,
          `.framer-Y6lKE.framer-ahvsmy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-Y6lKE .framer-9clykq { flex: none; height: var(--framer-aspect-ratio-supported, 25px); position: relative; width: 20px; }`,
        ],
        `framer-Y6lKE`
      )),
      (I.displayName = `Spinner`),
      (I.defaultProps = { height: 40, width: 40 }),
      h(I, {
        variant: {
          options: [`to_WmrC7P`, `f8OoznWtp`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: y.Enum,
        },
      }),
      m(I, [{ explicitInter: !0, fonts: [] }, ...E], { supportsExplicitInterCodegen: !0 }));
  });
export { L as n, I as t };
//# sourceMappingURL=D5j855xhC.-cKq3pDF.mjs.map
