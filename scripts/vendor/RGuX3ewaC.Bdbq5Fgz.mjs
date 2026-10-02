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
  Ft as m,
  G as h,
  K as g,
  Qt as _,
  Z as v,
  _n as y,
  c as b,
  gn as x,
  ht as S,
  ot as C,
  zt as w,
} from "./framer.CuDPj9y9.mjs";
import { n as T, t as E } from "./rPRBE2iVS.DDTF-_E2.mjs";
function D(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (s(),
      S(),
      p(),
      r(),
      T(),
      (O = C(E)),
      (k = { mdTL8dzak: { hover: !0 }, NyvaL6VMC: { hover: !0 } }),
      (A = [`mdTL8dzak`, `NyvaL6VMC`]),
      (j = `framer-BDH4j`),
      (M = { mdTL8dzak: `framer-v-8ouk7h`, NyvaL6VMC: `framer-v-10oy7ph` }),
      (N = { duration: 0, type: `tween` }),
      (P = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(d.Provider, { value: o, children: t });
      }),
      (F = { "Variant 1": `mdTL8dzak`, "Variant 2": `NyvaL6VMC` }),
      (I = u.create(a)),
      (L = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        HeSWqr1qm: e ?? i.HeSWqr1qm,
        variant: F[i.variant] ?? i.variant ?? `mdTL8dzak`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = y(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            a = t(),
            { activeLocale: s, setLocale: c } = _();
          w();
          let { style: d, className: p, layoutId: h, variant: g, HeSWqr1qm: y, ...b } = L(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: O,
              gestureVariant: F,
              isLoading: z,
              setGestureState: B,
              setVariant: V,
              variants: H,
            } = x({
              cycleOrder: A,
              defaultVariant: `mdTL8dzak`,
              enabledGestures: k,
              ref: i,
              variant: g,
              variantClassNames: M,
            }),
            U = R(e, H),
            { activeVariantCallback: W, delay: G } = m(S),
            K = W(async (...e) => {
              if ((B({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
            }),
            q = v(j);
          return l(f, {
            id: h ?? a,
            children: l(I, {
              animate: H,
              initial: !1,
              children: l(P, {
                value: N,
                children: l(u.div, {
                  ...b,
                  ...O,
                  className: v(q, `framer-8ouk7h`, p, C),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: U,
                  layoutId: `mdTL8dzak`,
                  onTap: K,
                  ref: i,
                  style: {
                    backdropFilter: `blur(10px)`,
                    backgroundColor: `rgba(0, 0, 0, 0.15)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    boxShadow: `inset 0px 0px 3px 0px rgba(255, 255, 255, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15)`,
                    WebkitBackdropFilter: `blur(10px)`,
                    ...d,
                  },
                  variants: {
                    "mdTL8dzak-hover": { backgroundColor: `rgb(255, 255, 255)` },
                    "NyvaL6VMC-hover": {
                      backdropFilter: `blur(10px)`,
                      backgroundColor: `rgb(255, 255, 255)`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      boxShadow: `inset 0px 0px 3px 0px rgba(255, 255, 255, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15)`,
                      WebkitBackdropFilter: `blur(10px)`,
                    },
                    NyvaL6VMC: {
                      backdropFilter: `blur(7px)`,
                      borderBottomLeftRadius: 72,
                      borderBottomRightRadius: 72,
                      borderTopLeftRadius: 72,
                      borderTopRightRadius: 72,
                      boxShadow: `inset 0px 0px 3px 0px rgba(255, 255, 255, 0.15), inset 0px 0.72px 0px 0px rgba(255, 255, 255, 0.15)`,
                      WebkitBackdropFilter: `blur(7px)`,
                    },
                  },
                  ...D({ NyvaL6VMC: { "data-framer-name": `Variant 2` } }, S, F),
                  children: l(E, {
                    animated: !0,
                    className: `framer-su4xho`,
                    "data-framer-name": `Icon L`,
                    layoutDependency: U,
                    layoutId: `Wp5doOMAv`,
                    style: {
                      "--17kkcf8": `rgb(255, 255, 255)`,
                      "--1iwhep7": 2,
                      "--1l3yetw": `rgb(255, 255, 255)`,
                    },
                    variants: {
                      "mdTL8dzak-hover": {
                        "--17kkcf8": `rgb(0, 0, 0)`,
                        "--1l3yetw": `rgb(0, 0, 0)`,
                      },
                      "NyvaL6VMC-hover": {
                        "--17kkcf8": `rgb(0, 0, 0)`,
                        "--1l3yetw": `rgb(0, 0, 0)`,
                      },
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-BDH4j.framer-16p98ud, .framer-BDH4j .framer-16p98ud { display: block; }`,
          `.framer-BDH4j.framer-8ouk7h { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 50px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 2px; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-BDH4j .framer-su4xho { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 18px; }`,
          `.framer-BDH4j.framer-v-10oy7ph.framer-8ouk7h { gap: 3.7.2px; height: 36px; padding: 0px 0px 0px 1.44px; width: 36px; }`,
          `.framer-BDH4j.framer-v-10oy7ph .framer-su4xho { width: 13px; }`,
          `.framer-BDH4j.framer-v-10oy7ph.hover.framer-8ouk7h { gap: 6px; padding: 0px 0px 0px 2px; }`,
        ],
        `framer-BDH4j`
      )),
      (z.displayName = `Play 2026`),
      (z.defaultProps = { height: 50, width: 50 }),
      g(z, {
        variant: {
          options: [`mdTL8dzak`, `NyvaL6VMC`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: b.Enum,
        },
        HeSWqr1qm: { title: `Click`, type: b.EventHandler },
      }),
      h(z, [{ explicitInter: !0, fonts: [] }, ...O], { supportsExplicitInterCodegen: !0 }));
  });
export { B as n, z as t };
//# sourceMappingURL=RGuX3ewaC.Bdbq5Fgz.mjs.map
