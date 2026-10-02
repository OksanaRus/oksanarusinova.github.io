import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { O as t, c as n, m as r, s as i } from "./react.hMW2PJqY.mjs";
import { V as a } from "./motion.CaZjHSpz.mjs";
import { K as o, Z as s, _n as c, c as l, dn as u, ht as d } from "./framer.CuDPj9y9.mjs";
var f,
  p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    (n(),
      d(),
      t(),
      (f = `var(--framer-icon-mask)`),
      (p = r(function (e, t) {
        return i(`svg`, { ...e, ref: t, children: e.children });
      })),
      (m = a.create(p)),
      (h = r((e, t) => {
        let { animated: n, layoutId: r, children: a, ...o } = e;
        return n
          ? i(m, { ...o, layoutId: r, ref: t, children: a })
          : i(`svg`, { ...o, ref: t, children: a });
      })),
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 18 13.998 L 18 5.998 C 17.999 5.284 17.618 4.625 17 4.268 L 10 0.268 C 9.381 -0.089 8.619 -0.089 8 0.268 L 1 4.268 C 0.382 4.625 0.001 5.284 0 5.998 L 0 13.998 C 0.001 14.712 0.382 15.371 1 15.728 L 8 19.728 C 8.619 20.085 9.381 20.085 10 19.728 L 17 15.728 C 17.618 15.371 17.999 14.712 18 13.998 Z" fill="transparent" height="19.995898384862247px" id="JkT2GRm49" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 2.002)" width="18px"/></svg>`),
      (_ = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (v = c(
        r(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: a,
              variant: o,
              P_DcoRcrY: c,
              JEeZYcamG: l,
              ...d
            } = _(e),
            f = u(`3607753684`, g);
          return i(h, {
            ...d,
            className: s(`framer-VrXZq`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": c, "--js9iwy": l, ...n },
            viewBox: `0 0 24 24`,
            children: i(`use`, { href: f }),
          });
        }),
        [
          `.framer-VrXZq { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-VrXZq`
      )),
      (v.displayName = `Hexagon`),
      o(v, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: l.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: l.Number,
        },
      }));
  });
export { y as n, v as t };
//# sourceMappingURL=rXenpTqTW.CnzFonH-.mjs.map
