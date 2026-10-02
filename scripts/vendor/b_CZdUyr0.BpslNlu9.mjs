import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import { O as n, c as r, m as i, s as a } from "./react.hMW2PJqY.mjs";
import { V as o } from "./motion.CaZjHSpz.mjs";
import { K as s, Z as c, _n as l, c as u, dn as d, ht as f } from "./framer.CuDPj9y9.mjs";
var p = e({ __FramerMetadata__: () => x, default: () => b }),
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x,
  S = t(() => {
    (r(),
      f(),
      n(),
      (m = `var(--framer-icon-mask)`),
      (h = i(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (g = o.create(h)),
      (_ = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(g, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (v = `<svg display="block" id="3899503700" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="16px" id="B1xT_zB1_" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" width="16px"/><path d="M 0 3.086 L 2.793 0.293 C 3.183 -0.098 3.817 -0.098 4.207 0.293 L 7 3.086 M 3.5 1.086 L 3.5 7.086" fill="transparent" height="7.085786819458008px" id="y6myV9DAS" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 6.414)" width="7px"/></svg>`),
      (y = ({ fill: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        DTFJRR839: r ?? o.DTFJRR839 ?? `rgb(136, 136, 136)`,
        pJdIdADIa: e ?? o.pJdIdADIa ?? `rgba(136, 136, 136, 0.2)`,
        XI2ObiqYx: a ?? o.XI2ObiqYx ?? 2,
      })),
      (b = l(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              DTFJRR839: s,
              pJdIdADIa: l,
              XI2ObiqYx: u,
              ...f
            } = y(e),
            p = d(`3899503700`, v);
          return a(_, {
            ...f,
            className: c(`framer-4q6hi`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": l, "--1iwhep7": u, "--1l3yetw": s, ...n },
            viewBox: `0 0 20 20`,
            children: a(`use`, { href: p }),
          });
        }),
        [
          `.framer-4q6hi { -webkit-mask: ${m}; aspect-ratio: 1; display: block; mask: ${m}; width: 20px; }`,
        ],
        `framer-4q6hi`
      )),
      (b.displayName = `Publish`),
      s(b, {
        DTFJRR839: {
          defaultValue: `rgb(136, 136, 136)`,
          hidden: !1,
          title: `Stroke`,
          type: u.Color,
        },
        pJdIdADIa: {
          defaultValue: `rgba(136, 136, 136, 0.2)`,
          hidden: !1,
          title: `Fill`,
          type: u.Color,
        },
        XI2ObiqYx: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          min: 0,
          title: `Width`,
          type: u.Number,
        },
      }),
      (x = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Icon`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerIntrinsicHeight: `20`,
              framerVariables: `{"DTFJRR839":"stroke","pJdIdADIa":"fill","XI2ObiqYx":"width1"}`,
              framerImmutableVariables: `true`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicWidth: `20`,
              framerVector: `{"name":"Publish","set":{"localId":"vectorSet/RDE0SplXp","id":"RDE0SplXp","moduleId":"zUlZcpeqPdBgQTSg3Vpg"}}`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { p as n, S as r, b as t };
//# sourceMappingURL=b_CZdUyr0.BpslNlu9.mjs.map
