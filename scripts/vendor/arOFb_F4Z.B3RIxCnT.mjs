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
      (g = `<svg display="block" id="881773478" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="8px" id="SMM7MgBJf" transform="translate(6 6)" width="8px"/><path d="M 12 16 L 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 L 0 8 C 0 3.582 3.582 0 8 0 L 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 L 16 9.25 C 16 10.493 14.993 11.5 13.75 11.5 L 13.75 11.5 C 12.507 11.5 11.5 10.493 11.5 9.25 L 11.5 8 L 11.5 8 C 11.5 6.067 9.933 4.5 8 4.5 L 8 4.5 L 8 4.5 C 6.067 4.5 4.5 6.067 4.5 8 L 4.5 8 L 4.5 8 C 4.5 9.933 6.067 11.5 8 11.5 L 8 11.5 L 8 11.5 C 9.933 11.5 11.5 9.933 11.5 8 L 11.5 8" fill="transparent" height="16px" id="FYPv_MPlc" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" width="16px"/></svg>`),
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
            p = u(`881773478`, g);
          return i(h, {
            ...f,
            className: s(`framer-MhmdC`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
            viewBox: `0 0 20 20`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-MhmdC { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
        ],
        `framer-MhmdC`
      )),
      (v.displayName = `At Sign`),
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
//# sourceMappingURL=arOFb_F4Z.B3RIxCnT.mjs.map
