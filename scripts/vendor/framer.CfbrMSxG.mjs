import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  P as u,
  S as d,
  T as f,
  _ as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as ee,
  y as M,
} from "./react.BKyTRiZ3.mjs";
import {
  A as te,
  B as ne,
  C as N,
  D as re,
  E as ie,
  F as ae,
  G as oe,
  H as se,
  I as ce,
  K as le,
  L as ue,
  M as de,
  N as fe,
  O as pe,
  P as me,
  S as he,
  T as ge,
  U as _e,
  V as P,
  W as ve,
  _ as ye,
  a as be,
  b as xe,
  c as Se,
  d as F,
  f as Ce,
  g as we,
  h as Te,
  i as Ee,
  j as De,
  k as Oe,
  l as ke,
  m as Ae,
  n as je,
  o as Me,
  p as Ne,
  r as Pe,
  s as Fe,
  u as Ie,
  v as Le,
  w as Re,
  x as ze,
  y as Be,
  z as Ve,
} from "./motion.AUYMciny.mjs";
function He(e) {
  return typeof e == `function`;
}
function Ue(e) {
  return typeof e == `boolean`;
}
function I(e) {
  return typeof e == `string`;
}
function L(e) {
  return Number.isFinite(e);
}
function We(e) {
  return Array.isArray(e);
}
function R(e) {
  return typeof e == `object` && !!e && !We(e);
}
function Ge(e) {
  for (let t in e) return !1;
  return !0;
}
function Ke(e) {
  return e === void 0;
}
function qe(e) {
  return e === null;
}
function Je(e) {
  return e == null;
}
function Ye(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function Xe(e) {
  return R(e) && He(e.return);
}
function Ze(e) {
  return R(e) && He(e.then);
}
function Qe(e) {
  return e instanceof Promise;
}
function $e(e) {
  return `url('${et(e)}')`;
}
function et(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function tt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function nt(e, t, n) {
  if (ph.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (ph.set(e, t), t))
    .catch((t) => {
      throw (ph.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(ah), ph.set(e, r));
}
function rt(e, t) {
  oh && (mh.set(e, t), hh.has(e) && nt(e, t, `registered loader ${e}`));
}
function it() {
  if (!oh) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(gh),
      i = r ? e.slice(gh.length) : e;
    if (!i) continue;
    hh.add(i);
    let a = mh.get(i);
    a ? nt(i, a, `registered loader ${i}`) : r && nt(i, () => import(n), n);
  }
}
function at(e) {
  return typeof e == `object` && !!e && !T(e) && vh in e;
}
function ot(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function st(e, t = `default`, n) {
  n && rt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !ph.has(n)) return;
      let e = ph.get(n);
      Qe(e) ? s(() => e) : (i = ot(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ot(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (A(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && _h !== void 0 && _h.add(n), !i)) throw s(e);
      return E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function ct(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function lt(e) {
  return e === null || !(bh in e) ? !1 : typeof e.equals == `function`;
}
function ut(e, t) {
  return e === t || (e !== e && t !== t);
}
function dt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!ut(e[r], t[r])) return !1;
  return !0;
}
function ft(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!vt(e[r], t[r], !0)) return !1;
  return !0;
}
function pt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!ut(r, t.get(n))) return !1;
  return !0;
}
function mt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!vt(r, t.get(n), !0)) return !1;
  return !0;
}
function ht(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function gt(e, t) {
  let n = yh(e);
  if (n.length !== yh(t).length) return !1;
  for (let r of n)
    if (!ct(t, r) || (!(r === `_owner` && ct(e, `$$typeof`) && e.$$typeof) && !ut(e[r], t[r])))
      return !1;
  return !0;
}
function _t(e, t) {
  let n = yh(e);
  if (n.length !== yh(t).length) return !1;
  for (let r of n)
    if (!ct(t, r) || (!(r === `_owner` && ct(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function vt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? ft(e, t) : dt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? mt(e, t) : pt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return ht(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? lt(e) && lt(t)
        ? e.equals(t)
        : n
          ? _t(e, t)
          : gt(e, t)
      : !1;
}
function yt(e, t, n = !0) {
  try {
    return vt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function bt(e) {
  return h.useCallback((t) => e[t], [e]);
}
function xt({ api: e, children: t }) {
  return E(xh.Provider, { value: e, children: t });
}
function St() {
  return h.useContext(xh);
}
function Ct({ routes: e, children: n }) {
  let r = bt(e),
    i = t(() => ({ getRoute: r }), [r]);
  return E(xh.Provider, { value: i, children: n });
}
function wt() {
  let e = St(),
    n = C(Sh),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return t(() => {
    if (!(!r || !o)) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function Tt(e) {
  let t = St();
  if (e) return t.getRoute?.(e);
}
function Et(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Dt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Ot(e, t) {
  let n = wt(),
    r = Tt(t) ?? n;
  return h.useMemo(() => (r ? Et(r, e) : e), [e, r]);
}
function z(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function B(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function kt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Lh
  );
}
function At(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function jt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Mt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = jt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Nt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Pt(e) {
  return Rh.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Ft(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Fh);
}
function It(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Ph);
}
function Lt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Ft(+e);
}
function Rt(e) {
  for (var t = e.length - 1; t >= 0 && !Lt(e[t]); t--);
  return t + 1;
}
function zt(e) {
  let t = Object.keys(e);
  return ((t.length = Rt(t)), t);
}
function Bt(e) {
  return new Uint8Array(e).toBase64();
}
function Vt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Ht(e) {
  return Buffer.from(e).toString(`base64`);
}
function Ut(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Wt(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Gt(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Kt(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function qt(e, t, n) {
  return Jt(JSON.parse(e), t, n);
}
function Jt(e, t, n) {
  let r = Kt(Kh, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === Dh) return r.fromPrimitive(void 0);
    if (e === kh) return r.fromPrimitive(NaN);
    if (e === Ah) return r.fromPrimitive(1 / 0);
    if (e === jh) return r.fromPrimitive(-1 / 0);
    if (e === Mh) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= new Set()), o.has(t))) throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              if (c[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, c[e], s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(Hh(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === Nh) {
        let t = c[1];
        if (!It(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Ft(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== Oh && r.set(t, e, s(n));
        }
      }
    else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function Yt(e, t, n) {
  let r = Xt(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function Xt(e, t, n, r) {
  let i = Kt(Gh, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return Dh;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return kh;
      if (f === 1 / 0) return Ah;
      if (f === -1 / 0) return jh;
      if (f === 0 && 1 / f < 0) return Mh;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new Ih(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new Ih(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = Zt(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new Ih(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      });
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Mt(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Mt(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Mt(r)},"${a}"]` : `["RegExp",${Mt(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += Oh;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + Nh + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += Oh));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? Zt(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${Vh(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Mt(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new Ih(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new Ih(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new Ih(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(Pt(r)), (m += `,${Mt(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new Ih(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(Pt(a)),
                (m += `${Mt(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function Zt(e) {
  let t = typeof e;
  return t === `string`
    ? Mt(e)
    : e === void 0
      ? Dh.toString()
      : e === 0 && 1 / e < 0
        ? Mh.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function Qt(e, t, n = `lazy`) {
  switch ((qh.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function $t(e) {
  return I(e) && (e === `` || Yh.test(e));
}
function en() {
  return { [Xh.QueryCache]: new Map(), [Xh.CollectionUtilsCache]: new Map() };
}
function tn() {
  if (!oh) return;
  if (Zh !== void 0) return Zh;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Zh = qt(e.text) ?? en();
    } catch (e) {
      ((Zh = en()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      lh(() => {
        (e?.remove(), (e = null));
      }),
      Zh
    );
  }
}
function nn(e, t) {
  let n = tn();
  return n ? n[e].has(t) : !1;
}
function rn(e, t) {
  let n = tn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function an(e) {
  return e?.id ?? wh;
}
function on(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function sn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (tg.has(n)) return tg.get(n);
    let r = new rg(n, t);
    return (tg.set(n, r), r);
  };
}
function cn({ children: e, collectionUtils: n }) {
  let r = t(() => ({ get: sn(n) }), [n]);
  return E(ng.Provider, { value: r, children: e });
}
function ln() {
  return C(ng);
}
function un(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function dn() {
  return o === void 0 ? void 0 : o;
}
function fn() {
  let e = dn();
  return e ? ig.test(e.platform) : !1;
}
function pn() {
  let e = dn();
  return e
    ? ag.test(e.platform)
      ? !0
      : og.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function mn() {
  return fn() || pn();
}
function hn() {
  let e = dn();
  return e ? sg.test(e.userAgent) : !1;
}
function gn() {
  let e = dn();
  return e ? cg.test(e.userAgent) && lg.test(e.vendor) && !hn() : !1;
}
function _n() {
  let e = dn();
  return e ? ug.test(e.userAgent) && dg.test(e.vendor) : !1;
}
function vn() {
  let e = dn();
  return e ? fg.test(e.userAgent) : !1;
}
function yn() {
  return typeof document == `object`;
}
function bn() {
  let e = dn();
  if (!e) return -1;
  let t = pg.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function xn() {
  let e = dn();
  return e ? mg.test(e.userAgent) : !1;
}
function Sn() {
  return !1;
}
function Cn() {
  let e = dn();
  return e && hg.test(e.userAgent) ? `tablet` : e && gg.test(e.userAgent) ? `phone` : `desktop`;
}
function wn() {
  return Cn() === `desktop`;
}
function Tn(e) {
  return mn() ? e.metaKey : e.ctrlKey;
}
function En() {}
async function Dn() {}
function On(e) {
  return typeof e == `function` ? e() : e;
}
function kn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function An(e, t) {
  let n = e?.priority,
    r = kn();
  return n === `background`
    ? (t?.() ?? un(1))
    : r?.yield
      ? r.yield(e).catch(En)
      : r?.postTask
        ? r.postTask(En, e).catch(En)
        : t
          ? t()
          : n === `user-blocking`
            ? bg
            : un(0);
}
function jn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function c() {
    return document.hidden ? (o(), !0) : !1;
  }
  function l() {
    yn() && (document.addEventListener(`visibilitychange`, c), s.addEventListener(`pagehide`, o));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, xg),
        e(() => {
          An(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return yn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? u(a) : An(a, t);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? _g : vg),
        s = yn() && document.hidden ? yg : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !yn() && !t ? (n ? void 0 : bg) : n ? m(i, r) : f(i);
  }
  return h;
}
function Mn(e, t = !1) {
  let n = ``;
  if (s !== void 0)
    if (t) n = s.location.search;
    else {
      let e = s.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? s.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Nn(n, e) : e;
}
function Nn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== wg && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Pn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Tg)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !I(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = Qe(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = Qe(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = Qe(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Fn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function In({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Pn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Fn(u.path, t.slug)),
    o && u.path && (u.path = Mn(u.path, !0)),
    u
  );
}
async function Ln({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Tg)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (I(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Rn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === wh) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Ln({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function zn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Rn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await In({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return yt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Bn() {
  return h.useContext(Og);
}
function Vn() {
  let e = ln(),
    { getRoute: t } = St(),
    { activeLocale: n, locales: i } = Bn();
  return r(
    (r, a, o) => {
      if (!r || !t) return;
      let s = t(r),
        { pathVariables: c } = a;
      return Un(
        s,
        {
          routeId: r,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: i,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, i]
  );
}
function Hn(e, t = !0) {
  let n = Vn();
  A(() => {
    if (!(!t || !Ag)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Un(e, t, n = {}) {
  if (!Ag || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !at(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Cg({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Wn(n, e, t, r));
    } catch {}
  }
}
async function Wn(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await zn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === wh),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Gn(e, t) {
  return e.replace(Tg, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Kn() {
  if (jg) return;
  jg = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (s.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((s.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), Qt(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function qn({ children: e, value: t }) {
  return E(Mg.Provider, { value: t, children: e });
}
function Jn() {
  return h.useContext(Mg);
}
function Yn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Xn(e) {
  let t = Ng,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Pg;) ((n = e.next(t)), r.push(n.value), (t += Ng));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Ng }
  );
}
function Zn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Qn(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = Zn(e.x),
    [a, o] = Zn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function $n(e) {
  let [t, n] = Zn(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function er(e) {
  let { x: t, y: n } = Qn(e);
  return Math.hypot(Math.max(t, s.innerWidth - t), Math.max(n, s.innerHeight - n));
}
function tr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function nr(e) {
  return e ? Lg[e] : void 0;
}
function rr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (ir(t)) {
    let { easing: e, duration: n } = Xn(
      fe({ keyframes: [0, 1], ...ar(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = nr(n?.mask?.type),
    o = tr(n, `start`, e, a),
    s = tr({ ...Rg, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function ir(e) {
  return e.type === `spring`;
}
function ar(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function or({ exit: e = Bg, enter: t }) {
  let n = document.createElement(`style`);
  n.id = zg;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += rr(`exit`, e)),
    (r += rr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function sr() {
  lh(() => {
    N.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(zg);
      e && document.head.removeChild(e);
    });
  });
}
function cr() {
  return !!document.startViewTransition;
}
function lr(e) {
  return new Promise((t) => {
    N.render(() => {
      (performance.mark(`framer-vt-style`), or(e), t());
    });
  });
}
async function ur(e, t, n) {
  if (!cr()) {
    e();
    return;
  }
  if ((await lr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Vg),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), sr());
      })
      .catch(Vg),
    r
  );
}
function dr() {
  let e = Jn(),
    t = M(void 0);
  return (
    A(() => {
      t.current &&= (t.current(), void 0);
    }),
    r(
      (n, r, i, a) => {
        let o = Yn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return ur(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function fr(e, t) {
  lh(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function pr(e, t) {
  lh(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function mr(e) {
  lh(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function hr(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await Cg({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function gr(e) {
  let t = M(new Set());
  return (
    hr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    r(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function _r(e) {
  return R(e) && `routeId` in e;
}
function vr(e = s.history.state) {
  return _r(e) ? e : void 0;
}
function yr(e) {
  return e?.entryId;
}
function br(e) {
  Wg = e;
}
function xr() {
  return Wg;
}
function Sr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Cr(e, t) {
  return wr(e, yr(e) ?? yr(t));
}
function wr(e, t = Sr()) {
  return { ...e, entryId: t };
}
function Tr(e, t) {
  (performance.mark(`framer-history-replace`), br(Cr(e, vr())), t && fr(t, s.location.href));
  let n =
    !t || t === s.location.href
      ? s.History.prototype.replaceState.bind(s.history)
      : s.history.replaceState.bind(s.history);
  try {
    n(Wg, ``, t);
  } catch {}
}
function Er(e) {
  (performance.mark(`framer-history-replace`),
    br(wr(e)),
    History.prototype.replaceState.call(s.history, Wg, ``, void 0));
}
function Dr(e, t) {
  (performance.mark(`framer-history-push`), br(wr(e)), fr(t, s.location.href), Kn());
  try {
    s.history.pushState(Wg, ``, t);
  } catch {}
}
function Or({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: i,
  initialCanonicalPathVariables: a,
}) {
  f(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let o = s.location.hash ? s.location.hash.slice(1) : void 0;
    Tr({
      ...vr(),
      routeId: t,
      hash: o,
      pathVariables: n,
      localeId: r,
      contentLocaleId: i,
      canonicalPathVariables: a,
    });
  }, []);
}
function kr(e, t, n) {
  let i = dr(),
    a = gr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: c } = e,
    l = c ? `manual` : `after-transition`,
    u = M(void 0),
    d = r(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    f = r(
      async ({ state: e }) => {
        if (!_r(e)) return;
        let r = a({ popstate: !0 }),
          c = Dt();
        (r.promise.finally(c), yr(xr()) !== (yr(e) ?? yr(vr())) && o(), br(e));
        let {
            routeId: u,
            hash: f,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = I(f) ? f : s.location.hash ? s.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                u,
                I(m) ? m : void 0,
                _,
                s.location.pathname + s.location.search + s.location.hash,
                R(p) ? p : void 0,
                h,
                g,
                !0,
                r,
                !1
              ),
              !0);
          },
          b = l === `after-transition`;
        (await Promise.resolve(i(t.current, u, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || d();
          }),
          await r.promise,
          b && d(),
          await s.navigation?.transition?.finished.catch(ah),
          Ug(),
          fr(s.location.href));
      },
      [t, a, o, d, n, i, l]
    ),
    p = r(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        _r(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                u.current = { resolve: e, reject: t };
              }),
                (u.current = void 0));
            },
            scroll: l,
          });
      },
      [l]
    );
  A(
    () => (
      s.addEventListener(`popstate`, f),
      Gg && s.navigation.addEventListener(`navigate`, p),
      () => {
        (s.removeEventListener(`popstate`, f),
          Gg && s.navigation.removeEventListener(`navigate`, p));
      }
    ),
    [f, p]
  );
}
async function Ar(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + Fn(Gn(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + i), !0)
    : !1;
}
function jr() {
  let e = ln();
  return r((t) => Mr({ ...t, collectionUtils: e }), [e]);
}
async function Mr({ sitePrefix: e, ...t }) {
  let n = await In(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!I(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Ar(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Nr(e) {
  let t = M(Promise.resolve()),
    n = M(),
    i = r(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return r(
    (e, r, a) => {
      if (!Gg) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = r),
        s.navigation.addEventListener(`navigate`, i),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), s.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Pr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Fr(e) {
  return Pr(e.trim().toLowerCase().replace(Kg, `-`));
}
function Ir({ children: e, value: t }) {
  return E(Jg.Provider, { value: t, children: e });
}
function Lr() {
  return C(Jg);
}
function Rr(e, t) {
  let n = y(() => ({ inputs: t, result: e() }))[0],
    r = M(!0),
    i = M(n),
    a =
      r.current || (t && i.current.inputs && yt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    A(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function zr(e, t) {
  return Rr(() => e, t);
}
function Br() {
  return s.location.search;
}
function Vr() {
  return ``;
}
function Hr(e) {
  return (
    Xg.add(e),
    s.addEventListener(`popstate`, e),
    () => {
      (Xg.delete(e), s.removeEventListener(`popstate`, e));
    }
  );
}
function Ur() {
  for (let e of Xg) e();
}
function Wr({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = Lr() === `preview`,
    [o, l] = y(``),
    u = M(t);
  Yg(() => {
    u.current = t;
  }, [t]);
  let d = i(Hr, Br, Vr),
    f = p(d),
    m = t !== p(t),
    h = a ? o : m ? d : f,
    g = r(
      async (e) => {
        if (a) {
          c(() => {
            l((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await Cg({ continueAfter: `paint` }), r || n() || u.current !== i)) return;
        let o = vr();
        if (!o) return;
        let d = new URL(s.location.href),
          f = e(d.searchParams).toString();
        d.search = f;
        let p = o.queryParamBackAnchorSearch,
          m = s.location.search.slice(1),
          h = p === void 0 && f !== m,
          g = p !== void 0 && f === p,
          _ = { ...o, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = d.toString();
        (h || g ? Dr(_, v) : Tr(_, v), Ur());
      },
      [n, a, t]
    ),
    _ = Rr(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: g }), [h, g]);
  return E(Zg.Provider, { value: _, children: e });
}
function Gr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Kr(e),
    [r, i] = Kr(t),
    a = qr(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Kr(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function qr(e, t) {
  if (e === t || ((e = `/` + Jr(e)), (t = `/` + Jr(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = e_(e, 1 + s);
    if (n !== e_(t, 1 + s)) break;
    n === $g && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (e_(t, 1 + s) === $g) return n_(t, 1 + s + 1);
      if (s === 0) return n_(t, 1 + s);
    } else r > a && (e_(e, 1 + s) === $g ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || e_(e, s) === $g) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${n_(t, 1 + o)}`;
}
function Jr(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = e_(e, o);
    else if (a_(a)) break;
    else a = $g;
    if (a_(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || e_(t, t.length - 1) !== Qg || e_(t, t.length - 2) !== Qg) {
            if (t.length > 2) {
              let e = t_(t, i_);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = n_(t, 0, e)), (n = t.length - 1 - t_(t, i_))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          r_ && ((t += t.length > 0 ? `${i_}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${i_}${n_(e, r + 1, o)}`) : (t = n_(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Qg && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Yr(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || s.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Xr(e, t) {
  let n = e.replace(Tg, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function Zr(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Xr(i, r);
  }
  if (e.includes(`:`)) return Xr(e, r);
  let i = t.elements?.[e];
  return i ? Xr(i, r) : e;
}
function Qr(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  }
) {
  let m;
  if ((i && e && (m = Zr(i, e, o)), u)) return m ?? ``;
  let h = t ?? `/`;
  (n && f && (h = n[f] ?? h), r && (h = h.replace(Tg, (e, t) => String(r[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(Tg, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (o_.has(h) && s !== void 0) {
      let e = Yr(d);
      g = Gr(s.location.pathname, e + g);
    } else g = Gr(h, g);
  else g = Fn(g, p);
  let y = _ || v;
  return ((l || y) && (g = Mn(g, y)), m && (g = `${g}#${m}`), g);
}
function $r(e) {
  return s_ in e && e[s_] === 1;
}
function ei() {
  if (!c_) return;
  ((u_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  c_.forEach((n) => t.addEventListener(n, l_, e));
}
function ti() {
  return (
    A(() => {
      if (!u_ || !c_) return;
      let e = { capture: !0 },
        t = document.body;
      (c_.forEach((n) => t.removeEventListener(n, l_, e)),
        (c_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ni(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ri(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function ii() {
  ((A_ = new k_()), A_.render.markStart());
}
function ai() {
  (S(() => {
    A_?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      A_?.useLayoutEffects.markRouterStart();
    }, []),
    A(() => {
      A_?.useEffects.markRouterStart();
    }, []));
}
function oi() {
  (S(() => {
    (A_?.render.markEnd(), A_?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((A_?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        j_ = !0;
        return;
      }
      N.read(() => {
        (A_?.browserRendering.requestAnimationFrame.markStart(),
          A_?.unattributedHydrationOverhead.measure());
      });
    }, []),
    A(() => {
      (A_?.useEffects.markStart(),
        A_?.browserRendering.hasStarted ||
          (A_?.mutationEffects.measure(), A_?.useEffects.markAreSynchronous()));
    }, []));
}
function si() {
  (S(() => {
    A_?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (A_?.useLayoutEffects.markEnd(),
        !(j_ || document.visibilityState !== `visible`) &&
          N.read(() => {
            (A_?.browserRendering.requestAnimationFrame.markEnd(),
              Cg().then(() => {
                A_?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    A(() => {
      A_?.useEffects.markEnd();
    }, []));
}
function ci() {
  return (oi(), null);
}
function li() {
  return (si(), null);
}
function ui(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return h.isValidElement(e) ? h.cloneElement(e, n) : E(e, { ...n });
}
function di() {
  return F_;
}
function fi(e) {
  if (I_?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      z(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: hi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          z(t, `localizedPath must be defined`);
          let i = hi(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    I_ = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: I_.pathRoutes,
    paths: I_.paths,
    pathRoutesLocalized: I_.pathRoutesLocalized,
    pathsLocalized: I_.pathsLocalized,
  };
}
function pi(e, t, n = !0, r = di()) {
  return mi(e, t, r, n);
}
function mi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = fi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = gi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = gi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = gi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = gi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function hi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function gi(e, t) {
  let n = [],
    r = _i(t).replace(Tg, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function _i(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function vi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function yi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = vi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function bi(e, t) {
  let n = e.toLowerCase(),
    r = yi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function xi(e) {
  if (s === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in s)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Si() {
  let e = xi(`abtests`);
  return new URLSearchParams(e?.description);
}
function Ci(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function wi(e, t) {
  for (let [n, r] of t) Ci(e, n, r);
}
function Ti(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ei(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Di(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    Ei(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (wi(e, Si()), Ti(e), n);
}
function Oi(e) {
  (A(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    S(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function ki(e, ...t) {
  L_.has(e) || (L_.add(e), console.warn(e, ...t));
}
function Ai(e, t, n) {
  ki(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ji(e) {
  return (
    typeof e == `object` &&
    !!e &&
    B_ in e &&
    e[B_] instanceof Function &&
    V_ in e &&
    e[V_] instanceof Function
  );
}
function Mi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = z_(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Ni(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Pi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Fi(e) {
  return Math.round(e * 2) / 2;
}
function Ii(e, t) {
  return { x: e, y: t };
}
function Li(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Ri(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function zi(e) {
  let t = Bi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Bi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Vi(e, t, n) {
  return (
    (G_.rgb_r = e / 255),
    (G_.rgb_g = t / 255),
    (G_.rgb_b = n / 255),
    G_.rgbToHsluv(),
    { h: G_.hsluv_h, s: G_.hsluv_s, l: G_.hsluv_l }
  );
}
function Hi(e, t, n, r = 1) {
  return (
    (G_.hsluv_h = e),
    (G_.hsluv_s = t),
    (G_.hsluv_l = n),
    G_.hsluvToRgb(),
    { r: G_.rgb_r * 255, g: G_.rgb_g * 255, b: G_.rgb_b * 255, a: r }
  );
}
function Ui(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Wi(e, t, n) {
  return {
    r: Ri(e) ? Zi(e, 255) * 255 : 0,
    g: Ri(t) ? Zi(t, 255) * 255 : 0,
    b: Ri(n) ? Zi(n, 255) * 255 : 0,
  };
}
function Gi(e, t, n, r) {
  let i = [
    ea(Math.round(e).toString(16)),
    ea(Math.round(t).toString(16)),
    ea(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Ki(e, t, n) {
  let r,
    i,
    a = Zi(e, 255),
    o = Zi(t, 255),
    s = Zi(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function qi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Ji(e, t, n) {
  let r, i, a;
  if (((e = Zi(e, 360)), (t = Zi(t * 100, 100)), (n = Zi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = qi(s, o, e + 1 / 3)), (i = qi(s, o, e)), (a = qi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Yi(e, t, n) {
  ((e = Zi(e, 255)), (t = Zi(t, 255)), (n = Zi(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Xi(e, t, n) {
  ((e = Zi(e, 360) * 6), (t = Zi(t * 100, 100)), (n = Zi(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Zi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Qi(e) && (e = `100%`);
    let t = $i(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Qi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function $i(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ea(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ta(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = U_[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = K_.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = K_.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = K_.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: zi(r[2] ?? ``), l: zi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = K_.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: zi(r[2] ?? ``),
              l: zi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = K_.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: zi(r[2] ?? ``), v: zi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = K_.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: zi(r[2] ?? ``),
                  v: zi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = K_.hex8.exec(t))
                ? {
                    r: na(r[1] ?? ``),
                    g: na(r[2] ?? ``),
                    b: na(r[3] ?? ``),
                    a: ra(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = K_.hex6.exec(t))
                  ? {
                      r: na(r[1] ?? ``),
                      g: na(r[2] ?? ``),
                      b: na(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = K_.hex4.exec(t))
                    ? {
                        r: na(`${r[1]}${r[1]}`),
                        g: na(`${r[2]}${r[2]}`),
                        b: na(`${r[3]}${r[3]}`),
                        a: ra(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = K_.hex3.exec(t))
                      ? {
                          r: na(`${r[1]}${r[1]}`),
                          g: na(`${r[2]}${r[2]}`),
                          b: na(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function na(e) {
  return parseInt(e, 16);
}
function ra(e) {
  return na(e) / 255;
}
function ia(e) {
  let t = q_.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function aa(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function oa({ r: e, g: t, b: n, a: r }) {
  return { r: aa(e), g: aa(t), b: aa(n), a: r };
}
function sa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ca({ r: e, g: t, b: n, a: r }) {
  return { r: sa(e), g: sa(t), b: sa(n), a: r };
}
function la({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function ua(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function da({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ua(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function fa(e) {
  return Z_(X_(e));
}
function pa(e) {
  return Y_(J_(e));
}
function ma(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = _a({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = ha(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? _a(e)
              : va(e)),
    i
  );
}
function ha(e) {
  let t = ta(e);
  if (t) return t.format === `hsl` ? va(t) : t.format === `hsv` ? ga(t) : _a(t);
}
function ga(e) {
  let t = Xi(e.h, e.s, e.v);
  return { ...Ki(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ya(e.a) };
}
function _a(e) {
  let t = Wi(e.r, e.g, e.b);
  return { ...Ki(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ya(e.a) };
}
function va(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ri(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ri(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Bi(e.s)),
    (r = Ri(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Bi(e.l)),
    (i = Ji(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ya(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function ba() {
  return qh.location.origin === `https://screenshot.framer.invalid`;
}
function xa({ children: e }) {
  if (C(dv).top) return E(g, { children: e });
  let t = M({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = M({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = M(new Set()).current,
    a = M({
      getLayoutId: r(({ id: e, name: r, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = r ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = r || e;
        if (!a && !i.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            z(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === r;
              d && !i.has(d) && (!r || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === r;
            if (u && !i.has(u) && (!r || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), i.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, r] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[r] = t), i.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = r || f || e,
          { layoutId: m, value: h } = Sa(p, (t.current.count[o][p] ?? -1) + 1, i);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !r)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: r(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return E(dv.Provider, { value: a, children: e });
}
function Sa(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ca({ enabled: e = !0, ...n }) {
  let r = C(dv),
    i = t(() => ({ ...r, enabled: e }), [e]);
  return E(dv.Provider, { ...n, value: i });
}
function wa(e) {
  let t = M(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ta(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ea(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: pv,
    children: [
      E(`div`, { className: `text`, style: hv, children: r }),
      i && E(`div`, { className: `text`, style: gv, children: i }),
    ],
  });
}
function Ea(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Da() {
  let e = q.current();
  return e === q.canvas || e === q.export;
}
function Oa() {
  let [e] = y(() => Da());
  return e;
}
function ka(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Aa(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Dv) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function ja(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Ma(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Ov) continue;
    let n = ja(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${ja(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Na(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Ev) {
    let n = ja(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Pa(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Na(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Ma(n, t, Aa(t.pixelWidth, t.pixelHeight)) };
}
function Fa() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: $e(J.imagePlaceholderSvg),
  };
}
function Ia(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function La(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ra(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Tv,
    objectPosition: La(e.positionX, e.positionY),
    objectFit: Ia(e.fit),
  };
}
function za(e) {
  let t = h.useRef(e ? `auto` : `async`),
    n = r((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    i = r(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    a = r(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: i, onImageMount: a };
}
function Ba({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = J.useImageSource(e, t, n),
    s = Ra(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = za(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Pa(e.nodeFixedSize, e, o);
  return E(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Va({ image: e, containerSize: t, nodeId: n }) {
  let r = h.useRef(null),
    i = J.useImageElement(e, t, n),
    a = Ra(e);
  return (
    h.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    E(`div`, { ref: r, style: { display: `contents`, ...Tv } })
  );
}
function Ha({ nodeId: e, image: t, containerSize: n }) {
  let r = h.useRef(null),
    i = J.useImageSource(t, n, e);
  return (
    h.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ra(t);
      J.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    E(`div`, { ref: r, style: { display: `contents`, ...Tv } })
  );
}
function Ua({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (I(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = L(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Fi(e * (t.pixelWidth / 2)),
        s = J.useImageSource(t, n);
      ((r = {
        ...kv,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: La(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        q.current() === q.canvas
          ? J.canRenderOptimizedCanvasImage(J.useImageSource(t))
            ? E(Ha, { image: t, ...n })
            : E(Va, { image: t, ...n })
          : E(Ba, { image: t, avoidAsyncDecoding: q.current() === q.export, ...n });
  let o = a ? kv : (r ?? { ...kv, ...Fa() });
  return i
    ? E(te.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : E(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Wa(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function Ga(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Tv,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), E(te.div, { style: n }))
    : (Wa(e, n, !1), E(te.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Ka(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function qa(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !jv.isImageObject(t)) return;
  let r = null;
  if (((r = I(n) ? { alt: ``, src: n } : z_.get(t, null)), jv.isImageObject(r))) return Ka(r, e);
}
function Ja(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ya(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Xa(e) {
  return e != null && typeof e != `boolean` && !Ja(e);
}
function V(e) {
  return Number.isFinite(e);
}
function Za(e) {
  return (Math.PI / 180) * e;
}
function Qa(e) {
  return Ke(e) ? !1 : e === 2 || e === 5;
}
function $a(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function eo(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return to(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function to(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      B(e, `unknown constraint key`);
  }
}
function no(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(eo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(eo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ro(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(eo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(eo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function io(e, t, n, r, i) {
  let a = ro(V(e) ? e : Iv, n, r, i),
    o = no(V(t) ? t : Lv, n, r, i);
  return (
    V(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (V(n.left) && V(n.right)
        ? (o = a / n.aspectRatio)
        : (V(n.top) && V(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ao(e, t) {
  return !V(e) || !V(t) ? null : e + t;
}
function oo(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function so(e) {
  return !e._constraints || oo(e) ? !1 : e._constraints.enabled;
}
function co(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    V(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    V(n) && V(r) ? { width: n, height: r } : null
  );
}
function lo(e) {
  let t = co(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return V(n) && V(r) ? { x: n, y: r, ...t } : null;
}
function uo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!so(e) || r) return lo(e);
  let i = fo(e),
    a = po(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Fv.toRect(i, o, null, n, null);
}
function fo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Pv.quickfix({
      left: V(t),
      right: V(n),
      top: V(r),
      bottom: V(i),
      widthType: $a(c),
      heightType: $a(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function po(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function mo() {
  return h.useContext(Rv).parentSize;
}
function ho(e) {
  return typeof e == `object`;
}
function go(e) {
  return ho(e) ? e.width : e;
}
function _o(e) {
  return ho(e) ? e.height : e;
}
function vo(e, t) {
  return E(zv, { parentSize: t, children: e });
}
function yo(e) {
  return uo(e, mo(), !0);
}
function bo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function xo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function So(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? te[e] : te.div;
}
function Co(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function wo(e, t, n = Vv) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Hv) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Hv = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Hv;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function To() {
  return ba() ? q.preview : q.current();
}
function Eo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? ry.variable(e) : e === `` ? `""` : e;
}
function Do(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Oo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return ko(r);
    case `lower-roman`:
    case `upper-roman`:
      return jo(r);
    default:
      return Oo(r);
  }
}
function Oo(e) {
  return String(e).length;
}
function ko(e) {
  let t = 1;
  for (; Ao(t) < e;) t++;
  return t;
}
function Ao(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function jo(e) {
  let t = 0;
  for (let n of oy) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function H(e, t) {
  return ry.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Mo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function No() {
  return q.current() === q.preview ? by.value : yy.value;
}
function Po(e) {
  return Kv(e, No, `framer-lib-combinedCSSRules`);
}
function Fo(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Io(e, t) {
  let n = {};
  return (
    q.current() === q.canvas &&
      Fo(n, xy ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Lo(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Ro(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = h.Children.map(t, (e) =>
        h.isValidElement(e) ? h.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function zo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Bo(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = C(dv);
  return t(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function Vo() {
  let [e, t] = h.useState(0);
  return h.useCallback(() => t((e) => e + 1), []);
}
function Ho(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Cy)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Uo)
    .map(Wo);
}
function Uo(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Wo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Uo);
  return t ? Wo(t) : e;
}
function Go(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = C(Sy),
    l = q.current() === q.canvas;
  Yg(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && J.queueMeasureRequest(Lo(i), t.current, n(t.current)));
  });
}
function Ko(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && J.queueMeasureRequest(Lo(t.id), t, Ho(t));
}
function qo(e) {
  e.willChange = `transform`;
  let t = q.current() === q.canvas;
  Ey && t && (e.translateZ = wy);
}
function Jo(e) {
  ((e.willChange = `transform`), Yo(e, !0));
}
function Yo(e, t) {
  let n = q.current() === q.canvas;
  if (!Ey || !n) return;
  let r = (I(e.transform) && e.transform) || ``;
  t ? r.includes(Ty) || (e.transform = r + Ty) : (e.transform = r.replace(Ty, ``));
}
function Xo(e, t, n, r = !0) {
  if (!e) return;
  let i = _v(e.style),
    a = n || i[t],
    o = () => {
      Zo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Zo(e) {
  return I(e) || L(e) || qe(e);
}
function Qo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function $o(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Qo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function es(e, t) {
  let n = [e, t];
  return Ay.test(e) ? e : $o(1e3, jy, n, () => ky.multiplyAlpha(e, t));
}
function ts(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: es(e.value, t) }))
  );
}
function ns(e, t) {
  let n = 0;
  return (
    ts(e, t).forEach((e) => {
      n ^= Oy(e.value) ^ e.position;
    }),
    n
  );
}
function rs(e) {
  return e && My.every((t) => t in e);
}
function is(e) {
  return e && Ny.every((t) => t in e);
}
function as({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || ev(t)
      ? (n.backgroundColor = t)
      : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e))
    : e &&
      ((e = z_.get(e, null)),
      typeof e == `string` || ev(e)
        ? (n.background = e)
        : Fy.isLinearGradient(e)
          ? (n.background = Fy.toCSS(e))
          : Ly.isRadialGradient(e)
            ? (n.background = Ly.toCSS(e))
            : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function os(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function ss(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function cs(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    pe(n)
      ? (t.cornerShape = ae(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    e._border?.borderWidth || U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    as(e, t),
    t
  );
}
function ls(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof _v(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function us(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (zy.has(t)) return `pointer`;
}
function ds(e) {
  return fs(e) ? !0 : e.style ? !!fs(e.style) : !1;
}
function fs(e) {
  return By in e && (e[By] === `scroll` || e[By] === `auto`);
}
function ps(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = de(e.minWidth),
    h = de(e.minHeight),
    g = de(e.maxWidth),
    _ = de(e.maxHeight);
  return {
    top: de(n),
    left: de(t),
    bottom: de(r),
    right: de(i),
    width: de(a),
    height: de(o),
    size: de(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function ms(e) {
  let t = C(Sy),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = ps(e),
    s = yo(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: q.current() === q.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !ls(e) && !e.__fromCanvasComponent && !ds(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = h.Children.count(e.children) > 0 &&
      h.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = cs(e);
  (a === void 0 && !i && (os(f) || (c.width = Vy.width), ss(f) || (c.height = Vy.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (so(o) &&
    s &&
    !bo(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    Dy.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let g = Da();
  return (
    e.positionSticky
      ? (!g || J.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (m.position = J.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function hs(e) {
  let t = {};
  for (let n in e)
    (Oe(n) || yv(n)) && !Hy.has(n)
      ? (t[n] = _v(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof _v(e)[n] != `boolean` && !e.transition && (t.transition = _v(e)[n]));
  return t;
}
function gs(e) {
  return `data-framer-name` in e;
}
function _s(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function vs(e) {
  return E(te.div, { layoutId: Gy, style: Jy, children: e.children });
}
function ys(e, t) {
  He(e) ? e(t) : bs(e) && (e.current = t);
}
function bs(e) {
  return R(e) && `current` in e;
}
function xs() {
  let e = wa(() => new Set()),
    t = wa(() => new Map());
  return wa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ss(e) {
  let t = M(null),
    n = xs();
  return wa(() => (bs(e) ? n(e) : He(e) ? n(t, e) : n(t)));
}
function Cs(e, t, n) {
  let r = M(),
    i = M();
  (Rr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function ws(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Yy({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ts() {
  return C(eb);
}
function Es() {
  return new Map();
}
function Ds() {
  return wa(Es);
}
function Os(e, t = []) {
  let { register: n, deregister: r } = C(tb);
  A(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function ks(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function As(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (V(t.originX) && (r.originX = t.originX),
      V(t.originY) && (r.originY = t.originY),
      V(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (V(n.originX) && (r.originX = n.originX),
      V(n.originY) && (r.originY = n.originY),
      V(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function js(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Ms(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return sb.PushLeft;
    case `left`:
      return sb.PushRight;
    case `bottom`:
      return sb.PushUp;
    case `top`:
      return sb.PushDown;
  }
}
function Ns(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return sb.OverlayLeft;
    case `left`:
      return sb.OverlayRight;
    case `bottom`:
      return sb.OverlayUp;
    case `top`:
      return sb.OverlayDown;
  }
}
function Ps(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return sb.FlipLeft;
    case `left`:
      return sb.FlipRight;
    case `bottom`:
      return sb.FlipUp;
    case `top`:
      return sb.FlipDown;
  }
}
function Fs(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Ls(e, t.transition, t.component);
    case `removeOverlay`:
      return Rs(e);
    case `add`:
      return zs(e, t.key, t.transition, t.component);
    case `remove`:
      return Hs(e);
    case `update`:
      return Is(e, t.key, t.component);
    case `back`:
      return Bs(e);
    case `forward`:
      return Vs(e);
    default:
      return;
  }
}
function Is(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Ls(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Rs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function zs(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? qs(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Gs(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Us(e, t, c),
    p = Ks(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Bs(e) {
  let t = { ...e.containers },
    n = Hs(e);
  if (n) return ((n.containers = t), n);
}
function Vs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = zs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Hs(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (z(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Ws(e, r, n),
    u = Ks(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Us(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Ws(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Gs(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Ks(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Js(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function qs(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Js(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Ys(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Ys(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Ys(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Ys(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Ys(e, t, n) {
  let r = {},
    i = {};
  return (
    lb.forEach((e) => {
      ((r[e] = ib[e]), (i[e] = { ...n, from: ib[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${_v(ib)[a]}%` : _v(ib)[a];
        ((_v(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Xs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Zs({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Qs({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : pb;
}
function $s({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function ec(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function tc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function nc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function rc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function ic(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function ac(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return pb;
}
function oc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function sc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function cc(e) {
  return h.Children.map(e.component, (t) => {
    if (!Xa(t) || !Ya(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? R(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      h.cloneElement(t, n)
    );
  });
}
function lc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function uc(e, t) {
  let n = _e(),
    r = Ve();
  return E(fb, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function dc(e) {
  return R(e) || He(e);
}
function fc(e) {
  return !!e && gb in e && e[gb] === !0;
}
function pc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return I(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Ue(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Ke(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = R(e.defaultValue) ? e.defaultValue : {};
        return (R(e.controls) && mc(t, e.controls), t);
      }
      case `array`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function mc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Ke(i) || fc(r)) continue;
    let a = pc(r);
    Ke(a) || (e[n] = a);
  }
}
function hc(e) {
  if (R(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function gc(e, t) {
  dc(e) && mc(hc(e), t);
}
function _c(e, t) {
  Object.assign(e, { [_b]: t });
}
function vc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), gc(e, t), n !== void 0 && _c(e, n));
}
function yc(e) {
  return e.propertyControls;
}
function bc(e) {
  return Cb in e;
}
function xc(e, t) {
  if (!bc(e)) return;
  let n = z_.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Sc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Cc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function wc(e, t) {
  let n = [];
  (V(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    V(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    V(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    V(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    V(e.invert) && n.push(`invert(${e.invert / 100})`),
    V(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    V(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    V(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Sc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Tc(e, t) {
  V(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Ec(e, t) {
  (Tc(e, t), wc(e, t));
}
function Dc(e, t) {
  let n,
    r = (...r) => {
      (qh.clearTimeout(n), (n = qh.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      qh.clearTimeout(n);
    }),
    r
  );
}
function Oc(...e) {
  return e.filter(Boolean).join(` `);
}
function kc(e, t, n) {
  let r = j.map(e, (e) => (T(e) ? u(e, t) : e));
  return n ? r : E(g, { children: r });
}
function Ac(e) {
  let t = wa(() => jc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function jc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Mc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Mc(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      j.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      j.map(i, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = He(a) ? a(e.props) : a;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return E(g, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function Mc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (ys(n, e), ys(t, e));
  };
}
function Nc(e, t, n, r, i, a, o, s) {
  let c = h.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !h.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Lc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Ic([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Ic([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = E(
        kb.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Fc(e, a, r);
    (f.length
      ? (z(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = E(
          `div`,
          { className: `${Ab} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : z(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    z(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, E(`div`, { className: jb }, `property-overrides-separator`)]
  );
}
function Pc(e) {
  return e.split(`-`)[2];
}
function Fc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Pc(a)}`);
  }
  return r;
}
function Ic(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Lc(e, t) {
  for (let n of Object.keys(t)) if (!yt(e[n], t[n], !0)) return !0;
  return !1;
}
function Rc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function zc() {
  return h.useContext(Ub);
}
function Bc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Vc() {
  if (s === void 0 || Yb)
    return E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Zb;
}
function Hc({ children: e }) {
  return C($b) ? E(g, { children: e }) : E(b, { fallback: Qb, children: e });
}
function Uc() {
  return E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Wc(e, t) {
  if (!oh || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Qt(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Gc(...e) {
  console.error(...e);
}
function Kc() {
  return q.current() !== q.canvas;
}
function qc({ getErrorMessage: e, fallback: t, children: n }) {
  return Kc()
    ? E(Jc, { fallback: t, children: E(tx, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Jc({ children: e, fallback: t = ex }) {
  return s === void 0 ? E(b, { fallback: t, children: e }) : E(Hc, { children: e });
}
function Yc() {
  return h.useContext(rx);
}
function Xc() {
  let e = Yc();
  return h.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Zc({ children: e, scopeId: t, nodeId: n }) {
  let r = Yc(),
    i = h.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return E(rx.Provider, { value: i, children: e });
}
function Qc(e, t) {
  return `${ix}${e}:${t}`;
}
function $c(e, t) {
  return tl(`component`, e, t);
}
function el(e, t) {
  return tl(`override`, e, t);
}
function tl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Qc(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function nl(e, t, n, r, i, a) {
  let o = il(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function rl(e, t, n, r) {
  return il(e, t, n, r);
}
function il(e, t, n, r) {
  return !!(Ke(n) || (n === 1 && r && e === t));
}
function al(e, t, n, r, i, a) {
  let o = Yc();
  if (Ke(t) || Ke(n)) return E(nx, { children: e });
  let { disableCustomCode: s } = qb();
  return s && r
    ? E(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (nl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = E(qc, { getErrorMessage: $c.bind(null, t, n), fallback: null, children: e })),
      i && (e = E(Zc, { scopeId: t, nodeId: n, children: e })),
      e);
}
function ol() {
  if (sx !== void 0 || s === void 0) return;
  let e = qh.matchMedia(`(any-hover: hover)`);
  ((sx = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== sx) {
        sx = t;
        for (let e of cx) e();
      }
    }));
}
function sl() {
  return (ol(), cl());
}
function cl() {
  return sx ?? !1;
}
function ll(e) {
  return (
    cx.add(e),
    ol(),
    () => {
      cx.delete(e);
    }
  );
}
function ul(e = !1) {
  let [t, n] = y(e);
  return (
    Yg(function () {
      function e(e = !0) {
        let t = cl();
        e ? c(() => n(t)) : n(t);
      }
      let t = ll(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function dl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function fl(e) {
  return !(!e || e.placement || e.alignment);
}
function pl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      B(e);
  }
}
function ml(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${pl(t)}, -100%`;
    case `right`:
      return `0%, ${pl(t)}`;
    case `bottom`:
      return `${pl(t)}, 0%`;
    case `left`:
      return `-100%, ${pl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function hl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(hx)) {
      let e = n.getAttribute(hx);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function gl(e) {
  let { registerCursors: t } = C(lx),
    n = wa(() => e),
    r = d();
  f(() => t(n, r), [t, r]);
}
function _l(e) {
  return !!(e && typeof e == `object` && _x in e);
}
function vl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function yl() {
  return q.current() === q.canvas;
}
function bl(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function xl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Sl(e, t, n, r) {
  if (I(e)) {
    let i = bl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = pi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Cl(e) {
  return I(e) && e.startsWith(`data:${wx}`);
}
function wl(e) {
  if (Cl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(wx.length),
        r = t.searchParams,
        i = r.has(bx) ? r.get(bx) : void 0,
        a,
        o = r.get(xx),
        s = r.get(Sx),
        c = r.get(Cx);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Tl(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = wl(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function El(e) {
  if (!Cl(e)) return e;
  let t = wl(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Dl(i) };
}
function Dl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Ol(e, n, i, a, o, s) {
  let c = C(Tx),
    l = Xc(),
    u = t(() => ({ scopeId: n, nodeId: i, furthestExternalComponent: l }), [n, i, l]),
    d = St(),
    f = wt(),
    { locales: p } = Bn(),
    m = t(() => {
      let e = _l(a) ? a : El(a);
      if (e) return Sl(e, d, f, p);
    }, [f, a, d, p]),
    h = !!(!yl() && c?.nodeId && u.nodeId),
    g = r(
      (e) => {
        if (o.href) {
          if ((e.preventDefault(), e.stopPropagation(), Tn(e))) {
            jl(o.href, ``, `_blank`);
            return;
          }
          m ? o.navigate?.() : jl(o.href, o.rel, o.target);
        }
      },
      [o, m]
    ),
    v = r(
      (e) => {
        o.href && (e.preventDefault(), e.stopPropagation(), jl(o.href, ``, `_blank`));
      },
      [o]
    ),
    y = r(
      (e) => {
        o.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? o.navigate?.() : jl(o.href, o.rel, o.target));
      },
      [o, m]
    );
  Cs(
    s,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (j.forEach(e, (e) => {
        Al(e) &&
          (z(
            kl(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          z(
            kl(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          yx.collectNestedLink(c, u));
      }),
      (b = j.map(e, (e) => {
        if (!Al(e)) return e;
        let t = Ml(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && Ml(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return _(t, { ...i, ref: a }, n);
      }))),
    E(Tx.Provider, { value: u, children: b })
  );
}
function kl(e) {
  return !Ke(e?.nodeId);
}
function Al(e) {
  return T(e) && (Ml(e.type) !== e.type || Ml(e.props.as) !== e.props.as);
}
function jl(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Ml(e) {
  return e === `a` ? `span` : re(e) && ce(e) === `a` ? te.span : e;
}
function Nl(e) {
  kx = e;
}
function Pl() {
  return kx;
}
function Fl(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Fl(e.parentElement, t)
      : null;
}
function Il({ children: e }) {
  return E(Hc, { children: e });
}
function Ll(e) {
  return D(function (t, n) {
    return E(Il, { children: E(e, { ...t, ref: n }) });
  });
}
function Rl(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Bl(e, t, o, s, a, c, l, i, r);
}
function zl(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && bl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      z(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      z(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = pi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Bl(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = Qr(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Vl() {
  let e = C(jx),
    t = wt()?.pathVariables;
  return e || t;
}
function Hl(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Ax)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Ul() {
  return !!xi(`ss-only-routes`);
}
function Wl(e) {
  if (s === void 0) return;
  let t = s.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Gl(e) {
  return bi(`rewrite`, e)?.description === `external`;
}
function Kl() {
  if (!qb().checkServerSideRouter) return !1;
  if (Fx === void 0) {
    let e = Ul();
    ((Ix = !e && _n() && bn() < 16.4), (Fx = e || Ix));
  }
  return Fx;
}
function ql(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Gl(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Pl() ? `client` : `server` };
}
async function Jl(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (Ix &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((Ix = !1), bi(`ss-only-routes`, t.headers.get(`server-timing`)) || (Fx = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return ql(t, e);
}
function Yl(e, t) {
  Mx.has(e) && Mx.set(e, t);
}
async function Xl(e) {
  await un(Nx);
  try {
    Yl(e, await Jl(e));
  } catch {
    Mx.delete(e);
  }
}
async function Zl(e) {
  try {
    let t = await Jl(e);
    return (Yl(e, t), t);
  } catch {
    return (Xl(e), { decision: `server` });
  }
}
function Ql(e) {
  if (!Kl()) return;
  let t = Wl(e);
  if (!t || t.origin !== s.location.origin) return;
  let n = t.href;
  Mx.has(n) || Mx.set(n, Zl(n));
}
function $l(e) {
  let t = Wl(e);
  if (!t) return;
  let n = Mx.get(t.href);
  return n && !Qe(n) ? n : void 0;
}
async function eu(e) {
  let t = Wl(e);
  if (!t) return;
  let n = Mx.get(t.href);
  if (n) return Qe(n) ? Promise.race([n, un(Px).then(() => void 0)]) : n;
}
function tu() {
  let e = o.connection || o.mozConnection || o.webkitConnection || {},
    t = o.deviceMemory && o.deviceMemory > zx,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? Bx : Vx));
  }
  (e.addEventListener?.(`change`, a), a());
  let s = new IntersectionObserver(u, { threshold: Rx }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    Ql(e.navigationUrl);
    let { id: n, preload: i } = e,
      a = Wx.get(n);
    if (!a?.size || Ux.has(n)) return;
    (++c, Ux.add(n));
    let o = i()?.catch(() => {});
    (s.unobserve(t), Hx.delete(t));
    for (let e of a) (s.unobserve(e), Hx.delete(e));
    (a.clear(), Wx.delete(n), await o, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = Hx.get(e);
      if (!n || Ux.has(n.id)) {
        (s.unobserve(e), Hx.delete(e));
        continue;
      }
      let r = n.id,
        a = Wx.get(r),
        o = Wx.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : Wx.set(r, new Set([e])), setTimeout(l, Lx, n, e));
      } else (a && a.delete(e), o <= 1 && Wx.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!Ux.has(n))
      return (
        Hx.set(e, { id: n, preload: t, navigationUrl: r }),
        s.observe(e),
        () => {
          (Hx.delete(e), s.unobserve(e));
        }
      );
  };
}
function nu(e, t) {
  let n = bl(e),
    r = {
      href: e === `` || xl(e, n) ? e : `https://${e}`,
      target: ru(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Mn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function ru(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function iu(e, t) {
  console.warn(
    tt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function au(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return iu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return Qe(i) ? i.catch(iu) : i;
  } catch (e) {
    iu(e);
  }
}
function ou(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = au(o, r, n);
      Qe(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function su() {
  let e = ln();
  return r((t, n, r, i = []) => ou(t, n, r, e, i), [e]);
}
function cu({ nodeId: e, clickTrackingId: t, router: n, href: i, activeLocale: a }) {
  let o = ln();
  return r(
    async (r) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = _l(i) ? i : El(i);
      if (!_l(c))
        return Qt(
          `published_site_click`,
          {
            ...s,
            href: r ? lu(r) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = o?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (I(t)) {
          let n = e.getRecordIdBySlug(t, a || void 0);
          f = (Qe(n) ? await n : n) ?? null;
        }
      }
      return Qt(
        `published_site_click`,
        {
          ...s,
          href: r ? lu(r) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, i, a, o]
  );
}
function lu(e) {
  try {
    let t = new URL(e, qh.document.baseURI);
    return t.origin === qh.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function uu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function du(e, t, n) {
  return async (r) => {
    let i = Tn(r),
      a = Fl(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Cg({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function fu(e, t, n) {
  return async (r) => {
    let i = await pu(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    mu(t ?? e, r, i.redirectUrl);
  };
}
async function pu(e) {
  return !e || !Kl()
    ? { decision: `client` }
    : $l(e) || (Ql(e), (await eu(e)) ?? { decision: `server` });
}
async function mu(e, t, n) {
  (await Cg({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    s.location.assign(hu(e, n)));
}
function hu(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, s.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function gu(e) {
  let t = Yr(e);
  if (t && s.location.pathname === t) {
    let e = new URL(s.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return s.location.href;
}
function _u(e, t, n) {
  if (t || s === void 0) return;
  let r = gu(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && !(i.pathname === a.pathname && i.search === a.search)) return i.href;
}
function vu(e, t, n, r, i, a, o, s) {
  if (!n) return nu(e, r);
  let c = zl(t, e, s, o);
  if (!c) return nu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return nu(e, r);
  let m = Qr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !sh,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = ru(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = _u(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = fu(m, _, (e) =>
      uu(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: du(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Hl(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function yu(e, t, n) {
  let r = bu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (He(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (He(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function bu(e, t) {
  let n = R(e) ? e : void 0,
    r = n && !Ge(n),
    i = t && !Ge(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function xu(e, t, n) {
  if (!(t && pn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Su } : { ...i, onTap: r }) : e;
}
function Su(e) {
  let t = Fl(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Cu({ EditorBar: e, fast: n = !1 }) {
  let r = C(qx),
    a = i(uh, n ? Xx : Zx, fh),
    o = qb(),
    s = t(() => {
      let e = {},
        t;
      for (t in o)
        o.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = o[t]);
      return e;
    }, [o]);
  return !e || !r || !a
    ? null
    : E(Yx, { children: E(b, { children: E(e, { framerSiteId: r, features: s }) }) });
}
function wu({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = M(),
    i = M(),
    a = M(t),
    o = M(null);
  ((a.current = t),
    A(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = y(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? Eu(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Eu(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Tu(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return E(Qx.Provider, { value: s, children: n });
}
async function Tu(e, t) {
  if (!$t(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    Qt(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Eu(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Gn(r.path, n) : r.path) : ``;
}
function Du(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Ou() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  (($x = e.timeZone), (eS = e.locale));
}
function ku({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Dr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: vr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function Au(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = vr();
  Dr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function ju(e, t, n, r) {
  let i = vr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Dr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      Qr(t, n)
    ));
}
function Mu() {
  return bn() >= 17 ? iS : rS;
}
function Nu(e = zu) {
  let t = (e) => {
    e.persisted && Hu();
  };
  _n() && (s.addEventListener(`pageshow`, t), (nS = Date.now() - Mu()));
  let n = Pu(),
    r = Bu(e);
  return function () {
    (s.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Pu() {
  let e = s.history.scrollRestoration;
  return (
    (s.history.scrollRestoration = `manual`),
    function () {
      s.history.scrollRestoration = e;
    }
  );
}
function Fu(e) {
  return R(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Iu() {
  return { x: s.scrollX, y: s.scrollY };
}
function Lu() {
  let e = vr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Fu(t)) return t;
}
function Ru(e) {
  let t = vr();
  t && (Tr({ ...t, scrollPosition: e }), _n() && (nS = Date.now()));
}
function zu(e, t = !1) {
  let n = Lu();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (_n() && !t) {
      let e = Mu();
      if (Date.now() - nS < e) return;
    }
    Ru(e);
  }
}
function Bu(e) {
  let t = () => {
      e(Iu());
    },
    n = () => {
      e(Iu(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), s.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), s.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in s)) {
    let e = Vu(t);
    return function () {
      (i(), e());
    };
  }
  return (
    s.addEventListener(`scrollend`, t),
    function () {
      (i(), s.removeEventListener(`scrollend`, t));
    }
  );
}
function Vu(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || yr(vr()) !== t) && e());
    },
    a = () => {
      let e = yr(vr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = _n() ? Mu() : 100;
      t = s.setTimeout(i, a);
    };
  return (
    s.addEventListener(`scroll`, a),
    function () {
      (s.removeEventListener(`scroll`, a), r());
    }
  );
}
function Hu() {
  let e = Lu();
  return e ? (s.scrollTo(e.x, e.y), !0) : !1;
}
function Uu(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Wu(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Uu(n, t), !0);
}
function Gu(e, t, n) {
  n !== `preserve-scroll-position` &&
    N.render(
      () => {
        (n === `restore-scroll-position` && Hu()) || Wu(e, t) || s.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Ku(e, t) {
  N.read(() => {
    s.scrollY !== 0 ||
      s.scrollX !== 0 ||
      N.render(
        () => {
          Hu() || Wu(e, t);
        },
        !1,
        !0
      );
  });
}
function qu(e) {
  let t = qb().scrollRestoration,
    n = M(void 0),
    i = M(!1),
    a = !!(t && !e),
    o = r(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = r((e, t = !1) => {
      i.current || zu(e, t);
    }, []),
    c = r(() => {
      a && (i.current = !0);
    }, [a]),
    l = r(() => n.current !== void 0 || i.current, []),
    u = r((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), Gu(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    f(() => {
      if (a) return Nu(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function Ju({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    f(() => {
      r(e, t);
    }),
    A(() => {
      i && Ku(s.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Yu() {
  let [e, t] = h.useState(0);
  return [e, h.useCallback(() => t((e) => e + 1), [])];
}
function Xu({ children: e, loadSnippetsModule: t }) {
  return E(hS.Provider, { value: t, children: e });
}
function Zu() {
  return h.useContext(hS);
}
function Qu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function $u(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (z(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (z(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      B(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await ed(a.createContextualFragment(e), r, i));
}
async function ed(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = td(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await ed(r, e, null)));
  }
}
function td(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return nd(r, t, n);
}
function nd(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function rd(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = dS), (n = fS));
      break;
    case `bodyEnd`:
      ((t = pS), (n = mS));
      break;
    case `headStart`:
      ((t = sS), (n = cS));
      break;
    case `headEnd`:
      ((t = lS), (n = uS));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function id(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Qu(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function ad(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = rd(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = id(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((od(t, o), s)) {
      await $u(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Qu(e.id),
      u = `${c}
${e.code}
${l}`,
      d = cd(e.id, n, r, i);
    d ? await $u(u, d, `afterend`) : await $u(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function od(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (sd(n) && n.remove(), (n = e));
  }
}
function sd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function cd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = id(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function ld() {
  let e = Zu();
  return r(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(aS)?.dataset[oS] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await ad(t, n, r);
      }
    },
    [e]
  );
}
function ud(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function dd({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: c,
}) {
  if (!e || !t || !n || !r) return;
  let l,
    u = [],
    d = o.find((e) => e.id === wh),
    { path: f } = await In({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
  f && (l = ud(f, e));
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await In({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let s = ud(o, e);
    (u.push({ href: s, hrefLang: n.code }), n.id === wh && (p = s));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (pr(l, s.location.href), mr(u));
    }
  );
}
function fd({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = ln(),
    l = ld();
  A(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Wc(e);
        }),
        d)
      : ((e.id === t.id
          ? Dn()
          : In({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === wh),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await dd({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Wc(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function pd(e) {
  if (!e) return ah;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function md(e) {
  let t = Nr(e),
    n = M(void 0),
    i = r(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: r(
      async (e, r, a, o = !0) => {
        i();
        let c = o ? new AbortController() : void 0;
        n.current = c;
        let l = c?.signal,
          u = Dt(l);
        if ((r.promise.finally(u), a === void 0)) return (e(l), r.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(ah);
        if ((t(f, c, a), e(l), await r.promise, l?.aborted)) return;
        let p = s.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || Ug();
      },
      [i, t]
    ),
    cancelPendingNavigation: i,
  };
}
function hd({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: u,
  routes: d,
  initialLocaleId: p,
  initialCollectionItemId: m,
  initialContentLocaleIdOverride: h,
  locales: g = Ch,
  initialCanonicalPathVariables: _,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (ai(),
    Or({
      disabled: n,
      routeId: a,
      initialPathVariables: i,
      initialLocaleId: p,
      initialContentLocaleId: h,
      initialCanonicalPathVariables: _,
    }));
  let C = dr(),
    [T, D] = Yu(),
    O = gr(`framer-route-change`),
    k = t(() => (!qb().synchronousNavigationOnDesktop || !wn() ? c : (e) => e()), []),
    j = M(!0),
    ee = M(),
    te = M(0),
    ne = M(a),
    N = M(i),
    re = M(),
    ie = M(p),
    ae = qu(n),
    { isNavigationCommitPending: oe, usesCustomScrollRestoration: se } = ae,
    { startNavigation: ce, cancelPendingNavigation: le } = md(se),
    ue = ln(),
    de = ae.scheduleScroll,
    fe = ie.current,
    pe = ne.current,
    me = N.current,
    he = d[pe],
    ge = he?.path;
  if (!he) throw Error(`Router cannot find route for ${pe}`);
  let _e = t(() => g.find(({ id: e }) => e === wh), [g]),
    P = t(() => g.find(({ id: e }) => (fe ? e === fe : e === wh)) ?? null, [fe, g]),
    {
      contentLocale: ve,
      currentCanonicalPathVariables: ye,
      pageExistsInCurrentLocale: be,
      setRouteContentState: xe,
    } = _d({
      activeLocale: P,
      currentRoute: he,
      initialCanonicalPathVariables: _,
      initialContentLocaleIdOverride: h,
      locales: g,
      routes: d,
    }),
    Se = P?.textDirection ?? `ltr`,
    F = S ? Se : `ltr`;
  f(() => {
    S && document.documentElement.setAttribute(`dir`, Se);
  }, [Se, S]);
  let Ce = jr(),
    we = t(
      () => ({
        activeLocale: P,
        contentLocale: ve,
        locales: g,
        setLocale: async (e) => {
          let t = ++te.current,
            r = O({ localized: !0 });
          if ((await Cg({ priority: `user-blocking`, continueAfter: `paint` }), t !== te.current)) {
            r.ignore?.();
            return;
          }
          let i;
          I(e) ? (i = e) : R(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = ne.current,
            s = d[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = Yr(x);
          try {
            let e = await Ce({
              currentLocale: P,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: _e,
              pathVariables: N.current,
              preserveQueryParams: v,
              sitePrefix: c,
            });
            if (!e || t !== te.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await zn({
                activeLocale: a,
                defaultLocale: _e,
                collectionUtilsCache: ue,
                locales: g,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== te.current) {
              r.ignore?.();
              return;
            }
            ((j.current = !1),
              (ie.current = a.id),
              (ee.current = i),
              (N.current = e.pathVariables),
              xe(l, u));
            let d = s.path && e.pathVariables ? Gn(s.path, e.pathVariables) : s.path;
            (de({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ce(
                () => {
                  C(o, o, () => k(D));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        ku({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [P, _e, ve, n, D, g, v, xe, d, de, ce, C, O, k, Ce, ue, x]
    ),
    Te = r(
      (e, t, n, r, i, a, o, s, c, l, u) => {
        j.current = !1;
        let f = ne.current,
          p = d[e],
          m = Et(p, n),
          h = p?.path && i ? Gn(p.path, i) : p?.path;
        if (
          ((ne.current = e),
          (ie.current = t),
          (N.current = i),
          (re.current = void 0),
          xe(a, o),
          (ee.current = r),
          de({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? se
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (le(), k(D));
          return;
        }
        ce(
          (t) => {
            C(f, e, () => k(D), t);
          },
          c,
          u,
          !0
        );
      },
      [D, xe, d, se, de, ce, C, k, le]
    );
  (kr(ae, ne, Te),
    A(() => {
      if (n) return;
      let e = () => {
        let e = vr(),
          t = s.location.hash === `` ? void 0 : s.location.hash.slice(1);
        (e && Et(d[e.routeId], e.hash) === t) ||
          Er({
            ...(e ||
              (xr() ?? { routeId: ne.current, pathVariables: N.current, localeId: ie.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (s.addEventListener(`hashchange`, e), () => s.removeEventListener(`hashchange`, e));
    }, [n, d]));
  let Ee = r(
      async (e, t, r, i, a) => {
        let o = d[e],
          s = at(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = pd(a);
        if (
          (Cg({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await Cg({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Tg)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Et(o, t),
          p = N.current,
          m = ie.current;
        if (
          re.current === void 0 &&
          Du({ routeId: ne.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = oe();
          if (a) {
            let t = o?.path && r ? Gn(o.path, r) : o?.path;
            de({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else le();
          (l.ignore?.(), !a && se && Gu(f, i, `scroll-to-hash-or-top`));
          let s = d[e];
          (!n &&
            s &&
            ju(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              u
            ),
            !a && !se && Gu(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = d[ne.current],
          _ =
            Yr(x) +
            Qr(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          y = {};
        re.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await zn({
          activeLocale: P,
          defaultLocale: _e,
          collectionUtilsCache: ue,
          locales: g,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        re.current === y &&
          Te(
            e,
            m,
            t,
            _,
            r,
            b,
            S,
            !1,
            l,
            i,
            n
              ? void 0
              : () => {
                  (u(),
                    Au(e, o, {
                      historyPath: _,
                      currentRoutePath: h?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                }
          );
      },
      [le, d, g, Te, n, v, x, O, se, oe, de, ue, _e, P]
    ),
    De = bt(d),
    Oe = ee.current,
    ke = tS(he, pe, Oe, me, P, m),
    Ae = j.current;
  fd({
    activeLocale: P,
    contentLocale: ve,
    currentPathVariables: me,
    currentRoute: he,
    currentRouteId: pe,
    isInitialNavigation: Ae,
    locales: g,
    siteCanonicalURL: x,
  });
  let je = t(
      () => ({
        navigate: Ee,
        getRoute: De,
        currentRouteId: pe,
        currentPathVariables: me,
        currentCanonicalPathVariables: ye,
        routes: d,
        collectionUtils: u,
        preserveQueryParams: v,
        pageviewEventData: ke,
        siteCanonicalURL: x,
        isInitialNavigation: Ae,
      }),
      [Ee, De, pe, me, ye, d, u, v, x, ke, Ae]
    ),
    Me = ge && me ? Gn(ge, me) : ge,
    Ne = `${fe}${Me}`,
    Pe = wa(() => ({ ...e, display: `contents` }));
  return E(xt, {
    api: je,
    children: E(Og.Provider, {
      value: we,
      children: E(kg.Provider, {
        value: F,
        children: E(px, {
          children: E(Wr, {
            routerRenderKey: T,
            isNavigationCommitPending: ae.isNavigationCommitPending,
            children: w(wu, {
              currentRoutePath: Me,
              routerAPI: je,
              children: [
                b && E(Cu, { EditorBar: b, fast: !0 }),
                E(Xb, {
                  children: w(Hc, {
                    children: [
                      E(M_.Start, {}),
                      E(Ju, { currentRouteId: pe, remountKey: Ne, scrollRestoration: ae }),
                      E(P_, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: E(gd, {
                          LayoutTemplate: y,
                          webPageId: he?.abTestingVariantId ?? pe,
                          style: e,
                          children: (t) =>
                            E(l, { children: be ? ui(he.page, t ? Pe : e) : o && ui(o, e) }, Ne),
                        }),
                      }),
                      b && E(Cu, { EditorBar: b }),
                      E(ti, {}),
                      E(M_.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function gd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function _d({
  activeLocale: e,
  currentRoute: n,
  initialCanonicalPathVariables: i,
  initialContentLocaleIdOverride: a,
  locales: o,
  routes: s,
}) {
  let c = M(i),
    l = M(a),
    u = l.current,
    d = !e || !n.includedLocales || n.includedLocales.includes(e.id),
    f = t(() => {
      if (!e) return null;
      let t;
      return (
        (t = d
          ? (u ?? n?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(s).find((e) => e.path && o_.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        t ? (o.find(({ id: e }) => e === t) ?? e) : e
      );
    }, [e, n, o, u, d, s]),
    p = r((e, t) => {
      ((l.current = e), (c.current = t));
    }, []);
  return {
    contentLocale: f,
    currentCanonicalPathVariables: c.current,
    pageExistsInCurrentLocale: d,
    setRouteContentState: p,
  };
}
function vd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function yd(e) {
  return typeof e == `object` && !!e;
}
function bd(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!yd(r)) return;
    r = r[e];
  }
  return r;
}
function xd(e) {
  return `${e.credentials}:${e.url}`;
}
function Sd(e) {
  return I(e) && !Number.isNaN(Number(e));
}
function Cd(e, t) {
  switch (e) {
    case `string`:
      return I(t) || L(t);
    case `color`:
      return I(t);
    case `boolean`:
      return Ue(t);
    case `number`:
      return L(t) || Sd(t);
    case `link`:
    case `image`:
      return I(t) && xl(t, !1);
    default:
      return !1;
  }
}
function wd(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = bd(e.data, t.resultKeyPath);
  if (Ke(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Cd(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Td(e, t) {
  if (q.current() === q.canvas) return !1;
  let n = Math.max(t * 1e3, _S);
  return Date.now() >= e + n;
}
function Ed({ client: e, children: t }) {
  return E(CS.Provider, { value: e, children: t });
}
function Dd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: D,
    initialContentLocaleIdOverride: O,
  } = e;
  return (
    h.useEffect(() => {
      n || cv.start();
    }, []),
    n
      ? E(Ir, {
          value: r ?? `preview`,
          children: E(Ee, {
            reducedMotion: p ? `always` : f ? `user` : `never`,
            skipAnimations: p,
            children: E(cn, {
              collectionUtils: l,
              children: E(Ed, {
                client: u,
                children: E(SS, {
                  children: E(qx.Provider, {
                    value: a,
                    children: E(Xu, {
                      loadSnippetsModule: T,
                      children: E(hd, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: g,
                        initialCollectionItemId: D,
                        initialContentLocaleIdOverride: O,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: _,
                        defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: v,
                        EditorBar: y,
                        disableHistory: x,
                        LayoutTemplate: S,
                        siteCanonicalURL: C,
                        adaptLayoutToTextDirection: w,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : E(m ? Db : h.Fragment, {
          children: E(Ct, {
            routes: c,
            children: E(mb, { children: h.isValidElement(t) ? t : h.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Od(e) {
  return {
    trace(...t) {
      return J.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return J.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return J.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return J.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return J.getLogger(e)?.error(...t);
    },
    get enabled() {
      return J.getLogger(e) !== void 0;
    },
  };
}
function kd() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Ad() {
  return wS.priority;
}
function jd(e) {
  let t = wS;
  return (
    (wS = e),
    {
      [kd()]() {
        wS = t;
      },
    }
  );
}
function Md(e = wS.priority, t = wS.canYield) {
  if (!(!t || e === void 0)) return Cg({ batch: !0, priority: On(e) });
}
function Nd(e) {
  var t = [];
  try {
    Be(t, jd({ priority: wS.priority, canYield: !1 }));
    let n = e.next();
    return (z(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    F(t, n, r);
  }
}
async function Pd(e, t, n = wS.priority, r = wS.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Be(o, jd(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      F(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Md(n, r);
      (o && (await o), Be(l, jd(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      F(l, u, d);
    }
  }
  return a.value;
}
function Fd(e, t = wS.priority, n = wS.canYield) {
  var r = [];
  try {
    Be(r, jd({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Pd(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    F(r, i, a);
  }
}
function* W(e, t = wS.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (Xe(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Pd(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Id(e, t = wS.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Md(t);
    r && (yield r);
    let o = e[a];
    if (Xe(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Pd(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Ld(e) {
  return Bd(e) || Ud(e);
}
function Rd(e) {
  return We(e) && e.every(R);
}
function zd(e) {
  return R(e) && He(e.read) && He(e.preload);
}
function Bd(e) {
  return Rd(e) || zd(e);
}
function Vd(e) {
  return R(e) && R(e.schema);
}
function Hd(e) {
  return R(e) && R(e.collectionByLocaleId);
}
function Ud(e) {
  return Vd(e) || Hd(e);
}
function Wd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = bf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Gd(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => X.cast(e, t.definition)) };
  }
  return null;
}
function Kd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Jd(e) {
  return qd(e)?.value ?? !1;
}
function Yd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Xd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Zd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Qd(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return Ye(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function $d(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ef(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function tf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function nf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function rf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function af(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function of(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function sf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function cf(e) {
  return sf(e)?.value ?? null;
}
function lf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = bf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function uf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = X.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function df(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ff(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function pf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function mf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function hf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function gf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function _f(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function vf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function yf(e) {
  return vf(e)?.value ?? null;
}
function bf(e, t, n) {
  if (qe(e) || qe(t)) return (z(e === t), 0);
  switch (e.type) {
    case `array`:
      return (z(e.type === t.type), Wd(e, t, n));
    case `boolean`:
      return (z(e.type === t.type), Kd(e, t));
    case `color`:
      return (z(e.type === t.type), Yd(e, t));
    case `date`:
      return (z(e.type === t.type), Zd(e, t));
    case `enum`:
      return (z(e.type === t.type), $d(e, t));
    case `file`:
      return (z(e.type === t.type), tf(e, t));
    case `link`:
      return (z(e.type === t.type), rf(e, t));
    case `number`:
      return (z(e.type === t.type), of(e, t));
    case `object`:
      return (z(e.type === t.type), lf(e, t, n));
    case `responsiveimage`:
      return (z(e.type === t.type), df(e, t));
    case `richtext`:
      return (z(e.type === t.type), pf(e, t));
    case `vectorsetitem`:
      return (z(e.type === t.type), hf(e, t));
    case `string`:
      return (z(e.type === t.type), _f(e, t, n));
    default:
      B(e);
  }
}
async function xf(e, t) {
  return zd(e) ? (await e.preload(t), e.read(t)) : e;
}
function Sf(e) {
  if (!Ud(e) || !e.id) return;
  let t = DS.get(e.id);
  if (!t) return (DS.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Cf(e) {
  let t = Sf(e);
  if (t) return t;
  let n = OS.get(e);
  if (n) return n;
  let r = `${kS}${Math.random().toString(16).slice(2)}`;
  return (OS.set(e, r), r);
}
function wf(e, t) {
  if (Bd(e)) {
    let n = Cf(e) + (t?.id ?? wh),
      r = AS.get(n);
    if (r) return r;
    let i = new ES(e, t);
    return (AS.set(n, i), i);
  }
  if (Vd(e)) return e;
  if (Hd(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  B(e, `Unsupported collection type`);
}
function Tf(e) {
  return e;
}
function Ef(e) {
  return He(e.getHash);
}
function G(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (R(r) && Ef(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Tf(`${n})`);
}
function Df(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Of(e, t) {
  return { collectionId: Cf(e), pointer: t };
}
function kf(e) {
  return R(e) && I(e.collectionId);
}
function Af(e, t) {
  return { collectionId: Cf(e), pointer: t };
}
function jf(e) {
  return R(e) && I(e.collectionId);
}
function Mf(e, t) {
  let n = new Map();
  function r(e) {
    if (R(e))
      if (e.type === `Collection` && Ld(e.data)) {
        let r = wf(e.data, t),
          i = Cf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (We(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Nf(e) {
  return e;
}
function Pf(e) {
  return e;
}
function Ff(e) {
  return e;
}
function If() {
  return 25;
}
function Lf() {
  return 12500;
}
function Rf(e) {
  return Array(e).fill({ type: `All` });
}
function zf(e) {
  return e;
}
function Bf(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new IC(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Vf(e) {
  let t = new Set();
  if (!e) return t;
  Bf(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Bf(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Hf(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Hf(n, t);
      return;
    case `object`:
      for (let n in e.value) Hf(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Uf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Wf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Gf(e) {
  return `${e.functionName}(${e.arguments.map((e) => Xf(e)).join(`, `)})`;
}
function Kf(e) {
  let t = `CASE`;
  e.value && (t += ` ${Xf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Xf(n.when)} THEN ${Xf(n.then)}`;
  return (e.else && (t += ` ELSE ${Xf(e.else)}`), (t += ` END`), t);
}
function qf(e) {
  let t = Xf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Jf(e) {
  let t = Xf(e.left),
    n = Xf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Yf(e) {
  return `CAST(${Xf(e.value)} as ${e.dataType})`;
}
function Xf(e) {
  switch (e.type) {
    case `Identifier`:
      return Uf(e);
    case `LiteralValue`:
      return Wf(e);
    case `FunctionCall`:
      return Gf(e);
    case `Case`:
      return Kf(e);
    case `UnaryOperation`:
      return qf(e);
    case `BinaryOperation`:
      return Jf(e);
    case `TypeCast`:
      return Yf(e);
    case `Select`:
      return `${tp(e)}`;
    default:
      B(e);
  }
}
function Zf(e) {
  return Vd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Qf(e) {
  let t = `${$f(e.left)} LEFT JOIN ${$f(e.right)}`;
  return (e.constraint && (t += ` ON ${Xf(e.constraint)}`), t);
}
function $f(e) {
  switch (e.type) {
    case `Collection`:
      return Zf(e);
    case `LeftJoin`:
      return Qf(e);
    default:
      B(e);
  }
}
function ep(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function tp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Xf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${$f(e.from)}`),
    e.where && (t += ` WHERE ${Xf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Xf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Xf(e.limit)}`),
    e.offset && (t += ` OFFSET ${Xf(e.offset)}`),
    ep(t)
  );
}
function np(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Ke(e) || R(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function rp(e) {
  let t = M(e);
  return (
    S(() => {
      t.current = e;
    }, [e]),
    zr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function ip(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function ap() {
  return new Set();
}
function op(e) {
  let t = wa(ap),
    n = wa(ap);
  return (
    Os(() => () => ip(n, t)),
    A(() => () => ip(n, t), []),
    A(() => {
      ip(n, t);
    }, [e]),
    M({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function sp(e, t, n) {
  return h.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function cp(e) {
  for (let [t, n] of Object.entries(e)) if (qh.matchMedia(n).matches) return t;
}
function lp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && qh.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function up(e, t, n = !0) {
  let i = C(db),
    a = Oa(),
    o = ba(),
    s = yn() && (!a || o),
    l = M(s ? (cp(t) ?? e) : e),
    u = M(n && i ? e : l.current),
    d = Vo(),
    f = ne(),
    p = r(
      (e) => {
        if (e !== l.current || e !== u.current) {
          let t = function () {
            ((l.current = u.current = e),
              c(() => {
                d();
              }));
          };
          a
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, a]
    );
  return (
    Yg(() => {
      if (a) {
        if (o) {
          p(cp(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, o, a, t, p]),
    Yg(() => {
      !n || i !== !0 || p(l.current);
    }, []),
    A(() => {
      if (!s || o) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = qh.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (dp(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => fp(e, t));
    }, [o, t, p, s]),
    [l.current, u.current]
  );
}
function dp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function fp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function pp(e) {
  setTimeout(e, 1);
}
function mp(e) {
  let t = new Set(),
    n = lp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (hp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (ch ? qh.requestIdleCallback : pp)(() => {
    document.querySelector(ZC)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (hp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    gp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function hp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function gp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function _p(e) {
  return R(e) && QC in e && e.page !== void 0;
}
function vp(e, t) {
  return `${e}-${t}`;
}
function yp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (z(r !== void 0, `nextVariant should be defined`), r);
}
function bp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function xp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Sp(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Cp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function wp() {
  let e = M(),
    t = M(),
    n = r(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    A(
      () => () => {
        n();
      },
      [n]
    ),
    r(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Tp() {
  let e = M(),
    t = M(!1),
    n = M(),
    i = C(Xy);
  return (
    A(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    r(
      (r, a) => {
        if (!a?.current || t.current) {
          r();
          return;
        }
        if (((n.current = r), e.current)) return;
        let o = !1;
        e.current = ws(i, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Ep(e) {
  let t = wp(),
    n = Tp();
  return r(
    (r, i = !1) => {
      if (sh) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Dp() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (tw = () => {
        (e(), (t = void 0));
      }));
  });
}
function Op(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (ew = Dp()));
}
function kp() {
  (performance.mark(`click-received-listener`), (ew = void 0), tw?.(), (tw = void 0));
}
function Ap(e = !1) {
  A(() => {
    e &&
      (document.addEventListener(`pointerup`, Op, !0),
      document.__proto__.addEventListener.call(document, `click`, kp, !0));
  }, [e]);
}
function jp({
  variant: e,
  defaultVariant: n,
  transitions: i,
  enabledGestures: a,
  cycleOrder: o = [],
  variantProps: s = {},
  variantClassNames: l = {},
  ref: u,
}) {
  let d = Vo(),
    f = yl(),
    p = wa(() => new Set(o));
  Ap(qb().yieldOnTap);
  let m = Ep(u),
    h = M({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Cp(e, n, p),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: a,
      cycleOrder: o,
      transitions: i,
    }),
    g = r((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Cp(e, a, p),
        s = xp(i?.[o], t, n, !1, r);
      return [o, s ? vp(o, s) : void 0];
    }, []),
    _ = r(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let l = qb().yieldOnTap && h.current.isPressedHasUpdated;
        (l &&
          ew &&
          (performance.mark(`wait-for-tap-start`),
          await ew,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          l &&
            (performance.mark(`yield-on-tap-start`),
            await Cg({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: f,
          isHoveredHasUpdated: p,
          isPressedHasUpdated: _,
        } = h.current;
        if (u || p || f || _) {
          c(d);
          return;
        }
        m(() => c(d), i);
      },
      [g, d, m]
    ),
    v = r(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !f && qb().disableHoverOnMobile && !sl() && (e = !1);
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_, f]
    ),
    y = r(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === $C ? yp(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = r(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => c(d), !0));
    }, [d, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: C,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = h.current,
    k = sp(h.current.baseVariant, h.current.gestureVariant, s);
  return t(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !D && !f && !!t && !O[x],
      r = n ? vp(x, `loading`) : S;
    r && e.push(r);
    let i = w?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: bp(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: Oc(Sp(x, l), xp(i, T, E, n, D)),
      }
    );
  }, [x, S, T, E, O, k, y, C, w, v, b, l]);
}
function Mp(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Kc()) return r(e);
  let a = Np(e, r),
    o = !1;
  function s(r, s) {
    let c = Yc(),
      { disableCustomCode: l } = qb();
    if (l) return E(e, { ...r, ref: s });
    if (rl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? E(qg.Provider, {
            value: n,
            children: E(qc, {
              getErrorMessage: el.bind(null, t, n),
              fallback: E(e, { ...r, ref: s }),
              children: E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Gc(a.error), Gc(el(t, n)), Wc(a.error), !0)), E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return E(qg.Provider, { value: n, children: E(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return h.forwardRef(s);
}
function Np(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Pp(e, t) {
  A(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (s.addEventListener(`keyup`, n), () => s.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Fp(e, t, n, r) {
  let i = s.innerHeight - r,
    a = Math.min(s.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Ip(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new s.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Lp() {
  return document.getElementById(Dx) ?? document.getElementById(Ex) ?? document.body;
}
function Rp(e, t) {
  return L(e) ? e : (t ?? 0);
}
function zp(e) {
  return Rp(e?.paddingTop, e?.padding) + Rp(e?.paddingBottom, e?.padding);
}
function Bp(e) {
  return Rp(e?.paddingLeft, e?.padding) + Rp(e?.paddingRight, e?.padding);
}
function Vp(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Bp(e)}px)`,
      srcSet: Pa(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Hp(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in aw)) continue;
    let n = aw[t],
      r = e[t];
    if (!(!L(n) || !L(r)) && n !== r) return !0;
  }
  return !1;
}
function Up(e) {
  let t = le.get(e.current);
  if (!t) return !1;
  if (Hp(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Hp(e.latestValues)) return !0;
  return !1;
}
function Wp(e) {
  return D(function ({ lightbox: n, lightboxClassName: i, onClick: a, ...o }, s) {
    let u = C(be),
      f = C(nw),
      p = !!f,
      m = M(null),
      h = s ?? m,
      _ = M(),
      v = t(() => Vp(n, o.background), [n, o.background]),
      [b, S] = y(!1),
      [T, D] = y(),
      O = r(() => {
        if (n) {
          if (b) {
            c(() => {
              S(!0);
            });
            return;
          }
          N.read(() => {
            if (!h.current) return;
            let e = getComputedStyle(h.current),
              t =
                h.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(h.current, `::after`)
                  : void 0,
              r = h.current.offsetWidth ?? 1,
              i = h.current.offsetHeight ?? 1,
              a = Up(h) || p ? { duration: 0 } : n.transition;
            c(() => {
              (D({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                S(!0),
                f?.stop());
            });
          });
        }
      }, [n, b, h, f?.stop, p]),
      k = T?.aspectRatio ?? 1,
      j = rp(() => {
        if (!n || !v?.src) return;
        let e = _.current?.[v.src];
        if (e) return e;
        let t = Fp(k, n.maxWidth, Bp(n), zp(n)),
          r = Ip(v, { width: t, height: t * k });
        return ((_.current = { [v.src]: r }), r);
      }),
      ee = r(
        async (e) => {
          (a?.(e), !(b || !n || !v) && (await j(), O()));
        },
        [a, O, b, v, n, j]
      ),
      ne = r((e) => {
        (e?.stopPropagation(),
          c(() => {
            S(!1);
          }));
      }, []);
    (Pp(b, ne),
      A(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = h.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, h, n]));
    let re = d(),
      ie = T?.transition ?? o.transition ?? u.transition,
      ae = T?.borderRadius,
      oe = T?.imageRendering,
      se = T?.filter,
      ce = T?.borderTop,
      le = T?.borderRight,
      ue = T?.borderBottom,
      de = T?.borderLeft,
      fe = T?.borderStyle,
      pe = T?.borderColor,
      me = !!(ce || le || ue || de || fe || pe),
      he = me
        ? {
            "--border-top-width": ce,
            "--border-right-width": le,
            "--border-bottom-width": ue,
            "--border-left-width": de,
            "--border-style": fe,
            "--border-color": pe,
          }
        : void 0,
      ge = { [hx]: o.id },
      _e = Rp(n?.paddingTop, n?.padding),
      P = Rp(n?.paddingBottom, n?.padding),
      ve = Rp(n?.paddingLeft, n?.padding),
      ye = Rp(n?.paddingRight, n?.padding),
      xe = T?.borderRadius ? { ...o.style, borderRadius: T.borderRadius } : o.style,
      Se = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      F = p && b ? void 0 : (o.layoutId ?? (n ? re : void 0));
    return w(g, {
      children: [
        E(e, {
          ...o,
          style: xe,
          onClick: ee,
          layoutId: F,
          ref: h,
          layoutDependency: Se,
          transition: ie,
        }),
        E(je, {
          onExitComplete: () => {
            c(() => {
              (D(void 0), f?.start());
            });
          },
          children:
            b &&
            n &&
            v &&
            E(
              l,
              {
                children: x(
                  w(g, {
                    children: [
                      E(te.div, {
                        ...ge,
                        className: i,
                        onClick: ne,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: ow,
                        animate: sw,
                        exit: ow,
                      }),
                      E(te.div, {
                        ...ge,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${_e}px ${ye}px ${P}px ${ve}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: E(te.div, {
                            layoutId: F,
                            transition: ie,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": me,
                            style: {
                              aspectRatio: k,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: se,
                              ...he,
                            },
                            children: E(Ua, { image: v, alt: v.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Lp()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Gp(e, t) {
  return uw && !t
    ? Document.parseHTMLUnsafe(e)
    : ((lw ??= new DOMParser()), lw.parseFromString(e, t ?? `text/html`));
}
function Kp(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function qp(e, t, n, r) {
  return e.replace(dw, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = wl(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!_p(f) || !_p(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Et(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = El(u);
    if (!_ || I(_)) return e;
    Hl(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(Ax, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Gr(m, v)), i + o + `"${Kp(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Jp(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Yp(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Xp(e, t, n) {
  let r = M([]);
  Jp(r.current, e) ||
    ((r.current = e),
    J.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || q.current() !== q.canvas || (e > 0 && Ko(n.current));
    }));
}
function Zp() {
  return { current: null };
}
async function Qp(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function $p(e) {
  return e in hw;
}
function em(e, t) {
  let n = {};
  for (let r in e) {
    if (!$p(r)) continue;
    let i = e[r],
      a = hw[r];
    Ke(i) || Ke(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function tm(e, t = `character`, n, r, i) {
  if (r) {
    let t = Zp();
    return (n.add(t), E(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return w(
          l,
          {
            children: [
              E(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(gw)?.map((e, t) => {
                  let r = Zp();
                  return (n.add(r), E(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Zp();
        return (
          n.add(o),
          w(
            l,
            { children: [E(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function nm(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      B(t);
  }
}
function rm(e) {
  let t = [];
  return (
    L(e.x) && t.push(`translateX(${e.x}px)`),
    L(e.y) && t.push(`translateY(${e.y}px)`),
    L(e.scale) && t.push(`scale(${e.scale})`),
    L(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    L(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    L(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    L(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    L(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function im(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : rm(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : rm(n.effect),
              };
      }
    default:
      B(i);
  }
}
function am(e, n, r) {
  let i = wa(() => new Set()),
    a = Da(),
    o = r || !a,
    s = se(),
    c = M({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  A(() => {
    if (!o || r) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !o ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: r, tokenization: a } = e,
            o = { current: void 0 };
          return (
            sm(
              a,
              e.effect,
              i,
              t,
              n,
              r,
              s,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          B(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? Re(t, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Re(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        B(l);
    }
  }, [o, i, r, n, u, d, l]);
  let f = !!e,
    p = e ? nm(e) : void 0;
  return t(
    () => ({
      getTokenizer: () => {
        if ((i.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = c.current,
          a = im(o, r || om(e, t, n), c.current.effect, s);
        return {
          text: (e) => tm(e, p, i, s, a),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = Zp();
            return (i.add(t), { ref: t, style: { ...e, ...a } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            sm(p, e.effect, i, t, n, !1, s);
            break;
          }
          default:
            B(t);
        }
      },
    }),
    [o, f, i, r, p]
  );
}
function om(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function sm(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = em(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await cm(n, u);
      if (
        e === null ||
        (ze(e, l, { ...r, restDelta: 0.001, delay: me(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        ze(e, n, { ...r, restDelta: 0.001, delay: me(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Qp(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (N.read(() => {
          ((e = lm(n)),
            e.length !== 0 &&
              N.update(() => {
                let t = e.map((e, t) =>
                  ze(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          ze(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      B(e);
  }
}
async function cm(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Qp(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function lm(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function um(e) {
  let t = {};
  for (let n in e) (Oe(n) || yv(n)) && (t[n] = e[n]);
  return t;
}
function dm(e) {
  return e.type === l;
}
function fm(e) {
  return e.type === `br`;
}
function pm(e, t, n, r, i = {}, a, o = dm(e) ? -1 : 0) {
  let s = j.toArray(e.props.children);
  Ke(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!T(e) || !fm(e)) && (c = !1), T(e))) return pm(e, t, n, r, i, a, o + 1);
    let s = Ke(n) ? e : n;
    return I(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...d } = e.props;
  if (I(e.type) || re(e.type)) {
    let n = ce(e.type) || e.type,
      u = l || n,
      f = I(u) ? t?.[u] : void 0;
    ((d.className = Oc(`framer-text`, d.className, f)),
      a && o === 0 && !c && Object.assign(d, a.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = mm(s, i);
      d.id = e;
      let t = Oc(`framer-text`, m),
        n = E(`a`, { href: `#${e}`, className: t, children: s });
      ((d.style = { ...d.style, scrollMarginTop: r }), (s = [n]));
    }
    u === `ol` &&
      (d.style = { ...d.style, [ay]: gm(d.start ?? 1, j.count(d.children), d.style?.[iy] ?? ``) });
  }
  return u(e, d, ...s);
}
function mm(e, t) {
  let n = Fr(e.map(hm).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function hm(e) {
  return I(e) || L(e)
    ? e.toString()
    : T(e)
      ? hm(e.props.children)
      : Array.isArray(e)
        ? e.map(hm).join(``)
        : ``;
}
function gm(e, t, n) {
  return Do(Number(e) || 1, t, n);
}
function _m(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Ii(n.x, n.y),
    i = Mv(Ii(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Ii.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  z(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Ii.isEqual(e, s) && !Ii.isEqual(e, c));
  z(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Mv.intersection(i, Mv(s, c)),
    f = Mv.intersection(i, Mv(l, u));
  return (z(d && f, `linearGradientLine: Must have a start and end point.`), Mv(d, f));
}
function vm(e, t) {
  let n = _m(e.angle),
    r = ts(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Mv.pointAtPercentDistance(n, i),
    s = Mv.pointAtPercentDistance(n, a),
    c = ie([i, a], [0, 1]);
  return {
    id: `id${t}g${Fy.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: ky.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function ym(e, t) {
  return {
    id: `id${t}g${Ly.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: ts(e).map((t) => ({
      color: t.value,
      alpha: ky.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function bm(e) {
  if (!I(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return L(parseFloat(t));
}
function xm(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return L(n) ? n : 50;
}
function Sm(e) {
  return bm(e) ? xm(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Cm(e) {
  return bm(e) ? xm(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function wm(e, t, n, r) {
  if (((e = z_.get(e, `#09F`)), !jv.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Sm(e.positionX) + f),
        (d = (t.height - l) * Cm(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Cm(e.positionY)))
        : ((n = g), (u = (1 - g) * Sm(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Tm(e) {
  return e.startsWith(`data:${ww}`);
}
function Em(e, t) {
  if (/^\w+:/u.test(e) && !Tm(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = q.current() === q.export;
  return J.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Dm(e, t) {
  return (A(() => Aw.subscribeToTemplate(e), [e]), Aw.template(e, t));
}
function Om(e) {
  try {
    let t = Gp(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function km(e, t) {
  jm(e, Am(t));
}
function Am(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function jm(e, t) {
  (Mm(e, t),
    Array.from(e.children).forEach((e) => {
      jm(e, t);
    }));
}
function Mm(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Nm(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (jw[t[2]] || 1));
}
function Pm(e) {
  let t = Nm(e.getAttribute(`width`)),
    n = Nm(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Fm(e) {
  return e.indexOf(`image`) >= 0;
}
function Im(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Lm(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Rm(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? qh,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = Aw.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && so(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    V(s) &&
    V(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function zm(e) {
  return e > Iw ? `lazy` : void 0;
}
function Bm(e, t, n) {
  let r = Um(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Vm(e) {
  return e ? (e.fonts ?? di()) : di();
}
function Hm(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Um(e);
}
function Um(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Wm(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Gm) })
      : t.fonts.push(Gm(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Wm(e) {
  return Rw in e;
}
function Gm(e) {
  let t = Km(e) || qm(e) ? e : Jm(e);
  return qm(t) ? t : Ym(t);
}
function Km(e) {
  return `source` in e;
}
function qm(e) {
  return `cssFamilyName` in e;
}
function Jm(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Ym(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Lw}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Xm(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
async function Zm(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Cg({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function Qm(e) {
  return e.loader;
}
function $m(e, t, n) {
  let r = Qm(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  K,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  q,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  J,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Y,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  X,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  Z,
  RS,
  zS,
  BS,
  VS,
  HS,
  Q,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  $,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw = e(() => {
    (a(),
      ge(),
      n(),
      O(),
      m(),
      (eh = Ce({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (th = Ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (nh = Ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = th();
        },
      })),
      (rh = Ce({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = nh(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (ih = Ce({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function c(e, t, n) {
              ((t ||= {}),
                (n ||= s),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(s.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        s.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var a = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              s.navigator.userAgent
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(c),
                      g = new r(c),
                      _ = new r(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((s.FontFaceObserver = c),
                  (s.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (ah = () => {}),
      (oh = s !== void 0),
      (sh =
        oh &&
        (o.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(o.userAgent))),
      (ch = oh && typeof s.requestIdleCallback == `function`),
      (lh = ch ? s.requestIdleCallback : setTimeout),
      (uh = () => ah),
      (dh = () => !0),
      (fh = () => !1),
      (ph = new Map()),
      (mh = new Map()),
      (hh = new Set()),
      (gh = `:`),
      (_h = oh ? void 0 : new Set()),
      (vh = `preload`),
      (yh = Object.keys),
      (bh = `equals`),
      (xh = h.createContext({})),
      (Sh = h.createContext({})),
      (Ch = []),
      (wh = `default`),
      (Th = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Eh = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && rt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Th.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === Th.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Th.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Th.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && _h !== void 0 && _h.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Th.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Th.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && ph.has(this.cacheHash) ? ph.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!Qe(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Th.Fulfilled) return this.value;
          throw this.promiseState === Th.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (Dh = -1),
      (Oh = -2),
      (kh = -3),
      (Ah = -4),
      (jh = -5),
      (Mh = -6),
      (Nh = -7),
      (Ph = 2 ** 32 - 1),
      (Fh = Ph - 1),
      (Ih = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Lh = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Rh = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (zh = typeof Uint8Array.fromBase64 == `function`),
      (Bh = typeof process == `object` && process.versions?.node !== void 0),
      (Vh = zh ? Bt : Bh ? Ht : Wt),
      (Hh = zh ? Vt : Bh ? Ut : Gt),
      (Uh = Object.freeze({ kind: `not-plain` })),
      (Wh = Object.freeze({ kind: `symbol-keys` })),
      (Gh = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => At(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => ({
          buffer: e.buffer,
          byteOffset: e.byteOffset,
          byteLength: e.byteLength,
          length: e.length,
          bufferByteLength: e.buffer.byteLength,
        }),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => zt(e),
        shapeOf: (e) =>
          kt(e)
            ? Nt(e).length > 0
              ? Wh
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : Uh,
        get: (e, t) => e[t],
      })),
      (Kh = Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[Fh] = void 0), delete t[Fh], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => new Set(),
        createMap: () => new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (qh = oh
        ? s
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (Jh = 2),
      (Yh = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Xh = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Qh = class {
        payload = en();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return Yt(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      ($h = oh ? void 0 : new Qh()),
      (eg = Xh.CollectionUtilsCache),
      (tg = new WeakMap()),
      (ng = k(void 0)),
      (rg = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Eh(async () => {
              try {
                let t = await e();
                return (z(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(tt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = an(n),
            i = on(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if ($h !== void 0) {
              if (Qe(e)) return e.then((e) => ($h.set(eg, i, e), e));
              $h.set(eg, i, e);
            }
            return e;
          }
          if (nn(eg, i)) {
            let e = rn(eg, i);
            return (this.cacheMap.set(i, new Eh(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = Qe(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(tt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            ($h !== void 0 && $h.set(eg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Eh(async () => {
            try {
              let e = Qe(s) ? await s : s;
              return ($h !== void 0 && $h.set(eg, i, e), e);
            } catch (e) {
              console.error(tt(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (ig = /Mac/u),
      (ag = /iPhone|iPod|iPad/iu),
      (og = /MacIntel/iu),
      (sg = /Edg\//u),
      (cg = /Chrome/u),
      (lg = /Google Inc/u),
      (ug = /Safari/u),
      (dg = /Apple Computer/u),
      (fg = /Firefox\/\d+\.\d+$/u),
      (pg = /Version\/([\d.]+)/u),
      (mg = /FramerX/u),
      (hg = /tablet|iPad|Nexus 9/iu),
      (gg = /mobi/iu),
      (_g = 1e3 / 60),
      (vg = 1e3 / 25),
      (yg = 500),
      (bg = Promise.resolve()),
      (xg = 100),
      (Sg = (e) => {
        N.read(e, !1, !0);
      }),
      (Cg = jn(Sg)),
      (wg = `framer_variant`),
      (Tg = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Eg = async () => {}),
      (Dg = { contentLocale: null, activeLocale: null, locales: [], setLocale: Eg }),
      (Og = (() => {
        let e = h.createContext(Dg);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (kg = (() => {
        let e = h.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Ag = !sh),
      (jg = !1),
      (Mg = h.createContext({ global: void 0, routes: {} })),
      (Ng = 10),
      (Pg = 1e4),
      (Fg = (e) => `--view-transition-${e}`),
      (Ig = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Fg(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Fg(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Fg(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Lg = {
        circle: {
          makeKeyframe: (e, t) => `${Fg(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Fg(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${er(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Fg(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Ig,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${$n(e.x)} ${$n(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Zn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Fg(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Fg(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Fg(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Fg(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Fg(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Fg(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Rg = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (zg = `view-transition-styles`),
      (Bg = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Vg = () => {}),
      (Ug = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (Hg ||
            ((Hg = document.createElement(`div`)),
            Hg.setAttribute(`aria-live`, `assertive`),
            Hg.setAttribute(`aria-atomic`, `true`),
            (Hg.style.position = `absolute`),
            (Hg.style.transform = `scale(0)`),
            document.body.append(Hg)),
            setTimeout(() => {
              Hg.textContent = e;
            }, 60));
        }
      }),
      (Gg =
        oh &&
        typeof s.navigation?.back == `function` &&
        !(() => {
          if (o === void 0) return !1;
          let e = o.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !_n()),
      (Kg = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (qg = h.createContext(null)),
      (Jg = (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Yg = typeof document < `u` ? f : A),
      (Xg = new Set()),
      (Zg = (() => {
        let e = k({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Qg = 46),
      ($g = 47),
      (e_ = (e, t) => e.charCodeAt(t)),
      (t_ = (e, t) => e.lastIndexOf(t)),
      (n_ = (e, t, n) => e.slice(t, n)),
      (r_ = !1),
      (i_ = `/`),
      (a_ = (e) => e === $g),
      (o_ = new Set([`/404.html`, `/404`, `/404/`])),
      (s_ = `__f_replay`),
      (c_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (l_ = (e) => {
        e.target?.closest?.(`#main`) &&
          ($r(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (u_ = !1),
      (D_ = [ni]),
      (E_ = [ni]),
      (T_ = [ni]),
      (w_ = [ni]),
      (C_ = [ni]),
      (S_ = [ni]),
      (x_ = [ni]),
      (b_ = [ni]),
      (y_ = [ni]),
      (v_ = [ni]),
      (__ = [ni]),
      (g_ = [ni]),
      (h_ = [ni]),
      (m_ = [ni]),
      (p_ = [ni]),
      (f_ = [ni]),
      (d_ = [ni]),
      (k_ = class {
        constructor() {
          (ye(O_, 5, this),
            we(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            we(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            we(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            we(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            we(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            we(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            we(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ri(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ri(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            ri(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            ri(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            ri(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ri(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ri(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ri(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ri(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (O_ = Te(null)),
      Ne(O_, 1, `markRenderStart`, D_, k_),
      Ne(O_, 1, `markRenderEnd`, E_, k_),
      Ne(O_, 1, `markUseInsertionEffectsStart`, T_, k_),
      Ne(O_, 1, `markUseInsertionEffectRouterStart`, w_, k_),
      Ne(O_, 1, `markUseInsertionEffectsEnd`, C_, k_),
      Ne(O_, 1, `markUseLayoutEffectsStart`, S_, k_),
      Ne(O_, 1, `markRouterUseLayoutEffectStart`, x_, k_),
      Ne(O_, 1, `markUseLayoutEffectsEnd`, b_, k_),
      Ne(O_, 1, `markUseEffectsStart`, y_, k_),
      Ne(O_, 1, `markUseEffectsRouterStart`, v_, k_),
      Ne(O_, 1, `markUseEffectsAreSynchronous`, __, k_),
      Ne(O_, 1, `markUseEffectsEnd`, g_, k_),
      Ne(O_, 1, `markRafStart`, h_, k_),
      Ne(O_, 1, `markRafEnd`, m_, k_),
      Ne(O_, 1, `markLayoutStylePaintEnd`, p_, k_),
      Ne(O_, 1, `measureMutationEffects`, f_, k_),
      Ne(O_, 1, `measureUnattributedHydrationOverhead`, d_, k_),
      Ae(O_, k_),
      (j_ = !1),
      (M_ = { Start: ci, End: li }),
      (N_ = class extends Error {}),
      (P_ = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof N_)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return ui(e, t);
        }
      }),
      (F_ = Object.freeze([])),
      (L_ = new Set()),
      (R_ = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (z_ = (() => {
        function e(e) {
          return (
            Ai(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ji(e) ? e : new H_(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : ji(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ji(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (B_ = `onUpdate`),
      (V_ = `finishTransaction`),
      (H_ = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new R_();
        static interpolationFor(e, t) {
          if (ji(e)) return Mi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ji(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Pi(e.x, t.x), y: Pi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Ii ||= {})),
      (U_ = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (W_ = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (W_.hexChars = `0123456789abcdef`),
      (W_.refY = 1),
      (W_.refU = 0.19783000664283),
      (W_.refV = 0.46831999493879),
      (W_.kappa = 903.2962962),
      (W_.epsilon = 0.0088564516),
      (W_.m_r0 = 3.240969941904521),
      (W_.m_r1 = -1.537383177570093),
      (W_.m_r2 = -0.498610760293),
      (W_.m_g0 = -0.96924363628087),
      (W_.m_g1 = 1.87596750150772),
      (W_.m_g2 = 0.041555057407175),
      (W_.m_b0 = 0.055630079696993),
      (W_.m_b1 = -0.20397695888897),
      (W_.m_b2 = 1.056971514242878),
      (G_ = new W_()),
      (K_ = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (q_ =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (J_ = (e) => {
        let { r: t, g: n, b: r, a: i } = oa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Y_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ca({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (X_ = (e) => {
        let { r: t, g: n, b: r, a: i } = oa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Z_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ca({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Q_ = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return la(this);
        }
        rgb() {
          return pa(this);
        }
        hsl() {
          return Ki(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(da(t));
            case `srgb`:
              return new e(fa(da(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            fa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = K(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ia(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!I(t) || !K.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      ($_ = new Map()),
      (K = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = $_.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : ($_.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ma(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && ta(e) !== !1),
          (e.isColorObject = (e) =>
            R(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Gi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Q_.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...Vi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Yi(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Yi(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Gi(e.r, e.g, e.b, !0);
            for (let e of Object.keys(U_)) if (U_[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Li(i, [0, 1], [t.r, r.r], a),
                g: Li(i, [0, 1], [t.g, r.g], a),
                b: Li(i, [0, 1], [t.b, r.b], a),
                a: Li(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Li(i, [0, 1], [u, u + f], a),
                s: Li(i, [0, 1], [c.s, l.s], a),
                l: Li(i, [0, 1], [c.l, l.l], a),
                a: Li(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Hi(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => Ki(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (ev = (e) => e instanceof Fe),
      (tv = eh().EventEmitter),
      (nv = class {
        _emitter = new tv();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (rv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (iv = qh.requestAnimationFrame || rv),
      (av = (e) => iv(e)),
      (ov = 1 / 60),
      (sv = class extends nv {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          ov = e;
        }
        static get TimeStep() {
          return ov;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), av(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * ov;
        }
        tick = () => {
          this._started &&
            (av(this.tick),
            this.emit(`update`, this._frame, ov),
            this.emit(`render`, this._frame, ov),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (cv = new sv()),
      (lv = { target: ba() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (q = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => lv.target,
        hasRestrictions: () => {
          let e = lv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (uv = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      xe({
        borderTopWidth: uv(`y`),
        borderLeftWidth: uv(`x`),
        borderRightWidth: uv(`x`),
        borderBottomWidth: uv(`y`),
      }),
      (dv = h.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (fv = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (pv = {
        ...fv,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (mv = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (hv = { ...mv, fontWeight: 500 }),
      (gv = {
        ...mv,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (_v = (e) => e),
      (vv =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (yv = ka(
        (e) =>
          vv.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (bv = (e) => () => {
        ki(e);
      }),
      (xv = () => () => {}),
      (Sv = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, n, r) {
          let i = J.useImageSource(e, n, r);
          return t(() => {
            let t = new Image();
            return ((t.src = i), e.srcSet && (t.srcset = e.srcSet), t);
          }, [i, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (Cv = !1),
      (J = new Proxy(Sv, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? xv()
              : bv(
                  Cv
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (wv = {
        isSelectorLoaded(e) {
          return J.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return J.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return J.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return J.fontStore.loadMissingFonts(e, t);
        },
      }),
      (Tv = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Ev = [1, 2, 2.2]),
      (Dv = [512, 1024, 2048, 4096]),
      (Ov = 512),
      (kv = { position: `absolute`, ...Tv, top: 0, right: 0, bottom: 0, left: 0 }),
      (Av = `src`),
      (jv = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Av in e;
        },
      }),
      (Mv = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Za(Ii.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Ii(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Ii.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Ni(e.x, t),
          y: Ni(e.y, t),
          width: Ni(e.width, t),
          height: Ni(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Ii.distance(t, n), height: Ii.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            Ii.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [Mv(t, n), Mv(n, r), Mv(r, i), Mv(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  B(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              B(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  B(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              B(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Mv(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Mv.intersection(n, t, !0)) {
              let n = Nv[e];
              return (z(n, () => `Invalid edge name: ${JSON.stringify(Nv)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          z(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            z(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Nv = [`top`, `right`, `bottom`, `left`]),
      (Pv = {
        quickfix: (e) => (
          (Qa(e.widthType) || Qa(e.heightType)) && (e.aspectRatio = null),
          V(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Qa(e.widthType) || V(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Qa(e.heightType) || V(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Fv = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Pv.quickfix({
              left: V(t) || ji(t),
              right: V(n) || ji(n),
              top: V(r) || ji(r),
              bottom: V(i) || ji(i),
              widthType: $a(a),
              heightType: $a(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = z_.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = z_.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? z_.getNumber(t) : null,
              right: d.right ? z_.getNumber(n) : null,
              top: d.top ? z_.getNumber(r) : null,
              bottom: d.bottom ? z_.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? z_.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? z_.getNumber(t?.sizing.height) : null,
            c = ao(e.left, e.right);
          if (o && V(c)) i = o - c;
          else if (n && Qa(e.widthType)) i = n.width;
          else if (V(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                B(e.widthType);
            }
          let l = ao(e.top, e.bottom);
          if (s && V(l)) a = s - l;
          else if (n && Qa(e.heightType)) a = n.height;
          else if (V(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                B(e.heightType);
            }
          return io(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Fv.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? z_.getNumber(l.width) : null,
            d = l ? z_.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (Iv = 200),
      (Lv = 200),
      (Rv = h.createContext({ parentSize: 0 })),
      (zv = (e) => {
        let t = mo(),
          { parentSize: n, children: r } = e,
          i = h.useMemo(() => ({ parentSize: n }), [go(n), _o(n)]);
        return t === 1
          ? r
            ? E(g, { children: r })
            : null
          : E(Rv.Provider, { value: i, children: r });
      }),
      (Bv = h.createContext(void 0)),
      (Vv = new Set()),
      (Uv = `style[data-framer-css-ssr-minified]`),
      (Wv = (() => {
        if (!yn()) return new Set();
        let e = document.querySelector(Uv)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Gv = `data-framer-css-ssr`),
      (Kv = (e, t, n) =>
        h.forwardRef((r, i) => {
          let { sheet: a, cache: o } = h.useContext(Bv) ?? {},
            s = n;
          if (!yn()) {
            He(t) && (t = t(To(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Jv.add(e, s);
          }
          return (
            S(() => {
              (s && Wv.has(s)) ||
                (He(t)
                  ? t(To(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && wo(e, a, o));
            }, []),
            E(e, { ...r, ref: i })
          );
        })),
      (qv = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Jv = new qv()),
      (Yv = `--framer-will-change-override`),
      (Xv = `--framer-will-change-effect-override`),
      (Zv = `--framer-will-change-filter-override`),
      (Qv = `--overflow-clip-fallback`),
      ($v = `--one-if-corner-shape-supported`),
      (ey = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (ty = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(ty || {})),
      (ny = ty),
      (ry = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (z(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Eo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            z(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${ny.BorderTopWidth}${ny.BorderRightWidth}${ny.BorderBottomWidth}${ny.BorderLeftWidth}`,
      (iy = `--list-style-type`),
      (ay = `--max-list-digits`),
      (oy = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (sy = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (cy = { display: `inline-block` }),
      (ly = { display: `block` }),
      (uy = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${sy.display};
            flex-direction: ${sy.flexDirection};
            justify-content: ${sy.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${H([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${H([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${H([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${cy.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${H([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${H([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${H([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${H([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${H([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${H([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${H([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${H([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${H([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${H([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${H([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${H([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${H([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${H([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${H([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${H([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${H([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${H([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${H([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${ly.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${ay}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Mo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (dy = `--text-truncation-display-inline-for-safari-16`),
      (fy = `--text-truncation-display-none-for-safari-16`),
      (py = `--text-truncation-line-break-for-safari-16`),
      (my = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (hy = `(background: -webkit-named-image(i))`),
      (gy = `(contain-intrinsic-size: inherit)`),
      (_y = [
        `@supports ${hy} and (not ${gy}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${my.join(`, `)} { display: var(${dy}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${my.map((e) => `${e}::after`).join(`, `)} { content: var(${py}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${fy}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${dy}, ${cy.display}) }
    }`,
      ]),
      (vy = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Yv}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Yv}: transform; } }`,
                ]
              : [`body { ${Yv}: none; ${Xv}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Zv}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Zv}: filter; } }`,
                ]
              : [`body { ${Zv}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Qv}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${$v}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...uy,
          ...ey,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ..._y,
          f,
        ];
      }),
      (yy = Co(() => vy(!1))),
      (by = Co(() => vy(!0))),
      (xy = gn()),
      (Sy = h.createContext(!1)),
      (Cy = `data-framer-size-compatibility-wrapper`),
      (wy = `0.000001px`),
      (Ty = ` translateZ(${wy})`),
      (Ey = xn() || _n() || Sn()),
      (Dy = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? qo(t) : Jo(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !yt(this.props, e);
          }
          componentDidUpdate(e) {
            _v(this.props).clip &&
              _v(this.props).radius === 0 &&
              _v(e).radius !== 0 &&
              Xo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (Oy = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (ky = {
        hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
        setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
        getAlpha: (e) => {
          let t = ta(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
        toHexValue: (e) => K.toHex(K(e)).toUpperCase(),
        toHex: (e) => K.toHexString(K(e)).toUpperCase(),
        toRgb: (e) => K.toRgb(K(e)),
        toRgbString: (e) => K.toRgbString(K(e)),
        toHSV: (e) => K.toHsv(K(e)),
        toHSL: (e) => K.toHsl(K(e)),
        toHslString: (e) => K.toHslString(K(e)),
        toHsvString: (e) => K.toHsvString(K(e)),
        hsvToHSLString: (e) => K.toHslString(K(Ui(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => K.toHex(K(Ui(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => K.toHexString(K(Ui(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => K.toRgbString(K(Ui(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Ui(e.h, e.s, e.v),
        rgbaToString: (e) => K.toRgbString(K(e)),
        rgbToHexValue: (e) => K.toHex(K(e)),
        rgbToHexString: (e) => K.toHexString(K(e)),
        hslToString: (e) => K.toHslString(K(e)),
        hslToRgbString: (e) => K.toRgbString(K(e)),
        toColorPickerSquare: (e) => K.toRgbString(K({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => K(e).isValid !== !1,
        equals: (e, t) =>
          K.isP3String(e) || K.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = K(e)),
              typeof t == `string` && (t = K(t)),
              K.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = K(e);
          return t.a === 1 ? K.toHexString(t) : K.toRgbString(t);
        },
        toFormatString: (e) => (K.isP3String(e) ? e : K.toRgbString(K(e))),
      }),
      (Ay = /var\(.+\)/u),
      (jy = new Map()),
      (My = [`stops`]),
      (Ny = [`start`, `end`]),
      (Py = [`angle`, `alpha`]),
      (Fy = {
        isLinearGradient: (e) => R(e) && Py.every((t) => t in e) && (is(e) || rs(e)),
        hash: (e) => e.angle ^ ns(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ts(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Iy = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Ly = {
        isRadialGradient: (e) => R(e) && Iy.every((t) => t in e) && (is(e) || rs(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ ns(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ts(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Ry = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (zy = new Set([...Ry, ...Ry.map((e) => `${e}Capture`)])),
      (By = `overflow`),
      (Vy = { x: 0, y: 0, width: 200, height: 200 }),
      (Hy = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Uy = D(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = Ro(e),
          l = hs(s),
          u = Bo(e),
          d = us(e),
          f = M(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": _v(e)[`data-framer-offset-parent-id`],
          };
        !gs(e) && n && (_v(m)[`data-framer-name`] = n);
        let [h, _] = ms(s),
          v = ps(s),
          y = bo(v),
          b = r && !(_ && !y && so(v)) ? r : void 0;
        (b ? (l.transformTemplate ||= zo(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, Io(b, s.style)),
          Go(e, p));
        let x = qa(e),
          S = _s(s, v, _, C(Sy)),
          T = vo(
            w(g, {
              children: [
                x
                  ? E(Ua, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && Lo(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                E(Ga, { ...a, border: i, layoutId: u }),
              ],
            }),
            S
          ),
          D = So(e.as),
          O = xo(x);
        return (
          e.fitImageDimension &&
            O &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = O.width / O.height)),
          w(D, { ...m, ...l, layoutId: u, style: h, ref: p, children: [T, o] })
        );
      })),
      (Wy = Po(
        D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? E(Uy, { ...e, ref: t }) : null;
        })
      )),
      (Gy = `__LAYOUT_TREE_ROOT`),
      (Ky = h.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (qy = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Gy && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return E(Ky.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Jy = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Yy = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Xy = k(new Map())),
      (Zy = h.createContext(null)),
      (Qy = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === Gy && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return E(ke.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      ($y = (e) => {
        let t = h.useContext(Ky);
        return E(Qy, { ...e, sharedLayoutContext: t });
      }),
      (eb = h.createContext(!0)),
      (tb = k({ register: () => {}, deregister: () => {} })),
      (nb = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let i = Ds(),
          a = M({
            register: r(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i]
            ),
            deregister: r(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i]
            ),
          }).current;
        return (
          A(
            () => (
              i.forEach((n, r) => {
                let a = r(e, t);
                i.set(r, He(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, t, i]
          ),
          E(tb.Provider, { value: a, children: n })
        );
      }),
      (rb = h.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: h,
        position: g = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: _,
        index: v,
        areMagicMotionLayersPresent: y,
        id: b,
        isInitial: x,
      }) {
        let S = ue(),
          T = C(Se),
          { persistLayoutIdCache: D } = C(dv),
          O = M({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: As({}, m, a),
          }),
          k = M(null),
          j = T !== null && !T.isPresent;
        (t && O.current.wasCurrent === void 0 && D(),
          A(() => {
            if (e || !S) return;
            if (j) {
              O.current = { ...O.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = O.current,
              o = (t && !i) || (!j && O.current.wasBeingRemoved && t),
              s = n && !r,
              c = As(O.current.origins, m, a),
              l = O.current.wasReset;
            (o || s
              ? (S.stop(), S.start({ zIndex: v, ...c, ...a }), (l = !1))
              : l === !1 && (S.stop(), S.set({ zIndex: v, ...ib, opacity: 0 }), (l = !0)),
              (O.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let ee = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          te = p ? { type: !1 } : f || d,
          ne = { ...g };
        ((ne.left === void 0 || ne.right === void 0) && (ne.width = `auto`),
          (ne.top === void 0 || ne.bottom === void 0) && (ne.height = `auto`));
        let N = (js(a) || js(m)) && (e || t || n) ? 1200 : void 0,
          re = { ...ib, ...O.current.origins },
          ie = e
            ? {
                initial: { ...re, ...m },
                animate: { ...re, ...a, transition: ee },
                exit: { ...re, ...h, transition: d },
              }
            : { animate: S, exit: { ...re, ...h, transition: te } },
          ae = !(j || y === !1),
          oe = !!t && ae,
          se = t && x;
        return w(Wy, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && _) ? v : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: N,
          },
          children: [
            e &&
              E(Wy, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            E(Wy, {
              ...ne,
              ...ie,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: se || e || (t && _) ? 1 : 0 },
              "data-is-present": ae ? void 0 : !1,
              ref: k,
              children: E(Zy.Provider, {
                value: k,
                children: E(eb.Provider, {
                  value: oe,
                  children: E(nb, {
                    isCurrent: oe,
                    isOverlayed: r,
                    children: E($y, {
                      isLead: t,
                      animatesLayout: !!_,
                      transition: ee,
                      isExiting: !ae,
                      isOverlayed: r,
                      id: b,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, ks)),
      (ib = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (ab = class {
        warning = () => {
          ki(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (ob = k(new ab())),
      (sb = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (cb = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (lb = yh(ib)),
      (ub = h.createContext(void 0)),
      (db = h.createContext(void 0)),
      (fb = (() => {
        class e extends v {
          #e = null;
          state = cb();
          static defaultProps = { enabled: !0 };
          static contextType = ub;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Xa(t) || !Ya(t)) return;
            let n = { ...sb.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Fs(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Xa(t) || !Ya(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, sb.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = Fs(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Xa(e) || !Ya(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, sb.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, sb.Fade, t);
          }
          push(e, t) {
            this.#i(e, Ms(t), t);
          }
          modal(e, t) {
            this.#i(e, sb.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Ns(t), t);
          }
          flip(e, t) {
            this.#i(e, Ps(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, sb.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Xs(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              z(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              z(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                E(
                  rb,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: oc(o, e),
                    transitionProps: u,
                    animation: ac(o, e),
                    backfaceVisible: rc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: E(vs, { children: cc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              E(
                rb,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: nc(n, t),
                  transitionProps: ic(n, t),
                  instant: oc(n, t, !0),
                  animation: ac(n, t),
                  exitProps: e.transition.enter,
                  visible: sc(n, t),
                  backdropColor: ec(e.transition),
                  backfaceVisible: tc(n, t),
                  onTapBackdrop: lc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: cc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return E(Wy, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: E(ob.Provider, {
                value: this,
                children: w(db.Provider, {
                  value: i,
                  children: [
                    E(rb, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Zs(n),
                      animation: Qs(n),
                      backfaceVisible: $s(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: E(xa, {
                        children: E(qy, {
                          children: E(je, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    E(je, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (pb = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (mb = Po(h.forwardRef(uc))),
      Le(rh(), 1),
      (hb = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.Dimension = `dimension`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(hb || {})),
      (gb = `optional`),
      (_b = `outputControls`),
      Le(rh(), 1),
      Le(rh(), 1),
      (vb = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (yb = Symbol(`private`)),
      (bb = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [yb]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new R_(),
                reset() {
                  for (let t in i)
                    if (vb(i, t)) {
                      let n = vb(e, t) ? _v(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Sb);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[yb].reset()),
          (e.addObserver = (e, t) => e[yb].observers.add(t)),
          e
        );
      })()),
      (xb = class {
        set = (e, t, n, r) => {
          if (t === yb) return !1;
          let i = e[yb],
            a,
            o;
          if (
            (ji(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = z_(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = _v(e)[t];
          if (l !== void 0) {
            ji(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (_v(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === yb) return _v(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[yb].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(yb);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== yb) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Sb = new xb()),
      (Cb = `opacity`),
      (wb = (() => {
        function e(t = {}) {
          let n = bb(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => bb.resetObject(e));
          }),
          (e.addObserver = (e, t) => bb.addObserver(e, t)),
          e
        );
      })()),
      (Tb = { update: 0 }),
      (Eb = h.createContext({ update: NaN })),
      (Db = class extends v {
        observers = [];
        state = Tb;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), cv.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), wb.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            wb._stores.forEach((e) => {
              let t = wb.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            E(Eb.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Le(rh(), 1),
      (Ob = h.createContext(void 0)),
      (kb = h.createContext(void 0)),
      (Ab = `ssr-variant`),
      (jb = `ssr-variant-group-separator`),
      (Mb = h.forwardRef(function (e, t) {
        let n = Ac(t),
          r = h.useContext(kb),
          i = h.useSyncExternalStore(uh, fh, dh),
          a = wa(() => (i ? (yn() ? 1 : 2) : 0)),
          o = h.useContext(Ob);
        return Rr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Rc(t, c, i));
            case 1:
              return Nc(i, s, c, u, l, d, n, t);
            case 2:
              return Nc(i, s, c, u, l, d, kc, void 0);
            default:
              B(a);
          }
        }, [o, r, n, e]);
      })),
      (Nb = Kv(Mb, `.${Ab} { display: contents }`, `PropertyOverrides`)),
      (Pb = `default`),
      (Fb = new Set([Pb])),
      (Ib = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (z(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (z(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Pb, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Pb;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Pc(r)) : Pb;
        }
        setAll(e, t = Fb, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = He(n.transformTemplate) ? n.transformTemplate?.({}, Rb) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: R(a) ? a : void 0,
              animate: R(o) ? o : void 0,
              transformTemplate: I(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (Lb = new Ib()),
      (Rb = `__Appear_Animation_Transform__`),
      (zb = `data-framer-appear-id`),
      (Bb = `data-framer-appear-animation`),
      (Vb = { willChange: `transform` }),
      Object.freeze(Vb),
      (Hb = {}),
      Object.freeze(Hb),
      (Ub = h.createContext({})),
      (Wb = h.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = h.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Ac(a);
        return E(Ub.Provider, { value: o, children: s(r, i) });
      })),
      (Gb = (e) =>
        h.forwardRef((t, n) =>
          E(e, { layoutId: Bo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (Kb = {}),
      (qb = () => Kb),
      (Jb = (e) => {
        Kb = e;
      }),
      (Yb = !1),
      (Xb = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Bc(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              tt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          Qt(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Bc(e)) throw e;
          return ((Yb = !0), this.props.children);
        }
      }),
      (Zb = s === void 0 ? null : new Promise(() => {})),
      (Qb = E(Vc, {})),
      ($b = k(!1)),
      ($b.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (ex = E(Uc, {})),
      (tx = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Gc(this.props.getErrorMessage(), t?.componentStack), Wc(e, t));
        }
        render() {
          let { children: e, fallback: t = ex } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (nx = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Wc(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (rx = h.createContext(void 0)),
      (ix = `code-crash:`),
      (ax = Gb(
        h.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = wa(() => (t ? `${t}-container` : void 0)),
            d = So(n),
            f = al(
              h.Children.map(e, (e) =>
                h.isValidElement(e) ? h.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return E(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: E(Sy.Provider, {
              value: !0,
              children: E(qg.Provider, {
                value: i ?? null,
                children: E(Ca, {
                  enabled: !1,
                  children: E(Pe, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (ox = h.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = al(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = So(f);
          return E(qg.Provider, {
            value: a ?? null,
            children: E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return E(qg.Provider, {
            value: a ?? null,
            children: E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (cx = new Set()),
      (lx = k({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (ux = `framer-cursor-none`),
      (dx = `framer-pointer-events-none`),
      (fx = ee(function ({ children: e }) {
        let t = wa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = dl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = se();
        return w(lx.Provider, { value: t, children: [e, !n && E(gx, {})] });
      })),
      (px = Kv(
        fx,
        [
          `.${ux}, .${ux} * { cursor: none !important; }`,
          `.${dx}, .${dx} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (mx = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (hx = `data-framer-portal-id`),
      (gx = ee(function () {
        let { onRegisterCursors: e } = C(lx),
          t = ul(!1),
          n = P(0),
          i = P(0),
          a = P(0),
          o = M(null),
          s = M({ cursors: {}, cursorHash: void 0 }),
          c = Vo();
        (A(() => {
          if (!t) return;
          let e = 0,
            r = 0;
          function l() {
            (n.set(e), i.set(r), ze(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ge(s.current.cursors)) return;
            let t = hl(e, r);
            t !== s.current.cursorHash && ((s.current.cursorHash = t), N.update(() => c()));
          };
          function d(t) {
            if (t.pointerType === `touch`) {
              he(u);
              return;
            }
            (N.read(u, !0), (e = t.clientX), (r = t.clientY), N.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            N.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            qh.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            N.read(u, !0),
            () => {
              (qh.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                he(u));
            }
          );
        }, [a, n, i, c, t]),
          A(() => {
            if (!t) return;
            function e() {
              ze(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              qh.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), qh.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          f(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = Ge(e) ? null : hl(n.get(), i.get())),
                c());
            }
            let r = e(t);
            return () => {
              (r(), document.body.classList.toggle(ux, !1));
            };
          }, [n, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          p = fl(d);
        f(() => {
          t && document.body.classList.toggle(ux, p);
        }, [p, t]);
        let m = d?.component,
          h = d?.transition ?? { duration: 0 },
          g = h.duration === void 0 ? h : { ...h, duration: h.duration * 1e3 },
          _ = ve(n, g),
          v = ve(i, g),
          y = oe(() => _.get() + (d?.offset?.x ?? 0)),
          x = oe(() => v.get() + (d?.offset?.y ?? 0)),
          S = d?.alignment,
          w = d?.placement,
          T = r((e, t) => `translate(${ml(w, S)}) ${t}`, [S, w]);
        return !t || !d || !m
          ? null
          : E(b, {
              children: E(m, {
                transformTemplate: T,
                style: { ...mx, x: y, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: dx,
              }),
            });
      })),
      (_x = `webPageId`),
      (vx = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            z(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (z(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((oh && !Sn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(vl(e), e), this.collectedLinks.set(vl(t), t));
          let n = this.nestingInfo.get(vl(e)) ?? new Set();
          (n.add(vl(t)), this.nestingInfo.set(vl(e), n));
        }
      }),
      (yx = new vx()),
      (bx = `element`),
      (xx = `collection`),
      (Sx = `collectionItemId`),
      (Cx = `pathVariables`),
      (wx = `framer/page-link,`),
      (Tx = k(void 0)),
      (Ex = `overlay`),
      (Dx = `template-overlay`),
      (Ox = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((s.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(tt(sh ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Qt(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (sh && document.getElementById(`main`)?.innerHTML) || ``;
          return E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${tt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Ax = /:([a-z]\w*)/gi),
      (jx = k(void 0)),
      (Mx = new Map()),
      (Nx = 500),
      (Px = 500),
      (Ix = !1),
      (Lx = 500),
      (Rx = 0.9),
      (zx = 1.7),
      (Bx = 4),
      (Vx = 1 / 0),
      (Hx = new WeakMap()),
      (Ux = new Set()),
      (Wx = new Map()),
      (Gx = !Ag || typeof IntersectionObserver > `u` ? null : tu()),
      (Kx = Ll(
        D(function (
          {
            children: e,
            href: n,
            openInNewTab: r,
            smoothScroll: i,
            clickTrackingId: a,
            relValues: o,
            preserveParams: s,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = St(),
            m = wt(),
            h = Vl(),
            { activeLocale: g, locales: _ } = Bn(),
            v = su(),
            y = Vn(),
            b = yl(),
            x = cu({ nodeId: c, clickTrackingId: a, router: p, href: n, activeLocale: g }),
            S = t(() => {
              if (!n) return {};
              let e = _l(n) ? n : El(n);
              if (!e) return {};
              if (I(e))
                return vu(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: r,
                    trackLinkClick: x,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: i,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: t, unresolvedHashSlugs: a } = e,
                c = v(t, a, g);
              if (Qe(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Rl(p, m, e, g, c, h),
                S = ru(r, !0),
                C = S === `_blank`,
                w = _u(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = fu(u, w, (e) =>
                  uu(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    i,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: du(u, x, E),
                "data-framer-page-link-current": (m && Hl(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [n, p, g, h, r, m, i, x, o, _, s, v, y]),
            C = Ss(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          Cs(
            C,
            (e) => {
              if (!(e === null || !D || !E || !A || b))
                return Gx?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b]
          );
          let ee = !!w;
          return Ol(
            Ac(f).cloneAsArray(e, (e) => yu(e, { ...d, ...xu(j, u, ee) }, C)),
            l,
            c,
            n,
            S,
            C
          );
        })
      )),
      (qx = h.createContext(void 0)),
      (Jx = `__framer_force_showing_editorbar_since`),
      (Yx = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (Xx = () => {
        try {
          return !!localStorage[Jx];
        } catch {
          return !1;
        }
      }),
      (Zx = () => !Xx()),
      (Qx = (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      ($x = null),
      (eS = null),
      lh(Ou),
      (tS = (e, t, n, r, i, a) => {
        let o = C(qx),
          c = M(),
          l = ln(),
          u = M(!0);
        return (
          A(() => {
            function d() {
              (!$x || !eS) && Ou();
              let s = n ? new URL(n, qh.location.href) : qh.location,
                c = {
                  version: Jh,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: $x,
                  locale: eS,
                },
                d = u.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && I(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (Qe(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = d()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                u.current ? (u.current = !1) : Qt(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = d()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), Qt(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              s.addEventListener(`pageshow`, f),
              () => {
                s.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, t, n, r, i, o, l, a]),
          c
        );
      }),
      (nS = 0),
      (rS = 500),
      (iS = 200),
      (aS = `main`),
      (oS = `framerGeneratedPage`),
      (sS = `<!-- Start of headStart -->`),
      (cS = `<!-- End of headStart -->`),
      (lS = `<!-- Start of headEnd -->`),
      (uS = `<!-- End of headEnd -->`),
      (dS = `<!-- Start of bodyStart -->`),
      (fS = `<!-- End of bodyStart -->`),
      (pS = `<!-- Start of bodyEnd -->`),
      (mS = `<!-- End of bodyEnd -->`),
      (hS = h.createContext(void 0)),
      (gS = { status: `loading`, data: void 0 }),
      (_S = 5e3),
      (vS = () => {}),
      (yS = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = xd(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = xd(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = qh.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Td(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Dc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Td(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!yn() || !xl(e.url, !1)) return;
          let t = xd(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = wd(n, e);
          return (e.resultOutputType === `image` && I(i) && (await vd(i).catch(vS)), i);
        }
        async fetchWithCache(e) {
          if (!yn()) return;
          let t = xd(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Td(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, gS);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!xl(r, !1)) return vS;
          let a = xd(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (bS = k(void 0)),
      (xS = k(!0)),
      (SS = ({ children: e, client: t }) => {
        let [n] = y(() => t ?? new yS()),
          [r, i] = y(!0);
        return (
          A(
            () => (
              n.hydrateCache(),
              c(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          E(xS.Provider, { value: r, children: E(bS.Provider, { value: n, children: e }) })
        );
      }),
      (CS = (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Me.WillChange = Ie),
      (wS = { priority: void 0, canYield: !0 }),
      (X = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Gd(e, t);
            case `boolean`:
              return qd(e);
            case `color`:
              return Xd(e);
            case `date`:
              return Qd(e);
            case `enum`:
              return ef(e);
            case `file`:
              return nf(e);
            case `link`:
              return af(e);
            case `number`:
              return sf(e);
            case `object`:
              return uf(e, t);
            case `responsiveimage`:
              return ff(e);
            case `richtext`:
              return mf(e);
            case `string`:
              return vf(e);
            case `vectorsetitem`:
              return gf(e);
            case `unknown`:
              return e;
            default:
              B(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ue(e)
            ? { type: `boolean`, value: e }
            : Ye(e)
              ? { type: `date`, value: e.toISOString() }
              : L(e)
                ? { type: `number`, value: e }
                : I(e)
                  ? { type: `string`, value: e }
                  : We(e)
                    ? { type: `array`, value: e.map(X.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => X.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => X.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = yf(e),
            i = yf(t);
          return qe(r) || qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = yf(e),
            i = yf(t);
          return qe(r) || qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = yf(e),
            i = yf(t);
          return qe(r) || qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(X.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return I(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              B(e);
          }
        },
      }),
      (TS = { type: `unknown`, isNullable: !0 }),
      (ES = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = yc(e);
          z(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (z(n !== `array`, `Array properties are not supported`),
              z(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (Je(i)) continue;
            let a = this.schema[t];
            if (!Ke(a)) {
              if ((z(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await xf(this.collection, this.locale))[t]?.[n];
          return Eh.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await xf(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Md(e);
            i && (await i);
            let a = t[r];
            z(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await xf(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Md(t);
            e && (await e);
            let a = n[Number(i)];
            (z(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (DS = new Map()),
      (OS = new WeakMap()),
      (kS = `$r_`),
      (AS = new Map()),
      (jS = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Mf(e, t)), (this.priority = Df(n)));
        }
        *resolveArrayValue(e) {
          return yield* Id(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* W(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          z(kf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          z(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return Ze(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          z(jf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (z(n, `Can't find collection for vector set item pointer`),
            z(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return Ze(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (MS = `index`),
      (NS = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (PS = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new IS();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (FS = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Z();
      }),
      (IS = class extends NS {
        name = `Indexes`;
      }),
      (LS = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          z(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                z(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Of(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                z(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Af(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends NS {
        name = `Fields`;
      }),
      (RS = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (zS = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== MS) return !1;
          return !0;
        }
      }),
      (BS = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (VS = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (z(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (z(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new zS();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new BS(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          z(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (z(e, `Field must exist`), e.field);
        }
      }),
      (HS = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = If(),
            i = Lf(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (US = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (WS = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (GS = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (KS = class extends GS {
        group;
        getGroup() {
          return (z(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (z(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Nd(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Pd(this.evaluate(void 0), void 0, e);
        }
      }),
      (qS = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (JS = class e extends KS {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new BS(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new qS(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Id(
              n.tuples.map((t) =>
                Id(
                  this.projections.map((n) => W({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new US();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            z(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (YS = { type: 0 }),
      ($ = class extends GS {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return Nd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Pd(this.evaluate(void 0, void 0));
        }
      }),
      (XS = { type: 0 }),
      (ZS = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (QS = class e extends $ {
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new ZS(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* W({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Id(
              this.conditions.map((n) =>
                W({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (X.equal(n, e, XS)) return t;
          } else for (let { when: e, then: t } of r) if (Jd(e)) return t;
          return i;
        }
      }),
      ($S = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new VS();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new zS();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Ke(t)) continue;
                a.add(t.field);
                let r = new RS(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new LS(Ff(this.fieldId++), void 0, t.definition, void 0),
                  a = new qS(t, r);
                i.push(a);
                let s = new RS(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Ke(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              z(n.alias, `Subqueries should have an alias`);
              let r = Ff(this.fieldId++),
                a = n.alias,
                s = new LS(r, a, t.definition, void 0),
                c = new qS(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              B(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = wf(t.data, this.locale),
            i = t.alias,
            a = new PS(Nf(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new LS(Ff(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new LS(Ff(this.fieldId++), MS, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: MS, collectionName: i });
            let t = new zS(),
              r = new RS(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new zS(),
              o = new FS(Pf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new zS(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              B(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              B(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(TS, null);
        }
        buildLiteralValue(e) {
          let t = X.parse(e.value);
          return this.normalizer.newScalarConstant(TS, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (z(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                z(n, `Missing argument`),
                z(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                z(n, `Missing argument`),
                z(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              B(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new eC(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new eC(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new ZS(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              B(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              B(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (eC = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (tC = class e extends KS {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new BS(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Id(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Jd(n[t] ?? null));
        }
      }),
      (nC = class e extends KS {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * HS : 50 * HS);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Ad()),
            i = Ad(),
            a = [];
          for (let n of r) {
            let r = Md(i);
            r && (yield r);
            let o = new US();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new WS(n, a);
        }
      }),
      (rC = class e extends KS {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new BS(new zS(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (iC = class e extends KS {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return G(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * HS);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Ad()),
            r = Ad(),
            i = [];
          for (let a of n) {
            let n = Md(r);
            n && (yield n);
            let o = new US();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new WS(t, i);
        }
      }),
      (aC = class e extends KS {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new BS(new zS(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (oC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Jd(n) && Jd(r) };
        }
      }),
      (sC = class extends $ {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (cC = { type: 0 }),
      (lC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: X.contains(n, r, cC) };
        }
      }),
      (uC = { type: 0 }),
      (dC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: X.endsWith(n, r, uC) };
        }
      }),
      (fC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.equal(n, r, YS) };
        }
      }),
      (pC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.greaterThan(n, r, YS) };
        }
      }),
      (mC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.greaterThanOrEqual(n, r, YS) };
        }
      }),
      (hC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.lessThan(n, r, YS) };
        }
      }),
      (gC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.lessThanOrEqual(n, r, YS) };
        }
      }),
      (_C = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !X.equal(n, r, YS) };
        }
      }),
      (vC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Jd(n) || Jd(r) };
        }
      }),
      (yC = { type: 0 }),
      (bC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: X.startsWith(n, r, yC) };
        }
      }),
      (xC = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof tC) {
            if (e.predicate instanceof oC) {
              let n = new rC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof vC) {
              let n = new aC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof iC)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new nC(n, Rf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof tC) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof iC)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof fC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof sC &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof _C &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof sC &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof hC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof sC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof gC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof sC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof pC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof sC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof mC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof sC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof lC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof sC &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof bC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof sC &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof sC &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new nC(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (SC = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new CC();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          z(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (CC = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (wC = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (TC = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new SC(zf(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new wC(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            z(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (EC = class e extends KS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new BS(new zS(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new WS(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new US();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof fC) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new WS(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new US();
              (n.merge(i),
                n.merge(a),
                Jd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (DC = class e extends KS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new BS(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* W({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = cf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (OC = class e extends KS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new BS(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* W({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = cf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (kC = class e extends $ {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return G(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) Ke(n.collection) || e.add(n);
          return new BS(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new US();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (AC = class e extends $ {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            z(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return X.cast(n, this.definition);
        }
      }),
      (jC = class e extends $ {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return G(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (Ke(this.field.collection) || e.add(this.field), new BS(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new US();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (MC = { type: 0 }),
      (NC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.in(n, r, MC) };
        }
      }),
      (PC = { type: 1 }),
      (FC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: X.indexOf(n, r, PC) };
        }
      }),
      (IC = class extends Error {}),
      (LC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Vf(n),
            a = Vf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (RC = class e extends $ {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return G(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: X.length(n) };
        }
      }),
      (zC = class e extends $ {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Jd(yield* this.input.evaluate(e, t)) };
        }
      }),
      (BC = { type: 0 }),
      (VC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !X.in(n, r, BC) };
        }
      }),
      (HC = class extends $ {
        constructor(e, t) {
          z(e.name !== MS, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (z(e, `Context must exist`), e.getValue(this.field))
            : (z(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (UC = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new iC(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new nC(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new EC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof sC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof EC && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new tC(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new JS(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof JS &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new DC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new OC(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof sC) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new HC(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new sC(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof zC)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof fC) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof _C) return this.newScalarEquals(e.left, e.right);
          if (e instanceof hC) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof gC) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof pC) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof mC) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof oC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof vC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new zC(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof sC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof sC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof sC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof sC && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new oC(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof sC && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof sC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof sC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof sC && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new vC(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof HC;
          if (t instanceof HC && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new fC(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof HC;
          if (t instanceof HC && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new _C(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof HC;
          if (t instanceof HC && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new hC(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof HC;
          if (t instanceof HC && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new gC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof HC;
          if (t instanceof HC && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new pC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof HC;
          if (t instanceof HC && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new mC(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new NC(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new VC(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new ZS(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new QS(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new lC(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new bC(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new dC(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new RC(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new FC(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new kC(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new jC(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new LC(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new AC(e, t);
          return this.finishScalar(n);
        }
      }),
      (WC = class extends KS {}),
      (GC = class e extends WC {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Z();
          return new BS(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * HS).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          z(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            z(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Hf(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                z(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new US();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (z(s, `Item not found`), z(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (KC = { type: 0 }),
      (qC = class e extends WC {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== MS && (Ke(e.collection) || t.add(e));
          return new BS(new zS(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === MS) {
                let r = n.collection;
                z(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                z(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                z(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!X.equal(a, o, KC)) {
                if (qe(a) || X.lessThan(a, o, KC)) return i ? -1 : 1;
                if (qe(o) || X.greaterThan(a, o, KC)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (JC = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new TC();
        normalizer = new UC(this.memo);
        explorer = new xC(this.normalizer);
        optimize(e) {
          let t = new $S(this.normalizer, this.query, this.locale).build(),
            n = Md(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (z(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new GC(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new qC(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (YC = Od(`query-engine`)),
      (XC = class {
        async evalQuery(e, t, n, r) {
          YC.enabled &&
            YC.debug(`Query:
${tp(e)}`);
          let i = new jS(e, t, r),
            a = new JC(e, t, i),
            o = Md(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = Qe(s) ? await s : s,
            u = Md(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Md(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(W(a, r)));
          }
          let h = Fd(Id(m, r), r);
          return n ? [Qe(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new jS(t, n, r);
          return Fd(
            Id(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return W(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (ZC = `style[data-framer-breakpoint-css]`),
      (QC = `page`),
      ($C = Symbol(`cycle`)),
      (nw = (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (rw = h.createContext(void 0)),
      (iw = () => h.useContext(rw)),
      Le(ih(), 1),
      (aw = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (ow = { opacity: 0 }),
      (sw = { opacity: 1 }),
      (cw = Wp(
        h.forwardRef(function (e, n) {
          let {
              background: r,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: l,
              ...u
            } = e,
            d = { ...l },
            f = t(() => xo(r), [r]),
            [p, m] = y();
          h.useEffect(() => {
            if (!r?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                c(() => m({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = r.src));
          }, [r?.src, s, f]);
          let g = f ?? p;
          return (
            s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            r && delete d.background,
            w(So(e.as), {
              ...u,
              style: d,
              ref: n,
              draggable: o,
              children: [r && E(Ua, { image: r, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (uw = !vn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (dw =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (fw = `{{ text-placeholder }}`),
      (pw = `rich-text-wrapper`),
      (mw = Po(
        D(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: h,
              center: g,
              className: _,
              stylesPresetsClassName: v,
              visible: y = !0,
              opacity: b,
              rotation: x = 0,
              verticalAlignment: S = `top`,
              isEditable: w = !1,
              environment: T = q.current,
              withExternalLayout: D = !1,
              positionSticky: O,
              positionStickyTop: k,
              positionStickyRight: j,
              positionStickyBottom: ee,
              positionStickyLeft: ne,
              __htmlStructure: N,
              __fromCanvasComponent: re = !1,
              _forwardedOverrideId: ie,
              _forwardedOverrides: ae,
              _usesDOMRect: oe,
              children: se,
              ...ce
            } = e,
            le = mo(),
            ue = Bo(e),
            de = M(null),
            fe = n ?? de,
            { navigate: pe, getRoute: me } = St(),
            he = wt();
          (Hn(e.preload ?? []), Go(e, fe));
          let ge = C(Sy),
            _e = yl(),
            P = s,
            ve = ie ?? r;
          if (ve && ae) {
            let e = ae[ve];
            typeof e == `string` && (P = e);
          }
          let ye = ``;
          if (P) {
            let e = Kp(P);
            ye = N ? N.replace(fw, e) : `<p>${e}</p>`;
          } else if (a) ye = a;
          else if (c) {
            let e = Kp(c);
            ye = N ? N.replace(fw, e) : `<p>${e}</p>`;
          } else o && (ye = o);
          let be = Vl(),
            xe = t(() => (_e || !me || !he ? ye : qp(ye, me, he, be)), [ye, me, he, be]);
          if (
            (A(() => {
              let e = fe.current;
              if (e === null) return;
              function t(e) {
                let t = Fl(e.target, fe.current);
                Tn(e) ||
                  !pe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Tl(pe, t, be) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [pe, be]),
            Xp(l, re, fe),
            !y)
          )
            return null;
          let Se = w && T() === q.canvas,
            F = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Yp(S),
              opacity: Se ? 0 : b,
              flexShrink: 0,
            },
            Ce = q.hasRestrictions(),
            we = uo(e, le || 0, !1),
            Te = oe && (u === `auto` || d === `auto`),
            Ee = !!e.transformTemplate || !we || !Ce || re || Te,
            De = Ee ? (e.transformTemplate ?? zo(g)) : void 0;
          if (!D) {
            if (we && Ce && !Te) {
              let e = z_.getNumber(x).toFixed(4);
              ((F.transform = `translate(${we.x}px, ${we.y}px) rotate(${e}deg)`),
                (F.width = we.width),
                (F.minWidth = we.width),
                (F.height = we.height));
            } else
              ((F.left = f),
                (F.right = p),
                (F.top = m),
                (F.bottom = h),
                (F.width = u),
                (F.height = d),
                (F.rotate = x));
            O
              ? (!_e || ge) &&
                ((F.position = `sticky`),
                (F.willChange = `transform`),
                (F.top = k),
                (F.right = j),
                (F.bottom = ee),
                (F.left = ne))
              : _e && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`);
          }
          return (
            Ec(e, F),
            Cc(e, F),
            Object.assign(F, e.style),
            E(te.div, {
              id: r,
              ref: fe,
              ...ce,
              ...Io(Ee ? g : void 0, e.style),
              style: F,
              layoutId: ue,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": g,
              className: Oc(_, v, pw),
              transformTemplate: De,
              dangerouslySetInnerHTML: { __html: xe },
            })
          );
        })
      )),
      (hw = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (gw = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (_w = D(function (e, t) {
        return E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (vw = te.create(_w)),
      (yw = D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return E(vw, {
          ...r,
          ref: i,
          viewBox: t,
          children: E(te.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (bw = []),
      (xw = `RichTextContainer`),
      (Sw = D(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = q.current,
            fonts: p = bw,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: v,
            positionSticky: y,
            positionStickyBottom: b,
            positionStickyLeft: x,
            positionStickyRight: S,
            positionStickyTop: w,
            right: T,
            rotation: D = 0,
            style: O,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: j,
            top: ee,
            verticalAlignment: te = `top`,
            visible: ne = !0,
            width: N,
            withExternalLayout: re = !1,
            viewBox: ie,
            viewBoxScale: ae = 1,
            effect: oe,
            ...se
          } = e,
          ce = mo(),
          le = f(),
          ue = le === q.canvas,
          de = ue || le === q.export,
          fe = C(Sy),
          pe = Bo(e),
          me = M(null),
          he = n ?? me;
        (Go(e, he), Xp(p, r, he));
        let ge = am(oe, he),
          _e = t(() => {
            if (d) return pm(d, A, j, s, void 0, ge.getTokenizer());
          }, [d, A, j, s, ge]);
        if (!ne) return null;
        let P = { opacity: h && ue ? 0 : v },
          ve = Yp(te);
        ve !== sy.justifyContent && (P.justifyContent = ve);
        let ye = {},
          be = q.hasRestrictions(),
          xe = uo(e, ce || 0, !1),
          Se = o && (N === `auto` || m === `auto`),
          F = !!e.transformTemplate || !xe || !be || r || Se,
          Ce = F ? (e.transformTemplate ?? zo(u)) : void 0;
        (re ||
          (xe && be && !Se
            ? ((ye.x = xe.x + (L(O?.x) ? O.x : 0)),
              (ye.y = xe.y + (L(O?.y) ? O.y : 0)),
              (ye.left = 0),
              (ye.top = 0),
              (P.rotate = z_.getNumber(D)),
              (P.width = xe.width),
              (P.minWidth = xe.width),
              (P.height = xe.height))
            : ((P.left = g),
              (P.right = T),
              (P.top = ee),
              (P.bottom = l),
              (P.width = N),
              (P.height = m),
              (P.rotate = D)),
          y
            ? (!de || fe) &&
              ((P.position = `sticky`),
              (P.willChange = `transform`),
              (P.top = w),
              (P.right = S),
              (P.bottom = b),
              (P.left = x))
            : ue && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)),
          Ec(e, P),
          Cc(e, P),
          Object.assign(P, k, O, ye),
          pe && (se.layout = `preserve-aspect`));
        let we = So(e.as),
          Te = se[`data-framer-name`] ?? _,
          Ee = ue ? um(_v(se)) : se,
          De = Io(F ? u : void 0, O);
        return I(e.viewBox)
          ? e.as === void 0
            ? E(yw, {
                ...Ee,
                ...De,
                ref: he,
                style: P,
                layoutId: pe,
                viewBox: ie,
                viewBoxScale: ae,
                transformTemplate: Ce,
                "data-framer-name": Te,
                "data-framer-component-type": xw,
                children: _e,
              })
            : E(we, {
                ...Ee,
                ...De,
                ref: he,
                style: P,
                layoutId: pe,
                transformTemplate: Ce,
                "data-framer-name": Te,
                "data-framer-component-type": xw,
                children: E(yw, {
                  viewBox: ie,
                  viewBoxScale: ae,
                  style: { width: `100%`, height: `100%` },
                  children: _e,
                }),
              })
          : E(we, {
              ...Ee,
              ...De,
              ref: he,
              style: P,
              layoutId: pe,
              transformTemplate: Ce,
              "data-framer-name": Te,
              "data-framer-component-type": xw,
              children: _e,
            });
      })),
      (Cw = Po(
        D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (I(a)) {
            !r.stylesPresetsClassName &&
              R(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [I(t) ? `html` : `htmlFromDesign`]: a };
            return E(mw, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && I(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return E(Sw, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (ww = `framer/asset-reference,`),
      (Tw = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Em(t);
        return E(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: E(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (Ew = yn()),
      (Dw = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (Ow = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (kw = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Oy(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Om(e);
            (s &&
              (t && km(s, n),
              (s.id = n),
              (o = Pm(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          Ew && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = Ow),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          Ew && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new Dw(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !Ew) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        Ew && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${Ow}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (Aw = new kw()),
      (jw = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (Mw = D(function (e, t) {
        let n = mo(),
          r = Bo(e),
          i = h.useRef(null),
          a = t ?? i,
          o = iw();
        return (
          Go(e, i),
          E(Pw, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (Nw = 5e4),
      (Pw = class e extends Dy {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...Dy.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return uo(e, e.parentSize || 0);
        }
        container = h.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return uo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (Aw.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Rm(this.container, this.props);
        }
        componentWillUnmount() {
          (Aw.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (jv.isImageObject(t) &&
            jv.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            Xo(this.svgElement, `fill`, null, !1),
            Rm(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = z_.getNumber(r);
          if (
            ((e.opacity = V(this.props.opacity) ? this.props.opacity : 1), q.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              so(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = lv;
            if (l === q.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: _,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            D = {};
          (this.collectLayout(T, D),
            xc(this.props, T),
            Ec(this.props, T),
            Dy.applyWillChange(this.props, T, !1));
          let O = null;
          if (typeof r == `string` || K.isColorObject(r)) {
            let e = K.isColorObject(r) ? r.initialValue || K.toRgbString(r) : r;
            ((T.fill = e), (T.color = e));
          } else if (Fy.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Fy.hash(t)}`;
            T.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = vm(t, x);
            O = E(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: E(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  E(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Ly.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Ly.hash(t)}`;
            T.fill = `url(#${n})`;
            let i = ym(t, x);
            O = E(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: E(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  E(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (jv.isImageObject(r)) {
            let e = wm(r, C, x);
            e &&
              ((T.fill = `url(#${e.id})`),
              (O = E(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: E(`defs`, { children: E(Tw, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          Object.assign(k, Io(A ? this.props.center : void 0, this.props.style));
          let j =
              !y &&
              !O &&
              !T.fill &&
              !T.background &&
              !T.backgroundImage &&
              i.length < Nw &&
              !Fm(i) &&
              !Im(i),
            ee = null;
          if (j)
            ((T.backgroundSize = `100% 100%`),
              (T.backgroundImage = $e(i)),
              Aw.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = Aw.subscribe(i, !m, e, y);
            (Aw.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              Lm(T) && (T.overflow = `hidden`),
              (ee = w(g, {
                children: [
                  O,
                  E(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: D,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    jv.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let M = So(this.props.as),
            { href: te, target: ne, rel: N, onClick: re, onTap: ie } = this.props,
            ae = s || c;
          return E(M, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? zo(this.props.center) : void 0,
            id: e,
            ref: p,
            style: T,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: ae ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ae ? void 0 : `true`,
            onTap: ie,
            onClick: re,
            href: te,
            target: ne,
            rel: N,
            children: ee,
          });
        }
      }),
      (Fw = Po(Mw)),
      (Iw = 1e3),
      (Lw = `Variable`),
      (Rw = `explicitInter`),
      (Fe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = De(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  up as $,
  Vm as A,
  ii as B,
  wv as C,
  zb as D,
  Lb as E,
  pi as F,
  Nl as G,
  Di as H,
  it as I,
  ei as J,
  Jb as K,
  zw as L,
  zm as M,
  np as N,
  Rb as O,
  $h as P,
  gl as Q,
  st as R,
  Oc as S,
  Bb as T,
  mp as U,
  yx as V,
  Zm as W,
  zc as X,
  op as Y,
  wt as Z,
  ox as _,
  Ob as a,
  St as at,
  by as b,
  Eh as c,
  Kv as ct,
  Dd as d,
  Cg as dt,
  Ts as et,
  Nb as f,
  Fw as g,
  Cw as h,
  Ta as i,
  Ot as it,
  Hm as j,
  Gv as k,
  Kx as l,
  Mp as lt,
  q as m,
  ax as n,
  Bn as nt,
  Ox as o,
  Dm as ot,
  XC as p,
  Aw as q,
  hb as r,
  Oi as rt,
  cw as s,
  jp as st,
  Wb as t,
  yl as tt,
  qn as u,
  Xm as ut,
  Bm as v,
  $m as w,
  Jv as x,
  vc as y,
  _h as z,
};
//# sourceMappingURL=framer.CfbrMSxG.mjs.map
