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
  B as N,
  C as P,
  D as ne,
  E as re,
  F as ie,
  G as ae,
  H as oe,
  I as se,
  K as ce,
  L as le,
  M as ue,
  N as de,
  O as fe,
  P as pe,
  R as me,
  S as he,
  T as ge,
  U as F,
  V as _e,
  W as ve,
  _ as ye,
  a as be,
  b as I,
  c as xe,
  d as Se,
  f as Ce,
  g as we,
  h as Te,
  i as Ee,
  j as De,
  l as Oe,
  m as ke,
  n as Ae,
  o as je,
  p as Me,
  q as Ne,
  r as Pe,
  s as Fe,
  u as Ie,
  v as Le,
  w as Re,
  x as ze,
  y as Be,
  z as Ve,
} from "./motion.CZCLJn0h.mjs";
function He(e) {
  return typeof e == `function`;
}
function Ue(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function We(e) {
  return Array.isArray(e);
}
function z(e) {
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
  return z(e) && He(e.return);
}
function Ze(e) {
  return z(e) && He(e.then);
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
  if (sg.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (sg.set(e, t), t))
    .catch((t) => {
      throw (sg.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch($h), sg.set(e, r));
}
function rt(e, t) {
  eg && (cg.set(e, t), lg.has(e) && nt(e, t, `registered loader ${e}`));
}
function it() {
  if (!eg) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(ug),
      i = r ? e.slice(ug.length) : e;
    if (!i) continue;
    lg.add(i);
    let a = cg.get(i);
    a ? nt(i, a, `registered loader ${i}`) : r && nt(i, () => import(n), n);
  }
}
function at(e) {
  return typeof e == `object` && !!e && !T(e) && fg in e;
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
      if (i || !n || !sg.has(n)) return;
      let e = sg.get(n);
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
      if ((o(), n !== void 0 && dg !== void 0 && dg.add(n), !i)) throw s(e);
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
  return e === null || !(mg in e) ? !1 : typeof e.equals == `function`;
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
  let n = pg(e);
  if (n.length !== pg(t).length) return !1;
  for (let r of n)
    if (!ct(t, r) || (!(r === `_owner` && ct(e, `$$typeof`) && e.$$typeof) && !ut(e[r], t[r])))
      return !1;
  return !0;
}
function _t(e, t) {
  let n = pg(e);
  if (n.length !== pg(t).length) return !1;
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
  return E(hg.Provider, { value: e, children: t });
}
function St() {
  return h.useContext(hg);
}
function Ct({ routes: e, children: n }) {
  let r = bt(e),
    i = t(() => ({ getRoute: r }), [r]);
  return E(hg.Provider, { value: i, children: n });
}
function wt() {
  let e = St(),
    n = C(gg),
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
function B(e, t) {
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
function V(e, t) {
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
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function At(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === jg
  );
}
function jt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Mt(e) {
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
function Nt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Mt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Pt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Ft(e) {
  return Mg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function It(e) {
  return !(!Number.isInteger(e) || e < 0 || e > kg);
}
function Lt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Og);
}
function Rt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return It(+e);
}
function zt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Rt(t[n]); n--);
  return ((t.length = n + 1), t);
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
  return qt(JSON.parse(e), t);
}
function qt(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === xg) return;
    if (e === Cg) return NaN;
    if (e === wg) return 1 / 0;
    if (e === Tg) return -1 / 0;
    if (e === Eg) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
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
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = Ig(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === Dg) {
        let t = s[1];
        if (!Lt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[kg] = void 0), delete n[kg]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!It(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== Sg && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function Jt(e, t) {
  let n = Yt(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function Yt(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return xg;
    if (Number.isNaN(n)) return Cg;
    if (n === 1 / 0) return wg;
    if (n === -1 / 0) return Tg;
    if (n === 0 && 1 / n < 0) return Eg;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new Ag(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new Ag(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (kt(n)) u = Xt(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new Ag(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = jt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Nt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Nt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Nt(r)},"${i}"]` : `["RegExp",${Nt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += Sg;
            else {
              let t = zt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + Dg + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += Sg));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${kt(e) ? Xt(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
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
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${Fg(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Nt(n.toString())}]`;
          break;
        default:
          if (!At(n)) throw new Ag(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Pt(n).length > 0) throw new Ag(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new Ag(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Ft(e)), (u += `,${Nt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new Ag(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Ft(r)), (u += `${Nt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function Xt(e) {
  let t = typeof e;
  return t === `string`
    ? Nt(e)
    : e === void 0
      ? xg.toString()
      : e === 0 && 1 / e < 0
        ? Eg.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function Zt(e, t, n = `lazy`) {
  switch ((Lg.__framer_events?.push([e, t, n]), e)) {
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
function Qt(e) {
  return L(e) && (e === `` || zg.test(e));
}
function $t() {
  return { [Bg.QueryCache]: new Map(), [Bg.CollectionUtilsCache]: new Map() };
}
function en() {
  if (!eg) return;
  if (Vg !== void 0) return Vg;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Vg = Kt(e.text) ?? $t();
    } catch (e) {
      ((Vg = $t()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      rg(() => {
        (e?.remove(), (e = null));
      }),
      Vg
    );
  }
}
function tn(e, t) {
  let n = en();
  return n ? n[e].has(t) : !1;
}
function nn(e, t) {
  let n = en();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function rn(e) {
  return e?.id ?? vg;
}
function an(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function on(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Gg.has(n)) return Gg.get(n);
    let r = new qg(n, t);
    return (Gg.set(n, r), r);
  };
}
function sn({ children: e, collectionUtils: n }) {
  let r = t(() => ({ get: on(n) }), [n]);
  return E(Kg.Provider, { value: r, children: e });
}
function cn() {
  return C(Kg);
}
function ln(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function un() {
  return o === void 0 ? void 0 : o;
}
function dn() {
  let e = un();
  return e ? Jg.test(e.platform) : !1;
}
function fn() {
  let e = un();
  return e
    ? Yg.test(e.platform)
      ? !0
      : Xg.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function pn() {
  return dn() || fn();
}
function mn() {
  let e = un();
  return e ? Zg.test(e.userAgent) : !1;
}
function hn() {
  let e = un();
  return e ? Qg.test(e.userAgent) && $g.test(e.vendor) && !mn() : !1;
}
function gn() {
  let e = un();
  return e ? e_.test(e.userAgent) && t_.test(e.vendor) : !1;
}
function _n() {
  let e = un();
  return e ? n_.test(e.userAgent) : !1;
}
function vn() {
  return typeof document == `object`;
}
function yn() {
  let e = un();
  if (!e) return -1;
  let t = r_.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function bn() {
  let e = un();
  return e ? i_.test(e.userAgent) : !1;
}
function xn() {
  return !1;
}
function Sn() {
  let e = un();
  return e && a_.test(e.userAgent) ? `tablet` : e && o_.test(e.userAgent) ? `phone` : `desktop`;
}
function Cn() {
  return Sn() === `desktop`;
}
function wn(e) {
  return pn() ? e.metaKey : e.ctrlKey;
}
function Tn() {}
async function En() {}
function Dn(e) {
  return typeof e == `function` ? e() : e;
}
function On() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function kn(e, t) {
  let n = e?.priority,
    r = On();
  return n === `background`
    ? (t?.() ?? ln(1))
    : r?.yield
      ? r.yield(e).catch(Tn)
      : r?.postTask
        ? r.postTask(Tn, e).catch(Tn)
        : t
          ? t()
          : n === `user-blocking`
            ? u_
            : ln(0);
}
function An(e, t, n) {
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
    vn() && (document.addEventListener(`visibilitychange`, c), s.addEventListener(`pagehide`, o));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, d_),
        e(() => {
          kn(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return vn()
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
      o = (n ?? r === `paint`) ? u(a) : kn(a, t);
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
        o = t ?? (e.priority === `user-blocking` ? s_ : c_),
        s = vn() && document.hidden ? l_ : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !vn() && !t ? (n ? void 0 : u_) : n ? m(i, r) : f(i);
  }
  return h;
}
function jn(e, t = !1) {
  let n = ``;
  if (s !== void 0)
    if (t) n = s.location.search;
    else {
      let e = s.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? s.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Mn(n, e) : e;
}
function Mn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== m_ && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Nn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(h_)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
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
function Pn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Fn({
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
      u = await Nn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Pn(u.path, t.slug)),
    o && u.path && (u.path = jn(u.path, !0)),
    u
  );
}
async function In({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(h_)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (L(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Ln({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === vg) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await In({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Rn({
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
      (await Ln({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Fn({
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
function zn() {
  return h.useContext(v_);
}
function Bn() {
  let e = cn(),
    { getRoute: t } = St(),
    { activeLocale: n, locales: i } = zn();
  return r(
    (r, a, o) => {
      if (!r || !t) return;
      let s = t(r),
        { pathVariables: c } = a;
      return Hn(
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
function Vn(e, t = !0) {
  let n = Bn();
  A(() => {
    if (!(!t || !b_)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Hn(e, t, n = {}) {
  if (!b_ || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !at(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await p_({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Un(n, e, t, r));
    } catch {}
  }
}
async function Un(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Rn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === vg),
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
function Wn(e, t) {
  return e.replace(h_, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Gn() {
  if (x_) return;
  x_ = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (s.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((s.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), Zt(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Kn({ children: e, value: t }) {
  return E(S_.Provider, { value: t, children: e });
}
function qn() {
  return h.useContext(S_);
}
function Jn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Yn(e) {
  let t = C_,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < w_;) ((n = e.next(t)), r.push(n.value), (t += C_));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - C_ }
  );
}
function Xn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Zn(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = Xn(e.x),
    [a, o] = Xn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Qn(e) {
  let [t, n] = Xn(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function $n(e) {
  let { x: t, y: n } = Zn(e);
  return Math.hypot(Math.max(t, s.innerWidth - t), Math.max(n, s.innerHeight - n));
}
function er(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function tr(e) {
  return e ? D_[e] : void 0;
}
function nr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (rr(t)) {
    let { easing: e, duration: n } = Yn(
      Re({ keyframes: [0, 1], ...ir(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = tr(n?.mask?.type),
    o = er(n, `start`, e, a),
    s = er({ ...O_, mask: n.mask }, `end`, e, a);
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
function rr(e) {
  return e.type === `spring`;
}
function ir(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function ar({ exit: e = A_, enter: t }) {
  let n = document.createElement(`style`);
  n.id = k_;
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
    (r += nr(`exit`, e)),
    (r += nr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function or() {
  rg(() => {
    ke.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(k_);
      e && document.head.removeChild(e);
    });
  });
}
function sr() {
  return !!document.startViewTransition;
}
function cr(e) {
  return new Promise((t) => {
    ke.render(() => {
      (performance.mark(`framer-vt-style`), ar(e), t());
    });
  });
}
async function lr(e, t, n) {
  if (!sr()) {
    e();
    return;
  }
  if ((await cr(t), n?.aborted)) return;
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
      .catch(j_),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), or());
      })
      .catch(j_),
    r
  );
}
function ur() {
  let e = qn(),
    t = M(void 0);
  return (
    A(() => {
      t.current &&= (t.current(), void 0);
    }),
    r(
      (n, r, i, a) => {
        let o = Jn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return lr(
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
function dr(e, t) {
  rg(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function fr(e, t) {
  rg(() => {
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
function pr(e) {
  rg(() => {
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
function mr(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await p_({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function hr(e) {
  let t = M(new Set());
  return (
    mr(
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
function gr(e) {
  return z(e) && `routeId` in e;
}
function _r(e = s.history.state) {
  return gr(e) ? e : void 0;
}
function vr(e) {
  return e?.entryId;
}
function yr(e) {
  P_ = e;
}
function br() {
  return P_;
}
function xr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Sr(e, t) {
  return Cr(e, vr(e) ?? vr(t));
}
function Cr(e, t = xr()) {
  return { ...e, entryId: t };
}
function wr(e, t) {
  (performance.mark(`framer-history-replace`), yr(Sr(e, _r())), t && dr(t, s.location.href));
  let n =
    !t || t === s.location.href
      ? s.History.prototype.replaceState.bind(s.history)
      : s.history.replaceState.bind(s.history);
  try {
    n(P_, ``, t);
  } catch {}
}
function Tr(e) {
  (performance.mark(`framer-history-replace`),
    yr(Cr(e)),
    History.prototype.replaceState.call(s.history, P_, ``, void 0));
}
function Er(e, t) {
  (performance.mark(`framer-history-push`), yr(Cr(e)), dr(t, s.location.href), Gn());
  try {
    s.history.pushState(P_, ``, t);
  } catch {}
}
function Dr({
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
    wr({
      ..._r(),
      routeId: t,
      hash: o,
      pathVariables: n,
      localeId: r,
      contentLocaleId: i,
      canonicalPathVariables: a,
    });
  }, []);
}
function Or(e, t, n) {
  let i = ur(),
    a = hr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: c } = e,
    l = c ? `manual` : `after-transition`,
    u = M(void 0),
    d = r(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    f = r(
      async ({ state: e }) => {
        if (!gr(e)) return;
        let r = a({ popstate: !0 }),
          c = Dt();
        (r.promise.finally(c), vr(br()) !== (vr(e) ?? vr(_r())) && o(), yr(e));
        let {
            routeId: u,
            hash: f,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = L(f) ? f : s.location.hash ? s.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                u,
                L(m) ? m : void 0,
                _,
                s.location.pathname + s.location.search + s.location.hash,
                z(p) ? p : void 0,
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
          await s.navigation?.transition?.finished.catch($h),
          N_(),
          dr(s.location.href));
      },
      [t, a, o, d, n, i, l]
    ),
    p = r(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        gr(t) &&
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
      F_ && s.navigation.addEventListener(`navigate`, p),
      () => {
        (s.removeEventListener(`popstate`, f),
          F_ && s.navigation.removeEventListener(`navigate`, p));
      }
    ),
    [f, p]
  );
}
async function kr(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + Pn(Wn(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + i), !0)
    : !1;
}
function Ar() {
  let e = cn();
  return r((t) => jr({ ...t, collectionUtils: e }), [e]);
}
async function jr({ sitePrefix: e, ...t }) {
  let n = await Fn(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!L(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await kr(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Mr(e) {
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
      if (!F_) {
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
function Nr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Pr(e) {
  return Nr(e.trim().toLowerCase().replace(I_, `-`));
}
function Fr({ children: e, value: t }) {
  return E(R_.Provider, { value: t, children: e });
}
function Ir() {
  return C(R_);
}
function Lr(e, t) {
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
function Rr(e, t) {
  return Lr(() => e, t);
}
function zr() {
  return s.location.search;
}
function Br() {
  return ``;
}
function Vr(e) {
  return (
    B_.add(e),
    s.addEventListener(`popstate`, e),
    () => {
      (B_.delete(e), s.removeEventListener(`popstate`, e));
    }
  );
}
function Hr() {
  for (let e of B_) e();
}
function Ur({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = Ir() === `preview`,
    [o, l] = y(``),
    u = M(t);
  z_(() => {
    u.current = t;
  }, [t]);
  let d = i(Vr, zr, Br),
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
        if ((await p_({ continueAfter: `paint` }), r || n() || u.current !== i)) return;
        let o = _r();
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
        (h || g ? Er(_, v) : wr(_, v), Hr());
      },
      [n, a, t]
    ),
    _ = Lr(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: g }), [h, g]);
  return E(V_.Provider, { value: _, children: e });
}
function Wr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Gr(e),
    [r, i] = Gr(t),
    a = Kr(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Gr(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Kr(e, t) {
  if (e === t || ((e = `/` + qr(e)), (t = `/` + qr(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = W_(e, 1 + s);
    if (n !== W_(t, 1 + s)) break;
    n === U_ && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (W_(t, 1 + s) === U_) return K_(t, 1 + s + 1);
      if (s === 0) return K_(t, 1 + s);
    } else r > a && (W_(e, 1 + s) === U_ ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || W_(e, s) === U_) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${K_(t, 1 + o)}`;
}
function qr(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = W_(e, o);
    else if (Y_(a)) break;
    else a = U_;
    if (Y_(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || W_(t, t.length - 1) !== H_ || W_(t, t.length - 2) !== H_) {
            if (t.length > 2) {
              let e = G_(t, J_);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = K_(t, 0, e)), (n = t.length - 1 - G_(t, J_))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          q_ && ((t += t.length > 0 ? `${J_}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${J_}${K_(e, r + 1, o)}`) : (t = K_(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === H_ && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Jr(e) {
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
function Yr(e, t) {
  let n = e.replace(h_, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function Xr(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Yr(i, r);
  }
  if (e.includes(`:`)) return Yr(e, r);
  let i = t.elements?.[e];
  return i ? Yr(i, r) : e;
}
function Zr(
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
  if ((i && e && (m = Xr(i, e, o)), u)) return m ?? ``;
  let h = t ?? `/`;
  (n && f && (h = n[f] ?? h), r && (h = h.replace(h_, (e, t) => String(r[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(h_, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (X_.has(h) && s !== void 0) {
      let e = Jr(d);
      g = Wr(s.location.pathname, e + g);
    } else g = Wr(h, g);
  else g = Pn(g, p);
  let y = _ || v;
  return ((l || y) && (g = jn(g, y)), m && (g = `${g}#${m}`), g);
}
function Qr(e) {
  return Z_ in e && e[Z_] === 1;
}
function $r() {
  if (!Q_) return;
  ((ev = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Q_.forEach((n) => t.addEventListener(n, $_, e));
}
function ei() {
  return (
    A(() => {
      if (!ev || !Q_) return;
      let e = { capture: !0 },
        t = document.body;
      (Q_.forEach((n) => t.removeEventListener(n, $_, e)),
        (Q_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ti(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ni(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function ri() {
  ((bv = new yv()), bv.render.markStart());
}
function ii() {
  (S(() => {
    bv?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      bv?.useLayoutEffects.markRouterStart();
    }, []),
    A(() => {
      bv?.useEffects.markRouterStart();
    }, []));
}
function ai() {
  (S(() => {
    (bv?.render.markEnd(), bv?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((bv?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        xv = !0;
        return;
      }
      ke.read(() => {
        (bv?.browserRendering.requestAnimationFrame.markStart(),
          bv?.unattributedHydrationOverhead.measure());
      });
    }, []),
    A(() => {
      (bv?.useEffects.markStart(),
        bv?.browserRendering.hasStarted ||
          (bv?.mutationEffects.measure(), bv?.useEffects.markAreSynchronous()));
    }, []));
}
function oi() {
  (S(() => {
    bv?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (bv?.useLayoutEffects.markEnd(),
        !(xv || document.visibilityState !== `visible`) &&
          ke.read(() => {
            (bv?.browserRendering.requestAnimationFrame.markEnd(),
              p_().then(() => {
                bv?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    A(() => {
      bv?.useEffects.markEnd();
    }, []));
}
function si() {
  return (ai(), null);
}
function ci() {
  return (oi(), null);
}
function li(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return h.isValidElement(e) ? h.cloneElement(e, n) : E(e, { ...n });
}
function ui() {
  return Tv;
}
function di(e) {
  if (Ev?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: mi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = mi(t),
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
    Ev = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Ev.pathRoutes,
    paths: Ev.paths,
    pathRoutesLocalized: Ev.pathRoutesLocalized,
    pathsLocalized: Ev.pathsLocalized,
  };
}
function fi(e, t, n = !0, r = ui()) {
  return pi(e, t, r, n);
}
function pi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = di(e),
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
      let e = hi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = hi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = hi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = hi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function mi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function hi(e, t) {
  let n = [],
    r = gi(t).replace(h_, (e, t) => (n.push(t), `([^/]+)`)),
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
function gi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function _i(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function vi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = _i(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function yi(e, t) {
  let n = e.toLowerCase(),
    r = vi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function bi(e) {
  if (s === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in s)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function xi() {
  let e = bi(`abtests`);
  return new URLSearchParams(e?.description);
}
function Si(e, t, n) {
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
function Ci(e, t) {
  for (let [n, r] of t) Si(e, n, r);
}
function wi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ti(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Ei(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    Ti(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Ci(e, xi()), wi(e), n);
}
function Di(e) {
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
function Oi(e, ...t) {
  Dv.has(e) || (Dv.add(e), console.warn(e, ...t));
}
function ki(e, t, n) {
  Oi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ai(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Av in e &&
    e[Av] instanceof Function &&
    jv in e &&
    e[jv] instanceof Function
  );
}
function ji(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = kv(r);
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
function Mi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ni(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Pi(e) {
  return Math.round(e * 2) / 2;
}
function Fi(e, t) {
  return { x: e, y: t };
}
function Ii(e, t, n, r = !1) {
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
function Li(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ri(e) {
  let t = zi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function zi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Bi(e, t, n) {
  return (
    (Fv.rgb_r = e / 255),
    (Fv.rgb_g = t / 255),
    (Fv.rgb_b = n / 255),
    Fv.rgbToHsluv(),
    { h: Fv.hsluv_h, s: Fv.hsluv_s, l: Fv.hsluv_l }
  );
}
function Vi(e, t, n, r = 1) {
  return (
    (Fv.hsluv_h = e),
    (Fv.hsluv_s = t),
    (Fv.hsluv_l = n),
    Fv.hsluvToRgb(),
    { r: Fv.rgb_r * 255, g: Fv.rgb_g * 255, b: Fv.rgb_b * 255, a: r }
  );
}
function Hi(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Ui(e, t, n) {
  return {
    r: Li(e) ? Xi(e, 255) * 255 : 0,
    g: Li(t) ? Xi(t, 255) * 255 : 0,
    b: Li(n) ? Xi(n, 255) * 255 : 0,
  };
}
function Wi(e, t, n, r) {
  let i = [
    $i(Math.round(e).toString(16)),
    $i(Math.round(t).toString(16)),
    $i(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Gi(e, t, n) {
  let r,
    i,
    a = Xi(e, 255),
    o = Xi(t, 255),
    s = Xi(n, 255),
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
function Ki(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function qi(e, t, n) {
  let r, i, a;
  if (((e = Xi(e, 360)), (t = Xi(t * 100, 100)), (n = Xi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Ki(s, o, e + 1 / 3)), (i = Ki(s, o, e)), (a = Ki(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Ji(e, t, n) {
  ((e = Xi(e, 255)), (t = Xi(t, 255)), (n = Xi(n, 255)));
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
function Yi(e, t, n) {
  ((e = Xi(e, 360) * 6), (t = Xi(t * 100, 100)), (n = Xi(n * 100, 100)));
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
function Xi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Zi(e) && (e = `100%`);
    let t = Qi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Zi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Qi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function $i(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ea(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Nv[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Iv.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Iv.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Iv.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Ri(r[2] ?? ``), l: Ri(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Iv.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Ri(r[2] ?? ``),
              l: Ri(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Iv.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Ri(r[2] ?? ``), v: Ri(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Iv.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Ri(r[2] ?? ``),
                  v: Ri(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Iv.hex8.exec(t))
                ? {
                    r: ta(r[1] ?? ``),
                    g: ta(r[2] ?? ``),
                    b: ta(r[3] ?? ``),
                    a: na(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Iv.hex6.exec(t))
                  ? {
                      r: ta(r[1] ?? ``),
                      g: ta(r[2] ?? ``),
                      b: ta(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Iv.hex4.exec(t))
                    ? {
                        r: ta(`${r[1]}${r[1]}`),
                        g: ta(`${r[2]}${r[2]}`),
                        b: ta(`${r[3]}${r[3]}`),
                        a: na(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Iv.hex3.exec(t))
                      ? {
                          r: ta(`${r[1]}${r[1]}`),
                          g: ta(`${r[2]}${r[2]}`),
                          b: ta(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ta(e) {
  return parseInt(e, 16);
}
function na(e) {
  return ta(e) / 255;
}
function ra(e) {
  let t = Lv.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ia(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function aa({ r: e, g: t, b: n, a: r }) {
  return { r: ia(e), g: ia(t), b: ia(n), a: r };
}
function oa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function sa({ r: e, g: t, b: n, a: r }) {
  return { r: oa(e), g: oa(t), b: oa(n), a: r };
}
function ca({ r: e, g: t, b: n, a: r }) {
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
function la(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function ua({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = la(e),
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
function da(e) {
  return Vv(Bv(e));
}
function fa(e) {
  return zv(Rv(e));
}
function pa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ga({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = ma(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ga(e)
              : _a(e)),
    i
  );
}
function ma(e) {
  let t = ea(e);
  if (t) return t.format === `hsl` ? _a(t) : t.format === `hsv` ? ha(t) : ga(t);
}
function ha(e) {
  let t = Yi(e.h, e.s, e.v);
  return { ...Gi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : va(e.a) };
}
function ga(e) {
  let t = Ui(e.r, e.g, e.b);
  return { ...Gi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : va(e.a) };
}
function _a(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Li(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Li(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = zi(e.s)),
    (r = Li(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = zi(e.l)),
    (i = qi(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function va(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function ya() {
  return Lg.location.origin === `https://screenshot.framer.invalid`;
}
function ba({ children: e }) {
  if (C(ty).top) return E(g, { children: e });
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
            B(!!c, `duplicatedId must be defined`);
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
          { layoutId: m, value: h } = xa(p, (t.current.count[o][p] ?? -1) + 1, i);
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
  return E(ty.Provider, { value: a, children: e });
}
function xa(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Sa({ enabled: e = !0, ...n }) {
  let r = C(ty),
    i = t(() => ({ ...r, enabled: e }), [e]);
  return E(ty.Provider, { ...n, value: i });
}
function Ca(e) {
  let t = M(null);
  return (t.current === null && (t.current = e()), t.current);
}
function wa(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ta(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: ry,
    children: [
      E(`div`, { className: `text`, style: ay, children: r }),
      i && E(`div`, { className: `text`, style: oy, children: i }),
    ],
  });
}
function Ta(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ea() {
  let e = q.current();
  return e === q.canvas || e === q.export;
}
function Da() {
  let [e] = y(() => Ea());
  return e;
}
function Oa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function ka(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of gy) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Aa(e, t) {
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
function ja(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < _y) continue;
    let n = Aa(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Aa(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ma(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of hy) {
    let n = Aa(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Na(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ma(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: ja(n, t, ka(t.pixelWidth, t.pixelHeight)) };
}
function Pa() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: $e(J.imagePlaceholderSvg),
  };
}
function Fa(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Ia(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function La(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...my,
    objectPosition: Ia(e.positionX, e.positionY),
    objectFit: Fa(e.fit),
  };
}
function Ra(e) {
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
function za({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = J.useImageSource(e, t, n),
    s = La(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Ra(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Na(e.nodeFixedSize, e, o);
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
function Ba({ image: e, containerSize: t, nodeId: n }) {
  let r = h.useRef(null),
    i = J.useImageElement(e, t, n),
    a = La(e);
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
    E(`div`, { ref: r, style: { display: `contents`, ...my } })
  );
}
function Va({ nodeId: e, image: t, containerSize: n }) {
  let r = h.useRef(null),
    i = J.useImageSource(t, n, e);
  return (
    h.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = La(t);
      J.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    E(`div`, { ref: r, style: { display: `contents`, ...my } })
  );
}
function Ha({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Pi(e * (t.pixelWidth / 2)),
        s = J.useImageSource(t, n);
      ((r = {
        ...vy,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Ia(t.positionX, t.positionY),
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
            ? E(Va, { image: t, ...n })
            : E(Ba, { image: t, ...n })
          : E(za, { image: t, avoidAsyncDecoding: q.current() === q.export, ...n });
  let o = a ? vy : (r ?? { ...vy, ...Pa() });
  return i
    ? E(ze.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : E(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Ua(e, t, n = !0) {
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
function Wa(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...my,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), E(ze.div, { style: n }))
    : (Ua(e, n, !1), E(ze.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Ga(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Ka(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !by.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : kv.get(t, null)), by.isImageObject(r))) return Ga(r, e);
}
function qa(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ja(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Ya(e) {
  return e != null && typeof e != `boolean` && !qa(e);
}
function H(e) {
  return Number.isFinite(e);
}
function Xa(e) {
  return (Math.PI / 180) * e;
}
function Za(e) {
  return Ke(e) ? !1 : e === 2 || e === 5;
}
function Qa(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function $a(e, t, n, r) {
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
      if (!r) return eo(e);
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
function eo(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function to(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max($a(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min($a(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function no(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max($a(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min($a(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function ro(e, t, n, r, i) {
  let a = no(H(e) ? e : Ty, n, r, i),
    o = to(H(t) ? t : Ey, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function io(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function ao(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function oo(e) {
  return !e._constraints || ao(e) ? !1 : e._constraints.enabled;
}
function so(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function co(e) {
  let t = so(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function lo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!oo(e) || r) return co(e);
  let i = uo(e),
    a = fo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return wy.toRect(i, o, null, n, null);
}
function uo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Cy.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: Qa(c),
      heightType: Qa(l),
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
function fo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function po() {
  return h.useContext(Dy).parentSize;
}
function mo(e) {
  return typeof e == `object`;
}
function ho(e) {
  return mo(e) ? e.width : e;
}
function go(e) {
  return mo(e) ? e.height : e;
}
function _o(e, t) {
  return E(Oy, { parentSize: t, children: e });
}
function vo(e) {
  return lo(e, po(), !0);
}
function yo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function bo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function xo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? ze[e] : ze.div;
}
function So(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Co(e, t, n = Ay) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!jy) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) jy = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = jy;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function wo() {
  return ya() ? q.preview : q.current();
}
function To(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Vy.variable(e) : e === `` ? `""` : e;
}
function Eo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Do(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Oo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Ao(r);
    default:
      return Do(r);
  }
}
function Do(e) {
  return String(e).length;
}
function Oo(e) {
  let t = 1;
  for (; ko(t) < e;) t++;
  return t;
}
function ko(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Ao(e) {
  let t = 0;
  for (let n of Wy) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function jo(e, t) {
  return Vy.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Mo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function No() {
  return q.current() === q.preview ? lb.value : cb.value;
}
function Po(e) {
  return Fy(e, No, `framer-lib-combinedCSSRules`);
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
      Fo(n, ub ? e : void 0, {
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
    { getLayoutId: l, enabled: u } = C(ty);
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
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(fb)
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
    c = C(db),
    l = q.current() === q.canvas;
  z_(() => {
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
  hb && t && (e.translateZ = pb);
}
function Jo(e) {
  ((e.willChange = `transform`), Yo(e, !0));
}
function Yo(e, t) {
  let n = q.current() === q.canvas;
  if (!hb || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(mb) || (e.transform = r + mb) : (e.transform = r.replace(mb, ``));
}
function Xo(e, t, n, r = !0) {
  if (!e) return;
  let i = sy(e.style),
    a = n || i[t],
    o = () => {
      Zo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Zo(e) {
  return L(e) || R(e) || qe(e);
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
  return yb.test(e) ? e : $o(1e3, bb, n, () => vb.multiplyAlpha(e, t));
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
      n ^= _b(e.value) ^ e.position;
    }),
    n
  );
}
function rs(e) {
  return e && xb.every((t) => t in e);
}
function is(e) {
  return e && Sb.every((t) => t in e);
}
function as({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Wv(t)
      ? (n.backgroundColor = t)
      : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e))
    : e &&
      ((e = kv.get(e, null)),
      typeof e == `string` || Wv(e)
        ? (n.background = e)
        : wb.isLinearGradient(e)
          ? (n.background = wb.toCSS(e))
          : Eb.isRadialGradient(e)
            ? (n.background = Eb.toCSS(e))
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
    Be(n)
      ? (t.cornerShape = re(() => `superellipse(${n.get()})`))
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
      (typeof sy(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function us(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Ob.has(t)) return `pointer`;
}
function ds(e) {
  return fs(e) ? !0 : e.style ? !!fs(e.style) : !1;
}
function fs(e) {
  return kb in e && (e[kb] === `scroll` || e[kb] === `auto`);
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
    m = P(e.minWidth),
    h = P(e.minHeight),
    g = P(e.maxWidth),
    _ = P(e.maxHeight);
  return {
    top: P(n),
    left: P(t),
    bottom: P(r),
    right: P(i),
    width: P(a),
    height: P(o),
    size: P(l),
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
  let t = C(db),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = ps(e),
    s = vo(o),
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
  (a === void 0 && !i && (os(f) || (c.width = Ab.width), ss(f) || (c.height = Ab.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (oo(o) &&
    s &&
    !yo(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    gb.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let g = Ea();
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
    (I(n) || ly(n)) && !jb.has(n)
      ? (t[n] = sy(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof sy(e)[n] != `boolean` && !e.transition && (t.transition = sy(e)[n]));
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
  return E(ze.div, { layoutId: Pb, style: Lb, children: e.children });
}
function ys(e, t) {
  He(e) ? e(t) : bs(e) && (e.current = t);
}
function bs(e) {
  return z(e) && `current` in e;
}
function xs() {
  let e = Ca(() => new Set()),
    t = Ca(() => new Map());
  return Ca(() => (n, r) => ({
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
  return Ca(() => (bs(e) ? n(e) : He(e) ? n(t, e) : n(t)));
}
function Cs(e, t, n) {
  let r = M(),
    i = M();
  (Lr(
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
      ((s = new Rb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ts() {
  return C(Ub);
}
function Es() {
  return new Map();
}
function Ds() {
  return Ca(Es);
}
function Os(e, t = []) {
  let { register: n, deregister: r } = C(Wb);
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
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
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
      return Xb.PushLeft;
    case `left`:
      return Xb.PushRight;
    case `bottom`:
      return Xb.PushUp;
    case `top`:
      return Xb.PushDown;
  }
}
function Ns(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Xb.OverlayLeft;
    case `left`:
      return Xb.OverlayRight;
    case `bottom`:
      return Xb.OverlayUp;
    case `top`:
      return Xb.OverlayDown;
  }
}
function Ps(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Xb.FlipLeft;
    case `left`:
      return Xb.FlipRight;
    case `bottom`:
      return Xb.FlipUp;
    case `top`:
      return Xb.FlipDown;
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
  (B(r, `The navigation history must have at least one component`),
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
    Qb.forEach((e) => {
      ((r[e] = qb[e]), (i[e] = { ...n, from: qb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${sy(qb)[a]}%` : sy(qb)[a];
        ((sy(r)[a] = e === `enter` ? s : o),
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
      : nx;
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
  return nx;
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
    if (!Ya(t) || !Ja(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
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
  let n = pe(),
    r = te();
  return E(tx, {
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
  return z(e) || He(e);
}
function fc(e) {
  return !!e && ax in e && e[ax] === !0;
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
        return L(e.defaultValue) ? e.defaultValue : void 0;
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
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && mc(t, e.controls), t);
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
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function gc(e, t) {
  dc(e) && mc(hc(e), t);
}
function _c(e, t) {
  Object.assign(e, { [ox]: t });
}
function vc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), gc(e, t), n !== void 0 && _c(e, n));
}
function yc(e) {
  return e.propertyControls;
}
function bc(e) {
  return fx in e;
}
function xc(e, t) {
  if (!bc(e)) return;
  let n = kv.getNumber(e.opacity);
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
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Sc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Tc(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Ec(e, t) {
  (Tc(e, t), wc(e, t));
}
function Dc(e, t) {
  let n,
    r = (...r) => {
      (Lg.clearTimeout(n), (n = Lg.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      Lg.clearTimeout(n);
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
  let t = Ca(() => jc(e));
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
        vx.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Fc(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = E(
          `div`,
          { className: `${yx} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    B(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, E(`div`, { className: bx }, `property-overrides-separator`)]
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
  return h.useContext(Mx);
}
function Bc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Vc() {
  if (s === void 0 || Rx)
    return E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Bx;
}
function Hc({ children: e }) {
  return C(Hx) ? E(g, { children: e }) : E(b, { fallback: Vx, children: e });
}
function Uc() {
  return E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Wc(e, t) {
  if (!eg || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Zt(`published_site_load_recoverable_error`, {
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
    ? E(Jc, { fallback: t, children: E(Wx, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Jc({ children: e, fallback: t = Ux }) {
  return s === void 0 ? E(b, { fallback: t, children: e }) : E(Hc, { children: e });
}
function Yc() {
  return h.useContext(Kx);
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
  return E(Kx.Provider, { value: i, children: e });
}
function Qc(e, t) {
  return `${qx}${e}:${t}`;
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
  if (Ke(t) || Ke(n)) return E(Gx, { children: e });
  let { disableCustomCode: s } = Ix();
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
  if (Xx !== void 0 || s === void 0) return;
  let e = Lg.matchMedia(`(any-hover: hover)`);
  ((Xx = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== Xx) {
        Xx = t;
        for (let e of Zx) e();
      }
    }));
}
function sl() {
  return (ol(), cl());
}
function cl() {
  return Xx ?? !1;
}
function ll(e) {
  return (
    Zx.add(e),
    ol(),
    () => {
      Zx.delete(e);
    }
  );
}
function ul(e = !1) {
  let [t, n] = y(e);
  return (
    z_(function () {
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
      V(e);
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
    if (n.hasAttribute(iS)) {
      let e = n.getAttribute(iS);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function gl(e) {
  let { registerCursors: t } = C(Qx),
    n = Ca(() => e),
    r = d();
  f(() => t(n, r), [t, r]);
}
function _l(e) {
  return !!(e && typeof e == `object` && oS in e);
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
  if (L(e)) {
    let i = bl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = fi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Cl(e) {
  return L(e) && e.startsWith(`data:${pS}`);
}
function wl(e) {
  if (Cl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(pS.length),
        r = t.searchParams,
        i = r.has(lS) ? r.get(lS) : void 0,
        a,
        o = r.get(uS),
        s = r.get(dS),
        c = r.get(fS);
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
  let c = C(mS),
    l = Xc(),
    u = t(() => ({ scopeId: n, nodeId: i, furthestExternalComponent: l }), [n, i, l]),
    d = St(),
    f = wt(),
    { locales: p } = zn(),
    m = t(() => {
      let e = _l(a) ? a : El(a);
      if (e) return Sl(e, d, f, p);
    }, [f, a, d, p]),
    h = !!(!yl() && c?.nodeId && u.nodeId),
    g = r(
      (e) => {
        if (o.href) {
          if ((e.preventDefault(), e.stopPropagation(), wn(e))) {
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
          (B(
            kl(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            kl(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          cS.collectNestedLink(c, u));
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
    E(mS.Provider, { value: u, children: b })
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
  return e === `a` ? `span` : Le(e) && ne(e) === `a` ? ze.span : e;
}
function Nl(e) {
  vS = e;
}
function Pl() {
  return vS;
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
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = fi(e.routes, o, s, r),
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
    f = Zr(d, {
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
  let e = C(bS),
    t = wt()?.pathVariables;
  return e || t;
}
function Hl(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(yS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Ul() {
  return !!bi(`ss-only-routes`);
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
  return yi(`rewrite`, e)?.description === `external`;
}
function Kl() {
  if (!Ix().checkServerSideRouter) return !1;
  if (wS === void 0) {
    let e = Ul();
    ((TS = !e && gn() && yn() < 16.4), (wS = e || TS));
  }
  return wS;
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
    (TS &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((TS = !1), yi(`ss-only-routes`, t.headers.get(`server-timing`)) || (wS = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return ql(t, e);
}
function Yl(e, t) {
  xS.has(e) && xS.set(e, t);
}
async function Xl(e) {
  await ln(SS);
  try {
    Yl(e, await Jl(e));
  } catch {
    xS.delete(e);
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
  xS.has(n) || xS.set(n, Zl(n));
}
function $l(e) {
  let t = Wl(e);
  if (!t) return;
  let n = xS.get(t.href);
  return n && !Qe(n) ? n : void 0;
}
async function eu(e) {
  let t = Wl(e);
  if (!t) return;
  let n = xS.get(t.href);
  if (n) return Qe(n) ? Promise.race([n, ln(CS).then(() => void 0)]) : n;
}
function tu(e) {
  !(e instanceof HTMLAnchorElement) || !e.href || Ql(e.href);
}
function nu() {
  let e = o.connection || o.mozConnection || o.webkitConnection || {},
    t = o.deviceMemory && o.deviceMemory > OS,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? kS : AS));
  }
  (e.addEventListener?.(`change`, a), a());
  let s = new IntersectionObserver(u, { threshold: DS }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    tu(t);
    let { id: n, preload: i } = e,
      a = NS.get(n);
    if (!a?.size || MS.has(n)) return;
    (++c, MS.add(n));
    let o = i()?.catch(() => {});
    (s.unobserve(t), jS.delete(t));
    for (let e of a) (s.unobserve(e), jS.delete(e));
    (a.clear(), NS.delete(n), await o, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = jS.get(e);
      if (!n || MS.has(n.id)) {
        (s.unobserve(e), jS.delete(e));
        continue;
      }
      let r = n.id,
        a = NS.get(r),
        o = NS.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : NS.set(r, new Set([e])), setTimeout(l, ES, n, e));
      } else (a && a.delete(e), o <= 1 && NS.delete(r));
    }
  }
  return (e, t, n) => {
    if (!MS.has(n))
      return (
        jS.set(e, { id: n, preload: t }),
        s.observe(e),
        () => {
          (jS.delete(e), s.unobserve(e));
        }
      );
  };
}
function ru(e, t) {
  let n = bl(e),
    r = {
      href: e === `` || xl(e, n) ? e : `https://${e}`,
      target: iu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = jn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function iu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function au(e, t) {
  console.warn(
    tt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function ou(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return au(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return Qe(i) ? i.catch(au) : i;
  } catch (e) {
    au(e);
  }
}
function su(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = ou(o, r, n);
      Qe(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function cu() {
  let e = cn();
  return r((t, n, r, i = []) => su(t, n, r, e, i), [e]);
}
function lu({ nodeId: e, clickTrackingId: t, router: n, href: i, activeLocale: a }) {
  let o = cn();
  return r(
    async (r) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = _l(i) ? i : El(i);
      if (!_l(c))
        return Zt(
          `published_site_click`,
          {
            ...s,
            href: r ? uu(r) : null,
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
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, a || void 0);
          f = (Qe(n) ? await n : n) ?? null;
        }
      }
      return Zt(
        `published_site_click`,
        {
          ...s,
          href: r ? uu(r) : null,
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
function uu(e) {
  try {
    let t = new URL(e, Lg.document.baseURI);
    return t.origin === Lg.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function du(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function fu(e, t, n) {
  return async (r) => {
    let i = wn(r),
      a = Fl(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await p_({
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
function pu(e, t, n) {
  return async (r) => {
    let i = await mu(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    hu(e, r, i.redirectUrl);
  };
}
async function mu(e) {
  return !e || !Kl()
    ? { decision: `client` }
    : $l(e) || (Ql(e), (await eu(e)) ?? { decision: `server` });
}
async function hu(e, t, n) {
  (await p_({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    s.location.assign(gu(e, n)));
}
function gu(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, s.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function _u(e, t) {
  if (t || s === void 0) return;
  let n = s.location.href,
    r;
  try {
    r = new URL(e, n);
  } catch {
    return;
  }
  let i = new URL(n);
  if (r.origin === i.origin && !(r.pathname === i.pathname && r.search === i.search)) return r.href;
}
function vu(e, t, n, r, i, a, o, s) {
  if (!n) return ru(e, r);
  let c = zl(t, e, s, o);
  if (!c) return ru(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return ru(e, r);
  let m = Zr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !tg,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = iu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = _u(m, g),
    v = { pathVariables: f, locale: p },
    y = pu(m, _, (e) =>
      du(
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
    onClick: fu(m, r.trackLinkClick, y),
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
  let n = z(e) ? e : void 0,
    r = n && !Ge(n),
    i = t && !Ge(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function xu(e, t, n) {
  if (!(t && fn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Su } : { ...i, onTap: r }) : e;
}
function Su(e) {
  let t = Fl(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Cu({ EditorBar: e, fast: n = !1 }) {
  let r = C(IS),
    a = i(ig, n ? zS : BS, og),
    o = Ix(),
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
    : E(RS, { children: E(b, { children: E(e, { framerSiteId: r, features: s }) }) });
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
  return E(VS.Provider, { value: s, children: n });
}
async function Tu(e, t) {
  if (!Qt(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    Zt(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Eu(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Wn(r.path, n) : r.path) : ``;
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
  ((HS = e.timeZone), (US = e.locale));
}
function ku({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Er(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: _r()?.paginationInfo,
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
    f = _r();
  Er(
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
  let i = _r();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Er(
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
      Zr(t, n)
    ));
}
function Mu() {
  return yn() >= 17 ? qS : KS;
}
function Nu(e = zu) {
  let t = (e) => {
    e.persisted && Hu();
  };
  gn() && (s.addEventListener(`pageshow`, t), (GS = Date.now() - Mu()));
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
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Iu() {
  return { x: s.scrollX, y: s.scrollY };
}
function Lu() {
  let e = _r();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Fu(t)) return t;
}
function Ru(e) {
  let t = _r();
  t && (wr({ ...t, scrollPosition: e }), gn() && (GS = Date.now()));
}
function zu(e, t = !1) {
  let n = Lu();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (gn() && !t) {
      let e = Mu();
      if (Date.now() - GS < e) return;
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
      (r(), !(t === void 0 || vr(_r()) !== t) && e());
    },
    a = () => {
      let e = vr(_r());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = gn() ? Mu() : 100;
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
    ke.render(
      () => {
        (n === `restore-scroll-position` && Hu()) || Wu(e, t) || s.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Ku(e, t) {
  ke.read(() => {
    s.scrollY !== 0 ||
      s.scrollX !== 0 ||
      ke.render(
        () => {
          Hu() || Wu(e, t);
        },
        !1,
        !0
      );
  });
}
function qu(e) {
  let t = Ix().scrollRestoration,
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
  return E(iC.Provider, { value: t, children: e });
}
function Zu() {
  return h.useContext(iC);
}
function Qu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function $u(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      V(n);
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
      ((t = eC), (n = tC));
      break;
    case `bodyEnd`:
      ((t = nC), (n = rC));
      break;
    case `headStart`:
      ((t = XS), (n = ZS));
      break;
    case `headEnd`:
      ((t = QS), (n = $S));
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
      let a = document.getElementById(JS)?.dataset[YS] !== void 0;
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
    d = o.find((e) => e.id === vg),
    { path: f } = await Fn({
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
    let { path: o } = await Fn({
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
    (u.push({ href: s, hrefLang: n.code }), n.id === vg && (p = s));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (fr(l, s.location.href), pr(u));
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
  let c = cn(),
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
          ? En()
          : Fn({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === vg),
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
  if (!e) return $h;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function md(e) {
  let t = Mr(e),
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
          }).catch($h);
        if ((t(f, c, a), e(l), await r.promise, l?.aborted)) return;
        let p = s.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || N_();
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
  locales: g = _g,
  initialCanonicalPathVariables: _,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (ii(),
    Dr({
      disabled: n,
      routeId: a,
      initialPathVariables: i,
      initialLocaleId: p,
      initialContentLocaleId: h,
      initialCanonicalPathVariables: _,
    }));
  let C = ur(),
    [T, D] = Yu(),
    O = hr(`framer-route-change`),
    k = t(() => (!Ix().synchronousNavigationOnDesktop || !Cn() ? c : (e) => e()), []),
    j = M(!0),
    ee = M(),
    te = M(0),
    N = M(a),
    P = M(i),
    ne = M(),
    re = M(p),
    ie = qu(n),
    { isNavigationCommitPending: ae, usesCustomScrollRestoration: oe } = ie,
    { startNavigation: se, cancelPendingNavigation: ce } = md(oe),
    le = cn(),
    ue = ie.scheduleScroll,
    de = re.current,
    fe = N.current,
    pe = P.current,
    me = d[fe],
    he = me?.path;
  if (!me) throw Error(`Router cannot find route for ${fe}`);
  let ge = t(() => g.find(({ id: e }) => e === vg), [g]),
    F = t(() => g.find(({ id: e }) => (de ? e === de : e === vg)) ?? null, [de, g]),
    {
      contentLocale: _e,
      currentCanonicalPathVariables: ve,
      pageExistsInCurrentLocale: ye,
      setRouteContentState: be,
    } = _d({
      activeLocale: F,
      currentRoute: me,
      initialCanonicalPathVariables: _,
      initialContentLocaleIdOverride: h,
      locales: g,
      routes: d,
    }),
    I = F?.textDirection ?? `ltr`,
    xe = S ? I : `ltr`;
  f(() => {
    S && document.documentElement.setAttribute(`dir`, I);
  }, [I, S]);
  let Se = Ar(),
    Ce = t(
      () => ({
        activeLocale: F,
        contentLocale: _e,
        locales: g,
        setLocale: async (e) => {
          let t = ++te.current,
            r = O({ localized: !0 });
          if ((await p_({ priority: `user-blocking`, continueAfter: `paint` }), t !== te.current)) {
            r.ignore?.();
            return;
          }
          let i;
          L(e) ? (i = e) : z(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = N.current,
            s = d[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = Jr(x);
          try {
            let e = await Se({
              currentLocale: F,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: ge,
              pathVariables: P.current,
              preserveQueryParams: v,
              sitePrefix: c,
            });
            if (!e || t !== te.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Rn({
                activeLocale: a,
                defaultLocale: ge,
                collectionUtilsCache: le,
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
              (re.current = a.id),
              (ee.current = i),
              (P.current = e.pathVariables),
              be(l, u));
            let d = s.path && e.pathVariables ? Wn(s.path, e.pathVariables) : s.path;
            (ue({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              se(
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
      [F, ge, _e, n, D, g, v, be, d, ue, se, C, O, k, Se, le, x]
    ),
    we = r(
      (e, t, n, r, i, a, o, s, c, l, u) => {
        j.current = !1;
        let f = N.current,
          p = d[e],
          m = Et(p, n),
          h = p?.path && i ? Wn(p.path, i) : p?.path;
        if (
          ((N.current = e),
          (re.current = t),
          (P.current = i),
          (ne.current = void 0),
          be(a, o),
          (ee.current = r),
          ue({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? oe
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (ce(), k(D));
          return;
        }
        se(
          (t) => {
            C(f, e, () => k(D), t);
          },
          c,
          u,
          !0
        );
      },
      [D, be, d, oe, ue, se, C, k, ce]
    );
  (Or(ie, N, we),
    A(() => {
      if (n) return;
      let e = () => {
        let e = _r(),
          t = s.location.hash === `` ? void 0 : s.location.hash.slice(1);
        (e && Et(d[e.routeId], e.hash) === t) ||
          Tr({
            ...(e ||
              (br() ?? { routeId: N.current, pathVariables: P.current, localeId: re.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (s.addEventListener(`hashchange`, e), () => s.removeEventListener(`hashchange`, e));
    }, [n, d]));
  let Te = r(
      async (e, t, r, i, a) => {
        let o = d[e],
          s = at(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = pd(a);
        if (
          (p_({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await p_({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(h_)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Et(o, t),
          p = P.current,
          m = re.current;
        if (
          ne.current === void 0 &&
          Du({ routeId: N.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = ae();
          if (a) {
            let t = o?.path && r ? Wn(o.path, r) : o?.path;
            ue({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ce();
          (l.ignore?.(), !a && oe && Gu(f, i, `scroll-to-hash-or-top`));
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
            !a && !oe && Gu(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = d[N.current],
          _ =
            Jr(x) +
            Zr(o, {
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
        ne.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await Rn({
          activeLocale: F,
          defaultLocale: ge,
          collectionUtilsCache: le,
          locales: g,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ne.current === y &&
          we(
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
      [ce, d, g, we, n, v, x, O, oe, ae, ue, le, ge, F]
    ),
    Ee = bt(d),
    De = ee.current,
    Oe = WS(me, fe, De, pe, F, m),
    ke = j.current;
  fd({
    activeLocale: F,
    contentLocale: _e,
    currentPathVariables: pe,
    currentRoute: me,
    currentRouteId: fe,
    isInitialNavigation: ke,
    locales: g,
    siteCanonicalURL: x,
  });
  let Ae = t(
      () => ({
        navigate: Te,
        getRoute: Ee,
        currentRouteId: fe,
        currentPathVariables: pe,
        currentCanonicalPathVariables: ve,
        routes: d,
        collectionUtils: u,
        preserveQueryParams: v,
        pageviewEventData: Oe,
        siteCanonicalURL: x,
        isInitialNavigation: ke,
      }),
      [Te, Ee, fe, pe, ve, d, u, v, x, Oe, ke]
    ),
    je = he && pe ? Wn(he, pe) : he,
    Me = `${de}${je}`,
    Ne = Ca(() => ({ ...e, display: `contents` }));
  return E(xt, {
    api: Ae,
    children: E(v_.Provider, {
      value: Ce,
      children: E(y_.Provider, {
        value: xe,
        children: E(nS, {
          children: E(Ur, {
            routerRenderKey: T,
            isNavigationCommitPending: ie.isNavigationCommitPending,
            children: w(wu, {
              currentRoutePath: je,
              routerAPI: Ae,
              children: [
                b && E(Cu, { EditorBar: b, fast: !0 }),
                E(zx, {
                  children: w(Hc, {
                    children: [
                      E(Sv.Start, {}),
                      E(Ju, { currentRouteId: fe, remountKey: Me, scrollRestoration: ie }),
                      E(wv, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: E(gd, {
                          LayoutTemplate: y,
                          webPageId: me?.abTestingVariantId ?? fe,
                          style: e,
                          children: (t) =>
                            E(l, { children: ye ? li(me.page, t ? Ne : e) : o && li(o, e) }, Me),
                        }),
                      }),
                      b && E(Cu, { EditorBar: b }),
                      E(ei, {}),
                      E(Sv.End, {}),
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
          : Object.values(s).find((e) => e.path && X_.has(e.path))?.canonicalLocaleIdByLocaleId?.[
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
  return L(e) && !Number.isNaN(Number(e));
}
function Cd(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return Ue(t);
    case `number`:
      return R(t) || Sd(t);
    case `link`:
    case `image`:
      return L(t) && xl(t, !1);
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
  let n = Math.max(t * 1e3, oC);
  return Date.now() >= e + n;
}
function Ed({ client: e, children: t }) {
  return E(fC.Provider, { value: e, children: t });
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
      n || Qv.start();
    }, []),
    n
      ? E(Fr, {
          value: r ?? `preview`,
          children: E(Ee, {
            reducedMotion: p ? `always` : f ? `user` : `never`,
            skipAnimations: p,
            children: E(sn, {
              collectionUtils: l,
              children: E(Ed, {
                client: u,
                children: E(dC, {
                  children: E(IS.Provider, {
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
      : E(m ? gx : h.Fragment, {
          children: E(Ct, {
            routes: c,
            children: E(rx, { children: h.isValidElement(t) ? t : h.createElement(t, { key: i }) }),
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
  return pC.priority;
}
function jd(e) {
  let t = pC;
  return (
    (pC = e),
    {
      [kd()]() {
        pC = t;
      },
    }
  );
}
function Md(e = pC.priority, t = pC.canYield) {
  if (!(!t || e === void 0)) return p_({ batch: !0, priority: Dn(e) });
}
function Nd(e) {
  var t = [];
  try {
    ce(t, jd({ priority: pC.priority, canYield: !1 }));
    let n = e.next();
    return (B(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    me(t, n, r);
  }
}
async function Pd(e, t, n = pC.priority, r = pC.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (ce(o, jd(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      me(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Md(n, r);
      (o && (await o), ce(l, jd(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      me(l, u, d);
    }
  }
  return a.value;
}
function Fd(e, t = pC.priority, n = pC.canYield) {
  var r = [];
  try {
    ce(r, jd({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Pd(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    me(r, i, a);
  }
}
function* W(e, t = pC.priority) {
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
function* Id(e, t = pC.priority) {
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
  return We(e) && e.every(z);
}
function zd(e) {
  return z(e) && He(e.read) && He(e.preload);
}
function Bd(e) {
  return Rd(e) || zd(e);
}
function Vd(e) {
  return z(e) && z(e.schema);
}
function Hd(e) {
  return z(e) && z(e.collectionByLocaleId);
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
  if (qe(e) || qe(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), Wd(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), Kd(e, t));
    case `color`:
      return (B(e.type === t.type), Yd(e, t));
    case `date`:
      return (B(e.type === t.type), Zd(e, t));
    case `enum`:
      return (B(e.type === t.type), $d(e, t));
    case `file`:
      return (B(e.type === t.type), tf(e, t));
    case `link`:
      return (B(e.type === t.type), rf(e, t));
    case `number`:
      return (B(e.type === t.type), of(e, t));
    case `object`:
      return (B(e.type === t.type), lf(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), df(e, t));
    case `richtext`:
      return (B(e.type === t.type), pf(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), hf(e, t));
    case `string`:
      return (B(e.type === t.type), _f(e, t, n));
    default:
      V(e);
  }
}
async function xf(e, t) {
  return zd(e) ? (await e.preload(t), e.read(t)) : e;
}
function Sf(e) {
  if (!Ud(e) || !e.id) return;
  let t = gC.get(e.id);
  if (!t) return (gC.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Cf(e) {
  let t = Sf(e);
  if (t) return t;
  let n = _C.get(e);
  if (n) return n;
  let r = `${vC}${Math.random().toString(16).slice(2)}`;
  return (_C.set(e, r), r);
}
function wf(e, t) {
  if (Bd(e)) {
    let n = Cf(e) + (t?.id ?? vg),
      r = yC.get(n);
    if (r) return r;
    let i = new hC(e, t);
    return (yC.set(n, i), i);
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
  V(e, `Unsupported collection type`);
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
    if (z(r) && Ef(r)) {
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
  return z(e) && L(e.collectionId);
}
function Af(e, t) {
  return { collectionId: Cf(e), pointer: t };
}
function jf(e) {
  return z(e) && L(e.collectionId);
}
function Mf(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
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
  let n = new Tw(t ? `Assertion Error: ` + t : `Assertion Error`);
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
      V(e);
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
      V(e);
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
    .filter(([, e]) => !(Ke(e) || z(e)))
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
    Rr((...e) => {
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
  let t = Ca(ap),
    n = Ca(ap);
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
  for (let [t, n] of Object.entries(e)) if (Lg.matchMedia(n).matches) return t;
}
function lp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && Lg.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function up(e, t, n = !0) {
  let i = C(ex),
    a = Da(),
    o = ya(),
    s = vn() && (!a || o),
    l = M(s ? (cp(t) ?? e) : e),
    u = M(n && i ? e : l.current),
    d = Vo(),
    f = De(),
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
    z_(() => {
      if (a) {
        if (o) {
          p(cp(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, o, a, t, p]),
    z_(() => {
      !n || i !== !0 || p(l.current);
    }, []),
    A(() => {
      if (!s || o) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = Lg.matchMedia(r),
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
  (ng ? Lg.requestIdleCallback : pp)(() => {
    document.querySelector(Bw)?.remove();
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
  return z(e) && Vw in e && e.page !== void 0;
}
function vp(e, t) {
  return `${e}-${t}`;
}
function yp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
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
    i = C(zb);
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
      if (tg) {
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
      (Ww = () => {
        (e(), (t = void 0));
      }));
  });
}
function Op(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (Uw = Dp()));
}
function kp() {
  (performance.mark(`click-received-listener`), (Uw = void 0), Ww?.(), (Ww = void 0));
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
    p = Ca(() => new Set(o));
  Ap(Ix().yieldOnTap);
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
        let l = Ix().yieldOnTap && h.current.isPressedHasUpdated;
        (l &&
          Uw &&
          (performance.mark(`wait-for-tap-start`),
          await Uw,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          l &&
            (performance.mark(`yield-on-tap-start`),
            await p_({ priority: `user-blocking`, continueAfter: `paint` }),
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
        e && !f && Ix().disableHoverOnMobile && !sl() && (e = !1);
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
          o = e === Hw ? yp(r || [], i || n) : e;
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
      { disableCustomCode: l } = Ix();
    if (l) return E(e, { ...r, ref: s });
    if (rl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? E(L_.Provider, {
            value: n,
            children: E(qc, {
              getErrorMessage: el.bind(null, t, n),
              fallback: E(e, { ...r, ref: s }),
              children: E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Gc(a.error), Gc(el(t, n)), Wc(a.error), !0)), E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return E(L_.Provider, { value: n, children: E(a.Component, { ...r, ref: s }) });
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
function Pp(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Fp(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${$w[e]}` : `${$w[e]} ${n}`;
}
function Ip() {
  return s === void 0 ? (tT ?? {}) : tT || ((tT = Lp()), tT);
}
function Lp() {
  let e = s.location,
    t = s?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = s.top.location.origin), (t = s.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Rp(e) {
  return e.key + e.extension;
}
function zp(e) {
  return `${Ip().userContent}/assets/${e}`;
}
function Bp(e) {
  return zp(Rp(e));
}
function Vp(e, t) {
  return t ? `${e} ${nT}` : e;
}
function Hp(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Vp(e.name, e.isVariable);
  }
}
function Up(e) {
  return !!(e && Array.isArray(e));
}
function Wp(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Kp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Gp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Kp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function qp(e) {
  return aT[Yp(e)];
}
function Jp(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? qp(`variable`) ?? 500);
}
function Yp(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Xp(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function Zp(e, t) {
  return { ...Qp(e, t), ...$p(e, t) };
}
function Qp(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function $p(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function em(e) {
  return !!e.variationAxes;
}
function tm(e) {
  return nm(e) || rm(e);
}
function nm(e) {
  return e.startsWith(cT);
}
function rm(e) {
  return e.startsWith(sT);
}
function im(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function am(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? nT : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function om({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Wp(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function sm(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: em(e), selector: e.selector };
}
function cm(e) {
  let t = e.fonts.map((e) => sm(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = sm(n);
    if (!e) continue;
    let r = Zp(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function lm(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function um(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function dm(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function fm(e) {
  switch (e) {
    case `google`:
      return (await import("./google-YSYBFRE6.BZ57zP5h.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-TIA7QUPT.CjCmvCKY.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function pm(e) {
  switch (e) {
    case `google`:
      return (await import("./google-H6SFY4F5.5HW9yzMR.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-PZLWRK4B.CuFl42Lb.mjs")).default;
    case `framer`:
      return (await import("./framer-font-RD2SUPQH.BV4yRwNx.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function mm(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(hm);
}
function hm(e) {
  return uT.includes(e);
}
function gm(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = mm(e)[0];
  return n && t[n];
}
function _m(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function vm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function ym(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function bm(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function xm(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = ym(r, c, s, i);
  if (!ET.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: L(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), OT.set(l, { fontFace: u, doc: t }), Sm(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < wT) return xm(e, t, n + 1);
          throw new TT(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    ET.set(l, d);
  }
  await ET.get(l);
}
async function Sm(e, t, n) {
  let r = bm(e, t, n);
  if (!DT.has(r)) {
    let i = new ST.default(e, { style: t, weight: n }).load(null, CT);
    DT.set(r, i);
  }
  try {
    await DT.get(r);
  } catch {
    throw new TT(
      `Failed to check if font is ready (${CT}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Cm(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = ym(n, t, i, r),
    o = OT.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), OT.delete(a)), ET.delete(a), DT.delete(bm(n, t, i)));
}
function wm(e) {
  try {
    if (e === `framer`) return Tm(AT) ? AT : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import("./google-EGNT223R.4Zga1324.mjs")).default;
          case `fontshare`:
            return (await import("./fontshare-SXU5BGFE.DwUZJPwH.mjs")).default;
          default:
            V(e);
        }
      })();
      return Tm(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Tm(e) {
  return z(e) && Object.values(e).every(Dm);
}
function Em(e) {
  return z(e) && L(e.tag);
}
function Dm(e) {
  return Array.isArray(e) && e.every(Em);
}
function Om(e, t) {
  A(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (s.addEventListener(`keyup`, n), () => s.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function km(e, t, n, r) {
  let i = s.innerHeight - r,
    a = Math.min(s.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Am(e, { width: t, height: n }) {
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
function jm() {
  return document.getElementById(gS) ?? document.getElementById(hS) ?? document.body;
}
function Mm(e, t) {
  return R(e) ? e : (t ?? 0);
}
function Nm(e) {
  return Mm(e?.paddingTop, e?.padding) + Mm(e?.paddingBottom, e?.padding);
}
function Pm(e) {
  return Mm(e?.paddingLeft, e?.padding) + Mm(e?.paddingRight, e?.padding);
}
function Fm(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Pm(e)}px)`,
      srcSet: Na(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Im(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in NT)) continue;
    let n = NT[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function Lm(e) {
  let t = le.get(e.current);
  if (!t) return !1;
  if (Im(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Im(e.latestValues)) return !0;
  return !1;
}
function Rm(e) {
  return D(function ({ lightbox: n, lightboxClassName: i, onClick: a, ...o }, s) {
    let u = C(be),
      f = C(Gw),
      p = !!f,
      m = M(null),
      h = s ?? m,
      _ = M(),
      v = t(() => Fm(n, o.background), [n, o.background]),
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
          ke.read(() => {
            if (!h.current) return;
            let e = getComputedStyle(h.current),
              t =
                h.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(h.current, `::after`)
                  : void 0,
              r = h.current.offsetWidth ?? 1,
              i = h.current.offsetHeight ?? 1,
              a = Lm(h) || p ? { duration: 0 } : n.transition;
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
        let t = km(k, n.maxWidth, Pm(n), Nm(n)),
          r = Am(v, { width: t, height: t * k });
        return ((_.current = { [v.src]: r }), r);
      }),
      ee = r(
        async (e) => {
          (a?.(e), !(b || !n || !v) && (await j(), O()));
        },
        [a, O, b, v, n, j]
      ),
      te = r((e) => {
        (e?.stopPropagation(),
          c(() => {
            S(!1);
          }));
      }, []);
    (Om(b, te),
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
    let N = d(),
      P = T?.transition ?? o.transition ?? u.transition,
      ne = T?.borderRadius,
      re = T?.imageRendering,
      ie = T?.filter,
      ae = T?.borderTop,
      oe = T?.borderRight,
      se = T?.borderBottom,
      ce = T?.borderLeft,
      le = T?.borderStyle,
      ue = T?.borderColor,
      de = !!(ae || oe || se || ce || le || ue),
      fe = de
        ? {
            "--border-top-width": ae,
            "--border-right-width": oe,
            "--border-bottom-width": se,
            "--border-left-width": ce,
            "--border-style": le,
            "--border-color": ue,
          }
        : void 0,
      pe = { [iS]: o.id },
      me = Mm(n?.paddingTop, n?.padding),
      he = Mm(n?.paddingBottom, n?.padding),
      ge = Mm(n?.paddingLeft, n?.padding),
      F = Mm(n?.paddingRight, n?.padding),
      _e = T?.borderRadius ? { ...o.style, borderRadius: T.borderRadius } : o.style,
      ve = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      ye = p && b ? void 0 : (o.layoutId ?? (n ? N : void 0));
    return w(g, {
      children: [
        E(e, {
          ...o,
          style: _e,
          onClick: ee,
          layoutId: ye,
          ref: h,
          layoutDependency: ve,
          transition: P,
        }),
        E(Ae, {
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
                      E(ze.div, {
                        ...pe,
                        className: i,
                        onClick: te,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: P,
                        initial: PT,
                        animate: FT,
                        exit: PT,
                      }),
                      E(ze.div, {
                        ...pe,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${me}px ${F}px ${he}px ${ge}px`,
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
                          children: E(ze.div, {
                            layoutId: ye,
                            transition: P,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": de,
                            style: {
                              aspectRatio: k,
                              borderRadius: ne,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: re,
                              filter: ie,
                              ...fe,
                            },
                            children: E(Ha, { image: v, alt: v.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  jm()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function zm(e, t) {
  return RT && !t
    ? Document.parseHTMLUnsafe(e)
    : ((LT ??= new DOMParser()), LT.parseFromString(e, t ?? `text/html`));
}
function Bm(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Vm(e, t, n, r) {
  return e.replace(zT, (e, i, a, o, s, c, l) => {
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
    if (!_ || L(_)) return e;
    Hl(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(yS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Wr(m, v)), i + o + `"${Bm(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Hm(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Um(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Wm(e, t, n) {
  let r = M([]);
  Hm(r.current, e) ||
    ((r.current = e),
    MT.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || q.current() !== q.canvas || (e > 0 && Ko(n.current));
    }));
}
function Gm() {
  return { current: null };
}
async function Km(e, t) {
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
function qm(e) {
  return e in UT;
}
function Jm(e, t) {
  let n = {};
  for (let r in e) {
    if (!qm(r)) continue;
    let i = e[r],
      a = UT[r];
    Ke(i) || Ke(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Ym(e, t = `character`, n, r, i) {
  if (r) {
    let t = Gm();
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
                children: e.match(WT)?.map((e, t) => {
                  let r = Gm();
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
          o = Gm();
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
function Xm(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function Zm(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Qm(e, t, n, r) {
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
                transform: r ? void 0 : Zm(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Zm(n.effect),
              };
      }
    default:
      V(i);
  }
}
function $m(e, n, r) {
  let i = Ca(() => new Set()),
    a = Ea(),
    o = r || !a,
    s = de(),
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
            th(
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
          V(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? Te(t, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Te(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(l);
    }
  }, [o, i, r, n, u, d, l]);
  let f = !!e,
    p = e ? Xm(e) : void 0;
  return t(
    () => ({
      getTokenizer: () => {
        if ((i.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = c.current,
          a = Qm(o, r || eh(e, t, n), c.current.effect, s);
        return {
          text: (e) => Ym(e, p, i, s, a),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = Gm();
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
            th(p, e.effect, i, t, n, !1, s);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [o, f, i, r, p]
  );
}
function eh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function th(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Jm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await nh(n, u);
      if (
        e === null ||
        (Ce(e, l, { ...r, restDelta: 0.001, delay: ge(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Ce(e, n, { ...r, restDelta: 0.001, delay: ge(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Km(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (ke.read(() => {
          ((e = rh(n)),
            e.length !== 0 &&
              ke.update(() => {
                let t = e.map((e, t) =>
                  Ce(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          Ce(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function nh(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Km(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function rh(e) {
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
function ih(e) {
  let t = {};
  for (let n in e) (I(n) || ly(n)) && (t[n] = e[n]);
  return t;
}
function ah(e) {
  return e.type === l;
}
function oh(e) {
  return e.type === `br`;
}
function sh(e, t, n, r, i = {}, a, o = ah(e) ? -1 : 0) {
  let s = j.toArray(e.props.children);
  Ke(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!T(e) || !oh(e)) && (c = !1), T(e))) return sh(e, t, n, r, i, a, o + 1);
    let s = Ke(n) ? e : n;
    return L(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...d } = e.props;
  if (L(e.type) || Le(e.type)) {
    let n = ne(e.type) || e.type,
      u = l || n,
      f = L(u) ? t?.[u] : void 0;
    ((d.className = Oc(`framer-text`, d.className, f)),
      a && o === 0 && !c && Object.assign(d, a.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = ch(s, i);
      d.id = e;
      let t = Oc(`framer-text`, m),
        n = E(`a`, { href: `#${e}`, className: t, children: s });
      ((d.style = { ...d.style, scrollMarginTop: r }), (s = [n]));
    }
    u === `ol` &&
      (d.style = { ...d.style, [Uy]: uh(d.start ?? 1, j.count(d.children), d.style?.[Hy] ?? ``) });
  }
  return u(e, d, ...s);
}
function ch(e, t) {
  let n = Pr(e.map(lh).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function lh(e) {
  return L(e) || R(e)
    ? e.toString()
    : T(e)
      ? lh(e.props.children)
      : Array.isArray(e)
        ? e.map(lh).join(``)
        : ``;
}
function uh(e, t, n) {
  return Eo(Number(e) || 1, t, n);
}
function dh(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Fi(n.x, n.y),
    i = xy(Fi(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Fi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Fi.isEqual(e, s) && !Fi.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = xy.intersection(i, xy(s, c)),
    f = xy.intersection(i, xy(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), xy(d, f));
}
function fh(e, t) {
  let n = dh(e.angle),
    r = ts(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = xy.pointAtPercentDistance(n, i),
    s = xy.pointAtPercentDistance(n, a),
    c = ye([i, a], [0, 1]);
  return {
    id: `id${t}g${wb.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: vb.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function ph(e, t) {
  return {
    id: `id${t}g${Eb.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: ts(e).map((t) => ({
      color: t.value,
      alpha: vb.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function mh(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function hh(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function gh(e) {
  return mh(e) ? hh(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function _h(e) {
  return mh(e) ? hh(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function vh(e, t, n, r) {
  if (((e = kv.get(e, `#09F`)), !by.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * gh(e.positionX) + f),
        (d = (t.height - l) * _h(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * _h(e.positionY)))
        : ((n = g), (u = (1 - g) * gh(e.positionX))),
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
function yh(e) {
  return e.startsWith(`data:${QT}`);
}
function bh(e, t) {
  if (/^\w+:/u.test(e) && !yh(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = q.current() === q.export;
  return J.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function xh(e, t) {
  return (A(() => iE.subscribeToTemplate(e), [e]), iE.template(e, t));
}
function Sh(e) {
  try {
    let t = zm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Ch(e, t) {
  Th(e, wh(t));
}
function wh(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Th(e, t) {
  (Eh(e, t),
    Array.from(e.children).forEach((e) => {
      Th(e, t);
    }));
}
function Eh(e, t) {
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
function Dh(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (aE[t[2]] || 1));
}
function Oh(e) {
  let t = Dh(e.getAttribute(`width`)),
    n = Dh(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function kh(e) {
  return e.indexOf(`image`) >= 0;
}
function Ah(e) {
  return e.indexOf(`var(--`) >= 0;
}
function jh(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Mh(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? Lg,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = iE.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && oo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Nh(e) {
  return e > uE ? `lazy` : void 0;
}
function Ph(e, t, n) {
  let r = Lh(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Fh(e) {
  return e ? (e.fonts ?? ui()) : ui();
}
function Ih(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Lh(e);
}
function Lh(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Rh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(zh) })
      : t.fonts.push(zh(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Rh(e) {
  return dE in e;
}
function zh(e) {
  let t = Bh(e) || Vh(e) ? e : Hh(e);
  return Vh(t) ? t : Uh(t);
}
function Bh(e) {
  return `source` in e;
}
function Vh(e) {
  return `cssFamilyName` in e;
}
function Hh(e) {
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
function Uh(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${nT}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Wh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
async function Gh(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = p_({ batch: !0, priority: t.priority, signal: t.signal });
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
function Kh(e) {
  return e.loader;
}
function qh(e, t, n) {
  let r = Kh(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Jh,
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
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
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
  K,
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
  q,
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
  J,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Y,
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
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
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
  X,
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
  Z,
  DC,
  OC,
  kC,
  AC,
  jC,
  Q,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  $,
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
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE = e(() => {
    (a(),
      we(),
      Ne(),
      n(),
      O(),
      m(),
      (Jh = Ve({
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
      (Yh = Ve({
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
      (Xh = Ve({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Yh();
        },
      })),
      (Zh = Ve({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Xh(),
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
      (Qh = Ve({
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
      ($h = () => {}),
      (eg = s !== void 0),
      (tg =
        eg &&
        (o.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(o.userAgent))),
      (ng = eg && typeof s.requestIdleCallback == `function`),
      (rg = ng ? s.requestIdleCallback : setTimeout),
      (ig = () => $h),
      (ag = () => !0),
      (og = () => !1),
      (sg = new Map()),
      (cg = new Map()),
      (lg = new Set()),
      (ug = `:`),
      (dg = eg ? void 0 : new Set()),
      (fg = `preload`),
      (pg = Object.keys),
      (mg = `equals`),
      (hg = h.createContext({})),
      (gg = h.createContext({})),
      (_g = []),
      (vg = `default`),
      (yg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (bg = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && rt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = yg.Pending;
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
          return this.promiseState === yg.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === yg.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== yg.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && dg !== void 0 && dg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = yg.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = yg.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && sg.has(this.cacheHash) ? sg.get(this.cacheHash) : this.resolver();
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
          if (this.promiseState === yg.Fulfilled) return this.value;
          throw this.promiseState === yg.Rejected
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
      (xg = -1),
      (Sg = -2),
      (Cg = -3),
      (wg = -4),
      (Tg = -5),
      (Eg = -6),
      (Dg = -7),
      (Og = 2 ** 32 - 1),
      (kg = Og - 1),
      (Ag = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (jg = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Mg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Ng = typeof Uint8Array.fromBase64 == `function`),
      (Pg = typeof process == `object` && process.versions?.node !== void 0),
      (Fg = Ng ? Bt : Pg ? Ht : Wt),
      (Ig = Ng ? Vt : Pg ? Ut : Gt),
      (Lg = eg
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
      (Rg = 2),
      (zg = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Bg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Hg = class {
        payload = $t();
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
              return Jt(this.payload);
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
      (Ug = eg ? void 0 : new Hg()),
      (Wg = Bg.CollectionUtilsCache),
      (Gg = new WeakMap()),
      (Kg = k(void 0)),
      (qg = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new bg(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
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
          let r = rn(n),
            i = an(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Ug !== void 0) {
              if (Qe(e)) return e.then((e) => (Ug.set(Wg, i, e), e));
              Ug.set(Wg, i, e);
            }
            return e;
          }
          if (tn(Wg, i)) {
            let e = nn(Wg, i);
            return (this.cacheMap.set(i, new bg(() => e)), e);
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
            (Ug !== void 0 && Ug.set(Wg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new bg(async () => {
            try {
              let e = Qe(s) ? await s : s;
              return (Ug !== void 0 && Ug.set(Wg, i, e), e);
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
      (Jg = /Mac/u),
      (Yg = /iPhone|iPod|iPad/iu),
      (Xg = /MacIntel/iu),
      (Zg = /Edg\//u),
      (Qg = /Chrome/u),
      ($g = /Google Inc/u),
      (e_ = /Safari/u),
      (t_ = /Apple Computer/u),
      (n_ = /Firefox\/\d+\.\d+$/u),
      (r_ = /Version\/([\d.]+)/u),
      (i_ = /FramerX/u),
      (a_ = /tablet|iPad|Nexus 9/iu),
      (o_ = /mobi/iu),
      (s_ = 1e3 / 60),
      (c_ = 1e3 / 25),
      (l_ = 500),
      (u_ = Promise.resolve()),
      (d_ = 100),
      (f_ = (e) => {
        ke.read(e, !1, !0);
      }),
      (p_ = An(f_)),
      (m_ = `framer_variant`),
      (h_ = RegExp(`:([a-z]\\w*)`, `gi`)),
      (g_ = async () => {}),
      (__ = { contentLocale: null, activeLocale: null, locales: [], setLocale: g_ }),
      (v_ = (() => {
        let e = h.createContext(__);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (y_ = (() => {
        let e = h.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (b_ = !tg),
      (x_ = !1),
      (S_ = h.createContext({ global: void 0, routes: {} })),
      (C_ = 10),
      (w_ = 1e4),
      (T_ = (e) => `--view-transition-${e}`),
      (E_ = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${T_(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${T_(`conic-offset`)})`,
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
        @property ${T_(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (D_ = {
        circle: {
          makeKeyframe: (e, t) => `${T_(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${T_(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${$n(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${T_(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: E_,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Qn(e.x)} ${Qn(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Xn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${T_(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${T_(`blinds-width`)})`,
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
            @property ${T_(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${T_(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${T_(`wipe-offset`)})`,
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
            @property ${T_(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (O_ = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (k_ = `view-transition-styles`),
      (A_ = {
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
      (j_ = () => {}),
      (N_ = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (M_ ||
            ((M_ = document.createElement(`div`)),
            M_.setAttribute(`aria-live`, `assertive`),
            M_.setAttribute(`aria-atomic`, `true`),
            (M_.style.position = `absolute`),
            (M_.style.transform = `scale(0)`),
            document.body.append(M_)),
            setTimeout(() => {
              M_.textContent = e;
            }, 60));
        }
      }),
      (F_ =
        eg &&
        typeof s.navigation?.back == `function` &&
        !(() => {
          if (o === void 0) return !1;
          let e = o.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !gn()),
      (I_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (L_ = h.createContext(null)),
      (R_ = (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (z_ = typeof document < `u` ? f : A),
      (B_ = new Set()),
      (V_ = (() => {
        let e = k({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (H_ = 46),
      (U_ = 47),
      (W_ = (e, t) => e.charCodeAt(t)),
      (G_ = (e, t) => e.lastIndexOf(t)),
      (K_ = (e, t, n) => e.slice(t, n)),
      (q_ = !1),
      (J_ = `/`),
      (Y_ = (e) => e === U_),
      (X_ = new Set([`/404.html`, `/404`, `/404/`])),
      (Z_ = `__f_replay`),
      (Q_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      ($_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (Qr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (ev = !1),
      (_v = [ti]),
      (gv = [ti]),
      (hv = [ti]),
      (mv = [ti]),
      (pv = [ti]),
      (fv = [ti]),
      (dv = [ti]),
      (uv = [ti]),
      (lv = [ti]),
      (cv = [ti]),
      (sv = [ti]),
      (ov = [ti]),
      (av = [ti]),
      (iv = [ti]),
      (rv = [ti]),
      (nv = [ti]),
      (tv = [ti]),
      (yv = class {
        constructor() {
          (ve(vv, 5, this),
            F(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            F(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            F(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            F(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            F(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            F(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            F(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ni(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ni(
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
            ni(
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
            ni(
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
            ni(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ni(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ni(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ni(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ni(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (vv = oe(null)),
      N(vv, 1, `markRenderStart`, _v, yv),
      N(vv, 1, `markRenderEnd`, gv, yv),
      N(vv, 1, `markUseInsertionEffectsStart`, hv, yv),
      N(vv, 1, `markUseInsertionEffectRouterStart`, mv, yv),
      N(vv, 1, `markUseInsertionEffectsEnd`, pv, yv),
      N(vv, 1, `markUseLayoutEffectsStart`, fv, yv),
      N(vv, 1, `markRouterUseLayoutEffectStart`, dv, yv),
      N(vv, 1, `markUseLayoutEffectsEnd`, uv, yv),
      N(vv, 1, `markUseEffectsStart`, lv, yv),
      N(vv, 1, `markUseEffectsRouterStart`, cv, yv),
      N(vv, 1, `markUseEffectsAreSynchronous`, sv, yv),
      N(vv, 1, `markUseEffectsEnd`, ov, yv),
      N(vv, 1, `markRafStart`, av, yv),
      N(vv, 1, `markRafEnd`, iv, yv),
      N(vv, 1, `markLayoutStylePaintEnd`, rv, yv),
      N(vv, 1, `measureMutationEffects`, nv, yv),
      N(vv, 1, `measureUnattributedHydrationOverhead`, tv, yv),
      _e(vv, yv),
      (xv = !1),
      (Sv = { Start: si, End: ci }),
      (Cv = class extends Error {}),
      (wv = class extends v {
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
          if (!(this.state.error instanceof Cv)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return li(e, t);
        }
      }),
      (Tv = Object.freeze([])),
      (Dv = new Set()),
      (Ov = class {
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
      (kv = (() => {
        function e(e) {
          return (
            ki(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ai(e) ? e : new Mv(e)
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
          (e.get = (e, t) => (e == null ? t : Ai(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Ai(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Av = `onUpdate`),
      (jv = `finishTransaction`),
      (Mv = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new Ov();
        static interpolationFor(e, t) {
          if (Ai(e)) return ji(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ai(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ni(e.x, t.x), y: Ni(e.y, t.y) })),
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
      })((Fi ||= {})),
      (Nv = {
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
      (Pv = class e {
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
      (Pv.hexChars = `0123456789abcdef`),
      (Pv.refY = 1),
      (Pv.refU = 0.19783000664283),
      (Pv.refV = 0.46831999493879),
      (Pv.kappa = 903.2962962),
      (Pv.epsilon = 0.0088564516),
      (Pv.m_r0 = 3.240969941904521),
      (Pv.m_r1 = -1.537383177570093),
      (Pv.m_r2 = -0.498610760293),
      (Pv.m_g0 = -0.96924363628087),
      (Pv.m_g1 = 1.87596750150772),
      (Pv.m_g2 = 0.041555057407175),
      (Pv.m_b0 = 0.055630079696993),
      (Pv.m_b1 = -0.20397695888897),
      (Pv.m_b2 = 1.056971514242878),
      (Fv = new Pv()),
      (Iv = {
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
      (Lv =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Rv = (e) => {
        let { r: t, g: n, b: r, a: i } = aa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (zv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        sa({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Bv = (e) => {
        let { r: t, g: n, b: r, a: i } = aa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Vv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        sa({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Hv = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return ca(this);
        }
        rgb() {
          return fa(this);
        }
        hsl() {
          return Gi(this.r, this.g, this.b);
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
              return new e(ua(t));
            case `srgb`:
              return new e(da(ua(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            da({
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
          let n = ra(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !K.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Uv = new Map()),
      (K = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Uv.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Uv.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = pa(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && ea(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
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
          (e.toHex = (e, t = !1) => Wi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Hv.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...Bi(e.r, e.g, e.b), a: e.roundA })),
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
            let t = Ji(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Ji(e.r, e.g, e.b),
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
            let t = Wi(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Nv)) if (Nv[e] === t) return e;
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
                r: Ii(i, [0, 1], [t.r, r.r], a),
                g: Ii(i, [0, 1], [t.g, r.g], a),
                b: Ii(i, [0, 1], [t.b, r.b], a),
                a: Ii(i, [0, 1], [t.a, r.a], a),
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
                h: Ii(i, [0, 1], [u, u + f], a),
                s: Ii(i, [0, 1], [c.s, l.s], a),
                l: Ii(i, [0, 1], [c.l, l.l], a),
                a: Ii(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Vi(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => Gi(e, t, n)),
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
      (Wv = (e) => e instanceof Fe),
      (Gv = Jh().EventEmitter),
      (Kv = class {
        _emitter = new Gv();
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
      (qv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Jv = Lg.requestAnimationFrame || qv),
      (Yv = (e) => Jv(e)),
      (Xv = 1 / 60),
      (Zv = class extends Kv {
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
          Xv = e;
        }
        static get TimeStep() {
          return Xv;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Yv(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Xv;
        }
        tick = () => {
          this._started &&
            (Yv(this.tick),
            this.emit(`update`, this._frame, Xv),
            this.emit(`render`, this._frame, Xv),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Qv = new Zv()),
      ($v = { target: ya() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (q = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => $v.target,
        hasRestrictions: () => {
          let e = $v.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (ey = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Se({
        borderTopWidth: ey(`y`),
        borderLeftWidth: ey(`x`),
        borderRightWidth: ey(`x`),
        borderBottomWidth: ey(`y`),
      }),
      (ty = h.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (ny = {
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
      (ry = {
        ...ny,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (iy = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (ay = { ...iy, fontWeight: 500 }),
      (oy = {
        ...iy,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (sy = (e) => e),
      (cy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (ly = Oa(
        (e) =>
          cy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (uy = (e) => () => {
        Oi(e);
      }),
      (dy = () => () => {}),
      (fy = {
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
        isOnPageCanvas: !1,
      }),
      (py = !1),
      (J = new Proxy(fy, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? dy()
              : uy(
                  py
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (my = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (hy = [1, 2, 2.2]),
      (gy = [512, 1024, 2048, 4096]),
      (_y = 512),
      (vy = { position: `absolute`, ...my, top: 0, right: 0, bottom: 0, left: 0 }),
      (yy = `src`),
      (by = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && yy in e;
        },
      }),
      (xy = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Xa(Fi.angleFromX(t.a, t.b)),
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
            return e(Fi(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Fi.distance(e.a, e.b)),
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
          x: Mi(e.x, t),
          y: Mi(e.y, t),
          width: Mi(e.width, t),
          height: Mi(e.height, t),
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
          return { x: a, y: o, width: Fi.distance(t, n), height: Fi.distance(t, i) };
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
            Fi.distance({ x: n, y: r }, { x: 0, y: 0 })
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
          return [xy(t, n), xy(n, r), xy(r, i), xy(i, t)];
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
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
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
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
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
          let n = xy(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && xy.intersection(n, t, !0)) {
              let n = Sy[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(Sy)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Sy = [`top`, `right`, `bottom`, `left`]),
      (Cy = {
        quickfix: (e) => (
          (Za(e.widthType) || Za(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Za(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Za(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (wy = {
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
            d = Cy.quickfix({
              left: H(t) || Ai(t),
              right: H(n) || Ai(n),
              top: H(r) || Ai(r),
              bottom: H(i) || Ai(i),
              widthType: Qa(a),
              heightType: Qa(o),
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
          } else a !== void 0 && typeof a != `string` && (f = kv.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = kv.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? kv.getNumber(t) : null,
              right: d.right ? kv.getNumber(n) : null,
              top: d.top ? kv.getNumber(r) : null,
              bottom: d.bottom ? kv.getNumber(i) : null,
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
            o = t?.sizing ? kv.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? kv.getNumber(t?.sizing.height) : null,
            c = io(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && Za(e.widthType)) i = n.width;
          else if (H(e.width))
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
                V(e.widthType);
            }
          let l = io(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && Za(e.heightType)) a = n.height;
          else if (H(e.height))
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
                V(e.heightType);
            }
          return ro(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = wy.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? kv.getNumber(l.width) : null,
            d = l ? kv.getNumber(l.height) : null;
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
      (Ty = 200),
      (Ey = 200),
      (Dy = h.createContext({ parentSize: 0 })),
      (Oy = (e) => {
        let t = po(),
          { parentSize: n, children: r } = e,
          i = h.useMemo(() => ({ parentSize: n }), [ho(n), go(n)]);
        return t === 1
          ? r
            ? E(g, { children: r })
            : null
          : E(Dy.Provider, { value: i, children: r });
      }),
      (ky = h.createContext(void 0)),
      (Ay = new Set()),
      (My = `style[data-framer-css-ssr-minified]`),
      (Ny = (() => {
        if (!vn()) return new Set();
        let e = document.querySelector(My)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Py = `data-framer-css-ssr`),
      (Fy = (e, t, n) =>
        h.forwardRef((r, i) => {
          let { sheet: a, cache: o } = h.useContext(ky) ?? {},
            s = n;
          if (!vn()) {
            He(t) && (t = t(wo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Ly.add(e, s);
          }
          return (
            S(() => {
              (s && Ny.has(s)) ||
                (He(t)
                  ? t(wo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Co(e, a, o));
            }, []),
            E(e, { ...r, ref: i })
          );
        })),
      (Iy = class {
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
      (Ly = new Iy()),
      (Ry = [
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
      (zy = ((e) => (
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
      ))(zy || {})),
      (By = zy),
      (Vy = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${To(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${By.BorderTopWidth}${By.BorderRightWidth}${By.BorderBottomWidth}${By.BorderLeftWidth}`,
      (Hy = `--list-style-type`),
      (Uy = `--max-list-digits`),
      (Wy = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Gy = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Ky = { display: `inline-block` }),
      (qy = { display: `block` }),
      (Jy = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Gy.display};
            flex-direction: ${Gy.flexDirection};
            justify-content: ${Gy.justifyContent};
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
                color: ${jo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${jo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${jo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${Ky.display};
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
                color: ${jo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${jo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${jo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${jo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${jo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${jo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${jo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${jo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${jo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${jo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${jo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${jo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${jo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${jo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${jo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${jo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${jo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${jo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${jo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${qy.display};
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
            padding-inline-start: calc(calc(var(${Uy}, 1) + 1) * 1ch);
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
      (Yy = `--text-truncation-display-inline-for-safari-16`),
      (Xy = `--text-truncation-display-none-for-safari-16`),
      (Zy = `--text-truncation-line-break-for-safari-16`),
      (Qy = [
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
      ($y = `(background: -webkit-named-image(i))`),
      (eb = `(contain-intrinsic-size: inherit)`),
      (tb = [
        `@supports ${$y} and (not ${eb}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Qy.join(`, `)} { display: var(${Yy}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Qy.map((e) => `${e}::after`).join(`, `)} { content: var(${Zy}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Xy}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Yy}, ${Ky.display}) }
    }`,
      ]),
      (nb = `--framer-will-change-override`),
      (rb = `--framer-will-change-effect-override`),
      (ib = `--framer-will-change-filter-override`),
      (ab = `--overflow-clip-fallback`),
      (ob = `--one-if-corner-shape-supported`),
      (sb = (e) => {
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
                  `body { ${nb}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${nb}: transform; } }`,
                ]
              : [`body { ${nb}: none; ${rb}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${ib}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${ib}: filter; } }`,
                ]
              : [`body { ${ib}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${ab}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${ob}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...Jy,
          ...Ry,
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
          ...tb,
          f,
        ];
      }),
      (cb = So(() => sb(!1))),
      (lb = So(() => sb(!0))),
      (ub = hn()),
      (db = h.createContext(!1)),
      (fb = `data-framer-size-compatibility-wrapper`),
      (pb = `0.000001px`),
      (mb = ` translateZ(${pb})`),
      (hb = bn() || gn() || xn()),
      (gb = (() => {
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
            sy(this.props).clip &&
              sy(this.props).radius === 0 &&
              sy(e).radius !== 0 &&
              Xo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (_b = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (vb = {
        hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
        setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
        getAlpha: (e) => {
          let t = ea(e);
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
        hsvToHSLString: (e) => K.toHslString(K(Hi(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => K.toHex(K(Hi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => K.toHexString(K(Hi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => K.toRgbString(K(Hi(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Hi(e.h, e.s, e.v),
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
      (yb = /var\(.+\)/u),
      (bb = new Map()),
      (xb = [`stops`]),
      (Sb = [`start`, `end`]),
      (Cb = [`angle`, `alpha`]),
      (wb = {
        isLinearGradient: (e) => z(e) && Cb.every((t) => t in e) && (is(e) || rs(e)),
        hash: (e) => e.angle ^ ns(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ts(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Tb = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Eb = {
        isRadialGradient: (e) => z(e) && Tb.every((t) => t in e) && (is(e) || rs(e)),
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
      (Db = [
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
      (Ob = new Set([...Db, ...Db.map((e) => `${e}Capture`)])),
      (kb = `overflow`),
      (Ab = { x: 0, y: 0, width: 200, height: 200 }),
      (jb = new Set([
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
      (Mb = D(function (e, t) {
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
            "data-framer-offset-parent-id": sy(e)[`data-framer-offset-parent-id`],
          };
        !gs(e) && n && (sy(m)[`data-framer-name`] = n);
        let [h, _] = ms(s),
          v = ps(s),
          y = yo(v),
          b = r && !(_ && !y && oo(v)) ? r : void 0;
        (b ? (l.transformTemplate ||= zo(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, Io(b, s.style)),
          Go(e, p));
        let x = Ka(e),
          S = _s(s, v, _, C(db)),
          T = _o(
            w(g, {
              children: [
                x
                  ? E(Ha, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && Lo(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                E(Wa, { ...a, border: i, layoutId: u }),
              ],
            }),
            S
          ),
          D = xo(e.as),
          O = bo(x);
        return (
          e.fitImageDimension &&
            O &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = O.width / O.height)),
          w(D, { ...m, ...l, layoutId: u, style: h, ref: p, children: [T, o] })
        );
      })),
      (Nb = Po(
        D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? E(Mb, { ...e, ref: t }) : null;
        })
      )),
      (Pb = `__LAYOUT_TREE_ROOT`),
      (Fb = h.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Ib = class extends v {
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
                preserveFollowOpacity: t.options.layoutId === Pb && !this.follow?.isExiting,
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
          return E(Fb.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Lb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Rb = class {
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
      (zb = k(new Map())),
      (Bb = h.createContext(null)),
      (Vb = class extends v {
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
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === Pb && !this.props.isExiting;
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
          return E(Oe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Hb = (e) => {
        let t = h.useContext(Fb);
        return E(Vb, { ...e, sharedLayoutContext: t });
      }),
      (Ub = h.createContext(!0)),
      (Wb = k({ register: () => {}, deregister: () => {} })),
      (Gb = ({ isCurrent: e, isOverlayed: t, children: n }) => {
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
          E(Wb.Provider, { value: a, children: n })
        );
      }),
      (Kb = h.memo(function ({
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
        let S = fe(),
          T = C(xe),
          { persistLayoutIdCache: D } = C(ty),
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
              : l === !1 && (S.stop(), S.set({ zIndex: v, ...qb, opacity: 0 }), (l = !0)),
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
          N = { ...g };
        ((N.left === void 0 || N.right === void 0) && (N.width = `auto`),
          (N.top === void 0 || N.bottom === void 0) && (N.height = `auto`));
        let P = (js(a) || js(m)) && (e || t || n) ? 1200 : void 0,
          ne = { ...qb, ...O.current.origins },
          re = e
            ? {
                initial: { ...ne, ...m },
                animate: { ...ne, ...a, transition: ee },
                exit: { ...ne, ...h, transition: d },
              }
            : { animate: S, exit: { ...ne, ...h, transition: te } },
          ie = !(j || y === !1),
          ae = !!t && ie,
          oe = t && x;
        return w(Nb, {
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
            perspective: P,
          },
          children: [
            e &&
              E(Nb, {
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
            E(Nb, {
              ...N,
              ...re,
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
              style: { pointerEvents: void 0, opacity: oe || e || (t && _) ? 1 : 0 },
              "data-is-present": ie ? void 0 : !1,
              ref: k,
              children: E(Bb.Provider, {
                value: k,
                children: E(Ub.Provider, {
                  value: ae,
                  children: E(Gb, {
                    isCurrent: ae,
                    isOverlayed: r,
                    children: E(Hb, {
                      isLead: t,
                      animatesLayout: !!_,
                      transition: ee,
                      isExiting: !ie,
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
      (qb = {
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
      (Jb = class {
        warning = () => {
          Oi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
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
      (Yb = k(new Jb())),
      (Xb = {
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
      (Zb = () => ({
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
      (Qb = pg(qb)),
      ($b = h.createContext(void 0)),
      (ex = h.createContext(void 0)),
      (tx = (() => {
        class e extends v {
          #e = null;
          state = Zb();
          static defaultProps = { enabled: !0 };
          static contextType = $b;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Ya(t) || !Ja(t)) return;
            let n = { ...Xb.Instant },
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
            if (!Ya(t) || !Ja(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Xb.Instant)
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
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Ya(e) || !Ja(e))
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
            this.#i(e, Xb.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Xb.Fade, t);
          }
          push(e, t) {
            this.#i(e, Ms(t), t);
          }
          modal(e, t) {
            this.#i(e, Xb.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Ns(t), t);
          }
          flip(e, t) {
            this.#i(e, Ps(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Xb.MagicMotion, t);
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
              B(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              B(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                E(
                  Kb,
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
                Kb,
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
            return E(Nb, {
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
              children: E(Yb.Provider, {
                value: this,
                children: w(ex.Provider, {
                  value: i,
                  children: [
                    E(Kb, {
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
                      children: E(ba, {
                        children: E(Ib, {
                          children: E(Ae, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    E(Ae, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (nx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (rx = Po(h.forwardRef(uc))),
      ae(Zh(), 1),
      (ix = ((e) => (
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
      ))(ix || {})),
      (ax = `optional`),
      (ox = `outputControls`),
      ae(Zh(), 1),
      ae(Zh(), 1),
      (sx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (cx = Symbol(`private`)),
      (lx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [cx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Ov(),
                reset() {
                  for (let t in i)
                    if (sx(i, t)) {
                      let n = sx(e, t) ? sy(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, dx);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[cx].reset()),
          (e.addObserver = (e, t) => e[cx].observers.add(t)),
          e
        );
      })()),
      (ux = class {
        set = (e, t, n, r) => {
          if (t === cx) return !1;
          let i = e[cx],
            a,
            o;
          if (
            (Ai(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = kv(n)),
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
            l = sy(e)[t];
          if (l !== void 0) {
            Ai(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (sy(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === cx) return sy(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[cx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(cx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== cx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (dx = new ux()),
      (fx = `opacity`),
      (px = (() => {
        function e(t = {}) {
          let n = lx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => lx.resetObject(e));
          }),
          (e.addObserver = (e, t) => lx.addObserver(e, t)),
          e
        );
      })()),
      (mx = { update: 0 }),
      (hx = h.createContext({ update: NaN })),
      (gx = class extends v {
        observers = [];
        state = mx;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Qv.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), px.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            px._stores.forEach((e) => {
              let t = px.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            E(hx.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      ae(Zh(), 1),
      (_x = h.createContext(void 0)),
      (vx = h.createContext(void 0)),
      (yx = `ssr-variant`),
      (bx = `ssr-variant-group-separator`),
      (xx = h.forwardRef(function (e, t) {
        let n = Ac(t),
          r = h.useContext(vx),
          i = h.useSyncExternalStore(ig, og, ag),
          a = Ca(() => (i ? (vn() ? 1 : 2) : 0)),
          o = h.useContext(_x);
        return Lr(() => {
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
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (Sx = Fy(xx, `.${yx} { display: contents }`, `PropertyOverrides`)),
      (Cx = `default`),
      (wx = new Set([Cx])),
      (Tx = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Cx, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Cx;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Pc(r)) : Cx;
        }
        setAll(e, t = wx, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = He(n.transformTemplate) ? n.transformTemplate?.({}, Dx) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
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
      (Ex = new Tx()),
      (Dx = `__Appear_Animation_Transform__`),
      (Ox = `data-framer-appear-id`),
      (kx = `data-framer-appear-animation`),
      (Ax = { willChange: `transform` }),
      Object.freeze(Ax),
      (jx = {}),
      Object.freeze(jx),
      (Mx = h.createContext({})),
      (Nx = h.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = h.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Ac(a);
        return E(Mx.Provider, { value: o, children: s(r, i) });
      })),
      (Px = (e) =>
        h.forwardRef((t, n) =>
          E(e, { layoutId: Bo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (Fx = {}),
      (Ix = () => Fx),
      (Lx = (e) => {
        Fx = e;
      }),
      (Rx = !1),
      (zx = class extends v {
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
          Zt(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Bc(e)) throw e;
          return ((Rx = !0), this.props.children);
        }
      }),
      (Bx = s === void 0 ? null : new Promise(() => {})),
      (Vx = E(Vc, {})),
      (Hx = k(!1)),
      (Hx.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Ux = E(Uc, {})),
      (Wx = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Gc(this.props.getErrorMessage(), t?.componentStack), Wc(e, t));
        }
        render() {
          let { children: e, fallback: t = Ux } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Gx = class extends v {
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
      (Kx = h.createContext(void 0)),
      (qx = `code-crash:`),
      (Jx = Px(
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
          let u = Ca(() => (t ? `${t}-container` : void 0)),
            d = xo(n),
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
            children: E(db.Provider, {
              value: !0,
              children: E(L_.Provider, {
                value: i ?? null,
                children: E(Sa, {
                  enabled: !1,
                  children: E(Pe, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (Yx = h.forwardRef(function (e, t) {
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
          let n = xo(f);
          return E(L_.Provider, {
            value: a ?? null,
            children: E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return E(L_.Provider, {
            value: a ?? null,
            children: E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (Zx = new Set()),
      (Qx = k({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      ($x = `framer-cursor-none`),
      (eS = `framer-pointer-events-none`),
      (tS = ee(function ({ children: e }) {
        let t = Ca(() => {
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
          n = de();
        return w(Qx.Provider, { value: t, children: [e, !n && E(aS, {})] });
      })),
      (nS = Fy(
        tS,
        [
          `.${$x}, .${$x} * { cursor: none !important; }`,
          `.${eS}, .${eS} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (rS = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (iS = `data-framer-portal-id`),
      (aS = ee(function () {
        let { onRegisterCursors: e } = C(Qx),
          t = ul(!1),
          n = ue(0),
          i = ue(0),
          a = ue(0),
          o = M(null),
          s = M({ cursors: {}, cursorHash: void 0 }),
          c = Vo();
        (A(() => {
          if (!t) return;
          let e = 0,
            r = 0;
          function l() {
            (n.set(e), i.set(r), Ce(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ge(s.current.cursors)) return;
            let t = hl(e, r);
            t !== s.current.cursorHash && ((s.current.cursorHash = t), ke.update(() => c()));
          };
          function d(t) {
            if (t.pointerType === `touch`) {
              Me(u);
              return;
            }
            (ke.read(u, !0), (e = t.clientX), (r = t.clientY), ke.update(l));
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
            ke.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            Lg.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            ke.read(u, !0),
            () => {
              (Lg.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                Me(u));
            }
          );
        }, [a, n, i, c, t]),
          A(() => {
            if (!t) return;
            function e() {
              Ce(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              Lg.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), Lg.removeEventListener(`blur`, e));
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
              (r(), document.body.classList.toggle($x, !1));
            };
          }, [n, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          p = fl(d);
        f(() => {
          t && document.body.classList.toggle($x, p);
        }, [p, t]);
        let m = d?.component,
          h = d?.transition ?? { duration: 0 },
          g = h.duration === void 0 ? h : { ...h, duration: h.duration * 1e3 },
          _ = ie(n, g),
          v = ie(i, g),
          y = se(() => _.get() + (d?.offset?.x ?? 0)),
          x = se(() => v.get() + (d?.offset?.y ?? 0)),
          S = d?.alignment,
          w = d?.placement,
          T = r((e, t) => `translate(${ml(w, S)}) ${t}`, [S, w]);
        return !t || !d || !m
          ? null
          : E(b, {
              children: E(m, {
                transformTemplate: T,
                style: { ...rS, x: y, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: eS,
              }),
            });
      })),
      (oS = `webPageId`),
      (sS = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((eg && !xn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(vl(e), e), this.collectedLinks.set(vl(t), t));
          let n = this.nestingInfo.get(vl(e)) ?? new Set();
          (n.add(vl(t)), this.nestingInfo.set(vl(e), n));
        }
      }),
      (cS = new sS()),
      (lS = `element`),
      (uS = `collection`),
      (dS = `collectionItemId`),
      (fS = `pathVariables`),
      (pS = `framer/page-link,`),
      (mS = k(void 0)),
      (hS = `overlay`),
      (gS = `template-overlay`),
      (_S = class extends v {
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
            console.error(tt(tg ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Zt(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (tg && document.getElementById(`main`)?.innerHTML) || ``;
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
      (yS = /:([a-z]\w*)/gi),
      (bS = k(void 0)),
      (xS = new Map()),
      (SS = 500),
      (CS = 500),
      (TS = !1),
      (ES = 500),
      (DS = 0.9),
      (OS = 1.7),
      (kS = 4),
      (AS = 1 / 0),
      (jS = new WeakMap()),
      (MS = new Set()),
      (NS = new Map()),
      (PS = !b_ || typeof IntersectionObserver > `u` ? null : nu()),
      (FS = Ll(
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
            { activeLocale: g, locales: _ } = zn(),
            v = cu(),
            y = Bn(),
            b = yl(),
            x = lu({ nodeId: c, clickTrackingId: a, router: p, href: n, activeLocale: g }),
            S = t(() => {
              if (!n) return {};
              let e = _l(n) ? n : El(n);
              if (!e) return {};
              if (L(e))
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
                S = iu(r, !0),
                C = S === `_blank`,
                w = _u(u, C),
                T = { pathVariables: f, locale: b },
                E = pu(u, w, (e) =>
                  du(
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
                onClick: fu(u, x, E),
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
                return PS?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
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
      (IS = h.createContext(void 0)),
      (LS = `__framer_force_showing_editorbar_since`),
      (RS = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (zS = () => {
        try {
          return !!localStorage[LS];
        } catch {
          return !1;
        }
      }),
      (BS = () => !zS()),
      (VS = (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (HS = null),
      (US = null),
      rg(Ou),
      (WS = (e, t, n, r, i, a) => {
        let o = C(IS),
          c = M(),
          l = cn(),
          u = M(!0);
        return (
          A(() => {
            function d() {
              (!HS || !US) && Ou();
              let s = n ? new URL(n, Lg.location.href) : Lg.location,
                c = {
                  version: Rg,
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
                  timezone: HS,
                  locale: US,
                },
                d = u.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && L(a)) {
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
                u.current ? (u.current = !1) : Zt(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = d()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), Zt(`published_site_pageview`, t, `eager`));
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
      (GS = 0),
      (KS = 500),
      (qS = 200),
      (JS = `main`),
      (YS = `framerGeneratedPage`),
      (XS = `<!-- Start of headStart -->`),
      (ZS = `<!-- End of headStart -->`),
      (QS = `<!-- Start of headEnd -->`),
      ($S = `<!-- End of headEnd -->`),
      (eC = `<!-- Start of bodyStart -->`),
      (tC = `<!-- End of bodyStart -->`),
      (nC = `<!-- Start of bodyEnd -->`),
      (rC = `<!-- End of bodyEnd -->`),
      (iC = h.createContext(void 0)),
      (aC = { status: `loading`, data: void 0 }),
      (oC = 5e3),
      (sC = () => {}),
      (cC = class e {
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
          let i = Lg.setInterval(() => {
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
          if (!vn() || !xl(e.url, !1)) return;
          let t = xd(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = wd(n, e);
          return (e.resultOutputType === `image` && L(i) && (await vd(i).catch(sC)), i);
        }
        async fetchWithCache(e) {
          if (!vn()) return;
          let t = xd(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Td(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, aC);
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
          if (!xl(r, !1)) return sC;
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
      (lC = k(void 0)),
      (uC = k(!0)),
      (dC = ({ children: e, client: t }) => {
        let [n] = y(() => t ?? new cC()),
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
          E(uC.Provider, { value: r, children: E(lC.Provider, { value: n, children: e }) })
        );
      }),
      (fC = (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (je.WillChange = Ie),
      (pC = { priority: void 0, canYield: !0 }),
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
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ue(e)
            ? { type: `boolean`, value: e }
            : Ye(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
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
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (mC = { type: `unknown`, isNullable: !0 }),
      (hC = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = yc(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
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
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
          return bg.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await xf(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Md(e);
            i && (await i);
            let a = t[r];
            B(a, `Can't find collection item`);
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
            (B(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (gC = new Map()),
      (_C = new WeakMap()),
      (vC = `$r_`),
      (yC = new Map()),
      (bC = class {
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
          B(kf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
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
          B(jf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
      (xC = `index`),
      (SC = class extends Set {
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
      (CC = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new TC();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (wC = class {
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
      (TC = class extends SC {
        name = `Indexes`;
      }),
      (EC = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
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
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Of(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Af(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends SC {
        name = `Fields`;
      }),
      (DC = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (OC = class {
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== xC) return !1;
          return !0;
        }
      }),
      (kC = class {
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
      (AC = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new OC();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new kC(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (jC = 1e3),
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
      (MC = class {
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
      (NC = class e {
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
      (PC = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (FC = class extends PC {
        group;
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Nd(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Pd(this.evaluate(void 0), void 0, e);
        }
      }),
      (IC = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (LC = class e extends FC {
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
          return new kC(e.ordering, t);
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
            i = this.projections.map((e) => new IC(e.input.getOptimized(), e.field));
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
            let n = new MC();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (RC = { type: 0 }),
      ($ = class extends PC {
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
      (zC = { type: 0 }),
      (BC = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (VC = class e extends $ {
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
            n = this.conditions.map((e) => new BC(e.when.getOptimized(), e.then.getOptimized())),
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
            for (let { when: e, then: t } of r) if (X.equal(n, e, zC)) return t;
          } else for (let { when: e, then: t } of r) if (Jd(e)) return t;
          return i;
        }
      }),
      (HC = class {
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
          let e = new AC();
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
            o = new OC();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Ke(t)) continue;
                a.add(t.field);
                let r = new DC(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new EC(Ff(this.fieldId++), void 0, t.definition, void 0),
                  a = new IC(t, r);
                i.push(a);
                let s = new DC(r, e.direction);
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
              B(n.alias, `Subqueries should have an alias`);
              let r = Ff(this.fieldId++),
                a = n.alias,
                s = new EC(r, a, t.definition, void 0),
                c = new IC(t, s);
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
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = wf(t.data, this.locale),
            i = t.alias,
            a = new CC(Nf(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new EC(Ff(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new EC(Ff(this.fieldId++), xC, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: xC, collectionName: i });
            let t = new OC(),
              r = new DC(e);
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
            let i = new OC(),
              o = new wC(Pf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new OC(),
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
              V(t.type, `Unsupported join type`);
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
              V(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(mC, null);
        }
        buildLiteralValue(e) {
          let t = X.parse(e.value);
          return this.normalizer.newScalarConstant(mC, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
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
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new UC(e);
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
            let n = new UC(e);
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
              (t) => new BC(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              V(t.operator, `Unsupported unary operator`);
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
              V(t.operator, `Unsupported binary operator`);
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
      (UC = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (WC = class e extends FC {
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
          return (t.merge(this.predicate.referencedFields), new kC(e.ordering, t));
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
      (GC = class e extends FC {
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
          return Q.estimate(1, e ? 100 * jC : 50 * jC);
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
            let o = new MC();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new NC(n, a);
        }
      }),
      (KC = class e extends FC {
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
          return new kC(new OC(), e.resolvedFields);
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
      (qC = class e extends FC {
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
          return Q.estimate(1, 200 * jC);
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
            let o = new MC();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new NC(t, i);
        }
      }),
      (JC = class e extends FC {
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
          return new kC(new OC(), e.resolvedFields);
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
      (YC = class e extends $ {
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
      (XC = class extends $ {
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
      (ZC = { type: 0 }),
      (QC = class e extends $ {
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
          return { type: `boolean`, value: X.contains(n, r, ZC) };
        }
      }),
      ($C = { type: 0 }),
      (ew = class e extends $ {
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
          return { type: `boolean`, value: X.endsWith(n, r, $C) };
        }
      }),
      (tw = class e extends $ {
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
          return { type: `boolean`, value: X.equal(n, r, RC) };
        }
      }),
      (nw = class e extends $ {
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
          return { type: `boolean`, value: X.greaterThan(n, r, RC) };
        }
      }),
      (rw = class e extends $ {
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
          return { type: `boolean`, value: X.greaterThanOrEqual(n, r, RC) };
        }
      }),
      (iw = class e extends $ {
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
          return { type: `boolean`, value: X.lessThan(n, r, RC) };
        }
      }),
      (aw = class e extends $ {
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
          return { type: `boolean`, value: X.lessThanOrEqual(n, r, RC) };
        }
      }),
      (ow = class e extends $ {
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
          return { type: `boolean`, value: !X.equal(n, r, RC) };
        }
      }),
      (sw = class e extends $ {
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
      (cw = { type: 0 }),
      (lw = class e extends $ {
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
          return { type: `boolean`, value: X.startsWith(n, r, cw) };
        }
      }),
      (uw = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof WC) {
            if (e.predicate instanceof YC) {
              let n = new KC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof sw) {
              let n = new JC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof qC)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new GC(n, Rf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof WC) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof qC)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof tw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof XC &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ow &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof XC &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof XC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof aw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof XC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof nw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof XC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof rw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof XC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof XC &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof lw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof XC &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ew &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof XC &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new GC(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (dw = class {
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
          let r = new fw();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (fw = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (pw = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (mw = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new dw(zf(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new pw(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (hw = class e extends FC {
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
          return new kC(new OC(), n);
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
          let o = new NC(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new MC();
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
          if (this.constraint instanceof tw) {
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
          let r = new NC(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new MC();
              (n.merge(i),
                n.merge(a),
                Jd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (gw = class e extends FC {
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
          return (t.merge(this.limit.referencedFields), new kC(this.ordering, t));
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
      (_w = class e extends FC {
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
          return (t.merge(this.offset.referencedFields), new kC(this.ordering, t));
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
      (vw = class e extends $ {
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
          return new kC(this.ordering, e);
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
          let n = new MC();
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
      (yw = class e extends $ {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
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
      (bw = class e extends $ {
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
          return (Ke(this.field.collection) || e.add(this.field), new kC(this.ordering, e));
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
          let n = new MC();
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
      (xw = { type: 0 }),
      (Sw = class e extends $ {
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
          return { type: `boolean`, value: X.in(n, r, xw) };
        }
      }),
      (Cw = { type: 1 }),
      (ww = class e extends $ {
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
          return { type: `number`, value: X.indexOf(n, r, Cw) };
        }
      }),
      (Tw = class extends Error {}),
      (Ew = class e extends $ {
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
      (Dw = class e extends $ {
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
      (Ow = class e extends $ {
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
      (kw = { type: 0 }),
      (Aw = class e extends $ {
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
          return { type: `boolean`, value: !X.in(n, r, kw) };
        }
      }),
      (jw = class extends $ {
        constructor(e, t) {
          B(e.name !== xC, `Invalid field name`);
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
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (Mw = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new qC(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new GC(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new hw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof XC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof hw && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new WC(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new LC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof LC &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new gw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new _w(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof XC) &&
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
          let n = new jw(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new XC(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof Ow)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof tw) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof ow) return this.newScalarEquals(e.left, e.right);
          if (e instanceof iw) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof aw) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof nw) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof rw) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof YC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof sw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new Ow(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof XC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof XC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof XC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof XC && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new YC(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof XC && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof XC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof XC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof XC && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new sw(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof jw;
          if (t instanceof jw && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new tw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof jw;
          if (t instanceof jw && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ow(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof jw;
          if (t instanceof jw && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new iw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof jw;
          if (t instanceof jw && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new aw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof jw;
          if (t instanceof jw && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new nw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof jw;
          if (t instanceof jw && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new rw(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Sw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Aw(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new BC(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new VC(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new QC(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new lw(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new ew(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new Dw(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new ww(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new vw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new bw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new Ew(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new yw(e, t);
          return this.finishScalar(n);
        }
      }),
      (Nw = class extends FC {}),
      (Pw = class e extends Nw {
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
          return new kC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * jC).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            B(e.collection, `Collection required to resolve field`);
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
                B(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new MC();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (B(s, `Item not found`), B(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (Fw = { type: 0 }),
      (Iw = class e extends Nw {
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
            e.name !== xC && (Ke(e.collection) || t.add(e));
          return new kC(new OC(), t);
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
              if (n.name === xC) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!X.equal(a, o, Fw)) {
                if (qe(a) || X.lessThan(a, o, Fw)) return i ? -1 : 1;
                if (qe(o) || X.greaterThan(a, o, Fw)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (Lw = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new mw();
        normalizer = new Mw(this.memo);
        explorer = new uw(this.normalizer);
        optimize(e) {
          let t = new HC(this.normalizer, this.query, this.locale).build(),
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
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new Pw(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new Iw(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (Rw = Od(`query-engine`)),
      (zw = class {
        async evalQuery(e, t, n, r) {
          Rw.enabled &&
            Rw.debug(`Query:
${tp(e)}`);
          let i = new bC(e, t, r),
            a = new Lw(e, t, i),
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
          let i = new bC(t, n, r);
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
      (Bw = `style[data-framer-breakpoint-css]`),
      (Vw = `page`),
      (Hw = Symbol(`cycle`)),
      (Gw = (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (Kw = h.createContext(void 0)),
      (qw = () => h.useContext(Kw)),
      (Jw = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (Yw = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (Xw = Jw),
      (Zw = `System Default`),
      (Qw = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(Xw)) {
            let n = Xw[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(Yw)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: Zw, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Fp(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      ($w = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (eT = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (nT = `Variable`),
      (rT = `BI;`),
      (iT = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Bp(n),
              u = Wp(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Up(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Jp(u, e.font.faceDescriptors?.weight) : qp(c),
                style: Xp(c),
                cssFamilyName: Vp(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = qp(e.variant),
                r = qp(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = Yp(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : aT[t],
            style: Xp(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Up(t)
            ? t?.map((e) => {
                if (Gp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${rT}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(rT)) return null;
          let [t, n] = e.split(rT);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (aT = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (oT = Od(`custom-font-source`)),
      (sT = `CUSTOM;`),
      (cT = `CUSTOMV2;`),
      (lT = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = om(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = Bp(i),
              f = lm(i),
              p = am(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: Up(u),
                variationAxes: Wp(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = im(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              oT.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              um(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && cm(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = dm(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${cT}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${sT}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            B(tm(e), `Selector must be a custom font selector`),
            rm(e) ? e.slice(sT.length) : e.slice(cT.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Up(t)
            ? t?.map((e) => {
                if (Gp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (uT = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (dT = `FS;`),
      (fT = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (pT = Object.keys(fT)),
      (mT = RegExp(`^(?:${[...pT, `italic`, `variable`].join(`|`)})`, `u`)),
      (hT = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = pT.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && fT[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(dT)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(dT, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${dT}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${dT}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await fm(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!mT.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = Zp(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: gm(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Vp(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await pm(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (gT = `Inter`),
      (_T = `FR;`),
      (vT = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (yT = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(_T) && !e.startsWith(gT)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && vT[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${_T}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await pm(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (bT = `GF;`),
      (xT = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(bT)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(bT, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${bT}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${bT}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await fm(`google`),
            a = [],
            o = vm(t, (e) => e.family),
            s = vm(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(Pp),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Pp(e) ? Zp(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: _m(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Vp(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await pm(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (ST = ae(Qh(), 1)),
      (CT = 5e3),
      (wT = 3),
      (TT = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (ET = new Map()),
      (DT = new Map()),
      (OT = new Map()),
      (kT = (e, t) => xm(e, t)),
      (AT = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (jT = class {
        enabled = !1;
        bySelector = new eT();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new Qw()),
            (this.google = new xT()),
            (this.fontshare = new hT()),
            (this.framer = new yT()),
            (this.custom = new lT()),
            (this.builtIn = new iT()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await J.fetchGoogleFontsList(),
                n = await wm(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = J.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await wm(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = J.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = wm(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!tm(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            tm(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Cm({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = xT.parseVariant(n.variant);
            if (Pp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Hp(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = hT.parseVariant(r.variant);
            if (Pp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Hp(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = iT.parseVariant(i.variant);
            if (Pp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Hp(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return yT.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = em(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((xn() || (await Sm(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await kT({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await kT({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Cm({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              V(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(dT)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Oi(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(bT)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Oi(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(rT)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Oi(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(tm) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Oi(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !MT.loadedSelectors.has(e));
          n.length !== 0 &&
            (await MT.loadWebFontsFromSelectors(n),
            n.every((e) => MT.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (B(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (MT = new jT()),
      (NT = {
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
      (PT = { opacity: 0 }),
      (FT = { opacity: 1 }),
      (IT = Rm(
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
            f = t(() => bo(r), [r]),
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
            w(xo(e.as), {
              ...u,
              style: d,
              ref: n,
              draggable: o,
              children: [r && E(Ha, { image: r, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (RT = !_n() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (zT =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (BT = `{{ text-placeholder }}`),
      (VT = `rich-text-wrapper`),
      (HT = Po(
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
              positionStickyLeft: te,
              __htmlStructure: N,
              __fromCanvasComponent: P = !1,
              _forwardedOverrideId: ne,
              _forwardedOverrides: re,
              _usesDOMRect: ie,
              children: ae,
              ...oe
            } = e,
            se = po(),
            ce = Bo(e),
            le = M(null),
            ue = n ?? le,
            { navigate: de, getRoute: fe } = St(),
            pe = wt();
          (Vn(e.preload ?? []), Go(e, ue));
          let me = C(db),
            he = yl(),
            ge = s,
            F = ne ?? r;
          if (F && re) {
            let e = re[F];
            typeof e == `string` && (ge = e);
          }
          let _e = ``;
          if (ge) {
            let e = Bm(ge);
            _e = N ? N.replace(BT, e) : `<p>${e}</p>`;
          } else if (a) _e = a;
          else if (c) {
            let e = Bm(c);
            _e = N ? N.replace(BT, e) : `<p>${e}</p>`;
          } else o && (_e = o);
          let ve = Vl(),
            ye = t(() => (he || !fe || !pe ? _e : Vm(_e, fe, pe, ve)), [_e, fe, pe, ve]);
          if (
            (A(() => {
              let e = ue.current;
              if (e === null) return;
              function t(e) {
                let t = Fl(e.target, ue.current);
                wn(e) ||
                  !de ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Tl(de, t, ve) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [de, ve]),
            Wm(l, P, ue),
            !y)
          )
            return null;
          let be = w && T() === q.canvas,
            I = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Um(S),
              opacity: be ? 0 : b,
              flexShrink: 0,
            },
            xe = q.hasRestrictions(),
            Se = lo(e, se || 0, !1),
            Ce = ie && (u === `auto` || d === `auto`),
            we = !!e.transformTemplate || !Se || !xe || P || Ce,
            Te = we ? (e.transformTemplate ?? zo(g)) : void 0;
          if (!D) {
            if (Se && xe && !Ce) {
              let e = kv.getNumber(x).toFixed(4);
              ((I.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
                (I.width = Se.width),
                (I.minWidth = Se.width),
                (I.height = Se.height));
            } else
              ((I.left = f),
                (I.right = p),
                (I.top = m),
                (I.bottom = h),
                (I.width = u),
                (I.height = d),
                (I.rotate = x));
            O
              ? (!he || me) &&
                ((I.position = `sticky`),
                (I.willChange = `transform`),
                (I.top = k),
                (I.right = j),
                (I.bottom = ee),
                (I.left = te))
              : he && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`);
          }
          return (
            Ec(e, I),
            Cc(e, I),
            Object.assign(I, e.style),
            E(ze.div, {
              id: r,
              ref: ue,
              ...oe,
              ...Io(we ? g : void 0, e.style),
              style: I,
              layoutId: ce,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": g,
              className: Oc(_, v, VT),
              transformTemplate: Te,
              dangerouslySetInnerHTML: { __html: ye },
            })
          );
        })
      )),
      (UT = {
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
      (WT = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (GT = D(function (e, t) {
        return E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (KT = ze.create(GT)),
      (qT = D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return E(KT, {
          ...r,
          ref: i,
          viewBox: t,
          children: E(ze.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (JT = []),
      (YT = `RichTextContainer`),
      (XT = D(function (e, n) {
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
            fonts: p = JT,
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
            visible: N = !0,
            width: P,
            withExternalLayout: ne = !1,
            viewBox: re,
            viewBoxScale: ie = 1,
            effect: ae,
            ...oe
          } = e,
          se = po(),
          ce = f(),
          le = ce === q.canvas,
          ue = le || ce === q.export,
          de = C(db),
          fe = Bo(e),
          pe = M(null),
          me = n ?? pe;
        (Go(e, me), Wm(p, r, me));
        let he = $m(ae, me),
          ge = t(() => {
            if (d) return sh(d, A, j, s, void 0, he.getTokenizer());
          }, [d, A, j, s, he]);
        if (!N) return null;
        let F = { opacity: h && le ? 0 : v },
          _e = Um(te);
        _e !== Gy.justifyContent && (F.justifyContent = _e);
        let ve = {},
          ye = q.hasRestrictions(),
          be = lo(e, se || 0, !1),
          I = o && (P === `auto` || m === `auto`),
          xe = !!e.transformTemplate || !be || !ye || r || I,
          Se = xe ? (e.transformTemplate ?? zo(u)) : void 0;
        (ne ||
          (be && ye && !I
            ? ((ve.x = be.x + (R(O?.x) ? O.x : 0)),
              (ve.y = be.y + (R(O?.y) ? O.y : 0)),
              (ve.left = 0),
              (ve.top = 0),
              (F.rotate = kv.getNumber(D)),
              (F.width = be.width),
              (F.minWidth = be.width),
              (F.height = be.height))
            : ((F.left = g),
              (F.right = T),
              (F.top = ee),
              (F.bottom = l),
              (F.width = P),
              (F.height = m),
              (F.rotate = D)),
          y
            ? (!ue || de) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.top = w),
              (F.right = S),
              (F.bottom = b),
              (F.left = x))
            : le && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          Ec(e, F),
          Cc(e, F),
          Object.assign(F, k, O, ve),
          fe && (oe.layout = `preserve-aspect`));
        let Ce = xo(e.as),
          we = oe[`data-framer-name`] ?? _,
          Te = le ? ih(sy(oe)) : oe,
          Ee = Io(xe ? u : void 0, O);
        return L(e.viewBox)
          ? e.as === void 0
            ? E(qT, {
                ...Te,
                ...Ee,
                ref: me,
                style: F,
                layoutId: fe,
                viewBox: re,
                viewBoxScale: ie,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": YT,
                children: ge,
              })
            : E(Ce, {
                ...Te,
                ...Ee,
                ref: me,
                style: F,
                layoutId: fe,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": YT,
                children: E(qT, {
                  viewBox: re,
                  viewBoxScale: ie,
                  style: { width: `100%`, height: `100%` },
                  children: ge,
                }),
              })
          : E(Ce, {
              ...Te,
              ...Ee,
              ref: me,
              style: F,
              layoutId: fe,
              transformTemplate: Se,
              "data-framer-name": we,
              "data-framer-component-type": YT,
              children: ge,
            });
      })),
      (ZT = Po(
        D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return E(HT, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return E(XT, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (QT = `framer/asset-reference,`),
      ($T = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = bh(t);
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
      (eE = vn()),
      (tE = class {
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
      (nE = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (rE = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(_b(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Sh(e);
            (s &&
              (t && Ch(s, n),
              (s.id = n),
              (o = Oh(s)),
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
          eE && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = nE),
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
          eE && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new tE(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !eE) ||
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
                        eE && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${nE}" aria-hidden="true">`),
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
      (iE = new rE()),
      (aE = {
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
      (oE = D(function (e, t) {
        let n = po(),
          r = Bo(e),
          i = h.useRef(null),
          a = t ?? i,
          o = qw();
        return (
          Go(e, i),
          E(cE, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (sE = 5e4),
      (cE = class e extends gb {
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
        static defaultProps = { ...gb.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return lo(e, e.parentSize || 0);
        }
        container = h.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return lo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (iE.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Mh(this.container, this.props);
        }
        componentWillUnmount() {
          (iE.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (by.isImageObject(t) &&
            by.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            Xo(this.svgElement, `fill`, null, !1),
            Mh(this.container, this.props));
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
            c = kv.getNumber(r);
          if (
            ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1), q.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              oo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = $v;
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
            gb.applyWillChange(this.props, T, !1));
          let O = null;
          if (typeof r == `string` || K.isColorObject(r)) {
            let e = K.isColorObject(r) ? r.initialValue || K.toRgbString(r) : r;
            ((T.fill = e), (T.color = e));
          } else if (wb.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${wb.hash(t)}`;
            T.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = fh(t, x);
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
          } else if (Eb.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Eb.hash(t)}`;
            T.fill = `url(#${n})`;
            let i = ph(t, x);
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
          } else if (by.isImageObject(r)) {
            let e = vh(r, C, x);
            e &&
              ((T.fill = `url(#${e.id})`),
              (O = E(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: E(`defs`, { children: E($T, { ...e }) }),
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
              i.length < sE &&
              !kh(i) &&
              !Ah(i),
            ee = null;
          if (j)
            ((T.backgroundSize = `100% 100%`),
              (T.backgroundImage = $e(i)),
              iE.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = iE.subscribe(i, !m, e, y);
            (iE.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              jh(T) && (T.overflow = `hidden`),
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
                    by.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let M = xo(this.props.as),
            { href: te, target: N, rel: P, onClick: ne, onTap: re } = this.props,
            ie = s || c;
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
            role: ie ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ie ? void 0 : `true`,
            onTap: re,
            onClick: ne,
            href: te,
            target: N,
            rel: P,
            children: ee,
          });
        }
      }),
      (lE = Po(oE)),
      (uE = 1e3),
      (dE = `explicitInter`),
      (Fe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = he(e(this.get()));
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
  Fh as A,
  ri as B,
  MT as C,
  Ox as D,
  Ex as E,
  fi as F,
  Nl as G,
  Ei as H,
  it as I,
  $r as J,
  Lx as K,
  fE as L,
  Nh as M,
  np as N,
  Dx as O,
  Ug as P,
  gl as Q,
  st as R,
  Oc as S,
  kx as T,
  mp as U,
  cS as V,
  Gh as W,
  zc as X,
  op as Y,
  wt as Z,
  Yx as _,
  _x as a,
  St as at,
  lb as b,
  bg as c,
  Fy as ct,
  Dd as d,
  p_ as dt,
  Ts as et,
  Sx as f,
  lE as g,
  ZT as h,
  wa as i,
  Ot as it,
  Ih as j,
  Py as k,
  FS as l,
  Mp as lt,
  q as m,
  Jx as n,
  zn as nt,
  _S as o,
  xh as ot,
  zw as p,
  iE as q,
  ix as r,
  Di as rt,
  IT as s,
  jp as st,
  Nx as t,
  yl as tt,
  Kn as u,
  Wh as ut,
  Ph as v,
  qh as w,
  Ly as x,
  vc as y,
  dg as z,
};
//# sourceMappingURL=framer.1c_rZl7u.mjs.map
