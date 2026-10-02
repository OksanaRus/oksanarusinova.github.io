import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  H as t,
  L as n,
  M as r,
  O as i,
  S as a,
  W as o,
  c as s,
  m as c,
  s as l,
  u,
  x as d,
  y as f,
} from "./react.hMW2PJqY.mjs";
function p(e) {
  return (e.trim() || `/`).replace(/\/+$/, ``) || `/`;
}
function m(e) {
  let t = p(e);
  for (let e of St) if (t === e || t.startsWith(`${e}/`)) return e;
  return null;
}
function h(e) {
  return m(e) !== null;
}
function g() {
  return o === void 0 ? N : (m(o.location.pathname) ?? N);
}
function ee(e) {
  return `${g()}/${e.replace(/^\/+/, ``)}`;
}
function _(e) {
  let t = p(e);
  return St.some((e) => {
    let n = `${e}/result`;
    return t === n || t.startsWith(`${n}/`);
  });
}
function te() {
  return o === void 0 ? Ct : ee(`share?asset-provider=1`);
}
function v() {
  return o !== void 0 && h(o.location.pathname);
}
function ne() {
  Nt.forEach((e) => e());
}
function y(e) {
  if (o === void 0) return;
  let t = o.location.pathname,
    n = h(e) || h(t);
  ((Rt = t), n && ne());
}
function re() {
  o === void 0 ||
    typeof history > `u` ||
    ((Rt ||= o.location.pathname),
    (Ft ||=
      ((It = history.pushState.bind(history)),
      (Lt = history.replaceState.bind(history)),
      (history.pushState = (...e) => {
        let t = o.location.pathname,
          n = It?.(...e);
        return (y(t), n);
      }),
      (history.replaceState = (...e) => {
        let t = o.location.pathname,
          n = Lt?.(...e);
        return (y(t), n);
      }),
      !0)),
    !Pt &&
      ((Pt = !0),
      o.addEventListener(`popstate`, () => {
        y(Rt);
      })));
}
function b(e) {
  return o === void 0
    ? () => {}
    : (re(),
      Nt.add(e),
      () => {
        Nt.delete(e);
      });
}
function ie() {
  ((Z += 1), Bt?.abort(), (Bt = new AbortController()));
}
function ae(e) {
  if (!e || typeof e != `object`) return !1;
  let t = e;
  return (
    t.type === M &&
    typeof t.requestId == `string` &&
    t.requestId.length > 0 &&
    t.requestId.length < 160
  );
}
function oe(e, t = Date.now()) {
  K.set(e, t);
}
function se(e, t = Date.now()) {
  q.set(e, t);
}
function ce() {
  if (A.size <= jt) return;
  let e = Array.from(A.keys()),
    t = Math.max(0, A.size - jt);
  for (let n = 0; n < t; n += 1) {
    let t = e[n];
    t && A.delete(t);
  }
}
function le(e) {
  return (J.get(e) || 0) > 0;
}
function x(e) {
  if (!e || le(e)) {
    e && Y.add(e);
    return;
  }
  (Y.delete(e), URL.revokeObjectURL(e));
}
function ue() {
  (o !== void 0 && R !== null && o.clearTimeout(R),
    (R = null),
    L?.parentNode && L.parentNode.removeChild(L),
    (L = null),
    (I = null));
}
function de() {
  o !== void 0 && (X.forEach((e) => o.clearTimeout(e)), X.clear());
}
function fe(e, t) {
  if (!e) return;
  let n = J.get(e) || 0,
    r = t ? n + 1 : Math.max(0, n - 1);
  if (r > 0) {
    J.set(e, r);
    return;
  }
  (J.delete(e), Y.has(e) && x(e));
}
function pe(e) {
  let t = e?.now ?? Date.now(),
    n = !!e?.clearAll;
  for (let [e, r] of H.entries()) {
    let i = t - (K.get(e) ?? t) > Ot;
    (n || i) && !le(r) && (H.delete(e), K.delete(e), x(r));
  }
  if (n || H.size <= Dt) return;
  let r = Array.from(H.keys()).sort((e, t) => (K.get(e) ?? 0) - (K.get(t) ?? 0));
  for (let e of r) {
    if (H.size <= Dt) break;
    let t = H.get(e);
    !t || le(t) || (H.delete(e), K.delete(e), x(t));
  }
}
function me(e, t) {
  let n = H.get(e);
  (H.set(e, t), oe(e), n && n !== t && x(n), pe());
}
function he(e) {
  let t = e?.now ?? Date.now();
  for (let [e] of W.entries()) t - (q.get(e) ?? t) > At && (W.delete(e), q.delete(e));
  if (W.size <= kt) return;
  let n = Array.from(W.keys()).sort((e, t) => (q.get(e) ?? 0) - (q.get(t) ?? 0));
  for (let e of n) {
    if (W.size <= kt) break;
    (W.delete(e), q.delete(e));
  }
}
function ge() {
  pe({ clearAll: !0 });
}
function _e() {
  ke();
  for (let e of H.values()) x(e);
  (H.clear(),
    K.clear(),
    J.clear(),
    U.clear(),
    W.clear(),
    q.clear(),
    G.clear(),
    Y.clear(),
    ge(),
    de(),
    ue(),
    j.clear(),
    A.clear(),
    ce());
}
function S(e) {
  return o !== void 0 && e === Z && v();
}
function ve() {
  if (o === void 0) return;
  let e = v();
  if (e !== zt) {
    if (((zt = e), ie(), !e)) {
      _e();
      return;
    }
    (typeof document < `u` && He(), E());
  }
}
function ye() {
  if (o === void 0 || Ht) return;
  Ht = !0;
  let e = () => {
    v() && (ve(), E());
  };
  (b(e), o.addEventListener(`pageshow`, e), o.addEventListener(dt, e), e());
}
function be(e) {
  return typeof e == `string` && yt[e] ? yt[e] : `Polished`;
}
function C(e, t = 61) {
  let n = Number(e);
  return Number.isFinite(n) ? Math.max(0, Math.min(100, Math.round(n))) : t;
}
function w(e) {
  return (
    (typeof e == `string` &&
      e
        .trim()
        .replace(/^https?:\/\/(www\.)?/i, ``)
        .replace(/^www\./i, ``)
        .replace(/[/?#].*$/, ``)
        .slice(0, 80)) ||
    `your-site.com`
  );
}
function xe(e) {
  if (o === void 0) return null;
  try {
    return o.sessionStorage.getItem(e);
  } catch {
    return null;
  }
}
function Se(e) {
  if (o === void 0) return null;
  try {
    return o.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Ce() {
  try {
    let e = xe(ct);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function we() {
  let e = xe(lt);
  if (e) return w(e);
  let t = Se(ut);
  if (t) return w(t);
  if (o === void 0 || typeof document > `u`) return `your-site.com`;
  for (let e of [
    `[data-framer-name="ResultDomain"]`,
    `[data-framer-name="Domain"]`,
    `[data-framer-name="SiteDomain"]`,
    `[data-stack-score-domain="true"]`,
  ]) {
    let t = document.querySelector(e)?.textContent?.trim();
    if (t) return w(t);
  }
  try {
    let e = new URLSearchParams(o.location.search),
      t = e.get(`domain`) || e.get(`url`) || e.get(`site`);
    if (t) return w(t);
  } catch {}
  return `your-site.com`;
}
function T() {
  let e = Ce(),
    t = be(e?.level),
    n = C(e?.overall),
    r = _t[t],
    i = e?.categories,
    a = [
      [`publish`, C(i?.publish, n)],
      [`maintain`, C(i?.maintain, n)],
      [`scale`, C(i?.scale, n)],
    ].reduce((e, t) => (t[1] < e[1] ? t : e))[0];
  return { domain: we(), overall: n, level: t, tierNumber: r.number, headline: vt[t][a] };
}
function Te(e, t) {
  let { width: n, height: r } = bt[e];
  return [wt, e, `${n}x${r}`, t.domain, t.overall, t.level, t.headline].join(`|`);
}
async function Ee(e, t) {
  let n = Z,
    r = Te(e, t),
    i = H.get(r);
  if (i) return (oe(r), i);
  let a = U.get(r);
  if (a) return a;
  let o = Ze(e, t, n)
    .then((e) => {
      if (!S(n)) throw Error(`Share runtime route changed before preview was ready`);
      let t = URL.createObjectURL(e);
      return (me(r, t), U.delete(r), t);
    })
    .catch((e) => {
      throw (U.delete(r), e);
    });
  return (U.set(r, o), o);
}
function De(e) {
  return new Promise((t) => {
    if (e.aborted) return t();
    let n = o.requestIdleCallback;
    typeof n == `function` ? n(() => t(), { timeout: 500 }) : o.setTimeout(t, 16);
  });
}
function Oe(e, t, n) {
  return new Promise((r) => {
    let i = !1,
      a = o.setTimeout(() => {
        i || ((i = !0), r(n));
      }, t);
    e.then((e) => {
      i || ((i = !0), o.clearTimeout(a), r(e));
    }).catch(() => {
      i || ((i = !0), o.clearTimeout(a), r(n));
    });
  });
}
function E() {
  if (o === void 0 || typeof document > `u` || !v()) return;
  let e = Z;
  if ((B !== null && (o.clearTimeout(B), (B = null)), !_(o.location.pathname))) {
    ge();
    return;
  }
  let t = T(),
    n = [t.domain, t.overall, t.level].join(`|`);
  if (o[P] === n) return;
  z?.abort();
  let r = new AbortController();
  ((z = r), (o[P] = n));
  let i = async () => {
    if (!S(e)) return;
    let n = Ke(),
      i = new Map(O.map((e) => [e, Ge(e, t.level)]));
    if ((await Promise.allSettled([n, i.get(`portrait`)]), !(r.signal.aborted || !S(e)))) {
      (await Ee(`portrait`, t), await Promise.allSettled([i.get(`square`), i.get(`landscape`)]));
      for (let n of [`square`, `landscape`]) {
        if ((await De(r.signal), r.signal.aborted || !S(e))) return;
        await Ee(n, t);
      }
    }
  };
  B = o.setTimeout(() => {
    ((B = null),
      !(r.signal.aborted || !S(e)) &&
        i().catch((t) => {
          !r.signal.aborted && S(e) && console.error(`Stack Score share preload failed`, t);
        }));
  }, 80);
}
function ke() {
  (o !== void 0 && B !== null && o.clearTimeout(B),
    (B = null),
    z?.abort(),
    (z = null),
    o !== void 0 && delete o[P]);
}
function Ae() {
  ge();
}
function je(e) {
  o === void 0 || !v() || (o[Tt] = e);
}
function Me(e) {
  o !== void 0 &&
    v() &&
    ((o[Et] = { at: Date.now(), format: e }),
    o.dispatchEvent(new CustomEvent(F, { detail: { format: e } })));
}
function Ne(e) {
  if (!e || o === void 0) return !1;
  let t = e.getBoundingClientRect();
  if (t.width <= 2 || t.height <= 2) return !1;
  let n = o.getComputedStyle(e);
  return !(n.display === `none` || n.visibility === `hidden` || Number(n.opacity || 1) <= 0.01);
}
function Pe() {
  if (o === void 0 || typeof document > `u`) return k;
  let e = null,
    t = 0;
  if (
    (document.querySelectorAll(`[data-stack-score-preview]`).forEach((n) => {
      let r = n.getBoundingClientRect(),
        i = getComputedStyle(n),
        a = n.getAttribute(`data-stack-score-preview`),
        s =
          r.width > 2 &&
          r.height > 2 &&
          r.bottom > 0 &&
          r.right > 0 &&
          r.top < o.innerHeight &&
          r.left < o.innerWidth &&
          i.display !== `none` &&
          i.visibility !== `hidden` &&
          Number(i.opacity || 1) > 0.05,
        c = r.width * r.height;
      s && c > t && (a === `portrait` || a === `square` || a === `landscape`) && ((t = c), (e = a));
    }),
    e)
  )
    return e;
  let n = o[Tt];
  return n === `portrait` || n === `square` || n === `landscape` ? n : k;
}
function Fe(e) {
  let t = String(e || ``).toLowerCase();
  return t.includes(`4:5`)
    ? `portrait`
    : t.includes(`1:1`)
      ? `square`
      : t.includes(`16:9`) || t.includes(`wide`)
        ? `landscape`
        : t.includes(`desktop square`)
          ? `square`
          : t.includes(`desktop portrait`) || t.includes(`portrait`)
            ? `portrait`
            : t.includes(`square`)
              ? `square`
              : t.includes(`landscape`)
                ? `landscape`
                : null;
}
function Ie(e) {
  return e instanceof HTMLElement
    ? e instanceof HTMLImageElement
      ? e.currentSrc || e.src || ``
      : getComputedStyle(e).backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1] || ``
    : ``;
}
function Le(e) {
  if (!(e instanceof HTMLElement)) return ``;
  let t = Ie(e);
  if (t) return t;
  let n = Array.from(e.querySelectorAll(`*`)).reverse();
  for (let e of n) {
    let t = Ie(e);
    if (t) return t;
  }
  return ``;
}
function Re() {
  return typeof document > `u`
    ? null
    : Array.from(document.querySelectorAll(`[data-framer-name]`)).find(
        (e) => e.getAttribute(`data-framer-name`) === `Share Asset Library`
      ) || null;
}
function ze(e, t) {
  return (
    Array.from(e.querySelectorAll(`[data-framer-name]`)).find(
      (e) => e.getAttribute(`data-framer-name`) === t
    ) || null
  );
}
function Be(e, t) {
  let n = t === `portrait` ? `4x5` : t === `square` ? `1x1` : `16x9`,
    r = Re();
  if (!r) return ``;
  let i = ze(r, e);
  if (!i) return ``;
  let a = ze(i, `${n} card`);
  return a ? Le(ze(a, `v1`) || a) : ``;
}
function D(e) {
  return Ut[e];
}
function Ve(e) {
  return o === void 0 || !v() ? ft[e] : D(T().level)[e] || ft[e];
}
function He() {
  return (
    I ||
    ((I = new Promise((e) => {
      let t = document.createElement(`iframe`);
      ((t.src = `${te()}&v=${wt}-${Date.now()}`),
        (t.tabIndex = -1),
        t.setAttribute(`aria-hidden`, `true`),
        (t.style.cssText = `position:fixed;width:1200px;height:900px;left:-20000px;top:0;border:0;opacity:0;pointer-events:none`));
      let n = !1,
        r = () => {
          n || ((n = !0), o !== void 0 && R !== null && o.clearTimeout(R), (R = null), e(t));
        };
      ((t.onload = r), (L = t), document.body.appendChild(t), (R = o.setTimeout(r, 3e3)));
    })),
    I)
  );
}
function Ue(e) {
  let t = Z;
  if (o === void 0 || typeof document > `u` || !v()) return Promise.resolve(D(e));
  let n = j.get(e);
  if (n) return n;
  let r = !1,
    i = new Promise(async (n) => {
      let i = (await He()).contentWindow;
      if (!i) {
        n(D(e));
        return;
      }
      let a = `stack-score-` + Date.now() + `-` + Math.random().toString(36).slice(2),
        s = !1,
        c = 0,
        l = 0,
        u = D(e),
        d = (e) => {
          if (!s) {
            if (
              ((s = !0),
              o.clearInterval(c),
              o.clearTimeout(l),
              o.removeEventListener(`message`, f),
              !S(t))
            ) {
              n(u);
              return;
            }
            n({
              portrait: e?.portrait || u.portrait,
              square: e?.square || u.square,
              landscape: e?.landscape || u.landscape,
            });
          }
        },
        f = (e) => {
          if (
            !S(t) ||
            e.origin !== o.location.origin ||
            e.source !== i ||
            !ae(e.data) ||
            e.data.requestId !== a
          )
            return;
          let n = e.data.urls;
          O.some((e) => typeof n?.[e] == `string` && !!n[e]) && ((r = !0), d(n));
        },
        p = () => {
          if (!v()) {
            d();
            return;
          }
          i.postMessage({ type: M, requestId: a, level: e, formats: O }, o.location.origin);
        };
      (o.addEventListener(`message`, f),
        p(),
        (c = o.setInterval(p, 180)),
        (l = o.setTimeout(() => d(), 700)));
    }).then(
      (t) => (r || j.delete(e), t),
      (t) => {
        throw (j.delete(e), t);
      }
    );
  return (j.set(e, i), i);
}
function We(e, t) {
  return Ue(e).then((e) => e[t]);
}
function Ge(e, t) {
  if (o === void 0) return Promise.reject(Error(`Window is unavailable`));
  let n = D(t)[e] || ft[e];
  return Oe(
    We(t, e).then((e) => e || n),
    220,
    n
  ).then((n) => {
    let r = `${t}:${e}:${n}`,
      i = A.get(r);
    if (i) return i;
    let a = new Promise((e, t) => {
      let r = new Image();
      ((r.crossOrigin = `anonymous`),
        (r.decoding = `async`),
        (r.onload = () => e(r)),
        (r.onerror = () => t(Error(`Share artwork could not be loaded`))),
        (r.src = n));
    }).catch((e) => {
      throw (A.delete(r), e);
    });
    return (A.set(r, a), ce(), a);
  });
}
function Ke() {
  return (
    Mt ||
    ((Mt = (async () => {
      if (typeof document > `u` || typeof FontFace > `u`) return;
      let e = [];
      (document.fonts.check(`500 48px GT Walsheim Medium`) ||
        e.push(
          new FontFace(`GT Walsheim Medium`, `url(${pt}) format('woff2')`, {
            weight: `500`,
            style: `normal`,
          })
        ),
        document.fonts.check(`400 44px Inter`) ||
          e.push(
            new FontFace(`Inter`, `url(${mt}) format('woff2')`, { weight: `400`, style: `normal` })
          ),
        e.push(
          new FontFace(ht, `url(${mt}) format('woff2')`, {
            weight: `400`,
            style: `normal`,
            featureSettings: gt,
            display: `block`,
          })
        ),
        (await Promise.allSettled(e.map((e) => e.load()))).forEach((e) => {
          e.status === `fulfilled` && document.fonts.add(e.value);
        }),
        await document.fonts.ready);
    })()),
    Mt)
  );
}
function qe(e, t, n) {
  let r = e.createRadialGradient(t * 0.72, n * 0.48, 0, t * 0.72, n * 0.48, Math.max(t, n) * 0.72);
  (r.addColorStop(0, `#1029d8`),
    r.addColorStop(0.35, `#030944`),
    r.addColorStop(1, `#000000`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, n));
}
function Je(e, t, n, r) {
  let i = Math.max(n / t.width, r / t.height),
    a = t.width * i,
    o = t.height * i;
  e.drawImage(t, (n - a) / 2, (r - o) / 2, a, o);
}
function Ye(e, t, n, r, i, a, o) {
  let s = t.split(/\s+/).filter(Boolean),
    c = [],
    l = ``;
  for (let t of s) {
    let n = l ? `${l} ${t}` : t;
    !l || e.measureText(n).width <= i ? (l = n) : (c.push(l), (l = t));
  }
  (l && c.push(l),
    c.slice(0, o).forEach((t, i) => {
      e.fillText(t, n, r + i * a);
    }));
}
function Xe(e, t, n, r, i, a, o) {
  let s = t.split(/\s+/).filter(Boolean);
  if (o < 2 || s.length < 2 || e.measureText(t).width <= i) {
    Ye(e, t, n, r, i, a, o);
    return;
  }
  let c = null,
    l = 1 / 0;
  for (let t = 1; t < s.length; t += 1) {
    let n = s.slice(0, t).join(` `),
      r = s.slice(t).join(` `),
      a = e.measureText(n).width,
      o = e.measureText(r).width;
    if (a > i || o > i) continue;
    let u = Math.abs(a - o);
    u < l && ((c = [n, r]), (l = u));
  }
  if (!c) {
    Ye(e, t, n, r, i, a, o);
    return;
  }
  (e.fillText(c[0], n, r), e.fillText(c[1], n, r + a));
}
async function Ze(e, t, n = Z) {
  if (!S(n)) throw Error(`Share runtime route changed before card generation`);
  let r = Te(e, t),
    i = W.get(r);
  if (i) return (se(r), i);
  let a = G.get(r);
  if (a) return a;
  let o = Qe(e, t)
    .then((e) => (G.delete(r), S(n) ? (W.set(r, e), se(r), he(), e) : e))
    .catch((e) => {
      throw (G.delete(r), e);
    });
  return (G.set(r, o), o);
}
async function Qe(e, t) {
  let { width: n, height: r } = bt[e],
    i = document.createElement(`canvas`);
  if (((i.width = n), (i.height = r), i.width !== n || i.height !== r))
    throw Error(`Share canvas size mismatch: ` + i.width + `x` + i.height);
  let a = i.getContext(`2d`);
  if (!a) throw Error(`Canvas is unavailable`);
  qe(a, n, r);
  let [o] = await Promise.allSettled([Ge(e, t.level), Oe(Ke(), 260, void 0)]);
  if (o.status === `fulfilled`) {
    let e = o.value;
    Je(a, e, n, r);
  }
  ((a.shadowColor = `rgba(0,0,0,0)`),
    (a.shadowBlur = 0),
    (a.shadowOffsetX = 0),
    (a.shadowOffsetY = 0),
    `fontKerning` in a && (a.fontKerning = `normal`),
    `textRendering` in a && (a.textRendering = `optimizeLegibility`));
  let s = (e) => {
      `letterSpacing` in a && (a.letterSpacing = e);
    },
    c = (e) => {
      let t =
        typeof document < `u` && document.fonts?.check(`500 ` + e + `px "GT Walsheim Medium"`);
      ((a.font = t
        ? `500 ` + e + `px "GT Walsheim Medium", Inter, sans-serif`
        : `560 ` + e + `px Inter, Arial, sans-serif`),
        s((-0.04 * e).toFixed(2) + `px`));
    },
    l = (e, t) => {
      ((a.font = `400 ${e}px "${ht}", Inter, Arial, sans-serif`),
        `fontKerning` in a && (a.fontKerning = `normal`),
        s((t * e).toFixed(2) + `px`));
    },
    u = (e, n, r, i, o, s) => {
      let c = t.domain + ` scored `,
        u = t.overall + `%`;
      (l(i, -0.02), (a.textBaseline = o));
      let d = a.measureText(c + u).width;
      if (s && d > s) return;
      let f = r === `center` ? e - d / 2 : e;
      ((a.textAlign = `left`),
        (a.fillStyle = `rgba(255,255,255,.6)`),
        a.fillText(c, f, n),
        (a.fillStyle = `#ffffff`),
        a.fillText(u, f + a.measureText(c).width, n));
    };
  if (e === `portrait`) {
    let e = n / 2;
    ((a.textAlign = `center`),
      (a.textBaseline = `top`),
      (a.fillStyle = `#ffffff`),
      c(80),
      a.fillText(t.level, e, 270),
      (a.fillStyle = `rgba(255,255,255,.6)`),
      l(46, -0.015),
      Xe(a, t.headline, e, 356, 760, 56, 2),
      u(e, r - 100, `center`, 38, `bottom`, 820));
  } else if (e === `square`) {
    let e = n / 2;
    ((a.textAlign = `center`),
      (a.textBaseline = `top`),
      (a.fillStyle = `#ffffff`),
      c(80),
      a.fillText(t.level, e, 250),
      (a.fillStyle = `rgba(255,255,255,.6)`),
      l(46, -0.015),
      Xe(a, t.headline, e, 336, 760, 56, 2),
      u(e, r - 100, `center`, 38, `bottom`, 820));
  } else {
    let e = Math.round(n * 0.078);
    ((a.textAlign = `left`),
      (a.textBaseline = `top`),
      (a.fillStyle = `#ffffff`),
      c(100),
      a.fillText(t.level, e, 390),
      (a.fillStyle = `rgba(255,255,255,.6)`),
      l(62, -0.015),
      Ye(a, t.headline, e, 510, 825, 72, 3),
      u(e, r - 100, `left`, 45, `bottom`));
  }
  return new Promise((e, t) => {
    i.toBlob((n) => (n ? e(n) : t(Error(`PNG export failed`))), `image/png`);
  });
}
function $e(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`)
    .replace(/^-|-$/g, ``);
}
function et(e, t) {
  let n = URL.createObjectURL(e),
    r = document.createElement(`a`);
  ((r.href = n),
    (r.download = t),
    (r.rel = `noopener`),
    document.body.appendChild(r),
    r.click(),
    r.remove());
  let i = o.setTimeout(() => {
    (X.delete(i), URL.revokeObjectURL(n));
  }, 1e4);
  X.add(i);
}
function tt(e) {
  return function (t) {
    return c((i, s) => {
      let c = a(null),
        p = a(``),
        m = a(0),
        h = a(!1),
        g = a(null),
        ee = a(null),
        [_, te] = f(() => {
          if (o === void 0) return ``;
          let t = T();
          return H.get(Te(e, t)) || ``;
        }),
        [ne, y] = f(() => Ve(e)),
        [re, b] = f(!1),
        ie = r(
          (e) => {
            ((c.current = e), typeof s == `function` ? s(e) : s && (s.current = e));
          },
          [s]
        );
      return (
        d(() => {
          if (o === void 0 || !v()) return;
          let t = !1,
            r = Z;
          E();
          let i = T();
          (n(() => y(Ve(e))), n(() => b(!1)));
          let a = () => {
              t ||
                !S(r) ||
                h.current ||
                ((h.current = !0),
                n(() => y(Ve(e))),
                n(() => b(!_)),
                We(i.level, e)
                  .then((e) => {
                    t || !S(r) || !e || n(() => y(e));
                  })
                  .catch(() => {}),
                Ee(e, i)
                  .then((e) => {
                    t || !S(r) || (n(() => te(e)), n(() => b(!1)));
                  })
                  .catch((e) => {
                    t || !S(r) || (n(() => b(!1)), console.error(`Stack Score preview failed`, e));
                  }));
            },
            s = () => {
              if (t || !S(r)) return;
              let e = c.current;
              Ne(e) && a();
            };
          s();
          let l = c.current?.parentElement || c.current;
          if (l && typeof MutationObserver < `u`) {
            let e = new MutationObserver(() => {
              s();
            });
            (e.observe(l, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              attributeFilter: [`style`, `class`, `hidden`, `aria-hidden`],
            }),
              (ee.current = e));
          }
          let u = () => {
            t ||
              !S(r) ||
              h.current ||
              ((m.current += 1), s(), !(m.current >= 20) && (g.current = o.setTimeout(u, 90)));
          };
          return (
            u(),
            () => {
              ((t = !0),
                g.current !== null && (o.clearTimeout(g.current), (g.current = null)),
                ee.current?.disconnect(),
                (ee.current = null),
                (m.current = 0),
                (h.current = !1));
            }
          );
        }, [e, _]),
        d(() => {
          if (o === void 0 || !v()) return;
          let t = (t) => {
            if (!v()) return;
            let r = t.detail?.format;
            if (r && r !== e) return;
            (n(() => y(Ve(e))), n(() => b(!_)));
            let i = T(),
              a = Z;
            Ee(e, i)
              .then((e) => {
                S(a) && (n(() => te(e)), n(() => b(!1)));
              })
              .catch(() => {
                S(a) && n(() => b(!1));
              });
          };
          return (
            o.addEventListener(F, t),
            () => {
              o.removeEventListener(F, t);
            }
          );
        }, [e, _]),
        d(() => {
          let e = p.current;
          (e && e !== _ && fe(e, !1), _ && e !== _ && fe(_, !0), (p.current = _));
        }, [_]),
        d(
          () => () => {
            p.current && fe(p.current, !1);
          },
          []
        ),
        u(t, {
          ref: ie,
          ...i,
          "data-stack-score-preview": e,
          "aria-busy": re,
          "data-stack-score-preview-ready": `true`,
          "data-stack-score-preview-upgrading": re ? `true` : `false`,
          style: {
            ...i.style,
            position: `relative`,
            backgroundColor: `#000000`,
            backgroundImage: ne ? `url("` + ne + `")` : `none`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            overflow: `hidden`,
          },
          children: [
            i.children,
            _
              ? l(`img`, {
                  src: _,
                  alt: ``,
                  "aria-hidden": `true`,
                  draggable: !1,
                  style: {
                    position: `absolute`,
                    inset: 0,
                    width: `100%`,
                    height: `100%`,
                    objectFit: `cover`,
                    display: `block`,
                    pointerEvents: `none`,
                    zIndex: 2,
                  },
                })
              : null,
          ],
        })
      );
    });
  };
}
function nt(e) {
  return tt(`portrait`)(e);
}
function rt(e) {
  return tt(`square`)(e);
}
function it(e) {
  return tt(`landscape`)(e);
}
function at(e) {
  return c((t, n) => {
    let i = r(
        (e) =>
          String(e || ``)
            .toLowerCase()
            .replace(/\s+/g, ` `)
            .trim(),
        []
      ),
      a = r((e) => (e ? Fe(e.closest(`[data-framer-name]`)?.textContent) : null), []),
      s = r(
        (e) => {
          if (!e) return !1;
          let t = e.closest(
            `button, [role="button"], a, input[type="button"], input[type="submit"]`
          );
          if (!t) return !1;
          let n = t,
            r = i(
              [
                t.textContent,
                t.getAttribute(`aria-label`),
                t.getAttribute(`title`),
                t.getAttribute(`name`),
                t.getAttribute(`id`),
                t.getAttribute(`data-framer-name`),
                n.value,
              ].join(` `)
            );
          return !r || r.includes(`download`) ? !1 : /\bshare\b/.test(r);
        },
        [i]
      ),
      c = r(
        (e) => {
          if (o === void 0 || !v()) return;
          let t = a(e) || Pe();
          (je(t), Me(t), E());
        },
        [a]
      );
    (d(() => {
      if (o !== void 0)
        return (
          (V += 1),
          Q === 0 && ($ = b(ve)),
          (Q += 1),
          (Vt ||= (o.addEventListener(`pagehide`, Ae), !0)),
          ve(),
          V === 1 && E(),
          () => {
            ((V = Math.max(0, V - 1)),
              (Q = Math.max(0, Q - 1)),
              Q === 0 && ($?.(), ($ = null)),
              (Vt &&= (o.removeEventListener(`pagehide`, Ae), !1)),
              V === 0 && _e());
          }
        );
    }, []),
      d(() => {
        je(Fe(t.$control__variant || t.variant) || k);
      }, [t.$control__variant, t.variant]));
    let u = r(
        (e) => {
          t.onClickCapture?.(e);
          let n = e?.target;
          if (!(n instanceof HTMLElement)) return;
          let r = a(n);
          (r && je(r), s(n) && c(n));
        },
        [a, c, s, t.onClickCapture]
      ),
      f = r(
        (e) => {
          t.onTapCapture?.(e);
          let n = e?.target;
          if (!(n instanceof HTMLElement)) return;
          let r = a(n);
          (r && je(r), s(n) && c(n));
        },
        [a, c, s, t.onTapCapture]
      ),
      p = r(
        (e) => {
          if (
            (t.onKeyDownCapture?.(e),
            e?.defaultPrevented ||
              e?.isComposing ||
              e?.keyCode === 229 ||
              e?.altKey ||
              e?.ctrlKey ||
              e?.metaKey ||
              (e?.key !== `Enter` && e?.key !== ` `))
          )
            return;
          let n = e?.target;
          n instanceof HTMLElement && s(n) && c(n);
        },
        [c, s, t.onKeyDownCapture]
      );
    return l(e, {
      ref: n,
      ...t,
      onClickCapture: u,
      onTapCapture: f,
      onKeyDownCapture: p,
      "data-stack-score-share": `true`,
    });
  });
}
function ot(e) {
  return c((t, i) => {
    let [s, c] = f(!1),
      u = a(!1),
      d = r(async (e) => {
        if (
          (e?.preventDefault?.(),
          e?.stopPropagation?.(),
          !(u.current || o === void 0 || typeof document > `u` || !v()))
        ) {
          ((u.current = !0), n(() => c(!0)));
          try {
            let e = T(),
              t = Pe();
            et(await Ze(t, e), `stack-score-${$e(e.domain) || `result`}-${t}.png`);
          } catch (e) {
            console.error(`Stack Score image download failed`, e);
          } finally {
            ((u.current = !1), n(() => c(!1)));
          }
        }
      }, []),
      p = r(
        (e) => {
          (t.onKeyDown?.(e),
            !e?.defaultPrevented && (e?.key === `Enter` || e?.key === ` `) && d(e));
        },
        [d, t]
      );
    return l(e, {
      ref: i,
      ...t,
      onClick: (e) => {
        (t.onClick?.(e), d(e));
      },
      onTap: (e) => {
        (t.onTap?.(e), d(e));
      },
      onKeyDown: p,
      "aria-busy": s,
      "aria-label": s ? `Generating image` : `Download image`,
      style: {
        ...t.style,
        cursor: s ? `wait` : t.style?.cursor,
        opacity: s ? 0.72 : t.style?.opacity,
        pointerEvents: s ? `none` : t.style?.pointerEvents,
      },
    });
  });
}
function st(e) {
  return c(
    (t, n) => (
      d(() => {
        if (o === void 0 || !v()) return;
        let e = new Set(),
          t = new Set(),
          n = !1,
          r = (t, r) => {
            let i = o.setTimeout(() => {
              (e.delete(i), !n && t());
            }, r);
            return (e.add(i), i);
          },
          i = (e) => {
            let r = o.requestAnimationFrame(() => {
              (t.delete(r), !n && e());
            });
            return (t.add(r), r);
          },
          a = () => {
            let e = [],
              t = o.location.origin,
              n = o.parent;
            if (n && n !== o)
              try {
                n.location.origin === t && e.push(n);
              } catch {}
            let r = o.opener;
            if (r && r !== o)
              try {
                r.location.origin === t && e.push(r);
              } catch {}
            return e;
          },
          s = (e) => {
            if (
              n ||
              !v() ||
              e.origin !== o.location.origin ||
              !ae(e.data) ||
              !a().some((t) => t === e.source)
            )
              return;
            let t = be(e.data.level),
              s = Array.isArray(e.data.formats)
                ? e.data.formats.filter(
                    (e) => e === `portrait` || e === `square` || e === `landscape`
                  )
                : [e.data.format === `portrait` || e.data.format === `square` ? e.data.format : k];
            if (s.length === 0) return;
            let c = 0,
              l = () => {
                if (n || !v()) return;
                let i = {};
                if (
                  (s.forEach((e) => {
                    i[e] = Be(t, e);
                  }),
                  !s.every((e) => !!i[e]) && c < 30)
                ) {
                  ((c += 1), r(l, 100));
                  return;
                }
                v() &&
                  e.source?.postMessage(
                    { type: M, requestId: e.data.requestId, urls: i, url: i[s[0]] },
                    e.origin
                  );
              };
            i(() => i(l));
          };
        return (
          o.addEventListener(`message`, s),
          () => {
            ((n = !0),
              o.removeEventListener(`message`, s),
              e.forEach((e) => o.clearTimeout(e)),
              e.clear(),
              t.forEach((e) => o.cancelAnimationFrame(e)),
              t.clear());
          }
        );
      }, []),
      l(e, { ref: n, ...t, "data-stack-score-asset-provider": `true` })
    )
  );
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  O,
  k,
  A,
  j,
  M,
  xt,
  N,
  St,
  Ct,
  wt,
  Tt,
  P,
  Et,
  F,
  Dt,
  Ot,
  kt,
  At,
  jt,
  I,
  L,
  R,
  z,
  B,
  V,
  Mt,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  Z,
  zt,
  Bt,
  Q,
  $,
  Vt,
  Ht,
  Ut,
  Wt = e(() => {
    (t(),
      s(),
      i(),
      (ct = `framer.stackScore.prototype.v1`),
      (lt = `framer.stackScore.domain.v1`),
      (ut = `framer.stackScore.shareDomain.v1`),
      (dt = `stackScoreResultUpdated`),
      (ft = {
        portrait: `https://framerusercontent.com/images/ZMKQsvKpzzqDzIfwTpJInMnbeU.jpg`,
        square: `https://framerusercontent.com/images/TT6k1hgkCMVy2uNeuROQtQyYBOs.jpg`,
        landscape: `https://framerusercontent.com/images/XZ1VG6MaXqljhHt3Oico99mPHg.jpg`,
      }),
      (pt = `../../assets/fonts/6kEeNyQwxT59TY7SpLEnehG2fc.woff2`),
      (mt = `../../assets/fonts/Inter-Regular.latin-JLQMKCHE.woff2`),
      (ht = `Inter Stack Score Features v2`),
      (gt = `"ss03" 1, "cv01" 1, "cv09" 1, "cv11" 1, "kern" 1`),
      (_t = {
        Basic: {
          number: 1,
          headline: `Every update still takes coordination, slowing routine work and making each release harder to scale.`,
        },
        Shaped: {
          number: 2,
          headline: `Your stack works, but workarounds add friction and make launches inconsistent across teams and timelines.`,
        },
        Refined: {
          number: 3,
          headline: `Your tools are connected, though remaining manual gaps still slow delivery and create avoidable overhead.`,
        },
        Polished: {
          number: 4,
          headline: `Your stack is steady and self-serve, with remaining effort concentrated in maintenance and delegation.`,
        },
        Brilliant: {
          number: 5,
          headline: `Your stack moves as one, turning strategy into live pages quickly with minimal operational drag.`,
        },
      }),
      (vt = {
        Basic: {
          publish: `Every launch still depends on specialist help`,
          maintain: `Routine updates still take too many handoffs`,
          scale: `Reusable systems have yet to take the load`,
        },
        Shaped: {
          publish: `Pages go live, but each launch takes a new route`,
          maintain: `Updates work, with a few recurring workarounds`,
          scale: `The process works, but still relies on coordination`,
        },
        Refined: {
          publish: `Pages follow a clear and repeatable path to live`,
          maintain: `Routine updates run through a defined process`,
          scale: `Shared systems are starting to remove repeat work`,
        },
        Polished: {
          publish: `Our team can publish without waiting on specialists`,
          maintain: `Routine updates stay consistent as the site grows`,
          scale: `Reusable systems keep repeated work under control`,
        },
        Brilliant: {
          publish: `Every launch makes the next one faster`,
          maintain: `Our site gets better every time we ship`,
          scale: `People and agents work together without the handoffs`,
        },
      }),
      (yt = {
        Basic: `Basic`,
        Shaped: `Shaped`,
        Refined: `Refined`,
        Polished: `Polished`,
        Brilliant: `Brilliant`,
        Patched: `Shaped`,
        Connected: `Refined`,
        Modern: `Polished`,
        Unified: `Brilliant`,
      }),
      (bt = {
        landscape: { width: 1920, height: 1080 },
        portrait: { width: 1080, height: 1350 },
        square: { width: 1080, height: 1080 },
      }),
      (O = [`portrait`, `square`, `landscape`]),
      (k = `portrait`),
      (A = new Map()),
      (j = new Map()),
      (M = `framer-stack-score-share-asset-v1`),
      (xt = `/__stack-score`),
      (N = `/stack-score`),
      (St = [N, xt]),
      (Ct = `/__stack-score/share?asset-provider=1`),
      (wt = `stack-score-share-v16-full-resolution-png`),
      (Tt = `__framerStackScoreShareFormatV1`),
      (P = `__framerStackScoreSharePrewarmKeyV1`),
      (Et = `__framerStackScoreShareReadyV1`),
      (F = `stackScoreShareReadyInstant`),
      (Dt = 12),
      (Ot = 1200 * 1e3),
      (kt = 18),
      (At = 1200 * 1e3),
      (jt = 18),
      (I = null),
      (L = null),
      (R = null),
      (z = null),
      (B = null),
      (V = 0),
      (Mt = null),
      (H = new Map()),
      (U = new Map()),
      (W = new Map()),
      (G = new Map()),
      (K = new Map()),
      (q = new Map()),
      (J = new Map()),
      (Y = new Set()),
      (X = new Set()),
      (Nt = new Set()),
      (Pt = !1),
      (Ft = !1),
      (It = null),
      (Lt = null),
      (Rt = ``),
      (Z = 0),
      (zt = !1),
      (Bt = null),
      (Q = 0),
      ($ = null),
      (Vt = !1),
      (Ht = !1),
      (Ut = {
        Basic: {
          portrait: `https://framerusercontent.com/images/BeDF5DhsJ5ts5EFkrescFwFR4.jpg`,
          square: `https://framerusercontent.com/images/BeDF5DhsJ5ts5EFkrescFwFR4.jpg`,
          landscape: `https://framerusercontent.com/images/HQ9Kerha7T3lfzURMSFpSl5kK7U.jpg`,
        },
        Shaped: {
          portrait: `https://framerusercontent.com/images/V3sR8WAVtfyyUFpH4gG5gtcYGos.jpg`,
          square: `https://framerusercontent.com/images/hiCNzkWMqGGaiLqjKRqB7SbrWQ.jpg`,
          landscape: `https://framerusercontent.com/images/QuCjLZiKZ4mPOyW82MMm5G1mytg.jpg`,
        },
        Refined: {
          portrait: `https://framerusercontent.com/images/NJ3puqz4R5sExLepkBT26ocKv8.jpg`,
          square: `https://framerusercontent.com/images/IaLcldVBHwiyztGJsiKjKx1Pg.jpg`,
          landscape: `https://framerusercontent.com/images/BaU0xhG6lbQFFexqGcieMAHaI.jpg`,
        },
        Polished: {
          portrait: `https://framerusercontent.com/images/kCIsu3ymZpqibuHfL6XDCjWg1kc.jpg`,
          square: `https://framerusercontent.com/images/MheFoSdwCXlZLWyoEHUVwH4FZHg.jpg`,
          landscape: `https://framerusercontent.com/images/OKfp6b4dWSrfAa1HYkp8nBQEj0.jpg`,
        },
        Brilliant: {
          portrait: `https://framerusercontent.com/images/TAIAGJCJjvkttmeN3QPINHxvvA.jpg`,
          square: `https://framerusercontent.com/images/zICWuXhvJDg163fzvFlQzflR1s.jpg`,
          landscape: `https://framerusercontent.com/images/caVCUwM5ixI70FILNtkFRUOS9AE.jpg`,
        },
      }),
      o !== void 0 &&
        o.setTimeout(() => {
          ye();
        }, 0));
  });
export { it as a, ot as i, st as n, nt as o, at as r, rt as s, Wt as t };
//# sourceMappingURL=StackScoreShareDownloadOverride.D20v_1-T.mjs.map
