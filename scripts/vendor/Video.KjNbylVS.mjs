import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  g as o,
  o as s,
  s as c,
  v as l,
  x as u,
  y as d,
} from "./react.BKyTRiZ3.mjs";
import { O as f, R as p, t as m } from "./motion.AUYMciny.mjs";
import { L as h, et as g, m as _, r as v, y } from "./framer.CfbrMSxG.mjs";
var b,
  x,
  S = e(() => {
    (h(),
      (b = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...b },
      (x = {
        onClick: { type: v.EventHandler },
        onMouseEnter: { type: v.EventHandler },
        onMouseLeave: { type: v.EventHandler },
      }),
      v.Number,
      v.Boolean,
      v.String,
      v.Enum);
  });
function ee(e, t) {
  return C(!0, e, t);
}
function te(e, t) {
  return C(!1, e, t);
}
function C(e, t, n = !0) {
  let r = g();
  l(() => {
    n && r === e && t();
  }, [r]);
}
var w = e(() => {
    (h(), n());
  }),
  T = e(() => {
    n();
  }),
  E = e(() => {
    h();
  }),
  D = e(() => {
    h();
  }),
  O = e(() => {
    n();
  }),
  k = e(() => {
    h();
  }),
  A,
  j,
  M = e(() => {
    (i(),
      n(),
      (A = () => {
        if (a !== void 0) {
          let e = a.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (j = () => t(() => A(), [])));
  }),
  N = e(() => {
    (n(), D());
  }),
  P = e(() => {
    (n(), h(), D(), T());
  }),
  F = e(() => {
    (h(), n(), S());
  });
function ne() {
  return t(() => _.current(), []);
}
function re() {
  return t(() => _.current() === _.canvas, []);
}
var I = e(() => {
    (n(), h());
  }),
  L = e(() => {
    n();
  });
function ie(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
var R,
  z = e(() => {
    (n(),
      h(),
      (R = {
        borderRadius: {
          title: `Radius`,
          type: v.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      v.FusedNumber);
  }),
  B = e(() => {
    (S(), w(), T(), E(), D(), O(), k(), M(), N(), P(), F(), I(), L(), z());
  });
function V(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function H(e) {
  let t = V(e);
  return s(J, { ...t });
}
function ae(e) {
  let t = g(),
    n = d(!1),
    i = d(!1),
    a = r((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: r(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: r(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function oe({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = o(() => e),
    [s, c] = o(!1);
  e !== a && !s && c(!0);
  let l = a && t && n && r && !i && !s,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function U(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function W(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(U).join(` `);
}
var G,
  K,
  q,
  J,
  Y,
  X = e(() => {
    (c(),
      h(),
      m(),
      B(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((G ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((K ||= {})),
      (q = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (J = u(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: r,
            srcFile: i = ``,
            posterEnabled: a = !1,
            controls: o = !1,
            playing: c = !0,
            loop: u = !0,
            muted: m = !0,
            playsinline: h = !0,
            restartOnEnter: g = !1,
            objectFit: v = `cover`,
            backgroundColor: y = `rgba(0,0,0,0)`,
            radius: b = 0,
            volume: x = 25,
            startTime: S = 0,
            poster: C,
            playing: w,
            progress: T,
            onSeeked: E,
            onPause: D,
            onPlay: O,
            onEnd: k,
            onClick: A,
            onMouseEnter: M,
            onMouseLeave: N,
            onMouseDown: P,
            onMouseUp: F,
          } = e,
          I = d(),
          L = j(),
          R = d(null),
          z = d(null),
          B = re(),
          V = ne(),
          H = B || V === _.export,
          U = ie(e),
          W = H
            ? `no-autoplay`
            : oe({ playingProp: w, muted: m, loop: u, playsinline: h, controls: o }),
          G = H ? !0 : p(I),
          K = !H && p(I, { margin: `10%`, once: !0 }),
          J = S === 100 ? 99.9 : S,
          { play: Y, pause: X, setProgress: Z, isPlaying: Q } = ae(I);
        (l(() => {
          H || (W !== `on-viewport` && (w ? Y() : X()));
        }, [W, w]),
          l(() => {
            H || (G && w && W !== `no-autoplay` && Y(), W === `on-viewport` && X());
          }, [W, G, w]),
          l(() => {
            !B || C || a || J || !I.current || (I.current.currentTime = 0.01);
          }, [a, C, J]));
        let $ = d(!1);
        (l(() => {
          if (!$.current) {
            $.current = !0;
            return;
          }
          let e = f(T) ? T.get() : (T ?? 0) * 0.01;
          Z((e ?? 0) || (J ?? 0) / 100);
        }, [J, i, r, T]),
          l(() => {
            if (f(T)) return T.on(`change`, (e) => Z(e));
          }, [T]),
          ee(() => {
            R.current !== null && I.current && ((!z && u) || !R.current) && Y();
          }),
          te(() => {
            I.current && ((z.current = I.current.ended), (R.current = I.current.paused), X());
          }));
        let se = t(() => {
          if (n === `URL`) return r + ``;
          if (n === `Upload`) return i + ``;
        }, [n, i, r, J]);
        return (
          l(() => {
            L && I.current && W === `on-mount` && setTimeout(() => Y(), 50);
          }, []),
          l(() => {
            I.current && !m && (I.current.volume = (x ?? 0) / 100);
          }, [x]),
          s(`video`, {
            onClick: A,
            onMouseEnter: M,
            onMouseLeave: N,
            onMouseDown: P,
            onMouseUp: F,
            src: se,
            loop: u,
            ref: I,
            onSeeked: (e) => E?.(e),
            onPause: (e) => D?.(e),
            onPlay: (e) => O?.(e),
            onEnded: (e) => k?.(e),
            autoPlay: Q.current || W === `on-mount` || (w && W === `on-viewport` && G),
            preload: Q.current
              ? `auto`
              : H && !C
                ? `metadata`
                : W !== `on-mount` && !K
                  ? `none`
                  : `metadata`,
            poster:
              a && !i && r === q
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : a && C
                  ? C
                  : void 0,
            onLoadedData: () => {
              let e = I.current;
              e &&
                (e.currentTime < 0.3 && J > 0 && Z((J ?? 0) * 0.01),
                (Q.current || W === `on-mount` || (w && W === `on-viewport` && G)) && Y());
            },
            controls: o,
            muted: H ? !0 : m,
            playsInline: h,
            style: {
              cursor: A ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: U,
              display: `block`,
              objectFit: v,
              backgroundColor: y,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (H.displayName = `Video`),
      (Y = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      y(H, {
        srcType: {
          type: v.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: v.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: v.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: v.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...R,
        posterEnabled: {
          type: v.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: v.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: v.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: v.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: v.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: v.Enum, title: `Fit`, options: Y, optionTitles: Y.map(W) },
        controls: {
          type: v.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: v.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: v.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: v.EventHandler },
        onSeeked: { type: v.EventHandler },
        onPause: { type: v.EventHandler },
        onPlay: { type: v.EventHandler },
        ...x,
      }));
  });
export { X as n, H as t };
//# sourceMappingURL=Video.KjNbylVS.mjs.map
