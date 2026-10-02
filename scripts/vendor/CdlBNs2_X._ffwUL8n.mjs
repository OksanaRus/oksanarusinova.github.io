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
    (g = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g d="M 0 0 L 20 0 L 20 20 L 0 20 Z M 9.272 17.465 C 8.678 18.653 6.946 18.539 6.512 17.284 L 2.302 5.095 C 1.757 3.518 3.268 2.007 4.845 2.552 L 17.034 6.762 C 18.289 7.196 18.403 8.928 17.215 9.522 L 12.516 11.871 C 12.129 12.065 11.815 12.379 11.621 12.766 Z" fill="transparent" height="20px" id="nlSrohSU_" width="20px"><path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" height="20px" id="KsCrzTmH6" width="20px"/><path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="18.5px" id="B1gctVLSo" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(-1.5 -1.5) rotate(-45 9 9.25)" width="18px"/></g></svg>`),
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
          p = u(`473405307`, g);
        return i(h, {
          ...f,
          className: s(`framer-gOKgV`, r),
          layoutId: a,
          ref: t,
          role: `presentation`,
          style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
          viewBox: `0 0 20 20`,
          children: i(`use`, { href: p }),
        });
      }),
      [
        `.framer-gOKgV { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
      ],
      `framer-gOKgV`
    )),
    (v.displayName = `Cursor`),
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
            framerIntrinsicHeight: `20`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerVariables: `{"DTFJRR839":"stroke","pJdIdADIa":"fill","XI2ObiqYx":"width1"}`,
            framerVector: `{"name":"Cursor","set":{"localId":"vectorSet/RDE0SplXp","id":"RDE0SplXp","moduleId":"zUlZcpeqPdBgQTSg3Vpg"}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `20`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=CdlBNs2_X._ffwUL8n.mjs.map
