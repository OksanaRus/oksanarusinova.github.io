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
      (g = `<svg display="block" id="1194077838" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 4.5 0 C 6.624 0 8.112 1.472 8.5 3.451 C 8.888 1.472 10.376 0 12.5 0 C 14.986 0 17 2.015 17 4.5 C 17 11.985 8.5 15.5 8.5 15.5 L 8.5 15.5 L 8.5 15.5 C 8.5 15.5 0 11.985 0 4.5 C 0 2.015 2.015 0 4.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="15.5px" id="wAsIjRFry" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1.5 2.5)" width="17.00031396957514px"/></svg>`),
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
            p = u(`1194077838`, g);
          return i(h, {
            ...f,
            className: s(`framer-2sY56`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
            viewBox: `0 0 20 20`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-2sY56 { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
        ],
        `framer-2sY56`
      )),
      (v.displayName = `Heart`),
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
  }),
  b,
  x,
  S,
  C,
  w,
  T,
  E,
  D = e(() => {
    (n(),
      d(),
      t(),
      (b = `var(--framer-icon-mask)`),
      (x = r(function (e, t) {
        return i(`svg`, { ...e, ref: t, children: e.children });
      })),
      (S = a.create(x)),
      (C = r((e, t) => {
        let { animated: n, layoutId: r, children: a, ...o } = e;
        return n
          ? i(S, { ...o, layoutId: r, ref: t, children: a })
          : i(`svg`, { ...o, ref: t, children: a });
      })),
      (w = `<svg display="block" id="3500918179" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="16px" id="RxA5u2sRg" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" width="16px"/></svg>`),
      (T = ({ fill: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        DTFJRR839: r ?? o.DTFJRR839 ?? `rgb(136, 136, 136)`,
        pJdIdADIa: e ?? o.pJdIdADIa ?? `rgba(136, 136, 136, 0.2)`,
        XI2ObiqYx: a ?? o.XI2ObiqYx ?? 2,
      })),
      (E = c(
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
            } = T(e),
            p = u(`3500918179`, w);
          return i(C, {
            ...f,
            className: s(`framer-RbMpb`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
            viewBox: `0 0 20 20`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-RbMpb { -webkit-mask: ${b}; aspect-ratio: 1; display: block; mask: ${b}; width: 20px; }`,
        ],
        `framer-RbMpb`
      )),
      (E.displayName = `Comment`),
      o(E, {
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
  }),
  O,
  k,
  A,
  j,
  M = e(() => {
    (n(),
      d(),
      t(),
      (O = `url('data:image/svg+xml,<svg display="block" id="2552580488" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="transparent" height="20px" id="KRbLTgQAJ" width="20px"><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 1 C 18 1.552 17.552 2 17 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" height="2px" id="WfN4PM3iD" transform="translate(7 9) rotate(90 9 1)" width="18px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 L 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" height="2px" id="Ggm_zjLul" transform="translate(-1 13) rotate(90 5 1)" width="10px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 13 0 C 13.552 0 14 0.448 14 1 L 14 1 C 14 1.552 13.552 2 13 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" height="2px" id="jwgCTX8ou" transform="translate(3 11) rotate(90 7 1)" width="14px"/><path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" height="20px" id="uBGk1oNyK" width="20px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (k = r((e, t) => {
        let { animated: n, layoutId: r, children: o, ...s } = e;
        return n ? i(a.div, { ...s, layoutId: r, ref: t }) : i(`div`, { ...s, ref: t });
      })),
      (A = ({ fill: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        DTFJRR839: r ?? o.DTFJRR839 ?? `rgb(136, 136, 136)`,
        pJdIdADIa: e ?? o.pJdIdADIa ?? `rgba(136, 136, 136, 0.2)`,
        XI2ObiqYx: a ?? o.XI2ObiqYx ?? 2,
      })),
      (j = c(
        r(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: a,
            variant: o,
            DTFJRR839: c,
            pJdIdADIa: l,
            XI2ObiqYx: u,
            ...d
          } = A(e);
          return i(k, {
            ...d,
            className: s(`framer-sXMPv`, r),
            layoutId: a,
            ref: t,
            style: { "--1l3yetw": c, ...n },
          });
        }),
        [
          `.framer-sXMPv { -webkit-mask: ${O}; aspect-ratio: 1; background-color: var(--1l3yetw); mask: ${O}; width: 20px; }`,
        ],
        `framer-sXMPv`
      )),
      (j.displayName = `Chart`),
      o(j, {
        DTFJRR839: {
          defaultValue: `rgb(136, 136, 136)`,
          hidden: !1,
          title: `Stroke`,
          type: l.Color,
        },
        pJdIdADIa: {
          defaultValue: `rgba(136, 136, 136, 0.2)`,
          hidden: !0,
          title: `Fill`,
          type: l.Color,
        },
        XI2ObiqYx: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !0,
          min: 0,
          title: `Width`,
          type: l.Number,
        },
      }));
  });
export { v as a, D as i, M as n, y as o, E as r, j as t };
//# sourceMappingURL=nMYrtg_Vn.CghRKkXi.mjs.map
