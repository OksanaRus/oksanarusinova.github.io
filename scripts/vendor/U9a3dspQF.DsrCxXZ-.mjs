import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  H as r,
  M as i,
  O as a,
  P as o,
  R as s,
  S as c,
  W as l,
  c as u,
  f as d,
  h as ee,
  l as te,
  m as ne,
  s as f,
  u as re,
  y as ie,
} from "./react.hMW2PJqY.mjs";
import { V as p, c as m, o as ae, r as oe } from "./motion.CaZjHSpz.mjs";
import {
  Dt as se,
  Ft as ce,
  G as h,
  I as le,
  K as g,
  Qt as ue,
  T as de,
  Z as fe,
  _ as pe,
  _n as _,
  c as v,
  cn as me,
  gn as he,
  ht as y,
  i as b,
  kn as ge,
  mn as _e,
  n as ve,
  o as ye,
  ot as x,
  t as S,
  un as be,
  vn as C,
  wt as xe,
  z as Se,
  zt as Ce,
} from "./framer.CuDPj9y9.mjs";
import { n as we, t as w } from "./Search.BJ4e4et8.mjs";
import { n as Te, r as Ee } from "./CDJx3T4nQ.C9C4SSUI.mjs";
import { a as De, n as T } from "./w5NbLIeXQ.2lQEpmL_.mjs";
import { n as Oe, t as ke } from "./store.js@_1.0.BOuFaOWG.mjs";
function E(e) {
  return ne(function (t, n) {
    let r = _e(),
      a = i(
        (...e) => {
          (t.onClick?.(...e), r(`academy-search`));
        },
        [t.onClick, r]
      );
    return f(e, { ref: n, ...t, onClick: a });
  });
}
var Ae = e(() => {
  (r(), u(), a(), y(), ke(), Oe({ value: `` }));
});
function D(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  O,
  k,
  A,
  j,
  M,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  N,
  Ke = e(() => {
    (u(),
      y(),
      oe(),
      a(),
      we(),
      Ee(),
      Ae(),
      De(),
      (je = x(Te)),
      (Me = C(pe, { nodeId: `ol7YfEtBN`, override: E, scopeId: `gXvM6X9dS` })),
      (Ne = x(w)),
      (Pe = C(w, { nodeId: `ZUCaDsi_e`, override: E, scopeId: `gXvM6X9dS` })),
      (Fe = [`vk9zA1U51`, `voLVUS43U`, `uuAAKR9sU`]),
      (Ie = `framer-0rKgU`),
      (Le = {
        uuAAKR9sU: `framer-v-f7rp4x`,
        vk9zA1U51: `framer-v-yh1dwn`,
        voLVUS43U: `framer-v-nt429r`,
      }),
      (Re = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (O = (e) => (typeof e == `string` ? e : String(e))),
      (k = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (A = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e + t
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (j = () => ({
        from: { alias: `osu9efcx6`, data: T, type: `Collection` },
        select: [],
        where: {
          left: { collection: `osu9efcx6`, name: `OTQRdKpuq`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (M = (e) => ({
        from: { alias: `osu9efcx6`, data: T, type: `Collection` },
        select: [],
        where: {
          left: { type: `LiteralValue`, value: e },
          operator: `in`,
          right: { collection: `osu9efcx6`, name: `iLTNyDd0B`, type: `Identifier` },
          type: `BinaryOperation`,
        },
      })),
      (ze = ({ query: e, pageSize: t, children: n }) => n(me(e))),
      (Be = ({ value: e, children: t }) => {
        let r = o(m),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(m.Provider, { value: a, children: t });
      }),
      (Ve = { "Filter Focused": `uuAAKR9sU`, Filter: `voLVUS43U`, Global: `vk9zA1U51` }),
      (He = p.create(s)),
      (Ue = (e, t) => {
        let [n, r] = ie(e),
          [i, a] = ie(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (We = ({ height: e, id: t, searchQuery: n, topic: r, width: i, ...a }) => ({
        ...a,
        BG1bU_Yif: r ?? a.BG1bU_Yif ?? ``,
        cmXtHIUrf: n ?? a.cmXtHIUrf,
        variant: Ve[a.variant] ?? a.variant ?? `vk9zA1U51`,
      })),
      (Ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (N = _(
        ne(function (e, n) {
          let r = c(null),
            i = n ?? r,
            a = t(),
            { activeLocale: o, contentLocale: l, setLocale: u } = ue();
          Ce();
          let {
              style: d,
              className: ee,
              layoutId: ne,
              variant: ie,
              cmXtHIUrf: m,
              oncmXtHIUrfChange: oe,
              BG1bU_Yif: h,
              ...g
            } = We(e),
            [de, pe] = Ue(m, oe),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: me,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: ge,
              setGestureState: _e,
              setVariant: x,
              variants: S,
            } = he({
              cycleOrder: Fe,
              defaultVariant: `vk9zA1U51`,
              ref: i,
              variant: ie,
              variantClassNames: Le,
            }),
            C = Ge(e, S),
            xe = fe(Ie),
            we = () => _ !== `uuAAKR9sU`,
            { activeVariantCallback: w, delay: Ee } = ce(_),
            De = w(async (...e) => {
              x(`vECCOVinJ`);
            }),
            T = w(async (...e) => {
              x(`uuAAKR9sU`);
            }),
            Oe = w(async (...e) => {
              x(`voLVUS43U`);
            }),
            ke = () => ![`voLVUS43U`, `uuAAKR9sU`].includes(_),
            E = be();
          return f(ae, {
            id: ne ?? a,
            children: f(He, {
              animate: S,
              initial: !1,
              children: f(Be, {
                value: Re,
                children: re(p.div, {
                  ...g,
                  ...y,
                  className: fe(xe, `framer-yh1dwn`, ee, v),
                  "data-framer-name": `Global`,
                  layoutDependency: C,
                  layoutId: `vk9zA1U51`,
                  ref: i,
                  style: { ...d },
                  ...D(
                    {
                      uuAAKR9sU: { "data-framer-name": `Filter Focused` },
                      voLVUS43U: { "data-framer-name": `Filter` },
                    },
                    _,
                    b
                  ),
                  children: [
                    f(Te, {
                      animated: !0,
                      className: `framer-1d8pee2`,
                      layoutDependency: C,
                      layoutId: `gagA4_JkJ`,
                      style: {
                        "--17kkcf8": `rgba(136, 136, 136, 0)`,
                        "--1iwhep7": 2,
                        "--1l3yetw": `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                      },
                    }),
                    f(p.div, {
                      className: `framer-wkxmcq`,
                      layoutDependency: C,
                      layoutId: `osu9efcx6`,
                      children: f(ve, {
                        children: f(ze, {
                          query: j(),
                          ...D({ uuAAKR9sU: { query: M(h) }, voLVUS43U: { query: M(h) } }, _, b),
                          children: (e, t, n) => {
                            let r = e?.length ?? 0,
                              i = A(k(O(r), `Search all `), ` lessons…`),
                              a = A(A(k(O(r), `Search `), ``), ` lessons…`);
                            return f(te, {
                              children:
                                we() &&
                                f(le, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(p.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-open-type-features": `'cv11' on, 'ss03' on, 'cv01' on, 'cv09' on, 'cv05' on`,
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `-0.1px`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Search 50 lessons...`,
                                    }),
                                  }),
                                  className: `framer-11cxbha`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  layoutDependency: C,
                                  layoutId: `lxlH4bTPn`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  text: i,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...D({ voLVUS43U: { text: a } }, _, b),
                                }),
                            });
                          },
                        }),
                      }),
                    }),
                    f(Me, {
                      className: `framer-4irojs`,
                      inputName: `ol7YfEtBN`,
                      layoutDependency: C,
                      layoutId: `ol7YfEtBN`,
                      onChange: (e) => pe(e.target.value || void 0),
                      onClear: () => pe(void 0),
                      onFocus: De,
                      placeholder: ``,
                      style: {
                        "--framer-input-background": `var(--token-e6ff4111-cae9-48d6-82e5-a990cf837703, rgba(255, 255, 255, 0.1))`,
                        "--framer-input-border-bottom-width": `1px`,
                        "--framer-input-border-color": `rgba(255, 255, 255, 0.05)`,
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
                      value: de ?? ``,
                      ...D(
                        {
                          uuAAKR9sU: { inputName: `uuAAKR9sUol7YfEtBN`, onBlur: Oe },
                          voLVUS43U: { inputName: `voLVUS43Uol7YfEtBN`, onFocus: T },
                        },
                        _,
                        b
                      ),
                    }),
                    ke() &&
                      f(ye, {
                        children: f(Se, {
                          className: `framer-1k7juan-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: C,
                          layoutId: `ZUCaDsi_e-container`,
                          nodeId: `ZUCaDsi_e`,
                          rendersWithMotion: !0,
                          scopeId: `gXvM6X9dS`,
                          style: { opacity: 0 },
                          children: f(Pe, {
                            backdropOptions: {
                              backgroundColor: `rgba(0, 0, 0, 0.9)`,
                              transition: {
                                damping: 60,
                                delay: 0,
                                mass: 1,
                                stiffness: 500,
                                type: `spring`,
                              },
                              zIndex: 10,
                            },
                            height: `100%`,
                            iconColor: `rgb(31, 31, 31)`,
                            iconSize: 24,
                            iconType: `default`,
                            id: `ZUCaDsi_e`,
                            inputOptions: {
                              clearButtonText: `Clear`,
                              clearButtonType: `text`,
                              dividerType: `fullWidth`,
                              iconOptions: {
                                iconColor: `rgb(153, 153, 153)`,
                                iconSize: 18,
                                iconType: `default`,
                              },
                              inputFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontSize: `16px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              placeholderOptions: {
                                placeholderColor: `rgba(255, 255, 255, 0.4)`,
                                placeholderText: `Search...`,
                              },
                              textColor: `rgb(255, 255, 255)`,
                            },
                            layoutId: `ZUCaDsi_e`,
                            modalOptions: {
                              backgroundColor: `rgb(17, 17, 17)`,
                              borderRadius: 18,
                              heightIsStatic: !0,
                              heightTransition: {
                                damping: 60,
                                delay: 0,
                                mass: 1,
                                stiffness: 800,
                                type: `spring`,
                              },
                              layoutType: `QuickMenu`,
                              shadow: {
                                blur: 40,
                                color: `rgba(0, 0, 0, 0.2)`,
                                spread: 0,
                                x: 0,
                                y: 20,
                              },
                              top: 0,
                              width: 700,
                            },
                            resultOptions: {
                              itemType: `fullWidth`,
                              subtitleOptions: {
                                subtitleColor: `rgba(255, 255, 255, 0.6)`,
                                subtitleFont: {
                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                  fontSize: `13px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                },
                                subtitleType: `description`,
                              },
                              titleColor: `rgb(255, 255, 255)`,
                              titleFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontSize: `16px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              titleType: `h1`,
                            },
                            style: { height: `100%`, width: `100%` },
                            urlScope: se({ webPageId: `qchqT0mvR` }, E),
                            width: `100%`,
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
          `.framer-0rKgU.framer-83ttrz, .framer-0rKgU .framer-83ttrz { display: block; }`,
          `.framer-0rKgU.framer-yh1dwn { align-content: center; align-items: center; cursor: text; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 38px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px 20px 15px 12px; position: relative; width: min-content; }`,
          `.framer-0rKgU .framer-1d8pee2 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 15px; }`,
          `.framer-0rKgU .framer-wkxmcq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; pointer-events: none; position: relative; width: min-content; z-index: 1; }`,
          `.framer-0rKgU .framer-11cxbha { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-0rKgU .framer-4irojs { --framer-input-focused-border-color: var(--token-3ead4217-f562-484f-ae35-d367de8b213a, #0099ff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0s cubic-bezier(0,0,1,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.4em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 10px 15px 10px 40px; bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-0rKgU .framer-1k7juan-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 10; }`,
          `.framer-0rKgU.framer-v-f7rp4x.framer-yh1dwn { width: 431px; }`,
        ],
        `framer-0rKgU`
      )),
      (N.displayName = `Academy Search`),
      (N.defaultProps = { height: 38, width: 205 }),
      g(N, {
        variant: {
          options: [`vk9zA1U51`, `voLVUS43U`, `uuAAKR9sU`],
          optionTitles: [`Global`, `Filter`, `Filter Focused`],
          title: `Variant`,
          type: v.Enum,
        },
        cmXtHIUrf: { optional: !0, title: `Search Query`, type: v.String },
        oncmXtHIUrfChange: { changes: `cmXtHIUrf`, type: v.ChangeHandler },
        BG1bU_Yif: {
          dataIdentifier: `local-module:collection/c5NTs3UKr:default`,
          defaultValue: ``,
          title: `Topic`,
          type: v.CollectionReference,
        },
        onBG1bU_YifChange: { changes: `BG1bU_Yif`, type: v.ChangeHandler },
      }),
      h(
        N,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...je,
          ...Ne,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (N.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = xe.get(j(), n);
          return Promise.allSettled([r.preload()]);
        },
      }));
  });
function P(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function qe(e) {
  return typeof e == `function` ? e() : e;
}
function Je(e, t) {
  return G[e] > G[t];
}
function Ye(e) {
  let t;
  for (let n of e) {
    let e = qe(n);
    if (((t === void 0 || Je(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function Xe(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function F(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function I(e) {
  throw Error(`Unexpected value: ${e}`);
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function z(e) {
  return e === null;
}
function B(e) {
  if (z(e)) return 0;
  switch (e.type) {
    case v.Array:
      return 1;
    case v.Boolean:
      return 2;
    case v.Color:
      return 3;
    case v.Date:
      return 4;
    case v.Enum:
      return 5;
    case v.File:
      return 6;
    case v.ResponsiveImage:
      return 10;
    case v.Link:
      return 7;
    case v.Number:
      return 8;
    case v.Object:
      return 9;
    case v.RichText:
      return 11;
    case v.String:
      return 12;
    case v.VectorSetItem:
      return 13;
    default:
      I(e);
  }
}
function Ze(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = H.read(e);
    n.push(t);
  }
  return { type: v.Array, value: n };
}
function Qe(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) H.write(e, n);
}
function $e(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = H.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function et(e) {
  return { type: v.Boolean, value: e.readUint8() !== 0 };
}
function tt(e, t) {
  e.writeUint8(+!!t.value);
}
function nt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function rt(e) {
  return { type: v.Color, value: e.readString() };
}
function it(e, t) {
  e.writeString(t.value);
}
function at(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ot(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: v.Date, value: n.toISOString() };
}
function st(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function ct(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function lt(e) {
  return { type: v.Enum, value: e.readString() };
}
function ut(e, t) {
  e.writeString(t.value);
}
function dt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ft(e) {
  return { type: v.File, value: e.readString() };
}
function pt(e, t) {
  e.writeString(t.value);
}
function mt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ht(e) {
  return { type: v.Link, value: e.readJson() };
}
function gt(e, t) {
  e.writeJson(t.value);
}
function _t(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function vt(e) {
  return { type: v.Number, value: e.readFloat64() };
}
function yt(e, t) {
  e.writeFloat64(t.value);
}
function bt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = H.read(e);
  }
  return { type: v.Object, value: n };
}
function St(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), H.write(e, r));
}
function Ct(e, t, n) {
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
      u = H.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function wt(e) {
  return { type: v.ResponsiveImage, value: e.readJson() };
}
function Tt(e, t) {
  e.writeJson(t.value);
}
function Et(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Dt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: v.RichText, value: e.readUint32() };
  if (t === 1) return { type: v.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ot(e, t) {
  if (R(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (L(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function kt(e, t) {
  let n = e.value,
    r = t.value;
  if ((R(n) && R(r)) || (L(n) && L(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function At(e) {
  return { type: v.String, value: e.readString() };
}
function jt(e, t) {
  e.writeString(t.value);
}
function Mt(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Nt(e) {
  return { type: v.VectorSetItem, value: e.readUint32() };
}
function Pt(e, t) {
  e.writeUint32(t.value);
}
function Ft(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function It(e) {
  let t = Math.floor(Qt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Lt(e, t) {
  let n = zt(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await en(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new tn(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Rt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function zt(e) {
  F(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Bt(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = H.read(e);
  }
  return t;
}
function* Vt(e) {
  for (let t of e) yield* t.prioritySources;
}
var V,
  H,
  Ht,
  U,
  Ut,
  W,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  G,
  K,
  Xt,
  q,
  J,
  Y,
  X,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  Z,
  rn = e(() => {
    (r(),
      y(),
      (Ht = Object.create),
      (U = Object.defineProperty),
      (Ut = Object.getOwnPropertyDescriptor),
      (W = Object.getOwnPropertyNames),
      (Wt = Object.getPrototypeOf),
      (Gt = Object.prototype.hasOwnProperty),
      (Kt = (e, t) =>
        function () {
          try {
            return (t || (0, e[W(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (qt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of W(t))
            Gt.call(e, i) ||
              i === n ||
              U(e, i, { get: () => t[i], enumerable: !(r = Ut(t, i)) || r.enumerable });
        return e;
      }),
      (Jt = (e, t, n) => (
        (n = e == null ? {} : Ht(Wt(e))),
        qt(!t && e && e.__esModule ? n : U(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Yt = Jt(
        Kt({
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
      (G = { background: 0, "user-visible": 1, "user-blocking": 2 }),
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
      (Xt =
        ((V = class e {
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
            (P(this, `bytes`, void 0),
              P(this, `offset`, 0),
              P(this, `view`, void 0),
              (this.bytes = e),
              (this.view = Xe(this.bytes)));
          }
        }),
        P(V, `textDecoder`, new TextDecoder()),
        V)),
      l !== void 0 && l.requestIdleCallback,
      (q = (e) => 2 ** e - 1),
      (J = (e) => -(2 ** (e - 1))),
      (Y = (e) => 2 ** (e - 1) - 1),
      J(8),
      J(16),
      J(32),
      -(BigInt(2) ** BigInt(63)),
      q(8),
      q(16),
      q(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Y(8),
      Y(16),
      Y(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (X = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            F(R(n), `Invalid chunkId`),
            F(R(r), `Invalid offset`),
            F(R(i), `Invalid length`),
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
                  : (F(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (P(this, `chunkId`, void 0),
            P(this, `offset`, void 0),
            P(this, `length`, void 0),
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
              return Ze(e);
            case 2:
              return et(e);
            case 3:
              return rt(e);
            case 4:
              return ot(e);
            case 5:
              return lt(e);
            case 6:
              return ft(e);
            case 7:
              return ht(e);
            case 8:
              return vt(e);
            case 9:
              return xt(e);
            case 10:
              return wt(e);
            case 11:
              return Dt(e);
            case 12:
              return At(e);
            case 13:
              return Nt(e);
            default:
              I(t);
          }
        }),
          (e.write = function (e, t) {
            let n = B(t);
            if ((e.writeUint8(n), !z(t)))
              switch (t.type) {
                case v.Array:
                  return Qe(e, t);
                case v.Boolean:
                  return tt(e, t);
                case v.Color:
                  return it(e, t);
                case v.Date:
                  return st(e, t);
                case v.Enum:
                  return ut(e, t);
                case v.File:
                  return pt(e, t);
                case v.Link:
                  return gt(e, t);
                case v.Number:
                  return yt(e, t);
                case v.Object:
                  return St(e, t);
                case v.ResponsiveImage:
                  return Tt(e, t);
                case v.RichText:
                  return Ot(e, t);
                case v.VectorSetItem:
                  return Pt(e, t);
                case v.String:
                  return jt(e, t);
                default:
                  I(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = B(e),
              i = B(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (z(e) || z(t)) return 0;
            switch (e.type) {
              case v.Array:
                return (F(t.type === v.Array), $e(e, t, n));
              case v.Boolean:
                return (F(t.type === v.Boolean), nt(e, t));
              case v.Color:
                return (F(t.type === v.Color), at(e, t));
              case v.Date:
                return (F(t.type === v.Date), ct(e, t));
              case v.Enum:
                return (F(t.type === v.Enum), dt(e, t));
              case v.File:
                return (F(t.type === v.File), mt(e, t));
              case v.Link:
                return (F(t.type === v.Link), _t(e, t));
              case v.Number:
                return (F(t.type === v.Number), bt(e, t));
              case v.Object:
                return (F(t.type === v.Object), Ct(e, t, n));
              case v.ResponsiveImage:
                return (F(t.type === v.ResponsiveImage), Et(e, t));
              case v.RichText:
                return (F(t.type === v.RichText), kt(e, t));
              case v.VectorSetItem:
                return (F(t.type === v.VectorSetItem), Ft(e, t));
              case v.String:
                return (F(t.type === v.String), Mt(e, t, n));
              default:
                I(e);
            }
          }));
      })((H ||= {})),
      (Zt = 3),
      (Qt = 250),
      ($t = [408, 429, 500, 502, 503, 504]),
      (en = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!$t.includes(r.status) || ++n > Zt) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Zt) throw e;
          }
          await It(n);
        }
      }),
      (tn = class {
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
            if ((F(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Rt(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((F(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Rt(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          P(this, `chunks`, []);
        }
      }),
      (nn = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = en(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new Xt(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = Ye(this.scanPrioritySources),
                        t = e ? ge({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Bt(n),
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
          (P(this, `id`, void 0),
            P(this, `url`, void 0),
            P(this, `itemsPromise`, void 0),
            P(this, `isScanning`, !1),
            P(this, `scanPrioritySources`, new Set()),
            P(this, `itemPrioritySources`, new Map()),
            P(
              this,
              `itemLoader`,
              new Yt.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = X.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Lt(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = Ye(Vt(e)),
                      a = i ? ge({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    F(o, `Missing range bytes`);
                    let s = Bt(new Xt(o)),
                      c = e[t]?.pointer;
                    (F(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (Z = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = X.fromString(e),
                r = this.chunks[n.chunkId];
              return (F(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = X.fromString(e.pointer),
            r = X.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return H.compare(e, t, n);
        }
        constructor(e) {
          (P(this, `options`, void 0),
            P(this, `id`, void 0),
            P(this, `schema`, void 0),
            P(this, `indexes`, void 0),
            P(this, `resolveRichText`, void 0),
            P(this, `resolveVectorSetItem`, void 0),
            P(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new nn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function an(e) {
  return typeof e == `object` && !!e && !ee(e) && un in e;
}
function on(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function sn(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    cn(t, i, n);
  }
}
function cn(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : cn(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || sn(e, t, n);
  }
}
function ln(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return d(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return d(de, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          sn(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (an(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            on(o, `Module not found`),
            an(o) && o.preload(),
            f(b, {
              componentIdentifier: r,
              children: (e) => f(S, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return d(e === `a` ? p.a : e, r, ...a);
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
var Q,
  $,
  un,
  dn,
  fn,
  pn = e(() => {
    (r(),
      u(),
      y(),
      a(),
      l !== void 0 && l.requestIdleCallback,
      (un = `preload`),
      (dn =
        (((Q = dn || {})[(Q.Fragment = 1)] = `Fragment`),
        (Q[(Q.Link = 2)] = `Link`),
        (Q[(Q.Module = 3)] = `Module`),
        (Q[(Q.Tag = 4)] = `Tag`),
        (Q[(Q.Text = 5)] = `Text`),
        Q)),
      (fn =
        ((($ = fn || {})[($.RichText = 1)] = `RichText`),
        ($[($.VectorSetItem = 2)] = `VectorSetItem`),
        $)));
  }),
  mn,
  hn,
  gn,
  _n,
  vn,
  yn = e(() => {
    (y(),
      rn(),
      pn(),
      (mn = {
        bJJr2outf: {
          definition: { isNullable: !0, type: v.String },
          isNullable: !0,
          type: v.Array,
        },
        createdAt: { isNullable: !0, type: v.Date },
        id: { isNullable: !1, type: v.String },
        nextItemId: { isNullable: !0, type: v.String },
        previousItemId: { isNullable: !0, type: v.String },
        updatedAt: { isNullable: !0, type: v.Date },
        vi0aSKlaa: { isNullable: !0, type: v.String },
      }),
      (hn = []),
      (gn = (e) => {
        let t = hn[e];
        if (t) return t().then((e) => e.default);
      }),
      (_n = ln({})),
      (vn = {
        collectionByLocaleId: {
          default: new Z({
            chunks: [
              new URL(
                `./U9a3dspQF-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/upgDi62EXwHiP1ALncmT/mVb14CKYfawfgFOSJ0bu/U9a3dspQF.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `1193e043-8faa-43b9-94a7-de3f4e61e29edefault`,
            indexes: [],
            resolveRichText: _n,
            resolveVectorSetItem: gn,
            schema: mn,
          }),
          zPfFQNtX1: new Z({
            chunks: [
              new URL(
                `./U9a3dspQF-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/upgDi62EXwHiP1ALncmT/mVb14CKYfawfgFOSJ0bu/U9a3dspQF.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `1193e043-8faa-43b9-94a7-de3f4e61e29ezPfFQNtX1`,
            indexes: [],
            resolveRichText: _n,
            resolveVectorSetItem: gn,
            schema: mn,
          }),
        },
        displayName: `Topic Curation`,
        id: `1193e043-8faa-43b9-94a7-de3f4e61e29e`,
      }),
      g(vn, {
        vi0aSKlaa: {
          dataIdentifier: `local-module:collection/c5NTs3UKr:default`,
          title: `Topic`,
          type: v.CollectionReference,
        },
        bJJr2outf: {
          dataIdentifier: `local-module:collection/w5NbLIeXQ:default`,
          defaultValue: [],
          title: `Lessons`,
          type: v.MultiCollectionReference,
        },
        createdAt: { title: `Created`, type: v.Date },
        updatedAt: { title: `Updated`, type: v.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/U9a3dspQF:default`,
          title: `Previous`,
          type: v.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/U9a3dspQF:default`,
          title: `Next`,
          type: v.CollectionReference,
        },
      }));
  });
export { Ke as i, vn as n, N as r, yn as t };
//# sourceMappingURL=U9a3dspQF.DsrCxXZ-.mjs.map
