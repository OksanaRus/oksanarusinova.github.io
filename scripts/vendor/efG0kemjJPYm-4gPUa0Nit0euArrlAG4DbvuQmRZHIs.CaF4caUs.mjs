import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as n,
  F as r,
  L as i,
  O as a,
  P as o,
  R as s,
  S as c,
  c as l,
  m as u,
  s as d,
  u as f,
  x as p,
  y as m,
} from "./react.hMW2PJqY.mjs";
import { V as h, c as g, o as ee, r as _ } from "./motion.CaZjHSpz.mjs";
import {
  $ as v,
  A as y,
  Cn as b,
  F as te,
  Ft as ne,
  G as x,
  Ht as re,
  I as S,
  Jt as ie,
  K as C,
  Kt as ae,
  Ot as w,
  Qt as oe,
  T,
  Z as E,
  _n as D,
  c as O,
  ct as k,
  en as se,
  et as A,
  gn as ce,
  ht as j,
  ln as M,
  o as N,
  ot as P,
  s as F,
  un as le,
  v as I,
  vn as L,
  y as ue,
  z as de,
  zt as fe,
} from "./framer.CuDPj9y9.mjs";
import {
  _ as pe,
  a as me,
  b as R,
  c as z,
  d as B,
  f as V,
  i as he,
  l as ge,
  n as _e,
  o as ve,
  r as ye,
  s as be,
  t as xe,
  u as Se,
  v as Ce,
  y as we,
} from "./shared.DbR_nTE0.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./uexyNUZEC.Dnbhlgwn.mjs";
import { n as ke, t as H } from "./uIpCQFONn.CSBui_fV.mjs";
import { r as Ae, t as U } from "./KsxdqjKwX.sPcETt3u.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./qRN7MgZKk.DvYJUCYH.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./uT_bT0pMG.Dx8mPC7G.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./wVtX8xMgR.DW8JbgHe.mjs";
import { n as Ue, t as W } from "./hADclDOPA.CIF5o4ap.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./lauDPxbHX.D-HTprcT.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./owysJjUmB.C-Jf_7wl.mjs";
import { i as Qe, n as $e, r as et, t as tt } from "./BST5CE1TC.BWiG-sTg.mjs";
import { n as nt, t as rt } from "./UpNpVEBdB.DILHmv0J.mjs";
import { n as it, t as at } from "./store.js@_1.0.BOuFaOWG.mjs";
import ot, { t as st } from "./D__uilbJrPNN_l4PZNesxyX_HccAkprMazzY4CGx1hI.CINmXDgD.mjs";
function ct(e, t, n = !0) {
  return new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: t,
    minimumFractionDigits: n ? 0 : 2,
    maximumFractionDigits: n ? 0 : 2,
  }).format(e);
}
var lt = t(() => {});
async function ut() {
  return await (await fetch(`${dt}/prices`)).json();
}
var dt,
  ft = t(() => {
    dt = `https://api.framer.com/site`;
  });
function pt(e, t, n, r, i, a) {
  let o = Math.max(0, (Number.isFinite(e) ? Math.round(e) : t) - t),
    s = a[`credits_${n}_2025`] || Rt[`credits_${n}_2025`],
    c = (r?.price ?? i.price) + o * s.price;
  return n === `yearly` ? c / 12 : c;
}
function mt(e) {
  return Math.round(e);
}
function ht(e) {
  let t = Number.parseInt(String(e ?? ``), 10);
  return Number.isFinite(t) ? t : null;
}
function gt(e, t, n, r) {
  if (t === `basic`) {
    i(() => {
      e({ basicCredits: n, basicCreditsSelected: r });
    });
    return;
  }
  i(() => {
    e({ proCredits: n, proCreditsSelected: r });
  });
}
function _t(e, t) {
  let [n, r] = G(),
    i = e === `basic` ? n.basicCredits : n.proCredits,
    a = e === `basic` ? n.basicCreditsSelected : n.proCreditsSelected;
  p(() => {
    let n = ht(t.value);
    n !== null && n !== i && gt(r, e, n, a);
  }, [t.value, r, e, i, a]);
  let o = (t, n) => {
    let i = ht(t?.target?.value);
    (i !== null && gt(r, e, i, !0), typeof n == `function` && n(t));
  };
  return { onChange: (e) => o(e, t.onChange), onInput: (e) => o(e, t.onInput) };
}
function vt(e) {
  return (t) => {
    let [n, r] = G();
    function i() {
      r({ period: n.period === `yearly` ? `monthly` : `yearly` });
    }
    return d(e, { ...t, variant: n.period === `yearly` ? `On` : `Off`, onToggle: i });
  };
}
function yt(e) {
  return (t) => {
    let [n, r] = G(),
      a = async () => {
        try {
          let e = await ut();
          i(() => {
            r({ prices: e, hasLocalPrices: !0 });
          });
        } catch {
          i(() => {
            r({ hasLocalPrices: !0 });
          });
        }
      };
    return (
      p(() => {
        a();
      }, []),
      d(e, { ...t })
    );
  };
}
function bt(e) {
  return (t) => {
    let n = _t(`basic`, t);
    return d(e, { ...t, ...n });
  };
}
function xt(e) {
  return (t) => {
    let n = _t(`pro`, t);
    return d(e, { ...t, ...n });
  };
}
function St(e, t) {
  return (n) => {
    let [r, i] = m(!1);
    It(() => {
      i(!0);
    }, 100);
    let a = e === `free`,
      {
        formatted: o,
        currency: s,
        show: c,
      } = K(a ? `basic_site` : e, !1, e === `scale_site` ? `yearly` : void 0),
      l = a ? ct(0, s) : o;
    return d(`div`, { style: { opacity: c || r ? 1 : 0 }, children: d(t, { ...n, text: l }) });
  };
}
function Ct(e) {
  return (t) => {
    let [n, r] = m(!1),
      [{ hasLocalPrices: a, prices: o, period: s, basicCredits: c, basicCreditsSelected: l }] = G();
    It(() => {
      i(() => {
        r(!0);
      });
    }, 100);
    let u = o[`basic_site_${s}_2025`],
      f = Rt[`basic_site_${s}_2025`],
      p = s === `yearly` ? (u?.price ?? f.price) / 12 : (u?.price ?? f.price),
      h = pt(c || zt, zt, s, u, f, o),
      g = ct(mt(l ? h : p), u?.currency || f?.currency || `USD`, !0);
    return d(`div`, { style: { opacity: a || n ? 1 : 0 }, children: d(e, { ...t, text: g }) });
  };
}
function wt(e) {
  return (t) => {
    let [n, r] = m(!1),
      [{ hasLocalPrices: a, prices: o, period: s, proCredits: c, proCreditsSelected: l }] = G();
    It(() => {
      i(() => {
        r(!0);
      });
    }, 100);
    let u = o[`pro_site_${s}_2025`],
      f = Rt[`pro_site_${s}_2025`],
      p = s === `yearly` ? (u?.price ?? f.price) / 12 : (u?.price ?? f.price),
      h = pt(c || Bt, Bt, s, u, f, o),
      g = ct(mt(l ? h : p), u?.currency || f?.currency || `USD`, !0);
    return d(`div`, { style: { opacity: a || n ? 1 : 0 }, children: d(e, { ...t, text: g }) });
  };
}
function Tt(e) {
  return St(`free`, e);
}
function Et(e) {
  return (t) => {
    let { formatted: n } = K(`personal_team`, !1);
    return d(e, { ...t, text: `${n}` });
  };
}
function Dt(e) {
  return (t) => {
    let { formatted: n } = K(`personal_team`, !1);
    return d(e, { ...t, text: `${n} per editor` });
  };
}
function Ot(e) {
  return (t) => {
    let { formatted: n } = K(`content_editors`, !1);
    return d(e, { ...t, text: `${n} per editor` });
  };
}
function kt(e) {
  return (t) => {
    let { formatted: n } = K(`locale`, !1);
    return d(e, { ...t, text: `${n} per locale` });
  };
}
function At(e) {
  return (t) => {
    let { formatted: n } = K(`proxy`, !1);
    return d(e, { ...t, text: `${n}` });
  };
}
function jt(e) {
  return (t) => {
    let { formatted: n } = K(`pages`, !1);
    return d(e, { ...t, text: `then ${n} per 100 (700 max)` });
  };
}
function Mt(e) {
  return (t) => {
    let { formatted: n } = K(`items`, !1);
    return d(e, { ...t, text: `then ${n} per 10,000 (40,000 max)` });
  };
}
function Nt(e) {
  return (t) => {
    let { formatted: n } = K(`bandwidth`, !1);
    return d(e, { ...t, text: `then ${n} per 100 GB (2 TB max)` });
  };
}
function Pt(e) {
  return (t) => {
    let { formatted: n } = K(`collections`, !1);
    return d(e, { ...t, text: `then ${n} per 10 (40 max)` });
  };
}
function Ft(e) {
  return (t) => {
    let { formatted: n } = K(`analytics`, !1);
    return d(e, { ...t, text: `${n}` });
  };
}
function It(e, t) {
  let n = c(e);
  (p(() => {
    n.current = e;
  }, [e]),
    p(() => {
      if (t !== null) {
        let e = setTimeout(() => n.current(), t);
        return () => clearTimeout(e);
      }
    }, [t]));
}
function Lt(e) {
  return (t) => {
    let [n] = G();
    return d(e, { ...t, variant: n.period === `yearly` ? `Yearly` : `Monthly` });
  };
}
var Rt,
  G,
  zt,
  Bt,
  K,
  Vt = t(() => {
    (l(),
      a(),
      at(),
      lt(),
      ft(),
      (Rt = {
        basic_site_yearly_2025: { price: 120, currency: `USD` },
        basic_site_monthly_2025: { price: 15, currency: `USD` },
        pro_site_yearly_2025: { price: 360, currency: `USD` },
        pro_site_monthly_2025: { price: 45, currency: `USD` },
        scale_site_monthly_2025: { price: 120, currency: `USD` },
        scale_site_yearly_2025: { price: 1200, currency: `USD` },
        personal_team_yearly_2025: { price: 240, currency: `USD` },
        personal_team_monthly_2025: { price: 30, currency: `USD` },
        business_team_yearly_2025: { price: 480, currency: `USD` },
        business_team_monthly_2025: { price: 50, currency: `USD` },
        content_editors_yearly_2025: { price: 120, currency: `USD` },
        content_editors_monthly_2025: { price: 15, currency: `USD` },
        locale_yearly_2025: { price: 240, currency: `USD` },
        locale_monthly_2025: { price: 25, currency: `USD` },
        proxy_yearly_2025: { price: 2400, currency: `USD` },
        proxy_monthly_2025: { price: 250, currency: `USD` },
        pages_monthly_2025: { price: 30, currency: `USD` },
        pages_yearly_2025: { price: 240, currency: `USD` },
        bandwidth_monthly_2025: { price: 50, currency: `USD` },
        bandwidth_yearly_2025: { price: 480, currency: `USD` },
        items_monthly_2025: { price: 30, currency: `USD` },
        items_yearly_2025: { price: 240, currency: `USD` },
        collections_monthly_2025: { price: 50, currency: `USD` },
        collections_yearly_2025: { price: 480, currency: `USD` },
        analytics_monthly_2025: { price: 60, currency: `USD` },
        analytics_yearly_2025: { price: 600, currency: `USD` },
        credits_monthly_2025: { price: 0.015, currency: `USD` },
        credits_yearly_2025: { price: 0.12, currency: `USD` },
      }),
      (G = it({
        period: `yearly`,
        hasLocalPrices: !1,
        prices: Rt,
        basicCredits: 1e3,
        proCredits: 3e3,
        basicCreditsSelected: !1,
        proCreditsSelected: !1,
      })),
      (zt = 1e3),
      (Bt = 3e3),
      (K = (e, t = !0, n = void 0) => {
        let [{ prices: r, hasLocalPrices: i, period: a }] = G(),
          o = n ?? a,
          { price: s, currency: c } = r[`${e}_${o}_2025`],
          l = o === `yearly` ? s / 12 : s,
          u = ct(l, c);
        return { price: l, currency: c, formatted: t ? `${u}/mo` : u, show: i };
      }));
  }),
  Ht = e({ __FramerMetadata__: () => tn, default: () => q });
