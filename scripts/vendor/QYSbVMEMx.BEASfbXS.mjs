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
  o as S,
  ot as C,
  z as w,
  zt as T,
} from "./framer.CuDPj9y9.mjs";
function E(e) {
  let t = e.split(`[img]`),
    n = [],
    r = 0;
  return (
    t.forEach((e, i) => {
      if (e.length > 0) {
        let t = r,
          i = t + e.length;
        (n.push({ kind: `text`, text: e, start: t, end: i }), (r = i));
      }
      i < t.length - 1 && (n.push({ kind: `image`, start: r, end: r + 1 }), (r += 1));
    }),
    { nodes: n, totalPositions: r }
  );
}
function D(e, t, n) {
  return Math.min(n, Math.max(t, Math.round(e)));
}
function O(e, t, n, r, i, a) {
  let o = [],
    s = ``,
    c = null;
  for (let i = 0; i < e.length; i++) {
    let a = t + i,
      l = a >= n && a < r;
    if (c === null) {
      ((c = l), (s = e[i]));
      continue;
    }
    l === c ? (s += e[i]) : (o.push({ text: s, selected: c }), (s = e[i]), (c = l));
  }
  return (
    s.length > 0 && c !== null && o.push({ text: s, selected: c }),
    o.map((e, n) =>
      l(
        `span`,
        {
          style: {
            background: e.selected ? i : `transparent`,
            borderRadius: e.selected ? 2 : 0,
            color: e.selected ? a : void 0,
          },
          children: e.text,
        },
        `${t}-${n}`
      )
    )
  );
}
function k(e) {
  let {
      content: t = `Hello`,
      image: r = {
        src: `https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`,
        alt: `Gradient 1 - Blue`,
      },
      imageAlt: i = `Embedded image`,
      from: a = 1,
      to: o = 3,
      selectionColor: s = `rgba(0, 153, 255, 0.3)`,
      selectedTextColor: c = `#FFFFFF`,
      textColor: u = `#EDEDED`,
      background: d = `rgba(0, 0, 0, 0)`,
      fontSize: f = 17,
      fontFamily: p = `Inter, system-ui, sans-serif`,
      padding: m = 16,
      radius: h = 12,
    } = e,
    { nodes: g, totalPositions: _ } = n(() => E(t), [t]),
    v = D(Math.min(a, o), 0, _),
    y = D(Math.max(a, o), 0, _);
  return l(`div`, {
    style: {
      position: `relative`,
      width: `100%`,
      height: `auto`,
      background: d,
      borderRadius: h,
      padding: m,
      boxSizing: `border-box`,
      color: u,
      fontSize: f,
      fontFamily: p,
      lineHeight: 1.35,
      overflow: `hidden`,
    },
    children: l(`div`, {
      style: { display: `flex`, flexDirection: `column`, gap: 10 },
      children: g.map((e, t) =>
        e.kind === `text`
          ? l(
              `div`,
              {
                style: { whiteSpace: `pre-wrap`, overflowWrap: `anywhere` },
                children: O(e.text, e.start, v, y, s, c),
              },
              `text-${t}-${e.start}`
            )
          : l(
              `div`,
              {
                style: {
                  width: `100%`,
                  borderRadius: 8,
                  outline: e.start >= v && e.start < y ? `2px solid ${s}` : `none`,
                  outlineOffset: 0,
                },
                children: r?.src
                  ? l(`img`, {
                      src: r.src,
                      srcSet: r.srcSet,
                      alt: i || r.alt || `Embedded image`,
                      style: {
                        width: `100%`,
                        height: `auto`,
                        maxHeight: 180,
                        objectFit: `cover`,
                        borderRadius: 8,
                        display: `block`,
                      },
                    })
                  : l(`div`, {
                      style: {
                        width: `100%`,
                        minHeight: 72,
                        maxHeight: 180,
                        borderRadius: 8,
                        background: `rgba(255,255,255,0.08)`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                      },
                      children: `[img]`,
                    }),
              },
              `image-${t}-${e.start}`
            )
      ),
    }),
  });
}
var A = e(() => {
    (s(),
      x(),
      r(),
      h(k, {
        content: { type: y.String, defaultValue: `Hello`, title: `Content` },
        image: { type: y.ResponsiveImage, title: `Image` },
        imageAlt: { type: y.String, defaultValue: `Embedded image`, title: `Image Alt` },
        from: { type: y.Number, defaultValue: 1, min: 0, step: 1, title: `From` },
        to: { type: y.Number, defaultValue: 3, min: 0, step: 1, title: `To` },
        selectionColor: {
          type: y.Color,
          defaultValue: `rgba(0, 153, 255, 0.3)`,
          title: `Selection`,
        },
        selectedTextColor: { type: y.Color, defaultValue: `#FFFFFF`, title: `Selected Text` },
        textColor: { type: y.Color, defaultValue: `#EDEDED`, title: `Text` },
        background: { type: y.Color, defaultValue: `rgba(0, 0, 0, 0)`, title: `Background` },
        fontSize: {
          type: y.Number,
          defaultValue: 17,
          min: 10,
          max: 48,
          step: 1,
          title: `Font Size`,
        },
        fontFamily: {
          type: y.String,
          defaultValue: `Inter, system-ui, sans-serif`,
          title: `Font Family`,
        },
        padding: { type: y.Number, defaultValue: 16, min: 0, max: 64, step: 1, title: `Padding` },
        radius: { type: y.Number, defaultValue: 12, min: 0, max: 40, step: 1, title: `Radius` },
      }));
  }),
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V;
e(() => {
  (s(),
    x(),
    p(),
    r(),
    A(),
    (j = C(k)),
    (M = `framer-7GH7B`),
    (N = { GGPXq0EVn: `framer-v-14y2cit` }),
    (P = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (F = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (I = ({ value: e, children: t }) => {
      let r = i(d),
        a = e ?? r.transition,
        o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
      return l(d.Provider, { value: o, children: t });
    }),
    (L = u.create(a)),
    (R = ({
      background: e,
      content: t,
      fontSize: n,
      from1: r,
      height: i,
      id: a,
      image: o,
      imageAlt: s,
      padding: c,
      radius: l,
      selectedTextColor: u,
      selectionColor: d,
      textColor: f,
      to: p,
      width: m,
      ...h
    }) => ({
      ...h,
      e0mXSdqd1: o ??
        h.e0mXSdqd1 ?? {
          pixelHeight: 450,
          pixelWidth: 800,
          src: `https://framerusercontent.com/images/BsOrgkmPvrS2UWAFtiG1tHj2ues.jpg?width=800&height=450`,
          srcSet: `https://framerusercontent.com/images/BsOrgkmPvrS2UWAFtiG1tHj2ues.jpg?scale-down-to=512&width=800&height=450 512w,https://framerusercontent.com/images/BsOrgkmPvrS2UWAFtiG1tHj2ues.jpg?width=800&height=450 800w`,
        },
      hLUA2IBia: c ?? h.hLUA2IBia ?? 16,
      JjfN2FLEc: f ?? h.JjfN2FLEc ?? `rgb(237, 237, 237)`,
      ml0qek_tC: l ?? h.ml0qek_tC ?? 12,
      mLp8SLi1A: d ?? h.mLp8SLi1A ?? `rgba(0, 153, 255, 0.3)`,
      td7n7uO5x: r ?? h.td7n7uO5x ?? 1,
      TZQuOuOOo: t ?? h.TZQuOuOOo ?? `Hello`,
      wk2ErUrC2: u ?? h.wk2ErUrC2 ?? `rgb(255, 255, 255)`,
      XH7sy5mR8: e ?? h.XH7sy5mR8 ?? `rgb(0, 0, 0)`,
      z3nhuEoLQ: s ?? h.z3nhuEoLQ ?? `Embedded image`,
      zBM5VE3CY: p ?? h.zBM5VE3CY ?? 3,
      zfPnss3W6: n ?? h.zfPnss3W6 ?? 17,
    })),
    (z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
    (B = v(
      c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          a = t(),
          { activeLocale: s, setLocale: c } = g();
        T();
        let {
            style: d,
            className: p,
            layoutId: m,
            variant: h,
            TZQuOuOOo: v,
            td7n7uO5x: y,
            zBM5VE3CY: x,
            mLp8SLi1A: C,
            JjfN2FLEc: E,
            XH7sy5mR8: D,
            zfPnss3W6: O,
            hLUA2IBia: A,
            ml0qek_tC: j,
            z3nhuEoLQ: B,
            e0mXSdqd1: V,
            wk2ErUrC2: H,
            ...U
          } = R(e),
          {
            baseVariant: W,
            classNames: G,
            clearLoadingGesture: K,
            gestureHandlers: q,
            gestureVariant: J,
            isLoading: Y,
            setGestureState: X,
            setVariant: ee,
            variants: Z,
          } = b({ defaultVariant: `GGPXq0EVn`, ref: i, variant: h, variantClassNames: N }),
          Q = z(e, Z),
          $ = _(M);
        return l(f, {
          id: m ?? a,
          children: l(L, {
            animate: Z,
            initial: !1,
            children: l(I, {
              value: P,
              children: l(u.div, {
                ...U,
                ...q,
                className: _($, `framer-14y2cit`, p, G),
                "data-framer-name": `Preview`,
                layoutDependency: Q,
                layoutId: `GGPXq0EVn`,
                ref: i,
                style: { ...d },
                children: l(S, {
                  children: l(w, {
                    className: `framer-18m11lu-container`,
                    "data-framer-name": `Selection Code`,
                    isAuthoredByUser: !0,
                    layoutDependency: Q,
                    layoutId: `hgO5GZUPh-container`,
                    name: `Selection Code`,
                    nodeId: `hgO5GZUPh`,
                    rendersWithMotion: !0,
                    scopeId: `QYSbVMEMx`,
                    children: l(k, {
                      background: D,
                      content: v,
                      fontFamily: `Inter, system-ui, sans-serif`,
                      fontSize: O,
                      from: y,
                      height: `100%`,
                      id: `hgO5GZUPh`,
                      image: F(V),
                      imageAlt: B,
                      layoutId: `hgO5GZUPh`,
                      name: `Selection Code`,
                      padding: A,
                      radius: j,
                      selectedTextColor: H,
                      selectionColor: C,
                      style: { width: `100%` },
                      textColor: E,
                      to: x,
                      width: `100%`,
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      }),
      [
        `.framer-7GH7B.framer-18pldcx, .framer-7GH7B .framer-18pldcx { display: block; }`,
        `.framer-7GH7B.framer-14y2cit { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 700px; }`,
        `.framer-7GH7B .framer-18m11lu-container { flex: none; height: auto; position: relative; width: 100%; }`,
      ],
      `framer-7GH7B`
    )),
    (B.displayName = `Selection Preview Embed`),
    (B.defaultProps = { height: 200, width: 700 }),
    h(B, {
      TZQuOuOOo: { defaultValue: `Hello`, title: `Content`, type: y.String },
      onTZQuOuOOoChange: { changes: `TZQuOuOOo`, type: y.ChangeHandler },
      td7n7uO5x: { defaultValue: 1, title: `From`, type: y.Number },
      ontd7n7uO5xChange: { changes: `td7n7uO5x`, type: y.ChangeHandler },
      zBM5VE3CY: { defaultValue: 3, title: `To`, type: y.Number },
      onzBM5VE3CYChange: { changes: `zBM5VE3CY`, type: y.ChangeHandler },
      mLp8SLi1A: {
        defaultValue: `rgba(0, 153, 255, 0.3)`,
        title: `Selection Color`,
        type: y.Color,
      },
      JjfN2FLEc: { defaultValue: `rgb(237, 237, 237)`, title: `Text Color`, type: y.Color },
      XH7sy5mR8: { defaultValue: `rgb(0, 0, 0)`, title: `Background`, type: y.Color },
      zfPnss3W6: { defaultValue: 17, title: `Font Size`, type: y.Number },
      onzfPnss3W6Change: { changes: `zfPnss3W6`, type: y.ChangeHandler },
      hLUA2IBia: { defaultValue: 16, title: `Padding`, type: y.Number },
      onhLUA2IBiaChange: { changes: `hLUA2IBia`, type: y.ChangeHandler },
      ml0qek_tC: { defaultValue: 12, title: `Radius`, type: y.Number },
      onml0qek_tCChange: { changes: `ml0qek_tC`, type: y.ChangeHandler },
      z3nhuEoLQ: { defaultValue: `Embedded image`, title: `Image Alt`, type: y.String },
      onz3nhuEoLQChange: { changes: `z3nhuEoLQ`, type: y.ChangeHandler },
      e0mXSdqd1: {
        __defaultAssetReference: `data:framer/asset-reference,BsOrgkmPvrS2UWAFtiG1tHj2ues.jpg?originalFilename=photo-1635776062127-d379bfcba9f8%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixlib%3Drb-4.1.jpg&width=800&height=450`,
        title: `Image`,
        type: y.ResponsiveImage,
      },
      wk2ErUrC2: {
        defaultValue: `rgb(255, 255, 255)`,
        title: `Selected Text Color`,
        type: y.Color,
      },
    }),
    m(B, [{ explicitInter: !0, fonts: [] }, ...j], { supportsExplicitInterCodegen: !0 }),
    (V = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerQYSbVMEMx`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `200`,
            framerContractVersion: `1`,
            framerVariables: `{"TZQuOuOOo":"content","td7n7uO5x":"from1","zBM5VE3CY":"to","mLp8SLi1A":"selectionColor","JjfN2FLEc":"textColor","XH7sy5mR8":"background","zfPnss3W6":"fontSize","hLUA2IBia":"padding","ml0qek_tC":"radius","z3nhuEoLQ":"imageAlt","e0mXSdqd1":"image","wk2ErUrC2":"selectedTextColor"}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `700`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { V as __FramerMetadata__, B as default };
//# sourceMappingURL=QYSbVMEMx.BEASfbXS.mjs.map
