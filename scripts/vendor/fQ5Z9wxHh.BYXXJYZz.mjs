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
function re(e) {
  return typeof e == `function` ? e() : e;
}
function ie(e, t) {
  return F[e] > F[t];
}
function g(e) {
  let t;
  for (let n of e) {
    let e = re(n);
    if (((t === void 0 || ie(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function ae(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function _(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function v(e) {
  throw Error(`Unexpected value: ${e}`);
}
function y(e) {
  return typeof e == `string`;
}
function b(e) {
  return Number.isFinite(e);
}
function x(e) {
  return e === null;
}
function S(e) {
  if (x(e)) return 0;
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
      v(e);
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
  if (b(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (y(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Re(e, t) {
  let n = e.value,
    r = t.value;
  if ((b(n) && b(r)) || (y(n) && y(r))) return n < r ? -1 : +(n > r);
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
  let t = Math.floor(Ze * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Ke(e, t) {
  let n = qe(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await U(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new $e(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function C(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function qe(e) {
  _(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function w(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = E.read(e);
  }
  return t;
}
function* Je(e) {
  for (let t of e) yield* t.prioritySources;
}
var T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  Ye,
  Xe,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  Ze,
  Qe,
  U,
  $e,
  et,
  W,
  tt = e(() => {
    (t(),
      p(),
      (D = Object.create),
      (O = Object.defineProperty),
      (k = Object.getOwnPropertyDescriptor),
      (A = Object.getOwnPropertyNames),
      (j = Object.getPrototypeOf),
      (M = Object.prototype.hasOwnProperty),
      (N = (e, t) =>
        function () {
          try {
            return (t || (0, e[A(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (P = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of A(t))
            M.call(e, i) ||
              i === n ||
              O(e, i, { get: () => t[i], enumerable: !(r = k(t, i)) || r.enumerable });
        return e;
      }),
      (Ye = (e, t, n) => (
        (n = e == null ? {} : D(j(e))),
        P(!t && e && e.__esModule ? n : O(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Xe = Ye(
        N({
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
      (F = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (I = {
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
      (L =
        ((T = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = I.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = I.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = I.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = I.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = I.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = I.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = I.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = I.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = I.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = I.Float64;
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
      i !== void 0 && i.requestIdleCallback,
      (R = (e) => 2 ** e - 1),
      (z = (e) => -(2 ** (e - 1))),
      (B = (e) => 2 ** (e - 1) - 1),
      z(8),
      z(16),
      z(32),
      -(BigInt(2) ** BigInt(63)),
      R(8),
      R(16),
      R(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      B(8),
      B(16),
      B(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (V = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            _(b(n), `Invalid chunkId`),
            _(b(r), `Invalid offset`),
            _(b(i), `Invalid length`),
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
                  : (_(this.length === e.length), 0);
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
              v(t);
          }
        }),
          (e.write = function (e, t) {
            let n = S(t);
            if ((e.writeUint8(n), !x(t)))
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
                  v(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = S(e),
              i = S(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (x(e) || x(t)) return 0;
            switch (e.type) {
              case f.Array:
                return (_(t.type === f.Array), ce(e, t, n));
              case f.Boolean:
                return (_(t.type === f.Boolean), de(e, t));
              case f.Color:
                return (_(t.type === f.Color), me(e, t));
              case f.Date:
                return (_(t.type === f.Date), _e(e, t));
              case f.Enum:
                return (_(t.type === f.Enum), be(e, t));
              case f.File:
                return (_(t.type === f.File), Ce(e, t));
              case f.Link:
                return (_(t.type === f.Link), Ee(e, t));
              case f.Number:
                return (_(t.type === f.Number), ke(e, t));
              case f.Object:
                return (_(t.type === f.Object), Me(e, t, n));
              case f.ResponsiveImage:
                return (_(t.type === f.ResponsiveImage), Fe(e, t));
              case f.RichText:
                return (_(t.type === f.RichText), Re(e, t));
              case f.VectorSetItem:
                return (_(t.type === f.VectorSetItem), We(e, t));
              case f.String:
                return (_(t.type === f.String), Ve(e, t, n));
              default:
                v(e);
            }
          }));
      })((E ||= {})),
      (H = 3),
      (Ze = 250),
      (Qe = [408, 429, 500, 502, 503, 504]),
      (U = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Qe.includes(r.status) || ++n > H) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > H) throw e;
          }
          await Ge(n);
        }
      }),
      ($e = class {
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
            if ((_(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = C(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((_(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = C(t, i)), (r = e.end));
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
      (et = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = U(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new L(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = g(this.scanPrioritySources),
                        t = e ? m({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = w(n),
                        o = n.getOffset() - i,
                        s = new V(this.id, i, o).toString(),
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
              new Xe.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = V.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Ke(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = g(Je(e)),
                      a = i ? m({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    _(o, `Missing range bytes`);
                    let s = w(new L(o)),
                      c = e[t]?.pointer;
                    (_(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (W = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = V.fromString(e),
                r = this.chunks[n.chunkId];
              return (_(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = V.fromString(e.pointer),
            r = V.fromString(t.pointer);
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
            (this.chunks = this.options.chunks.map((e, t) => new et(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function nt(e) {
  return typeof e == `object` && !!e && !s(e) && st in e;
}
function rt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function it(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    at(t, i, n);
  }
}
function at(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : at(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || it(e, t, n);
  }
}
function ot(e) {
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
          it(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (nt(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            rt(o, `Module not found`),
            nt(o) && o.preload(),
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
var G,
  K,
  st,
  q,
  ct,
  lt = e(() => {
    (t(),
      a(),
      p(),
      n(),
      i !== void 0 && i.requestIdleCallback,
      (st = `preload`),
      (q =
        (((G = q || {})[(G.Fragment = 1)] = `Fragment`),
        (G[(G.Link = 2)] = `Link`),
        (G[(G.Module = 3)] = `Module`),
        (G[(G.Tag = 4)] = `Tag`),
        (G[(G.Text = 5)] = `Text`),
        G)),
      (ct =
        (((K = ct || {})[(K.RichText = 1)] = `RichText`),
        (K[(K.VectorSetItem = 2)] = `VectorSetItem`),
        K)));
  }),
  J,
  ut,
  Y,
  X,
  dt,
  Z,
  Q,
  ft,
  pt,
  $,
  mt = e(() => {
    (p(),
      tt(),
      lt(),
      (J = {
        createdAt: { isNullable: !0, type: f.Date },
        FcT31hKHW: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        J90egonRd: { isNullable: !0, type: f.String },
        kYsD7A7fr: { isNullable: !0, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        O9PuEd9xt: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        RM9u0m1CA: { isNullable: !0, type: f.String },
        tV1JKv2QC: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        VC6Yih9HD: { isNullable: !0, type: f.String },
        VTu45btDt: { isNullable: !0, type: f.String },
        ymtja2oa_: { isNullable: !0, type: f.String },
        Z8VO4vy71: { isNullable: !0, type: f.String },
      }),
      (ut = []),
      (Y = (e) => {
        let t = ut[e];
        if (t) return t().then((e) => e.default);
      }),
      (X = ot({})),
      (dt = {
        AGkat3zoN: { zPfFQNtX1: `default` },
        HsuaBmTnH: { zPfFQNtX1: `default` },
        i5Ug69Xkz: { zPfFQNtX1: `default` },
      }),
      (Z = new te()),
      (Q = {
        collectionByLocaleId: {
          default: new W({
            chunks: [
              new URL(
                `./fQ5Z9wxHh-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/uhyRUbJkt74e1LAdulzA/GIgwymdcMKXjjumeiMH5/fQ5Z9wxHh.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `557f9eab-4da5-4ebd-a88f-519a0b1cb787default`,
            indexes: [],
            resolveRichText: X,
            resolveVectorSetItem: Y,
            schema: J,
          }),
          zPfFQNtX1: new W({
            chunks: [
              new URL(
                `./fQ5Z9wxHh-chunk-zPfFQNtX1-0.framercms`,
                `https://framerusercontent.com/modules/uhyRUbJkt74e1LAdulzA/GIgwymdcMKXjjumeiMH5/fQ5Z9wxHh.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `557f9eab-4da5-4ebd-a88f-519a0b1cb787zPfFQNtX1`,
            indexes: [],
            resolveRichText: X,
            resolveVectorSetItem: Y,
            schema: J,
          }),
        },
        displayName: `Ad Landing Pages`,
        id: `557f9eab-4da5-4ebd-a88f-519a0b1cb787`,
      }),
      u(Q, {
        VTu45btDt: {
          defaultValue: `A portfolio worthy of your work`,
          title: `Title`,
          type: f.String,
        },
        O9PuEd9xt: {
          defaultValue: ``,
          displayTextArea: !0,
          maxLength: 160,
          title: `SEO Description`,
          type: f.String,
        },
        FcT31hKHW: { preventLocalization: !0, title: `Slug`, type: f.String },
        Z8VO4vy71: { defaultValue: `5 min`, title: `Stat 1 Value`, type: f.String },
        tV1JKv2QC: { defaultValue: `Read time`, title: `Stat 1 Label`, type: f.String },
        kYsD7A7fr: { defaultValue: ``, title: `Stat 2 Value`, type: f.String },
        J90egonRd: { defaultValue: ``, title: `Stat 2 Label`, type: f.String },
        VC6Yih9HD: { defaultValue: ``, title: `Stat 3 Value`, type: f.String },
        RM9u0m1CA: { defaultValue: ``, title: `Stat 3 Label`, type: f.String },
        ymtja2oa_: {
          defaultValue: `Designed by designers who got tired of compromising`,
          title: `Title 2`,
          type: f.String,
        },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/fQ5Z9wxHh:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/fQ5Z9wxHh:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (ft = {}),
      (pt = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `FcT31hKHW`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.FcT31hKHW;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `FcT31hKHW`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId: (e, t) => dt[e]?.[t?.id ?? `default`],
      }),
      ($ = {
        exports: {
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerRecordIdKey: `id`,
              framerCollectionId: `fQ5Z9wxHh`,
              framerSlug: `FcT31hKHW`,
              framerData: `true`,
              framerColorSyntax: `false`,
              framerContractVersion: `1`,
              framerCollectionUtils: `1`,
              framerEnumToDisplayNameUtils: `2`,
              framerAutoSizeImages: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { Q as a, pt as i, ft as n, mt as r, $ as t };
//# sourceMappingURL=fQ5Z9wxHh.BYXXJYZz.mjs.map
