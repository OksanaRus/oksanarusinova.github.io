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
    (g = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="16px" id="B1xT_zB1_" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" width="16px"/><path d="M 0 3.086 L 2.793 0.293 C 3.183 -0.098 3.817 -0.098 4.207 0.293 L 7 3.086 M 3.5 1.086 L 3.5 7.086" fill="transparent" height="7.085786819458008px" id="y6myV9DAS" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 6.414)" width="7px"/></svg>`),
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
          p = u(`4235864890`, g);
        return i(h, {
          ...f,
          className: s(`framer-mrJUR`, r),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
          viewBox: `0 0 20 20`,
          children: i(`use`, { href: p }),
        });
      }),
      [
        `.framer-mrJUR { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
      ],
      `framer-mrJUR`
    )),
    (v.displayName = `Publish`),
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
            framerVector: `{"name":"Publish","set":{"localId":"vectorSet/RDE0SplXp","id":"RDE0SplXp","moduleId":"zUlZcpeqPdBgQTSg3Vpg"}}`,
            framerVariables: `{"DTFJRR839":"stroke","pJdIdADIa":"fill","XI2ObiqYx":"width1"}`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerIntrinsicWidth: `20`,
            framerIntrinsicHeight: `20`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=b_CZdUyr0.6o23-zmt.mjs.map
