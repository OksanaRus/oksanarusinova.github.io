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
      (g = `<svg display="block" id="920653936" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 9.5 0 L 9.832 1.129 C 11.184 5.726 10.118 10.695 7 14.333 L 7 14.333 C 6.474 14.947 5.526 14.947 5 14.333 L 5 14.333 C 1.882 10.695 0.816 5.726 2.168 1.129 L 2.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="15.5px" id="NILXUFy2o" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 1) rotate(180 6 7.75)" width="12px"/><path d="M 0 3.5 L 1.297 2.492 C 2.738 1.371 4.854 2.204 5.143 4.007 L 5.241 4.618 C 5.682 7.366 4.114 10.042 1.5 11 L 1.5 11" fill="transparent" height="11px" id="N3FMfH7e5" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 9) rotate(180 3 5.5)" width="6px"/><path d="M 6 3.5 L 4.703 2.492 C 3.262 1.371 1.146 2.204 0.857 4.007 L 0.759 4.618 C 0.318 7.366 1.886 10.042 4.5 11 L 4.5 11" fill="transparent" height="11px" id="w2mkobRwq" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(13 9) rotate(180 3 5.5)" width="6px"/></svg>`),
      (_ = ({ fill: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        DTFJRR839: r ?? o.DTFJRR839 ?? `rgb(136, 136, 136)`,
        pJdIdADIa: e ?? o.pJdIdADIa ?? `rgba(136, 136, 136, 0.2)`,
        XI2ObiqYx: a ?? o.XI2ObiqYx ?? 2,
      })),
      (v = c(
        r(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: a,
              variant: o,
              DTFJRR839: c,
              pJdIdADIa: l,
              XI2ObiqYx: d,
              ...f
            } = _(e),
            p = u(`920653936`, g);
          return i(h, {
            ...f,
            className: s(`framer-dMh5K`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
            viewBox: `0 0 20 20`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-dMh5K { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
        ],
        `framer-dMh5K`
      )),
      (v.displayName = `Rocket`),
      o(v, {
        DTFJRR839: {
          defaultValue: `rgb(136, 136, 136)`,
          hidden: !1,
          title: `Stroke`,
          type: l.Color,
        },
        pJdIdADIa: {
          defaultValue: `rgba(136, 136, 136, 0.2)`,
          hidden: !1,
          title: `Fill`,
          type: l.Color,
        },
        XI2ObiqYx: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          min: 0,
          title: `Width`,
          type: l.Number,
        },
      }));
  });
export { y as n, v as t };
//# sourceMappingURL=TQWTauPzO.y3prBQdu.mjs.map
