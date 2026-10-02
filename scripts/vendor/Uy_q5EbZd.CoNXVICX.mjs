import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  H as t,
  O as n,
  R as r,
  W as i,
  c as a,
  f as o,
  h as s,
  s as c,
} from "./react.hMW2PJqY.mjs";
import { V as l } from "./motion.CaZjHSpz.mjs";
import {
  K as u,
  T as d,
  c as f,
  ht as p,
  i as ee,
  j as te,
  kn as m,
  t as ne,
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
function re(e, t) {
  return A[e] > A[t];
}
function _(e) {
  let t;
  for (let n of e) {
    let e = g(n);
    if (((t === void 0 || re(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function v(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function y(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function b(e) {
  throw Error(`Unexpected value: ${e}`);
}
function x(e, t, n, r) {
  (y(e >= t, e, `outside lower bound for`, r), y(e <= n, e, `outside upper bound for`, r));
}
function S(e) {
  return typeof e == `string`;
}
function C(e) {
  return Number.isFinite(e);
}
function w(e) {
  return e === null;
}
function T(e) {
  if (w(e)) return 0;
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
      b(e);
  }
}
function ie(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = D.read(e);
    n.push(t);
  }
  return { type: f.Array, value: n };
}
function ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) D.write(e, n);
}
function oe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = D.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function se(e) {
  return { type: f.Boolean, value: e.readUint8() !== 0 };
}
function ce(e, t) {
  e.writeUint8(+!!t.value);
}
function le(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ue(e) {
  return { type: f.Color, value: e.readString() };
}
function de(e, t) {
  e.writeString(t.value);
}
function fe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pe(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: f.Date, value: n.toISOString() };
}
function me(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function he(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ge(e) {
  return { type: f.Enum, value: e.readString() };
}
function _e(e, t) {
  e.writeString(t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ye(e) {
  return { type: f.File, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Se(e) {
  return { type: f.Link, value: e.readJson() };
}
function Ce(e, t) {
  e.writeJson(t.value);
}
function we(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Te(e) {
  return { type: f.Number, value: e.readFloat64() };
}
function Ee(e, t) {
  e.writeFloat64(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oe(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = D.read(e);
  }
  return { type: f.Object, value: n };
}
function ke(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), D.write(e, r));
}
function Ae(e, t, n) {
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
      u = D.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function je(e) {
  return { type: f.ResponsiveImage, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Pe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: f.RichText, value: e.readUint32() };
  if (t === 1) return { type: f.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  if (C(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (S(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  let n = e.value,
    r = t.value;
  if ((C(n) && C(r)) || (S(n) && S(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Le(e) {
  return { type: f.String, value: e.readString() };
}
function Re(e, t) {
  e.writeString(t.value);
}
function ze(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Be(e) {
  return { type: f.VectorSetItem, value: e.readUint32() };
}
function Ve(e, t) {
  e.writeUint32(t.value);
}
function He(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ue(e) {
  let t = Math.floor(st * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function We(e, t) {
  let n = Ke(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await B(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new lt(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Ge(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ke(e) {
  y(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function qe(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = D.read(e);
  }
  return t;
}
function* Je(e) {
  for (let t of e) yield* t.prioritySources;
}
var E,
  D,
  Ye,
  O,
  Xe,
  k,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  A,
  j,
  M,
  rt,
  it,
  N,
  P,
  F,
  I,
  L,
  at,
  R,
  ot,
  z,
  st,
  ct,
  B,
  lt,
  V,
  ut,
  H,
  dt = e(() => {
    (t(),
      p(),
      (Ye = Object.create),
      (O = Object.defineProperty),
      (Xe = Object.getOwnPropertyDescriptor),
      (k = Object.getOwnPropertyNames),
      (Ze = Object.getPrototypeOf),
      (Qe = Object.prototype.hasOwnProperty),
      ($e = (e, t) =>
        function () {
          try {
            return (t || (0, e[k(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (et = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of k(t))
            Qe.call(e, i) ||
              i === n ||
              O(e, i, { get: () => t[i], enumerable: !(r = Xe(t, i)) || r.enumerable });
        return e;
      }),
      (tt = (e, t, n) => (
        (n = e == null ? {} : Ye(Ze(e))),
        et(!t && e && e.__esModule ? n : O(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (nt = tt(
        $e({
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
      (A = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (j = {
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
      (M =
        ((E = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = j.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = j.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = j.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = j.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = j.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = j.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = j.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = j.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = j.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = j.Float64;
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
              (this.view = v(this.bytes)));
          }
        }),
        h(E, `textDecoder`, new TextDecoder()),
        E)),
      i !== void 0 && i.requestIdleCallback,
      (rt = 1024),
      (it = 1.5),
      (N = (e) => 2 ** e - 1),
      (P = (e) => -(2 ** (e - 1))),
      (F = (e) => 2 ** (e - 1) - 1),
      (I = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: P(8),
        Int16: P(16),
        Int32: P(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (L = {
        Uint8: N(8),
        Uint16: N(16),
        Uint32: N(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: F(8),
        Int16: F(16),
        Int32: F(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (at = class {
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
          let n = new Uint8Array(Math.ceil(t * it) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = v(n)));
        }
        writeUint8(e) {
          x(e, I.Uint8, L.Uint8, `Uint8`);
          let t = j.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          x(e, I.Uint16, L.Uint16, `Uint16`);
          let t = j.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          x(e, I.Uint32, L.Uint32, `Uint32`);
          let t = j.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          x(e, I.Uint64, L.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          x(e, I.BigUint64, L.BigUint64, `BigUint64`);
          let t = j.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          x(e, I.Int8, L.Int8, `Int8`);
          let t = j.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          x(e, I.Int16, L.Int16, `Int16`);
          let t = j.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          x(e, I.Int32, L.Int32, `Int32`);
          let t = j.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          x(e, I.Int64, L.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          x(e, I.BigInt64, L.BigInt64, `BigInt64`);
          let t = j.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = j.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = j.Float64;
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
            h(this, `bytes`, new Uint8Array(rt)),
            h(this, `view`, v(this.bytes)),
            h(this, `encoder`, new TextEncoder()),
            h(this, `encodedStrings`, new Map()));
        }
      }),
      (R = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            y(C(n), `Invalid chunkId`),
            y(C(r), `Invalid offset`),
            y(C(i), `Invalid length`),
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
                  : (y(this.length === e.length), 0);
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
              return ie(e);
            case 2:
              return se(e);
            case 3:
              return ue(e);
            case 4:
              return pe(e);
            case 5:
              return ge(e);
            case 6:
              return ye(e);
            case 7:
              return Se(e);
            case 8:
              return Te(e);
            case 9:
              return Oe(e);
            case 10:
              return je(e);
            case 11:
              return Pe(e);
            case 12:
              return Le(e);
            case 13:
              return Be(e);
            default:
              b(t);
          }
        }),
          (e.write = function (e, t) {
            let n = T(t);
            if ((e.writeUint8(n), !w(t)))
              switch (t.type) {
                case f.Array:
                  return ae(e, t);
                case f.Boolean:
                  return ce(e, t);
                case f.Color:
                  return de(e, t);
                case f.Date:
                  return me(e, t);
                case f.Enum:
                  return _e(e, t);
                case f.File:
                  return be(e, t);
                case f.Link:
                  return Ce(e, t);
                case f.Number:
                  return Ee(e, t);
                case f.Object:
                  return ke(e, t);
                case f.ResponsiveImage:
                  return Me(e, t);
                case f.RichText:
                  return Fe(e, t);
                case f.VectorSetItem:
                  return Ve(e, t);
                case f.String:
                  return Re(e, t);
                default:
                  b(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = T(e),
              i = T(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (w(e) || w(t)) return 0;
            switch (e.type) {
              case f.Array:
                return (y(t.type === f.Array), oe(e, t, n));
              case f.Boolean:
                return (y(t.type === f.Boolean), le(e, t));
              case f.Color:
                return (y(t.type === f.Color), fe(e, t));
              case f.Date:
                return (y(t.type === f.Date), he(e, t));
              case f.Enum:
                return (y(t.type === f.Enum), ve(e, t));
              case f.File:
                return (y(t.type === f.File), xe(e, t));
              case f.Link:
                return (y(t.type === f.Link), we(e, t));
              case f.Number:
                return (y(t.type === f.Number), De(e, t));
              case f.Object:
                return (y(t.type === f.Object), Ae(e, t, n));
              case f.ResponsiveImage:
                return (y(t.type === f.ResponsiveImage), Ne(e, t));
              case f.RichText:
                return (y(t.type === f.RichText), Ie(e, t));
              case f.VectorSetItem:
                return (y(t.type === f.VectorSetItem), He(e, t));
              case f.String:
                return (y(t.type === f.String), ze(e, t, n));
              default:
                b(e);
            }
          }));
      })((D ||= {})),
      (ot = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = D.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new M(t),
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
                let t = D.read(r);
                e.push(t);
              }
              let t = R.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new at();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) D.write(e, t);
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
      (z = 3),
      (st = 250),
      (ct = [408, 429, 500, 502, 503, 504]),
      (B = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!ct.includes(r.status) || ++n > z) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > z) throw e;
          }
          await Ue(n);
        }
      }),
      (lt = class {
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
            if ((y(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Ge(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((y(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Ge(t, i)), (r = e.end));
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
      (V = class {
        async loadModel() {
          let [e] = await We(this.options.url, [this.options.range]);
          return (
            y(e, `Failed to load model`),
            ot.deserialize(e, () => {
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
          y(e.length === this.fields.length, `Invalid query length`);
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
                  b(i);
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
            0 > D.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            D.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
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
            (y(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (ut = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = B(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new M(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = _(this.scanPrioritySources),
                        t = e ? m({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = qe(n),
                        o = n.getOffset() - i,
                        s = new R(this.id, i, o).toString(),
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
              new nt.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = R.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await We(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = _(Je(e)),
                      a = i ? m({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    y(o, `Missing range bytes`);
                    let s = qe(new M(o)),
                      c = e[t]?.pointer;
                    (y(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (H = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = R.fromString(e),
                r = this.chunks[n.chunkId];
              return (y(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = R.fromString(e.pointer),
            r = R.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return D.compare(e, t, n);
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
            (this.chunks = this.options.chunks.map((e, t) => new ut(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function ft(e) {
  return typeof e == `object` && !!e && !s(e) && _t in e;
}
function pt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function mt(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    ht(t, i, n);
  }
}
function ht(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : ht(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || mt(e, t, n);
  }
}
function gt(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return o(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return o(d, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          mt(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (ft(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            pt(o, `Module not found`),
            ft(o) && o.preload(),
            c(ee, {
              componentIdentifier: r,
              children: (e) => c(ne, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return o(e === `a` ? l.a : e, r, ...a);
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
var U,
  W,
  _t,
  vt,
  yt,
  bt = e(() => {
    (t(),
      a(),
      p(),
      n(),
      i !== void 0 && i.requestIdleCallback,
      (_t = `preload`),
      (vt =
        (((U = vt || {})[(U.Fragment = 1)] = `Fragment`),
        (U[(U.Link = 2)] = `Link`),
        (U[(U.Module = 3)] = `Module`),
        (U[(U.Tag = 4)] = `Tag`),
        (U[(U.Text = 5)] = `Text`),
        U)),
      (yt =
        (((W = yt || {})[(W.RichText = 1)] = `RichText`),
        (W[(W.VectorSetItem = 2)] = `VectorSetItem`),
        W)));
  }),
  G,
  K,
  q,
  J,
  Y,
  X,
  xt,
  Z,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Q,
  $,
  Zt,
  Qt,
  $t,
  en = e(() => {
    (p(),
      dt(),
      bt(),
      (G = {
        bsnDpOAPT: { isNullable: !0, type: f.String },
        coMkAA8e7: { isNullable: !0, type: f.String },
        createdAt: { isNullable: !0, type: f.Date },
        EdMT430NS: { isNullable: !0, type: f.Enum },
        EZ3XEDdrk: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
        feMTWgDp8: { isNullable: !0, type: f.ResponsiveImage },
        FJqIXWRi0: { isNullable: !0, type: f.String },
        FTB5X4nYU: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              iq62HWn99: { isNullable: !0, type: f.String },
              NUebHvDWO: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        g3CicmKNV: { isNullable: !0, type: f.String },
        Glg6cCfsv: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              rbDC6EZED: { isNullable: !0, type: f.String },
              zNWEVtCoy: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        HQgSf1R5y: { isNullable: !0, type: f.VectorSetItem },
        HSoCvJyWg: { isNullable: !0, type: f.String },
        HtvAVMEwH: { isNullable: !0, type: f.String },
        i3xJtXDiI: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        NyT16OMyb: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              IyI4WJA2n: { isNullable: !0, type: f.ResponsiveImage },
              SvwZPMk56: { isNullable: !0, type: f.Link },
              uL1jYQyCA: { isNullable: !0, type: f.String },
              YLX_H1Qs9: { isNullable: !0, type: f.String },
              zlwyeMkZv: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        ojnBT8Woq: { isNullable: !0, type: f.String },
        PH1EQJdXe: { isNullable: !0, type: f.RichText },
        previousItemId: { isNullable: !0, type: f.String },
        QvxtWoQvb: { isNullable: !0, type: f.String },
        RoFjkaiq9: {
          definition: {
            definitions: {
              dkwDfVRpf: { isNullable: !0, type: f.Link },
              id: { isNullable: !1, type: f.String },
              Vn0Npe8Mf: { isNullable: !0, type: f.String },
              yi1DkuUrH: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        SZnPTCtEV: { isNullable: !0, type: f.VectorSetItem },
        teBZPS9Aa: { isNullable: !0, type: f.VectorSetItem },
        twrD5Uj6V: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        WHVugmnmz: { isNullable: !0, type: f.String },
        XG4pJyrCY: { isNullable: !0, type: f.ResponsiveImage },
        ZHYT4hyZS: { isNullable: !0, type: f.VectorSetItem },
      }),
      (K = [`id`]),
      (q = { type: 1 }),
      (J = [`previousItemId`]),
      (Y = [`nextItemId`]),
      (X = [`id`, `g3CicmKNV`]),
      (xt = [`g3CicmKNV`, `id`]),
      (Z = { type: 0 }),
      (St = [`EdMT430NS`]),
      (Ct = [`twrD5Uj6V`]),
      (wt = [`g3CicmKNV`]),
      (Tt = [`feMTWgDp8`]),
      (Et = [`XG4pJyrCY`]),
      (Dt = [`PH1EQJdXe`]),
      (Ot = [`bsnDpOAPT`]),
      (kt = [`RoFjkaiq9`]),
      (At = [`ZHYT4hyZS`]),
      (jt = [`HQgSf1R5y`]),
      (Mt = [`teBZPS9Aa`]),
      (Nt = [`coMkAA8e7`]),
      (Pt = [`FTB5X4nYU`]),
      (Ft = [`HSoCvJyWg`]),
      (It = [`NyT16OMyb`]),
      (Lt = [`EZ3XEDdrk`]),
      (Rt = [`SZnPTCtEV`]),
      (zt = [`HtvAVMEwH`]),
      (Bt = [`i3xJtXDiI`]),
      (Vt = [`Glg6cCfsv`]),
      (Ht = [`QvxtWoQvb`]),
      (Ut = [`ojnBT8Woq`]),
      (Wt = [`WHVugmnmz`]),
      (Gt = [`FJqIXWRi0`]),
      (Kt = [
        () => import("./CHQBN15_A.DDHF9oo-.mjs").then((e) => (e.r(), e.t)),
        () => import("./hU9PP9ocp.DmPbwCh7.mjs").then((e) => (e.r(), e.n)),
        () => import("./TQWTauPzO.BVxxo6gF.mjs").then((e) => (e.r(), e.n)),
        () => import("./dchdv_AjC.CxQh_jqO.mjs").then((e) => (e.r(), e.n)),
        () => import("./UWUbXLmjY.BD3lq9dS.mjs").then((e) => (e.r(), e.n)),
        () => import("./mPNkSTjd9.C3c4NsH1.mjs").then((e) => (e.n(), e.r)),
        () => import("./b_CZdUyr0.BpslNlu9.mjs").then((e) => (e.r(), e.n)),
        () => import("./yvN7Q2UKc.DPEr_Xop.mjs").then((e) => (e.n(), e.r)),
        () => import("./CdlBNs2_X.Dc7Cb_Hk.mjs").then((e) => (e.r(), e.t)),
        () => import("./t3xdmDK8u.BpFCFBBn.mjs").then((e) => (e.n(), e.r)),
        () => import("./P4N6xB4yo.DYx122Ld.mjs").then((e) => (e.r(), e.n)),
        () => import("./O29N3QSdn.DiK44r2d.mjs").then((e) => (e.r(), e.n)),
        () => import("./k2BLNX_OT.DQYlJ3um.mjs").then((e) => (e.n(), e.r)),
        () => import("./TJbrQa1j4.CodlN1ZG.mjs").then((e) => (e.r(), e.n)),
        () => import("./p7rJCFjrH.BG9qU99m.mjs").then((e) => (e.n(), e.r)),
        () => import("./qQyVSfqMC.Cro5x-os.mjs").then((e) => (e.n(), e.r)),
        () => import("./wlCY_B8DG.Bj5LgfUx.mjs").then((e) => (e.n(), e.r)),
        () => import("./MT1WWIMT6.DL4dRLIN.mjs").then((e) => (e.r(), e.n)),
        () => import("./sFmqGCj0q.Dd6hbvu3.mjs").then((e) => (e.n(), e.r)),
        () => import("./nMYrtg_Vn.CkFOt2i1.mjs").then((e) => (e.n(), e.r)),
        () => import("./oKltOl1Go.DrMsj-TA.mjs").then((e) => (e.n(), e.r)),
        () => import("./EqdEB0lUq.CZipcE6Q.mjs").then((e) => (e.r(), e.t)),
        () => import("./CDJx3T4nQ.C9C4SSUI.mjs").then((e) => (e.r(), e.t)),
        () => import("./jk7ifuOWW.Dc2YLp-n.mjs"),
      ]),
      (qt = (e) => {
        let t = Kt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Jt = gt({})),
      (Yt = {
        aYEX4tlZx: { zPfFQNtX1: `default` },
        cWBLLSf8S: { zPfFQNtX1: `default` },
        d3rvqqQSJ: { zPfFQNtX1: `default` },
        ELLJcmICE: { zPfFQNtX1: `default` },
        fR27KPNX3: { zPfFQNtX1: `default` },
        froFMHpmt: { zPfFQNtX1: `default` },
        GaqwBsxxR: { zPfFQNtX1: `default` },
        iwl00A7DW: { zPfFQNtX1: `default` },
        oErAKyTPG: { zPfFQNtX1: `default` },
        oKtzqpIE7: { zPfFQNtX1: `default` },
        Ov1MUu_jQ: { zPfFQNtX1: `default` },
        pWEiyvpFr: { zPfFQNtX1: `default` },
        rhEXInk_C: { zPfFQNtX1: `default` },
        rxYPkCJ1D: { zPfFQNtX1: `default` },
        susf3LCo2: { zPfFQNtX1: `default` },
        SZSgA7aN0: { zPfFQNtX1: `default` },
        tsIe8HIdE: { zPfFQNtX1: `default` },
        VL9Jd8YX4: { zPfFQNtX1: `default` },
        WIUPOLi_B: { zPfFQNtX1: `default` },
      }),
      (Xt = new te()),
      (Q = {
        collectionByLocaleId: {
          default: new H({
            chunks: [
              new URL(
                `./Uy_q5EbZd-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `debf9c8b-4bc2-439e-93ff-c1b2ad7c2294default`,
            indexes: [
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: K,
                range: { from: 0, to: 481 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: J,
                range: { from: 481, to: 961 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: Y,
                range: { from: 961, to: 1437 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: X,
                range: { from: 1437, to: 2366 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: xt,
                range: { from: 2366, to: 3295 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: St,
                range: { from: 3295, to: 3783 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ct,
                range: { from: 3783, to: 5183 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: wt,
                range: { from: 5183, to: 5840 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Tt,
                range: { from: 5840, to: 9981 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Et,
                range: { from: 9981, to: 21472 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Dt,
                range: { from: 21472, to: 34354 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ot,
                range: { from: 34354, to: 35454 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: kt,
                range: { from: 35454, to: 54735 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: At,
                range: { from: 54735, to: 55052 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: jt,
                range: { from: 55052, to: 55369 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Mt,
                range: { from: 55369, to: 55686 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Nt,
                range: { from: 55686, to: 56791 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Pt,
                range: { from: 56791, to: 78849 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ft,
                range: { from: 78849, to: 79958 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: It,
                range: { from: 79958, to: 142044 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Lt,
                range: { from: 142044, to: 144451 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Rt,
                range: { from: 144451, to: 144768 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: zt,
                range: { from: 144768, to: 145361 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Bt,
                range: { from: 145361, to: 147074 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Vt,
                range: { from: 147074, to: 184677 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ht,
                range: { from: 184677, to: 185965 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ut,
                range: { from: 185965, to: 189061 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Wt,
                range: { from: 189061, to: 233179 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Gt,
                range: { from: 233179, to: 242788 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Jt,
            resolveVectorSetItem: qt,
            schema: G,
          }),
          zPfFQNtX1: new H({
            chunks: [
              new URL(
                `./Uy_q5EbZd-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `debf9c8b-4bc2-439e-93ff-c1b2ad7c2294zPfFQNtX1`,
            indexes: [
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: K,
                range: { from: 0, to: 481 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: J,
                range: { from: 481, to: 961 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: Y,
                range: { from: 961, to: 1437 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: X,
                range: { from: 1437, to: 2366 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: xt,
                range: { from: 2366, to: 3295 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: St,
                range: { from: 3295, to: 3783 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ct,
                range: { from: 3783, to: 5183 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: wt,
                range: { from: 5183, to: 5840 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Tt,
                range: { from: 5840, to: 9981 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Et,
                range: { from: 9981, to: 21472 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Dt,
                range: { from: 21472, to: 34354 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ot,
                range: { from: 34354, to: 35454 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: kt,
                range: { from: 35454, to: 54735 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: At,
                range: { from: 54735, to: 55052 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: jt,
                range: { from: 55052, to: 55369 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Mt,
                range: { from: 55369, to: 55686 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Nt,
                range: { from: 55686, to: 56791 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Pt,
                range: { from: 56791, to: 78849 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ft,
                range: { from: 78849, to: 79958 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: It,
                range: { from: 79958, to: 142044 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Lt,
                range: { from: 142044, to: 144451 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Rt,
                range: { from: 144451, to: 144768 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: zt,
                range: { from: 144768, to: 145361 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Bt,
                range: { from: 145361, to: 147074 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Vt,
                range: { from: 147074, to: 184677 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ht,
                range: { from: 184677, to: 185965 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Ut,
                range: { from: 185965, to: 189061 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Wt,
                range: { from: 189061, to: 233179 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: Z,
                collectionSchema: G,
                fieldNames: Gt,
                range: { from: 233179, to: 242788 },
                url: new URL(
                  `./Uy_q5EbZd-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/VXkuRDRzGg6F9LWjIo9a/ihM8q4wnehOsvgO23f48/Uy_q5EbZd.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Jt,
            resolveVectorSetItem: qt,
            schema: G,
          }),
        },
        displayName: `Solutions`,
        id: `debf9c8b-4bc2-439e-93ff-c1b2ad7c2294`,
      }),
      u(Q, {
        EdMT430NS: {
          defaultValue: `JK4flPvP5`,
          options: [
            `npc4WWTt0`,
            `JK4flPvP5`,
            `W3SAueRly`,
            `NWdZ43eKW`,
            `zZjk2Jejw`,
            `jruXbLcsu`,
            `mAP_e1XG7`,
            `AsfbDBxZF`,
          ],
          optionTitles: [
            `Web`,
            `AI Input`,
            `Agent Design Pages`,
            `Agent Web`,
            `Design Pages`,
            `Figma`,
            `CMS`,
            `SEO`,
          ],
          title: `Hero`,
          type: f.Enum,
        },
        twrD5Uj6V: { defaultValue: ``, title: `Title`, type: f.String },
        g3CicmKNV: { preventLocalization: !0, title: `Slug`, type: f.String },
        feMTWgDp8: { title: `Website`, type: f.ResponsiveImage },
        XG4pJyrCY: { title: `UI for tablet /  mobile`, type: f.ResponsiveImage },
        PH1EQJdXe: {
          defaultValue: `<p dir="auto"><br class="trailing-break"></p>`,
          title: `Intro`,
          type: f.RichText,
        },
        bsnDpOAPT: { defaultValue: ``, title: `Section 1 Title`, type: f.String },
        RoFjkaiq9: {
          __vekterDefault: [],
          control: {
            controls: {
              dkwDfVRpf: { title: `Link`, type: `link` },
              Vn0Npe8Mf: { defaultValue: ``, title: `Copy`, type: `string` },
              yi1DkuUrH: { defaultValue: ``, title: `Title`, type: `string` },
            },
            type: `object`,
          },
          title: `Section 1 Items`,
          type: f.Array,
        },
        ZHYT4hyZS: {
          defaultValue: {
            identifier: `module:gFatpeSgZ5W3hsB0oULo/uxNzHXbVpyJRNyMEFlQO/UWUbXLmjY.js:default`,
            moduleId: `gFatpeSgZ5W3hsB0oULo`,
          },
          setModuleId: `zUlZcpeqPdBgQTSg3Vpg`,
          title: `1.1 Icon`,
          type: f.VectorSetItem,
        },
        HQgSf1R5y: {
          defaultValue: {
            identifier: `module:e9HjK3uIc1I6SpXnyzI4/InvSrkYoTVS8r8IpZr84/CdlBNs2_X.js:default`,
            moduleId: `e9HjK3uIc1I6SpXnyzI4`,
          },
          setModuleId: `zUlZcpeqPdBgQTSg3Vpg`,
          title: `1.2 Icon`,
          type: f.VectorSetItem,
        },
        teBZPS9Aa: {
          defaultValue: {
            identifier: `module:SeJR6BYG7uZTe0XxdVue/SRQGKmWbRFyQGDFPf2Of/b_CZdUyr0.js:default`,
            moduleId: `SeJR6BYG7uZTe0XxdVue`,
          },
          setModuleId: `zUlZcpeqPdBgQTSg3Vpg`,
          title: `1.3 Icon`,
          type: f.VectorSetItem,
        },
        coMkAA8e7: {
          defaultValue: `What can you build with Framer?`,
          title: `Section 2 Title`,
          type: f.String,
        },
        FTB5X4nYU: {
          __vekterDefault: [],
          control: {
            controls: {
              iq62HWn99: { defaultValue: ``, title: `Title`, type: `string` },
              NUebHvDWO: { defaultValue: ``, title: `Copy`, type: `string` },
            },
            type: `object`,
          },
          title: `Section 2 Items`,
          type: f.Array,
        },
        HSoCvJyWg: {
          defaultValue: `Why designers love Framer`,
          placeholder: ``,
          title: `Section 3 Title`,
          type: f.String,
        },
        NyT16OMyb: {
          __vekterDefault: [],
          control: {
            controls: {
              IyI4WJA2n: { title: `Image`, type: `responsiveimage` },
              SvwZPMk56: { title: `Destination`, type: `link` },
              uL1jYQyCA: { defaultValue: ``, title: `Title Link`, type: `string` },
              YLX_H1Qs9: { defaultValue: ``, title: `Title`, type: `string` },
              zlwyeMkZv: { defaultValue: ``, title: `Copy`, type: `string` },
            },
            type: `object`,
          },
          title: `Section 3 Items`,
          type: f.Array,
        },
        EZ3XEDdrk: {
          dataIdentifier: `local-module:collection/Uy_q5EbZd:default`,
          defaultValue: [],
          title: `Related Solutions`,
          type: f.MultiCollectionReference,
        },
        SZnPTCtEV: {
          defaultValue: {
            identifier: `module:gFatpeSgZ5W3hsB0oULo/uxNzHXbVpyJRNyMEFlQO/UWUbXLmjY.js:default`,
            moduleId: `gFatpeSgZ5W3hsB0oULo`,
          },
          setModuleId: `zUlZcpeqPdBgQTSg3Vpg`,
          title: `Card Icon`,
          type: f.VectorSetItem,
        },
        HtvAVMEwH: { defaultValue: ``, title: `Card Title`, type: f.String },
        i3xJtXDiI: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Card Description`,
          type: f.String,
        },
        Glg6cCfsv: {
          __vekterDefault: [],
          control: {
            controls: {
              rbDC6EZED: { defaultValue: ``, title: `Answer`, type: `string` },
              zNWEVtCoy: { defaultValue: ``, title: `Question`, type: `string` },
            },
            type: `object`,
          },
          title: `FAQ Items`,
          type: f.Array,
        },
        QvxtWoQvb: {
          defaultValue: ``,
          placeholder: `Figma to HTML`,
          title: `Page Meta Title`,
          type: f.String,
        },
        ojnBT8Woq: {
          defaultValue: ``,
          displayTextArea: !1,
          placeholder: `Design, build, and publish professional websites without developers. Our website builder offers responsive templates, AI tools, and built-in hosting. Try Framer free`,
          title: `Page Meta Description`,
          type: f.String,
        },
        WHVugmnmz: { defaultValue: ``, displayTextArea: !0, title: `JSON-LD`, type: f.String },
        FJqIXWRi0: { defaultValue: ``, displayTextArea: !0, title: `Preload`, type: f.String },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/Uy_q5EbZd:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/Uy_q5EbZd:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      ($ = (e, t) => {
        switch ((t?.fallback, e)) {
          case `npc4WWTt0`:
            return `Web`;
          case `JK4flPvP5`:
            return `AI Input`;
          case `W3SAueRly`:
            return `Agent Design Pages`;
          case `NWdZ43eKW`:
            return `Agent Web`;
          case `zZjk2Jejw`:
            return `Design Pages`;
          case `jruXbLcsu`:
            return `Figma`;
          case `mAP_e1XG7`:
            return `CMS`;
          case `AsfbDBxZF`:
            return `SEO`;
          default:
            return ``;
        }
      }),
      (Zt = { EdMT430NS: $ }),
      (Qt = {
        async getSlugByRecordId(e, t) {
          let [n] = await Xt.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `g3CicmKNV`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.g3CicmKNV;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Xt.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `g3CicmKNV`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId: (e, t) => Yt[e]?.[t?.id ?? `default`],
      }),
      ($t = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          EdMT430NSToDisplayName: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerContractVersion: `1`,
              framerCollectionId: `Uy_q5EbZd`,
              framerAutoSizeImages: `true`,
              framerData: `true`,
              framerColorSyntax: `false`,
              framerRecordIdKey: `id`,
              framerCollectionUtils: `1`,
              framerEnumToDisplayNameUtils: `2`,
              framerSlug: `g3CicmKNV`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { Q as a, en as i, $t as n, Qt as o, Zt as r, $ as t };
//# sourceMappingURL=Uy_q5EbZd.CoNXVICX.mjs.map
