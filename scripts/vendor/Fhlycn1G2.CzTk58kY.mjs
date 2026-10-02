import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as n,
  F as r,
  H as i,
  L as a,
  O as o,
  P as s,
  R as c,
  S as l,
  W as u,
  b as ee,
  c as d,
  j as f,
  m as p,
  s as m,
  u as h,
  x as g,
  y as _,
} from "./react.hMW2PJqY.mjs";
import { V as v, c as y, o as b, r as x } from "./motion.CaZjHSpz.mjs";
import {
  G as S,
  I as C,
  K as w,
  Qt as T,
  Z as E,
  _n as D,
  bn as O,
  c as k,
  ct as te,
  gn as A,
  ht as j,
  lt as M,
  ot as N,
  wn as P,
  x as ne,
  zt as re,
} from "./framer.CuDPj9y9.mjs";
import { n as F, t as I } from "./P0K9uVDju.DQet21yA.mjs";
import { i as L, n as R, r as ie, t as ae } from "./opnE6P6z1.D-hpdzOY.mjs";
function z(e) {
  if (typeof e == `string`) return e.trim();
  if (e && typeof e == `object`) {
    let t = e;
    if (typeof t.src == `string` && t.src.trim()) return t.src.trim();
    if (typeof t.srcSet == `string` && t.srcSet.trim())
      return (t.srcSet.split(`,`)[0]?.trim() ?? ``).split(/\s+/)[0]?.trim() ?? ``;
  }
  return ``;
}
function B(e) {
  return (typeof e == `string` && e.trim()) || ``;
}
function oe(e) {
  return z(e?.avatar) || z(e?.avatarUrl) || z(e?.avatarImage) || ``;
}
function se(e) {
  return (
    e?.initialsExplicit === !0 ||
    e?.initialsFromFetch === !0 ||
    e?.initialsSource === `fetch` ||
    e?.initialsSource === `explicit`
  );
}
function ce(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = z(t.avatar),
    r = B(t.initials);
  return !n && !r ? null : { avatar: n, initials: r };
}
function le() {
  return u !== void 0 && [`www.framer.com`, `framer.com`].includes(u.location.hostname);
}
function ue(e) {
  let t = u.setTimeout(e, 0);
  return () => u.clearTimeout(t);
}
function de(e) {
  return p(function (t, n) {
    let i = ee(f(ue, le, () => !1)),
      [o, s] = _(null),
      [c, l] = _(!i);
    g(() => {
      if (!i) {
        a(() => l(!0));
        return;
      }
      let e = !1;
      return (
        (async () => {
          try {
            let t = await fetch(`https://api.framer.com/site/users/me`, { credentials: `include` });
            if (!t.ok) {
              if (e) return;
              a(() => {
                (s(null), l(!0));
              });
              return;
            }
            let n = ce(await t.json());
            if (e) return;
            a(() => {
              (s(n), l(!0));
            });
          } catch {
            if (e) return;
            a(() => {
              (s(null), l(!0));
            });
          }
        })().catch(() => {
          e ||
            a(() => {
              (s(null), l(!0));
            });
        }),
        () => {
          e = !0;
        }
      );
    }, [i]);
    let d = oe(t),
      p = z(o?.avatar),
      h = d || p,
      v = B(se(t) ? (t?.initialsValue ?? t?.initials) : ``),
      y = B(o?.initials),
      b = v || y,
      [x, S] = _(!1),
      [C, w] = _(!1);
    g(() => {
      if ((a(() => S(!1)), a(() => w(!!h)), !h)) {
        a(() => w(!1));
        return;
      }
      if (u === void 0) {
        a(() => w(!1));
        return;
      }
      let e = !1,
        t = !1,
        n = 0,
        r = new u.Image(),
        i = () => {
          e ||
            t ||
            ((t = !0),
            u.clearTimeout(n),
            a(() => {
              (S(!1), w(!1));
            }));
        },
        o = () => {
          e ||
            t ||
            ((t = !0),
            u.clearTimeout(n),
            a(() => {
              (S(!0), w(!1));
            }));
        };
      return (
        (r.onload = () => {
          if (typeof r.naturalWidth == `number` && r.naturalWidth <= 0) {
            o();
            return;
          }
          i();
        }),
        (r.onerror = () => {
          o();
        }),
        (r.onabort = () => {
          o();
        }),
        (n = u.setTimeout(() => {
          o();
        }, 2500)),
        (r.src = h),
        () => {
          ((e = !0),
            u.clearTimeout(n),
            (r.onload = null),
            (r.onerror = null),
            (r.onabort = null),
            (r.src = ``));
        }
      );
    }, [h]);
    let T = r(
        () =>
          !c || (h && C)
            ? `Loading`
            : h
              ? x
                ? b
                  ? `Initials`
                  : `Fallback`
                : `Avatar`
              : b
                ? `Initials`
                : `Fallback`,
        [x, C, h, b, c]
      ),
      { initials: E, initialsValue: D, avatar: O, avatarUrl: k, avatarImage: te, ...A } = t,
      j = b || void 0,
      M = h || void 0;
    return m(e, {
      ref: n,
      ...A,
      avatar: M,
      avatarUrl: M,
      avatarImage: M,
      initials: j,
      initialsValue: j,
      variant: T,
    });
  });
}
var fe = t(() => {
    (i(), d(), o());
  }),
  pe = e({ __FramerMetadata__: () => ve, default: () => $ });
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  me,
  he,
  ge,
  _e,
  Q,
  $,
  ve,
  ye = t(() => {
    (d(),
      j(),
      x(),
      o(),
      F(),
      L(),
      (H = N(I)),
      (U = P(O(ne))),
      (W = [`XckoPLIud`, `XvN4PH9GW`, `hGp7WpMpe`, `ROV5j8iFF`]),
      (G = `framer-aiU57`),
      (K = {
        hGp7WpMpe: `framer-v-w8qghl`,
        ROV5j8iFF: `framer-v-1p7nxi6`,
        XckoPLIud: `framer-v-1g0fni2`,
        XvN4PH9GW: `framer-v-1ux2d4t`,
      }),
      (q = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Y = {
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
      (X = (e, t) => `translate(-50%, -50%) ${t}`),
      (Z = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (me = ({ value: e, children: t }) => {
        let n = s(y),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(y.Provider, { value: a, children: t });
      }),
      (he = {
        Avatar: `XckoPLIud`,
        Fallback: `hGp7WpMpe`,
        Initials: `XvN4PH9GW`,
        Loading: `ROV5j8iFF`,
      }),
      (ge = v.create(c)),
      (_e = ({ avatar: e, height: t, id: n, initials: r, width: i, ...a }) => ({
        ...a,
        eQkQvAfkl: r ?? a.eQkQvAfkl ?? ``,
        t_cz0IcPG: e ?? a.t_cz0IcPG,
        variant: he[a.variant] ?? a.variant ?? `XckoPLIud`,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = D(
        p(function (e, t) {
          let r = l(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = T(),
            u = re(),
            {
              style: ee,
              className: d,
              layoutId: f,
              variant: p,
              eQkQvAfkl: g,
              t_cz0IcPG: _,
              ...y
            } = _e(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: te,
              setVariant: j,
              variants: N,
            } = A({
              cycleOrder: W,
              defaultVariant: `XckoPLIud`,
              ref: i,
              variant: p,
              variantClassNames: K,
            }),
            P = Q(e, N),
            ne = E(G, ae),
            F = () => x === `XvN4PH9GW`,
            L = () => x === `ROV5j8iFF`,
            R = () => ![`XvN4PH9GW`, `hGp7WpMpe`, `ROV5j8iFF`].includes(x);
          return m(b, {
            id: f ?? a,
            children: m(ge, {
              animate: N,
              initial: !1,
              children: m(me, {
                value: q,
                children: h(U, {
                  ...y,
                  ...D,
                  className: E(ne, `framer-1g0fni2`, d, S),
                  "data-border": !0,
                  "data-framer-appear-id": `1g0fni2`,
                  "data-framer-name": `Avatar`,
                  layoutDependency: P,
                  layoutId: `XckoPLIud`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(255, 255, 255, 0)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(23, 23, 23)`,
                    ...ee,
                  },
                  variants: {
                    hGp7WpMpe: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    XvN4PH9GW: { backgroundColor: `rgb(0, 153, 255)` },
                  },
                  ...V(
                    {
                      hGp7WpMpe: {
                        "data-framer-name": `Fallback`,
                        background: {
                          alt: `User avatar.`,
                          fit: `fill`,
                          intrinsicHeight: 2160,
                          intrinsicWidth: 2160,
                          loading: M(u?.y || 0),
                          pixelHeight: 2160,
                          pixelWidth: 2160,
                          sizes: u?.width || `100vw`,
                          src: `https://framerusercontent.com/images/HpuIynUBjhAJSaXjaIesR9XZ7fM.png?width=2160&height=2160`,
                          srcSet: `https://framerusercontent.com/images/HpuIynUBjhAJSaXjaIesR9XZ7fM.png?scale-down-to=512&width=2160&height=2160 512w,https://framerusercontent.com/images/HpuIynUBjhAJSaXjaIesR9XZ7fM.png?scale-down-to=1024&width=2160&height=2160 1024w,https://framerusercontent.com/images/HpuIynUBjhAJSaXjaIesR9XZ7fM.png?scale-down-to=2048&width=2160&height=2160 2048w,https://framerusercontent.com/images/HpuIynUBjhAJSaXjaIesR9XZ7fM.png?width=2160&height=2160 2160w`,
                        },
                      },
                      ROV5j8iFF: {
                        __framer__presenceAnimate: J,
                        __framer__presenceInitial: Y,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        "data-framer-name": `Loading`,
                        optimized: !0,
                      },
                      XvN4PH9GW: { "data-framer-name": `Initials` },
                    },
                    x,
                    O
                  ),
                  children: [
                    F() &&
                      m(C, {
                        __fromCanvasComponent: !0,
                        children: m(c, {
                          children: m(v.p, {
                            className: `framer-styles-preset-bbixn5`,
                            "data-styles-preset": `opnE6P6z1`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                            },
                            children: `JH`,
                          }),
                        }),
                        className: `framer-1kum4bg`,
                        fonts: [`Inter`],
                        layoutDependency: P,
                        layoutId: `m6ftiVNXz`,
                        style: {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: g,
                        transformTemplate: X,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...V({ XvN4PH9GW: { transformTemplate: void 0 } }, x, O),
                      }),
                    L() &&
                      m(I, {
                        animated: !0,
                        className: `framer-1m0545k`,
                        layoutDependency: P,
                        layoutId: `dKLqvuPcZ`,
                        style: {
                          "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                          "--1iwhep7": 2,
                          "--1l3yetw": `rgb(136, 136, 136)`,
                        },
                        transformTemplate: X,
                      }),
                    R() &&
                      m(U, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: J,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M((u?.y || 0) + 0),
                          sizes: u?.width || `100vw`,
                          ...Z(_),
                        },
                        className: `framer-twidyv`,
                        "data-framer-appear-id": `twidyv`,
                        initial: Y,
                        layoutDependency: P,
                        layoutId: `OhBArjPxn`,
                        optimized: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-aiU57.framer-13e4bpo, .framer-aiU57 .framer-13e4bpo { display: block; }`,
          `.framer-aiU57.framer-1g0fni2 { height: 28px; overflow: visible; position: relative; width: 28px; }`,
          `.framer-aiU57 .framer-1kum4bg { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
          `.framer-aiU57 .framer-1m0545k { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 15px; z-index: 0; }`,
          `.framer-aiU57 .framer-twidyv { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }`,
          `.framer-aiU57.framer-v-1ux2d4t.framer-1g0fni2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; padding: 0px; }`,
          `.framer-aiU57.framer-v-1ux2d4t .framer-1kum4bg { left: unset; position: relative; top: unset; }`,
          ...R,
          `.framer-aiU57[data-border="true"]::after, .framer-aiU57 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-aiU57`
      )),
      ($.displayName = `User Avatar`),
      ($.defaultProps = { height: 28, width: 28 }),
      w($, {
        variant: {
          options: [`XckoPLIud`, `XvN4PH9GW`, `hGp7WpMpe`, `ROV5j8iFF`],
          optionTitles: [`Avatar`, `Initials`, `Fallback`, `Loading`],
          title: `Variant`,
          type: k.Enum,
        },
        eQkQvAfkl: { defaultValue: ``, displayTextArea: !1, title: `Initials`, type: k.String },
        oneQkQvAfklChange: { changes: `eQkQvAfkl`, type: k.ChangeHandler },
        t_cz0IcPG: { title: `Avatar`, type: k.ResponsiveImage },
      }),
      S(
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
          ...H,
          ...te(ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ve = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerFhlycn1G2`,
            slots: [],
            annotations: {
              framerResolvesOwnDefaults: `true`,
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `28`,
              framerIntrinsicWidth: `28`,
              framerVariables: `{"eQkQvAfkl":"initials","t_cz0IcPG":"avatar"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"XvN4PH9GW":{"layout":["fixed","fixed"]},"hGp7WpMpe":{"layout":["fixed","fixed"]},"ROV5j8iFF":{"layout":["fixed","fixed"]}}}`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { de as a, fe as i, $ as n, ye as r, pe as t };
//# sourceMappingURL=Fhlycn1G2.CzTk58kY.mjs.map
