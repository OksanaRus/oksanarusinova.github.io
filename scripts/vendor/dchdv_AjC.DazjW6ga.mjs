import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { O as t, c as n, m as r, s as i } from "./react.hMW2PJqY.mjs";
import { V as a } from "./motion.CaZjHSpz.mjs";
import { K as o, Z as s, _n as c, c as l, dn as u, ht as d } from "./framer.CuDPj9y9.mjs";
var f, p, m, h, g, _, v, y;
e(() => {
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
    (g = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g d="M 0 0 L 20 0 L 20 20 L 0 20 Z M 1 19 C 1 18.448 1.448 18 2 18 L 18 18 C 18.552 18 19 18.448 19 19 L 19 19 C 19 19.552 18.552 20 18 20 L 2 20 C 1.448 20 1 19.552 1 19 Z M 10.621 2.136 C 11.793 0.964 13.692 0.964 14.864 2.136 L 14.864 2.136 C 16.036 3.308 16.036 5.207 14.864 6.379 L 6.964 14.278 C 6.589 14.653 6.081 14.864 5.55 14.864 L 3.136 14.864 C 2.584 14.864 2.136 14.416 2.136 13.864 L 2.136 11.45 C 2.136 10.919 2.347 10.411 2.722 10.036 Z" fill="transparent" height="20px" id="MjRrmzIjk" width="20px"><path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" height="20px" id="Gn3kAthqr" width="20px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 1 C 18 1.552 17.552 2 17 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" height="2px" id="jZTFs0P0O" transform="translate(1 18)" width="18px"/><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 14.172 C 6 14.702 5.789 15.211 5.414 15.586 L 3.707 17.293 C 3.317 17.683 2.683 17.683 2.293 17.293 L 0.586 15.586 C 0.211 15.211 0 14.702 0 14.172 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="18px" id="kImnoC2SX" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5.5 -0.5) rotate(45 3 9)" width="6px"/></g></svg>`),
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
          p = u(`1863051176`, g);
        return i(h, {
          ...f,
          className: s(`framer-0ln55`, r),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
          viewBox: `0 0 20 20`,
          children: i(`use`, { href: p }),
        });
      }),
      [
        `.framer-0ln55 { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
      ],
      `framer-0ln55`
    )),
    (v.displayName = `Write`),
    o(v, {
      DTFJRR839: { defaultValue: `rgb(136, 136, 136)`, hidden: !1, title: `Stroke`, type: l.Color },
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
    }),
    (y = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Icon`,
          slots: [],
          annotations: {
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerIntrinsicHeight: `20`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerVector: `{"name":"Write","set":{"localId":"vectorSet/RDE0SplXp","id":"RDE0SplXp","moduleId":"zUlZcpeqPdBgQTSg3Vpg"}}`,
            framerVariables: `{"DTFJRR839":"stroke","pJdIdADIa":"fill","XI2ObiqYx":"width1"}`,
            framerIntrinsicWidth: `20`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=dchdv_AjC.DazjW6ga.mjs.map
