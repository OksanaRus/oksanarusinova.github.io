import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  F as n,
  H as r,
  L as i,
  M as a,
  O as o,
  P as s,
  R as c,
  S as l,
  W as u,
  c as d,
  m as f,
  s as p,
  u as m,
  x as h,
  y as g,
} from "./react.hMW2PJqY.mjs";
import { V as _, c as v, o as y, ot as b, r as x, w as S } from "./motion.CaZjHSpz.mjs";
import {
  G as C,
  Ht as ee,
  I as w,
  Jt as T,
  K as E,
  Kt as D,
  N as O,
  Ot as k,
  Qt as A,
  R as j,
  St as M,
  Yt as te,
  Z as N,
  _n as P,
  c as F,
  en as I,
  et as L,
  gn as R,
  ht as z,
  o as B,
  ot as V,
  s as H,
  vn as U,
  y as W,
  zt as ne,
} from "./framer.CuDPj9y9.mjs";
import { n as G, t as K } from "./LiquidGradient.BqavxCA-.mjs";
import { n as re, t as ie } from "./BackgroundFilterSaturateNew.DkQY8pEF.mjs";
import ae, { t as oe } from "./r1GDYlOmHbsKSi1zZUrRKlB0VcGc8f8236DHE0EUdcA.BUSei_nw.mjs";
function q(e) {
  let t = l(null),
    n = b(t, { once: !e.animation.replay, amount: `some` }),
    [r, i] = g(``),
    { start: a, end: o, decimals: s, commas: c, rounding: u, fontColor: d, animation: f } = e,
    [p, v] = g(null),
    y = O.current() === O.canvas;
  function x(e) {
    let t = e.toFixed(s);
    return (c && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
  }
  function C() {
    y ||
      (p && p.stop(),
      v(
        S(a, o, {
          ...f.transition,
          onUpdate: (e) => {
            i(x(e));
          },
        })
      ));
  }
  return (
    h(() => {
      (f.trigger == `appear` && C(), i(x(a)));
    }, []),
    h(() => {
      n && f.trigger == `layerInView` && C();
    }, [n]),
    h(() => {
      f.trigger == `layerInView` && (n ? C() : (p && p.stop(), i(x(a))));
    }, [n]),
    m(_.p, {
      ref: t,
      style: {
        userSelect: e.textSelect ? `auto` : `none`,
        fontVariantNumeric: `${e.monospace ? `tabular-nums ` : ``}${e.slashedZeros ? `slashed-zero` : ``}`,
        margin: 0,
        ...(d.mode == `solid`
          ? { color: d.color }
          : {
              WebkitBackgroundClip: `text`,
              WebkitTextFillColor: `transparent`,
              backgroundImage: `linear-gradient(${d.angle}deg, ${d.startColor}, ${d.endColor})`,
            }),
        ...e.font,
        ...e.style,
      },
      children: [e.prefix, y ? x(o) : r, e.suffix],
    })
  );
}
var se = e(() => {
    (d(),
      z(),
      x(),
      o(),
      (q.displayName = `Animated Number Counter`),
      E(q, {
        start: { type: F.Number, defaultValue: 0 },
        end: { type: F.Number, defaultValue: 100 },
        decimals: { type: F.Number, defaultValue: 0, min: 0, max: 3, step: 1 },
        commas: { type: F.Boolean, defaultValue: !0 },
        fontColor: {
          type: F.Object,
          controls: {
            mode: {
              type: F.Enum,
              defaultValue: `solid`,
              options: [`solid`, `gradient`],
              optionTitles: [`Solid`, `Gradient`],
              displaySegmentedControl: !0,
            },
            color: { type: F.Color, defaultValue: `#000`, hidden: (e) => e.mode != `solid` },
            startColor: {
              type: F.Color,
              defaultValue: `#000`,
              hidden: (e) => e.mode != `gradient`,
            },
            endColor: { type: F.Color, defaultValue: `#FFF`, hidden: (e) => e.mode != `gradient` },
            angle: {
              type: F.Number,
              defaultValue: 180,
              min: -360,
              max: 360,
              unit: `°`,
              hidden: (e) => e.mode != `gradient`,
            },
          },
        },
        font: {
          type: `font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 16, lineHeight: 1 },
        },
        animation: {
          type: F.Object,
          icon: `effect`,
          controls: {
            trigger: {
              type: F.Enum,
              defaultValue: `layerInView`,
              options: [`appear`, `layerInView`],
              optionTitles: [`Appear`, `Layer in View`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            replay: {
              type: F.Boolean,
              defaultValue: !0,
              hidden(e) {
                return e.trigger !== `layerInView`;
              },
            },
            transition: { type: F.Transition },
          },
        },
        prefix: { type: F.String },
        suffix: { type: F.String },
        textSelect: { type: F.Boolean, defaultValue: !0 },
        display: {
          type: F.Object,
          buttonTitle: `Options`,
          controls: {
            monospace: {
              type: F.Boolean,
              defaultValue: !1,
              description: `Monospaced number characters.`,
            },
            slashedZeros: {
              type: F.Boolean,
              defaultValue: !1,
              description: `Adds a diagonal slash through zeros if your font supports it.`,
            },
          },
        },
      }));
  }),
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  J,
  he = e(() => {
    (d(),
      z(),
      x(),
      o(),
      (ce = `framer-pSJzB`),
      (le = { y4ms0OviL: `framer-v-kape4v` }),
      (ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (de = ({ value: e, children: t }) => {
        let r = s(v),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(v.Provider, { value: a, children: t });
      }),
      (fe = _.create(c)),
      (pe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (me = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = P(
        f(function (e, n) {
          let r = l(null),
            i = n ?? r,
            a = t(),
            { activeLocale: o, setLocale: s } = A();
          ne();
          let { style: c, className: u, layoutId: d, variant: f, ...h } = pe(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = R({ defaultVariant: `y4ms0OviL`, ref: i, variant: f, variantClassNames: le }),
            E = me(e, T),
            D = N(ce);
          return p(y, {
            id: d ?? a,
            children: p(fe, {
              animate: T,
              initial: !1,
              children: p(de, {
                value: ue,
                children: m(_.div, {
                  ...h,
                  ...x,
                  className: N(D, `framer-kape4v`, u, v),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: E,
                  layoutId: `y4ms0OviL`,
                  ref: i,
                  style: { ...c },
                  children: [
                    p(_.div, {
                      className: `framer-1fx6mwc`,
                      layoutDependency: E,
                      layoutId: `gY0Oq3Ntj`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1nic3p9`,
                      layoutDependency: E,
                      layoutId: `F2tILnC73`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1fb3q64`,
                      layoutDependency: E,
                      layoutId: `KPi1r2OI3`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-opmr5o`,
                      layoutDependency: E,
                      layoutId: `kosrH8i3a`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-s3h2c`,
                      layoutDependency: E,
                      layoutId: `twkklv4_K`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-6mffr`,
                      layoutDependency: E,
                      layoutId: `qqDGEk2k1`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-bnqyr6`,
                      layoutDependency: E,
                      layoutId: `w7Yaz9XKX`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-14apu19`,
                      layoutDependency: E,
                      layoutId: `vHpHKeRwm`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-zyvwfz`,
                      layoutDependency: E,
                      layoutId: `b48ovdlo0`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1ubhjbq`,
                      layoutDependency: E,
                      layoutId: `isZ_jQCJr`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-7b268v`,
                      layoutDependency: E,
                      layoutId: `RlhAWXVX_`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1qe4j5b`,
                      layoutDependency: E,
                      layoutId: `WbZNk10tp`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-ngifdx`,
                      layoutDependency: E,
                      layoutId: `N6ekFDpZe`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-8e7ye`,
                      layoutDependency: E,
                      layoutId: `yg_3P8qOq`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-13ztmzj`,
                      layoutDependency: E,
                      layoutId: `R4OLgYULN`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1q2oknr`,
                      layoutDependency: E,
                      layoutId: `cXdBdcUOm`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-9ddl0q`,
                      layoutDependency: E,
                      layoutId: `z3x7XDR3q`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1lrwzfh`,
                      layoutDependency: E,
                      layoutId: `zuvA4aEwp`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-bq09zh`,
                      layoutDependency: E,
                      layoutId: `LXkaaPNML`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-tih6dz`,
                      layoutDependency: E,
                      layoutId: `aFXWGhwd3`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1hokz7g`,
                      layoutDependency: E,
                      layoutId: `smkxg1KwZ`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1qxaz9t`,
                      layoutDependency: E,
                      layoutId: `bxTasqhAf`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-14p9l9t`,
                      layoutDependency: E,
                      layoutId: `QOy9XLuf2`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-183x724`,
                      layoutDependency: E,
                      layoutId: `SGWmgl8VG`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1bqs8dm`,
                      layoutDependency: E,
                      layoutId: `IRzUAwDrW`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-187oth3`,
                      layoutDependency: E,
                      layoutId: `QEKhjls2C`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-1aawhfh`,
                      layoutDependency: E,
                      layoutId: `jUBQcfEkW`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                    p(_.div, {
                      className: `framer-pnjo6`,
                      layoutDependency: E,
                      layoutId: `ahAG5iEBk`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.12)`,
                        borderBottomLeftRadius: 3.61,
                        borderBottomRightRadius: 3.61,
                        borderTopLeftRadius: 3.61,
                        borderTopRightRadius: 3.61,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pSJzB.framer-1rsu6bd, .framer-pSJzB .framer-1rsu6bd { display: block; }`,
          `.framer-pSJzB.framer-kape4v { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7.22px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 559px; }`,
          `.framer-pSJzB .framer-1fx6mwc, .framer-pSJzB .framer-1nic3p9, .framer-pSJzB .framer-1fb3q64, .framer-pSJzB .framer-opmr5o, .framer-pSJzB .framer-s3h2c, .framer-pSJzB .framer-6mffr, .framer-pSJzB .framer-bnqyr6, .framer-pSJzB .framer-14apu19, .framer-pSJzB .framer-zyvwfz, .framer-pSJzB .framer-1ubhjbq, .framer-pSJzB .framer-7b268v, .framer-pSJzB .framer-1qe4j5b, .framer-pSJzB .framer-ngifdx, .framer-pSJzB .framer-8e7ye, .framer-pSJzB .framer-13ztmzj, .framer-pSJzB .framer-1q2oknr, .framer-pSJzB .framer-9ddl0q, .framer-pSJzB .framer-1lrwzfh, .framer-pSJzB .framer-bq09zh, .framer-pSJzB .framer-tih6dz, .framer-pSJzB .framer-1hokz7g, .framer-pSJzB .framer-1qxaz9t, .framer-pSJzB .framer-14p9l9t, .framer-pSJzB .framer-183x724, .framer-pSJzB .framer-1bqs8dm, .framer-pSJzB .framer-187oth3, .framer-pSJzB .framer-1aawhfh, .framer-pSJzB .framer-pnjo6 { flex: 1 0 0px; height: 65px; position: relative; width: 1px; }`,
        ],
        `framer-pSJzB`
      )),
      (J.displayName = `ScoreBar`),
      (J.defaultProps = { height: 200, width: 559 }),
      C(J, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Y(e) {
  return Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
}
function ge(e, t) {
  return Number.isFinite(e) ? Math.max(0, Math.round(e)) : t;
}
function _e(e, t, n, r) {
  if (n <= 0) return 0;
  let i = Y(e);
  if (r === `step`) return +(t < Math.round(i * n));
  let a = i * n;
  return Math.max(0, Math.min(1, a - t));
}
function X(e) {
  let {
      progress: t = 1,
      bars: r = 24,
      barWidth: o = 12,
      barHeight: s = 48,
      gap: c = 6,
      radius: d = 3,
      filledColor: f = `#FFFFFF`,
      emptyColor: m = `#111111`,
      direction: _ = `leftToRight`,
      fillMode: v = `step`,
      useAnimation: y = !0,
      playOnView: x = !0,
      animateFromZero: C = !0,
      duration: ee = 1.2,
      delay: w = 0,
      easing: T = `easeInOut`,
      repeat: E = 0,
      repeatDelay: D = 0,
      style: O,
    } = e,
    k = te(),
    A = n(() => Y(t), [t]),
    j = n(() => Math.max(1, ge(r, 24)), [r]),
    M = n(() => Math.max(1, o || 1), [o]),
    N = n(() => Math.max(1, s || 1), [s]),
    P = n(() => Math.max(0, c || 0), [c]),
    F = n(() => Math.max(0, d || 0), [d]),
    I = l(null),
    L = b(I, { amount: 0.25 }),
    [R, z] = g(() => ((y && C) || (y && x) ? 0 : A)),
    B = l(R);
  B.current = R;
  let V = l(0),
    H = a((e) => {
      if (u === void 0) return;
      let t = Y(e);
      V.current ||= u.requestAnimationFrame(() => {
        ((V.current = 0),
          i(() => {
            z((e) => (Math.abs(e - t) < 5e-4 ? e : t));
          }));
      });
    }, []);
  (h(() => {
    if (u === void 0) return;
    if (!y || k) {
      H(A);
      return;
    }
    if (x && !L) return;
    let e = { linear: `linear`, easeIn: `easeIn`, easeOut: `easeOut`, easeInOut: `easeInOut` },
      t = C ? 0 : B.current,
      n = A;
    H(t);
    let r = S(t, n, {
      duration: Math.max(0, ee),
      delay: Math.max(0, w),
      ease: e[T] ?? `easeInOut`,
      repeat: Math.max(0, E),
      repeatDelay: Math.max(0, D),
      onUpdate: (e) => H(e),
    });
    return () => {
      try {
        r?.stop?.();
      } catch {}
    };
  }, [C, A, w, ee, T, L, k, x, E, D, H, y]),
    h(
      () => () => {
        u !== void 0 && V.current && u.cancelAnimationFrame(V.current);
      },
      []
    ));
  let U = n(() => Array.from({ length: j }, (e, t) => t), [j]),
    W = _ === `rightToLeft`,
    ne = n(() => (W ? [...U].reverse() : U), [U, W]),
    G = !!O && O.width === `100%`;
  return p(`div`, {
    ref: I,
    style: n(
      () => ({
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: G ? `stretch` : `flex-start`,
        gap: P,
        overflow: `hidden`,
        ...O,
      }),
      [G, P, O]
    ),
    "aria-label": `Bar fill meter`,
    role: `img`,
    children: ne.map((e) => {
      let t = _e(R, e, j, v),
        n = {
          width: G ? `auto` : M,
          height: N,
          borderRadius: F,
          background: m,
          flex: G ? `1 1 0` : `0 0 auto`,
          minWidth: 1,
        };
      if (v === `step`) return p(`div`, { style: { ...n, background: t >= 1 ? f : m } }, e);
      let r = Math.round(t * 1e4) / 100,
        i = W ? `to left` : `to right`;
      return p(
        `div`,
        {
          style: {
            ...n,
            background: `linear-gradient(${i}, ${f} 0%, ${f} ${r}%, ${m} ${r}%, ${m} 100%)`,
          },
        },
        e
      );
    }),
  });
}
var ve = e(() => {
    (r(),
      d(),
      o(),
      z(),
      x(),
      E(X, {
        progress: {
          type: F.Number,
          title: `Progress`,
          defaultValue: 1,
          min: 0,
          max: 1,
          step: 0.01,
        },
        bars: { type: F.Number, title: `Bars`, defaultValue: 24, min: 1, max: 80, step: 1 },
        barWidth: {
          type: F.Number,
          title: `Bar Width`,
          defaultValue: 12,
          min: 1,
          max: 40,
          step: 1,
          unit: `px`,
        },
        barHeight: {
          type: F.Number,
          title: `Bar Height`,
          defaultValue: 48,
          min: 1,
          max: 200,
          step: 1,
          unit: `px`,
        },
        gap: {
          type: F.Number,
          title: `Gap`,
          defaultValue: 6,
          min: 0,
          max: 40,
          step: 1,
          unit: `px`,
        },
        radius: {
          type: F.Number,
          title: `Radius`,
          defaultValue: 3,
          min: 0,
          max: 40,
          step: 1,
          unit: `px`,
        },
        filledColor: { type: F.Color, title: `Filled`, defaultValue: `#FFFFFF` },
        emptyColor: { type: F.Color, title: `Empty`, defaultValue: `#111111` },
        direction: {
          type: F.Enum,
          title: `Direction`,
          defaultValue: `leftToRight`,
          options: [`leftToRight`, `rightToLeft`],
          optionTitles: [`Left → Right`, `Right → Left`],
          displaySegmentedControl: !0,
        },
        fillMode: {
          type: F.Enum,
          title: `Fill`,
          defaultValue: `step`,
          options: [`step`, `all`],
          optionTitles: [`Step`, `Partial`],
          displaySegmentedControl: !0,
        },
        useAnimation: {
          type: F.Boolean,
          title: `Animate`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        playOnView: {
          type: F.Boolean,
          title: `Play On View`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
          hidden: ({ useAnimation: e }) => !e,
        },
        animateFromZero: {
          type: F.Boolean,
          title: `From Empty`,
          defaultValue: !0,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden: ({ useAnimation: e }) => !e,
        },
        duration: {
          type: F.Number,
          title: `Duration`,
          defaultValue: 1.2,
          min: 0,
          max: 10,
          step: 0.05,
          unit: `s`,
          hidden: ({ useAnimation: e }) => !e,
        },
        delay: {
          type: F.Number,
          title: `Delay`,
          defaultValue: 0,
          min: 0,
          max: 5,
          step: 0.05,
          unit: `s`,
          hidden: ({ useAnimation: e }) => !e,
        },
        easing: {
          type: F.Enum,
          title: `Easing`,
          defaultValue: `easeInOut`,
          options: [`linear`, `easeIn`, `easeOut`, `easeInOut`],
          optionTitles: [`Linear`, `Ease In`, `Ease Out`, `Ease In Out`],
          hidden: ({ useAnimation: e }) => !e,
        },
        repeat: {
          type: F.Number,
          title: `Repeat`,
          defaultValue: 0,
          min: 0,
          max: 20,
          step: 1,
          hidden: ({ useAnimation: e }) => !e,
        },
        repeatDelay: {
          type: F.Number,
          title: `Repeat Delay`,
          defaultValue: 0,
          min: 0,
          max: 5,
          step: 0.05,
          unit: `s`,
          hidden: ({ useAnimation: e, repeat: t }) => !e || !t,
        },
      }));
  }),
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Z,
  Oe,
  ke,
  Q,
  $,
  Ae;
e(() => {
  (d(),
    z(),
    x(),
    o(),
    se(),
    G(),
    he(),
    ie(),
    ve(),
    oe(),
    (ye = V(q)),
    (be = V(X)),
    (xe = U(_.div, { nodeId: `RXWsjingV`, override: re, scopeId: `jjE3XqhU3` })),
    (Se = U(_.div, { nodeId: `lnIiX3FNz`, override: re, scopeId: `jjE3XqhU3` })),
    (Ce = {}),
    (we = []),
    (Te = `framer-4HzEf`),
    (Ee = { iGPoDBvRY: `framer-v-1gnv9ol` }),
    (De = (e, t, n) => (e && t ? `position` : n)),
    (Z = (e, t) => `translateX(-50%) ${t}`),
    M(),
    (Oe = ({ value: e }) =>
      T()
        ? null
        : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ke = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
    (Q = P(
      f(function (e, r) {
        let i = l(null),
          a = r ?? i,
          o = t(),
          { activeLocale: u, contentLocale: d, setLocale: f } = A();
        ne();
        let { style: h, className: g, layoutId: b, variant: x, ...S } = ke(e);
        I(n(() => ae({}, d), [d]));
        let [C, T] = D(x, Ce, !1),
          E = N(Te),
          O = s(W)?.isLayoutTemplate,
          k = !!s(v)?.transition?.layout,
          M = De(O, k);
        return (
          ee({}),
          p(W.Provider, {
            value: { activeVariantId: C, primaryVariantId: `iGPoDBvRY`, variantClassNames: Ee },
            children: m(y, {
              id: b ?? o,
              children: [
                p(Oe, {
                  value: `html body { background: var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); }`,
                }),
                m(_.div, {
                  ...S,
                  className: N(E, `framer-1gnv9ol`, g),
                  ref: a,
                  style: { ...h },
                  children: [
                    m(_.div, {
                      className: `framer-gmn8pc`,
                      "data-framer-name": `Announcement`,
                      layout: M,
                      children: [
                        p(H, {
                          className: `framer-14wuqfe-container`,
                          children: p(j, {
                            __fromCanvasComponent: !0,
                            animated: K.animated,
                            buffers: K.buffers,
                            fallbackImage: `https://framerusercontent.com/images/APsH0kkJiEezq7XCdAsW919TA.png?width=2160&height=2160`,
                            fragmentShader: K.fragment,
                            height: `100%`,
                            heightmapSource: K.heightmapSource,
                            mode: `progressive`,
                            mouse: K.mouse && { enabled: K.mouse === `enabledByDefault` },
                            resolutionScale: K.resolutionScale,
                            skipInitialFallback: !1,
                            uniforms: {
                              u_colors: {
                                type: `array`,
                                value: [
                                  `rgb(175, 143, 255)`,
                                  `rgb(0, 106, 255)`,
                                  `rgb(0, 17, 255)`,
                                ],
                              },
                              u_contrast: { type: `number`, value: 1.1 },
                              u_distBias: { type: `number`, value: -0.8 },
                              u_dither: { type: `number`, value: 0.05 },
                              u_ditherMode: { type: `enum`, value: 0 },
                              u_exposure: { type: `number`, value: 1.1 },
                              u_jellify: { type: `boolean`, value: !1 },
                              u_loop: { type: `number`, value: 13 },
                              u_mousePersist: { type: `number`, value: 0.8 },
                              u_mousePush: { type: `number`, value: 0.5 },
                              u_mouseRadius: { type: `number`, value: 1 },
                              u_mouseStretch: { type: `number`, value: 0 },
                              u_saturation: { type: `number`, value: 1 },
                              u_scale: { type: `number`, value: 0.68 },
                              u_seed: { type: `number`, value: 529 },
                              u_speed: { type: `number`, value: 2 },
                              u_turbAmp: { type: `number`, value: 0.17 },
                              u_turbFreq: { type: `number`, value: 2 },
                              u_turbIter: { type: `number`, value: 4 },
                              u_waveFreq: { type: `number`, value: 4 },
                            },
                            vertexShader: K.vertex,
                            width: `100%`,
                          }),
                        }),
                        p(`div`, { className: `framer-anootc` }),
                        p(w, {
                          __fromCanvasComponent: !0,
                          children: p(c, {
                            children: p(`h1`, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `Q1VTVE9NO0dUIFdhbHNoZWltIE1lZGl1bQ==`,
                                "--framer-font-family": `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `'ss02' on, 'tnum' on`,
                                "--framer-font-size": `180px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.05em`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                              },
                              children: `Can AI find your website?`,
                            }),
                          }),
                          className: `framer-1npjfsd`,
                          "data-framer-name": `ResultVerdict`,
                          fonts: [`CUSTOM;GT Walsheim Medium`],
                          transformTemplate: Z,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        p(xe, {
                          className: `framer-128x40a`,
                          "data-framer-name": `Score Card`,
                          transformTemplate: Z,
                          children: p(_.div, {
                            className: `framer-dvllz`,
                            "data-framer-name": `Score Card Inner`,
                            children: m(_.div, {
                              className: `framer-19xg8tl`,
                              "data-framer-name": `Score Layout`,
                              children: [
                                m(_.div, {
                                  className: `framer-21mkt8`,
                                  "data-framer-name": `Score Number Row`,
                                  children: [
                                    m(_.div, {
                                      className: `framer-141gj0k`,
                                      "data-framer-name": `Score Number`,
                                      children: [
                                        p(B, {
                                          children: p(H, {
                                            className: `framer-rt2fax-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `e9mEGmooF`,
                                            rendersWithMotion: !0,
                                            scopeId: `jjE3XqhU3`,
                                            children: p(q, {
                                              animation: {
                                                replay: !1,
                                                transition: {
                                                  delay: 0,
                                                  duration: 6,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  type: `tween`,
                                                },
                                                trigger: `appear`,
                                              },
                                              commas: !0,
                                              decimals: 0,
                                              display: { monospace: !1, slashedZeros: !1 },
                                              end: 100,
                                              font: {
                                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                fontSize: `90px`,
                                                fontStyle: `normal`,
                                                fontWeight: 600,
                                                letterSpacing: `-0.04em`,
                                                lineHeight: `1em`,
                                              },
                                              fontColor: {
                                                angle: 180,
                                                color: `rgb(255, 255, 255)`,
                                                endColor: `rgb(255, 255, 255)`,
                                                mode: `solid`,
                                                startColor: `rgb(0, 0, 0)`,
                                              },
                                              height: `100%`,
                                              id: `e9mEGmooF`,
                                              layoutId: `e9mEGmooF`,
                                              prefix: ``,
                                              start: 0,
                                              suffix: ``,
                                              textSelect: !1,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        p(w, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: p(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `SW50ZXItTWVkaXVt`,
                                                "--framer-font-open-type-features": `'tnum' on`,
                                                "--framer-font-size": `29px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                              },
                                              children: `/100`,
                                            }),
                                          }),
                                          className: `framer-7r5d8b`,
                                          fonts: [`Inter-Medium`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(w, {
                                      __fromCanvasComponent: !0,
                                      children: p(c, {
                                        children: p(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                            "--framer-font-open-type-features": `'tnum' on`,
                                            "--framer-font-size": `29px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                          },
                                          children: `Overall AEO Score`,
                                        }),
                                      }),
                                      className: `framer-lsrbh6`,
                                      fonts: [`Inter-Medium`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                p(B, {
                                  children: p(H, {
                                    className: `framer-1xgteu3-container`,
                                    "data-code-component-plugin-id": `84d4c1`,
                                    isAuthoredByUser: !0,
                                    nodeId: `Pm8Kye8kM`,
                                    rendersWithMotion: !0,
                                    scopeId: `jjE3XqhU3`,
                                    children: p(X, {
                                      animateFromZero: !0,
                                      barHeight: 64,
                                      bars: 28,
                                      barWidth: 14,
                                      delay: 0,
                                      direction: `leftToRight`,
                                      duration: 6,
                                      easing: `easeInOut`,
                                      emptyColor: `rgb(37, 38, 43)`,
                                      filledColor: `rgb(255, 255, 255)`,
                                      fillMode: `step`,
                                      gap: 7,
                                      height: `100%`,
                                      id: `Pm8Kye8kM`,
                                      layoutId: `Pm8Kye8kM`,
                                      playOnView: !0,
                                      progress: 1,
                                      radius: 4,
                                      repeat: 0,
                                      repeatDelay: 0,
                                      style: { height: `100%`, width: `100%` },
                                      useAnimation: !0,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        p(`div`, {
                          className: `framer-hade4`,
                          children: p(`div`, {
                            className: `framer-yn9q7d`,
                            children: p(w, {
                              __fromCanvasComponent: !0,
                              children: p(c, {
                                children: p(`h1`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdORFl3`,
                                    "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'cv08' on, 'cv11' on`,
                                    "--framer-font-size": `28px`,
                                    "--framer-font-variation-axes": `"opsz" 14, "wght" 460`,
                                    "--framer-line-height": `1.25em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                  },
                                  children: `framer.com/aeo`,
                                }),
                              }),
                              className: `framer-qwksjo`,
                              "data-framer-name": `ResultVerdict`,
                              fonts: [`Inter-Variable`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                    p(_.div, {
                      className: `framer-j1chmn`,
                      layout: M,
                      children: m(`div`, {
                        className: `framer-13szmhv`,
                        "data-framer-name": `Scoring logic`,
                        children: [
                          p(H, {
                            className: `framer-1t5tfps-container`,
                            children: p(j, {
                              __fromCanvasComponent: !0,
                              animated: K.animated,
                              buffers: K.buffers,
                              fallbackImage: `https://framerusercontent.com/images/amk8Ilq7R7MzzKBJVWHNTilicw.png?width=1084&height=1084`,
                              fragmentShader: K.fragment,
                              height: `100%`,
                              heightmapSource: K.heightmapSource,
                              mode: `progressive`,
                              mouse: K.mouse && { enabled: K.mouse === `enabledByDefault` },
                              resolutionScale: K.resolutionScale,
                              skipInitialFallback: !1,
                              uniforms: {
                                u_colors: {
                                  type: `array`,
                                  value: [
                                    `rgb(175, 143, 255)`,
                                    `rgb(0, 106, 255)`,
                                    `rgb(0, 17, 255)`,
                                  ],
                                },
                                u_contrast: { type: `number`, value: 1.1 },
                                u_distBias: { type: `number`, value: -0.8 },
                                u_dither: { type: `number`, value: 0.05 },
                                u_ditherMode: { type: `enum`, value: 0 },
                                u_exposure: { type: `number`, value: 1.1 },
                                u_jellify: { type: `boolean`, value: !1 },
                                u_loop: { type: `number`, value: 13 },
                                u_mousePersist: { type: `number`, value: 0.8 },
                                u_mousePush: { type: `number`, value: 0.5 },
                                u_mouseRadius: { type: `number`, value: 1 },
                                u_mouseStretch: { type: `number`, value: 0 },
                                u_saturation: { type: `number`, value: 1 },
                                u_scale: { type: `number`, value: 0.68 },
                                u_seed: { type: `number`, value: 529 },
                                u_speed: { type: `number`, value: 2 },
                                u_turbAmp: { type: `number`, value: 0.17 },
                                u_turbFreq: { type: `number`, value: 2 },
                                u_turbIter: { type: `number`, value: 4 },
                                u_waveFreq: { type: `number`, value: 4 },
                              },
                              vertexShader: K.vertex,
                              width: `100%`,
                            }),
                          }),
                          p(`div`, { className: `framer-fzuu8p` }),
                          p(w, {
                            __fromCanvasComponent: !0,
                            children: p(c, {
                              children: p(`h1`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NO0dUIFdhbHNoZWltIE1lZGl1bQ==`,
                                  "--framer-font-family": `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`,
                                  "--framer-font-open-type-features": `'ss02' on, 'tnum' on`,
                                  "--framer-font-size": `90px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.05em`,
                                  "--framer-line-height": `0.9em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                children: `Can AI find your website?`,
                              }),
                            }),
                            className: `framer-1v7dfb8`,
                            "data-framer-name": `ResultVerdict`,
                            fonts: [`CUSTOM;GT Walsheim Medium`],
                            transformTemplate: Z,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          p(Se, {
                            className: `framer-1yfrf3i`,
                            "data-framer-name": `Score Card`,
                            transformTemplate: Z,
                            children: p(_.div, {
                              className: `framer-15q9pos`,
                              "data-framer-name": `Score Card Inner`,
                              children: m(_.div, {
                                className: `framer-2xfmez`,
                                "data-framer-name": `Score Layout`,
                                children: [
                                  m(_.div, {
                                    className: `framer-gdogrr`,
                                    "data-framer-name": `Score Number Row`,
                                    children: [
                                      m(_.div, {
                                        className: `framer-ej80kl`,
                                        "data-framer-name": `Score Number`,
                                        children: [
                                          p(B, {
                                            children: p(H, {
                                              className: `framer-rj3ubz-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `kNB0H0xm2`,
                                              rendersWithMotion: !0,
                                              scopeId: `jjE3XqhU3`,
                                              children: p(q, {
                                                animation: {
                                                  replay: !1,
                                                  transition: {
                                                    delay: 0,
                                                    duration: 6,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    type: `tween`,
                                                  },
                                                  trigger: `appear`,
                                                },
                                                commas: !0,
                                                decimals: 0,
                                                display: { monospace: !1, slashedZeros: !1 },
                                                end: 100,
                                                font: {
                                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                  fontSize: `45px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                                fontColor: {
                                                  angle: 180,
                                                  color: `rgb(255, 255, 255)`,
                                                  endColor: `rgb(255, 255, 255)`,
                                                  mode: `solid`,
                                                  startColor: `rgb(0, 0, 0)`,
                                                },
                                                height: `100%`,
                                                id: `kNB0H0xm2`,
                                                layoutId: `kNB0H0xm2`,
                                                prefix: ``,
                                                start: 0,
                                                style: { height: `100%`, width: `100%` },
                                                suffix: ``,
                                                textSelect: !1,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          p(w, {
                                            __fromCanvasComponent: !0,
                                            children: p(c, {
                                              children: p(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-open-type-features": `'tnum' on`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-0.02em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `/100`,
                                              }),
                                            }),
                                            className: `framer-uzqs7n`,
                                            fonts: [`Inter-Medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      p(w, {
                                        __fromCanvasComponent: !0,
                                        children: p(c, {
                                          children: p(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-open-type-features": `'tnum' on`,
                                              "--framer-font-size": `15px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                            },
                                            children: `Overall AEO Score`,
                                          }),
                                        }),
                                        className: `framer-3p2gs1`,
                                        fonts: [`Inter-Medium`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  p(B, {
                                    children: p(H, {
                                      className: `framer-6del8p-container`,
                                      "data-code-component-plugin-id": `84d4c1`,
                                      isAuthoredByUser: !0,
                                      nodeId: `QRqESAu_7`,
                                      rendersWithMotion: !0,
                                      scopeId: `jjE3XqhU3`,
                                      children: p(X, {
                                        animateFromZero: !0,
                                        barHeight: 64,
                                        bars: 28,
                                        barWidth: 14,
                                        delay: 0,
                                        direction: `leftToRight`,
                                        duration: 6,
                                        easing: `easeInOut`,
                                        emptyColor: `rgb(37, 38, 43)`,
                                        filledColor: `rgb(255, 255, 255)`,
                                        fillMode: `step`,
                                        gap: 7,
                                        height: `100%`,
                                        id: `QRqESAu_7`,
                                        layoutId: `QRqESAu_7`,
                                        playOnView: !0,
                                        progress: 1,
                                        radius: 4,
                                        repeat: 0,
                                        repeatDelay: 0,
                                        style: { height: `100%`, width: `100%` },
                                        useAnimation: !0,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          p(`div`, {
                            className: `framer-1r0td74`,
                            children: p(`div`, {
                              className: `framer-rwr93f`,
                              children: p(w, {
                                __fromCanvasComponent: !0,
                                children: p(c, {
                                  children: p(`h1`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdORFl3`,
                                      "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'cv08' on, 'cv11' on`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-variation-axes": `"opsz" 14, "wght" 460`,
                                      "--framer-line-height": `1.25em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgb(255, 255, 255)`,
                                    },
                                    children: `framer.com/aeo`,
                                  }),
                                }),
                                className: `framer-e7sqti`,
                                "data-framer-name": `ResultVerdict`,
                                fonts: [`Inter-Variable`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        ],
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
        `.framer-4HzEf.framer-1yw53ug, .framer-4HzEf .framer-1yw53ug { display: block; }`,
        `.framer-4HzEf.framer-1gnv9ol { align-content: center; align-items: center; background-color: var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 200px 0px 200px 0px; position: relative; width: 1200px; }`,
        `.framer-4HzEf .framer-gmn8pc { background-color: #000000; flex: none; height: 1080px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1080px; }`,
        `.framer-4HzEf .framer-14wuqfe-container, .framer-4HzEf .framer-1t5tfps-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 100%) add; bottom: 0px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add; position: absolute; right: 0px; top: 0px; }`,
        `.framer-4HzEf .framer-anootc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; min-height: 55px; min-width: 36px; overflow: visible; padding: 0px; position: absolute; top: 50px; transform: translateX(-50%); width: min-content; }`,
        `.framer-4HzEf .framer-1npjfsd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap: balance; flex: none; height: auto; left: 50%; position: absolute; top: 130px; transform: translateX(-50%); white-space: pre-wrap; width: 811px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4HzEf .framer-128x40a { --corner-shape-fallback: 0.752; -webkit-backdrop-filter: blur(10px); align-content: center; align-items: center; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.15); border-bottom-left-radius: calc(45.1px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(45.1px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(45.1px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(45.1px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); bottom: 202px; box-shadow: 0px 36.08px 40px 0px rgba(0, 0, 0, 0.25); corner-shape: superellipse(1.5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18.04px; height: min-content; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 1.8px; position: absolute; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 5; }`,
        `.framer-4HzEf .framer-dvllz { --corner-shape-fallback: 0.752; align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0.82); border-bottom-left-radius: calc(41.49px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(41.49px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(41.49px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(41.49px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 43.3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 54.12px; position: relative; width: 668px; }`,
        `.framer-4HzEf .framer-19xg8tl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28.87px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4HzEf .framer-21mkt8, .framer-4HzEf .framer-gdogrr { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4HzEf .framer-141gj0k { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 14.43px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-4HzEf .framer-rt2fax-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-4HzEf .framer-7r5d8b, .framer-4HzEf .framer-lsrbh6, .framer-4HzEf .framer-uzqs7n, .framer-4HzEf .framer-3p2gs1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-4HzEf .framer-1xgteu3-container { flex: none; height: 65px; position: relative; width: 100%; }`,
        `.framer-4HzEf .framer-hade4 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 50px; position: absolute; width: 1080px; }`,
        `.framer-4HzEf .framer-yn9q7d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1000px; }`,
        `.framer-4HzEf .framer-qwksjo, .framer-4HzEf .framer-e7sqti { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-4HzEf .framer-j1chmn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-4HzEf .framer-13szmhv { background-color: #000000; flex: none; height: 542px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 542px; }`,
        `.framer-4HzEf .framer-fzuu8p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 28px; justify-content: center; left: calc(50.00000000000002% - 18px / 2); overflow: visible; padding: 0px; position: absolute; top: 25px; width: 18px; }`,
        `.framer-4HzEf .framer-1v7dfb8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap: balance; flex: none; height: auto; left: 50%; position: absolute; top: 65px; transform: translateX(-50%); white-space: pre-wrap; width: 406px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4HzEf .framer-1yfrf3i { --corner-shape-fallback: 0.752; -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); background-color: rgba(255, 255, 255, 0.15); border-bottom-left-radius: calc(22.55px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(22.55px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(22.55px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(22.55px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); bottom: 101px; box-shadow: 0px 18.04px 40px 0px rgba(0, 0, 0, 0.25); corner-shape: superellipse(1.5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9.02px; height: min-content; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0.9px; position: absolute; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 5; }`,
        `.framer-4HzEf .framer-15q9pos { --corner-shape-fallback: 0.752; align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0.82); border-bottom-left-radius: calc(20.75px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(20.75px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(20.75px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(20.75px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 43.1.5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 27.06px; position: relative; width: 334px; }`,
        `.framer-4HzEf .framer-2xfmez { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28.43.5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4HzEf .framer-ej80kl { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 14.21.5px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-4HzEf .framer-rj3ubz-container { flex: none; height: 45px; position: relative; width: 73px; }`,
        `.framer-4HzEf .framer-6del8p-container { flex: none; height: 33px; position: relative; width: 100%; }`,
        `.framer-4HzEf .framer-1r0td74 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 25px; position: absolute; width: 540px; }`,
        `.framer-4HzEf .framer-rwr93f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 500px; }`,
      ],
      `framer-4HzEf`
    )),
    (Q.displayName = `Aeo / Video`),
    (Q.defaultProps = { height: 3365, width: 1200 }),
    ($ = [
      { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
      { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
    ]),
    C(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `GT Walsheim Medium`,
              openType: !0,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `GT Walsheim`,
              url: `../../assets/fonts/6kEeNyQwxT59TY7SpLEnehG2fc.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
              variationAxes: $,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
              variationAxes: $,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
              variationAxes: $,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
              variationAxes: $,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
              variationAxes: $,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
              variationAxes: $,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
              variationAxes: $,
              weight: `400`,
            },
          ],
        },
        ...ye,
        ...be,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => k([() => L(J, {}, t)], t) }),
    (Ae = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerjjE3XqhU3`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerResolvesOwnDefaults: `true`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `3365`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ae as __FramerMetadata__, Q as default, we as queryParamNames };
//# sourceMappingURL=96194Z-sMr4sB-ZddJXiH8I8AqLmGhloSHJJZizeUqI.zBmwj4Yc.mjs.map