function Ut(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  q,
  tn,
  nn = t(() => {
    (l(),
      j(),
      _(),
      a(),
      Vt(),
      R(),
      (Wt = L(h.div, { nodeId: `sBGnGVQ99`, override: vt, scopeId: `fgShU_YF_` })),
      (Gt = [`sBGnGVQ99`, `frHTNBQJX`]),
      (Kt = `framer-IkbCf`),
      (qt = { frHTNBQJX: `framer-v-11iw1la`, sBGnGVQ99: `framer-v-6yokxy` }),
      (Jt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Yt = (e, t) => `translateY(-50%) ${t}`),
      (Xt = ({ value: e, children: t }) => {
        let n = o(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return d(g.Provider, { value: a, children: t });
      }),
      (Zt = { Off: `sBGnGVQ99`, On: `frHTNBQJX` }),
      (Qt = h.create(s)),
      ($t = ({ height: e, id: t, onToggle: n, width: r, ...i }) => ({
        ...i,
        TXAScM8j5: n ?? i.TXAScM8j5,
        variant: Zt[i.variant] ?? i.variant ?? `sBGnGVQ99`,
      })),
      (en = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = D(
        u(function (e, t) {
          let r = c(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: l } = oe();
          fe();
          let { style: u, className: p, layoutId: m, variant: g, TXAScM8j5: _, ...v } = $t(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: te,
              gestureHandlers: x,
              gestureVariant: re,
              isLoading: ie,
              setGestureState: C,
              setVariant: ae,
              variants: w,
            } = ce({
              cycleOrder: Gt,
              defaultVariant: `sBGnGVQ99`,
              ref: i,
              variant: g,
              variantClassNames: qt,
            }),
            T = en(e, w),
            { activeVariantCallback: D, delay: O } = ne(y),
            k = D(async (...e) => {
              if ((C({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            se = D(async (...e) => {
              ae(`sBGnGVQ99`);
            }),
            A = E(Kt, pe);
          return d(ee, {
            id: m ?? a,
            children: d(Qt, {
              animate: w,
              initial: !1,
              children: d(Xt, {
                value: Jt,
                children: f(Wt, {
                  ...v,
                  ...x,
                  className: E(A, `framer-6yokxy`, p, b),
                  "data-framer-name": `Off`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `sBGnGVQ99`,
                  onTap: k,
                  ref: i,
                  style: { ...u },
                  ...Ut({ frHTNBQJX: { "data-framer-name": `On` } }, y, re),
                  children: [
                    d(S, {
                      __fromCanvasComponent: !0,
                      children: d(s, {
                        children: d(h.p, {
                          className: `framer-styles-preset-rhbxb3`,
                          "data-styles-preset": `vvG68NbwN`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                          },
                          children: `Yearly billing`,
                        }),
                      }),
                      className: `framer-mo30ya`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `VYqG6Yiq7`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    f(h.div, {
                      className: `framer-qragm7`,
                      "data-framer-name": `Pill`,
                      layoutDependency: T,
                      layoutId: `JtE51cle8`,
                      style: {
                        backgroundColor: `rgba(255, 255, 255, 0.1)`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      ...Ut({ frHTNBQJX: { "data-highlight": !0, onTap: se } }, y, re),
                      children: [
                        d(h.div, {
                          className: `framer-1pa6r61`,
                          "data-framer-name": `Blue`,
                          layoutDependency: T,
                          layoutId: `evrEGvvzV`,
                          style: {
                            backgroundColor: `var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))`,
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            boxShadow: `inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)`,
                            opacity: 0,
                          },
                          transformTemplate: Yt,
                          variants: { frHTNBQJX: { boxShadow: `none`, opacity: 1 } },
                          ...Ut({ frHTNBQJX: { transformTemplate: void 0 } }, y, re),
                        }),
                        d(h.div, {
                          className: `framer-1s0280c`,
                          "data-framer-name": `Circle`,
                          layoutDependency: T,
                          layoutId: `d0nvM0tef`,
                          style: {
                            background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.7) 100%)`,
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                            opacity: 0.4,
                          },
                          variants: {
                            frHTNBQJX: {
                              background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
                              backgroundColor: `rgb(255, 255, 255)`,
                              opacity: 1,
                            },
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-IkbCf.framer-vow6jo, .framer-IkbCf .framer-vow6jo { display: block; }`,
          `.framer-IkbCf.framer-6yokxy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-IkbCf .framer-mo30ya { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-IkbCf .framer-qragm7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 20px; }`,
          `.framer-IkbCf .framer-1pa6r61 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; left: 0px; min-height: 14px; overflow: visible; padding: 2px; position: absolute; right: 0px; top: 50%; }`,
          `.framer-IkbCf .framer-1s0280c { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 12px; }`,
          `.framer-IkbCf.framer-v-11iw1la .framer-qragm7 { align-content: flex-end; align-items: flex-end; cursor: pointer; justify-content: flex-end; }`,
          `.framer-IkbCf.framer-v-11iw1la .framer-1pa6r61 { bottom: 0px; height: unset; min-height: unset; top: 0px; }`,
          ...Ce,
        ],
        `framer-IkbCf`
      )),
      (q.displayName = `Yearly Toggle`),
      (q.defaultProps = { height: 18, width: 110 }),
      C(q, {
        variant: {
          options: [`sBGnGVQ99`, `frHTNBQJX`],
          optionTitles: [`Off`, `On`],
          title: `Variant`,
          type: O.Enum,
        },
        TXAScM8j5: { title: `On Toggle`, type: O.EventHandler },
      }),
      x(
        q,
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
          ...k(we),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (tn = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerfgShU_YF_`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `18`,
              framerImmutableVariables: `true`,
              framerResolvesOwnDefaults: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerVariables: `{"TXAScM8j5":"onToggle"}`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"frHTNBQJX":{"layout":["auto","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `110`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  rn = e({ __FramerMetadata__: () => gn, default: () => J });
function an(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  J,
  gn,
  _n = t(() => {
    (l(),
      j(),
      _(),
      a(),
      Ue(),
      R(),
      (on = P(W)),
      (sn = [`M9ntESBng`, `Elzit_lp8`]),
      (cn = `framer-eeWxh`),
      (ln = { Elzit_lp8: `framer-v-mzxpbn`, M9ntESBng: `framer-v-zs1tdi` }),
      (un = { bounce: 0, delay: 0, duration: 0.8, type: `spring` }),
      (dn = ({ value: e, children: t }) => {
        let n = o(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return d(g.Provider, { value: a, children: t });
      }),
      (fn = { Monthly: `Elzit_lp8`, Yearly: `M9ntESBng` }),
      (pn = h.create(s)),
      (mn = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        rr01D6l_K: n ?? i.rr01D6l_K ?? `Free custom domain`,
        variant: fn[i.variant] ?? i.variant ?? `M9ntESBng`,
      })),
      (hn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = D(
        u(function (e, t) {
          let r = c(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, contentLocale: l, setLocale: u } = oe();
          fe();
          let { style: p, className: m, layoutId: g, variant: _, rr01D6l_K: v, ...y } = mn(e),
            {
              baseVariant: b,
              classNames: te,
              clearLoadingGesture: ne,
              gestureHandlers: x,
              gestureVariant: re,
              isLoading: ie,
              setGestureState: C,
              setVariant: ae,
              variants: w,
            } = ce({
              cycleOrder: sn,
              defaultVariant: `M9ntESBng`,
              ref: i,
              variant: _,
              variantClassNames: ln,
            }),
            T = hn(e, w),
            D = E(cn, pe);
          return d(ee, {
            id: g ?? a,
            children: d(pn, {
              animate: w,
              initial: !1,
              children: d(dn, {
                value: un,
                children: f(h.div, {
                  ...y,
                  ...x,
                  className: E(D, `framer-zs1tdi`, m, te),
                  "data-framer-name": `Yearly`,
                  layoutDependency: T,
                  layoutId: `M9ntESBng`,
                  ref: i,
                  style: { opacity: 1, ...p },
                  variants: { Elzit_lp8: { opacity: 0.3 } },
                  ...an({ Elzit_lp8: { "data-framer-name": `Monthly` } }, b, re),
                  children: [
                    d(W, {
                      animated: !0,
                      className: `framer-1dqbr76`,
                      layoutDependency: T,
                      layoutId: `vkj_KWp5Z`,
                      style: {
                        "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                        "--1iwhep7": 2.5,
                        "--1l3yetw": `rgb(102, 102, 102)`,
                      },
                    }),
                    d(S, {
                      __fromCanvasComponent: !0,
                      children: d(s, {
                        children: d(h.p, {
                          className: `framer-styles-preset-rhbxb3`,
                          "data-styles-preset": `vvG68NbwN`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                          },
                          children: `Free custom domain`,
                        }),
                      }),
                      className: `framer-1y8ct6d`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `r9pDbFg9Z`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                      },
                      text: v,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-eeWxh.framer-djkfh2, .framer-eeWxh .framer-djkfh2 { display: block; }`,
          `.framer-eeWxh.framer-zs1tdi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 264px; }`,
          `.framer-eeWxh .framer-1dqbr76 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 12px; }`,
          `.framer-eeWxh .framer-1y8ct6d { flex: 1 0 0px; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...Ce,
        ],
        `framer-eeWxh`
      )),
      (J.displayName = `Pricing/Free Domain`),
      (J.defaultProps = { height: 19.5, width: 263.5 }),
      C(J, {
        variant: {
          options: [`M9ntESBng`, `Elzit_lp8`],
          optionTitles: [`Yearly`, `Monthly`],
          title: `Variant`,
          type: O.Enum,
        },
        rr01D6l_K: {
          defaultValue: `Free custom domain`,
          displayTextArea: !1,
          title: `Title`,
          type: O.String,
        },
        onrr01D6l_KChange: { changes: `rr01D6l_K`, type: O.ChangeHandler },
      }),
      x(
        J,
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
          ...on,
          ...k(we),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (gn = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerimoMIJYRd`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `19.5`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `263.5`,
              framerColorSyntax: `true`,
              framerResolvesOwnDefaults: `true`,
              framerVariables: `{"rr01D6l_K":"title"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Elzit_lp8":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  vn,
  yn,
  bn,
  xn = t(() => {
    (j(),
      v.loadFonts([]),
      (vn = [{ explicitInter: !0, fonts: [] }]),
      (yn = [
        `.framer-8TBJl .framer-styles-preset-1mts12p:not(.rich-text-wrapper), .framer-8TBJl .framer-styles-preset-1mts12p.rich-text-wrapper a { --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #ffffff; --framer-link-hover-text-decoration: none; --framer-link-text-color: rgba(255, 255, 255, 0.8); --framer-link-text-decoration: none; }`,
      ]),
      (bn = `framer-8TBJl`));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  X,
  Zn = t(() => {
    (l(),
      j(),
      _(),
      a(),
      Ue(),
      ke(),
      Vt(),
      Qe(),
      xn(),
      he(),
      We(),
      Fe(),
      V(),
      R(),
      ze(),
      Ae(),
      (Sn = L(S, { nodeId: `sgF_dNeE9`, override: Ct, scopeId: `kENGTSB2T` })),
      (Cn = L(S, { nodeId: `P3E4g6bAx`, override: wt, scopeId: `kENGTSB2T` })),
      (wn = L(S, { nodeId: `BfXh9uoPR`, override: Ct, scopeId: `kENGTSB2T` })),
      (Tn = L(S, { nodeId: `nKpZL89Ww`, override: wt, scopeId: `kENGTSB2T` })),
      (En = P(W)),
      (Dn = L(S, { nodeId: `cDvn5thmT`, override: jt, scopeId: `kENGTSB2T` })),
      (On = L(S, { nodeId: `xsKaCjNTK`, override: Pt, scopeId: `kENGTSB2T` })),
      (kn = L(S, { nodeId: `zMRar6yfb`, override: Mt, scopeId: `kENGTSB2T` })),
      (An = L(S, { nodeId: `KDW1rO0D3`, override: Nt, scopeId: `kENGTSB2T` })),
      (jn = P(H)),
      (Mn = L(S, { nodeId: `FnlS05ISt`, override: Dt, scopeId: `kENGTSB2T` })),
      (Nn = L(S, { nodeId: `a9JssBylZ`, override: Dt, scopeId: `kENGTSB2T` })),
      (Pn = L(S, { nodeId: `hw8xPpQM3`, override: Ot, scopeId: `kENGTSB2T` })),
      (Fn = L(S, { nodeId: `b_HqQ7uF4`, override: Ot, scopeId: `kENGTSB2T` })),
      (In = L(S, { nodeId: `b8hdUgZmd`, override: kt, scopeId: `kENGTSB2T` })),
      (Ln = L(S, { nodeId: `BXEg6pcYs`, override: kt, scopeId: `kENGTSB2T` })),
      (Rn = L(S, { nodeId: `LCb3sjMln`, override: Ft, scopeId: `kENGTSB2T` })),
      (zn = L(S, { nodeId: `RgCJkrlDT`, override: At, scopeId: `kENGTSB2T` })),
      (Bn = P(U)),
      (Vn = [`rGoyM38U4`, `I069pG6Q0`, `CTWaV0Yxu`, `ylgTEEfD6`]),
      (Hn = `framer-2FTwm`),
      (Un = {
        CTWaV0Yxu: `framer-v-1vgq0uq`,
        I069pG6Q0: `framer-v-lu7022`,
        rGoyM38U4: `framer-v-6hitl8`,
        ylgTEEfD6: `framer-v-1c4e6x7`,
      }),
      (Wn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Gn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kn = ({ value: e, children: t }) => {
        let n = o(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return d(g.Provider, { value: a, children: t });
      }),
      (qn = {
        "mobile-basic": `I069pG6Q0`,
        "mobile-pro": `CTWaV0Yxu`,
        "mobile-scale": `ylgTEEfD6`,
        "Variant 1": `rGoyM38U4`,
      }),
      (Jn = h.create(s)),
      (Yn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: qn[r.variant] ?? r.variant ?? `rGoyM38U4`,
      })),
      (Xn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = D(
        u(function (e, t) {
          let r = c(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, contentLocale: l, setLocale: u } = oe(),
            p = fe(),
            { style: m, className: g, layoutId: _, variant: v, ...y } = Yn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: re,
              gestureHandlers: ie,
              gestureVariant: C,
              isLoading: ae,
              setGestureState: w,
              setVariant: D,
              variants: O,
            } = ce({
              cycleOrder: Vn,
              defaultVariant: `rGoyM38U4`,
              ref: i,
              variant: v,
              variantClassNames: Un,
            }),
            k = Xn(e, O),
            se = E(Hn, tt, pe, qe, He, ge, xe, Re, bn),
            A = () => !![`I069pG6Q0`, `CTWaV0Yxu`, `ylgTEEfD6`].includes(b),
            { activeVariantCallback: j, delay: M } = ne(b),
            P = j(async (...e) => {
              D(`I069pG6Q0`);
            }),
            F = j(async (...e) => {
              D(`CTWaV0Yxu`);
            }),
            I = j(async (...e) => {
              D(`ylgTEEfD6`);
            }),
            L = () => b === `I069pG6Q0`,
            ue = () => b === `CTWaV0Yxu`,
            me = () => b === `ylgTEEfD6`,
            R = () => ![`I069pG6Q0`, `CTWaV0Yxu`, `ylgTEEfD6`].includes(b),
            z = () => ![`CTWaV0Yxu`, `ylgTEEfD6`].includes(b),
            B = () => ![`I069pG6Q0`, `ylgTEEfD6`].includes(b),
            V = () => ![`I069pG6Q0`, `CTWaV0Yxu`].includes(b),
            he = () => b !== `ylgTEEfD6`;
          return (
            le(),
            d(ee, {
              id: _ ?? a,
              children: d(Jn, {
                animate: O,
                initial: !1,
                children: d(Kn, {
                  value: Wn,
                  children: f(h.div, {
                    ...y,
                    ...ie,
                    className: E(se, `framer-6hitl8`, g, x),
                    "data-framer-name": `Variant 1`,
                    layoutDependency: k,
                    layoutId: `rGoyM38U4`,
                    ref: i,
                    style: {
                      backgroundColor: `rgb(0, 0, 0)`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      ...m,
                    },
                    ...Y(
                      {
                        CTWaV0Yxu: { "data-framer-name": `mobile-pro` },
                        I069pG6Q0: { "data-framer-name": `mobile-basic` },
                        ylgTEEfD6: { "data-framer-name": `mobile-scale` },
                      },
                      b,
                      C
                    ),
                    children: [
                      d(h.div, {
                        className: `framer-lmeph9`,
                        layoutDependency: k,
                        layoutId: `HbyPtaXN8`,
                        style: { backgroundColor: `rgb(0, 0, 0)` },
                        children: f(h.div, {
                          className: `framer-1uw6olt`,
                          "data-border": !0,
                          "data-framer-name": `sticky-header`,
                          layoutDependency: k,
                          layoutId: `gyuUDDhzO`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `rgba(0, 0, 0, 0.8)`,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          },
                          children: [
                            A() &&
                              f(h.div, {
                                className: `framer-1yaz571`,
                                "data-framer-name": `header-mobile`,
                                layoutDependency: k,
                                layoutId: `BA3jk58V4`,
                                children: [
                                  A() &&
                                    d(h.div, {
                                      className: `framer-196yy67`,
                                      layoutDependency: k,
                                      layoutId: `e45IWS30h`,
                                      ...Y(
                                        {
                                          CTWaV0Yxu: { "data-highlight": !0, onTap: P },
                                          ylgTEEfD6: { "data-highlight": !0, onTap: P },
                                        },
                                        b,
                                        C
                                      ),
                                      children: d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(h.p, {
                                            className: `framer-styles-preset-h8ll8p`,
                                            "data-styles-preset": `BST5CE1TC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                            },
                                            children: `Basic`,
                                          }),
                                        }),
                                        className: `framer-19sfd3j`,
                                        "data-highlight": !0,
                                        fonts: [`Inter`],
                                        layoutDependency: k,
                                        layoutId: `U6yqpWWrn`,
                                        onTap: P,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          opacity: 1,
                                        },
                                        variants: {
                                          CTWaV0Yxu: { opacity: 0.3 },
                                          ylgTEEfD6: { opacity: 0.3 },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            I069pG6Q0: { "data-highlight": void 0, onTap: void 0 },
                                          },
                                          b,
                                          C
                                        ),
                                      }),
                                    }),
                                  A() &&
                                    d(h.div, {
                                      className: `framer-3xk5ao`,
                                      layoutDependency: k,
                                      layoutId: `U8zsRvrZs`,
                                      ...Y(
                                        {
                                          I069pG6Q0: { "data-highlight": !0, onTap: F },
                                          ylgTEEfD6: { "data-highlight": !0, onTap: F },
                                        },
                                        b,
                                        C
                                      ),
                                      children: d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(h.p, {
                                            className: `framer-styles-preset-h8ll8p`,
                                            "data-styles-preset": `BST5CE1TC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                            },
                                            children: `Pro`,
                                          }),
                                        }),
                                        className: `framer-14uhhie`,
                                        fonts: [`Inter`],
                                        layoutDependency: k,
                                        layoutId: `DD7T3CCda`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          opacity: 0.3,
                                        },
                                        variants: { CTWaV0Yxu: { opacity: 1 } },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            I069pG6Q0: { "data-highlight": !0, onTap: F },
                                            ylgTEEfD6: { "data-highlight": !0, onTap: F },
                                          },
                                          b,
                                          C
                                        ),
                                      }),
                                    }),
                                  A() &&
                                    d(h.div, {
                                      className: `framer-8dybbi`,
                                      layoutDependency: k,
                                      layoutId: `gaNSzxmQF`,
                                      ...Y(
                                        {
                                          CTWaV0Yxu: { "data-highlight": !0, onTap: I },
                                          I069pG6Q0: { "data-highlight": !0, onTap: I },
                                        },
                                        b,
                                        C
                                      ),
                                      children: d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(h.p, {
                                            className: `framer-styles-preset-h8ll8p`,
                                            "data-styles-preset": `BST5CE1TC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scale`,
                                          }),
                                        }),
                                        className: `framer-rqzcmb`,
                                        fonts: [`Inter`],
                                        layoutDependency: k,
                                        layoutId: `b7R7os__E`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          opacity: 0.3,
                                        },
                                        variants: { ylgTEEfD6: { opacity: 1 } },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            CTWaV0Yxu: {
                                              "data-highlight": !0,
                                              children: d(s, {
                                                children: d(h.p, {
                                                  className: `framer-styles-preset-h8ll8p`,
                                                  "data-styles-preset": `BST5CE1TC`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                                  },
                                                  children: `Enterprise`,
                                                }),
                                              }),
                                              onTap: I,
                                            },
                                            I069pG6Q0: {
                                              "data-highlight": !0,
                                              children: d(s, {
                                                children: d(h.p, {
                                                  className: `framer-styles-preset-h8ll8p`,
                                                  "data-styles-preset": `BST5CE1TC`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                                  },
                                                  children: `Enterprise`,
                                                }),
                                              }),
                                              onTap: I,
                                            },
                                            ylgTEEfD6: {
                                              children: d(s, {
                                                children: d(h.p, {
                                                  className: `framer-styles-preset-h8ll8p`,
                                                  "data-styles-preset": `BST5CE1TC`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                                  },
                                                  children: `Enterprise`,
                                                }),
                                              }),
                                            },
                                          },
                                          b,
                                          C
                                        ),
                                      }),
                                    }),
                                  L() &&
                                    d(h.div, {
                                      className: `framer-it8ow4`,
                                      layoutDependency: k,
                                      layoutId: `ACWfG1O2n`,
                                      children: d(Sn, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(h.p, {
                                            className: `framer-styles-preset-h8ll8p`,
                                            "data-styles-preset": `BST5CE1TC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `right`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                            },
                                            children: `$10`,
                                          }),
                                        }),
                                        className: `framer-6nogdz`,
                                        fonts: [`Inter`],
                                        layoutDependency: k,
                                        layoutId: `sgF_dNeE9`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ue() &&
                                    d(h.div, {
                                      className: `framer-z5482c`,
                                      layoutDependency: k,
                                      layoutId: `IJd5dvaVC`,
                                      children:
                                        ue() &&
                                        d(Cn, {
                                          __fromCanvasComponent: !0,
                                          children: d(s, {
                                            children: d(h.p, {
                                              className: `framer-styles-preset-h8ll8p`,
                                              "data-styles-preset": `BST5CE1TC`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `right`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                              },
                                              children: `$30`,
                                            }),
                                          }),
                                          className: `framer-5r62qj`,
                                          fonts: [`Inter`],
                                          layoutDependency: k,
                                          layoutId: `P3E4g6bAx`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                    }),
                                  me() &&
                                    d(h.div, {
                                      className: `framer-1eoqabm`,
                                      layoutDependency: k,
                                      layoutId: `dy469S7Y0`,
                                      children:
                                        me() &&
                                        d(S, {
                                          __fromCanvasComponent: !0,
                                          children: d(s, {
                                            children: d(h.p, {
                                              className: `framer-styles-preset-h8ll8p`,
                                              "data-styles-preset": `BST5CE1TC`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `right`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                              },
                                              children: `Custom`,
                                            }),
                                          }),
                                          className: `framer-1setdh`,
                                          fonts: [`Inter`],
                                          layoutDependency: k,
                                          layoutId: `BctycSPEx`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                    }),
                                ],
                              }),
                            R() &&
                              d(h.div, {
                                className: `framer-yz58sn`,
                                "data-border": !0,
                                "data-framer-name": `Spacer`,
                                layoutDependency: k,
                                layoutId: `TINmXykpB`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                },
                              }),
                            R() &&
                              f(h.div, {
                                className: `framer-16lp5i0`,
                                "data-border": !0,
                                layoutDependency: k,
                                layoutId: `HHi6dk8xP`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                },
                                children: [
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                        },
                                        children: `Basic`,
                                      }),
                                    }),
                                    className: `framer-1gumj0m`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `M8XSCPUZA`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(wn, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                        },
                                        children: `$10`,
                                      }),
                                    }),
                                    className: `framer-1580zzc`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `BfXh9uoPR`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            R() &&
                              f(h.div, {
                                className: `framer-1gpy417`,
                                "data-border": !0,
                                layoutDependency: k,
                                layoutId: `C_k6_nYzh`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                },
                                children: [
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                        },
                                        children: `Pro`,
                                      }),
                                    }),
                                    className: `framer-919orm`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `LP3QB9RGK`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(Tn, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                        },
                                        children: `$30`,
                                      }),
                                    }),
                                    className: `framer-1wa56tb`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `nKpZL89Ww`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            R() &&
                              f(h.div, {
                                className: `framer-1vawq74`,
                                "data-border": !0,
                                layoutDependency: k,
                                layoutId: `YwYWBF55o`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `0px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                },
                                children: [
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                        },
                                        children: `Enterprise`,
                                      }),
                                    }),
                                    className: `framer-xzndxn`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `QvxEzhryp`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                        },
                                        children: `Custom`,
                                      }),
                                    }),
                                    className: `framer-13lp8vm`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `Uvv62QTYQ`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      f(h.div, {
                        className: `framer-1t5qjt`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `qtNqxGa9D`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-coxzvo`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `sWWAbgrSY`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom domain`,
                                  }),
                                }),
                                className: `framer-igt61b`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `uXxJxy5zA`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Connect your own domain to your website`,
                                    }),
                                  }),
                                }),
                                className: `framer-fg2nou`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `a2ZzmALGI`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            f(h.div, {
                              className: `framer-1gnrbtl`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `uS8PAgG9b`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(W, {
                                  animated: !0,
                                  className: `framer-11060yb`,
                                  layoutDependency: k,
                                  layoutId: `nk64Vt98D`,
                                  style: {
                                    "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                    "--1iwhep7": 2,
                                    "--1l3yetw": `rgb(255, 255, 255)`,
                                  },
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: f(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: [
                                        d(T, {
                                          href: { webPageId: `SJV9KNuUW` },
                                          motionChild: !0,
                                          nodeId: `QJeU52HA1`,
                                          openInNewTab: !1,
                                          preserveParams: !1,
                                          relValues: [],
                                          scopeId: `kENGTSB2T`,
                                          smoothScroll: !1,
                                          children: d(h.a, {
                                            className: `framer-styles-preset-17uz1e6`,
                                            "data-styles-preset": `lauDPxbHX`,
                                            children: `Complimentary domain`,
                                          }),
                                        }),
                                        ` included on yearly`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-ygv760`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `QJeU52HA1`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-4m5pwf`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `CYygPN6YA`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(W, {
                                  animated: !0,
                                  className: `framer-1otmqwi`,
                                  layoutDependency: k,
                                  layoutId: `Gie4ob1me`,
                                  style: {
                                    "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                    "--1iwhep7": 2,
                                    "--1l3yetw": `rgb(255, 255, 255)`,
                                  },
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: f(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: [
                                        d(T, {
                                          href: { webPageId: `SJV9KNuUW` },
                                          motionChild: !0,
                                          nodeId: `MWIPcjHcY`,
                                          openInNewTab: !1,
                                          preserveParams: !1,
                                          relValues: [],
                                          scopeId: `kENGTSB2T`,
                                          smoothScroll: !1,
                                          children: d(h.a, {
                                            className: `framer-styles-preset-17uz1e6`,
                                            "data-styles-preset": `lauDPxbHX`,
                                            children: `Complimentary domain`,
                                          }),
                                        }),
                                        ` included on yearly`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-11sqcz6`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `MWIPcjHcY`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-up00en`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `jjRfydZkd`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-1gbn6o9`,
                                layoutDependency: k,
                                layoutId: `CzYBqxesR`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-cynuoh`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `NIJFqyMbM`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-bj0lhr`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `mm_Vn0oGB`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Limits`,
                                  }),
                                }),
                                className: `framer-157sn28`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `caShwqvbl`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Scale with usage`,
                                  }),
                                }),
                                className: `framer-r9yihd`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `EUJ6Avser`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1gn2ofa`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `ZLoBVcxDL`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Fixed`,
                                  }),
                                }),
                                className: `framer-1st82kz`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `QjtL6XgMJ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-1idfw2w`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `zRrXRcEdh`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `Flexible`,
                                    }),
                                  }),
                                  className: `framer-k0k9ao`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `n0Ckq4UzT`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `pay what you use`,
                                    }),
                                  }),
                                  className: `framer-1pl9jwz`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `KUFicZRxq`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-9fvx3z`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `DULa8GeCA`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-logbd5`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `rLCAI4LRM`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1pc6fie`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `CekSCNewJ`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-1r0s55e`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `R5W2bbkzS`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Site pages`,
                                  }),
                                }),
                                className: `framer-1b0cntz`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `lqgskA7de`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Create custom designed pages`,
                                  }),
                                }),
                                className: `framer-domagg`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `kn7aBK1yb`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-dnf6zk`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `p1XW9ohAa`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `30`,
                                  }),
                                }),
                                className: `framer-106gtsr`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `I7nIXtgKJ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-1jjb86r`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `SMhxrOsVB`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `150`,
                                    }),
                                  }),
                                  className: `framer-15iu673`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `dx59rFGBV`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(Dn, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `then $20 per 100 (700 max)`,
                                    }),
                                  }),
                                  className: `framer-f3jlm3`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `cDvn5thmT`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-b4z4h`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `v3lfIVPcS`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-l3zfh`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Do60OfrLN`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-gdmp8e`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `WjB6Sm7Or`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-v3hcq2`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `c3QGBQZDI`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `CMS collections`,
                                  }),
                                }),
                                className: `framer-wc8r8s`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `vDF1LNtAM`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Store content in CMS collections`,
                                    }),
                                  }),
                                }),
                                className: `framer-ugf3l4`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `dxWVcDd4W`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-89ktxt`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `P2TFDCqmL`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `2`,
                                  }),
                                }),
                                className: `framer-61v2a3`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `bzonDQC2j`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-1u3l3ie`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Cj1quDm49`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `10`,
                                    }),
                                  }),
                                  className: `framer-11webwn`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `KtWutqaKw`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(On, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `then $20 per 10 (40 max)`,
                                    }),
                                  }),
                                  className: `framer-168u5yu`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `xsKaCjNTK`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-2swxpv`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Qijdl44jm`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-1y8jh01`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `lOv299rcs`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1n2n2mi`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `BKlhDnTfL`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-e5hae7`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `ZnIyfVxF5`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `CMS items`,
                                  }),
                                }),
                                className: `framer-tmp0vb`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `ojh5g7jUW`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Add CMS items to your collections`,
                                    }),
                                  }),
                                }),
                                className: `framer-1mqmumm`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `wqIkGPcSq`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-ytztgb`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `MnI0wF5z4`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `1,000`,
                                  }),
                                }),
                                className: `framer-48k5wx`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `GvhJ6RfS1`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-iyxlld`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `t9bhqdzIi`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `2,500`,
                                    }),
                                  }),
                                  className: `framer-2pkbku`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `zFa_F3zqk`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(kn, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `then $40 per 10,000 (40,000 max)`,
                                    }),
                                  }),
                                  className: `framer-scbirw`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `zMRar6yfb`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1wbdbzu`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `bNm6N9bky`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-1jdiuyt`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `hXgy6hsHO`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-evja0q`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `SCN9brQeu`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-oosoq9`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `UXgjszQ99`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Bandwidth usage`,
                                  }),
                                }),
                                className: `framer-12xtkmf`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `qxxOYVkFe`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Monthly bandwidth with overage alerts`,
                                    }),
                                  }),
                                }),
                                className: `framer-d8aem5`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `qebMk1kBq`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-vhp8ab`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `J9cyNtp2S`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `50 GB`,
                                  }),
                                }),
                                className: `framer-1ilby82`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `idltkKrnS`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-1c7uhmw`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `e7D8yR_nK`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `100 GB`,
                                    }),
                                  }),
                                  className: `framer-1j8c08`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `S8Odp880A`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(An, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `then $40 per 100 GB (2 TB max)`,
                                    }),
                                  }),
                                  className: `framer-1cec8vu`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `KDW1rO0D3`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1fuola7`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `z6HtzPqEy`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-rn5dox`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `N3u6TdGxO`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1bt32hh`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `DTlgiMZV0`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-1vqa1em`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `PJw2tJ9VN`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Hosting`,
                                  }),
                                }),
                                className: `framer-2kv4fw`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Apiekbbdx`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Global content delivery network for speed`,
                                  }),
                                }),
                                className: `framer-18ticyi`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `kSrMuR4CM`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-14yovli`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `UASMfX0Lp`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `20 locations`,
                                  }),
                                }),
                                className: `framer-ml52dy`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `r8mAvlnUs`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-m56kct`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `jRmVZPYrm`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `300+ locations`,
                                  }),
                                }),
                                className: `framer-d6tdfr`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `bhz1bJDii`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1f3f2p6`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `KAbVuIxFX`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `All available locations`,
                                  }),
                                }),
                                className: `framer-110nj4i`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `T4wTvy6Ie`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-57klxa`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `Rxwv31PZh`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-u5yh0x`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `o2JtW9KiC`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Analytics history`,
                                  }),
                                }),
                                className: `framer-1d04zsi`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `yd4lHx36M`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `View and analyze your site’s audience`,
                                  }),
                                }),
                                className: `framer-8f92zh`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `MSRZW7Dpw`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-cv5k73`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `flkywxV7F`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `30 days`,
                                  }),
                                }),
                                className: `framer-u1c9es`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `TpkFv2kLv`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-58i35j`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `tj1DARrdU`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `90 days`,
                                  }),
                                }),
                                className: `framer-jl38lu`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `eWGocafTo`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1mbif8h`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `bKPH6FZSa`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Unlimited`,
                                  }),
                                }),
                                className: `framer-6fhpq6`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `v8xnUECnv`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1sif1hr`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `T8UjRKsRr`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-1uk5eq3`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `U04gak3iU`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Password protect`,
                                  }),
                                }),
                                className: `framer-ckn3mk`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `ODlWJ5Cr0`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Protect your site with a password`,
                                  }),
                                }),
                                className: `framer-1qp939v`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Xsj6wv_Tv`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1j6j3zy`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `AQach_KQ2`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-uv0py3`,
                                layoutDependency: k,
                                layoutId: `rlSu2_hl5`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-16serug`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Wj7AdahdH`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-x2l6sc`,
                                layoutDependency: k,
                                layoutId: `igq9vuwvd`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1kwiro2`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `w7ISbSQ71`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-jrquoq`,
                                layoutDependency: k,
                                layoutId: `FyeVzFZZ7`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-19tk44p`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `mFiz11Kfn`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-ljzl25`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `IkhgXywXb`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Site search`,
                                  }),
                                }),
                                className: `framer-1xj0t9n`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `UJTTIamG5`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Find anything on your site instantly`,
                                    }),
                                  }),
                                }),
                                className: `framer-e4khnm`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `P_raK2jv2`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-m7kmgl`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `DADZdHclw`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-9wljvf`,
                                layoutDependency: k,
                                layoutId: `N717eqOYP`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-10302my`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `gEXYfleiq`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-c54pif`,
                                layoutDependency: k,
                                layoutId: `HS1hICuAi`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1p0wk5a`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `h4vDtKPN8`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-11o9zlg`,
                                layoutDependency: k,
                                layoutId: `gi8GdNMPE`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-l2s4cr`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `ih3UBFEet`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-1alv0dk`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `Ctm1UAx57`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Site redirects`,
                                  }),
                                }),
                                className: `framer-12atnt3`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `IId3wxBW8`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Add redirects to maintain search engine rankings`,
                                    }),
                                  }),
                                }),
                                className: `framer-5vmwzp`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `OS8LujpWV`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-iu9q6`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `dfX7UvfYR`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-1e1ovkz`,
                                layoutDependency: k,
                                layoutId: `DKzviM3lz`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1s455cu`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `tnyDrmmWS`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-wnxaxu`,
                                layoutDependency: k,
                                layoutId: `HYru3CYFm`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-g8ifn0`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `b1AzAXLEQ`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-3qiu9t`,
                                layoutDependency: k,
                                layoutId: `FzCpxrWaU`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-10n228y`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `S6h2_7hjA`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-hqpj7j`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `HFEQZSrYT`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Static files`,
                                  }),
                                }),
                                className: `framer-q6opwr`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `lQhVPsoJv`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Host .well-known or other static files on your site`,
                                    }),
                                  }),
                                }),
                                className: `framer-1owain7`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `nkxuLnwGs`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-h8bseo`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `HQ1v8dD_q`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-1heatz3`,
                                layoutDependency: k,
                                layoutId: `YGKeedPsY`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1sefuj2`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Rb6SpkZe8`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `50`,
                                  }),
                                }),
                                className: `framer-1xcx8ay`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `MkLEFBh7M`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-t8tebk`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `lbFtW0TFo`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-pox08k`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `LsSFc2rXS`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1j3mtdx`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `aEXnZQeS6`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-usfpf5`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `ZSQUM75Vv`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Branching`,
                                  }),
                                }),
                                className: `framer-m5k019`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `pWWGRGg9Z`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Explore changes and share previews`,
                                    }),
                                  }),
                                }),
                                className: `framer-1ypovql`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `atvasoaPd`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-hc3lw4`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `HMsFKRj57`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-zq53wm`,
                                layoutDependency: k,
                                layoutId: `JNg7FcHsW`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-44wckv`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `quggvTF7A`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-19lngy1`,
                                layoutDependency: k,
                                layoutId: `kxyX6y3vq`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-13oc9kd`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `FefNSp3nE`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-12s2g1o`,
                                layoutDependency: k,
                                layoutId: `cMZHPLveE`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-de1kii`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `zitxnr4R4`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-1nflthg`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `yf3A6yfjP`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Staging environment`,
                                  }),
                                }),
                                className: `framer-1lej9zt`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `VQs63HVB1`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Test changes in staging before publishing`,
                                    }),
                                  }),
                                }),
                                className: `framer-10uiogj`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `XhaVD8DK3`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-17mxdmk`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `TEfWyIOKd`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-bkvcsc`,
                                layoutDependency: k,
                                layoutId: `SN9ZLN72K`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1ccmm5z`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `eBF9H8Jvi`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-11fy9sx`,
                                layoutDependency: k,
                                layoutId: `AkImyJYcP`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1swi738`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `hmwUHkVZ_`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-gzfeqi`,
                                layoutDependency: k,
                                layoutId: `dDYkO79ox`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-lglstm`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `cPxVn1ySe`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        children: [
                          d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: d(h.h5, {
                                className: `framer-styles-preset-yovuob`,
                                "data-styles-preset": `wVtX8xMgR`,
                                dir: `auto`,
                                children: `Agents`,
                              }),
                            }),
                            className: `framer-mxp0i8`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `R2pdX67dY`,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                CTWaV0Yxu: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Agents`,
                                    }),
                                  }),
                                },
                                I069pG6Q0: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Agents`,
                                    }),
                                  }),
                                },
                                ylgTEEfD6: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Agents`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              C
                            ),
                          }),
                          d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: d(h.p, {
                                className: `framer-styles-preset-vn6u90`,
                                "data-styles-preset": `kuibWYBoM`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                },
                                children: `Unlock extreme productivity with agents in Framer.`,
                              }),
                            }),
                            className: `framer-2z3va4`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `i2SSPhBQ_`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                            },
                            verticalAlignment: `bottom`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                CTWaV0Yxu: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Unlock extreme productivity with agents in Framer.`,
                                    }),
                                  }),
                                },
                                I069pG6Q0: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Unlock extreme productivity with agents in Framer.`,
                                    }),
                                  }),
                                },
                                ylgTEEfD6: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Unlock extreme productivity with agents in Framer.`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              C
                            ),
                          }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-qgqueb`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `p_EyDu1ky`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-at29l8`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `ORKLNRybr`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Credits`,
                                  }),
                                }),
                                className: `framer-wfz84a`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `inznxJ6MM`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Agents and other AI features consume credits `,
                                  }),
                                }),
                                className: `framer-6ke9j6`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `AOtvnsu0s`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            f(h.div, {
                              className: `framer-6tiwfz`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `XdqLnOplN`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `1,000 per month`,
                                    }),
                                  }),
                                  className: `framer-o34n7y`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `Bur5ifZlW`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `add credits anytime`,
                                    }),
                                  }),
                                  className: `framer-15qng7`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `d7r3ltdr9`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-jiirgt`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `sqxryCSvG`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `3,000 per month`,
                                    }),
                                  }),
                                  className: `framer-1ojplj2`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `R1NxqD9rY`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `add credits anytime`,
                                    }),
                                  }),
                                  className: `framer-3atj5k`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `z5z_7OrRD`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-12ieucn`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `sJxLQPUw5`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-8vctho`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Tlc7mo2Vr`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1nsw5zq`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `BCbZpeNmj`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-107q7v0`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `wXAaff3Tj`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              f(h.div, {
                                className: `framer-126dh73`,
                                layoutDependency: k,
                                layoutId: `igJiuiP1u`,
                                children: [
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-rhbxb3`,
                                        "data-styles-preset": `vvG68NbwN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                        },
                                        children: `External agents`,
                                      }),
                                    }),
                                    className: `framer-6n0nly`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `vyOJcSL8f`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(h.div, {
                                    className: `framer-bnf21d`,
                                    "data-framer-name": `Badge`,
                                    layoutDependency: k,
                                    layoutId: `a5V_KGaPP`,
                                    style: {
                                      backgroundColor: `rgba(136, 136, 136, 0.15)`,
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    },
                                    children: d(S, {
                                      __fromCanvasComponent: !0,
                                      children: d(s, {
                                        children: d(h.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                            "--framer-font-size": `10px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.02em`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(136, 136, 136))`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `PREVIEW`,
                                        }),
                                      }),
                                      className: `framer-1ygg3t2`,
                                      fonts: [`Inter-SemiBold`],
                                      layoutDependency: k,
                                      layoutId: `xqg_eEmVn`,
                                      style: {
                                        "--extracted-r6o4lv": `rgb(136, 136, 136)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Y(
                                        {
                                          CTWaV0Yxu: {
                                            children: d(s, {
                                              children: d(h.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                                  "--framer-font-size": `8px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-letter-spacing": `0.02em`,
                                                  "--framer-line-height": `1.1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(136, 136, 136))`,
                                                  "--framer-text-transform": `uppercase`,
                                                },
                                                children: `PREVIEW`,
                                              }),
                                            }),
                                          },
                                          I069pG6Q0: {
                                            children: d(s, {
                                              children: d(h.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                                  "--framer-font-size": `8px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-letter-spacing": `0.02em`,
                                                  "--framer-line-height": `1.1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(136, 136, 136))`,
                                                  "--framer-text-transform": `uppercase`,
                                                },
                                                children: `PREVIEW`,
                                              }),
                                            }),
                                          },
                                          ylgTEEfD6: {
                                            children: d(s, {
                                              children: d(h.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                                  "--framer-font-size": `8px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-letter-spacing": `0.02em`,
                                                  "--framer-line-height": `1.1em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(136, 136, 136))`,
                                                  "--framer-text-transform": `uppercase`,
                                                },
                                                children: `PREVIEW`,
                                              }),
                                            }),
                                          },
                                        },
                                        b,
                                        C
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Connect your own tools with Framer`,
                                  }),
                                }),
                                className: `framer-gnoexx`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `cL1O4Kanx`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            f(h.div, {
                              className: `framer-o1s1me`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `cXCiOnn_h`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `Free`,
                                    }),
                                  }),
                                  className: `framer-7qj4pf`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `ERLb9FEPe`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `during preview`,
                                    }),
                                  }),
                                  className: `framer-1j3h8tw`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `rYRz2jsgW`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-5v5zf2`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `X4ruYGTxt`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `Free`,
                                    }),
                                  }),
                                  className: `framer-2e8y7n`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `q1H2MLatd`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `during preview`,
                                    }),
                                  }),
                                  className: `framer-4xcxxr`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `cHz5GAZFU`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1gu2dfd`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `f5hiXw_ZG`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-12bzt9z`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `FZqC5L5pT`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      he() &&
                        d(h.div, {
                          className: `framer-1sl10ff`,
                          "data-border": !0,
                          layoutDependency: k,
                          layoutId: `ZD6gYfnEi`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(29, 29, 29))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: f(h.p, {
                                className: `framer-styles-preset-rhbxb3`,
                                "data-styles-preset": `vvG68NbwN`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3))`,
                                },
                                children: [
                                  d(T, {
                                    href: { webPageId: `eWRl9K77C` },
                                    motionChild: !0,
                                    nodeId: `h2aFSjftb`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `kENGTSB2T`,
                                    smoothScroll: !1,
                                    children: d(h.a, {
                                      className: `framer-styles-preset-8rmpkv`,
                                      "data-styles-preset": `uT_bT0pMG`,
                                      children: d(h.span, {
                                        style: {
                                          "--framer-text-color": `var(--extracted-hl0iuy, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8))`,
                                        },
                                        children: d(h.strong, { children: `Pro Experts` }),
                                      }),
                                    }),
                                  }),
                                  d(h.strong, { children: ` save ` }),
                                  d(h.span, {
                                    style: {
                                      "--framer-text-color": `var(--extracted-c9yw3e, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4))`,
                                    },
                                    children: d(h.strong, { children: `50%` }),
                                  }),
                                  d(h.strong, { children: ` on agent credits.` }),
                                ],
                              }),
                            }),
                            className: `framer-29zg0d`,
                            fonts: [`Inter`, `Inter-Bold`],
                            layoutDependency: k,
                            layoutId: `h2aFSjftb`,
                            style: {
                              "--extracted-c9yw3e": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                              "--extracted-hl0iuy": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8)`,
                              "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3)`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      f(h.div, {
                        className: `framer-17gduc8`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `YXf0MPge_`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        children: [
                          d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: d(h.h5, {
                                className: `framer-styles-preset-yovuob`,
                                "data-styles-preset": `wVtX8xMgR`,
                                dir: `auto`,
                                children: `Live collaboration`,
                              }),
                            }),
                            className: `framer-13s4i1v`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `t3T1assSc`,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                CTWaV0Yxu: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Live collaboration`,
                                    }),
                                  }),
                                },
                                I069pG6Q0: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Live collaboration`,
                                    }),
                                  }),
                                },
                                ylgTEEfD6: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Live collaboration`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              C
                            ),
                          }),
                          d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: d(h.p, {
                                className: `framer-styles-preset-vn6u90`,
                                "data-styles-preset": `kuibWYBoM`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                },
                                children: `Invite your team to collaborate on design, content, and publishing.`,
                              }),
                            }),
                            className: `framer-1e7tru`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `RrL0WxsD4`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                            },
                            verticalAlignment: `bottom`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                CTWaV0Yxu: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Invite your team to collaborate on design, content, and publishing.`,
                                    }),
                                  }),
                                },
                                I069pG6Q0: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Invite your team to collaborate on design, content, and publishing.`,
                                    }),
                                  }),
                                },
                                ylgTEEfD6: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `Invite your team to collaborate on design, content, and publishing.`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              C
                            ),
                          }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-fivjwa`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `pKOf5dfOL`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-cei6i4`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `eHxgpv7mJ`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Workspace owner`,
                                  }),
                                }),
                                className: `framer-3olzgi`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `U0CdJJZ5y`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `One user who manages editors, projects, and billing`,
                                  }),
                                }),
                                className: `framer-xhkaby`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `VUd6OPm_w`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-106nsau`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Ho4jz9_xc`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Free`,
                                  }),
                                }),
                                className: `framer-16uiqs0`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `WyXywPEYJ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1kss29j`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `TqcYp3I63`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Free`,
                                  }),
                                }),
                                className: `framer-1f07dpg`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `gKdoHjtYF`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1dtuem6`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `gIqu8oitA`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-1dwwskb`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `h3dwj1Yrq`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-11tjm6h`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `DeCFih6j1`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-14jagui`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `muamN6wbo`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Viewers`,
                                  }),
                                }),
                                className: `framer-7m2skk`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `TwOVAm6Ce`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `View and add comments on pages and designs`,
                                    }),
                                  }),
                                }),
                                className: `framer-1j8hlpr`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `HyJ9DdkRv`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-ossitg`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `aL_amuKbC`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Free`,
                                  }),
                                }),
                                className: `framer-1aku6to`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `dt2x_zPKa`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-pu80e7`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `sF1d0Gk3l`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Free`,
                                  }),
                                }),
                                className: `framer-caieny`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `LewmcLXKl`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-19q8ai1`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Oi7HGWAuf`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Free`,
                                  }),
                                }),
                                className: `framer-vvoi5m`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Mvv41gG0O`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1l5w0p0`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `aUif6yXDl`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-wm7b2w`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `hNqOFNxAz`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Additional editors`,
                                  }),
                                }),
                                className: `framer-mtmb2d`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `QH5mmtByg`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Design, edit content, and publish your site`,
                                  }),
                                }),
                                className: `framer-1b8ifoq`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `nfAfKZd7I`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-10mogzp`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `ZEGzLYYoO`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(Mn, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `$20 per editor`,
                                  }),
                                }),
                                className: `framer-1nk1co6`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `FnlS05ISt`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1nnim6p`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Bgcd6lAkt`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(Nn, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `$20 per editor`,
                                  }),
                                }),
                                className: `framer-m36095`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `a9JssBylZ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-q0jw5h`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `RytKidOmc`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-193gmhy`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `vHtcdM1TB`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1tp6n3c`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `Ck65xQTmU`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-skn1g`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `AcSptey0h`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Content editors`,
                                  }),
                                }),
                                className: `framer-1l2q2g3`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `bGa4bWhdJ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `Update CMS, localization, and use on-page editing`,
                                  }),
                                }),
                                className: `framer-12b6pxc`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `A77Ku9QDD`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1shqo8n`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `cK3BDivzd`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(Pn, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `$10 per editor`,
                                  }),
                                }),
                                className: `framer-f74r3z`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `hw8xPpQM3`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-15qeop3`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Zwyw3YnYU`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(Fn, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `$10 per editor`,
                                  }),
                                }),
                                className: `framer-aommv5`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `b_HqQ7uF4`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-3w38t0`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `vAZk25oHm`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-1u55lc5`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `MnCVQYO5L`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      d(h.div, {
                        className: `framer-1v30f2z`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `wLuFQVtoK`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(29, 29, 29))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                        },
                        children: d(S, {
                          __fromCanvasComponent: !0,
                          children: d(s, {
                            children: f(h.p, {
                              className: `framer-styles-preset-rhbxb3`,
                              "data-styles-preset": `vvG68NbwN`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                              },
                              children: [
                                d(T, {
                                  href: { webPageId: `eWRl9K77C` },
                                  motionChild: !0,
                                  nodeId: `IADmYy3lY`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `kENGTSB2T`,
                                  smoothScroll: !1,
                                  children: d(h.a, {
                                    className: `framer-styles-preset-8rmpkv`,
                                    "data-styles-preset": `uT_bT0pMG`,
                                    children: d(h.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-hl0iuy, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                      },
                                      children: d(h.strong, { children: `Pro Experts` }),
                                    }),
                                  }),
                                }),
                                d(h.span, {
                                  style: {
                                    "--framer-text-color": `var(--extracted-3sq8v0, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                  },
                                  children: d(h.strong, { children: ` ` }),
                                }),
                                d(h.strong, { children: `get` }),
                                d(h.span, {
                                  style: {
                                    "--framer-text-color": `var(--extracted-1ais0t9, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                  },
                                  children: d(h.strong, { children: ` ` }),
                                }),
                                d(h.span, {
                                  style: {
                                    "--framer-text-color": `var(--extracted-dfbufw, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                  },
                                  children: d(h.strong, { children: `free editor access` }),
                                }),
                                d(h.span, {
                                  style: {
                                    "--framer-text-color": `var(--extracted-143mgqx, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                  },
                                  children: d(h.strong, { children: ` ` }),
                                }),
                                d(h.strong, { children: `on any client project.` }),
                              ],
                            }),
                          }),
                          className: `framer-u074mj`,
                          fonts: [`Inter`, `Inter-Bold`],
                          layoutDependency: k,
                          layoutId: `IADmYy3lY`,
                          style: {
                            "--extracted-143mgqx": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            "--extracted-1ais0t9": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            "--extracted-3sq8v0": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            "--extracted-dfbufw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                            "--extracted-hl0iuy": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                          },
                          variants: {
                            CTWaV0Yxu: {
                              "--extracted-r6o4lv": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            },
                            I069pG6Q0: {
                              "--extracted-r6o4lv": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            },
                            ylgTEEfD6: {
                              "--extracted-r6o4lv": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Y(
                            {
                              CTWaV0Yxu: {
                                children: d(s, {
                                  children: f(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                    },
                                    children: [
                                      d(T, {
                                        href: { webPageId: `eWRl9K77C` },
                                        motionChild: !0,
                                        nodeId: `IADmYy3lY`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `kENGTSB2T`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-8rmpkv`,
                                          "data-styles-preset": `uT_bT0pMG`,
                                          children: d(h.strong, { children: `Pro Experts` }),
                                        }),
                                      }),
                                      d(h.strong, { children: ` get free editor access.` }),
                                    ],
                                  }),
                                }),
                              },
                              I069pG6Q0: {
                                children: d(s, {
                                  children: f(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                    },
                                    children: [
                                      d(T, {
                                        href: { webPageId: `eWRl9K77C` },
                                        motionChild: !0,
                                        nodeId: `IADmYy3lY`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `kENGTSB2T`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-8rmpkv`,
                                          "data-styles-preset": `uT_bT0pMG`,
                                          children: d(h.strong, { children: `Pro Experts` }),
                                        }),
                                      }),
                                      d(h.strong, { children: ` get free editor access.` }),
                                    ],
                                  }),
                                }),
                              },
                              ylgTEEfD6: {
                                children: d(s, {
                                  children: f(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)))`,
                                    },
                                    children: [
                                      d(T, {
                                        href: { webPageId: `eWRl9K77C` },
                                        motionChild: !0,
                                        nodeId: `IADmYy3lY`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `kENGTSB2T`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-8rmpkv`,
                                          "data-styles-preset": `uT_bT0pMG`,
                                          children: d(h.strong, { children: `Pro Experts` }),
                                        }),
                                      }),
                                      d(h.strong, { children: ` get free editor access.` }),
                                    ],
                                  }),
                                }),
                              },
                            },
                            b,
                            C
                          ),
                        }),
                      }),
                      f(h.div, {
                        className: `framer-m6rwnn`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `D8S2scQyD`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-cp6hcf`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `sbjtegMrh`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Seats`,
                                  }),
                                }),
                                className: `framer-1t9ei6`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `lM3vHC1P2`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: `The maximum number of users with edit access`,
                                  }),
                                }),
                                className: `framer-wguvcg`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `KztUYvYQC`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-sprqz4`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `zc4aXNnkw`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `10`,
                                  }),
                                }),
                                className: `framer-qkojhw`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `xeMLAmbDz`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-vu7aw4`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `hYt_g1TJC`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `10`,
                                  }),
                                }),
                                className: `framer-1vtccvt`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Dicixt68B`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1v7f2bu`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `NipV768S2`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Unlimited`,
                                  }),
                                }),
                                className: `framer-g5o67h`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `cV9ambn_F`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1ghhr6u`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `SVY10jW6P`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-7rkjl6`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `TtW9xSm2B`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Expert access`,
                                  }),
                                }),
                                className: `framer-jngap1`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `XUNims12X`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: f(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: [
                                      d(T, {
                                        href: { hash: `:aJC4dAXQl`, webPageId: `eWRl9K77C` },
                                        motionChild: !0,
                                        nodeId: `cn6ygDVVO`,
                                        openInNewTab: !1,
                                        preserveParams: !1,
                                        relValues: [],
                                        scopeId: `kENGTSB2T`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-1mts12p`,
                                          "data-styles-preset": `cXO7KeMWa`,
                                          children: d(h.em, { children: `Pro Experts` }),
                                        }),
                                      }),
                                      d(h.em, {
                                        children: ` get free edit access to client projects`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-18d252i`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `cn6ygDVVO`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1w1cj8b`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `HRTfYs4XE`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-1cjep1d`,
                                layoutDependency: k,
                                layoutId: `FPMZ9I6Sc`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1n69yah`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `LtoTK5msg`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-n3lodh`,
                                layoutDependency: k,
                                layoutId: `gmYYkDOun`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-ys2g88`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `MYIdvZ_q8`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-n0gdgj`,
                                layoutDependency: k,
                                layoutId: `f1_QYobPy`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-168heq5`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `V1smLHWTT`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-t98kx3`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `KxrHmKiNw`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Roles and permissions`,
                                  }),
                                }),
                                className: `framer-1pnsdmu`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `zkHnn0M33`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Manage who can view, edit content, design and deploy`,
                                    }),
                                  }),
                                }),
                                className: `framer-bus7m4`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `XPbj72C6J`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1ox2f36`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Lttaupz9C`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-19olwy`,
                                layoutDependency: k,
                                layoutId: `oZSW7z2Uw`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-15xefxe`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `HgY0DvUvt`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-rpbl0w`,
                                layoutDependency: k,
                                layoutId: `S7fiJSUSd`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-5xj5ct`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `AjA8Ew6Z9`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(W, {
                                animated: !0,
                                className: `framer-1qb8lt2`,
                                layoutDependency: k,
                                layoutId: `gqfa3d5bW`,
                                style: {
                                  "--17kkcf8": `rgba(136, 136, 136, 0.2)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `rgb(255, 255, 255)`,
                                },
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1onu4y6`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `LtPrQRv7e`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        children: [
                          d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: d(h.h5, {
                                className: `framer-styles-preset-yovuob`,
                                "data-styles-preset": `wVtX8xMgR`,
                                dir: `auto`,
                                children: `Add-ons`,
                              }),
                            }),
                            className: `framer-zb2r9y`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `QwNiPot13`,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                CTWaV0Yxu: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Add-ons`,
                                    }),
                                  }),
                                },
                                I069pG6Q0: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Add-ons`,
                                    }),
                                  }),
                                },
                                ylgTEEfD6: {
                                  children: d(s, {
                                    children: d(h.h6, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      children: `Add-ons`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              C
                            ),
                          }),
                          d(S, {
                            __fromCanvasComponent: !0,
                            children: d(s, {
                              children: d(h.p, {
                                className: `framer-styles-preset-vn6u90`,
                                "data-styles-preset": `kuibWYBoM`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                },
                                children: `From localizing your site to running multiple A/B-tests, power up your site with add-ons.`,
                              }),
                            }),
                            className: `framer-lf4v0z`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `nQaCKsL2y`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                            },
                            verticalAlignment: `bottom`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                CTWaV0Yxu: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `From localizing your site to running multiple A/B-tests, power up your site with add-ons.`,
                                    }),
                                  }),
                                },
                                I069pG6Q0: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `From localizing your site to running multiple A/B-tests, power up your site with add-ons.`,
                                    }),
                                  }),
                                },
                                ylgTEEfD6: {
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `From localizing your site to running multiple A/B-tests, power up your site with add-ons.`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              C
                            ),
                          }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1dv3u49`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `F2EBQb3R1`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-1kc725z`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `c34ARkk9b`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Translation locales`,
                                  }),
                                }),
                                className: `framer-1kfy28j`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `rv516SaYG`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Y(
                                  {
                                    CTWaV0Yxu: {
                                      children: d(s, {
                                        children: d(h.p, {
                                          className: `framer-styles-preset-rhbxb3`,
                                          "data-styles-preset": `vvG68NbwN`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: `Locales`,
                                        }),
                                      }),
                                    },
                                    I069pG6Q0: {
                                      children: d(s, {
                                        children: d(h.p, {
                                          className: `framer-styles-preset-rhbxb3`,
                                          "data-styles-preset": `vvG68NbwN`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: `Locales`,
                                        }),
                                      }),
                                    },
                                    ylgTEEfD6: {
                                      children: d(s, {
                                        children: d(h.p, {
                                          className: `framer-styles-preset-rhbxb3`,
                                          "data-styles-preset": `vvG68NbwN`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                          },
                                          children: `Locales`,
                                        }),
                                      }),
                                    },
                                  },
                                  b,
                                  C
                                ),
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: d(h.em, {
                                      children: `Translate your site into multiple languages with AI`,
                                    }),
                                  }),
                                }),
                                className: `framer-18bnris`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `rY0z7KaU2`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            f(h.div, {
                              className: `framer-1adfnru`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `akLxTIAUz`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `Up to 20`,
                                    }),
                                  }),
                                  className: `framer-pl9yj9`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `myZPoP8Zw`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(In, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `$20 per locale`,
                                    }),
                                  }),
                                  className: `framer-1in1fn1`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `b8hdUgZmd`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-1w7a80i`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `YGL7NPcTD`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `Up to 20`,
                                    }),
                                  }),
                                  className: `framer-1si5bug`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `zk4ZpzXV4`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(Ln, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: `$20 per locale`,
                                    }),
                                  }),
                                  className: `framer-1mxiqsn`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `BXEg6pcYs`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-7jtibu`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `R5jeKjbbL`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-17qs3b1`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `EnQdXX0jG`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-149gt4e`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `rjUL3KLqW`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-cn7cqf`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `kRVJ8Swhb`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Convert`,
                                  }),
                                }),
                                className: `framer-d3lvrx`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `GvwDjuL5U`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: f(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: [
                                      d(h.em, {
                                        children: `A/B testing, Funnels, and customization with `,
                                      }),
                                      d(T, {
                                        href: { hash: `:y4G1Sgd5W`, webPageId: `JFL7JOpTL` },
                                        motionChild: !0,
                                        nodeId: `lHqt8C49_`,
                                        openInNewTab: !1,
                                        preserveParams: !1,
                                        relValues: [],
                                        scopeId: `kENGTSB2T`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-1mts12p`,
                                          "data-styles-preset": `cXO7KeMWa`,
                                          children: d(h.em, { children: `Triggers` }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-pfns43`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `lHqt8C49_`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1phh79q`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `ToY7_DwRw`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-58807p`,
                                layoutDependency: k,
                                layoutId: `PVV7724pV`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            f(h.div, {
                              className: `framer-1tkdwyl`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `S0BLeRFqO`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                d(Rn, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                      },
                                      children: `$50`,
                                    }),
                                  }),
                                  className: `framer-1xiuf3n`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `LCb3sjMln`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: f(h.p, {
                                      className: `framer-styles-preset-rhbxb3`,
                                      "data-styles-preset": `vvG68NbwN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                      },
                                      children: [
                                        `per `,
                                        d(T, {
                                          href: { hash: `:ECvvNUQVw`, webPageId: `W7_YvB5xe` },
                                          motionChild: !0,
                                          nodeId: `yrC9lu_xP`,
                                          openInNewTab: !1,
                                          preserveParams: !1,
                                          relValues: [],
                                          scopeId: `kENGTSB2T`,
                                          smoothScroll: !1,
                                          children: d(h.a, {
                                            className: `framer-styles-preset-17uz1e6`,
                                            "data-styles-preset": `lauDPxbHX`,
                                            children: `500,000 events`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-1k89vht`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `yrC9lu_xP`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1mqcu4r`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `nAzIGUwD2`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Custom`,
                                  }),
                                }),
                                className: `framer-rlnyqr`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `RWlmdjvPc`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1n0he3g`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `rXHhGBu5o`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        },
                        children: [
                          f(h.div, {
                            className: `framer-y8upqo`,
                            "data-border": !0,
                            layoutDependency: k,
                            layoutId: `cyA4fjnlr`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            children: [
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Advanced hosting`,
                                  }),
                                }),
                                className: `framer-sip0rq`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `jfaVTX8XV`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: f(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                    },
                                    children: [
                                      d(h.em, { children: `Multiple sites and ` }),
                                      d(T, {
                                        href: { hash: `:PbcxvEhZD`, webPageId: `W7_YvB5xe` },
                                        motionChild: !0,
                                        nodeId: `ZInc6QUrH`,
                                        openInNewTab: !1,
                                        preserveParams: !1,
                                        relValues: [],
                                        scopeId: `kENGTSB2T`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-1mts12p`,
                                          "data-styles-preset": `cXO7KeMWa`,
                                          children: d(h.em, { children: `custom headers` }),
                                        }),
                                      }),
                                      d(h.em, { children: ` under one domain` }),
                                    ],
                                  }),
                                }),
                                className: `framer-axhns4`,
                                fonts: [`Inter`, `Inter-Italic`],
                                layoutDependency: k,
                                layoutId: `ZInc6QUrH`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          z() &&
                            d(h.div, {
                              className: `framer-1ggvgg0`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `mppBgp2fz`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(H, {
                                animated: !0,
                                className: `framer-1gxu90a`,
                                layoutDependency: k,
                                layoutId: `tgN0jo5r9`,
                                style: {
                                  "--17kkcf8": `rgba(0, 0, 0, 0)`,
                                  "--1iwhep7": 2,
                                  "--1l3yetw": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4)`,
                                  opacity: 0.3,
                                },
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-1xap1in`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `CpCvtwSo7`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: f(h.div, {
                                className: `framer-ngapt0`,
                                layoutDependency: k,
                                layoutId: `utk_fAFED`,
                                children: [
                                  d(zn, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-rhbxb3`,
                                        "data-styles-preset": `vvG68NbwN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                        },
                                        children: `$200`,
                                      }),
                                    }),
                                    className: `framer-t6xyt3`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `RgCJkrlDT`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(h.p, {
                                        className: `framer-styles-preset-rhbxb3`,
                                        "data-styles-preset": `vvG68NbwN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)))`,
                                        },
                                        children: d(T, {
                                          href: { hash: `:PbcxvEhZD`, webPageId: `W7_YvB5xe` },
                                          motionChild: !0,
                                          nodeId: `hfRvg8J4p`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `kENGTSB2T`,
                                          smoothScroll: !1,
                                          children: d(h.a, {
                                            className: `framer-styles-preset-17uz1e6`,
                                            "data-styles-preset": `lauDPxbHX`,
                                            children: `Max 6 rewrites`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1455rsp`,
                                    fonts: [`Inter`],
                                    layoutDependency: k,
                                    layoutId: `hfRvg8J4p`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-1qdriq6`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `XdEO19L4k`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(h.p, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)))`,
                                    },
                                    children: `Included`,
                                  }),
                                }),
                                className: `framer-10985w1`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `anzw32kFU`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-1za34f`,
                        "data-border": !0,
                        layoutDependency: k,
                        layoutId: `ak3diVIUM`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgb(0, 0, 0)`,
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                        },
                        children: [
                          R() &&
                            d(h.div, {
                              className: `framer-yqhtpn`,
                              "data-border": !0,
                              "data-framer-name": `Spacer`,
                              layoutDependency: k,
                              layoutId: `BkVUhxMhU`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                            }),
                          z() &&
                            d(h.div, {
                              className: `framer-12zlywh`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `ioLEjnW5u`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(N, {
                                height: 35,
                                width: `calc(max((${p?.width || `100vw`} - 220px) / 3, 1px) - 40px)`,
                                y:
                                  (p?.y || 0) +
                                  0 +
                                  (((p?.height || 200) - 0 - 7116.9) / 2 + 7042.9 + 0) +
                                  0 +
                                  20 +
                                  0,
                                ...Y(
                                  {
                                    I069pG6Q0: {
                                      width: `calc(max(${p?.width || `100vw`}, 1px) - 40px)`,
                                      y:
                                        (p?.y || 0) +
                                        0 +
                                        (((p?.height || 200) - 0 - 7027.9) / 2 + 6953.9 + 0) +
                                        0 +
                                        20 +
                                        0,
                                    },
                                  },
                                  b,
                                  C
                                ),
                                children: d(de, {
                                  className: `framer-r4d49x-container`,
                                  layoutDependency: k,
                                  layoutId: `Pml0jDY26-container`,
                                  nodeId: `Pml0jDY26`,
                                  rendersWithMotion: !0,
                                  scopeId: `kENGTSB2T`,
                                  children: d(U, {
                                    aq3hTZ9m1: `https://framer.com/projects/?showUpgrade=true&upgradeTo=basicSite2025`,
                                    height: `100%`,
                                    id: `Pml0jDY26`,
                                    kw6l_suoH: `Start with Basic`,
                                    layoutId: `Pml0jDY26`,
                                    MBD8rTH3H: `rgba(255, 255, 255, 0.15)`,
                                    N15cKHn29: `click-subscribe-basic-comparison`,
                                    rm8ThjdVN: 14,
                                    style: { width: `100%` },
                                    variant: Gn(`oWhy0mIFM`),
                                    width: `100%`,
                                    xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                  }),
                                }),
                              }),
                            }),
                          B() &&
                            d(h.div, {
                              className: `framer-u21jnr`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `Ns2o_IjCK`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(N, {
                                height: 35,
                                width: `calc(max((${p?.width || `100vw`} - 220px) / 3, 1px) - 40px)`,
                                y:
                                  (p?.y || 0) +
                                  0 +
                                  (((p?.height || 200) - 0 - 7116.9) / 2 + 7042.9 + 0) +
                                  0 +
                                  20 +
                                  -0.5,
                                ...Y(
                                  {
                                    CTWaV0Yxu: {
                                      width: `calc(max(${p?.width || `100vw`}, 1px) - 40px)`,
                                      y:
                                        (p?.y || 0) +
                                        0 +
                                        (((p?.height || 200) - 0 - 7027.9) / 2 + 6953.9 + 0) +
                                        0 +
                                        20 +
                                        -0.5,
                                    },
                                  },
                                  b,
                                  C
                                ),
                                children: d(de, {
                                  className: `framer-f3z6b6-container`,
                                  layoutDependency: k,
                                  layoutId: `HaYr_UQX0-container`,
                                  nodeId: `HaYr_UQX0`,
                                  rendersWithMotion: !0,
                                  scopeId: `kENGTSB2T`,
                                  children: d(U, {
                                    aq3hTZ9m1: `https://framer.com/projects/?showUpgrade=true&upgradeTo=proSite2025`,
                                    height: `100%`,
                                    id: `HaYr_UQX0`,
                                    kw6l_suoH: `Start with Pro`,
                                    layoutId: `HaYr_UQX0`,
                                    MBD8rTH3H: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                    N15cKHn29: `click-subscribe-pro-comparison`,
                                    rm8ThjdVN: 14,
                                    style: { width: `100%` },
                                    variant: Gn(`oWhy0mIFM`),
                                    width: `100%`,
                                    xdxfhd9wh: `var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))`,
                                  }),
                                }),
                              }),
                            }),
                          V() &&
                            d(h.div, {
                              className: `framer-sivutf`,
                              "data-border": !0,
                              layoutDependency: k,
                              layoutId: `qZpV1KyPD`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, rgb(25, 25, 25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: d(te, {
                                links: [
                                  {
                                    href: { webPageId: `CRh1Z3ynB` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `CRh1Z3ynB` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(N, {
                                    height: 35,
                                    width: `calc(max((${p?.width || `100vw`} - 220px) / 3, 1px) - 40px)`,
                                    y:
                                      (p?.y || 0) +
                                      0 +
                                      (((p?.height || 200) - 0 - 7116.9) / 2 + 7042.9 + 0) +
                                      0 +
                                      20 +
                                      -0.5,
                                    ...Y(
                                      {
                                        ylgTEEfD6: {
                                          width: `calc(max(${p?.width || `100vw`}, 1px) - 40px)`,
                                          y:
                                            (p?.y || 0) +
                                            0 +
                                            (((p?.height || 200) - 0 - 6980.3) / 2 + 6980.3 + 0) +
                                            0 +
                                            20 +
                                            -37.5,
                                        },
                                      },
                                      b,
                                      C
                                    ),
                                    children: d(de, {
                                      className: `framer-1vxhdlh-container`,
                                      layoutDependency: k,
                                      layoutId: `NN5LzC5Nf-container`,
                                      nodeId: `NN5LzC5Nf`,
                                      rendersWithMotion: !0,
                                      scopeId: `kENGTSB2T`,
                                      children: d(U, {
                                        aq3hTZ9m1: e[0],
                                        height: `100%`,
                                        id: `NN5LzC5Nf`,
                                        kw6l_suoH: `Request Trial`,
                                        layoutId: `NN5LzC5Nf`,
                                        MBD8rTH3H: `rgba(255, 255, 255, 0.15)`,
                                        N15cKHn29: `click-request-trial-comparison`,
                                        rm8ThjdVN: 14,
                                        style: { width: `100%` },
                                        variant: Gn(`oWhy0mIFM`),
                                        width: `100%`,
                                        xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                        ...Y({ ylgTEEfD6: { aq3hTZ9m1: e[1] } }, b, C),
                                      }),
                                    }),
                                  }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-2FTwm.framer-msfb41, .framer-2FTwm .framer-msfb41 { display: block; }`,
          `.framer-2FTwm.framer-6hitl8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1000px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2FTwm .framer-lmeph9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 0px 0px 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-2FTwm .framer-1uw6olt { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-2FTwm .framer-1yaz571 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-196yy67 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 10px 20px; position: relative; width: min-content; }`,
          `.framer-2FTwm .framer-19sfd3j { --framer-text-wrap-override: none; cursor: pointer; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-2FTwm .framer-3xk5ao, .framer-2FTwm .framer-8dybbi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; }`,
          `.framer-2FTwm .framer-14uhhie, .framer-2FTwm .framer-rqzcmb, .framer-2FTwm .framer-6nogdz, .framer-2FTwm .framer-5r62qj, .framer-2FTwm .framer-1580zzc, .framer-2FTwm .framer-919orm, .framer-2FTwm .framer-1wa56tb, .framer-2FTwm .framer-xzndxn, .framer-2FTwm .framer-13lp8vm, .framer-2FTwm .framer-mxp0i8, .framer-2FTwm .framer-6n0nly, .framer-2FTwm .framer-29zg0d, .framer-2FTwm .framer-13s4i1v, .framer-2FTwm .framer-u074mj, .framer-2FTwm .framer-zb2r9y { --framer-text-wrap-override: none; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-2FTwm .framer-it8ow4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-z5482c { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-1eoqabm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; min-height: 200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-1setdh, .framer-2FTwm .framer-1gumj0m { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-yz58sn { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 220px; }`,
          `.framer-2FTwm .framer-16lp5i0, .framer-2FTwm .framer-1gpy417, .framer-2FTwm .framer-1vawq74 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-1t5qjt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 109px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-coxzvo, .framer-2FTwm .framer-yqhtpn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 220px; }`,
          `.framer-2FTwm .framer-igt61b, .framer-2FTwm .framer-157sn28, .framer-2FTwm .framer-1st82kz, .framer-2FTwm .framer-k0k9ao, .framer-2FTwm .framer-1pl9jwz, .framer-2FTwm .framer-logbd5, .framer-2FTwm .framer-1b0cntz, .framer-2FTwm .framer-f3jlm3, .framer-2FTwm .framer-l3zfh, .framer-2FTwm .framer-wc8r8s, .framer-2FTwm .framer-61v2a3, .framer-2FTwm .framer-11webwn, .framer-2FTwm .framer-1y8jh01, .framer-2FTwm .framer-tmp0vb, .framer-2FTwm .framer-48k5wx, .framer-2FTwm .framer-2pkbku, .framer-2FTwm .framer-1jdiuyt, .framer-2FTwm .framer-12xtkmf, .framer-2FTwm .framer-1ilby82, .framer-2FTwm .framer-1j8c08, .framer-2FTwm .framer-rn5dox, .framer-2FTwm .framer-2kv4fw, .framer-2FTwm .framer-ml52dy, .framer-2FTwm .framer-d6tdfr, .framer-2FTwm .framer-110nj4i, .framer-2FTwm .framer-1d04zsi, .framer-2FTwm .framer-u1c9es, .framer-2FTwm .framer-jl38lu, .framer-2FTwm .framer-6fhpq6, .framer-2FTwm .framer-ckn3mk, .framer-2FTwm .framer-1xj0t9n, .framer-2FTwm .framer-12atnt3, .framer-2FTwm .framer-q6opwr, .framer-2FTwm .framer-1xcx8ay, .framer-2FTwm .framer-pox08k, .framer-2FTwm .framer-m5k019, .framer-2FTwm .framer-1lej9zt, .framer-2FTwm .framer-wfz84a, .framer-2FTwm .framer-o34n7y, .framer-2FTwm .framer-1ojplj2, .framer-2FTwm .framer-8vctho, .framer-2FTwm .framer-7qj4pf, .framer-2FTwm .framer-2e8y7n, .framer-2FTwm .framer-12bzt9z, .framer-2FTwm .framer-3olzgi, .framer-2FTwm .framer-16uiqs0, .framer-2FTwm .framer-1f07dpg, .framer-2FTwm .framer-1dwwskb, .framer-2FTwm .framer-7m2skk, .framer-2FTwm .framer-1aku6to, .framer-2FTwm .framer-caieny, .framer-2FTwm .framer-vvoi5m, .framer-2FTwm .framer-mtmb2d, .framer-2FTwm .framer-1nk1co6, .framer-2FTwm .framer-m36095, .framer-2FTwm .framer-193gmhy, .framer-2FTwm .framer-1l2q2g3, .framer-2FTwm .framer-f74r3z, .framer-2FTwm .framer-aommv5, .framer-2FTwm .framer-1u55lc5, .framer-2FTwm .framer-1t9ei6, .framer-2FTwm .framer-qkojhw, .framer-2FTwm .framer-1vtccvt, .framer-2FTwm .framer-g5o67h, .framer-2FTwm .framer-jngap1, .framer-2FTwm .framer-1pnsdmu, .framer-2FTwm .framer-1kfy28j, .framer-2FTwm .framer-pl9yj9, .framer-2FTwm .framer-1in1fn1, .framer-2FTwm .framer-1si5bug, .framer-2FTwm .framer-1mxiqsn, .framer-2FTwm .framer-17qs3b1, .framer-2FTwm .framer-d3lvrx, .framer-2FTwm .framer-1xiuf3n, .framer-2FTwm .framer-1k89vht, .framer-2FTwm .framer-rlnyqr, .framer-2FTwm .framer-sip0rq, .framer-2FTwm .framer-t6xyt3, .framer-2FTwm .framer-1455rsp, .framer-2FTwm .framer-10985w1 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2FTwm .framer-fg2nou { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; width: 195px; }`,
          `.framer-2FTwm .framer-1gnrbtl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-11060yb, .framer-2FTwm .framer-1otmqwi, .framer-2FTwm .framer-1gbn6o9, .framer-2FTwm .framer-uv0py3, .framer-2FTwm .framer-x2l6sc, .framer-2FTwm .framer-jrquoq, .framer-2FTwm .framer-9wljvf, .framer-2FTwm .framer-c54pif, .framer-2FTwm .framer-11o9zlg, .framer-2FTwm .framer-wnxaxu, .framer-2FTwm .framer-3qiu9t, .framer-2FTwm .framer-19lngy1, .framer-2FTwm .framer-12s2g1o, .framer-2FTwm .framer-11fy9sx, .framer-2FTwm .framer-gzfeqi, .framer-2FTwm .framer-1cjep1d, .framer-2FTwm .framer-n3lodh, .framer-2FTwm .framer-n0gdgj, .framer-2FTwm .framer-rpbl0w, .framer-2FTwm .framer-1qb8lt2 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 17px; }`,
          `.framer-2FTwm .framer-ygv760, .framer-2FTwm .framer-11sqcz6 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; width: 191px; }`,
          `.framer-2FTwm .framer-4m5pwf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 100%; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-up00en { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-cynuoh, .framer-2FTwm .framer-1pc6fie, .framer-2FTwm .framer-gdmp8e, .framer-2FTwm .framer-1n2n2mi, .framer-2FTwm .framer-evja0q, .framer-2FTwm .framer-1bt32hh, .framer-2FTwm .framer-57klxa, .framer-2FTwm .framer-1sif1hr, .framer-2FTwm .framer-19tk44p, .framer-2FTwm .framer-l2s4cr, .framer-2FTwm .framer-10n228y, .framer-2FTwm .framer-1j3mtdx, .framer-2FTwm .framer-de1kii, .framer-2FTwm .framer-qgqueb, .framer-2FTwm .framer-1nsw5zq, .framer-2FTwm .framer-fivjwa, .framer-2FTwm .framer-11tjm6h, .framer-2FTwm .framer-1l5w0p0, .framer-2FTwm .framer-1tp6n3c, .framer-2FTwm .framer-m6rwnn, .framer-2FTwm .framer-1ghhr6u, .framer-2FTwm .framer-168heq5, .framer-2FTwm .framer-1dv3u49, .framer-2FTwm .framer-149gt4e, .framer-2FTwm .framer-1n0he3g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-bj0lhr, .framer-2FTwm .framer-1r0s55e, .framer-2FTwm .framer-v3hcq2, .framer-2FTwm .framer-e5hae7, .framer-2FTwm .framer-oosoq9, .framer-2FTwm .framer-1vqa1em, .framer-2FTwm .framer-u5yh0x, .framer-2FTwm .framer-1uk5eq3, .framer-2FTwm .framer-ljzl25, .framer-2FTwm .framer-1alv0dk, .framer-2FTwm .framer-hqpj7j, .framer-2FTwm .framer-usfpf5, .framer-2FTwm .framer-1nflthg, .framer-2FTwm .framer-at29l8, .framer-2FTwm .framer-107q7v0, .framer-2FTwm .framer-cei6i4, .framer-2FTwm .framer-14jagui, .framer-2FTwm .framer-wm7b2w, .framer-2FTwm .framer-skn1g, .framer-2FTwm .framer-cp6hcf, .framer-2FTwm .framer-7rkjl6, .framer-2FTwm .framer-t98kx3, .framer-2FTwm .framer-1kc725z, .framer-2FTwm .framer-cn7cqf, .framer-2FTwm .framer-y8upqo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 220px; }`,
          `.framer-2FTwm .framer-r9yihd, .framer-2FTwm .framer-domagg, .framer-2FTwm .framer-ugf3l4, .framer-2FTwm .framer-168u5yu, .framer-2FTwm .framer-1mqmumm, .framer-2FTwm .framer-scbirw, .framer-2FTwm .framer-d8aem5, .framer-2FTwm .framer-1cec8vu, .framer-2FTwm .framer-18ticyi, .framer-2FTwm .framer-8f92zh, .framer-2FTwm .framer-1qp939v, .framer-2FTwm .framer-e4khnm, .framer-2FTwm .framer-5vmwzp, .framer-2FTwm .framer-1owain7, .framer-2FTwm .framer-1ypovql, .framer-2FTwm .framer-10uiogj, .framer-2FTwm .framer-6ke9j6, .framer-2FTwm .framer-15qng7, .framer-2FTwm .framer-3atj5k, .framer-2FTwm .framer-gnoexx, .framer-2FTwm .framer-1j3h8tw, .framer-2FTwm .framer-4xcxxr, .framer-2FTwm .framer-xhkaby, .framer-2FTwm .framer-1j8hlpr, .framer-2FTwm .framer-1b8ifoq, .framer-2FTwm .framer-12b6pxc, .framer-2FTwm .framer-wguvcg, .framer-2FTwm .framer-18d252i, .framer-2FTwm .framer-bus7m4, .framer-2FTwm .framer-18bnris, .framer-2FTwm .framer-pfns43, .framer-2FTwm .framer-axhns4 { --framer-text-wrap-override: balance; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-1gn2ofa, .framer-2FTwm .framer-1idfw2w, .framer-2FTwm .framer-dnf6zk, .framer-2FTwm .framer-1jjb86r, .framer-2FTwm .framer-b4z4h, .framer-2FTwm .framer-1u3l3ie, .framer-2FTwm .framer-6tiwfz, .framer-2FTwm .framer-o1s1me, .framer-2FTwm .framer-106nsau, .framer-2FTwm .framer-ossitg, .framer-2FTwm .framer-10mogzp, .framer-2FTwm .framer-1shqo8n, .framer-2FTwm .framer-1adfnru, .framer-2FTwm .framer-1phh79q, .framer-2FTwm .framer-1ggvgg0 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-9fvx3z, .framer-2FTwm .framer-2swxpv, .framer-2FTwm .framer-iyxlld, .framer-2FTwm .framer-1wbdbzu, .framer-2FTwm .framer-1c7uhmw, .framer-2FTwm .framer-1fuola7, .framer-2FTwm .framer-1f3f2p6, .framer-2FTwm .framer-jiirgt, .framer-2FTwm .framer-12ieucn, .framer-2FTwm .framer-5v5zf2, .framer-2FTwm .framer-1gu2dfd, .framer-2FTwm .framer-1kss29j, .framer-2FTwm .framer-1dtuem6, .framer-2FTwm .framer-pu80e7, .framer-2FTwm .framer-19q8ai1, .framer-2FTwm .framer-1nnim6p, .framer-2FTwm .framer-q0jw5h, .framer-2FTwm .framer-15qeop3, .framer-2FTwm .framer-3w38t0, .framer-2FTwm .framer-1w7a80i, .framer-2FTwm .framer-7jtibu, .framer-2FTwm .framer-1tkdwyl, .framer-2FTwm .framer-1mqcu4r, .framer-2FTwm .framer-1qdriq6 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-106gtsr, .framer-2FTwm .framer-15iu673 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2FTwm .framer-89ktxt, .framer-2FTwm .framer-ytztgb, .framer-2FTwm .framer-vhp8ab, .framer-2FTwm .framer-14yovli, .framer-2FTwm .framer-cv5k73, .framer-2FTwm .framer-1j6j3zy, .framer-2FTwm .framer-m7kmgl, .framer-2FTwm .framer-iu9q6, .framer-2FTwm .framer-h8bseo, .framer-2FTwm .framer-hc3lw4, .framer-2FTwm .framer-17mxdmk, .framer-2FTwm .framer-sprqz4, .framer-2FTwm .framer-1w1cj8b, .framer-2FTwm .framer-1ox2f36 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-m56kct, .framer-2FTwm .framer-58i35j, .framer-2FTwm .framer-1mbif8h, .framer-2FTwm .framer-16serug, .framer-2FTwm .framer-1kwiro2, .framer-2FTwm .framer-10302my, .framer-2FTwm .framer-1p0wk5a, .framer-2FTwm .framer-1s455cu, .framer-2FTwm .framer-g8ifn0, .framer-2FTwm .framer-1sefuj2, .framer-2FTwm .framer-t8tebk, .framer-2FTwm .framer-44wckv, .framer-2FTwm .framer-13oc9kd, .framer-2FTwm .framer-1ccmm5z, .framer-2FTwm .framer-1swi738, .framer-2FTwm .framer-vu7aw4, .framer-2FTwm .framer-1v7f2bu, .framer-2FTwm .framer-1n69yah, .framer-2FTwm .framer-ys2g88, .framer-2FTwm .framer-15xefxe, .framer-2FTwm .framer-5xj5ct, .framer-2FTwm .framer-1xap1in { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-1e1ovkz, .framer-2FTwm .framer-1heatz3, .framer-2FTwm .framer-zq53wm, .framer-2FTwm .framer-bkvcsc, .framer-2FTwm .framer-19olwy, .framer-2FTwm .framer-58807p, .framer-2FTwm .framer-1gxu90a { flex: none; height: auto; position: relative; width: 17px; }`,
          `.framer-2FTwm .framer-lglstm, .framer-2FTwm .framer-17gduc8, .framer-2FTwm .framer-1onu4y6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 80px 20px 20px 20px; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-2z3va4, .framer-2FTwm .framer-1e7tru { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 280px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-126dh73 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-bnf21d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 5px 3px 5px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2FTwm .framer-1ygg3t2 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-2FTwm .framer-1sl10ff, .framer-2FTwm .framer-1v30f2z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 15px 20px 15px 20px; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-lf4v0z { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 400px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-ngapt0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-1za34f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 74px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 4; }`,
          `.framer-2FTwm .framer-12zlywh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm .framer-r4d49x-container, .framer-2FTwm .framer-f3z6b6-container, .framer-2FTwm .framer-1vxhdlh-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-2FTwm .framer-u21jnr, .framer-2FTwm .framer-sivutf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 1px; }`,
          `.framer-2FTwm.framer-v-lu7022.framer-6hitl8, .framer-2FTwm.framer-v-1vgq0uq.framer-6hitl8, .framer-2FTwm.framer-v-1c4e6x7.framer-6hitl8 { width: 320px; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-lmeph9, .framer-2FTwm.framer-v-1vgq0uq .framer-lmeph9, .framer-2FTwm.framer-v-1c4e6x7 .framer-lmeph9 { overflow: var(--overflow-clip-fallback, clip); }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-1yaz571, .framer-2FTwm.framer-v-1c4e6x7 .framer-1yaz571 { gap: 0px; justify-content: flex-start; min-height: unset; padding: 10px 20px 10px 20px; position: sticky; top: 100px; z-index: 1; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-196yy67 { padding: 10px 10px 10px 0px; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-19sfd3j { cursor: unset; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-3xk5ao, .framer-2FTwm.framer-v-lu7022 .framer-14uhhie, .framer-2FTwm.framer-v-lu7022 .framer-8dybbi, .framer-2FTwm.framer-v-lu7022 .framer-rqzcmb, .framer-2FTwm.framer-v-1vgq0uq .framer-8dybbi, .framer-2FTwm.framer-v-1vgq0uq .framer-rqzcmb, .framer-2FTwm.framer-v-1c4e6x7 .framer-3xk5ao, .framer-2FTwm.framer-v-1c4e6x7 .framer-14uhhie { cursor: pointer; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-coxzvo, .framer-2FTwm.framer-v-lu7022 .framer-bj0lhr, .framer-2FTwm.framer-v-lu7022 .framer-1r0s55e, .framer-2FTwm.framer-v-lu7022 .framer-v3hcq2, .framer-2FTwm.framer-v-lu7022 .framer-e5hae7, .framer-2FTwm.framer-v-lu7022 .framer-oosoq9, .framer-2FTwm.framer-v-lu7022 .framer-1vqa1em, .framer-2FTwm.framer-v-lu7022 .framer-u5yh0x, .framer-2FTwm.framer-v-lu7022 .framer-1uk5eq3, .framer-2FTwm.framer-v-lu7022 .framer-ljzl25, .framer-2FTwm.framer-v-lu7022 .framer-1alv0dk, .framer-2FTwm.framer-v-lu7022 .framer-hqpj7j, .framer-2FTwm.framer-v-lu7022 .framer-usfpf5, .framer-2FTwm.framer-v-lu7022 .framer-1nflthg, .framer-2FTwm.framer-v-lu7022 .framer-at29l8, .framer-2FTwm.framer-v-lu7022 .framer-107q7v0, .framer-2FTwm.framer-v-lu7022 .framer-cei6i4, .framer-2FTwm.framer-v-lu7022 .framer-14jagui, .framer-2FTwm.framer-v-lu7022 .framer-wm7b2w, .framer-2FTwm.framer-v-lu7022 .framer-skn1g, .framer-2FTwm.framer-v-lu7022 .framer-cp6hcf, .framer-2FTwm.framer-v-lu7022 .framer-7rkjl6, .framer-2FTwm.framer-v-lu7022 .framer-t98kx3, .framer-2FTwm.framer-v-lu7022 .framer-1kc725z, .framer-2FTwm.framer-v-lu7022 .framer-cn7cqf, .framer-2FTwm.framer-v-lu7022 .framer-y8upqo, .framer-2FTwm.framer-v-1vgq0uq .framer-coxzvo, .framer-2FTwm.framer-v-1vgq0uq .framer-bj0lhr, .framer-2FTwm.framer-v-1vgq0uq .framer-1r0s55e, .framer-2FTwm.framer-v-1vgq0uq .framer-v3hcq2, .framer-2FTwm.framer-v-1vgq0uq .framer-e5hae7, .framer-2FTwm.framer-v-1vgq0uq .framer-oosoq9, .framer-2FTwm.framer-v-1vgq0uq .framer-1vqa1em, .framer-2FTwm.framer-v-1vgq0uq .framer-u5yh0x, .framer-2FTwm.framer-v-1vgq0uq .framer-1uk5eq3, .framer-2FTwm.framer-v-1vgq0uq .framer-ljzl25, .framer-2FTwm.framer-v-1vgq0uq .framer-1alv0dk, .framer-2FTwm.framer-v-1vgq0uq .framer-hqpj7j, .framer-2FTwm.framer-v-1vgq0uq .framer-usfpf5, .framer-2FTwm.framer-v-1vgq0uq .framer-1nflthg, .framer-2FTwm.framer-v-1vgq0uq .framer-at29l8, .framer-2FTwm.framer-v-1vgq0uq .framer-107q7v0, .framer-2FTwm.framer-v-1vgq0uq .framer-cei6i4, .framer-2FTwm.framer-v-1vgq0uq .framer-14jagui, .framer-2FTwm.framer-v-1vgq0uq .framer-wm7b2w, .framer-2FTwm.framer-v-1vgq0uq .framer-skn1g, .framer-2FTwm.framer-v-1vgq0uq .framer-cp6hcf, .framer-2FTwm.framer-v-1vgq0uq .framer-7rkjl6, .framer-2FTwm.framer-v-1vgq0uq .framer-t98kx3, .framer-2FTwm.framer-v-1vgq0uq .framer-1kc725z, .framer-2FTwm.framer-v-1vgq0uq .framer-cn7cqf, .framer-2FTwm.framer-v-1vgq0uq .framer-y8upqo, .framer-2FTwm.framer-v-1c4e6x7 .framer-coxzvo, .framer-2FTwm.framer-v-1c4e6x7 .framer-bj0lhr, .framer-2FTwm.framer-v-1c4e6x7 .framer-1r0s55e, .framer-2FTwm.framer-v-1c4e6x7 .framer-v3hcq2, .framer-2FTwm.framer-v-1c4e6x7 .framer-e5hae7, .framer-2FTwm.framer-v-1c4e6x7 .framer-oosoq9, .framer-2FTwm.framer-v-1c4e6x7 .framer-1vqa1em, .framer-2FTwm.framer-v-1c4e6x7 .framer-u5yh0x, .framer-2FTwm.framer-v-1c4e6x7 .framer-1uk5eq3, .framer-2FTwm.framer-v-1c4e6x7 .framer-ljzl25, .framer-2FTwm.framer-v-1c4e6x7 .framer-1alv0dk, .framer-2FTwm.framer-v-1c4e6x7 .framer-hqpj7j, .framer-2FTwm.framer-v-1c4e6x7 .framer-usfpf5, .framer-2FTwm.framer-v-1c4e6x7 .framer-1nflthg, .framer-2FTwm.framer-v-1c4e6x7 .framer-at29l8, .framer-2FTwm.framer-v-1c4e6x7 .framer-107q7v0, .framer-2FTwm.framer-v-1c4e6x7 .framer-cei6i4, .framer-2FTwm.framer-v-1c4e6x7 .framer-14jagui, .framer-2FTwm.framer-v-1c4e6x7 .framer-wm7b2w, .framer-2FTwm.framer-v-1c4e6x7 .framer-skn1g, .framer-2FTwm.framer-v-1c4e6x7 .framer-cp6hcf, .framer-2FTwm.framer-v-1c4e6x7 .framer-7rkjl6, .framer-2FTwm.framer-v-1c4e6x7 .framer-t98kx3, .framer-2FTwm.framer-v-1c4e6x7 .framer-1kc725z, .framer-2FTwm.framer-v-1c4e6x7 .framer-cn7cqf, .framer-2FTwm.framer-v-1c4e6x7 .framer-y8upqo { flex: 1 0 0px; width: 1px; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-ygv760 { width: 119px; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-126dh73, .framer-2FTwm.framer-v-1vgq0uq .framer-126dh73, .framer-2FTwm.framer-v-1c4e6x7 .framer-126dh73 { align-content: flex-start; align-items: flex-start; flex-direction: column; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-6n0nly, .framer-2FTwm.framer-v-1vgq0uq .framer-6n0nly, .framer-2FTwm.framer-v-1c4e6x7 .framer-6n0nly { order: 1; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-bnf21d, .framer-2FTwm.framer-v-1vgq0uq .framer-bnf21d, .framer-2FTwm.framer-v-1c4e6x7 .framer-bnf21d { order: 0; }`,
          `.framer-2FTwm.framer-v-lu7022 .framer-u074mj, .framer-2FTwm.framer-v-1vgq0uq .framer-u074mj, .framer-2FTwm.framer-v-1c4e6x7 .framer-u074mj { --framer-text-wrap-override: unset; flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2FTwm.framer-v-1vgq0uq .framer-1yaz571 { gap: unset; justify-content: space-between; min-height: unset; padding: 10px 20px 10px 20px; position: sticky; top: 100px; z-index: 1; }`,
          `.framer-2FTwm.framer-v-1vgq0uq .framer-196yy67, .framer-2FTwm.framer-v-1c4e6x7 .framer-196yy67 { cursor: pointer; padding: 10px 10px 10px 0px; }`,
          `.framer-2FTwm.framer-v-1vgq0uq .framer-z5482c { height: 24px; }`,
          `.framer-2FTwm.framer-v-1vgq0uq .framer-ngapt0 { padding: 0px; }`,
          `.framer-2FTwm.framer-v-1c4e6x7 .framer-1eoqabm { min-height: unset; }`,
          `.framer-2FTwm.framer-v-1c4e6x7 .framer-1za34f { height: min-content; }`,
          `.framer-2FTwm.framer-v-1c4e6x7 .framer-sivutf { align-self: stretch; height: auto; }`,
          ...$e,
          ...Ce,
          ...Ge,
          ...Be,
          ...Se,
          ..._e,
          ...Ie,
          ...yn,
          `.framer-2FTwm[data-border="true"]::after, .framer-2FTwm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-2FTwm`
      )),
      (X.displayName = `Pricing/Comparison-Table`),
      (X.defaultProps = { height: 3317, width: 1e3 }),
      C(X, {
        variant: {
          options: [`rGoyM38U4`, `I069pG6Q0`, `CTWaV0Yxu`, `ylgTEEfD6`],
          optionTitles: [`Variant 1`, `mobile-basic`, `mobile-pro`, `mobile-scale`],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      x(
        X,
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
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
                weight: `400`,
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
          ...En,
          ...jn,
          ...Bn,
          ...k(et),
          ...k(we),
          ...k(Ke),
          ...k(Ve),
          ...k(B),
          ...k(ye),
          ...k(Le),
          ...k(vn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => w([() => A(U, {}, t)], t) }));
  }),
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Z,
  Sr,
  Cr,
  wr,
  Q,
  $,
  Tr;
t(() => {
  (l(),
    j(),
    _(),
    a(),
    Ue(),
    nn(),
    _n(),
    Zn(),
    Ae(),
    nt(),
    Vt(),
    Qe(),
    xn(),
    z(),
    Je(),
    je(),
    Te(),
    V(),
    R(),
    st(),
    (Qn = P(q)),
    ($n = b(L(q, { nodeId: `iOgl78aMo`, override: vt, scopeId: `W7_YvB5xe` }), Ht)),
    (er = L(S, { nodeId: `v6dT4fSZ_`, override: Tt, scopeId: `W7_YvB5xe` })),
    (tr = P(W)),
    (nr = P(U)),
    (rr = L(S, { nodeId: `GXEz2KNU1`, override: Ct, scopeId: `W7_YvB5xe` })),
    (ir = L(I, { nodeId: `FOXSSlPZZ`, override: bt, scopeId: `W7_YvB5xe` })),
    (ar = P(J)),
    (or = b(L(J, { nodeId: `Xlq836NYK`, override: Lt, scopeId: `W7_YvB5xe` }), rn)),
    (sr = b(L(J, { nodeId: `VzJ1C6Jzf`, override: Lt, scopeId: `W7_YvB5xe` }), rn)),
    (cr = L(S, { nodeId: `trsUUuMJj`, override: wt, scopeId: `W7_YvB5xe` })),
    (lr = L(I, { nodeId: `ROqXkzAVb`, override: xt, scopeId: `W7_YvB5xe` })),
    (ur = b(L(J, { nodeId: `LZkPcpgWe`, override: Lt, scopeId: `W7_YvB5xe` }), rn)),
    (dr = b(L(J, { nodeId: `s3OQImS4j`, override: Lt, scopeId: `W7_YvB5xe` }), rn)),
    (fr = L(S, { nodeId: `p8RCT1y4N`, override: Et, scopeId: `W7_YvB5xe` })),
    (pr = P(rt)),
    (mr = P(X)),
    (hr = L(h.div, { nodeId: `BzXpS6HtW`, override: yt, scopeId: `W7_YvB5xe` })),
    (gr = {
      Rim0H5tYI: `(min-width: 810px) and (max-width: 1351.98px)`,
      XCve8aNGG: `(max-width: 809.98px)`,
      yAIDO58Bz: `(min-width: 1352px)`,
    }),
    (_r = () => typeof document < `u`),
    (vr = []),
    (yr = `framer-ZBrth`),
    (br = {
      Rim0H5tYI: `framer-v-15ncrjc`,
      XCve8aNGG: `framer-v-h66uw9`,
      yAIDO58Bz: `framer-v-rq9wj3`,
    }),
    (xr = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Sr = { Desktop: `yAIDO58Bz`, Phone: `XCve8aNGG`, Tablet: `Rim0H5tYI` }),
    (Cr = ({ value: e }) =>
      ie()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (wr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Sr[r.variant] ?? r.variant ?? `yAIDO58Bz`,
    })),
    (Q = D(
      u(function (e, t) {
        let i = c(null),
          a = t ?? i,
          l = n(),
          { activeLocale: u, contentLocale: p, setLocale: m } = oe(),
          _ = fe(),
          { style: v, className: b, layoutId: ne, variant: x, ...ie } = wr(e);
        se(r(() => ot({}, p), [p]));
        let [C, w] = ae(x, gr, !1),
          D = E(yr, me, ge, pe, bn, tt, Oe, Ze, Pe),
          O = o(ue)?.isLayoutTemplate,
          k = !!o(g)?.transition?.layout,
          A = xr(O, k),
          ce = M(`moiz96YMM`),
          j = c(null),
          P = () => !_r() || C !== `Rim0H5tYI`;
        le();
        let I = () => !_r() || C === `Rim0H5tYI`,
          L = M(`Id0OV0zbD`),
          de = c(null),
          R = M(`xIHzfYOb8`),
          z = c(null),
          B = M(`G7d0yjABA`),
          V = c(null),
          he = M(`YBLgl4Htm`),
          _e = c(null),
          ve = M(`wq8FFNi8b`),
          ye = c(null),
          be = M(`cpPVy7P0g`),
          xe = c(null),
          Se = M(`ECvvNUQVw`),
          Ce = c(null),
          we = M(`PbcxvEhZD`),
          Te = c(null);
        return (
          re({}),
          d(ue.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Sr,
              primaryVariantId: `yAIDO58Bz`,
              variantClassNames: br,
            },
            children: f(ee, {
              id: ne ?? l,
              children: [
                d(Cr, {
                  value: `html body { background: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0)); }`,
                }),
                d(h.div, {
                  ...ie,
                  className: E(D, `framer-rq9wj3`, b),
                  ref: a,
                  style: { ...v },
                  children: f(hr, {
                    className: `framer-1vnprg9`,
                    "data-framer-name": `Big`,
                    layout: A,
                    children: [
                      f(h.div, {
                        className: `framer-1lj4euy`,
                        "data-framer-name": `Header`,
                        id: ce,
                        ref: j,
                        children: [
                          d(y, {
                            breakpoint: C,
                            overrides: {
                              XCve8aNGG: {
                                children: d(s, {
                                  children: d(`h1`, {
                                    className: `framer-styles-preset-1gzpg4m`,
                                    "data-styles-preset": `gM4yNG9Qq`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `Start free, then scale your site`,
                                  }),
                                }),
                              },
                            },
                            children: d(S, {
                              __fromCanvasComponent: !0,
                              children: d(s, {
                                children: d(`h1`, {
                                  className: `framer-styles-preset-1gzpg4m`,
                                  "data-styles-preset": `gM4yNG9Qq`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `start` },
                                  children: `Start free, then scale your site`,
                                }),
                              }),
                              className: `framer-1bz3p6l`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          d(y, {
                            breakpoint: C,
                            overrides: {
                              Rim0H5tYI: { y: (_?.y || 0) + 0 + 0 + 0 + 0 + 80 + 36 },
                              XCve8aNGG: { y: (_?.y || 0) + 0 + 0 + 0 + 0 + 50 + 74 },
                            },
                            children: d(N, {
                              height: 18,
                              y: (_?.y || 0) + 0 + 0 + 0 + 0 + 100 + 36,
                              children: d(F, {
                                className: `framer-1v5vnl4-container`,
                                nodeId: `iOgl78aMo`,
                                rendersWithMotion: !0,
                                scopeId: `W7_YvB5xe`,
                                children: d($n, {
                                  height: `100%`,
                                  id: `iOgl78aMo`,
                                  layoutId: `iOgl78aMo`,
                                  variant: Z(`frHTNBQJX`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(h.div, {
                        className: `framer-181yd5a`,
                        children: [
                          f(h.div, {
                            className: `framer-1eljwvu`,
                            "data-border": !0,
                            "data-framer-name": `Cards`,
                            "data-nosnippet": !0,
                            children: [
                              f(h.div, {
                                className: `framer-dqa8k2`,
                                "data-border": !0,
                                "data-framer-name": `Free`,
                                children: [
                                  f(h.div, {
                                    className: `framer-1obqgy5`,
                                    children: [
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`h2`, {
                                            className: `framer-styles-preset-ojsfn5`,
                                            "data-styles-preset": `VQBQVu8qk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            },
                                            children: `Free`,
                                          }),
                                        }),
                                        className: `framer-xty4fz`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`h6`, {
                                            className: `framer-styles-preset-ojsfn5`,
                                            "data-styles-preset": `VQBQVu8qk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                            },
                                            children: `Try for free`,
                                          }),
                                        }),
                                        className: `framer-1rjpctb`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-9012ex`,
                                    "data-framer-name": `1`,
                                    children: d(h.div, { className: `framer-fbird6` }),
                                  }),
                                  f(h.div, {
                                    className: `framer-128vv15`,
                                    children: [
                                      f(h.div, {
                                        className: `framer-tng3gh`,
                                        children: [
                                          d(er, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-ojsfn5`,
                                                "data-styles-preset": `VQBQVu8qk`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `start` },
                                                children: `$0`,
                                              }),
                                            }),
                                            className: `framer-1hnu3qq`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(h.div, { className: `framer-6blk7o` }),
                                        ],
                                      }),
                                      d(h.div, {
                                        className: `framer-6xcqwk`,
                                        "data-border": !0,
                                        children: d(S, {
                                          __fromCanvasComponent: !0,
                                          children: d(s, {
                                            children: d(`p`, {
                                              className: `framer-styles-preset-rhbxb3`,
                                              "data-styles-preset": `vvG68NbwN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                              },
                                              children: d(T, {
                                                href: {
                                                  hash: `:cpPVy7P0g`,
                                                  webPageId: `W7_YvB5xe`,
                                                },
                                                motionChild: !0,
                                                nodeId: `aYNiCGIAd`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `W7_YvB5xe`,
                                                smoothScroll: !1,
                                                children: d(h.a, {
                                                  className: `framer-styles-preset-1mts12p`,
                                                  "data-styles-preset": `cXO7KeMWa`,
                                                  children: `500 AI credits to try`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-17bcya5`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-1fp3rnk`,
                                    "data-framer-name": `1`,
                                    children: d(h.div, { className: `framer-1w9cf47` }),
                                  }),
                                  f(h.div, {
                                    className: `framer-194nlf5`,
                                    children: [
                                      f(h.div, {
                                        className: `framer-wphvau`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-zints3`,
                                            DTFJRR839: !0,
                                            layoutId: `H4v5Z67cC`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `Free Framer domain`,
                                              }),
                                            }),
                                            className: `framer-1ockqr9`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-1buvnu6`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-t63nz0`,
                                            DTFJRR839: !0,
                                            layoutId: `SrRqCGN2e`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `1 GB bandwidth`,
                                              }),
                                            }),
                                            className: `framer-2uu045`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-1v7t2ua`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-sbzb74`,
                                            DTFJRR839: !0,
                                            layoutId: `Mf4i5oDIY`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `Design pages`,
                                              }),
                                            }),
                                            className: `framer-u2a4gr`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-2h087`,
                                    children: d(h.div, {
                                      className: `framer-1ewbc2o`,
                                      children: d(y, {
                                        breakpoint: C,
                                        overrides: {
                                          Rim0H5tYI: {
                                            width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              194 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              515.9 +
                                              20 +
                                              587.2 +
                                              0 +
                                              0,
                                          },
                                          XCve8aNGG: {
                                            width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              192 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              515.9 +
                                              15 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: d(N, {
                                          height: 35,
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            214 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            515.9 +
                                            20 +
                                            587.2 +
                                            0 +
                                            0,
                                          children: d(F, {
                                            className: `framer-1aea1x6-container`,
                                            nodeId: `TQ4OU7B0A`,
                                            rendersWithMotion: !0,
                                            scopeId: `W7_YvB5xe`,
                                            children: d(U, {
                                              aq3hTZ9m1: `https://www.framer.com/r/signup/`,
                                              height: `100%`,
                                              id: `TQ4OU7B0A`,
                                              kw6l_suoH: `Start for Free`,
                                              layoutId: `TQ4OU7B0A`,
                                              MBD8rTH3H: `rgba(255, 255, 255, 0.1)`,
                                              N15cKHn29: `start-for-free`,
                                              rm8ThjdVN: 14,
                                              style: { width: `100%` },
                                              variant: Z(`oWhy0mIFM`),
                                              width: `100%`,
                                              xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              f(h.div, {
                                className: `framer-nt4vdl`,
                                "data-border": !0,
                                "data-framer-name": `Basic`,
                                children: [
                                  f(h.div, {
                                    className: `framer-1m7sabw`,
                                    children: [
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`h2`, {
                                            className: `framer-styles-preset-ojsfn5`,
                                            "data-styles-preset": `VQBQVu8qk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            },
                                            children: `Basic`,
                                          }),
                                        }),
                                        className: `framer-1vhncvb`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`h6`, {
                                            className: `framer-styles-preset-ojsfn5`,
                                            "data-styles-preset": `VQBQVu8qk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                            },
                                            children: `Creative personal sites`,
                                          }),
                                        }),
                                        className: `framer-fcmu5o`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-11rqpge`,
                                    "data-framer-name": `1`,
                                    children: d(h.div, { className: `framer-6p12ui` }),
                                  }),
                                  f(h.div, {
                                    className: `framer-1icjtd1`,
                                    children: [
                                      f(h.div, {
                                        className: `framer-5tws99`,
                                        children: [
                                          d(rr, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-ojsfn5`,
                                                "data-styles-preset": `VQBQVu8qk`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `start` },
                                                children: `$10`,
                                              }),
                                            }),
                                            className: `framer-bytm5y`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(h.div, {
                                            className: `framer-bayarg`,
                                            children: d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `per month`,
                                                }),
                                              }),
                                              className: `framer-dexl8o`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      d(ir, {
                                        className: `framer-qprum8`,
                                        "data-framer-name": `Credits per month`,
                                        inputName: `Credits per month`,
                                        selectOptions: [
                                          {
                                            title: `1,000 AI credits / month`,
                                            type: `option`,
                                            value: `1000`,
                                          },
                                          {
                                            title: `2,000 AI credits / month`,
                                            type: `option`,
                                            value: `2000`,
                                          },
                                          {
                                            title: `3,000 AI credits / month`,
                                            type: `option`,
                                            value: `3000`,
                                          },
                                          {
                                            title: `5,000 AI credits / month`,
                                            type: `option`,
                                            value: `5000`,
                                          },
                                          {
                                            title: `8,000 AI credits / month`,
                                            type: `option`,
                                            value: `8000`,
                                          },
                                          {
                                            title: `10,000 AI credits / month`,
                                            type: `option`,
                                            value: `10000`,
                                          },
                                          {
                                            title: `15,000 credits / month`,
                                            type: `option`,
                                            value: `15000`,
                                          },
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-6wwa7p`,
                                    "data-framer-name": `1`,
                                    children: d(h.div, { className: `framer-hbxro0` }),
                                  }),
                                  f(h.div, {
                                    className: `framer-19pbnnv`,
                                    children: [
                                      d(y, {
                                        breakpoint: C,
                                        overrides: {
                                          Rim0H5tYI: {
                                            width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              194 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              196.9 +
                                              0 +
                                              0,
                                          },
                                          XCve8aNGG: {
                                            width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              192 +
                                              0 +
                                              0 +
                                              0 +
                                              605.9 +
                                              20 +
                                              196.9 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: d(N, {
                                          height: 19,
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            214 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            196.9 +
                                            0 +
                                            0,
                                          children: d(F, {
                                            className: `framer-uu2jsp-container`,
                                            nodeId: `Xlq836NYK`,
                                            rendersWithMotion: !0,
                                            scopeId: `W7_YvB5xe`,
                                            children: d(or, {
                                              height: `100%`,
                                              id: `Xlq836NYK`,
                                              layoutId: `Xlq836NYK`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      d(y, {
                                        breakpoint: C,
                                        overrides: {
                                          Rim0H5tYI: {
                                            width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              194 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              196.9 +
                                              0 +
                                              29,
                                          },
                                          XCve8aNGG: {
                                            width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              192 +
                                              0 +
                                              0 +
                                              0 +
                                              605.9 +
                                              20 +
                                              196.9 +
                                              0 +
                                              29,
                                          },
                                        },
                                        children: d(N, {
                                          height: 19,
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            214 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            196.9 +
                                            0 +
                                            29,
                                          children: d(F, {
                                            className: `framer-2fbisp-container`,
                                            nodeId: `VzJ1C6Jzf`,
                                            rendersWithMotion: !0,
                                            scopeId: `W7_YvB5xe`,
                                            children: d(sr, {
                                              height: `100%`,
                                              id: `VzJ1C6Jzf`,
                                              layoutId: `VzJ1C6Jzf`,
                                              rr01D6l_K: `2× credits first month`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      f(h.div, {
                                        className: `framer-2ywa0f`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-1o0pfav`,
                                            DTFJRR839: !0,
                                            layoutId: `A9_lyQty4`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `2 CMS collections`,
                                              }),
                                            }),
                                            className: `framer-f0dx67`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-1bpaf0y`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-1sdz80c`,
                                            DTFJRR839: !0,
                                            layoutId: `dRER2iN6e`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `50 GB bandwidth`,
                                              }),
                                            }),
                                            className: `framer-13zn71j`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-151j3b2`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-h7k5zt`,
                                            DTFJRR839: !0,
                                            layoutId: `Tnlial3DN`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(y, {
                                            breakpoint: C,
                                            overrides: {
                                              Rim0H5tYI: {
                                                children: d(s, {
                                                  children: d(`p`, {
                                                    className: `framer-styles-preset-rhbxb3`,
                                                    "data-styles-preset": `vvG68NbwN`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                    },
                                                    children: `Use your own domain`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `Built-in SEO`,
                                                }),
                                              }),
                                              className: `framer-8q2loq`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-abcg1s`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-3paqy8`,
                                            DTFJRR839: !0,
                                            layoutId: `pYj62JM4l`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: [
                                                  `Localization `,
                                                  d(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                                    },
                                                    children: `(add-on)`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-1vz325y`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-10992xd`,
                                    children: d(y, {
                                      breakpoint: C,
                                      overrides: {
                                        Rim0H5tYI: {
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            194 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            681.9 +
                                            0 +
                                            441.2,
                                        },
                                        XCve8aNGG: {
                                          width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            192 +
                                            0 +
                                            0 +
                                            0 +
                                            605.9 +
                                            20 +
                                            681.9 +
                                            15 +
                                            0,
                                        },
                                      },
                                      children: d(N, {
                                        height: 35,
                                        width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          214 +
                                          0 +
                                          0 +
                                          0 +
                                          20 +
                                          681.9 +
                                          0 +
                                          441.2,
                                        children: d(F, {
                                          className: `framer-u8pkh8-container`,
                                          nodeId: `OWkXxBJO2`,
                                          rendersWithMotion: !0,
                                          scopeId: `W7_YvB5xe`,
                                          children: d(U, {
                                            aq3hTZ9m1: `https://framer.com/projects/?showUpgrade=true&upgradeTo=basicSite2025`,
                                            height: `100%`,
                                            id: `OWkXxBJO2`,
                                            kw6l_suoH: `Start with Basic`,
                                            layoutId: `OWkXxBJO2`,
                                            MBD8rTH3H: `rgba(255, 255, 255, 0.1)`,
                                            N15cKHn29: `click-subscribe-basic`,
                                            rm8ThjdVN: 14,
                                            style: { width: `100%` },
                                            variant: Z(`oWhy0mIFM`),
                                            width: `100%`,
                                            xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              f(h.div, {
                                className: `framer-1jaea25`,
                                "data-framer-name": `Pro`,
                                children: [
                                  f(h.div, {
                                    className: `framer-s55nmh`,
                                    children: [
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`h2`, {
                                            className: `framer-styles-preset-ojsfn5`,
                                            "data-styles-preset": `VQBQVu8qk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            },
                                            children: `Pro`,
                                          }),
                                        }),
                                        className: `framer-8avi2m`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`p`, {
                                            className: `framer-styles-preset-ojsfn5`,
                                            "data-styles-preset": `VQBQVu8qk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                            },
                                            children: `Growing professional sites`,
                                          }),
                                        }),
                                        className: `framer-1kb2kzq`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-1qlvsk6`,
                                    "data-framer-name": `1`,
                                    children: d(h.div, { className: `framer-f267wx` }),
                                  }),
                                  f(h.div, {
                                    className: `framer-1u3r6nj`,
                                    children: [
                                      f(h.div, {
                                        className: `framer-lwjpel`,
                                        children: [
                                          d(cr, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-ojsfn5`,
                                                "data-styles-preset": `VQBQVu8qk`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `start` },
                                                children: `$30`,
                                              }),
                                            }),
                                            className: `framer-1ujiqlv`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(h.div, {
                                            className: `framer-16vrd4t`,
                                            children: d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `per month`,
                                                }),
                                              }),
                                              className: `framer-lhwpve`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      d(lr, {
                                        className: `framer-ma3iyc`,
                                        "data-framer-name": `Credits per month`,
                                        inputName: `Credits per month`,
                                        selectOptions: [
                                          {
                                            title: `3,000 credits / month`,
                                            type: `option`,
                                            value: `3000`,
                                          },
                                          {
                                            title: `5,000 credits / month`,
                                            type: `option`,
                                            value: `5000`,
                                          },
                                          {
                                            title: `10,000 credits / month`,
                                            type: `option`,
                                            value: `10000`,
                                          },
                                          {
                                            title: `20,000 credits / month`,
                                            type: `option`,
                                            value: `20000`,
                                          },
                                          {
                                            title: `30,000 credits / month`,
                                            type: `option`,
                                            value: `30000`,
                                          },
                                          {
                                            title: `50,000 credits / month`,
                                            type: `option`,
                                            value: `50000`,
                                          },
                                          {
                                            title: `100,000 credits / month`,
                                            type: `option`,
                                            value: `100000`,
                                          },
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-100dcin`,
                                    "data-framer-name": `1`,
                                    children: d(h.div, { className: `framer-xmqd09` }),
                                  }),
                                  f(h.div, {
                                    className: `framer-3wm5sf`,
                                    children: [
                                      d(y, {
                                        breakpoint: C,
                                        overrides: {
                                          Rim0H5tYI: {
                                            width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              194 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              294.1 +
                                              0 +
                                              0,
                                          },
                                          XCve8aNGG: {
                                            width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              192 +
                                              0 +
                                              0 +
                                              0 +
                                              1377.8 +
                                              20 +
                                              294.1 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: d(N, {
                                          height: 19,
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            214 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            294.1 +
                                            0 +
                                            0,
                                          children: d(F, {
                                            className: `framer-1mrjcv3-container`,
                                            nodeId: `LZkPcpgWe`,
                                            rendersWithMotion: !0,
                                            scopeId: `W7_YvB5xe`,
                                            children: d(ur, {
                                              height: `100%`,
                                              id: `LZkPcpgWe`,
                                              layoutId: `LZkPcpgWe`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      d(y, {
                                        breakpoint: C,
                                        overrides: {
                                          Rim0H5tYI: {
                                            width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              194 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              294.1 +
                                              0 +
                                              29,
                                          },
                                          XCve8aNGG: {
                                            width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              192 +
                                              0 +
                                              0 +
                                              0 +
                                              1377.8 +
                                              20 +
                                              294.1 +
                                              0 +
                                              29,
                                          },
                                        },
                                        children: d(N, {
                                          height: 19,
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            214 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            294.1 +
                                            0 +
                                            29,
                                          children: d(F, {
                                            className: `framer-11b9oer-container`,
                                            nodeId: `s3OQImS4j`,
                                            rendersWithMotion: !0,
                                            scopeId: `W7_YvB5xe`,
                                            children: d(dr, {
                                              height: `100%`,
                                              id: `s3OQImS4j`,
                                              layoutId: `s3OQImS4j`,
                                              rr01D6l_K: `2× credits first month`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      f(h.div, {
                                        className: `framer-10wwbnz`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-gs7rpm`,
                                            DTFJRR839: !0,
                                            layoutId: `KYjIzHijP`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `10 CMS collections`,
                                              }),
                                            }),
                                            className: `framer-qlt57v`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-19qxyyf`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-1pku78u`,
                                            DTFJRR839: !0,
                                            layoutId: `QdKRWMZqc`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlESTBMQ0FpZDJkb2RDSWdORGt3`,
                                                  "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                                  "--framer-font-open-type-features": `'cv11' on, 'cv06' on, 'ss03' on, 'ss07' on`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-variation-axes": `"opsz" 24, "wght" 490`,
                                                  "--framer-letter-spacing": `0px`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `100 GB bandwidth`,
                                              }),
                                            }),
                                            className: `framer-1jvf4fm`,
                                            fonts: [`Inter-Variable`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-1f77cwa`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-rmx4zx`,
                                            DTFJRR839: !0,
                                            layoutId: `JTES6CqHZ`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `Site redirects`,
                                              }),
                                            }),
                                            className: `framer-1p5uybc`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-1439jg1`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-kmbki8`,
                                            DTFJRR839: !0,
                                            layoutId: `B6WQHi8sJ`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `Staging environment`,
                                              }),
                                            }),
                                            className: `framer-1xmjnm3`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-5ttuav`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-18nf1ly`,
                                            DTFJRR839: !0,
                                            layoutId: `HII4GymFF`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: `Branching with previews`,
                                              }),
                                            }),
                                            className: `framer-1vjy2u0`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-djlwi0`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-5hopcj`,
                                            DTFJRR839: !0,
                                            layoutId: `OT2JA2uut`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: [
                                                  `Advanced hosting `,
                                                  d(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                                    },
                                                    children: `(add-on)`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-1e1a3wc`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      f(h.div, {
                                        className: `framer-1tptf47`,
                                        "data-framer-name": `1`,
                                        children: [
                                          d(W, {
                                            animated: !1,
                                            className: `framer-1ddr4hy`,
                                            DTFJRR839: !0,
                                            layoutId: `K_D05uyfa`,
                                            pJdIdADIa: !0,
                                            XI2ObiqYx: !0,
                                          }),
                                          d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                },
                                                children: [
                                                  `A/B testing `,
                                                  d(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-f5637926-8ee6-41cb-a320-ec3462d62cd5, rgba(255, 255, 255, 0.4))`,
                                                    },
                                                    children: `(add-on)`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-15au4x4`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(h.div, {
                                    className: `framer-1v43tk1`,
                                    children: d(y, {
                                      breakpoint: C,
                                      overrides: {
                                        Rim0H5tYI: {
                                          width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 3, 1px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            194 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            1103.1 +
                                            20 +
                                            0,
                                        },
                                        XCve8aNGG: {
                                          width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                          y:
                                            (_?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            192 +
                                            0 +
                                            0 +
                                            0 +
                                            1377.8 +
                                            20 +
                                            1103.1 +
                                            15 +
                                            0,
                                        },
                                      },
                                      children: d(N, {
                                        height: 35,
                                        width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          214 +
                                          0 +
                                          0 +
                                          0 +
                                          20 +
                                          1103.1 +
                                          20 +
                                          0,
                                        children: d(F, {
                                          className: `framer-cs9mhr-container`,
                                          nodeId: `KELj5klyj`,
                                          rendersWithMotion: !0,
                                          scopeId: `W7_YvB5xe`,
                                          children: d(U, {
                                            aq3hTZ9m1: `https://framer.com/projects/?showUpgrade=true&upgradeTo=proSite2025`,
                                            height: `100%`,
                                            id: `KELj5klyj`,
                                            kw6l_suoH: `Start with Pro`,
                                            layoutId: `KELj5klyj`,
                                            MBD8rTH3H: `rgb(0, 153, 255)`,
                                            N15cKHn29: `click-subscribe-pro`,
                                            rm8ThjdVN: 14,
                                            style: { width: `100%` },
                                            variant: Z(`oWhy0mIFM`),
                                            width: `100%`,
                                            xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              P() &&
                                f(h.div, {
                                  className: `framer-1v3u8cg hidden-15ncrjc`,
                                  "data-border": !0,
                                  "data-framer-name": `Enterprise`,
                                  children: [
                                    f(h.div, {
                                      className: `framer-cd4lyb`,
                                      children: [
                                        d(S, {
                                          __fromCanvasComponent: !0,
                                          children: d(s, {
                                            children: d(`h2`, {
                                              className: `framer-styles-preset-ojsfn5`,
                                              "data-styles-preset": `VQBQVu8qk`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                              },
                                              children: `Enterprise`,
                                            }),
                                          }),
                                          className: `framer-1m0j8p9`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        d(S, {
                                          __fromCanvasComponent: !0,
                                          children: d(s, {
                                            children: d(`h6`, {
                                              className: `framer-styles-preset-ojsfn5`,
                                              "data-styles-preset": `VQBQVu8qk`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                              },
                                              children: `Mission critical sites`,
                                            }),
                                          }),
                                          className: `framer-wqwg4l`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(h.div, {
                                      className: `framer-1dw8r81`,
                                      "data-framer-name": `1`,
                                      children: d(h.div, { className: `framer-166msla` }),
                                    }),
                                    f(h.div, {
                                      className: `framer-1vw4yps`,
                                      children: [
                                        d(h.div, {
                                          className: `framer-18i0w7w`,
                                          children: d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-ojsfn5`,
                                                "data-styles-preset": `VQBQVu8qk`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                                },
                                                children: `Custom`,
                                              }),
                                            }),
                                            className: `framer-12i0bek`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        d(h.div, {
                                          className: `framer-arsrrp`,
                                          "data-border": !0,
                                          children: d(S, {
                                            __fromCanvasComponent: !0,
                                            children: d(s, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-rhbxb3`,
                                                "data-styles-preset": `vvG68NbwN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: `Credits with volume discounts`,
                                              }),
                                            }),
                                            className: `framer-g6csfz`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    d(h.div, {
                                      className: `framer-1etx5sa`,
                                      "data-framer-name": `1`,
                                      children: d(h.div, { className: `framer-rtrirf` }),
                                    }),
                                    f(h.div, {
                                      className: `framer-whxeth`,
                                      children: [
                                        f(h.div, {
                                          className: `framer-wvsvtp`,
                                          "data-framer-name": `1`,
                                          children: [
                                            d(W, {
                                              animated: !1,
                                              className: `framer-4aylwg`,
                                              DTFJRR839: !0,
                                              layoutId: `mCz4X4NXC`,
                                              pJdIdADIa: !0,
                                              XI2ObiqYx: !0,
                                            }),
                                            d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `Custom limits`,
                                                }),
                                              }),
                                              className: `framer-jjqgvq`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        f(h.div, {
                                          className: `framer-t5tanu`,
                                          "data-framer-name": `1`,
                                          children: [
                                            d(W, {
                                              animated: !1,
                                              className: `framer-xug0nn`,
                                              DTFJRR839: !0,
                                              layoutId: `a1f0mlucR`,
                                              pJdIdADIa: !0,
                                              XI2ObiqYx: !0,
                                            }),
                                            d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `Unlimited editors`,
                                                }),
                                              }),
                                              className: `framer-6km8re`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        f(h.div, {
                                          className: `framer-10h001j`,
                                          "data-framer-name": `1`,
                                          children: [
                                            d(W, {
                                              animated: !1,
                                              className: `framer-gr18nz`,
                                              DTFJRR839: !0,
                                              layoutId: `Hz7EsEapH`,
                                              pJdIdADIa: !0,
                                              XI2ObiqYx: !0,
                                            }),
                                            d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `Enterprise-grade security`,
                                                }),
                                              }),
                                              className: `framer-1xwvft3`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        f(h.div, {
                                          className: `framer-lkrfnq`,
                                          "data-framer-name": `1`,
                                          children: [
                                            d(W, {
                                              animated: !1,
                                              className: `framer-16uj24e`,
                                              DTFJRR839: !0,
                                              layoutId: `Brq5IsvAr`,
                                              pJdIdADIa: !0,
                                              XI2ObiqYx: !0,
                                            }),
                                            d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `Uptime guarantee`,
                                                }),
                                              }),
                                              className: `framer-804sae`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        f(h.div, {
                                          className: `framer-1n3awar`,
                                          "data-framer-name": `1`,
                                          children: [
                                            d(W, {
                                              animated: !1,
                                              className: `framer-xpp360`,
                                              DTFJRR839: !0,
                                              layoutId: `UKrne4H61`,
                                              pJdIdADIa: !0,
                                              XI2ObiqYx: !0,
                                            }),
                                            d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `SCIM`,
                                                }),
                                              }),
                                              className: `framer-5714ry`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        f(h.div, {
                                          className: `framer-1p86jj0`,
                                          "data-framer-name": `1`,
                                          children: [
                                            d(W, {
                                              animated: !1,
                                              className: `framer-33naib`,
                                              DTFJRR839: !0,
                                              layoutId: `hF2M5VTJZ`,
                                              pJdIdADIa: !0,
                                              XI2ObiqYx: !0,
                                            }),
                                            d(S, {
                                              __fromCanvasComponent: !0,
                                              children: d(s, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-rhbxb3`,
                                                  "data-styles-preset": `vvG68NbwN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                                  },
                                                  children: `SSO`,
                                                }),
                                              }),
                                              className: `framer-1o1nuyo`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    d(h.div, {
                                      className: `framer-1k7r3cg`,
                                      children: d(te, {
                                        links: [
                                          {
                                            href: { webPageId: `CRh1Z3ynB` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `CRh1Z3ynB` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          d(y, {
                                            breakpoint: C,
                                            overrides: {
                                              XCve8aNGG: {
                                                width: `calc(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) - 40px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2570.9 +
                                                  20 +
                                                  839.9 +
                                                  15 +
                                                  0,
                                              },
                                            },
                                            children: d(N, {
                                              height: 35,
                                              width: `calc(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px) / 4, 1px) - 40px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                20 +
                                                839.9 +
                                                20 +
                                                263.2,
                                              children: d(F, {
                                                className: `framer-1x7ifhg-container`,
                                                nodeId: `LPI6jSUvy`,
                                                rendersWithMotion: !0,
                                                scopeId: `W7_YvB5xe`,
                                                children: d(y, {
                                                  breakpoint: C,
                                                  overrides: { XCve8aNGG: { aq3hTZ9m1: e[1] } },
                                                  children: d(U, {
                                                    aq3hTZ9m1: e[0],
                                                    height: `100%`,
                                                    id: `LPI6jSUvy`,
                                                    kw6l_suoH: `Request Trial`,
                                                    layoutId: `LPI6jSUvy`,
                                                    MBD8rTH3H: `rgba(255, 255, 255, 0.1)`,
                                                    N15cKHn29: `click-request-trial`,
                                                    rm8ThjdVN: 14,
                                                    style: { width: `100%` },
                                                    variant: Z(`oWhy0mIFM`),
                                                    width: `100%`,
                                                    xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          I() &&
                            d(y, {
                              breakpoint: C,
                              overrides: { Rim0H5tYI: { "data-border": !0 } },
                              children: f(h.div, {
                                className: `framer-jhkb4r hidden-rq9wj3 hidden-h66uw9`,
                                "data-framer-name": `Header`,
                                id: L,
                                ref: de,
                                children: [
                                  f(h.div, {
                                    className: `framer-1tsh42f`,
                                    children: [
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`p`, {
                                            className: `framer-styles-preset-h8ll8p`,
                                            "data-styles-preset": `BST5CE1TC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                            },
                                            children: `Enterprise`,
                                          }),
                                        }),
                                        className: `framer-7ucu4h`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      d(S, {
                                        __fromCanvasComponent: !0,
                                        children: d(s, {
                                          children: d(`p`, {
                                            className: `framer-styles-preset-h8ll8p`,
                                            "data-styles-preset": `BST5CE1TC`,
                                            dir: `auto`,
                                            children: `Custom limits, enterprise security, and dedicated support.`,
                                          }),
                                        }),
                                        className: `framer-1h3ljiz`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `center`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  d(te, {
                                    links: [
                                      {
                                        href: { webPageId: `CRh1Z3ynB` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `CRh1Z3ynB` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      d(y, {
                                        breakpoint: C,
                                        overrides: {
                                          Rim0H5tYI: {
                                            y: (_?.y || 0) + 0 + 0 + 0 + 194 + 0 + 1213.1 + 62.5,
                                          },
                                        },
                                        children: d(N, {
                                          height: 35,
                                          children: d(F, {
                                            className: `framer-1v9273m-container`,
                                            nodeId: `Vty8AD0wI`,
                                            rendersWithMotion: !0,
                                            scopeId: `W7_YvB5xe`,
                                            children: d(y, {
                                              breakpoint: C,
                                              overrides: { Rim0H5tYI: { aq3hTZ9m1: e[1] } },
                                              children: d(U, {
                                                aq3hTZ9m1: e[0],
                                                height: `100%`,
                                                id: `Vty8AD0wI`,
                                                kw6l_suoH: `Request Trial`,
                                                layoutId: `Vty8AD0wI`,
                                                MBD8rTH3H: `rgba(255, 255, 255, 0.1)`,
                                                N15cKHn29: `click-request-trial`,
                                                rm8ThjdVN: 14,
                                                variant: Z(`oWhy0mIFM`),
                                                width: `100%`,
                                                xdxfhd9wh: `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          f(h.div, {
                            className: `framer-2ah89c`,
                            children: [
                              f(h.div, {
                                className: `framer-15jd662`,
                                children: [
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-rhbxb3`,
                                        "data-styles-preset": `vvG68NbwN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Additional editors are `,
                                      }),
                                    }),
                                    className: `framer-1mr5fqk`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(fr, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-rhbxb3`,
                                        "data-styles-preset": `vvG68NbwN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `$20`,
                                      }),
                                    }),
                                    className: `framer-524qrl`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-rhbxb3`,
                                        "data-styles-preset": `vvG68NbwN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: ` / month,`,
                                      }),
                                    }),
                                    className: `framer-kndyim`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: f(`p`, {
                                    className: `framer-styles-preset-rhbxb3`,
                                    "data-styles-preset": `vvG68NbwN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                    },
                                    children: [
                                      `and viewers are free. `,
                                      d(T, {
                                        href: { hash: `:G7d0yjABA`, webPageId: `W7_YvB5xe` },
                                        motionChild: !0,
                                        nodeId: `udqbTb9ed`,
                                        openInNewTab: !1,
                                        preserveParams: !1,
                                        relValues: [],
                                        scopeId: `W7_YvB5xe`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-60u1z4`,
                                          "data-styles-preset": `uexyNUZEC`,
                                          children: `Learn more`,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-2wqzw`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      d(h.div, {
                        className: `framer-19pebr4`,
                        children: d(y, {
                          breakpoint: C,
                          overrides: {
                            Rim0H5tYI: { y: (_?.y || 0) + 0 + 0 + 0 + 1621.3 + 120 + 0 },
                            XCve8aNGG: {
                              width: `calc(min(${_?.width || `100vw`}, 1352px) - 40px)`,
                              y: (_?.y || 0) + 0 + 0 + 0 + 3762 + 80 + 0,
                            },
                          },
                          children: d(N, {
                            height: 120,
                            y: (_?.y || 0) + 0 + 0 + 0 + 1481.3 + 120 + 0,
                            children: d(F, {
                              className: `framer-1o2jh4m-container`,
                              nodeId: `jzTVtU_d5`,
                              rendersWithMotion: !0,
                              scopeId: `W7_YvB5xe`,
                              children: d(y, {
                                breakpoint: C,
                                overrides: {
                                  XCve8aNGG: { style: { width: `100%` }, variant: Z(`DrKryzFem`) },
                                },
                                children: d(rt, {
                                  height: `100%`,
                                  id: `jzTVtU_d5`,
                                  KSs6HE9bR: !0,
                                  kzVXWIVq_: `Meet our customers`,
                                  layoutId: `jzTVtU_d5`,
                                  variant: Z(`C2ZQaN0tU`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      f(h.div, {
                        className: `framer-uo2owj`,
                        id: R,
                        ref: z,
                        children: [
                          d(h.div, {
                            className: `framer-ofmrkd`,
                            "data-framer-name": `collaboration-scroll-anchor`,
                            id: B,
                            ref: V,
                          }),
                          d(y, {
                            breakpoint: C,
                            overrides: {
                              Rim0H5tYI: { y: (_?.y || 0) + 0 + 0 + 0 + 1901.3 + 0 },
                              XCve8aNGG: { y: (_?.y || 0) + 0 + 0 + 0 + 3962 + 0 },
                            },
                            children: d(N, {
                              height: 3317,
                              width: `min(max(min(min(${_?.width || `100vw`}, 1352px) - 40px, 1200px), 1px), 1200px)`,
                              y: (_?.y || 0) + 0 + 0 + 0 + 1761.3 + 0,
                              children: d(F, {
                                className: `framer-1mc05q1-container`,
                                nodeId: `X9fix2aHu`,
                                rendersWithMotion: !0,
                                scopeId: `W7_YvB5xe`,
                                children: d(y, {
                                  breakpoint: C,
                                  overrides: { XCve8aNGG: { variant: Z(`I069pG6Q0`) } },
                                  children: d(X, {
                                    height: `100%`,
                                    id: `X9fix2aHu`,
                                    layoutId: `X9fix2aHu`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: Z(`rGoyM38U4`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      d(h.div, {
                        className: `framer-48apz2`,
                        "data-framer-name": `Addons Scroll Section`,
                        id: he,
                        ref: _e,
                      }),
                      d(h.div, {
                        className: `framer-bnvgpk`,
                        children: d(S, {
                          __fromCanvasComponent: !0,
                          children: d(s, {
                            children: d(`p`, {
                              className: `framer-styles-preset-1chqh0j`,
                              "data-styles-preset": `owysJjUmB`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                              },
                              children: `All prices are monthly and billed according to the billing cycle selected at checkout. Any applicable sales tax will be added at checkout based on your location.`,
                            }),
                          }),
                          className: `framer-1f0rsav`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      d(h.div, { className: `framer-vmmt8o`, "data-framer-name": `Spacer` }),
                      d(h.div, {
                        className: `framer-1bjqzjl`,
                        "data-framer-name": `FAQs 2025`,
                        children: f(h.div, {
                          className: `framer-phwl11`,
                          id: ve,
                          ref: ye,
                          children: [
                            d(h.div, {
                              className: `framer-1u94ggq`,
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: d(`h2`, {
                                    className: `framer-styles-preset-fbtpvo`,
                                    "data-styles-preset": `qRN7MgZKk`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `start` },
                                    children: `FAQ`,
                                  }),
                                }),
                                className: `framer-19bcu4p`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            f(h.div, {
                              className: `framer-wlvotq`,
                              id: be,
                              ref: xe,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What are credits?`,
                                    }),
                                  }),
                                  className: `framer-1japd4o`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: [
                                      d(`p`, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Every paid plan includes monthly credits that power Agents, Localization, and other AI features. Credits are shared across your entire workspace and its editors. Running low? Upgrade a site or add an add-on for more.`,
                                      }),
                                      d(`p`, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `¹ On the free plan, when your workspace has no active subscriptions, you receive 500 credits to try Agents. Upgrade any of your sites to unlock more.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-k3x2wy`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-150bxr9`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What’s included in the Free plan?`,
                                    }),
                                  }),
                                  className: `framer-6pnihy`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Projects on the Free plan include access to 10 CMS collections, 1,000 pages, 5 MB file uploads, and one free locale to try. This makes it easy to explore Framer, use it as a design tool, or create templates. To connect a custom domain, you’ll need to upgrade to a paid plan. Workspaces without a subscription also support collaboration with up to three editors. `,
                                    }),
                                  }),
                                  className: `framer-19ujg8q`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-6317v1`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `Which plan is right for me?`,
                                    }),
                                  }),
                                  className: `framer-rs01x7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(y, {
                                  breakpoint: C,
                                  overrides: {
                                    XCve8aNGG: {
                                      children: d(s, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-h8ll8p`,
                                          "data-styles-preset": `BST5CE1TC`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                          },
                                          children: `Our Free plan is ideal for non-commercial use. The Basic plan caters to students, freelancers, and small studios. The Pro plan is designed for teams at agencies, startups, and scale-ups who run their full marketing stack on Framer. The Enterprise plan is tailored towards teams that need custom limits, annual billing, and dedicated support.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: d(S, {
                                    __fromCanvasComponent: !0,
                                    children: d(s, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-h8ll8p`,
                                        "data-styles-preset": `BST5CE1TC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Our Free plan is ideal for non-commercial use. The Basic plan caters to students, freelancers, and small studios. The Pro plan is designed for teams at agencies, startups, and scale-ups who run their full marketing stack on Framer. The Enterprise plan is tailored towards teams that need custom limits, annual billing, and dedicated support.`,
                                      }),
                                    }),
                                    className: `framer-1cmfpbj`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-1ivozwr`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `How are extra editors billed?`,
                                    }),
                                  }),
                                  className: `framer-1hv21xf`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Editors are billed per seat and can be added to your workspace or projects at any time. We will notify you when an editor is added to your billing, and you will be charged within 24 hours.`,
                                    }),
                                  }),
                                  className: `framer-z17ay8`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-1uzyfrm`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What happens if I go over a limit?`,
                                    }),
                                  }),
                                  className: `framer-1nv11xh`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `When you reach certain limits, we will ask you to upgrade your plan in Framer. For other limits, like bandwidth, we allow you to exceed your limit for one month. You’ll receive a notification via email so you can upgrade your plan accordingly.`,
                                    }),
                                  }),
                                  className: `framer-1f5ysb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-139on2n`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `How many add-ons can you purchase on the Pro plan? `,
                                    }),
                                  }),
                                  className: `framer-166aofo`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: d(`strong`, {
                                        children: `With add-ons you can have up to 40,000 CMS items, 40 CMS collections, 2 TB of bandwidth, 700 pages, and 1.5M events on the Pro plan.`,
                                      }),
                                    }),
                                  }),
                                  className: `framer-7mnnam`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-17jidii`,
                              id: Se,
                              ref: Ce,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `How are events billed for the Convert add-on?`,
                                    }),
                                  }),
                                  className: `framer-7yyc3i`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `You will be billed based on the number of analytics events your site generates each month. An event can be a page view, a click on a tracked link, or a submission through a tracked form. With the add-on, you can also run up to 5 A/B tests. The add-on is billed as part of the billing cycle for the associated plan.`,
                                    }),
                                  }),
                                  className: `framer-vzipg8`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-6z2w80`,
                              id: we,
                              ref: Te,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What’s included in the Advanced Hosting add-on?`,
                                    }),
                                  }),
                                  className: `framer-6vx2ij`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `With the Advanced Hosting add-on, you can add up to 6 rewrites, 6 Firewall rules, and set custom values for the Permissions-Policy, Referrer-Policy, and X-Frame-Options headers. You can also upload up to 500 static files. Enterprise plans include up to 50 firewall rules.`,
                                    }),
                                  }),
                                  className: `framer-8xfc1g`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-1jcthhb`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What if my open-source or side project receives a lot of traffic?`,
                                    }),
                                  }),
                                  className: `framer-1tc01io`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: f(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: [
                                        `We can be flexible with our limits for open-source or non-revenue-based side projects. `,
                                        d(T, {
                                          href: { webPageId: `Rm5Dbx3FA` },
                                          motionChild: !0,
                                          nodeId: `GzY3_U5fU`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `W7_YvB5xe`,
                                          smoothScroll: !1,
                                          children: d(h.a, {
                                            className: `framer-styles-preset-60u1z4`,
                                            "data-styles-preset": `uexyNUZEC`,
                                            children: d(`strong`, {
                                              children: `Please contact us`,
                                            }),
                                          }),
                                        }),
                                        ` to discuss the options.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-1ualeji`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-1xv7j3w`,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What payment methods do you offer?`,
                                    }),
                                  }),
                                  className: `framer-1bwq6bw`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `You can pay for your Framer subscription with a credit card or, in some regions, via PayPal. Alternatively, we offer custom billing options, including credit cards or bank transfers, for Enterprise plans.`,
                                    }),
                                  }),
                                  className: `framer-1ah9ear`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-ue8o3d`,
                              "data-border": !0,
                              children: [
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-ojsfn5`,
                                      "data-styles-preset": `VQBQVu8qk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))`,
                                      },
                                      children: `What is your refund policy?`,
                                    }),
                                  }),
                                  className: `framer-wx099h`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(S, {
                                  __fromCanvasComponent: !0,
                                  children: d(s, {
                                    children: f(`p`, {
                                      className: `framer-styles-preset-h8ll8p`,
                                      "data-styles-preset": `BST5CE1TC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: [
                                        d(`strong`, {
                                          children: `If you live in the EU or Turkey, you are legally eligible for a refund if your subscription was purchased within the last 14 days. To claim your refund, please `,
                                        }),
                                        d(T, {
                                          href: { webPageId: `Rm5Dbx3FA` },
                                          motionChild: !0,
                                          nodeId: `L2xDBiQBr`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `W7_YvB5xe`,
                                          smoothScroll: !1,
                                          children: d(h.a, {
                                            className: `framer-styles-preset-60u1z4`,
                                            "data-styles-preset": `uexyNUZEC`,
                                            children: d(`strong`, {
                                              children: `contact our Support team`,
                                            }),
                                          }),
                                        }),
                                        d(`strong`, {
                                          children: `; they will cancel your subscription and process the refund.`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-1gg1ubo`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            d(h.div, {
                              className: `framer-13rhkcg`,
                              children: d(S, {
                                __fromCanvasComponent: !0,
                                children: d(s, {
                                  children: f(`p`, {
                                    className: `framer-styles-preset-1chqh0j`,
                                    "data-styles-preset": `owysJjUmB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6))`,
                                    },
                                    children: [
                                      `Explore our `,
                                      d(T, {
                                        href: {
                                          pathVariables: { gWdi1Mrgn: `account` },
                                          unresolvedPathSlugs: {
                                            gWdi1Mrgn: {
                                              collectionId: `t2zy6QLBM`,
                                              collectionItemId: `PFuCeIlSr`,
                                            },
                                          },
                                          webPageId: `Tn8SJ835I`,
                                        },
                                        motionChild: !0,
                                        nodeId: `XwwboqQjo`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `W7_YvB5xe`,
                                        smoothScroll: !1,
                                        children: d(h.a, {
                                          className: `framer-styles-preset-60u1z4`,
                                          "data-styles-preset": `uexyNUZEC`,
                                          children: `help section`,
                                        }),
                                      }),
                                      ` for all articles related to accounts and billing.`,
                                    ],
                                  }),
                                }),
                                className: `framer-1krb0xh`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ZBrth.framer-1toeq68, .framer-ZBrth .framer-1toeq68 { display: block; }`,
        `.framer-ZBrth.framer-rq9wj3 { align-content: center; align-items: center; background-color: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1352px; }`,
        `.framer-ZBrth .framer-1vnprg9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1352px; overflow: visible; padding: 0px 20px 100px 20px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1lj4euy { align-content: flex-end; align-items: flex-end; background-color: var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; padding: 100px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1bz3p6l { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 420px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZBrth .framer-1v5vnl4-container, .framer-ZBrth .framer-1v9273m-container, .framer-ZBrth .framer-1o2jh4m-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ZBrth .framer-181yd5a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1eljwvu { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-dqa8k2, .framer-ZBrth .framer-nt4vdl { --border-bottom-width: 0px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: auto; justify-content: flex-start; padding: 20px; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-1obqgy5, .framer-ZBrth .framer-1m7sabw, .framer-ZBrth .framer-s55nmh, .framer-ZBrth .framer-cd4lyb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-xty4fz, .framer-ZBrth .framer-1hnu3qq, .framer-ZBrth .framer-1vhncvb, .framer-ZBrth .framer-bytm5y, .framer-ZBrth .framer-8avi2m, .framer-ZBrth .framer-1ujiqlv, .framer-ZBrth .framer-1m0j8p9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZBrth .framer-1rjpctb, .framer-ZBrth .framer-fcmu5o, .framer-ZBrth .framer-1kb2kzq, .framer-ZBrth .framer-wqwg4l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 100%; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-9012ex, .framer-ZBrth .framer-1fp3rnk, .framer-ZBrth .framer-11rqpge, .framer-ZBrth .framer-6wwa7p, .framer-ZBrth .framer-1qlvsk6, .framer-ZBrth .framer-100dcin, .framer-ZBrth .framer-1dw8r81, .framer-ZBrth .framer-1etx5sa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-fbird6, .framer-ZBrth .framer-1w9cf47, .framer-ZBrth .framer-6p12ui, .framer-ZBrth .framer-f267wx, .framer-ZBrth .framer-xmqd09, .framer-ZBrth .framer-166msla, .framer-ZBrth .framer-rtrirf { background-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-128vv15, .framer-ZBrth .framer-194nlf5, .framer-ZBrth .framer-1ewbc2o, .framer-ZBrth .framer-1icjtd1, .framer-ZBrth .framer-1u3r6nj, .framer-ZBrth .framer-3wm5sf, .framer-ZBrth .framer-1vw4yps, .framer-ZBrth .framer-whxeth { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-tng3gh, .framer-ZBrth .framer-5tws99, .framer-ZBrth .framer-lwjpel, .framer-ZBrth .framer-18i0w7w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-6blk7o { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 21px; overflow: var(--overflow-clip-fallback, clip); padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-6xcqwk, .framer-ZBrth .framer-arsrrp { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 34px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 10px 8px 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ZBrth .framer-17bcya5, .framer-ZBrth .framer-1ockqr9, .framer-ZBrth .framer-2uu045, .framer-ZBrth .framer-u2a4gr, .framer-ZBrth .framer-f0dx67, .framer-ZBrth .framer-13zn71j, .framer-ZBrth .framer-8q2loq, .framer-ZBrth .framer-1vz325y, .framer-ZBrth .framer-qlt57v, .framer-ZBrth .framer-1jvf4fm, .framer-ZBrth .framer-1p5uybc, .framer-ZBrth .framer-1xmjnm3, .framer-ZBrth .framer-1vjy2u0, .framer-ZBrth .framer-1e1a3wc, .framer-ZBrth .framer-15au4x4, .framer-ZBrth .framer-g6csfz, .framer-ZBrth .framer-jjqgvq, .framer-ZBrth .framer-6km8re, .framer-ZBrth .framer-1xwvft3, .framer-ZBrth .framer-804sae, .framer-ZBrth .framer-5714ry, .framer-ZBrth .framer-1o1nuyo { flex: 1 0 0px; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZBrth .framer-wphvau, .framer-ZBrth .framer-1buvnu6, .framer-ZBrth .framer-1v7t2ua, .framer-ZBrth .framer-2ywa0f, .framer-ZBrth .framer-1bpaf0y, .framer-ZBrth .framer-151j3b2, .framer-ZBrth .framer-abcg1s, .framer-ZBrth .framer-10wwbnz, .framer-ZBrth .framer-19qxyyf, .framer-ZBrth .framer-1f77cwa, .framer-ZBrth .framer-1439jg1, .framer-ZBrth .framer-5ttuav, .framer-ZBrth .framer-djlwi0, .framer-ZBrth .framer-1tptf47, .framer-ZBrth .framer-wvsvtp, .framer-ZBrth .framer-t5tanu, .framer-ZBrth .framer-10h001j, .framer-ZBrth .framer-lkrfnq, .framer-ZBrth .framer-1n3awar, .framer-ZBrth .framer-1p86jj0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-zints3, .framer-ZBrth .framer-t63nz0, .framer-ZBrth .framer-sbzb74, .framer-ZBrth .framer-1o0pfav, .framer-ZBrth .framer-1sdz80c, .framer-ZBrth .framer-h7k5zt, .framer-ZBrth .framer-3paqy8, .framer-ZBrth .framer-gs7rpm, .framer-ZBrth .framer-1pku78u, .framer-ZBrth .framer-rmx4zx, .framer-ZBrth .framer-kmbki8, .framer-ZBrth .framer-18nf1ly, .framer-ZBrth .framer-5hopcj, .framer-ZBrth .framer-1ddr4hy, .framer-ZBrth .framer-4aylwg, .framer-ZBrth .framer-xug0nn, .framer-ZBrth .framer-gr18nz, .framer-ZBrth .framer-16uj24e, .framer-ZBrth .framer-xpp360, .framer-ZBrth .framer-33naib { --17kkcf8: rgba(136, 136, 136, 0.2); --1iwhep7: 2.5; --1l3yetw: #666666; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 12px; }`,
        `.framer-ZBrth .framer-2h087, .framer-ZBrth .framer-1k7r3cg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1aea1x6-container, .framer-ZBrth .framer-uu2jsp-container, .framer-ZBrth .framer-2fbisp-container, .framer-ZBrth .framer-u8pkh8-container, .framer-ZBrth .framer-1mrjcv3-container, .framer-ZBrth .framer-11b9oer-container, .framer-ZBrth .framer-cs9mhr-container, .framer-ZBrth .framer-1x7ifhg-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-bayarg, .framer-ZBrth .framer-16vrd4t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-dexl8o, .framer-ZBrth .framer-lhwpve, .framer-ZBrth .framer-12i0bek, .framer-ZBrth .framer-7ucu4h, .framer-ZBrth .framer-1mr5fqk, .framer-ZBrth .framer-524qrl, .framer-ZBrth .framer-kndyim, .framer-ZBrth .framer-2wqzw, .framer-ZBrth .framer-19bcu4p { --framer-text-wrap-override: none; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZBrth .framer-qprum8 { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: rgba(255, 255, 255, 0.18); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0px; --framer-input-font-line-height: 1.3em; --framer-input-font-size: 14px; --framer-input-font-weight: 500; --framer-input-icon-color: var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)); --framer-input-invalid-text-color: var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3); --framer-input-padding: 8px 10px 8px 10px; flex: none; height: 34px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-hbxro0 { background-color: rgba(255, 255, 255, 0.1); flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-19pbnnv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-10992xd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1jaea25 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 20px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ZBrth .framer-ma3iyc { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: rgba(255, 255, 255, 0.18); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0px; --framer-input-font-line-height: 1.3em; --framer-input-font-open-type-features: 'cv01' on, 'cv09' on; --framer-input-font-size: 14px; --framer-input-font-weight: 500; --framer-input-icon-color: var(--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8, rgba(255, 255, 255, 0.8)); --framer-input-invalid-text-color: var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3); --framer-input-padding: 8px 10px 8px 10px; flex: none; height: 34px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1v43tk1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1v3u8cg { --border-bottom-width: 0px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #1a1a1a); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: auto; justify-content: flex-start; padding: 20px; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-jhkb4r { align-content: center; align-items: center; background: linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px 0px 0px 1px var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1)); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; max-width: 1200px; padding: 20px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1tsh42f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-1h3ljiz { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-2ah89c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-15jd662 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-19pebr4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-uo2owj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-ofmrkd { bottom: 888px; flex: none; height: 542px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; scroll-margin-top: 60px; width: 15px; z-index: 1; }`,
        `.framer-ZBrth .framer-1mc05q1-container { flex: 1 0 0px; height: auto; max-width: 1200px; position: relative; width: 1px; }`,
        `.framer-ZBrth .framer-48apz2 { -webkit-user-select: none; bottom: 2781px; flex: none; height: 660px; left: 0px; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 1; }`,
        `.framer-ZBrth .framer-bnvgpk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 720px; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1f0rsav { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 720px; overflow: visible; position: relative; width: 720px; }`,
        `.framer-ZBrth .framer-vmmt8o { flex: none; height: 120px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1bjqzjl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-phwl11 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 420px; overflow: visible; padding: 0px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-ZBrth .framer-1u94ggq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-wlvotq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 20px 0px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-ZBrth .framer-1japd4o, .framer-ZBrth .framer-6pnihy, .framer-ZBrth .framer-rs01x7, .framer-ZBrth .framer-1hv21xf, .framer-ZBrth .framer-1nv11xh, .framer-ZBrth .framer-166aofo, .framer-ZBrth .framer-7yyc3i, .framer-ZBrth .framer-6vx2ij, .framer-ZBrth .framer-1tc01io, .framer-ZBrth .framer-1bwq6bw, .framer-ZBrth .framer-wx099h { --framer-text-wrap-override: balance; -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; width: 100%; }`,
        `.framer-ZBrth .framer-k3x2wy, .framer-ZBrth .framer-19ujg8q, .framer-ZBrth .framer-1cmfpbj, .framer-ZBrth .framer-z17ay8, .framer-ZBrth .framer-1f5ysb, .framer-ZBrth .framer-7mnnam, .framer-ZBrth .framer-vzipg8, .framer-ZBrth .framer-8xfc1g, .framer-ZBrth .framer-1ualeji, .framer-ZBrth .framer-1ah9ear, .framer-ZBrth .framer-1gg1ubo { --framer-text-wrap-override: none; flex: none; height: auto; max-width: 720px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-150bxr9, .framer-ZBrth .framer-6317v1, .framer-ZBrth .framer-1ivozwr, .framer-ZBrth .framer-1uzyfrm, .framer-ZBrth .framer-139on2n, .framer-ZBrth .framer-1jcthhb, .framer-ZBrth .framer-1xv7j3w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 25px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-17jidii, .framer-ZBrth .framer-6z2w80 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 25px 0px 20px 0px; position: relative; scroll-margin-top: 80px; width: 100%; }`,
        `.framer-ZBrth .framer-ue8o3d { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #191919); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 25px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-13rhkcg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-ZBrth .framer-1krb0xh { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 720px; overflow: visible; position: relative; width: 100%; }`,
        ...ve,
        ...Se,
        ...Ce,
        ...yn,
        ...$e,
        ...Ee,
        ...Ye,
        ...Me,
        `.framer-ZBrth[data-border="true"]::after, .framer-ZBrth [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1351.98px) { .framer-ZBrth.framer-rq9wj3 { width: 810px; } .framer-ZBrth .framer-1lj4euy { padding: 80px 0px 60px 0px; } .framer-ZBrth .framer-1bz3p6l { width: 340px; } .framer-ZBrth .framer-181yd5a { gap: 15px; } .framer-ZBrth .framer-jhkb4r { --border-bottom-width: 1px; --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #141414); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background: unset; box-shadow: unset; gap: 5px; } .framer-ZBrth .framer-15jd662 { overflow: visible; } .framer-ZBrth .framer-ofmrkd { height: 539px; } .framer-ZBrth .framer-48apz2 { bottom: 2501px; } .framer-ZBrth .framer-1bjqzjl { gap: 20px; }}`,
        `@media (max-width: 809.98px) { .framer-ZBrth.framer-rq9wj3 { width: 390px; } .framer-ZBrth .framer-1lj4euy { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: center; padding: 50px 0px 50px 0px; } .framer-ZBrth .framer-1bz3p6l { --framer-text-wrap-override: balance; } .framer-ZBrth .framer-1eljwvu { flex-direction: column; } .framer-ZBrth .framer-dqa8k2 { --border-bottom-width: 1px; --border-color: #222222; --border-right-width: 0px; align-self: unset; flex: none; height: min-content; width: 100%; } .framer-ZBrth .framer-2h087, .framer-ZBrth .framer-10992xd, .framer-ZBrth .framer-1k7r3cg { flex: none; height: min-content; padding: 15px 0px 0px 0px; } .framer-ZBrth .framer-nt4vdl { --border-bottom-width: 1px; --border-right-width: 0px; align-self: unset; flex: none; height: min-content; width: 100%; } .framer-ZBrth .framer-1jaea25 { flex: none; width: 100%; } .framer-ZBrth .framer-1v43tk1 { padding: 15px 0px 0px 0px; } .framer-ZBrth .framer-1v3u8cg { --border-color: var(--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca, #141414); --border-left-width: 0px; --border-top-width: 1px; align-self: unset; flex: none; height: min-content; width: 100%; } .framer-ZBrth .framer-19pebr4 { overflow: visible; padding: 80px 0px 0px 0px; z-index: 1; } .framer-ZBrth .framer-1o2jh4m-container { width: 100%; } .framer-ZBrth .framer-uo2owj { justify-content: flex-start; } .framer-ZBrth .framer-ofmrkd { bottom: 1035px; } .framer-ZBrth .framer-48apz2 { bottom: 2858px; } .framer-ZBrth .framer-bnvgpk, .framer-ZBrth .framer-wlvotq, .framer-ZBrth .framer-150bxr9, .framer-ZBrth .framer-6317v1, .framer-ZBrth .framer-1ivozwr, .framer-ZBrth .framer-1uzyfrm, .framer-ZBrth .framer-139on2n, .framer-ZBrth .framer-17jidii, .framer-ZBrth .framer-6z2w80, .framer-ZBrth .framer-1jcthhb, .framer-ZBrth .framer-1xv7j3w, .framer-ZBrth .framer-ue8o3d, .framer-ZBrth .framer-13rhkcg { padding: 30px 0px 30px 0px; } .framer-ZBrth .framer-1f0rsav { flex: 1 0 0px; width: 1px; } .framer-ZBrth .framer-vmmt8o { height: 50px; } .framer-ZBrth .framer-1bjqzjl { gap: 20px; overflow: hidden; } .framer-ZBrth .framer-phwl11 { order: 0; } .framer-ZBrth .framer-1u94ggq { align-content: flex-start; align-items: flex-start; padding: 30px 0px 0px 0px; }}`,
      ],
      `framer-ZBrth`
    )),
    (Q.displayName = `Control`),
    (Q.defaultProps = { height: 8115, width: 1352 }),
    ($ = [
      { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
      { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
    ]),
    x(
      Q,
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
        ...Qn,
        ...tr,
        ...nr,
        ...ar,
        ...pr,
        ...mr,
        ...k(be),
        ...k(B),
        ...k(we),
        ...k(vn),
        ...k(et),
        ...k(De),
        ...k(Xe),
        ...k(Ne),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) =>
        w(
          [
            () => A(q, {}, t),
            () => A(U, {}, t),
            () => A(J, {}, t),
            () => A(rt, {}, t),
            () => A(X, {}, t),
          ],
          t
        ),
    }),
    (Tr = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerW7_YvB5xe`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerTrackingIds: `[{"id":"_fss8g7","trackingId":"start-for-free"},{"id":"_ngprtx","trackingId":"click-subscribe-basic"},{"id":"_1pel49d","trackingId":"click-subscribe-pro"},{"id":"_yyrnae","trackingId":"click-request-trial"}]`,
            framerResolvesOwnDefaults: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `8115`,
            framerContractVersion: `1`,
            framerScrollSections: `{"moiz96YMM":{"pattern":":moiz96YMM","name":"header"},"Id0OV0zbD":{"pattern":":Id0OV0zbD","name":"header"},"xIHzfYOb8":{"pattern":":xIHzfYOb8","name":"comparison-table"},"G7d0yjABA":{"pattern":":G7d0yjABA","name":"collaboration"},"YBLgl4Htm":{"pattern":":YBLgl4Htm","name":"addons"},"wq8FFNi8b":{"pattern":":wq8FFNi8b","name":"faq"},"cpPVy7P0g":{"pattern":":cpPVy7P0g","name":"faq-credits"},"ECvvNUQVw":{"pattern":":ECvvNUQVw","name":"convert-billing"},"PbcxvEhZD":{"pattern":":PbcxvEhZD","name":"advanced-hosting"}}`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1352`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Rim0H5tYI":{"layout":["fixed","auto"]},"XCve8aNGG":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Tr as __FramerMetadata__, Q as default, vr as queryParamNames };
//# sourceMappingURL=efG0kemjJPYm-4gPUa0Nit0euArrlAG4DbvuQmRZHIs.CaF4caUs.mjs.map
