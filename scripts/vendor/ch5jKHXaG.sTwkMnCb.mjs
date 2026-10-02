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
    (g = `<svg display="block" id="2182172549" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g d="M 14 7 L 7.727 13.644 C 7.332 14.062 6.668 14.062 6.273 13.644 L 0 7 M 7 0 L 7 13.5" fill="transparent" height="13.957557554095784px" id="mE4Gq6pdY" transform="translate(3 3)" width="14px"><path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" height="7.414214134216309px" id="jzgkWR9FD" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" width="14px"/><path d="M 0 13.5 L 0 0" fill="transparent" height="13.5px" id="b4WbiSFvQ" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" width="1px"/></g></svg>`),
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
          p = u(`2182172549`, g);
        return i(h, {
          ...f,
          className: s(`framer-7vMUO`, r),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--1iwhep7": d, "--1l3yetw": c, ...n },
          viewBox: `0 0 20 20`,
          children: i(`use`, { href: p }),
        });
      }),
      [
        `.framer-7vMUO { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
      ],
      `framer-7vMUO`
    )),
    (v.displayName = `Arrow Down`),
    o(v, {
      DTFJRR839: { defaultValue: `rgb(136, 136, 136)`, hidden: !1, title: `Stroke`, type: l.Color },
      pJdIdADIa: {
        defaultValue: `rgba(136, 136, 136, 0.2)`,
        hidden: !0,
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
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerIntrinsicHeight: `20`,
            framerVariables: `{"DTFJRR839":"stroke","pJdIdADIa":"fill","XI2ObiqYx":"width1"}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerVector: `{"name":"Arrow Down","color":{"type":"variable","value":"1l3yetw"},"set":{"localId":"vectorSet/RDE0SplXp","id":"RDE0SplXp","moduleId":"zUlZcpeqPdBgQTSg3Vpg"}}`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerIntrinsicWidth: `20`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=ch5jKHXaG.sTwkMnCb.mjs.map
