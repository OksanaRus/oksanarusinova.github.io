import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  N as s,
  P as c,
  S as l,
  T as u,
  c as d,
  d as f,
  f as p,
  g as m,
  j as h,
  k as g,
  l as _,
  m as v,
  o as y,
  p as b,
  s as x,
  u as S,
  v as C,
  w,
  y as T,
} from "./react.B4lOa1lM.mjs";
function E(e) {
  let t = T(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ee(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function D(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
} /*#__NO_SIDE_EFFECTS__*/
function te(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
} /*#__NO_SIDE_EFFECTS__*/
function ne(e, t, n, r) {
  return e === t && n === r
    ? P
    : (i) => {
        let a = 0,
          o = 1,
          s = i;
        for (let t = 0; ; t++) {
          (s >= a && s <= o) || (s = (a + o) / 2);
          let r = Uo(s, e, n) - i;
          if (r * r < 1e-28 || t === 40) break;
          (r > 0 ? (o = s) : (a = s), (s -= (r * 1e-7) / (Uo(s + 1e-7, e, n) - i - r)));
        }
        return Uo(s, t, r);
      };
} /*#__NO_SIDE_EFFECTS__*/
function re(e, t) {
  return /* @__PURE__ */ ns(e) ? e[Ho(0, e.length, t)] : e;
}
function ie() {
  ss = void 0;
}
function ae(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
function oe(e) {
  return e == null;
}
function se(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
function ce(e) {
  return isNaN(e) && typeof e == `string` && (js.test(e) || Ms.test(e));
}
function le(e) {
  let t = e.toString();
  return js.test(t) || Ms.test(t);
}
function ue(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Rs,
        (e) => (
          H.test(e)
            ? (r.color.push(a), i.push(Ps), n.push(H.parse(e)))
            : e.startsWith(Is)
              ? (r.var.push(a), i.push(Fs), n.push(e))
              : (r.number.push(a), i.push(Ns), n.push(parseFloat(e))),
          ++a,
          Ls
        )
      )
      .split(Ls),
    indexes: r,
    types: i,
  };
}
function de(e) {
  return ue(e).values;
}
function fe({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        i += e === Ns ? cs(r[a]) : e === Ps ? H.transform(r[a]) : r[a];
      }
    return i;
  };
}
function pe(e) {
  return fe(ue(e));
}
function me(e) {
  let t = ue(e);
  return fe(t)(t.values.map((e, n) => Bs(e, t.split[n])));
}
function he(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ge({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = he(s, r, e + 1 / 3)), (a = he(s, r, e)), (o = he(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function _e(e, t) {
  return (n) => (n > 0 ? t : e);
}
function ve(e) {
  let t = Us(e);
  if (!t) return (`${e}`, !1);
  let n = t.parse(e);
  return (t === ks && (n = ge(n)), n);
}
function ye(e, t) {
  return Gs.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function be(e, t) {
  return (n) => W(e, t, n);
}
function xe(e) {
  return typeof e == `number`
    ? be
    : typeof e == `string`
      ? fs(e)
        ? _e
        : H.test(e)
          ? Ws
          : Ks
      : Array.isArray(e)
        ? Se
        : typeof e == `object`
          ? H.test(e)
            ? Ws
            : Ce
          : _e;
}
function Se(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => xe(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Ce(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = xe(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function we(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
function Te(e, t) {
  let n = qs.exec(e);
  if (!n) return;
  let r = qs.exec(t);
  if (!r || n[2] !== r[2]) return;
  let i = n[2],
    a = parseFloat(n[1]),
    o = parseFloat(r[1]);
  return (e) => cs(W(a, o, e)) + i;
}
function Ee(e, t, n) {
  if (typeof e == `number` && typeof t == `number` && typeof n == `number`) return W(e, t, n);
  if (typeof e == `string` && typeof t == `string`) {
    let n = Te(e, t);
    if (n) return n;
  }
  return xe(e)(e, t);
}
function De(e) {
  let t = /* @__PURE__ */ new Set(),
    n = /* @__PURE__ */ new Set(),
    r = !1,
    i = !1,
    a = /* @__PURE__ */ new Set(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (n.add(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n), (n = a), t.forEach(s), t.clear(), (r = !1), i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
function Oe(e, t, n = { delta: 0, timestamp: 0, isProcessing: !1 }) {
  let r = !1,
    i = !0,
    a = () => (r = !0),
    o = Js.reduce((e, t) => ((e[t] = De(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = N.useManualTiming,
        o = a ? n.timestamp : performance.now();
      ((r = !1),
        a || (n.delta = i ? 1e3 / 60 : Math.max(Math.min(o - n.timestamp, Ys), 1)),
        (n.timestamp = o),
        (n.isProcessing = !0),
        s.process(n),
        c.process(n),
        l.process(n),
        u.process(n),
        d.process(n),
        f.process(n),
        p.process(n),
        m.process(n),
        (n.isProcessing = !1),
        r && t && ((i = !1), e(h)));
    },
    g = () => {
      ((r = !0), (i = !0), n.isProcessing || e(h));
    };
  return {
    schedule: Js.reduce((e, t) => {
      let n = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (r || g(), n.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Js.length; t++) o[Js[t]].cancel(e);
    },
    state: n,
    steps: o,
  };
}
function ke(e, t = 50, n = $s, r) {
  let i = 0,
    a = e.next(i);
  for (r?.push(a.value); !a.done && i < n;) ((i += t), (a = e.next(i)), r?.push(a.value));
  return i >= n ? 1 / 0 : i;
}
function Ae(e, t = 100, n) {
  let { keyframes: r, velocity: i } = e,
    a = r && r[r.length - 1] - r[0],
    o = n({ ...e, velocity: i && a ? (i * t) / a : i, keyframes: [0, t] }),
    s = Math.min(ke(o), $s);
  return {
    type: `keyframes`,
    ease: (e) => o.next(s * e).value / t,
    duration: /* @__PURE__ */ I(s),
  };
}
function je(e, t) {
  if (!(e > 1)) return 1;
  let n = Math.sqrt(e * e - 1),
    r = e - n,
    i = e + n,
    a = 2 * n * Math.exp(-t) * (1 + t);
  return (
    Ne(
      (e) => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a,
      (e) => Math.exp(-i * e) - Math.exp(-r * e),
      t
    ) / t
  );
}
function Me(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function Ne(e, t, n) {
  let r = n;
  for (let n = 1; n < tc; n++) r -= e(r) / t(r);
  return r;
}
function Pe({ duration: e = q.duration, bounce: t = q.bounce }) {
  let n, r;
  q.maxDuration;
  let i = ec(t);
  ((e = Po(q.minDuration, q.maxDuration, /* @__PURE__ */ I(e))),
    i < 1
      ? ((n = (t) => {
          let n = t * i,
            r = n * e,
            a = Me(t, i),
            o = Math.exp(-r);
          return nc - (n / a) * o;
        }),
        (r = (t) => {
          let r = t * i * e,
            a = i * i * t * t * e,
            o = Math.exp(-r),
            s = Me(t * t, i);
          return ((-n(t) + nc > 0 ? -1 : 1) * -a * o) / s;
        }))
      : ((n = (t) => -0.001 + Math.exp(-t * e) * (t * e + 1)),
        (r = (t) => Math.exp(-t * e) * (-t * (e * e)))));
  let a = 5 / e,
    o = Ne(n, r, a),
    s = o * je(i, o * e),
    c = s * s;
  return { stiffness: c, damping: i * 2 * Math.sqrt(c), duration: /* @__PURE__ */ F(e) };
}
function Fe(e, t) {
  if (rc(e, t)) return e;
}
function Ie(e) {
  let t = Fe(e.stiffness),
    n = Fe(e.damping, !0),
    r = Fe(e.mass),
    i = {
      ...e,
      stiffness: t ?? q.stiffness,
      damping: n ?? q.damping,
      mass: r ?? q.mass,
      isResolvedFromDuration: !1,
      isTimeDefined: (t ?? n ?? r) === void 0 && (e.duration !== void 0 || e.bounce !== void 0),
    };
  if (i.isTimeDefined) {
    if (e.visualDuration) {
      let t = ec(e.bounce || 0),
        n = ((2 * Math.PI) / (e.visualDuration * 1.2)) * je(t, (2 * Math.PI) / 1.2);
      ((i.stiffness = n * n), (i.damping = 2 * t * Math.sqrt(i.stiffness)));
    } else (Object.assign(i, Pe(i)), (i.isResolvedFromDuration = !0));
    (!rc(i.stiffness) || !rc(i.damping, !0)) &&
      ((i.stiffness = q.stiffness), (i.damping = q.damping));
  }
  return i;
}
function Le(e = q.visualDuration, t = q.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    r = n.keyframes[0],
    i = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: r },
    {
      stiffness: o,
      damping: s,
      mass: c,
      duration: l,
      isResolvedFromDuration: u,
      isTimeDefined: d,
    } = Ie({ ...n }),
    f = (e) => (d ? 0 : -(/* @__PURE__ */ I(e))),
    p = s / (2 * Math.sqrt(o * c)),
    m = /* @__PURE__ */ I(Math.sqrt(o / c)),
    h = p * m,
    g = { target: i, delta: i - r, velocity: f(n.velocity || 0) || 0, restSpeed: 0, restDelta: 0 },
    _ = () => {
      let e = Math.abs(g.delta) < 5;
      ((g.restSpeed = n.restSpeed || (e ? q.restSpeed.granular : q.restSpeed.default)),
        (g.restDelta = n.restDelta || (e ? q.restDelta.granular : q.restDelta.default)));
    };
  _();
  let v, y, b;
  if (p < 1) {
    let e = Me(m, p),
      t = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    b = () => {
      ((t.A = (g.velocity + h * g.delta) / e),
        (t.sinC = h * t.A + g.delta * e),
        (t.cosC = h * g.delta - t.A * e));
    };
    let n = (n) => {
      n !== t.t &&
        ((t.t = n),
        (t.env = Math.exp(-h * n)),
        (t.sin = Math.sin(e * n)),
        (t.cos = Math.cos(e * n)));
    };
    ((v = (e) => (n(e), g.target - t.env * (t.A * t.sin + g.delta * t.cos))),
      (y = (e) => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos))));
  } else if (p === 1) {
    v = (e) => g.target - Math.exp(-m * e) * (g.delta + (g.velocity + m * g.delta) * e);
    let e = { C: 0 };
    ((b = () => {
      e.C = g.velocity + m * g.delta;
    }),
      (y = (t) => Math.exp(-m * t) * (m * e.C * t - g.velocity)));
  } else {
    let e = m * Math.sqrt(p * p - 1),
      t = h - e,
      n = h + e,
      r = d ? 1 / 0 : 300 / e,
      i = (e, t) => Math.exp(t > r ? -e * r - h * (t - r) : -e * t),
      a = { S: 0, F: 0 };
    ((b = () => {
      let t = (g.velocity + h * g.delta) / e;
      ((a.S = (g.delta + t) / 2), (a.F = (g.delta - t) / 2));
    }),
      (v = (e) => g.target - a.S * i(t, e) - a.F * i(n, e)),
      (y = (e) => t * a.S * i(t, e) + n * a.F * i(n, e)));
  }
  b();
  let x = (u && l) || null,
    S = {
      calculatedDuration: x,
      retarget: (e, t) => {
        ((g.target = e[e.length - 1]),
          (g.delta = g.target - e[0]),
          (g.velocity = f(t)),
          (n.restSpeed && n.restDelta) || _(),
          (S.calculatedDuration = x),
          (a.done = !1),
          b());
      },
      velocity: (e) => /* @__PURE__ */ F(y(e)),
      next: (e) => {
        let t = v(e);
        if (u) a.done = e >= l;
        else {
          let n = /* @__PURE__ */ F(y(e));
          a.done = Math.abs(n) <= g.restSpeed && Math.abs(g.target - t) <= g.restDelta;
        }
        return ((a.value = a.done ? g.target : t), a);
      },
      toString: () => {
        let e = Math.min(ke(S), $s),
          t = Qs((t) => S.next(e * t).value, e, 30);
        return e + `ms ` + t;
      },
      toTransition: () => {},
    };
  return S;
}
function Re({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => e < s || e > c,
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => {
      let t = v(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : _ + t));
    },
    b,
    x,
    S = (e) => {
      p(f.value) &&
        ((b = e),
        (x = Le({
          keyframes: [f.value, m(f.value)],
          velocity: (-v(e) / r) * 1e3,
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !x && b === void 0 && ((t = !0), y(e), S(e)),
          b !== void 0 && e >= b ? x.next(e - b) : (!t && y(e), f)
        );
      },
    }
  );
}
function ze(e, t, n) {
  let r = [],
    i = n || N.mix || Ee,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    if (t) {
      let e = Array.isArray(t) ? t[n] || P : t;
      a = Ro(e, a);
    }
    r.push(a);
  }
  return r;
}
function Be(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = ze(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = /* @__PURE__ */ zo(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(Po(e[0], e[a - 1], t)) : l;
}
function Ve(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = /* @__PURE__ */ zo(0, t, r);
    e.push(W(n, 1, i));
  }
}
function He(e) {
  let t = [0];
  return (Ve(t, e.length - 1), t);
}
function Ue(e, t) {
  return e.map((e) => e * t);
}
function We(e, t) {
  return e.map(() => t || ts).splice(0, e.length - 1);
}
function Ge({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = /* @__PURE__ */ ns(r) ? r.map(os) : os(r) || ts,
    a = { done: !1, value: t[0] };
  if (t.length === 2 && !Array.isArray(i) && (!n || n.length !== 2 || (n[0] === 0 && n[1] === 1))) {
    let [n, r] = t,
      o = n === r ? void 0 : (N.mix || Ee)(n, r);
    return {
      calculatedDuration: e,
      next: (t) => ((a.value = o ? o(i(e > 0 ? Po(0, 1, t / e) : 1)) : r), (a.done = t >= e), a),
    };
  }
  let o = Be(Ue(n && n.length === t.length ? n : He(t), e), t, {
    ease: Array.isArray(i) ? i : We(t, i),
  });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
function Ke(e, t, n) {
  let r = Math.max(t - ic, 0);
  return /* @__PURE__ */ Vo(n - e(r), t - r);
}
function qe(e, t, n = 0) {
  return t <= 0 ? n : e.velocity ? e.velocity(t) : Ke((t) => e.next(t).value, t, e.next(t).value);
}
function Je(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(ac),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
function Ye(e) {
  typeof e.type == `string` && (e.type = oc[e.type]);
}
function Xe(e, t) {
  return {
    kind: e,
    animation: t,
    timestamp: R.now(),
    frameTimestamp: L.timestamp,
    frameIsProcessing: L.isProcessing,
  };
}
function Ze(e, t, n) {
  let r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({ ...Xe(`animation-start`, e), options: n ? { ...t, ...n } : t });
    } catch {}
}
function Qe(e, t) {
  let n = globalThis.__MOTION_INSPECT__;
  if (n)
    try {
      n({ ...Xe(`layout-animation-start`, e), node: t });
    } catch {}
}
function $e(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(_s) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!fc.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
function et(e, t) {
  let n = yc(e);
  return (bc.has(n) || (n = U), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
function tt(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
function nt(e) {
  return +!!e.includes(`scale`);
}
function rt(e, t) {
  if (!e || e === `none`) return nt(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = Oc), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Cc), (i = t));
  }
  if (!i) return nt(t);
  let a = r[t],
    o = i[1].split(`,`).map(it);
  return typeof a == `function` ? a(o) : o[a];
}
function it(e) {
  return parseFloat(e.trim());
}
function at(e) {
  let t = [];
  return (
    Nc.forEach((n) => {
      let r = e.getValue(n);
      if (r !== void 0) {
        let e = r.get(),
          i = +!!n.startsWith(`scale`);
        if (e === i) return;
        (t.push([n, e]), r.set(i));
      }
    }),
    t
  );
}
function ot(e, t, n, r, i, a) {
  let o = parseFloat(e);
  if (!isNaN(o)) return o;
  let { min: s, max: c } = t()[n],
    l = c - s;
  return a === `border-box` ? l : l - parseFloat(r) - parseFloat(i);
}
function st() {
  if (Rc) {
    let e = [],
      t = /* @__PURE__ */ new Set(),
      n = /* @__PURE__ */ new Set();
    Ic.forEach((r) => {
      r.needsMeasurement && (e.push(r), t.add(r.element), Pc.has(r.name) && n.add(r.element));
    });
    let r = /* @__PURE__ */ new Map();
    (n.forEach((e) => {
      let t = at(e);
      t.length && (r.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = r.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && o.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Rc = !1), (Lc = !1), Ic.forEach((e) => e.complete(zc)), Ic.clear());
}
function ct() {
  Ic.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Rc = !0));
  });
}
function lt() {
  ((zc = !0), ct(), st(), (zc = !1));
}
function ut(e, t, n) {
  if (typeof e == `string`) {
    if (Fo(e) || Lo(e)) return parseFloat(e);
    if (!U.test(e) && U.test(n)) return et(t, n);
  }
  return e ?? void 0;
}
function dt(e, t, n) {
  Vc(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
function ft(e, t) {
  let n = /* @__PURE__ */ te(e);
  return () => Hc[t] ?? n();
}
function pt(e, t) {
  if (e)
    return typeof e == `function`
      ? Wc()
        ? Qs(e, t)
        : `ease-out`
      : /* @__PURE__ */ rs(e)
        ? Gc(e)
        : Array.isArray(e)
          ? e.map((e) => pt(e, t) || Kc.easeOut)
          : Kc[e];
}
function mt(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = pt(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function ht(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function gt({ type: e, ...t }) {
  return ht(e) && Wc() ? e.applyToOptions(t) : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
function _t(e) {
  return e in Jc;
}
function vt(e) {
  typeof e.ease == `string` && _t(e.ease) && (e.ease = Jc[e.ease]);
}
function yt(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function bt(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Zc(i, t),
    s = Zc(a, t);
  return !o || !s
    ? (o !== s && `${t}${i}${a}${o ? a : i}`, !1)
    : yt(e) || ((n === `spring` || ht(n)) && r);
}
function xt(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
function St(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && $c.test(e[t])) return !0;
  return !1;
}
function Ct(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!n || !(Qc.has(n) || el.has(n))) return !1;
  let c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    tl() &&
    (Qc.has(n) || (el.has(n) && St(s))) &&
    (n !== `transform` || !u) &&
    !l &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
function wt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
function Tt(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function O(e, t) {
  return new cl(e, t);
}
function Et(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Dt(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Et(n, e);
}
function Ot(e) {
  for (let t in e) if (!ml.has(t)) return !0;
  return !1;
}
function kt(e) {
  let t = gl.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function At(e, t, n = 1) {
  `${e}`;
  let [r, i] = kt(e);
  if (!r) return;
  let a = o.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Fo(e) ? parseFloat(e) : e;
  }
  return fs(i) ? At(i, t, n + 1) : i;
}
function jt(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Mt(e, t, n, r) {
  let i = (t) => (typeof t == `function` ? t(n === void 0 ? e.custom : n, ...jt(r)) : t);
  return ((t = i(t)), typeof t == `string` && (t = e.variants && e.variants[t]), i(t));
}
function Nt(e, t, n) {
  return Mt(e.getProps(), t, n, e);
}
function Pt(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, O(n));
}
function Ft(e) {
  return yl(e) ? e[e.length - 1] || 0 : e;
}
function It(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Nt(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) Pt(e, t, Ft(i[t]));
}
function Lt(e) {
  return !!(X(e) && e.add);
}
function Rt(e, t) {
  let n = e.getValue(`willChange`);
  if (Lt(n)) return n.add(t);
  if (!n && N.WillChange) {
    let n = new N.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function zt(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
function Bt(e) {
  return e.props[xl];
}
function Vt({ protectedKeys: e, needsAnimating: t }, n) {
  let r = n in e && !t[n];
  return ((t[n] = !1), r);
}
function Ht(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: s, ...c } = t,
    l = e.getDefaultTransition();
  a = a ? Et(a, l) : l;
  let u = a?.reduceMotion,
    d = a?.skipAnimations;
  r && (a = r);
  let f = [],
    p = i && e.animationState?.getState()[i],
    m = a?.path;
  m && m.animateVisualElement(e, c, a, n, f);
  for (let t in c) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = c[t];
    if (i === void 0 || (p && Vt(p, t))) continue;
    let s = { delay: n, ...Dt(a || {}, t) };
    d && (s.skipAnimations = !0);
    let l = r.get();
    if (l !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === l && !s.velocity) {
      G.update(() => r.set(i));
      continue;
    }
    let m = !1;
    if (Sl && o.MotionHandoffAnimation) {
      let n = Bt(e);
      if (n) {
        let e = o.MotionHandoffAnimation(n, t, G);
        e !== null && ((s.startTime = e), (m = !0));
      }
    }
    Rt(e, t);
    let h = u ?? e.shouldReduceMotion;
    r.start(hl(t, r, i, h && vl.has(t) ? { type: !1 } : s, e, m));
    let g = r.animation;
    g && f.push(g);
  }
  if (s) {
    let t = () =>
      G.update(() => {
        s && It(e, s);
      });
    f.length ? Promise.all(f).then(t) : t();
  }
  return f;
}
function Ut(e, t, n = {}) {
  let r = Nt(e, t, _l(e, n.type)),
    i = n.transitionOverride || (r?.transition ?? (e.getDefaultTransition() || {})),
    a = () => Promise.all(r ? Ht(e, r, n) : []),
    o = (r = 0) => {
      let { variantChildren: a } = e,
        { delayChildren: o = 0, staggerChildren: s, staggerDirection: c } = i,
        l = [];
      return (
        a?.forEach((e) => {
          (e.notify(`AnimationStart`, t),
            l.push(
              Ut(e, t, {
                ...n,
                delay: r + (typeof o == `function` ? 0 : o) + Tt(a, e, o, s, c),
              }).then(() => e.notify(`AnimationComplete`, t))
            ));
        }),
        Promise.all(l)
      );
    },
    { when: s } = i;
  return s
    ? s === `beforeChildren`
      ? a().then(() => o())
      : o().then(a)
    : Promise.all([a(), o(n.delay)]);
}
function Wt(e, t, n = {}) {
  return (
    e.notify(`AnimationStart`, t),
    (Array.isArray(t)
      ? Promise.all(t.map((t) => Ut(e, t, n)))
      : typeof t == `string`
        ? Ut(e, t, n)
        : Promise.all(Ht(e, Nt(e, t, n.custom), n))
    ).then(() => {
      e.notify(`AnimationComplete`, t);
    })
  );
}
function Gt(e) {
  return typeof e == `number` ? e === 0 : e === null || e === `none` || e === `0` || Lo(e);
}
function Kt(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Dl.has(t) && le(t) && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] !== i && (e[r] = et(n, i));
}
function qt(e) {
  (typeof e.test == `function` && e.read, Jt(e), Al.unshift(e));
}
function Jt(e) {
  D(Al, e);
}
function Yt(e) {
  return Al.find((t) => t.test(e));
}
function Xt(e, t, n = {}, r) {
  let i = [],
    { velocity: a } = n,
    o = n.reduceMotion ?? r?.shouldReduceMotion;
  for (let s in t) {
    if (s === `transition` || s === `transitionEnd`) continue;
    let c = t[s];
    if (c === void 0) continue;
    let l = e(s),
      u = l.get();
    u !== void 0 && !l.isAnimating() && !Array.isArray(c) && c === u && !a
      ? G.update(() => l.set(c))
      : (l.start(hl(s, l, c, o && vl.has(s) ? { type: !1 } : n, r)),
        l.animation && i.push(l.animation));
  }
  let { transitionEnd: s } = t;
  if (s) {
    let t = () =>
      G.update(() => {
        for (let t in s) e(t).set(s[t]);
      });
    i.length ? Promise.all(i).then(t) : t();
  }
  return i;
}
function Zt(e, t, n, r, i) {
  return Xt(
    (r) => {
      let a = e.get(t, r);
      if (!a) {
        let o;
        if (!i) {
          let i = n[r];
          ((o = Qt(i) ?? e.read(t, r, i)), `${r}`);
        }
        ((a = O(o, { owner: i })), e(t, { [r]: a }));
      }
      return a;
    },
    n,
    r,
    i
  );
}
function Qt(e) {
  let t = Array.isArray(e) ? e[0] : void 0;
  return t === null ? void 0 : t;
}
function $t(e) {
  return Io(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function en(e) {
  return Io(e) && `ownerSVGElement` in e;
}
function tn(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
function nn(e, { step: t, ...n } = {}) {
  let r = /* @__PURE__ */ new WeakMap();
  return Object.assign(
    (n, i) => {
      let a = r.get(n) ?? new Ml(t);
      r.set(n, a);
      let o = [];
      for (let t in i) {
        let r = i[t],
          s = e(n, a, t, r);
        o.push(s);
      }
      return () => {
        for (let e of o) e();
      };
    },
    n,
    { get: (e, t) => r.get(e)?.get(t), flush: (e) => r.get(e)?.flush(), state: (e) => r.get(e) }
  );
}
function rn(e) {
  let t = ``,
    { transformKeys: n = [], transformValues: r = {} } = e;
  for (let e = 0; e < n.length; e++) {
    let i = n[e],
      a = r[i].get();
    a !== void 0 &&
      (typeof a == `number` ? a : parseFloat(a)) !== +!!i.startsWith(`scale`) &&
      (t += (t && ` `) + (Pl[i] || (Pl[i] = (Nl[i] || i) + `(`)) + jl(a, _c[i]) + `)`);
  }
  let i = e.get(`pathRotation`)?.get();
  return (i && (t += (t && ` `) + `rotate(` + jl(i, _c.pathRotation) + `)`), t || `none`);
}
function an(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Hl; a++) {
    let o = Ac[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = jl(s, J[o]);
      if (!c) {
        i = !1;
        let t = Vl[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${jl(a, J.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function on(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Y.has(e)) o = !0;
    else if (us(e)) i[e] = n;
    else {
      let t = jl(n, J[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = an(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function sn(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Ul : Wl;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
function cn(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s },
  c,
  l,
  u
) {
  if ((on(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  for (let e of Gl) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  ((f.transform || d.transformOrigin) &&
    ((f.transformOrigin = d.transformOrigin ?? `50% 50%`), delete d.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && sn(d, i, a, o, !1));
}
function ln(e, t) {
  if (!(t in e)) return !1;
  let n =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) ||
    Object.getOwnPropertyDescriptor(e, t);
  return n && typeof n.set == `function`;
}
function un(e, t, n, r) {
  return (
    G.render(() => e.setAttribute(`pathLength`, `1`)),
    n === `pathOffset`
      ? t.set(n, r, () => {
          let t = r.get();
          e.setAttribute(`stroke-dashoffset`, `${-t}`);
        })
      : (t.get(`stroke-dasharray`) ||
          t.set(`stroke-dasharray`, new cl(`1 1`), () => {
            let n = t.get(`pathLength`)?.get() ?? 1,
              r = t.get(`pathSpacing`)?.get();
            e.setAttribute(`stroke-dasharray`, `${n} ${r ?? 1 - Number(n)}`);
          }),
        t.set(n, r, void 0, t.get(`stroke-dasharray`)))
  );
}
function dn(e) {
  return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
}
function fn({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function pn({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mn(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function hn(e) {
  return e === void 0 || e === 1;
}
function gn({ scale: e, scaleX: t, scaleY: n }) {
  return !hn(e) || !hn(t) || !hn(n);
}
function _n(e) {
  return gn(e) || vn(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function vn(e) {
  return yn(e.x) || yn(e.y);
}
function yn(e) {
  return e && e !== `0%`;
}
function bn(e, t, n) {
  return n + t * (e - n);
}
function xn(e, t, n, r, i) {
  return (i !== void 0 && (e = bn(e, i, r)), bn(e, n, r) + t);
}
function Sn(e, t = 0, n = 1, r, i) {
  ((e.min = xn(e.min, t, n, r, i)), (e.max = xn(e.max, t, n, r, i)));
}
function Cn(e, { x: t, y: n }) {
  (Sn(e.x, t.translate, t.scale, t.originPoint), Sn(e.y, n.translate, n.scale, n.originPoint));
}
function wn(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (k(e.x, -a.scroll.offset.x), k(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Cn(e, o)),
      r && _n(a.latestValues) && Dn(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < Zl && t.x > Xl && (t.x = 1), t.y < Zl && t.y > Xl && (t.y = 1));
}
function k(e, t) {
  ((e.min += t), (e.max += t));
}
function Tn(e, t, n, r, i = 0.5) {
  Sn(e, t, n, W(e.min, e.max, i), r);
}
function En(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Dn(e, t, n) {
  let r = n ?? e;
  (Tn(e.x, En(t.x, r.x), t.scaleX, t.scale, t.originX),
    Tn(e.y, En(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function On(e, t) {
  return fn(mn(e.getBoundingClientRect(), t));
}
function kn(e, t, n) {
  let r = On(e, n),
    { scroll: i } = t;
  return (i && (k(r.x, i.offset.x), k(r.y, i.offset.y)), r);
}
function An(e, t, n, r) {
  if (r) return Xt((e) => r.getValue(e, null), t, n, r);
  let i = $l(e);
  return Zt(i, e, t, n, new eu(i, e));
}
function jn() {
  return Z.x || Z.y;
}
function Mn(e) {
  return e === `x` || e === `y`
    ? Z[e]
      ? null
      : ((Z[e] = !0),
        () => {
          Z[e] = !1;
        })
    : Z.x || Z.y
      ? null
      : ((Z.x = Z.y = !0),
        () => {
          Z.x = Z.y = !1;
        });
}
function Nn(e, t) {
  let n = tn(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Pn(e) {
  return !(e.pointerType === `touch` || jn());
}
function Fn(e, t, n = {}) {
  let [r, i, a] = Nn(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        s = () => {
          e.removeEventListener(`pointerleave`, d);
        },
        c = (e) => {
          ((a &&= (a(e), void 0)), s());
        },
        l = (e) => {
          ((n = !1),
            o.removeEventListener(`pointerup`, l),
            o.removeEventListener(`pointercancel`, l),
            r && ((r = !1), c(e)));
        },
        u = () => {
          ((n = !0),
            o.addEventListener(`pointerup`, l, i),
            o.addEventListener(`pointercancel`, l, i));
        },
        d = (e) => {
          e.pointerType !== `touch` && (n ? (r = !0) : c(e));
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!Pn(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` && ((a = o), e.addEventListener(`pointerleave`, d, i));
        },
        i
      ),
        e.addEventListener(`pointerdown`, u, i));
    }),
    a
  );
}
function In(e) {
  return ou.has(e.tagName) || e.isContentEditable === !0;
}
function Ln(e) {
  return su.has(e.tagName) || e.isContentEditable === !0;
}
function Rn(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function zn(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
function Bn(e) {
  return au(e) && !jn();
}
function Vn(e, t, n = {}) {
  let [r, i, a] = Nn(e, n),
    s = (e) => {
      let r = e.currentTarget;
      if (!Bn(e) || uu.has(e)) return;
      (cu.add(r), n.stopPropagation && uu.add(e));
      let a = t(r, e),
        s = { ...i, capture: !0 },
        c = (e, t) => {
          (o.removeEventListener(`pointerup`, l, s),
            o.removeEventListener(`pointercancel`, u, s),
            cu.has(r) && cu.delete(r),
            Bn(e) && typeof a == `function` && a(e, { success: t }));
        },
        l = (e) => {
          c(e, r === o || r === document || n.useGlobalTarget || iu(r, e.target));
        },
        u = (e) => {
          c(e, !1);
        };
      (o.addEventListener(`pointerup`, l, s), o.addEventListener(`pointercancel`, u, s));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? o : e).addEventListener(`pointerdown`, s, i),
        $t(e) &&
          (e.addEventListener(`focus`, (e) => lu(e, i)),
          !In(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Hn({ target: e, borderBoxSize: t }) {
  du.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return mu(e, t);
      },
      get height() {
        return hu(e, t);
      },
    });
  });
}
function Un(e) {
  e.forEach(Hn);
}
function Wn() {
  typeof ResizeObserver < `u` && (fu = new ResizeObserver(Un));
}
function Gn(e, t) {
  fu || Wn();
  let n = tn(e);
  return (
    n.forEach((e) => {
      let n = du.get(e);
      (n || ((n = /* @__PURE__ */ new Set()), du.set(e, n)), n.add(t), fu?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = du.get(e);
        (n?.delete(t), n?.size || fu?.unobserve(e));
      });
    }
  );
}
function Kn() {
  ((_u = () => {
    let e = {
      get width() {
        return o.innerWidth;
      },
      get height() {
        return o.innerHeight;
      },
    };
    gu.forEach((t) => t(e));
  }),
    o.addEventListener(`resize`, _u));
}
function qn(e) {
  return (
    gu.add(e),
    _u || Kn(),
    () => {
      (gu.delete(e),
        !gu.size &&
          typeof _u == `function` &&
          (o.removeEventListener(`resize`, _u), (_u = void 0)));
    }
  );
}
function Jn(e, t) {
  return typeof e == `function` ? qn(e) : Gn(e, t);
}
function Yn(e) {
  return en(e) && e.tagName === `svg`;
}
function Xn(e, t) {
  if (e === `first`) return 0;
  {
    let n = t - 1;
    return e === `last` ? n : n / 2;
  }
}
function Zn(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, a) => {
    let o = typeof n == `number` ? n : Xn(n, a),
      s = e * Math.abs(o - i);
    if (r) {
      let t = a * e;
      s = os(r)(s / t) * t;
    }
    return t + s;
  };
}
function Qn(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = Be(i, a, o);
  return t ? s(r) : s;
}
function $n(e, t, n) {
  let r = e.get(),
    i = null,
    a,
    o = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    s = (e) => a(o ? e + o : e),
    c = () => e.events.animationStart?.notify(),
    l = () => {
      ((i &&= (i.stop(), null)), (e.animation = void 0));
    };
  if (
    (e.attach((t, r) => {
      a = r;
      let o = Su(t);
      if (i?.state === `running`) {
        i.setTarget(o, n.velocity);
        return;
      }
      let u = Su(e.get()),
        d = i ? i.getGeneratorVelocity() : e.getVelocity();
      if ((l(), u === o)) return;
      let f = (i = new xu({
        keyframes: [u, o],
        velocity: d,
        restDelta: 0.001,
        restSpeed: 0.01,
        ...n,
        onUpdate: s,
        onPlay: c,
      }));
      ((e.animation = f),
        f.then(() => {
          i === f && ((i = null), (e.animation = void 0), e.events.animationComplete?.notify());
        }));
    }, l),
    X(t))
  ) {
    let r = n.skipInitialAnimation === !0,
      i = t.on(`change`, (t) => {
        r ? ((r = !1), e.jump(er(t, o), !1)) : e.set(er(t, o));
      }),
      a = e.on(`destroy`, i);
    return () => {
      (i(), a());
    };
  }
  return l;
}
function er(e, t) {
  return t ? e + t : e;
}
function tr(e, t, n) {
  let r = () => t.set(n()),
    i = () => G.preRender(r, !1, !0),
    a = e.map((e) => e.on(`change`, i));
  t.on(`destroy`, () => {
    (a.forEach((e) => e()), K(r));
  });
}
function nr(e) {
  let t = [];
  sl.current = t;
  let n = e();
  sl.current = void 0;
  let r = O(n);
  return (tr(t, r, e), r);
}
function rr(e, t, n) {
  return $n(e, t, { ...n, type: Le });
}
function ir(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function ar(e) {
  return typeof e == `string` || Array.isArray(e);
}
function or(e) {
  if (ir(e.animate)) return !0;
  for (let t = 0; t < Ou.length; t++) if (ar(e[Ou[t]])) return !0;
  return !1;
}
function sr(e) {
  return !!(or(e) || e.variants);
}
function cr(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (X(i)) e.addValue(r, i);
    else if (X(a)) e.addValue(r, O(i, { owner: e }));
    else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, O(t === void 0 ? i : t, { owner: e }));
      }
    }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
function lr() {
  if (((Au.current = !0), ju)) {
    if (o.matchMedia) {
      let e = o.matchMedia(`(prefers-reduced-motion)`),
        t = () => (ku.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else ku.current = !1;
  }
}
function ur(e) {
  Nu = e;
}
function dr() {
  return Nu;
}
function fr(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function pr(e) {
  for (let t in e) ((Lu[t] = e[t]), us(t) && (Lu[t].isCSSVariable = !0));
}
function mr(e, { layout: t, layoutId: n }) {
  return (
    Y.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!Lu[e] || e === `opacity`))
  );
}
function hr(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (X(r[t]) || (i && X(i[t])) || mr(t, e) || n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function gr(e) {
  return o.getComputedStyle(e);
}
function _r(e, t, n, r) {
  fr(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(zu.has(n) ? n : zt(n), t.attrs[n]);
}
function vr(e, t, n) {
  let r = hr(e, t, n);
  for (let n in e)
    if (X(e[n]) || X(t[n])) {
      let t = Ac.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function yr(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function br(e) {
  let t = (t) => Promise.all(t.map(({ animation: t, options: n }) => Wt(e, t, n))),
    n = Sr(),
    r = !0,
    i = !1;
  function a(a) {
    let { props: o, parent: s, manuallyAnimateOnMount: c } = e,
      l = r || i,
      u = [],
      d = /* @__PURE__ */ new Set(),
      f = {},
      p = 1 / 0,
      m = e;
    do m = m.props.inherit !== !1 && m.parent;
    while (m && !m.isControllingVariants);
    if (
      (Hu.forEach((t, r) => {
        let i = n[t],
          h = o[t],
          g = m && m.props[t],
          _ = h === void 0 ? (ar(g) || g === !1 ? g : void 0) : h,
          v = ar(_),
          y = t === a ? i.isActive : null;
        y === !1 && (p = r);
        let b = v && h === void 0 && !(l && c);
        if (
          ((i.protectedKeys = { ...f }),
          (!i.isActive && y === null) || (!_ && !i.prevProp) || ir(_) || typeof _ == `boolean`)
        )
          return;
        if (t === `exit` && i.isActive && y !== !0) {
          f = { ...f, ...i.prevResolvedValues };
          return;
        }
        let x = xr(i.prevProp, _),
          S = x || (v && ((y && !b) || r > p)),
          C = !1,
          w = Array.isArray(_) ? _ : [_],
          T = {};
        if (y !== !1)
          for (let n of w) {
            let { transition: r, transitionEnd: i, ...a } = Nt(e, n, _l(e, t)) || {};
            T = { ...T, ...a, ...i };
          }
        let { prevResolvedValues: E } = i;
        for (let t in { ...E, ...T }) {
          if (t in f) continue;
          let n = T[t],
            r = E[t],
            a = Array.isArray(n) && Array.isArray(r) ? !yr(n, r) || x : n !== r;
          if (a && n == null) d.add(t);
          else if (a || (n !== void 0 && d.has(t))) {
            ((S = !0), d.delete(t) && (C = !0), (i.needsAnimating[t] = !0));
            let n = e.getValue(t);
            n && (n.liveStyle = !1);
          } else i.protectedKeys[t] = !0;
        }
        if (
          ((i.prevProp = _),
          (i.prevResolvedValues = T),
          i.isActive && (f = { ...f, ...T }),
          S && (!(b && x) || C))
        )
          for (let n of w) {
            let r = { type: t };
            if (typeof n == `string` && l && c && s?.enteringChildren) {
              let t = Nt(s, n)?.transition?.delayChildren;
              r.delay = Tt(s.enteringChildren, e, t);
            }
            u.push({ animation: n, options: r });
          }
      }),
      d.size)
    ) {
      let { initial: t } = o,
        n = {},
        r = typeof t != `boolean` && Nt(e, Array.isArray(t) ? t[0] : t, e.presenceContext?.custom);
      (r && r.transition && (n.transition = r.transition),
        d.forEach((i) => {
          let a = e.getValue(i);
          a && (a.liveStyle = !0);
          let s = r && !Array.isArray(t) ? r[i] : void 0,
            c = e.getBaseTargetFromProps(o, i);
          n[i] =
            (s === void 0
              ? c !== void 0 && !X(c)
                ? c
                : e.initialValues[i] === void 0
                  ? e.baseTarget[i]
                  : void 0
              : s) ?? null;
        }),
        u.push({ animation: n }));
    }
    let h =
      (l && e.blockInitialAnimation) || (r && !c && (o.initial === !1 || o.initial === o.animate));
    return ((r = i = !1), !h && u.length ? t(u) : Promise.resolve());
  }
  function o(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r));
    let i = a(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: (n) => {
      t = n(e);
    },
    getState: () => n,
    reset: () => {
      ((n = Sr()), (i = !0));
    },
  };
}
function xr(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !yr(t, e) : !1;
}
function Sr() {
  let e = {};
  for (let t of Du)
    e[t] = {
      isActive: t === `animate`,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  return e;
}
function Cr(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function A(e, t) {
  (Cr(e.x, t.x), Cr(e.y, t.y));
}
function wr(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function j(e) {
  return e.max - e.min;
}
function Tr(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Er(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = j(n) / j(t)),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Uu && e.scale <= Wu) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Gu && e.translate <= Ku) || isNaN(e.translate)) && (e.translate = 0));
}
function Dr(e, t, n, r) {
  (Er(e.x, t.x, n.x, r ? r.originX : void 0), Er(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Or(e, t, n, r = 0) {
  ((e.min = (r ? W(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + j(t)));
}
function kr(e, t, n, r) {
  (Or(e.x, t.x, n.x, r?.x), Or(e.y, t.y, n.y, r?.y));
}
function Ar(e, t, n, r = 0) {
  let i = r ? W(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + j(t)));
}
function jr(e, t, n, r) {
  (Ar(e.x, t.x, n.x, r?.x), Ar(e.y, t.y, n.y, r?.y));
}
function Mr(e, t, n, r, i) {
  return ((e -= t), (e = bn(e, 1 / n, r)), i !== void 0 && (e = bn(e, 1 / i, r)), e);
}
function Nr(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (B.test(t) && ((t = parseFloat(t)), (t = W(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = W(a.min, a.max, r);
  (e === a && (s -= t), (e.min = Mr(e.min, t, n, s, i)), (e.max = Mr(e.max, t, n, s, i)));
}
function Pr(e, t, [n, r, i], a, o) {
  Nr(e, t[n], t[r], t[i], t.scale, a, o);
}
function Fr(e, t, n, r) {
  (Pr(e.x, t, qu, n ? n.x : void 0, r ? r.x : void 0),
    Pr(e.y, t, Ju, n ? n.y : void 0, r ? r.y : void 0));
}
function Ir(e) {
  return e.translate === 0 && e.scale === 1;
}
function Lr(e) {
  return Ir(e.x) && Ir(e.y);
}
function Rr(e, t) {
  return e.min === t.min && e.max === t.max;
}
function zr(e, t) {
  return Rr(e.x, t.x) && Rr(e.y, t.y);
}
function Br(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Vr(e, t) {
  return Br(e.x, t.x) && Br(e.y, t.y);
}
function Hr(e) {
  return j(e.x) / j(e.y);
}
function Ur(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function M(e) {
  return [e(`x`), e(`y`)];
}
function Wr(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Gr(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
function Kr(e, t, n, r, i, a) {
  i
    ? ((e.opacity = W(0, n.opacity ?? 1, $u(r))), (e.opacityExit = W(t.opacity ?? 1, 0, ed(r))))
    : a && (e.opacity = W(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < Zu; i++) {
    let a = kl[i],
      o = qr(t, a),
      s = qr(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Qu(o) === Qu(s)
        ? ((e[a] = Math.max(W(Su(o), Su(s), r), 0)), (B.test(s) || B.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function qr(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
function Jr(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ zo(e, t, r)));
}
function Yr(e, t, n) {
  let r = X(e) ? e : O(e);
  return (r.start(hl(``, r, t, n)), r.animation);
}
function Xr(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function Zr(e, t) {
  let n = R.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (K(r), e(a - t));
    };
  return (G.setup(r, !0), () => K(r));
}
function Qr(e) {
  return X(e) ? e.get() : e;
}
function $r(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ei(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Bt(t);
  if (o.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    o.MotionCancelOptimisedAnimation(n, `transform`, G, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ei(r);
}
function ti({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = ld++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = /* @__PURE__ */ new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = /* @__PURE__ */ new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            vu.value && (od.nodes = od.calculatedTargetDeltas = od.calculatedProjections = 0),
            this.nodes.forEach(ii),
            this.nodes.forEach(hi),
            this.nodes.forEach(gi),
            this.nodes.forEach(ai),
            vu.addProjectionMetrics && vu.addProjectionMetrics(od));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = /* @__PURE__ */ new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new nd());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new Bo()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = en(t) && !Yn(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (G.read(() => {
          r = o.innerWidth;
        }),
          e(t, () => {
            let e = o.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Zr(i, 250)),
              ad.hasAnimatedSinceResize &&
                ((ad.hasAnimatedSinceResize = !1), this.nodes.forEach(mi)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
              if (this.isAnimationBlocked) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || ud,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                c = !this.targetLayout || !Vr(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...Dt(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || mi(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = r;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        K(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(_i), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (o.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ei(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1),
          t.isAnimationBlocked && ((t.dragSnapshot ||= t.measure()), (this.dragAncestor = t)));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(ci),
          this.nodes.forEach(si));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(li);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(di),
            this.nodes.forEach(fi),
            this.nodes.forEach(pi),
            this.nodes.forEach(ni),
            this.nodes.forEach(ri))
          : this.nodes.forEach(li),
        this.clearAllSnapshots());
      let e = R.now();
      ((L.delta = Po(0, 1e3 / 60, e - L.timestamp)),
        (L.timestamp = e),
        (L.isProcessing = !0),
        Xs.update.process(L),
        Xs.preRender.process(L),
        Xs.render.process(L),
        (L.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), nu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(oi), this.sharedNodes.forEach(vi));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), G.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      G.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot &&
        this.instance &&
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !j(this.snapshot.measuredBox.x) &&
          !j(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected ||= Q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Lr(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || _n(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        wi(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Q();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Ei))) {
        let { scroll: e } = this.root;
        e && (k(t.x, e.offset.x), k(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Q();
      if ((A(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && A(t, e), k(t.x, i.offset.x), k(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || Q();
      A(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (k(r.x, -n.scroll.offset.x), k(r.y, -n.scroll.offset.y)),
          _n(n.latestValues) && Dn(r, n.latestValues, n.layout?.layoutBox));
      }
      return (_n(this.latestValues) && Dn(r, this.latestValues, this.layout?.layoutBox), r);
    }
    removeTransform(e) {
      let t = Q();
      A(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!_n(n.latestValues)) continue;
        let r;
        (n.instance &&
          (gn(n.latestValues) && n.updateSnapshot(), (r = Q()), A(r, n.measurePageBox())),
          Fr(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (_n(this.latestValues) && Fr(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = { ...this.options, ...e, crossfade: e.crossfade === void 0 || e.crossfade };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== L.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = L.timestamp;
      let a = this.getClosestProjectingParent();
      (!this.targetDelta &&
        !this.relativeTarget &&
        (this.options.layoutAnchor !== !1 && a && a.layout
          ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox)
          : this.removeRelativeTarget()),
        (this.relativeTarget || this.targetDelta) &&
          (this.target || ((this.target = Q()), (this.targetWithTransforms = Q())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              kr(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : A(this.target, this.layout.layoutBox),
                Cn(this.target, this.targetDelta))
              : A(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          vu.value && od.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || gn(this.parent.latestValues) || vn(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Q()),
        (this.relativeTargetOrigin = Q()),
        jr(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
        A(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
        this.resolvedRelativeTargetAt === L.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      A(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (wn(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Q())));
      let { target: s } = e;
      s
        ? (!this.projectionDelta || !this.prevProjectionDelta
            ? this.createProjectionDeltas()
            : (wr(this.prevProjectionDelta.x, this.projectionDelta.x),
              wr(this.prevProjectionDelta.y, this.projectionDelta.y)),
          Dr(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
          (this.treeScale.x !== a ||
            this.treeScale.y !== o ||
            !Ur(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !Ur(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners(`projectionUpdate`, s)),
          vu.value && od.calculatedProjections++)
        : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = wu()),
        (this.projectionDelta = wu()),
        (this.projectionDeltaWithTransform = wu()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = wu();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = Q(),
        c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !(!c || u || this.options.crossfade !== !0 || this.path.some(Si));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = W(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = W(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (yi(o.x, e.x, n), yi(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (jr(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            xi(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && zr(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= Q()),
            A(f, this.relativeTarget)),
          c && ((this.animationValues = a), Kr(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a), (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (K(this.pendingAnimation), void 0)),
        (this.pendingAnimation = G.update(() => {
          ((ad.hasAnimatedSinceResize = !0),
            (this.motionValue ||= O(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Yr(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            Qe(this.currentAnimation, this),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(cd), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, layout: n, latestValues: r } = e,
        { target: i } = e;
      if (t && i && n) {
        if (
          this !== e &&
          this.layout &&
          n &&
          Ti(this.options.animationType, this.layout.layoutBox, n.layoutBox)
        ) {
          i = this.target || Q();
          let t = j(this.layout.layoutBox.x);
          ((i.x.min = e.target.x.min), (i.x.max = i.x.min + t));
          let n = j(this.layout.layoutBox.y);
          ((i.y.min = e.target.y.min), (i.y.max = i.y.min + n));
        }
        (A(t, i), Dn(t, r), Dr(this.projectionDeltaWithTransform, this.layoutCorrected, t, r));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new rd()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && $r(`z`, e, r, this.animationValues);
      for (let t = 0; t < sd.length; t++)
        ($r(`rotate${sd[t]}`, e, r, this.animationValues),
          $r(`skew${sd[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = Qr(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
          (e.pointerEvents = Qr(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !_n(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = Gr(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        (e.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let t in Lu) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = Lu[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId && (e.pointerEvents = r === this ? Qr(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(si),
        this.root.sharedNodes.clear());
    }
  };
}
function ni(e) {
  (e.updateLayout(), ui(e));
}
function ri(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      M((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = j(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      Cr(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      Ti(i, t.layoutBox, n) &&
        M((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = j(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = wu();
    Dr(o, n, t.layoutBox);
    let s = wu();
    a ? Dr(s, e.applyTransform(r, !0), t.measuredBox) : Dr(s, n, t.layoutBox);
    let c = !Lr(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = Q();
          jr(s, t.layoutBox, i.layoutBox, o);
          let c = Q();
          (jr(c, n, a.layoutBox, o),
            Vr(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c), (e.relativeTargetOrigin = s), (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function ii(e) {
  (vu.value && od.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function ai(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function oi(e) {
  e.clearSnapshot();
}
function si(e) {
  e.clearMeasurements();
}
function ci(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function li(e) {
  e.isLayoutDirty = !1;
}
function ui(e) {
  let { snapshot: t, dragAncestor: n } = e,
    r = n?.layout;
  if (!t || !r || e.resumeFrom || e.isAnimationBlocked) return;
  let i = n.dragSnapshot;
  M((e) => k(t.layoutBox[e], r.layoutBox[e].min - i.layoutBox[e].min));
}
function di(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.dragSnapshot || e.layout), (e.isLayoutDirty = !0));
}
function fi(e) {
  e.relativeTarget &&
    e.relativeParent?.isLayoutDirty &&
    (e.currentAnimation
      ? (e.isLayoutDirty = !0)
      : ((e.targetDelta = void 0), e.removeRelativeTarget()));
}
function pi(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function mi(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function hi(e) {
  e.resolveTargetDelta();
}
function gi(e) {
  e.calcProjection();
}
function _i(e) {
  e.resetSkewAndRotation();
}
function vi(e) {
  e.removeLeadSnapshot();
}
function yi(e, t, n) {
  ((e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function bi(e, t, n, r) {
  ((e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r)));
}
function xi(e, t, n, r) {
  (bi(e.x, t.x, n.x, r), bi(e.y, t.y, n.y, r));
}
function Si(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
function Ci(e) {
  ((e.min = fd(e.min)), (e.max = fd(e.max)));
}
function wi(e) {
  (Ci(e.x), Ci(e.y));
}
function Ti(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !Tr(Hr(t), Hr(n), 0.2));
}
function Ei(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
function Di() {
  let e = /* @__PURE__ */ new Set(),
    t = /* @__PURE__ */ new WeakMap(),
    n = () => e.forEach(md);
  return {
    add: (r) => {
      (e.add(r), t.set(r, r.addEventListener(`willUpdate`, n)));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      (i && (i(), t.delete(r)), n());
    },
    dirty: n,
  };
}
function Oi(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function ki(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Oi(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Oi(e[t], null);
        }
      };
  };
}
function Ai(...e) {
  return r(ki(...e), e);
}
function ji({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
  let o = l(),
    s = T(null),
    u = T({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: `ltr` }),
    { nonce: d } = g($),
    f = Ai(s, a === !1 ? void 0 : (e.props?.ref ?? e?.ref));
  return (
    h(() => {
      let { width: e, height: c, top: l, left: f, right: p, bottom: m, direction: h } = u.current;
      if (t || a === !1 || !s.current || !e || !c) return;
      let g = h === `rtl`,
        _ = n === `left` ? (g ? `right: ${p}` : `left: ${f}`) : g ? `left: ${f}` : `right: ${p}`,
        v = r === `bottom` ? `bottom: ${m}` : `top: ${l}`,
        y = s.current;
      y.dataset.motionPopId = o;
      let b = y.ownerDocument,
        x = b.createElement(`style`);
      d && (x.nonce = d);
      let S = i ?? b.head;
      return (
        S.appendChild(x),
        x.sheet &&
          x.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${c}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (s.current?.removeAttribute(`data-motion-pop-id`), S.contains(x) && S.removeChild(x));
        }
      );
    }, [t]),
    y(_d, {
      isPresent: t,
      childRef: s,
      sizeRef: u,
      pop: a,
      children: a === !1 ? e : c(e, { ref: f }),
    })
  );
}
function Mi() {
  return /* @__PURE__ */ new Map();
}
function Ni(e = !0) {
  let t = g(No);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: i, register: a } = t,
    o = l();
  C(() => {
    if (e) return a(o);
  }, [e]);
  let s = r(() => e && i && i(o), [o, i, e]);
  return !n && i ? [!1, s] : [!0];
}
function Pi(e) {
  let t = [];
  return (
    w.forEach(e, (e) => {
      v(e) && t.push(e);
    }),
    t
  );
}
function Fi() {
  let e = T(!1);
  return (
    Mo(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Ii() {
  let e = Fi(),
    [t, n] = m(0),
    i = r(() => {
      e.current && n(t + 1);
    }, [t]);
  return [r(() => G.postRender(i), [i]), t];
}
function Li() {
  if (Dd) return;
  let e = {};
  for (let t in Ed) e[t] = { isEnabled: (e) => Ed[t].some((t) => !!e[t]) };
  (ur(e), (Dd = !0));
}
function Ri() {
  return (Li(), dr());
}
function zi(e) {
  let t = Ri();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  ur(t);
}
function Bi({ children: e, ...n }) {
  let r = g($);
  ((n = { ...r, ...n }),
    (n.transition = Et(n.transition, r.transition)),
    (n.isStatic = E(() => n.isStatic)));
  let i = t(
    () => n,
    [
      JSON.stringify(n.transition),
      n.transformPagePoint,
      n.reducedMotion,
      n.skipAnimations,
      n.isValidProp,
    ]
  );
  return y($.Provider, { value: i, children: e });
}
function Vi(e, t) {
  if (or(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || ar(t) ? t : void 0, animate: ar(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function Hi(e) {
  let { initial: n, animate: r } = Vi(e, g(Od));
  return t(() => ({ initial: n, animate: r }), [Ui(n), Ui(r)]);
}
function Ui(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
function Wi(e, t, n) {
  for (let r in t) !X(t[r]) && !mr(r, n) && (e[r] = t[r]);
}
function Gi({ transformTemplate: e }, n) {
  return t(() => {
    let t = kd();
    return (on(t, n, e), Object.assign({}, t.vars, t.style));
  }, [n]);
}
function Ki(e, t) {
  let n = e.style || {},
    r = {};
  return (Wi(r, n, e), Object.assign(r, Gi(e, t)), r);
}
function qi(e, t) {
  let n = {},
    r = Ki(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Ji(e, n, r, i) {
  let a = t(() => {
    let t = Ad();
    return (cn(t, n, Bu(i), e.transformTemplate, e.style), { ...t.attrs, style: { ...t.style } });
  }, [n]);
  if (e.style) {
    let t = {};
    (Wi(t, e.style, e), (a.style = { ...t, ...a.style }));
  }
  return a;
}
function Yi(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    jd.has(e)
  );
}
function Xi(e, t) {
  return e.startsWith(`on`) ? !Yi(e) : (t?.(e) ?? !Yi(e));
}
function Zi(e, t, n, r) {
  let i = {};
  for (let a in e)
    (a !== `values` || typeof e.values != `object`) &&
      (X(e[a]) ||
        ((Xi(a, r) ||
          (n === !0 && Yi(a)) ||
          (!t && !Yi(a)) ||
          (e.draggable && a.startsWith(`onDrag`))) &&
          (i[a] = e[a])));
  return i;
}
function Qi(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Md.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function $i(e, n, r, { latestValues: i }, a, o = !1, c, l) {
  let u = ((c ?? Qi(e)) ? Ji : qi)(n, i, a, e),
    d = Zi(n, typeof e == `string`, o, l),
    p = e === s ? {} : { ...d, ...u, ref: r },
    { children: m } = n,
    h = t(() => (X(m) ? m.get() : m), [m]);
  return f(e, { ...p, children: h });
}
function ea({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: ta(n, r, i, e), renderState: t() };
}
function ta(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Qr(a[e]);
  let { initial: o, animate: s } = e,
    c = or(e),
    l = sr(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !ir(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Mt(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
function na(e, t, n) {
  let i = T(n);
  h(() => {
    i.current = n;
  });
  let a = T(null);
  return r(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let r = i.current;
      if (typeof r == `function`) {
        if (n) {
          let e = r(n);
          typeof e == `function` && (a.current = e);
        } else a.current ? (a.current(), (a.current = null)) : r(n);
      } else r && (r.current = n);
    },
    [t]
  );
}
function ra(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function ia(e, t, n, r, i, a) {
  let { visualElement: s } = g(Od),
    c = g(Td),
    l = g(No),
    u = g($),
    d = u.reducedMotion,
    f = u.skipAnimations,
    p = T(null),
    m = T(!1);
  ((r ||= c.renderer),
    !p.current &&
      r &&
      ((p.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: d,
        skipAnimations: f,
        isSVG: a,
      })),
      m.current && p.current && (p.current.manuallyAnimateOnMount = !0)));
  let _ = p.current,
    v = g(Ld);
  _ && !_.projection && i && (_.type === `html` || _.type === `svg`) && aa(p.current, n, i, v);
  let y = T(!1);
  h(() => {
    _ && y.current && _.update(n, l);
  });
  let b = n[xl],
    x = T(
      !!b && o !== void 0 && !o.MotionHandoffIsComplete?.(b) && o.MotionHasOptimisedAnimation?.(b)
    );
  return (
    Mo(() => {
      m.current && _ && (_.animationState?.animateChanges(), (_.enteringChildren = void 0));
    }, []),
    Mo(() => {
      ((m.current = !0),
        _ &&
          ((y.current = !0),
          (o.MotionIsMounted = !0),
          _.updateFeatures(),
          _.scheduleRenderMicrotask(),
          x.current && _.animationState && _.animationState.animateChanges()));
    }),
    C(() => {
      _ &&
        (!x.current && _.animationState && _.animationState.animateChanges(),
        (x.current &&=
          (queueMicrotask(() => {
            o.MotionHandoffMarkAsComplete?.(b);
          }),
          !1)),
        (_.enteringChildren = void 0));
    }),
    _
  );
}
function aa(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : oa(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && ra(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function oa(e) {
  if (e) return e.options.allowProjection === !1 ? oa(e.parent) : e.projection;
}
function sa(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && zi(r);
  let a = n ? n === `svg` : Qi(e),
    s = a ? Fd : Pd;
  function c(n, c) {
    let l,
      u = { ...g($), ...n, layoutId: ca(n) },
      { isStatic: d, isValidProp: f } = u,
      p = Hi(n),
      m = s(n, d);
    if (!d && o !== void 0) {
      la(u, r);
      let t = ua(u);
      ((l = t.MeasureLayout), (p.visualElement = ia(e, m, u, i, t.ProjectionNode, a)));
    }
    return _(Od.Provider, {
      value: p,
      children: [
        l && p.visualElement ? y(l, { visualElement: p.visualElement, ...u }) : null,
        $i(e, n, na(m, p.visualElement, c), m, d, t, a, f),
      ],
    });
  }
  c.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let l = b(c);
  return ((l[Id] = e), l);
}
function ca({ layoutId: e }) {
  let t = g(Ao).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function la(e, t) {
  g(Td).strict;
}
function ua(e) {
  let { drag: t, layout: n } = Ri();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function da(e, t) {
  if (typeof Proxy > `u`) return sa;
  let n = /* @__PURE__ */ new Map(),
    r = (n, r) => sa(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, sa(a, void 0, e, t)), n.get(a))),
  });
}
function fa(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
function pa(e, t, n, r) {
  return Xr(e, t, Ud(n), r);
}
function ma(e, t) {
  let n = Gd(e.x, t.x),
    r = Gd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function ha(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ga(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function _a({ point: e }, t) {
  return { point: e, delta: ga(e, ya(t)), offset: ga(e, va(t)), velocity: ba(t, 0.1) };
}
function va(e) {
  return e[0];
}
function ya(e) {
  return e[e.length - 1];
}
function ba(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = ya(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > /* @__PURE__ */ F(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ F(t) * 2 && (r = e[1]);
  let a = /* @__PURE__ */ I(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function xa(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Sa(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Ca(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Sa(e.x, n, i), y: Sa(e.y, t, r) };
}
function wa(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function Ta(e, t) {
  return { x: wa(e.x, t.x), y: wa(e.y, t.y) };
}
function Ea(e, t) {
  let n = 0.5,
    r = j(e),
    i = j(t);
  return (
    i > r
      ? (n = /* @__PURE__ */ zo(t.min, t.max - r, e.min))
      : r > i && (n = /* @__PURE__ */ zo(e.min, e.max - i, t.min)),
    Po(0, 1, n)
  );
}
function Da(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
function Oa(e = Jd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Jd),
    { x: ka(e, `left`, `right`), y: ka(e, `top`, `bottom`) }
  );
}
function ka(e, t, n) {
  return { min: Aa(e, t), max: Aa(e, n) };
}
function Aa(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
function ja(e) {
  let t = !0;
  return () => {
    t ? (t = !1) : e();
  };
}
function Ma(e, t, n) {
  let r = Jn(e, ja(n)),
    i = Jn(t, ja(n));
  return () => {
    (r(), i());
  };
}
function Na(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Pa(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
function Fa(e) {
  let [t, n] = Ni(),
    r = g(Ao);
  return y(tf, { ...e, layoutGroup: r, switchLayoutGroup: g(Ld), isPresent: t, safeToRemove: n });
}
function Ia(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && G.postRender(() => i(t, fa(t)));
}
function La(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && G.postRender(() => i(t, fa(t)));
}
function Ra({ root: e, ...t }) {
  let n = e || document;
  cf.has(n) || cf.set(n, {});
  let r = cf.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(uf, { root: e, ...t })), r[i]);
}
function za(e, t, n) {
  let r = Ra(t);
  return (
    sf.set(e, n),
    r.observe(e),
    () => {
      (sf.delete(e), r.unobserve(e));
    }
  );
}
function Ba({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
function Va(e) {
  let t = E(() => O(e)),
    { isStatic: n } = g($);
  if (n) {
    let [, n] = m(e);
    C(() => t.on(`change`, n), []);
  }
  return t;
}
function Ha(e, t) {
  let n = Va(t()),
    r = () => n.set(t());
  return (
    r(),
    Mo(() => {
      let t = () => G.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return (
        r(),
        () => {
          (n.forEach((e) => e()), K(r));
        }
      );
    }),
    n
  );
}
function Ua(e) {
  ((sl.current = []), e());
  let t = Ha(sl.current, e);
  return ((sl.current = void 0), t);
}
function Wa(e, t, n, r) {
  if (typeof e == `function`) return Ua(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`) return Ka(e, t, n, r);
  let i = typeof t == `function` ? t : Qn(t, n, r),
    a = Array.isArray(e) ? Ga(e, i) : Ga([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  if (o && !o.isTransformed && typeof t != `function` && Array.isArray(n) && r?.clamp !== !1) {
    let e = r?.ease;
    a.accelerate = {
      ...o,
      times: [0, ...t, 1],
      keyframes: [n[0], ...n, n[n.length - 1]],
      isTransformed: !0,
      ...(e ? { ease: Array.isArray(e) ? [e[0], ...e] : e } : {}),
    };
  }
  return a;
}
function Ga(e, t) {
  let n = E(() => []);
  return Ha(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function Ka(e, t, n, r) {
  let i = E(() => Object.keys(n)),
    a = E(() => ({}));
  for (let o of i) a[o] = Wa(e, t, n[o], r);
  return a;
}
function qa(e, t, n) {
  let { isStatic: r } = g($),
    i = () => (X(e) ? e.get() : e);
  if (r) return Wa(i);
  let a = Va(i());
  return (h(() => n(a, e, t), [a, JSON.stringify(t)]), a);
}
function Ja(e, t = {}) {
  return qa(e, t, rr);
}
function Ya() {
  !Au.current && lr();
  let [e] = m(ku.current);
  return e;
}
function Xa() {
  let e = Ya(),
    { reducedMotion: t } = g($);
  return t === `never` ? !1 : t === `always` || e;
}
function Za(e) {
  e.values.forEach((e) => e.stop());
}
function Qa(e, t) {
  [...t].reverse().forEach((n) => {
    let r = e.getVariant(n);
    (r && It(e, r),
      e.variantChildren &&
        e.variantChildren.forEach((e) => {
          Qa(e, t);
        }));
  });
}
function $a(e, t) {
  if (Array.isArray(t)) return Qa(e, t);
  if (typeof t == `string`) return Qa(e, [t]);
  It(e, t);
}
function eo() {
  let e = /* @__PURE__ */ new Set(),
    t = {
      subscribe(t) {
        return (e.add(t), () => void e.delete(t));
      },
      start(t, n) {
        let r = [];
        return (
          e.forEach((e) => {
            r.push(Wt(e, t, { transitionOverride: n }));
          }),
          Promise.all(r)
        );
      },
      set(t) {
        return e.forEach((e) => {
          $a(e, t);
        });
      },
      stop() {
        e.forEach((e) => {
          Za(e);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function to(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function no(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && to(t)
      ? tn(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function ro(e, t, n) {
  return e * (t + 1) + n * t;
}
function io(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function ao(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (D(e, i), r--);
  }
}
function oo(e, t, n, r, i, a) {
  ao(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: W(i, a, r[o]), easing: /* @__PURE__ */ re(n, o) });
}
function so(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function co(e, t) {
  return e.at === t.at ? (e.value === null ? 1 : t.value === null ? -1 : 0) : e.at - t.at;
}
function lo(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = /* @__PURE__ */ new Map(),
    s = /* @__PURE__ */ new Map(),
    c = {},
    l = /* @__PURE__ */ new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    }
    if (!Array.isArray(o)) {
      l.set(o.name, io(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = io(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = po(e),
          {
            delay: l = 0,
            times: u = He(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = ht(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && xf(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = /* @__PURE__ */ F(b));
          let r = Ae(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let w = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let T = u.length - c.length;
        if ((T > 0 && Ve(u, T), c.length === 1 && c.unshift(null), m && `${m}`, m && m < yf)) {
          let e = b > 0 ? _ / b : 0;
          b = ro(b, m, _);
          let t = [...c],
            n = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let r = [...y],
            i = h === `reverse` || h === `mirror`,
            a = t,
            o = r;
          i &&
            ((a = [...t].reverse()),
            h === `reverse` &&
              (o = [...r]
                .reverse()
                .map((e) => (typeof e == `function` ? /* @__PURE__ */ Go(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)), c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : /* @__PURE__ */ re(f, e - 1)));
          }
          so(u, m, e);
        }
        let E = w + b;
        (oo(r, c, y, u, w, E), (g = Math.max(x + b, g)), (f = Math.max(E, f)));
      };
    if (X(p)) {
      let e = uo(p, s);
      _(m, h, fo(`default`, e));
    } else {
      let e = no(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = uo(r, s);
        for (let e in m) _(m[e], mo(h, e), fo(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(co);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(/* @__PURE__ */ zo(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(vf)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function uo(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function fo(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function po(e) {
  return Array.isArray(e) ? e : [e];
}
function mo(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
function ho(e, t) {
  return X(e) || typeof e == `number` || (typeof e == `string` && !to(t));
}
function go(e, t, n, r) {
  let i = [];
  if (ho(e, t)) i.push(Yr(e, (to(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = no(e, t, r),
      o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = { ...n };
      (`delay` in s && typeof s.delay == `function` && (s.delay = s.delay(e, o)),
        r instanceof Element
          ? i.push(...An(r, t, s, Eu.get(r)))
          : i.push(...Zt(Yt(r) ?? tu, r, t, s)));
    }
  }
  return i;
}
function _o(e, t, n) {
  let r = [];
  return (
    lo(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = O(0);
          return (
            n.on(`change`, t),
            e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [n, [0, 1], e[1]] : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: Le }
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...go(n, e, t));
    }),
    r
  );
}
function vo(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function yo(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if ((n !== void 0 && (c.reduceMotion = n), r !== void 0 && (c.skipAnimations = r), vo(e))) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = _o(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = go(e, i, { ...c, ...r }, t)));
    }
    let l = new il(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          D(t.animations, l);
        })),
      l
    );
  }
  return i;
}
function bo() {
  let e = E(eo);
  return (Mo(e.mount, []), e);
}
function xo(e) {
  return typeof e == `object` && !!e && Id in e;
}
function So(e) {
  if (xo(e)) return e[Id];
}
function Co() {
  return wo;
}
function wo(e) {
  hd.current && ((hd.current.isUpdating = !1), hd.current.blockUpdate(), e && e());
}
function To() {
  return r(() => {
    let e = hd.current;
    e && e.resetTree();
  }, []);
}
function Eo(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = tn(e),
    o = /* @__PURE__ */ new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n) {
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
          }
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : wf[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Do(e, { root: t, margin: n, amount: r, once: i = !1, initial: a = !1 } = {}) {
  let [o, s] = m(a);
  return (
    C(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Eo(e.current, a, c);
    }, [t, e, n, i, r]),
    o
  );
}
function Oo() {
  let [e, t] = Ii(),
    n = Co(),
    r = T(-1);
  return (
    C(() => {
      G.postRender(() =>
        G.postRender(() => {
          t === r.current && (N.instantAnimations = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        ((N.instantAnimations = !0), e(), i(), (r.current = t + 1));
      });
    }
  );
}
var ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  N,
  Fo,
  Io,
  Lo,
  P,
  Ro,
  zo,
  Bo,
  F,
  I,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  L,
  ss,
  R,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  z,
  B,
  V,
  Es,
  Ds,
  Os,
  ks,
  H,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  U,
  W,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  G,
  K,
  Xs,
  Zs,
  Qs,
  $s,
  q,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  J,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
  Y,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  X,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  Z,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Q,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  $,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf;
function Ef() {
  return (Ef = e(() => {
    (i(),
      n(),
      x(),
      (ko = (e, t) => () => (
        t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)),
        t.exports
      )),
      (Ao = S({})),
      (jo = o !== void 0),
      (Mo = jo ? u : C),
      (No = /* @__PURE__ */ S(null)),
      (Po = (e, t, n) => (n > t ? t : n < e ? e : n)),
      (N = {}),
      (Fo = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)),
      (Io = (e) => typeof e == `object` && !!e),
      (Lo = (e) => /^0[^.\s]+$/u.test(e)),
      (P = /* @__NO_SIDE_EFFECTS__ */ (e) => e),
      (Ro = (...e) => e.reduce((e, t) => (n) => t(e(n)))),
      (zo = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
        let r = t - e;
        return r ? (n - e) / r : 1;
      }),
      (Bo = class {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (ee(this.subscriptions, e), () => this.remove(e));
        }
        remove(e) {
          D(this.subscriptions, e);
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (r === 1) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }),
      (F = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3),
      (I = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3),
      (Vo = /* @__NO_SIDE_EFFECTS__ */ (e, t) => (t ? (1e3 / t) * e : 0)),
      (Ho = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (Uo = (e, t, n) => e * (3 * (1 - e) * ((1 - e) * t + e * n) + e * e)),
      (Wo = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) =>
        t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
      (Go = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t)),
      (Ko = /*@__PURE__*/ ne(0.33, 1.53, 0.69, 0.99)),
      (qo = /*@__PURE__*/ Go(Ko)),
      (Jo = /*@__PURE__*/ Wo(qo)),
      (Yo = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * qo(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))))),
      (Xo = (e) => 1 - Math.sin(Math.acos(e))),
      (Zo = /* @__PURE__ */ Go(Xo)),
      (Qo = /* @__PURE__ */ Wo(Xo)),
      ($o = /*@__PURE__*/ ne(0.42, 0, 1, 1)),
      (es = /*@__PURE__*/ ne(0, 0, 0.58, 1)),
      (ts = /*@__PURE__*/ ne(0.42, 0, 0.58, 1)),
      (ns = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != `number`),
      (rs = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == `number`),
      (is = {
        linear: P,
        easeIn: $o,
        easeInOut: ts,
        easeOut: es,
        circIn: Xo,
        circInOut: Qo,
        circOut: Zo,
        backIn: qo,
        backInOut: Jo,
        backOut: Ko,
        anticipate: Yo,
      }),
      (as = (e) => typeof e == `string`),
      (os = (e) => {
        if (/* @__PURE__ */ rs(e)) {
          e.length;
          let [t, n, r, i] = e;
          return /* @__PURE__ */ ne(t, n, r, i);
        }
        return as(e) ? (is[e], `${e}`, is[e]) : e;
      }),
      (L = { delta: 0, timestamp: 0, isProcessing: !1 }),
      (R = {
        now: () => (
          ss === void 0 &&
            R.set(L.isProcessing || N.useManualTiming ? L.timestamp : performance.now()),
          ss
        ),
        set: (e) => {
          ((ss = e), queueMicrotask(ie));
        },
      }),
      (cs = (e) => Math.round(e * 1e5) / 1e5),
      (ls = (e) => (t) => typeof t == `string` && t.startsWith(e)),
      (us = /*@__PURE__*/ ls(`--`)),
      (ds = /*@__PURE__*/ ls(`var(--`)),
      (fs = (e) => (ds(e) ? ps.test(e.split(`/*`)[0].trim()) : !1)),
      (ps = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu),
      (ms = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e }),
      (hs = { ...ms, transform: (e) => Po(0, 1, e) }),
      (gs = { ...ms, default: 1 }),
      (_s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu),
      (vs =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu),
      (ys = (e, t) => (n) =>
        !!(
          (typeof n == `string` && vs.test(n) && n.startsWith(e)) ||
          (t && !oe(n) && Object.prototype.hasOwnProperty.call(n, t))
        )),
      (bs = (e, t, n) => (r) => {
        if (typeof r != `string`) return r;
        let [i, a, o, s] = r.match(_s);
        return {
          [e]: parseFloat(i),
          [t]: parseFloat(a),
          [n]: parseFloat(o),
          alpha: s === void 0 ? 1 : parseFloat(s),
        };
      }),
      (xs = (e) => Po(0, 255, e)),
      (Ss = { ...ms, transform: (e) => Math.round(xs(e)) }),
      (Cs = {
        test: /*@__PURE__*/ ys(`rgb`, `red`),
        parse: /*@__PURE__*/ bs(`red`, `green`, `blue`),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          `rgba(` +
          Ss.transform(e) +
          `, ` +
          Ss.transform(t) +
          `, ` +
          Ss.transform(n) +
          `, ` +
          cs(hs.transform(r)) +
          `)`,
      }),
      (ws = { test: /*@__PURE__*/ ys(`#`), parse: se, transform: Cs.transform }),
      (Ts = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
        test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      })),
      (z = /*@__PURE__*/ Ts(`deg`)),
      (B = /*@__PURE__*/ Ts(`%`)),
      (V = /*@__PURE__*/ Ts(`px`)),
      (Es = /*@__PURE__*/ Ts(`vh`)),
      (Ds = /*@__PURE__*/ Ts(`vw`)),
      (Os = { ...B, parse: (e) => B.parse(e) / 100, transform: (e) => B.transform(e * 100) }),
      (ks = {
        test: /*@__PURE__*/ ys(`hsl`, `hue`),
        parse: /*@__PURE__*/ bs(`hue`, `saturation`, `lightness`),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          `hsla(` +
          Math.round(e) +
          `, ` +
          B.transform(cs(t)) +
          `, ` +
          B.transform(cs(n)) +
          `, ` +
          cs(hs.transform(r)) +
          `)`,
      }),
      (H = {
        test: (e) => Cs.test(e) || ws.test(e) || ks.test(e),
        parse: (e) => (Cs.test(e) ? Cs.parse(e) : ks.test(e) ? ks.parse(e) : ws.parse(e)),
        transform: (e) =>
          typeof e == `string` ? e : e.hasOwnProperty(`red`) ? Cs.transform(e) : ks.transform(e),
        getAnimatableNone: (e) => {
          let t = H.parse(e);
          return ((t.alpha = 0), H.transform(t));
        },
      }),
      (As =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu),
      (js = /*@__PURE__*/ new RegExp(_s.source)),
      (Ms = /*@__PURE__*/ new RegExp(As.source, `i`)),
      (Ns = `number`),
      (Ps = `color`),
      (Fs = `var`),
      (Is = `var(`),
      (Ls = "${}"),
      (Rs =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu),
      (zs = (e) => (typeof e == `number` ? 0 : H.test(e) ? H.getAnimatableNone(e) : e)),
      (Bs = (e, t) => (typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : zs(e))),
      (U = { test: ce, parse: de, createTransformer: pe, getAnimatableNone: me }),
      (W = (e, t, n) => e + (t - e) * n),
      (Vs = (e, t, n) => {
        let r = e * e,
          i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i);
      }),
      (Hs = [ws, Cs, ks]),
      (Us = (e) => Hs.find((t) => t.test(e))),
      (Ws = (e, t) => {
        let n = ve(e),
          r = ve(t);
        if (!n || !r) return _e(e, t);
        let i = { ...n };
        return (e) => (
          (i.red = Vs(n.red, r.red, e)),
          (i.green = Vs(n.green, r.green, e)),
          (i.blue = Vs(n.blue, r.blue, e)),
          (i.alpha = W(n.alpha, r.alpha, e)),
          Cs.transform(i)
        );
      }),
      (Gs = /* @__PURE__ */ new Set([`none`, `hidden`])),
      (Ks = (e, t) => {
        let n = U.createTransformer(t),
          r = ue(e),
          i = ue(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (Gs.has(e) && !i.values.length) || (Gs.has(t) && !r.values.length)
            ? ye(e, t)
            : Ro(Se(we(r, i), i.values), n)
          : (`${e}${t}`, _e(e, t));
      }),
      (qs = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu),
      (Js = [
        `setup`,
        `read`,
        `resolveKeyframes`,
        `preUpdate`,
        `update`,
        `preRender`,
        `render`,
        `postRender`,
      ]),
      (Ys = 40),
      ({
        schedule: G,
        cancel: K,
        steps: Xs,
      } = /* @__PURE__ */ Oe(
        typeof requestAnimationFrame < `u` ? requestAnimationFrame : P,
        !0,
        L
      )),
      (Zs = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: (e = !0) => G.update(t, e),
          stop: () => K(t),
          now: () => (L.isProcessing ? L.timestamp : R.now()),
        };
      }),
      (Qs = (e, t, n = 10) => {
        let r = ``,
          i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0, r.length - 2)})`;
      }),
      ($s = 2e4),
      (q = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
      }),
      (ec = (e) => (e < 0 ? 1 / Math.max(1 + e, q.minDamping) : Math.max(1 - e, q.minDamping))),
      (tc = 12),
      (nc = 0.001),
      (rc = (e, t) => (t ? e >= 0 : e > 0) && e < 1 / 0),
      (Le.applyToOptions = (e) => {
        let t = Ae(e, 100, Le);
        return (
          (e.ease = t.ease),
          (e.duration = /* @__PURE__ */ F(t.duration)),
          (e.type = `keyframes`),
          e
        );
      }),
      (ic = 5),
      (ac = (e) => e !== null),
      (oc = { decay: Re, inertia: Re, tween: Ge, keyframes: Ge, spring: Le }),
      (sc = 40),
      (cc = (e, t) => (t - e > sc && !N.useManualTiming ? t : e)),
      (lc = class {
        constructor() {
          this.isResolved = !1;
        }
        get finished() {
          return (
            (this._finished ||= this.isResolved
              ? Promise.resolve()
              : new Promise((e) => {
                  this._resolve = e;
                })),
            this._finished
          );
        }
        updateFinished() {
          ((this._finished = this._resolve = void 0), (this.isResolved = !1));
        }
        notifyFinished() {
          ((this.isResolved = !0), this._resolve?.());
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
      }),
      (uc = (e) => e / 100),
      (dc = class extends lc {
        constructor(e) {
          (super(),
            (this.state = `idle`),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              let { motionValue: e } = this.options;
              (e && e.updatedAt !== R.now() && this.tick(R.now()),
                (this.isStopped = !0),
                this.state !== `idle` && (this.teardown(), this.options.onStop?.()));
            }),
            (this.options = e),
            this.initAnimation(),
            this.play(),
            e.autoplay === !1 && this.pause(),
            Ze(this, this.options));
        }
        initAnimation() {
          let { options: e } = this;
          Ye(e);
          let {
              type: t = Ge,
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: i,
              velocity: a = 0,
            } = e,
            { keyframes: o } = e,
            s = t || Ge;
          s !== Ge &&
            typeof o[0] != `number` &&
            ((this.mixKeyframes = Ro(uc, Ee(o[0], o[1]))), (o = [0, 100]));
          let c = s(o === e.keyframes ? e : { ...e, keyframes: o });
          (i === `mirror` &&
            (this.mirroredGenerator = s({ ...e, keyframes: [...o].reverse(), velocity: -a })),
            c.calculatedDuration === null && (c.calculatedDuration = ke(c)));
          let { calculatedDuration: l } = c;
          ((this.calculatedDuration = l),
            (this.resolvedDuration = l + r),
            (this.totalDuration = this.resolvedDuration * (n + 1) - r),
            (this.generator = c));
        }
        updateTime(e) {
          let t = Math.round(e - this.startTime) * this.playbackSpeed;
          this.currentTime = this.holdTime === null ? t : this.holdTime;
        }
        tick(e, t = !1) {
          let {
            generator: n,
            totalDuration: r,
            mixKeyframes: i,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: s,
          } = this;
          if (this.startTime === null) return n.next(0);
          let {
            delay: c = 0,
            keyframes: l,
            repeat: u,
            repeatType: d,
            repeatDelay: f,
            type: p,
            onUpdate: m,
            finalKeyframe: h,
          } = this.options;
          (this.startTime === this.pendingStartTime && (this.startTime = cc(this.startTime, e)),
            (this.pendingStartTime = void 0),
            this.speed > 0
              ? (this.startTime = Math.min(this.startTime, e))
              : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)),
            t ? (this.currentTime = e) : this.updateTime(e));
          let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
            _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
          ((this.currentTime = Math.max(g, 0)),
            this.state === `finished` && this.holdTime === null && (this.currentTime = r));
          let v = this.currentTime,
            y = n;
          if (u) {
            let e = Math.min(this.currentTime, r) / o,
              t = Math.floor(e),
              n = e % 1;
            (!n && e >= 1 && (n = 1),
              n === 1 && t--,
              (t = Math.min(t, u + 1)),
              t % 2 &&
                (d === `reverse` ? ((n = 1 - n), f && (n -= f / o)) : d === `mirror` && (y = a)),
              (v = Po(0, 1, n) * o));
          }
          let b;
          (_ ? ((this.delayState.value = l[0]), (b = this.delayState)) : (b = y.next(v)),
            i && !_ && (b.value = i(b.value)));
          let { done: x } = b;
          !_ &&
            s !== null &&
            (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
          let S =
            this.holdTime === null &&
            (this.state === `finished` || (this.state === `running` && x));
          return (
            S && p !== Re && (b.value = Je(l, this.options, h, this.speed)),
            m && m(b.value),
            S && this.finish(),
            b
          );
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
        get duration() {
          return /* @__PURE__ */ I(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + /* @__PURE__ */ I(e);
        }
        get time() {
          return /* @__PURE__ */ I(this.currentTime);
        }
        set time(e) {
          ((e = /* @__PURE__ */ F(e)),
            (this.currentTime = e),
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
              ? (this.holdTime = e)
              : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0), (this.state = `paused`), (this.holdTime = e), this.tick(e)));
        }
        getGeneratorVelocity() {
          return qe(this.generator, this.currentTime, this.options.velocity);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (t && this.driver && this.updateTime(R.now()),
            (this.playbackSpeed = e),
            t && this.driver && (this.time = /* @__PURE__ */ I(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: e = Zs, startTime: t } = this.options;
          ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
          let n = this.driver.now();
          (this.state === `finished`
            ? (this.updateFinished(), (this.startTime = n))
            : this.holdTime === null
              ? (this.startTime ||= t ?? (this.pendingStartTime = n))
              : (this.startTime = n - this.holdTime / (this.playbackSpeed || 1)),
            this.state === `finished` &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = `running`),
            this.driver.start());
        }
        pause() {
          ((this.state = `paused`), this.updateTime(R.now()), (this.holdTime = this.currentTime));
        }
        complete() {
          (this.state !== `running` && this.play(),
            (this.state = `finished`),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = `finished`),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = `idle`), this.stopDriver(), (this.startTime = this.holdTime = null));
        }
        stopDriver() {
          this.driver &&= (this.driver.stop(), void 0);
        }
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
        attachTimeline(e) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = `keyframes`),
              (this.options.ease = `linear`),
              this.initAnimation()),
            this.driver?.stop(),
            e.observe(this)
          );
        }
      }),
      (fc = /* @__PURE__ */ new Set([`brightness`, `contrast`, `saturate`, `opacity`])),
      (pc = /\b([a-z-]*)\(.*?\)/gu),
      (mc = {
        ...U,
        getAnimatableNone: (e) => {
          let t = e.match(pc);
          return t ? t.map($e).join(` `) : e;
        },
      }),
      (hc = {
        ...U,
        getAnimatableNone: (e) => {
          let t = U.parse(e);
          return U.createTransformer(e)(
            t.map((e) => (typeof e == `number` ? 0 : typeof e == `object` ? { ...e, alpha: 1 } : e))
          );
        },
      }),
      (gc = { ...ms, transform: Math.round }),
      (_c = {
        rotate: z,
        pathRotation: z,
        rotateX: z,
        rotateY: z,
        rotateZ: z,
        scale: gs,
        scaleX: gs,
        scaleY: gs,
        scaleZ: gs,
        skew: z,
        skewX: z,
        skewY: z,
        distance: V,
        translateX: V,
        translateY: V,
        translateZ: V,
        x: V,
        y: V,
        z: V,
        perspective: V,
        transformPerspective: V,
        opacity: hs,
        originX: Os,
        originY: Os,
        originZ: V,
      }),
      (J = {
        borderWidth: V,
        borderTopWidth: V,
        borderRightWidth: V,
        borderBottomWidth: V,
        borderLeftWidth: V,
        borderRadius: V,
        borderTopLeftRadius: V,
        borderTopRightRadius: V,
        borderBottomRightRadius: V,
        borderBottomLeftRadius: V,
        width: V,
        maxWidth: V,
        height: V,
        maxHeight: V,
        top: V,
        right: V,
        bottom: V,
        left: V,
        inset: V,
        insetBlock: V,
        insetBlockStart: V,
        insetBlockEnd: V,
        insetInline: V,
        insetInlineStart: V,
        insetInlineEnd: V,
        padding: V,
        paddingTop: V,
        paddingRight: V,
        paddingBottom: V,
        paddingLeft: V,
        paddingBlock: V,
        paddingBlockStart: V,
        paddingBlockEnd: V,
        paddingInline: V,
        paddingInlineStart: V,
        paddingInlineEnd: V,
        margin: V,
        marginTop: V,
        marginRight: V,
        marginBottom: V,
        marginLeft: V,
        marginBlock: V,
        marginBlockStart: V,
        marginBlockEnd: V,
        marginInline: V,
        marginInlineStart: V,
        marginInlineEnd: V,
        fontSize: V,
        backgroundPositionX: V,
        backgroundPositionY: V,
        ..._c,
        zIndex: gc,
        fillOpacity: hs,
        strokeOpacity: hs,
        numOctaves: gc,
      }),
      (vc = {
        ...J,
        color: H,
        backgroundColor: H,
        outlineColor: H,
        fill: H,
        stroke: H,
        borderColor: H,
        borderTopColor: H,
        borderRightColor: H,
        borderBottomColor: H,
        borderLeftColor: H,
        filter: mc,
        WebkitFilter: mc,
        mask: hc,
        WebkitMask: hc,
      }),
      (yc = (e) => vc[e]),
      (bc = /*@__PURE__*/ new Set([mc, hc])),
      (xc = (e) => (e * 180) / Math.PI),
      (Sc = (e) => {
        let t = xc(Math.atan2(e[1], e[0]));
        return wc(t);
      }),
      (Cc = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Sc,
        rotateZ: Sc,
        skewX: (e) => xc(Math.atan(e[1])),
        skewY: (e) => xc(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      }),
      (wc = (e) => ((e %= 360), e < 0 && (e += 360), e)),
      (Tc = Sc),
      (Ec = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1])),
      (Dc = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5])),
      (Oc = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Ec,
        scaleY: Dc,
        scale: (e) => (Ec(e) + Dc(e)) / 2,
        rotateX: (e) => wc(xc(Math.atan2(e[6], e[5]))),
        rotateY: (e) => wc(xc(Math.atan2(-e[2], e[0]))),
        rotateZ: Tc,
        rotate: Tc,
        skewX: (e) => xc(Math.atan(e[4])),
        skewY: (e) => xc(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      }),
      (kc = (e, t) => {
        let { transform: n = `none` } = getComputedStyle(e);
        return rt(n, t);
      }),
      (Ac = [
        `transformPerspective`,
        `x`,
        `y`,
        `z`,
        `translateX`,
        `translateY`,
        `translateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `skew`,
        `skewX`,
        `skewY`,
      ]),
      (Y = /* @__PURE__ */ new Set([...Ac, `pathRotation`])),
      (jc = (e) => e === ms || e === V),
      (Mc = /* @__PURE__ */ new Set([`x`, `y`, `z`])),
      (Nc = Ac.filter((e) => !Mc.has(e))),
      (Pc = /* @__PURE__ */ new Set([`bottom`, `right`])),
      (Fc = {
        width: ({ width: e, paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }, i) =>
          ot(e, i, `x`, t, n, r),
        height: ({ height: e, paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }, i) =>
          ot(e, i, `y`, t, n, r),
        top: ({ top: e }) => parseFloat(e),
        left: ({ left: e }) => parseFloat(e),
        bottom: ({ top: e }, t) => {
          let { y: n } = t();
          return parseFloat(e) + (n.max - n.min);
        },
        right: ({ left: e }, t) => {
          let { x: n } = t();
          return parseFloat(e) + (n.max - n.min);
        },
        x: ({ transform: e }) => rt(e, `x`),
        y: ({ transform: e }) => rt(e, `y`),
      }),
      (Fc.translateX = Fc.x),
      (Fc.translateY = Fc.y),
      (Ic = /* @__PURE__ */ new Set()),
      (Lc = !1),
      (Rc = !1),
      (zc = !1),
      (Bc = class {
        constructor(e, t, n, r, i, a = !1) {
          ((this.state = `pending`),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = a));
        }
        scheduleResolve() {
          ((this.state = `scheduled`),
            this.isAsync
              ? (Ic.add(this), Lc || ((Lc = !0), G.read(ct), G.resolveKeyframes(st)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
          if (e[0] === null) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = ut(n.readValue(t, a), t, a);
              r !== void 0 && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          }
          tt(e);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
          ((this.state = `complete`),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            Ic.delete(this));
        }
        cancel() {
          this.state === `scheduled` && (Ic.delete(this), (this.state = `pending`));
        }
        resume() {
          this.state === `pending` && this.scheduleResolve();
        }
      }),
      (Vc = (e) => e.startsWith(`--`)),
      (Hc = {}),
      (Uc = /* @__PURE__ */ ft(() => o.ScrollTimeline !== void 0, `scrollTimeline`)),
      (Wc = /*@__PURE__*/ ft(() => {
        try {
          document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      }, `linearEasing`)),
      (Gc = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`),
      (Kc = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: /*@__PURE__*/ Gc([0, 0.65, 0.55, 1]),
        circOut: /*@__PURE__*/ Gc([0.55, 0, 1, 0.45]),
        backIn: /*@__PURE__*/ Gc([0.31, 0.01, 0.66, -0.59]),
        backOut: /*@__PURE__*/ Gc([0.33, 1.53, 0.69, 0.99]),
      }),
      (qc = class extends lc {
        constructor(e) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !e)
          )
            return;
          let {
            element: t,
            name: n,
            keyframes: r,
            pseudoElement: i,
            allowFlatten: a = !1,
            finalKeyframe: o,
            onComplete: s,
          } = e;
          ((this.isPseudoElement = !!i), (this.allowFlatten = a), (this.options = e), e.type);
          let c = gt(e);
          ((this.animation = mt(t, n, r, c, i)),
            c.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !i)) {
                let e = Je(r, this.options, o, this.speed);
                (this.updateMotionValue && this.updateMotionValue(e),
                  dt(t, n, e),
                  this.animation.cancel());
              }
              (s?.(), this.notifyFinished());
            }),
            Ze(this, e, c));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            this.state === `finished` && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: e } = this;
          e !== `idle` &&
            e !== `finished` &&
            (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let e = this.options?.element;
          !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
        }
        get duration() {
          let e = this.animation.effect?.getComputedTiming?.().duration || 0;
          return /* @__PURE__ */ I(Number(e));
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + /* @__PURE__ */ I(e);
        }
        get time() {
          return /* @__PURE__ */ I(Number(this.animation.currentTime) || 0);
        }
        set time(e) {
          let t = this.finishedTime !== null;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = /* @__PURE__ */ F(e)),
            t && this.animation.pause());
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(e) {
          (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
        }
        get state() {
          return this.finishedTime === null ? this.animation.playState : `finished`;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(e) {
          this.manualStartTime = this.animation.startTime = e;
        }
        attachTimeline({ timeline: e, onAttach: t, observe: n }) {
          return (
            this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }),
            (this.animation.onfinish = null),
            e && Uc() ? ((this.animation.timeline = e), t?.(this.animation), P) : n(this)
          );
        }
      }),
      (Jc = { anticipate: Yo, backInOut: Jo, circInOut: Qo }),
      (Yc = 10),
      (Xc = class extends qc {
        constructor(e) {
          (vt(e),
            Ye(e),
            super(e),
            e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
            (this.options = e));
        }
        updateMotionValue(e) {
          let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
          if (!t) return;
          if (e !== void 0) {
            t.set(e);
            return;
          }
          let o = new dc({ ...a, autoplay: !1 }),
            s = Math.max(Yc, R.now() - this.startTime),
            c = Po(0, Yc, s - Yc),
            l = o.sample(s).value,
            { name: u } = this.options;
          (i && u && dt(i, u, l),
            t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
            o.stop());
        }
      }),
      (Zc = (e, t) =>
        t !== `zIndex` &&
        !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (U.test(e) || e === `0`) && !e.startsWith(`url(`))
        )),
      (Qc = /* @__PURE__ */ new Set([
        `opacity`,
        `clipPath`,
        `filter`,
        `transform`,
        `backgroundColor`,
      ])),
      ($c = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/),
      (el = /* @__PURE__ */ new Set([
        `color`,
        `backgroundColor`,
        `outlineColor`,
        `fill`,
        `stroke`,
        `borderColor`,
        `borderTopColor`,
        `borderRightColor`,
        `borderBottomColor`,
        `borderLeftColor`,
      ])),
      (tl = /*@__PURE__*/ te(() => Object.hasOwnProperty.call(Element.prototype, `animate`))),
      (nl = class extends lc {
        constructor(e) {
          (super(),
            (this.stop = () => {
              (this._animation && (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = R.now()));
          let { keyframes: t, name: n, motionValue: r, element: i } = e,
            a = e;
          ((a.autoplay ??= !0),
            (a.delay ??= 0),
            (a.type ??= `keyframes`),
            (a.repeat ??= 0),
            (a.repeatDelay ??= 0),
            (a.repeatType ??= `loop`));
          let o = i?.KeyframeResolver || Bc;
          ((this.keyframeResolver = new o(
            t,
            (e, t, n) => this.onKeyframesResolved(e, t, a, !n),
            n,
            r,
            i
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(e, t, n, r) {
          this.keyframeResolver = void 0;
          let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
          this.resolvedAt = R.now();
          let u = !0;
          bt(e, i, a, o) ||
            ((u = !1),
            (N.instantAnimations || !s) && l?.(Je(e, n, t)),
            (e[0] = e[e.length - 1]),
            xt(n),
            (n.repeat = 0));
          let { onComplete: d } = n;
          ((n.finalKeyframe = t),
            (n.keyframes = e),
            (n.onComplete = () => {
              (d?.(), this.notifyFinished());
            }));
          let f = u && !c && Ct(n);
          r &&
            (f || this.resolvedAt !== this.createdAt) &&
            (n.startTime ??= cc(this.createdAt, this.resolvedAt));
          let p;
          if (f) {
            n.element = n.motionValue?.owner?.current;
            try {
              p = new Xc(n);
            } catch {
              p = new dc(n);
            }
          } else p = new dc(n);
          ((this.pendingTimeline &&=
            ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)), void 0)),
            (this._animation = p));
        }
        get finished() {
          return this._animation ? this._animation.finished : super.finished;
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
        get animation() {
          return (this._animation || (this.keyframeResolver?.resume(), lt()), this._animation);
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(e) {
          this.animation.time = e;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(e) {
          this.animation.speed = e;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(e) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(e))
              : (this.pendingTimeline = e),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
        }
      }),
      (rl = class {
        constructor(e) {
          ((this.stop = () => this.runAll(`stop`)), (this.animations = e.filter(Boolean)));
        }
        get finished() {
          return Promise.all(this.animations.map((e) => e.finished));
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => t.attachTimeline(e));
          return () => {
            t.forEach((e, t) => {
              (e && e(), this.animations[t].stop());
            });
          };
        }
        get time() {
          return this.getAll(`time`);
        }
        set time(e) {
          this.setAll(`time`, e);
        }
        get speed() {
          return this.getAll(`speed`);
        }
        set speed(e) {
          this.setAll(`speed`, e);
        }
        get state() {
          return this.getAll(`state`);
        }
        get startTime() {
          return this.getAll(`startTime`);
        }
        get duration() {
          return wt(this.animations, `duration`);
        }
        get iterationDuration() {
          return wt(this.animations, `iterationDuration`);
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll(`play`);
        }
        pause() {
          this.runAll(`pause`);
        }
        cancel() {
          this.runAll(`cancel`);
        }
        complete() {
          this.runAll(`complete`);
        }
      }),
      (il = class extends rl {
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
      }),
      (al = 30),
      (ol = (e) => !isNaN(parseFloat(e))),
      (sl = { current: void 0 }),
      (cl = class {
        constructor(e, t = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e) => {
              let t = R.now();
              if (
                (this.updatedAt !== t && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev && (this.notifyChange(), this.dependents))
              )
                for (let e of this.dependents) e.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = R.now()),
            this.canTrackVelocity === null &&
              e !== void 0 &&
              (this.canTrackVelocity = ol(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on(`change`, e);
        }
        on(e, t) {
          var n;
          return e === `change`
            ? this.onChangeSubscribe(t)
            : ((n = this.events)[e] || (n[e] = new Bo())).add(t);
        }
        onChangeSubscribe(e) {
          let { events: t } = this;
          return (
            !t.change && !this.changeSubscriber
              ? (this.changeSubscriber = e)
              : (t.change ||
                  ((t.change = new Bo()),
                  t.change.add(this.changeSubscriber),
                  (this.changeSubscriber = void 0)),
                t.change.add(e)),
            () => {
              (this.changeSubscriber === e ? (this.changeSubscriber = void 0) : t.change?.remove(e),
                this.stopIfUnobserved());
            }
          );
        }
        stopIfUnobserved() {
          G.read(() => {
            !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
          });
        }
        clearListeners() {
          this.changeSubscriber = void 0;
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e) {
          this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e);
        }
        setWithVelocity(e, t, n) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n));
        }
        jump(e, t = !0) {
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.notifyChange();
        }
        notifyChange() {
          let { current: e, changeSubscriber: t } = this;
          t ? t(e) : this.events.change?.notify(e);
        }
        addDependent(e) {
          ((this.dependents ||= /* @__PURE__ */ new Set()), this.dependents.add(e));
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e);
        }
        get() {
          return (sl.current && sl.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = R.now();
          if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > al)
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, al);
          return /* @__PURE__ */ Vo(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              this.hasAnimated = !0;
              let n = !1,
                r;
              ((r = e(() => {
                ((n = !0),
                  this.events.animationComplete?.notify(),
                  this.animation === r && this.clearAnimation(),
                  t());
              })),
                n || (this.animation = r),
                this.events.animationStart?.notify());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = void 0;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }),
      (ll = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }),
      (ul = (e) => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
      })),
      (dl = { type: `keyframes`, duration: 0.8 }),
      (fl = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }),
      (pl = (e, { keyframes: t }) =>
        t.length > 2 ? dl : Y.has(e) ? (e.startsWith(`scale`) ? ul(t[1]) : ll) : fl),
      (ml = /* @__PURE__ */ new Set([
        `when`,
        `delay`,
        `delayChildren`,
        `staggerChildren`,
        `staggerDirection`,
        `repeat`,
        `repeatType`,
        `repeatDelay`,
        `from`,
        `elapsed`,
      ])),
      (hl =
        (e, t, n, r = {}, i, a) =>
        (o) => {
          let s = Dt(r, e) || {},
            c = s.delay || r.delay || 0,
            { elapsed: l = 0 } = r;
          l -= /* @__PURE__ */ F(c);
          let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: `easeOut`,
            velocity: t.getVelocity(),
            ...s,
            delay: -l,
            onUpdate: (e) => {
              (t.set(e), s.onUpdate && s.onUpdate(e));
            },
            onComplete: () => {
              (o(), s.onComplete && s.onComplete());
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i,
          };
          (Ot(s) || Object.assign(u, pl(e, u)),
            (u.duration &&= /* @__PURE__ */ F(u.duration)),
            (u.repeatDelay &&= /* @__PURE__ */ F(u.repeatDelay)),
            u.from !== void 0 && (u.keyframes[0] = u.from));
          let d = !1;
          if (
            ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
              (xt(u), u.delay === 0 && (d = !0)),
            (N.instantAnimations ||
              N.skipAnimations ||
              i?.shouldSkipAnimations ||
              s.skipAnimations) &&
              ((d = !0), xt(u), (u.delay = 0)),
            (u.allowFlatten = !s.type && !s.ease),
            d && !a && t.get() !== void 0)
          ) {
            let e = Je(u.keyframes, s);
            if (e !== void 0) {
              G.update(() => {
                (u.onUpdate(e), u.onComplete());
              });
              return;
            }
          }
          return s.isSync ? new dc(u) : new nl(u);
        }),
      (gl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u),
      (_l = (e, t) => (t === `exit` ? e.presenceContext?.custom : void 0)),
      (vl = /* @__PURE__ */ new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Ac])),
      (yl = (e) => Array.isArray(e)),
      (X = (e) => !!(e && e.getVelocity)),
      (bl = `framerAppearId`),
      (xl = `data-` + zt(bl)),
      (Sl = o !== void 0),
      (Cl = { test: (e) => e === `auto`, parse: (e) => e }),
      (wl = (e) => (t) => t.test(e)),
      (Tl = [ms, V, B, z, Ds, Es, Cl]),
      (El = (e) => Tl.find(wl(e))),
      (Dl = /* @__PURE__ */ new Set([`auto`, `none`, `0`])),
      (Ol = class extends Bc {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (typeof r == `string` && ((r = r.trim()), fs(r))) {
              let i = At(r, t.current);
              (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !vl.has(n) || e.length !== 2)) return;
          let [r, i] = e;
          if (typeof r == `number` && typeof i == `number`) return;
          let a = El(r),
            o = El(i);
          if (ae(r) !== ae(i) && Fc[n]) this.needsMeasurement = !0;
          else if (a !== o) {
            if (jc(a) && jc(o))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                typeof n == `string` && (e[t] = parseFloat(n));
              }
            else Fc[n] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) (e[t] === null || Gt(e[t])) && n.push(t);
          n.length && Kt(e, n, t);
        }
        measure() {
          let { element: e, name: t } = this;
          return Fc[t](o.getComputedStyle(e.current), () => e.measureViewportBox());
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          (n === `height` && (this.suspendedScrollY = o.pageYOffset),
            (this.measuredOrigin = this.measure()),
            (t[0] = this.measuredOrigin));
          let r = t[t.length - 1];
          r !== void 0 && this.motionValue?.jump(r, !1);
        }
        measureEndState() {
          let { element: e, unresolvedKeyframes: t } = this;
          if (!e || !e.current) return;
          this.motionValue?.jump(this.measuredOrigin, !1);
          let n = t.length - 1,
            r = t[n];
          ((t[n] = this.measure()),
            r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes());
        }
      }),
      (kl = [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomRightRadius`,
        `borderBottomLeftRadius`,
      ]),
      [...kl],
      (Al = []),
      (jl = (e, t) => (t && typeof e == `number` ? t.transform(e) : e)),
      (Ml = class {
        constructor(e = G.render) {
          ((this.step = e),
            (this.values = /* @__PURE__ */ new Map()),
            (this.pending = []),
            (this.numPending = 0),
            (this.flush = () => {
              let { pending: e, numPending: t } = this;
              this.numPending = 0;
              for (let n = 0; n < t; n++) e[n]();
            }));
        }
        set(e, t, n, r) {
          if ((this.values.get(e)?.onRemove(), r))
            for (let e of this.values.values()) e.value === r && (n = e.render);
          let i = () => n && this.schedule(n);
          t.get() !== void 0 && i();
          let a = t.on(`change`, i),
            o = () => {
              (a(),
                n && !r && this.cancel(n),
                this.values.get(e)?.onRemove === o && this.values.delete(e));
            };
          return (this.values.set(e, { value: t, render: r ? void 0 : n, onRemove: o }), o);
        }
        get(e) {
          return this.values.get(e)?.value;
        }
        release() {
          let e = /* @__PURE__ */ new Map();
          return (
            this.values.forEach((t, n) => {
              (e.set(n, t.value), t.onRemove());
            }),
            (this.transformKeys = this.transformValues = void 0),
            e
          );
        }
        schedule(e) {
          let { pending: t, numPending: n } = this;
          for (let r = 0; r < n; r++) if (t[r] === e) return;
          (n || this.step(this.flush), (t[this.numPending++] = e));
        }
        cancel(e) {
          let { pending: t } = this;
          for (let n = 0; n < this.numPending; n++)
            if (t[n] === e) {
              t[n] = t[--this.numPending];
              return;
            }
        }
      }),
      (Nl = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      (Pl = {}),
      (Fl = /* @__PURE__ */ new Set([`originX`, `originY`, `originZ`])),
      (Il = (e, t) => jl(e.get(t)?.get(), J[t])),
      (Ll = (e, t, n, r) => {
        let i, a;
        if (Y.has(n)) {
          if (n !== `pathRotation`) {
            let e = (t.transformKeys ??= []);
            (((t.transformValues ??= {})[n] = r),
              e.includes(n) || (e.push(n), e.sort((e, t) => Ac.indexOf(e) - Ac.indexOf(t))));
          }
          (t.get(`transform`) ||
            (!$t(e) && !t.get(`transformBox`) && Ll(e, t, `transformBox`, new cl(`fill-box`)),
            t.set(`transform`, new cl(`none`), () => {
              e.style.transform = rn(t);
            })),
            (a = t.get(`transform`)));
        } else
          Fl.has(n)
            ? (t.get(`transformOrigin`) ||
                t.set(`transformOrigin`, new cl(``), () => {
                  let n = Il(t, `originX`) ?? `50%`,
                    r = Il(t, `originY`) ?? `50%`,
                    i = Il(t, `originZ`) ?? 0;
                  e.style.transformOrigin = `${n} ${r} ${i}`;
                }),
              (a = t.get(`transformOrigin`)))
            : (i = Vc(n)
                ? () => {
                    e.style.setProperty(n, r.get());
                  }
                : () => {
                    e.style[n] = jl(r.get(), J[n]);
                  });
        return t.set(n, r, i, a);
      }),
      (Rl = (e) => $t(e) || en(e)),
      (zl = (e, t) => {
        if (Y.has(t)) return kc(e, t);
        let n = getComputedStyle(e),
          r = Vc(t) ? n.getPropertyValue(t) : n[t];
        return (typeof r == `string` && r.trim()) || 0;
      }),
      (Bl = /*@__PURE__*/ nn(Ll, { test: Rl, read: zl })),
      (Vl = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      (Hl = Ac.length),
      (Ul = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }),
      (Wl = { offset: `strokeDashoffset`, array: `strokeDasharray` }),
      (Gl = [
        `transform`,
        `opacity`,
        `clipPath`,
        `filter`,
        `offsetDistance`,
        `offsetPath`,
        `offsetRotate`,
        `offsetAnchor`,
      ]),
      (Kl = (e, t, n, r, i = n) => {
        let a = ln(e, i);
        !a && (i.startsWith(`data`) || i.startsWith(`aria`)) && (i = zt(i));
        let o = J[n] || J[i],
          s = a
            ? () => {
                e[i] = jl(r.get(), J[n]);
              }
            : () => {
                let t = jl(r.get(), o);
                t == null ? e.removeAttribute(i) : e.setAttribute(i, String(t));
              };
        return t.set(n, r, s);
      }),
      (ql = (e, t, n, r) =>
        n.startsWith(`path`)
          ? un(e, t, n, r)
          : n.startsWith(`attr`)
            ? Kl(e, t, n, r, dn(n))
            : (Y.has(n) || Fl.has(n) || Vc(n) || n in e.style ? Ll : Kl)(e, t, n, r)),
      (Jl = (e, t) =>
        Y.has(t)
          ? J[t]?.default || 0
          : Vc(t) || Gl.includes(t)
            ? zl(e, t) || e.getAttribute(zt(t)) || 0
            : ((t = dn(t)), e.getAttribute(zt(t)) ?? e.getAttribute(t) ?? void 0)),
      (Yl = /*@__PURE__*/ nn(ql, { test: en, read: Jl })),
      (Xl = 0.999999999999),
      (Zl = 1.0000000000001),
      (Ql = {}),
      ($l = (e) => (en(e) ? Yl : Bl)),
      (eu = class {
        constructor(e, t) {
          ((this.effect = e), (this.current = t), (this.KeyframeResolver = Ol));
        }
        getValue(e) {
          return this.effect.get(this.current, e);
        }
        readValue(e, t) {
          return this.effect.read(this.current, e, t);
        }
        render() {
          this.effect.flush(this.current);
        }
        measureViewportBox() {
          return On(this.current);
        }
        getProps() {
          return Ql;
        }
      }),
      (tu = /*@__PURE__*/ nn(
        (e, t, n, r) =>
          t.set(n, r, () => {
            e[n] = r.get();
          }),
        {
          test: (e) => Io(e),
          read: (e, t) => {
            let n = e[t];
            return typeof n == `string` || typeof n == `number` ? n : void 0;
          },
        }
      )),
      ({ schedule: nu, cancel: ru } = /* @__PURE__ */ Oe(queueMicrotask, !1)),
      (Z = { x: !1, y: !1 }),
      (iu = (e, t) => (t ? e === t || iu(e, t.parentElement) : !1)),
      (au = (e) =>
        e.pointerType === `mouse`
          ? typeof e.button != `number` || e.button <= 0
          : e.isPrimary !== !1),
      (ou = /* @__PURE__ */ new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`])),
      (su = /* @__PURE__ */ new Set([`INPUT`, `SELECT`, `TEXTAREA`])),
      (cu = /* @__PURE__ */ new WeakSet()),
      (lu = (e, t) => {
        let n = e.currentTarget;
        if (!n) return;
        let r = Rn(() => {
          if (cu.has(n)) return;
          zn(n, `down`);
          let e = Rn(() => {
            zn(n, `up`);
          });
          (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => zn(n, `cancel`), t));
        });
        (n.addEventListener(`keydown`, r, t),
          n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
      }),
      (uu = /* @__PURE__ */ new WeakSet()),
      (du = /* @__PURE__ */ new WeakMap()),
      (pu = (e, t, n) => (r, i) =>
        i && i[0] ? i[0][e + `Size`] : en(r) && `getBBox` in r ? r.getBBox()[t] : r[n]),
      (mu = /*@__PURE__*/ pu(`inline`, `width`, `offsetWidth`)),
      (hu = /*@__PURE__*/ pu(`block`, `height`, `offsetHeight`)),
      (gu = /* @__PURE__ */ new Set()),
      (vu = { value: null, addProjectionMetrics: null }),
      (yu = /* @__PURE__ */ new Set()),
      (bu = ({ timestamp: e }) => {
        yu.forEach((t) => t.tick(e));
      }),
      (xu = class extends lc {
        constructor(e) {
          (super(),
            (this.state = `idle`),
            (this.startTime = 0),
            (this.currentTime = 0),
            (this.started = !1),
            (this.hasNextTarget = !1),
            (this.nextTarget = 0),
            (this.stop = () => {
              this.state !== `idle` && (this.teardown(), this.options.onStop?.());
            }),
            (this.options = e),
            (this.factory = e.type),
            (this.generator = this.factory(e)));
          let { driver: t } = e;
          (t && (this.driver = t((e) => this.tick(e))),
            (this.startTime = this.now()),
            (this.state = `running`),
            this.driver ? this.driver.start() : (yu.size || G.update(bu, !0), yu.add(this)));
        }
        setTarget(e, t) {
          ((this.nextTarget = e), (this.nextVelocity = t), (this.hasNextTarget = !0));
        }
        retarget(e, t) {
          let { options: n, generator: r } = this;
          ((n.keyframes = e),
            (n.velocity = t),
            (this.startTime = this.now()),
            (this.currentTime = 0),
            r.retarget ? r.retarget(e, t) : (this.generator = this.factory(n)));
        }
        tick(e) {
          let { options: t, hasNextTarget: n } = this,
            { delay: r = 0, onUpdate: i, onPlay: a } = t;
          this.started || (this.startTime = cc(this.startTime, e));
          let o = Math.round(e - this.startTime) - r,
            s = (this.currentTime = Math.max(0, o)),
            c = this.generator.next(s),
            l = o < 0 ? t.keyframes[0] : c.value;
          if (n) {
            this.hasNextTarget = !1;
            let { keyframes: e } = t;
            ((e[0] = l),
              (e[1] = this.nextTarget),
              this.retarget(e, this.nextVelocity ?? this.getGeneratorVelocity()));
          }
          ((n || !this.started) && ((this.started = !0), a?.()),
            this.state === `running` &&
              (i?.(l),
              c.done &&
                o >= 0 &&
                !n &&
                !this.hasNextTarget &&
                this.state === `running` &&
                (this.notifyFinished(),
                this.teardown(),
                (this.state = `finished`),
                t.onComplete?.())));
        }
        getGeneratorVelocity() {
          return qe(this.generator, this.currentTime, this.options.velocity);
        }
        now() {
          return this.driver ? this.driver.now() : R.now();
        }
        teardown() {
          ((this.state = `idle`),
            this.driver ? this.driver.stop() : (yu.delete(this), yu.size || K(bu)));
        }
      }),
      (Su = (e) => (typeof e == `number` ? e : parseFloat(e))),
      [...Tl],
      (Cu = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
      (wu = () => ({ x: Cu(), y: Cu() })),
      (Tu = () => ({ min: 0, max: 0 })),
      (Q = () => ({ x: Tu(), y: Tu() })),
      (Eu = /* @__PURE__ */ new WeakMap()),
      (Du = [
        `animate`,
        `whileInView`,
        `whileFocus`,
        `whileHover`,
        `whileTap`,
        `whileDrag`,
        `exit`,
      ]),
      (Ou = [`initial`, ...Du]),
      (ku = { current: null }),
      (Au = { current: !1 }),
      (ju = o !== void 0),
      (Mu = [
        `AnimationStart`,
        `AnimationComplete`,
        `Update`,
        `BeforeLayoutMeasure`,
        `LayoutMeasure`,
        `LayoutAnimationStart`,
        `LayoutAnimationComplete`,
      ]),
      (Nu = {}),
      (Pu = class {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            skipAnimations: i,
            blockInitialAnimation: a,
            visualState: o,
          },
          s = {}
        ) {
          ((this.current = null),
            (this.children = /* @__PURE__ */ new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = /* @__PURE__ */ new Map()),
            (this.KeyframeResolver = Bc),
            (this.features = {}),
            (this.valueSubscriptions = /* @__PURE__ */ new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = R.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), G.render(this.render, !1, !0));
            }));
          let { latestValues: c, renderState: l } = o;
          ((this.latestValues = c),
            (this.baseTarget = { ...c }),
            (this.initialValues = t.initial ? { ...c } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.skipAnimationsConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!a),
            (this.isControllingVariants = or(t)),
            (this.isVariantNode = sr(t)),
            this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current)));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
          for (let e in d) {
            let t = d[e];
            c[e] !== void 0 && X(t) && t.set(c[e]);
          }
        }
        mount(e) {
          if (this.hasBeenMounted)
            for (let e in this.initialValues)
              (this.values.get(e)?.jump(this.initialValues[e]),
                (this.latestValues[e] = this.initialValues[e]));
          if (
            ((this.current = e),
            Eu.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.isVariantNode && !this.isControllingVariants)
          ) {
            let e = this;
            do e = e.props.inherit !== !1 && e.parent;
            while (e && !e.isVariantNode);
            if (e) {
              let { variantChildren: t } = e;
              (t.add(this), (this.removeFromVariantTree = () => t.delete(this)));
            }
          }
          (this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            this.reducedMotionConfig === `never`
              ? (this.shouldReduceMotion = !1)
              : this.reducedMotionConfig === `always`
                ? (this.shouldReduceMotion = !0)
                : (Au.current || lr(), (this.shouldReduceMotion = ku.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          (this.projection && this.projection.unmount(),
            K(this.notifyUpdate),
            K(this.render),
            this.valueSubscriptions.forEach((e) => e()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent?.removeChild(this));
          for (let e in this.events) this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        addChild(e) {
          (this.children.add(e),
            (this.enteringChildren ??= /* @__PURE__ */ new Set()),
            this.enteringChildren.add(e));
        }
        removeChild(e) {
          (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
        }
        bindToMotionValue(e, t) {
          if (
            (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
            t.accelerate && Qc.has(e) && this.current instanceof HTMLElement)
          ) {
            let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate,
              s = new qc({
                element: this.current,
                name: e,
                keyframes: r,
                times: i,
                ease: a,
                duration: /* @__PURE__ */ F(o),
              }),
              c = n(s);
            this.valueSubscriptions.set(e, () => {
              (c(), s.cancel());
            });
            return;
          }
          let n = Y.has(e);
          n && this.onBindTransform && this.onBindTransform();
          let r = t.on(`change`, (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && G.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender());
            }),
            i;
          (o !== void 0 && o.MotionCheckAppearSync && (i = o.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (r(), i && i());
            }));
        }
        sortNodePosition(e) {
          return !this.current ||
            !e.current ||
            !this.sortInstanceNodePosition ||
            this.type !== e.type
            ? 0
            : this.sortInstanceNodePosition(this.current, e.current);
        }
        updateFeatures() {
          let e = `animation`;
          for (e in Nu) {
            let t = Nu[e];
            if (!t) continue;
            let { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Q();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let t = 0; t < Mu.length; t++) {
            let n = Mu[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            let r = e[`on` + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          ((this.prevMotionValues = cr(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        addValue(e, t) {
          let n = this.values.get(e);
          if (t !== n) {
            (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t));
            let r = t.get();
            r !== void 0 && (this.latestValues[e] = r);
          }
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return (
            n === void 0 &&
              t !== void 0 &&
              ((n = O(t ?? this.getDefaultValue?.(e), { owner: this })), this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          let n =
            this.latestValues[e] !== void 0 || !this.current
              ? this.latestValues[e]
              : (this.getBaseTargetFromProps(this.props, e) ??
                this.readValueFromInstance(this.current, e, this.options));
          return (
            n != null &&
              (typeof n == `string` && (Fo(n) || Lo(n))
                ? (n = parseFloat(n))
                : typeof n != `number` && !U.test(n) && U.test(t) && (n = et(e, t)),
              this.setBaseTarget(e, X(n) ? n.get() : n)),
            X(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        on(e, t) {
          return (this.events[e] || (this.events[e] = new Bo()), this.events[e].add(t));
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
        scheduleRenderMicrotask() {
          nu.render(this.render);
        }
      }),
      (Fu = class extends Pu {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = Ol));
        }
        sortInstanceNodePosition(e, t) {
          return e.compareDocumentPosition(t) & 2 ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          let n = e.style;
          return n ? n[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          (delete t[e], delete n[e]);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          X(e) &&
            (this.childSubscription = e.on(`change`, (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }),
      (Iu = class {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }),
      (Lu = {}),
      (Ru = class extends Fu {
        constructor() {
          (super(...arguments), (this.type = `html`), (this.renderInstance = fr));
        }
        mount(e) {
          (e.style, super.mount(e));
        }
        readValueFromInstance(e, t) {
          if (Y.has(t)) return this.projection?.isProjecting ? nt(t) : kc(e, t);
          {
            let n = gr(e),
              r = (us(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == `string` ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return On(e, t);
        }
        build(e, t, n) {
          on(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return hr(e, t, n);
        }
      }),
      (zu = /* @__PURE__ */ new Set([
        `baseFrequency`,
        `diffuseConstant`,
        `kernelMatrix`,
        `kernelUnitLength`,
        `keySplines`,
        `keyTimes`,
        `limitingConeAngle`,
        `markerHeight`,
        `markerWidth`,
        `numOctaves`,
        `targetX`,
        `targetY`,
        `surfaceScale`,
        `specularConstant`,
        `specularExponent`,
        `stdDeviation`,
        `tableValues`,
        `viewBox`,
        `gradientTransform`,
        `pathLength`,
        `startOffset`,
        `textLength`,
        `lengthAdjust`,
      ])),
      (Bu = (e) => typeof e == `string` && e.toLowerCase() === `svg`),
      (Vu = class extends Fu {
        constructor() {
          (super(...arguments),
            (this.type = `svg`),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Q));
        }
        getBaseTargetFromProps(e, t) {
          return Y.has(t) ? (super.getBaseTargetFromProps(e, t) ?? nt(t)) : e[t];
        }
        getDefaultValue(e) {
          return Y.has(e) ? (this.latestValues[e] ?? nt(e)) : void 0;
        }
        readValueFromInstance(e, t) {
          if (Y.has(t)) {
            let e = yc(t);
            return (e && e.default) || 0;
          }
          if (Gl.includes(t)) {
            let n = getComputedStyle(e)[t];
            if (typeof n == `string` && n) return n.trim();
          }
          return ((t = zu.has(t) ? t : zt(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return vr(e, t, n);
        }
        build(e, t, n) {
          cn(e, t, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(e, t, n, r) {
          _r(e, t, n, r);
        }
        mount(e) {
          ((this.isSVGTag = Bu(e.tagName)), super.mount(e));
        }
      }),
      (Hu = [...Du].reverse()),
      Ou.length,
      (Uu = 0.9999),
      (Wu = 1.0001),
      (Gu = -0.01),
      (Ku = 0.01),
      (qu = [`x`, `scaleX`, `originX`]),
      (Ju = [`y`, `scaleY`, `originY`]),
      (Yu = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`) {
            if (V.test(e)) e = parseFloat(e);
            else return e;
          }
          return `${Wr(e, t.target.x)}% ${Wr(e, t.target.y)}%`;
        },
      }),
      (Xu = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          let r = e,
            i = U.parse(e);
          if (i.length > 5) return r;
          let a = U.createTransformer(e),
            o = typeof i[0] == `number` ? 0 : 1,
            s = n.x.scale * t.x,
            c = n.y.scale * t.y;
          ((i[0 + o] /= s), (i[1 + o] /= c));
          let l = W(s, c, 0.5);
          return (
            typeof i[2 + o] == `number` && (i[2 + o] /= l),
            typeof i[3 + o] == `number` && (i[3 + o] /= l),
            a(i)
          );
        },
      }),
      (Zu = kl.length),
      (Qu = (e) => typeof e == `number` || V.test(e)),
      ($u = /*@__PURE__*/ Jr(0, 0.5, Zo)),
      (ed = /*@__PURE__*/ Jr(0.5, 0.95, P)),
      (td = (e, t) => e.depth - t.depth),
      (nd = class {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (ee(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (D(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(td), (this.isDirty = !1), this.children.forEach(e));
        }
      }),
      (rd = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          ee(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            let n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            let r = n.instance;
            (!r || r.isConnected === !1) && !n.snapshot && (D(this.members, n), n.unmount());
          }
          e.scheduleRender();
        }
        remove(e) {
          if (
            (D(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
            let e = this.members[t];
            if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return (this.promote(e), !0);
          }
          return !1;
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            (n.updateSnapshot(), e.scheduleRender());
            let { layoutDependency: r } = n.options,
              { layoutDependency: i } = e.options;
            ((r === void 0 || r !== i) &&
              ((e.resumeFrom = n),
              t && (n.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues = n.animationValues || n.latestValues)),
              e.root?.isUpdating && (e.isLayoutDirty = !0)),
              e.options.crossfade === !1 && n.hide());
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
          });
        }
        scheduleRender() {
          this.members.forEach((e) => e.instance && e.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0);
        }
      }),
      (id = {
        borderRadius: { ...Yu, applyTo: [...kl] },
        borderTopLeftRadius: Yu,
        borderTopRightRadius: Yu,
        borderBottomLeftRadius: Yu,
        borderBottomRightRadius: Yu,
        boxShadow: Xu,
      }),
      (ad = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }),
      Object.assign(Lu, { ...id, ...Lu }),
      (od = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }),
      (sd = [``, `X`, `Y`, `Z`]),
      (cd = 1e3),
      (ld = 0),
      (ud = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
      (dd = (e) => a !== void 0 && a.userAgent && a.userAgent.toLowerCase().includes(e)),
      (fd = dd(`applewebkit/`) && !dd(`chrome/`) ? Math.round : P),
      (pd = ti({
        attachResizeListener: (e, t) => Xr(e, `resize`, t),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      })),
      (md = (e) => !e.isLayoutDirty && e.willUpdate(!1)),
      (hd = { current: void 0 }),
      (gd = ti({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!hd.current) {
            let e = new pd({});
            (e.mount(o), e.setOptions({ layoutScroll: !0 }), (hd.current = e));
          }
          return hd.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = t === void 0 ? `none` : t;
        },
        checkIsScrollRoot: (e) => o.getComputedStyle(e).position === `fixed`,
      })),
      Js.reduce((e, t) => ((e[t] = (e) => K(e)), e), {}),
      ($ = S({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` })),
      (_d = class extends p {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if ($t(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            let e = t.offsetParent,
              n = ($t(e) && e.offsetWidth) || 0,
              r = ($t(e) && e.offsetHeight) || 0,
              i = getComputedStyle(t),
              a = this.props.sizeRef.current;
            ((a.height = parseFloat(i.height)),
              (a.width = parseFloat(i.width)),
              (a.top = t.offsetTop),
              (a.left = t.offsetLeft),
              (a.right = n - a.width - a.left),
              (a.bottom = r - a.height - a.top),
              (a.direction = i.direction));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }),
      (vd = ({
        children: e,
        initial: n,
        isPresent: r,
        onExitComplete: i,
        custom: a,
        presenceAffectsLayout: o,
        mode: s,
        anchorX: c,
        anchorY: u,
        root: d,
      }) => {
        let f = E(Mi),
          p = l(),
          m = T(r),
          h = T(i);
        Mo(() => {
          ((m.current = r), (h.current = i));
        });
        let g = !0,
          _ = t(
            () => (
              (g = !1),
              {
                id: p,
                initial: n,
                isPresent: r,
                custom: a,
                onExitComplete: (e) => {
                  f.set(e, !0);
                  for (let e of f.values()) if (!e) return;
                  i && i();
                },
                register: (e) => (
                  f.set(e, !1),
                  () => {
                    (f.delete(e), !m.current && !f.size && h.current?.());
                  }
                ),
              }
            ),
            [r, f, i]
          );
        return (
          o && g && (_ = { ..._ }),
          t(() => {
            f.forEach((e, t) => f.set(t, !1));
          }, [r]),
          C(() => {
            !r && !f.size && i && i();
          }, [r]),
          (e = y(ji, {
            pop: s === `popLayout`,
            isPresent: r,
            anchorX: c,
            anchorY: u,
            root: d,
            children: e,
          })),
          y(No.Provider, { value: _, children: e })
        );
      }),
      (yd = (e) => e.key || ``),
      (bd = ({
        children: e,
        custom: n,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: a = !0,
        mode: o = `sync`,
        propagate: s = !1,
        anchorX: c = `left`,
        anchorY: l = `top`,
        root: u,
      }) => {
        let [f, p] = Ni(s),
          h = t(() => Pi(e), [e]),
          _ = s && !f ? [] : h.map(yd),
          v = T(!0),
          b = E(() => /* @__PURE__ */ new Map()),
          x = T(/* @__PURE__ */ new Set()),
          [S, C] = m(h),
          [w, ee] = m(h);
        (Mo(() => {
          s && !f && !w.length && p?.();
        }, [f, s, w.length, p]),
          Mo(() => {
            v.current = !1;
            for (let e = 0; e < w.length; e++) {
              let t = yd(w[e]);
              _.includes(t) ? (b.delete(t), x.current.delete(t)) : b.get(t) !== !0 && b.set(t, !1);
            }
          }, [w, _.length, _.join(`-`)]));
        let D = [];
        if (h !== S) {
          let e = [...h],
            t = 0;
          for (let n of w) {
            let r = _.indexOf(yd(n));
            r === -1 ? (e.splice(t++, 0, n), D.push(n)) : (t = r + D.length + 1);
          }
          return (
            D.every((e) => b.get(yd(e))) ? (e = h) : o === `wait` && (e = D),
            ee(Pi(e)),
            C(h),
            null
          );
        }
        let { forceRender: te } = g(Ao);
        return y(d, {
          children: w.map((e) => {
            let t = yd(e),
              d = s && !f ? !1 : h === w || _.includes(t);
            return y(
              vd,
              {
                isPresent: d,
                initial: !v.current || r ? void 0 : !1,
                custom: n,
                presenceAffectsLayout: a,
                mode: o,
                root: u,
                onExitComplete: d
                  ? void 0
                  : () => {
                      if (x.current.has(t)) return;
                      if (b.has(t)) (x.current.add(t), b.set(t, !0));
                      else return;
                      let e = !0;
                      (b.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (te?.(), C([]), s && p?.(), i && i()));
                    },
                anchorX: c,
                anchorY: l,
                children: e,
              },
              t
            );
          }),
        });
      }),
      (xd = S(null)),
      (Sd = (e) => e === !0),
      (Cd = (e) => Sd(e === !0) || e === `id`),
      (wd = ({ children: e, id: n, inherit: r = !0 }) => {
        let i = g(Ao),
          a = g(xd),
          [o, s] = Ii(),
          c = T(null),
          l = i.id || a;
        c.current === null &&
          (Cd(r) && l && (n = n ? l + `-` + n : l),
          (c.current = { id: n, group: (Sd(r) && i.group) || Di() }));
        let u = t(() => ({ ...c.current, forceRender: o }), [s]);
        return y(Ao.Provider, { value: u, children: e });
      }),
      (Td = S({ strict: !1 })),
      (Ed = {
        animation: [
          `animate`,
          `variants`,
          `whileHover`,
          `whileTap`,
          `exit`,
          `whileInView`,
          `whileFocus`,
          `whileDrag`,
        ],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`],
      }),
      (Dd = !1),
      (Od = /* @__PURE__ */ S({})),
      (kd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })),
      (Ad = () => ({ ...kd(), attrs: {} })),
      (jd = /* @__PURE__ */ new Set(
        /* @__PURE__ */ `animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
          `.`
        )
      )),
      (Md = [
        `animate`,
        `circle`,
        `defs`,
        `desc`,
        `ellipse`,
        `g`,
        `image`,
        `line`,
        `filter`,
        `marker`,
        `mask`,
        `metadata`,
        `path`,
        `pattern`,
        `polygon`,
        `polyline`,
        `rect`,
        `stop`,
        `switch`,
        `symbol`,
        `svg`,
        `text`,
        `tspan`,
        `use`,
        `view`,
      ]),
      (Nd = (e) => (t, n) => {
        let r = g(Od),
          i = g(No),
          a = () => ea(e, t, r, i);
        return n ? a() : E(a);
      }),
      (Pd = /*@__PURE__*/ Nd({ scrapeMotionValuesFromProps: hr, createRenderState: kd })),
      (Fd = /*@__PURE__*/ Nd({ scrapeMotionValuesFromProps: vr, createRenderState: Ad })),
      (Id = Symbol.for(`motionComponentSymbol`)),
      (Ld = S({})),
      (Rd = (e, t) => ((t.isSVG ?? Qi(e)) ? new Vu(t) : new Ru(t, { allowProjection: e !== s }))),
      (zd = class extends Iu {
        constructor(e) {
          (super(e), (e.animationState ||= br(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          ir(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }),
      (Bd = 0),
      (Vd = class extends Iu {
        constructor() {
          (super(...arguments), (this.id = Bd++));
        }
        update() {
          let { presenceContext: e, prevPresenceContext: t, animationState: n } = this.node;
          if (!e || !n) return;
          let { isPresent: r, onExitComplete: i } = e,
            a = t?.isPresent;
          if (r === a) return;
          if (r && a === !1) {
            if (this.exit === !0) {
              let { initial: e } = this.node.getProps();
              if (e && !Array.isArray(e)) {
                let { transition: t, transitionEnd: n, ...r } = Nt(this.node, e) || {};
                for (let e in r) this.node.getValue(e)?.jump(r[e]);
              }
              ((this.node.blockInitialAnimation = !1), n.reset(), n.animateChanges());
            } else n.setActive(`exit`, !1);
            this.exit = void 0;
            return;
          }
          let o = (this.exit = n.setActive(`exit`, !r));
          i &&
            !r &&
            o.then(() => {
              this.exit === o && ((this.exit = !0), i(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      }),
      (Hd = { animation: { Feature: zd }, exit: { Feature: Vd } }),
      (Ud = (e) => (t) => au(t) && e(t, fa(t))),
      (Wd = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
      (Gd = (e, t) => Math.abs(e - t)),
      (Kd = /*#__PURE__*/ new Set([`auto`, `scroll`])),
      (qd = class {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r = o,
            dragSnapToOrigin: i = !1,
            distanceThreshold: a = 3,
            element: s,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = o),
            (this.scrollPositions = /* @__PURE__ */ new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(o);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              ((this.hasPendingMove = !1),
                this.lastRawMoveEventInfo &&
                  (this.lastMoveEventInfo = ha(
                    this.lastRawMoveEventInfo,
                    this.transformPagePoint
                  )));
              let e = _a(this.lastMoveEventInfo, this.history),
                t = this.startEvent !== null,
                n = ma(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              let { point: r } = e;
              this.history.push({ ...r, timestamp: R.now() });
              let { onStart: i, onMove: a } = this.handlers;
              (t || (i && i(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastRawMoveEventInfo = t),
                (this.lastMoveEventInfo = ha(t, this.transformPagePoint)),
                (this.hasPendingMove = !0),
                G.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              (this.hasPendingMove && this.updatePoint(), this.end());
              let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = _a(
                e.type === `pointercancel`
                  ? this.lastMoveEventInfo
                  : ha(t, this.transformPagePoint),
                this.history
              );
              (this.startEvent && n && n(e, a), r && r(e, a));
            }),
            !au(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = a),
            (this.contextWindow = r || o));
          let c = ha(fa(e), this.transformPagePoint),
            { point: l } = c,
            { timestamp: u } = L;
          this.history = [{ ...l, timestamp: u }];
          let { onSessionStart: d } = t;
          d && d(e, _a(c, this.history));
          let f = { passive: !0, capture: !0 };
          ((this.removeListeners = Ro(
            pa(this.contextWindow, `pointermove`, this.handlePointerMove, f),
            pa(this.contextWindow, `pointerup`, this.handlePointerUp, f),
            pa(this.contextWindow, `pointercancel`, this.handlePointerUp, f)
          )),
            s && this.startScrollTracking(s));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t;) {
            let e = getComputedStyle(t);
            ((Kd.has(e.overflowX) || Kd.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(o, { x: o.scrollX, y: o.scrollY }),
            o.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            o.addEventListener(`scroll`, this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (o.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
                o.removeEventListener(`scroll`, this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === o,
            r = n ? { x: o.scrollX, y: o.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
            i = { x: r.x - t.x, y: r.y - t.y };
          (i.x !== 0 || i.y !== 0) &&
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
              : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(e, r),
            G.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            K(this.updatePoint));
        }
      }),
      (Jd = 0.35),
      (Yd = /* @__PURE__ */ new WeakMap()),
      (Xd = class {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Q()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && r.isPresent === !1) return;
          let i = (e) => {
              (t && this.snapToCursor(e), this.stopAnimation());
            },
            a = (e, t) => {
              let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = Mn(n)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                M((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (B.test(t)) {
                    let { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      let r = n.layout.layoutBox[e];
                      r && (t = j(r) * (parseFloat(t) / 100));
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && G.update(() => i(e, t), !1, !0),
                Rt(this.visualElement, `transform`));
              let { animationState: a } = this.visualElement;
              a && a.setActive(`whileDrag`, !0);
            },
            o = (e, t) => {
              ((this.latestPointerEvent = e), (this.latestPanInfo = t));
              let {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a,
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              let { offset: o } = t;
              r && this.currentDirection === null
                ? ((this.currentDirection = Pa(o)),
                  this.currentDirection !== null && i && i(this.currentDirection))
                : (this.updateAxis(`x`, t.point, o),
                  this.updateAxis(`y`, t.point, o),
                  this.visualElement.render(),
                  a && G.update(() => a(e, t), !1, !0));
            },
            s = (e, t) => {
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                this.stop(e, t),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            c = () => {
              let { dragSnapToOrigin: e } = this.getProps();
              (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new qd(
            e,
            { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              distanceThreshold: n,
              contextWindow: Wd(this.visualElement),
              element: this.visualElement.current,
            }
          );
        }
        stop(e, t) {
          let n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            i = this.isDragging;
          if ((this.cancel(), !i || !r || !n)) return;
          let { velocity: a } = r;
          this.startAnimation(a);
          let { onDragEnd: o } = this.getProps();
          o && G.postRender(() => o(n, r));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: n } = this.getProps();
          (!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive(`whileDrag`, !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(), (this.panSession = void 0));
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !Na(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e];
          (this.constraints &&
            this.constraints[e] &&
            (a = xa(a, this.constraints[e], this.elastic[e])),
            i.set(a));
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            n =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (e && ra(e)
            ? (this.constraints ||= this.resolveRefConstraints())
            : (this.constraints = e && n ? Ca(n.layoutBox, e) : !1),
            (this.elastic = Oa(t)),
            r !== this.constraints &&
              !ra(e) &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              M((e) => {
                this.constraints !== !1 &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = Da(n.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
          if (!e || !ra(e)) return !1;
          let n = e.current,
            { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          r.root && ((r.root.scroll = void 0), r.root.updateScroll());
          let i = kn(n, r.root, this.visualElement.getTransformPagePoint()),
            a = Ta(r.layout.layoutBox, i);
          if (t) {
            let e = t(pn(a));
            ((this.hasMutatedConstraints = !!e), e && (a = fn(e)));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: a,
              onDragTransitionEnd: o,
            } = this.getProps(),
            s = this.constraints || {},
            c = M((o) => {
              if (!Na(o, t, this.currentDirection)) return;
              let c = (s && s[o]) || {};
              (a === !0 || a === o) && (c = { min: 0, max: 0 });
              let l = r ? 200 : 1e6,
                u = r ? 40 : 1e7,
                d = {
                  type: `inertia`,
                  velocity: n ? e[o] : 0,
                  bounceStiffness: l,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...c,
                };
              return this.startAxisValueAnimation(o, d);
            });
          return Promise.all(c).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (Rt(this.visualElement, e), n.start(hl(e, n, 0, t, this.visualElement, !1)));
        }
        stopAnimation() {
          M((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`;
          return (
            this.visualElement.getProps()[t] ||
            this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
          );
        }
        snapToCursor({ clientX: e, clientY: t }) {
          let { drag: n } = this.getProps(),
            r = { x: e, y: t },
            i = this.visualElement.getTransformPagePoint()?.(r) || r,
            a = this.visualElement.measureViewportBox();
          M((e) => {
            if (!Na(e, n, this.currentDirection)) return;
            let t = this.getAxisMotionValue(e),
              { min: r, max: o } = a[e];
            t.set((t.get() || 0) + i[e] - W(r, o, 0.5));
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!ra(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = this.constraints,
            i = { x: 0, y: 0 };
          M((e) => {
            let t = this.getAxisMotionValue(e).get();
            i[e] = Ea({ min: t, max: t }, r[e]);
          });
          let { transformTemplate: a } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = a ? a({}, ``) : `none`),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            M((t) => {
              let n = this.getAxisMotionValue(t);
              if (!Na(t, e, null) || !n.get()) return;
              let { min: r, max: a } = this.constraints[t];
              n.set(W(r, a, i[t]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Yd.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = pa(e, `pointerdown`, (t) => {
              let { drag: n, dragListener: r = !0 } = this.getProps(),
                i = t.target,
                a = i !== e && Ln(i);
              n && r && !a && this.start(t);
            }),
            n,
            r = () => {
              let { dragConstraints: t } = this.getProps();
              ra(t) &&
                t.current &&
                ((this.constraints = this.resolveRefConstraints()),
                (n ||= Ma(e, t.current, () => this.scalePositionWithinConstraints())));
            },
            { projection: i } = this.visualElement,
            a = i.addEventListener(`measure`, r);
          (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), G.read(r));
          let s = Xr(o, `resize`, () => this.scalePositionWithinConstraints()),
            c = i.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (M((t) => {
                  let n = this.getAxisMotionValue(t);
                  n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (s(), t(), a(), c && c(), n && n());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = Jd,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: o,
          };
        }
      }),
      (Zd = class extends Iu {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = P),
            (this.removeListeners = P),
            (this.controls = new Xd(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || P));
        }
        update() {
          let { dragControls: e } = this.node.getProps(),
            { dragControls: t } = this.node.prevProps || {};
          e !== t &&
            (this.removeGroupControls(),
            e && (this.removeGroupControls = e.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }),
      (Qd = (e) => (t, n) => {
        e && G.update(() => e(t, n), !1, !0);
      }),
      ($d = class extends Iu {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = P));
        }
        onPointerDown(e) {
          this.session = new qd(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Wd(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
          return {
            onSessionStart: Qd(e),
            onStart: Qd(t),
            onMove: Qd(n),
            onEnd: (e, t) => {
              (delete this.session, r && G.postRender(() => r(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = pa(this.node.current, `pointerdown`, (e) =>
            this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(), this.session && this.session.end());
        }
      }),
      (ef = !1),
      (tf = class extends p {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
            { projection: i } = e;
          (i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            ef && i.root.didUpdate(),
            i.addEventListener(`animationComplete`, () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (ad.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
            { projection: a } = n;
          return (
            a &&
              ((a.isPresent = i),
              e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
              (ef = !0),
              r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== i &&
                (i
                  ? a.promote()
                  : a.relegate() ||
                    G.postRender(() => {
                      let e = a.getStack();
                      (!e || !e.members.length) && this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { visualElement: e, layoutAnchor: t } = this.props,
            { projection: n } = e;
          n &&
            ((n.options.layoutAnchor = t),
            n.root.didUpdate(),
            nu.postRender(() => {
              !n.currentAnimation && n.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
            { projection: r } = e;
          ((ef = !0),
            r &&
              (r.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(r),
              n && n.deregister && n.deregister(r)));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }),
      (nf = { pan: { Feature: $d }, drag: { Feature: Zd, ProjectionNode: gd, MeasureLayout: Fa } }),
      (rf = class extends Iu {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = Fn(
              e,
              (e, t) => (Ia(this.node, t, `Start`), (e) => Ia(this.node, e, `End`))
            ));
        }
        unmount() {}
      }),
      (af = class extends Iu {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(`:focus-visible`);
          } catch {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = Ro(
            Xr(this.node.current, `focus`, () => this.onFocus()),
            Xr(this.node.current, `blur`, () => this.onBlur())
          );
        }
        unmount() {}
      }),
      (of = class extends Iu {
        mount() {
          let { current: e } = this.node;
          if (!e) return;
          let { globalTapTarget: t, propagate: n } = this.node.props;
          this.unmount = Vn(
            e,
            (e, t) => (
              La(this.node, t, `Start`),
              (e, { success: t }) => La(this.node, e, t ? `End` : `Cancel`)
            ),
            { useGlobalTarget: t, stopPropagation: n?.tap === !1 }
          );
        }
        unmount() {}
      }),
      (sf = /* @__PURE__ */ new WeakMap()),
      (cf = /* @__PURE__ */ new WeakMap()),
      (lf = (e) => {
        let t = sf.get(e.target);
        t && t(e);
      }),
      (uf = (e) => {
        e.forEach(lf);
      }),
      (df = { some: 0, all: 1 }),
      (ff = class extends Iu {
        constructor() {
          (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
        }
        startObserver() {
          this.stopObserver?.();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = `some`, once: i } = e,
            a = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: typeof r == `number` ? r : df[r],
            },
            o = (e) => {
              let { isIntersecting: t } = e;
              if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView))
                return;
              (t && (this.hasEnteredView = !0),
                this.node.animationState && this.node.animationState.setActive(`whileInView`, t));
              let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
                a = t ? n : r;
              a && a(e);
            };
          this.stopObserver = za(this.node.current, a, o);
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > `u`) return;
          let { props: e, prevProps: t } = this.node;
          [`amount`, `margin`, `root`].some(Ba(e, t)) && this.startObserver();
        }
        unmount() {
          (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
        }
      }),
      (pf = {
        inView: { Feature: ff },
        tap: { Feature: of },
        focus: { Feature: af },
        hover: { Feature: rf },
      }),
      (mf = { layout: { ProjectionNode: gd, MeasureLayout: Fa } }),
      (hf = /*@__PURE__*/ da({ ...Hd, ...pf, ...nf, ...mf }, Rd)),
      (gf = { renderer: Rd, ...Hd, ...pf }),
      { ...gf, ...nf, ...mf },
      { ...Hd },
      (_f = class extends cl {
        constructor() {
          (super(...arguments), (this.isEnabled = !1));
        }
        add(e) {
          (Y.has(e) || Qc.has(e)) && ((this.isEnabled = !0), this.update());
        }
        update() {
          this.set(this.isEnabled ? `transform` : `auto`);
        }
      }),
      (vf = `easeInOut`),
      (yf = 20),
      (bf = (e) => typeof e == `number`),
      (xf = (e) => e.every(bf)),
      (Sf = Object.assign(yo(), { addEffect: qt, removeEffect: Jt })),
      (Cf = bo),
      (wf = { some: 0, all: 1 }),
      (Tf = () => ({})),
      Nd({ scrapeMotionValuesFromProps: Tf, createRenderState: Tf }),
      S(null));
  }))();
}
function Df() {
  return (Df = e(() => {
    (Ef(), n(), x());
  }))();
}
export {
  Do as A,
  O as C,
  nr as D,
  Zn as E,
  To as F,
  Ja as I,
  Wa as L,
  Oo as M,
  Va as N,
  So as O,
  Xa as P,
  Eu as R,
  hf as S,
  Le as T,
  Ef as _,
  $ as a,
  X as b,
  No as c,
  ko as d,
  pr as f,
  Eo as g,
  G as h,
  Bi as i,
  Co as j,
  Cf as k,
  Ld as l,
  K as m,
  bd as n,
  N as o,
  Sf as p,
  wd as r,
  cl as s,
  Df as t,
  _f as u,
  Be as v,
  Qr as w,
  Yi as x,
  xo as y,
};
//# sourceMappingURL=motion.CcP9hEf_.mjs.map
