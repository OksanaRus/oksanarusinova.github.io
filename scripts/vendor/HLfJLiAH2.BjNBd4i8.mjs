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
  o as C,
  ot as w,
  ut as T,
  z as E,
  zt as D,
} from "./framer.CuDPj9y9.mjs";
import { n as O, t as k } from "./Video.rlwz5PPG.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
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
  W,
  G = e(() => {
    (s(),
      S(),
      p(),
      r(),
      O(),
      (j = w(k)),
      (M = T(k)),
      (N = [`MEHi7da6u`, `U3KIw_4wY`]),
      (P = `framer-MKUAY`),
      (F = { MEHi7da6u: `framer-v-kipbz3`, U3KIw_4wY: `framer-v-1h71p1w` }),
      (I = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (L = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (R = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (z = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(d.Provider, { value: o, children: t });
      }),
      (B = { Pause: `MEHi7da6u`, Play: `U3KIw_4wY` }),
      (V = u.create(a)),
      (H = ({
        border: e,
        click: t,
        file: n,
        height: r,
        id: i,
        image: a,
        radius: o,
        width: s,
        ...c
      }) => ({
        ...c,
        eCHAgdaoz: t ?? c.eCHAgdaoz,
        er7UHYgp_: o ?? c.er7UHYgp_ ?? `15px`,
        HszwGa8CV:
          n ?? c.HszwGa8CV ?? `https://framerusercontent.com/assets/it2fx2O5wQK1safET4lKMBH4Cc.mp4`,
        LsYVEL7Y2: a ??
          c.LsYVEL7Y2 ?? {
            pixelHeight: 1280,
            pixelWidth: 720,
            src: `https://framerusercontent.com/images/MTNWLPyxhVqHufypxWWfDiX884Q.png?width=720&height=1280`,
            srcSet: `https://framerusercontent.com/images/MTNWLPyxhVqHufypxWWfDiX884Q.png?scale-down-to=1024&width=720&height=1280 576w,https://framerusercontent.com/images/MTNWLPyxhVqHufypxWWfDiX884Q.png?width=720&height=1280 720w`,
          },
        TPiyhgwWS: e ??
          c.TPiyhgwWS ?? {
            borderColor: `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        variant: B[c.variant] ?? c.variant ?? `MEHi7da6u`,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = y(
        c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            a = t(),
            { activeLocale: s, contentLocale: c, setLocale: d } = _();
          D();
          let {
              style: p,
              className: h,
              layoutId: g,
              variant: y,
              HszwGa8CV: b,
              LsYVEL7Y2: S,
              er7UHYgp_: w,
              TPiyhgwWS: T,
              eCHAgdaoz: O,
              ...j
            } = H(e),
            {
              baseVariant: M,
              classNames: B,
              clearLoadingGesture: W,
              gestureHandlers: G,
              gestureVariant: K,
              isLoading: ee,
              setGestureState: q,
              setVariant: te,
              variants: J,
            } = x({
              cycleOrder: N,
              defaultVariant: `MEHi7da6u`,
              ref: i,
              variant: y,
              variantClassNames: F,
            }),
            Y = U(e, J),
            X = [],
            { activeVariantCallback: Z, delay: ne } = m(M),
            Q = Z(async (...e) => {
              if ((q({ isPressed: !1 }), O && (await O(...e)) === !1)) return !1;
            }),
            $ = v(P, ...X);
          return l(f, {
            id: g ?? a,
            children: l(V, {
              animate: J,
              initial: !1,
              children: l(z, {
                value: L,
                children: l(u.div, {
                  ...j,
                  ...G,
                  className: v($, `framer-kipbz3`, h, B),
                  "data-border": !0,
                  "data-framer-name": `Pause`,
                  "data-highlight": !0,
                  layoutDependency: Y,
                  layoutId: `MEHi7da6u`,
                  onTap: Q,
                  ref: i,
                  style: {
                    "--border-bottom-width": (T?.borderBottomWidth ?? T?.borderWidth) + `px`,
                    "--border-color": T?.borderColor,
                    "--border-left-width": (T?.borderLeftWidth ?? T?.borderWidth) + `px`,
                    "--border-right-width": (T?.borderRightWidth ?? T?.borderWidth) + `px`,
                    "--border-style": T?.borderStyle,
                    "--border-top-width": (T?.borderTopWidth ?? T?.borderWidth) + `px`,
                    borderBottomLeftRadius: I(w, 3),
                    borderBottomRightRadius: I(w, 2),
                    borderTopLeftRadius: I(w, 0),
                    borderTopRightRadius: I(w, 1),
                    ...p,
                  },
                  ...A({ U3KIw_4wY: { "data-framer-name": `Play` } }, M, K),
                  children: l(C, {
                    children: l(E, {
                      className: `framer-iuaieu-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: Y,
                      layoutId: `ACsehPlUq-container`,
                      nodeId: `ACsehPlUq`,
                      rendersWithMotion: !0,
                      scopeId: `HLfJLiAH2`,
                      children: l(k, {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderRadius: 0,
                        bottomLeftRadius: 0,
                        bottomRightRadius: 0,
                        controls: !1,
                        height: `100%`,
                        id: `ACsehPlUq`,
                        isMixedBorderRadius: !1,
                        layoutId: `ACsehPlUq`,
                        loop: !0,
                        muted: !0,
                        objectFit: `cover`,
                        playing: !1,
                        poster: R(S),
                        posterEnabled: !0,
                        srcFile: b,
                        srcType: `Upload`,
                        srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                        startTime: 0,
                        style: { height: `100%`, width: `100%` },
                        topLeftRadius: 0,
                        topRightRadius: 0,
                        volume: 25,
                        width: `100%`,
                        ...A({ U3KIw_4wY: { playing: !0 } }, M, K),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-MKUAY.framer-ggciod, .framer-MKUAY .framer-ggciod { display: block; }`,
          `.framer-MKUAY.framer-kipbz3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 450px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 250px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MKUAY .framer-iuaieu-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-MKUAY[data-border="true"]::after, .framer-MKUAY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-MKUAY`
      )),
      (W.displayName = `Solutions Video`),
      (W.defaultProps = { height: 450, width: 250 }),
      g(W, {
        variant: {
          options: [`MEHi7da6u`, `U3KIw_4wY`],
          optionTitles: [`Pause`, `Play`],
          title: `Variant`,
          type: b.Enum,
        },
        HszwGa8CV: M?.srcFile && {
          ...M.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,it2fx2O5wQK1safET4lKMBH4Cc.mp4?originalFilename=d8d.mp4`,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
        onHszwGa8CVChange: { changes: `HszwGa8CV`, type: b.ChangeHandler },
        LsYVEL7Y2: {
          __defaultAssetReference: `data:framer/asset-reference,MTNWLPyxhVqHufypxWWfDiX884Q.png?originalFilename=image.png&width=720&height=1280`,
          title: `Image`,
          type: b.ResponsiveImage,
        },
        er7UHYgp_: { defaultValue: `15px`, title: `Radius`, type: b.BorderRadius },
        TPiyhgwWS: {
          defaultValue: {
            borderColor: `var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: b.Border,
        },
        eCHAgdaoz: { title: `Click`, type: b.EventHandler },
      }),
      h(W, [{ explicitInter: !0, fonts: [] }, ...j], { supportsExplicitInterCodegen: !0 }));
  });
export { G as n, W as t };
//# sourceMappingURL=HLfJLiAH2.BjNBd4i8.mjs.map
