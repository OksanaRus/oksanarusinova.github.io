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
      (g = `<svg display="block" id="2225151273" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 5.39 0.306 C 6.032 0.042 6.732 -0.054 7.421 0.029 C 8.31 0.131 9.102 0.509 9.797 1.162 C 9.806 1.171 9.819 1.177 9.83 1.181 C 9.843 1.184 9.856 1.184 9.868 1.181 C 10.772 0.947 11.729 1.034 12.576 1.425 L 12.618 1.445 L 12.721 1.495 C 13.608 1.945 14.299 2.703 14.666 3.628 C 14.851 4.081 14.944 4.553 14.946 5.046 C 14.959 5.412 14.919 5.778 14.827 6.133 C 14.817 6.169 14.827 6.208 14.853 6.235 C 15.381 6.774 15.731 7.417 15.905 8.164 C 16.162 9.43 15.899 10.573 15.116 11.589 L 14.995 11.737 C 14.477 12.33 13.797 12.759 13.039 12.971 C 13.006 12.98 12.979 13.006 12.967 13.038 C 12.797 13.528 12.627 13.948 12.309 14.366 C 11.509 15.421 10.334 16.007 9.011 16 C 7.955 15.995 7.02 15.609 6.204 14.843 C 6.179 14.819 6.144 14.811 6.111 14.821 C 5.766 14.932 5.418 14.948 5.041 14.944 C 4.44 14.939 3.849 14.797 3.312 14.53 C 2.749 14.251 2.259 13.845 1.881 13.343 C 1.746 13.164 1.611 12.995 1.513 12.795 C 1.378 12.52 1.268 12.234 1.184 11.94 C 1.006 11.272 1.002 10.569 1.171 9.898 C 1.177 9.882 1.179 9.865 1.177 9.848 C 1.174 9.832 1.165 9.817 1.153 9.805 C 0.742 9.39 0.428 8.889 0.234 8.338 C 0.104 7.999 0.029 7.641 0.011 7.278 C -0.022 6.801 0.02 6.321 0.136 5.856 C 0.435 4.868 1.009 4.092 1.854 3.529 C 2.043 3.404 2.221 3.306 2.388 3.236 C 2.576 3.158 2.768 3.091 2.963 3.034 C 2.99 3.025 3.012 3.003 3.02 2.975 C 3.166 2.452 3.417 1.963 3.757 1.54 C 4.186 0.995 4.749 0.57 5.39 0.306 Z M 4.444 5.778 L 5.778 8 L 4.444 10.222 M 8.889 10.222 L 11.556 10.222" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" height="16px" id="CfFbo5RBd" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" width="16px"/></svg>`),
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
            p = u(`2225151273`, g);
          return i(h, {
            ...f,
            className: s(`framer-no6AS`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--17kkcf8": l, "--1iwhep7": d, "--1l3yetw": c, ...n },
            viewBox: `0 0 20 20`,
            children: i(`use`, { href: p }),
          });
        }),
        [
          `.framer-no6AS { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 20px; }`,
        ],
        `framer-no6AS`
      )),
      (v.displayName = `Codex`),
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
//# sourceMappingURL=NYTuuUufI.xPjCoikZ.mjs.map
