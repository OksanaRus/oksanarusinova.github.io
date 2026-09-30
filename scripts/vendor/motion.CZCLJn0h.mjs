import { r as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  C as r,
  D as i,
  F as a,
  I as o,
  L as s,
  N as c,
  P as l,
  S as u,
  T as d,
  c as f,
  d as p,
  f as m,
  g as h,
  j as g,
  k as _,
  l as v,
  m as y,
  o as b,
  p as x,
  s as S,
  u as C,
  v as w,
  w as T,
  y as E,
} from "./react.BKyTRiZ3.mjs";
var ee,
  D,
  te,
  ne,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke = t(() => {
    ((ee = Object.create),
      (D = Object.defineProperty),
      (te = Object.getOwnPropertyDescriptor),
      (ne = Object.getOwnPropertyNames),
      (re = Object.getPrototypeOf),
      (ie = Object.prototype.hasOwnProperty),
      (ae = (e, t) => ((t = Symbol[e]) ? t : Symbol.for(`Symbol.` + e))),
      (oe = (e) => {
        throw TypeError(e);
      }),
      (se = (e, t, n) =>
        t in e
          ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (ce = (e, t) => D(e, `name`, { value: t, configurable: !0 })),
      (le = ((t) =>
        e === void 0
          ? typeof Proxy < `u`
            ? new Proxy(t, { get: (t, n) => (e === void 0 ? t : e)[n] })
            : t
          : e)(function (t) {
        if (e !== void 0) return e.apply(this, arguments);
        throw Error(`Dynamic require of "` + t + `" is not supported`);
      })),
      (ue = (e, t) =>
        function () {
          try {
            return (t || (0, e[ne(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (de = (e, t) => {
        for (var n in t) D(e, n, { get: t[n], enumerable: !0 });
      }),
      (fe = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ne(t))
            !ie.call(e, i) &&
              i !== n &&
              D(e, i, { get: () => t[i], enumerable: !(r = te(t, i)) || r.enumerable });
        return e;
      }),
      (pe = (e, t, n) => (
        (n = e == null ? {} : ee(re(e))),
        fe(t || !e || !e.__esModule ? D(n, `default`, { value: e, enumerable: !0 }) : n, e)
      )),
      (me = (e) => [, , , ee(e?.[ae(`metadata`)] ?? null)]),
      (he = [`class`, `method`, `getter`, `setter`, `accessor`, `field`, `value`, `get`, `set`]),
      (ge = (e) => (e !== void 0 && typeof e != `function` ? oe(`Function expected`) : e)),
      (_e = (e, t, n, r, i) => ({
        kind: he[e],
        name: t,
        metadata: r,
        addInitializer: (e) => (n._ ? oe(`Already initialized`) : i.push(ge(e || null))),
      })),
      (ve = (e, t) => se(t, ae(`metadata`), e[3])),
      (ye = (e, t, n, r) => {
        for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++)
          t & 1 ? a[i].call(n) : (r = a[i].call(n, r));
        return r;
      }),
      (be = (e, t, n, r, i, a) => {
        var o,
          s,
          c,
          l,
          u,
          d = t & 7,
          f = !!(t & 8),
          p = !!(t & 16),
          m = d > 3 ? e.length + 1 : d ? (f ? 1 : 2) : 0,
          h = he[d + 5],
          g = d > 3 && (e[m - 1] = []),
          _ = e[m] || (e[m] = []),
          v =
            d &&
            (!p && !f && (i = i.prototype),
            d < 5 &&
              (d > 3 || !p) &&
              te(
                d < 4
                  ? i
                  : {
                      get [n]() {
                        return we(this, a);
                      },
                      set [n](e) {
                        return Te(this, a, e);
                      },
                    },
                n
              ));
        d ? p && d < 4 && ce(a, (d > 2 ? `set ` : d > 1 ? `get ` : ``) + n) : ce(i, n);
        for (var y = r.length - 1; y >= 0; y--)
          ((l = _e(d, n, (c = {}), e[3], _)),
            d &&
              ((l.static = f),
              (l.private = p),
              (u = l.access = { has: p ? (e) => Ce(i, e) : (e) => n in e }),
              d ^ 3 &&
                (u.get = p ? (e) => (d ^ 1 ? we : Ee)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]),
              d > 2 &&
                (u.set = p ? (e, t) => Te(e, i, t, d ^ 4 ? a : v.set) : (e, t) => (e[n] = t))),
            (s = (0, r[y])(
              d ? (d < 4 ? (p ? a : v[h]) : d > 4 ? void 0 : { get: v.get, set: v.set }) : i,
              l
            )),
            (c._ = 1),
            d ^ 4 || s === void 0
              ? ge(s) && (d > 4 ? g.unshift(s) : d ? (p ? (a = s) : (v[h] = s)) : (i = s))
              : typeof s != `object` || !s
                ? oe(`Object expected`)
                : (ge((o = s.get)) && (v.get = o),
                  ge((o = s.set)) && (v.set = o),
                  ge((o = s.init)) && g.unshift(o)));
        return (d || ve(e, i), v && D(i, n, v), p ? (d ^ 4 ? a : v) : i);
      }),
      (xe = (e, t, n) => se(e, typeof t == `symbol` ? t : t + ``, n)),
      (Se = (e, t, n) => t.has(e) || oe(`Cannot ` + n)),
      (Ce = (e, t) =>
        Object(t) === t ? e.has(t) : oe(`Cannot use the "in" operator on this value`)),
      (we = (e, t, n) => (Se(e, t, `read from private field`), n ? n.call(e) : t.get(e))),
      (Te = (e, t, n, r) => (
        Se(e, t, `write to private field`),
        r ? r.call(e, n) : t.set(e, n),
        n
      )),
      (Ee = (e, t, n) => (Se(e, t, `access private method`), n)),
      (De = (e, t, n) => {
        if (t != null) {
          typeof t != `object` && typeof t != `function` && oe(`Object expected`);
          var r, i;
          (n && (r = t[ae(`asyncDispose`)]),
            r === void 0 && ((r = t[ae(`dispose`)]), n && (i = r)),
            typeof r != `function` && oe(`Object not disposable`),
            i &&
              (r = function () {
                try {
                  i.call(this);
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
            e.push([n, r, t]));
        } else n && e.push([n]);
        return t;
      }),
      (Oe = (e, t, n) => {
        var r =
            typeof SuppressedError == `function`
              ? SuppressedError
              : function (e, t, n, r) {
                  return (
                    (r = Error(n)),
                    (r.name = `SuppressedError`),
                    (r.error = e),
                    (r.suppressed = t),
                    r
                  );
                },
          i = (e) =>
            (t = n ? new r(e, t, `An error was suppressed during disposal`) : ((n = !0), e)),
          a = (r) => {
            for (; (r = e.pop());)
              try {
                var o = r[1] && r[1].call(r[2]);
                if (r[0]) return Promise.resolve(o).then(a, (e) => (i(e), a()));
              } catch (e) {
                i(e);
              }
            if (n) throw t;
          };
        return a();
      }));
  });
function Ae(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function je(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Me([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let r = n < 0 ? e.length + n : n,
      [i] = e.splice(t, 1);
    e.splice(r, 0, i);
  }
  return e;
}
function Ne(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
function Pe(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = ms(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > hs && ++s < gs);
  return o;
}
function Fe(e, t, n, r) {
  if (e === t && n === r) return I;
  let i = (t) => Pe(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : ms(i(e), t, r));
}
function Ie(e, t) {
  return ks(e) ? e[ps(0, e.length, t)] : e;
}
function Le(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
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
function Re(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Ps.reduce((e, t) => ((e[t] = Le(a)), e), {}),
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
      let a = F.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Fs), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: Ps.reduce((e, t) => {
      let r = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Ps.length; t++) o[Ps[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
function ze() {
  Ls = void 0;
}
function Be(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
function Ve(e) {
  return e == null;
}
function He(e) {
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
function Ue(e) {
  return (
    isNaN(e) && typeof e == `string` && (e.match(qs)?.length || 0) + (e.match(oc)?.length || 0) > 0
  );
}
function We(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        fc,
        (e) => (
          K.test(e)
            ? (r.color.push(a), i.push(cc), n.push(K.parse(e)))
            : e.startsWith(uc)
              ? (r.var.push(a), i.push(lc), n.push(e))
              : (r.number.push(a), i.push(sc), n.push(parseFloat(e))),
          ++a,
          dc
        )
      )
      .split(dc),
    indexes: r,
    types: i,
  };
}
function Ge(e) {
  return We(e).values;
}
function Ke({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        e === sc ? (i += Ks(r[a])) : e === cc ? (i += K.transform(r[a])) : (i += r[a]);
      }
    return i;
  };
}
function qe(e) {
  return Ke(We(e));
}
function Je(e) {
  let t = We(e);
  return Ke(t)(t.values.map((e, n) => mc(e, t.split[n])));
}
function Ye(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Xe({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Ye(s, r, e + 1 / 3)), (a = Ye(s, r, e)), (o = Ye(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ze(e, t) {
  return (n) => (n > 0 ? t : e);
}
function Qe(e) {
  let t = _c(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === ac && (n = Xe(n)), n);
}
function $e(e, t) {
  return yc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function et(e, t) {
  return (n) => J(e, t, n);
}
function tt(e) {
  return typeof e == `number`
    ? et
    : typeof e == `string`
      ? Vs(e)
        ? Ze
        : K.test(e)
          ? vc
          : bc
      : Array.isArray(e)
        ? nt
        : typeof e == `object`
          ? K.test(e)
            ? vc
            : rt
          : Ze;
}
function nt(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => tt(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function rt(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = tt(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function it(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
function at(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? J(e, t, n)
    : tt(e)(e, t);
}
function ot(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function st(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(ot(r), Sc);
  return { type: `keyframes`, ease: (e) => r.next(i * e).value / t, duration: R(i) };
}
function ct(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function lt(e, t, n) {
  let r = n;
  for (let n = 1; n < Cc; n++) r -= e(r) / t(r);
  return r;
}
function ut({
  duration: e = Y.duration,
  bounce: t = Y.bounce,
  velocity: n = Y.velocity,
  mass: r = Y.mass,
}) {
  let i, a;
  Y.maxDuration;
  let o = 1 - t;
  ((o = P(Y.minDamping, Y.maxDamping, o)),
    (e = P(Y.minDuration, Y.maxDuration, R(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = ct(t, o),
            c = Math.exp(-i);
          return wc - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = ct(t ** 2, o);
          return ((-i(t) + wc > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -wc + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = lt(i, a, s);
  if (((e = L(e)), isNaN(c))) return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
function dt(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function ft(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!dt(e, Ec) && dt(e, Tc))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * P(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Y.mass, stiffness: i, damping: a };
    } else {
      let n = ut({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: Y.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function pt(e = Y.visualDuration, t = Y.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = ft({ ...n, velocity: -R(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = R(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? Y.restSpeed.granular : Y.restSpeed.default),
    (i ||= v ? Y.restDelta.granular : Y.restDelta.default));
  let y, b, x, S, C, w;
  if (h < 1)
    ((x = ct(_, h)),
      (S = (m + h * _ * g) / x),
      (y = (e) => {
        let t = Math.exp(-h * _ * e);
        return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
      }),
      (C = h * _ * S + g * x),
      (w = h * _ * g - S * x),
      (b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e))));
  else if (h === 1) {
    y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e;
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    b = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let T = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => L(b(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = L(t * (C * n + w * a));
        return ((s.done = Math.abs(l) <= r && Math.abs(o - c) <= i), (s.value = s.done ? o : c), s);
      }
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = L(b(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(ot(T), Sc),
        t = xc((t) => T.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return T;
}
function mt(e, t, n) {
  let r = Math.max(t - Dc, 0);
  return fs(n - e(r), t - r);
}
function ht({
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
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = pt({
          keyframes: [f.value, m(f.value)],
          velocity: mt(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function gt(e, t, n) {
  let r = [],
    i = n || F.mix || at,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = ls(Array.isArray(t) ? t[n] || I : t, a)), r.push(a));
  }
  return r;
}
function _t(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = gt(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = us(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(P(e[0], e[a - 1], t)) : l;
}
function vt(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = us(0, t, r);
    e.push(J(n, 1, i));
  }
}
function yt(e) {
  let t = [0];
  return (vt(t, e.length - 1), t);
}
function bt(e, t) {
  return e.map((e) => e * t);
}
function xt(e, t) {
  return e.map(() => t || Os).splice(0, e.length - 1);
}
function St({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = ks(r) ? r.map(Ns) : Ns(r),
    a = { done: !1, value: t[0] },
    o = _t(bt(n && n.length === t.length ? n : yt(t), e), t, {
      ease: Array.isArray(i) ? i : xt(t, i),
    });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
function Ct(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(Oc),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
function wt(e) {
  typeof e.type == `string` && (e.type = Ac[e.type]);
}
function Tt(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
function Et(e) {
  return +!!e.includes(`scale`);
}
function Dt(e, t) {
  if (!e || e === `none`) return Et(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = Vc), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Ic), (i = t));
  }
  if (!i) return Et(t);
  let a = r[t],
    o = i[1].split(`,`).map(Ot);
  return typeof a == `function` ? a(o) : o[a];
}
function Ot(e) {
  return parseFloat(e.trim());
}
function kt(e) {
  let t = [];
  return (
    qc.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
function At() {
  if (Zc) {
    let e = Array.from(Yc).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = kt(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && s.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Zc = !1), (Xc = !1), Yc.forEach((e) => e.complete(Qc)), Yc.clear());
}
function jt() {
  Yc.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Zc = !0));
  });
}
function Mt() {
  ((Qc = !0), jt(), At(), (Qc = !1));
}
function Nt(e, t, n) {
  el(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
function Pt(e, t) {
  let n = Ne(e);
  return () => tl[t] ?? n();
}
function Ft(e, t) {
  if (e)
    return typeof e == `function`
      ? rl()
        ? xc(e, t)
        : `ease-out`
      : As(e)
        ? il(e)
        : Array.isArray(e)
          ? e.map((e) => Ft(e, t) || al.easeOut)
          : al[e];
}
function It(
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
  let d = Ft(s, i);
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
function Lt(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Rt({ type: e, ...t }) {
  return Lt(e) && rl() ? e.applyToOptions(t) : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
function zt(e) {
  return e in sl;
}
function Bt(e) {
  typeof e.ease == `string` && zt(e.ease) && (e.ease = sl[e.ease]);
}
function Vt(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
function Ht(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && dl.test(e[t])) return !0;
  return !1;
}
function Ut(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!(t?.owner?.current instanceof HTMLElement)) return !1;
  let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return (
    pl() &&
    n &&
    (ul.has(n) || (fl.has(n) && Ht(s))) &&
    (n !== `transform` || !l) &&
    !c &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
function Wt(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Gt(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = ml(i, t),
    s = ml(a, t);
  return (`${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Wt(e) || ((n === `spring` || Lt(n)) && r));
}
function Kt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
function qt(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function O(e, t) {
  return new Sl(e, t);
}
function Jt(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Yt(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Jt(n, e);
}
function Xt(e) {
  for (let t in e) if (!Ol.has(t)) return !0;
  return !1;
}
function Zt(e) {
  let t = Al.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Qt(e, t, n = 1) {
  `${e}`;
  let [r, i] = Zt(e);
  if (!r) return;
  let a = s.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return os(e) ? parseFloat(e) : e;
  }
  return Vs(i) ? Qt(i, t, n + 1) : i;
}
function $t(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function en(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = $t(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if ((typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`)) {
    let [i, a] = $t(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function tn(e, t, n) {
  let r = e.getProps();
  return en(r, t, n === void 0 ? r.custom : n, e);
}
function nn(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, O(n));
}
function rn(e) {
  return Ml(e) ? e[e.length - 1] || 0 : e;
}
function an(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = tn(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) nn(e, t, rn(i[t]));
}
function on(e) {
  return !!(X(e) && e.add);
}
function sn(e, t) {
  let n = e.getValue(`willChange`);
  if (on(n)) return n.add(t);
  if (!n && F.WillChange) {
    let n = new F.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function cn(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
function ln(e) {
  return e.props[Pl];
}
function un({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function dn(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...c } = t,
    l = e.getDefaultTransition();
  a = a ? Jt(a, l) : l;
  let u = a?.reduceMotion,
    d = a?.skipAnimations;
  r && (a = r);
  let f = [],
    p = i && e.animationState && e.animationState.getState()[i],
    m = a?.path;
  m && m.animateVisualElement(e, c, a, n, f);
  for (let t in c) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = c[t];
    if (i === void 0 || (p && un(p, t))) continue;
    let o = { delay: n, ...Yt(a || {}, t) };
    d && (o.skipAnimations = !0);
    let l = r.get();
    if (l !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === l && !o.velocity) {
      z.update(() => r.set(i));
      continue;
    }
    let m = !1;
    if (s.MotionHandoffAnimation) {
      let n = ln(e);
      if (n) {
        let e = s.MotionHandoffAnimation(n, t, z);
        e !== null && ((o.startTime = e), (m = !0));
      }
    }
    sn(e, t);
    let h = u ?? e.shouldReduceMotion;
    r.start(kl(t, r, i, h && jl.has(t) ? { type: !1 } : o, e, m));
    let g = r.animation;
    g && f.push(g);
  }
  if (o) {
    let t = () =>
      z.update(() => {
        o && an(e, o);
      });
    f.length ? Promise.all(f).then(t) : t();
  }
  return f;
}
function fn(e, t, n = {}) {
  let r = tn(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(dn(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
            return pn(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function pn(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        fn(c, t, {
          ...o,
          delay: n + (typeof r == `function` ? 0 : r) + qt(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t))
      ));
  return Promise.all(s);
}
function mn(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => fn(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = fn(e, t, n);
  else {
    let i = typeof t == `function` ? tn(e, t, n.custom) : t;
    r = Promise.all(dn(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
function hn(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(qs) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Vl.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
function gn(e, t) {
  let n = Kl(e);
  return (ql.has(n) || (n = q), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
function _n(e) {
  return typeof e == `number` ? e === 0 : e === null || e === `none` || e === `0` || cs(e);
}
function vn(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Jl.has(t) && We(t).values.length && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] = gn(n, i);
}
function yn(e, t, n) {
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
function bn(e) {
  return ss(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function xn() {
  return Z.x || Z.y;
}
function Sn(e) {
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
function Cn(e, t) {
  let n = yn(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function wn(e) {
  return !(e.pointerType === `touch` || xn());
}
function Tn(e, t, n = {}) {
  let [r, i, a] = Cn(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, d);
        },
        c = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        l = (e) => {
          ((n = !1),
            s.removeEventListener(`pointerup`, l),
            s.removeEventListener(`pointercancel`, l),
            r && ((r = !1), c(e)));
        },
        u = () => {
          ((n = !0),
            s.addEventListener(`pointerup`, l, i),
            s.addEventListener(`pointercancel`, l, i));
        },
        d = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            c(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!wn(n)) return;
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
function En(e) {
  return nu.has(e.tagName) || e.isContentEditable === !0;
}
function Dn(e) {
  return ru.has(e.tagName) || e.isContentEditable === !0;
}
function On(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function kn(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
function An(e) {
  return tu(e) && !xn();
}
function jn(e, t, n = {}) {
  let [r, i, a] = Cn(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!An(e) || ou.has(e)) return;
      (iu.add(r), n.stopPropagation && ou.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        c = (e, t) => {
          (s.removeEventListener(`pointerup`, l, o),
            s.removeEventListener(`pointercancel`, u, o),
            iu.has(r) && iu.delete(r),
            An(e) && typeof a == `function` && a(e, { success: t }));
        },
        l = (e) => {
          c(e, r === s || r === document || n.useGlobalTarget || eu(r, e.target));
        },
        u = (e) => {
          c(e, !1);
        };
      (s.addEventListener(`pointerup`, l, o), s.addEventListener(`pointercancel`, u, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? s : e).addEventListener(`pointerdown`, o, i),
        bn(e) &&
          (e.addEventListener(`focus`, (e) => au(e, i)),
          !En(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Mn(e) {
  return ss(e) && `ownerSVGElement` in e;
}
function Nn({ target: e, borderBoxSize: t }) {
  su.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return uu(e, t);
      },
      get height() {
        return du(e, t);
      },
    });
  });
}
function Pn(e) {
  e.forEach(Nn);
}
function Fn() {
  typeof ResizeObserver > `u` || (cu = new ResizeObserver(Pn));
}
function In(e, t) {
  cu || Fn();
  let n = yn(e);
  return (
    n.forEach((e) => {
      let n = su.get(e);
      (n || ((n = new Set()), su.set(e, n)), n.add(t), cu?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = su.get(e);
        (n?.delete(t), n?.size || cu?.unobserve(e));
      });
    }
  );
}
function Ln() {
  ((pu = () => {
    let e = {
      get width() {
        return s.innerWidth;
      },
      get height() {
        return s.innerHeight;
      },
    };
    fu.forEach((t) => t(e));
  }),
    s.addEventListener(`resize`, pu));
}
function Rn(e) {
  return (
    fu.add(e),
    pu || Ln(),
    () => {
      (fu.delete(e),
        !fu.size &&
          typeof pu == `function` &&
          (s.removeEventListener(`resize`, pu), (pu = void 0)));
    }
  );
}
function zn(e, t) {
  return typeof e == `function` ? Rn(e) : In(e, t);
}
function Bn(e) {
  return Mn(e) && e.tagName === `svg`;
}
function Vn(e, t) {
  if (e === `first`) return 0;
  {
    let n = t - 1;
    return e === `last` ? n : n / 2;
  }
}
function Hn(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, a) => {
    let o = typeof n == `number` ? n : Vn(n, a),
      s = e * Math.abs(o - i);
    if (r) {
      let t = a * e;
      s = Ns(r)(s / t) * t;
    }
    return t + s;
  };
}
function Un(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = _t(i, a, o);
  return t ? s(r) : s;
}
function Wn(e, t, n = {}) {
  let r = e.get(),
    i = null,
    a = r,
    o,
    s = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    c = () => {
      ((i &&= (i.stop(), null)), (e.animation = void 0));
    },
    l = () => {
      let t = Kn(e.get()),
        r = Kn(a);
      if (t === r) {
        c();
        return;
      }
      let s = i ? i.getGeneratorVelocity() : e.getVelocity();
      (c(),
        (i = new Nc({
          keyframes: [t, r],
          velocity: s,
          type: `spring`,
          restDelta: 0.001,
          restSpeed: 0.01,
          ...n,
          onUpdate: o,
        })));
    },
    u = () => {
      (l(),
        (e.animation = i ?? void 0),
        e.events.animationStart?.notify(),
        i?.then(() => {
          ((e.animation = void 0), e.events.animationComplete?.notify());
        }));
    };
  if (
    (e.attach((e, t) => {
      ((a = e), (o = (e) => t(Gn(e, s))), z.postRender(u));
    }, c),
    X(t))
  ) {
    let r = n.skipInitialAnimation === !0,
      i = t.on(`change`, (t) => {
        r ? ((r = !1), e.jump(Gn(t, s), !1)) : e.set(Gn(t, s));
      }),
      a = e.on(`destroy`, i);
    return () => {
      (i(), a());
    };
  }
  return c;
}
function Gn(e, t) {
  return t ? e + t : e;
}
function Kn(e) {
  return typeof e == `number` ? e : parseFloat(e);
}
function qn(e, t, n) {
  let r = () => t.set(n()),
    i = () => z.preRender(r, !1, !0),
    a = e.map((e) => e.on(`change`, i));
  t.on(`destroy`, () => {
    (a.forEach((e) => e()), B(r));
  });
}
function Jn(e) {
  let t = [];
  xl.current = t;
  let n = e();
  xl.current = void 0;
  let r = O(n);
  return (qn(t, r, e), r);
}
function Yn(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Xn(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Zn(e) {
  return Yn(e.animate) || Su.some((t) => Xn(e[t]));
}
function Qn(e) {
  return !!(Zn(e) || e.variants);
}
function $n(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (X(i)) e.addValue(r, i);
    else if (X(a)) e.addValue(r, O(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, O(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
function er() {
  if (((wu.current = !0), Tu))
    if (s.matchMedia) {
      let e = s.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Cu.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else Cu.current = !1;
}
function tr(e) {
  Du = e;
}
function nr() {
  return Du;
}
function rr({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ir({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ar(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function or(e) {
  return e === void 0 || e === 1;
}
function sr({ scale: e, scaleX: t, scaleY: n }) {
  return !or(e) || !or(t) || !or(n);
}
function cr(e) {
  return sr(e) || lr(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function lr(e) {
  return ur(e.x) || ur(e.y);
}
function ur(e) {
  return e && e !== `0%`;
}
function dr(e, t, n) {
  return n + t * (e - n);
}
function fr(e, t, n, r, i) {
  return (i !== void 0 && (e = dr(e, i, r)), dr(e, n, r) + t);
}
function pr(e, t = 0, n = 1, r, i) {
  ((e.min = fr(e.min, t, n, r, i)), (e.max = fr(e.max, t, n, r, i)));
}
function mr(e, { x: t, y: n }) {
  (pr(e.x, t.translate, t.scale, t.originPoint), pr(e.y, n.translate, n.scale, n.originPoint));
}
function hr(e, t, n, r = !1) {
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
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), mr(e, o)),
      r && cr(a.latestValues) && vr(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < Mu && t.x > ju && (t.x = 1), t.y < Mu && t.y > ju && (t.y = 1));
}
function k(e, t) {
  ((e.min += t), (e.max += t));
}
function gr(e, t, n, r, i = 0.5) {
  pr(e, t, n, J(e.min, e.max, i), r);
}
function _r(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function vr(e, t, n) {
  let r = n ?? e;
  (gr(e.x, _r(t.x, r.x), t.scaleX, t.scale, t.originX),
    gr(e.y, _r(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function yr(e, t) {
  return rr(ar(e.getBoundingClientRect(), t));
}
function br(e, t, n) {
  let r = yr(e, n),
    { scroll: i } = t;
  return (i && (k(r.x, i.offset.x), k(r.y, i.offset.y)), r);
}
function xr(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Pu; a++) {
    let o = Uc[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = Zl(s, Bl[o]);
      if (!c) {
        i = !1;
        let t = Nu[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${Zl(a, Bl.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function Sr(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Wc.has(e)) {
      o = !0;
      continue;
    } else if (zs(e)) {
      i[e] = n;
      continue;
    } else {
      let t = Zl(n, Bl[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = xr(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function Cr(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function wr(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Tr(e) {
  for (let t in e) ((Lu[t] = e[t]), zs(t) && (Lu[t].isCSSVariable = !0));
}
function Er(e, { layout: t, layoutId: n }) {
  return (
    Wc.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!Lu[e] || e === `opacity`))
  );
}
function Dr(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (X(r[t]) || (i && X(i[t])) || Er(t, e) || n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function Or(e) {
  return s.getComputedStyle(e);
}
function kr(e, t) {
  return e in t;
}
function Ar(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Bu : Vu;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
function jr(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s },
  c,
  l,
  u
) {
  if ((Sr(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`), delete d.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox));
  for (let e of Hu) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && Ar(d, i, a, o, !1));
}
function Mr(e, t, n, r) {
  Cr(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Uu.has(n) ? n : cn(n), t.attrs[n]);
}
function Nr(e, t, n) {
  let r = Dr(e, t, n);
  for (let n in e)
    if (X(e[n]) || X(t[n])) {
      let t = Uc.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function Pr(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Pr(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < Ku; n++) {
    let r = Su[n],
      i = e.props[r];
    (Xn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Fr(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ir(e) {
  return (t) => Promise.all(t.map(({ animation: t, options: n }) => mn(e, t, n)));
}
function Lr(e) {
  let t = Ir(e),
    n = Br(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = tn(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = Pr(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < Ju; t++) {
      let p = qu[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = Xn(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) || (!h && !m.prevProp) || Yn(h) || typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues });
        continue;
      }
      let y = Rr(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {});
      _ === !1 && (C = {});
      let { prevResolvedValues: w = {} } = m,
        T = { ...w, ...C },
        E = (t) => {
          ((b = !0), u.has(t) && ((x = !0), u.delete(t)), (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in T) {
        let t = C[e],
          n = w[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = Ml(t) && Ml(n) ? !Fr(t, n) || y : t !== n),
          r
            ? t == null
              ? u.add(e)
              : E(e)
            : t !== void 0 && u.has(e)
              ? E(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = C),
        m.isActive && (d = { ...d, ...C }),
        (r || i) && e.blockInitialAnimation && (b = !1));
      let ee = v && y;
      b &&
        (!ee || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p };
            if (typeof t == `string` && (r || i) && !ee && e.manuallyAnimateOnMount && e.parent) {
              let { parent: r } = e,
                i = tn(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = qt(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          })
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = tn(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r));
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Br()), (i = !0));
    },
  };
}
function Rr(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Fr(t, e) : !1;
}
function zr(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Br() {
  return {
    animate: zr(!0),
    whileInView: zr(),
    whileHover: zr(),
    whileTap: zr(),
    whileDrag: zr(),
    whileFocus: zr(),
    exit: zr(),
  };
}
function Vr(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function A(e, t) {
  (Vr(e.x, t.x), Vr(e.y, t.y));
}
function Hr(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function j(e) {
  return e.max - e.min;
}
function Ur(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Wr(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = J(t.min, t.max, e.origin)),
    (e.scale = j(n) / j(t)),
    (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Xu && e.scale <= Zu) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= $u && e.translate <= ed) || isNaN(e.translate)) && (e.translate = 0));
}
function Gr(e, t, n, r) {
  (Wr(e.x, t.x, n.x, r ? r.originX : void 0), Wr(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Kr(e, t, n, r = 0) {
  ((e.min = (r ? J(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + j(t)));
}
function qr(e, t, n, r) {
  (Kr(e.x, t.x, n.x, r?.x), Kr(e.y, t.y, n.y, r?.y));
}
function Jr(e, t, n, r = 0) {
  let i = r ? J(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + j(t)));
}
function Yr(e, t, n, r) {
  (Jr(e.x, t.x, n.x, r?.x), Jr(e.y, t.y, n.y, r?.y));
}
function Xr(e, t, n, r, i) {
  return ((e -= t), (e = dr(e, 1 / n, r)), i !== void 0 && (e = dr(e, 1 / i, r)), e);
}
function Zr(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (W.test(t) && ((t = parseFloat(t)), (t = J(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = J(a.min, a.max, r);
  (e === a && (s -= t), (e.min = Xr(e.min, t, n, s, i)), (e.max = Xr(e.max, t, n, s, i)));
}
function Qr(e, t, [n, r, i], a, o) {
  Zr(e, t[n], t[r], t[i], t.scale, a, o);
}
function $r(e, t, n, r) {
  (Qr(e.x, t, td, n ? n.x : void 0, r ? r.x : void 0),
    Qr(e.y, t, nd, n ? n.y : void 0, r ? r.y : void 0));
}
function ei(e) {
  return e.translate === 0 && e.scale === 1;
}
function ti(e) {
  return ei(e.x) && ei(e.y);
}
function ni(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ri(e, t) {
  return ni(e.x, t.x) && ni(e.y, t.y);
}
function ii(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ai(e, t) {
  return ii(e.x, t.x) && ii(e.y, t.y);
}
function oi(e) {
  return j(e.x) / j(e.y);
}
function si(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function M(e) {
  return [e(`x`), e(`y`)];
}
function ci(e, t, n) {
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
function li(e, t, n, r, i, a) {
  i
    ? ((e.opacity = J(0, n.opacity ?? 1, od(r))), (e.opacityExit = J(t.opacity ?? 1, 0, sd(r))))
    : a && (e.opacity = J(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < rd; i++) {
    let a = Xl[i],
      o = ui(t, a),
      s = ui(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || ad(o) === ad(s)
        ? ((e[a] = Math.max(J(id(o), id(s), r), 0)), (W.test(s) || W.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function ui(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
function di(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(us(e, t, r)));
}
function fi(e, t, n) {
  let r = X(e) ? e : O(e);
  return (r.start(kl(``, r, t, n)), r.animation);
}
function pi(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function mi(e, t) {
  let n = H.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (B(r), e(a - t));
    };
  return (z.setup(r, !0), () => B(r));
}
function hi(e) {
  return X(e) ? e.get() : e;
}
function gi(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function _i(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = ln(t);
  if (s.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    s.MotionCancelOptimisedAnimation(n, `transform`, z, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && _i(r);
}
function vi({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = hd++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
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
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            mu.value && (fd.nodes = fd.calculatedTargetDeltas = fd.calculatedProjections = 0),
            this.nodes.forEach(xi),
            this.nodes.forEach(Ai),
            this.nodes.forEach(ji),
            this.nodes.forEach(Si),
            mu.addProjectionMetrics && mu.addProjectionMetrics(fd));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ld());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new ds()),
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
      ((this.isSVG = Mn(t) && !Bn(t)), (this.instance = t));
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
        (z.read(() => {
          r = s.innerWidth;
        }),
          e(t, () => {
            let e = s.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = mi(i, 250)),
              dd.hasAnimatedSinceResize &&
                ((dd.hasAnimatedSinceResize = !1), this.nodes.forEach(ki)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || gd,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                c = !this.targetLayout || !ai(this.targetLayout, r),
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
                let t = { ...Yt(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || ki(this),
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
        B(this.updateProjection));
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
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Mi), this.animationId++);
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
        (s.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _i(this),
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
          t.options.layoutRoot && t.willUpdate(!1));
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
          e && this.nodes.forEach(Ti),
          this.nodes.forEach(wi));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ei);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Di),
            this.nodes.forEach(Oi),
            this.nodes.forEach(yi),
            this.nodes.forEach(bi))
          : this.nodes.forEach(Ei),
        this.clearAllSnapshots());
      let e = H.now();
      ((V.delta = P(0, 1e3 / 60, e - V.timestamp)),
        (V.timestamp = e),
        (V.isProcessing = !0),
        Is.update.process(V),
        Is.preRender.process(V),
        Is.render.process(V),
        (V.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ql.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Ci), this.sharedNodes.forEach(Ni));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
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
        this.layoutVersion++,
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
        t = this.projectionDelta && !ti(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || cr(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        zi(n),
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
      if (!(this.scroll?.wasRoot || this.path.some(Vi))) {
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
          cr(n.latestValues) && vr(r, n.latestValues, n.layout?.layoutBox));
      }
      return (cr(this.latestValues) && vr(r, this.latestValues, this.layout?.layoutBox), r);
    }
    removeTransform(e) {
      let t = Q();
      A(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!cr(n.latestValues)) continue;
        let r;
        (n.instance &&
          (sr(n.latestValues) && n.updateSnapshot(), (r = Q()), A(r, n.measurePageBox())),
          $r(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (cr(this.latestValues) && $r(t, this.latestValues), t);
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
        this.relativeParent.resolvedRelativeTargetAt !== V.timestamp &&
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
      this.resolvedRelativeTargetAt = V.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = Q()), (this.targetWithTransforms = Q())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              qr(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : A(this.target, this.layout.layoutBox),
                mr(this.target, this.targetDelta))
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
          mu.value && fd.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sr(this.parent.latestValues) || lr(this.parent.latestValues)))
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
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Q()),
        (this.relativeTargetOrigin = Q()),
        Yr(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
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
        this.resolvedRelativeTargetAt === V.timestamp && (n = !1),
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
      (hr(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Q())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hr(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hr(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Gr(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !si(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !si(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        mu.value && fd.calculatedProjections++);
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
      ((this.prevProjectionDelta = vu()),
        (this.projectionDelta = vu()),
        (this.projectionDeltaWithTransform = vu()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = vu();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = Q(),
        c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Li));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = J(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = J(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (Pi(o.x, e.x, n), Pi(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Yr(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            Ii(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && ri(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= Q()),
            A(f, this.relativeTarget)),
          c && ((this.animationValues = a), li(a, i, this.latestValues, n, d, u)),
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
        (this.pendingAnimation &&= (B(this.pendingAnimation), void 0)),
        (this.pendingAnimation = z.update(() => {
          ((dd.hasAnimatedSinceResize = !0),
            (this.motionValue ||= O(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = fi(this.motionValue, [0, 1e3], {
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
        (this.mixTargetDelta && this.mixTargetDelta(md), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Bi(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || Q();
          let t = j(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = j(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (A(t, n), vr(t, i), Gr(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new ud()),
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
      n.z && gi(`z`, e, r, this.animationValues);
      for (let t = 0; t < pd.length; t++)
        (gi(`rotate${pd[t]}`, e, r, this.animationValues),
          gi(`skew${pd[t]}`, e, r, this.animationValues));
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
          (e.pointerEvents = hi(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
          (e.pointerEvents = hi(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !cr(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = ci(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        r.animationValues
          ? (e.opacity =
              r === this
                ? (i.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : i.opacityExit)
          : (e.opacity =
              r === this
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
      this.options.layoutId && (e.pointerEvents = r === this ? hi(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(wi),
        this.root.sharedNodes.clear());
    }
  };
}
function yi(e) {
  e.updateLayout();
}
function bi(e) {
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
      Vr(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      Bi(i, t.layoutBox, n) &&
        M((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = j(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = vu();
    Gr(o, n, t.layoutBox);
    let s = vu();
    a ? Gr(s, e.applyTransform(r, !0), t.measuredBox) : Gr(s, n, t.layoutBox);
    let c = !ti(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = Q();
          Yr(s, t.layoutBox, i.layoutBox, o);
          let c = Q();
          (Yr(c, n, a.layoutBox, o),
            ai(s, c) || (l = !0),
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
function xi(e) {
  (mu.value && fd.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Si(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ci(e) {
  e.clearSnapshot();
}
function wi(e) {
  e.clearMeasurements();
}
function Ti(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Ei(e) {
  e.isLayoutDirty = !1;
}
function Di(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Oi(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function ki(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Ai(e) {
  e.resolveTargetDelta();
}
function ji(e) {
  e.calcProjection();
}
function Mi(e) {
  e.resetSkewAndRotation();
}
function Ni(e) {
  e.removeLeadSnapshot();
}
function Pi(e, t, n) {
  ((e.translate = J(t.translate, 0, n)),
    (e.scale = J(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Fi(e, t, n, r) {
  ((e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r)));
}
function Ii(e, t, n, r) {
  (Fi(e.x, t.x, n.x, r), Fi(e.y, t.y, n.y, r));
}
function Li(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
function Ri(e) {
  ((e.min = vd(e.min)), (e.max = vd(e.max)));
}
function zi(e) {
  (Ri(e.x), Ri(e.y));
}
function Bi(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !Ur(oi(t), oi(n), 0.2));
}
function Vi(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
function Hi() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(bd);
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
function Ui(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function Wi(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Ui(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Ui(e[t], null);
        }
      };
  };
}
function Gi(...e) {
  return i(Wi(...e), e);
}
function Ki({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
  let o = u(),
    s = E(null),
    c = E({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: `ltr` }),
    { nonce: d } = _($),
    f = Gi(s, e.props?.ref ?? e?.ref);
  return (
    g(() => {
      let { width: e, height: l, top: u, left: f, right: p, bottom: m, direction: h } = c.current;
      if (t || a === !1 || !s.current || !e || !l) return;
      let g = h === `rtl`,
        _ = n === `left` ? (g ? `right: ${p}` : `left: ${f}`) : g ? `left: ${f}` : `right: ${p}`,
        v = r === `bottom` ? `bottom: ${m}` : `top: ${u}`;
      s.current.dataset.motionPopId = o;
      let y = document.createElement(`style`);
      d && (y.nonce = d);
      let b = i ?? document.head;
      return (
        b.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (s.current?.removeAttribute(`data-motion-pop-id`), b.contains(y) && b.removeChild(y));
        }
      );
    }, [t]),
    b(Cd, {
      isPresent: t,
      childRef: s,
      sizeRef: c,
      pop: a,
      children: a === !1 ? e : l(e, { ref: f }),
    })
  );
}
function N(e) {
  let t = E(null);
  return (t.current === null && (t.current = e()), t.current);
}
function qi() {
  return new Map();
}
function Ji(e = !0) {
  let t = _(as);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: a } = t,
    o = u();
  w(() => {
    if (e) return a(o);
  }, [e]);
  let s = i(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
function Yi(e) {
  let t = [];
  return (
    T.forEach(e, (e) => {
      y(e) && t.push(e);
    }),
    t
  );
}
function Xi() {
  let e = E(!1);
  return (
    is(
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
function Zi() {
  let e = Xi(),
    [t, n] = h(0),
    r = i(() => {
      e.current && n(t + 1);
    }, [t]);
  return [i(() => z.postRender(r), [r]), t];
}
function Qi() {
  if (Nd) return;
  let e = {};
  for (let t in Md) e[t] = { isEnabled: (e) => Md[t].some((t) => !!e[t]) };
  (tr(e), (Nd = !0));
}
function $i() {
  return (Qi(), nr());
}
function ea(e) {
  let t = $i();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  tr(t);
}
function ta(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Pd.has(e)
  );
}
function na(e) {
  typeof e == `function` && (Fd = (t) => (t.startsWith(`on`) ? !ta(t) : e(t)));
}
function ra(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      X(e[i]) ||
      ((Fd(i) ||
        (n === !0 && ta(i)) ||
        (!t && !ta(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function ia({ children: e, isValidProp: t, ...r }) {
  t && na(t);
  let i = _($);
  ((r = { ...i, ...r }),
    (r.transition = Jt(r.transition, i.transition)),
    (r.isStatic = N(() => r.isStatic)));
  let a = n(
    () => r,
    [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion, r.skipAnimations]
  );
  return b($.Provider, { value: a, children: e });
}
function aa({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: oa(n, r, i, e), renderState: t() };
}
function oa(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = hi(a[e]);
  let { initial: o, animate: s } = e,
    c = Zn(e),
    l = Qn(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Yn(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = en(e, t[n]);
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
function sa(e, t) {
  if (Zn(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || Xn(t) ? t : void 0, animate: Xn(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function ca(e) {
  let { initial: t, animate: r } = sa(e, _(Id));
  return n(() => ({ initial: t, animate: r }), [la(t), la(r)]);
}
function la(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
function ua(e, t, n) {
  for (let r in t) !X(t[r]) && !Er(r, n) && (e[r] = t[r]);
}
function da({ transformTemplate: e }, t) {
  return n(() => {
    let n = zd();
    return (Sr(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function fa(e, t) {
  let n = e.style || {},
    r = {};
  return (ua(r, n, e), Object.assign(r, da(e, t)), r);
}
function pa(e, t) {
  let n = {},
    r = fa(e, t);
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
function ma(e, t, r, i) {
  let a = n(() => {
    let n = Bd();
    return (jr(n, t, Wu(i), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (ua(t, e.style, e), (a.style = { ...t, ...a.style }));
  }
  return a;
}
function ha(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Vd.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ga(e, t, r, { latestValues: i }, a, o = !1, s) {
  let l = ((s ?? ha(e)) ? ma : pa)(t, i, a, e),
    u = ra(t, typeof e == `string`, o),
    d = e === c ? {} : { ...u, ...l, ref: r },
    { children: f } = t,
    m = n(() => (X(f) ? f.get() : f), [f]);
  return p(e, { ...d, children: m });
}
function _a(e, t, n) {
  let r = E(n);
  g(() => {
    r.current = n;
  });
  let a = E(null);
  return i(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let i = r.current;
      if (typeof i == `function`)
        if (n) {
          let e = i(n);
          typeof e == `function` && (a.current = e);
        } else a.current ? (a.current(), (a.current = null)) : i(n);
      else i && (i.current = n);
    },
    [t]
  );
}
function va(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function ya(e, t, n, r, i, a) {
  let { visualElement: o } = _(Id),
    c = _(jd),
    l = _(as),
    u = _($),
    d = u.reducedMotion,
    f = u.skipAnimations,
    p = E(null),
    m = E(!1);
  ((r ||= c.renderer),
    !p.current &&
      r &&
      ((p.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: d,
        skipAnimations: f,
        isSVG: a,
      })),
      m.current && p.current && (p.current.manuallyAnimateOnMount = !0)));
  let h = p.current,
    v = _(Rd);
  h && !h.projection && i && (h.type === `html` || h.type === `svg`) && ba(p.current, n, i, v);
  let y = E(!1);
  g(() => {
    h && y.current && h.update(n, l);
  });
  let b = n[Pl],
    x = E(
      !!b && s !== void 0 && !s.MotionHandoffIsComplete?.(b) && s.MotionHasOptimisedAnimation?.(b)
    );
  return (
    is(() => {
      ((m.current = !0),
        h &&
          ((y.current = !0),
          (s.MotionIsMounted = !0),
          h.updateFeatures(),
          h.scheduleRenderMicrotask(),
          x.current && h.animationState && h.animationState.animateChanges()));
    }),
    w(() => {
      h &&
        (!x.current && h.animationState && h.animationState.animateChanges(),
        (x.current &&=
          (queueMicrotask(() => {
            s.MotionHandoffMarkAsComplete?.(b);
          }),
          !1)),
        (h.enteringChildren = void 0));
    }),
    h
  );
}
function ba(e, t, n, r) {
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
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : xa(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && va(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function xa(e) {
  if (e) return e.options.allowProjection === !1 ? xa(e.parent) : e.projection;
}
function Sa(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && ea(r);
  let a = n ? n === `svg` : ha(e),
    o = a ? Ud : Hd;
  function c(n, c) {
    let l,
      u = { ..._($), ...n, layoutId: Ca(n) },
      { isStatic: d } = u,
      f = ca(n),
      p = o(n, d);
    if (!d && s !== void 0) {
      wa(u, r);
      let t = Ta(u);
      ((l = t.MeasureLayout), (f.visualElement = ya(e, p, u, i, t.ProjectionNode, a)));
    }
    return v(Id.Provider, {
      value: f,
      children: [
        l && f.visualElement ? b(l, { visualElement: f.visualElement, ...u }) : null,
        ga(e, n, _a(p, f.visualElement, c), p, d, t, a),
      ],
    });
  }
  c.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let l = x(c);
  return ((l[Wd] = e), l);
}
function Ca({ layoutId: e }) {
  let t = _(ns).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function wa(e, t) {
  _(jd).strict;
}
function Ta(e) {
  let { drag: t, layout: n } = $i();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Ea(e, t) {
  if (typeof Proxy > `u`) return Sa;
  let n = new Map(),
    r = (n, r) => Sa(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, Sa(a, void 0, e, t)), n.get(a))),
  });
}
function Da(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
function Oa(e, t, n, r) {
  return pi(e, t, Yd(n), r);
}
function ka(e, t) {
  let n = Xd(e.x, t.x),
    r = Xd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function Aa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ja(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ma({ point: e }, t) {
  return { point: e, delta: ja(e, Pa(t)), offset: ja(e, Na(t)), velocity: Fa(t, 0.1) };
}
function Na(e) {
  return e[0];
}
function Pa(e) {
  return e[e.length - 1];
}
function Fa(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Pa(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > L(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > L(t) * 2 && (r = e[1]);
  let a = R(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Ia(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? J(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function La(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Ra(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: La(e.x, n, i), y: La(e.y, t, r) };
}
function za(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function Ba(e, t) {
  return { x: za(e.x, t.x), y: za(e.y, t.y) };
}
function Va(e, t) {
  let n = 0.5,
    r = j(e),
    i = j(t);
  return (
    i > r ? (n = us(t.min, t.max - r, e.min)) : r > i && (n = us(e.min, e.max - i, t.min)),
    P(0, 1, n)
  );
}
function Ha(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
function Ua(e = tf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = tf),
    { x: Wa(e, `left`, `right`), y: Wa(e, `top`, `bottom`) }
  );
}
function Wa(e, t, n) {
  return { min: Ga(e, t), max: Ga(e, n) };
}
function Ga(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
function Ka(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function qa(e, t, n) {
  let r = zn(e, Ka(n)),
    i = zn(t, Ka(n));
  return () => {
    (r(), i());
  };
}
function Ja(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ya(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
function Xa(e) {
  let [t, n] = Ji(),
    r = _(ns);
  return b(lf, { ...e, layoutGroup: r, switchLayoutGroup: _(Rd), isPresent: t, safeToRemove: n });
}
function Za(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && z.postRender(() => i(t, Da(t)));
}
function Qa(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && z.postRender(() => i(t, Da(t)));
}
function $a({ root: e, ...t }) {
  let n = e || document;
  hf.has(n) || hf.set(n, {});
  let r = hf.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(_f, { root: e, ...t })), r[i]);
}
function eo(e, t, n) {
  let r = $a(t);
  return (
    mf.set(e, n),
    r.observe(e),
    () => {
      (mf.delete(e), r.unobserve(e));
    }
  );
}
function to({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
function no(e) {
  let t = N(() => O(e)),
    { isStatic: n } = _($);
  if (n) {
    let [, n] = h(e);
    w(() => t.on(`change`, n), []);
  }
  return t;
}
function ro(e, t) {
  let n = no(t()),
    r = () => n.set(t());
  return (
    r(),
    is(() => {
      let t = () => z.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), B(r));
      };
    }),
    n
  );
}
function io(e) {
  ((xl.current = []), e());
  let t = ro(xl.current, e);
  return ((xl.current = void 0), t);
}
function ao(e, t, n, r) {
  if (typeof e == `function`) return io(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`) return so(e, t, n, r);
  let i = typeof t == `function` ? t : Un(t, n, r),
    a = Array.isArray(e) ? oo(e, i) : oo([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    o &&
      !o.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function oo(e, t) {
  let n = N(() => []);
  return ro(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function so(e, t, n, r) {
  let i = N(() => Object.keys(n)),
    a = N(() => ({}));
  for (let o of i) a[o] = ao(e, t, n[o], r);
  return a;
}
function co(e, t = {}) {
  let { isStatic: n } = _($),
    r = () => (X(e) ? e.get() : e);
  if (n) return ao(r);
  let i = no(r());
  return (g(() => Wn(i, e, t), [i, JSON.stringify(t)]), i);
}
function lo(e, t = {}) {
  return co(e, { type: `spring`, ...t });
}
function uo() {
  !wu.current && er();
  let [e] = h(Cu.current);
  return e;
}
function fo() {
  let e = uo(),
    { reducedMotion: t } = _($);
  return t === `never` ? !1 : t === `always` || e;
}
function po(e) {
  e.values.forEach((e) => e.stop());
}
function mo(e, t) {
  [...t].reverse().forEach((n) => {
    let r = e.getVariant(n);
    (r && an(e, r),
      e.variantChildren &&
        e.variantChildren.forEach((e) => {
          mo(e, t);
        }));
  });
}
function ho(e, t) {
  if (Array.isArray(t)) return mo(e, t);
  if (typeof t == `string`) return mo(e, [t]);
  an(e, t);
}
function go() {
  let e = new Set(),
    t = {
      subscribe(t) {
        return (e.add(t), () => void e.delete(t));
      },
      start(t, n) {
        let r = [];
        return (
          e.forEach((e) => {
            r.push(mn(e, t, { transitionOverride: n }));
          }),
          Promise.all(r)
        );
      },
      set(t) {
        return e.forEach((e) => {
          ho(e, t);
        });
      },
      stop() {
        e.forEach((e) => {
          po(e);
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
function _o(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function vo(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && _o(t)
      ? yn(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function yo(e, t, n) {
  return e * (t + 1) + n * t;
}
function bo(e, t, n, r) {
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
function xo(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (je(e, i), r--);
  }
}
function So(e, t, n, r, i, a) {
  xo(e, i, a);
  for (let o = 0; o < t.length; o++) e.push({ value: t[o], at: J(i, a, r[o]), easing: Ie(n, o) });
}
function Co(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function wo(e, t) {
  return e.at === t.at ? (e.value === null ? 1 : t.value === null ? -1 : 0) : e.at - t.at;
}
function To(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    } else if (!Array.isArray(o)) {
      l.set(o.name, bo(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = bo(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = Oo(e),
          {
            delay: l = 0,
            times: u = yt(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = Lt(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && kf(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = L(b));
          let r = st(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let w = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let T = u.length - c.length;
        if ((T > 0 && vt(u, T), c.length === 1 && c.unshift(null), m && `${m}${Df}`, m && m < Df)) {
          let e = b > 0 ? _ / b : 0;
          b = yo(b, m, _);
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
              (o = [...r].reverse().map((e) => (typeof e == `function` ? vs(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)), c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : Ie(f, e - 1)));
          }
          Co(u, m, e);
        }
        let E = w + b;
        (So(r, c, y, u, w, E), (g = Math.max(x + b, g)), (f = Math.max(E, f)));
      };
    if (X(p)) {
      let e = Eo(p, s);
      _(m, h, Do(`default`, e));
    } else {
      let e = vo(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = Eo(r, s);
        for (let e in m) _(m[e], ko(h, e), Do(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(wo);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(us(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(Ef)),
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
function Eo(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function Do(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function Oo(e) {
  return Array.isArray(e) ? e : [e];
}
function ko(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
function Ao(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
        latestValues: {},
      },
    },
    n = Mn(e) && !Bn(e) ? new Gu(t) : new Ru(t);
  (n.mount(e), bu.set(e, n));
}
function jo(e) {
  let t = new zu({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), bu.set(e, t));
}
function Mo(e, t) {
  return X(e) || typeof e == `number` || (typeof e == `string` && !_o(t));
}
function No(e, t, n, r) {
  let i = [];
  if (Mo(e, t)) i.push(fi(e, (_o(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = vo(e, t, r),
      o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = r instanceof Element ? Ao : jo;
      bu.has(r) || s(r);
      let c = bu.get(r),
        l = { ...n };
      (`delay` in l && typeof l.delay == `function` && (l.delay = l.delay(e, o)),
        i.push(...dn(c, { ...t, transition: l }, {})));
    }
  }
  return i;
}
function Po(e, t, n) {
  let r = [];
  return (
    To(
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
      { spring: pt }
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...No(n, e, t));
    }),
    r
  );
}
function Fo(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function Io(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if ((n !== void 0 && (c.reduceMotion = n), r !== void 0 && (c.skipAnimations = r), Fo(e))) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = Po(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = No(e, i, { ...c, ...r }, t)));
    }
    let l = new vl(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          je(t.animations, l);
        })),
      l
    );
  }
  return i;
}
function Lo() {
  let e = N(go);
  return (is(e.mount, []), e);
}
function Ro(e) {
  return typeof e == `object` && !!e && Wd in e;
}
function zo(e) {
  if (Ro(e)) return e[Wd];
}
function Bo() {
  return Vo;
}
function Vo(e) {
  xd.current && ((xd.current.isUpdating = !1), xd.current.blockUpdate(), e && e());
}
function Ho() {
  return i(() => {
    let e = xd.current;
    e && e.resetTree();
  }, []);
}
function Uo(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = yn(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Mf[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Wo(e, { root: t, margin: n, amount: r, once: i = !1, initial: a = !1 } = {}) {
  let [o, s] = h(a);
  return (
    w(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Uo(e.current, a, c);
    }, [t, e, n, i, r]),
    o
  );
}
function Go() {
  let [e, t] = Zi(),
    n = Bo(),
    r = E(-1);
  return (
    w(() => {
      z.postRender(() =>
        z.postRender(() => {
          t === r.current && (F.instantAnimations = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        ((F.instantAnimations = !0), e(), i(), (r.current = t + 1));
      });
    }
  );
}
function Ko(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((e) => e.value === t);
  if (i === -1) return e;
  let a = r > 0 ? 1 : -1,
    o = e[i + a];
  if (!o) return e;
  let s = e[i],
    c = o.layout,
    l = J(c.min, c.max, 0.5);
  return (a === 1 && s.layout.max + n > l) || (a === -1 && s.layout.min + n < l)
    ? Me(e, i, i + a)
    : e;
}
function qo({ children: e, as: t = `ul`, axis: n = `y`, onReorder: r, values: i, ...a }, o) {
  let s = N(() => Sf[t]),
    c = [],
    l = E(!1),
    u = E(null),
    d = {
      axis: n,
      groupRef: u,
      registerItem: (e, t) => {
        let r = c.findIndex((t) => e === t.value);
        (r === -1 ? c.push({ value: e, layout: t[n] }) : (c[r].layout = t[n]), c.sort(Jo));
      },
      updateOrder: (e, t, n) => {
        if (l.current) return;
        let a = Ko(c, e, t, n);
        if (c !== a) {
          l.current = !0;
          let e = [...i];
          for (let t = 0; t < a.length; t++)
            if (c[t].value !== a[t].value) {
              let n = i.indexOf(c[t].value),
                r = i.indexOf(a[t].value);
              n !== -1 && r !== -1 && ([e[n], e[r]] = [e[r], e[n]]);
              break;
            }
          r(e);
        }
      },
    };
  w(() => {
    l.current = !1;
  });
  let f = (e) => {
      ((u.current = e), typeof o == `function` ? o(e) : o && (o.current = e));
    },
    p = { overflowAnchor: `none`, ...a.style };
  return b(s, {
    ...a,
    style: p,
    ref: f,
    ignoreStrict: !0,
    children: b(Ff.Provider, { value: d, children: e }),
  });
}
function Jo(e, t) {
  return e.layout.min - t.layout.min;
}
function Yo() {
  if (Hf) {
    let e = Zo(Hf, `y`);
    e && (Vf.delete(e), Bf.delete(e));
    let t = Zo(Hf, `x`);
    (t && t !== e && (Vf.delete(t), Bf.delete(t)), (Hf = null));
  }
}
function Xo(e, t) {
  let n = getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY,
    i = e === document.body || e === document.documentElement;
  return zf.has(r) || i;
}
function Zo(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (Xo(n, t)) return n;
    n = n.parentElement;
  }
  return null;
}
function Qo(e, t, n) {
  let r = t.getBoundingClientRect(),
    i = n === `x` ? Math.max(0, r.left) : Math.max(0, r.top),
    a = n === `x` ? Math.min(s.innerWidth, r.right) : Math.min(s.innerHeight, r.bottom),
    o = e - i,
    c = a - e;
  if (o < Lf) {
    let e = 1 - o / Lf;
    return { amount: -Rf * e * e, edge: `start` };
  } else if (c < Lf) {
    let e = 1 - c / Lf;
    return { amount: Rf * e * e, edge: `end` };
  }
  return { amount: 0, edge: null };
}
function $o(e, t, n, r) {
  if (!e) return;
  Hf = e;
  let i = Zo(e, n);
  if (!i) return;
  let { amount: a, edge: o } = Qo(t - (n === `x` ? s.scrollX : s.scrollY), i, n);
  if (o === null) {
    (Vf.delete(i), Bf.delete(i));
    return;
  }
  let c = Vf.get(i),
    l = i === document.body || i === document.documentElement;
  if (c !== o) {
    if (!((o === `start` && r < 0) || (o === `end` && r > 0))) return;
    Vf.set(i, o);
    let e =
      n === `x`
        ? i.scrollWidth - (l ? s.innerWidth : i.clientWidth)
        : i.scrollHeight - (l ? s.innerHeight : i.clientHeight);
    Bf.set(i, e);
  }
  if (a > 0) {
    let e = Bf.get(i);
    if ((n === `x` ? (l ? s.scrollX : i.scrollLeft) : l ? s.scrollY : i.scrollTop) >= e) return;
  }
  n === `x`
    ? l
      ? s.scrollBy({ left: a })
      : (i.scrollLeft += a)
    : l
      ? s.scrollBy({ top: a })
      : (i.scrollTop += a);
}
function es(e, t = 0) {
  return X(e) ? e : no(t);
}
function ts(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = `li`,
    onDrag: i,
    onDragEnd: a,
    layout: o = !0,
    ...s
  },
  c
) {
  let l = N(() => Sf[r]),
    u = _(Ff),
    d = { x: es(t.x), y: es(t.y) },
    f = ao([d.x, d.y], ([e, t]) => (e || t ? 1 : `unset`)),
    { axis: p, registerItem: m, updateOrder: h, groupRef: g } = u;
  return b(l, {
    drag: p,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: d.x, y: d.y, zIndex: f },
    layout: o,
    onDrag: (e, t) => {
      let { velocity: r, point: a } = t,
        o = d[p].get();
      (h(n, o, r[p]), $o(g.current, a[p], p, r[p]), i && i(e, t));
    },
    onDragEnd: (e, t) => {
      (Yo(), a && a(e, t));
    },
    onLayoutMeasure: (e) => {
      m(n, e);
    },
    ref: c,
    ignoreStrict: !0,
    children: e,
  });
}
var ns,
  rs,
  is,
  as,
  P,
  F,
  os,
  ss,
  cs,
  I,
  ls,
  us,
  ds,
  L,
  R,
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
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  z,
  B,
  V,
  Is,
  Ls,
  H,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  U,
  W,
  G,
  nc,
  rc,
  ic,
  ac,
  K,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  q,
  J,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Y,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
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
  X,
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
  Z,
  eu,
  tu,
  nu,
  ru,
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
  Q,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
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
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  $,
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
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf = t(() => {
    (a(),
      ke(),
      r(),
      S(),
      (ns = C({})),
      (rs = s !== void 0),
      (is = rs ? d : w),
      (as = C(null)),
      (P = (e, t, n) => (n > t ? t : n < e ? e : n)),
      (F = {}),
      (os = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)),
      (ss = (e) => typeof e == `object` && !!e),
      (cs = (e) => /^0[^.\s]+$/u.test(e)),
      (I = (e) => e),
      (ls = (...e) => e.reduce((e, t) => (n) => t(e(n)))),
      (us = (e, t, n) => {
        let r = t - e;
        return r ? (n - e) / r : 1;
      }),
      (ds = class {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (Ae(this.subscriptions, e), () => je(this.subscriptions, e));
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r)
            if (r === 1) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }),
      (L = (e) => e * 1e3),
      (R = (e) => e / 1e3),
      (fs = (e, t) => (t ? (1e3 / t) * e : 0)),
      (ps = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (ms = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e),
      (hs = 1e-7),
      (gs = 12),
      (_s = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2)),
      (vs = (e) => (t) => 1 - e(1 - t)),
      (ys = Fe(0.33, 1.53, 0.69, 0.99)),
      (bs = vs(ys)),
      (xs = _s(bs)),
      (Ss = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * bs(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))))),
      (Cs = (e) => 1 - Math.sin(Math.acos(e))),
      (ws = vs(Cs)),
      (Ts = _s(Cs)),
      (Es = Fe(0.42, 0, 1, 1)),
      (Ds = Fe(0, 0, 0.58, 1)),
      (Os = Fe(0.42, 0, 0.58, 1)),
      (ks = (e) => Array.isArray(e) && typeof e[0] != `number`),
      (As = (e) => Array.isArray(e) && typeof e[0] == `number`),
      (js = {
        linear: I,
        easeIn: Es,
        easeInOut: Os,
        easeOut: Ds,
        circIn: Cs,
        circInOut: Ts,
        circOut: ws,
        backIn: bs,
        backInOut: xs,
        backOut: ys,
        anticipate: Ss,
      }),
      (Ms = (e) => typeof e == `string`),
      (Ns = (e) => {
        if (As(e)) {
          e.length;
          let [t, n, r, i] = e;
          return Fe(t, n, r, i);
        } else if (Ms(e)) return (js[e], `${e}`, js[e]);
        return e;
      }),
      (Ps = [
        `setup`,
        `read`,
        `resolveKeyframes`,
        `preUpdate`,
        `update`,
        `preRender`,
        `render`,
        `postRender`,
      ]),
      (Fs = 40),
      ({
        schedule: z,
        cancel: B,
        state: V,
        steps: Is,
      } = Re(typeof requestAnimationFrame < `u` ? requestAnimationFrame : I, !0)),
      (H = {
        now: () => (
          Ls === void 0 &&
            H.set(V.isProcessing || F.useManualTiming ? V.timestamp : performance.now()),
          Ls
        ),
        set: (e) => {
          ((Ls = e), queueMicrotask(ze));
        },
      }),
      (Rs = (e) => (t) => typeof t == `string` && t.startsWith(e)),
      (zs = Rs(`--`)),
      (Bs = Rs(`var(--`)),
      (Vs = (e) => (Bs(e) ? Hs.test(e.split(`/*`)[0].trim()) : !1)),
      (Hs = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu),
      (Us = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e }),
      (Ws = { ...Us, transform: (e) => P(0, 1, e) }),
      (Gs = { ...Us, default: 1 }),
      (Ks = (e) => Math.round(e * 1e5) / 1e5),
      (qs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu),
      (Js =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu),
      (Ys = (e, t) => (n) =>
        !!(
          (typeof n == `string` && Js.test(n) && n.startsWith(e)) ||
          (t && !Ve(n) && Object.prototype.hasOwnProperty.call(n, t))
        )),
      (Xs = (e, t, n) => (r) => {
        if (typeof r != `string`) return r;
        let [i, a, o, s] = r.match(qs);
        return {
          [e]: parseFloat(i),
          [t]: parseFloat(a),
          [n]: parseFloat(o),
          alpha: s === void 0 ? 1 : parseFloat(s),
        };
      }),
      (Zs = (e) => P(0, 255, e)),
      (Qs = { ...Us, transform: (e) => Math.round(Zs(e)) }),
      ($s = {
        test: Ys(`rgb`, `red`),
        parse: Xs(`red`, `green`, `blue`),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          `rgba(` +
          Qs.transform(e) +
          `, ` +
          Qs.transform(t) +
          `, ` +
          Qs.transform(n) +
          `, ` +
          Ks(Ws.transform(r)) +
          `)`,
      }),
      (ec = { test: Ys(`#`), parse: He, transform: $s.transform }),
      (tc = (e) => ({
        test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      })),
      (U = tc(`deg`)),
      (W = tc(`%`)),
      (G = tc(`px`)),
      (nc = tc(`vh`)),
      (rc = tc(`vw`)),
      (ic = { ...W, parse: (e) => W.parse(e) / 100, transform: (e) => W.transform(e * 100) }),
      (ac = {
        test: Ys(`hsl`, `hue`),
        parse: Xs(`hue`, `saturation`, `lightness`),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          `hsla(` +
          Math.round(e) +
          `, ` +
          W.transform(Ks(t)) +
          `, ` +
          W.transform(Ks(n)) +
          `, ` +
          Ks(Ws.transform(r)) +
          `)`,
      }),
      (K = {
        test: (e) => $s.test(e) || ec.test(e) || ac.test(e),
        parse: (e) => ($s.test(e) ? $s.parse(e) : ac.test(e) ? ac.parse(e) : ec.parse(e)),
        transform: (e) =>
          typeof e == `string` ? e : e.hasOwnProperty(`red`) ? $s.transform(e) : ac.transform(e),
        getAnimatableNone: (e) => {
          let t = K.parse(e);
          return ((t.alpha = 0), K.transform(t));
        },
      }),
      (oc =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu),
      (sc = `number`),
      (cc = `color`),
      (lc = `var`),
      (uc = `var(`),
      (dc = "${}"),
      (fc =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu),
      (pc = (e) => (typeof e == `number` ? 0 : K.test(e) ? K.getAnimatableNone(e) : e)),
      (mc = (e, t) => (typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : pc(e))),
      (q = { test: Ue, parse: Ge, createTransformer: qe, getAnimatableNone: Je }),
      (J = (e, t, n) => e + (t - e) * n),
      (hc = (e, t, n) => {
        let r = e * e,
          i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i);
      }),
      (gc = [ec, $s, ac]),
      (_c = (e) => gc.find((t) => t.test(e))),
      (vc = (e, t) => {
        let n = Qe(e),
          r = Qe(t);
        if (!n || !r) return Ze(e, t);
        let i = { ...n };
        return (e) => (
          (i.red = hc(n.red, r.red, e)),
          (i.green = hc(n.green, r.green, e)),
          (i.blue = hc(n.blue, r.blue, e)),
          (i.alpha = J(n.alpha, r.alpha, e)),
          $s.transform(i)
        );
      }),
      (yc = new Set([`none`, `hidden`])),
      (bc = (e, t) => {
        let n = q.createTransformer(t),
          r = We(e),
          i = We(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (yc.has(e) && !i.values.length) || (yc.has(t) && !r.values.length)
            ? $e(e, t)
            : ls(nt(it(r, i), i.values), n)
          : (`${e}${t}`, Ze(e, t));
      }),
      (xc = (e, t, n = 10) => {
        let r = ``,
          i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0, r.length - 2)})`;
      }),
      (Sc = 2e4),
      (Y = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      }),
      (Cc = 12),
      (wc = 0.001),
      (Tc = [`duration`, `bounce`]),
      (Ec = [`stiffness`, `damping`, `mass`]),
      (pt.applyToOptions = (e) => {
        let t = st(e, 100, pt);
        return ((e.ease = t.ease), (e.duration = L(t.duration)), (e.type = `keyframes`), e);
      }),
      (Dc = 5),
      (Oc = (e) => e !== null),
      (kc = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: (e = !0) => z.update(t, e),
          stop: () => B(t),
          now: () => (V.isProcessing ? V.timestamp : H.now()),
        };
      }),
      (Ac = { decay: ht, inertia: ht, tween: St, keyframes: St, spring: pt }),
      (jc = class {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((e) => {
            this.resolve = e;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
      }),
      (Mc = (e) => e / 100),
      (Nc = class extends jc {
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
              (e && e.updatedAt !== H.now() && this.tick(H.now()),
                (this.isStopped = !0),
                this.state !== `idle` && (this.teardown(), this.options.onStop?.()));
            }),
            (this.options = e),
            this.initAnimation(),
            this.play(),
            e.autoplay === !1 && this.pause());
        }
        initAnimation() {
          let { options: e } = this;
          wt(e);
          let {
              type: t = St,
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: i,
              velocity: a = 0,
            } = e,
            { keyframes: o } = e,
            s = t || St;
          s !== St &&
            typeof o[0] != `number` &&
            ((this.mixKeyframes = ls(Mc, at(o[0], o[1]))), (o = [0, 100]));
          let c = s({ ...e, keyframes: o });
          (i === `mirror` &&
            (this.mirroredGenerator = s({ ...e, keyframes: [...o].reverse(), velocity: -a })),
            c.calculatedDuration === null && (c.calculatedDuration = ot(c)));
          let { calculatedDuration: l } = c;
          ((this.calculatedDuration = l),
            (this.resolvedDuration = l + r),
            (this.totalDuration = this.resolvedDuration * (n + 1) - r),
            (this.generator = c));
        }
        updateTime(e) {
          let t = Math.round(e - this.startTime) * this.playbackSpeed;
          this.holdTime === null ? (this.currentTime = t) : (this.currentTime = this.holdTime);
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
          (this.speed > 0
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
              (v = P(0, 1, n) * o));
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
            S && p !== ht && (b.value = Ct(l, this.options, h, this.speed)),
            m && m(b.value),
            S && this.finish(),
            b
          );
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
        get duration() {
          return R(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + R(e);
        }
        get time() {
          return R(this.currentTime);
        }
        set time(e) {
          ((e = L(e)),
            (this.currentTime = e),
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
              ? (this.holdTime = e)
              : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0), (this.state = `paused`), (this.holdTime = e), this.tick(e)));
        }
        getGeneratorVelocity() {
          let e = this.currentTime;
          if (e <= 0) return this.options.velocity || 0;
          if (this.generator.velocity) return this.generator.velocity(e);
          let t = this.generator.next(e).value;
          return mt((e) => this.generator.next(e).value, e, t);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (t && this.driver && this.updateTime(H.now()),
            (this.playbackSpeed = e),
            t && this.driver && (this.time = R(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: e = kc, startTime: t } = this.options;
          ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
          let n = this.driver.now();
          (this.state === `finished`
            ? (this.updateFinished(), (this.startTime = n))
            : this.holdTime === null
              ? (this.startTime ||= t ?? n)
              : (this.startTime = n - this.holdTime),
            this.state === `finished` &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = `running`),
            this.driver.start());
        }
        pause() {
          ((this.state = `paused`), this.updateTime(H.now()), (this.holdTime = this.currentTime));
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
      (Pc = (e) => (e * 180) / Math.PI),
      (Fc = (e) => Lc(Pc(Math.atan2(e[1], e[0])))),
      (Ic = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Fc,
        rotateZ: Fc,
        skewX: (e) => Pc(Math.atan(e[1])),
        skewY: (e) => Pc(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      }),
      (Lc = (e) => ((e %= 360), e < 0 && (e += 360), e)),
      (Rc = Fc),
      (zc = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1])),
      (Bc = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5])),
      (Vc = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: zc,
        scaleY: Bc,
        scale: (e) => (zc(e) + Bc(e)) / 2,
        rotateX: (e) => Lc(Pc(Math.atan2(e[6], e[5]))),
        rotateY: (e) => Lc(Pc(Math.atan2(-e[2], e[0]))),
        rotateZ: Rc,
        rotate: Rc,
        skewX: (e) => Pc(Math.atan(e[4])),
        skewY: (e) => Pc(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      }),
      (Hc = (e, t) => {
        let { transform: n = `none` } = getComputedStyle(e);
        return Dt(n, t);
      }),
      (Uc = [
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
      (Wc = new Set([...Uc, `pathRotation`])),
      (Gc = (e) => e === Us || e === G),
      (Kc = new Set([`x`, `y`, `z`])),
      (qc = Uc.filter((e) => !Kc.has(e))),
      (Jc = {
        width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }) => {
          let i = e.max - e.min;
          return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
        },
        height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }) => {
          let i = e.max - e.min;
          return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
        },
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: (e, { transform: t }) => Dt(t, `x`),
        y: (e, { transform: t }) => Dt(t, `y`),
      }),
      (Jc.translateX = Jc.x),
      (Jc.translateY = Jc.y),
      (Yc = new Set()),
      (Xc = !1),
      (Zc = !1),
      (Qc = !1),
      ($c = class {
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
              ? (Yc.add(this), Xc || ((Xc = !0), z.read(jt), z.resolveKeyframes(At)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
          if (e[0] === null) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          }
          Tt(e);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
          ((this.state = `complete`),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            Yc.delete(this));
        }
        cancel() {
          this.state === `scheduled` && (Yc.delete(this), (this.state = `pending`));
        }
        resume() {
          this.state === `pending` && this.scheduleResolve();
        }
      }),
      (el = (e) => e.startsWith(`--`)),
      (tl = {}),
      (nl = Pt(() => s.ScrollTimeline !== void 0, `scrollTimeline`)),
      (rl = Pt(() => {
        try {
          document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      }, `linearEasing`)),
      (il = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`),
      (al = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: il([0, 0.65, 0.55, 1]),
        circOut: il([0.55, 0, 1, 0.45]),
        backIn: il([0.31, 0.01, 0.66, -0.59]),
        backOut: il([0.33, 1.53, 0.69, 0.99]),
      }),
      (ol = class extends jc {
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
          let c = Rt(e);
          ((this.animation = It(t, n, r, c, i)),
            c.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !i)) {
                let e = Ct(r, this.options, o, this.speed);
                (this.updateMotionValue && this.updateMotionValue(e),
                  Nt(t, n, e),
                  this.animation.cancel());
              }
              (s?.(), this.notifyFinished());
            }));
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
          e === `idle` ||
            e === `finished` ||
            (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let e = this.options?.element;
          !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
        }
        get duration() {
          let e = this.animation.effect?.getComputedTiming?.().duration || 0;
          return R(Number(e));
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + R(e);
        }
        get time() {
          return R(Number(this.animation.currentTime) || 0);
        }
        set time(e) {
          let t = this.finishedTime !== null;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = L(e)),
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
        attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
          return (
            this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }),
            (this.animation.onfinish = null),
            e && nl()
              ? ((this.animation.timeline = e),
                t && (this.animation.rangeStart = t),
                n && (this.animation.rangeEnd = n),
                I)
              : r(this)
          );
        }
      }),
      (sl = { anticipate: Ss, backInOut: xs, circInOut: Ts }),
      (cl = 10),
      (ll = class extends ol {
        constructor(e) {
          (Bt(e),
            wt(e),
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
          let o = new Nc({ ...a, autoplay: !1 }),
            s = Math.max(cl, H.now() - this.startTime),
            c = P(0, cl, s - cl),
            l = o.sample(s).value,
            { name: u } = this.options;
          (i && u && Nt(i, u, l),
            t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
            o.stop());
        }
      }),
      (ul = new Set([`opacity`, `clipPath`, `filter`, `transform`])),
      (dl = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/),
      (fl = new Set([
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
      (pl = Ne(() => Object.hasOwnProperty.call(Element.prototype, `animate`))),
      (ml = (e, t) =>
        t !== `zIndex` &&
        !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (q.test(e) || e === `0`) && !e.startsWith(`url(`))
        )),
      (hl = 40),
      (gl = class extends jc {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = `keyframes`,
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: a = `loop`,
          keyframes: o,
          name: s,
          motionValue: c,
          element: l,
          ...u
        }) {
          (super(),
            (this.stop = () => {
              (this._animation && (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = H.now()));
          let d = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: a,
              name: s,
              motionValue: c,
              element: l,
              ...u,
            },
            f = l?.KeyframeResolver || $c;
          ((this.keyframeResolver = new f(
            o,
            (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
            s,
            c,
            l
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(e, t, n, r) {
          this.keyframeResolver = void 0;
          let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
          this.resolvedAt = H.now();
          let u = !0;
          Gt(e, i, a, o) ||
            ((u = !1),
            (F.instantAnimations || !s) && l?.(Ct(e, n, t)),
            (e[0] = e[e.length - 1]),
            Vt(n),
            (n.repeat = 0));
          let d = {
              startTime: r
                ? this.resolvedAt && this.resolvedAt - this.createdAt > hl
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: t,
              ...n,
              keyframes: e,
            },
            f = u && !c && Ut(d),
            p = d.motionValue?.owner?.current,
            m;
          if (f)
            try {
              m = new ll({ ...d, element: p });
            } catch {
              m = new Nc(d);
            }
          else m = new Nc(d);
          (m.finished
            .then(() => {
              this.notifyFinished();
            })
            .catch(I),
            (this.pendingTimeline &&=
              ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)), void 0)),
            (this._animation = m));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
        get animation() {
          return (this._animation || (this.keyframeResolver?.resume(), Mt()), this._animation);
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
      (_l = class {
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
          return Kt(this.animations, `duration`);
        }
        get iterationDuration() {
          return Kt(this.animations, `iterationDuration`);
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
      (vl = class extends _l {
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
      }),
      (yl = 30),
      (bl = (e) => !isNaN(parseFloat(e))),
      (xl = { current: void 0 }),
      (Sl = class {
        constructor(e, t = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e) => {
              let t = H.now();
              if (
                (this.updatedAt !== t && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let e of this.dependents) e.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = H.now()),
            this.canTrackVelocity === null &&
              e !== void 0 &&
              (this.canTrackVelocity = bl(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on(`change`, e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new ds());
          let n = this.events[e].add(t);
          return e === `change`
            ? () => {
                (n(),
                  z.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : n;
        }
        clearListeners() {
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
          this.events.change?.notify(this.current);
        }
        addDependent(e) {
          ((this.dependents ||= new Set()), this.dependents.add(e));
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e);
        }
        get() {
          return (xl.current && xl.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = H.now();
          if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > yl)
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, yl);
          return fs(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              ((this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart && this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation());
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
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }),
      (Cl = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }),
      (wl = (e) => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
      })),
      (Tl = { type: `keyframes`, duration: 0.8 }),
      (El = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }),
      (Dl = (e, { keyframes: t }) =>
        t.length > 2 ? Tl : Wc.has(e) ? (e.startsWith(`scale`) ? wl(t[1]) : Cl) : El),
      (Ol = new Set([
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
      (kl =
        (e, t, n, r = {}, i, a) =>
        (o) => {
          let s = Yt(r, e) || {},
            c = s.delay || r.delay || 0,
            { elapsed: l = 0 } = r;
          l -= L(c);
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
          (Xt(s) || Object.assign(u, Dl(e, u)),
            (u.duration &&= L(u.duration)),
            (u.repeatDelay &&= L(u.repeatDelay)),
            u.from !== void 0 && (u.keyframes[0] = u.from));
          let d = !1;
          if (
            ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
              (Vt(u), u.delay === 0 && (d = !0)),
            (F.instantAnimations ||
              F.skipAnimations ||
              i?.shouldSkipAnimations ||
              s.skipAnimations) &&
              ((d = !0), Vt(u), (u.delay = 0)),
            (u.allowFlatten = !s.type && !s.ease),
            d && !a && t.get() !== void 0)
          ) {
            let e = Ct(u.keyframes, s);
            if (e !== void 0) {
              z.update(() => {
                (u.onUpdate(e), u.onComplete());
              });
              return;
            }
          }
          return s.isSync ? new Nc(u) : new gl(u);
        }),
      (Al = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u),
      (jl = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Uc])),
      (Ml = (e) => Array.isArray(e)),
      (X = (e) => !!(e && e.getVelocity)),
      (Nl = `framerAppearId`),
      (Pl = `data-` + cn(Nl)),
      (Fl = (e) => (t) => t.test(e)),
      (Il = [Us, G, W, U, rc, nc, { test: (e) => e === `auto`, parse: (e) => e }]),
      (Ll = (e) => Il.find(Fl(e))),
      (Rl = {
        rotate: U,
        pathRotation: U,
        rotateX: U,
        rotateY: U,
        rotateZ: U,
        scale: Gs,
        scaleX: Gs,
        scaleY: Gs,
        scaleZ: Gs,
        skew: U,
        skewX: U,
        skewY: U,
        distance: G,
        translateX: G,
        translateY: G,
        translateZ: G,
        x: G,
        y: G,
        z: G,
        perspective: G,
        transformPerspective: G,
        opacity: Ws,
        originX: ic,
        originY: ic,
        originZ: G,
      }),
      (zl = { ...Us, transform: Math.round }),
      (Bl = {
        borderWidth: G,
        borderTopWidth: G,
        borderRightWidth: G,
        borderBottomWidth: G,
        borderLeftWidth: G,
        borderRadius: G,
        borderTopLeftRadius: G,
        borderTopRightRadius: G,
        borderBottomRightRadius: G,
        borderBottomLeftRadius: G,
        width: G,
        maxWidth: G,
        height: G,
        maxHeight: G,
        top: G,
        right: G,
        bottom: G,
        left: G,
        inset: G,
        insetBlock: G,
        insetBlockStart: G,
        insetBlockEnd: G,
        insetInline: G,
        insetInlineStart: G,
        insetInlineEnd: G,
        padding: G,
        paddingTop: G,
        paddingRight: G,
        paddingBottom: G,
        paddingLeft: G,
        paddingBlock: G,
        paddingBlockStart: G,
        paddingBlockEnd: G,
        paddingInline: G,
        paddingInlineStart: G,
        paddingInlineEnd: G,
        margin: G,
        marginTop: G,
        marginRight: G,
        marginBottom: G,
        marginLeft: G,
        marginBlock: G,
        marginBlockStart: G,
        marginBlockEnd: G,
        marginInline: G,
        marginInlineStart: G,
        marginInlineEnd: G,
        fontSize: G,
        backgroundPositionX: G,
        backgroundPositionY: G,
        ...Rl,
        zIndex: zl,
        fillOpacity: Ws,
        strokeOpacity: Ws,
        numOctaves: zl,
      }),
      (Vl = new Set([`brightness`, `contrast`, `saturate`, `opacity`])),
      (Hl = /\b([a-z-]*)\(.*?\)/gu),
      (Ul = {
        ...q,
        getAnimatableNone: (e) => {
          let t = e.match(Hl);
          return t ? t.map(hn).join(` `) : e;
        },
      }),
      (Wl = {
        ...q,
        getAnimatableNone: (e) => {
          let t = q.parse(e);
          return q.createTransformer(e)(
            t.map((e) => (typeof e == `number` ? 0 : typeof e == `object` ? { ...e, alpha: 1 } : e))
          );
        },
      }),
      (Gl = {
        ...Bl,
        color: K,
        backgroundColor: K,
        outlineColor: K,
        fill: K,
        stroke: K,
        borderColor: K,
        borderTopColor: K,
        borderRightColor: K,
        borderBottomColor: K,
        borderLeftColor: K,
        filter: Ul,
        WebkitFilter: Ul,
        mask: Wl,
        WebkitMask: Wl,
      }),
      (Kl = (e) => Gl[e]),
      (ql = new Set([Ul, Wl])),
      (Jl = new Set([`auto`, `none`, `0`])),
      (Yl = class extends $c {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (typeof r == `string` && ((r = r.trim()), Vs(r))) {
              let i = Qt(r, t.current);
              (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !jl.has(n) || e.length !== 2)) return;
          let [r, i] = e,
            a = Ll(r),
            o = Ll(i);
          if (Be(r) !== Be(i) && Jc[n]) {
            this.needsMeasurement = !0;
            return;
          }
          if (a !== o)
            if (Gc(a) && Gc(o))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                typeof n == `string` && (e[t] = parseFloat(n));
              }
            else Jc[n] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) (e[t] === null || _n(e[t])) && n.push(t);
          n.length && vn(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          (n === `height` && (this.suspendedScrollY = s.pageYOffset),
            (this.measuredOrigin = Jc[n](e.measureViewportBox(), s.getComputedStyle(e.current))),
            (t[0] = this.measuredOrigin));
          let r = t[t.length - 1];
          r !== void 0 && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          let { element: e, name: t, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(t);
          r && r.jump(this.measuredOrigin, !1);
          let i = n.length - 1,
            a = n[i];
          ((n[i] = Jc[t](e.measureViewportBox(), s.getComputedStyle(e.current))),
            a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes());
        }
      }),
      (Xl = [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomRightRadius`,
        `borderBottomLeftRadius`,
      ]),
      [...Xl],
      (Zl = (e, t) => (t && typeof e == `number` ? t.transform(e) : e)),
      ({ schedule: Ql, cancel: $l } = Re(queueMicrotask, !1)),
      (Z = { x: !1, y: !1 }),
      (eu = (e, t) => (t ? e === t || eu(e, t.parentElement) : !1)),
      (tu = (e) =>
        e.pointerType === `mouse`
          ? typeof e.button != `number` || e.button <= 0
          : e.isPrimary !== !1),
      (nu = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`])),
      (ru = new Set([`INPUT`, `SELECT`, `TEXTAREA`])),
      (iu = new WeakSet()),
      (au = (e, t) => {
        let n = e.currentTarget;
        if (!n) return;
        let r = On(() => {
          if (iu.has(n)) return;
          kn(n, `down`);
          let e = On(() => {
            kn(n, `up`);
          });
          (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => kn(n, `cancel`), t));
        });
        (n.addEventListener(`keydown`, r, t),
          n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
      }),
      (ou = new WeakSet()),
      (su = new WeakMap()),
      (lu = (e, t, n) => (r, i) =>
        i && i[0] ? i[0][e + `Size`] : Mn(r) && `getBBox` in r ? r.getBBox()[t] : r[n]),
      (uu = lu(`inline`, `width`, `offsetWidth`)),
      (du = lu(`block`, `height`, `offsetHeight`)),
      (fu = new Set()),
      (mu = { value: null, addProjectionMetrics: null }),
      (hu = [...Il, K, q]),
      (gu = (e) => hu.find(Fl(e))),
      (_u = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
      (vu = () => ({ x: _u(), y: _u() })),
      (yu = () => ({ min: 0, max: 0 })),
      (Q = () => ({ x: yu(), y: yu() })),
      (bu = new WeakMap()),
      (xu = [
        `animate`,
        `whileInView`,
        `whileFocus`,
        `whileHover`,
        `whileTap`,
        `whileDrag`,
        `exit`,
      ]),
      (Su = [`initial`, ...xu]),
      (Cu = { current: null }),
      (wu = { current: !1 }),
      (Tu = s !== void 0),
      (Eu = [
        `AnimationStart`,
        `AnimationComplete`,
        `Update`,
        `BeforeLayoutMeasure`,
        `LayoutMeasure`,
        `LayoutAnimationStart`,
        `LayoutAnimationComplete`,
      ]),
      (Du = {}),
      (Ou = class {
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
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = $c),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
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
              let e = H.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), z.render(this.render, !1, !0));
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
            (this.isControllingVariants = Zn(t)),
            (this.isVariantNode = Qn(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
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
          ((this.current = e),
            bu.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            this.reducedMotionConfig === `never`
              ? (this.shouldReduceMotion = !1)
              : this.reducedMotionConfig === `always`
                ? (this.shouldReduceMotion = !0)
                : (wu.current || er(), (this.shouldReduceMotion = Cu.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          (this.projection && this.projection.unmount(),
            B(this.notifyUpdate),
            B(this.render),
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
            (this.enteringChildren ??= new Set()),
            this.enteringChildren.add(e));
        }
        removeChild(e) {
          (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
        }
        bindToMotionValue(e, t) {
          if (
            (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
            t.accelerate && ul.has(e) && this.current instanceof HTMLElement)
          ) {
            let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate,
              s = new ol({
                element: this.current,
                name: e,
                keyframes: r,
                times: i,
                ease: a,
                duration: L(o),
              }),
              c = n(s);
            this.valueSubscriptions.set(e, () => {
              (c(), s.cancel());
            });
            return;
          }
          let n = Wc.has(e);
          n && this.onBindTransform && this.onBindTransform();
          let r = t.on(`change`, (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && z.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender());
            }),
            i;
          (s !== void 0 && s.MotionCheckAppearSync && (i = s.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (r(), i && i());
            }));
        }
        sortNodePosition(e) {
          return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
            ? 0
            : this.sortInstanceNodePosition(this.current, e.current);
        }
        updateFeatures() {
          let e = `animation`;
          for (e in Du) {
            let t = Du[e];
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
          for (let t = 0; t < Eu.length; t++) {
            let n = Eu[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            let r = e[`on` + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          ((this.prevMotionValues = $n(
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
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
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
              ((n = O(t === null ? void 0 : t, { owner: this })), this.addValue(e, n)),
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
              (typeof n == `string` && (os(n) || cs(n))
                ? (n = parseFloat(n))
                : !gu(n) && q.test(t) && (n = gn(e, t)),
              this.setBaseTarget(e, X(n) ? n.get() : n)),
            X(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          let { initial: t } = this.props,
            n;
          if (typeof t == `string` || typeof t == `object`) {
            let r = en(this.props, t, this.presenceContext?.custom);
            r && (n = r[e]);
          }
          if (t && n !== void 0) return n;
          let r = this.getBaseTargetFromProps(this.props, e);
          return r !== void 0 && !X(r)
            ? r
            : this.initialValues[e] !== void 0 && n === void 0
              ? void 0
              : this.baseTarget[e];
        }
        on(e, t) {
          return (this.events[e] || (this.events[e] = new ds()), this.events[e].add(t));
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
        scheduleRenderMicrotask() {
          Ql.render(this.render);
        }
      }),
      (ku = class extends Ou {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = Yl));
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
      (Au = class {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }),
      (ju = 0.999999999999),
      (Mu = 1.0000000000001),
      (Nu = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      (Pu = Uc.length),
      (Fu = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`)
            if (G.test(e)) e = parseFloat(e);
            else return e;
          return `${wr(e, t.target.x)}% ${wr(e, t.target.y)}%`;
        },
      }),
      (Iu = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          let r = e,
            i = q.parse(e);
          if (i.length > 5) return r;
          let a = q.createTransformer(e),
            o = typeof i[0] == `number` ? 0 : 1,
            s = n.x.scale * t.x,
            c = n.y.scale * t.y;
          ((i[0 + o] /= s), (i[1 + o] /= c));
          let l = J(s, c, 0.5);
          return (
            typeof i[2 + o] == `number` && (i[2 + o] /= l),
            typeof i[3 + o] == `number` && (i[3 + o] /= l),
            a(i)
          );
        },
      }),
      (Lu = {
        borderRadius: { ...Fu, applyTo: [...Xl] },
        borderTopLeftRadius: Fu,
        borderTopRightRadius: Fu,
        borderBottomLeftRadius: Fu,
        borderBottomRightRadius: Fu,
        boxShadow: Iu,
      }),
      (Ru = class extends ku {
        constructor() {
          (super(...arguments), (this.type = `html`), (this.renderInstance = Cr));
        }
        readValueFromInstance(e, t) {
          if (Wc.has(t)) return this.projection?.isProjecting ? Et(t) : Hc(e, t);
          {
            let n = Or(e),
              r = (zs(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == `string` ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return yr(e, t);
        }
        build(e, t, n) {
          Sr(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Dr(e, t, n);
        }
      }),
      (zu = class extends Ou {
        constructor() {
          (super(...arguments), (this.type = `object`));
        }
        readValueFromInstance(e, t) {
          if (kr(t, e)) {
            let n = e[t];
            if (typeof n == `string` || typeof n == `number`) return n;
          }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
          delete t.output[e];
        }
        measureInstanceViewportBox() {
          return Q();
        }
        build(e, t) {
          Object.assign(e.output, t);
        }
        renderInstance(e, { output: t }) {
          Object.assign(e, t);
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }),
      (Bu = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }),
      (Vu = { offset: `strokeDashoffset`, array: `strokeDasharray` }),
      (Hu = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`]),
      (Uu = new Set([
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
      (Wu = (e) => typeof e == `string` && e.toLowerCase() === `svg`),
      (Gu = class extends ku {
        constructor() {
          (super(...arguments),
            (this.type = `svg`),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Q));
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (Wc.has(t)) {
            let e = Kl(t);
            return (e && e.default) || 0;
          }
          return ((t = Uu.has(t) ? t : cn(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Nr(e, t, n);
        }
        build(e, t, n) {
          jr(e, t, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(e, t, n, r) {
          Mr(e, t, n, r);
        }
        mount(e) {
          ((this.isSVGTag = Wu(e.tagName)), super.mount(e));
        }
      }),
      (Ku = Su.length),
      (qu = [...xu].reverse()),
      (Ju = xu.length),
      (Yu = 1e-4),
      (Xu = 1 - Yu),
      (Zu = 1 + Yu),
      (Qu = 0.01),
      ($u = 0 - Qu),
      (ed = 0 + Qu),
      (td = [`x`, `scaleX`, `originX`]),
      (nd = [`y`, `scaleY`, `originY`]),
      (rd = Xl.length),
      (id = (e) => (typeof e == `string` ? parseFloat(e) : e)),
      (ad = (e) => typeof e == `number` || G.test(e)),
      (od = di(0, 0.5, ws)),
      (sd = di(0.5, 0.95, I)),
      (cd = (e, t) => e.depth - t.depth),
      (ld = class {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (Ae(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (je(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(cd), (this.isDirty = !1), this.children.forEach(e));
        }
      }),
      (ud = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          Ae(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            let n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            let r = n.instance;
            (!r || r.isConnected === !1) && !n.snapshot && (je(this.members, n), n.unmount());
          }
          e.scheduleRender();
        }
        remove(e) {
          if (
            (je(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)
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
      (dd = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }),
      (fd = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }),
      (pd = [``, `X`, `Y`, `Z`]),
      (md = 1e3),
      (hd = 0),
      (gd = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
      (_d = (e) => o !== void 0 && o.userAgent && o.userAgent.toLowerCase().includes(e)),
      (vd = _d(`applewebkit/`) && !_d(`chrome/`) ? Math.round : I),
      (yd = vi({
        attachResizeListener: (e, t) => pi(e, `resize`, t),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      })),
      (bd = (e) => !e.isLayoutDirty && e.willUpdate(!1)),
      (xd = { current: void 0 }),
      (Sd = vi({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!xd.current) {
            let e = new yd({});
            (e.mount(s), e.setOptions({ layoutScroll: !0 }), (xd.current = e));
          }
          return xd.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = t === void 0 ? `none` : t;
        },
        checkIsScrollRoot: (e) => s.getComputedStyle(e).position === `fixed`,
      })),
      Ps.reduce((e, t) => ((e[t] = (e) => B(e)), e), {}),
      ($ = C({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` })),
      (Cd = class extends m {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (bn(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            let e = t.offsetParent,
              n = (bn(e) && e.offsetWidth) || 0,
              r = (bn(e) && e.offsetHeight) || 0,
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
      (wd = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: i,
        custom: a,
        presenceAffectsLayout: o,
        mode: s,
        anchorX: c,
        anchorY: l,
        root: d,
      }) => {
        let f = N(qi),
          p = u(),
          m = E(r),
          h = E(i);
        is(() => {
          ((m.current = r), (h.current = i));
        });
        let g = !0,
          _ = n(
            () => (
              (g = !1),
              {
                id: p,
                initial: t,
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
          n(() => {
            f.forEach((e, t) => f.set(t, !1));
          }, [r]),
          w(() => {
            !r && !f.size && i && i();
          }, [r]),
          (e = b(Ki, {
            pop: s === `popLayout`,
            isPresent: r,
            anchorX: c,
            anchorY: l,
            root: d,
            children: e,
          })),
          b(as.Provider, { value: _, children: e })
        );
      }),
      (Td = (e) => e.key || ``),
      (Ed = ({
        children: e,
        custom: t,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: a = !0,
        mode: o = `sync`,
        propagate: s = !1,
        anchorX: c = `left`,
        anchorY: l = `top`,
        root: u,
      }) => {
        let [d, p] = Ji(s),
          m = n(() => Yi(e), [e]),
          g = s && !d ? [] : m.map(Td),
          v = E(!0),
          y = E(m),
          x = N(() => new Map()),
          S = E(new Set()),
          [C, w] = h(m),
          [T, ee] = h(m);
        is(() => {
          ((v.current = !1), (y.current = m));
          for (let e = 0; e < T.length; e++) {
            let t = Td(T[e]);
            g.includes(t) ? (x.delete(t), S.current.delete(t)) : x.get(t) !== !0 && x.set(t, !1);
          }
        }, [T, g.length, g.join(`-`)]);
        let D = [];
        if (m !== C) {
          let e = [...m];
          for (let t = 0; t < T.length; t++) {
            let n = T[t],
              r = Td(n);
            g.includes(r) || (e.splice(t, 0, n), D.push(n));
          }
          return (o === `wait` && D.length && (e = D), ee(Yi(e)), w(m), null);
        }
        let { forceRender: te } = _(ns);
        return b(f, {
          children: T.map((e) => {
            let n = Td(e),
              f = s && !d ? !1 : m === T || g.includes(n);
            return b(
              wd,
              {
                isPresent: f,
                initial: !v.current || r ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: a,
                mode: o,
                root: u,
                onExitComplete: f
                  ? void 0
                  : () => {
                      if (S.current.has(n)) return;
                      if (x.has(n)) (S.current.add(n), x.set(n, !0));
                      else return;
                      let e = !0;
                      (x.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (te?.(), ee(y.current), s && p?.(), i && i()));
                    },
                anchorX: c,
                anchorY: l,
                children: e,
              },
              n
            );
          }),
        });
      }),
      (Dd = C(null)),
      (Od = (e) => e === !0),
      (kd = (e) => Od(e === !0) || e === `id`),
      (Ad = ({ children: e, id: t, inherit: r = !0 }) => {
        let i = _(ns),
          a = _(Dd),
          [o, s] = Zi(),
          c = E(null),
          l = i.id || a;
        c.current === null &&
          (kd(r) && l && (t = t ? l + `-` + t : l),
          (c.current = { id: t, group: (Od(r) && i.group) || Hi() }));
        let u = n(() => ({ ...c.current, forceRender: o }), [s]);
        return b(ns.Provider, { value: u, children: e });
      }),
      (jd = C({ strict: !1 })),
      (Md = {
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
      (Nd = !1),
      (Pd = new Set(
        `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
          `.`
        )
      )),
      (Fd = (e) => !ta(e)));
    try {
      na(le(`@emotion/is-prop-valid`).default);
    } catch {}
    ((Id = C({})),
      (Ld = (e) => (t, n) => {
        let r = _(Id),
          i = _(as),
          a = () => aa(e, t, r, i);
        return n ? a() : N(a);
      }),
      (Rd = C({})),
      (zd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })),
      (Bd = () => ({ ...zd(), attrs: {} })),
      (Vd = [
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
      (Hd = Ld({ scrapeMotionValuesFromProps: Dr, createRenderState: zd })),
      (Ud = Ld({ scrapeMotionValuesFromProps: Nr, createRenderState: Bd })),
      (Wd = Symbol.for(`motionComponentSymbol`)),
      (Gd = class extends Au {
        constructor(e) {
          (super(e), (e.animationState ||= Lr(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          Yn(e) && (this.unmountControls = e.subscribe(this.node));
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
      (Kd = 0),
      (qd = class extends Au {
        constructor() {
          (super(...arguments), (this.id = Kd++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (typeof e == `string` || (typeof e == `object` && e && !Array.isArray(e))) {
                let n = tn(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              (this.node.animationState.reset(), this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      }),
      (Jd = { animation: { Feature: Gd }, exit: { Feature: qd } }),
      (Yd = (e) => (t) => tu(t) && e(t, Da(t))),
      (Xd = (e, t) => Math.abs(e - t)),
      (Zd = (e, t) => ((t.isSVG ?? ha(e)) ? new Gu(t) : new Ru(t, { allowProjection: e !== c }))),
      (Qd = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
      ($d = new Set([`auto`, `scroll`])),
      (ef = class {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r = s,
            dragSnapToOrigin: i = !1,
            distanceThreshold: a = 3,
            element: o,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = s),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(s);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              this.lastRawMoveEventInfo &&
                (this.lastMoveEventInfo = Aa(this.lastRawMoveEventInfo, this.transformPagePoint));
              let e = Ma(this.lastMoveEventInfo, this.history),
                t = this.startEvent !== null,
                n = ka(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              let { point: r } = e,
                { timestamp: i } = V;
              this.history.push({ ...r, timestamp: i });
              let { onStart: a, onMove: o } = this.handlers;
              (t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastRawMoveEventInfo = t),
                (this.lastMoveEventInfo = Aa(t, this.transformPagePoint)),
                z.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = Ma(
                e.type === `pointercancel`
                  ? this.lastMoveEventInfo
                  : Aa(t, this.transformPagePoint),
                this.history
              );
              (this.startEvent && n && n(e, a), r && r(e, a));
            }),
            !tu(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = a),
            (this.contextWindow = r || s));
          let c = Aa(Da(e), this.transformPagePoint),
            { point: l } = c,
            { timestamp: u } = V;
          this.history = [{ ...l, timestamp: u }];
          let { onSessionStart: d } = t;
          d && d(e, Ma(c, this.history));
          let f = { passive: !0, capture: !0 };
          ((this.removeListeners = ls(
            Oa(this.contextWindow, `pointermove`, this.handlePointerMove, f),
            Oa(this.contextWindow, `pointerup`, this.handlePointerUp, f),
            Oa(this.contextWindow, `pointercancel`, this.handlePointerUp, f)
          )),
            o && this.startScrollTracking(o));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t;) {
            let e = getComputedStyle(t);
            (($d.has(e.overflowX) || $d.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(s, { x: s.scrollX, y: s.scrollY }),
            s.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            s.addEventListener(`scroll`, this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (s.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
                s.removeEventListener(`scroll`, this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === s,
            r = n ? { x: s.scrollX, y: s.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
            i = { x: r.x - t.x, y: r.y - t.y };
          (i.x === 0 && i.y === 0) ||
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
              : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(e, r),
            z.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            B(this.updatePoint));
        }
      }),
      (tf = 0.35),
      (nf = new WeakMap()),
      (rf = class {
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
              (t && this.snapToCursor(Da(e).point), this.stopAnimation());
            },
            a = (e, t) => {
              let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = Sn(n)),
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
                  if (W.test(t)) {
                    let { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      let r = n.layout.layoutBox[e];
                      r && (t = j(r) * (parseFloat(t) / 100));
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && z.update(() => i(e, t), !1, !0),
                sn(this.visualElement, `transform`));
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
              if (r && this.currentDirection === null) {
                ((this.currentDirection = Ya(o)),
                  this.currentDirection !== null && i && i(this.currentDirection));
                return;
              }
              (this.updateAxis(`x`, t.point, o),
                this.updateAxis(`y`, t.point, o),
                this.visualElement.render(),
                a && z.update(() => a(e, t), !1, !0));
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
          this.panSession = new ef(
            e,
            { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              distanceThreshold: n,
              contextWindow: Qd(this.visualElement),
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
          o && z.postRender(() => o(n, r));
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
          if (!n || !Ja(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e];
          (this.constraints &&
            this.constraints[e] &&
            (a = Ia(a, this.constraints[e], this.elastic[e])),
            i.set(a));
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            n =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (e && va(e)
            ? (this.constraints ||= this.resolveRefConstraints())
            : e && n
              ? (this.constraints = Ra(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = Ua(t)),
            r !== this.constraints &&
              !va(e) &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              M((e) => {
                this.constraints !== !1 &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = Ha(n.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
          if (!e || !va(e)) return !1;
          let n = e.current,
            { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          r.root && ((r.root.scroll = void 0), r.root.updateScroll());
          let i = br(n, r.root, this.visualElement.getTransformPagePoint()),
            a = Ba(r.layout.layoutBox, i);
          if (t) {
            let e = t(ir(a));
            ((this.hasMutatedConstraints = !!e), e && (a = rr(e)));
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
              if (!Ja(o, t, this.currentDirection)) return;
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
          return (sn(this.visualElement, e), n.start(kl(e, n, 0, t, this.visualElement, !1)));
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
        snapToCursor(e) {
          M((t) => {
            let { drag: n } = this.getProps();
            if (!Ja(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: a } = r.layout.layoutBox[t],
                o = i.get() || 0;
              i.set(e[t] - J(n, a, 0.5) + o);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!va(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          M((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && this.constraints !== !1) {
              let n = t.get();
              r[e] = Va({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            M((t) => {
              if (!Ja(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: a } = this.constraints[t];
              n.set(J(i, a, r[t]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nf.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = Oa(e, `pointerdown`, (t) => {
              let { drag: n, dragListener: r = !0 } = this.getProps(),
                i = t.target,
                a = i !== e && Dn(i);
              n && r && !a && this.start(t);
            }),
            n,
            r = () => {
              let { dragConstraints: t } = this.getProps();
              va(t) &&
                t.current &&
                ((this.constraints = this.resolveRefConstraints()),
                (n ||= qa(e, t.current, () => this.scalePositionWithinConstraints())));
            },
            { projection: i } = this.visualElement,
            a = i.addEventListener(`measure`, r);
          (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), z.read(r));
          let o = pi(s, `resize`, () => this.scalePositionWithinConstraints()),
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
            (o(), t(), a(), c && c(), n && n());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = tf,
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
      (af = class extends Au {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = I),
            (this.removeListeners = I),
            (this.controls = new rf(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || I));
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
      (of = (e) => (t, n) => {
        e && z.update(() => e(t, n), !1, !0);
      }),
      (sf = class extends Au {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = I));
        }
        onPointerDown(e) {
          this.session = new ef(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Qd(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
          return {
            onSessionStart: of(e),
            onStart: of(t),
            onMove: of(n),
            onEnd: (e, t) => {
              (delete this.session, r && z.postRender(() => r(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = Oa(this.node.current, `pointerdown`, (e) =>
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
      (cf = !1),
      (lf = class extends m {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
            { projection: i } = e;
          (i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            cf && i.root.didUpdate(),
            i.addEventListener(`animationComplete`, () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (dd.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
            { projection: a } = n;
          return a
            ? ((a.isPresent = i),
              e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
              (cf = !0),
              r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== i &&
                (i
                  ? a.promote()
                  : a.relegate() ||
                    z.postRender(() => {
                      let e = a.getStack();
                      (!e || !e.members.length) && this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          let { visualElement: e, layoutAnchor: t } = this.props,
            { projection: n } = e;
          n &&
            ((n.options.layoutAnchor = t),
            n.root.didUpdate(),
            Ql.postRender(() => {
              !n.currentAnimation && n.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
            { projection: r } = e;
          ((cf = !0),
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
      (uf = { pan: { Feature: sf }, drag: { Feature: af, ProjectionNode: Sd, MeasureLayout: Xa } }),
      (df = class extends Au {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = Tn(
              e,
              (e, t) => (Za(this.node, t, `Start`), (e) => Za(this.node, e, `End`))
            ));
        }
        unmount() {}
      }),
      (ff = class extends Au {
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
          !e ||
            !this.node.animationState ||
            (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
        }
        onBlur() {
          !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = ls(
            pi(this.node.current, `focus`, () => this.onFocus()),
            pi(this.node.current, `blur`, () => this.onBlur())
          );
        }
        unmount() {}
      }),
      (pf = class extends Au {
        mount() {
          let { current: e } = this.node;
          if (!e) return;
          let { globalTapTarget: t, propagate: n } = this.node.props;
          this.unmount = jn(
            e,
            (e, t) => (
              Qa(this.node, t, `Start`),
              (e, { success: t }) => Qa(this.node, e, t ? `End` : `Cancel`)
            ),
            { useGlobalTarget: t, stopPropagation: n?.tap === !1 }
          );
        }
        unmount() {}
      }),
      (mf = new WeakMap()),
      (hf = new WeakMap()),
      (gf = (e) => {
        let t = mf.get(e.target);
        t && t(e);
      }),
      (_f = (e) => {
        e.forEach(gf);
      }),
      (vf = { some: 0, all: 1 }),
      (yf = class extends Au {
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
              threshold: typeof r == `number` ? r : vf[r],
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
          this.stopObserver = eo(this.node.current, a, o);
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > `u`) return;
          let { props: e, prevProps: t } = this.node;
          [`amount`, `margin`, `root`].some(to(e, t)) && this.startObserver();
        }
        unmount() {
          (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
        }
      }),
      (bf = {
        inView: { Feature: yf },
        tap: { Feature: pf },
        focus: { Feature: ff },
        hover: { Feature: df },
      }),
      (xf = { layout: { ProjectionNode: Sd, MeasureLayout: Xa } }),
      (Sf = Ea({ ...Jd, ...bf, ...uf, ...xf }, Zd)),
      (Cf = { renderer: Zd, ...Jd, ...bf }),
      { ...Cf, ...uf, ...xf },
      { ...Jd },
      (wf = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      wf.Enter,
      wf.Exit,
      wf.Any,
      wf.All,
      (Tf = class extends Sl {
        constructor() {
          (super(...arguments), (this.isEnabled = !1));
        }
        add(e) {
          (Wc.has(e) || ul.has(e)) && ((this.isEnabled = !0), this.update());
        }
        update() {
          this.set(this.isEnabled ? `transform` : `auto`);
        }
      }),
      (Ef = `easeInOut`),
      (Df = 20),
      (Of = (e) => typeof e == `number`),
      (kf = (e) => e.every(Of)),
      (Af = Io()),
      (jf = Lo),
      (Mf = { some: 0, all: 1 }),
      (Nf = () => ({})),
      Ld({ scrapeMotionValuesFromProps: Nf, createRenderState: Nf }),
      (Pf = {}),
      de(Pf, { Group: () => If, Item: () => Uf }),
      (Ff = C(null)),
      (If = x(qo)),
      (Lf = 50),
      (Rf = 25),
      (zf = new Set([`auto`, `scroll`])),
      (Bf = new WeakMap()),
      (Vf = new WeakMap()),
      (Hf = null),
      (Uf = x(ts)));
  }),
  Gf = t(() => {
    Wf();
  });
export {
  Bo as A,
  be as B,
  hi as C,
  zo as D,
  Jn as E,
  lo as F,
  pe as G,
  me as H,
  ao as I,
  De as K,
  bu as L,
  no as M,
  fo as N,
  jf as O,
  Ho as P,
  Oe as R,
  O as S,
  Hn as T,
  xe as U,
  ve as V,
  ye as W,
  _t as _,
  $ as a,
  ta as b,
  as as c,
  Tr as d,
  Af as f,
  Wf as g,
  Uo as h,
  ia as i,
  Go as j,
  Wo as k,
  Rd as l,
  z as m,
  Ed as n,
  F as o,
  B as p,
  ke as q,
  Ad as r,
  Sl as s,
  Gf as t,
  Tf as u,
  Ro as v,
  pt as w,
  Sf as x,
  X as y,
  ue as z,
};
//# sourceMappingURL=motion.CZCLJn0h.mjs.map
