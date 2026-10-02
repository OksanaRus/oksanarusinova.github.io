import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  H as n,
  O as r,
  R as i,
  W as a,
  c as o,
  f as s,
  h as c,
  s as l,
} from "./react.hMW2PJqY.mjs";
import { V as u } from "./motion.CaZjHSpz.mjs";
import {
  K as d,
  T as ee,
  c as f,
  ht as p,
  i as te,
  j as ne,
  kn as m,
  t as re,
} from "./framer.CuDPj9y9.mjs";
function h(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function g(e) {
  return typeof e == `function` ? e() : e;
}
function ie(e, t) {
  return k[e] > k[t];
}
function _(e) {
  let t;
  for (let n of e) {
    let e = g(n);
    if (((t === void 0 || ie(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function ae(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function v(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function y(e) {
  throw Error(`Unexpected value: ${e}`);
}
function b(e, t, n, r) {
  (v(e >= t, e, `outside lower bound for`, r), v(e <= n, e, `outside upper bound for`, r));
}
function x(e) {
  return typeof e == `string`;
}
function S(e) {
  return Number.isFinite(e);
}
function C(e) {
  return e === null;
}
function w(e) {
  if (C(e)) return 0;
  switch (e.type) {
    case f.Array:
      return 1;
    case f.Boolean:
      return 2;
    case f.Color:
      return 3;
    case f.Date:
      return 4;
    case f.Enum:
      return 5;
    case f.File:
      return 6;
    case f.ResponsiveImage:
      return 10;
    case f.Link:
      return 7;
    case f.Number:
      return 8;
    case f.Object:
      return 9;
    case f.RichText:
      return 11;
    case f.String:
      return 12;
    case f.VectorSetItem:
      return 13;
    default:
      y(e);
  }
}
function oe(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = E.read(e);
    n.push(t);
  }
  return { type: f.Array, value: n };
}
function se(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) E.write(e, n);
}
function ce(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = E.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function le(e) {
  return { type: f.Boolean, value: e.readUint8() !== 0 };
}
function ue(e, t) {
  e.writeUint8(+!!t.value);
}
function de(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function fe(e) {
  return { type: f.Color, value: e.readString() };
}
function pe(e, t) {
  e.writeString(t.value);
}
function me(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function he(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: f.Date, value: n.toISOString() };
}
function ge(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function _e(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ve(e) {
  return { type: f.Enum, value: e.readString() };
}
function ye(e, t) {
  e.writeString(t.value);
}
function be(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xe(e) {
  return { type: f.File, value: e.readString() };
}
function Se(e, t) {
  e.writeString(t.value);
}
function Ce(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function we(e) {
  return { type: f.Link, value: e.readJson() };
}
function Te(e, t) {
  e.writeJson(t.value);
}
function Ee(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function De(e) {
  return { type: f.Number, value: e.readFloat64() };
}
function Oe(e, t) {
  e.writeFloat64(t.value);
}
function ke(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ae(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = E.read(e);
  }
  return { type: f.Object, value: n };
}
function je(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), E.write(e, r));
}
function Me(e, t, n) {
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
      u = E.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ne(e) {
  return { type: f.ResponsiveImage, value: e.readJson() };
}
function Pe(e, t) {
  e.writeJson(t.value);
}
function Fe(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ie(e) {
  let t = e.readInt8();
  if (t === 0) return { type: f.RichText, value: e.readUint32() };
  if (t === 1) return { type: f.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Le(e, t) {
  if (S(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (x(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Re(e, t) {
  let n = e.value,
    r = t.value;
  if ((S(n) && S(r)) || (x(n) && x(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function ze(e) {
  return { type: f.String, value: e.readString() };
}
function Be(e, t) {
  e.writeString(t.value);
}
function Ve(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function He(e) {
  return { type: f.VectorSetItem, value: e.readUint32() };
}
function Ue(e, t) {
  e.writeUint32(t.value);
}
function We(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ge(e) {
  let t = Math.floor(lt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Ke(e, t) {
  let n = Je(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await z(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new dt(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function qe(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Je(e) {
  v(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Ye(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = E.read(e);
  }
  return t;
}
function* Xe(e) {
  for (let t of e) yield* t.prioritySources;
}
var T,
  E,
  Ze,
  D,
  Qe,
  O,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  k,
  A,
  j,
  at,
  ot,
  M,
  N,
  P,
  F,
  I,
  st,
  L,
  ct,
  R,
  lt,
  ut,
  z,
  dt,
  B,
  ft,
  V,
  pt = t(() => {
    (n(),
      p(),
      (Ze = Object.create),
      (D = Object.defineProperty),
      (Qe = Object.getOwnPropertyDescriptor),
      (O = Object.getOwnPropertyNames),
      ($e = Object.getPrototypeOf),
      (et = Object.prototype.hasOwnProperty),
      (tt = (e, t) =>
        function () {
          try {
            return (t || (0, e[O(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (nt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of O(t))
            et.call(e, i) ||
              i === n ||
              D(e, i, { get: () => t[i], enumerable: !(r = Qe(t, i)) || r.enumerable });
        return e;
      }),
      (rt = (e, t, n) => (
        (n = e == null ? {} : Ze($e(e))),
        nt(!t && e && e.__esModule ? n : D(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (it = rt(
        tt({
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
      (k = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (A = {
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
      (j =
        ((T = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = A.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = A.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = A.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = A.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = A.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = A.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = A.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = A.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = A.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = A.Float64;
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
            (h(this, `bytes`, void 0),
              h(this, `offset`, 0),
              h(this, `view`, void 0),
              (this.bytes = e),
              (this.view = ae(this.bytes)));
          }
        }),
        h(T, `textDecoder`, new TextDecoder()),
        T)),
      a !== void 0 && a.requestIdleCallback,
      (at = 1024),
      (ot = 1.5),
      (M = (e) => 2 ** e - 1),
      (N = (e) => -(2 ** (e - 1))),
      (P = (e) => 2 ** (e - 1) - 1),
      (F = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: N(8),
        Int16: N(16),
        Int32: N(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (I = {
        Uint8: M(8),
        Uint16: M(16),
        Uint32: M(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: P(8),
        Int16: P(16),
        Int32: P(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (st = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * ot) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = ae(n)));
        }
        writeUint8(e) {
          b(e, F.Uint8, I.Uint8, `Uint8`);
          let t = A.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          b(e, F.Uint16, I.Uint16, `Uint16`);
          let t = A.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          b(e, F.Uint32, I.Uint32, `Uint32`);
          let t = A.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          b(e, F.Uint64, I.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          b(e, F.BigUint64, I.BigUint64, `BigUint64`);
          let t = A.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          b(e, F.Int8, I.Int8, `Int8`);
          let t = A.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          b(e, F.Int16, I.Int16, `Int16`);
          let t = A.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          b(e, F.Int32, I.Int32, `Int32`);
          let t = A.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          b(e, F.Int64, I.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          b(e, F.BigInt64, I.BigInt64, `BigInt64`);
          let t = A.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = A.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = A.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (h(this, `offset`, 0),
            h(this, `bytes`, new Uint8Array(at)),
            h(this, `view`, ae(this.bytes)),
            h(this, `encoder`, new TextEncoder()),
            h(this, `encodedStrings`, new Map()));
        }
      }),
      (L = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            v(S(n), `Invalid chunkId`),
            v(S(r), `Invalid offset`),
            v(S(i), `Invalid length`),
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
                  : (v(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (h(this, `chunkId`, void 0),
            h(this, `offset`, void 0),
            h(this, `length`, void 0),
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
              return oe(e);
            case 2:
              return le(e);
            case 3:
              return fe(e);
            case 4:
              return he(e);
            case 5:
              return ve(e);
            case 6:
              return xe(e);
            case 7:
              return we(e);
            case 8:
              return De(e);
            case 9:
              return Ae(e);
            case 10:
              return Ne(e);
            case 11:
              return Ie(e);
            case 12:
              return ze(e);
            case 13:
              return He(e);
            default:
              y(t);
          }
        }),
          (e.write = function (e, t) {
            let n = w(t);
            if ((e.writeUint8(n), !C(t)))
              switch (t.type) {
                case f.Array:
                  return se(e, t);
                case f.Boolean:
                  return ue(e, t);
                case f.Color:
                  return pe(e, t);
                case f.Date:
                  return ge(e, t);
                case f.Enum:
                  return ye(e, t);
                case f.File:
                  return Se(e, t);
                case f.Link:
                  return Te(e, t);
                case f.Number:
                  return Oe(e, t);
                case f.Object:
                  return je(e, t);
                case f.ResponsiveImage:
                  return Pe(e, t);
                case f.RichText:
                  return Le(e, t);
                case f.VectorSetItem:
                  return Ue(e, t);
                case f.String:
                  return Be(e, t);
                default:
                  y(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = w(e),
              i = w(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (C(e) || C(t)) return 0;
            switch (e.type) {
              case f.Array:
                return (v(t.type === f.Array), ce(e, t, n));
              case f.Boolean:
                return (v(t.type === f.Boolean), de(e, t));
              case f.Color:
                return (v(t.type === f.Color), me(e, t));
              case f.Date:
                return (v(t.type === f.Date), _e(e, t));
              case f.Enum:
                return (v(t.type === f.Enum), be(e, t));
              case f.File:
                return (v(t.type === f.File), Ce(e, t));
              case f.Link:
                return (v(t.type === f.Link), Ee(e, t));
              case f.Number:
                return (v(t.type === f.Number), ke(e, t));
              case f.Object:
                return (v(t.type === f.Object), Me(e, t, n));
              case f.ResponsiveImage:
                return (v(t.type === f.ResponsiveImage), Fe(e, t));
              case f.RichText:
                return (v(t.type === f.RichText), Re(e, t));
              case f.VectorSetItem:
                return (v(t.type === f.VectorSetItem), We(e, t));
              case f.String:
                return (v(t.type === f.String), Ve(e, t, n));
              default:
                y(e);
            }
          }));
      })((E ||= {})),
      (ct = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = E.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new j(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = E.read(r);
                e.push(t);
              }
              let t = L.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new st();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) E.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (h(this, `fieldNames`, void 0),
            h(this, `options`, void 0),
            h(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (R = 3),
      (lt = 250),
      (ut = [408, 429, 500, 502, 503, 504]),
      (z = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!ut.includes(r.status) || ++n > R) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > R) throw e;
          }
          await Ge(n);
        }
      }),
      (dt = class {
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
            if ((v(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = qe(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((v(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = qe(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          h(this, `chunks`, []);
        }
      }),
      (B = class {
        async loadModel() {
          let [e] = await Ke(this.options.url, [this.options.range]);
          return (
            v(e, `Failed to load model`),
            ct.deserialize(e, () => {
              let e = _(this.modelPrioritySources);
              return e ? m({ batch: !0, priority: e }) : void 0;
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          v(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? m({ batch: !0, priority: g(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  y(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? m({ batch: !0, priority: g(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > E.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            E.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? m({ batch: !0, priority: g(n) }) : void 0;
            s && (await s);
            let c = e[o].values[t];
            if (!r(c)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (h(this, `options`, void 0),
            h(this, `schema`, void 0),
            h(this, `fields`, void 0),
            h(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            h(this, `modelPromise`, void 0),
            h(this, `model`, void 0),
            h(this, `modelPrioritySources`, new Set()),
            h(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (v(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (ft = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = z(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new j(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = _(this.scanPrioritySources),
                        t = e ? m({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Ye(n),
                        o = n.getOffset() - i,
                        s = new L(this.id, i, o).toString(),
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
          (h(this, `id`, void 0),
            h(this, `url`, void 0),
            h(this, `itemsPromise`, void 0),
            h(this, `isScanning`, !1),
            h(this, `scanPrioritySources`, new Set()),
            h(this, `itemPrioritySources`, new Map()),
            h(
              this,
              `itemLoader`,
              new it.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = L.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Ke(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = _(Xe(e)),
                      a = i ? m({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    v(o, `Missing range bytes`);
                    let s = Ye(new j(o)),
                      c = e[t]?.pointer;
                    (v(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (V = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = L.fromString(e),
                r = this.chunks[n.chunkId];
              return (v(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = L.fromString(e.pointer),
            r = L.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return E.compare(e, t, n);
        }
        constructor(e) {
          (h(this, `options`, void 0),
            h(this, `id`, void 0),
            h(this, `schema`, void 0),
            h(this, `indexes`, void 0),
            h(this, `resolveRichText`, void 0),
            h(this, `resolveVectorSetItem`, void 0),
            h(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new ft(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function mt(e) {
  return typeof e == `object` && !!e && !c(e) && yt in e;
}
function ht(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function gt(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    _t(t, i, n);
  }
}
function _t(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : _t(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || gt(e, t, n);
  }
}
function vt(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return s(i, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return s(ee, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          gt(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (mt(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            ht(o, `Module not found`),
            mt(o) && o.preload(),
            l(te, {
              componentIdentifier: r,
              children: (e) => l(re, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return s(e === `a` ? u.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var H,
  U,
  yt,
  bt,
  xt,
  St = t(() => {
    (n(),
      o(),
      p(),
      r(),
      a !== void 0 && a.requestIdleCallback,
      (yt = `preload`),
      (bt =
        (((H = bt || {})[(H.Fragment = 1)] = `Fragment`),
        (H[(H.Link = 2)] = `Link`),
        (H[(H.Module = 3)] = `Module`),
        (H[(H.Tag = 4)] = `Tag`),
        (H[(H.Text = 5)] = `Text`),
        H)),
      (xt =
        (((U = xt || {})[(U.RichText = 1)] = `RichText`),
        (U[(U.VectorSetItem = 2)] = `VectorSetItem`),
        U)));
  }),
  Ct = e({ default: () => $, utils: () => Mt }),
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Q,
  $,
  Mt,
  Nt = t(() => {
    (p(),
      pt(),
      St(),
      (W = {
        anapsqA2l: { isNullable: !0, type: f.String },
        createdAt: { isNullable: !0, type: f.Date },
        CuB195w7K: { isNullable: !0, type: f.String },
        HzhKyyAK_: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        IsdE0zM0L: { isNullable: !0, type: f.RichText },
        nextItemId: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
      }),
      (G = [`id`]),
      (K = { type: 1 }),
      (q = [`previousItemId`]),
      (J = [`nextItemId`]),
      (Y = [`id`, `anapsqA2l`]),
      (X = [`anapsqA2l`, `id`]),
      (Z = { type: 0 }),
      (wt = [`CuB195w7K`]),
      (Tt = [`anapsqA2l`]),
      (Et = [`IsdE0zM0L`]),
      (Dt = [`HzhKyyAK_`]),
      (Ot = []),
      (kt = (e) => {
        let t = Ot[e];
        if (t) return t().then((e) => e.default);
      }),
      (At = vt({})),
      (jt = {
        a9vSKDh2e: { zPfFQNtX1: `default` },
        aFqehMgqe: { zPfFQNtX1: `default` },
        apvb52OcH: { zPfFQNtX1: `default` },
        avIayBcvw: { zPfFQNtX1: `default` },
        AW8qoI7E3: { zPfFQNtX1: `default` },
        B7ZSUKeet: { zPfFQNtX1: `default` },
        bMHzZtzvj: { zPfFQNtX1: `default` },
        BQVkh5St7: { zPfFQNtX1: `default` },
        BSCREkyjY: { zPfFQNtX1: `default` },
        bzCZqG59Y: { zPfFQNtX1: `default` },
        CpZfrnNa9: { zPfFQNtX1: `default` },
        D2SR2tGlD: { zPfFQNtX1: `default` },
        D4O4SRqXB: { zPfFQNtX1: `default` },
        D9zE9qlli: { zPfFQNtX1: `default` },
        DbAY9jfN1: { zPfFQNtX1: `default` },
        dLTfFkiUN: { zPfFQNtX1: `default` },
        dMjTGDnla: { zPfFQNtX1: `default` },
        DQdHYVmA3: { zPfFQNtX1: `default` },
        e8IRA6DNP: { zPfFQNtX1: `default` },
        EhkV0l2j0: { zPfFQNtX1: `default` },
        ePyIilKg7: { zPfFQNtX1: `default` },
        ETRmZhr3x: { zPfFQNtX1: `default` },
        exlbYt8f6: { zPfFQNtX1: `default` },
        fAhnCgFtl: { zPfFQNtX1: `default` },
        Fm_4PPUas: { zPfFQNtX1: `default` },
        FMit6sLJV: { zPfFQNtX1: `default` },
        fmPyQcDrH: { zPfFQNtX1: `default` },
        g0l2ZUEXf: { zPfFQNtX1: `default` },
        gwfmXy0VN: { zPfFQNtX1: `default` },
        h0oHgfSVh: { zPfFQNtX1: `default` },
        H5LXwaXW3: { zPfFQNtX1: `default` },
        h8Vca6ULf: { zPfFQNtX1: `default` },
        HJVU6f8Du: { zPfFQNtX1: `default` },
        HmgWnE4Tm: { zPfFQNtX1: `default` },
        HzNvdz4O0: { zPfFQNtX1: `default` },
        I35JSNzMf: { zPfFQNtX1: `default` },
        i9QljdDKF: { zPfFQNtX1: `default` },
        iEEd3a9zK: { zPfFQNtX1: `default` },
        igqhUXKwu: { zPfFQNtX1: `default` },
        iornVyZcX: { zPfFQNtX1: `default` },
        iZJYx83EZ: { zPfFQNtX1: `default` },
        Jc2FqoJ3b: { zPfFQNtX1: `default` },
        JKvVtXrAP: { zPfFQNtX1: `default` },
        Jr6Jx3ncr: { zPfFQNtX1: `default` },
        jtmIKqPmw: { zPfFQNtX1: `default` },
        kEgFiGjgA: { zPfFQNtX1: `default` },
        kF8TZ77jt: { zPfFQNtX1: `default` },
        kHgEXE4Pl: { zPfFQNtX1: `default` },
        kNDKfevDV: { zPfFQNtX1: `default` },
        KNjYGcvuK: { zPfFQNtX1: `default` },
        kPMKW9THE: { zPfFQNtX1: `default` },
        ktYPUZMVd: { zPfFQNtX1: `default` },
        KUYSMxlUq: { zPfFQNtX1: `default` },
        kzkxVlNr4: { zPfFQNtX1: `default` },
        l0o8pbAlt: { zPfFQNtX1: `default` },
        lbFVXo2Bz: { zPfFQNtX1: `default` },
        lG9z2E1ym: { zPfFQNtX1: `default` },
        lGcLQuaCl: { zPfFQNtX1: `default` },
        lk0nR_pG7: { zPfFQNtX1: `default` },
        lKfHjOFTM: { zPfFQNtX1: `default` },
        LLByY1xFj: { zPfFQNtX1: `default` },
        LXvUfxWCG: { zPfFQNtX1: `default` },
        m_DKExy6X: { zPfFQNtX1: `default` },
        Mkg_ZK1et: { zPfFQNtX1: `default` },
        mveSnscNp: { zPfFQNtX1: `default` },
        nOiNWBapX: { zPfFQNtX1: `default` },
        NRTrq0QH0: { zPfFQNtX1: `default` },
        nUC2SkB3S: { zPfFQNtX1: `default` },
        Nxna_BrIg: { zPfFQNtX1: `default` },
        o6j0tgrYI: { zPfFQNtX1: `default` },
        oAZ01oYn4: { zPfFQNtX1: `default` },
        OMim_FEIu: { zPfFQNtX1: `default` },
        ouh1RJeUg: { zPfFQNtX1: `default` },
        pl_epEHsZ: { zPfFQNtX1: `default` },
        Pmoo6Sbiw: { zPfFQNtX1: `default` },
        pWY7dRVPO: { zPfFQNtX1: `default` },
        pXGFerkSr: { zPfFQNtX1: `default` },
        q1IMgXeU_: { zPfFQNtX1: `default` },
        q2K_kXNM6: { zPfFQNtX1: `default` },
        q7Jjv3J8Z: { zPfFQNtX1: `default` },
        Q8vlm6zTr: { zPfFQNtX1: `default` },
        QD54HCjts: { zPfFQNtX1: `default` },
        qgTl0Rx7L: { zPfFQNtX1: `default` },
        QlwFI2I_t: { zPfFQNtX1: `default` },
        qqg7ko_w_: { zPfFQNtX1: `default` },
        qQxd93FoM: { zPfFQNtX1: `default` },
        QsDT9xabZ: { zPfFQNtX1: `default` },
        qvP9JT6aa: { zPfFQNtX1: `default` },
        r6pXbIbto: { zPfFQNtX1: `default` },
        Ri82393d3: { zPfFQNtX1: `default` },
        rk8sz8dU0: { zPfFQNtX1: `default` },
        RKb5j7U_e: { zPfFQNtX1: `default` },
        rNyXlp5Cz: { zPfFQNtX1: `default` },
        RRlYImWKs: { zPfFQNtX1: `default` },
        s9VXojsjR: { zPfFQNtX1: `default` },
        SJnZ19RXY: { zPfFQNtX1: `default` },
        Sk9hxJzBX: { zPfFQNtX1: `default` },
        TABu_AH1J: { zPfFQNtX1: `default` },
        tE5rrzbwq: { zPfFQNtX1: `default` },
        tToXZttww: { zPfFQNtX1: `default` },
        TweqFukog: { zPfFQNtX1: `default` },
        ubHrKSO9h: { zPfFQNtX1: `default` },
        UDkJrpx5U: { zPfFQNtX1: `default` },
        UkzO18iRF: { zPfFQNtX1: `default` },
        UyigVkEJw: { zPfFQNtX1: `default` },
        v6Pbb3jYL: { zPfFQNtX1: `default` },
        vCt_x2I3f: { zPfFQNtX1: `default` },
        VhNDjp7Bp: { zPfFQNtX1: `default` },
        virAta1oP: { zPfFQNtX1: `default` },
        vj9KETqJb: { zPfFQNtX1: `default` },
        vk50iRYwg: { zPfFQNtX1: `default` },
        w9hVjCTST: { zPfFQNtX1: `default` },
        WAfOriibw: { zPfFQNtX1: `default` },
        we912OpfQ: { zPfFQNtX1: `default` },
        wSWWURHoU: { zPfFQNtX1: `default` },
        wzUMPIEIg: { zPfFQNtX1: `default` },
        x6FJ1ooIZ: { zPfFQNtX1: `default` },
        XdCG_Z56v: { zPfFQNtX1: `default` },
        xqMtC1qKd: { zPfFQNtX1: `default` },
        xshrFo7PG: { zPfFQNtX1: `default` },
        XTmhsWxvB: { zPfFQNtX1: `default` },
        YAcgNw3Jl: { zPfFQNtX1: `default` },
        yixAHBzQs: { zPfFQNtX1: `default` },
        yPjJxcFen: { zPfFQNtX1: `default` },
        YrLYGS1fs: { zPfFQNtX1: `default` },
        Z91L75ZQe: { zPfFQNtX1: `default` },
        zICxIaK1I: { zPfFQNtX1: `default` },
        zlEr9Olgn: { zPfFQNtX1: `default` },
      }),
      (Q = new ne()),
      ($ = {
        collectionByLocaleId: {
          default: new V({
            chunks: [
              new URL(
                `./APsP6Mhsf-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `9ac2601e-93dc-4da3-b962-cf8337c5dd7edefault`,
            indexes: [
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: G,
                range: { from: 0, to: 3097 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: q,
                range: { from: 3097, to: 6193 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: J,
                range: { from: 6193, to: 9285 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: Y,
                range: { from: 9285, to: 14351 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: X,
                range: { from: 14351, to: 19417 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: wt,
                range: { from: 19417, to: 21369 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: Tt,
                range: { from: 21369, to: 24637 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: Et,
                range: { from: 24637, to: 26077 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: Dt,
                range: { from: 26077, to: 29341 },
                url: new URL(
                  `./APsP6Mhsf-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: At,
            resolveVectorSetItem: kt,
            schema: W,
          }),
          zPfFQNtX1: new V({
            chunks: [
              new URL(
                `./APsP6Mhsf-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `9ac2601e-93dc-4da3-b962-cf8337c5dd7ezPfFQNtX1`,
            indexes: [
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: G,
                range: { from: 0, to: 3097 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: q,
                range: { from: 3097, to: 6193 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: J,
                range: { from: 6193, to: 9285 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: K,
                collectionSchema: W,
                fieldNames: Y,
                range: { from: 9285, to: 14351 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: X,
                range: { from: 14351, to: 19417 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: wt,
                range: { from: 19417, to: 21369 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: Tt,
                range: { from: 21369, to: 24637 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: Et,
                range: { from: 24637, to: 26077 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new B({
                collation: Z,
                collectionSchema: W,
                fieldNames: Dt,
                range: { from: 26077, to: 29341 },
                url: new URL(
                  `./APsP6Mhsf-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/pxTZoffQBw4n25KfTu1N/THkBvySmBIkz4EjXT1rP/APsP6Mhsf.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: At,
            resolveVectorSetItem: kt,
            schema: W,
          }),
        },
        displayName: `YC Categories`,
        id: `9ac2601e-93dc-4da3-b962-cf8337c5dd7e`,
      }),
      d($, {
        CuB195w7K: { defaultValue: ``, title: `Title`, type: f.String },
        anapsqA2l: { preventLocalization: !0, title: `Slug`, type: f.String },
        IsdE0zM0L: { defaultValue: ``, title: `Content`, type: f.RichText },
        HzhKyyAK_: { defaultValue: ``, title: `Name`, type: f.String },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/APsP6Mhsf:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/APsP6Mhsf:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (Mt = {
        async getSlugByRecordId(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `anapsqA2l`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.anapsqA2l;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `anapsqA2l`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId: (e, t) => jt[e]?.[t?.id ?? `default`],
      }));
  });
export { $ as n, Nt as r, Ct as t };
//# sourceMappingURL=APsP6Mhsf.ePswQ8pd.mjs.map
