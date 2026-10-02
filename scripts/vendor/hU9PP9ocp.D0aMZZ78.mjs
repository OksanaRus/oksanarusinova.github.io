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
    (g = `<svg display="block" id="3515536241" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 11 C 14 12.657 12.657 14 11 14 L 3 14 C 1.343 14 0 12.657 0 11 Z M 0.636 7 L 13.364 7 M 7 0.636 L 7 13.364" fill="transparent" height="14px" id="nLP0ehlyA" transform="translate(3 3) rotate(45 7 7)" width="14px"><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 11 C 14 12.657 12.657 14 11 14 L 3 14 C 1.343 14 0 12.657 0 11 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="14px" id="ESWflNFdW" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" width="14px"/><path d="M 0 0 L 12.728 0" fill="rgba(136, 136, 136, 0.2)" height="1px" id="HVsnIr89l" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0.636 7)" width="12.727922071652571px"/><path d="M 0 0 L 0 12.728" fill="rgba(136, 136, 136, 0.2)" height="12.727922071652529px" id="AnbORyPRa" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(7 0.636)" width="1px"/></g></svg>`),
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
          p = u(`3515536241`, g);
        return i(h, {
          ...f,
          className: s(`framer-ZBLLG`, r),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
          viewBox: `0 0 20 20`,
          children: i(`use`, { href: p }),
        });
      }),
      [
        `.framer-ZBLLG { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
      ],
      `framer-ZBLLG`
    )),
    (v.displayName = `Component`),
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
            framerImmutableVariables: `true`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerVector: `{"name":"Component","set":{"localId":"vectorSet/RDE0SplXp","id":"RDE0SplXp","moduleId":"zUlZcpeqPdBgQTSg3Vpg"}}`,
            framerIntrinsicHeight: `20`,
            framerContractVersion: `1`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerIntrinsicWidth: `20`,
            framerVariables: `{"DTFJRR839":"stroke","pJdIdADIa":"fill","XI2ObiqYx":"width1"}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=hU9PP9ocp.D0aMZZ78.mjs.map
