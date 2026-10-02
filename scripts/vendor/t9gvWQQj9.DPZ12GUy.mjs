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
  _t as f,
  c as p,
  ht as m,
  i as ee,
  j as te,
  kn as h,
  t as ne,
} from "./framer.CuDPj9y9.mjs";
function g(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function _(e) {
  return typeof e == `function` ? e() : e;
}
function re(e, t) {
  return A[e] > A[t];
}
function v(e) {
  let t;
  for (let n of e) {
    let e = _(n);
    if (((t === void 0 || re(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function y(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function b(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function x(e) {
  throw Error(`Unexpected value: ${e}`);
}
function S(e, t, n, r) {
  (b(e >= t, e, `outside lower bound for`, r), b(e <= n, e, `outside upper bound for`, r));
}
function ie(e) {
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
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      x(e);
  }
}
function ae(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = D.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function oe(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) D.write(e, n);
}
function se(e, t, n) {
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
function ce(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function le(e, t) {
  e.writeUint8(+!!t.value);
}
function ue(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function de(e) {
  return { type: `color`, value: e.readString() };
}
function fe(e, t) {
  e.writeString(t.value);
}
function pe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function me(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function he(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function ge(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function _e(e) {
  return { type: `enum`, value: e.readString() };
}
function ve(e, t) {
  e.writeString(t.value);
}
function ye(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function be(e) {
  return { type: `file`, value: e.readString() };
}
function xe(e, t) {
  e.writeString(t.value);
}
function Se(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ce(e) {
  return { type: `link`, value: e.readJson() };
}
function we(e, t) {
  e.writeJson(t.value);
}
function Te(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ee(e) {
  return { type: `number`, value: e.readFloat64() };
}
function De(e, t) {
  e.writeFloat64(t.value);
}
function Oe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ke(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = D.read(e);
  }
  return { type: `object`, value: n };
}
function Ae(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), D.write(e, r));
}
function je(e, t, n) {
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
function Me(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Ne(e, t) {
  e.writeJson(t.value);
}
function Pe(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Fe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  if (C(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (ie(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Le(e, t) {
  let n = e.value,
    r = t.value;
  if ((C(n) && C(r)) || (ie(n) && ie(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Re(e) {
  return { type: `string`, value: e.readString() };
}
function ze(e, t) {
  e.writeString(t.value);
}
function Be(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Ve(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function He(e, t) {
  e.writeUint32(t.value);
}
function Ue(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function We(e) {
  let t = Math.floor(ct * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Ge(e, t) {
  let n = qe(t),
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
  let u = new ut(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Ke(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function qe(e) {
  b(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Je(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = D.read(e);
  }
  return t;
}
function* Ye(e) {
  for (let t of e) yield* t.prioritySources;
}
var E,
  D,
  Xe,
  O,
  Ze,
  k,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  A,
  j,
  M,
  it,
  at,
  N,
  P,
  F,
  I,
  L,
  ot,
  R,
  st,
  z,
  ct,
  lt,
  B,
  ut,
  V,
  dt,
  H,
  ft = e(() => {
    (t(),
      m(),
      (Xe = Object.create),
      (O = Object.defineProperty),
      (Ze = Object.getOwnPropertyDescriptor),
      (k = Object.getOwnPropertyNames),
      (Qe = Object.getPrototypeOf),
      ($e = Object.prototype.hasOwnProperty),
      (et = (e, t) =>
        function () {
          try {
            return (t || (0, e[k(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (tt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of k(t))
            $e.call(e, i) ||
              i === n ||
              O(e, i, { get: () => t[i], enumerable: !(r = Ze(t, i)) || r.enumerable });
        return e;
      }),
      (nt = (e, t, n) => (
        (n = e == null ? {} : Xe(Qe(e))),
        tt(!t && e && e.__esModule ? n : O(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (rt = nt(
        et({
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
            (g(this, `bytes`, void 0),
              g(this, `offset`, 0),
              g(this, `view`, void 0),
              (this.bytes = e),
              (this.view = y(this.bytes)));
          }
        }),
        g(E, `textDecoder`, new TextDecoder()),
        E)),
      i !== void 0 && i.requestIdleCallback,
      (it = 1024),
      (at = 1.5),
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
      (ot = class {
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
          let n = new Uint8Array(Math.ceil(t * at) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = y(n)));
        }
        writeUint8(e) {
          S(e, I.Uint8, L.Uint8, `Uint8`);
          let t = j.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          S(e, I.Uint16, L.Uint16, `Uint16`);
          let t = j.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          S(e, I.Uint32, L.Uint32, `Uint32`);
          let t = j.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          S(e, I.Uint64, L.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          S(e, I.BigUint64, L.BigUint64, `BigUint64`);
          let t = j.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          S(e, I.Int8, L.Int8, `Int8`);
          let t = j.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          S(e, I.Int16, L.Int16, `Int16`);
          let t = j.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          S(e, I.Int32, L.Int32, `Int32`);
          let t = j.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          S(e, I.Int64, L.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          S(e, I.BigInt64, L.BigInt64, `BigInt64`);
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
          (g(this, `offset`, 0),
            g(this, `bytes`, new Uint8Array(it)),
            g(this, `view`, y(this.bytes)),
            g(this, `encoder`, new TextEncoder()),
            g(this, `encodedStrings`, new Map()));
        }
      }),
      (R = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            b(C(n), `Invalid chunkId`),
            b(C(r), `Invalid offset`),
            b(C(i), `Invalid length`),
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
                  : (b(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (g(this, `chunkId`, void 0),
            g(this, `offset`, void 0),
            g(this, `length`, void 0),
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
              return ae(e);
            case 2:
              return ce(e);
            case 3:
              return de(e);
            case 4:
              return me(e);
            case 5:
              return _e(e);
            case 6:
              return be(e);
            case 7:
              return Ce(e);
            case 8:
              return Ee(e);
            case 9:
              return ke(e);
            case 10:
              return Me(e);
            case 11:
              return Fe(e);
            case 12:
              return Re(e);
            case 13:
              return Ve(e);
            default:
              x(t);
          }
        }),
          (e.write = function (e, t) {
            let n = T(t);
            if ((e.writeUint8(n), !w(t)))
              switch (t.type) {
                case `array`:
                  return oe(e, t);
                case `boolean`:
                  return le(e, t);
                case `color`:
                  return fe(e, t);
                case `date`:
                  return he(e, t);
                case `enum`:
                  return ve(e, t);
                case `file`:
                  return xe(e, t);
                case `link`:
                  return we(e, t);
                case `number`:
                  return De(e, t);
                case `object`:
                  return Ae(e, t);
                case `responsiveimage`:
                  return Ne(e, t);
                case `richtext`:
                  return Ie(e, t);
                case `vectorsetitem`:
                  return He(e, t);
                case `string`:
                  return ze(e, t);
                default:
                  x(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = T(e),
              i = T(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (w(e) || w(t)) return 0;
            switch (e.type) {
              case `array`:
                return (b(t.type === `array`), se(e, t, n));
              case `boolean`:
                return (b(t.type === `boolean`), ue(e, t));
              case `color`:
                return (b(t.type === `color`), pe(e, t));
              case `date`:
                return (b(t.type === `date`), ge(e, t));
              case `enum`:
                return (b(t.type === `enum`), ye(e, t));
              case `file`:
                return (b(t.type === `file`), Se(e, t));
              case `link`:
                return (b(t.type === `link`), Te(e, t));
              case `number`:
                return (b(t.type === `number`), Oe(e, t));
              case `object`:
                return (b(t.type === `object`), je(e, t, n));
              case `responsiveimage`:
                return (b(t.type === `responsiveimage`), Pe(e, t));
              case `richtext`:
                return (b(t.type === `richtext`), Le(e, t));
              case `vectorsetitem`:
                return (b(t.type === `vectorsetitem`), Ue(e, t));
              case `string`:
                return (b(t.type === `string`), Be(e, t, n));
              default:
                x(e);
            }
          }));
      })((D ||= {})),
      (st = class e {
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
          let e = new ot();
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
          (g(this, `fieldNames`, void 0),
            g(this, `options`, void 0),
            g(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (z = 3),
      (ct = 250),
      (lt = [408, 429, 500, 502, 503, 504]),
      (B = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!lt.includes(r.status) || ++n > z) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > z) throw e;
          }
          await We(n);
        }
      }),
      (ut = class {
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
            if ((b(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Ke(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((b(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Ke(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          g(this, `chunks`, []);
        }
      }),
      (V = class {
        async loadModel() {
          let [e] = await Ge(this.options.url, [this.options.range]);
          return (
            b(e, `Failed to load model`),
            st.deserialize(e, () => {
              let e = v(this.modelPrioritySources);
              return e ? h({ batch: !0, priority: e }) : void 0;
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
          b(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? h({ batch: !0, priority: _(t) }) : void 0;
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
                  x(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? h({ batch: !0, priority: _(t) }) : void 0;
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
            if (e?.type !== p.String || t.value?.type !== p.String) return !1;
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
            if (e?.type !== p.String || t.value?.type !== p.String) return !1;
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
            if (e?.type !== p.String || t.value?.type !== p.String) return !1;
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
            let s = n ? h({ batch: !0, priority: _(n) }) : void 0;
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
          (g(this, `options`, void 0),
            g(this, `schema`, void 0),
            g(this, `fields`, void 0),
            g(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            g(this, `modelPromise`, void 0),
            g(this, `model`, void 0),
            g(this, `modelPrioritySources`, new Set()),
            g(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (b(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (dt = class {
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
                      let e = v(this.scanPrioritySources),
                        t = e ? h({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Je(n),
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
          (g(this, `id`, void 0),
            g(this, `url`, void 0),
            g(this, `itemsPromise`, void 0),
            g(this, `isScanning`, !1),
            g(this, `scanPrioritySources`, new Set()),
            g(this, `itemPrioritySources`, new Map()),
            g(
              this,
              `itemLoader`,
              new rt.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = R.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Ge(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = v(Ye(e)),
                      a = i ? h({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    b(o, `Missing range bytes`);
                    let s = Je(new M(o)),
                      c = e[t]?.pointer;
                    (b(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
              return (b(r, `Missing chunk`), r.resolveItem(e, t));
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
          (g(this, `options`, void 0),
            g(this, `id`, void 0),
            g(this, `schema`, void 0),
            g(this, `indexes`, void 0),
            g(this, `resolveRichText`, void 0),
            g(this, `resolveVectorSetItem`, void 0),
            g(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new dt(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function pt(e) {
  return typeof e == `object` && !!e && !s(e) && vt in e;
}
function mt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ht(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    gt(t, i, n);
  }
}
function gt(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : gt(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || ht(e, t, n);
  }
}
function _t(e) {
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
          ht(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (pt(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            mt(o, `Module not found`),
            pt(o) && o.preload(),
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
  vt,
  yt,
  bt,
  xt = e(() => {
    (t(),
      a(),
      m(),
      n(),
      i !== void 0 && i.requestIdleCallback,
      (vt = `preload`),
      (yt =
        (((U = yt || {})[(U.Fragment = 1)] = `Fragment`),
        (U[(U.Link = 2)] = `Link`),
        (U[(U.Module = 3)] = `Module`),
        (U[(U.Tag = 4)] = `Tag`),
        (U[(U.Text = 5)] = `Text`),
        U)),
      (bt =
        (((W = bt || {})[(W.RichText = 1)] = `RichText`),
        (W[(W.VectorSetItem = 2)] = `VectorSetItem`),
        W)));
  }),
  St,
  Ct,
  wt,
  Tt,
  G,
  K,
  q,
  J,
  Y,
  Et,
  Dt,
  X,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  Z,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Q,
  $,
  Vt,
  Ht,
  Ut,
  Wt = e(() => {
    (m(),
      ft(),
      xt(),
      (St = f(
        () => import("./YouTube.DQ8syx5D.mjs").then((e) => (e.r(), e.t)),
        `Youtube`,
        `19wiyg8mwxugh`
      )),
      (Ct = f(() => import("./CodeBlock.DxuyI8LC.mjs"), void 0, `2kuefrw1j9r09`)),
      (wt = f(
        () => import("./a3jlaIk3M.B6XaQEIY.mjs").then((e) => (e.r(), e.n)),
        void 0,
        `3rxfcj6w3c7tl`
      )),
      (Tt = f(
        () => import("./Rf8AvmCbM.Bd_Zo-T_.mjs").then((e) => (e.r(), e.n)),
        void 0,
        `1xlgw1lc3cpu6`
      )),
      (G = {
        CbMfZMIZ7: {
          definition: { isNullable: !0, type: p.String },
          isNullable: !0,
          type: p.Array,
        },
        createdAt: { isNullable: !0, type: p.Date },
        dYw7VMexb: { isNullable: !0, type: p.String },
        id: { isNullable: !1, type: p.String },
        nextItemId: { isNullable: !0, type: p.String },
        previousItemId: { isNullable: !0, type: p.String },
        qOXZsB3ov: { isNullable: !0, type: p.String },
        RDYe8BQHs: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: p.String },
              jdPhlraa2: { isNullable: !0, type: p.RichText },
              loRIuixdT: { isNullable: !0, type: p.String },
            },
            isNullable: !0,
            type: p.Object,
          },
          isNullable: !0,
          type: p.Array,
        },
        T1s_pVxV6: { isNullable: !0, type: p.String },
        updatedAt: { isNullable: !0, type: p.Date },
        WbpFe8zW8: { isNullable: !0, type: p.String },
        XpAJerpxG: { isNullable: !0, type: p.RichText },
        y4gvnucZ2: { isNullable: !0, type: p.Boolean },
        y5X5NzGm6: { isNullable: !0, type: p.String },
        zjIvAnvn1: { isNullable: !0, type: p.String },
      }),
      (K = [`id`]),
      (q = { type: 1 }),
      (J = [`previousItemId`]),
      (Y = [`nextItemId`]),
      (Et = [`id`, `dYw7VMexb`]),
      (Dt = [`dYw7VMexb`, `id`]),
      (X = { type: 0 }),
      (Ot = [`y5X5NzGm6`]),
      (kt = [`dYw7VMexb`]),
      (At = [`WbpFe8zW8`]),
      (jt = [`zjIvAnvn1`]),
      (Mt = [`qOXZsB3ov`]),
      (Nt = [`XpAJerpxG`]),
      (Pt = [`RDYe8BQHs`]),
      (Ft = [`CbMfZMIZ7`]),
      (Z = [`T1s_pVxV6`]),
      (It = [`y4gvnucZ2`]),
      (Lt = []),
      (Rt = (e) => {
        let t = Lt[e];
        if (t) return t().then((e) => e.default);
      }),
      (zt = _t({
        "local-module:canvasComponent/a3jlaIk3M:default": wt,
        "local-module:canvasComponent/Rf8AvmCbM:default": Tt,
        "module:NEd4VmDdsxM3StIUbddO/pRRgk0dcN3gDaE0WpAE7/YouTube.js:Youtube": St,
        "module:pVk4QsoHxASnVtUBp6jr/7eCYIL3dnkBSjjSduYQU/CodeBlock.js:default": Ct,
      })),
      (Bt = {
        aBrHzZ5mP: { zPfFQNtX1: `default` },
        AD3ADWhvf: { zPfFQNtX1: `default` },
        aDE4dLc5N: { zPfFQNtX1: `default` },
        AFFYETwMF: { zPfFQNtX1: `default` },
        aL3llRZZI: { zPfFQNtX1: `default` },
        anrxwkeBK: { zPfFQNtX1: `default` },
        aOitvgJ_Z: { zPfFQNtX1: `default` },
        aOSuVtgGk: { zPfFQNtX1: `default` },
        AptzvmnZV: { zPfFQNtX1: `default` },
        b_AskDfpB: { zPfFQNtX1: `default` },
        b4Z6jJNkR: { zPfFQNtX1: `default` },
        B5X9C4mNO: { zPfFQNtX1: `default` },
        B6nQXjPPA: { zPfFQNtX1: `default` },
        Bap_yeDaY: { zPfFQNtX1: `default` },
        baVy7bT2X: { zPfFQNtX1: `default` },
        BFayqIz2G: { zPfFQNtX1: `default` },
        BIz7GuX03: { zPfFQNtX1: `default` },
        BkpTHPh5H: { zPfFQNtX1: `default` },
        BVDoALasx: { zPfFQNtX1: `default` },
        BXGQMopZX: { zPfFQNtX1: `default` },
        c42oaLMOW: { zPfFQNtX1: `default` },
        c5EvWGX4z: { zPfFQNtX1: `default` },
        C73ZyEOur: { zPfFQNtX1: `default` },
        CGjleQgru: { zPfFQNtX1: `default` },
        cJLXw4E_j: { zPfFQNtX1: `default` },
        cJyKx4Juk: { zPfFQNtX1: `default` },
        CNIP88lA9: { zPfFQNtX1: `default` },
        CoWZZ2VnU: { zPfFQNtX1: `default` },
        cR64IrInM: { zPfFQNtX1: `default` },
        CU_UkdhYW: { zPfFQNtX1: `default` },
        d3Lp8L1Jq: { zPfFQNtX1: `default` },
        dDKlEppsC: { zPfFQNtX1: `default` },
        dFEx66aCA: { zPfFQNtX1: `default` },
        DHCyjd9uU: { zPfFQNtX1: `default` },
        dHOUfaPCF: { zPfFQNtX1: `default` },
        DIJs2Vxrv: { zPfFQNtX1: `default` },
        dnRshv8Qp: { zPfFQNtX1: `default` },
        DoImj2zFA: { zPfFQNtX1: `default` },
        dpGYpu3ty: { zPfFQNtX1: `default` },
        dQeSg2dt5: { zPfFQNtX1: `default` },
        dQEZcDBpZ: { zPfFQNtX1: `default` },
        dRBpEbrDL: { zPfFQNtX1: `default` },
        Drl8b32VI: { zPfFQNtX1: `default` },
        E_QjsJVT8: { zPfFQNtX1: `default` },
        eBnCIhc5R: { zPfFQNtX1: `default` },
        eBo3LLqw5: { zPfFQNtX1: `default` },
        Ed8OsLFLn: { zPfFQNtX1: `default` },
        eMX8A9IgK: { zPfFQNtX1: `default` },
        epnT1iYqN: { zPfFQNtX1: `default` },
        ETXlCcZjF: { zPfFQNtX1: `default` },
        eZ34oAeR_: { zPfFQNtX1: `default` },
        EZEXtjL9o: { zPfFQNtX1: `default` },
        FaruofSKf: { zPfFQNtX1: `default` },
        FB7Xy16zH: { zPfFQNtX1: `default` },
        Fdzu1yg3b: { zPfFQNtX1: `default` },
        FExNZHwpN: { zPfFQNtX1: `default` },
        ffzG_Eoqi: { zPfFQNtX1: `default` },
        fGxiY_634: { zPfFQNtX1: `default` },
        fphRoo1Fi: { zPfFQNtX1: `default` },
        FRhz6ScOP: { zPfFQNtX1: `default` },
        fVUQLRFFd: { zPfFQNtX1: `default` },
        fW5Qsg3BR: { zPfFQNtX1: `default` },
        G5_yJl4pJ: { zPfFQNtX1: `default` },
        G5WRi0RxG: { zPfFQNtX1: `default` },
        gDtx5T9_u: { zPfFQNtX1: `default` },
        gHpiltdtG: { zPfFQNtX1: `default` },
        GmOneyGeL: { zPfFQNtX1: `default` },
        GP0byjTla: { zPfFQNtX1: `default` },
        GP25L4LIS: { zPfFQNtX1: `default` },
        gswECL30q: { zPfFQNtX1: `default` },
        gTW4zFcrq: { zPfFQNtX1: `default` },
        gvtFn7E_X: { zPfFQNtX1: `default` },
        Gy2OTMqGN: { zPfFQNtX1: `default` },
        Gz5gazBG7: { zPfFQNtX1: `default` },
        H1p8yjhzr: { zPfFQNtX1: `default` },
        H4KDagnGz: { zPfFQNtX1: `default` },
        H62h8tMeD: { zPfFQNtX1: `default` },
        H928khm4n: { zPfFQNtX1: `default` },
        HdIMCpKTR: { zPfFQNtX1: `default` },
        hIfX5Rpjs: { zPfFQNtX1: `default` },
        hiG2N5nOY: { zPfFQNtX1: `default` },
        HRc5E1DFo: { zPfFQNtX1: `default` },
        htS6S37Hb: { zPfFQNtX1: `default` },
        hvDgZMr0K: { zPfFQNtX1: `default` },
        hWO2NwRYs: { zPfFQNtX1: `default` },
        I8wopxvwC: { zPfFQNtX1: `default` },
        Id2dFhNrB: { zPfFQNtX1: `default` },
        Ih3xmluF1: { zPfFQNtX1: `default` },
        iJ0xGoXpl: { zPfFQNtX1: `default` },
        ImUDqncO4: { zPfFQNtX1: `default` },
        ImVapn29W: { zPfFQNtX1: `default` },
        imWD8qBPT: { zPfFQNtX1: `default` },
        iOD6Zxs7r: { zPfFQNtX1: `default` },
        ISBTHpgb1: { zPfFQNtX1: `default` },
        j_BlVVxmV: { zPfFQNtX1: `default` },
        J23A5pyGr: { zPfFQNtX1: `default` },
        j4NeBRUU4: { zPfFQNtX1: `default` },
        J86q3CKfL: { zPfFQNtX1: `default` },
        JeCtTXHHy: { zPfFQNtX1: `default` },
        JJYxnXBP2: { zPfFQNtX1: `default` },
        JPpZ860F0: { zPfFQNtX1: `default` },
        jyQrQCMD7: { zPfFQNtX1: `default` },
        k_EpfxhRB: { zPfFQNtX1: `default` },
        K7Dsqd2z2: { zPfFQNtX1: `default` },
        K8MX0cOu8: { zPfFQNtX1: `default` },
        KDtQosxH8: { zPfFQNtX1: `default` },
        kEa1vLwii: { zPfFQNtX1: `default` },
        Key56MdSE: { zPfFQNtX1: `default` },
        Kf0OjiiLO: { zPfFQNtX1: `default` },
        KPOdsuXHY: { zPfFQNtX1: `default` },
        KQ0oqN3Jy: { zPfFQNtX1: `default` },
        KqHDkwrSM: { zPfFQNtX1: `default` },
        KsjepSg7e: { zPfFQNtX1: `default` },
        KtXuQcJCv: { zPfFQNtX1: `default` },
        Ku97Sda0I: { zPfFQNtX1: `default` },
        KYgw_fuTw: { zPfFQNtX1: `default` },
        Kylr37pLZ: { zPfFQNtX1: `default` },
        KZyhbccCp: { zPfFQNtX1: `default` },
        l4ek5VxjW: { zPfFQNtX1: `default` },
        l5K51qRIW: { zPfFQNtX1: `default` },
        LAaT6qlZ3: { zPfFQNtX1: `default` },
        lBkvGzKbV: { zPfFQNtX1: `default` },
        LbrqChLJZ: { zPfFQNtX1: `default` },
        lcOkEM88B: { zPfFQNtX1: `default` },
        lJCoOzfNt: { zPfFQNtX1: `default` },
        lq6cRVHb4: { zPfFQNtX1: `default` },
        lvxE__e39: { zPfFQNtX1: `default` },
        LW0g8hwsL: { zPfFQNtX1: `default` },
        lXaswtTDt: { zPfFQNtX1: `default` },
        Me5zZ6wzX: { zPfFQNtX1: `default` },
        MfAjya0x5: { zPfFQNtX1: `default` },
        mfb5b8Dpq: { zPfFQNtX1: `default` },
        mh8tuBDE6: { zPfFQNtX1: `default` },
        MIZYXPbVa: { zPfFQNtX1: `default` },
        mJDF2LF0b: { zPfFQNtX1: `default` },
        mLHQcWuze: { zPfFQNtX1: `default` },
        mQ8eKdDxb: { zPfFQNtX1: `default` },
        MUWXVkg4N: { zPfFQNtX1: `default` },
        MvsyoDvgi: { zPfFQNtX1: `default` },
        N4fBrgNxq: { zPfFQNtX1: `default` },
        NFrYxYlN1: { zPfFQNtX1: `default` },
        NFycf9AfP: { zPfFQNtX1: `default` },
        njlICEz1Q: { zPfFQNtX1: `default` },
        NK6oGqH5m: { zPfFQNtX1: `default` },
        NlJlAKMXc: { zPfFQNtX1: `default` },
        nOiZ8r0Fk: { zPfFQNtX1: `default` },
        NqQLIrmNh: { zPfFQNtX1: `default` },
        NS_NX7jsn: { zPfFQNtX1: `default` },
        NTcbWpY_X: { zPfFQNtX1: `default` },
        ntUl0Ijtn: { zPfFQNtX1: `default` },
        NUYuO_vGc: { zPfFQNtX1: `default` },
        NXhgxv_jS: { zPfFQNtX1: `default` },
        onjElCwLg: { zPfFQNtX1: `default` },
        OPlM8Ipjv: { zPfFQNtX1: `default` },
        oPRHcVJfI: { zPfFQNtX1: `default` },
        oZsJ6qlF6: { zPfFQNtX1: `default` },
        p61ixjNMn: { zPfFQNtX1: `default` },
        PEp3ThCBZ: { zPfFQNtX1: `default` },
        PhlJQremz: { zPfFQNtX1: `default` },
        PHMaBez6i: { zPfFQNtX1: `default` },
        pMd7rm7tM: { zPfFQNtX1: `default` },
        pmp_7tFWa: { zPfFQNtX1: `default` },
        pnyJCGqG0: { zPfFQNtX1: `default` },
        PPEfXgcup: { zPfFQNtX1: `default` },
        PPzISL2J1: { zPfFQNtX1: `default` },
        pQp4yw0ab: { zPfFQNtX1: `default` },
        PtacIYGad: { zPfFQNtX1: `default` },
        PVpher4Rr: { zPfFQNtX1: `default` },
        PWnK_PybE: { zPfFQNtX1: `default` },
        pxwa9qQlp: { zPfFQNtX1: `default` },
        q0unOeJKT: { zPfFQNtX1: `default` },
        q6Q9X1M6H: { zPfFQNtX1: `default` },
        qb5L7xeFT: { zPfFQNtX1: `default` },
        QdjSpEz2B: { zPfFQNtX1: `default` },
        QeOL737vV: { zPfFQNtX1: `default` },
        qK2vwRIDQ: { zPfFQNtX1: `default` },
        QLCkwkYDK: { zPfFQNtX1: `default` },
        QlcQ9fQZd: { zPfFQNtX1: `default` },
        Qo2Rp5x08: { zPfFQNtX1: `default` },
        QOALNmugv: { zPfFQNtX1: `default` },
        QoJXgFBRx: { zPfFQNtX1: `default` },
        qoNPy687f: { zPfFQNtX1: `default` },
        qsDuwteO9: { zPfFQNtX1: `default` },
        QSwbIIn3R: { zPfFQNtX1: `default` },
        QW0Wxu2Tm: { zPfFQNtX1: `default` },
        QysAjGfQ1: { zPfFQNtX1: `default` },
        Qzk0ZaSjv: { zPfFQNtX1: `default` },
        r2BSsESOw: { zPfFQNtX1: `default` },
        R3Zmvw8Af: { zPfFQNtX1: `default` },
        rgXXCbHmC: { zPfFQNtX1: `default` },
        rmnrVqjd9: { zPfFQNtX1: `default` },
        rsWIsZ0BX: { zPfFQNtX1: `default` },
        rTyXfvvpb: { zPfFQNtX1: `default` },
        RXzpxB49a: { zPfFQNtX1: `default` },
        RzA8fx_7u: { zPfFQNtX1: `default` },
        RZF1oiV67: { zPfFQNtX1: `default` },
        s_USKxJAX: { zPfFQNtX1: `default` },
        S19KQtZPt: { zPfFQNtX1: `default` },
        s7fBn5D_t: { zPfFQNtX1: `default` },
        sE226tkNz: { zPfFQNtX1: `default` },
        SFCOgs77r: { zPfFQNtX1: `default` },
        shbEAbPdZ: { zPfFQNtX1: `default` },
        SMRfGg3Aj: { zPfFQNtX1: `default` },
        SQB8_CGql: { zPfFQNtX1: `default` },
        SttoV2izj: { zPfFQNtX1: `default` },
        SvVjjaiOd: { zPfFQNtX1: `default` },
        SXGPXwi8y: { zPfFQNtX1: `default` },
        tCdCHS2sV: { zPfFQNtX1: `default` },
        tDYPFw4GZ: { zPfFQNtX1: `default` },
        tiwCquns4: { zPfFQNtX1: `default` },
        tn7jTBnhF: { zPfFQNtX1: `default` },
        tQHr8m3KM: { zPfFQNtX1: `default` },
        ty3YlaIm0: { zPfFQNtX1: `default` },
        u3BSe_ci5: { zPfFQNtX1: `default` },
        U4_YSbvP0: { zPfFQNtX1: `default` },
        udMuOv6gO: { zPfFQNtX1: `default` },
        UfbtgABXI: { zPfFQNtX1: `default` },
        UIZe_6cGE: { zPfFQNtX1: `default` },
        UPwDJfFll: { zPfFQNtX1: `default` },
        uQAqaIzkp: { zPfFQNtX1: `default` },
        UttX78EkM: { zPfFQNtX1: `default` },
        UY_6INpKj: { zPfFQNtX1: `default` },
        V1v4pZCiy: { zPfFQNtX1: `default` },
        V4TLUWPpN: { zPfFQNtX1: `default` },
        v6qW1KXkS: { zPfFQNtX1: `default` },
        va90dfu42: { zPfFQNtX1: `default` },
        vh4c1Zqn1: { zPfFQNtX1: `default` },
        VkW2ta5yK: { zPfFQNtX1: `default` },
        Vmdc571jz: { zPfFQNtX1: `default` },
        VMNWJJXtG: { zPfFQNtX1: `default` },
        vU0cHjuiq: { zPfFQNtX1: `default` },
        vUI7kX8jc: { zPfFQNtX1: `default` },
        w7AwhA6nh: { zPfFQNtX1: `default` },
        wCRch19o2: { zPfFQNtX1: `default` },
        WdFkyHoom: { zPfFQNtX1: `default` },
        WfYvObKg_: { zPfFQNtX1: `default` },
        wKOr4DOvp: { zPfFQNtX1: `default` },
        wlA1tf_vb: { zPfFQNtX1: `default` },
        WraV2ERsb: { zPfFQNtX1: `default` },
        wuJA9N4Lz: { zPfFQNtX1: `default` },
        wv19h2dej: { zPfFQNtX1: `default` },
        wXJ4TnOji: { zPfFQNtX1: `default` },
        x9GMhkxyR: { zPfFQNtX1: `default` },
        XB1fmfPrT: { zPfFQNtX1: `default` },
        XJ7aFmGkW: { zPfFQNtX1: `default` },
        xLkCgqFJB: { zPfFQNtX1: `default` },
        xmNT1Sfak: { zPfFQNtX1: `default` },
        xOdqESV2J: { zPfFQNtX1: `default` },
        XOFr3AeKx: { zPfFQNtX1: `default` },
        XpfgYzzws: { zPfFQNtX1: `default` },
        XpOU7Vpkh: { zPfFQNtX1: `default` },
        y_f38fQdi: { zPfFQNtX1: `default` },
        y2HuoFIVA: { zPfFQNtX1: `default` },
        y2vRtzUnQ: { zPfFQNtX1: `default` },
        Yajy11ppO: { zPfFQNtX1: `default` },
        yDcO2eMNW: { zPfFQNtX1: `default` },
        yFkOo5hOf: { zPfFQNtX1: `default` },
        ygQi5nPvf: { zPfFQNtX1: `default` },
        ygZLYMChv: { zPfFQNtX1: `default` },
        yHwZQ_KLK: { zPfFQNtX1: `default` },
        Yib1KQjGv: { zPfFQNtX1: `default` },
        YIFmI9Wgt: { zPfFQNtX1: `default` },
        yKe7_5cNR: { zPfFQNtX1: `default` },
        YliYnEWdX: { zPfFQNtX1: `default` },
        yNEj22bvF: { zPfFQNtX1: `default` },
        YNxPHzWLh: { zPfFQNtX1: `default` },
        YsFbC5Ary: { zPfFQNtX1: `default` },
        YsOuXaFun: { zPfFQNtX1: `default` },
        yTAKnUbX_: { zPfFQNtX1: `default` },
        YtMCjGz8X: { zPfFQNtX1: `default` },
        yubrclar0: { zPfFQNtX1: `default` },
        YuJbnf9nV: { zPfFQNtX1: `default` },
        z4MD_vlAU: { zPfFQNtX1: `default` },
        zc0sGqXTq: { zPfFQNtX1: `default` },
        zfSh9d7O5: { zPfFQNtX1: `default` },
        ZKiuZI9YC: { zPfFQNtX1: `default` },
        ZPbZxWAr2: { zPfFQNtX1: `default` },
        zRAuorJp3: { zPfFQNtX1: `default` },
        zRmopXlMG: { zPfFQNtX1: `default` },
        ztbJtMSmi: { zPfFQNtX1: `default` },
        zVCAfwsv4: { zPfFQNtX1: `default` },
        zvm3wkgAb: { zPfFQNtX1: `default` },
        zw8Votgah: { zPfFQNtX1: `default` },
        zy6n7xaBg: { zPfFQNtX1: `default` },
      }),
      (Q = new te()),
      ($ = {
        collectionByLocaleId: {
          default: new H({
            chunks: [
              new URL(
                `./t9gvWQQj9-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `c4046431-bac6-4543-9803-50ebdbfc4036default`,
            indexes: [
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: K,
                range: { from: 0, to: 6937 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: J,
                range: { from: 6937, to: 13873 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: Y,
                range: { from: 13873, to: 20805 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: Et,
                range: { from: 20805, to: 38784 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Dt,
                range: { from: 38784, to: 56763 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Ot,
                range: { from: 56763, to: 70845 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: kt,
                range: { from: 70845, to: 84786 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: At,
                range: { from: 84786, to: 121483 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: jt,
                range: { from: 121483, to: 128427 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Mt,
                range: { from: 128427, to: 132919 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Nt,
                range: { from: 132919, to: 1536962 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Pt,
                range: { from: 1536962, to: 1865394 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Ft,
                range: { from: 1865394, to: 1881182 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Z,
                range: { from: 1881182, to: 1895605 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: It,
                range: { from: 1895605, to: 1899093 },
                url: new URL(
                  `./t9gvWQQj9-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: zt,
            resolveVectorSetItem: Rt,
            schema: G,
          }),
          zPfFQNtX1: new H({
            chunks: [
              new URL(
                `./t9gvWQQj9-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `c4046431-bac6-4543-9803-50ebdbfc4036zPfFQNtX1`,
            indexes: [
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: K,
                range: { from: 0, to: 6937 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: J,
                range: { from: 6937, to: 13873 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: Y,
                range: { from: 13873, to: 20805 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: q,
                collectionSchema: G,
                fieldNames: Et,
                range: { from: 20805, to: 38784 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Dt,
                range: { from: 38784, to: 56763 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Ot,
                range: { from: 56763, to: 70845 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: kt,
                range: { from: 70845, to: 84786 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: At,
                range: { from: 84786, to: 121483 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: jt,
                range: { from: 121483, to: 128427 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Mt,
                range: { from: 128427, to: 132919 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Nt,
                range: { from: 132919, to: 1536962 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Pt,
                range: { from: 1536962, to: 1865394 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Ft,
                range: { from: 1865394, to: 1881182 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: Z,
                range: { from: 1881182, to: 1895605 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new V({
                collation: X,
                collectionSchema: G,
                fieldNames: It,
                range: { from: 1895605, to: 1899093 },
                url: new URL(
                  `./t9gvWQQj9-indexes-zPfFQNtX1-0.framercms`,
                  `https://framerusercontent.com/modules/ikf2JUsKPT7iZKTmjNjr/DWWH6L3FFsbYb6dCxMgH/t9gvWQQj9.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: zt,
            resolveVectorSetItem: Rt,
            schema: G,
          }),
        },
        displayName: `Help Articles`,
        id: `c4046431-bac6-4543-9803-50ebdbfc4036`,
      }),
      u($, {
        y5X5NzGm6: { defaultValue: ``, placeholder: ``, title: `Title`, type: p.String },
        dYw7VMexb: { preventLocalization: !0, title: `Slug`, type: p.String },
        WbpFe8zW8: {
          defaultValue: ``,
          displayTextArea: !0,
          placeholder: ``,
          title: `Subtitle`,
          type: p.String,
        },
        zjIvAnvn1: {
          dataIdentifier: `local-module:collection/t2zy6QLBM:default`,
          title: `Category`,
          type: p.CollectionReference,
        },
        qOXZsB3ov: { defaultValue: ``, title: `Cover Video`, type: p.String },
        XpAJerpxG: { defaultValue: ``, title: `Content`, type: p.RichText },
        RDYe8BQHs: {
          __vekterDefault: [],
          control: {
            controls: {
              loRIuixdT: { defaultValue: ``, title: `Question`, type: `string` },
              jdPhlraa2: { defaultValue: ``, title: `Answer`, type: `richtext` },
            },
            type: `object`,
          },
          maxCount: 5,
          title: `FAQs`,
          type: p.Array,
        },
        CbMfZMIZ7: {
          dataIdentifier: `local-module:collection/t9gvWQQj9:default`,
          defaultValue: [],
          title: `Related Articles`,
          type: p.MultiCollectionReference,
        },
        T1s_pVxV6: { defaultValue: ``, placeholder: ``, title: `SEO Title`, type: p.String },
        y4gvnucZ2: { defaultValue: !0, title: `Indexed`, type: p.Boolean },
        createdAt: { title: `Created`, type: p.Date },
        updatedAt: { title: `Updated`, type: p.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/t9gvWQQj9:default`,
          title: `Previous`,
          type: p.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/t9gvWQQj9:default`,
          title: `Next`,
          type: p.CollectionReference,
        },
      }),
      (Vt = {}),
      (Ht = {
        async getSlugByRecordId(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `dYw7VMexb`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.dYw7VMexb;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `dYw7VMexb`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId: (e, t) => Bt[e]?.[t?.id ?? `default`],
      }),
      (Ut = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerEnumToDisplayNameUtils: `2`,
              framerColorSyntax: `false`,
              framerCollectionId: `t9gvWQQj9`,
              framerSlug: `dYw7VMexb`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerData: `true`,
              framerCollectionUtils: `1`,
              framerRecordIdKey: `id`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { Ht as a, Wt as i, Ut as n, Vt as r, $ as t };
//# sourceMappingURL=t9gvWQQj9.DPZ12GUy.mjs.map
