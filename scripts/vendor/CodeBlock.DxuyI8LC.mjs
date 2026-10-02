import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { c as t, s as n, u as r } from "./react.hMW2PJqY.mjs";
import { V as i, r as a } from "./motion.CaZjHSpz.mjs";
import { K as o, _n as s, c, ht as l } from "./framer.CuDPj9y9.mjs";
import {
  S as u,
  _ as d,
  a as f,
  b as p,
  c as m,
  d as h,
  f as g,
  g as _,
  h as v,
  i as y,
  l as b,
  m as x,
  n as S,
  o as C,
  p as w,
  r as T,
  s as E,
  t as D,
  u as O,
  v as k,
  x as A,
  y as j,
} from "./theming.spBWWwzU.mjs";
function M() {
  return n(`div`, {
    style: { display: `contents` },
    "data-framer-css-ssr": !0,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: { __html: `<style>` + A() + `</style>` },
  });
}
var N, P, F, I, L;
e(() => {
  (t(),
    a(),
    u(),
    l(),
    _(),
    E(),
    O(),
    y(),
    (N = `// Paste a code snippet
import { motion } from "framer-motion";

function Component() {
    return (
        <motion.div
            transition={{ ease: "linear" }}
            animate={{ rotate: 360, scale: 2 }}
        />
    );
}`),
    (P = `framer-cb`),
    (F = s(
      function (e) {
        let {
            code: t,
            themeMode: a,
            theme: o,
            lightTheme: s,
            darkTheme: c,
            style: l,
            language: u,
            font: d,
            border: f,
            background: h,
          } = e,
          _ = S(d),
          y = T(a === `Dynamic` ? s : o, h, `light`),
          C = T(a === `Dynamic` ? c : o, h, `dark`),
          E = m(u),
          D = b(u)[0],
          O = w(),
          A = g(f || {}, !1),
          N = v(e),
          F = N !== `0px 0px 0px 0px` && N !== `0px`,
          I = `example.${D}`,
          L = x(e);
        return n(i.div, {
          className: P,
          whileHover: `visible`,
          style: { ...y, ...C, position: `relative`, width: `100%`, height: `100%` },
          children: n(p, {
            options: { classes: { "sp-code-editor": `cb-code-editor` } },
            theme: _,
            files: { [I]: t },
            customSetup: { entry: I },
            style: { height: `100%` },
            children: r(j, {
              style: {
                height: `100%`,
                "--sp-layout-height": `100%`,
                "--cb-padding": `${L}`,
                ...A,
                backgroundColor: `var(--sp-colors-surface1)`,
                borderRadius: N,
                transform: F && O ? `translateZ(0.000001px)` : `unset`,
                overflow: `hidden`,
              },
              children: [
                n(k, {
                  style: {
                    letterSpacing: d.letterSpacing,
                    fontStyle: d.fontStyle,
                    fontWeight: d.fontWeight,
                  },
                  readOnly: !0,
                  showReadOnly: !1,
                  additionalLanguages: E ? [E] : void 0,
                }),
                n(M, {}),
              ],
            }),
          }),
        });
      },
      [
        `
.${P} .sp-pre-placeholder {
    padding: var(--cb-padding) !important;
    padding-left: calc(var(--cb-padding) + var(--sp-space-1, 0)) !important;
    margin: 0 !important;
    width: max-content;
}
    `,
        `
.${P} .cm-scroller {
    display: unset !important;
    padding: 0 !important;
}
    `,
        `
.${P} .cm-content {
    padding: var(--cb-padding) !important;
    width: max-content;
}
    `,
        `
.${P} .sp-wrapper {
    color-scheme: var(--cb-color-scheme, inherit);
}
    `,
        `
@media screen and (max-width: 768px) {
    @supports (-webkit-overflow-scrolling: touch) {
        .framer-cb .cb-code-editor .cm-content,
        .framer-cb .cb-code-editor .sp-pre-placeholder {
            font-size: var(--sp-font-size, inherit);
            -webkit-text-size-adjust: 100%;
        }
    }
}
`,
        `
@media screen and (max-width: 768px) {
    .${P} .sp-editor-viewer.sp-stack {
        height: 100%;
    }
}
`,
        `
.${P} {
    ${f}
}
    `,
        `
body[data-framer-theme="dark"] .${P} {
    ${D}
}
    `,
        `
@media (prefers-color-scheme: dark) {
    body:not([data-framer-theme]) .${P} {
        ${D}
    }
}
    `,
        `
@supports not (color: color(display-p3 1 1 1)) {
    :root {
        --cb-custom-background: var(--cb-background-rgb)
    }
}
    `,
      ].map((e) => e.trim()),
      `framer-lib-codeblock`
    )),
    (I = C.map(h)),
    o(F, {
      code: { type: c.String, title: `Code`, displayTextArea: !0, defaultValue: N },
      themeMode: {
        type: c.Enum,
        title: `Theme`,
        displaySegmentedControl: !0,
        options: [`Static`, `Dynamic`],
        defaultValue: `Static`,
      },
      theme: {
        type: c.Enum,
        title: ` `,
        options: [...C],
        optionTitles: I,
        defaultValue: `framerDark`,
        hidden: ({ themeMode: e }) => e !== `Static`,
      },
      lightTheme: {
        type: c.Enum,
        title: `Light`,
        options: [...C],
        optionTitles: I,
        defaultValue: `framerLight`,
        hidden: ({ themeMode: e }) => e !== `Dynamic`,
      },
      darkTheme: {
        type: c.Enum,
        title: `Dark`,
        options: [...C],
        optionTitles: I,
        defaultValue: `framerDark`,
        hidden: ({ themeMode: e }) => e !== `Dynamic`,
      },
      language: { type: c.Enum, title: `Language`, options: [...d], defaultValue: `JSX` },
      font: {
        type: c.Font,
        controls: `extended`,
        displayFontSize: !0,
        displayTextAlignment: !1,
        defaultFontType: `monospace`,
        defaultValue: { fontSize: 14, lineHeight: `1.5em` },
      },
      background: { title: `Fill`, type: c.Color, optional: !0 },
      border: { type: c.Border, optional: !0 },
      borderRadius: {
        title: `Radius`,
        type: c.FusedNumber,
        toggleKey: `isMixedBorderRadius`,
        toggleTitles: [`Radius`, `Radius per corner`],
        valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
        valueLabels: [`TL`, `TR`, `BR`, `BL`],
        min: 0,
        defaultValue: 15,
      },
      padding: {
        title: `Padding`,
        type: c.FusedNumber,
        toggleKey: `paddingPerSide`,
        toggleTitles: [`Padding`, `Padding per side`],
        valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
        valueLabels: [`T`, `R`, `B`, `L`],
        min: 0,
        defaultValue: 30,
      },
    }),
    (F.displayName = `Code Block`),
    (L = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `CodeBlock`,
          slots: [],
          annotations: {
            framerSupportedLayoutWidth: `fixed`,
            framerIntrinsicHeight: `200`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `500`,
            framerSupportedLayoutHeight: `any`,
            framerComponentPresetProps: `borderRadius, border, font, themeMode, theme, lightTheme, darkTheme, background, padding`,
            framerDisableUnlink: `*`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { L as __FramerMetadata__, F as default };
//# sourceMappingURL=CodeBlock.DxuyI8LC.mjs.map
